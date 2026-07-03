/**
 * Section-Text: Footer (Singleton, global)
 * --------------------------------------------------------------
 * Navigation, Kontaktdaten und Rechtliches im Footer (jede Seite).
 * Strapi-Mapping: Single Type `footer` (bzw. Teil von „globals").
 * --------------------------------------------------------------
 */
import type { ImageKey } from "../assets";

export interface NavLink {
  label: string;
  to: string;
}

export interface ContactItem {
  label: string;
  href: string;
  /** true → in neuem Tab öffnen (target=_blank, rel=noopener). */
  external?: boolean;
}

export const footer = {
  logo: {
    src: "new-edge-logo-horizontal" as ImageKey,
    alt: "NEWEDGE",
    homeAriaLabel: "NEWEDGE – zur Startseite",
  },
  /** Standort-Zeile rechts (mit geschützten Leerzeichen). */
  meta: "München\u00A0·\u00A0BAFA-förderfähig",

  columns: {
    unternehmen: {
      label: "Unternehmen",
      links: [
        { label: "Methodik", to: "/methodik" },
        { label: "Über uns", to: "/about" },
        { label: "Karriere", to: "/careers" },
      ] as NavLink[],
    },
    ressourcen: {
      label: "Ressourcen",
      links: [
        { label: "KI Glossar", to: "/ki-glossar" },
        { label: "KI Audit", to: "/ki-audit" },
      ] as NavLink[],
    },
    kontakt: {
      label: "Kontakt",
      items: [
        { label: "info@newedgebrand.com", href: "mailto:info@newedgebrand.com" },
        { label: "+49 176 60 431 467", href: "tel:+4917660431467" },
        { label: "LinkedIn\u2009↗", href: "https://www.linkedin.com/company/new-edge-brand/", external: true },
      ] as ContactItem[],
    },
  },

  /** `{year}` wird zur Laufzeit ersetzt. */
  copyrightTemplate: "© {year}\u00A0NEWEDGE. Alle Rechte vorbehalten.",

  legalLinks: [
    { label: "Impressum", to: "/impressum" },
    { label: "Datenschutz", to: "/impressum#datenschutz" },
  ] as NavLink[],
};
