/**
 * Section-Text: Team-Support (Startseite, Rebrush 2026-07)
 * --------------------------------------------------------------
 * „Hands-On Support"-Referenz-Layout in NEWEDGE-CI (Komponente
 * `TeamSupportSection`): Kicker, zentrierte Headline mit Akzent,
 * Absatz, dunkle Team-Banner-Pill mit echten Avataren (About-Team),
 * darunter drei Feature-Spalten. Kernbotschaft: ein Ansprechpartner
 * plus die Manpower einer ganzen Agentur für Digitalisierungs- und
 * KI-Projekte. Feature-Icons sind dekorativ und leben in der
 * Komponente. Noch NICHT als Strapi-Feld angelegt (statischer
 * Fallback greift).
 * --------------------------------------------------------------
 */

export const teamSupport = {
  kicker: "Ihr Team",
  headingLead: "Ein Ansprechpartner. ",
  headingHighlight: "Eine ganze Agentur dahinter.",
  paragraph:
    "Wir liefern keine Software und verschwinden. Sie arbeiten mit einem festen Ansprechpartner, hinter dem das komplette NEWEDGE-Team steht: Strategie, Entwicklung, Design und Automatisierung für Ihre Digitalisierungs- und KI-Projekte.",

  banner: {
    avatars: [
      { src: "team-sebastian-1", alt: "Sebastian, NEWEDGE" },
      { src: "team-wenjamin-1", alt: "Wenjamin, NEWEDGE" },
      { src: "team-ivan", alt: "Ivan, NEWEDGE" },
    ],
    textLead: "Ein Team, das sich ",
    textHighlight: "Ihrem Erfolg verschreibt",
  },

  features: [
    {
      title: "Ein fester Ansprechpartner",
      desc: "Kurze Wege, klare Verantwortung: Sie sprechen immer mit jemandem, der Ihr Projekt kennt.",
    },
    {
      title: "Volle Agentur-Manpower",
      desc: "Strategie, Design, Entwicklung und Automatisierung kommen aus einem Haus, ohne Übergabeverluste.",
    },
    {
      title: "Digitalisierung & KI aus einer Hand",
      desc: "Von der ersten Analyse bis zum laufenden Betrieb bleibt Ihr Projekt in einem Team.",
    },
  ],
} as const;
