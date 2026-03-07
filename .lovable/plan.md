

## Kontaktformular: Phone, Company, Position Felder hinzufügen

### Überblick
Drei optionale Felder (Telefon, Firma, Position) zum Formular hinzufügen und durch die gesamte Kette bis n8n weiterleiten.

### Änderungen

**1. `src/components/ContactFormModal.tsx`** — 3 optionale Felder einfügen:
- Zwischen E-Mail und Nachricht drei neue Inputs: Telefon, Firma, Position (alle optional, kein `required`)
- Werte aus FormData auslesen und an `submitContactForm` übergeben

**2. `src/utils/contactFormValidation.ts`** — Schema & Submit erweitern:
- Zod-Schema um `phone`, `company`, `position` erweitern (alle `z.string().optional()` mit sinnvollen max-Längen)
- `ContactFormData` Typ wird automatisch aktualisiert
- `submitContactForm` sendet die 3 neuen Felder mit (als `null` wenn leer)

**3. `supabase/functions/new-contact/index.ts`** — Felder durchreichen:
- `phone`, `company`, `position` aus dem Body extrahieren (optional, dürfen null/leer sein)
- n8n-Payload erweitern: `{ name, email, phone, company, position, message, ip, user_agent, source: "new-contact" }`
- Validierung: nur Längenbegrenzung, kein Required-Check

