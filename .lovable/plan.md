## Plan: Logo-Trimming für einheitliche Größen

### Problem
Die Logo-Dateien haben extrem unterschiedlichen Whitespace:
- Neue PNGs: 1-2% Whitespace → erscheinen groß
- Alte WebPs: 58-94% Whitespace → erscheinen winzig (z.B. Hyde Official hat 94% leeren Raum!)

### Lösung
**Alle Logo-Bilder automatisch trimmen** — den transparenten Rand abschneiden, sodass nur der eigentliche Logo-Inhalt übrig bleibt. Dann rendern alle bei `height: 56px` gleichmäßig groß.

### Betroffene Dateien
Per Python-Skript automatisch trimmen:
- `sadie-kessler.webp` (79% whitespace)
- `circle-photo.webp` (58%)
- `hyde-official.webp` (94%)
- `darius-company.webp` (84%)
- `muse-studio.webp` (89%)
- `dr-aaron-loeb.webp` (76%)
- `pure-design.webp` (90%)
- `seabreeze.webp` (67%)
- `dr-linda-fischer.png` (1% — minimal)
- `elite-aesthetic.png` (2% — minimal)
- `meyer-henrich.png` (1% — minimal)
- `bayerischer-mittelstandspreis-2026.png` (1%)

Plus kleinen Padding-Rand (8px) nach dem Trim hinzufügen, damit die Logos nicht direkt an der Kante kleben.

### Was NICHT geändert wird
- Kreis (SVG, Größe, Glow) — bleibt exakt
- Logo-Cloud Komponent-Logik — bleibt
- Höhe/maxWidth der Logos im Code — bleibt bei 56px/180px
