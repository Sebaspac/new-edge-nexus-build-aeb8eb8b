import { lazy, Suspense, useState, useEffect, useRef, useMemo, useCallback } from "react";

import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Plus, Check, ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { MobileNavigation } from "@/components/MobileNavigation";
import { img } from "@/content";
import { painPointPage as PPP_STATIC } from "@/content/pages/painPointAuswahlverfahren";
import { useCms } from "@/hooks/useCms";
import { usePainPoints } from "@/hooks/usePainPoints";
import { Logos3 } from "@/components/ui/logos3";
import { clientLogos } from "@/components/ui/logo-cloud";
import { FloatingConsultButton } from "@/components/ui/FloatingConsultButton";
import { AuroraFlow } from "@/components/ui/aurora-flow";
import { CursorLine } from "@/components/ui/CursorLine";
import { SweepButton } from "@/components/ui/SweepButton";

const Footer = lazy(() => import("@/components/Footer").then((m) => ({ default: m.Footer })));

/* ──────────────────────────────────────────────
   Design tokens
────────────────────────────────────────────── */
/* Brand tokens — aligned with DESIGN.md (Ink & Edge) */
const PURPLE = "#5658DF";            // Violet Edge — light surfaces
const PURPLE_DARK = "#5658DF";       // labels on light surfaces
const PURPLE_LIGHT = "#9A85F6";      // Violet Glow — dark surfaces only
const PURPLE_BG = "rgba(86,88,223,0.08)";

// Light theme
const L = {
  bg: "#F8F5FF",
  bgAlt: "#FFFFFF",
  text: "#17172E",
  textMuted: "#3C3C47",
  textLight: "#8A8494",
  border: "#E6E6E6",
  borderLight: "#F0EFF2",
};

// Dark theme (hero only)
const D = {
  bg: "#0C0C1C",
  surface: "#160B26",
  border: "#2A1F3D",
  text: "#FBF9FF",
  textMuted: "#A8A3B3",
};

const SERIF: React.CSSProperties = { fontFamily: "'DM Serif Display', serif", fontWeight: 400 };
const MONO: React.CSSProperties = { fontFamily: "Consolas, monospace" };

/* ────────────── Reusable atoms (Light theme) ────────────── */

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <span
    className="inline-block text-[0.7rem] font-semibold uppercase tracking-[0.14em] mb-3"
    style={{ color: PURPLE, ...MONO }}
  >
    {children}
  </span>
);

/** Erste Headline jeder Section — provokant/catchy, etwas kleiner skaliert */
const SectionHeadline = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h2
    className={`text-[clamp(1.65rem,2.8vw,2.35rem)] leading-[1.1] mb-3 text-[#111] ${className}`}
    style={{ ...SERIF, letterSpacing: "-0.02em" }}
  >
    {children}
  </h2>
);

/** Zweite Headline — beschreibender Untertitel, kursiv, muted. Einheitlich überall. */
const SectionH3 = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <p
    className={`text-[clamp(1.4rem,2.2vw,1.75rem)] leading-[1.3] mb-5 max-w-[520px] ${className}`}
    style={{ color: L.textMuted, ...SERIF, fontStyle: "italic" }}
  >
    {children}
  </p>
);

/** Interner Alias — wird wo nötig noch verwendet */
const SectionH2 = SectionH3;

const SectionSub = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[0.925rem] leading-[1.75] mb-8 max-w-[540px]" style={{ color: L.textMuted, ...MONO }}>
    {children}
  </p>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="flex flex-col gap-3 mb-7 list-none">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-3 text-[0.9rem]" style={{ color: L.text, ...MONO }}>
        <span
          className="shrink-0 w-5 h-5 flex items-center justify-center mt-0.5"
          style={{ background: PURPLE_BG, border: `1px solid ${PURPLE}` }}
        >
          <Check className="w-3 h-3" style={{ color: PURPLE }} />
        </span>
        {item}
      </li>
    ))}
  </ul>
);

const BtnFilled = ({ children, large = false, onClick }: { children: React.ReactNode; large?: boolean; onClick?: () => void }) => (
  <SweepButton
    onClick={onClick}
    sweepColor="silver"
    hoverTextColor="#ffffff"
    style={{
      display: "inline-flex", alignItems: "center", gap: "6px",
      padding: large ? "14px 28px" : "10px 20px",
      fontSize: large ? "0.9rem" : "0.875rem",
      fontWeight: 700,
      background: PURPLE,
      color: "#fff",
      border: "1px solid rgba(154,133,246,0.4)",
      ...MONO,
    }}
  >
    {children}
  </SweepButton>
);

