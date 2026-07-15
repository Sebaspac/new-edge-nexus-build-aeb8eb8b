/**
 * Section-Text: Navigation (Singleton, global)
 * --------------------------------------------------------------
 * Desktop-Mega-Menu + Mobile-Menu (Komponente `MobileNavigation`).
 * Icons als Name-Strings → über die Icon-Registry austauschbar.
 * Strapi-Mapping: Single Type `navigation`.
 * --------------------------------------------------------------
 */
import type { ImageKey } from "@/content/assets";
import type { IconName } from "@/content/icons";

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
  logo: { src: "new-edge-logo-wordmark" as ImageKey, alt: "NEWEDGE" },

  filterButtons: [{ key: "all", label: "All" }] as FilterButton[],

  megaMenu: {
    trigger: "Solutions",
    painPointsHeading: "By pain point",
    industrienHeading: "By industry",
    featuredHeading: "Success Story",
  },

  painPoints: [
    { to: "/loesungen/auswahlverfahren", label: "Selection Processes & Awards", icon: "Award" },
    { to: "/loesungen/compliance", label: "Import / Export & Compliance", icon: "ShieldCheck" },
    { to: "/loesungen/kpi-dashboard", label: "KPI Transparency & Reporting", icon: "BarChart3" },
    { to: "/loesungen/ki-kundensupport", label: "Customer Support with AI", icon: "Headphones" },
  ] as NavMenuItem[],

  industrien: [
    { to: "/industrien/entscheidungsinstanzen", label: "Decision-Making Bodies", icon: "Trophy" },
    { to: "/industrien/health-care", label: "Health Care", icon: "ShoppingCart" },
    { to: "/industrien/handel-supply-chain", label: "Retail & Supply Chain", icon: "Truck" },
    { to: "/industrien/professional-services", label: "Professional Services", icon: "Building2" },
  ] as NavMenuItem[],

  featured: {
    to: "/loesungen/auswahlverfahren",
    image: { src: "team-sebastian" as ImageKey, alt: "NEWEDGE Team" },
    title: "BMP Award — Selection Processes with AI",
    desc: "70% less effort with audit-proof documentation.",
    cta: "Read the case →",
  },

  company: {
    trigger: "Company",
    links: [
      { to: "/methodik", label: "Methodology" },
      { to: "/about", label: "About" },
      // Careers temporarily disabled — content stays in the CMS, only the link is removed
    ] as NavLinkItem[],
  },

  /** Desktop-CTA-Button + Kontakt-Link. */
  cta: { label: "Contact", calendly: "/kontakt" },

  mobile: {
    toggleAria: "Toggle menu",
    contactButton: "Get in touch",
  },
};
