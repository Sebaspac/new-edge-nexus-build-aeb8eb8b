

## Kontaktformular auf `new-contact` Edge Function umstellen

### Überblick
Das Formular wird auf die neue Edge Function `new-contact` umgestellt. Die Felder werden auf die drei geforderten reduziert (name, email, message). Fehler werden inline unter dem Formular angezeigt statt als Toast. Erfolgsmeldung ebenfalls inline.

### Änderungen

**1. `src/utils/contactFormValidation.ts`** — Validation & Submit komplett überarbeiten:
- Neues Zod-Schema: nur `name` (max 120), `email` (max 200), `message` (max 5000) — alle required
- `submitContactForm` → plain `fetch()` an `https://yzmtgxfehvzgobxjivjl.supabase.co/functions/v1/new-contact`, kein Auth-Header
- Netzwerkfehler abfangen mit spezifischer Meldung "Verbindungsfehler. Bitte erneut versuchen."
- Honeypot und Rate-Limit bleiben erhalten

**2. `src/components/ContactFormModal.tsx`** — UI komplett überarbeiten:
- Formularfelder auf 3 reduzieren: Name, E-Mail, Nachricht (statt 5 + Nachricht)
- `maxLength` Attribute auf den Inputs setzen
- Inline-Fehlerstatus (`fieldErrors` State) statt Toast für Validierung
- Erfolg: grüne Inline-Meldung "Nachricht gesendet! Wir melden uns bald." + Form reset
- Fehler: rote Inline-Meldung unter dem Formular (aus response `error`)
- Netzwerkfehler: "Verbindungsfehler. Bitte erneut versuchen."
- Button disabled + "Wird gesendet..." während fetch läuft
- Honeypot-Feld bleibt

**3. `supabase/functions/new-contact/index.ts`** — Neue Edge Function erstellen:
- CORS-Headers mit Lovable Preview Domain
- POST-only, parst JSON body
- Validiert name, email, message serverseitig
- Optional: Weiterleitung an n8n via `N8N_WEBHOOK_URL` (wenn gesetzt)
- Gibt `{ ok: true }` oder `{ error: "..." }` zurück

**4. `supabase/config.toml`** — Eintrag für neue Function:
- `[functions.new-contact]` mit `verify_jwt = false`

