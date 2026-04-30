## Logo-Cloud-Section pixelgenau an Dapta-Referenz angleichen

Die Section ist aktuell deutlich zu groß und zu lang. Kreis schrumpfen, Spacer kürzen, Section wird ~40% kürzer.

### Änderungen in `src/components/ui/logo-cloud.tsx`

**1. Kreis verkleinern (720px → 520px)**
- SVG-Breite: `min(720px, 88vw)` → `min(520px, 78vw)`
- Bleibt dünn (`strokeWidth 0.6`, `opacity 0.45`) und mittig

**2. Vertikale Linie**
- Höhe: `140px` → `110px` (proportional zum kleineren Kreis)
- Position bleibt — Kreis startet direkt am Linien-Ende

**3. Heading-Abstand zum Linien-Ende**
- `marginTop: clamp(60px, 12vw, 130px)` → `clamp(70px, 10vw, 100px)` (Heading sitzt sauber im oberen Kreisbogen, ca. ¼ unter Top)
- `marginBottom: 28px` → `24px`

**4. Marquee-Streifen**
- Padding `18px 0` → `14px 0` (kompakter)
- Logo-Höhe `44px` → `40px`
- Gap `72px` → `56px` (dichteres Logo-Spacing wie Referenz)

**5. Bottom-Spacer drastisch kürzen (Hauptfix für "zu lang")**
- `clamp(120px, 22vw, 220px)` → `clamp(140px, 16vw, 180px)`
- Dadurch endet die untere Kreishälfte sauber, ohne überflüssigen Leerraum

**6. Section-Bottom-Padding**
- `0 0 60px` → `0 0 32px` (knapperer Übergang zur nächsten Section)

### Erwartetes Ergebnis

```text
       │   (110px Linie, fade)
       │
   ╭───┴───╮          ← Kreis startet, top-arc
   │       │
   │ Vertraut von 50+ Unternehmen
   │       │
═══│═══════│═══  Marquee (Logos schneiden Mitte)
   │       │
   │       │
   ╰───────╯          ← Kreis endet
        (32px)
```

Section-Gesamthöhe sinkt von ~1100px auf ~720px — passt zur Referenz.
