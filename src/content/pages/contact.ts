/**
 * Page: Contact (Kontakt)  — Single Type
 * --------------------------------------------------------------
 * Die Kontakt-Route (`pages/Contact.tsx`) ist ein dünner Wrapper, der
 * direkt das `ContactFormModal` öffnet. Eigener sichtbarer Text existiert
 * nur in den SEO-Kopfdaten — die Formular-Inhalte selbst leben im
 * `ContactFormModal`. Die Theme-/Farb-Props des Modals sind Präsentation
 * (kein Inhalt) und bleiben in der Komponente.
 * Strapi-Mapping: Single Type `contact`.
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
} as const;
