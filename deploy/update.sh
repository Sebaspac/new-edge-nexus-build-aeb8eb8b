#!/usr/bin/env bash
# ============================================================================
# NEWEDGE — Update-Skript
#   sudo ./deploy/update.sh website   → Website: pull, build, ausrollen
#   sudo ./deploy/update.sh cms       → CMS: pull, Image neu bauen, neu starten
#   sudo ./deploy/update.sh all       → beides
#   sudo ./deploy/update.sh reseed    → CMS-Content aus Code neu einspielen
#                                       (ÜBERSCHREIBT redaktionelle Änderungen!)
# ============================================================================
set -euo pipefail

MODE="${1:-}"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CMS_DIR="$(dirname "$SCRIPT_DIR")"
WEB_DIR="/opt/newedge/website"
WEB_ROOT="/var/www/newedgebrand"

say() { printf '\033[1;35m▸ %s\033[0m\n' "$*"; }
ok()  { printf '\033[1;32m✔ %s\033[0m\n' "$*"; }

update_website() {
  say "Website: pull + build"
  git -C "$WEB_DIR" pull -q
  ( cd "$WEB_DIR" && npm ci --silent && npm run build >/dev/null )
  rsync -a --delete "$WEB_DIR/dist/" "$WEB_ROOT/dist/"
  ok "Website aktualisiert"
}

update_cms() {
  say "CMS: pull + rebuild (ohne Seed — Inhalte bleiben)"
  git -C "$CMS_DIR" pull -q
  ( cd "$CMS_DIR" && docker compose up -d --build )
  ok "CMS aktualisiert"
}

reseed_cms() {
  echo "⚠  RESEED überschreibt ALLE redaktionellen CMS-Änderungen mit dem Code-Stand."
  read -r -p "   Fortfahren? Tippe 'RESEED': " CONFIRM
  [ "$CONFIRM" = "RESEED" ] || { echo "Abgebrochen."; exit 1; }
  say "Backup vor Reseed"
  "$SCRIPT_DIR/backup.sh"
  say "Reseed"
  git -C "$CMS_DIR" pull -q
  ( cd "$CMS_DIR" && SEED=1 docker compose up -d --build )
  ok "Reseed gestartet — Logs: docker compose logs -f strapi"
}

case "$MODE" in
  website) update_website ;;
  cms)     update_cms ;;
  all)     update_cms; update_website ;;
  reseed)  reseed_cms ;;
  *) echo "Usage: sudo $0 {website|cms|all|reseed}"; exit 1 ;;
esac
