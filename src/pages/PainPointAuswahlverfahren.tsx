import { lazy, Suspense, useState, useEffect, useRef, useMemo, useCallback } from "react";


import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Plus, Check } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { MobileNavigation } from "@/components/MobileNavigation";
import painpointAVorherNachher from "@/assets/painpoint-a-vorher-nachher.png";
import painpointASection3 from "@/assets/painpoint-a-section3.png";
import painpointAFeature2 from "@/assets/painpoint-a-feature2.png";
import painpointAFeature3 from "@/assets/painpoint-a-feature3.png";
import iconAnalyse from "@/assets/painpoint-a-icon-analyse.png";
import iconKoordination from "@/assets/painpoint-a-icon-koordination.png";
import iconInsights from "@/assets/painpoint-a-icon-insights.png";
import integrationsLogos from "@/assets/painpoint-a-integrations-logos.png";
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


/* ────────────── Three Steps CTA ────────────── */

const stepsData = [
  {
    icon: "💬",
    title: "Unverbindliches Erstgespräch",
    desc: "Lass uns quatschen! Bei unserem ersten Gespräch wollen wir dich und dein Business kennenlernen. Wähle einfach und bequem online einen Termin aus.",
  },
  {
    icon: "🎯",
    title: "Gemeinsam Ziele definieren",
    desc: "Erzähl uns von deinen Wünschen und Zielen! Egal, ob mehr Sichtbarkeit, höhere Umsätze oder eine stärkere Kundenbindung — wir legen eine Strategie fest, um deine Ziele zu rocken!",
  },
  {
    icon: "🚀",
    title: "Durchstarten",
    desc: "Let's go! Nachdem wir deine Ziele finalisiert haben, geht's erst richtig los! Mit kreativen Ideen und spannendem Content repräsentieren wir dein Unternehmen als individuelle Brand.",
  },
];

