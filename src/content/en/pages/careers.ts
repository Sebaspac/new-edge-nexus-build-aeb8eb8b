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
import type { SEOContent } from "@/content/types";
import type { ImageKey } from "@/content/assets";

/** Eine Werte-/„Was dich erwartet"-Karte. */
interface ValueCard {
  /** Nummern-Label, z. B. "01". */
  label: string;
  title: string;
  desc: string;
}

export const careers = {
  seo: {
    title: "Careers at NEWEDGE Munich | Jobs in AI, Brand & Digital",
    description:
      "Want to work at the intersection of brand, digital and AI? NEWEDGE Brand is looking for designers, developers and AI strategists in Munich.",
    canonical: "/en/careers",
  } satisfies SEOContent,

  /** Hero-Bereich (Aurora). */
  hero: {
    headline: "Careers.",
    subline:
      "We're looking for designers, developers and strategists who want to make real impact at the intersection of brand, technology and AI.",
  },

  /** „Über uns"-Absatz. */
  about: {
    eyebrow: "About us",
    body:
      "NEWEDGE is a creative-tech agency at the intersection of creation and technology. We connect brand, strategy and AI in integrated processes – with clear ownership and measurable results.",
  },

  /** „Warum NEWEDGE"-Block + Werte-Karten. */
  why: {
    eyebrow: "Why NEWEDGE",
    heading: "What to expect.",
    values: [
      {
        label: "01",
        title: "Innovation First",
        desc: "Work with cutting-edge AI technologies and actively help shape the future.",
      },
      {
        label: "02",
        title: "Work-Life Balance",
        desc: "Flexible hours, remote options and room for your life outside of work.",
      },
      {
        label: "03",
        title: "Growth",
        desc: "Continuous learning, conference visits and a personal development budget.",
      },
    ] as ValueCard[],
  },

  /** Sektion „Offene Positionen" — nur Kopf; Stellen aus `jobs`. */
  positions: {
    eyebrow: "Positions",
    heading: "Open positions.",
    intro:
      "Send us your application (CV + short cover letter) directly via the button.",
    /** Beschriftung des Bewerben-Buttons je Stelle (mit Glyphe ↗). */
    applyLabel: "Apply now ↗",
  },

  /** Initiativbewerbungs-CTA (dunkel) inkl. Wenjamin-Kreis. */
  cta: {
    eyebrow: "Nothing that fits?",
    heading: "Speculative application.",
    body:
      "Didn't find a role that fits? No problem — write to Wenjamin Zabezhanskiy directly and tell us what drives you.",
    /** Kontaktperson im Kreis-Button. */
    person: {
      src: "team-wenjamin" as ImageKey,
      alt: "Wenjamin Zabezhanskiy — speculative application",
      mailto: "mailto:wenjamin.z@newedgebrand.com",
    },
    /** Rotierender Text im SVG-Ring (textPath). */
    ringText: "APPLY NOW · APPLY NOW · ",
  },

  /** Kontakt-Link für den Kontakt-Trigger der Mobile-Navigation. */
  calendly: "/kontakt",
} as const;
