/**
 * Page: Careers (Karriere)  — Single Type
 * --------------------------------------------------------------
 * Inhalte der Karriere-Seite (`pages/Careers.tsx`): SEO, Hero,
 * „Über uns"- und „Warum NEWEDGE"-Block, Werte-Karten, Sektion
 * „Offene Positionen" (Kopf), Initiativbewerbungs-CTA und der
 * Kontakt-Block (Wenjamin). Die Stellen selbst liegen separat in
 * `collections/jobs.ts` und werden hier NICHT dupliziert.
 *
 * Bilder werden per stabilem `ImageKey` referenziert (→ `img(key)`).
 * Icons sind hier keine — die Glyphen ▸/↗ sind dekorative
 * Schriftzeichen im Markup. Strapi-Mapping: Single Type `careers`.
 * --------------------------------------------------------------
 */
import type { SEOContent } from "../types";
import type { ImageKey } from "../assets";

/** Eine Werte-/„Was dich erwartet"-Karte. */
interface ValueCard {
  /** Nummern-Label, z. B. "01". */
  label: string;
  title: string;
  desc: string;
}

export const careers = {
  seo: {
    title: "Karriere bei NEWEDGE München | Jobs in KI, Brand & Digital",
    description:
      "Du willst an der Schnittstelle von Marke, Digital und KI arbeiten? NEWEDGE Brand sucht Gestalter, Entwickler und KI-Strategen für München.",
    canonical: "/careers",
  } satisfies SEOContent,

  /** Hero-Bereich (Aurora). */
  hero: {
    eyebrow: "NEWEDGE",
    headline: "Karriere.",
    subline:
      "Wir suchen Gestalter, Entwickler und Strategen, die an der Schnittstelle von Marke, Technologie und KI echte Wirkung erzeugen wollen.",
  },

  /** „Über uns"-Absatz. */
  about: {
    eyebrow: "Über uns",
    body:
      "NEWEDGE ist eine Creative-Tech-Agentur an der Schnittstelle von Kreation und Technologie. Wir verbinden Marke, Strategie und KI in integrierten Prozessen – mit klaren Verantwortlichkeiten und messbaren Ergebnissen.",
  },

  /** „Warum NEWEDGE"-Block + Werte-Karten. */
  why: {
    eyebrow: "Warum NEWEDGE",
    heading: "Was dich erwartet.",
    values: [
      {
        label: "01",
        title: "Innovation First",
        desc: "Arbeite mit cutting-edge KI-Technologien und gestalte die Zukunft aktiv mit.",
      },
      {
        label: "02",
        title: "Work-Life Balance",
        desc: "Flexible Arbeitszeiten, Remote-Möglichkeiten und Raum für dein Leben neben der Arbeit.",
      },
      {
        label: "03",
        title: "Weiterentwicklung",
        desc: "Kontinuierliche Weiterbildung, Konferenz-Besuche und persönliches Entwicklungsbudget.",
      },
    ] as ValueCard[],
  },

  /** Sektion „Offene Positionen" — nur Kopf; Stellen aus `jobs`. */
  positions: {
    eyebrow: "Stellen",
    heading: "Offene Positionen.",
    intro:
      "Schick uns deine Bewerbung (Lebenslauf + kurzes Anschreiben) direkt über den Button.",
    /** Beschriftung des Bewerben-Buttons je Stelle (mit Glyphe ↗). */
    applyLabel: "Jetzt bewerben ↗",
  },

  /** Initiativbewerbungs-CTA (dunkel) inkl. Wenjamin-Kreis. */
  cta: {
    eyebrow: "Kein passendes Angebot?",
    heading: "Initiativbewerbung.",
    body:
      "Kein passendes Stellenangebot gefunden? Kein Problem — schreib Wenjamin Zabezhanskiy direkt an und erzähl uns, was dich antreibt.",
    /** Kontaktperson im Kreis-Button. */
    person: {
      src: "team-wenjamin" as ImageKey,
      alt: "Wenjamin Zabezhanskiy — Initiativbewerbung",
      mailto: "mailto:wenjamin.z@newedgebrand.com",
    },
    /** Rotierender Text im SVG-Ring (textPath). */
    ringText: "JETZT BEWERBEN · JETZT BEWERBEN · ",
  },

  /** Kontakt-Link für den Kontakt-Trigger der Mobile-Navigation. */
  calendly: "/kontakt",
} as const;
