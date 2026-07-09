/**
 * Page: Contact (Kontakt) — Single Type
 * --------------------------------------------------------------
 * Eigene Kontaktseite (Rebrush 2026-07, Referenz-Layout: Video links,
 * Formular rechts, ein einziger Schritt — kein Multi-Step-Wizard).
 * Formularfelder/-labels kommen weiter aus `contactFormModal` (geteilt
 * mit dem Dialog auf anderen Seiten); hier liegt nur das Seiten-Chrome.
 * `hero` + `video` sind noch NICHT als Strapi-Felder angelegt (statischer
 * Fallback greift immer — bewusst NICHT über `useCms` geladen, damit ein
 * unvollständiger CMS-Eintrag diese Felder nicht überschreibt).
 * Strapi-Mapping: Single Type `contact` (nur `seo` ist live CMS-fähig).
 * --------------------------------------------------------------
 */
import type { SEOContent } from "@/content/types";

export const contact = {
  seo: {
    title: "Contact | AI Consulting & Process Automation Munich | NEWEDGE",
    description:
      "Get in touch with NEWEDGE for AI consulting, process automation and marketing automation in Munich.",
    canonical: "/en/kontakt",
  } satisfies SEOContent,

  hero: {
    eyebrow: "Contact",
    headline: "Let's talk.",
    sub: "Tell us about your company — we'll get back to you within one business day with the next steps.",
  },

  /** Portrait-Video links (Poster + Play, echtes Video folgt separat). */
  video: {
    poster: "team-sebastian",
    posterAlt: "Sebastian Pachon, Founder & Managing Director NEWEDGE",
    caption: "A short, straight-talk clip from Sebastian, Co-Founder.",
  },
} as const;
