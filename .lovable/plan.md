

# Split-Screen Scroll-Animation fuer Studio Services

## Konzept

Die drei Service-Module werden als **immersive, vollbild Split-Screen Sektionen** praesentiert, bei denen beim Scrollen die linke und rechte Haelfte in entgegengesetzte Richtungen sliden (links von unten, rechts von oben). Das erzeugt einen cinematischen Uebergangseffekt zwischen den Services.

## Architektur

### Neue Komponente: `src/components/ui/studio-scroll-sections.tsx`

Eine angepasste Version der `animated-scroll` Komponente, speziell fuer die Studio-Seite:

- **3 Fullscreen-Slides** statt 5 generischer Pages
- **Linke Haelfte**: Service-Text (Nummer, Titel, Problem, Loesung)
- **Rechte Haelfte**: Die bestehende Animation (BrandStrategyAnimation, KiAuditAnimation, BrandIdentityAnimation)
- **Slide-Richtung alterniert**: Links kommt von unten, Rechts von oben (wie im Original)
- **Scroll-Hijacking** nur innerhalb der Sektion (nicht die gesamte Seite), gesteuert durch einen IntersectionObserver
- Deliverables erscheinen als Overlay-Cards am unteren Rand jedes Slides

### Technische Details

- Kein Scroll-Hijacking der ganzen Seite -- stattdessen wird die Komponente in einen Container mit `h-[100vh]` und `position: sticky` eingebettet, sodass sie sich beim normalen Scrollen durch die Seite aktiviert
- Die Scroll-Position innerhalb des sticky-Containers steuert die Slide-Transitions via `useScroll` von Framer Motion
- Keine externen Dependencies noetig -- alles mit React State + CSS Transforms + Framer Motion (bereits installiert)
- TypeScript-typisiert
- Responsive: Auf Mobile werden die Slides vertikal gestapelt (kein Split), mit einfachen Fade-Uebergaengen

### Aenderungen an `src/pages/Studio.tsx`

- Der bisherige `studioServices.map()` Block (Sektionen 3-5, Zeilen 209-277) wird durch die neue `StudioScrollSections` Komponente ersetzt
- Die Service-Daten (studioServices Array) werden als Props uebergeben
- Hero, Manifesto, Case Study und CTA Sektionen bleiben unveraendert

### Scroll-Mechanik (Sticky-Scroll Ansatz)

```text
Normales Scrollen
    |
    v
[Hero]
[Manifesto]
    |
    v  Sektion wird sticky
+-----------------------------------+
|  STUDIO SCROLL CONTAINER          |
|  (height: 300vh, position: rel)   |
|                                   |
|  +-----------------------------+  |
|  | Sticky Inner (100vh)        |  |
|  |                             |  |
|  | +----------+ +----------+  |  |
|  | | LEFT     | | RIGHT    |  |  |
|  | | Text     | | Anim     |  |  |
|  | | slides   | | slides   |  |  |
|  | | down>up  | | up>down  |  |  |
|  | +----------+ +----------+  |  |
|  +-----------------------------+  |
+-----------------------------------+
    |
    v  Sticky loest sich
[Case Study]
[CTA]
[Footer]
```

Der aeussere Container ist `300vh` hoch (3 Services x 100vh). Der innere Container klebt mit `position: sticky; top: 0` und ist `100vh` hoch. Die Scroll-Position innerhalb des aeusseren Containers (0% bis 100%) steuert welcher Slide sichtbar ist.

### Visuelles Design pro Slide

- **Hintergrund**: Weiss, konsistent mit dem hellen Theme
- **Linke Seite**: Service-Nummer gross dekorativ, Titel, Problem/Loesung Text
- **Rechte Seite**: Die bestehende Animation-Komponente, zentriert
- **Deliverables**: 4 kleine Cards am unteren Rand, eingeblendet mit Fade wenn Slide aktiv
- **Uebergang**: CSS `transform: translateY()` mit `transition: transform 0.8s cubic-bezier(0.76, 0, 0.24, 1)` -- links und rechts in entgegengesetzte Richtungen
- **Dot-Navigation**: Kleine vertikale Dots am rechten Rand zeigen den aktuellen Slide

### Dateien

| Datei | Aktion |
|-------|--------|
| `src/components/ui/studio-scroll-sections.tsx` | Neu erstellen |
| `src/pages/Studio.tsx` | Service-Sektionen durch neue Komponente ersetzen |

### Keine neuen Dependencies noetig
- React State fuer aktuelle Seite
- Framer Motion `useScroll` + `useTransform` fuer Scroll-Progress
- CSS Transforms fuer die Split-Animation
- Alles bereits im Projekt vorhanden

