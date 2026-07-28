# NEWEDGE — Kompletter Go-Live auf dem eigenen VPS

Eine Domain, ein Server, drei Dienste. Nach dieser Anleitung läuft alles auf
eurem VPS und ihr müsst nur noch die Videos im CMS hochladen.

```
                        ┌── nginx (Port 80/443, HTTPS via certbot) ──┐
  newedgebrand.com  ──▶ │                                            │
                        │  /                  → Website (dist/)      │  statisch
                        │  /api /uploads      → Strapi   :1337       │  CMS
                        │  /admin             → Strapi   :1337       │  Redaktion
                        │  /contact           → Lead-Service :8090   │  Kontaktformular
                        │  /roi-report        → Lead-Service :8090   │  ROI-Report + PDF
                        └────────────────────────────────────────────┘
```

Drei Repos:

| Repo | Rolle | Läuft als |
|---|---|---|
| `new-edge-website-ACTIVE` | Website (Vite-Build) | statische Dateien in `/var/www/newedgebrand/dist` |
| `new-edge-strapi` | CMS + Postgres | Docker (`docker compose`) |
| `roi-report-service` | Kontaktformular + ROI-PDF | Docker (`docker compose`) |

---

## 1. Vorbereitung (einmalig)

- **DNS:** A-Record `newedgebrand.com` (und `www`) auf die VPS-IP.
- **VPS:** Docker + Docker Compose + nginx + certbot installiert.
  ```bash
  curl -fsSL https://get.docker.com | sh
  apt install -y nginx certbot python3-certbot-nginx
  ```
- **SMTP-Zugang:** bei Google Workspace ein **App-Passwort** für
  `info@newedgebrand.com` (Google-Konto → Sicherheit → 2FA → App-Passwörter).

---

## 2. CMS starten (Strapi + Postgres)

```bash
git clone <new-edge-strapi>  /opt/newedge-cms
cd /opt/newedge-cms
cp .env.example .env          # Secrets erzeugen/eintragen (APP_KEYS etc.)
                              # + DATABASE_PASSWORD setzen

# Erststart MIT Seed — legt alle Inhalte und die 168 „Bild austauschen"-Einträge an
SEED=1 docker compose up -d --build

docker compose logs -f strapi   # bis "[seed] DONE"
```

Danach **Admin-Konto anlegen**: `https://newedgebrand.com/admin` im Browser
öffnen und das erste Benutzerkonto erstellen (das macht Strapi selbst beim
ersten Aufruf; niemand sonst kann sich vorher registrieren).

---

## 3. Lead-Service starten (Formulare + PDF)

```bash
git clone <roi-report-service>  /opt/newedge-leads
cd /opt/newedge-leads
cp .env.example .env          # SMTP_* + NOTIFY_TO eintragen
docker compose up -d --build
curl http://127.0.0.1:8090/health     # → {"status":"ok", ...}
```

---

## 4. Website bauen und ausliefern

```bash
git clone <new-edge-website-ACTIVE>  /opt/newedge-web
cd /opt/newedge-web
cp .env.production.example .env.production     # Werte prüfen! (siehe unten)
npm ci
npm run build

mkdir -p /var/www/newedgebrand
rsync -a --delete dist/ /var/www/newedgebrand/dist/
```

`.env.production` muss enthalten — **beides auf die eigene Domain**, niemals localhost:

```
VITE_STRAPI_URL=https://newedgebrand.com
VITE_API_URL=https://newedgebrand.com
```

> Vite bäckt diese Werte zur **Build-Zeit** ein. Nach jeder Änderung neu bauen
> und neu rsyncen.

---

## 5. nginx + HTTPS

```bash
cp /opt/newedge-cms/deploy/nginx.conf /etc/nginx/sites-available/newedgebrand.conf
ln -s ../sites-available/newedgebrand.conf /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx

certbot --nginx -d newedgebrand.com -d www.newedgebrand.com
```

---

## 6. Abnahme (bitte wirklich durchgehen)

```bash
curl -I https://newedgebrand.com                       # 200, Website
curl -s https://newedgebrand.com/api/kontakt | head -c 200   # JSON aus Strapi
curl -s https://newedgebrand.com/api/image-overrides | head -c 120
curl -s https://newedgebrand.com/health                # Lead-Service
```

