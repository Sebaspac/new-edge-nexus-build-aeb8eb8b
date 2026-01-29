
# Plan: SEO-Optimierung für "KI Agentur München" & "Prozessautomatisierung"

## Ziel
Platz 1 bei Google für die Keywords "KI Agentur München" und "Prozessautomatisierung" erreichen - ausschließlich durch technische und inhaltliche SEO-Änderungen, ohne das Design zu verändern.

---

## Analyse des Ist-Zustands

### Aktuelle Stärken
- Strukturierte Daten (JSON-LD) vorhanden für Organization, Website, ProfessionalService
- robots.txt erlaubt alle relevanten Crawler inkl. AI-Bots
- Sitemap.xml vorhanden
- Google Analytics & GTM integriert
- Meta-Tags auf Hauptseiten vorhanden

### Identifizierte Schwächen
1. **Lokaler Bezug "München" fehlt fast komplett** - nur auf Impressum und Careers erwähnt
2. **Keyword "Prozessautomatisierung" unterrepräsentiert** in Meta-Tags
3. **LocalBusiness Schema zeigt falsche Koordinaten** (Mitte Deutschlands statt München)
4. **Canonical URLs inkonsistent** (mix aus new-edge.com, newedgebrand.com, new-edge.de)
5. **Fehlende Keywords in kritischen Meta-Tags** auf wichtigen Seiten

---

## Geplante Änderungen

### 1. index.html - Haupt-Meta-Tags optimieren
**Datei:** `index.html`

| Element | Vorher | Nachher |
|---------|--------|---------|
| Title | "New Edge - Ihre Agentur für Innovation" | "KI Agentur München | Prozessautomatisierung & Marketing | New Edge" |
| Description | "KI trifft auf Marketing: End to End Agentur..." | "New Edge ist Ihre KI Agentur in München für Prozessautomatisierung, Marketing-Automation und KI-Lösungen für KMU. Jetzt Beratung anfragen!" |
| OG/Twitter Title | (gleich wie Title) | (gleich wie Title) |
| Keywords (NEU) | - | meta name="keywords" hinzufügen |

### 2. StructuredData.tsx - Lokale SEO stärken
**Datei:** `src/components/StructuredData.tsx`

Änderungen am `localBusinessSchema`:
- **Adresse vollständig hinzufügen** mit München
- **Geo-Koordinaten korrigieren** auf München (48.1351, 11.5820)
- **areaServed erweitern** auf München, Bayern, Deutschland

Änderungen am `organizationSchema`:
- **knowsAbout erweitern** mit: "Prozessautomatisierung", "KI Agentur München", "Automatisierung für KMU"

### 3. Index.tsx - Hauptseite Keywords optimieren
**Datei:** `src/pages/Index.tsx`

Helmet-Meta-Tags anpassen:
- Title: "KI Agentur München | Prozessautomatisierung & Marketing für KMU | New Edge"
- Description: "New Edge - Ihre KI Agentur in München. Experten für Prozessautomatisierung, KI-gestütztes Marketing und Digitalisierung im Mittelstand. Jetzt Projekt starten!"
- Keywords erweitern um: "KI Agentur München", "Prozessautomatisierung München", "Automatisierung KMU"

### 4. Lab.tsx - Prozessautomatisierung-Fokus verstärken
**Datei:** `src/pages/Lab.tsx`

Helmet-Meta-Tags anpassen:
- Title: "Prozessautomatisierung München | KI-Lösungen für KMU | New Edge Lab"
- Description: "Prozessautomatisierung mit KI aus München. New Edge Lab entwickelt intelligente Automatisierungslösungen, KI-Agenten und Workflow-Optimierung für den Mittelstand."
- Keywords erweitern um: "Prozessautomatisierung München", "KI Automatisierung", "Workflow Automatisierung"

### 5. About.tsx - Lokalen Bezug stärken
**Datei:** `src/pages/About.tsx`

