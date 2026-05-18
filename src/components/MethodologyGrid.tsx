import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";

const VIOLET = "#5B21B6";
const VIOLET_GLOW = "#9F7AEA";
const INK_DEEP = "#1A0A2E";
const INK = "#3A3A3A";
const PAPER_PURE = "#FFFFFF";
const HAIRLINE = "#E6E6E6";

const MONO: React.CSSProperties = {
  fontFamily: "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace",
};
const SERIF: React.CSSProperties = {
  fontFamily: "'DM Serif Display', Georgia, serif",
};

export const MethodologyGrid = () => {
  const services = [
    {
      index: "01",
      category: "STRATEGIE",
      title: "Systemstrategie für Marke, Daten & KI",
      link: "/studio",
    },
    {
      index: "02",
      category: "SICHTBARKEIT",
      title: "Kommunikations- & Sichtbarkeitsarchitektur",
      link: "/studio",
    },
    {
      index: "03",
      category: "AUTOMATISIERUNG",
      title: "AI- & Automation Systems",
      link: "/lab",
    },
    {
      index: "04",
      category: "OWNERSHIP",
      title: "Internal Systems & Ownership",
      link: "/lab",
    },
    {
      index: "05",
      category: "PLATTFORM",
      title: "Web & Platform Architecture",
      link: "/lab",
    },
  ];

  return (
    <section
      className="relative py-12 md:py-16 lg:py-20"
      style={{ backgroundColor: "transparent" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* ── LEFT COLUMN — sticky field guide masthead ── */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 self-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Section Eyebrow signature */}
              <div className="flex items-center gap-3 mb-10">
                <span
                  className="block flex-shrink-0"
                  style={{
                    width: "32px",
                    height: "1px",
                    backgroundColor: VIOLET,
                  }}
                />
                <span
                  style={{
                    ...MONO,
                    color: VIOLET,
                    fontSize: "11px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                  }}
                >
                  New Edge, Field Guide
                </span>
              </div>

              {/* Display headline — the one italic moment */}
              <h2
                style={{
                  ...SERIF,
                  fontStyle: "italic",
                  color: INK_DEEP,
                  fontSize: "clamp(2rem, 3.8vw, 3rem)",
                  lineHeight: 0.92,
                  letterSpacing: "-0.01em",
                  marginBottom: "32px",
                }}
              >
                Deine{" "}
                <AnimatedTextCycle
                  words={["Prozesse.", "Daten.", "KI.", "Plattform.", "Abläufe."]}
                  interval={3000}
                  renderWord={(word) => (
                    <span style={{ color: word === "Prozesse." ? "#3B0D72" : VIOLET }}>
                      {word}
                    </span>
                  )}
                />
                <br />
                Als System gedacht.
              </h2>

              {/* Body — Consolas, never italic */}
              <p
                style={{
                  ...MONO,
                  color: INK,
                  fontSize: "14px",
                  lineHeight: 1.7,
                  maxWidth: "42ch",
                  marginBottom: "40px",
                }}
              >
                Fünf Disziplinen, ein zusammenhängendes System. Marke, Kommunikation,
                Automatisierung und Plattform werden nicht nebeneinander gebaut, sondern
                ineinander.
              </p>

              {/* Audit CTA card — the permitted violet stripe exception */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.25, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative group"
                style={{
                  backgroundColor: INK_DEEP,
                  borderLeft: `3px solid ${VIOLET}`,
                  padding: "20px 24px",
                }}
              >
                {/* Label */}
                <div
                  style={{
                    ...MONO,
                    fontSize: "11px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.45)",
                    marginBottom: "16px",
                  }}
                >
                  Kostenloses Angebot
                </div>

                {/* Heading — DM Serif, not italic (only Display is italic) */}
                <h3
                  style={{
                    ...SERIF,
                    color: PAPER_PURE,
                    fontSize: "clamp(1.2rem, 2.2vw, 1.6rem)",
                    lineHeight: 1.2,
                    marginBottom: "12px",
                  }}
                >
                  Web-Performance Audit
                </h3>

                {/* Description */}
                <p
                  style={{
                    ...MONO,
                    fontSize: "15px",
                    lineHeight: 1.65,
                    color: "rgba(255,255,255,0.6)",
                    marginBottom: "24px",
                  }}
                >
                  Kostenlose Analyse: Performance, Struktur, Conversion. Vierundzwanzig
                  Stunden Bearbeitungszeit, ohne Verkaufsgespräch.
                </p>

                {/* Link */}
                <a
                  href="https://seo-audit-pro-1064008039464.us-west1.run.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                  style={{
                    ...MONO,
                    color: VIOLET_GLOW,
                    fontSize: "11px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                  }}
                >
                  Jetzt Check sichern
                  <ArrowUpRight
                    className="w-4 h-4 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.5}
                  />
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN — numbered editorial list (table of contents) ── */}
          <div className="lg:col-span-7">
            <ol className="list-none p-0 m-0" style={{ borderTop: `1px solid ${INK_DEEP}` }}>
              {services.map((service, index) => (
                <motion.li
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.55,
                    delay: 0.1 + index * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ borderBottom: `1px solid ${HAIRLINE}` }}
                >
                  <Link
                    to={service.link}
                    className="group relative block"
                    style={{ textDecoration: "none" }}
                  >
                    {/* Hover hairline underline (1px violet) */}
                    <span
                      aria-hidden="true"
                      className="absolute left-0 right-0 bottom-[-1px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                      style={{
                        height: "1px",
                        backgroundColor: VIOLET,
                        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                      }}
                    />

                    <div
                      className="flex items-start gap-6 sm:gap-10 py-5 transition-transform duration-500"
                      style={{
                        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                      }}
                    >
                      {/* Slide-right wrapper */}
                      <div
                        className="flex items-start gap-6 sm:gap-10 flex-1 min-w-0 transition-transform duration-500 group-hover:translate-x-2"
                        style={{
                          transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                        }}
                      >
                        {/* Index numeral — Consolas, violet, tabular */}
                        <span
                          className="flex-shrink-0"
                          style={{
                            ...MONO,
                            color: VIOLET,
                            fontSize: "13px",
                            letterSpacing: "0.1em",
                            fontVariantNumeric: "tabular-nums",
                            paddingTop: "8px",
                            minWidth: "28px",
                          }}
                        >
                          {service.index}
                        </span>

                        {/* Title block */}
                        <div className="flex-1 min-w-0">
                          {/* Category label — Consolas ALL-CAPS */}
                          <div
                            style={{
                              ...MONO,
                              fontSize: "11px",
                              letterSpacing: "0.2em",
                              textTransform: "uppercase",
                              color: INK,
                              opacity: 0.55,
                              marginBottom: "10px",
                            }}
                          >
                            {service.category}
                          </div>

                          {/* Service title — DM Serif Display, NOT italic */}
                          <h3
                            style={{
                              ...SERIF,
                              color: INK_DEEP,
                              fontSize: "clamp(1.2rem, 2.2vw, 1.6rem)",
                              lineHeight: 1.2,
                              letterSpacing: "-0.01em",
                            }}
                          >
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      {/* Arrow — hidden until hover */}
                      <div
                        className="flex-shrink-0 self-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500"
                        style={{
                          transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                        }}
                      >
                        <ArrowUpRight
                          className="w-6 h-6"
                          strokeWidth={1.25}
                          style={{ color: VIOLET }}
                        />
                      </div>
                    </div>
                  </Link>
                </motion.li>
              ))}
            </ol>

          </div>

        </div>
      </div>
    </section>
  );
};
