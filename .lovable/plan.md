

# Lab-Seite: Services umstrukturieren

## Zusammenfassung
Die Lab-Seite wird von 4 auf 3 Dienstleistungen reduziert. Service 2 bekommt neue Texte, Videos/Animationen werden zwischen Service 2 und 3 getauscht, Service 4 wird gelöscht.

---

## Änderungen im Detail

### Service 1: AI Systems & Automation Architecture
Keine Änderung.

### Service 2: Text komplett ersetzen
| Element | Aktuell | Neu |
|---------|---------|-----|
| Titel | Internal Software & Data Ownership | **Internal LLM Systems & GPU Infrastructure** |
| Problem | SaaS-Stacks erzeugen Abhängigkeiten... | **Externe KI-APIs bedeuten Kontrollverlust über Daten, Kosten und Verfügbarkeit.** |
| Lösung | Wir entwickeln interne Tools... | **Wir setzen interne LLM-Systeme um, inklusive eigener GPU-Infrastruktur und lokaler oder isolierter Nutzung.** |
| Deliverable 1 | Interne Dashboards & Tools | **GPU-Setup & Infrastruktur** – Aufbau eigener Rechenkapazitäten für KI-Workloads. |
| Deliverable 2 | Eigene Datenlogik | **Deployment interner LLMs** – Einrichtung und Betrieb eigener Sprachmodelle. |
| Deliverable 3 | Reduktion von SaaS-Abhängigkeit | **Optionales Fine-Tuning** – Anpassung von Modellen an spezifische Unternehmensanforderungen. |
| Deliverable 4 | Volle Datenhoheit | **Integration in bestehende Systeme** – Nahtlose Anbindung an vorhandene Workflows und Tools. |

### Service 2 und 3: Video & Animation tauschen
| Element | Service 2 (neu) | Service 3 (neu) |
|---------|-----------------|-----------------|
| Video | `/assets/lab-new-video.mp4` (von Service 3) | `/assets/lab-section-video.mp4` (von Service 2) |
| Animation | TrackingAnalyticsAnimation (von Service 3) | WebSystemsAnimation (von Service 2) |

### Service 4: Internal LLM Systems & GPU Infrastructure
Wird komplett gelöscht (Zeile 116-137 im labServices Array).

---

## Ergebnis
3 Services auf der Lab-Seite:
1. **AI Systems & Automation Architecture** (unverändert)
2. **Internal LLM Systems & GPU Infrastructure** (neuer Text, Video/Animation von ehem. Service 3)
3. **Web & Platform Architecture** (unverändert im Text, Video/Animation von ehem. Service 2)

## Betroffene Datei
`src/pages/Lab.tsx` – labServices Array anpassen

