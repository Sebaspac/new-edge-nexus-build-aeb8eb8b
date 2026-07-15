/**
 * Section-Text: Embedded AI ("Ein externer Head of AI")
 * --------------------------------------------------------------
 * Statement-Block + „Wir übernehmen"-Liste (Komponente `EmbeddedAI`).
 * Reine Texte — keine Bilder, keine content-gebundenen Icons.
 * Inline-Markup (das hervorgehobene „Head of AI.") bleibt in der
 * Komponente; hier liegen nur die Text-Leaves.
 * Strapi-Mapping: Single Type `embedded-ai` (bzw. Teil von „home").
 * --------------------------------------------------------------
 */

export interface EmbeddedAIContent {
  /** Aria-Label der Section. */
  ariaLabel: string;
  /** Eyebrow oben links. */
  eyebrow: string;
  heading: {
    /** Text vor dem hervorgehobenen Teil. */
    lead: string;
    /** Hervorgehobener (eingefärbter) Teil. */
    highlight: string;
  };
  /** Statement-Absätze (Reihenfolge = Render-Reihenfolge). */
  paragraphs: string[];
  /** Label über der Übernahme-Liste. */
  uebernahmeLabel: string;
  /** Listeneinträge „Wir übernehmen". */
  uebernahme: string[];
}

export const embeddedAI: EmbeddedAIContent = {
  ariaLabel: "Embedded AI, an external Head of AI",
  eyebrow: "Embedded AI",
  heading: {
    lead: "An external ",
    highlight: "Head of AI.",
  },
  paragraphs: [
    "Most companies don't need a full-time Chief AI Officer. They need someone who takes ownership.",
    "We don't just deliver projects. We make sure your AI department keeps growing over the long term.",
  ],
  uebernahmeLabel: "We take care of",
  uebernahme: [
    "Prioritization",
    "Governance",
    "Roadmaps",
    "Team enablement",
    "Spotting new opportunities",
    "Continuous optimization",
  ],
};
