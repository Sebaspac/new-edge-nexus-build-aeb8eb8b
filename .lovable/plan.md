
## Farbumstellung: Helles Lila → Dunkles Lila (Homepage-Hero-Palette)

### Aktuelle Farben (Pain-Point-Seite)
- `PURPLE` = `#a855f7` (helles Lila)
- `PURPLE_DARK` = `#7e22ce`
- `PURPLE_LIGHT` = `#c084fc` (hellstes Lila)
- `PURPLE_BG` = `rgba(168,85,247,0.08)`

### Neue Farben (aus Homepage-Hero)
- `PURPLE` → `#7c3aed` (Haupt-Akzent der Hero-Section)
- `PURPLE_DARK` → `#4c1d95` (dunkelster Ton)
- `PURPLE_LIGHT` → wird gelöscht / ersetzt durch `#6d28d9`
- `PURPLE_BG` → `rgba(124,58,237,0.08)` (basierend auf neuem Primärton)

### Betroffene Bereiche (~30 Stellen)
1. **Design-Tokens** (Zeile 27–30): Alle 4 Konstanten aktualisieren
2. **Gradient-Sections** (CTA, Hero-Pin): `linear-gradient(135deg, #4c1d95 0%, #7c3aed 50%, #6d28d9 100%)` — kein helles `#c084fc` mehr
3. **Buttons, Labels, Akzente**: Überall wo `PURPLE` als Textfarbe, Border oder Hintergrund genutzt wird
4. **FAQ-Akkordeons**: Highlight-Farbe und Borders
5. **Mobile CTA-Layout**: Gleiche Gradient-Anpassung

### Technisch
- Nur Datei: `src/pages/PainPointAuswahlverfahren.tsx`
- Reine Token-Änderung an den 4 Konstanten + Entfernung der direkten `#c084fc`-Referenzen in Gradients
