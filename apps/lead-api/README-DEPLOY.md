# NEWEDGE Lead- & Report-Service — Deployment (VPS, ohne n8n)

Ein kleiner FastAPI-Service, der **beide Formulare** der Website bedient:
ROI-Rechner (inkl. 6-seitigem PDF-Report via ReportLab, Lime/Ink-CI) und
Kontaktformular. Ein Service, ein SMTP-Zugang, ein Deploy.

```
ROI-Rechner (Netlify) ──POST /roi-report──▶ VPS (Docker: FastAPI)
Kontaktformular       ──POST /contact ────▶
                                 ├─ data/leads.jsonl        (ROI-Leads)
                                 ├─ data/contacts.jsonl     (Kontaktanfragen)
                                 ├─ data/reports/<id>.pdf   (Report-Archiv)
                                 ├─ Strapi „Lead" (optional, Zweitablage)
                                 ├─ Mail an Lead (PDF im Anhang / Bestätigung)
                                 ├─ Benachrichtigung an NOTIFY_TO
                                 └─ data/followups.jsonl    (optional: Nachfassen
                                    ──Worker im selben Container──▶ Mail nach 3/5 Tagen)
```

Hintergrund: Das Kontaktformular lief vorher über eine Supabase-Function bei
Projekt `yzmtgxfehvzgobxjivjl` — **dieses Projekt existiert nicht mehr**
(DNS: NXDOMAIN). Zudem verschickte die Function selbst nie eine Mail, sondern
leitete nur optional an n8n weiter und meldete auch ohne Weiterleitung Erfolg.
Beide Formulare melden jetzt nur noch bei **echtem** Erfolg Erfolg.

## 1. Voraussetzungen (einmalig)

- DNS: A-Record `roi-api.newedgebrand.com` → VPS-IP (Name frei wählbar; muss
  dann in `Caddyfile` und Netlify-Env übereinstimmen)
- VPS: Docker + Docker Compose installiert (`curl -fsSL https://get.docker.com | sh`)
- SMTP-Zugang: bei Google Workspace ein **App-Passwort** für das Postfach
  (Google-Konto → Sicherheit → 2FA → App-Passwörter). Limit ~500 Mails/Tag —
  für Leads mehr als genug.

## 2. Service auf den VPS bringen

Empfohlen über GitHub (privates Repo aus diesem Ordner):

```bash
# lokal, einmalig
cd roi-report-service
git init && git add -A && git commit -m "ROI-Report-Service"
gh repo create newedge/roi-report-service --private --source . --push

# auf dem VPS
git clone git@github.com:newedge/roi-report-service.git
cd roi-report-service
cp .env.example .env    # SMTP-Passwort etc. eintragen
docker compose up -d --build
curl http://127.0.0.1:8090/health   # → {"status":"ok",...}
```

(Ohne GitHub geht auch `scp -r roi-report-service/ vps:` — Repo ist aber der
saubere Weg für Updates: `git pull && docker compose up -d --build`.)

## 3. HTTPS (Caddy)

```bash
# Caddy installieren (falls nicht vorhanden), dann:
sudo cat Caddyfile.example >> /etc/caddy/Caddyfile   # Subdomain ggf. anpassen
sudo systemctl reload caddy
curl https://roi-api.newedgebrand.com/health
```

Läuft bereits nginx auf dem VPS: stattdessen einen Server-Block mit
`proxy_pass http://127.0.0.1:8090;` + certbot für die Subdomain.

## 4. Website verbinden (Netlify)

Netlify → Site settings → Environment variables — **eine** Variable für beide
Formulare (nur die Basis-URL, ohne Pfad):

```
VITE_API_URL = https://roi-api.newedgebrand.com
```

Dann neu deployen. Ohne die Variable laufen beide Formulare im Testmodus
(zeigen Erfolg, senden nichts) — lokal gilt dasselbe.

## 4b. Leads zusätzlich im CMS sichtbar machen (optional)

Damit das Team Leads ohne SSH sehen kann, schreibt der Service jeden Lead
**zusätzlich** in den Strapi-Collection-Type „Lead". Die `.jsonl`-Dateien
bleiben die Primärablage — das CMS ist reine Bequemlichkeit.

**API-Token in Strapi anlegen** (einmalig):

1. Strapi-Admin öffnen → **Einstellungen → API-Tokens → „Neuer API-Token"**
2. Name: `roi-report-service` · Gültigkeit: **Unbegrenzt** · Token-Typ: **Custom**
3. Unter *Lead* nur **`create`** anhaken — mehr braucht der Service nicht.
   (Kein `find`/`findOne`, kein Full-Access: der Token liegt auf dem VPS.)
4. Speichern. Der Token wird **genau einmal** angezeigt → sofort kopieren.

