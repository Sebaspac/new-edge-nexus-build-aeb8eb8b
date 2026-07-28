# NEWEDGE — Server-Deployment (Website + CMS + Lead-Service)

Runbook für das Produktions-Setup auf einem eigenen Server (Ubuntu/Debian).
Ergebnis: statische Website + live editierbares Strapi-CMS (Texte **und**
Bilder) + funktionierende Formulare — alles unter **einer** Domain, in **einem**
`docker compose`.

---

## 🚀 Schnellstart — 3 Befehle

Frischer Ubuntu/Debian-Server, DNS zeigt auf die Server-IP, Zugriff auf dieses
(private) Repo eingerichtet. Dann:

```bash
# EIN Klon für alles — Website, CMS und Lead-Service liegen in diesem Monorepo.
git clone -b redesign-cms-2026-07 \
  git@github.com:Sebaspac/new-edge-nexus-build-aeb8eb8b.git /opt/newedge
cd /opt/newedge
sudo ./apps/cms/deploy/setup.sh newedgebrand.com admin@newedgebrand.com
```

Das Skript erledigt **alles**: Docker/nginx/Node installieren, Secrets
generieren, Stack bauen (Postgres + Strapi + Lead-Service) + Content-Seed,
Website bauen/ausrollen, nginx konfigurieren, HTTPS via certbot. Am Ende steht
die fertige URL im Terminal.

**Zwei manuelle Schritte danach:**

1. Unter `https://<domain>/admin` den ersten Admin-Benutzer anlegen.
2. SMTP-Zugang für die Formulare eintragen — setup.sh legt
   `apps/lead-api/.env` bewusst im **Testmodus** an (`SEND_DISABLED=1`), sonst
   quittierte jedes Formular mit „mail_failed". Siehe *Teil A2*.

**Danach** (alles aus der Monorepo-Wurzel, z. B. `/opt/newedge`):
```bash
sudo ./apps/cms/deploy/update.sh website   # neues Website-Release ausrollen
sudo ./apps/cms/deploy/update.sh cms       # CMS-Update (Inhalte bleiben)
sudo ./apps/cms/deploy/update.sh lead      # Lead-Service neu bauen/starten
sudo ./apps/cms/deploy/update.sh all       # alle drei
sudo ./apps/cms/deploy/backup.sh           # DB + Uploads + Leads sichern (Cron-Zeile am Ende der Ausgabe)
```

> **Wiederholte setup.sh-Läufe sind erlaubt.** Das Skript schreibt
> `/etc/nginx/sites-available/newedge.conf` jedes Mal neu — vorher legt es eine
> `.bak-<zeitstempel>`-Kopie an und hängt ein bereits vorhandenes
> Let's-Encrypt-Zertifikat danach wieder ein (`certbot install`). Bestehende
> `.env`-Dateien, Volumes und `apps/lead-api/data/` bleiben unangetastet.

Der Rest dieses Dokuments ist das **manuelle Referenz-Runbook** — nur nötig,
wenn man verstehen oder abweichen will.

---

## Architektur

```
                    ┌────────────────────────────────────────────────────┐
Browser ── HTTPS ──▶│ nginx                                              │
                    │  /                        → dist/ (Vite-Build)     │
                    │  /api /uploads /admin …   → 127.0.0.1:1337 strapi  │
                    │  /contact /roi-report     → 127.0.0.1:8090 lead-api│
                    │  /abmelden/<token>        → 127.0.0.1:8090 lead-api│
                    │  /health (nur 127.0.0.1)  → 127.0.0.1:8090 lead-api│
                    └───────────────────────┬────────────────────────────┘
                                            │
                         docker compose (apps/cms/docker-compose.yml)
                    ┌───────────────────────┴────────────────────────────┐
                    │  strapi   (Node 22, :1337)  ──depends_on──▶ postgres│
                    │  postgres 16 (Volume pgdata) · uploads-Volume      │
                    │                                                    │
                    │  lead-api (FastAPI, :8090)  ── KEIN depends_on ──   │
                    │      Bind-Mount apps/lead-api/data → /data          │
                    └────────────────────────────────────────────────────┘
```

