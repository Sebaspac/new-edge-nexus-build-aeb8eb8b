#!/usr/bin/env bash
# ============================================================================
# NEWEDGE — One-Command-Server-Setup (Website + CMS)
# ----------------------------------------------------------------------------
#   sudo ./deploy/setup.sh <domain> [tls-email]
#   z. B.: sudo ./deploy/setup.sh newedgebrand.com admin@newedgebrand.com
#
# Macht auf einem frischen Ubuntu/Debian-Server ALLES:
#   1. Docker, nginx, git, rsync, Node 22 installieren (falls fehlend)
#   2. .env mit frisch generierten Secrets erzeugen (nur beim ersten Lauf)
#   3. CMS-Stack bauen & starten (Postgres + Strapi, Erststart mit Content-Seed)
#   4. Website klonen, bauen, nach /var/www ausrollen
#   5. nginx konfigurieren (Same-Origin: Website + CMS auf einer Domain)
#   6. TLS via certbot (wenn E-Mail übergeben)
# Idempotent: erneuter Lauf aktualisiert, statt zu zerstören.
# ============================================================================
set -euo pipefail

# ── Parameter ────────────────────────────────────────────────────────────────
DOMAIN="${1:-}"
TLS_EMAIL="${2:-}"
[ -z "$DOMAIN" ] && { echo "Usage: sudo $0 <domain> [tls-email]"; exit 1; }
[ "$(id -u)" -eq 0 ] || { echo "Bitte mit sudo ausführen."; exit 1; }

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CMS_DIR="$(dirname "$SCRIPT_DIR")"
WEB_REPO="https://github.com/Sebaspac/new-edge-nexus-build-aeb8eb8b.git"
WEB_BRANCH="redesign-cms-2026-07"
WEB_DIR="/opt/newedge/website"
WEB_ROOT="/var/www/newedgebrand"

say()  { printf '\033[1;35m▸ %s\033[0m\n' "$*"; }
ok()   { printf '\033[1;32m✔ %s\033[0m\n' "$*"; }
warn() { printf '\033[1;33m⚠ %s\033[0m\n' "$*"; }

# ── 0. Vorab-Checks ──────────────────────────────────────────────────────────
say "Vorab-Checks"
MEM_MB=$(free -m | awk '/^Mem:/{print $2}')
[ "$MEM_MB" -lt 1900 ] && warn "Nur ${MEM_MB} MB RAM — Admin-Build braucht ~2 GB (Swap empfohlen)."

# ── 1. Pakete ────────────────────────────────────────────────────────────────
say "Basis-Pakete installieren"
export DEBIAN_FRONTEND=noninteractive
apt-get update -qq
apt-get install -y -qq git rsync curl nginx ca-certificates >/dev/null

if ! command -v docker >/dev/null 2>&1; then
  say "Docker installieren"
  curl -fsSL https://get.docker.com | sh >/dev/null
fi
ok "Docker $(docker --version | cut -d' ' -f3 | tr -d ',')"

if ! command -v node >/dev/null 2>&1 || [ "$(node -e 'console.log(process.versions.node.split(".")[0])')" -lt 20 ]; then
  say "Node 22 installieren (NodeSource)"
  curl -fsSL https://deb.nodesource.com/setup_22.x | bash - >/dev/null
  apt-get install -y -qq nodejs >/dev/null
fi
ok "Node $(node -v)"

# ── 2. CMS-Secrets (.env) — nur beim ersten Lauf ─────────────────────────────
cd "$CMS_DIR"
if [ ! -f .env ]; then
  say "Secrets generieren → .env"
  gen() { openssl rand -base64 32 | tr -d '\n'; }
  cat > .env <<EOF
HOST=0.0.0.0
PORT=1337
APP_KEYS="$(gen),$(gen),$(gen),$(gen)"
API_TOKEN_SALT=$(gen)
ADMIN_JWT_SECRET=$(gen)
TRANSFER_TOKEN_SALT=$(gen)
JWT_SECRET=$(gen)
ENCRYPTION_KEY=$(gen)
PUBLIC_URL=https://$DOMAIN
IS_PROXIED=true
DATABASE_NAME=strapi
DATABASE_USERNAME=strapi
DATABASE_PASSWORD=$(gen)
CORS_ORIGINS=https://$DOMAIN,https://www.$DOMAIN
EOF
  chmod 600 .env
  ok ".env erzeugt (Secrets frisch generiert, chmod 600)"
