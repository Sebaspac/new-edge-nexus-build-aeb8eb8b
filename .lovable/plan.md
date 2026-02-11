

# Case Studies Seite: Helles Theme und Layout-Anpassung

## Zusammenfassung
Die Case Studies Seite (`/case-studies`) wird von einem dunklen auf ein helles Theme umgestellt. Die Studio-Reihe behalt die Anordnung Cases links, Label rechts bei (erster Case ganz links).

---

## Anderungen im Detail

### 1. Hintergrund und Grundfarben
- `bg-black` / `backgroundColor: "#000000"` wird zu `bg-white`
- MobileNavigation `theme="dark"` wird zu `theme="light"`

### 2. Textfarben anpassen
- **CategoryRow**: `border-white/10` wird zu `border-black/10`
- **Titel (h2)**: `text-white` wird zu `text-black`
- **Subtitle (p)**: `text-gray-400` wird zu `text-gray-500`
- **CTA Headline**: `text-white` wird zu `text-black`
- **CTA Button**: `bg-white text-black` wird zu `bg-black text-white` (invertiert)

### 3. CaseCard Farben anpassen
- Gradient Overlay bleibt dunkel (Bilder brauchen dunklen Overlay fur Lesbarkeit)
- Textfarben in den Cards bleiben hell (auf dunklem Bild-Overlay)

### 4. Studio-Reihe: direction bleibt "left"
- Cases links, Label rechts -- erster Case ist ganz links (bereits so konfiguriert)

---

## Betroffene Datei
`src/pages/CaseStudies.tsx` -- Theme-Klassen im gesamten Layout umstellen

