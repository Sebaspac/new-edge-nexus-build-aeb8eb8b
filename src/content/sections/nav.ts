/**
 * Section-Text: Navigation (Singleton, global)
 * --------------------------------------------------------------
 * Desktop-Mega-Menu + Mobile-Menu (Komponente `MobileNavigation`).
 * Icons als Name-Strings → über die Icon-Registry austauschbar.
 * Strapi-Mapping: Single Type `navigation`.
 * --------------------------------------------------------------
 */
import type { ImageKey } from "../assets";
import type { IconName } from "../icons";

export type CategoryFilter = "all" | "studio" | "lab";

export interface FilterButton {
  key: CategoryFilter;
  label: string;
}

/** Menüeintrag mit Icon (Anwendungsfelder). */
export interface NavMenuItem {
  to: string;
  label: string;
  icon: IconName;
}

/** Einfacher Menü-Link ohne Icon. */
export interface NavLinkItem {
  to: string;
  label: string;
}

export const nav = {
  logo: { src: "newedge-wordmark" as ImageKey, alt: "NEWEDGE" },

  filterButtons: [{ key: "all", label: "Alle" }] as FilterButton[],

  megaMenu: {
    trigger: "Lösungen",
    painPointsHeading: "Nach Herausforderung",
    industrienHeading: "Nach Branche",
    featuredHeading: "Success Story",
  },

  painPoints: [
    { to: "/loesungen/auswahlverfahren", label: "Auswahlverfahren & Awards", icon: "Award" },
    { to: "/loesungen/compliance", label: "Import / Export & Compliance", icon: "ShieldCheck" },
    { to: "/loesungen/kpi-dashboard", label: "KPI-Transparenz & Reporting", icon: "BarChart3" },
    { to: "/loesungen/ki-kundensupport", label: "Kundensupport mit KI", icon: "Headphones" },
  ] as NavMenuItem[],

  industrien: [
    { to: "/industrien/entscheidungsinstanzen", label: "Entscheidungsinstanzen", icon: "Trophy" },
    { to: "/industrien/health-care", label: "Health Care", icon: "ShoppingCart" },
    { to: "/industrien/handel-supply-chain", label: "Handel & Supply Chain", icon: "Truck" },
    { to: "/industrien/professional-services", label: "Professional Services", icon: "Building2" },
  ] as NavMenuItem[],

  featured: {
    to: "/loesungen/auswahlverfahren",
    image: { src: "team-sebastian" as ImageKey, alt: "NEWEDGE Team" },
    title: "BMP Award — Auswahlverfahren mit KI",
    desc: "70% weniger Aufwand bei revisionssicherer Dokumentation.",
    cta: "Beispiel lesen →",
  },

  company: {
    trigger: "Unternehmen",
    links: [
      { to: "/methodik", label: "Methodik" },
      // Über uns vorerst deaktiviert — Content bleibt im CMS, nur der Link ist raus
      // Karriere vorerst deaktiviert — Content bleibt im CMS, nur der Link ist raus
    ] as NavLinkItem[],
  },

  /** Desktop-CTA-Button + Kontakt-Link. */
  cta: { label: "Kontakt", calendly: "/kontakt" },

  mobile: {
    toggleAria: "Toggle menu",
    contactButton: "Kontakt aufnehmen",
  },
};
