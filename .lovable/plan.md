
## Ziel

Das mobile Layout der `ThreeStepsCTA`-Komponente in `PainPointAuswahlverfahren.tsx` umbauen, damit es dem Referenzbild entspricht:

1. **Oben**: Headline ("Drei Schritte zum Erfolg") + CTA-Button + Gründer-Info
2. **Darunter**: Die 3 Schritte horizontal nebeneinander (kompakte Version, kein Scroll-Pin)
3. **Ganz unten**: Die 3 weißen Info-Karten, die nacheinander aufpoppen (statt übereinander gestapelt)

## Änderungen

### `src/pages/PainPointAuswahlverfahren.tsx` — ThreeStepsCTA

- **Mobile (< md)**: Scroll-Pin-Mechanismus deaktivieren → feste Höhe statt `280dvh`, kein `position: fixed`
- Die linke Spalte wird oben angezeigt (Text, Button, Gründer-Info)
- Die 3 Step-Indikatoren (01, 02, 03) werden horizontal als kompakte Row angezeigt statt vertikal gestapelt
- Die 3 Karten werden vertikal gestapelt und per `whileInView`-Animation nacheinander eingeblendet (pop-in Effekt)
- **Desktop (≥ md)**: Bleibt exakt wie bisher (Scroll-Pin + Karten-Wechsel)

### Technische Details

- `useIsMobile()` oder `md:`-Breakpoint zur Unterscheidung
- Mobile: `height: auto` statt `280dvh`, kein `pinnedStyle`
- Step-Indicators: `flex-row` statt `space-y-2` auf Mobile
- Karten: Alle 3 sichtbar, vertikal gestapelt, mit staggered fade-in/scale Animation via Framer Motion `whileInView`
- Progress-Dots entfallen auf Mobile (nicht nötig ohne Scroll-Pin)
