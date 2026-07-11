# NEWEDGE — Server-Deployment (Website + CMS)

Runbook für das Produktions-Setup auf einem eigenen Server (Ubuntu/Debian
angenommen). Ergebnis: statische Website + live editierbares Strapi-CMS
(Texte **und** Bilder) unter einer Domain.

---

## Architektur

```
                         ┌──────────────────────────────┐
Browser ── HTTPS ──▶ nginx                              │
                         │  /            → dist/ (statische Website, Vite-Build)
                         │  /api, /uploads, /admin, …  → 127.0.0.1:1337
                         └──────────────┬───────────────┘
                                        │
                              docker compose
                         ┌──────────────┴───────────────┐
                         │  strapi  (Node 22, Port 1337)│
                         │  postgres 16 (Volume pgdata) │
                         │  uploads-Volume              │
                         └──────────────────────────────┘
```

**Same-Origin-Prinzip:** Website und CMS teilen sich die Domain. nginx proxied
die CMS-Pfade (identisch zum Dev-Proxy in `vite.config.ts` der Website) an
Strapi. Dadurch: kein CORS, hochgeladene Bilder (`/uploads/...`) funktionieren
ohne weitere Konfiguration.

**Zwei Repos:**
- Website: `new-edge-nexus-build-aeb8eb8b` (Branch `redesign-cms-2026-07`, PR #1)
- CMS: dieses Repo (`new-edge-strapi`)

---

## Voraussetzungen

- Server mit ≥ 2 GB RAM (Admin-Build braucht das), Docker + Docker Compose v2
- nginx + certbot auf dem Host
- Node 20+ auf dem Host **oder** CI (nur für den Website-Build nötig)
- DNS: `newedgebrand.com` / `www.` → Server-IP

---

## Teil A — CMS (Strapi) hochziehen

```bash
# 1. Repo auf den Server bringen
git clone <repo-url> new-edge-strapi && cd new-edge-strapi

# 2. Env anlegen — ALLE Secrets ersetzen (Hinweise in der Datei)
cp .env.production.example .env
# Secrets erzeugen: openssl rand -base64 32   (APP_KEYS = 4 Werte, kommagetrennt)
nano .env

# 3. Erststart MIT Content-Seed (füllt Postgres mit allen Inhalten aus data/)
SEED=1 docker compose up -d --build

# 4. Logs prüfen — warten auf "[seed] DONE"
docker compose logs -f strapi

# 5. Admin-Benutzer anlegen (einmalig, im Browser):
#    https://<domain>/admin  → Registrierungsformular beim ersten Aufruf
```

> **SEED=1 nur beim Erststart** (oder bewusst nach einem neuen
> `gen-schemas`-Lauf). Der Seed ist idempotent, **überschreibt aber
> redaktionelle CMS-Änderungen** mit dem Code-Stand. Normaler Neustart:
> `docker compose up -d` (ohne SEED).

## Teil B — Website bauen & ausliefern

```bash
# 1. Repo klonen, Branch auschecken
git clone https://github.com/Sebaspac/new-edge-nexus-build-aeb8eb8b.git
cd new-edge-nexus-build-aeb8eb8b && git checkout redesign-cms-2026-07

# 2. Produktions-Env: VITE_STRAPI_URL = eigene Domain (Same-Origin!)
cp .env.production.example .env.production
nano .env.production   # VITE_STRAPI_URL=https://www.newedgebrand.com

# 3. Bauen & deployen
npm ci && npm run build
mkdir -p /var/www/newedgebrand
rsync -a --delete dist/ /var/www/newedgebrand/dist/
```

## Teil C — nginx + TLS

```bash
cp deploy/nginx.conf /etc/nginx/sites-available/newedgebrand.conf
# Pfade/Domain in der Datei prüfen (root, server_name)
ln -s /etc/nginx/sites-available/newedgebrand.conf /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx
certbot --nginx -d newedgebrand.com -d www.newedgebrand.com
```

**Empfohlen:** `/admin` per IP-Allowlist oder Basic-Auth absichern
(auskommentierter Block in `deploy/nginx.conf`).

---

## Betrieb

### Content pflegen (Redaktion)
- `https://<domain>/admin` → Content Manager. Änderungen sind **sofort live**
  (die Website lädt Inhalte zur Laufzeit aus `/api/...`; statischer Content
  ist nur Fallback, falls das CMS nicht antwortet).
- **Bilder tauschen:** Media Library → Datei hochladen → URL kopieren
  (`/uploads/...`) → im jeweiligen Eintrag ins `src`-Feld einsetzen
  (statt des Bild-Keys). Der Frontend-Resolver akzeptiert beides.

### Code-/Design-Updates (Entwicklung)
```bash
cd new-edge-nexus-build-aeb8eb8b && git pull
npm ci && npm run build
rsync -a --delete dist/ /var/www/newedgebrand/dist/
```

### Content-Modell-Updates (neue Felder/Typen)
Nur nötig, wenn im Website-Repo `src/content/**` strukturell erweitert wurde:
```bash
# im Website-Repo:
node scripts/export-content.mjs           # → /tmp/... newedge-content.json
# im CMS-Repo:
node scripts/gen-schemas.mjs <pfad-zur-json>
git commit … && git push                  # generierte Typen einchecken
# auf dem Server:
git pull && SEED=1 docker compose up -d --build
```
⚠️ Dieser Reseed überschreibt redaktionelle CMS-Texte — vorher mit der
Redaktion abstimmen bzw. Backup ziehen.

### Backups (Cron empfohlen, täglich)
```bash
# Datenbank
docker compose exec -T postgres pg_dump -U strapi strapi | gzip > backup-$(date +%F).sql.gz
# Uploads
docker run --rm -v new-edge-strapi_uploads:/u -v $(pwd):/out alpine \
  tar czf /out/uploads-$(date +%F).tar.gz -C /u .
```

### Health & Logs
```bash
curl -s -o /dev/null -w "%{http_code}\n" http://127.0.0.1:1337/_health   # → 204
docker compose ps
docker compose logs -f strapi
```

---

## Troubleshooting

| Symptom | Ursache / Fix |
|---|---|
| Website zeigt alte Texte | CMS down → Fallback auf eingebaute Inhalte. `docker compose ps` prüfen. |
| `/admin` lädt Assets nicht | `PUBLIC_URL` in `.env` falsch/leer → korrigieren, Container neu starten. |
| Bilder-Upload schlägt fehl | `client_max_body_size` in nginx (64m gesetzt) oder Volume-Rechte prüfen. |
| Seed läuft nicht | Env `SEED=1` gesetzt? `data/prepared-content.json` im Image? Logs prüfen. |
| CORS-Fehler | Nur bei Subdomain-Setup relevant → `CORS_ORIGINS` in `.env` ergänzen. |

## Bekannte Punkte
- **EN-Inhalte** (`/en`): technisch vollständig, textlich noch der ältere,
  längere Stand (das DE-Copy-Rewrite von 2026-07 wurde nicht gespiegelt).
- **Karriere-Seite** ist bewusst deaktiviert (Route → 404, Links entfernt);
  Inhalte liegen weiter im CMS (`careers`, `jobs`).
- Das Docker-Image wurde lokal ohne laufenden Docker-Daemon erstellt, d. h.
  `docker build` ist auf dem Zielserver der erste echte Bau — bei Problemen
  mit nativen Modulen (`better-sqlite3`, `sharp`) bitte Node-22-Alpine-Stage
  in `Dockerfile` prüfen.
