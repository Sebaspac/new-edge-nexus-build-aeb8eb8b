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
import type { SEOContent } from "../types";

export const contact = {
  seo: {
    title: "Kontakt | KI-Beratung & Prozessautomatisierung München | NEWEDGE",
    description:
      "Kontaktieren Sie NEWEDGE für KI-Beratung, Prozessautomatisierung und Marketing-Automation in München.",
    canonical: "/kontakt",
  } satisfies SEOContent,

  hero: {
    headline: "Lassen Sie uns sprechen.",
    sub: "Erzählen Sie uns von Ihrem Unternehmen — wir melden uns innerhalb eines Werktags mit den nächsten Schritten.",
  },

  /** Portrait-Video links (Poster + Play, echtes Video folgt separat). */
  video: {
    poster: "team-sebastian",
    posterAlt: "Sebastian Pachon, Gründer & Geschäftsführer NEWEDGE",
    caption: "Kurzer Realtalk von Sebastian, Co-Founder.",
  },
} as const;
