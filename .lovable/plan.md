
# Animation fuer "KI Enablement & Audit" neu gestalten

## Problem
Die aktuelle Animation (`BrandIdentityAnimation`) zeigt Brand-Design-Konzepte (Logo-System, Farb-System, Typografie, Brand Book), obwohl sie fuer das Service-Modul "KI Enablement & Audit" verwendet wird. Die Inhalte passen nicht zur Dienstleistung.

## Neues Konzept: KI Audit Animation

Die Animation soll den Audit-Prozess visuell darstellen -- von der Analyse bestehender Systeme bis zur Go/No-Go-Entscheidung.

### Visuelle Elemente

**Links -- Analyse-Phase:**
- Drei gestaffelte Elemente die nacheinander erscheinen:
  - "Prozesse & Tools" mit Scan-Icon (aktiviert sich schrittweise)
  - "KI-Potenziale" mit Brain-Icon
  - "Daten & Risiken" mit Shield-Icon
- Status-Labels: "Erfasst", "Bewertet", "Geprueft"

**Mitte -- Zentraler Hub:**
- Ein rotierender Ring aus gestrichelten Linien (wie ein Radar-Scan)
- Zentrales Icon: Search/Scan statt Palette
- Subtiler Pulse-Effekt

**Rechts -- Ergebnis-Phase:**
- Status-Karten:
  - "Governance" mit Amber-Status "In Bewertung..."
  - "Empfehlung" mit Gruen-Status "Go-Entscheidung"

**Unten -- Deliverables-Leiste:**
- 5 Mini-Tags die sich nacheinander aktivieren:
  - Prozesse, KI-Chancen, Risiken, Governance, Go/No-Go

**Oben -- Status-Badge:**
- "KI-Audit wird durchgefuehrt" statt "Designsystem wird aufgebaut"

### Technische Umsetzung

**Datei:** Neue Komponente `src/components/ui/ki-audit-animation.tsx`
- Gleiche Struktur und Animations-Timings wie `BrandIdentityAnimation`
- Gleiche Abmessungen und responsive Breakpoints
- Gleiche Farbpalette (Purple/Indigo Gradient, Slate Hintergrund)
- Icons: Search, Brain, ShieldCheck, FileCheck, BarChart3, CheckCircle2

**Datei:** `src/pages/Studio.tsx` (Zeile 228)
- Import der neuen Komponente `KiAuditAnimation`
- Fuer index === 1 die neue Animation einsetzen: `index === 0 ? <BrandStrategyAnimation /> : index === 1 ? <KiAuditAnimation /> : <BrandIdentityAnimation />`
