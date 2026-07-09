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
import type { SEOContent } from "@/content/types";
import type { ImageKey } from "@/content/assets";

export const webDesign = {
  seo: {
    title: "Websites & Web Platforms | NEWEDGE — Web Development & Design",
    description:
      "We build websites and digital platforms for mid-sized companies that sell: strategy, design and development from a single source — fast, custom, scalable.",
    canonical: "/en/websites",
  } satisfies SEOContent,

  /** HERO — hell, zentriert (Referenz-Layout), Violett-Akzent. */
  hero: {
    eyebrow: "Web Development & Design",
    headlinePrefix: "Websites that ",
    headlineAccent: "sell",
    headlineSuffix: " — before you even speak.",
    sub: "Your website is your first salesperson. We build digital presences that set you apart from the crowd, build trust and generate qualified enquiries — not just look good.",
    trustChips: ["Higher conversion", "More qualified enquiries", "One point of contact"],
    ctaPrimary: "Request an intro call",
    note: "100% free & no obligation.",
  },

  /** SHOWREEL — dunkle Karte mit Video-Facade + Logo-Grid + Founder-Avatar. */
  showreel: {
    logosHeading: "Trusted by growing brands",
    videoCaption: "NEWEDGE — Showreel",
    founder: { name: "Sebastian", role: "Co-Founder NEWEDGE" },
  },

  /** PROJEKTABLAUF — 3 Schritte. */
  prozess: {
    eyebrow: "Fast. Efficient. Results-driven.",
    heading: "The project process",
    steps: [
      {
        title: "Strategy & branding",
        desc: "We define what you stand for and who for — and build a visual system that makes your quality clear at first glance.",
        image: "painpoint-a-vorher-nachher" as ImageKey,
      },
      {
        title: "Web design",
        desc: "A fast, custom design that convinces visitors and deliberately leads to enquiries — not just one that pleases.",
        image: "albanova-website" as ImageKey,
      },
      {
        title: "Development",
        desc: "Built scalable and clean: fast, flexible and maintainable — in the end it's all yours, with no agency lock-in.",
        image: "painpoint-a-feature2" as ImageKey,
      },
    ],
    ctaPrimary: "Request an intro call",
    note: "100% free & no obligation.",
  },

  /** PROJEKTEINBLICKE — Case-Karten (Logo + Text + Projekt-Visual). */
  cases: {
    eyebrow: "Projects",
    heading: "Project highlights",
    items: [
      {
        logo: "logo-albanova-consulting" as ImageKey,
        name: "AlbaNova Consulting",
        desc: "From vision to market presence: a new website and brand system for the consulting brand — clearly positioned, high-end, built for enquiries.",
        imageDesktop: "albanova-website" as ImageKey,
        imagePhone: "pain-point-kundensupport-hero" as ImageKey,
      },
      {
        logo: "logo-elite-aesthetic" as ImageKey,
        name: "Elite Aesthetic",
        desc: "A digital presence that reflects the premium positioning — design and booking flow interlock and feel instantly professional.",
        imageDesktop: "pain-point-professional-services-hero" as ImageKey,
        imagePhone: "pain-point-health-care-hero" as ImageKey,
      },
      {
        logo: "logo-becoming-you" as ImageKey,
        name: "Becoming You",
        desc: "A platform that scales: a custom interface, a clean foundation and a system the team can maintain on its own.",
        imageDesktop: "painpoint-a-section3" as ImageKey,
        imagePhone: "pain-point-kpi-dashboard-hero" as ImageKey,
      },
    ],
  },

  /** ERSTGESPRÄCH — dunkle Abschluss-Sektion (Avatar → Heading → Sub → CTA → Logo-Cloud). */
  finalCta: {
    eyebrow: "Let's get started",
    heading: "Book an intro call",
    sub: "In a short get-to-know call, we look together at whether and where a project makes sense. Based on your situation and your goals, entirely without obligation.",
    ctaPrimary: "Request an intro call",
    note: "100% free & no obligation.",
  },
} as const;
