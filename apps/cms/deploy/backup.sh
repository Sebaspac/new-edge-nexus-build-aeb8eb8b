#!/usr/bin/env bash
# ============================================================================
# NEWEDGE — Backup (Postgres-Dump + Uploads), behält die letzten 14 Stände.
#   sudo ./deploy/backup.sh
# Als täglichen Cron einrichten (3 Uhr):
#   echo '0 3 * * * root /opt/newedge/cms/deploy/backup.sh >/var/log/newedge-backup.log 2>&1' \
#     > /etc/cron.d/newedge-backup
# ============================================================================
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CMS_DIR="$(dirname "$SCRIPT_DIR")"
BACKUP_DIR="/opt/newedge/backups"
STAMP="$(date +%F_%H%M)"
KEEP=14

mkdir -p "$BACKUP_DIR"
cd "$CMS_DIR"

# Datenbank
docker compose exec -T postgres pg_dump -U strapi strapi | gzip > "$BACKUP_DIR/db-$STAMP.sql.gz"

# Uploads (Volume-Name = <projektordner>_uploads)
VOL="$(basename "$CMS_DIR")_uploads"
docker run --rm -v "$VOL":/u -v "$BACKUP_DIR":/out alpine \
  tar czf "/out/uploads-$STAMP.tar.gz" -C /u . 2>/dev/null

# Rotation
ls -1t "$BACKUP_DIR"/db-*.sql.gz      2>/dev/null | tail -n +$((KEEP+1)) | xargs -r rm --
ls -1t "$BACKUP_DIR"/uploads-*.tar.gz 2>/dev/null | tail -n +$((KEEP+1)) | xargs -r rm --

echo "✔ Backup: $BACKUP_DIR/db-$STAMP.sql.gz + uploads-$STAMP.tar.gz (behalte $KEEP)"
