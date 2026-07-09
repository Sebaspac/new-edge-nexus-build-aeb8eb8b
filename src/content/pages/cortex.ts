/**
 * Page: Cortex — Landingpage (Single Type)
 * --------------------------------------------------------------
 * Eigenständige Landingpage NUR für Cortex, strukturell 1:1 wie
 * die KI-Audit-Landing (`pages/kiAudit.ts` + `pages/KiAudit.tsx`).
 * Inhalt abgeleitet aus `sections/cortex.ts` + `sections/cortexFeatures.ts`
 * (keine neuen Produkt-Claims). Voice: informell „ihr/euch" wie die
 * KI-Audit-Landing.
 * Eigener useCms-Key `cortex-page` (der Key `cortex` ist bereits durch
 * die Home-Section belegt → Kollision vermieden; greift statischer Fallback).
 * --------------------------------------------------------------
 */
import type { SEOContent, ImageRef } from "../types";

interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export const cortexPage = {
  seo: {
    title: "Cortex — Das Betriebssystem Ihrer KI-Abteilung | NEWEDGE",
    description:
      "Cortex ist die zentrale Ebene für KI im Mittelstand: ein Einstiegspunkt für eure Leute, volle Kontrolle über Nutzung, Daten und Automatisierungen — DSGVO-konform und auditierbar.",
    canonical: "/cortex",
  } satisfies SEOContent,

  /** 1 — Hero. */
  hero: {
    headline: "KI nutzt ihr längst. Cortex macht sie steuerbar.",
    sub:
      "Cortex ist das Betriebssystem eurer KI-Abteilung: ein zentraler Einstiegspunkt für eure Leute — und volle Kontrolle über Nutzung, Daten und Automatisierungen. DSGVO-konform, im Haus, auditierbar.",
    ctaPrimary: "Cortex-Demo buchen",
    ctaSecondary: "Prüfen, ob's passt",
    image: {
      src: "pain-point-kpi-dashboard-hero",
      alt: "Cortex — zentrale Steuerungsebene für KI im Unternehmen",
    } satisfies ImageRef,
  },

  /** 2 — Problem. */
  problem: {
    heading: "So läuft KI heute in den meisten Unternehmen.",
    situations: [
      "ChatGPT, Copilot und ein Dutzend Einzeltools — jeder nutzt etwas anderes, keiner hat den Überblick.",
      "Schatten-IT: Daten wandern in Tools, die niemand freigegeben hat — DSGVO-Risiko inklusive.",
      "Niemand steuert KI zentral. Verantwortlichkeiten sind unklar, Automatisierungen bleiben Insellösungen.",
    ],
  },

  /** 3 — Lösung / Mechanismus. */
  solution: {
    heading: "Ein Einstiegspunkt. Eine Ebene. Volle Kontrolle.",
    intro:
      "Cortex wird zum zentralen Einstiegspunkt für KI im Unternehmen: Eure Mitarbeiter bekommen Zugriff auf produktive, freigegebene KI — ihr bekommt Transparenz und Kontrolle über Nutzung, Daten, Prozesse und Automatisierungen.",
    bullets: [
      "Transparenz über KI-Nutzung — statt Schatten-IT seht ihr, wer KI wofür einsetzt.",
      "DSGVO-konforme Infrastruktur — eure Daten bleiben unter Kontrolle: intern, sicher, auditierbar.",
      "Zentrale Steuerung — ein Einstiegspunkt für eure Leute statt zehn Einzeltools nebenher.",
      "Fundament für Automatisierungen — Prozesse, Agenten und Automatisierungen laufen auf einer gemeinsamen Ebene.",
    ],
  },

  /** 4 — Ablauf. */
  ablauf: {
    heading: "So kommt Cortex ins Haus.",
    image: {
      src: "pain-point-kpi-dashboard-hero",
      alt: "Cortex-Einführung im Unternehmen",
    } satisfies ImageRef,
    steps: [
      {
        step: "01",
        title: "Setup",
        desc: "Cortex wird in eurer Umgebung aufgesetzt — DSGVO-konform, mit euren Rollen und Rechten.",
      },
      {
        step: "02",
        title: "Zugänge",
        desc: "Eure Mitarbeiter bekommen einen zentralen, freigegebenen Zugang zu produktiver KI — Schluss mit Einzeltools nebenher.",
      },
      {
        step: "03",
        title: "Transparenz",
        desc: "Ihr seht in Echtzeit, wer KI wofür nutzt. Schatten-IT wird sichtbar und steuerbar.",
      },
      {
        step: "04",
        title: "Automatisierung",
        desc: "Auf der gemeinsamen Ebene baut ihr Prozesse und Agenten aus — Schritt für Schritt.",
      },
    ] as ProcessStep[],
  },

  /** 5 — Warum Cortex. */
  warum: {
    heading: "Warum Cortex.",
    points: [
      "Cortex ist keine weitere KI — es ist die Ebene darüber. Ihr müsst nichts wegwerfen, was schon läuft.",
      "Eure Daten bleiben eure Daten. Keine Blackbox, keine ungewollten Abflüsse — alles auditierbar.",
      "Wir bauen die KI-Abteilung für den Mittelstand. Cortex ist das Fundament, nicht das Endprodukt.",
    ],
  },

  /** 6 — Garantie. */
  garantie: {
    heading: "Die Garantie.",
    text:
      "Eure Daten bleiben im Haus — DSGVO-konform und jederzeit auditierbar.",
    sub: "Keine Blackbox, kein ungewollter Datenabfluss. Ihr behaltet die Kontrolle.",
  },

  /** 7 — Für wen / nicht. */
  fit: {
    heading: "Für wen Cortex ist — und für wen nicht.",
    passtLabel: "Das passt, wenn:",
    passt: [
      "Bei euch nutzen schon mehrere Leute KI — aber niemand hat den Überblick.",
      "Ihr wollt KI im Haus behalten: DSGVO-konform, kontrolliert, auditierbar.",
      "Ihr wollt ein Fundament, auf dem Automatisierungen wachsen können — kein weiteres Einzeltool.",
    ],
    passtNichtLabel: "Das passt nicht, wenn:",
    passtNicht: [
      "Ihr sucht ein einzelnes Feature-Tool zum Ausprobieren — Cortex ist die Ebene darunter.",
      "Bei euch nutzt niemand KI und soll es auch nicht — dann fehlt die Grundlage.",
      "Ihr wollt Daten bewusst in beliebige externe Tools geben — das verhindert Cortex bewusst.",
    ],
  },

  /** FAQ — Landing-Page-Fragen (Voice: informell „ihr/euch"). */
  faq: {
    heading: "Häufige Fragen",
    items: [
      { q: "Ersetzt Cortex ChatGPT oder Copilot?", a: "Nein. Cortex ist die Ebene darüber: Es bündelt und steuert den Zugang zu KI — welche Modelle ihr nutzt, bleibt flexibel." },
      { q: "Bleiben unsere Daten wirklich im Haus?", a: "Ja. Cortex ist auf DSGVO-konforme, kontrollierte Infrastruktur ausgelegt — eure Daten sind intern, sicher und auditierbar." },
      { q: "Wie schnell ist Cortex einsatzbereit?", a: "Das Grund-Setup steht meist in wenigen Tagen. Danach wächst Cortex mit euren Prozessen und Automatisierungen." },
      { q: "Müssen wir bestehende Tools abschalten?", a: "Nein. Cortex legt sich über das, was schon läuft, und bringt es unter eine gemeinsame Steuerung." },
      { q: "Für welche Unternehmensgröße lohnt sich Cortex?", a: "Am meisten für Unternehmen mit 10 bis 150 Mitarbeitenden, bei denen KI bereits verstreut genutzt wird." },
      { q: "Was kostet Cortex?", a: "Das hängt von Umfang und Nutzerzahl ab. Im Erstgespräch klären wir kostenlos und unverbindlich, was für euch sinnvoll ist." },
    ],
  },

  /** 8 — CTA / Kontakt (aktuell über geteilte SpeakWithUsCta-Karte gerendert). */
  cta: {
    heading: "Cortex kennenlernen.",
    sub: "Ein Gespräch, keine Verkaufsshow. Wir zeigen euch Cortex und prüfen gemeinsam, ob's passt.",
    transparency: "Erstkontakt → Demo → Entscheidung auf beiden Seiten.",
    calendlyUrl: "",
  },
} as const;
