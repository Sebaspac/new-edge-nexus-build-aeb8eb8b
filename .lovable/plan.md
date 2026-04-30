
## Ziel

Eine fixierte Scroll-Legende (vertikale Navigationsstriche rechts am Bildschirmrand) auf `/loesungen/auswahlverfahren-automatisieren` einbauen. Beim Hovern werden Section-Namen sichtbar, Klick scrollt zur Section. Aktive Section wird hervorgehoben. Die Hero-Section wird ausgenommen.

## Schritte

### 1. ScrollLegend-Komponente erstellen
- Neue Datei `src/components/ui/scroll-legend.tsx` mit der bereitgestellten Komponente
- Nutzt nur `cn` aus `@/lib/utils` und `useState`/`useEffect` — keine neuen Dependencies nötig
- Farben anpassen: Aktiv-Indikator in Primary Purple (#a855f7), Text in Consolas-Font

### 2. Sections mit IDs versehen
Jede Content-Section in `PainPointAuswahlverfahren.tsx` bekommt eine `id`:
- `definition` — Definition
- `feature-01` — Dokumenten-Chaos
- `feature-02` — Jury-Koordination
- `feature-03` — Analysen & Insights
- `integrations` — Integrationen
- `comparison` — Vergleich
- `features` — Kernfunktionen
- `testimonial` — Testimonial
- `faq` — FAQ
- `cta` — Drei Schritte

### 3. ScrollLegend in die Seite einbinden
- In `PainPointAuswahlverfahren.tsx` die `ScrollLegend` mit den Legend-Items rendern
- Fixiert rechts, nur auf Desktop sichtbar (`hidden lg:flex`)
- Erscheint erst nach dem Hero (via Scroll-Position oder innerhalb des Light-Content-Wrappers)

### Keine Änderungen an
- Bestehenden Section-Layouts oder Styles
- Hero-Section
- Anderen Seiten
