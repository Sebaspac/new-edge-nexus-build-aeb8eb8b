

## Animated Headline in MethodologyGrid anpassen

### Was sich andert

In der MethodologyGrid-Komponente wird die Headline so umgebaut, dass **"Deine"** als fester, schwarzer Text stehen bleibt. Nur die Worter danach wechseln sich zyklisch ab und werden in Lila (#7C3AED) dargestellt:

- Prozesse
- Daten
- KI
- Plattform
- Ablaufe
- Entscheidungen

### Aktuelle Struktur
```
AnimatedTextCycle cycles: "Dein Marketing.", "Deine Prozesse.", "Deine Daten.", "Deine KI."
```

### Neue Struktur
```
"Deine " (statisch, schwarz) + AnimatedTextCycle cycles: "Prozesse.", "Daten.", "KI.", "Plattform.", "Abläufe.", "Entscheidungen." (lila)
```

### Technische Umsetzung

**Datei: `src/components/MethodologyGrid.tsx`**

1. Die `AnimatedTextCycle`-Komponente bekommt nur noch die einzelnen Worter als `words`-Array: `["Prozesse.", "Daten.", "KI.", "Plattform.", "Abläufe.", "Entscheidungen."]`
2. "Deine " wird als statischer Text davor platziert
3. Die `renderWord`-Funktion wird vereinfacht -- jedes Wort wird komplett in Lila (`text-[#7C3AED]`) dargestellt
4. Die Zeile "Als System gedacht." bleibt unverandert

