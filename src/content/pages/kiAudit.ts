/**
 * Page: KI-Audit  — Single Type
 * --------------------------------------------------------------
 * Landingpage für das einzige extern kommunizierte Angebot:
 * „KI-Readiness & ROI-Analyse" (Track A der Customer Journey).
 * Direkter Funnel Hero → Fahrplan-Gespräch, kein E-Mail-Gate.
 * Strapi-Mapping: Single Type `ki-audit`.
 * --------------------------------------------------------------
 */
import type { SEOContent, ImageRef } from "../types";

interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export const kiAudit = {
  seo: {
    title: "KI-Readiness & ROI-Analyse für den Mittelstand | NEWEDGE",
    description:
      "In 5–10 Werktagen zeigen wir, welche drei Prozesse den höchsten KI-ROI haben — inkl. Aufwand-Nutzen-Schätzung, Roadmap und Förderhinweis. Garantiert mindestens 3 umsetzbare Use Cases.",
    canonical: "/ki-audit",
  } satisfies SEOContent,

  /** 1 — Hero. */
  hero: {
    headline: "KI wollen Sie längst. Der erste Schritt fehlt.",
    sub:
      "Wir bauen die KI-Abteilung für den Mittelstand. Die Analyse zeigt, welche drei Prozesse sich bei Ihnen zuerst lohnen — kein Tool-Verkauf, kein Seminar, ein klarer Fahrplan.",
    ctaPrimary: "Fahrplan-Gespräch buchen",
    ctaSecondary: "Prüfen, ob's passt",
    image: {
      src: "ki-audit-hero",
      alt: "Prozessaufnahme-Gespräch zwischen NEWEDGE und einem Mittelstandsunternehmen",
    } satisfies ImageRef,
  },

  /** 2 — Problem. */
  problem: {
    heading: "Diese drei Sätze hören wir am häufigsten.",
    situations: [
      "ChatGPT läuft, Zapier auch — trotzdem kein System, das der ganzen Firma hilft.",
      "Wir wissen, dass KI wichtig ist. Uns fehlt nur der richtige erste Schritt.",
      "Niemand im Haus trägt die Verantwortung für KI — jede Initiative versandet im Tagesgeschäft.",
    ],
  },

  /** 3 — Lösung / Mechanismus. */
  solution: {
    heading: "Eine Analyse. Drei priorisierte Use Cases. Ein Fahrplan.",
    intro:
      "In rund 25 Stunden, verteilt über 5 bis 10 Werktage, finden wir die drei Prozesse mit dem höchsten KI- und Automatisierungs-ROI in Ihrem Unternehmen — mit Aufwand-Nutzen-Schätzung. Die Priorität setzen Sie selbst.",
    bullets: [
      "Drei priorisierte KI-Use-Cases — keine Liste mit fünfzig Ideen, sondern die, die sich wirklich lohnen.",
      "Aufwand-Nutzen-Schätzung pro Use Case — die Grundlage für Ihre interne Entscheidung.",
      "Ein Report, den Sie intern weiterreichen können — keine Blackbox, keine Beratersprache.",
      "Förderhinweis: Das Audit kann BAFA-förderfähig sein — das senkt Ihren Einstieg spürbar.",
    ],
  },

  /** 4 — Ablauf. */
  ablauf: {
    heading: "Der Ablauf in vier Schritten.",
    image: {
      src: "ki-audit-process",
      alt: "Strategische Planung und Priorisierung im Team",
    } satisfies ImageRef,
    steps: [
      {
        step: "01",
        title: "Intake",
        desc: "Kurzer Fragebogen vorab, damit wir das Gespräch direkt auf Ihre Prozesse ausrichten.",
      },
      {
        step: "02",
        title: "Prozessaufnahme-Call",
        desc: "Rund 60–90 Minuten mit den Leuten, die Ihre Abläufe wirklich kennen. Wir hören zu, bevor wir urteilen.",
      },
      {
        step: "03",
        title: "Use-Case-Mapping & ROI",
        desc: "Wir bewerten jeden identifizierten Prozess nach Aufwand und Nutzen und priorisieren die drei mit dem höchsten Hebel.",
      },
      {
        step: "04",
        title: "Report & Roadmap-Übergabe",
        desc: "Sie bekommen den vollständigen Report — und ein Gespräch, in dem wir die Roadmap gemeinsam durchgehen.",
      },
    ] as ProcessStep[],
  },

  /** 5 — Warum NEWEDGE. */
  warum: {
    heading: "Warum mit uns.",
    points: [
      "Wir sagen auch, wenn der Zeitpunkt nicht passt — direkt, auch wenn aus dem Audit dann kein Auftrag wird.",
      "Wir verkaufen kein Tool. Die Analyse ist herstellerunabhängig — das Ergebnis ist Ihre Priorität, nicht unser Produktkatalog.",
      "Wir sprechen auf Augenhöhe. Keine Folienschlacht, kein Fachchinesisch — ein Gespräch zwischen Leuten, die liefern müssen.",
    ],
  },

  /** 6 — Garantie. */
  garantie: {
    heading: "Die Garantie.",
    text:
      "Mindestens drei umsetzbare KI-Use-Cases aus Ihrem Audit. Garantiert — oder Sie zahlen nicht.",
    sub: "Liefern wir das nicht, entstehen Ihnen keine Kosten.",
    image: {
      src: "team-presentation-color",
      alt: "NEWEDGE Gründer im Austausch mit dem Team",
    },
  },

  /** 7 — Für wen / nicht. */
  fit: {
    heading: "Für wen das ist — und für wen nicht.",
    passtLabel: "Das passt, wenn:",
    passt: [
      "Sie 10 bis 150 Mitarbeitende haben und wissen wollen, wo KI bei Ihnen konkret ansetzt.",
      "Sie ChatGPT oder Zapier bereits ausprobiert haben — aber ohne System dahinter.",
      "Sie eine Entscheidungsgrundlage wollen, keine weitere Meinung.",
    ],
    passtNichtLabel: "Das passt nicht, wenn:",
    passtNicht: [
      "Sie ein fertiges Tool zum Sofort-Kaufen suchen — das liefern wir nicht.",
      "Sie nur reinschnuppern wollen, ohne eigene Zeit zu investieren — der Prozessaufnahme-Call braucht Ihre Leute.",
      "Sie schon eine KI-Strategie haben und nur Umsetzung suchen — dann sprechen Sie uns direkt auf den nächsten Schritt an.",
    ],
  },

  /** FAQ — Landing-Page-Fragen (Voice: „Sie"). */
  faq: {
    heading: "Häufige Fragen",
    items: [
      { q: "Was kostet das Audit?", a: "Das Erstgespräch ist kostenlos und unverbindlich. Das Audit selbst ist an unsere Garantie geknüpft: Finden wir keine drei umsetzbaren KI-Use-Cases, zahlen Sie nichts." },
      { q: "Wie lange dauert das Ganze?", a: "Vom Erstgespräch bis zum fertigen Fahrplan vergehen in der Regel ein bis zwei Wochen — abhängig davon, wie schnell wir Einblick in Ihre Prozesse bekommen." },
      { q: "Müssen wir schon KI im Einsatz haben?", a: "Nein. Ob Sie ChatGPT schon ausprobiert haben oder bei null starten, spielt keine Rolle." },
      { q: "Was bekommen wir am Ende konkret?", a: "Eine priorisierte Liste umsetzbarer Use-Cases mit ROI-Einschätzung und einen konkreten Fahrplan — eine Entscheidungsgrundlage, keine weitere Meinung." },
      { q: "Ist das ein Verkaufsgespräch?", a: "Nein. Wir hören zu und prüfen, ob es passt. Ob wir zusammenarbeiten, entscheiden am Ende beide Seiten." },
      { q: "Für welche Unternehmensgröße lohnt sich das?", a: "Am meisten für Unternehmen mit 10 bis 150 Mitarbeitenden, die genug Prozesse für echten Hebel haben, aber noch keine eigene KI-Abteilung." },
    ],
  },

  /** 8 — CTA / Kontakt. */
  cta: {
    heading: "Fahrplan-Gespräch buchen.",
    sub: "Ein Gespräch, keine Verkaufsshow. Wir hören zu und prüfen, ob's passt — die Entscheidung treffen am Ende beide Seiten.",
    transparency: "Erstkontakt → Gespräch → Entscheidung auf beiden Seiten.",
    calendlyUrl: "",
  },
} as const;
