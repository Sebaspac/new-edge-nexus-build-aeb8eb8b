/**
 * Section-Text: Cortex (Home)
 * --------------------------------------------------------------
 * "Das Betriebssystem Ihrer KI-Abteilung" — Hub-Diagramm mit
 * Heute/Ergebnis-Vergleich (Komponente `CortexSection`).
 * Reiner Text — Layout-Koordinaten, Farben und SVG-Geometrie
 * bleiben in der Komponente. Alle Felder sind serialisierbar
 * (CMS-tauglich): nur Strings/Arrays — kein JSX, keine Funktionen.
 * Strapi-Mapping: Single Type `cortex` (bzw. Teil der Home-Page).
 * --------------------------------------------------------------
 */

/** Beschrifteter Knoten im Hub-Diagramm (Label = Inhalt, Position = Layout). */
export interface CortexSpoke {
  label: string;
}

export const cortex = {
  /** Section-`aria-label`. */
  ariaLabel: "Cortex, das Betriebssystem Ihrer KI-Abteilung",

  eyebrow: "Cortex",
  heading: "Das Betriebssystem Ihrer KI-Abteilung.",
  subtitle:
    "Ab Station 02 entsteht der Ort, an dem Ihre KI gesteuert wird — bevor sie skaliert.",

  /** Linke Mini-Spalte: Status quo. */
  today: {
    label: "Heute existieren oft",
    items: [
      "ChatGPT & Copilot",
      "Einzeltools",
      "Schatten-IT",
      "Unklare Verantwortlichkeiten",
    ],
  },

  /** Rechte Mini-Spalte: Zielzustand. */
  results: {
    label: "Das Ergebnis",
    items: [
      "Transparenz über KI-Nutzung",
      "DSGVO-konforme Infrastruktur",
      "Zentrale Steuerung",
      "Fundament für Automatisierungen",
    ],
  },

  /** Erklärungs-Absatz unter dem Divider. */
  body:
    "Cortex ist der zentrale Einstiegspunkt für KI im Unternehmen: Mitarbeiter erhalten produktive KI. Sie behalten die Kontrolle über Nutzung, Prozesse und Automatisierungen.",

  /** Text-Button (scrollt zur CTA-Section). */
  cta: "Cortex kennenlernen →",

  /** Hub-Diagramm. */
  diagram: {
    /** SVG-`aria-label`. */
    ariaLabel:
      "Cortex verbindet Menschen, Daten, Prozesse, Agenten und Governance",
    /** Beschriftungen der äußeren Knoten (Reihenfolge = Layout-Reihenfolge). */
    spokes: [
      { label: "MENSCHEN" },
      { label: "DATEN" },
      { label: "PROZESSE" },
      { label: "AGENTEN" },
      { label: "GOVERNANCE" },
    ] as CortexSpoke[],
    /** Zentraler Knoten. */
    centerLabel: "CORTEX",
    centerSublabel: "ZENTRALE EBENE",
  },
};
