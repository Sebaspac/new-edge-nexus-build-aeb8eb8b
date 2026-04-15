

## Plan: KI-Audit Gated Page mit direktem E-Mail-Versand (ohne n8n)

### Konzept
Fullscreen-Gate auf `/ki-audit` — Besucher müssen Name, E-Mail, Telefonnummer eingeben, bevor die Seite sichtbar wird. Die Daten werden per **Lovable Transactional Email** direkt an Santiago.p@newedgebrand.com gesendet — kein n8n involviert.

### Voraussetzung: E-Mail-Domain einrichten
Damit E-Mails versendet werden können, muss zuerst eine E-Mail-Domain verifiziert werden (z.B. `newedgebrand.com`). Das ist ein einmaliger Setup-Schritt.

<lov-actions>
<lov-open-email-setup>E-Mail-Domain einrichten</lov-open-email-setup>
</lov-actions>

### Schritte

**1. E-Mail-Infrastruktur aufsetzen**
- E-Mail-Domain verifizieren (DNS-Einträge)
- Lovable Transactional Email scaffolden

**2. Edge Function `ki-audit-signup` erstellen**
- Nimmt `name`, `email`, `phone` entgegen (alle required)
- Validierung (Zod-Pattern, Honeypot, Rate-Limiting)
- Sendet eine formatierte E-Mail an Santiago.p@newedgebrand.com mit den Lead-Daten
- Kein n8n, kein Webhook — direkter E-Mail-Versand über Lovable Email

**3. Gate-Komponente `KiAuditGate` bauen**
- Fullscreen dark overlay, CI-konform (Hard-Edge, keine Rundungen)
- 3 Felder: Name, E-Mail, Telefonnummer + Submit-Button
- Honeypot-Feld (hidden) gegen Bots
- Loading/Success/Error States mit Framer Motion
- Nach Erfolg: `sessionStorage.setItem('ki-audit-access', 'true')`

**4. `KiAudit.tsx` anpassen**
- Prüft `sessionStorage('ki-audit-access')` beim Mount
- Zeigt Gate solange kein Zugang, blockiert Scrollen
- Nach Submit: Gate verschwindet, voller Content sichtbar
- Calendly-Links und restliche Seite bleiben unverändert

### Bitte zuerst
Klicke auf **"E-Mail-Domain einrichten"** oben, damit wir die Domain verifizieren können. Danach implementiere ich alles.

