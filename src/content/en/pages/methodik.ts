/**
 * Page: Methodik  — Single Type
 * --------------------------------------------------------------
 * Inhalte der Methodik-Seite (`pages/Methodik.tsx`): Hero, Manifest,
 * die drei Phasen, das Ziel und der CTA-Block.
 * Das animierte „NEWEDGE System" ist eine eigene Section-Komponente.
 * Alle Felder sind serialisierbar (CMS-tauglich): nur Strings/Arrays/
 * Objects — kein JSX, keine Funktionen.
 * Strapi-Mapping: Single Type `methodik`.
 * --------------------------------------------------------------
 */
import type { SEOContent } from "@/content/types";

/** Eine Entwicklungsstufe der KI-Abteilung. */
export interface Stufe {
  index: string;
  title: string;
  frage: string;
  intro: string[];
  listLabel?: string;
  list?: string[];
  outro?: string;
  ergebnis: string[];
}

/** Ein Feld des Kontakt-Formulars (Sheet). */
export interface ContactField {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
}

export const methodik = {
  seo: {
    title: "Methodology | NEWEDGE — The AI Department for Mid-Sized Companies",
    description:
      "We build the AI department for mid-sized companies. In three phases — from analysis through implementation to scaling — AI becomes a lasting capability in your company.",
    canonical: "/en/methodik",
  } satisfies SEOContent,

  /** HERO. */
  hero: {
    /** Headline, zweizeilig (Zeilenumbruch via <br/>). */
    headlineLine1: "We build the AI department",
    headlineLine2: "for mid-sized companies.",
    subline:
      "Not individual AI tools. Your own AI department — as a lasting capability within your company. This methodology shows the way there — in three phases.",
    ctaLabel: "Book an intro call",
    ctaHref: "/kontakt",
  },

  /** MANIFEST — Warum eine Methodik. */
  manifest: {
    lead: "Most companies don't fail because of technology. They fail because AI is introduced in isolation.",
    body: [
      "Tools get bought, individual automations get built — but without ownership, structure and a foundation where everything comes together, the impact stays small.",
      "That's why we run every AI transformation in three fixed phases — so scattered parts become a department that's truly yours.",
    ],
  },

  /** ENTWICKLUNGSSTUFEN — Die Methodik. */
  stufenSection: {
    eyebrow: "The methodology",
    headingLine1: "The three phases",
    headingLine2: "of an AI department.",
    /** Ergebnis-Block-Überschrift je Stufe. */
    ergebnisLabel: "Outcome",
  },

  stufen: [
    {
      index: "01",
      title: "Analysis",
      frage: "Where does AI really pay off?",
      intro: [
        "By the end, you'll know exactly where AI has the greatest leverage in your company — and in what order it's worth implementing, before a single euro is spent.",
        "To get there, we look at what runs in your business every day, surface untapped potential, and translate every point of leverage into a prioritized roadmap.",
      ],
      listLabel: "We analyze & assess",
      list: ["Processes", "Data flows", "Knowledge structures", "Decision paths", "Recurring tasks", "Economics"],
      ergebnis: ["Potential analysis & ROI forecasts", "Prioritized areas of action", "Business cases", "Transformation roadmap"],
    },
    {
      index: "02",
      title: "Implementation",
      frage: "The analysis turns into a running system.",
      intro: [
        "Now the foundation takes shape: Cortex — the one place where employees, data, processes and agents come together. Controlled, secure and transparent instead of scattered tools.",
        "On top of that we build the digital systems and automate exactly the workflows that add the most value — based on the priorities from the analysis.",
      ],
      listLabel: "We build & automate",
      list: ["Cortex as infrastructure", "Customer portals & platforms", "Web applications", "Document processing", "Customer service", "Reporting & back office"],
      ergebnis: ["Central control & transparency", "Scalable digital products", "Less manual effort", "More operational capacity"],
    },
    {
      index: "03",
      title: "Scaling",
      frage: "No recruiting. No onboarding. No risk.",
      intro: [
        "You get a fully operational AI department — without hiring or training anyone yourself. One point of contact on your side coordinates, backed by our team with five times the capacity.",
        "Everything we build belongs to you: transparent, controllable and expandable at any time. With Embedded AI, we take on the continuous development.",
      ],
      listLabel: "What we take on",
      list: ["Strategic prioritization", "Ongoing system maintenance", "Spotting potential & further development", "Governance & data sovereignty", "Team enablement", "Infrastructure development"],
      outro: "You get the firepower of a whole team for the cost of a single hire — permanently at your side.",
      ergebnis: ["5× capacity for the cost of one hire", "No recruiting, no onboarding", "Long-term independence & data sovereignty", "Continuous transformation"],
    },
  ] as Stufe[],

  /** DAS ZIEL. */
  ziel: {
    eyebrow: "The goal",
    headingLine1: "The AI department as",
    headingLine2: "a company capability.",
    intro: "In the end there's no single tool, but an organization that puts AI to productive use for good. A company that:",
    punkte: [
      "Makes knowledge usable faster",
      "Continuously improves processes",
      "Increases productivity",
      "Drives automation systematically",
      "Can integrate digital workers over the long term",
    ],
    closing: "Individual projects turn into a lasting company capability. That's the AI department.",
  },

  /** CTA-Block. */
  cta: {
    eyebrow: "Ready for phase 01?",
    headingLine1: "Talk to us",
    headingLine2: "directly.",
    phoneHref: "tel:+4917660431467",
    phoneLabel: "+49 176 60 431 467",
  },

  /** Kontakt-Formular (Sheet). */
  contact: {
    title: "Discuss a project",
    description: "Tell us about your project — we'll get back to you shortly.",
    fields: [
      { id: "name",     label: "Name *",     type: "text",  placeholder: "Your name",          required: true },
      { id: "email",    label: "Email *",   type: "email", placeholder: "your@email.com",    required: true },
      { id: "position", label: "Position *", type: "text",  placeholder: "Your position",     required: true },
      { id: "firma",    label: "Company *",    type: "text",  placeholder: "Your company",   required: true },
      { id: "telefon",  label: "Phone",    type: "tel",   placeholder: "Your phone number", required: false },
    ] as ContactField[],
    message: {
      label: "Message *",
      placeholder: "Tell us about your project...",
    },
    submit: "Send message",
  },

  /** Toast-Meldungen des Kontaktformulars. */
  toast: {
    validationTitle: "Validation error",
    successTitle: "Message sent",
    successBody: "We'll be in touch soon.",
    errorTitle: "Error",
    errorFallback: "Please try again.",
  },
} as const;
