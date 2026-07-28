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
    title: "Wir verwenden Cookies",
    description:
      "Unsere Website verwendet Cookies, um grundlegende Funktionen bereitzustellen und Ihre Nutzererfahrung zu verbessern.",
  },

  /** Buttons in der kompakten Banner-Ansicht. */
  actions: {
    settings: "Einstellungen",
    necessary: "Nur Notwendige",
    acceptAll: "Alle akzeptieren",
  },

  settings: {
    title: "Cookie-Einstellungen",
    categories: [
      {
        id: "necessary",
        label: "Essenzielle Cookies",
        description: "Notwendig für den Betrieb der Website",
      },
      {
        id: "analytics",
        label: "Statistik-Cookies",
        description: "Zur Analyse durch Google Analytics",
      },
      {
        id: "marketing",
        label: "Marketing-Cookies",
        description: "Für Meta Pixel und Google Ads",
      },
    ] as CookieCategoryText[],

    /** Buttons im Footer des Einstellungen-Dialogs. */
    actions: {
      necessary: "Nur Notwendige",
      save: "Auswahl speichern",
      acceptAll: "Alle akzeptieren",
    },
  },
} as const;
