## Ziel

Die bestehende Pain-Point-Seite `PainPointAuswahlverfahren.tsx` bleibt strukturell **1:1 unverändert** (Layout, Komponenten, Animationen, Bildplatzhalter, Farbsystem). Pro Slug werden ausschließlich **Texte** ausgetauscht — gemäß dem gelieferten SEO-Audit für die 5 Pain Points A–E.

Bilder/Icons werden **nicht** generiert. Die bestehenden Bild-Imports (`painpoint-a-*`, `iconAnalyse`, etc.) bleiben als Platzhalter erhalten und werden später pro Slug ersetzt — markiert per `imagePlaceholder`-Feld im Content-Objekt.

---

## Architektur

Ein einziger zentraler Content-Store, eine generische Page-Komponente. Keine Layout-Duplikation.

```text
src/
  content/
    painPoints.ts            ← NEU: alle 5 Pain-Point-Inhalte als typisiertes Objekt
  pages/
    PainPointAuswahlverfahren.tsx  ← wird zur generischen Seite umgebaut
                                     (liest content[slug] via useParams)
```

### Slug-Mapping (Routen sind bereits in App.tsx vorhanden)

```text
/loesungen/auswahlverfahren-automatisieren     → A  (auswahlverfahren)
/loesungen/kundengewinnung-automatisieren      → B  (kundengewinnung)
/loesungen/compliance-automatisierung          → C  (compliance)
/loesungen/kpi-dashboard-echtzeit              → D  (kpi-dashboard)
/loesungen/ki-kundensupport                    → E  (ki-kundensupport)
```

Zusätzlich Alias über `/leistungen/pain-points/:slug` (bereits geroutet) — gleicher Content.
Fallback bei unbekanntem Slug: Inhalt von Pain Point A (Auswahlverfahren).

---

## Content-Schema (`src/content/painPoints.ts`)

Pro Slug exakt das gleiche Schema, abgebildet auf die bestehenden Sektionen der aktuellen Seite:

```text
PainPointContent {
  slug, seo { title, description, canonical },
  hero { overlabel, h1Line1, h1Line2Highlighted, sub, ctaPrimary, ctaSecondary, imagePlaceholder },
  trustBar { headline, sub, logos[] },
  definition { title, body },                 // Section 0 (NEU als sichtbarer Block)
  feature1 { h2, sub, bullets[3], cta, imagePlaceholder },
  feature2 { h2, sub, bullets[3], cta, imagePlaceholder },
  feature3 { h2, sub, bullets[3], cta, imagePlaceholder },
  integrations { h2, sub, logos[] },
  compare { h2, columnLabels:[neA, alt], rows:[[krit, neA, alt], …] },
  featureCards [3] { iconPlaceholder, title, desc },
  testimonialHero { quote, author },
  faq [4] { q, a },
  closingCta { h2, sub, ctaPrimary, ctaSecondary }
}
```

Alle Texte, Bullets, FAQs, Vergleichstabellen, Closing-CTAs, Definition Blocks, Title/Meta/Canonical werden **wortwörtlich** aus dem Audit übernommen — für alle 5 Pain Points.

---

## Generische Seite

`PainPointAuswahlverfahren.tsx` wird umgebaut auf:

1. `const { slug } = useParams()` → `content = painPoints[slug] ?? painPoints.auswahlverfahren`
2. Alle hartkodierten Strings (Hero, Bullets, Compare-Tabelle, Feature Cards, FAQ, Closing CTA, SEOHead-Props, Trust-Bar-Logos, Integrations-Logos) → durch `content.*` ersetzt.
3. JSON-LD `FAQPage` wird aus `content.faq` generiert (bereits vorhanden, nur Quelle wechseln).
4. Bild-Imports bleiben als **Default-Platzhalter** stehen; pro Sektion wird via `content.*.imagePlaceholder` ein Label/Alt-Text gesetzt. Tatsächliche Bilddateien tauschen wir später.
5. Section 0 (Definition Block) wird als **neuer schlanker Textblock** zwischen Hero und Feature Block 1 eingefügt — dezent, crawl-priorisiert (semantisches `<section>` + `<h2>` "Was ist …?").

Keine Änderungen an Animationen, Hintergrundformen, Marquee-Logik, Buttons, Footer, MobileNavigation, Spacing — nur Text-Bindings.

---

## Zu erstellende / ändernde Dateien

```text
NEU:        src/content/painPoints.ts          (Content für A–E, ~600 Zeilen Text)
GEÄNDERT:   src/pages/PainPointAuswahlverfahren.tsx
              - useParams + Content-Lookup
              - alle hartkodierten Strings durch content.* ersetzt
              - Section 0 (Definition Block) neu eingefügt
GEÄNDERT:   public/sitemap.xml                 (5 neue /loesungen/* URLs)
GEÄNDERT:   public/robots.txt                  (User-agent: ClaudeBot ergänzen)
```

App.tsx-Routing ist bereits korrekt aufgesetzt — keine Änderung nötig.

---

## Was bewusst NICHT Teil dieses Plans ist

- Keine neuen Bilder/Icons/Animationen (Platzhalter bleiben, werden gekennzeichnet).
- Kein Refactor des Layouts oder Designs.
- Keine Änderungen an Studio/Lab/Index oder anderen Seiten.
- Kein neues Mega-Menü, keine neuen Routen — die Routen existieren bereits in `App.tsx`.

---

## Ergebnis nach Umsetzung

- 5 vollständig unterschiedliche Pain-Point-Seiten mit identischer Struktur, eigenen Texten, eigenen Title/Meta/Canonical/FAQ-Schemas.
- Pflege aller 5 Seiten zentral in einer Datei (`painPoints.ts`).
- Erweiterung um weitere Pain Points oder Industrien später = nur ein neuer Eintrag im Content-Objekt.
