/**
 * Page: KI-Audit  — Single Type
 * --------------------------------------------------------------
 * Inhalte der KI-Audit-Landingpage (`pages/KiAudit.tsx`): Hero,
 * Problem/Pain-Points, Leistung, Prozess und Trust/Social-Proof.
 * Bilder werden per stabilem `ImageKey` referenziert (→ `img(key)`),
 * content-gebundene Icons per `IconName` (→ `<Icon name=… />`).
 * Dekorative Inline-Glyphen (ArrowRight, ChevronDown, Quote, X) bleiben
 * direkte lucide-Imports in der Komponente.
 * Strapi-Mapping: Single Type `ki-audit`.
 * --------------------------------------------------------------
 */
import type { SEOContent, ImageRef } from "../types";
import type { IconName } from "../icons";

/** Eine Pain-Point-Karte (Zitat). */
interface PainPoint {
  q: string;
}

/** Ein Leistungspunkt (Icon + Text). */
interface LeistungItem {
  icon: IconName;
  text: string;
}

/** Ein Prozessschritt (Nummer, Titel, Beschreibung, Icon). */
interface ProcessStep {
  step: string;
  title: string;
  desc: string;
  icon: IconName;
}

/** Eine Kennzahl (Wert + Label). */
interface Stat {
  value: string;
  label: string;
}

export const kiAudit = {
  seo: {
    title: "KI-Audit für den Mittelstand | BAFA-förderfähig ab €448 | NEWEDGE",
    description:
      "Strukturierter KI Audit für den Mittelstand. IST-Analyse, Roadmap, BAFA-förderfähig. Ab €448 mit Förderung.",
    canonical: "/ki-audit",
  } satisfies SEOContent,

  /** 1 — Hero. */
  hero: {
    badge: "Kostenloser KI Audit",
    headline: "Schon mal an KI & Automationen gedacht?",
    /**
     * Subline mit hartem Zeilenumbruch (`{"\n"}`) zwischen den beiden
     * Teilen; `whitespace-pre-line` rendert den Umbruch. Teil 1 endet
     * mit einem Leerzeichen (verhaltenserhaltend).
     */
    sublineLine1:
      "Erfahren Sie in 30 Minuten welche Prozesse sich in Ihrem Unternehemen automatisieren lassen. ",
    sublineLine2:
      "Jetzt kostenlosen KI Audit sichern – strukturiert, punktuell, BAFA-gefördert.",
    cta: {
      label: "Termin sichern",
      href: "https://calendly.com/wenjamin-z-newedgebrand/30min?month=2026-03",
    },
    image: {
      src: "ki-audit-hero",
      alt: "Professionelle Beratung am Arbeitsplatz",
    } satisfies ImageRef,
    scroll: "Scroll",
  },

  /** 2 — Problem / Pain Points. */
  problem: {
    eyebrow: "Das Problem",
    heading: "Kommt euch das bekannt vor?",
    items: [
      { q: "Wir haben 20 Mitarbeiter die täglich dieselben Aufgaben manuell abarbeiten — das muss doch smarter gehen." },
      { q: "Erste Automationen laufen, aber eigentlich läuft alles noch manuell." },
      { q: "Unser Team verbringt 40 % der Zeit mit Aufgaben, die eine KI bestimmt erledigen könnte — wir wissen es, aber haben keinen Plan." },
    ] as PainPoint[],
  },

  /** 3 — Leistung. */
  leistung: {
    eyebrow: "Leistung",
    heading: "Was ist der KI Enablement & Audit?",
    items: [
      { icon: "FileText", text: "Strukturierte IST-Analyse eurer Prozesse und Tools" },
      { icon: "Zap", text: "Bewertung: Wo lohnt sich KI, wo noch nicht" },
      { icon: "CheckCircle2", text: "Konkrete Maßnahmen-Roadmap für die nächsten 90 Tage" },
      { icon: "Shield", text: "Kein Bericht der in der Schublade landet — sondern Aktionsplan" },
    ] as LeistungItem[],
    notHeading: "Kein:",
    notItems: ["Tool-Demo", "Theorie-Workshop", "Framework-Folien"],
  },

  /** 4 — Prozess. */
  prozess: {
    eyebrow: "Prozess",
    heading: "Von der Anfrage zum Aktionsplan",
    image: {
      src: "ki-audit-process",
      alt: "Strategische Planung und Analyse im Team",
    } satisfies ImageRef,
    steps: [
      {
        step: "01",
        title: "30-Min Erstgespräch",
        desc: "Kostenlos & unverbindlich — wir analysieren gemeinsam eure Prozesse, Tools und KI-Potenziale.",
        icon: "Clock",
      },
      {
        step: "02",
        title: "Sofort-Audit in 30 Min",
        desc: "Direkt im Gespräch: Potenzialanalyse, priorisierte Roadmap und klare Entscheidungsgrundlagen — kein Warten.",
        icon: "FileText",
      },
      {
        step: "03",
        title: "Implementierung & Klarheit",
        desc: "Ihr wisst genau, wo KI euch weiterbringt — mit konkretem Aktionsplan für die nächsten 90 Tage.",
        icon: "Presentation",
      },
    ] as ProcessStep[],
  },

  /** 5 — Trust & Social Proof. */
  trust: {
    eyebrow: "Referenz",
    heading: "Ergebnisse, keine Versprechen",
    stats: [
      { value: "30%", label: "Zeitersparnis bei Routineaufgaben" },
      { value: "5×", label: "Schnellere Angebotserstellung" },
      { value: "90", label: "Tage bis ganzheitliche Automatisierung " },
    ] as Stat[],
    quote:
      "„NEWEDGE hat uns in 3 Wochen gezeigt, wo KI bei uns wirklich Hebel hat — und wo wir besser die Finger davon lassen. Das hat uns Monate an Fehlversuchen erspart.\"",
    quoteAuthor: "— Geschäftsführer, mittelständisches Industrieunternehmen",
  },
} as const;
