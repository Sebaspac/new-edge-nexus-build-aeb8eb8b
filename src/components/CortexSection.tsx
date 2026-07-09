import { useEffect, useState } from "react";
import { Eye, ShieldCheck, LayoutGrid, Workflow } from "lucide-react";
import { cortex as CORTEX_STATIC } from "@/content/sections/cortex";
import { EdgePillButton } from "@/components/ui/EdgeCta";
import { cortexFeatureDescs } from "@/content/sections/cortexFeatures";
import { useHomeContent } from "@/hooks/useHomeContent";

/* ── Design tokens ── */
const VIOLET = "#5658DF";
const GLOW = "#9A85F6";
const INK_DEEP = "#17172E";
const INK = "#3C3C47";
const OUTFIT = "'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
const HEAD: React.CSSProperties = { fontFamily: OUTFIT, fontWeight: 700 };
const BODY: React.CSSProperties = { fontFamily: OUTFIT, fontWeight: 400 };

const FEATURE_ICONS = [Eye, ShieldCheck, LayoutGrid, Workflow];

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
  const FEATURES = cortex.results.items.map((title: string, i: number) => ({
    title,
    desc: cortexFeatureDescs[i] ?? "",
    Icon: FEATURE_ICONS[i % FEATURE_ICONS.length],
  }));
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
      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8 w-full" style={{ paddingTop: "clamp(32px, 5vh, 56px)", paddingBottom: "clamp(32px, 5vh, 56px)" }}>

        {/* ── Section-Header: große Headline + eine Subline ── */}
        <h2 style={{ color: INK_DEEP }}>
          {cortex.heading}
        </h2>
        <p style={{ color: INK, maxWidth: "62ch", marginBottom: "clamp(36px, 5vh, 56px)" }}>
          {cortex.subtitle}
        </p>

        {/* ── Grid: Visual-Karte links, Feature-Liste rechts ── */}
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-14 items-center">

          {/* Links: Hub-Diagramm als dunkle Produkt-Karte */}
          <div className="flex items-center" style={{ background: `linear-gradient(135deg, ${INK_DEEP} 0%, #100E1E 100%)`, borderRadius: "16px", padding: "clamp(20px, 3vw, 40px)" }}>
            <svg viewBox="0 0 600 460" role="img" aria-label={cortex.diagram.ariaLabel} style={{ width: "100%", height: "auto", maxHeight: "420px", display: "block" }}>
              {SPOKES.map((s) => (
                <line key={`l-${s.label}`} x1={CENTER.x} y1={CENTER.y} x2={s.x} y2={s.y} stroke="rgba(139,141,240,0.35)" strokeWidth="1" />
              ))}
              {!reduced && SPOKES.map((s, i) => (
                <circle key={`p-${s.label}`} r="3" fill={GLOW}>
                  <animateMotion dur={`${2.6 + i * 0.4}s`} repeatCount="indefinite" path={`M ${s.x} ${s.y} L ${CENTER.x} ${CENTER.y}`} />
                </circle>
              ))}
              {SPOKES.map((s) => (
                <g key={s.label}>
                  <rect x={s.x - 70} y={s.y - 20} width="140" height="40" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(139,141,240,0.4)" strokeWidth="1" />
                  <text x={s.x} y={s.y + 4} textAnchor="middle" style={{ font: "600 11px Outfit, sans-serif", letterSpacing: "0.06em", fill: "#E4E1F0" }}>{s.label}</text>
                </g>
              ))}
              <rect x={CENTER.x - 84} y={CENTER.y - 30} width="168" height="60" rx="8" fill={VIOLET} stroke={GLOW} strokeWidth="1" />
              <text x={CENTER.x} y={CENTER.y - 2} textAnchor="middle" style={{ font: "700 14px Outfit, sans-serif", letterSpacing: "0.14em", fill: "#FFFFFF" }}>{cortex.diagram.centerLabel}</text>
              <text x={CENTER.x} y={CENTER.y + 16} textAnchor="middle" style={{ font: "500 9px Outfit, sans-serif", letterSpacing: "0.1em", fill: "rgba(255,255,255,0.7)" }}>{cortex.diagram.centerSublabel}</text>
            </svg>
          </div>

          {/* Rechts: Feature-Liste (Icon + Akzent-Titel + Beschreibung) + CTA */}
          <div className="flex flex-col" style={{ gap: "clamp(20px, 3vh, 28px)" }}>
            {FEATURES.map(({ title, desc, Icon }) => (
              <div key={title} className="flex items-start gap-4">
                <Icon strokeWidth={1.6} style={{ width: "30px", height: "30px", color: INK_DEEP, flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <h3 style={{ color: VIOLET }}>
                    {title}
                  </h3>
                  {desc && (
                    <p style={{ color: INK }}>
                      {desc}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Label ohne CMS-Pfeil „→" — die Pill bringt ihren eigenen Pfeil-Kreis mit */}
            <div style={{ marginTop: "4px" }}>
              <EdgePillButton onClick={scrollToCta}>{cortex.cta.replace(/\s*→\s*$/, "")}</EdgePillButton>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
