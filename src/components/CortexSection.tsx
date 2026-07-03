import { useEffect, useState } from "react";
import { cortex as CORTEX_STATIC } from "@/content/sections/cortex";
import { useHomeContent } from "@/hooks/useHomeContent";

/* ── Design tokens ── */
const VIOLET = "#5658DF";
const GLOW = "#9A85F6";
const INK_DEEP = "#17172E";
const INK = "#3C3C47";
const HAIRLINE = "#E6E6E6";
const PAPER = "#FFFFFF";
const SERIF: React.CSSProperties = { fontFamily: "'DM Serif Display', Georgia, serif", fontWeight: 400 };
const MONO: React.CSSProperties = { fontFamily: "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace" };

const SPOKE_POS = [
  { x: 300, y: 56 },
  { x: 92, y: 170 },
  { x: 508, y: 170 },
  { x: 152, y: 372 },
  { x: 448, y: 372 },
];
const CENTER = { x: 300, y: 232 };

export const CortexSection = () => {
  // Inhalte live aus dem CMS (Strapi „Home"); Fallback: statischer Content-Layer
  const cortex = useHomeContent().cortex ?? CORTEX_STATIC;
  const TODAY = cortex.today.items;
  const RESULTS = cortex.results.items;
  const SPOKES = cortex.diagram.spokes.map((s: { label: string }, i: number) => ({ label: s.label, ...SPOKE_POS[i] }));

  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const scrollToCta = () => {
    document.getElementById("cta")?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <section
      aria-label={cortex.ariaLabel}
      className="relative flex flex-col"
      style={{ background: "transparent", minHeight: "100svh", justifyContent: "center" }}
    >
      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8 w-full" style={{ paddingTop: "clamp(24px, 4vh, 48px)", paddingBottom: "clamp(24px, 4vh, 48px)" }}>

        {/* Eyebrow + Heading + Subtitle — kompakt */}
        <p className="flex items-center gap-3 uppercase mb-2" style={{ ...MONO, fontSize: "11px", letterSpacing: "0.2em", color: VIOLET }}>
          <span aria-hidden style={{ display: "inline-block", width: "32px", height: "1px", background: VIOLET }} />
          {cortex.eyebrow}
        </p>
        <h2 className="italic mb-2" style={{ ...SERIF, fontSize: "clamp(1.85rem, 3.4vw, 2.75rem)", lineHeight: 1.05, letterSpacing: "-0.02em", color: INK_DEEP }}>
          {cortex.heading}
        </h2>
        <p className="mb-5" style={{ ...MONO, fontSize: "13px", lineHeight: 1.6, color: INK, maxWidth: "62ch" }}>
          {cortex.subtitle}
        </p>

        {/* Grid: linke Info-Spalte + rechtes Diagramm */}
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-px" style={{ border: `1px solid ${HAIRLINE}`, background: HAIRLINE }}>

          {/* Links: Heute | Ergebnis nebeneinander + Paragraph + Button */}
          <div className="flex flex-col" style={{ background: "transparent", padding: "clamp(18px, 2.5vw, 32px)" }}>

            {/* Zwei Mini-Spalten: Heute links, Ergebnis rechts */}
            <div className="grid grid-cols-2 gap-5 mb-5">
              <div>
                <p className="uppercase mb-3" style={{ ...MONO, fontSize: "10px", letterSpacing: "0.2em", color: "#8A8494" }}>
                  {cortex.today.label}
                </p>
                <ul className="m-0 p-0" style={{ listStyle: "none" }}>
                  {TODAY.map((t) => (
                    <li key={t} className="flex items-start gap-2 py-1" style={{ ...MONO, fontSize: "12px", color: "#6B6575", lineHeight: 1.4 }}>
                      <span aria-hidden style={{ color: "#B5B0BE", flexShrink: 0 }}>×</span> {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="uppercase mb-3" style={{ ...MONO, fontSize: "10px", letterSpacing: "0.2em", color: VIOLET }}>
                  {cortex.results.label}
                </p>
                <ul className="m-0 p-0" style={{ listStyle: "none" }}>
                  {RESULTS.map((r) => (
                    <li key={r} className="flex items-start gap-2 py-1" style={{ ...MONO, fontSize: "12px", color: INK_DEEP, lineHeight: 1.4 }}>
                      <span aria-hidden style={{ color: VIOLET, flexShrink: 0 }}>✓</span> {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: "1px", background: HAIRLINE, marginBottom: "16px" }} />

            {/* Kurzer Erklärungs-Text */}
            <p className="mb-5" style={{ ...MONO, fontSize: "12px", lineHeight: 1.65, color: INK }}>
              {cortex.body}
            </p>

            <button
              onClick={scrollToCta}
              className="mt-auto inline-flex items-center gap-2 uppercase bg-transparent border-none p-0 cursor-pointer"
              style={{ ...MONO, fontSize: "11px", letterSpacing: "0.16em", color: VIOLET, borderBottom: `1px solid rgba(86,88,223,0.35)`, paddingBottom: "3px", width: "fit-content" }}
            >
              {cortex.cta}
            </button>
          </div>

          {/* Rechts: Hub-Diagramm */}
          <div className="flex items-center" style={{ background: "transparent", padding: "clamp(12px, 2.5vw, 32px)" }}>
            <svg viewBox="0 0 600 460" role="img" aria-label={cortex.diagram.ariaLabel} style={{ width: "100%", height: "auto", maxHeight: "400px", display: "block" }}>
              {SPOKES.map((s) => (
                <line key={`l-${s.label}`} x1={CENTER.x} y1={CENTER.y} x2={s.x} y2={s.y} stroke="rgba(86,88,223,0.3)" strokeWidth="1" />
              ))}
              {!reduced && SPOKES.map((s, i) => (
                <circle key={`p-${s.label}`} r="3" fill={VIOLET}>
                  <animateMotion dur={`${2.6 + i * 0.4}s`} repeatCount="indefinite" path={`M ${s.x} ${s.y} L ${CENTER.x} ${CENTER.y}`} />
                </circle>
              ))}
              {SPOKES.map((s) => (
                <g key={s.label}>
                  <rect x={s.x - 70} y={s.y - 20} width="140" height="40" fill={PAPER} stroke={INK_DEEP} strokeWidth="1" />
                  <text x={s.x} y={s.y + 4} textAnchor="middle" style={{ font: "11px Consolas, monospace", letterSpacing: "0.14em", fill: INK_DEEP }}>{s.label}</text>
                </g>
              ))}
              <rect x={CENTER.x - 84} y={CENTER.y - 30} width="168" height="60" fill={VIOLET} stroke={GLOW} strokeWidth="1" />
              <text x={CENTER.x} y={CENTER.y - 2} textAnchor="middle" style={{ font: "14px Consolas, monospace", letterSpacing: "0.22em", fill: "#FFFFFF" }}>{cortex.diagram.centerLabel}</text>
              <text x={CENTER.x} y={CENTER.y + 16} textAnchor="middle" style={{ font: "9px Consolas, monospace", letterSpacing: "0.16em", fill: "rgba(255,255,255,0.65)" }}>{cortex.diagram.centerSublabel}</text>
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
};
