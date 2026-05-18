import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight, X,
  Compass, Sparkles, Layers, Settings2,
  Radio, Network, Cpu, Eye,
  Workflow, Brain,
  Server, Database, ShieldCheck, Wallet,
  LayoutGrid, Target, BarChart3, Plug,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";
import { useMagnetic, useMouseParallax } from "@/hooks/useMagnetic";
import foundersImg from "@/assets/founders-color.webp";
import { FloatingConsultButton } from "@/components/ui/FloatingConsultButton";

// ─── Design tokens ────────────────────────────────────────────────────────────
const VIOLET = "#5B21B6";
const VIOLET_GLOW = "#9F7AEA";
const INK_DEEP = "#1A0A2E";
const INK = "#3A3A3A";
const PAPER_PURE = "#FFFFFF";
const GRID_LINE = "rgba(26,10,46,0.10)";

const EASE = [0.22, 1, 0.36, 1] as const;

const MONO: React.CSSProperties = {
  fontFamily: "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace",
};
const SERIF: React.CSSProperties = {
  fontFamily: "'DM Serif Display', Georgia, serif",
};

// ─── Service data ─────────────────────────────────────────────────────────────
type Deliverable = { icon: LucideIcon; label: string };

type Service = {
  index: string;
  total: string;
  layer: "STRATEGIE-LAYER" | "BUILD-LAYER";
  studio: string;
  title: string;
  desc: string;
  problem?: string;
  solution?: string;
  deliverables: Deliverable[];
  link: string;
};

const services: Service[] = [
  {
    index: "01",
    total: "05",
    layer: "STRATEGIE-LAYER",
    studio: "Studio",
    title: "Systemstrategie für Marke, Daten & KI",
    desc: "Wir entwickeln die Entscheidungs- und Systemlogik Ihres Unternehmens — KI-Strategie, Markenstrategie und Datenstrategie als ein integriertes System.",
    problem: "Unklare Markenlogik und inkonsistente Kommunikation führen zu Reibung und nicht anschlussfähigen Systemen.",
    solution: "Wir entwickeln eine Markenidentität, die als funktionale Grundlage für Websites, Software und KI‑Systeme dient.",
    deliverables: [
      { icon: Compass,    label: "Marke als Entscheidungsgrundlage" },
      { icon: Sparkles,   label: "Differenzierung mit operativer Wirkung" },
      { icon: Layers,     label: "Konsistenz ohne Reibungsverluste" },
      { icon: Settings2,  label: "Intern weiterentwickelbares Brand System" },
    ],
    link: "/studio",
  },
  {
    index: "02",
    total: "05",
    layer: "STRATEGIE-LAYER",
    studio: "Studio",
    title: "Kommunikations- & Sichtbarkeitsarchitektur",
    desc: "Wir übersetzen die definierte Systemlogik in sichtbare Kommunikation — kanalübergreifend, konsistent, messbar.",
    problem: "Digitale Kommunikation entsteht oft isoliert und ohne Verbindung zu Systemen, Vertrieb oder Automatisierung.",
    solution: "Wir definieren eine strukturelle Kommunikationslogik, die als Grundlage für Websites, Plattformen und Systeme dient.",
    deliverables: [
      { icon: Radio,    label: "Klare Rolle jedes Kanals" },
      { icon: Network,  label: "Durchgängige Markenlogik über alle Touchpoints" },
      { icon: Cpu,      label: "Anschlussfähigkeit für Automatisierung & KI" },
      { icon: Eye,      label: "Sichtbarkeit unter eigener Kontrolle" },
    ],
    link: "/studio",
  },
  {
    index: "03",
    total: "05",
    layer: "BUILD-LAYER",
    studio: "Studio",
    title: "AI- & Automation Systems",
    desc: "Wir automatisieren operative Aufgaben end-to-end — von der Prozessanalyse bis zum produktiven KI-Workflow.",
    problem: "Viele operative Aufgaben sind repetitiv, manuell und über mehrere Tools verteilt. Das führt zu hohem Zeitaufwand, Fehleranfälligkeit, Medienbrüchen und fehlender Skalierbarkeit.",
    solution: "Wir automatisieren operative Aufgaben und Prozesse end-to-end – pragmatisch, stabil und skalierbar. Dabei setzen wir dort KI ein, wo sie einen echten Mehrwert bringt, und kombinieren sie mit klassischen Automationen.",
    deliverables: [
      { icon: Workflow, label: "Operative Entlastung durch End-to-End-Workflows" },
      { icon: Layers,   label: "Skalierbare Prozesslogik statt Tool-Flickwerk" },
      { icon: Brain,    label: "KI dort, wo sie echten Hebel hat" },
      { icon: Eye,      label: "Transparenz & Kontrolle über Ergebnisse" },
    ],
    link: "/lab",
  },
  {
    index: "04",
    total: "05",
    layer: "BUILD-LAYER",
    studio: "Studio",
    title: "Internal Systems & Ownership",
    desc: "Eigene Systeme, eigene Daten, eigene KI — wir bauen interne Tools, die Ihnen gehören und skalieren.",
    problem: "SaaS-Stacks und externe KI-APIs erzeugen Abhängigkeiten, steigende Kosten und fragmentierte Datenlandschaften. Unternehmen verlieren Kontrolle über sensible Daten und Prozesse.",
    solution: "Wir bauen interne Systeme, die Software, Daten und KI unter eine gemeinsame, kontrollierbare Architektur bringen – inklusive eigener LLM- und GPU-Infrastruktur.",
    deliverables: [
      { icon: Server,       label: "Eigene Systeme statt SaaS-Abhängigkeit" },
      { icon: Database,     label: "Datenhoheit als Grundlage" },
      { icon: ShieldCheck,  label: "Interne KI für sensible Bereiche" },
      { icon: Wallet,       label: "Planbare Kosten & Unabhängigkeit" },
    ],
    link: "/lab",
  },
  {
    index: "05",
    total: "05",
    layer: "BUILD-LAYER",
    studio: "Studio",
    title: "Web & Platform Architecture",
    desc: "Websites als funktionale Knotenpunkte Ihres Systems — performant, modular, nahtlos integriert.",
    problem: "Websites sind oft isolierte Marketingflächen ohne Verbindung zu Systemen oder Automatisierung.",
    solution: "Wir bauen Websites als funktionale Knotenpunkte innerhalb der Systemarchitektur – skalierbar, integriert und wartbar.",
    deliverables: [
      { icon: LayoutGrid, label: "Plattform statt Website" },
      { icon: Target,     label: "Conversion durch Struktur, nicht durch Hacks" },
      { icon: BarChart3,  label: "Messbarkeit als Standard" },
      { icon: Plug,       label: "Direkte Anschlussfähigkeit an Systeme" },
    ],
    link: "/lab",
  },
];

