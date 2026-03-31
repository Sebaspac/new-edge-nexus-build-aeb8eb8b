

# Logo-Overlay auf dem Hero-Roboter

## Ziel
Das hochgeladene NE-Logo als 2D-Overlay über dem 3D-Roboter in der Hero-Sektion platzieren, sodass es aussieht, als wäre der Roboter mit dem Logo gebrandet.

## Umsetzung

### Schritt 1: Logo-Datei ins Projekt kopieren
- `Logo_completo_letras_blancas.png` nach `src/assets/ne-logo-brand.png` kopieren

### Schritt 2: Logo-Overlay in HeroSection.tsx
- Im rechten Grid-Bereich (wo `LazySplineScene` liegt) ein absolut positioniertes `<img>` einfügen
- Positionierung: zentriert auf der "Brust"-Region des Roboters (~40% von oben, 50% horizontal)
- Styling:
  - `pointer-events-none` (3D-Interaktion nicht blockieren)
  - `mix-blend-mode: screen` für nahtlose Integration
  - Leichter `drop-shadow` mit Violet-Glow
  - Größe: ~80-120px, responsive skaliert
  - Leichte Transparenz (`opacity-80`) damit es sich natürlich einfügt
- Auf Mobile ausblenden oder kleiner machen, da der Roboter dort im Hintergrund liegt

### Technische Details

**Datei:** `src/components/HeroSection.tsx`

Im rechten Grid-Container (um Zeile 109-115), innerhalb des `<div>` das `LazySplineScene` enthält, wird das Logo als absolut positioniertes Element ergänzt:

```tsx
import neBrandLogo from "@/assets/ne-logo-brand.png";

// Inside the right-side div:
<img 
  src={neBrandLogo}
  alt=""
  className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 lg:w-28 opacity-80 pointer-events-none z-20 drop-shadow-[0_0_20px_rgba(124,58,237,0.5)]"
  style={{ mixBlendMode: 'screen' }}
/>
```

