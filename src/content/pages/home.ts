/**
 * Page: Home (Index)  — Single Type
 * --------------------------------------------------------------
 * Inhalte der Startseite, die direkt in `pages/Index.tsx` liegen.
 * Die großen Abschnitte (Hero, Cortex, …) sind eigene Section-
 * Komponenten mit eigenen Content-Modulen.
 * Strapi-Mapping: Single Type `home`.
 * --------------------------------------------------------------
 */
import type { SEOContent } from "../types";

interface ContactField {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
}

export const home = {
  seo: {
    title: "KI-Agentur München | Prozessautomatisierung & Markenaufbau für KMU | NEWEDGE",
    description:
      "NEWEDGE ist eure KI-Agentur in München. Wir verbinden Markenaufbau, Prozessautomatisierung und KI-Systeme – für KMU, die konsequent wachsen wollen.",
    canonical: "/",
  } satisfies SEOContent,

  /** Alt-Text des Lade-Logos. */
  loadingAlt: "NEWEDGE",

  /** Kontakt-Formular (Sheet). */
  contact: {
    /** Titel je nach Absender-Typ. */
    titles: {
      kmu: "Anfrage von Unternehmen (KMU)",
      agentur: "Anfrage von Agenturpartner",
      default: "Projekt besprechen",
    },
    description: "Erzählen Sie uns von Ihrem Projekt - wir melden uns zeitnah bei Ihnen.",
    fields: [
      { id: "name", label: "Name *", type: "text", placeholder: "Ihr Name", required: true },
      { id: "email", label: "E-Mail *", type: "email", placeholder: "ihre@email.com", required: true },
      { id: "position", label: "Position *", type: "text", placeholder: "Ihre Position", required: true },
      { id: "firma", label: "Firma *", type: "text", placeholder: "Ihr Unternehmen", required: true },
      { id: "telefon", label: "Telefon", type: "tel", placeholder: "Ihre Telefonnummer", required: false },
    ] as ContactField[],
    message: {
      label: "Nachricht *",
      placeholder: "Erzählen Sie uns von Ihrem Projekt...",
      defaultKmu: "Ich interessiere mich für Automatisierungslösungen mit NEWEDGE.",
      defaultAgentur: "Wir möchten Partner von NEWEDGE werden und gemeinsam Projekte automatisieren.",
    },
    submit: "Nachricht senden",
  },

  /** Toast-Meldungen des Kontaktformulars. */
  toast: {
    validationTitle: "Validierungsfehler",
    validationFallback: "Validierungsfehler",
    successTitle: "Anfrage erhalten",
    successBody: "Vielen Dank für Ihre Anfrage! Wir melden uns zeitnah bei Ihnen.",
    errorTitle: "Fehler",
    errorFallback: "Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut.",
  },
} as const;