**Same-Origin-Prinzip:** Website, CMS und Lead-Service teilen sich die Domain.
nginx proxied die CMS-Pfade (identisch zum Dev-Proxy in `vite.config.ts` der
Website) an Strapi und die Formular-Pfade an den Lead-Service. Dadurch: kein
CORS, kein Preflight, keine zweite Subdomain, ein Zertifikat. Hochgeladene
Bilder (`/uploads/...`) funktionieren ohne weitere Konfiguration.

**Warum der Lead-Service kein `depends_on` hat:** Er braucht weder Postgres noch
Strapi. Leads landen primär in `apps/lead-api/data/*.jsonl`, das CMS ist nur
optionale Zweitablage. Fällt das CMS aus — Update, Reseed, Absturz —, nehmen die
Formulare weiter Anfragen an und verschicken weiter Mails; die fehlgeschlagene
CMS-Übertragung wird nur geloggt. Ein `depends_on` würde genau das kaputt
machen: Der Lead-Service würde bei jedem CMS-Neustart mit neu starten.

**Drei Container, zwei `.env`-Dateien:**

| Datei | Für | Vorlage |
|---|---|---|
| `apps/cms/.env` | Postgres + Strapi (Secrets, `PUBLIC_URL`) | `.env.production.example` |
| `apps/lead-api/.env` | Lead-Service (SMTP, Follow-ups) | `apps/lead-api/.env.example` |

Die zweite ist als `required: false` eingebunden: Fehlt sie, startet der Stack
trotzdem und nur der Mailversand liegt still (`/health` → `"mail": false`).
Ein vergessenes Lead-`.env` darf nie das CMS am Hochfahren hindern.
Setzt `required: false` voraus → **Docker Compose ≥ 2.24**.

**Ein Repo (Monorepo):** `new-edge-nexus-build-aeb8eb8b`, Branch
`redesign-cms-2026-07`. Website (`apps/website`), CMS (`apps/cms`) und
Lead-Service (`apps/lead-api`) liegen darin nebeneinander — der frühere
separate CMS-Klon (`new-edge-strapi`) ist Geschichte. `setup.sh` bricht
absichtlich ab, wenn `apps/website` oder `apps/lead-api` fehlen.

---

## Voraussetzungen

- Server mit ≥ 2 GB RAM (Admin-Build braucht das), Docker + **Docker Compose ≥ 2.24**
  (`env_file: required:` — ältere Versionen brechen beim Start ab)
- nginx + certbot auf dem Host
- Node 20+ auf dem Host **oder** CI (nur für den Website-Build nötig)
- DNS: `newedgebrand.com` / `www.` → Server-IP. Für den Lead-Service ist
  **keine eigene Subdomain** mehr nötig — er liegt Same-Origin.
- SMTP-Zugang für die Formulare (Google Workspace: App-Passwort)

---

## Teil A — CMS (Strapi) hochziehen

```bash
# 1. Monorepo auf den Server bringen und in den CMS-Ordner wechseln
git clone -b redesign-cms-2026-07 <repo-url> /opt/newedge && cd /opt/newedge/apps/cms

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

`docker compose up` startet **alle drei** Container — auch `lead-api`. Nur das
CMS anfassen geht mit expliziten Service-Namen:
`docker compose up -d --build postgres strapi`.

## Teil A2 — Lead-Service (Formulare) scharf schalten

Der Container läuft nach Teil A bereits mit; er braucht nur noch seine `.env`.
Ohne SMTP-Zugang nimmt er Leads zwar an und speichert sie, verschickt aber
nichts.

```bash
# 1. Env aus der Vorlage anlegen (setup.sh macht das automatisch)
cp ../lead-api/.env.example ../lead-api/.env
chmod 600 ../lead-api/.env

# 2. Mindestens diese vier Werte setzen:
#    ALLOWED_ORIGINS=https://newedgebrand.com,https://www.newedgebrand.com
#    SMTP_PASS=<App-Passwort>          SEND_DISABLED=0
#    FOLLOWUP_UNSUBSCRIBE_BASE=https://newedgebrand.com
nano ../lead-api/.env

