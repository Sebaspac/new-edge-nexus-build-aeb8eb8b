import { useState } from "react";
import { motion } from "framer-motion";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";

const VIOLET = "#5B21B6";
const VIOLET_GLOW = "#7C3AED";
const INK_DEEP = "#1A0A2E";
const PAPER_PURE = "#FFFFFF";
const HAIRLINE = "rgba(91,33,182,0.12)";

const EASE = [0.22, 1, 0.36, 1] as const;

const SERIF: React.CSSProperties = {
  fontFamily: "'DM Serif Display', Georgia, serif",
};
const MONO: React.CSSProperties = {
  fontFamily: "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace",
};


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

export const ProcessRoadmapSection = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      className="relative py-16 md:py-20 overflow-hidden"
      style={{ background: "transparent" }}
    >
      <NoiseOverlay opacity={0.04} blendMode="overlay" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center min-h-[70vh]">

          {/* ── LEFT: sticky heading ─────────────────────────────────────── */}
          <div className="lg:col-span-6 lg:sticky lg:top-24 self-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-8">
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

              {/* Heading */}
              <h2
                style={{
                  ...SERIF,
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "clamp(2rem, 3.8vw, 3.25rem)",
                  lineHeight: 1.0,
                  letterSpacing: "-0.01em",
                  color: INK_DEEP,
                  marginBottom: "20px",
                }}
              >
                So bringen wir{" "}
                <AnimatedTextCycle
                  words={["KI", "Prozesse", "Zukunft", "Output"]}
                  interval={2800}
                  renderWord={(word) => (
                    <span style={{ color: VIOLET_GLOW }}>{word}</span>
                  )}
                />
                <br />
                in Ihr Unternehmen.
              </h2>

              <p
                style={{
                  ...MONO,
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "rgba(26,10,46,0.55)",
                  maxWidth: "36ch",
                }}
              >
                Vier Phasen, ein klares Ziel. Kein Wasserfallmodell, sondern
                iterative Zusammenarbeit — mit vollem Einblick in jeden Schritt.
              </p>
            </motion.div>
          </div>

          {/* ── RIGHT: numbered steps list ───────────────────────────────── */}
          <div
            className="lg:col-span-6"
          >
            {steps.map(({ index, title, desc }, i) => {
              const isActive = active === i;

              return (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, ease: EASE, delay: 0.1 + i * 0.08 }}
                  onHoverStart={() => setActive(i)}
                  onHoverEnd={() => setActive(null)}
                  className="grid grid-cols-12 gap-6 py-8 cursor-default transition-colors duration-300"
                  style={{
                    borderBottom: `1px solid ${HAIRLINE}`,
                    backgroundColor: isActive ? "rgba(91,33,182,0.06)" : "transparent",
                  }}
                >
                  {/* Large index numeral */}
                  <div className="col-span-3 flex items-start">
                    <motion.span
                      animate={{
                        WebkitTextStroke: isActive
                          ? "1.5px rgba(91,33,182,0.7)"
                          : "1.5px rgba(91,33,182,0.18)",
                      } as any}
                      transition={{ duration: 0.2 }}
                      style={{
                        ...SERIF,
                        fontStyle: "italic",
                        fontSize: "clamp(3rem, 5vw, 4rem)",
                        color: "transparent",
                        lineHeight: 1,
                        userSelect: "none",
                        display: "block",
                      }}
                    >
                      {index}
                    </motion.span>
                  </div>

                  {/* Title + desc */}
                  <div className="col-span-9 flex flex-col justify-center">
                    <motion.h3
                      animate={{ color: isActive ? INK_DEEP : "rgba(26,10,46,0.60)" }}
                      transition={{ duration: 0.2 }}
                      style={{
                        ...SERIF,
                        fontSize: "clamp(1.05rem, 1.7vw, 1.35rem)",
                        lineHeight: 1.2,
                        letterSpacing: "-0.01em",
                        marginBottom: "10px",
                      }}
                    >
                      {title}
                    </motion.h3>

                    <motion.p
                      animate={{ opacity: isActive ? 0.75 : 0.45 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        ...MONO,
                        fontSize: "15px",
                        lineHeight: 1.75,
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
    </section>
  );
};
