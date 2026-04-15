

## Plan: KI-Audit Leads in Datenbanktabelle speichern

### 1. Migration: Neue Tabelle `ki_audit_leads` erstellen

```sql
CREATE TABLE public.ki_audit_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  ip TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.ki_audit_leads ENABLE ROW LEVEL SECURITY;

-- Keine öffentlichen SELECT-Policies — nur service_role kann lesen/schreiben
-- Dashboard-Zugriff läuft über service_role oder eine spätere Admin-Funktion
```

Tabelle enthält PII (E-Mail, Telefon), daher keine öffentlich lesbaren RLS-Policies. Zugriff nur über `service_role` in der Edge Function.

### 2. Edge Function `ki-audit-signup` erweitern

Nach der Validierung und vor dem E-Mail-Versand: Lead in die Datenbank schreiben.

```typescript
// Insert lead into database
const { error: dbError } = await supabase
  .from("ki_audit_leads")
  .insert({
    name: name.trim(),
    email: email.trim(),
    phone: phone.trim(),
    ip: req.headers.get("x-forwarded-for") || req.headers.get("cf-connecting-ip") || null,
    user_agent: req.headers.get("user-agent") || null,
  });

if (dbError) {
  console.error("DB insert error:", dbError);
}
```

### 3. Supabase Types aktualisieren

Die generierten Types in `src/integrations/supabase/types.ts` werden um die neue Tabelle ergänzt (automatisch nach Migration).

### Zusammenfassung
- Eine Migration erstellt die `ki_audit_leads` Tabelle
- Die Edge Function speichert jeden Lead zusätzlich zur E-Mail-Benachrichtigung
- RLS schützt die PII-Daten — kein öffentlicher Zugriff

