#!/usr/bin/env bash
# ============================================================================
# NEWEDGE — One-Command-Server-Setup (Monorepo: Website + CMS + Lead-Service)
# ----------------------------------------------------------------------------
#   sudo ./apps/cms/deploy/setup.sh <domain> [tls-email]
#   z. B.: sudo ./apps/cms/deploy/setup.sh newedgebrand.com admin@newedgebrand.com
#
# Das Skript läuft AUS dem Monorepo heraus — EIN Klon genügt für alles:
#   apps/website/   Vite+React  → Build landet in /var/www/newedgebrand/dist
#   apps/cms/       Strapi 5 + Postgres (docker compose; hier liegt dieses Skript)
#   apps/lead-api/  FastAPI: Kontaktformular + ROI-Report (Container im selben Stack)
# Kein separater Website-Klon mehr: was hier gebaut wird, ist exakt der Stand,
# aus dem das Skript selbst stammt — kein zweiter Checkout, der wegdriften kann.
#
# Macht auf einem frischen Ubuntu/Debian-Server ALLES:
#   1. Docker, nginx, git, rsync, Node 22 installieren (falls fehlend)
#   2. .env-Dateien anlegen: CMS-Secrets frisch generiert, Lead-Service aus der
#      Vorlage — bestehende .env-Dateien werden NIE überschrieben
#   3. Stack bauen & starten (Postgres + Strapi + Lead-Service, Erststart mit Seed)
#   4. Website aus apps/website bauen und nach /var/www ausrollen
#   5. nginx konfigurieren (Same-Origin: Website + CMS + Formulare auf einer Domain)
#   6. TLS via certbot (wenn E-Mail übergeben)
# Idempotent: erneuter Lauf aktualisiert, statt zu zerstören.
#
# Update-Lauf: im Monorepo `git pull`, danach dieses Skript erneut aufrufen.
# (Das Skript zieht bewusst NICHT selbst — es würde sich sonst mitten im Lauf
# unter den eigenen Füßen austauschen.)
# ============================================================================
set -euo pipefail

# ── Parameter ────────────────────────────────────────────────────────────────
DOMAIN="${1:-}"
TLS_EMAIL="${2:-}"
[ -z "$DOMAIN" ] && { echo "Usage: sudo $0 <domain> [tls-email]"; exit 1; }
[ "$(id -u)" -eq 0 ] || { echo "Bitte mit sudo ausführen."; exit 1; }

# Die Domain landet in sed-Ersetzungen, nginx-Config und certbot-Aufrufen —
# deshalb einmal prüfen, statt Sonderzeichen durchzureichen.
case "$DOMAIN" in
  *[!a-zA-Z0-9.-]*|-*|.*|*.|*-) echo "Ungültige Domain: $DOMAIN"; exit 1 ;;
esac

# ── Pfade (alle relativ zum Skript — das Skript liegt im Monorepo) ───────────
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"  # apps/cms/deploy
CMS_DIR="$(dirname "$SCRIPT_DIR")"                          # apps/cms  (docker-compose.yml + .env)
APPS_DIR="$(dirname "$CMS_DIR")"                            # apps/
REPO_ROOT="$(dirname "$APPS_DIR")"                          # Monorepo-Wurzel
WEB_DIR="$APPS_DIR/website"                                 # Vite-Quellen (../../website)
LEAD_DIR="$APPS_DIR/lead-api"                               # FastAPI-Quellen
WEB_ROOT="/var/www/newedgebrand"                            # Ausrollziel des fertigen Builds

say()  { printf '\033[1;35m▸ %s\033[0m\n' "$*"; }
ok()   { printf '\033[1;32m✔ %s\033[0m\n' "$*"; }
warn() { printf '\033[1;33m⚠ %s\033[0m\n' "$*"; }

# ── 0. Vorab-Checks ──────────────────────────────────────────────────────────
say "Vorab-Checks"

# Monorepo-Layout: das Skript baut ausschließlich Geschwister-Ordner. Fehlt einer,
# wurde das deploy/-Verzeichnis aus dem Repo herausgelöst — dann lieber sofort
# abbrechen als halb ausrollen.
[ -f "$WEB_DIR/package.json" ] || {
  echo "apps/website nicht gefunden (erwartet: $WEB_DIR)."
  echo "Dieses Skript muss aus einem vollständigen Monorepo-Klon laufen."
  exit 1
}
[ -f "$LEAD_DIR/.env.example" ] || {
  echo "apps/lead-api nicht gefunden (erwartet: $LEAD_DIR)."
  echo "Dieses Skript muss aus einem vollständigen Monorepo-Klon laufen."
  exit 1
}
ok "Monorepo erkannt → $REPO_ROOT"