Helmet-Meta-Tags anpassen:
- Title: "Über New Edge | KI Agentur München | Innovation für KMU"
- Description: "New Edge - KI Agentur aus München. Wir verbinden Strategie, Kreativität und KI-Technologie für den digitalen Erfolg mittelständischer Unternehmen."
- Keywords hinzufügen mit München-Bezug

### 6. Products.tsx (Agenthub) - Keywords ergänzen
**Datei:** `src/pages/Products.tsx`

Helmet-Meta-Tags anpassen:
- Keywords erweitern um: "KI Agenten München", "Prozessautomatisierung Agenten"

### 7. Services.tsx - Keywords ergänzen
**Datei:** `src/pages/Services.tsx`

Helmet hinzufügen (falls noch nicht vorhanden):
- Title: "Unsere Leistungen | KI Agentur München | Prozessautomatisierung | New Edge"
- Description mit München-Fokus

### 8. sitemap.xml - lastmod aktualisieren
**Datei:** `public/sitemap.xml`

- Alle lastmod-Einträge auf aktuelles Datum setzen (2025-01-29)
- Lab-Seite Priorität erhöhen auf 0.9

### 9. HeroSection.tsx - Semantische Keywords
**Datei:** `src/components/HeroSection.tsx`

- Im Badge "Innovationen & Automatisierung" ergänzen zu "KI-Automatisierung aus München"
- Im unsichtbaren aria-label/screen-reader Text Keywords einbauen

---

## Technische Details

### StructuredData.tsx - Vollständiges Schema
```typescript
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.newedgebrand.com/#localbusiness",
  "name": "New Edge - KI Agentur München",
  "alternateName": "New Edge Brand",
  "image": "https://www.newedgebrand.com/favicon.ico",
  "url": "https://www.newedgebrand.com",
  "telephone": "", // falls vorhanden ergänzen
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Zehntfeldstraße 125a",
    "addressLocality": "München",
    "postalCode": "81825",
    "addressRegion": "Bayern",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "48.1351",
    "longitude": "11.5820"
  },
  "areaServed": [
    { "@type": "City", "name": "München" },
    { "@type": "State", "name": "Bayern" },
    { "@type": "Country", "name": "Deutschland" }
  ],
  "serviceType": [
    "KI Agentur",
    "Prozessautomatisierung",
    "Marketing Automatisierung",
    "KI-Entwicklung"
  ],
  ...
};
```

### index.html - Meta-Tag Struktur
```html
<title>KI Agentur München | Prozessautomatisierung & Marketing | New Edge</title>
<meta name="description" content="New Edge ist Ihre KI Agentur in München für Prozessautomatisierung, Marketing-Automation und KI-Lösungen für KMU. Jetzt Beratung anfragen!">
<meta name="keywords" content="KI Agentur München, Prozessautomatisierung, KI Automatisierung, Marketing Automation, KI für KMU, Digitalisierung Mittelstand, München">
```

---

## Betroffene Dateien

| Datei | Änderungen |
|-------|------------|
| `index.html` | Title, Description, Keywords Meta-Tags |
| `src/components/StructuredData.tsx` | LocalBusiness Schema mit München, erweitertes knowsAbout |
| `src/pages/Index.tsx` | Helmet Meta-Tags |
| `src/pages/Lab.tsx` | Helmet Meta-Tags |
| `src/pages/About.tsx` | Helmet Meta-Tags |
| `src/pages/Products.tsx` | Keywords ergänzen |
| `src/pages/Services.tsx` | Helmet hinzufügen/erweitern |
| `src/pages/Studio.tsx` | Keywords mit München |
| `src/pages/Media.tsx` | Keywords mit München |
| `public/sitemap.xml` | lastmod aktualisieren, Lab-Priorität erhöhen |
| `src/components/HeroSection.tsx` | Semantische Anpassung im Badge-Text |

---

## Erwartetes Ergebnis
- Starker lokaler SEO-Fokus auf "München"
- Keyword-Dichte für "Prozessautomatisierung" erhöht
- Strukturierte Daten signalisieren lokale Präsenz
- Keine sichtbaren Design-Änderungen
- Verbesserte Rankings für die Ziel-Keywords

