/**
 * Section-Text: Horizontal-Scroll (Prozess + Value Pillars)
 * --------------------------------------------------------------
 * Zwei horizontal gescrollte Panels auf der Startseite:
 *   1) „Unser Prozess" — fünf nummerierte Phasen (Roadmap).
 *   2) „Warum NEWEDGE" — drei Value-Pillars mit Icon.
 * Icons als Name-Strings → über die Icon-Registry austauschbar.
 * Layout-/Animationswerte (Scroll-Offsets, Spaltenraster, Farben)
 * bleiben in der Komponente — das ist kein Inhalt.
 * Strapi-Mapping: Single Type `horizontalScroll` (bzw. Teil von „home").
 * Alle Werte serialisierbar (CMS-tauglich): nur Strings/Arrays/Objects.
 * --------------------------------------------------------------
 */
import type { IconName } from "../icons";

/** Eine nummerierte Phase der Prozess-Roadmap. */
export interface ProcessStep {
  index: string;
  title: string;
  desc: string;
}

/** Ein Value-Pillar mit Icon (Name-String → Icon-Registry). */
export interface ValuePillar {
  icon: IconName;
  title: string;
  desc: string;
}

export const horizontalScroll = {
  // ── Panel 1 — Prozess-Roadmap ───────────────────────────────────────────────
  process: {
    eyebrow: "Unser Prozess",
    /** Überschrift: statischer Teil + zyklisch animierte Wörter. */
    headingLead: "So entsteht eine",
    headingWords: ["KI-Abteilung.", "Betriebsstruktur.", "KI-Roadmap."],
    body: "Fünf Phasen, ein klares Ziel. Kein Wasserfallmodell, sondern iterative Zusammenarbeit mit vollem Einblick in jeden Schritt.",
    steps: [
      {
        index: "01",
        title: "Verstehen",
        desc: "Analyse und Audit schaffen Transparenz. Wir identifizieren Potenziale, Engpässe und Prioritäten.",
      },
      {
        index: "02",
        title: "Fundament schaffen",
        desc: "Mit Cortex entsteht die zentrale Infrastruktur. Mitarbeiter, Prozesse und KI arbeiten erstmals auf einer gemeinsamen Ebene.",
      },
      {
        index: "03",
        title: "Produktivität steigern",
        desc: "Automatisierungen reduzieren manuelle Arbeit und schaffen messbare Effizienzgewinne.",
      },
      {
        index: "04",
        title: "Verantwortung etablieren",
        desc: "Mit Embedded AI entsteht kontinuierliche Weiterentwicklung statt Einzelprojekte.",
      },
      {
        index: "05",
        title: "Skalieren",
        desc: "Die Organisation entwickelt sich schrittweise zu einer KI-gestützten Betriebsstruktur.",
      },
    ] as ProcessStep[],
  },

  // ── Panel 2 — Value Pillars ─────────────────────────────────────────────────
  pillarsPanel: {
    eyebrow: "Warum NEWEDGE",
    /** Überschrift: statischer Teil + animierte Wörter + Zeile danach. */
    headingLead: "Wir nutzen KI als",
    headingWords: ["Erfolgsfaktor", "Motor", "Helfer", "Vorteil"],
    headingTail: "für Ihr Unternehmen.",
    body: "KI entfaltet ihren vollen Mehrwert nur, wenn sie strategisch in Ihre Geschäftsziele integriert wird. Als spezialisierter Partner verbinden wir Beratung, Entwicklung und Integration.",
    pillars: [
      {
        icon: "Target",
        title: "Strategie & Klarheit",
        desc: "Von der KI-Strategie bis zur konkreten Umsetzung. Wir analysieren Ihre Prozesse, identifizieren echte Hebel und bauen Systeme, die wirken — nicht bloß beeindrucken.",
      },
      {
        icon: "Layers",
        title: "Nahtlose Integration",
        desc: "KI wird direkt in Ihre bestehenden Tools und Systeme eingebaut — ERP, CRM, interne Plattformen. Kein Bruch, kein Parallelbetrieb, keine Reibung.",
      },
      {
        icon: "ShieldCheck",
        title: "Datenhoheit & Sicherheit",
        desc: "DSGVO-konforme Architekturen, bei denen Sie die volle Kontrolle behalten. Ihre Daten bleiben Ihre Daten — intern, sicher, auditierbar.",
      },
    ] as ValuePillar[],
  },
};
