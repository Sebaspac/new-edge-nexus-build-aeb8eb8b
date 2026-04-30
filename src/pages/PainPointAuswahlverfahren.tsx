import { lazy, Suspense, useState, useEffect, useRef, useMemo } from "react";
import { ScrollLegend } from "@/components/ui/scroll-legend";
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
const PURPLE = "#a855f7";
const PURPLE_DARK = "#7e22ce";
const PURPLE_LIGHT = "#c084fc";
const PURPLE_BG = "rgba(168,85,247,0.08)";

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
    className={`inline-flex items-center gap-1.5 font-medium transition-all hover:opacity-90 hover:-translate-y-0.5 ${
      large ? "px-7 py-3.5 text-[0.9rem]" : "px-5 py-2.5 text-sm"
    }`}
    style={{ background: PURPLE, color: "#fff", ...MONO }}
  >
    {children}
  </button>
);

const BtnGhost = ({ children, large = false, dark = false }: { children: React.ReactNode; large?: boolean; dark?: boolean }) => (
  <button
    className={`inline-flex items-center gap-1.5 font-medium transition-all ${
      large ? "px-7 py-3.5 text-[0.9rem]" : "px-5 py-2.5 text-sm"
    }`}
    style={{
      background: "transparent",
      border: `1px solid ${dark ? D.border : L.border}`,
      color: dark ? D.textMuted : L.textMuted,
      ...MONO,
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
  const [activeStep, setActiveStep] = useState(0);
  const [pinMode, setPinMode] = useState<"before" | "fixed" | "after">("before");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
  }, []);

  const pinnedStyle: React.CSSProperties = {
    position: pinMode === "fixed" ? "fixed" : "absolute",
    top: pinMode === "after" ? "auto" : 0,
    bottom: pinMode === "after" ? 0 : "auto",
    left: 0,
    right: 0,
    width: "100%",
    height: "100dvh",
    zIndex: 1,
    background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 50%, #c084fc 100%)`,
  };

  return (
    <div
      ref={sectionRef}
      className="relative isolate"
      style={{
        height: "280dvh",
        background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 50%, #c084fc 100%)`,
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
              <div className="space-y-2 mb-4" aria-label={`Schritt ${activeStep + 1} von 3`}>
                {stepsData.map((step, i) => {
                  const isActive = activeStep === i;
                  return (
                    <div
                      key={step.title}
                      className="grid grid-cols-[34px_1fr] gap-2.5 p-2.5 transition-all duration-500"
                      style={{
                        background: isActive ? "rgba(255,255,255,0.16)" : "rgba(255,255,255,0.06)",
                        border: `1px solid ${isActive ? "rgba(255,255,255,0.86)" : "rgba(255,255,255,0.22)"}`,
                        transform: isActive ? "translateX(0)" : "translateX(-6px)",
                      }}
                    >
                      <span className="text-sm font-bold text-white" style={MONO}>0{i + 1}</span>
                      <div>
                        <p className="text-[0.8rem] font-bold text-white" style={MONO}>{step.title}</p>
                        <p className="text-[0.68rem] leading-[1.45] mt-0.5" style={{ color: "rgba(255,255,255,0.72)", ...MONO }}>
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
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
            <div className="relative h-[300px] md:h-[390px] flex items-center" aria-live="polite">
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

        {/* ═══════════════════════════════════════════
            HERO — Dark (stays dark)
        ═══════════════════════════════════════════ */}
        <section
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
                    KI-gestützte Bewertungssysteme für Jurys
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
          <section className="pt-16 md:pt-20 pb-0">
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
            <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20 md:py-24 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
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
          <div style={{ background: L.bgAlt, borderTop: `1px solid ${L.border}`, borderBottom: `1px solid ${L.border}` }}>
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
            <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20 md:py-24 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
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
          <div style={{ background: L.bgAlt, borderTop: `1px solid ${L.border}`, borderBottom: `1px solid ${L.border}` }}>
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
            <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20 md:py-24">
              <div className="max-w-[600px] mb-10">
                <SectionLabel>Vergleich</SectionLabel>
                <SectionH2>New Edge vs. manueller Auswahlprozess</SectionH2>
              </div>

              <div className="overflow-x-auto" style={{ border: `1px solid ${L.border}` }}>
                <table className="w-full border-collapse min-w-[640px]">
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
            </div>
          </Reveal>

          {/* FEATURE CARDS */}
          <div style={{ background: L.bgAlt, borderTop: `1px solid ${L.border}`, borderBottom: `1px solid ${L.border}` }}>
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
          <div className="py-20 md:py-24">
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
            <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20 md:py-24">
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
