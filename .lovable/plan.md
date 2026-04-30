## Ziel

Neuer Navi-Punkt **Leistungen** ersetzt logisch das alte "Services". Beim Hover öffnet sich ein **Mega-Menü** im Dapta-Stil mit zwei Spalten links (Pain Points / Industrien) und einer Featured-Case-Card ganz rechts. Anschließend bauen wir **eine** vollständige Musterseite für **Pain Point A — Auswahlverfahren** mit allen 12 Sections in New Edge CI. Industrien-Seiten werden noch nicht gebaut, nur als Routes/Stubs vorbereitet.

## 1. Navigation – Mega-Menü "Leistungen"

**Datei:** `src/components/MobileNavigation.tsx` (Desktop-Bereich erweitern, Services-Dropdown ersetzen)

Layout (Desktop, beim Hover auf "Leistungen"):

```text
┌──────────────────────────────────────────────────────────────┐
│  PAIN POINTS              INDUSTRIEN          FEATURED CASE  │
│  ─ Auswahlverfahren       ─ Awards & Jurys                   │
│  ─ Kundengewinnung        ─ Gym & Spa         [Card mit Bild │
│  ─ Import / Compliance    ─ Handel & Logistik  + BMP Award   │
│  ─ KPI & Reporting        ─ Mittelstand        Mini-Teaser]  │
│  ─ Kundensupport          ─ E-Commerce                       │
└──────────────────────────────────────────────────────────────┘
```

- Dark Background `#1A1A1A`, hard edges (rounded-none), Spalten-Headlines in Purple-Accent (`#a855f7`), Items in DM Serif Display für Titel + Consolas für Sub.
- Hover-Item: Purple-Underline + leichter Shift.
- Featured-Card rechts: Bild (BMP Award Mockup-Platzhalter), Label "Case Study", Titel, kleiner CTA "Lesen →".
- Alte "Studio / Lab" Punkte wandern als zusätzliche Items ans Ende der Pain-Points-Spalte (Übergangslogik), bis Migration komplett ist.

**Mobile:** "Leistungen" als aufklappbare Sektion mit zwei Subgruppen (Pain Points / Industrien). Featured Card entfällt mobile.

## 2. Routing & Stubs

**Datei:** `src/App.tsx`

Neue Routes:

- `/leistungen/pain-points/auswahlverfahren` → `PainPointAuswahlverfahren` (volle Seite, lazy)
- `/leistungen/pain-points/kundengewinnung` → Stub-Seite "In Arbeit"
- `/leistungen/pain-points/compliance` → Stub
- `/leistungen/pain-points/reporting` → Stub
- `/leistungen/pain-points/kundensupport` → Stub
- `/leistungen/industrien/:slug` → gemeinsame Stub-Komponente

Ein gemeinsamer Stub `src/pages/LeistungenStub.tsx` mit Hero "Bald verfügbar" + Link zurück.

## 3. Musterseite Pain Point A — Auswahlverfahren

**Datei:** `src/pages/PainPointAuswahlverfahren.tsx`

Folgt 1:1 dem Briefing (alle Texte exakt übernommen) und der New Edge CI:

- Backgrounds: Schwarz `#0a0a0a` Hero & Closing, weiß für Mid-Sections wo sinnvoll, Akzent **Purple `#a855f7**` statt Electric Blue (CI-Konformität, abweichend vom Briefing — siehe Hinweis unten).
- Typo: H1/H2 DM Serif Display, Body Consolas.
- Buttons: Liquid-Glass-Style, hard edges, `rounded-none`.

Section-Reihenfolge (alle 12):

1. **Hero** – Oberlabel-Pill, zweiteilige H1 (weiß + purple), Subtext, 2 CTAs, rechts Visual-Placeholder Card "Dashboard Mockup" (Platzhalter-Div mit Beschreibung als Caption, später ersetzbar).
2. **Social Proof Bar** – "Vertraut von führenden Organisationen" + bestehende `LogoCloud`-Komponente (recycelt, kompaktere Variante).
3. **Feature Block 1 – Dokumenten-Chaos** – Visual links / Text rechts. 3 Bullets mit `lucide-react` Icons (FileCheck, ListChecks, Database).
4. **Feature Block 2 – Jury-Koordination** – alterniert: Text links / Visual rechts. Icons: Bell, SlidersHorizontal, Scale.
5. **Feature Block 3 – Implizite Erkenntnisse** – Visual links / Text rechts. Icons: TrendingUp, LayoutGrid, Lightbulb.
6. **Integrations** – Grid mit dunklen Pills (Microsoft Teams, SharePoint, Outlook, HubSpot, Zapier, Make, Notion, Google Workspace, SAP) – Logos als Text-Pills mit Icon-Slot.
7. **Vergleichstabelle** – 2-Spalten-Tabelle "New Edge vs. manueller Prozess", purple Checks, rote X. Hard-edge Tabelle, dunkler Hintergrund.
8. **Feature Cards** – 3er-Grid, je Card mit Icon-Block oben, Titel, Beschreibung. Hover: invert.
9. **Testimonial Hero** – Großer Purple-Card-Block (`#a855f7` Hintergrund), weißes Zitat, Name + Rolle.
10. **Testimonial Grid** – 4×2 Karten, Avatar-Kreis mit Initialen (purple), Name, Rolle, Zitat. Acht Platzhalter-Testimonials.
11. **FAQ** – Zwei-Spalten: links Headline + Kontakt-CTA, rechts `Accordion` (shadcn) mit den 4 Fragen aus Briefing.
12. **Closing CTA** – Volle Breite, Purple-Glow im Hintergrund, große H1, Subtext, zwei CTAs.

Footer + MobileNavigation (theme="dark") wiederverwenden.

SEO via `SEOHead`: Title "KI für Auswahlverfahren & Awards | New Edge", passende Description, canonical Pfad.

## 4. Bilder / Icons / Animationen – Markierung

In der Seite werden visuelle Slots als beschriftete `<div>`-Placeholders mit gestricheltem Border + Caption gerendert (z.B. „🖼️ Hero Visual: Dashboard Mockup, Chaos→Struktur Animation"). So sieht der User sofort wo Assets hin müssen, ohne dass wir bereits Bilder generieren. Icons aus `lucide-react` werden direkt eingebaut.

## CI-Hinweis

Briefing nennt Electric Blue `#00C2FF`. Aktuelle gespeicherte Core-CI = **Purple `#a855f7**`. Ich nutze konsequent Purple, damit die Seite zum Rest der Site passt. Falls du explizit Electric Blue für die neue Leistungs-Welt willst, sag Bescheid – dann tauschen wir den Akzent global für `/leistungen/*`.

- Echte Mockup-Bilder / Animationen generieren

## Out of Scope (jetzt nicht)

- &nbsp;
- Industrien-Seiten ausarbeiten
- Pain Points B–E ausarbeiten
- Alte `/studio` / `/lab` Routen entfernen (bleiben aktiv)