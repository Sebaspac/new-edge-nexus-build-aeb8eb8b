
# Plan: Logo-Fix und Button-Styling auf "Über Uns" Seite

## Zwei Änderungen

### 1. Hub-Logo: webp zu png ändern (Zeile 35)
Das Logo-Format von `.webp` auf `.png` ändern für bessere Mobile/iPad-Kompatibilität:

```tsx
// Vorher
import newEdgeHubLogo from "@/assets/new-edge-hub-logo.webp";

// Nachher
import newEdgeHubLogo from "@/assets/new-edge-hub-logo.png";
```

### 2. Timeline Button: Explizite Textfarbe hinzufügen (Zeile 1038)
Den Button nach der Timeline mit `text-black` ergänzen für korrektes Styling:

```tsx
// Vorher
className="group rounded-none border-2 border-black bg-transparent backdrop-blur-sm transition-all hover:bg-black hover:text-white"

// Nachher
className="group rounded-none border-2 border-black bg-transparent text-black backdrop-blur-sm transition-all hover:bg-black hover:text-white"
```

## Betroffene Datei
- `src/pages/About.tsx`

## Ergebnis
- Logo wird korrekt auf Mobile/iPad angezeigt
- Button zeigt schwarze Schrift und wechselt bei Hover zu weiß auf schwarz
