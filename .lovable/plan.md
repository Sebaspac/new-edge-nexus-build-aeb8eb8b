

# OnPage & Content SEO-Optimierung

## Zusammenfassung

Drei Maßnahmen: Title-Tags auf transaktionale Keywords optimieren, H1-H3-Hierarchie korrigieren, und eine Grundlage für den Blog/Ratgeber-Ausbau schaffen.

---

## 1. Title-Tags auf Fokus-Keywords optimieren

Aktuelle und neue Title-Tags:

| Seite | Aktuell | Neu |
|-------|---------|-----|
| **Home** | KI-Agentur München – Brand, Digital & AI \| New Edge Brand | KI-Agentur München \| Prozessautomatisierung & Markenaufbau für KMU \| New Edge |
| **Studio** | Studio – Brand & Strategieberatung München \| New Edge Brand | Brand Strategie & KI-Audit München \| BAFA-förderfähig \| New Edge |
| **Lab** | Lab – Webentwicklung, KI-Systeme & LLM Deployment München \| New Edge Brand | Webentwicklung & KI-Automatisierung München \| LLM Deployment für KMU \| New Edge |
| **Services** | Unsere Leistungen \| KI Agentur München \| Prozessautomatisierung \| New Edge | KI-Leistungen München \| Prozessautomatisierung & Marketing für KMU \| New Edge |
| **Cases** | Cases – Projekte & Ergebnisse \| New Edge Brand | KI-Projekte & Case Studies \| Prozessautomatisierung Ergebnisse \| New Edge |
| **Blog** | Blog \| KI & Automatisierung Insights \| New Edge | KI-Blog \| Prozessautomatisierung, KI-Tools & Strategien für KMU \| New Edge |
| **KI-Audit** | KI Enablement & Audit \| Prozessautomatisierung \| New Edge | KI-Audit für den Mittelstand \| BAFA-förderfähig ab €448 \| New Edge |
| **Karriere** | Karriere – Arbeiten bei New Edge Brand München | Karriere bei New Edge München \| Jobs in KI, Brand & Digital |
| **Über uns** | Über uns – Das Team hinter New Edge Brand München | Über New Edge \| KI-Agentur München für Marke, Digital & AI |
| **Kontakt** | Kontakt \| New Edge – KI Agentur München | Kontakt \| KI-Beratung & Prozessautomatisierung München \| New Edge |

**Dateien:** `src/pages/Index.tsx`, `Studio.tsx`, `Lab.tsx`, `Services.tsx`, `CaseStudies.tsx`, `Blog.tsx`, `KiAudit.tsx`, `Careers.tsx`, `About.tsx`, `Contact.tsx`

---

## 2. H1-H3 Hierarchie korrigieren

### Probleme gefunden:
- **Blog (/blog)**: Keine H1 vorhanden — Überschrift fehlt komplett
- **Home**: H1 in `HeroSection.tsx` sagt "Dein Partner für systeme, Brand & KI" — sollte Fokus-Keyword enthalten
- **Services**: H1 sagt "THE NEW EDGE JOURNEY" — kein Keyword-Bezug
- **UseCases**: H1 ist dynamisch pro Case Study — OK aber generische Seite hat keine eigene H1

### Fixes:
| Seite | Änderung |
|-------|----------|
| **Home** (`HeroSection.tsx`) | H1-Text ändern zu "Die KI-Agentur für Brand, Digital & AI" (passend zur SEO-Strategie) |
| **Services** (`Services.tsx`) | H1-Text ändern zu "Unsere Leistungen" oder "KI-Leistungen für Unternehmen" |
| **Blog** (`Blog.tsx`) | H1 hinzufügen: "Blog – KI & Automatisierung Insights" als sichtbare Überschrift |
| **Home** (`HeroSection.tsx`) | Subheadline H2 → bleibt H2 ✓ |

Alle anderen Seiten (Studio, Lab, About, Careers, Cases, KI-Audit, Case Studies) haben korrekte einzelne H1s.

---

## 3. Blog/Ratgeber-Grundlage verbessern

Der Blog existiert bereits mit 4 Artikeln. Um die Awareness-Phase besser abzudecken:

- **Meta-Descriptions der Blog-Artikel** mit transaktionalen Keywords anreichern (z.B. "KI-Implementierung Kosten", "Make.com vs Zapier")
- **Blog-Übersichtsseite** bekommt eine keyword-optimierte H1 und Description

Dies ist eine rein textliche Optimierung — keine neuen Artikel, nur bessere SEO-Signale auf bestehenden Inhalten.

---

## Technische Details

- **Betroffene Dateien**: 12 Dateien (10 Pages + `HeroSection.tsx` + `SEOHead.tsx`)
- **Art der Änderungen**: Reine Text/String-Änderungen in Title-Tags, H1-Texten und Meta-Descriptions
- **Keine strukturellen Änderungen** am Code oder Layout
- **SEOHead-Komponente** bleibt unverändert (funktioniert korrekt)

