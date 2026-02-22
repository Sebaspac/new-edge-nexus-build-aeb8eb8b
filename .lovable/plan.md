

# Studio-Seite: Einheitliches Modul-Design fuer alle Services

## Problem

Die drei Service-Sektionen auf der Studio-Seite haben aktuell drei komplett unterschiedliche Layouts:
- **Service 01**: 2-Spalten-Grid (Text links, Animation rechts), Deliverables als 4-Spalten-Karten
- **Service 02**: Zentrierter Titel, Problem/Loesung als 2-Spalten-Box, Animation zentriert, Deliverables als nummerierte Timeline
- **Service 03**: Umgekehrtes 2-Spalten-Grid (Animation links, Text rechts), Deliverables als gestapelte Liste

Das wirkt **nicht wie eine einheitliche CI**, sondern wie zusammengewuerfelte Module. Professionelle Seiten nutzen ein einheitliches Modul-System mit klarer Wiederholung.

---

## Loesung: Ein einheitliches Service-Modul

Alle drei Services bekommen **exakt dasselbe Layout-System**, nur mit alternierenden Positionen (links/rechts) fuer visuellen Rhythmus.

### Einheitliches Modul-Layout pro Service:

```text
+------------------------------------------------------------------+
|  Service [Nummer]                                                 |
|                                                                   |
|  +---------------------------+  +-----------------------------+   |
|  |                           |  |                             |   |
|  |  [Titel]                  |  |  [Animation]                |   |
|  |                           |  |                             |   |
|  |  DAS PROBLEM              |  |                             |   |
|  |  [Problem-Text]           |  |                             |   |
|  |                           |  |                             |   |
|  |  UNSERE LOESUNG           |  |                             |   |
|  |  [Loesung-Text]           |  |                             |   |
|  |                           |  |                             |   |
|  +---------------------------+  +-----------------------------+   |
|                                                                   |
|  +--------+  +--------+  +--------+  +--------+                  |
|  | Del. 01|  | Del. 02|  | Del. 03|  | Del. 04|                  |
|  +--------+  +--------+  +--------+  +--------+                  |
+------------------------------------------------------------------+
```

- **Service 01**: Text links, Animation rechts
- **Service 02**: Animation links, Text rechts (alternierend)
- **Service 03**: Text links, Animation rechts (alternierend)

### Einheitliche Deliverables-Darstellung:
Alle drei Services nutzen dasselbe 4-Spalten-Karten-Raster (wie aktuell bei Service 01). Keine Timeline, keine Checklisten-Liste -- nur einheitliche Karten.

### Einheitliche Hintergruende:
Alle drei Sektionen nutzen `bg-white` mit einer feinen `border-b border-black/5` Trennlinie dazwischen. Kein `bg-gray-50` -- rein weiss.

### Einheitliche Typografie und Spacing:
- Gleiche Service-Label-Formatierung: `text-xs font-mono tracking-widest text-black/30 uppercase`
- Gleiche Titel-Formatierung: `text-3xl sm:text-4xl lg:text-5xl font-black text-black leading-[1.05]`
- Gleiche Problem/Loesung-Labels: `text-xs font-bold tracking-widest uppercase mb-3`
- Problem in `text-red-500/70`, Loesung in `text-indigo-600/70`
- Gleicher vertikaler Abstand: `py-24 sm:py-32`
- Gleiche Container-Breite: `max-w-7xl`

### Dekorative Nummern:
Alle drei mit demselben Stil -- Outline, halbtransparent, `text-[120px] sm:text-[180px] lg:text-[240px]`, `WebkitTextStroke: "1px rgba(99,102,241,0.12)"` -- immer rechts oben positioniert.

---

## Technische Umsetzung

### Datei: `src/pages/Studio.tsx`

Die drei Service-Sektionen (Zeilen 207-411) werden durch eine einheitliche Loop-basierte Rendering-Logik ersetzt:

1. **Daten-Array erweitern**: `studioServices` bekommt ein `animation`-Feld (React-Komponente)
2. **Einheitliches Rendering**: `studioServices.map()` rendert jede Sektion mit demselben Template
3. **Alternierende Positionen**: Index gerade = Text links/Animation rechts, Index ungerade = umgekehrt
4. **Deliverables**: Immer als 4-Spalten-Karten-Grid mit `gap-px bg-black/5` Trennlinien

### Konkrete Aenderungen:
- Service 02 (KI Enablement): Zentriertes Layout wird zu 2-Spalten-Layout umgebaut
- Service 03 (Kommunikation): Checkmark-Liste wird zu 4-Spalten-Karten umgebaut
- Alle `bg-gray-50` Hintergruende werden zu `bg-white`
- Dekorative Nummern werden einheitlich gestyled
- Problem/Loesung-Darstellung wird in allen drei Sektionen identisch (gestapelt, nicht nebeneinander bei Service 02)

### Design-System:
- Hard-Edge (rounded-none) durchgehend
- Keine farbigen Boxen fuer Problem/Loesung
- Liquid-Glass Button im CTA
- Studio-Palette: Indigo bis Purple
- Einheitliche Abstande und Container-Breiten