Und im Browser:
1. Kontaktformular abschicken → Mail bei euch **und** Bestätigung beim Absender.
2. ROI-Rechner durchklicken → PDF-Report per Mail.
3. `/admin` öffnen → Inhalte sichtbar.

---

## 7. Bilder und Videos austauschen (der Redaktions-Alltag)

Im Admin unter **„Bild austauschen"** liegt **ein Eintrag pro Bild der Website**
(168 Stück, nach Kategorie sortiert: Brand, Team, Anwendungsfelder, Case
Studies, Client Logos, Videos …).

**So tauscht man ein Bild:**
1. Eintrag öffnen (z. B. `pain-point-compliance-hero`).
2. Bei **Datei** das neue Bild hochladen.
3. Speichern. Fertig — die Website zeigt es sofort, **ohne neuen Build**.

**Feld leer lassen = das eingebaute Bild bleibt.** Es geht also nichts kaputt,
wenn ein Eintrag unbefüllt ist.

### Die Videos (euer letzter Schritt)

| Wo | Eintrag / Feld | Format |
|---|---|---|
| Kontaktseite, Reel links | „Bild austauschen" → **`contact-reel`** | Video 9:16 (Portrait) |
| Hero, Showcase, About, /websites | Single Type → Feld `video.youtubeId` | YouTube-ID (Textfeld) |

Solange bei `contact-reel` nichts liegt, zeigt die Kontaktseite weiterhin das
Standbild mit Play-Badge. Sobald ein Video hochgeladen ist, erscheint dort ein
echter Player mit dem Standbild als Vorschaubild.

Die vier anderen Video-Stellen sind YouTube-Einbettungen und nutzen aktuell
**alle dieselbe Video-ID** (`4TU1CdVskP8`) — inhaltlich ein Platzhalter-Zustand.
Eigene IDs lassen sich im CMS pro Sektion eintragen.

---

## 8. Inhalte aus dem Code ins CMS nachziehen

Nötig, wenn im Code **neue Felder** dazukommen (nicht bei reinen Textänderungen
im CMS). Ablauf:

```bash
# 1. im Website-Repo
node scripts/export-content.mjs           # → /tmp/newedge-content.json

# 2. im CMS-Repo
node scripts/gen-schemas.mjs /tmp/newedge-content.json

# 3. auf dem Server
SEED=1 docker compose up -d --build
```

**Zwei Dinge dazu, die man kennen muss:**

- **Der Reseed überschreibt redaktionelle Texte** im CMS mit dem Code-Stand.
  Wer im Admin Texte geändert hat, verliert sie. Vorher `deploy/backup.sh`.
- **Hochgeladene Bilder/Videos sind sicher.** Die „Bild austauschen"-Einträge
  werden nur angelegt, nie überschrieben — verifiziert: ein zweiter Seed-Lauf
  meldete „1 neu angelegt, 167 bestehende unverändert".

**Wichtig zur Reihenfolge:** Das CMS gewinnt gegenüber dem eingebauten Content.
Ein Feld, das im Code existiert, aber im CMS-Eintrag fehlt, ist zur Laufzeit
`undefined` — nicht der Code-Wert. Nach Code-Änderungen an der Content-Struktur
also immer Schritt 1–3 fahren, sonst fehlen neue Felder auf der Live-Seite.

---

## 9. Betrieb

| Aufgabe | Befehl |
|---|---|
| Backup (DB + Uploads) | `cd /opt/newedge-cms && deploy/backup.sh` |
| CMS aktualisieren | `git pull && docker compose up -d --build` |
| Lead-Service aktualisieren | `cd /opt/newedge-leads && git pull && docker compose up -d --build` |
| Website neu bauen | `cd /opt/newedge-web && git pull && npm ci && npm run build && rsync -a --delete dist/ /var/www/newedgebrand/dist/` |
| Kontaktanfragen einsehen | `cat /opt/newedge-leads/data/contacts.jsonl \| jq .` |
| ROI-Leads einsehen | `cat /opt/newedge-leads/data/leads.jsonl \| jq .` |

**Vor dem ersten öffentlichen Aufruf:** Das Passwort-Gate in `netlify.toml`
(Edge Function `auth` auf `/*`) betrifft nur Netlify. Beim Betrieb über nginx
greift es nicht — die Seite ist also ab Schritt 5 öffentlich erreichbar.