**In die `.env` des Service eintragen:**

```
STRAPI_URL=https://cms.newedgebrand.com     # Basis-URL, ohne /api, ohne Slash am Ende
STRAPI_TOKEN=<der kopierte Token>
# STRAPI_TIMEOUT=5                          # optional
```

Danach `docker compose up -d`. Kontrolle: `curl .../health` meldet `"cms": true`.

Wichtig — **Leads sind personenbezogene Daten**: Der Typ „Lead" bekommt in
Strapi **keine** Public-Rechte (Einstellungen → Users & Permissions → Roles →
Public: bei *Lead* nichts anhaken). Leads sind so ausschließlich im Admin und
über den Token sichtbar.

**Wenn Strapi weg ist, passiert nichts Schlimmes:** sind `STRAPI_URL`/
`STRAPI_TOKEN` nicht gesetzt, ist das CMS offline, der Token abgelaufen oder
antwortet Strapi mit einem Fehler, wird das nur ins Log geschrieben
(`[strapi] Lead <id> NICHT ins CMS übertragen … — liegt in data/leads.jsonl`).
Der Lead ist zu diesem Zeitpunkt bereits in der Datei, PDF und Mailversand
laufen normal weiter, das Frontend bekommt `{"success":true}`. Nachträglich
importieren geht jederzeit aus der `.jsonl`.

## 4c. Follow-ups (zeitversetztes Nachfassen) — Default AUS

Der Service kann nach der Sofort-Mail **eine** weitere Mail schicken:

| Formular | Abstand | Inhalt |
|---|---|---|
| ROI-Rechner | 3 Tage | „Fragen zum Report? 30 Minuten Gespräch." |
| Kontaktformular | 5 Tage | Erinnerung, falls die Anfrage noch offen ist |

Es bleibt bei genau einer Nachfass-Mail je Absendung — keine Sequenz, kein
Drip. Solange `FOLLOWUP_ENABLED=0` (Default) ist, wird **nichts eingeplant und
nichts verschickt**; der Service verhält sich exakt wie vorher.

### Wie es funktioniert (und warum so)

Ein **Hintergrund-Thread im Service** sieht alle 10 Minuten nach, was fällig
ist. Keine zusätzliche Infrastruktur: kein Redis, keine Queue, kein Celery,
kein externer Dienst, kein zweiter Container.

*Warum Thread und nicht Cron?* Auf einem VPS mit **einem** Container ist Cron
der aufwendigere Weg: Cron **im** Container bräuchte einen zweiten Dienst
(supervisord o. Ä.) und macht aus „ein Container, ein Prozess" ein
Prozess-Gespann mit eigenem Logging. Cron **auf dem Host** bräuchte
`docker exec`, eine eigene Fehlerbehandlung, wenn der Container gerade neu
startet, und einen zweiten Ort, an den man bei Updates denken muss. Der Thread
dagegen startet und stirbt mit dem Service, nutzt exakt denselben SMTP-Weg wie
der Sofortversand und kommt durch `restart: unless-stopped` automatisch mit
zurück. (Wer trotzdem Cron will: **`FOLLOWUP_WORKER=0` setzen** — dann plant
der Service weiterhin ein, versendet aber nicht selbst — und den Versand per
`docker compose exec roi-report python followups.py run-once --send` anstoßen.
Den Thread nur „stillzulegen", indem man `FOLLOWUP_INTERVAL_MINUTES` hoch
dreht, reicht **nicht**: er hält die Dateisperre über die ganze Laufzeit, der
Cron-Lauf käme nie zum Zug und täte stillschweigend nichts.)

**Neustart-fest und ohne Doppelmails.** Zwei Dateien im gemounteten `data/`:

```
data/followups.jsonl       Warteschlange   (append-only, eine Zeile = ein Follow-up)
data/followups.log.jsonl   Protokoll       (append-only, eine Zeile = ein Zustandswechsel)
data/suppressed.txt        Abgemeldete Adressen
data/followups.lock        Dateisperre: genau ein Durchlauf gleichzeitig
```