const BtnGhost = ({ children, large = false, dark = false }: { children: React.ReactNode; large?: boolean; dark?: boolean }) => (
  <SweepButton
    sweepColor="silver"
    hoverTextColor="#ffffff"
    style={{
      display: "inline-flex", alignItems: "center", gap: "6px",
      padding: large ? "14px 28px" : "10px 20px",
      fontSize: large ? "0.9rem" : "0.875rem",
      fontWeight: 700,
      background: dark ? "rgba(154,133,246,0.08)" : "transparent",
      backdropFilter: dark ? "blur(16px)" : undefined,
      border: `1px solid ${dark ? "rgba(154,133,246,0.25)" : L.border}`,
      color: dark ? "#C2C3F6" : L.textMuted,
      ...MONO,
    }}
  >
    {children}
  </SweepButton>
);

/* ────────────── FAQ accordion ────────────── */

const FAQItem = ({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) => {
  return (
    <div className="overflow-hidden" style={{ borderBottom: `1px solid ${L.border}`, background: "#FFFFFF", padding: "0 16px" }}>
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center py-5 px-1 text-left text-[0.9rem] font-medium hover:opacity-80 transition-colors gap-4"
        style={{ color: open ? PURPLE : L.text, ...MONO }}
      >
        <span>{q}</span>
        <span
          className={`shrink-0 w-5 h-5 flex items-center justify-center text-[0.7rem] transition-all ${open ? "rotate-45" : ""}`}
          style={{
            border: `1px solid ${open ? PURPLE : L.border}`,
            background: open ? PURPLE_BG : "transparent",
            color: open ? PURPLE : L.textLight,
          }}
        >
          <Plus className="w-3 h-3" />
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "400px" : "0px" }}
      >
        <div className="px-1 pb-5 text-[0.875rem] leading-[1.7]" style={{ color: L.textMuted, ...MONO }}>
          {a}
        </div>
      </div>
    </div>
  );
};

/* ────────────── Reveal ────────────── */

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};


/* ────────────── PAGE ────────────── */

