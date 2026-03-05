

## Kontaktformular URL-Pfad

### Ziel
Eine eigene Route `/kontakt` (oder `/contact`) erstellen, die das Kontaktformular direkt öffnet. So kann man den Link teilen oder direkt darauf navigieren.

### Umsetzung

1. **Neue Seite `src/pages/Contact.tsx`** erstellen:
   - Rendert die `ContactFormModal` sofort geöffnet (`isOpen={true}`)
   - Bei Schließen des Modals navigiert zurück zur vorherigen Seite oder zur Startseite (`navigate(-1)` oder `navigate("/")`)
   - Verwendet ein neutrales/schwarzes Farbschema (wie in der MobileNavigation)

2. **Route in `src/App.tsx` hinzufügen**:
   - `<Route path="/kontakt" element={<Contact />} />`

3. **Bestehende Kontakt-Buttons** können optional auf `/kontakt` verlinken statt das Modal direkt zu öffnen – das ist aber nicht zwingend nötig, da beide Wege funktionieren.

### Technische Details
- Die Contact-Seite importiert `ContactFormModal` und rendert es mit `isOpen={true}`
- `onClose` nutzt `useNavigate()` um zurück zu navigieren
- Lazy-loaded wie andere Seiten