MEM_MB=$(free -m | awk '/^Mem:/{print $2}')
[ "$MEM_MB" -lt 1900 ] && warn "Nur ${MEM_MB} MB RAM — Admin- und Vite-Build brauchen ~2 GB (Swap empfohlen)."

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
  # umask VOR dem Schreiben: `cat > .env` legt die Datei sonst zuerst mit 0644 an
  # und erst danach greift chmod — auf einem Server mit mehreren Logins ein
  # offenes Fenster auf sämtliche Strapi-Secrets und das DB-Passwort.
  # Subshell, damit die umask nicht im restlichen Skript weiterwirkt (sonst
  # entstünde /var/www/... mit 0700 und nginx könnte die Website nicht lesen).
  ( umask 077
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
  )
  chmod 600 .env
  ok ".env erzeugt (Secrets frisch generiert, chmod 600)"
else
  ok ".env existiert — wird nicht überschrieben"
fi

# ── 2b. Lead-Service-Env (.env) — nur beim ersten Lauf ───────────────────────
# Kontaktformular + ROI-Report. Die Vorlage wird 1:1 übernommen, nur drei Werte
# setzt das Skript passend zur Domain bzw. sicherheitshalber:
#   ALLOWED_ORIGINS         → diese Domain (Vorlage kennt sie nicht)
#   SEND_DISABLED=1         → Testmodus, bis SMTP-Zugangsdaten eingetragen sind.
#                             Sonst quittiert jedes Formular mit 502 „mail_failed",
#                             weil in der Vorlage nur ein SMTP_PASS-Platzhalter steht.
#                             Im Testmodus werden Leads normal gespeichert.
#   FOLLOWUP_UNSUBSCRIBE_BASE → diese Domain. nginx proxied /abmelden/<token>
#                             seit der Stack-Zusammenlegung mit an den Lead-Service
#                             (eigener location-Block in nginx.conf), der Abmeldelink
#                             funktioniert also auf der Hauptdomain. Wichtig: dieser
#                             Pfad steht in versendeten Mails und darf sich später
#                             nicht mehr ändern.
LEAD_ENV_NEW=0
if [ ! -f "$LEAD_DIR/.env" ]; then
  say "Lead-Service-Env anlegen → apps/lead-api/.env (aus .env.example)"
  # umask + sofortiges chmod, danach erst sed: die Datei bekommt gleich das
  # SMTP-Passwort, sie darf nie auch nur kurz 0644 sein. (GNU sed -i übernimmt
  # die Rechte der Originaldatei, das chmod hält also.)
  ( umask 077
    {
      echo "# Erzeugt von deploy/setup.sh für $DOMAIN."
      echo "# SMTP_PASS eintragen und SEND_DISABLED=0 setzen, sonst geht keine Mail raus."
      echo
      cat "$LEAD_DIR/.env.example"
    } > "$LEAD_DIR/.env"
  )
  chmod 600 "$LEAD_DIR/.env"
  sed -i \
    -e "s|^ALLOWED_ORIGINS=.*|ALLOWED_ORIGINS=https://$DOMAIN,https://www.$DOMAIN|" \
    -e "s|^SEND_DISABLED=.*|SEND_DISABLED=1|" \
    -e "s|^FOLLOWUP_UNSUBSCRIBE_BASE=.*|FOLLOWUP_UNSUBSCRIBE_BASE=https://$DOMAIN|" \
    "$LEAD_DIR/.env"
  chmod 600 "$LEAD_DIR/.env"
  LEAD_ENV_NEW=1
  ok "apps/lead-api/.env erzeugt (chmod 600) — SMTP-Zugangsdaten fehlen noch"
else
  ok "apps/lead-api/.env existiert — wird nicht überschrieben"
fi
# Ablage für Leads, PDFs und Follow-up-Warteschlange (Bind-Mount des Containers).
# 0700: hier liegen Name, E-Mail und Firma echter Interessenten. Ohne chmod wäre
# der Ordner 0755 und jeder Shell-Login auf dem Server könnte mitlesen. Der
# Container läuft als root und kommt trotzdem rein.
mkdir -p "$LEAD_DIR/data"
chmod 700 "$LEAD_DIR/data"

