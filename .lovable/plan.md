

# Lab-Seite: Layout an Studio angleichen

## Was sich aendert

Die Lab-Seite bekommt dasselbe Layout-System wie die Studio-Seite. Konkret betrifft das die **drei Service-Sektionen** und die **Manifesto/Intro-Sektion**. Hero, Agents, Cases und CTA bleiben unveraendert.

## Aktuelle Unterschiede

| Element | Studio (Ziel) | Lab (aktuell) |
|---------|---------------|---------------|
| Hero | Fullscreen `100dvh`, Parallax | Kuerzer `75vh`, kein Parallax -- **bleibt so** |
| Intro | Grosse Headline + 3-Spalten-Pillars | "LAB POWER" mit Fliesstext |
| Services | Einheitliche Module: Nummer, 2-Spalten, 4er-Deliverables | `ServiceScrollSection` mit farbigen Boxen, nummerierten Listen |
| Cases | Einzelnes grosses Bild | Grid mit 3 Cases -- **bleibt so** |

## Aenderungen

### 1. Intro-Sektion (Zeilen 174-240) → Studio-Manifesto-Stil

Aktuell: "LAB POWER" mit Fliesstext darunter.

Neu: Gleicher Aufbau wie Studio-Manifesto:
- Grosse Headline: "Systeme mit Ownership." mit Lab-Gradient (gelb statt lila)
- 3-Spalten-Pillars darunter mit den drei Lab-Kernbereichen:
  - 01: Automatisierung — "End-to-End-Prozesse statt Einzeltools"
  - 02: Ownership — "Eigene Systeme statt SaaS-Abhaengigkeit"  
  - 03: Web & Plattform — "Architektur statt isolierte Seiten"

### 2. Service-Sektionen (Zeilen 242-367) → Studio-Module-Stil

Aktuell: `ServiceScrollSection`-Komponente mit farbigen Problem/Loesung-Boxen (`bg-red-50`, `bg-amber-50`), nummerierten Listen und Video.

Neu: Exakt dasselbe Template wie Studio:
- Dekorative Nummer rechts oben (Outline-Stil mit `WebkitTextStroke`)
- 2-Spalten-Grid: Text links/rechts alternierend, Animation gegenueber
- Problem/Loesung als schlichte Text-Bloecke (kein farbiger Hintergrund)
- Problem-Label in `text-red-500/70`, Loesung in `text-amber-500/70` (Lab-Farbe statt Indigo)
- 4-Spalten Deliverables-Karten am Ende jeder Sektion
- `bg-white` Hintergrund mit `border-b border-black/5`
- Kein `ServiceScrollSection`, kein Video -- nur die bestehenden Animationen

### 3. Daten-Anpassung

Die `labServices`-Daten werden umstrukturiert:
- `details`-Array (5-7 Items) wird zu `deliverables`-Array (4 Items) gekuerzt
- Jeder Deliverable bekommt `title` + `description` (wie bei Studio)
- `video`, `icon`, `gradient` Felder werden nicht mehr benoetigt
- `animation` Feld bleibt (bereits vorhanden)
- `description` wird zu `solution` umbenannt

### Farbpalette

Alle Lab-spezifischen Akzente nutzen den Lab-Gradient (gelb/amber) statt Studio's Indigo/Purple:
- Loesung-Label: `text-amber-500/70` statt `text-indigo-600/70`
- Dekorative Nummer: `rgba(251,191,36,0.12)` statt `rgba(99,102,241,0.12)`
- Gradient-Text: `linear-gradient(to right, #fde047, #fbbf24)`

## Dateien

| Datei | Aktion |
|-------|--------|
| `src/pages/Lab.tsx` | Intro + Service-Sektionen umbauen |

## Was NICHT geaendert wird

- Hero-Sektion (bleibt mit eigenem Stil)
- "Meet Our Agents"-Sektion (bleibt)
- Lab Cases-Sektion (bleibt)
- CTA-Sektion (bleibt)
- Keine neuen Dateien oder Dependencies

