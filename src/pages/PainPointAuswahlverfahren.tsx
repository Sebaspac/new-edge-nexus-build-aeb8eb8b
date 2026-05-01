import { lazy, Suspense, useState, useEffect, useRef, useMemo, useCallback } from "react";

import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Plus, Check } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { MobileNavigation } from "@/components/MobileNavigation";
import { painPoints, DEFAULT_PAIN_POINT } from "@/content/painPoints";
// Default-Bildplatzhalter (werden später pro Slug ersetzt — siehe content.*.imageNote)
import painpointAVorherNachher from "@/assets/painpoint-a-vorher-nachher.png";
import painpointASection3 from "@/assets/painpoint-a-section3.png";
import painpointAFeature2 from "@/assets/painpoint-a-feature2.png";
import painpointAFeature3 from "@/assets/painpoint-a-feature3.png";
import iconAnalyse from "@/assets/painpoint-a-icon-analyse.png";
import iconKoordination from "@/assets/painpoint-a-icon-koordination.png";
import iconInsights from "@/assets/painpoint-a-icon-insights.png";
import integrationsLogos from "/lovable-uploads/integrations-logos.png";
import { Logos3 } from "@/components/ui/logos3";
import { ThreeStepsCTA as SharedThreeStepsCTA } from "@/components/ThreeStepsCTA";

import foundersImg from "@/assets/founders-color.webp";

const Footer = lazy(() => import("@/components/Footer").then((m) => ({ default: m.Footer })));

/* ──────────────────────────────────────────────
   Design tokens
────────────────────────────────────────────── */
const PURPLE = "#7c3aed";
const PURPLE_DARK = "#4c1d95";
const PURPLE_LIGHT = "#6d28d9";
const PURPLE_BG = "rgba(124,58,237,0.08)";

// Light theme
const L = {
  bg: "#ffffff",
  bgAlt: "#f8f8fa",
  text: "#111111",
  textMuted: "#555555",
  textLight: "#888888",
  border: "#e5e5e5",
  borderLight: "#f0f0f0",
};

// Dark theme (hero only)
const D = {
  bg: "#0a0a0a",
  surface: "#141414",
  border: "#252525",
  text: "#ffffff",
  textMuted: "#9a9a9a",
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

const SectionH2 = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <h2
    className={`text-[clamp(1.6rem,2.8vw,2.25rem)] leading-[1.15] mb-4 text-[#111] ${className}`}
    style={{ ...SERIF, letterSpacing: "-0.02em" }}
  >
    {children}
  </h2>
);

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

const FeatureCTA = ({ children }: { children: React.ReactNode }) => (
  <button
    className="inline-flex items-center gap-1.5 text-[0.9rem] font-medium hover:gap-2.5 transition-all bg-transparent border-none p-0 cursor-pointer"
    style={{ color: PURPLE, ...MONO }}
  >
    {children} <ArrowRight className="w-4 h-4" />
  </button>
);

