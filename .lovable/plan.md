

## Partner-Banner (helles Theme)

### Komponente: `src/components/PartnerBanner.tsx`
- Heller Hintergrund (`bg-primary-foreground`) passend zum restlichen Design
- Überschrift: "Wir sind Partner von" + Badges "BAFA-akkreditiert" / "International akkreditiert"
- 3 Logos nebeneinander (dunkel, kein Grayscale, kein Invert) — auf Mobile gestapelt
- Fade-in Animation mit `motion.div` (whileInView)
- Hard-Edge Design (rounded-none)

### Assets
- 3 hochgeladene Logos nach `src/assets/partners/` kopieren

### Integration in `src/pages/Index.tsx`
- Direkt nach `<EntryPointCTA />`, vor `<InteractiveCore />`