const PainPointAuswahlverfahren = () => {
  const [, setContactOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const ctaBtnRef = useRef<HTMLDivElement>(null);

  // Inhalte live aus dem CMS (Strapi); Fallback: statischer Content-Layer
  const painPointPage = useCms("pain-point-page", PPP_STATIC);
  const { map: painPoints, defaultPainPoint } = usePainPoints();

  // Slug-basiertes Content-Lookup. Routen:
  //   /loesungen/:slug
  //   /leistungen/pain-points/:slug
  //   /leistungen/industrien/:slug
  const { slug } = useParams<{ slug: string }>();
  const content = useMemo(
    () => (slug && painPoints[slug]) || defaultPainPoint,
    [slug, painPoints, defaultPainPoint]
  );

  const compareRows = useMemo(
    () => content.compare.rows.map((r) => [r.k, r.ne, r.alt] as const),
    [content]
  );

  // Default-Icons als Bildplatzhalter (gleich für alle Slugs, später ersetzbar)
  const iconAnalyse = img(painPointPage.images.cardIconAnalyse);
  const defaultCardIcons = [iconAnalyse, img(painPointPage.images.cardIconKoordination), img(painPointPage.images.cardIconInsights), img(painPointPage.images.cardIconInsights), iconAnalyse, img(painPointPage.images.cardIconKoordination)];
  const featureCards = content.featureCards.cards.map((c, i) => ({
    icon: defaultCardIcons[i % defaultCardIcons.length] ?? iconAnalyse,
    title: c.title,
    desc: c.desc,
  }));

  // Bilder für die Mini-Case-Übersicht — 1:1 zu den 3 Phasen (Platzhalter, pro Slug ersetzbar)
  const caseImages = [img(painPointPage.images.feature1), img(painPointPage.images.feature2), img(painPointPage.images.feature3)];

  const faqs = content.faq;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const howToJsonLd = content.howTo
    ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: content.howTo.name,
        description: content.howTo.description,
        totalTime: content.howTo.totalTime,
        step: content.howTo.steps.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.name,
          text: s.text,
        })),
      }
    : null;

  return (
    <>
      <SEOHead
        title={content.seo.title}
        description={content.seo.description}
        canonical={content.seo.canonical}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        {howToJsonLd && (
          <script type="application/ld+json">{JSON.stringify(howToJsonLd)}</script>
        )}
      </Helmet>


      <div className="min-h-screen" style={{ ...MONO, overflowX: "clip" }}>
        

        {/* ═══════════════════════════════════════════
            HERO — Dark (stays dark)
        ═══════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden flex flex-col text-white"
          style={{
            minHeight: "100dvh",
            background: "#0A0A18",
          }}
        >
          {/* Aurora — identical to homepage */}
          <div aria-hidden style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
            <AuroraFlow />
          </div>
          <MobileNavigation onContactClick={() => setContactOpen(true)} theme="dark" />

          <div className="flex-1 flex items-center relative z-10">
            <div className="max-w-[1200px] w-full mx-auto px-6 lg:px-8 pt-24 md:pt-20 pb-4 grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <Reveal>
                <p
                  className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] mb-5"
                  style={{ color: PURPLE_LIGHT, ...MONO }}
                >
                  {content.hero.overlabel}
                </p>
                <h1
                  className="text-[clamp(1.75rem,3.2vw,2.75rem)] leading-[1.08] mb-5"
                  style={{ ...SERIF, letterSpacing: "-0.02em" }}
                >
                  {content.hero.h1Line1}<br />
                  <span style={{ color: PURPLE_LIGHT }}>
                    {content.hero.h1Line2Highlighted}
                  </span>
                </h1>
                <p className="text-[0.925rem] leading-[1.65] mb-6 max-w-[500px]" style={{ color: D.textMuted }}>
                  {content.hero.sub}
                </p>
                <div className="flex gap-3 flex-wrap">
                  <BtnFilled onClick={() => setContactOpen(true)}>{content.hero.ctaPrimary}</BtnFilled>
                  <BtnGhost dark>{content.hero.ctaSecondary}</BtnGhost>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="flex justify-center md:justify-end">
                  <div className="relative w-full max-w-[460px]">
                    {/* Bildplatzhalter — wird später pro Slug ersetzt. Note: {content.hero.imageNote} */}
                    <img
                      src={img(painPointPage.images.hero)}
                      alt={content.hero.imageAlt}
                      className="w-full h-auto"
                      style={{ border: `1px solid ${D.border}` }}
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Trust bar */}
          <div className="shrink-0 pb-6 md:pb-8 relative z-10">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
              <p className="text-center text-[1.15rem] md:text-[1.35rem] mb-1" style={SERIF}>
                {content.trustBar.headline}
              </p>
              <p className="text-center text-[0.75rem] mb-4" style={{ color: D.textMuted }}>
                {content.trustBar.sub}
              </p>
              <div className="overflow-hidden" style={{ borderTop: `1px solid ${D.border}`, borderBottom: `1px solid ${D.border}` }}>
                <div className="flex w-max py-3.5 items-center" style={{ animation: "marquee 28s linear infinite" }}>
                  {[...Array(2)].flatMap((_, dup) =>
                    clientLogos.map((logo, i) => (
                      <div
                        key={`hero-${dup}-${i}`}
                        className="flex items-center px-8 shrink-0"
                        style={{ height: "34px" }}
                      >
                        <img
                          src={img(logo.src)}
                          alt={logo.alt}
                          loading="lazy"
                          className="object-contain brightness-0 invert"
                          style={{ height: "30px", width: "auto", maxWidth: "150px", opacity: 0.6 }}
                        />
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
          <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
        </section>

        {/* ═══════════════════════════════════════════
            CONTENT — Light theme (native, no CSS hacks)
        ═══════════════════════════════════════════ */}
        <div style={{ background: L.bg, color: L.text }}>

          {/* DEFINITION */}
          <section id="definition" className="pt-16 md:pt-20 pb-0">
            <div className="max-w-[800px] mx-auto px-6 lg:px-8">
              <div>
                <p className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.2em] mb-3" style={{ color: PURPLE, ...MONO }}>
                  <span aria-hidden style={{ display: "inline-block", width: "32px", height: "1px", background: PURPLE }} />
                  {painPointPage.labels.definition}
                </p>
                <h2 className="text-lg md:text-xl mb-2 italic" style={{ ...SERIF, color: L.text }}>
                  {content.definition.title}
                </h2>
                <p className="text-sm leading-[1.7]" style={{ color: L.textMuted }}>
                  {content.definition.body}
                </p>
              </div>
            </div>
          </section>

          {/* FEATURE 01 — Bild links → H2 oben über Bild */}
          <Reveal>
            <div id="feature-01" className="max-w-[1200px] mx-auto px-6 lg:px-8 pt-20 md:pt-24 pb-20 md:pb-24">
              <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
                <div className="flex flex-col">
                  <SectionHeadline>
                    {content.feature1.h2}
                  </SectionHeadline>
                  <img
                    src={img(painPointPage.images.feature1)}
                    alt={content.feature1.imageAlt}
                    loading="lazy"
                    className="w-full h-auto max-w-[440px] mx-auto"
                  />
                </div>
                <div>
                  <SectionLabel>{painPointPage.labels.feature01}</SectionLabel>
                  {content.feature1.h3 && (
                    <SectionH3 className="max-w-[440px]">
                      {content.feature1.h3}
                    </SectionH3>
                  )}
                  <SectionSub>{content.feature1.sub}</SectionSub>
                  <BulletList items={[...content.feature1.bullets]} />
                </div>
              </div>
            </div>
          </Reveal>

          {/* FEATURE 02 (flipped) — Bild rechts → H2 oben links über Text */}
           <div id="feature-02" style={{ background: L.bg, borderTop: `1px solid ${L.border}`, borderBottom: `1px solid ${L.border}` }}>
            <Reveal>
              <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20 md:py-24">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
                  <div className="md:order-1">
                    <SectionLabel>{painPointPage.labels.feature02}</SectionLabel>
                    <SectionHeadline>
                      {content.feature2.h2}
                    </SectionHeadline>
                    <SectionSub>{content.feature2.sub}</SectionSub>
                    <BulletList items={[...content.feature2.bullets]} />
                  </div>
                  <div className="md:order-2 flex flex-col">
                    <img
                      src={img(painPointPage.images.feature2)}
                      alt={content.feature2.imageAlt}
                      loading="lazy"
                      className="w-full h-auto max-w-[500px] mx-auto md:mt-[5.5rem]"
                    />
                    {content.feature2.h3 && (
                      <SectionH3 className="mt-5 md:mt-6 max-w-[500px] mx-auto text-center">
                        {content.feature2.h3}
                      </SectionH3>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* FEATURE 03 — Bild links → H2 oben über Bild */}
          <Reveal>
            <div id="feature-03" className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20 md:py-24">
              <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
                <div className="flex flex-col">
                  <SectionHeadline>
                    {content.feature3.h2}
                  </SectionHeadline>
                  <img
                    src={img(painPointPage.images.feature3)}
                    alt={content.feature3.imageAlt}
                    loading="lazy"
                    className="w-full h-auto max-w-[500px] mx-auto"
                  />
                </div>
                <div>
                  <SectionLabel>{painPointPage.labels.feature03}</SectionLabel>
                  {content.feature3.h3 && (
                    <SectionH3 className="max-w-[500px]">
                      {content.feature3.h3}
                    </SectionH3>
                  )}
                  <SectionSub>{content.feature3.sub}</SectionSub>
                  <BulletList items={[...content.feature3.bullets]} />
                </div>
              </div>
            </div>
          </Reveal>

          {/* INTEGRATIONS */}
          <div id="integrations" style={{ background: L.bg, borderTop: `1px solid ${L.border}`, borderBottom: `1px solid ${L.border}` }}>
            <Reveal>
              <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20 md:py-24">
                <div className="max-w-[600px]">
                  <SectionLabel>{painPointPage.labels.integrationen}</SectionLabel>
                  {content.integrations.h3 && <SectionH3>{content.integrations.h3}</SectionH3>}
                  <SectionSub>{content.integrations.sub}</SectionSub>
                </div>
                <div className="mt-10" style={{ '--fade-color': L.bg } as React.CSSProperties}>
                  <Logos3
                    heading=""
                    className="mb-8"
                    logos={(content.integrations.logos ?? []).map((logo) => ({
                      id: logo.id,
                      description: logo.label,
                      image: logo.src,
                      className: logo.className ?? "h-8 w-auto",
                    }))}
                  />
                </div>
              </div>
            </Reveal>
          </div>

          {/* COMPARISON TABLE */}
          <Reveal>
            <div id="comparison" className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20 md:py-24">
              <SectionHeadline>
                {content.compare.h2}
              </SectionHeadline>
              <div className="max-w-[600px] mb-10">
                <SectionLabel>{painPointPage.labels.vergleich}</SectionLabel>
                {content.compare.h3 && <SectionH3>{content.compare.h3}</SectionH3>}
              </div>

              {/* Desktop table */}
              <div className="hidden md:block overflow-x-auto" style={{ border: `1px solid ${L.border}` }}>
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th
                        className="text-left p-5 text-[0.8rem] font-bold uppercase tracking-wider w-[26%]"
                        style={{ background: L.bgAlt, color: L.textLight, borderBottom: `1px solid ${L.border}`, ...MONO }}
                      >
                        {painPointPage.compare.headCriterion}
                      </th>
                      <th
                        className="text-left p-5 text-[0.8rem] font-bold w-[37%]"
                        style={{
                          background: PURPLE_BG,
                          color: PURPLE_DARK,
                          borderBottom: `1px solid ${L.border}`,
                          borderLeft: `1px solid ${L.border}`,
                          ...SERIF,
                        }}
                      >
                        {painPointPage.compare.headNewEdge}
                      </th>
                      <th
                        className="text-left p-5 text-[0.8rem] font-bold w-[37%]"
                        style={{
                          background: "rgba(220,38,38,0.05)",
                          color: "#b91c1c",
                          borderBottom: `1px solid ${L.border}`,
                          borderLeft: `1px solid ${L.border}`,
                          ...SERIF,
                        }}
                      >
                        {content.compare.altLabel}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {compareRows.map(([k, ne, ma], i) => (
                      <tr key={i} style={{ background: i % 2 ? L.bgAlt : L.bg }}>
                        <td
                          className="p-4 text-[0.85rem] font-medium"
                          style={{
                            color: L.textMuted,
                            borderBottom: i === compareRows.length - 1 ? "none" : `1px solid ${L.borderLight}`,
                            ...MONO,
                          }}
                        >
                          {k}
                        </td>
                        <td
                          className="p-4 text-[0.85rem]"
                          style={{
                            color: "#16a34a",
                            borderLeft: `1px solid ${L.borderLight}`,
                            borderBottom: i === compareRows.length - 1 ? "none" : `1px solid ${L.borderLight}`,
                            ...MONO,
                          }}
                        >
                          ✓ {ne}
                        </td>
                        <td
                          className="p-4 text-[0.85rem]"
                          style={{
                            color: "#b91c1c",
                            borderLeft: `1px solid ${L.borderLight}`,
                            borderBottom: i === compareRows.length - 1 ? "none" : `1px solid ${L.borderLight}`,
                            ...MONO,
                          }}
                        >
                          ✗ {ma}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile cards */}
              <div className="md:hidden flex flex-col gap-4">
                {compareRows.map(([k, ne, ma], i) => (
                  <div key={i} style={{ border: `1px solid ${L.border}`, background: L.bg }}>
                    <div
                      className="px-4 py-3 text-[0.8rem] font-bold uppercase tracking-wider"
                      style={{ background: L.bgAlt, color: L.textMuted, borderBottom: `1px solid ${L.border}`, ...MONO }}
                    >
                      {k}
                    </div>
                    <div className="grid grid-cols-2" style={{ borderTop: "none" }}>
                      <div
                        className="px-4 py-3 text-[0.82rem]"
                        style={{ color: "#16a34a", borderRight: `1px solid ${L.borderLight}`, ...MONO }}
                      >
                        <span className="block text-[0.7rem] font-bold uppercase tracking-wider mb-1" style={{ color: PURPLE_DARK }}>{painPointPage.compare.headNewEdge}</span>
                        ✓ {ne}
                      </div>
                      <div
                        className="px-4 py-3 text-[0.82rem]"
                        style={{ color: "#b91c1c", ...MONO }}
                      >
                        <span className="block text-[0.7rem] font-bold uppercase tracking-wider mb-1" style={{ color: "#b91c1c" }}>{content.compare.altLabel}</span>
                        ✗ {ma}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* FEATURE CARDS */}
          <div id="features" style={{ background: L.bg, borderTop: `1px solid ${L.border}`, borderBottom: `1px solid ${L.border}` }}>
            <Reveal>
              <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20 md:py-24">
                <div className="text-center max-w-[700px] mx-auto mb-12">
                  <SectionLabel>{painPointPage.labels.kernfunktionen}</SectionLabel>
                  <SectionHeadline className="!mb-4">
                    {content.featureCards.h2}
                  </SectionHeadline>
                  {content.featureCards.h3 && (
                    <p className="text-[1rem]" style={{ color: L.textMuted, fontStyle: "italic", ...SERIF }}>
                      {content.featureCards.h3}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {featureCards.map((c, idx) => (
                    <div
                      key={c.title}
                      className="group relative p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                      style={{
                        background: "#FFFFFF",
                        border: `1px solid ${L.border}`,
                      }}
                    >
                      {/* Icon */}
                      <div className="flex items-center justify-center w-11 h-11 mb-5 rounded-full"
                        style={{ background: `rgba(86,88,223,0.08)` }}>
                        <img
                          src={c.icon}
                          alt={c.title}
                          loading="lazy"
                          width={24}
                          height={24}
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                      <h3 className="text-[1rem] font-bold mb-2.5 leading-[1.25]" style={{ ...SERIF, letterSpacing: "-0.02em", color: L.text }}>
                        {c.title}
                      </h3>
                      <p className="text-[0.85rem] leading-[1.65]" style={{ color: L.textMuted }}>
                        {c.desc}
                      </p>
                      {/* Bottom accent line on hover */}
                      <span
                        className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300"
                        style={{ background: PURPLE }}
                        aria-hidden
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* DATENSOUVERÄNITÄT */}
          <Reveal>
            <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20 md:py-24">
              <div className="grid md:grid-cols-[1fr_1.1fr] gap-px" style={{ border: `1px solid ${L.border}`, background: L.border }}>
                {/* Statement */}
                <div style={{ background: "#FFFFFF", padding: "clamp(28px, 4vw, 56px)" }}>
                  <p className="flex items-center gap-3 uppercase mb-5" style={{ ...MONO, fontSize: "11px", letterSpacing: "0.2em", color: PURPLE }}>
                    <span aria-hidden style={{ display: "inline-block", width: "32px", height: "1px", background: PURPLE }} />
                    {painPointPage.labels.datensouveraenitaet}
                  </p>
                  <h2 className="italic mb-4" style={{ ...SERIF, fontSize: "clamp(1.35rem, 2.2vw, 1.85rem)", lineHeight: 1.12, letterSpacing: "-0.02em", color: L.text }}>
                    {painPointPage.datensouveraenitaet.heading}
                  </h2>
                  <p style={{ ...MONO, fontSize: "13px", lineHeight: 1.7, color: L.textMuted, maxWidth: "48ch" }}>
                    {painPointPage.datensouveraenitaet.body}
                  </p>
                </div>
                {/* Fakten + Schema */}
                <div style={{ background: "#FFFFFF", padding: "clamp(28px, 4vw, 56px)" }}>
                  <ul className="m-0 p-0 mb-8" style={{ listStyle: "none" }}>
                    {painPointPage.datensouveraenitaet.facts.map((f) => (
                      <li key={f} className="flex items-start gap-3 py-2" style={{ ...MONO, fontSize: "13px", lineHeight: 1.6, color: L.text }}>
                        <span aria-hidden style={{ color: PURPLE, flexShrink: 0 }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  {/* Schema: Daten bleiben im Haus */}
                  <svg viewBox="0 0 420 120" aria-label={painPointPage.datensouveraenitaet.schema.ariaLabel} style={{ width: "100%", maxWidth: "420px", height: "auto", display: "block" }}>
                    <rect x="8" y="8" width="244" height="104" fill="none" stroke={L.text} strokeWidth="1" />
                    <text x="22" y="30" style={{ font: "10px Consolas, monospace", letterSpacing: "0.15em", fill: L.textLight }}>{painPointPage.datensouveraenitaet.schema.infrastruktur}</text>
                    <rect x="22" y="44" width="100" height="32" fill="rgba(86,88,223,0.06)" stroke={PURPLE} strokeWidth="1" />
                    <text x="72" y="64" textAnchor="middle" style={{ font: "10px Consolas, monospace", letterSpacing: "0.1em", fill: PURPLE }}>{painPointPage.datensouveraenitaet.schema.ihreDaten}</text>
                    <rect x="138" y="44" width="100" height="32" fill="none" stroke={L.text} strokeWidth="1" />
                    <text x="188" y="64" textAnchor="middle" style={{ font: "10px Consolas, monospace", letterSpacing: "0.1em", fill: L.text }}>{painPointPage.datensouveraenitaet.schema.kiAgent}</text>
                    <line x1="122" y1="60" x2="138" y2="60" stroke={PURPLE} strokeWidth="1" />
                    <line x1="252" y1="60" x2="330" y2="60" stroke={L.border} strokeWidth="1" strokeDasharray="4 4" />
                    <text x="334" y="64" style={{ font: "10px Consolas, monospace", letterSpacing: "0.1em", fill: L.textLight }}>{painPointPage.datensouveraenitaet.schema.extern}</text>
                  </svg>
                </div>
              </div>
            </div>
          </Reveal>

          {/* TESTIMONIAL HERO */}
          <div id="testimonial" className="py-20 md:py-24">
            <div className="max-w-[800px] mx-auto px-6 lg:px-8 text-center">
              <div className="text-[4.5rem] leading-[0.6] mb-6 opacity-25" style={{ color: PURPLE, ...SERIF }}>
                „
              </div>
              <p
                className="text-[clamp(1.15rem,2.4vw,1.5rem)] font-semibold leading-[1.5] mb-8"
                style={{ ...SERIF, letterSpacing: "-0.02em", color: L.text }}
              >
                {content.testimonialHero.quote}
              </p>
              <div className="flex items-center justify-center gap-2.5 text-[0.85rem]" style={{ color: L.textLight }}>
                <span className="block h-px w-10" style={{ background: L.border }} />
                {content.testimonialHero.author}
                <span className="block h-px w-10" style={{ background: L.border }} />
              </div>
            </div>
          </div>

          {/* TESTIMONIAL GRID */}
          <TestimonialsSection />

          {/* MINI-CASES — eine Detailseite pro Phase (illustrativ). Vor den FAQs. */}
          {content.miniCases && content.miniCases.length > 0 && (
            <Reveal>
              <div id="cases" style={{ background: L.bg, borderTop: `1px solid ${L.border}` }}>
                <div className="py-20 md:py-24">
                  <div className="text-center max-w-[700px] mx-auto mb-12 px-6 lg:px-8">
                    <SectionLabel>{painPointPage.labels.casesProPhase}</SectionLabel>
                    <SectionHeadline>{painPointPage.miniCases.headline}</SectionHeadline>
                    <p className="text-[1rem]" style={{ color: L.textMuted, fontStyle: "italic", ...SERIF }}>
                      {painPointPage.miniCases.sub}
                    </p>
                  </div>

                  {/* Randloses Bild-Grid — keine Lücken, kein horizontaler Weißraum. Text erscheint beim Hover. */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    {content.miniCases.map((c, i) => (
                      <Link
                        key={c.id}
                        to={`case/${c.id}`}
                        className="group relative block overflow-hidden aspect-[3/2]"
                      >
                        <img
                          src={caseImages[i % caseImages.length]}
                          alt={c.title}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* dezenter Grund-Verlauf — signalisiert Klickbarkeit ohne Text */}
                        <div
                          aria-hidden
                          className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
                          style={{ background: "linear-gradient(to top, rgba(10,10,24,0.45) 0%, rgba(10,10,24,0.05) 45%, transparent 100%)" }}
                        />
                        {/* Hover-Overlay mit Text */}
                        <div
                          className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                          style={{ background: "rgba(10,10,24,0.82)" }}
                        >
                          <span className="flex flex-wrap items-center gap-2 mb-3">
                            <span
                              className="inline-block text-[0.7rem] font-semibold uppercase tracking-[0.14em]"
                              style={{ color: PURPLE_LIGHT, ...MONO }}
                            >
                              {c.phaseLabel}
                            </span>
                            {c.badge && (
                              <span
                                className="inline-block text-[0.62rem] font-semibold uppercase tracking-[0.12em] px-2 py-0.5"
                                style={{
                                  color: PURPLE_LIGHT,
                                  border: "1px solid rgba(154,133,246,0.4)",
                                  background: "rgba(154,133,246,0.1)",
                                  ...MONO,
                                }}
                              >
                                {c.badge}
                              </span>
                            )}
                          </span>
                          <h3
                            className="text-[1.2rem] font-bold mb-2.5 leading-[1.2]"
                            style={{ ...SERIF, letterSpacing: "-0.02em", color: "#FBF9FF" }}
                          >
                            {c.title}
                          </h3>
                          <p className="text-[0.85rem] leading-[1.6] mb-5" style={{ color: "#C8C4D4" }}>
                            {c.teaser}
                          </p>
                          <span
                            className="inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.12em] group-hover:gap-3 transition-all"
                            style={{ color: PURPLE_LIGHT, ...MONO }}
                          >
                            {painPointPage.miniCases.cta}
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          )}

          {/* FAQ */}
          <Reveal>
            <div id="faq" className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20 md:py-24">
              <div className="grid md:grid-cols-[1fr,1.5fr] gap-12 md:gap-16 items-start">
                <div>
                  <SectionLabel>{painPointPage.labels.faq}</SectionLabel>
                  <h3
                    className="text-[clamp(1.5rem,2.5vw,2.2rem)] mb-6"
                    style={{ ...SERIF, letterSpacing: "-0.02em", color: L.text }}
                  >
                    {painPointPage.faq.headingLine1}<br />
                    <span style={{ color: PURPLE }}>{painPointPage.faq.headingLine2}</span>
                  </h3>
                  <a href={painPointPage.faq.ctaHref} target="_blank" rel="noopener noreferrer">
                    <BtnFilled large>{painPointPage.faq.cta}</BtnFilled>
                  </a>
                </div>
                <div style={{ borderTop: `1px solid ${L.border}` }}>
                  {faqs.map((f, i) => (
                    <FAQItem key={i} q={f.q} a={f.a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── CTA (About-style) ── */}
          <CursorLine buttonRef={ctaBtnRef} buttonRadius={76}>
          <div style={{
            background: "#17172E",
            padding: "clamp(64px,8vw,100px) 24px",
            position: "relative",
          }}>
            <div aria-hidden style={{
              position: "absolute", inset: 0, pointerEvents: "none",
              background: "radial-gradient(ellipse 70% 60% at 0% 100%, rgba(86,88,223,0.28) 0%, transparent 65%)",
            }} />
            <div style={{
              position: "relative",
              zIndex: 1,
              maxWidth: "900px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "clamp(32px, 6vw, 80px)",
              alignItems: "center",
            }}>
              {/* LEFT */}
              <div>
                <p style={{ fontFamily: "Consolas, monospace", fontSize: "11px", letterSpacing: "0.22em", color: "#C2C3F6", textTransform: "uppercase" as const, marginBottom: "20px" }}>
                  {painPointPage.cta.eyebrow}
                </p>
                <h2 style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "clamp(2.25rem, 4.5vw, 3.4rem)",
                  color: "#fff",
                  lineHeight: 1.0,
                  marginBottom: "32px",
                  letterSpacing: "-0.01em",
                }}>
                  {painPointPage.cta.headingLine1}<br />{painPointPage.cta.headingLine2}
                </h2>
                <a
                  href={painPointPage.cta.phone.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    fontFamily: "Consolas, monospace",
                    fontSize: "13px",
                    letterSpacing: "0.1em",
                    color: "rgba(194,195,246,0.75)",
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(194,195,246,0.2)",
                    paddingBottom: "2px",
                  }}
                >
                  <span style={{ fontSize: "15px", opacity: 0.7 }}>↗</span>
                  {painPointPage.cta.phone.label}
                </a>
              </div>
              {/* RIGHT */}
              <div ref={ctaBtnRef} style={{ display: "flex", justifyContent: "center" }}>
                <FloatingConsultButton textColor="#ffffff" />
              </div>
            </div>
          </div>
          </CursorLine>

        </div>
        {/* ── /LIGHT THEME ── */}

        <Suspense fallback={<div className="min-h-[200px]" />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default PainPointAuswahlverfahren;