// ─── Booking CTA with portrait ────────────────────────────────────────────────
const BookingCTA: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  const [leaving, setLeaving] = useState(false);

  return (
    <a
      href="https://calendly.com/sebastian-p-newedgebrand/30min"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "relative",
        overflow: "hidden",
        display: "inline-flex",
        alignItems: "center",
        gap: "16px",
        padding: "14px 20px 14px 14px",
        border: `1.5px solid rgba(26,10,46,0.15)`,
        backgroundColor: PAPER_PURE,
        textDecoration: "none",
        boxShadow: `0 2px 12px rgba(26,10,46,0.06)`,
      }}
      onMouseEnter={() => { setLeaving(false); setHovered(true); }}
      onMouseLeave={() => { setLeaving(true); setHovered(false); }}
    >
      {/* Sweep overlay */}
      <motion.span
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: VIOLET,
          transformOrigin: leaving ? "50% 0%" : "50% 100%",
          pointerEvents: "none",
          zIndex: 0,
        }}
        animate={{ scaleY: hovered ? 1 : 0 }}
        transition={{ duration: 0.58, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Portrait */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          overflow: "hidden",
          flexShrink: 0,
          border: `2.5px solid rgba(91,33,182,0.20)`,
        }}
      >
        <img
          src={foundersImg}
          alt="Sebastian Pachon"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "25% 20%", display: "block" }}
        />
      </div>

      {/* Text */}
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: "3px" }}>
        <motion.span
          animate={{ color: hovered ? "rgba(255,255,255,0.60)" : "rgba(26,10,46,0.40)" }}
          transition={{ duration: 0.18 }}
          style={{ ...MONO, fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase" as const }}
        >
          Kostenloses Erstgespräch
        </motion.span>
        <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
          <motion.span
            animate={{ color: hovered ? PAPER_PURE : INK_DEEP }}
            transition={{ duration: 0.18 }}
            style={{ ...SERIF, fontStyle: "italic", fontSize: "clamp(1rem, 1.4vw, 1.2rem)", letterSpacing: "-0.01em", lineHeight: 1.1 }}
          >
            Mit Sebastian buchen
          </motion.span>
          <motion.span
            animate={{ color: hovered ? "rgba(255,255,255,0.80)" : VIOLET, x: hovered ? 2 : 0, y: hovered ? -2 : 0 }}
            transition={{ duration: 0.22 }}
          >
            <ArrowUpRight style={{ width: "14px", height: "14px", flexShrink: 0 }} strokeWidth={2} />
          </motion.span>
        </span>
        <motion.span
          animate={{ color: hovered ? "rgba(255,255,255,0.50)" : "rgba(26,10,46,0.35)" }}
          transition={{ duration: 0.18 }}
          style={{ ...MONO, fontSize: "10px", letterSpacing: "0.1em" }}
        >
          Unverbindlich · 30 min
        </motion.span>
      </div>
    </a>
  );
};

