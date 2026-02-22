

# Studio-Seite: Komplettes Redesign mit neuer Scroll-Architektur

## Analyse der Probleme

Die aktuelle Seite wirkt wie ein Template -- alle drei Services nutzen dasselbe ServiceScrollSection-Raster (Video + Text nebeneinander), dieselben roten/blauen Boxen, dieselbe Struktur. Es gibt keinen visuellen Fluss, keine Storytelling-Architektur und keinen modernen Scroll-Ansatz. Die Seite sieht aus wie drei Kopien desselben Blocks.

---

## Neues Konzept: "Clarity Flow"

Die Seite wird als durchgehende visuelle Reise aufgebaut, die den Nutzer durch die drei Phasen von Studio fuehrt. Jede Sektion hat ein einzigartiges Layout und eine eigene visuelle Sprache.

---

## Sektionsarchitektur (von oben nach unten)

### 1. Hero -- Immersiver Vollbild-Hero mit Claim
- Video-Hintergrund bleibt
- NEU: Grosser Claim "Klarheit vor Umsetzung." prominent unter dem Titel
- NEU: Animierter Scroll-Indikator (ChevronDown mit Bounce-Animation)
- Entfernung der leeren Zeilen im aktuellen Code

### 2. Manifesto-Statement (ersetzt "STUDIO POWER")
- Full-width, zentriertes Statement-Layout
- Grosse Headline: "Bevor Systeme gebaut werden, muss Klarheit geschaffen werden."
- Darunter: Drei kompakte Pillars nebeneinander als Karten mit Nummern (01, 02, 03)
  - "Marke" -- "Identitaet als Systemgrundlage"
  - "KI-Readiness" -- "Entscheidungsfaehigkeit vor Einsatz"  
  - "Kommunikation" -- "Struktur statt Silos"
- Minimalistisch, viel Weissraum, typografisch stark

### 3. Service 1: Brand Identity -- Dunkle Full-Width Sektion
- **Hintergrund: bg-slate-950 (schwarz/dunkel)**, kontrastiert stark zur weissen Seite
- Layout: Grosser Service-Nummer "01" als dekoratives Element (text-[120px], Outline-Stil, halbtransparent)
- Titel in Weiss, Problem/Loesung als zwei schlanke Spalten nebeneinander (nicht als farbige Boxen)
- BrandStrategyAnimation rechts daneben (sticky auf Desktop)
- Deliverables als horizontale Karten-Reihe am unteren Rand (4 Karten, weisser Text auf dunklem Grund)
- Kein Video mehr -- die Animation allein traegt die visuelle Kommunikation

### 4. Service 2: KI Enablement & Audit -- Weisse Sektion, zentriert
- **Hintergrund: bg-white**
- Grosses "02" dekorativ
- Titel zentriert, darunter Problem und Loesung als zwei Spalten mit subtiler Linie dazwischen
- KiAuditAnimation zentriert darunter, volle Breite
- Deliverables als nummerierte horizontale Timeline-Steps (1 -> 2 -> 3 -> 4 mit Linien)

### 5. Service 3: Kommunikationsarchitektur -- Helle graue Sektion
- **Hintergrund: bg-gray-50**
- Grosses "03" dekorativ
- Umgekehrtes Layout: Animation links (sticky), Text rechts
- Deliverables als gestapelte, minimalistische Zeilen mit Hover-Effekt

### 6. Case Study -- Full-Width Feature
- Statt 4-Col-Grid mit einem kleinen Bild: Full-width Feature-Card
- Grosses Bild (aspect-[21/9]) mit Overlay-Gradient und Text-Overlay
- "ALBANOVA" Case prominent praesentiert
- Hover zeigt CTA

### 7. CTA -- Staerker und Design-System-konform
- Text: "Bereit fuer die Zukunft?" (gemaess Design-System Memory)
- Subtext: "New Edge steht fuer Innovation und nachhaltige Entwicklung. Gemeinsam gestalten wir die Zukunft von Marken und Prozessen."
- Liquid-Glass Button

---

## Technische Details

### Dateien die geaendert werden:

**`src/pages/Studio.tsx`** -- Kompletter Umbau:
- ServiceScrollSection wird nicht mehr verwendet (Import entfernt)
- LazyVideo wird nur noch im Hero verwendet (kein Video pro Service)
- Jeder Service bekommt eine eigene, handgefertigte Sektion
- Die Animations-Komponenten (BrandStrategyAnimation, KiAuditAnimation, BrandIdentityAnimation) bleiben und werden direkt eingebettet
- Framer Motion Scroll-Animationen fuer jede Sektion individuell
- Service-Daten bleiben als Array, aber das Rendering ist pro Service individuell
- Dekorative Nummern ("01", "02", "03") als grosse, halbtransparente Typografie-Elemente
- Problem/Loesung nicht mehr als farbige Boxen, sondern als saubere Typografie-Paare
- Deliverables je nach Service anders dargestellt (Karten, Timeline, Liste)

### Design-System-Konformitaet:
- Hard-Edge: rounded-none ueberall
- Liquid-Glass Buttons
- Studio-Palette: Indigo (#6366f1) bis Purple (#a855f7)
- Keine abgerundeten Ecken bei Karten, Buttons, Containern
- CTA-Text gemaess Memory

### Keine neuen Abhaengigkeiten oder Dateien noetig
- Alles in `src/pages/Studio.tsx`
- Bestehende Komponenten werden weiterverwendet

