## Ziel

Die Hero-Section auf der Startseite skaliert genauso großzügig wie die BrandFlow-Referenz (riesige H1, klare Hierarchie, deutlich Whitespace), und die existierende Logo-Cloud („Vertraut von führenden Unternehmen") wandert direkt unter den Hero-Inhalt — innerhalb derselben dunklen Hero-Sektion. CI bleibt: Brand-Lila `#a855f7` für Akzent, DM Serif Display für H1.

## Was sich ändert (nur Frontend, nur HeroSection)

Datei: `src/components/HeroSection.tsx`

### 1. Größenraster wie BrandFlow

| Element | Vorher | Neu (an Referenz) |
|---|---|---|
| H1 | `text-4xl … xl:text-8xl` | `text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem]`, `leading-[1.02]`, `tracking-tight` |
| Subline | `text-sm … md:text-lg`, `max-w-2xl` | `text-base sm:text-lg md:text-xl`, `max-w-3xl`, `leading-[1.55]` |
| CTA-Buttons | `py-3.5 px-6/8`, `text-sm sm:text-base` | `py-4 sm:py-5 px-7 sm:px-9`, `text-base sm:text-lg`, mehr Mindestbreite |
| Clutch-Badge | klein | unverändert klein, aber etwas mehr Abstand zum H1 |
| Vertikaler Rhythmus | `space-y-6 sm:space-y-8` | `space-y-7 sm:space-y-9 md:space-y-10` |
| Trust-Line | knapp drunter | mit deutlich mehr Top-Padding (`pt-10 sm:pt-14`) |
| Container | `max-w-5xl` | `max-w-6xl` für die Headline-Breite wie im Referenzbild |

Padding der Sektion bleibt `pt-[88px] pb-20`, damit der Header nicht überdeckt wird. „Spots Available"-Indikator wandert direkt unter die CTAs (wie im Referenzbild) — Text bleibt „Aktuell 2 Plätze für Q2 verfügbar".

Hard-Edge-Regel bleibt erhalten (`rounded-none`), Buttons behalten Lila-Fill / Outline-Variante.

### 2. Logo-Cloud in den Hero integrieren

- `LogoCloud` wird **innerhalb** der Hero-Sektion am unteren Rand gerendert (statt nach der Hero-Section in `Index.tsx`).
- Headline darüber ändert sich auf „Vertraut von führenden Unternehmen" (bestehender Text der Komponente).
- Damit die Logo-Cloud auf dem schwarzen Hero-Hintergrund funktioniert, wird eine kleine Variante über eine Prop oder Wrapper erzeugt: Hintergrund transparent statt `bg-background`, Fade-Overlays gegen Schwarz statt gegen Background, Texte/Logos passend hell.
  - Kleinster Eingriff: in `HeroSection.tsx` einen Wrapper `<div className="relative z-20 mt-12 sm:mt-16">` rendern und darin eine inline-light-Version (Headline `text-white/60`, Logos behalten Grayscale-Hover).
  - Die Logo-Cloud wird dafür nicht doppelt gerendert: in `src/pages/Index.tsx` wird das eigenständige `<LogoCloud />` direkt nach dem Hero entfernt.
- Logos bleiben exakt die heute verwendeten echten Kunden/Marken aus `src/components/ui/logo-cloud.tsx`.

### 3. Layout/Höhe

- Hero behält `min-h-[100dvh]` (Memory-Regel „Heroes use 100dvh").
- Inhalt + Logo-Cloud werden vertikal so verteilt, dass H1+CTA mittig liegen und Logos im unteren Drittel stehen (Flex-Layout mit `justify-between`-Sektionen).

### 4. Was NICHT geändert wird

- Keine Schriftumstellung auf Sans-Serif — DM Serif Display bleibt.
- Keine Farbänderung — Brand-Lila bleibt Akzent, kein Grün.
- Keine Änderungen an Navigation, restlichen Sektionen, Routing, Edge Functions oder DB.
- CSS-Hintergrund (Radial Glow + Grid-Mask) bleibt wie im letzten Fix — kein WebGL.

## Technische Details

```text
HeroSection.tsx
├── <section min-h-[100dvh]>
│   ├── Background layers (unchanged)
│   ├── <div flex flex-col justify-between min-h-[100dvh] pt-[88px] pb-12>
│   │   ├── (spacer)
│   │   ├── <motion.div max-w-6xl text-center space-y-7…10>
│   │   │     Clutch · H1 · Subline · CTAs · Spots · Trust line
│   │   └── <div mt-12 sm:mt-16>  ← NEW
│   │         Logo-Cloud (transparent, white/60 caption)
│   └── ScrollIndicator
```

`src/pages/Index.tsx`: nur Zeile mit `<LogoCloud />` zwischen Hero und MethodologyGrid entfernen, damit es nicht doppelt erscheint.

## Akzeptanzkriterien

- H1 bricht auf Desktop in 2 Zeilen, ist deutlich größer und „präsenter" als jetzt — ähnlicher Whitespace-Anteil wie BrandFlow.
- Beide CTAs sind sichtbar größer (Höhe ≥ 56px Desktop), gleich hoch, behalten Lila-Fill bzw. Outline.
- „Aktuell 2 Plätze"-Indikator steht direkt unter den CTAs.
- Logo-Marquee läuft direkt unter dem Hero-Block, auf schwarzem Hintergrund, ohne weiße Kanten.
- Keine doppelte Logo-Cloud weiter unten auf der Seite.
- Mobile (≤390px): H1 bleibt lesbar (kein horizontales Scrollen), CTAs full-width.
- Build bleibt grün, keine neuen Imports nötig (`LogoCloud` existiert bereits).

## Risiken / Edge Cases

- Logo-Cloud Komponente nutzt `bg-background` → muss in der Hero-Variante transparent sein, sonst entsteht ein heller Streifen unten im Hero. Lösung: inline-Wrapper-Variante in HeroSection statt der Default-Komponente, oder optionale `variant="onDark"`-Prop einführen (kleinster Patch: inline-Variante).
- Sehr hohe H1 könnte bei kleinen Laptops (≤768h) den 100dvh sprengen. Lösung: `clamp` für H1 + `pb-12` statt `pb-20` auf Desktop, plus `justify-between` schützt vor Überlauf.
