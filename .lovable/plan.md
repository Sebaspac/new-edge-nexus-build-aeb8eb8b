

# Cases-Container rechtsbuendig ausrichten

## Aenderung
In der `CategoryRow`-Komponente (`src/pages/CaseStudies.tsx`, Zeile 153) wird der innere Flex-Container der Cases von links- auf rechtsbuendig umgestellt.

## Technisches Detail
- Die innere `div` mit den Case-Cards bekommt `justify-end`, damit die Karten von rechts nach links aufgereiht werden (erste Karte am weitesten rechts, nahe am Label/Slash).
- Betrifft nur den Cases-Container innerhalb der `CategoryRow`-Komponente.

## Betroffene Datei
`src/pages/CaseStudies.tsx` -- eine Klassen-Aenderung im Cases-Container.

