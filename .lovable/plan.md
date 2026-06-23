## Ziel
Apollo Website-Tracker (`appId: 69f08fb34c69250011068113`) einbauen, **gekoppelt an die Marketing-Zustimmung im Cookie-Banner**.

## Änderungen

### 1. Neue Komponente `src/components/ApolloTracker.tsx`
- Liest beim Mount `cookie-consent` aus `localStorage`.
- Lauscht auf ein neues Event `cookie-consent-changed`, um auf späteres Akzeptieren zu reagieren.
- Wenn `preferences.marketing === true`:
  - Lädt `https://assets.apollo.io/micro/website-tracker/tracker.iife.js` einmalig dynamisch (mit `async`/`defer`, Cache-Bust wie im Snippet).
  - Ruft `window.trackingFunctions.onLoad({ appId: "69f08fb34c69250011068113" })` im `onload`.
- Schutz gegen Doppel-Injection via `data-apollo-tracker` Attribut am `<script>`.

### 2. `src/components/CookieConsent.tsx`
- In `saveConsent()` zusätzlich `window.dispatchEvent(new CustomEvent('cookie-consent-changed', { detail: prefs }))` feuern, damit ApolloTracker sofort reagiert (ohne Reload).

### 3. `src/App.tsx`
- `<ApolloTracker />` einmal global mounten (neben dem bestehenden `<CookieConsent />`).

## Nicht enthalten
- Keine Änderungen an `index.html` (Apollo wird bewusst NICHT statisch geladen, sondern consent-gesteuert).
- GTM/GA bleiben unverändert.
- Keine Erweiterung des Cookie-Banner-Texts (Apollo fällt unter „Marketing-Cookies", was bereits aufgeführt ist).

## Hinweis Datenschutz
Du solltest Apollo zusätzlich in deiner Datenschutzerklärung erwähnen (separater Task, nicht Teil dieser Implementierung).