const ThreeStepsCTA = ({ onContact }: { onContact: () => void }) => {
  const isMobile = useIsMobile();
  const [activeStep, setActiveStep] = useState(0);
  const [mobileStep, setMobileStep] = useState(0);
  const [pinMode, setPinMode] = useState<"before" | "fixed" | "after">("before");
  const sectionRef = useRef<HTMLDivElement>(null);

  // Desktop scroll-pin logic
  useEffect(() => {
    if (isMobile) return;
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;
    const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
    const updateStep = () => {
      const rect = section.getBoundingClientRect();
      const pinDistance = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = clamp(-rect.top / pinDistance, 0, 1);
      const nextMode = rect.top > 0 ? "before" : rect.bottom <= window.innerHeight ? "after" : "fixed";
      const nextStep = progress < 0.34 ? 0 : progress < 0.67 ? 1 : 2;

      setPinMode((current) => (current === nextMode ? current : nextMode));
      setActiveStep((current) => (current === nextStep ? current : nextStep));
    };
    const requestStepUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateStep);
    };

    window.addEventListener("scroll", requestStepUpdate, { passive: true });
    window.addEventListener("resize", requestStepUpdate);
    requestStepUpdate();
    return () => {
      window.removeEventListener("scroll", requestStepUpdate);
      window.removeEventListener("resize", requestStepUpdate);
      cancelAnimationFrame(frame);
    };
  }, [isMobile]);

  // Mobile scroll-driven logic — pin section and cycle cards based on scroll
  useEffect(() => {
    if (!isMobile) return;
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;
    const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));
    const update = () => {
      const rect = section.getBoundingClientRect();
      const pinDist = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = clamp(-rect.top / pinDist, 0, 1);
      const nextMode = rect.top > 0 ? "before" : rect.bottom <= window.innerHeight ? "after" : "fixed";
      const nextStep = progress < 0.34 ? 0 : progress < 0.67 ? 1 : 2;
      setPinMode((c) => (c === nextMode ? c : nextMode));
      setMobileStep((c) => (c === nextStep ? c : nextStep));
    };
    const onScroll = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(update); };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(frame); };
  }, [isMobile]);

  /* ── MOBILE LAYOUT ── */
  if (isMobile) {
    const mobilePinStyle: React.CSSProperties = {
      position: pinMode === "fixed" ? "fixed" : "absolute",
      top: pinMode === "after" ? "auto" : 0,
      bottom: pinMode === "after" ? 0 : "auto",
      left: 0, right: 0, width: "100%", height: "100dvh", zIndex: 1,
      background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 50%, ${PURPLE_LIGHT} 100%)`,
    };

    return (
      <div
        id="cta"
        ref={sectionRef}
        className="relative isolate"
        style={{
          height: "350dvh",
          background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 50%, ${PURPLE_LIGHT} 100%)`,
        }}
      >
        <div style={mobilePinStyle} className="overflow-hidden">
          <div className="px-6 pt-16 pb-8 h-full flex flex-col">
            {/* Headline */}
            <h2
              className="text-[2.2rem] leading-[0.94] mb-3 uppercase"
              style={{ ...SERIF, letterSpacing: "0", color: "#ffffff" }}
            >
              Drei<br />Schritte<br />zum Erfolg
            </h2>

            {/* CTA Button */}
            <Link to="/kontakt">
              <button
                className="inline-flex w-fit items-center gap-2 px-5 py-2.5 text-[0.8rem] font-medium transition-all hover:opacity-90 mb-3"
                style={{ background: "#ffffff", color: PURPLE_DARK, ...MONO, border: "none" }}
              >
                Erstgespräch vereinbaren
              </button>
            </Link>

            {/* Founder info */}
            <div className="flex items-center gap-3 mb-5">
              <img
                src={foundersImg}
                alt="Sebastian Pachon — Gründer New Edge"
                className="w-10 h-10 object-cover object-[25%_20%]"
                style={{ borderRadius: "50%" }}
              />
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-white" style={MONO}>
                  Mit Sebastian Pachon
                </p>
                <p className="text-[0.65rem] text-white/70" style={MONO}>
                  Gründer und Geschäftsführer New Edge
                </p>
              </div>
            </div>

            {/* Step indicators horizontal */}
            <div className="flex gap-2 mb-4">
              {stepsData.map((_, i) => (
                <div
                  key={i}
                  className="flex-1 p-2 text-center transition-all duration-500"
                  style={{
                    background: mobileStep === i ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.06)",
                    border: `1px solid ${mobileStep === i ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.15)"}`,
                  }}
                >
                  <span className="text-sm font-bold text-white" style={MONO}>0{i + 1}</span>
                </div>
              ))}
            </div>

            {/* Card area — scroll-driven swipe */}
            <div className="relative flex-1" style={{ minHeight: 200 }}>
              {stepsData.map((card, i) => {
                const isActive = mobileStep === i;
                const isPast = mobileStep > i;
                return (
                  <div
                    key={card.title}
                    className="absolute inset-x-0 top-0 p-5 flex flex-col will-change-transform"
                    style={{
                      background: "rgba(255,255,255,0.98)",
                      opacity: isActive ? 1 : 0,
                      transform: isPast
                        ? "translateX(-120%) rotate(-8deg) scale(0.9)"
                        : isActive
                          ? "translateX(0) rotate(0deg) scale(1)"
                          : "translateX(60px) scale(0.92)",
                      transition: "opacity 500ms ease, transform 600ms cubic-bezier(0.4,0,0.2,1)",
                      pointerEvents: isActive ? "auto" : "none",
                      boxShadow: "0 16px 50px rgba(0,0,0,0.18)",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{card.icon}</span>
                      <span
                        className="text-[0.75rem] font-bold uppercase tracking-widest"
                        style={{ ...MONO, color: PURPLE }}
                      >
                        Schritt {i + 1}
                      </span>
                    </div>
                    <h3
                      className="text-[1rem] font-bold mb-2"
                      style={{ ...SERIF, letterSpacing: "-0.01em", color: L.text }}
                    >
                      {card.title}
                    </h3>
                    <p className="text-[0.82rem] leading-[1.6]" style={{ color: L.textMuted, ...MONO }}>
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Progress dots */}
            <div className="flex justify-center gap-2 mt-auto pt-4">
              {stepsData.map((_, i) => (
                <span
                  key={i}
                  className="block h-2 transition-all duration-500"
                  style={{
                    background: mobileStep === i ? "#ffffff" : "rgba(255,255,255,0.3)",
                    width: mobileStep === i ? "28px" : "10px",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ── DESKTOP LAYOUT (unchanged) ── */
  const pinnedStyle: React.CSSProperties = {
    position: pinMode === "fixed" ? "fixed" : "absolute",
    top: pinMode === "after" ? "auto" : 0,
    bottom: pinMode === "after" ? 0 : "auto",
    left: 0,
    right: 0,
    width: "100%",
    height: "100dvh",
    zIndex: 1,
    background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 50%, ${PURPLE_LIGHT} 100%)`,
  };

  return (
    <div
      id="cta"
      ref={sectionRef}
      className="relative isolate"
      style={{
        height: "280dvh",
        background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 50%, ${PURPLE_LIGHT} 100%)`,
      }}
    >
      <div style={pinnedStyle} className="overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 w-full h-full relative">
          <div className="absolute inset-0 grid md:grid-cols-[0.9fr_1.1fr] gap-7 md:gap-12 items-center w-full pt-24 pb-6 md:pt-24 md:pb-8">
            {/* LEFT */}
            <div className="flex flex-col justify-center">
              <h2
                className="text-[clamp(2rem,4.4vw,3.8rem)] leading-[0.94] mb-4 uppercase"
                style={{ ...SERIF, letterSpacing: "0", color: "#ffffff" }}
              >
                Drei<br />Schritte<br />zum Erfolg
              </h2>
              
              <Link to="/kontakt">
                <button
                  className="inline-flex w-fit items-center gap-2 px-5 py-2.5 text-[0.8rem] font-medium transition-all hover:opacity-90 hover:-translate-y-0.5"
                  style={{ background: "#ffffff", color: PURPLE_DARK, ...MONO, border: "none" }}
                >
                  Erstgespräch vereinbaren
                </button>
              </Link>
              <div className="flex gap-2 mt-4">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="block h-2 transition-all duration-500"
                    style={{
                      background: activeStep === i ? "#ffffff" : "rgba(255,255,255,0.3)",
                      width: activeStep === i ? "28px" : "10px",
                    }}
                  />
                ))}
              </div>
              <div className="flex items-center gap-3 mt-4">
                <img
                  src={foundersImg}
                  alt="Sebastian Pachon — Gründer New Edge"
                  className="w-12 h-12 object-cover object-[25%_20%]"
                  style={{ borderRadius: "50%" }}
                />
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-white" style={MONO}>
                    Mit Sebastian Pachon
                  </p>
                  <p className="text-xs text-white/70" style={MONO}>
                    Gründer und Geschäftsführer New Edge
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT — RAF-synced fixed-threshold cards */}
            <div className="relative h-[390px] flex items-center" aria-live="polite">
              {stepsData.map((card, i) => {
                const isActive = activeStep === i;
                return (
                  <div
                    key={card.title}
                    className="absolute inset-x-0 top-1/2 min-h-[230px] p-7 md:p-10 flex flex-col justify-center will-change-transform"
                    style={{
                      background: "rgba(255,255,255,0.98)",
                      opacity: isActive ? 1 : 0,
                      transform: `translate3d(0, ${isActive ? "-50%" : i < activeStep ? "-64%" : "-36%"}, 0) scale(${isActive ? 1 : 0.94}) rotate(${isActive ? -2 : 0}deg)`,
                      transition: "opacity 520ms cubic-bezier(0.22,1,0.36,1), transform 520ms cubic-bezier(0.22,1,0.36,1)",
                      pointerEvents: isActive ? "auto" : "none",
                      boxShadow: "0 26px 70px rgba(0,0,0,0.22)",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{card.icon}</span>
                      <span
                        className="text-[0.8rem] font-bold uppercase tracking-widest"
                        style={{ ...MONO, color: PURPLE }}
                      >
                        Schritt {i + 1}
                      </span>
                    </div>
                    <h3
                      className="text-[1.1rem] font-bold mb-3"
                      style={{ ...SERIF, letterSpacing: "-0.01em", color: L.text }}
                    >
                      {card.title}
                    </h3>
                    <p className="text-[0.9rem] leading-[1.7]" style={{ color: L.textMuted, ...MONO }}>
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ────────────── PAGE ────────────── */

const PainPointAuswahlverfahren = () => {
  const [, setContactOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const compareRows = [
    ["Bewerbungseingang", "Strukturiert & automatisch", "PDFs, Mails, verschiedene Formate"],
    ["Jury-Koordination", "Vollautomatisiert", "Endlose E-Mail-Threads"],
    ["Vergleichbarkeit", "Einheitliches Kategoriensystem", "Keine einheitliche Basis"],
    ["Entscheidungsdoku", "Revisionssicher & automatisch", "Existiert kaum"],
    ["Wissen nach Zyklus", "Persistente Datenbasis", "Geht jedes Jahr verloren"],
    ["Analysen", "Automatisch generiert", "Nicht vorhanden"],
    ["Kosten", "Planbar & skalierbar", "60–80k€ pro Zyklus"],
  ];

  const featureCards = [
    { icon: iconAnalyse, title: "KI Bewerbungsanalyse", desc: "Jede Einreichung wird automatisch analysiert, kategorisiert und für die Jury aufbereitet." },
    { icon: iconKoordination, title: "Automatisierte Jury-Koordination", desc: "Briefings, Reminder, Deadlines — läuft automatisch. Euer Team fokussiert sich auf Entscheidungen." },
    { icon: iconInsights, title: "Analysen & Insights", desc: "Aus jedem Zyklus entstehen automatisch Muster und Trends — die den nächsten Prozess verbessern." },
  ];

/* ────────────── Section Dot Navigator ────────────── */

const SECTION_IDS = [
  { id: "hero-section", label: "Hero" },
  { id: "definition", label: "Definition" },
  { id: "feature-01", label: "Feature 01" },
  { id: "feature-02", label: "Feature 02" },
  { id: "feature-03", label: "Feature 03" },
  { id: "integrations", label: "Integrationen" },
  { id: "comparison", label: "Vergleich" },
  { id: "features", label: "Funktionen" },
  { id: "testimonial", label: "Testimonial" },
  { id: "faq", label: "FAQ" },
  { id: "cta", label: "CTA" },
];

const SectionDotNav = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero
      setVisible(window.scrollY > 300);

      // Find active section
      let current = 0;
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTION_IDS[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4) {
            current = i;
            break;
          }
        }
      }
      setActiveIndex(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className="fixed right-4 lg:right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-end gap-3 transition-opacity duration-500"
      style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none" }}
    >
      {SECTION_IDS.map((section, i) => {
        const isActive = activeIndex === i;
        const isHovered = hoveredIndex === i;
        return (
          <button
            key={section.id}
            onClick={() => scrollTo(section.id)}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="flex items-center gap-2.5 group cursor-pointer bg-transparent border-none p-0"
            aria-label={`Zu ${section.label} scrollen`}
          >
            {/* Label */}
            <span
              className="text-[0.65rem] font-semibold uppercase tracking-wider transition-all duration-300 whitespace-nowrap"
              style={{
                ...MONO,
                opacity: isHovered || isActive ? 1 : 0,
                transform: isHovered || isActive ? "translateX(0)" : "translateX(8px)",
                color: isActive ? PURPLE : "#888",
              }}
            >
              {section.label}
            </span>
            {/* Dot */}
            <span
              className="block transition-all duration-300"
              style={{
                width: isActive ? 10 : 6,
                height: isActive ? 10 : 6,
                background: isActive
                  ? `linear-gradient(135deg, ${PURPLE} 0%, ${PURPLE_DARK} 100%)`
                  : isHovered
                  ? "#aaa"
                  : "#ccc",
                boxShadow: isActive ? `0 0 8px rgba(124,58,237,0.5)` : "none",
                borderRadius: "0",
              }}
            />
          </button>
        );
      })}
    </nav>
  );
};


  const faqs = [
    {
      q: "Wie lange dauert die Implementierung eines KI-gestützten Auswahlverfahrens?",
      a: "In der Regel 2–4 Wochen bis zum ersten produktiven Bewerbungszyklus. Datenmigration und Team-Training sind inklusive.",
    },
    {
      q: "Können wir unser bestehendes Bewertungssystem in die Software übernehmen?",
      a: "Ja. New Edge baut auf euren bestehenden Kriterien auf und operationalisiert sie. Ihr behaltet die volle Kontrolle über die Bewertungslogik.",
    },
    {
      q: "Wie funktioniert Jury-Anonymität bei digitalen Auswahlverfahren?",
      a: "Jury-Bewertungen können vollständig anonymisiert werden. Einzelne Scores sind nur für definierte Rollen sichtbar — die Aggregation für alle.",
    },
    {
      q: "Wo werden Bewerberdaten nach dem Auswahlzyklus gespeichert?",
      a: "Alle Daten verbleiben in eurer Infrastruktur. New Edge kann lokal oder in eurer Cloud gehostet werden — volle Datensouveränität garantiert.",
    },
  ];

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
        title="Auswahlverfahren automatisieren mit KI | New Edge München"
        description="KI-gestütztes Bewerbungsmanagement für Awards, Jurys und Auswahlprozesse. Automatische Dokumentenprüfung, Jury-Koordination & revisionssichere Entscheidungsdokumentation. Demo buchen."
        canonical="/loesungen/auswahlverfahren-automatisieren"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <div className="min-h-screen" style={{ ...MONO, overflowX: "clip" }}>
        
        <SectionDotNav />

        {/* ═══════════════════════════════════════════
            HERO — Dark (stays dark)
        ═══════════════════════════════════════════ */}
        <section
          id="hero-section"
          className="relative overflow-hidden flex flex-col text-white"
          style={{
            minHeight: "100dvh",
            background: `radial-gradient(ellipse 70% 55% at 18% 35%, rgba(168,85,247,0.18) 0%, transparent 60%), ${D.bg}`,
          }}
        >
          <MobileNavigation onContactClick={() => setContactOpen(true)} theme="dark" />

          <div className="flex-1 flex items-center">
            <div className="max-w-[1200px] w-full mx-auto px-6 lg:px-8 pt-24 md:pt-20 pb-4 grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <Reveal>
                <p
                  className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] mb-5"
                  style={{ color: PURPLE_LIGHT, ...MONO }}
                >
                  KI-AUTOMATISIERUNG FÜR AUSWAHLVERFAHREN
                </p>
                <h1
                  className="text-[clamp(1.75rem,3.2vw,2.75rem)] leading-[1.08] mb-5"
                  style={{ ...SERIF, letterSpacing: "-0.02em" }}
                >
                  Auswahlverfahren automatisieren —<br />
                  <span style={{ color: PURPLE_LIGHT }}>
                    KI-gestützte Bewertungssysteme
                  </span>
                </h1>
                <p className="text-[0.925rem] leading-[1.65] mb-6 max-w-[500px]" style={{ color: D.textMuted }}>
                  Unstrukturierte Bewerbungen, überlastete Jurys, verlorenes Wissen. New Edge strukturiert euren
                  gesamten Auswahlprozess — von der ersten Einreichung bis zur revisionssicheren Entscheidung.
                </p>
                <div className="flex gap-3 flex-wrap">
                  <BtnFilled onClick={() => setContactOpen(true)}>Demo buchen</BtnFilled>
                  <BtnGhost dark>Case Study — BMP Award</BtnGhost>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="flex justify-center md:justify-end">
                  <div className="relative w-full max-w-[460px]">
                    <img
                      src={painpointAVorherNachher}
                      alt="Vorher: unstrukturierte PDF-Bewerbungen — Nachher: strukturiertes KI-Scoring-Dashboard"
                      className="w-full h-auto"
                      style={{ border: `1px solid ${D.border}` }}
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Trust bar */}
          <div className="shrink-0 pb-6 md:pb-8">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
              <p className="text-center text-[1.15rem] md:text-[1.35rem] mb-1" style={SERIF}>
                Vertraut von führenden Organisationen in Deutschland
              </p>
              <p className="text-center text-[0.75rem] mb-4" style={{ color: D.textMuted }}>
                Reale Ergebnisse aus Auswahlprozessen wie eurem
              </p>
              <div className="overflow-hidden" style={{ borderTop: `1px solid ${D.border}`, borderBottom: `1px solid ${D.border}` }}>
                <div className="flex w-max py-3.5" style={{ animation: "marquee 28s linear infinite" }}>
                  {[...Array(2)].flatMap((_, dup) =>
                    ["BMP Award", "Stiftung", "Förderinstitut", "Verband", "IHK", "Accelerator", "Forschungsinstitut"].map((name, i) => (
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
                  Was ist KI-gestützte Auswahlverfahren-Automatisierung?
                </h2>
                <p className="text-sm leading-[1.7]" style={{ color: L.textMuted }}>
                  KI-gestützte Auswahlverfahren-Automatisierung ersetzt manuelle Bewerbungsverarbeitung durch
                  strukturierte Datenerfassung, automatische Vollständigkeitsprüfung und ein operationalisiertes
                  Jury-Bewertungssystem. Organisationen reduzieren den Prozessaufwand damit um bis zu 70% — bei
                  revisionssicherer Entscheidungsdokumentation und nachweislich besserer Entscheidungsqualität.
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
                <div className="mt-10">
                  <img
                    src={integrationsLogos}
                    alt="Integrationen: Microsoft Teams, SharePoint, Outlook, HubSpot, Zapier, Make, Notion, Google Workspace, Microsoft 365"
                    loading="lazy"
                    className="w-full h-auto max-w-[880px] mx-auto"
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

          <ThreeStepsCTA onContact={() => setContactOpen(true)} />

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