# ── 3. Stack starten: Postgres + Strapi + Lead-Service (Erststart mit Seed) ──
# Alle Dienste hängen in EINEM Compose-Projekt (apps/cms/docker-compose.yml):
# postgres, strapi und lead-api. `docker compose up` startet sie deshalb gemeinsam.
# Volume-Präfix = Compose-Projektname = Ordnername von apps/cms ("cms") —
# genauso rechnet backup.sh. ACHTUNG bei Migration von der alten Einzel-Codebasis:
# deren Volumes hießen nach dem alten Ordner; unter dem neuen Namen startet der
# Stack mit LEEREM Datenstand (Seed). Alte Daten vorher per backup.sh sichern
# und einspielen.
FIRST_RUN=0
docker volume inspect "$(basename "$CMS_DIR")_pgdata" >/dev/null 2>&1 || FIRST_RUN=1
if [ "$FIRST_RUN" -eq 1 ]; then
  say "Erststart: Build + Content-Seed (dauert einige Minuten)"
  SEED=1 docker compose up -d --build
else
  say "Stack aktualisieren (ohne Seed — redaktionelle Inhalte bleiben)"
  docker compose up -d --build
fi

say "Warte auf Strapi-Healthcheck …"
for i in $(seq 1 60); do
  if curl -sf -o /dev/null http://127.0.0.1:1337/_health; then ok "Strapi läuft"; break; fi
  [ "$i" -eq 60 ] && { warn "Strapi nicht healthy — Logs: docker compose logs strapi"; exit 1; }
  sleep 5
done
if [ "$FIRST_RUN" -eq 1 ]; then
  # Logs erst einsammeln, dann prüfen: `… | grep -q` würde den Erzeuger per
  # SIGPIPE abwürgen und unter `set -o pipefail` einen Fehlalarm auslösen.
  SEED_LOG="$(docker compose logs strapi 2>/dev/null || true)"
  if grep -q "\[seed\] DONE" <<<"$SEED_LOG"; then
    ok "Content-Seed abgeschlossen"
  else
    warn "Seed-Marker nicht gefunden — bitte Logs prüfen (docker compose logs strapi | grep seed)"
  fi
fi

# Lead-Service: nur prüfen, wenn der Compose-Service auch existiert — so bleibt
# das Skript benutzbar, falls jemand mit einem älteren docker-compose.yml arbeitet.
LEAD_UP=0
COMPOSE_SERVICES="$(docker compose config --services 2>/dev/null || true)"
if grep -qx "lead-api" <<<"$COMPOSE_SERVICES"; then
  say "Warte auf Lead-Service-Healthcheck …"
  for i in $(seq 1 24); do
    if curl -sf -o /dev/null http://127.0.0.1:8090/health; then
      LEAD_UP=1; ok "Lead-Service läuft (Kontaktformular + ROI-Report)"; break
    fi
    sleep 5
  done
  # Kein Abbruch: die Website funktioniert auch ohne den Service, nur die
  # Formulare nicht. Lieber fertig ausrollen und hier deutlich warnen.
  [ "$LEAD_UP" -eq 1 ] || warn "Lead-Service nicht erreichbar — Logs: docker compose logs lead-api"
else
  warn "Compose-Service 'lead-api' fehlt in apps/cms/docker-compose.yml — Formulare bleiben tot."
fi

# ── 4. Website bauen & ausrollen ─────────────────────────────────────────────
# Gebaut wird apps/website aus DIESEM Checkout — kein zweiter Klon.

# .env.production nur anlegen, wenn sie fehlt (Supabase-Public-Keys für
# /unsubscribe stehen in der eingecheckten Vorlage). Eine vorhandene Datei
# bleibt unangetastet — sie kann händisch angepasst worden sein.
if [ ! -f "$WEB_DIR/.env.production" ]; then
  say "Website-Produktions-Env anlegen → apps/website/.env.production"
  # Erst in eine Temp-Datei, dann umbenennen. `sed … > .env.production` würde die
  # Zieldatei ANLEGEN, bevor sed überhaupt läuft — schlägt sed fehl (Vorlage weg,
  # Platte voll), bliebe eine LEERE .env.production zurück. Der Zweig darüber
  # würde sie beim nächsten Lauf als „existiert schon" durchwinken, und die
  # Supabase-Keys für /unsubscribe wären dauerhaft weg.
  if ! sed -e "s|^VITE_STRAPI_URL=.*|VITE_STRAPI_URL=https://$DOMAIN|" \
           -e "s|^VITE_API_URL=.*|VITE_API_URL=https://$DOMAIN|" \
           "$WEB_DIR/.env.production.example" > "$WEB_DIR/.env.production.tmp"; then
    rm -f "$WEB_DIR/.env.production.tmp"
    echo "Konnte .env.production nicht erzeugen — fehlt apps/website/.env.production.example?"
    exit 1
  fi
  mv -f "$WEB_DIR/.env.production.tmp" "$WEB_DIR/.env.production"
  ok ".env.production erzeugt (Domain eingesetzt)"
