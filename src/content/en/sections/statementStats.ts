/**
 * Section-Text: Statement + Kennzahlen (Startseite, 2. Section, Rebrush 2026-07)
 * --------------------------------------------------------------
 * Noramble-Referenz-Layout: zentriertes Statement, Absatz, zwei
 * Pill-CTAs, darunter drei riesige, versetzt gestaffelte Kennzahlen
 * (Komponente `StatementStatsSection`). Die Kennzahlen selbst kommen
 * weiter aus `sections/impactCounter.ts` (CMS-geschattet) — hier liegt
 * nur das Section-Chrome. Statement + Absatz sind verbatim aus der
 * früheren Hero-Subline übernommen (die im Shape-Hero entfallen ist).
 * Noch NICHT als Strapi-Feld angelegt (statischer Fallback greift).
 * --------------------------------------------------------------
 */

export const statementStats = {
  /** Riesige Headline, die das Team-Bild überlappt (Referenz: „We're Noramble"). */
  title: "We are NEWEDGE",
  /** Team-/Gründerfoto unter der Headline (Registry-Key + Alt-Text). */
  image: {
    src: "founders-color",
    alt: "Sebastian & Wenjamin — the founders of NEWEDGE",
  },

  statement: "Not another tool — a department.",
  paragraph:
    "AI is everywhere — but in mid-sized companies it too often stays a siloed tool or a liability. We give your company its own AI capability: from the first analysis that shows where it pays off, all the way to running operations.",
  /** Primärer CTA → öffnet Kontakt-Dialog. */
  ctaPrimary: { label: "Free analysis" },
  /** Sekundärer CTA → /about. */
  ctaSecondary: { label: "About NEWEDGE", to: "/about" },
} as const;
