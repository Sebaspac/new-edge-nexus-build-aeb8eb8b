## Plan

### Was sich ändert

**Nur die Marquee-Logos und die neuen Imports** — der Kreis (SVG, Größe, Glow) bleibt exakt wie er ist.

### Änderungen in `src/components/ui/logo-cloud.tsx`

1. **3 neue Logos importieren und zum Array hinzufügen:**
   - `dr-linda-fischer.png` → "Dr. Linda Fischer"
   - `elite-aesthetic.png` → "Elite Aesthetic"  
   - `meyer-henrich.png` → "Meyer & Henrich"

2. **Logo-Größe erhöhen** (nur im Marquee-Strip):
   - Container-Höhe: `44px` → `56px`
   - Bild-Höhe: `44px` → `56px`
   - Max-Width: `160px` → `180px`
   - Marquee-Padding: `10px 0` → `16px 0` (damit der Strip die Logos nicht abschneidet)

3. **Weiße Hintergründe entfernen** aus den 3 neuen PNG-Logos (per Python-Skript, wie bei den anderen Logos zuvor).

### Was NICHT geändert wird
- Kreis-SVG (Größe, Position, Glow, Farben)
- Overflow-Container (Höhe, Cropping links/rechts)
- Heading und vertikale Linie
