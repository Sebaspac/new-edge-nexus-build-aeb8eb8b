/**
 * Section-Text: Cookie-Consent (Singleton, global)
 * --------------------------------------------------------------
 * Sichtbare Texte des Cookie-Banners + Einstellungen-Dialogs
 * (Komponente `CookieConsent`). Nur Inhalt — die Consent-Logik
 * (Storage-Key `cookie-consent`, Kategorien-IDs necessary/analytics/
 * marketing, Accept/Decline-Handler) bleibt in der Komponente.
 *
 * Die Kategorie-`id`s sind bewusst dieselben Strings wie die
 * Preferences-Keys (Logik) und dienen hier nur als stabile
 * Zuordnung von Label/Beschreibung — sie werden NICHT zum Schalten
 * verwendet (das macht die Komponente direkt über die Keys).
 *
 * Strapi-Mapping: Single Type `cookie-consent`.
 * --------------------------------------------------------------
 */

/** Eine Cookie-Kategorie im Einstellungen-Dialog (nur Beschriftung). */
export interface CookieCategoryText {
  /** Stabile Zuordnung zur Preference (necessary | analytics | marketing). */
  id: "necessary" | "analytics" | "marketing";
  label: string;
  description: string;
}

export const cookieConsent = {
  banner: {
    title: "We use cookies",
    description:
      "Our website uses cookies to provide core functionality and improve your experience.",
  },

  /** Buttons in der kompakten Banner-Ansicht. */
  actions: {
    settings: "Settings",
    necessary: "Necessary only",
    acceptAll: "Accept all",
  },

  settings: {
    title: "Cookie settings",
    categories: [
      {
        id: "necessary",
        label: "Essential cookies",
        description: "Required for the website to work",
      },
      {
        id: "analytics",
        label: "Statistics cookies",
        description: "For analysis via Google Analytics",
      },
      {
        id: "marketing",
        label: "Marketing cookies",
        description: "For Meta Pixel and Google Ads",
      },
    ] as CookieCategoryText[],

    /** Buttons im Footer des Einstellungen-Dialogs. */
    actions: {
      necessary: "Necessary only",
      save: "Save selection",
      acceptAll: "Accept all",
    },
  },
} as const;