else
  ok ".env existiert — wird nicht überschrieben"
fi

# ── 3. CMS-Stack starten (Erststart mit Seed) ────────────────────────────────
FIRST_RUN=0
docker volume inspect "$(basename "$CMS_DIR")_pgdata" >/dev/null 2>&1 || FIRST_RUN=1
if [ "$FIRST_RUN" -eq 1 ]; then
  say "CMS-Erststart: Build + Content-Seed (dauert einige Minuten)"
  SEED=1 docker compose up -d --build
else
  say "CMS aktualisieren (ohne Seed — redaktionelle Inhalte bleiben)"
  docker compose up -d --build
fi

say "Warte auf Strapi-Healthcheck …"
for i in $(seq 1 60); do
  if curl -sf -o /dev/null http://127.0.0.1:1337/_health; then ok "Strapi läuft"; break; fi
  [ "$i" -eq 60 ] && { warn "Strapi nicht healthy — Logs: docker compose logs strapi"; exit 1; }
  sleep 5
done
if [ "$FIRST_RUN" -eq 1 ]; then
  docker compose logs strapi 2>/dev/null | grep -q "\[seed\] DONE" \
    && ok "Content-Seed abgeschlossen" \
    || warn "Seed-Marker nicht gefunden — bitte Logs prüfen (docker compose logs strapi | grep seed)"
fi

# ── 4. Website bauen & ausrollen ─────────────────────────────────────────────
say "Website klonen/aktualisieren ($WEB_BRANCH)"
if [ -d "$WEB_DIR/.git" ]; then
  git -C "$WEB_DIR" fetch -q origin && git -C "$WEB_DIR" checkout -q "$WEB_BRANCH" && git -C "$WEB_DIR" pull -q
else
  mkdir -p "$(dirname "$WEB_DIR")"
  git clone -q --branch "$WEB_BRANCH" "$WEB_REPO" "$WEB_DIR"
fi

say "Website-Produktions-Env schreiben"
# Supabase-Public-Keys aus der eingecheckten Vorlage übernehmen, CMS-URL setzen
grep '^VITE_SUPABASE' "$WEB_DIR/.env.production.example" > "$WEB_DIR/.env.production"
echo "VITE_STRAPI_URL=https://$DOMAIN" >> "$WEB_DIR/.env.production"

say "Website bauen (npm ci + vite build)"
( cd "$WEB_DIR" && npm ci --silent && npm run build >/dev/null )
mkdir -p "$WEB_ROOT"
rsync -a --delete "$WEB_DIR/dist/" "$WEB_ROOT/dist/"
ok "Website ausgerollt → $WEB_ROOT/dist"

# ── 5. nginx ────────────────────────────────────────────────────────────────
say "nginx konfigurieren"
sed -e "s/newedgebrand\.com/$DOMAIN/g" \
    -e "s|/var/www/newedgebrand/dist|$WEB_ROOT/dist|g" \
    "$SCRIPT_DIR/nginx.conf" > /etc/nginx/sites-available/newedge.conf
ln -sf /etc/nginx/sites-available/newedge.conf /etc/nginx/sites-enabled/newedge.conf
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl reload nginx
ok "nginx aktiv (HTTP)"

# ── 6. TLS (optional, wenn E-Mail übergeben) ────────────────────────────────
if [ -n "$TLS_EMAIL" ]; then
  say "TLS via certbot"
  apt-get install -y -qq certbot python3-certbot-nginx >/dev/null
  certbot --nginx --non-interactive --agree-tos -m "$TLS_EMAIL" \
    -d "$DOMAIN" -d "www.$DOMAIN" --redirect && ok "HTTPS aktiv (Auto-Renewal via systemd-Timer)"
else
  warn "Kein TLS-E-Mail übergeben — HTTPS später aktivieren mit:"
  echo "    certbot --nginx -d $DOMAIN -d www.$DOMAIN"
fi

# ── Fertig ───────────────────────────────────────────────────────────────────
echo
ok "SETUP KOMPLETT"
cat <<EOF

  Website:    https://$DOMAIN
  CMS-Admin:  https://$DOMAIN/admin   ← beim ersten Aufruf Admin-Benutzer anlegen!
  Health:     curl -s -o /dev/null -w '%{http_code}' http://127.0.0.1:1337/_health  (→ 204)

  Updates:    sudo ./deploy/update.sh website | cms | all
  Backups:    sudo ./deploy/backup.sh   (Cron-Zeile am Ende der Ausgabe)
EOF
