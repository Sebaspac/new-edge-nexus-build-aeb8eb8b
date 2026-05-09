## Ziel

Die Homepage (`/`) bekommt eine neue, fokussiertere Reihenfolge und ein durchgehend hochwertiges, immersives Look-and-Feel. Hero bleibt 1:1 unverändert (inkl. Logo Badge). Der bestehende Bento Grid (StudioStrategySection) wird 1:1 als „Unsere Services"-Sektion übernommen.

## Neue Reihenfolge auf `/`

```text
1. Hero                       (HeroSection — UNVERÄNDERT)
2. Trust / LogoCloud          (LogoCloud — unverändert, bleibt im dunklen Hero-Block)
3. Deine Prozesse & Leistungen (MethodologyGrid)
4. Featured Case: AlbaNova    (NEU — großer angehefteter Case-Block)
5. How we work                (PositionedForImpactSection)
6. Unsere Services — Bento    (StudioStrategySection 1:1, jetzt hier verortet)
7. BAFA-Akkreditierung        (PartnerBanner)
8. Rezensionen                (TestimonialsSection)
9. CTA                        (ThreeStepsCTA)
10. Footer
```

Entfernt aus `/` (bleiben in den jeweiligen Unterseiten erhalten):
- ProblemSolutionFraming
- CaseStudiesGrid (ersetzt durch Featured AlbaNova + Link „Alle Cases ansehen")
- EntryPointCTA
- InteractiveCore

## Featured Case AlbaNova (neue Komponente)

Neue Datei `src/components/FeaturedCaseAlbaNova.tsx`:
- Vollbreite, dunkle Sektion mit subtilem Noise-Overlay
- Linke Spalte: kleines Eyebrow „Featured Case · Bayerischer Mittelstandspreis 2026", H2 „AlbaNova", Kurzbeschreibung, 3 Kennzahlen (Outline-Numbers im Stil der Bento Cards), CTA „Case ansehen" → `/case-studies/albanova`
- Rechte Spalte: Header-Image aus AlbaNova mit Parallax-Scroll (yRange via `useScroll`/`useTransform`), 4:3 Aspect, hard-edge
- Sticky-Reveal beim Scrollen (motion `whileInView`, gestaffelt)

## High-End Immersion (global)

Neue Utilities + dezenter Einsatz, ohne bestehendes Design zu brechen:

1. **Smooth Scroll (Lenis)**
   - Paket `lenis` (oder `@studio-freight/lenis`) hinzufügen
   - Neuer Hook `src/hooks/useLenis.ts` — initialisiert Lenis im `useEffect`, syncs mit `requestAnimationFrame`, deaktiviert bei `prefers-reduced-motion` und auf Touch-Geräten (`useIsMobile`)
   - Aufruf einmalig in `src/pages/Index.tsx`

2. **Section Reveals + Parallax**
   - Neue Wrapper-Komponente `src/components/ui/RevealSection.tsx` (motion.section mit `initial opacity 0 / y:40`, `whileInView` opacity 1 / y:0, viewport once, easing `[0.22,1,0.36,1]`)
   - Parallax-Bilder via `useScroll` + `useTransform` y `[-40, 40]px`. Eingesetzt für AlbaNova-Bild und Founders-Bild in PositionedForImpact.

3. **Magnetische Hover**
   - Neue Komponente `src/components/ui/MagneticButton.tsx`: nimmt children, trackt Mausposition relativ zur Bounding Box und transformiert via Spring (max 8px). Auf Mobile no-op.
   - Eingesetzt für die zwei Hero-CTAs (Wrapping ohne Style-Änderung), Featured-Case-CTA, ThreeStepsCTA Buttons.

4. **Noise/Grain Overlay**
   - Neue Komponente `src/components/ui/NoiseOverlay.tsx` — fixed/absolute SVG-feTurbulence Layer mit `opacity 0.04`, `mix-blend-overlay`, `pointer-events-none`
   - Globaler dezenter Layer als `fixed inset-0 z-[1] pointer-events-none` einmal in `Index.tsx`; zusätzlich verstärkt (opacity 0.06) lokal in dunklen Sektionen (Hero-Block, Featured AlbaNova, ThreeStepsCTA).

5. **MethodologyGrid Polish**
   - Hairline-Divider zwischen Karten, Outline-Number Hover-Akzent (analog Bento), `whileInView` Stagger, kein strukturelles Redesign.

## Memory-Konformität

- `rounded-none` überall (Featured Case, Magnetic Wrapper passt sich an)
- Container `container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl`
- DM Serif Display für Headlines, Consolas für Body
- Bento Grid bleibt 1:1 (keine Änderungen an `StudioStrategySection.tsx`)

## Technische Änderungen — Dateiliste

- `src/pages/Index.tsx` — Reihenfolge umbauen, Lenis/Noise einhängen, entfernte Sektionen rauswerfen
- `src/components/FeaturedCaseAlbaNova.tsx` — NEU
- `src/components/ui/RevealSection.tsx` — NEU
- `src/components/ui/MagneticButton.tsx` — NEU
- `src/components/ui/NoiseOverlay.tsx` — NEU
- `src/hooks/useLenis.ts` — NEU
- `src/components/HeroSection.tsx` — CTAs in `<MagneticButton>` wrappen (keine visuellen Änderungen sonst)
- `src/components/PositionedForImpactSection.tsx` — Bild bekommt Parallax-Transform
- `src/components/MethodologyGrid.tsx` — kleiner Hover/Reveal-Polish
- `package.json` — `lenis` als Dependency

## Out of Scope

- Hero (HeroSection.tsx) bleibt visuell und strukturell unangetastet
- Bento Grid (StudioStrategySection.tsx) bleibt 1:1
- Keine Backend-/Daten-/Routing-Änderungen
- Andere Seiten (`/studio`, `/lab`, `/case-studies` …) werden nicht angefasst
