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
import type { SEOContent, ImageRef } from "@/content/types";

interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export const cortexPage = {
  seo: {
    title: "Cortex — The Operating System for Your AI Department | NEWEDGE",
    description:
      "Cortex is the central layer for AI in mid-sized companies: one entry point for your people, full control over usage, data and automations — GDPR-compliant and auditable.",
    canonical: "/en/cortex",
  } satisfies SEOContent,

  /** 1 — Hero. */
  hero: {
    headline: "You already use AI. Cortex makes it controllable.",
    sub:
      "Cortex is the operating system of your AI department: one central entry point for your people — and full control over usage, data and automations. GDPR-compliant, in-house, auditable.",
    ctaPrimary: "Book a Cortex demo",
    ctaSecondary: "Check if it fits",
    image: {
      src: "pain-point-kpi-dashboard-hero",
      alt: "Cortex — the central control layer for AI in your company",
    } satisfies ImageRef,
  },

  /** 2 — Problem. */
  problem: {
    heading: "This is how AI runs in most companies today.",
    situations: [
      "ChatGPT, Copilot and a dozen point tools — everyone uses something different, no one has the full picture.",
      "Shadow IT: data ends up in tools no one has approved — GDPR risk included.",
      "No one steers AI centrally. Responsibilities are unclear, and automations stay isolated one-offs.",
    ],
  },

  /** 3 — Lösung / Mechanismus. */
  solution: {
    heading: "One entry point. One layer. Full control.",
    intro:
      "Cortex becomes the central entry point for AI in your company: your employees get access to productive, approved AI — and you get transparency and control over usage, data, processes and automations.",
    bullets: [
      "Transparency over AI usage — instead of shadow IT, you see who uses AI for what.",
      "GDPR-compliant infrastructure — your data stays under your control: internal, secure, auditable.",
      "Central control — one entry point for your people instead of ten point tools running on the side.",
      "A foundation for automations — processes, agents and automations all run on one shared layer.",
    ],
  },

  /** 4 — Ablauf. */
  ablauf: {
    heading: "How Cortex comes into your company.",
    image: {
      src: "pain-point-kpi-dashboard-hero",
      alt: "Rolling out Cortex in a company",
    } satisfies ImageRef,
    steps: [
      {
        step: "01",
        title: "Setup",
        desc: "Cortex is set up in your environment — GDPR-compliant, with your roles and permissions.",
      },
      {
        step: "02",
        title: "Access",
        desc: "Your employees get one central, approved way into productive AI — no more point tools running on the side.",
      },
      {
        step: "03",
        title: "Transparency",
        desc: "You see in real time who uses AI for what. Shadow IT becomes visible and controllable.",
      },
      {
        step: "04",
        title: "Automation",
        desc: "On the shared layer, you build out processes and agents — step by step.",
      },
    ] as ProcessStep[],
  },

  /** 5 — Warum Cortex. */
  warum: {
    heading: "Why Cortex.",
    points: [
      "Cortex isn't another AI — it's the layer above them. You don't have to throw away anything that already works.",
      "Your data stays your data. No black box, no unwanted outflows — everything is auditable.",
      "We build the AI department for mid-sized companies. Cortex is the foundation, not the finished product.",
    ],
  },

  /** 6 — Garantie. */
  garantie: {
    heading: "The guarantee.",
    text:
      "Your data stays in-house — GDPR-compliant and auditable at any time.",
    sub: "No black box, no unwanted data outflow. You stay in control.",
    image: {
      src: "team-presentation-color",
      alt: "NEWEDGE founders working with the team",
    },
  },

  /** 7 — Für wen / nicht. */
  fit: {
    heading: "Who Cortex is for — and who it's not.",
    passtLabel: "It fits if:",
    passt: [
      "Several people already use AI at your company — but no one has the full picture.",
      "You want to keep AI in-house: GDPR-compliant, controlled, auditable.",
      "You want a foundation for automations to grow on — not yet another point tool.",
    ],
    passtNichtLabel: "It doesn't fit if:",
    passtNicht: [
      "You're looking for a single feature tool to try out — Cortex is the layer beneath it.",
      "No one at your company uses AI and no one is meant to — then the basis is missing.",
      "You deliberately want to push data into arbitrary external tools — that's exactly what Cortex prevents.",
    ],
  },

  /** FAQ — Landing-Page-Fragen (Voice: informell „ihr/euch"). */
  faq: {
    heading: "FAQ",
    items: [
      { q: "Does Cortex replace ChatGPT or Copilot?", a: "No. Cortex is the layer above: it bundles and controls access to AI — which models you use stays flexible." },
      { q: "Does our data really stay in-house?", a: "Yes. Cortex is built for GDPR-compliant, controlled infrastructure — your data is internal, secure and auditable." },
      { q: "How quickly is Cortex ready to use?", a: "The basic setup is usually in place within a few days. From there, Cortex grows with your processes and automations." },
      { q: "Do we have to switch off existing tools?", a: "No. Cortex layers over what's already running and brings it under shared control." },
      { q: "What company size does Cortex make sense for?", a: "It pays off most for companies with 10 to 150 employees where AI is already used in scattered ways." },
      { q: "What does Cortex cost?", a: "That depends on scope and number of users. In a free, no-obligation intro call we work out what makes sense for you." },
    ],
  },

  /** 8 — CTA / Kontakt (aktuell über geteilte SpeakWithUsCta-Karte gerendert). */
  cta: {
    heading: "Get to know Cortex.",
    sub: "A conversation, not a sales pitch. We show you Cortex and figure out together whether it fits.",
    transparency: "First contact → demo → decision on both sides.",
    calendlyUrl: "",
  },
} as const;