const BtnFilled = ({ children, large = false, onClick }: { children: React.ReactNode; large?: boolean; onClick?: () => void }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center gap-1.5 font-bold transition-all cursor-pointer ${
      large ? "px-7 py-3.5 text-[0.9rem]" : "px-5 py-2.5 text-sm"
    }`}
    style={{
       background: "linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)",
       color: "#fff",
       border: "1px solid rgba(139,92,246,0.4)",
       borderRadius: "6px",
       boxShadow: "0 0 20px rgba(124,58,237,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
       ...MONO,
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)";
      e.currentTarget.style.boxShadow = "0 0 30px rgba(124,58,237,0.5), inset 0 1px 0 rgba(255,255,255,0.15)";
      e.currentTarget.style.transform = "translateY(-1px)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = "linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)";
      e.currentTarget.style.boxShadow = "0 0 20px rgba(124,58,237,0.3), inset 0 1px 0 rgba(255,255,255,0.1)";
      e.currentTarget.style.transform = "translateY(0)";
    }}
  >
    {children}
  </button>
);

const BtnGhost = ({ children, large = false, dark = false }: { children: React.ReactNode; large?: boolean; dark?: boolean }) => (
  <button
    className={`inline-flex items-center gap-1.5 font-bold transition-all cursor-pointer ${
      large ? "px-7 py-3.5 text-[0.9rem]" : "px-5 py-2.5 text-sm"
    }`}
    style={{
      background: dark ? "rgba(139,92,246,0.08)" : "transparent",
      backdropFilter: dark ? "blur(16px)" : undefined,
       border: `1px solid ${dark ? "rgba(139,92,246,0.25)" : L.border}`,
       borderRadius: "6px",
       color: dark ? "#c4b5fd" : L.textMuted,
       boxShadow: dark ? "inset 0 1px 0 rgba(255,255,255,0.05)" : undefined,
       ...MONO,
    }}
    onMouseEnter={(e) => {
      if (dark) {
        e.currentTarget.style.background = "rgba(139,92,246,0.15)";
        e.currentTarget.style.borderColor = "rgba(139,92,246,0.4)";
        e.currentTarget.style.color = "#e0d4ff";
      }
      e.currentTarget.style.transform = "translateY(-1px)";
    }}
    onMouseLeave={(e) => {
      if (dark) {
        e.currentTarget.style.background = "rgba(139,92,246,0.08)";
        e.currentTarget.style.borderColor = "rgba(139,92,246,0.25)";
        e.currentTarget.style.color = "#c4b5fd";
      }
      e.currentTarget.style.transform = "translateY(0)";
    }}
  >
    {children}
  </button>
);

/* ────────────── FAQ accordion ────────────── */

const FAQItem = ({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) => {
  return (
    <div className="overflow-hidden" style={{ borderBottom: `1px solid ${L.border}` }}>
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

  // Slug-basiertes Content-Lookup. Routen:
  //   /loesungen/:slug
  //   /leistungen/pain-points/:slug
  //   /leistungen/industrien/:slug
  const { slug } = useParams<{ slug: string }>();
  const content = useMemo(
    () => (slug && painPoints[slug]) || DEFAULT_PAIN_POINT,
    [slug]
  );

  const compareRows = useMemo(
    () => content.compare.rows.map((r) => [r.k, r.ne, r.alt] as const),
    [content]
  );

  // Default-Icons als Bildplatzhalter (gleich für alle Slugs, später ersetzbar)
  const defaultCardIcons = [iconAnalyse, iconKoordination, iconInsights];
  const featureCards = content.featureCards.cards.map((c, i) => ({
    icon: defaultCardIcons[i] ?? iconAnalyse,
    title: c.title,
    desc: c.desc,
  }));

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

  return (
    <>
      <SEOHead
        title={content.seo.title}
        description={content.seo.description}
        canonical={content.seo.canonical}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <div className="min-h-screen" style={{ ...MONO, overflowX: "clip" }}>
        

        {/* ═══════════════════════════════════════════
            HERO — Dark (stays dark)
        ═══════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden flex flex-col text-white"
          style={{
            minHeight: "100dvh",
            background: `linear-gradient(135deg, #1a0533 0%, ${D.bg} 50%, #0d0a1a 100%)`,
          }}
        >
          {/* Geometric background shapes — ElegantShape style */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Ambient glow */}
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 50% at 18% 35%, rgba(124,58,237,0.18) 0%, transparent 60%)" }} />
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 40% at 85% 70%, rgba(139,92,246,0.10) 0%, transparent 50%)" }} />

            {/* Shape 1 — top-left, large */}
            <motion.div
              initial={{ opacity: 0, y: -150, rotate: 12 }}
              animate={{ opacity: 1, y: 0, rotate: 12 }}
              transition={{ duration: 2.4, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className="absolute top-[-15%] left-[-5%]"
              style={{ width: 600, height: 140 }}
            >
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full rounded-full border border-white/[0.15] bg-gradient-to-r from-white/[0.08] via-transparent to-transparent shadow-[0_8px_32px_0_rgba(139,92,246,0.25)] backdrop-blur-[2px]"
              />
            </motion.div>

            {/* Shape 2 — right side */}
            <motion.div
              initial={{ opacity: 0, y: -100, rotate: -15 }}
              animate={{ opacity: 1, y: 0, rotate: -15 }}
              transition={{ duration: 2.4, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              className="absolute top-[10%] right-[-10%]"
              style={{ width: 500, height: 120 }}
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full rounded-full border border-white/[0.12] bg-gradient-to-r from-violet-500/[0.10] via-transparent to-transparent shadow-[0_8px_32px_0_rgba(124,58,237,0.20)] backdrop-blur-[2px]"
              />
            </motion.div>

            {/* Shape 3 — center-left, crossing content */}
            <motion.div
              initial={{ opacity: 0, x: -100, rotate: -8 }}
              animate={{ opacity: 1, x: 0, rotate: -8 }}
              transition={{ duration: 2.4, delay: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
              className="absolute top-[35%] left-[5%]"
              style={{ width: 550, height: 130 }}
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full rounded-full border border-white/[0.10] bg-gradient-to-r from-white/[0.06] via-transparent to-transparent shadow-[0_8px_32px_0_rgba(168,85,247,0.15)] backdrop-blur-[2px]"
              />
            </motion.div>

            {/* Shape 4 — bottom-right */}
            <motion.div
              initial={{ opacity: 0, y: 100, rotate: 20 }}
              animate={{ opacity: 1, y: 0, rotate: 20 }}
              transition={{ duration: 2.4, delay: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
              className="absolute bottom-[5%] right-[0%]"
              style={{ width: 480, height: 110 }}
            >
              <motion.div
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full rounded-full border border-white/[0.10] bg-gradient-to-r from-purple-400/[0.08] via-transparent to-transparent shadow-[0_8px_32px_0_rgba(139,92,246,0.18)] backdrop-blur-[2px]"
              />
            </motion.div>

            {/* Shape 5 — small bottom-left accent */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: 35 }}
              animate={{ opacity: 1, scale: 1, rotate: 35 }}
              transition={{ duration: 2.4, delay: 1.1, ease: [0.25, 0.4, 0.25, 1] }}
              className="absolute bottom-[20%] left-[15%]"
              style={{ width: 380, height: 90 }}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full rounded-full border border-white/[0.08] bg-gradient-to-r from-violet-400/[0.06] via-transparent to-transparent shadow-[0_4px_16px_0_rgba(139,92,246,0.12)]"
              />
            </motion.div>
          </div>
          <div className="relative z-10">
            <MobileNavigation onContactClick={() => setContactOpen(true)} theme="dark" />
          </div>

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
                      src={painpointAVorherNachher}
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
                <div className="flex w-max py-3.5" style={{ animation: "marquee 28s linear infinite" }}>
                  {[...Array(2)].flatMap((_, dup) =>
                    content.trustBar.logos.map((name, i) => (
                      <div
                        key={`hero-${dup}-${i}`}
                        className="flex items-center gap-2.5 px-8 text-[0.9rem] font-semibold whitespace-nowrap"
                        style={{ color: "#666", ...SERIF }}
                      >
                        {name}
                        <span style={{ color: D.border }}>·</span>
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
              <div className="border-l-2 pl-5 py-2" style={{ borderColor: PURPLE }}>
                <p className="text-[0.7rem] uppercase tracking-[0.12em] mb-2" style={{ color: PURPLE }}>
                  Definition
                </p>
                <h2 className="text-lg md:text-xl mb-2" style={{ ...SERIF, color: L.text }}>
                  {content.definition.title}
                </h2>
                <p className="text-sm leading-[1.7]" style={{ color: L.textMuted }}>
                  {content.definition.body}
                </p>
              </div>
            </div>
          </section>

          {/* FEATURE 01 */}
          <Reveal>
            <div id="feature-01" className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20 md:py-24 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <img
                  src={painpointASection3}
                  alt="KI-gestützte Erfassung: PDF-Dokumente werden via Texterkennung, Klassifizierung, Strukturierung und Validierung in ein strukturiertes Projektdatenblatt überführt"
                  loading="lazy"
                  className="w-full h-auto max-w-[440px] mx-auto"
                />
              </div>
              <div>
                <SectionLabel>Feature 01</SectionLabel>
                <SectionH2>Schluss mit dem Dokumenten-Chaos</SectionH2>
                <SectionSub>
                  Bewerbungen kommen als PDFs, Freitexte und E-Mails — jedes in einem anderen Format. Systematisch
                  vergleichen lässt sich das nicht. New Edge strukturiert die Datenerfassung, prüft Vollständigkeit
                  automatisch und führt Bewerber durch einen klaren, geführten Prozess — ohne manuelle Nacharbeit.
                </SectionSub>
                <BulletList
                  items={[
                    "Automatische Dokumentenprüfung auf Vollständigkeit",
                    "Guided Application — Schritt-für-Schritt geführt",
                    "Persistente Datenbasis — kein Wissen geht verloren",
                  ]}
                />
                <FeatureCTA>Wie es funktioniert</FeatureCTA>
              </div>
            </div>
          </Reveal>

          {/* FEATURE 02 (flipped) */}
           <div id="feature-02" style={{ background: L.bgAlt, borderTop: `1px solid ${L.border}`, borderBottom: `1px solid ${L.border}` }}>
            <Reveal>
              <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20 md:py-24 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="md:order-2">
                  <img
                    src={painpointAFeature2}
                    alt="3-Schritt-Prozess: PDFs hochladen → KI-Erfassung → Strukturiertes Ergebnis"
                    loading="lazy"
                    className="w-full h-auto max-w-[500px] mx-auto"
                  />
                </div>
                <div className="md:order-1">
                  <SectionLabel>Feature 02</SectionLabel>
                  <SectionH2>Jury-Koordination die sich selbst organisiert</SectionH2>
                  <SectionSub>
                    Endlose E-Mail-Threads, vergessene Deadlines, inkonsistente Bewertungen. New Edge automatisiert
                    Briefings, Reminder und die gesamte Jury-Kommunikation. Teams berichten von einer Reduktion des
                    Koordinationsaufwands um durchschnittlich 80%. Jedes Mitglied bewertet im eigenen Interface — in
                    seinem Tempo.
                  </SectionSub>
                  <BulletList
                    items={[
                      "Automatische Briefings und Reminder ohne manuellen Aufwand",
                      "Operationalisiertes Bewertungssystem — keine Subjektivität",
                      "Automatische Konflikt-Erkennung bei abweichenden Urteilen",
                    ]}
                  />
                  <FeatureCTA>Jury-Interface ansehen</FeatureCTA>
                </div>
              </div>
            </Reveal>
          </div>

          {/* FEATURE 03 */}
          <Reveal>
            <div id="feature-03" className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20 md:py-24 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <img
                  src={painpointAFeature3}
                  alt="Einzelscore mit Kategorien-Bewertung und Heatmap zur Bias-Analyse über Jurys und Kategorien"
                  loading="lazy"
                  className="w-full h-auto max-w-[500px] mx-auto"
                />
              </div>
              <div>
                <SectionLabel>Feature 03</SectionLabel>
                <SectionH2>Erkenntnisse die niemand explizit angefragt hat</SectionH2>
                <SectionSub>
                  Das eigentliche Gold liegt in den Daten. Welche Jury-Mitglieder bewerten systematisch zu hart? Welche
                  Merkmale korrelieren mit späterem Projekterfolg? New Edge generiert diese Analysen automatisch aus
                  jedem abgeschlossenen Zyklus — der Award wird zur strategischen Forschungsplattform.
                </SectionSub>
                <BulletList
                  items={[
                    "Jury-Bias-Erkennung — systematische Muster werden sichtbar",
                    "Bewerber-Clustering — strukturelle Ähnlichkeiten sichtbar machen",
                    "Markt-Insights — Trendanalysen über Zyklen hinweg",
                  ]}
                />
                <FeatureCTA>Analyse-Demo ansehen</FeatureCTA>
              </div>
            </div>
          </Reveal>

          {/* INTEGRATIONS */}
          <div id="integrations" style={{ background: L.bgAlt, borderTop: `1px solid ${L.border}`, borderBottom: `1px solid ${L.border}` }}>
            <Reveal>
              <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20 md:py-24">
                <div className="max-w-[600px]">
                  <SectionLabel>Integrationen</SectionLabel>
                  <SectionH2>Verbindet sich mit den Tools die ihr bereits nutzt</SectionH2>
                  <SectionSub>
                    Kein neues System das alles ersetzt. New Edge integriert sich in eure bestehende Infrastruktur.
                  </SectionSub>
                </div>
                <div className="mt-10" style={{ '--fade-color': L.bgAlt } as React.CSSProperties}>
                  <Logos3
                    heading=""
                    className="mb-8"
                    logos={[
                      { id: "ms-teams", description: "Microsoft Teams", image: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg", className: "h-8 w-auto" },
                      { id: "sharepoint", description: "SharePoint", image: "/sharepoint.png", className: "h-8 w-auto" },
                      { id: "outlook", description: "Outlook", image: "/outlook.png", className: "h-8 w-auto" },
                      { id: "hubspot", description: "HubSpot", image: "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg", className: "h-8 w-auto" },
                      { id: "zapier", description: "Zapier", image: "https://www.vectorlogo.zone/logos/zapier/zapier-icon.svg", className: "h-8 w-auto" },
                      { id: "notion", description: "Notion", image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png", className: "h-8 w-auto" },
                      { id: "google-ws", description: "Google Workspace", image: "/google-workspace.svg", className: "h-6 w-auto" },
                      { id: "ms365", description: "Microsoft 365", image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Microsoft_365_%282022%29.svg", className: "h-8 w-auto" },
                      { id: "slack", description: "Slack", image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg", className: "h-8 w-auto" },
                      { id: "jira", description: "Jira", image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Jira_Logo.svg", className: "h-6 w-auto" },
                    ]}
                  />
                </div>
              </div>
            </Reveal>
          </div>

          {/* COMPARISON TABLE */}
          <Reveal>
            <div id="comparison" className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20 md:py-24">
              <div className="max-w-[600px] mb-10">
                <SectionLabel>Vergleich</SectionLabel>
                <SectionH2>New Edge vs. manueller Auswahlprozess</SectionH2>
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
                        Kriterium
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
                        New Edge
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
                        Manuell
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
                        <span className="block text-[0.7rem] font-bold uppercase tracking-wider mb-1" style={{ color: PURPLE_DARK }}>New Edge</span>
                        ✓ {ne}
                      </div>
                      <div
                        className="px-4 py-3 text-[0.82rem]"
                        style={{ color: "#b91c1c", ...MONO }}
                      >
                        <span className="block text-[0.7rem] font-bold uppercase tracking-wider mb-1" style={{ color: "#b91c1c" }}>Manuell</span>
                        ✗ {ma}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* FEATURE CARDS */}
          <div id="features" style={{ background: L.bgAlt, borderTop: `1px solid ${L.border}`, borderBottom: `1px solid ${L.border}` }}>
            <Reveal>
              <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20 md:py-24">
                <div className="text-center max-w-[600px] mx-auto mb-12">
                  <SectionLabel>Kernfunktionen</SectionLabel>
                  <SectionH2 className="!mb-0">KI die qualifiziert, koordiniert und entscheidet.</SectionH2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {featureCards.map((c) => (
                    <div
                      key={c.title}
                      className="p-8 transition-all hover:-translate-y-1"
                      style={{ background: L.bg, border: `1px solid ${L.border}` }}
                    >
                      <div className="flex justify-center mb-6">
                        <img
                          src={c.icon}
                          alt={c.title}
                          loading="lazy"
                          width={64}
                          height={64}
                          className="w-16 h-16 object-contain"
                        />
                      </div>
                      <h3 className="text-[1.05rem] font-bold mb-2.5 text-center" style={{ ...SERIF, letterSpacing: "-0.02em", color: L.text }}>
                        {c.title}
                      </h3>
                      <p className="text-[0.875rem] leading-[1.65] text-center" style={{ color: L.textMuted }}>
                        {c.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

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
                New Edge hat unseren gesamten Auswahlprozess transformiert. Was früher 60.000€ und drei Monate Aufwand
                war, läuft jetzt automatisch — und die Qualität unserer Entscheidungen ist nachweislich besser.
              </p>
              <div className="flex items-center justify-center gap-2.5 text-[0.85rem]" style={{ color: L.textLight }}>
                <span className="block h-px w-10" style={{ background: L.border }} />
                BMP Award — Projektleitung
                <span className="block h-px w-10" style={{ background: L.border }} />
              </div>
            </div>
          </div>

          {/* TESTIMONIAL GRID */}
          <TestimonialsSection />

          {/* FAQ */}
          <Reveal>
            <div id="faq" className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20 md:py-24">
              <div className="grid md:grid-cols-[1fr,1.5fr] gap-12 md:gap-16 items-start">
                <div>
                  <SectionLabel>FAQ</SectionLabel>
                  <h2
                    className="text-[clamp(1.5rem,2.5vw,2.2rem)] mb-6"
                    style={{ ...SERIF, letterSpacing: "-0.02em", color: L.text }}
                  >
                    Du hast Fragen?<br />
                    <span style={{ color: PURPLE }}>Wir haben Antworten.</span>
                  </h2>
                  <Link to="/kontakt">
                    <BtnFilled large>Kontakt aufnehmen</BtnFilled>
                  </Link>
                </div>
                <div style={{ borderTop: `1px solid ${L.border}` }}>
                  {faqs.map((f, i) => (
                    <FAQItem key={i} q={f.q} a={f.a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <SharedThreeStepsCTA />

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
