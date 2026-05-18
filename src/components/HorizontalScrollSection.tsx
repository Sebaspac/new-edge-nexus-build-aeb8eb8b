import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Target, Layers, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";

gsap.registerPlugin(ScrollTrigger);

const VIOLET      = "#5B21B6";
const VIOLET_GLOW = "#7C3AED";
const INK_DEEP    = "#1A0A2E";
const HAIRLINE    = "rgba(91,33,182,0.12)";
const HAIRLINE_INK = "rgba(26,10,46,0.08)";

const SERIF: React.CSSProperties = {
  fontFamily: "'DM Serif Display', Georgia, serif",
};
const MONO: React.CSSProperties = {
  fontFamily: "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace",
};

const PAGE_BG = [
  "radial-gradient(ellipse 120% 80% at 60% 40%, rgba(91,33,182,0.06) 0%, transparent 60%)",
  "#F8F5FF",
].join(", ");

const ACCENT_BG = [
  "radial-gradient(ellipse 90% 80% at 30% 50%, rgba(91,33,182,0.09) 0%, transparent 65%)",
  "#F2ECFF",
].join(", ");

const steps = [
  {
    index: "01",
    title: "Analyse & Zieldefinition",
    desc: "Gemeinsame Identifikation geeigneter Use Cases, Datenquellen und wirtschaftlicher Potenziale. Wir stellen die richtigen Fragen, bevor wir eine Zeile Code schreiben.",
  },
  {
    index: "02",
    title: "Konzept & Systemarchitektur",
    desc: "Auswahl der passenden Modelle, Tools und Integrationspunkte — abgestimmt auf Ihre IT-Landschaft und Ihre Compliance-Anforderungen.",
  },
  {
    index: "03",
    title: "Entwicklung & Integration",
    desc: "Umsetzung der Lösung inkl. Schnittstellen, Workflows und Benutzeroberflächen. Iterativ, transparent, mit wöchentlichem Statusupdate.",
  },
  {
    index: "04",
    title: "Go-Live & Optimierung",
    desc: "Produktiver Einsatz, Monitoring und kontinuierliche Verbesserung. Wir bleiben dabei — auch nach dem Launch.",
  },
];

const pillars: { Icon: LucideIcon; title: string; desc: string }[] = [
  {
    Icon: Target,
    title: "Strategie & Klarheit",
    desc: "Von der KI-Strategie bis zur konkreten Umsetzung. Wir analysieren Ihre Prozesse, identifizieren echte Hebel und bauen Systeme, die wirken — nicht bloß beeindrucken.",
  },
  {
    Icon: Layers,
    title: "Nahtlose Integration",
    desc: "KI wird direkt in Ihre bestehenden Tools und Systeme eingebaut — ERP, CRM, interne Plattformen. Kein Bruch, kein Parallelbetrieb, keine Reibung.",
  },
  {
    Icon: ShieldCheck,
    title: "Datenhoheit & Sicherheit",
    desc: "DSGVO-konforme Architekturen, bei denen Sie die volle Kontrolle behalten. Ihre Daten bleiben Ihre Daten — intern, sicher, auditierbar.",
  },
];

