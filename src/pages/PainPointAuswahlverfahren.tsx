import { lazy, Suspense, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Plus } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { MobileNavigation } from "@/components/MobileNavigation";
import painpointAVorherNachher from "@/assets/painpoint-a-vorher-nachher.png";
import painpointASection3 from "@/assets/painpoint-a-section3.png";
import painpointAFeature2 from "@/assets/painpoint-a-feature2.png";

const Footer = lazy(() => import("@/components/Footer").then((m) => ({ default: m.Footer })));

/* ──────────────────────────────────────────────
   New Edge CI tokens (mapped from HTML reference)
   accent → Purple #a855f7 (instead of Teal)
   surface → #141414 / #1e1e1e
   border  → #252525
────────────────────────────────────────────── */
const ACCENT = "#a855f7";
const ACCENT_DARK = "#7e22ce";
const ACCENT_BRIGHT = "#c084fc";
const SURFACE = "#141414";
const SURFACE_2 = "#1e1e1e";
const BORDER = "#252525";
const TABLE_HIGHLIGHT = "rgba(168,85,247,0.15)";
const TABLE_DANGER = "rgba(80,20,20,0.4)";

const SERIF: React.CSSProperties = { fontFamily: "'DM Serif Display', serif" };
const MONO: React.CSSProperties = { fontFamily: "Consolas, monospace" };

/* ────────────── Reusable atoms ────────────── */

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <span
    className="inline-block text-[0.68rem] font-semibold uppercase tracking-[0.12em] mb-4"
    style={{ color: ACCENT_BRIGHT, ...MONO }}
  >
    {children}
  </span>
);

const SectionH2 = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <h2
    className={`text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] mb-5 ${className}`}
    style={{ ...SERIF, letterSpacing: "-0.02em" }}
  >
    {children}
  </h2>
);

const SectionSub = ({ children }: { children: React.ReactNode }) => (
  <p className="text-base leading-[1.7] mb-9 max-w-[560px]" style={{ color: "#888", ...MONO }}>
    {children}
  </p>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="flex flex-col gap-3.5 mb-8 list-none">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-3 text-[0.9375rem] text-white" style={MONO}>
        <span
          className="shrink-0 w-[22px] h-[22px] flex items-center justify-center text-[0.65rem] mt-0.5"
          style={{
            background: TABLE_HIGHLIGHT,
            border: `1px solid ${ACCENT}`,
            color: ACCENT_BRIGHT,
          }}
        >
          ✓
        </span>
        {item}
      </li>
    ))}
  </ul>
);

const FeatureCTA = ({ children }: { children: React.ReactNode }) => (
  <button
    className="inline-flex items-center gap-1.5 text-[0.9375rem] font-medium hover:gap-2.5 transition-all bg-transparent border-none p-0 cursor-pointer"
    style={{ color: ACCENT_BRIGHT, ...MONO }}
  >
    {children} <ArrowRight className="w-4 h-4" />
  </button>
);