# 3. Übernehmen und prüfen
docker compose up -d lead-api
curl -s http://127.0.0.1:8090/health | jq .
# → {"status":"ok","mail":true,"cms":false,"followups":{...}}
```

**Optional — Leads zusätzlich im Strapi-Admin sichtbar machen:** API-Token in
Strapi anlegen (Rechte: nur *Lead* → `create`), dann in `apps/lead-api/.env`:

```
STRAPI_URL=http://strapi:1337    # Container-zu-Container, ohne nginx und TLS
STRAPI_TOKEN=<token>
```

Die `.jsonl`-Dateien bleiben die Primärablage. Ist Strapi weg, wird die
Übertragung nur geloggt — kein Lead geht verloren. Details und Betriebsanleitung
(Follow-ups, Abmeldungen, Selbsttest): `apps/lead-api/README-DEPLOY.md`.

> **`apps/lead-api/data/` enthält personenbezogene Daten** (Namen, Adressen,
> Nachrichten, PDF-Reports). Der Ordner ist per `.gitignore` ausgeschlossen und
> gehört ins Backup, nicht ins Repo.

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

### Routing-Tabelle (eine Domain, drei Ziele)

| Pfad | Ziel | Limit / Besonderheit |
|---|---|---|
| `/assets/` | `dist/` | 1 Jahr immutable |
| `/contact`, `/roi-report` | lead-api `:8090` | `client_max_body_size 1m`, Timeout 120s |
| `/abmelden/<token>` | lead-api `:8090` | `Cache-Control: no-store` |
| `/health` | lead-api `:8090` | **`allow 127.0.0.1; deny all;`** |
| `/api`, `/uploads`, `/upload`, `/admin`, `/content-manager`, `/content-type-builder`, `/users-permissions`, `/i18n`, `/_health` | strapi `:1337` | erbt `client_max_body_size 64m` |
| alles andere | `dist/index.html` | SPA-Fallback |

**Keine Präfixe, und das ist geprüft, nicht geraten:** Strapis Healthcheck heißt
`/_health` (Unterstrich), der des Lead-Service `/health` — verschiedene Pfade.
Die SPA-Routen sind deutsch (`/kontakt`, `/roi-rechner`), belegen also keinen
Service-Pfad. Und `/abmelden/<token>` steht bereits in versendeten Mails: Dieser
Pfad ist unveränderlich. Ein Präfix wie `/lead/` hätte den Frontend-Kontrakt
(`VITE_API_URL`, `apiConfig.ts`) und alle Abmeldelinks gebrochen, ohne ein
Problem zu lösen.

Reihenfolge ist relevant: nginx prüft Regex-Locations in Dateireihenfolge und
nimmt den ersten Treffer — die Lead-Blöcke stehen deshalb **vor** dem
Strapi-Block. `location = /health` ist eine exakte Location und schlägt ohnehin
jede Regex.

**`client_max_body_size`:** Server-weit 64m für die CMS-Media-Library. Die
Lead-Endpunkte setzen es auf 1m herunter — dort kommt ausschließlich JSON an,
der PDF-Report geht als Mail-Anhang **raus**, nicht rein.

### Fallstrick: Service Worker (PWA)

Die Website ist eine PWA. Ihr Service Worker liefert per `navigateFallback` für
jede Navigation `index.html` aus — er würde also auch `/abmelden/<token>` und
`/admin` abfangen, obwohl nginx völlig richtig konfiguriert ist. Sichtbar wäre
das nur für Besucher, die die Seite schon einmal geladen haben; ein `curl`-Test
sähe nichts. Deshalb steht in `apps/website/vite.config.ts` unter
`workbox.navigateFallbackDenylist` die Liste aller Pfade, die nicht der SPA
gehören. **Neuer Service-Pfad ⇒ Eintrag in dieser Liste**, sonst funktioniert er
für Bestandsbesucher nicht.

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

Am einfachsten `sudo ./deploy/backup.sh` — sichert alle drei Bestände und
rotiert auf 14 Stände. Von Hand:

```bash
# Datenbank
docker compose exec -T postgres pg_dump -U strapi strapi | gzip > backup-$(date +%F).sql.gz
# Uploads (Volume-Präfix = Ordnername von apps/cms)
docker run --rm -v cms_uploads:/u -v $(pwd):/out alpine \
  tar czf /out/uploads-$(date +%F).tar.gz -C /u .
