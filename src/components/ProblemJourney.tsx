import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";
import { problemJourney as PJ_STATIC } from "@/content/sections/problemJourney";
import { useHomeContent } from "@/hooks/useHomeContent";

gsap.registerPlugin(ScrollTrigger);

const VIOLET = "#5658DF";
const VIOLET_GLOW = "#9A85F6";
const INK_DEEP = "#17172E";
const INK = "#3C3C47";
const PAPER_PURE = "#FFFFFF";
const HAIRLINE = "#E6E6E6";

const MONO: React.CSSProperties = {
  fontFamily: "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace",
};
const SERIF: React.CSSProperties = {
  fontFamily: "'DM Serif Display', Georgia, serif",
};

export const ProblemJourney = () => {
  // Inhalte live aus dem CMS (Strapi „Home"); Fallback: statischer Content-Layer
  const problemJourney = useHomeContent().problemJourney ?? PJ_STATIC;
  /* Die Reise zur KI-Abteilung — vertikal als Leistungs-Liste */
  const JOURNEY = problemJourney.right.journey;

  const stackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  /* Karten-Stacking: beim Eintritt der Sektion rotieren die 5 Karten nacheinander
     (Stagger) von unten in den Stapel. Robust statt scrub-gekoppelt:
     - gsap.from + toggleActions → Ruhezustand ist SICHTBAR
     - immediateRender:false → fällt auf sichtbar zurück, falls der Trigger nicht feuert
     - ScrollTrigger.refresh() nach Layout/Load → rechnet die gepinnte Sektion darüber ein */
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cards = cardRefs.current.filter(Boolean);
    if (cards.length === 0 || !stackRef.current) return;

    if (prefersReduced) {
      gsap.set(cards, { autoAlpha: 1, y: 0, rotate: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(cards, {
        autoAlpha: 0,
        y: 64,
        rotate: 5,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.13,
        immediateRender: false,
        scrollTrigger: {
          trigger: stackRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
          invalidateOnRefresh: true,
        },
      });
    }, stackRef);

    // Positionen neu berechnen, sobald gepinnte Sektionen oberhalb ihre Höhe gesetzt haben
    const refresh = () => ScrollTrigger.refresh();
    const rafId = requestAnimationFrame(refresh);
    window.addEventListener("load", refresh);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, []);

  return (
    <section
      aria-label={problemJourney.ariaLabel}
      className="relative pt-20 pb-6 md:pt-24 md:pb-8"
      style={{ backgroundColor: "transparent" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* ── LEFT COLUMN — masthead + ROI-Rechner ── */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Section Eyebrow */}
              <div className="mb-4">
                <span
                  style={{
                    ...MONO,
                    fontSize: "11px",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: VIOLET,
                  }}
                >
                  {problemJourney.left.eyebrow}
                </span>
              </div>

              {/* Display headline — the one italic moment */}
              <h2
                style={{
                  ...SERIF,
                  fontStyle: "italic",
                  color: INK_DEEP,
                  fontSize: "clamp(1.85rem, 3.4vw, 2.75rem)",
                  lineHeight: 0.92,
                  letterSpacing: "-0.01em",
                  marginBottom: "28px",
                }}
              >
                {problemJourney.left.headline.lead}{" "}
                <AnimatedTextCycle
                  words={problemJourney.left.headline.words}
                  interval={3000}
                  renderWord={(word) => (
                    <span style={{ color: word === problemJourney.left.headline.highlightWord ? "#2E2F6E" : VIOLET }}>
                      {word}
                    </span>
                  )}
                />
                <br />
                {problemJourney.left.headline.tail}
              </h2>

              {/* Statement */}
              <p
                style={{
                  ...SERIF,
                  fontSize: "clamp(1.1rem, 1.6vw, 1.4rem)",
                  lineHeight: 1.3,
                  color: INK_DEEP,
                  marginBottom: "14px",
                }}
              >
                {problemJourney.left.statementLead}{" "}
                <span style={{ color: VIOLET }}>{problemJourney.left.statementEmphasis}</span>
              </p>

              <p
                style={{
                  ...MONO,
                  color: INK,
                  fontSize: "15px",
                  lineHeight: 1.7,
                  maxWidth: "48ch",
                  marginBottom: "24px",
                }}
              >
                {problemJourney.left.body}
              </p>

              {/* ROI-Rechner Freebie — the permitted violet stripe exception */}
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
                    marginBottom: "12px",
                  }}
                >
                  {problemJourney.left.roi.label}
                </div>

                {/* Heading — DM Serif, not italic (only Display is italic) */}
                <h3
                  style={{
                    ...SERIF,
                    color: PAPER_PURE,
                    fontSize: "clamp(1.1rem, 1.6vw, 1.4rem)",
                    lineHeight: 1.2,
                    marginBottom: "10px",
                  }}
                >
                  {problemJourney.left.roi.heading}
                </h3>

                {/* Description */}
                <p
                  style={{
                    ...MONO,
                    fontSize: "15px",
                    lineHeight: 1.65,
                    color: "rgba(255,255,255,0.6)",
                    marginBottom: "16px",
                  }}
                >
                  {problemJourney.left.roi.description}
                </p>

                {/* Link */}
                <Link
                  to={problemJourney.left.roi.linkTo}
                  className="inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                  style={{
                    ...MONO,
                    color: VIOLET_GLOW,
                    fontSize: "11px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                  }}
                >
                  {problemJourney.left.roi.linkLabel}
                  <ArrowUpRight
                    className="w-4 h-4 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.5}
                  />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN — die Reise als gestapelte Karten ── */}
          <div className="lg:col-span-7">
            <div
              style={{
                ...MONO,
                fontSize: "11px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: VIOLET,
                marginBottom: "16px",
              }}
            >
              {problemJourney.right.heading}
            </div>

            {/* Card stack: jede Karte rotiert beim Scrollen von unten in den Stapel */}
            <div ref={stackRef} style={{ position: "relative", paddingBottom: "4px" }}>
              {JOURNEY.map((station, index) => (
                <div
                  key={station.category}
                  ref={(el) => {
                    if (el) cardRefs.current[index] = el;
                  }}
                  style={{
                    position: "relative",
                    zIndex: index + 1,
                    marginTop: index === 0 ? 0 : "-14px",
                    transformOrigin: "left bottom",
                    background: "#FFFFFF",
                    border: `1px solid ${HAIRLINE}`,
                    borderRadius: "14px",
                    padding: "18px 22px",
                    boxShadow: `0 ${2 + index * 2}px ${6 + index * 5}px rgba(23,23,46,${0.04 + index * 0.012})`,
                  }}
                >
                  <div className="flex items-start gap-6 sm:gap-10">
                    {/* Index — Consolas violet */}
                    <span
                      className="flex-shrink-0"
                      style={{
                        ...MONO,
                        color: VIOLET,
                        fontSize: "12px",
                        letterSpacing: "0.1em",
                        fontVariantNumeric: "tabular-nums",
                        paddingTop: "5px",
                        minWidth: "28px",
                      }}
                    >
                      {station.index}
                    </span>

                    {/* Title block */}
                    <div className="flex-1 min-w-0">
                      <div
                        className="flex items-center gap-3"
                        style={{
                          ...MONO,
                          fontSize: "10px",
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          color: INK,
                          opacity: 0.5,
                          marginBottom: "6px",
                        }}
                      >
                        {station.category}
                        {index < JOURNEY.length - 1 && (
                          <span aria-hidden style={{ color: VIOLET, opacity: 0.6 }}>→</span>
                        )}
                      </div>

                      <h3
                        style={{
                          ...SERIF,
                          color: INK_DEEP,
                          fontSize: "clamp(1.1rem, 1.6vw, 1.4rem)",
                          lineHeight: 1.2,
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {station.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