else
  ok ".env.production existiert — wird nicht überschrieben"
fi

say "Website bauen (npm ci + vite build)"
# Die beiden URLs werden dem Build zusätzlich inline mitgegeben: Vite priorisiert
# VITE_*-Variablen aus der Umgebung über .env/.env.production. Damit passt der
# Build auch dann zur übergebenen Domain, wenn eine ältere .env.production
# herumliegt — sonst zeigen Formulare und CMS-Abfragen ins Leere.
#   VITE_STRAPI_URL → Same-Origin, nginx proxied /api, /uploads, /admin an Strapi
#   VITE_API_URL    → Lead-Service, nginx proxied /contact und /roi-report
(
  cd "$WEB_DIR"
  npm ci --silent
  VITE_STRAPI_URL="https://$DOMAIN" \
  VITE_API_URL="https://$DOMAIN" \
  npm run build >/dev/null
)

# Guards vor dem rsync --delete: nur ein echtes Build-Ergebnis darf ausgerollt
# werden, und das Ziel muss der erwartete /var/www-Pfad sein.
[ -f "$WEB_DIR/dist/index.html" ] || { warn "Build ohne dist/index.html — nichts ausgerollt."; exit 1; }
case "$WEB_ROOT" in
  /var/www/?*) ;;
  *) warn "WEB_ROOT unerwartet ($WEB_ROOT) — Abbruch vor rsync --delete."; exit 1 ;;
esac
mkdir -p "$WEB_ROOT/dist"
rsync -a --delete "$WEB_DIR/dist/" "$WEB_ROOT/dist/"
ok "Website ausgerollt → $WEB_ROOT/dist"

# ── 5. nginx ────────────────────────────────────────────────────────────────
say "nginx konfigurieren"
NGINX_SITE=/etc/nginx/sites-available/newedge.conf

# WICHTIG für den zweiten Lauf: certbot --nginx schreibt seine TLS-Direktiven
# (listen 443 ssl, ssl_certificate, HTTP→HTTPS-Redirect) DIREKT in genau diese
# Datei. Sie stumpf zu überschreiben hieße: nach jedem Update-Lauf ist HTTPS weg
# — und wenn dabei keine TLS-E-Mail übergeben wurde, bleibt es weg. Deshalb
# merken, ob TLS drin war, Backup ziehen und unten wieder einhängen.
TLS_WAS_ACTIVE=0
NGINX_BACKUP=""
if [ -f "$NGINX_SITE" ] && grep -q "ssl_certificate" "$NGINX_SITE"; then
  TLS_WAS_ACTIVE=1
  NGINX_BACKUP="$NGINX_SITE.bak-$(date +%Y%m%d-%H%M%S)"
  cp -a "$NGINX_SITE" "$NGINX_BACKUP"
  warn "Bestehende TLS-Config gesichert → $NGINX_BACKUP"
fi

sed -e "s/newedgebrand\.com/$DOMAIN/g" \
    -e "s|/var/www/newedgebrand/dist|$WEB_ROOT/dist|g" \
    "$SCRIPT_DIR/nginx.conf" > "$NGINX_SITE"
ln -sf "$NGINX_SITE" /etc/nginx/sites-enabled/newedge.conf
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl reload nginx
ok "nginx aktiv (HTTP)"

# ── 6. TLS (optional, wenn E-Mail übergeben) ────────────────────────────────
if [ -n "$TLS_EMAIL" ]; then
  say "TLS via certbot"
  apt-get install -y -qq certbot python3-certbot-nginx >/dev/null
  # --keep-until-expiring: ohne das bricht certbot beim ZWEITEN Lauf ab, weil
  #   das Zertifikat noch gültig ist und es im --non-interactive-Modus nicht
  #   nachfragen darf.
  # Kein `&& ok …` mehr: unter `set -e` hätte ein certbot-Fehler das Skript hier
  #   beendet — die offenen SMTP-Handgriffe am Ende wären nie ausgegeben worden.
  if certbot --nginx --non-interactive --agree-tos --keep-until-expiring \
       -m "$TLS_EMAIL" -d "$DOMAIN" -d "www.$DOMAIN" --redirect; then
    ok "HTTPS aktiv (Auto-Renewal via systemd-Timer)"
  else
    warn "certbot fehlgeschlagen — die Seite läuft GERADE NUR ÜBER HTTP."
    echo "    Manuell nachziehen: certbot --nginx -d $DOMAIN -d www.$DOMAIN --redirect"
    [ -n "$NGINX_BACKUP" ] && echo "    Vorherige (funktionierende) Config: $NGINX_BACKUP"
  fi
