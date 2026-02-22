
# Fix: Karteninhalte nach unten ausrichten

## Problem
Die Inhalte im dunklen Kasten (Icon, Status-Badge, Titel, Beschreibung, Tags) schweben in der Mitte, anstatt am unteren Rand ausgerichtet zu sein. Obwohl `justify-end` gesetzt ist, verteilen sich die Elemente ueber die gesamte Kartenhoehe.

## Loesung
Den Content-Wrapper innerhalb der Karte mit `mt-auto` versehen, damit alle Inhalte (Icon-Zeile, Titel, Beschreibung, Tags) nach unten gedrueckt werden und am Boden der Karte anliegen.

## Technische Aenderung
**Datei:** `src/components/InteractiveCore.tsx`

- Den aeusseren Content-Container (Zeile 188) behalten mit `justify-end`
- Die Icon/Status-Zeile (Zeile 189) bekommt kein `mt-auto` mehr, stattdessen wird der gesamte sichtbare Inhalt in einen Wrapper mit `mt-auto` gepackt
- Alternativ: einfach den bestehenden Flex-Container so anpassen, dass die Kinder wirklich am Ende kleben -- dazu den `mb-6 sm:mb-8` Abstand zwischen Icon-Zeile und Content reduzieren und sicherstellen, dass kein ueberfluessiger Platz oben entsteht

Konkret: Die Icon/Status-Leiste und den Content-Block zusammen in ein `div` mit `mt-auto` wrappen, sodass alles als Block nach unten geschoben wird.