const BtnFilled = ({ children, large = false, onClick }: { children: React.ReactNode; large?: boolean; onClick?: () => void }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center gap-1.5 font-medium transition-all hover:opacity-90 hover:-translate-y-0.5 ${
      large ? "px-7 py-3.5 text-[0.9375rem]" : "px-5 py-2.5 text-sm"
    }`}
    style={{ background: ACCENT, color: "#fff", ...MONO }}
  >
    {children}
  </button>
);

const BtnGhost = ({ children, large = false }: { children: React.ReactNode; large?: boolean }) => (
  <button
    className={`inline-flex items-center gap-1.5 font-medium transition-all hover:text-white hover:border-white/60 ${
      large ? "px-7 py-3.5 text-[0.9375rem]" : "px-5 py-2.5 text-sm"
    }`}
    style={{
      background: "transparent",
      border: `1px solid ${BORDER}`,
      color: "#888",
      ...MONO,
    }}
  >
    {children}
  </button>
);

/* ────────────── Visual Placeholders ────────────── */

const VisualPanel = ({ caption, height = "min-h-[320px]" }: { caption: string; height?: string }) => (
  <div
    className={`relative overflow-hidden p-9 flex items-end justify-start ${height}`}
    style={{
      background: SURFACE,
      border: `1px dashed ${ACCENT}55`,
    }}
  >
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(168,85,247,0.08) 0%, transparent 70%)",
      }}
    />
    <p className="relative text-[11px] leading-snug max-w-full" style={{ color: ACCENT_BRIGHT, ...MONO }}>
      🖼️ {caption}
    </p>
  </div>
);

/* ────────────── Hero score-card mockup placeholder ────────────── */

const HeroVisualPlaceholder = () => (
  <div className="relative w-full max-w-[480px] ml-auto">
    <img
      src={painpointAVorherNachher}
      alt="Vorher: unstrukturierte PDF-Bewerbungen — Nachher: strukturiertes KI-Scoring-Dashboard"
      className="w-full h-auto"
      style={{ border: `1px solid ${BORDER}` }}
    />
  </div>
);

const HeroVisualPlaceholderOld = () => (
  <div className="relative w-full max-w-[340px] scale-[0.85] origin-top-right md:scale-90">
    {/* floating chips */}
    <div
      className="absolute -top-4 left-2.5 px-3.5 py-2 text-[0.75rem] flex items-center gap-1.5 whitespace-nowrap animate-[float_3s_ease-in-out_infinite]"
      style={{ background: SURFACE_2, border: `1px solid ${BORDER}`, color: "#888", ...MONO }}
    >
      <span className="w-[7px] h-[7px] rounded-full" style={{ background: ACCENT_BRIGHT }} />
      87 Bewerbungen eingegangen
    </div>
    <div
      className="absolute top-10 -right-5 px-3.5 py-2 text-[0.75rem] flex items-center gap-1.5 whitespace-nowrap animate-[float_3s_ease-in-out_infinite]"
      style={{ background: SURFACE_2, border: `1px solid ${BORDER}`, color: "#888", animationDelay: "0.7s", ...MONO }}
    >
      <span className="w-[7px] h-[7px] rounded-full" style={{ background: ACCENT_BRIGHT }} />
      Jury: 6/6 abgeschlossen
    </div>
    <div
      className="absolute bottom-8 -left-4 px-3.5 py-2 text-[0.75rem] flex items-center gap-1.5 whitespace-nowrap animate-[float_3s_ease-in-out_infinite]"
      style={{ background: SURFACE_2, border: `1px solid ${BORDER}`, color: "#888", animationDelay: "1.4s", ...MONO }}
    >
      <span className="w-[7px] h-[7px] rounded-full" style={{ background: ACCENT_BRIGHT }} />
      Bericht generiert ✓
    </div>

    {/* score card mock */}
    <div
      className="relative p-7 w-full max-w-[420px] mx-auto"
      style={{
        background: SURFACE,
        border: `1px solid ${BORDER}`,
        boxShadow: "0 0 60px rgba(168,85,247,0.12), 0 32px 64px rgba(0,0,0,0.4)",
      }}
    >
      <div className="flex items-center justify-between mb-5">
        <span className="text-[0.875rem]" style={SERIF}>Bewerbung #42 — Scoring</span>
        <span
          className="text-[0.7rem] font-semibold px-2.5 py-1"
          style={{ background: TABLE_HIGHLIGHT, color: ACCENT_BRIGHT, border: `1px solid ${ACCENT}55`, ...MONO }}
        >
          FINAL
        </span>
      </div>

      <div className="flex flex-col gap-3 mb-5">
        {[
          ["Innovation", 84, "8.4 / 10"],
          ["Nachhaltigkeit", 79, "7.9 / 10"],
          ["Marktpotenzial", 91, "9.1 / 10"],
          ["Umsetzung", 72, "7.2 / 10"],
        ].map(([label, w, val]) => (
          <div key={label as string} className="flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <span className="text-[0.8rem]" style={{ color: "#888", ...MONO }}>{label}</span>
              <span className="text-[0.8rem] font-semibold text-white" style={MONO}>{val}</span>
            </div>
            <div className="h-1.5 overflow-hidden" style={{ background: SURFACE_2 }}>
              <div
                className="h-full"
                style={{ width: `${w}%`, background: `linear-gradient(90deg, ${ACCENT_DARK}, ${ACCENT_BRIGHT})` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="h-px my-4" style={{ background: BORDER }} />

      <div className="flex flex-col gap-2 mb-4">
        {[
          { name: "M. Kuhn", initials: "MK", filled: 4, color: ACCENT_DARK },
          { name: "T. Schmidt", initials: "TS", filled: 3, color: "#1a4a6b" },
          { name: "L. Weiss", initials: "LW", filled: 5, color: ACCENT },
        ].map((j) => (
          <div key={j.name} className="flex items-center gap-2.5">
            <div
              className="w-[26px] h-[26px] rounded-full flex items-center justify-center text-[0.65rem] font-bold text-white"
              style={{ background: j.color }}
            >
              {j.initials}
            </div>
            <span className="text-[0.8rem] flex-1" style={{ color: "#888", ...MONO }}>{j.name}</span>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="w-[22px] h-2"
                  style={{ background: i < j.filled ? ACCENT : BORDER }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between p-3" style={{ background: SURFACE_2 }}>
        <span className="text-[0.8rem]" style={{ color: "#888", ...MONO }}>Gesamtscore</span>
        <span className="text-[1.5rem] font-bold" style={{ color: ACCENT_BRIGHT, ...SERIF }}>8.15</span>
      </div>

      {/* 🖼️ Hero Visual Slot: Animiertes Scoring-Dashboard (Mock-Daten) — später ersetzen */}
    </div>
  </div>
);

/* ────────────── FAQ accordion ────────────── */

const FAQItem = ({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="overflow-hidden border-b" style={{ borderColor: BORDER }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-5 px-1 text-left text-[0.9375rem] font-medium hover:opacity-80 transition-colors gap-4"
        style={{ color: open ? ACCENT_BRIGHT : "#fff", ...MONO }}
      >
        <span>{q}</span>
        <span
          className={`shrink-0 w-[22px] h-[22px] flex items-center justify-center text-[0.7rem] transition-all ${open ? "rotate-45" : ""}`}
          style={{
            border: `1px solid ${open ? ACCENT : BORDER}`,
            background: open ? TABLE_HIGHLIGHT : "transparent",
            color: open ? ACCENT_BRIGHT : "#888",
          }}
        >
          <Plus className="w-3 h-3" />
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "400px" : "0px" }}
      >
        <div className="px-1 pb-5 text-[0.9rem] leading-[1.7]" style={{ color: "#888", ...MONO }}>
          {a}
        </div>
      </div>
    </div>
  );
};

/* ────────────── Reveal hook ────────────── */

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
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

/* ────────────── PAGE ────────────── */

const PainPointAuswahlverfahren = () => {
  const [, setContactOpen] = useState(false);

  const integrations = [
    { name: "Microsoft Teams", icon: "💬" },
    { name: "SharePoint", icon: "🗂" },
    { name: "Outlook", icon: "📧" },
    { name: "HubSpot", icon: "🧲" },
    { name: "Zapier", icon: "⚡" },
    { name: "Make", icon: "🔧" },
    { name: "Notion", icon: "📝" },
    { name: "Google Workspace", icon: "🌐" },
    { name: "SAP", icon: "🏢" },
  ];

  const compareRows = [
    ["Bewerbungseingang", "✅ Strukturiert & automatisch", "❌ PDFs, Mails, verschiedene Formate"],
    ["Jury-Koordination", "✅ Vollautomatisiert", "❌ Endlose E-Mail-Threads"],
    ["Vergleichbarkeit", "✅ Einheitliches Kategoriensystem", "❌ Keine einheitliche Basis"],
    ["Entscheidungsdoku", "✅ Revisionssicher & automatisch", "❌ Existiert kaum"],
    ["Wissen nach Zyklus", "✅ Persistente Datenbasis", "❌ Geht jedes Jahr verloren"],
    ["Analysen", "✅ Automatisch generiert", "❌ Nicht vorhanden"],
    ["Kosten", "✅ Planbar & skalierbar", "❌ 60–80k€ pro Zyklus"],
  ];

  const featureCards = [
    { icon: "🤖", title: "KI Bewerbungsanalyse", desc: "Jede Einreichung wird automatisch analysiert, kategorisiert und für die Jury aufbereitet." },
    { icon: "⚙️", title: "Automatisierte Jury-Koordination", desc: "Briefings, Reminder, Deadlines — läuft automatisch. Euer Team fokussiert sich auf Entscheidungen." },
    { icon: "📊", title: "Analysen & Insights", desc: "Aus jedem Zyklus entstehen automatisch Muster und Trends — die den nächsten Prozess verbessern." },
  ];

  const testimonials = [
    { name: "BMP Award", role: "Projektleitung", quote: "Was früher 60.000€ und drei Monate Aufwand war, läuft jetzt automatisch.", initials: "BA" },
    { name: "Award-Org", role: "Geschäftsführung", quote: "Endlich vergleichbare Bewertungen über alle Jury-Mitglieder hinweg.", initials: "AO" },
    { name: "Förderinstitut", role: "Vorstand", quote: "Revisionssicher, schnell, transparent — genau das, was wir brauchten.", initials: "FI" },
    { name: "Verband", role: "Leitung Awards", quote: "Die Jury-Koordination läuft seit New Edge wirklich von selbst.", initials: "VB" },
    { name: "Accelerator", role: "Programm-Director", quote: "Datenbasierte Auswahl statt Bauchgefühl — endlich messbar.", initials: "AC" },
    { name: "Stiftung", role: "Geschäftsstelle", quote: "Persistente Datenbasis bedeutet: kein Wissensverlust mehr.", initials: "ST" },
    { name: "IHK", role: "Award-Verantwortlich", quote: "Implementierung in 3 Wochen, ROI im ersten Zyklus.", initials: "IH" },
    { name: "Forschung", role: "Programm-Leitung", quote: "Aus dem Auswahlprozess wurde eine echte Forschungsplattform.", initials: "FR" },
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
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }
        `}</style>
      </Helmet>

      <div className="min-h-screen text-white overflow-x-hidden" style={{ background: "#0a0a0a", ...MONO }}>
        <MobileNavigation onContactClick={() => setContactOpen(true)} theme="dark" />

        {/* SECTION 1 — HERO (Dapta-Layout, 1-Viewport: Text+Visual oben, Logos im Fold) */}
        <section
          className="relative overflow-hidden flex flex-col"
          style={{
            minHeight: "100dvh",
            background:
              "radial-gradient(ellipse 70% 55% at 18% 35%, rgba(168,85,247,0.20) 0%, transparent 60%), #0a0a0a",
          }}
        >
          {/* Top: Text links, Visual rechts */}
          <div className="flex-1 flex items-center">
            <div className="max-w-[1280px] w-full mx-auto px-6 lg:px-10 pt-20 md:pt-20 pb-4 grid md:grid-cols-2 gap-6 lg:gap-10 items-center">
              <Reveal>
                <p
                  className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] mb-5"
                  style={{ color: ACCENT_BRIGHT, ...MONO }}
                >
                  KI-AUTOMATISIERUNG FÜR AUSWAHLVERFAHREN
                </p>
                <h1
                  className="text-[clamp(1.75rem,3.2vw,2.75rem)] leading-[1.08] mb-5"
                  style={{ ...SERIF, letterSpacing: "-0.02em" }}
                >
                  Auswahlverfahren automatisieren —<br />
                  <span style={{ color: ACCENT_BRIGHT }}>
                    KI-gestützte Bewertungssysteme für Jurys
                  </span>
                </h1>
                <p className="text-[0.95rem] leading-[1.6] mb-6 max-w-[520px]" style={{ color: "#9a9a9a" }}>
                  Unstrukturierte Bewerbungen, überlastete Jurys, verlorenes Wissen. New Edge strukturiert euren
                  gesamten Auswahlprozess — von der ersten Einreichung bis zur revisionssicheren Entscheidung.
                </p>
                <div className="flex gap-3 flex-wrap">
                  <BtnFilled onClick={() => setContactOpen(true)}>Demo buchen</BtnFilled>
                  <BtnGhost>Case Study — BMP Award</BtnGhost>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="flex justify-center md:justify-end">
                  <HeroVisualPlaceholder />
                </div>
              </Reveal>
            </div>
          </div>

          {/* Bottom: Trust-Headline + Logo-Marquee (immer im 1. Viewport sichtbar) */}
          <div className="shrink-0 pb-6 md:pb-8">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
              <p
                className="text-center text-[1.25rem] md:text-[1.5rem] mb-1"
                style={{ ...SERIF, color: "#fff" }}
              >
                Vertraut von führenden Organisationen in Deutschland
              </p>
              <p className="text-center text-[0.78rem] mb-4" style={{ color: "#888" }}>
                Reale Ergebnisse aus Auswahlprozessen wie eurem
              </p>
              <div className="overflow-hidden" style={{ borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
                <div className="flex w-max py-4" style={{ animation: "marquee 28s linear infinite" }}>
                  {[...Array(2)].flatMap((_, dup) =>
                    ["BMP Award", "Stiftung", "Förderinstitut", "Verband", "IHK", "Accelerator", "Forschungsinstitut"].map((name, i) => (
                      <div
                        key={`hero-${dup}-${i}`}
                        className="flex items-center gap-2.5 px-8 text-[0.95rem] font-semibold whitespace-nowrap"
                        style={{ color: "#888", ...SERIF }}
                      >
                        <span>{name}</span>
                        <span style={{ color: BORDER }}>•</span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
        </section>

        {/* ──────────── LIGHT THEME SCOPE (alles unter dem Hero) ──────────── */}
        <div className="light-scope" style={{ background: "#ffffff", color: "#0a0a0a" }}>
          <style>{`
            .light-scope { color: #0a0a0a; }
            /* Backgrounds: dunkle Surfaces → helle Surfaces */
            .light-scope [style*="background: rgb(20, 20, 20)"],
            .light-scope [style*="background:#141414"],
            .light-scope [style*="background: #141414"] { background: #f6f6f7 !important; }
            .light-scope [style*="background: rgb(30, 30, 30)"],
            .light-scope [style*="background:#1e1e1e"],
            .light-scope [style*="background: #1e1e1e"] { background: #efefef !important; }
            .light-scope [style*="background: rgb(10, 10, 10)"],
            .light-scope [style*="background:#0a0a0a"],
            .light-scope [style*="background: #0a0a0a"] { background: #ffffff !important; }
            /* Borders: dunkles #252525 → hell */
            .light-scope [style*="rgb(37, 37, 37)"],
            .light-scope [style*="#252525"] { border-color: #e5e7eb !important; }
            /* Muted-Text #888 / #bbb / #9a9a9a → dunkler */
            .light-scope [style*="color: rgb(136, 136, 136)"],
            .light-scope [style*="color:#888"],
            .light-scope [style*="color: #888"] { color: #6b7280 !important; }
            .light-scope [style*="color: rgb(154, 154, 154)"],
            .light-scope [style*="color:#9a9a9a"],
            .light-scope [style*="color: #9a9a9a"] { color: #6b7280 !important; }
            .light-scope [style*="color: rgb(187, 187, 187)"],
            .light-scope [style*="color:#bbb"],
            .light-scope [style*="color: #bbb"] { color: #4b5563 !important; }
            /* Weißer Standard-Text → schwarz */
            .light-scope .text-white { color: #0a0a0a !important; }
            .light-scope [style*="color: rgb(255, 255, 255)"],
            .light-scope [style*="color:#fff"],
            .light-scope [style*="color: #fff"] { color: #0a0a0a !important; }
            /* Subtile dark-row backgrounds in Tabelle (rgba weiß) */
            .light-scope [style*="rgba(255,255,255,0.025)"] { background: rgba(0,0,0,0.025) !important; }
            .light-scope [style*="rgba(255,255,255,0.01)"] { background: rgba(0,0,0,0.01) !important; }
            /* Closing CTA: dunkles SURFACE → sehr helles, lila Glow bleibt */
          `}</style>

        {/* SECTION 2 — DEFINITION (crawl-priorisiert, jetzt unter Hero) */}
        <section className="pt-16 md:pt-20 pb-0">
          <div className="max-w-[800px] mx-auto px-6 lg:px-8">
            <div className="border-l-2 pl-5 py-2" style={{ borderColor: ACCENT }}>
              <p className="text-[0.7rem] uppercase tracking-[0.12em] mb-2" style={{ color: ACCENT_BRIGHT }}>
                Definition
              </p>
              <h2 className="text-lg md:text-xl mb-2" style={SERIF}>
                Was ist KI-gestützte Auswahlverfahren-Automatisierung?
              </h2>
              <p className="text-sm leading-[1.7]" style={{ color: "#888" }}>
                KI-gestützte Auswahlverfahren-Automatisierung ersetzt manuelle Bewerbungsverarbeitung durch
                strukturierte Datenerfassung, automatische Vollständigkeitsprüfung und ein operationalisiertes
                Jury-Bewertungssystem. Organisationen reduzieren den Prozessaufwand damit um bis zu 70% — bei
                revisionssicherer Entscheidungsdokumentation und nachweislich besserer Entscheidungsqualität.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2b — alte Marquee entfernt, Logo-Badge ist jetzt im Hero */}
        <section className="hidden">
          <p
            className="text-center text-[0.8rem] uppercase tracking-[0.06em] mb-7 font-medium"
            style={{ color: "#888" }}
          >
            Vertraut von führenden Organisationen in Deutschland
          </p>
          <div className="overflow-hidden">
            <div
              className="flex w-max"
              style={{ animation: "marquee 28s linear infinite" }}
            >
              {[...Array(2)].flatMap((_, dup) =>
                ["BMP Award", "Stiftung", "Förderinstitut", "Verband", "IHK", "Accelerator", "Forschungsinstitut"].map((name, i) => (
                  <div
                    key={`${dup}-${i}`}
                    className="flex items-center gap-2.5 px-10 text-[0.875rem] font-semibold whitespace-nowrap"
                    style={{ color: "#888", ...SERIF }}
                  >
                    <span>{name}</span>
                    <span style={{ color: BORDER }}>•</span>
                  </div>
                ))
              )}
            </div>
          </div>
          <p className="text-center mt-4 text-[10px]" style={{ color: ACCENT_BRIGHT + "99" }}>
            🖼️ Logo-Slot: monochrome SVG-Logos (BMP Award + weitere Referenzen) — später als Bilder ersetzen
          </p>
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
        </section>

        {/* SECTION 3 — FEATURE BLOCK 1 */}
        <Reveal>
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20 md:py-24 grid md:grid-cols-2 gap-12 lg:gap-[72px] items-center">
            <div>
              <img
                src={painpointASection3}
                alt="KI-gestützte Erfassung: PDF-Dokumente werden via Texterkennung, Klassifizierung, Strukturierung und Validierung in ein strukturiertes Projektdatenblatt überführt"
                loading="lazy"
                className="w-full h-auto"
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

        {/* SECTION 4 — FEATURE BLOCK 2 (flipped) */}
        <div style={{ background: SURFACE, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
          <Reveal>
            <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20 md:py-24 grid md:grid-cols-2 gap-12 lg:gap-[72px] items-center">
              <div className="md:order-2">
                <img
                  src={painpointAFeature2}
                  alt="3-Schritt-Prozess: PDFs hochladen → KI-Erfassung → Strukturiertes Ergebnis"
                  loading="lazy"
                  className="w-full h-auto"
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

        {/* SECTION 5 — FEATURE BLOCK 3 */}
        <Reveal>
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20 md:py-24 grid md:grid-cols-2 gap-12 lg:gap-[72px] items-center">
            <div>
              <VisualPanel caption="Heatmap-Grid 5×5 (Jurys × Kriterien) mit purple Intensitäten. Eine Zelle wird durch animierten Ring als 'Bias erkannt' markiert. Beschriftung K1–K5 / J1–J5." />
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

        {/* SECTION 6 — INTEGRATIONS */}
        <div style={{ background: SURFACE, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
          <Reveal>
            <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20 md:py-24">
              <div className="max-w-[600px]">
                <SectionLabel>Integrationen</SectionLabel>
                <SectionH2>Verbindet sich mit den Tools die ihr bereits nutzt</SectionH2>
                <SectionSub>
                  Kein neues System das alles ersetzt. New Edge integriert sich in eure bestehende Infrastruktur.
                </SectionSub>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-12">
                {integrations.map((it) => (
                  <div
                    key={it.name}
                    className="flex flex-col items-center gap-2.5 px-4 py-6 cursor-pointer transition-all hover:-translate-y-0.5"
                    style={{
                      background: SURFACE_2,
                      border: `1px solid ${BORDER}`,
                    }}
                  >
                    <div
                      className="w-11 h-11 flex items-center justify-center text-[1.25rem]"
                      style={{ background: SURFACE }}
                    >
                      {it.icon}
                    </div>
                    <span className="text-[0.8rem] font-semibold text-center" style={{ color: "#888" }}>
                      {it.name}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[10px]" style={{ color: ACCENT_BRIGHT + "99" }}>
                🖼️ Icon-Slot: echte Tool-Logos (mono-weiß SVG) ersetzen die Emoji-Platzhalter
              </p>
            </div>
          </Reveal>
        </div>

        {/* SECTION 7 — COMPARISON TABLE */}
        <Reveal>
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20 md:py-24">
            <div className="max-w-[600px]">
              <SectionLabel>Vergleich</SectionLabel>
              <SectionH2>New Edge vs. manueller Auswahlprozess</SectionH2>
            </div>

            <div className="mt-12 overflow-x-auto" style={{ border: `1px solid ${BORDER}` }}>
              <table className="w-full border-collapse min-w-[640px]">
                <thead>
                  <tr>
                    <th
                      className="text-left p-5 text-[0.875rem] font-bold w-[26%]"
                      style={{ background: SURFACE_2, color: "#888", borderBottom: `1px solid ${BORDER}`, ...SERIF }}
                    >
                      Kriterium
                    </th>
                    <th
                      className="text-left p-5 text-[0.875rem] font-bold w-[37%]"
                      style={{
                        background: TABLE_HIGHLIGHT,
                        color: ACCENT_BRIGHT,
                        borderBottom: `1px solid ${BORDER}`,
                        borderLeft: "1px solid rgba(168,85,247,0.2)",
                        ...SERIF,
                      }}
                    >
                      New Edge
                    </th>
                    <th
                      className="text-left p-5 text-[0.875rem] font-bold w-[37%]"
                      style={{
                        background: TABLE_DANGER,
                        color: "#ff8080",
                        borderBottom: `1px solid ${BORDER}`,
                        borderLeft: "1px solid rgba(80,20,20,0.5)",
                        ...SERIF,
                      }}
                    >
                      Manuell
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map(([k, ne, ma], i) => (
                    <tr key={i} style={{ background: i % 2 ? "rgba(255,255,255,0.025)" : "rgba(255,255,255,0.01)" }}>
                      <td className="p-4 text-[0.875rem] font-medium" style={{ color: "#888", borderBottom: i === compareRows.length - 1 ? "none" : `1px solid ${BORDER}` }}>
                        {k}
                      </td>
                      <td
                        className="p-4 text-[0.875rem]"
                        style={{
                          color: ACCENT_BRIGHT,
                          borderLeft: "1px solid rgba(168,85,247,0.1)",
                          borderBottom: i === compareRows.length - 1 ? "none" : `1px solid ${BORDER}`,
                        }}
                      >
                        {ne}
                      </td>
                      <td
                        className="p-4 text-[0.875rem]"
                        style={{
                          color: "#cc6060",
                          borderLeft: "1px solid rgba(80,20,20,0.3)",
                          borderBottom: i === compareRows.length - 1 ? "none" : `1px solid ${BORDER}`,
                        }}
                      >
                        {ma}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        {/* SECTION 8 — FEATURE CARDS */}
        <div style={{ background: SURFACE, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
          <Reveal>
            <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20 md:py-24">
              <div className="text-center max-w-[600px] mx-auto">
                <SectionLabel>Kernfunktionen</SectionLabel>
                <SectionH2 className="!mb-0">KI die qualifiziert, koordiniert und entscheidet.</SectionH2>
              </div>

              <div className="grid md:grid-cols-3 gap-5 mt-12">
                {featureCards.map((c) => (
                  <div
                    key={c.title}
                    className="p-8 transition-all hover:-translate-y-1"
                    style={{ background: "#0a0a0a", border: `1px solid ${BORDER}` }}
                  >
                    <div
                      className="w-12 h-12 flex items-center justify-center text-[1.4rem] mb-5"
                      style={{ background: TABLE_HIGHLIGHT }}
                    >
                      {c.icon}
                    </div>
                    <h3 className="text-[1.1rem] font-bold mb-2.5" style={{ ...SERIF, letterSpacing: "-0.02em" }}>
                      {c.title}
                    </h3>
                    <p className="text-[0.9rem] leading-[1.65]" style={{ color: "#888" }}>
                      {c.desc}
                    </p>
                    <p className="mt-3 text-[10px]" style={{ color: ACCENT_BRIGHT + "99" }}>
                      🖼️ Icon-Slot: animiertes SVG ersetzen
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* SECTION 9 — TESTIMONIAL HERO */}
        <div style={{ background: SURFACE, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
          <div className="max-w-[800px] mx-auto px-6 lg:px-8 py-20 md:py-24 text-center">
            <div className="text-[5rem] leading-[0.6] mb-6 opacity-40" style={{ color: ACCENT, ...SERIF }}>
              „
            </div>
            <p
              className="text-[clamp(1.2rem,2.5vw,1.6rem)] font-semibold leading-[1.5] mb-8"
              style={{ ...SERIF, letterSpacing: "-0.02em" }}
            >
              New Edge hat unseren gesamten Auswahlprozess transformiert. Was früher 60.000€ und drei Monate Aufwand
              war, läuft jetzt automatisch — und die Qualität unserer Entscheidungen ist nachweislich besser.
            </p>
            <div className="flex items-center justify-center gap-2.5 text-[0.875rem]" style={{ color: "#888" }}>
              <span className="block h-px w-10" style={{ background: BORDER }} />
              BMP Award — Projektleitung
              <span className="block h-px w-10" style={{ background: BORDER }} />
            </div>
          </div>
        </div>

        {/* SECTION 10 — TESTIMONIAL GRID */}
        <Reveal>
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20 md:py-24">
            <div className="text-center max-w-[600px] mx-auto mb-12">
              <SectionLabel>Stimmen</SectionLabel>
              <SectionH2 className="!mb-0">Was Organisationen über New Edge sagen</SectionH2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {testimonials.map((t, i) => (
                <div key={i} className="p-6" style={{ background: SURFACE, border: `1px solid ${BORDER}` }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 flex items-center justify-center text-sm font-bold text-white"
                      style={{ background: ACCENT }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm text-white" style={SERIF}>{t.name}</p>
                      <p className="text-[11px]" style={{ color: "#888" }}>{t.role}</p>
                    </div>
                  </div>
                  <p className="text-[0.875rem] leading-[1.65]" style={{ color: "#bbb" }}>
                    „{t.quote}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* SECTION 11 — FAQ */}
        <Reveal>
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20 md:py-24">
            <div className="grid md:grid-cols-[1fr,1.5fr] gap-12 md:gap-[72px] items-start">
              <div>
                <SectionLabel>FAQ</SectionLabel>
                <h2
                  className="text-[clamp(1.5rem,2.5vw,2.2rem)] mb-6"
                  style={{ ...SERIF, letterSpacing: "-0.02em" }}
                >
                  Du hast Fragen?<br />
                  <span style={{ color: ACCENT_BRIGHT }}>Wir haben Antworten.</span>
                </h2>
                <Link to="/kontakt">
                  <BtnFilled large>Kontakt aufnehmen</BtnFilled>
                </Link>
              </div>
              <div className="flex flex-col" style={{ borderTop: `1px solid ${BORDER}` }}>
                {faqs.map((f, i) => (
                  <FAQItem key={i} q={f.q} a={f.a} defaultOpen={i === 0} />
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* SECTION 12 — CLOSING CTA */}
        <div className="relative overflow-hidden" style={{ background: SURFACE, borderTop: `1px solid ${BORDER}` }}>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(168,85,247,0.18) 0%, rgba(168,85,247,0.05) 35%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <div className="max-w-[800px] mx-auto px-6 lg:px-8 py-24 md:py-32 text-center relative z-10">
            <h2
              className="text-[clamp(1.8rem,4vw,3rem)] leading-[1.15] mb-5"
              style={{ ...SERIF, letterSpacing: "-0.02em" }}
            >
              Hört auf, jedes Jahr dasselbe<br />
              <span style={{ color: ACCENT_BRIGHT }}>Wissen neu zu erzeugen.</span>
            </h2>
            <p className="text-[1.05rem] leading-[1.65] mb-10" style={{ color: "#888" }}>
              Euer nächster Zyklus kann der erste sein, der wirklich skaliert.
            </p>
            <div className="flex gap-3.5 justify-center flex-wrap">
              <BtnFilled large onClick={() => setContactOpen(true)}>Demo buchen</BtnFilled>
              <BtnGhost large>Case Study herunterladen</BtnGhost>
            </div>
            <p className="mt-10 text-[10px]" style={{ color: ACCENT_BRIGHT + "99" }}>
              🖼️ Background-Slot: Subtile Partikel-Animation (Datenpunkte verbinden sich zu Netzwerk) — Purple CI
            </p>
          </div>
        </div>

        </div>
        {/* ──────────── /LIGHT THEME SCOPE ──────────── */}

        <Suspense fallback={<div className="min-h-[200px]" />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default PainPointAuswahlverfahren;
