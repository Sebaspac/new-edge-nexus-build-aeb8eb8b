
# Lab-Animationen inhaltlich an Dienstleistungen anpassen

## Uebersicht
Alle drei Animationen auf der Lab-Seite muessen inhaltlich aktualisiert werden, damit sie die tatsaechlichen Dienstleistungen korrekt widerspiegeln. Die visuelle Struktur (Layout, Farben, Timings) bleibt bestehen -- nur Texte, Icons und Konzepte werden angepasst.

---

## Animation 1: ProcessAutomationAnimation
**Datei:** `src/components/ui/process-automation-animation.tsx`
**Service:** AI Systems & Automation Architecture

### Was sich aendert:

**Probleme (links):**
- "Manuelle Routinen" -> "Manuelle Prozesse" (bleibt aehnlich)
- "Fragmentierte Systeme" -> "Medienbrueche & Silos"

**Checklist (rechts):**
- "Workflow-Analyse" -> "Prozess-Mapping"
- "Audit" -> "KI-Prozessschritte"
- "Decision-Flows" -> "End-to-End-Workflows"
- "LLM-Integration" -> "System-Integration"

**Deliverables (unten):**
- Workflow-Map (bleibt)
- "Roadmap" -> "Prozesslogik" (Settings-Icon -> Cog/Shield)
- "Automation" (bleibt)
- "Chatbot" -> "Integration" (Bot-Icon -> Link2-Icon)

**Status-Badge:** "Prozesse werden automatisiert" (bleibt, passt)

---

## Animation 2: TrackingAnalyticsAnimation (komplett ueberarbeiten)
**Datei:** `src/components/ui/tracking-analytics-animation.tsx`
**Service:** Internal Systems, Data & AI Ownership

### Was sich aendert:

**Probleme (links):**
- "Isolierte Dashboards" -> "SaaS-Abhaengigkeit"
- "Keine Insights" -> "Keine Datenkontrolle"

**Checklist (rechts):**
- "Data-Audit" -> "Interne Tools"
- "Dashboard" -> "Datenlogik"
- "Reporting" -> "LLM-Systeme"
- "KI-Analyse" -> "GPU-Infrastruktur"

**Deliverables (unten):**
- Dashboard -> "Tools" (Layout-Icon)
- Reports -> "Datenfluss" (Database-Icon)
- Alerts -> "LLM" (Brain-Icon)
- Forecasting -> "Infrastruktur" (Server-Icon)

**Zentrales Icon:** BarChart3 -> Server oder Shield (symbolisiert Ownership)

**Status-Badge:** "Daten werden analysiert" -> "Eigene Systeme werden aufgebaut"

---

## Animation 3: WebSystemsAnimation
**Datei:** `src/components/ui/web-systems-animation.tsx`
**Service:** Web & Platform Architecture

### Was sich aendert:

**Probleme (links):**
- "Langsame Ladezeiten" -> "Isolierte Website"
- "Keine Funnel-Logik" -> "Keine System-Anbindung"

**Checklist (rechts):**
- "Headless CMS" -> "Web-Architektur"
- "Landingpages" -> "CMS & Datenlogik"
- "Funnel-Logik" -> "System-Integration"
- "Performance" -> "Skalierbarkeit"

**Deliverables (unten):**
- CMS (bleibt, Icon bleibt)
- "Landingpage" -> "API-Layer" (MousePointer -> Link2)
- "Funnel" -> "Integration" (TrendingUp -> Plug)
- "Tracking" -> "Sicherheit" (Activity -> Shield)

**Status-Badge:** "Conversion-System wird gebaut" -> "Plattform-Architektur wird aufgebaut"

---

## Technische Details

- Alle drei Dateien werden nur in den Daten-Arrays und Status-Texten geaendert
- Icons werden aus lucide-react importiert (Server, Database, Brain, Shield, Link2, Plug etc.)
- Keine strukturellen Aenderungen an Layout, Timings oder Farbschema
- Die zentrale Icon-Aenderung bei Animation 2 (BarChart3 -> Server) erfordert auch eine Aenderung im JSX des Core-Elements
