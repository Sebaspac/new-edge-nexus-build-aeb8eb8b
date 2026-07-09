/**
 * Page: Websites & Web-Plattformen  — Landing (Webentwicklung & Design)
 * --------------------------------------------------------------
 * Standalone-Landing (Struktur wie `pages/kiAudit.ts`): Hero, Showreel
 * (Video + Logo-Grid), Projektablauf (3 Schritte), Projekteinblicke
 * (Case-Karten) und Erstgespräch-CTA. Layout am Referenz-Design
 * orientiert, Optik in NEWEDGE-CI. Voice: informell „ihr/euch" (wie
 * die KI-Audit-Landing).
 * Bilder = vorhandene NEWEDGE-Assets (Platzhalter für echte Projekte,
 * im CMS austauschbar). Serialisierbar (nur Strings/Arrays) — CMS-tauglich.
 * Strapi-Mapping: Single Type `web-design`.
 * --------------------------------------------------------------
 */
import type { SEOContent } from "../types";
import type { ImageKey } from "../assets";

export const webDesign = {
  seo: {
    title: "Websites & Web-Plattformen | NEWEDGE — Webentwicklung & Design",
    description:
      "Wir bauen Websites und digitale Plattformen für den Mittelstand, die verkaufen: Strategie, Design und Entwicklung aus einer Hand — performant, individuell, skalierbar.",
    canonical: "/websites",
  } satisfies SEOContent,

  /** HERO — hell, zentriert (Referenz-Layout), Violett-Akzent. */
  hero: {
    eyebrow: "Webentwicklung & Design",
    headlinePrefix: "Websites, die ",
    headlineAccent: "verkaufen",
    headlineSuffix: " — bevor ihr überhaupt sprecht.",
    sub: "Eure Website ist eure erste Verkaufskraft. Wir bauen digitale Auftritte, die euch von der Masse abheben, Vertrauen schaffen und qualifizierte Anfragen bringen — nicht nur gut aussehen.",
    trustChips: ["Höhere Conversion", "Mehr qualifizierte Anfragen", "Ein Ansprechpartner"],
    ctaPrimary: "Erstgespräch anfragen",
    note: "100% kostenlos & unverbindlich.",
  },

  /** SHOWREEL — dunkle Karte mit Video-Facade + Logo-Grid + Founder-Avatar. */
  showreel: {
    logosHeading: "Vertraut von wachsenden Marken",
    videoCaption: "NEWEDGE — Showreel",
    founder: { name: "Sebastian", role: "Co-Founder NEWEDGE" },
  },

  /** PROJEKTABLAUF — 3 Schritte. */
  prozess: {
    eyebrow: "Schnell. Effizient. Ergebnisorientiert.",
    heading: "Der Projektablauf",
    steps: [
      {
        title: "Strategie & Branding",
        desc: "Wir definieren, wofür ihr steht und für wen — und bauen ein visuelles System, das eure Qualität auf den ersten Blick sichtbar macht.",
        image: "painpoint-a-vorher-nachher" as ImageKey,
      },
      {
        title: "Webdesign",
        desc: "Ein performantes, individuelles Design, das Besucher überzeugt und gezielt zu Anfragen führt — nicht nur gefällt.",
        image: "albanova-website" as ImageKey,
      },
      {
        title: "Entwicklung",
        desc: "Skalierbar und sauber gebaut: schnell, flexibel und wartbar — am Ende gehört alles euch, ohne Agentur-Abhängigkeit.",
        image: "painpoint-a-feature2" as ImageKey,
      },
    ],
    ctaPrimary: "Erstgespräch anfragen",
    note: "100% kostenlos & unverbindlich.",
  },

  /** PROJEKTEINBLICKE — Case-Karten (Logo + Text + Projekt-Visual). */
  cases: {
    eyebrow: "Projekte",
    heading: "Projekteinblicke",
    items: [
      {
        logo: "logo-albanova-consulting" as ImageKey,
        name: "AlbaNova Consulting",
        desc: "Von der Vision zur Marktpräsenz: neue Website und Brand-System für die Consulting-Marke — klar positioniert, hochwertig, auf Anfragen ausgerichtet.",
        imageDesktop: "albanova-website" as ImageKey,
        imagePhone: "pain-point-kundensupport-hero" as ImageKey,
      },
      {
        logo: "logo-elite-aesthetic" as ImageKey,
        name: "Elite Aesthetic",
        desc: "Ein digitaler Auftritt, der die Premium-Positionierung widerspiegelt — Design und Buchungsstrecke greifen ineinander und wirken sofort professionell.",
        imageDesktop: "pain-point-professional-services-hero" as ImageKey,
        imagePhone: "pain-point-health-care-hero" as ImageKey,
      },
      {
        logo: "logo-becoming-you" as ImageKey,
        name: "Becoming You",
        desc: "Eine Plattform, die skaliert: individuelles Interface, sauberes Fundament und ein System, das das Team eigenständig weiterpflegen kann.",
        imageDesktop: "painpoint-a-section3" as ImageKey,
        imagePhone: "pain-point-kpi-dashboard-hero" as ImageKey,
      },
    ],
  },

  /** ERSTGESPRÄCH — dunkle Abschluss-Sektion (Avatar → Heading → Sub → CTA → Logo-Cloud). */
  finalCta: {
    eyebrow: "Los geht's",
    heading: "Erstgespräch buchen",
    sub: "In einem kurzen Kennenlern-Call schauen wir gemeinsam, ob und wo ein Projekt Sinn macht. Basierend auf eurer Situation und euren Zielen, komplett unverbindlich.",
    ctaPrimary: "Erstgespräch anfragen",
    note: "100% kostenlos & unverbindlich.",
  },
} as const;