// ─── Magnetic CTA wrapper ─────────────────────────────────────────────────────
const MagneticCTA: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  const mag = useMagnetic<HTMLDivElement>(0.35, 10);
  return (
    <motion.div
      ref={mag.ref}
      style={{ x: mag.x, y: mag.y, display: "inline-block" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ─── Service Cell ─────────────────────────────────────────────────────────────
type ServiceCellProps = {
  service: Service;
  delay: number;
  className?: string;
};

const DARK_VIOLET = "#2D0F6B";
const VIOLET_GRADIENT = "linear-gradient(135deg, #2D0F6B 0%, #5B21B6 55%, #3B1178 100%)";

// ─── Problem / Solution hover block ───────────────────────────────────────────
const ProblemSolution: React.FC<{ problem: string; solution: string }> = ({ problem, solution }) => (
  <>
    <div style={{ marginBottom: "11px" }}>
      <p style={{ ...MONO, fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: VIOLET_GLOW, marginBottom: "4px" }}>
        Das Problem
      </p>
      <p style={{ ...MONO, fontSize: "13px", lineHeight: 1.5, color: "rgba(255,255,255,0.82)" }}>
        {problem}
      </p>
    </div>
    <div>
      <p style={{ ...MONO, fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: VIOLET_GLOW, marginBottom: "4px" }}>
        Unsere Lösung
      </p>
      <p style={{ ...MONO, fontSize: "13px", lineHeight: 1.5, color: "rgba(255,255,255,0.82)" }}>
        {solution}
      </p>
    </div>
  </>
);

const ServiceCell = ({ service, delay, className = "" }: ServiceCellProps) => {
  const cellRef = useRef<HTMLDivElement>(null);
  const parallax = useMouseParallax<HTMLDivElement>(12);
  const [hovered, setHovered] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [bubbleOpen, setBubbleOpen] = useState(false);
  const [bubbleLeaving, setBubbleLeaving] = useState(false);

  // Close bubble on scroll away
  React.useEffect(() => {
    const el = cellRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && bubbleOpen) {
          setBubbleLeaving(true);
          setBubbleOpen(false);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [bubbleOpen]);

  const closeBubble = () => { setBubbleLeaving(true); setBubbleOpen(false); };
  const openBubble = (e: React.MouseEvent) => {
    e.preventDefault(); e.stopPropagation();
    setBubbleLeaving(false); setBubbleOpen(true);
  };

  return (
    <motion.div
      ref={(node) => {
        (parallax.ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        (cellRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: EASE, delay }}
      className={`relative overflow-hidden ${className}`}
      style={{ backgroundColor: PAPER_PURE }}
      onHoverStart={() => { setLeaving(false); setHovered(true); }}
      onHoverEnd={() => { setLeaving(true); setHovered(false); }}
    >
      {/* Edge-cascade deco — all services, "/" diagonal band, white on hover */}
      <motion.div
        aria-hidden
        animate={{ color: hovered && !bubbleOpen ? "rgba(255,255,255,1)" : "rgba(91,33,182,1)" }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 2,
          WebkitMaskImage: "linear-gradient(45deg, transparent 35%, black 55%, black 78%, transparent 95%)",
          maskImage: "linear-gradient(45deg, transparent 35%, black 55%, black 78%, transparent 95%)",
        }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id={`deco-diag-${service.index}`}
              width="22" height="22"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(-45)"
            >
              <path d="M-5 7 L0 2 L5 7" fill="none" stroke="currentColor" strokeOpacity="0.13" strokeWidth="1.6" strokeLinecap="square" strokeLinejoin="miter"/>
              <path d="M-5 18 L0 13 L5 18" fill="none" stroke="currentColor" strokeOpacity="0.13" strokeWidth="1.6" strokeLinecap="square" strokeLinejoin="miter"/>
              <line x1="0" y1="2" x2="0" y2="13" stroke="currentColor" strokeOpacity="0.07" strokeWidth="0.9"/>
              <path d="M8 12.5 L11 9.5 L14 12.5" fill="none" stroke="currentColor" strokeOpacity="0.08" strokeWidth="1.1" strokeLinecap="square" strokeLinejoin="miter"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#deco-diag-${service.index})`}/>
        </svg>
      </motion.div>

      {/* Dark violet sweep */}
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundColor: DARK_VIOLET,
          transformOrigin: leaving ? "50% 0%" : "50% 100%",
          zIndex: 1,
        }}
        animate={{ scaleY: hovered && !bubbleOpen ? 1 : 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Card content — fixed layout, nothing shifts */}
      <div className="relative z-10 flex flex-col p-5 lg:p-7" style={{ minHeight: 220 }}>
        {/* Title */}
        <motion.h3
          animate={{ color: hovered && !bubbleOpen ? "#ffffff" : INK_DEEP }}
          transition={{ duration: 0.15 }}
          style={{ ...SERIF, fontStyle: "italic", fontSize: "clamp(1.1rem, 1.6vw, 1.4rem)", lineHeight: 1.15, letterSpacing: "-0.01em", marginBottom: "14px" }}
        >
          {service.title}
        </motion.h3>

        {/* Body: absolutely positioned so swap never changes card height */}
        <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
          <AnimatePresence mode="wait" initial={false}>
            {hovered && !bubbleOpen && service.problem && service.solution ? (
              <motion.div
                key="prob-sol"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3, ease: EASE }}
                style={{ position: "absolute", inset: 0, overflow: "hidden" }}
              >
                <ProblemSolution problem={service.problem} solution={service.solution} />
              </motion.div>
            ) : (
              <motion.p
                key="desc"
                initial={{ opacity: 0, y: 6 }}
                animate={{
                  opacity: 1, y: 0,
                  color: hovered && !bubbleOpen ? "rgba(255,255,255,0.80)" : "rgba(26,10,46,0.55)",
                }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.22, ease: EASE }}
                style={{ ...MONO, fontSize: "14px", lineHeight: 1.7, position: "absolute", inset: 0, overflow: "hidden" }}
              >
                {service.desc}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* "Click me" typewriter — appears on hover, to the left of the button */}
      <AnimatePresence>
        {hovered && !bubbleOpen && (
          <motion.span
            key="click-me"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            style={{
              position: "absolute",
              bottom: "23px",
              right: "56px",
              zIndex: 11,
              display: "inline-flex",
              pointerEvents: "none",
            }}
          >
            {"Was genau?".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.045, duration: 0.08 }}
                style={{ ...MONO, fontSize: "9px", letterSpacing: "0.14em", color: VIOLET_GLOW, whiteSpace: "pre" }}
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
        )}
      </AnimatePresence>

      {/* Subtle magnetic CTA — bottom-right corner, square violet outline */}
      <div style={{ position: "absolute", bottom: "18px", right: "18px", zIndex: 11 }}>
        <MagneticCTA>
          <motion.button
            onClick={openBubble}
            aria-label="Mehr erfahren"
            animate={{
              borderColor: hovered && !bubbleOpen ? "rgba(159,122,234,0.75)" : "rgba(91,33,182,0.38)",
              backgroundColor: hovered && !bubbleOpen ? "rgba(159,122,234,0.12)" : "rgba(255,255,255,0.0)",
            }}
            transition={{ duration: 0.22 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "30px",
              height: "30px",
              border: "1.5px solid rgba(91,33,182,0.38)",
              borderRadius: 0,
              background: "transparent",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <motion.span
              animate={{
                color: hovered && !bubbleOpen ? VIOLET_GLOW : VIOLET,
                x: hovered ? 1 : 0,
                y: hovered ? -1 : 0,
              }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUpRight style={{ width: 13, height: 13 }} strokeWidth={1.5} />
            </motion.span>
          </motion.button>
        </MagneticCTA>
      </div>

      {/* ── Detail overlay (click) — violet gradient + horizontal deliverables ── */}
      <AnimatePresence onExitComplete={() => setBubbleLeaving(false)}>
        {bubbleOpen && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 z-20 flex flex-col p-5 lg:p-7"
            style={{
              background: VIOLET_GRADIENT,
              transformOrigin: bubbleLeaving ? "50% 0%" : "50% 100%",
            }}
          >
            {/* Top row */}
            <div className="flex items-center justify-between mb-3">
              <span style={{ ...MONO, fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.55)" }}>
                Deliverables
              </span>
              <button
                onClick={closeBubble}
                style={{ color: "rgba(255,255,255,0.70)", background: "none", border: "none", cursor: "pointer", padding: 0 }}
                aria-label="Schließen"
              >
                <X className="w-3.5 h-3.5" strokeWidth={1.5} />
              </button>
            </div>

            {/* Title */}
            <h3 style={{ ...SERIF, fontStyle: "italic", fontSize: "clamp(0.95rem, 1.3vw, 1.15rem)", color: PAPER_PURE, marginBottom: "14px", lineHeight: 1.15, letterSpacing: "-0.01em" }}>
              {service.title}
            </h3>

            {/* Horizontal deliverables grid with icons */}
            <div
              style={{
                flex: 1,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "11px 14px",
                alignContent: "center",
              }}
            >
              {service.deliverables.map((d, i) => {
                const Icon = d.icon;
                return (
                  <motion.div
                    key={d.label}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.32, delay: 0.18 + i * 0.06, ease: EASE }}
                    style={{ display: "flex", alignItems: "flex-start", gap: "9px" }}
                  >
                    <div
                      style={{
                        flexShrink: 0,
                        width: 26, height: 26,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        background: "rgba(255,255,255,0.10)",
                        border: "1px solid rgba(255,255,255,0.22)",
                        borderRadius: "2px",
                      }}
                    >
                      <Icon style={{ width: 13, height: 13, color: "#E9D5FF" }} strokeWidth={1.7} />
                    </div>
                    <span style={{ ...MONO, fontSize: "10px", lineHeight: 1.45, color: "rgba(255,255,255,0.88)" }}>
                      {d.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ─── Section ──────────────────────────────────────────────────────────────────
export const StudioStrategySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const blobY = useTransform(scrollYProgress, [0, 1], [-30, 60]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-14 md:py-20"
      style={{ backgroundColor: "transparent" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* ── Section Header ────────────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 md:mb-16">

          {/* Left: eyebrow + heading + description */}
          <div>
            <motion.div
              initial="rest"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="flex items-center gap-3 mb-6"
            >
              <motion.span
                className="block h-px flex-shrink-0"
                style={{ backgroundColor: VIOLET }}
                variants={{ rest: { width: 0 }, show: { width: 32 } }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
              />
              <motion.span
                style={{ ...MONO, fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: VIOLET }}
                variants={{ rest: { opacity: 0, x: -8 }, show: { opacity: 1, x: 0 } }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.35 }}
              >
                Das New Edge System
              </motion.span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
              style={{
                ...SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(2rem, 3.8vw, 3rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.02em",
                color: INK_DEEP,
                marginBottom: "20px",
              }}
            >
              Fünf Disziplinen. Ein{" "}
              <span style={{ color: VIOLET }}>System.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
              style={{ ...MONO, fontSize: "15px", lineHeight: 1.75, color: "rgba(26,10,46,0.55)", maxWidth: "54ch" }}
            >
              Marke, Kommunikation, Automatisierung und Plattform werden nicht
              nebeneinander gebaut, sondern ineinander. So entsteht ein System, das
              wächst statt zu zerfallen.
            </motion.p>
          </div>

          {/* Right: Revolving consult button */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.45 }}
            className="flex-shrink-0"
            style={{ alignSelf: "flex-end" }}
          >
            <FloatingConsultButton />
          </motion.div>

        </div>

        {/* ── BENTO GRID ───────────────────────────────────────────────────── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 1, backgroundColor: GRID_LINE, border: `1px solid ${GRID_LINE}` }}>

          {/* Row 1 — 2 Strategie services */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1 }}>
            <ServiceCell service={services[0]} delay={0.10} />
            <ServiceCell service={services[1]} delay={0.16} />
          </div>

          {/* Row 2 — 3 Build-Layer services */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 1 }}>
            <ServiceCell service={services[2]} delay={0.22} />
            <ServiceCell service={services[3]} delay={0.28} />
            <ServiceCell service={services[4]} delay={0.34} />
          </div>
        </div>

      </div>
    </section>
  );
};
