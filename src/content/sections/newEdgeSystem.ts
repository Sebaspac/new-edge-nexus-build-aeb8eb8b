/**
 * Section-Text: Das NEWEDGE System (Methodik)
 * --------------------------------------------------------------
 * Animiertes System-Diagramm „Dieselben Bausteine. Jede
 * Transformation." — eine Reihe aus sechs Ebenen-Karten mit
 * Chevron-Konnektoren (Komponente `NewEdgeSystemAnimated`).
 *
 * NUR Text-Labels liegen hier (Eyebrow, Headline, Subline, je Karte
 * Index/Titel/Sub, Footer-Zeilen). Sämtliche Geometrie, Farben,
 * SVG-Pfade, Animations-Timings und das Ikonografie-Artwork der
 * Karten bleiben in der Komponente — das ist Layout, kein Inhalt.
 * Es gibt keine Bilder und keine content-gebundenen Icons.
 *
 * Alle Felder sind serialisierbar (CMS-tauglich): nur
 * Strings/Arrays — kein JSX, keine Funktionen.
 * Strapi-Mapping: Single Type `newedge-system` (bzw. Teil von „methodik").
 * --------------------------------------------------------------
 */

/** Eine Ebenen-Karte: Text-Labels (Index/Titel/Sub = Inhalt; Akzent + Icon-Artwork = Layout). */
export interface NewEdgeSystemCard {
  /** Laufende Nummer als Label, z. B. „01". */
  index: string;
  /** Karten-Titel, z. B. „Cortex". */
  title: string;
  /** Karten-Unterzeile, z. B. „bildet die Infrastruktur.". */
  sub: string;
}

export interface NewEdgeSystemContent {
  /** Eyebrow oben (neben der Linie). */
  eyebrow: string;
  /** Headline-Zeilen (durch `<br />` getrennt gerendert). */
  headingLines: string[];
  /** Subline unter der Headline. */
  subline: string;
  /** Ebenen-Karten (Reihenfolge = Render-/Layout-Reihenfolge). */
  cards: NewEdgeSystemCard[];
  /** Footer-Zeilen unter dem Divider. */
  footer: {
    /** Linke Zeile. */
    left: string;
    /** Rechte Zeile. */
    right: string;
  };
}

export const newEdgeSystem: NewEdgeSystemContent = {
  eyebrow: "Das NEWEDGE System",
  headingLines: ["Dieselben Bausteine.", "Jede Transformation."],
  subline:
    "Jede erfolgreiche KI-Transformation basiert auf denselben Bausteinen. Gemeinsam bilden diese Ebenen die Grundlage einer modernen KI-Abteilung.",
  cards: [
    { index: "01", title: "Cortex", sub: "bildet die Infrastruktur." },
    { index: "02", title: "Strategie", sub: "schafft Orientierung." },
    { index: "03", title: "Digitale Systeme", sub: "schaffen Arbeitsräume." },
    { index: "04", title: "Automatisierung", sub: "steigert Produktivität." },
    { index: "05", title: "Ownership", sub: "sichert Kontrolle." },
    { index: "06", title: "Embedded AI", sub: "übernimmt Verantwortung." },
  ],
  footer: {
    left: "Left-to-right transformation flow",
    right: "Das NEWEDGE System · NEWEDGE",
  },
};
