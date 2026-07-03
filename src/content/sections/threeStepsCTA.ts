/**
 * Section-Text: ThreeStepsCTA (Drei Schritte zum Erfolg)
 * --------------------------------------------------------------
 * Scroll-getriebene CTA-Sektion mit drei Schritt-Karten (Mobile +
 * Desktop teilen denselben Inhalt). Texte verbatim aus der Komponente.
 * Die Schritt-Icons sind Emojis (reiner Text, kein Lucide-Icon aus der
 * Registry) und bleiben daher serialisierbare String-Daten.
 * Strapi-Mapping: Single Type `three-steps-cta` mit Component-Repeater
 * `steps` (icon/title/desc).
 * --------------------------------------------------------------
 */

/** Eine Schritt-Karte. `icon` ist ein Emoji (reiner Text). */
export interface ThreeStepsCTAStep {
  icon: string;
  title: string;
  desc: string;
}

export const threeStepsCTA = {
  /** Überschrift links; `<br/>` zwischen den drei Wörtern in der Komponente. */
  heading: {
    line1: "Drei",
    line2: "Schritte",
    line3: "zum Erfolg",
  },

  /** Person/Signatur unter der Überschrift. */
  person: {
    name: "Mit Sebastian Pachon",
    role: "Gründer und Geschäftsführer NEWEDGE",
    phoneLabel: "↗ +49 176 60 431 467",
    phoneHref: "tel:+4917660431467",
  },

  /** Pro Karte gerendertes Label „Schritt {n}" (n = Index + 1). */
  stepLabelPrefix: "Schritt",

  steps: [
    {
      icon: "💬",
      title: "Unverbindliches Erstgespräch",
      desc: "In einem kurzen Gespräch verstehen wir, wo Ihr Unternehmen steht — und ob sich KI bei Ihnen überhaupt schon lohnt. Termin online wählen, ohne Verpflichtung.",
    },
    {
      icon: "🎯",
      title: "KI-Readiness & ROI-Analyse",
      desc: "Wir zeigen Ihnen in wenigen Werktagen die drei Prozesse mit dem höchsten KI-ROI — inklusive grober Aufwand-Nutzen-Schätzung und Förderhinweis. Oft förderfähig.",
    },
    {
      icon: "🚀",
      title: "Ihre KI-Abteilung entsteht",
      desc: "Auf Basis der Analyse bauen wir Schritt für Schritt Ihre eigene KI-Fähigkeit — vom sicheren Einstiegspunkt bis zum laufenden Betrieb. Die Kontrolle bleibt bei Ihnen.",
    },
  ] as ThreeStepsCTAStep[],
};
