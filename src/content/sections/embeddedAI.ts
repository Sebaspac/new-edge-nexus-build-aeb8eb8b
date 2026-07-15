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
  ariaLabel: "Embedded AI, ein externer Head of AI",
  eyebrow: "Embedded AI",
  heading: {
    lead: "Ein externer ",
    highlight: "Head of AI.",
  },
  paragraphs: [
    "Die meisten Unternehmen brauchen keinen Chief AI Officer in Vollzeit. Sie brauchen jemanden, der Verantwortung übernimmt.",
    "Wir liefern nicht nur Projekte. Wir sorgen dafür, dass Ihre KI-Abteilung langfristig wächst.",
  ],
  uebernahmeLabel: "Wir übernehmen",
  uebernahme: [
    "Priorisierung",
    "Governance",
    "Roadmaps",
    "Team Enablement",
    "Identifikation neuer Potenziale",
    "Kontinuierliche Optimierung",
  ],
};
