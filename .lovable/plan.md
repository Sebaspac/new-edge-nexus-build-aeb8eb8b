
# Kontaktformular: Fehlende Felder debuggen und fixen

## Analyse

Der Datenfluss ist: **Frontend -> Edge Function -> n8n Webhook**

Die Edge Function extrahiert und validiert alle Felder korrekt (name, email, position, firma, telefon, nachricht, source) und sendet sie als JSON an den n8n Webhook. Das Problem: Es gibt kein Logging der tatsaechlich gesendeten Daten, sodass wir nicht sehen koennen, ob alle Felder wirklich ankommen.

## Moegliche Ursachen

1. **n8n Webhook-Konfiguration**: Der Webhook in n8n ist moeglicherweise so konfiguriert, dass er nur bestimmte Felder extrahiert
2. **Datenformat**: n8n erwartet moeglicherweise ein anderes Format (z.B. verschachtelte Struktur)

## Plan

### Schritt 1: Debug-Logging in der Edge Function hinzufuegen

In `supabase/functions/contact-form/index.ts` wird ein `console.log` mit dem vollstaendigen Payload eingefuegt, der an n8n gesendet wird. So koennen wir in den Edge Function Logs genau sehen, welche Daten weitergeleitet werden.

Aenderung in Zeile 142 (vor dem Webhook-Call):
```typescript
console.log(`Processing contact form submission from ${clientIP}`);
console.log(`Payload being sent to webhook: ${JSON.stringify(validation.data)}`);
```

### Schritt 2: Test durchfuehren und Logs pruefen

Nach dem Deployment wird ein Testformular abgeschickt, um die Logs zu ueberpruefen.

### Schritt 3: Falls das Problem bei n8n liegt

Wenn die Logs zeigen, dass alle Daten korrekt gesendet werden, liegt das Problem in der n8n Workflow-Konfiguration. In dem Fall muss der n8n Workflow "CRM UPDATES" (ID: 6FnYmim7NA9GOkTn) angepasst werden, damit alle Felder verarbeitet werden.

## Technische Details

- Datei: `supabase/functions/contact-form/index.ts`
- Aenderung: Eine zusaetzliche `console.log`-Zeile nach Zeile 142
- Edge Function Logs koennen hier eingesehen werden: Supabase Dashboard > Edge Functions > contact-form > Logs