Die Dateisperre gilt für **jeden** Durchlauf, nicht nur für den Worker-Thread:
Ein `run-once --send`, das startet, während der Worker gerade arbeitet, macht
gar nichts und sagt das auch („Durchlauf übersprungen …"). Ohne diese Sperre
würden beide Läufe dieselbe Zeile beanspruchen und die Mail ginge doppelt raus
— der `claim` allein schützt nur gegen Abstürze, nicht gegen Parallelität.

Vor jedem Versand wird ein `claim` ins Protokoll geschrieben und **auf die
Platte gezwungen (`fsync`)**, erst danach geht die Mail raus. Stirbt der
Container mittendrin, steht beim nächsten Start der `claim` ohne Abschluss da —
der Eintrag wird als `orphaned` geschlossen und **nicht erneut verschickt**.
Bewusste Entscheidung: lieber ein verlorenes Follow-up als eine doppelte Mail.
Solche Fälle stehen im Log (`VERWAIST …`) und in `/health` unter
`followups.orphaned`, lassen sich also von Hand nachholen.

> ⚠️ **`SEND_DISABLED=1` ist kein Pause-Knopf für Follow-ups.** Im Trockenlauf
> wird ein fälliger Eintrag als `dry_run` **endgültig abgeschlossen** — er geht
> später *nicht* doch noch raus. Wer den Mailversand vorübergehend stoppen
> will, ohne die Warteschlange zu verbrennen, setzt `FOLLOWUP_WORKER=0`:
> dann bleibt alles liegen, bis der Worker wieder läuft.

Zwei weitere Schutzmechanismen:

- **Versandfenster** `FOLLOWUP_SEND_WINDOW=08:00-18:00` (Mo–Fr, `FOLLOWUP_TZ`).
  Außerhalb wird nur gewartet, nichts verworfen — keine Mail um 4 Uhr nachts.
- **Verfall**: Einträge, die mehr als `FOLLOWUP_MAX_OVERDUE_DAYS` (14) zu spät
  dran sind, werden verworfen. Nach zwei Wochen Ausfall geht so kein Schwall
  veralteter Post raus.

### Abmeldung (DSGVO)

Jede Follow-up-Mail trägt einen Abmeldehinweis — das ist Pflicht und nicht
abschaltbar:

- Abmeldelink `https://…/abmelden/<token>` (nur wenn
  `FOLLOWUP_UNSUBSCRIBE_BASE` gesetzt ist). Der Token steht im
  Warteschlangen-Eintrag, damit **keine E-Mail-Adresse in einer URL** landet.
  `GET` zeigt nur eine Bestätigungsseite (Mailscanner rufen Links automatisch
  auf — ein GET darf deshalb nichts ändern), erst `POST` trägt aus.
- `List-Unsubscribe`-Header, damit Gmail & Co. den „Abmelden"-Knopf anzeigen.
- Immer zusätzlich: Antwort mit „Abmelden" genügt.

Abgemeldete Adressen stehen in `data/suppressed.txt` und werden vor **jedem**
Follow-up geprüft (auch beim Einplanen). Von Hand eintragen geht auch:
`docker compose exec roi-report python followups.py unsubscribe max@muster.de`.
Die Sofort-Mails (Report, Empfangsbestätigung) sind davon nicht betroffen —
das sind angeforderte Transaktionsmails.

### Einschränkung beim Kontaktformular — ehrlich gesagt

`FOLLOWUP_CONTACT_ENABLED` ist ein **eigener** Schalter und ebenfalls Default
aus. Grund: Der Service kennt nur den Eingang der Anfrage, **nicht das
Postfach**. Er kann nicht wissen, ob jemand aus dem Team längst geantwortet
hat. Eingeschaltet bekommt also womöglich auch jemand eine Erinnerung, der
schon eine Antwort in der Hand hält. Zwei Konsequenzen daraus:

1. Der Mailtext ist so geschrieben, dass er in beiden Fällen passt
   („Diese Mail ist automatisch — wenn sich die Sache erledigt hat, ignorieren
   Sie sie bitte."). Genauer geht es ohne IMAP-Zugriff aufs Postfach nicht.
2. Wer sauber nachfassen will, macht es besser von Hand — oder wir bauen
   später einen IMAP-Abgleich („liegt eine Antwort an diese Adresse im
   Gesendet-Ordner?"). Bis dahin: bewusst einschalten oder aus lassen.

### Einschalten

```bash
# in .env
FOLLOWUP_ENABLED=1
FOLLOWUP_UNSUBSCRIBE_BASE=https://roi-api.newedgebrand.com
# FOLLOWUP_CONTACT_ENABLED=1     # nur wenn die Einschränkung oben akzeptiert ist

docker compose up -d
curl -s http://127.0.0.1:8090/health | jq .followups
# → {"enabled":true,"worker":true,"queued":0,...}
```

## 5. Testen

```bash
# ROI-Report
curl -X POST https://roi-api.newedgebrand.com/roi-report \
  -H "Content-Type: application/json" --data @sample_roi_lead.json

# Kontaktformular
curl -X POST https://roi-api.newedgebrand.com/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test Person","email":"DEINE@adresse.de","company":"Test GmbH",
       "message":"Testnachricht ueber das Kontaktformular.","consent":true}'
```

Beide antworten `{"success":true,...}` und lösen echte Mails aus.
Testmodus ohne Mailversand: `SEND_DISABLED=1` in `.env`, `docker compose up -d`.

### Follow-ups testen, ohne dass eine Mail rausgeht

Alle folgenden Befehle verschicken **nichts** — `followups.py` ohne `--send`
ist immer ein Trockenlauf.

```bash
# 1) Wie sehen die Mails aus? (rendert nur, kein Versand, kein SMTP nötig)
docker compose exec roi-report python followups.py preview roi
docker compose exec roi-report python followups.py preview contact

# 2) Testeintrag anlegen, der sofort fällig ist (geht auch bei FOLLOWUP_ENABLED=0)
docker compose exec roi-report python followups.py enqueue-test DEINE@adresse.de roi

# 3) Warteschlange + Status ansehen
docker compose exec roi-report python followups.py list

# 4) Fälliges abarbeiten — Trockenlauf: protokolliert "dry_run", sendet nichts
docker compose exec roi-report python followups.py run-once

# 5) Erneut laufen lassen → 0 Mails. Das ist der Idempotenz-Nachweis.
docker compose exec roi-report python followups.py run-once
```

Ganze Kette ohne Mailversand (Formular → Warteschlange → Worker):
`SEND_DISABLED=1` **und** `FOLLOWUP_ENABLED=1` setzen, dazu
`FOLLOWUP_ROI_DELAY_DAYS=0` (sofort fällig) und `FOLLOWUP_SEND_WINDOW=off`.
Dann ein Formular abschicken und `docker compose logs -f | grep followups`
beobachten: Der Worker meldet `DRY-RUN … | Kurz nachgefragt: …`. Es geht
keine einzige Mail raus, aber der komplette Weg ist durchlaufen.

Echten Versand an sich selbst prüfen: Schritt 2 mit der eigenen Adresse, dann
`run-once --send`.

**Selbsttest** — beweist genau die Zusagen von oben (kein Doppelversand nach
Absturz, Abmeldung, Verfall, Wiederholung mit Deckel). Verschickt nichts,
braucht keinen SMTP-Zugang und arbeitet in einem eigenen Temp-Verzeichnis,
fasst `data/` also nie an:

```bash
docker compose exec roi-report python test_followups.py
# → ALLE PRÜFUNGEN BESTANDEN
```

**Neustart-Verhalten prüfen** (der eigentliche Härtetest):

```bash
docker compose exec roi-report python followups.py enqueue-test DEINE@adresse.de roi
docker compose restart roi-report        # mitten in der Wartezeit
docker compose exec roi-report python followups.py list   # Eintrag ist noch da
```

Und andersherum: Sobald ein Eintrag `sent` (oder `dry_run`) im Protokoll hat,
bringt ihn kein Neustart und kein zweiter Lauf mehr zum Versand.

## Betrieb

- ROI-Leads: `cat data/leads.jsonl | jq .`
- Kontaktanfragen: `cat data/contacts.jsonl | jq .`
- Im Browser (falls CMS verbunden): Strapi-Admin → Content Manager → **Lead**
- CMS-Übertragung prüfen: `docker compose logs -f | grep strapi`
- Reports liegen unter `data/reports/` (werden nicht automatisch gelöscht)
- Update: `git pull && docker compose up -d --build`
- Eingebaute Absicherung: CORS-Whitelist, 5 Requests / 10 Min. je IP,
  E-Mail-Validierung, Honeypot, Pflicht-Einwilligung (`consent`) beim Kontakt
- Follow-ups: `curl -s .../health | jq .followups` zeigt offen / fällig /
  gesendet / verwaist. Warteschlange im Detail:
  `docker compose exec roi-report python followups.py list`
- Follow-up-Log: `docker compose logs -f | grep followups`. Wichtig ist die
  Zeile `VERWAIST <id>` — dort ist während eines Absturzes unklar geblieben,
  ob die Mail rausging; solche Fälle bei Bedarf von Hand nachholen.
- Abmeldungen: `cat data/suppressed.txt` · von Hand eintragen mit
  `docker compose exec roi-report python followups.py unsubscribe <adresse>`

## Kontrakt zum Frontend

- **ROI:** `src/pages/RoiRechner.tsx` (`submitLead`) sendet den vollen
  berechneten Stand — Kontrakt siehe `sample_roi_lead.json`. Alle Zahlen werden
  im Frontend gerechnet (eine Rechen-Wahrheit); der Service rechnet nichts nach.
- **Kontakt:** `src/utils/contactFormValidation.ts` (`submitContactForm`) sendet
  name, email, phone, company, position, message, consent, sourcePage.
- Beide Endpoints leiten sich aus `VITE_API_URL` ab — siehe
  `src/utils/apiConfig.ts` in der Website.