elif [ "$TLS_WAS_ACTIVE" -eq 1 ]; then
  # Re-Run ohne TLS-E-Mail: HTTPS lief vorher, unsere frisch geschriebene Config
  # kann es aber noch nicht. `certbot install` hängt das VORHANDENE Zertifikat
  # wieder ein — kein ACME-Call, keine E-Mail, kein Rate-Limit-Risiko.
  say "TLS wieder einhängen (Zertifikat ist schon da)"
  if command -v certbot >/dev/null 2>&1 &&
     certbot install --nginx --non-interactive --cert-name "$DOMAIN" --redirect; then
    ok "HTTPS wiederhergestellt"
  else
    warn "TLS konnte NICHT wieder eingehängt werden — HTTPS ist JETZT AUS!"
    echo "    Sofort: certbot --nginx -d $DOMAIN -d www.$DOMAIN --redirect"
    [ -n "$NGINX_BACKUP" ] && echo "    Notfall-Rückfall: cp $NGINX_BACKUP $NGINX_SITE && nginx -t && systemctl reload nginx"
  fi
else
  warn "Kein TLS-E-Mail übergeben — HTTPS später aktivieren mit:"
  echo "    certbot --nginx -d $DOMAIN -d www.$DOMAIN"
fi

# ── Fertig ───────────────────────────────────────────────────────────────────
echo
ok "SETUP KOMPLETT"
cat <<EOF

  Website:      https://$DOMAIN
  CMS-Admin:    https://$DOMAIN/admin   ← beim ersten Aufruf Admin-Benutzer anlegen!
  Health CMS:   curl -s -o /dev/null -w '%{http_code}' http://127.0.0.1:1337/_health  (→ 204)
  Health Leads: curl -s http://127.0.0.1:8090/health

  Updates:      git pull im Monorepo, danach dieses Skript erneut
                (oder sudo ./apps/cms/deploy/update.sh website | cms | all)
  Backups:      sudo ./apps/cms/deploy/backup.sh   (Cron-Zeile am Ende der Ausgabe)
EOF

# Offene Handgriffe, die das Skript nicht erledigen kann — bewusst zum Schluss,
# damit sie nicht zwischen den Build-Logs untergehen.
#
# Gemeldet wird der TATSÄCHLICHE Stand der Datei, nicht nur „gerade neu angelegt".
# Sonst verschwindet die Warnung ab dem zweiten Lauf, und ein Server kann
# monatelang im Testmodus stehen: die Formulare antworten mit HTTP 200, die Leads
# landen in leads.jsonl — aber weder Interessent noch Team bekommen je eine Mail.
LEAD_TESTMODE=0
if [ -f "$LEAD_DIR/.env" ]; then
  grep -qE '^[[:space:]]*SEND_DISABLED=1'   "$LEAD_DIR/.env" && LEAD_TESTMODE=1
  grep -qE '^[[:space:]]*SMTP_PASS=xxxx'    "$LEAD_DIR/.env" && LEAD_TESTMODE=1
  grep -qE '^[[:space:]]*SMTP_PASS=[[:space:]]*$' "$LEAD_DIR/.env" && LEAD_TESTMODE=1
fi

if [ "$LEAD_TESTMODE" -eq 1 ]; then
  echo
  warn "Lead-Service läuft im TESTMODUS — Formulare antworten OK, es geht keine Mail raus."
  [ "$LEAD_ENV_NEW" -eq 0 ] && warn "(Das steht schon seit einem früheren Lauf so in apps/lead-api/.env.)"
  cat <<EOF

  1) SMTP-Zugangsdaten eintragen:  \$EDITOR $LEAD_DIR/.env
     SMTP_PASS=<App-Passwort>  ·  SEND_DISABLED=0
  2) Optional: Leads zusätzlich im CMS sichtbar machen — API-Token im Strapi-Admin
     anlegen (Rechte: nur Lead → create) und STRAPI_URL/STRAPI_TOKEN in derselben
     Datei setzen.
  3) Übernehmen:  cd $CMS_DIR && docker compose up -d lead-api
EOF
fi
