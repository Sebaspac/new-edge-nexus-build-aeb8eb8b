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
  ariaLabel: "Cortex, the operating system of your AI department",

  eyebrow: "Cortex",
  heading: "The operating system of your AI department.",
  subtitle:
    "From station 02 on, your AI gets a place where it's governed — before it scales.",

  /** Linke Mini-Spalte: Status quo. */
  today: {
    label: "Today you usually have",
    items: [
      "ChatGPT & Copilot",
      "Standalone tools",
      "Shadow IT",
      "Unclear ownership",
    ],
  },

  /** Rechte Mini-Spalte: Zielzustand. */
  results: {
    label: "The result",
    items: [
      "Transparency over AI usage",
      "GDPR-compliant infrastructure",
      "Central control",
      "A foundation for automation",
    ],
  },

  /** Erklärungs-Absatz unter dem Divider. */
  body:
    "Cortex is the central entry point for AI in your company: employees get productive AI. You keep control over usage, processes and automation.",

  /** Text-Button (scrollt zur CTA-Section). */
  cta: "Discover Cortex →",

  /** Hub-Diagramm. */
  diagram: {
    /** SVG-`aria-label`. */
    ariaLabel:
      "Cortex connects people, data, processes, agents and governance",
    /** Beschriftungen der äußeren Knoten (Reihenfolge = Layout-Reihenfolge). */
    spokes: [
      { label: "PEOPLE" },
      { label: "DATA" },
      { label: "PROCESSES" },
      { label: "AGENTS" },
      { label: "GOVERNANCE" },
    ] as CortexSpoke[],
    /** Zentraler Knoten. */
    centerLabel: "CORTEX",
    centerSublabel: "CENTRAL LAYER",
  },
};