# Leads: Bind-Mount, KEIN Volume — einfach der Ordner
tar czf leads-$(date +%F).tar.gz -C ../lead-api/data .
```

⚠️ **Der Lead-Ordner ist der wichtigste Teil.** `leads.jsonl` und
`contacts.jsonl` sind die einzige vollständige Kopie aller Anfragen — das CMS
hat sie nur als Zweitablage, und nur, wenn `STRAPI_URL`/`STRAPI_TOKEN` gesetzt
sind. Ein DB-Backup allein rettet keinen einzigen Lead. Enthält
personenbezogene Daten → Backup-Verzeichnis auf `chmod 700`.

### Health & Logs
```bash
# Strapi
curl -s -o /dev/null -w "%{http_code}\n" http://127.0.0.1:1337/_health   # → 204
# Lead-Service (nur lokal erreichbar — nginx sperrt /health nach außen)
curl -s http://127.0.0.1:8090/health | jq .
# Alle drei Container inkl. Healthcheck-Status
docker compose ps
docker compose logs -f strapi
docker compose logs -f lead-api
```

Routing nach jedem nginx-Umbau einmal gegenprüfen:

```bash
curl -s -o /dev/null -w "%{http_code}\n" -X POST https://<domain>/contact   # 400/422, NICHT 404/200-HTML
curl -sI https://<domain>/abmelden/test | head -1                            # 404 vom Service, nicht 200 HTML
curl -s -o /dev/null -w "%{http_code}\n" https://<domain>/health             # 403 — Absicht
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
| Formular meldet Fehler | `docker compose logs lead-api`. `/health` → `"mail": false` heißt: SMTP fehlt oder `SEND_DISABLED=1` in `apps/lead-api/.env`. |
| Formular gibt HTML statt JSON zurück | nginx-Block für `/contact`\|`/roi-report` fehlt oder steht **hinter** dem Strapi-Block → SPA-Fallback greift. |
| Abmeldelink zeigt die Website | Entweder `location ~ ^/abmelden/` fehlt in nginx — **oder** der Service Worker fängt die Navigation ab (`navigateFallbackDenylist` in `vite.config.ts`, danach Website neu bauen). |
| `docker compose up` bricht mit „env file not found" ab | Compose < 2.24 versteht `required: false` nicht → Compose aktualisieren oder `apps/lead-api/.env` anlegen. |
| Leads landen nicht im CMS | Erwartetes Verhalten bei fehlendem/abgelaufenem Token — `docker compose logs lead-api \| grep strapi`. Die Leads stehen trotzdem vollständig in `apps/lead-api/data/leads.jsonl`. |
| Rate-Limit greift für alle gleichzeitig | `proxy_set_header X-Forwarded-For` fehlt im Lead-Block → der Service sieht nur die nginx-IP. |

## Bekannte Punkte
- **EN-Inhalte** (`/en`): technisch vollständig, textlich noch der ältere,
  längere Stand (das DE-Copy-Rewrite von 2026-07 wurde nicht gespiegelt).
- **Karriere-Seite** ist bewusst deaktiviert (Route → 404, Links entfernt);
  Inhalte liegen weiter im CMS (`careers`, `jobs`).
- Das Docker-Image wurde lokal ohne laufenden Docker-Daemon erstellt, d. h.
  `docker build` ist auf dem Zielserver der erste echte Bau — bei Problemen
  mit nativen Modulen (`better-sqlite3`, `sharp`) bitte Node-22-Alpine-Stage
  in `Dockerfile` prüfen.