// ── Panel 1 — Process Roadmap ─────────────────────────────────────────────────
const ProcessPanel = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div
      style={{
        width: "100vw",
        height: "100dvh",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        background: PAGE_BG,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <NoiseOverlay opacity={0.04} blendMode="overlay" />
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl"
        style={{ position: "relative", zIndex: 1, width: "100%" }}
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start"
          style={{ width: "100%" }}
        >
          {/* LEFT: sticky heading */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-5">
              <span
                className="block flex-shrink-0"
                style={{ width: "32px", height: "1px", backgroundColor: VIOLET_GLOW }}
              />
              <span
                className="uppercase"
                style={{ ...MONO, fontSize: "11px", letterSpacing: "0.2em", color: VIOLET_GLOW }}
              >
                Unser Prozess
              </span>
            </div>

            <h2
              style={{
                ...SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(2rem, 3.8vw, 3rem)",
                lineHeight: 1.0,
                letterSpacing: "-0.01em",
                color: INK_DEEP,
                marginBottom: "12px",
              }}
            >
              So bringen wir{" "}
              <AnimatedTextCycle
                words={["KI", "Prozesse", "Zukunft", "Output"]}
                interval={2800}
                renderWord={(word) => (
                  <span style={{ color: VIOLET }}>{word}</span>
                )}
              />
              <br />
              in Ihr Unternehmen.
            </h2>

            <p
              style={{
                ...MONO,
                fontSize: "13.5px",
                lineHeight: 1.75,
                color: "rgba(26,10,46,0.55)",
                maxWidth: "36ch",
              }}
            >
              Vier Phasen, ein klares Ziel. Kein Wasserfallmodell, sondern
              iterative Zusammenarbeit — mit vollem Einblick in jeden Schritt.
            </p>
          </div>

          {/* RIGHT: numbered steps */}
          <div
            className="lg:col-span-6"
            style={{ borderTop: `1px solid ${HAIRLINE}` }}
          >
            {steps.map(({ index, title, desc }, i) => {
              const isActive = active === i;
              return (
                <motion.div
                  key={title}
                  onHoverStart={() => setActive(i)}
                  onHoverEnd={() => setActive(null)}
                  className="grid grid-cols-12 gap-4 py-5 cursor-default"
                  style={{
                    borderBottom: `1px solid ${HAIRLINE}`,
                    backgroundColor: isActive ? "rgba(91,33,182,0.06)" : "transparent",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  <div className="col-span-3 flex items-start">
                    <motion.span
                      animate={{
                        WebkitTextStroke: isActive
                          ? "1.5px rgba(91,33,182,0.7)"
                          : "1.5px rgba(91,33,182,0.18)",
                      }}
                      transition={{ duration: 0.2 }}
                      style={{
                        ...SERIF,
                        fontStyle: "italic",
                        fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                        color: "transparent",
                        lineHeight: 1,
                        userSelect: "none",
                        display: "block",
                      }}
                    >
                      {index}
                    </motion.span>
                  </div>

                  <div className="col-span-9 flex flex-col justify-center">
                    <motion.h3
                      animate={{ color: isActive ? INK_DEEP : "rgba(26,10,46,0.60)" }}
                      transition={{ duration: 0.2 }}
                      style={{
                        ...SERIF,
                        fontSize: "clamp(1.05rem, 1.7vw, 1.35rem)",
                        lineHeight: 1.2,
                        letterSpacing: "-0.01em",
                        marginBottom: "6px",
                      }}
                    >
                      {title}
                    </motion.h3>

                    <motion.p
                      animate={{ opacity: isActive ? 0.75 : 0.45 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        ...MONO,
                        fontSize: "13.5px",
                        lineHeight: 1.65,
                        color: "rgba(26,10,46,0.65)",
                      }}
                    >
                      {desc}
                    </motion.p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Panel 2 — Value Pillars (title LEFT, pillars RIGHT) ───────────────────────
const PillarsPanel = () => (
  <div
    style={{
      width: "100vw",
      height: "100dvh",
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      background: ACCENT_BG,
      overflow: "hidden",
    }}
  >
    <div
      className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl"
      style={{ width: "100%" }}
    >
      <div
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start"
        style={{ width: "100%" }}
      >
        {/* LEFT: heading + text */}
        <div className="lg:col-span-7 order-1">
          <div className="flex items-center gap-3 mb-5">
            <span
              className="block flex-shrink-0"
              style={{ width: "32px", height: "1px", backgroundColor: VIOLET }}
            />
            <span
              className="uppercase"
              style={{ ...MONO, fontSize: "11px", letterSpacing: "0.2em", color: VIOLET }}
            >
              Warum New Edge
            </span>
          </div>

          <h2
            style={{
              ...SERIF,
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(2rem, 3.8vw, 3rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.01em",
              color: INK_DEEP,
              marginBottom: "12px",
            }}
          >
            Wir nutzen KI als{" "}
            <AnimatedTextCycle
              words={["Erfolgsfaktor", "Motor", "Helfer", "Vorteil"]}
              interval={2800}
              renderWord={(word) => (
                <span style={{ color: VIOLET }}>{word}</span>
              )}
            />
            <br />
            für Ihr Unternehmen.
          </h2>

          <p
            style={{
              ...MONO,
              fontSize: "15px",
              lineHeight: 1.75,
              color: "rgba(26,10,46,0.55)",
              maxWidth: "38ch",
            }}
          >
            KI entfaltet ihren vollen Mehrwert nur, wenn sie strategisch
            in Ihre Geschäftsziele integriert wird. Als spezialisierter
            Partner verbinden wir Beratung, Entwicklung und Integration.
          </p>
        </div>

        {/* RIGHT: pillars list */}
        <div
          className="lg:col-span-5 order-2"
          style={{ borderTop: `1px solid ${INK_DEEP}` }}
        >
          {pillars.map(({ Icon, title, desc }, i) => (
            <div
              key={title}
              className="grid grid-cols-12 gap-4 py-5"
              style={{ borderBottom: `1px solid ${HAIRLINE_INK}` }}
            >
              <div className="col-span-2 flex items-start pt-1">
                <div
                  style={{
                    width: "34px",
                    height: "34px",
                    border: `1.5px solid rgba(91,33,182,0.25)`,
                    backgroundColor: "rgba(91,33,182,0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon style={{ color: VIOLET, width: "15px", height: "15px" }} strokeWidth={1.5} />
                </div>
              </div>

              <div className="col-span-10">
                <h3
                  style={{
                    ...SERIF,
                    fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)",
                    lineHeight: 1.2,
                    color: INK_DEEP,
                    letterSpacing: "-0.01em",
                    marginBottom: "6px",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    ...MONO,
                    fontSize: "13.5px",
                    lineHeight: 1.65,
                    color: "rgba(26,10,46,0.65)",
                  }}
                >
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// ── Main export ───────────────────────────────────────────────────────────────
export const HorizontalScrollSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef   = useRef<HTMLDivElement>(null);
  const ctxRef     = useRef<gsap.Context | null>(null);

  useLayoutEffect(() => {
    const raf = requestAnimationFrame(() => {
      const tid = setTimeout(() => {
        const section = sectionRef.current;
        const track   = trackRef.current;
        if (!section || !track) return;

        ctxRef.current = gsap.context(() => {
          gsap.to(track, {
            x: () => -(track.scrollWidth - window.innerWidth),
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () => `+=${track.scrollWidth - window.innerWidth + window.innerWidth * 0.6}`,
              scrub: 1.4,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });
        }, section);
      }, 50);

      return () => clearTimeout(tid);
    });

    return () => {
      cancelAnimationFrame(raf);
      ctxRef.current?.revert();
    };
  }, []);

  return (
    <div ref={sectionRef} style={{ overflow: "hidden" }}>
      <div
        ref={trackRef}
        style={{ display: "flex", willChange: "transform" }}
      >
        <ProcessPanel />
        <PillarsPanel />
      </div>
    </div>
  );
};
