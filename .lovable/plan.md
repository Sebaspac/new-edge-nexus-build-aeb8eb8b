
# InteractiveCore Redesign: Dynamischer Kasten links, Text rechts

## Ziel
Auf Desktop: Der interaktive Studio/Lab-Switcher mit Display Card links, der Beschreibungstext rechts. Auf Mobile bleibt alles gestapelt.

## Neue Struktur (Desktop)

```text
+--------------------------------------------------+
|  [Dynamischer Kasten]     |  [Text-Bereich]       |
|  [LINKS]                  |  [RECHTS]              |
|                           |                        |
|  +------------------+     |  UNSERE SERVICES       |
|  | STUDIO / LAB     |     |  Zwei Bereiche.        |
|  | Tabs + Display   |     |  Eine Vision.          |
|  | Card             |     |                        |
|  |                  |     |  Beschreibungstext...   |
|  +------------------+     |  "New Edge ist keine.."|
+--------------------------------------------------+
|  Quick Navigation Grid (volle Breite)              |
+--------------------------------------------------+
```

## Technische Umsetzung in `src/components/InteractiveCore.tsx`

### 1. Neues Hauptlayout
- Ein `grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center` ersetzt die bisherige Struktur (Header oben + Split Container darunter)
- Linke Spalte: Control Panel (Studio/Lab Buttons) + Display Card, vertikal gestapelt
- Rechte Spalte: Label, Headline, alle Beschreibungstexte

### 2. Linke Spalte (Interaktiver Kasten)
- Studio/Lab-Buttons horizontal nebeneinander oben
- Display Card (der dunkle Kasten mit Animation) darunter
- Beides in `flex flex-col gap-4`

### 3. Rechte Spalte (Text)
- "UNSERE SERVICES" Label
- H2 "Zwei Bereiche. Eine Vision."
- Alle Beschreibungs-Paragraphen
- "New Edge ist keine klassische Agentur..."

### 4. Mobile Reihenfolge
- Auf Mobile (`grid-cols-1`): Text zuerst (mit `order-1` auf Mobile), dann interaktiver Kasten
- Oder alternativ: Kasten zuerst, dann Text -- je nach gewuenschtem Mobile-Verhalten wird die natuerliche DOM-Reihenfolge beibehalten (Kasten oben, Text unten auf Mobile)

### 5. Quick Navigation Grid
- Bleibt unveraendert als volle Breite unterhalb der neuen Split-Section

### Dateien
- `src/components/InteractiveCore.tsx` -- Layout-Umstrukturierung
