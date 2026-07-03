import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";
import { useIsMobile } from "@/hooks/use-mobile";
import { Icon } from "@/content";
import { horizontalScroll as HS_STATIC } from "@/content/sections/horizontalScroll";
import { useHomeContent } from "@/hooks/useHomeContent";

gsap.registerPlugin(ScrollTrigger);

const VIOLET      = "#5658DF";
const VIOLET_GLOW = "#5658DF";
const INK_DEEP    = "#17172E";
const HAIRLINE_INK = "rgba(23,23,46,0.08)";

const SERIF: React.CSSProperties = {
  fontFamily: "'DM Serif Display', Georgia, serif",
};
const MONO: React.CSSProperties = {
  fontFamily: "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace",
};

/* Gemeinsamer Papier-Hintergrund für BEIDE Panels — passt zum Magazin-Grundton der Seite */
const PANEL_BG = [
  "radial-gradient(ellipse 120% 80% at 60% 40%, rgba(86,88,223,0.04) 0%, transparent 60%)",
  "#F8F5FF",
].join(", ");

/* Spaltenraster — identisch zu Index.tsx, direkt in jedem Panel */
const PanelGrid = () => (
  <div aria-hidden style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
    <div style={{
      position: "absolute", inset: 0,
      background: [
        "radial-gradient(ellipse 60% 38% at 100% 0%, rgba(86,88,223,0.05) 0%, transparent 55%)",
        "radial-gradient(ellipse 55% 42% at 0% 100%, rgba(132,118,239,0.04) 0%, transparent 55%)",
      ].join(", "),
    }} />
    <div className="h-full w-full flex justify-center">
      <div className="w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 h-full">
        <div style={{
          height: "100%",
          backgroundImage: "linear-gradient(to right, rgba(23,23,46,0.07) 0 1px, transparent 1px)",
          backgroundSize: "calc(100% / 12) 100%",
          borderRight: "1px solid rgba(23,23,46,0.07)",
        }} />
      </div>
    </div>
  </div>
);

// ── Panel 1 — Process Roadmap ─────────────────────────────────────────────────
const ProcessPanel = () => {
  const isMobile = useIsMobile();
  // Inhalte live aus dem CMS (Strapi „Home"); Fallback: statischer Content-Layer
  const horizontalScroll = useHomeContent().horizontalScroll ?? HS_STATIC;
  return (
    <div
      style={{
        width: isMobile ? "100%" : "100vw",
        height: isMobile ? "auto" : "100dvh",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
        paddingTop: isMobile ? "clamp(56px, 9vw, 80px)" : "clamp(96px, 12vh, 124px)",
        paddingBottom: isMobile ? "clamp(40px, 8vw, 64px)" : "clamp(28px, 5vh, 52px)",
        background: PANEL_BG,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <PanelGrid />
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
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <span
                className="block flex-shrink-0"
                style={{ width: "32px", height: "1px", backgroundColor: VIOLET_GLOW }}
              />
              <span
                className="uppercase"
                style={{ ...MONO, fontSize: "11px", letterSpacing: "0.2em", color: VIOLET_GLOW }}
              >
                {horizontalScroll.process.eyebrow}
              </span>
            </div>

            <h2
              style={{
                ...SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(1.85rem, 3.4vw, 2.75rem)",
                lineHeight: 1.0,
                letterSpacing: "-0.01em",
                color: INK_DEEP,
                marginBottom: "12px",
              }}
            >
              {horizontalScroll.process.headingLead}{" "}
              <AnimatedTextCycle
                words={horizontalScroll.process.headingWords}
                interval={2800}
                renderWord={(word) => (
                  <span style={{ color: VIOLET }}>{word}</span>
                )}
              />
            </h2>

            <p
              style={{
                ...MONO,
                fontSize: "15px",
                lineHeight: 1.75,
                color: "rgba(23,23,46,0.55)",
                maxWidth: "36ch",
              }}
            >
              {horizontalScroll.process.body}
            </p>
          </div>

          {/* RIGHT: numbered steps — gleiche Item-Optik wie die Pillars in Panel 2 */}
          <div className="lg:col-span-7" style={{ borderTop: "none" }}>
            {horizontalScroll.process.steps.map(({ index, title, desc }) => {
              return (
                <div
                  key={title}
                  className="grid grid-cols-12 gap-4 py-4"
                  style={{ borderBottom: `1px solid ${HAIRLINE_INK}` }}
                >
                  {/* Nummer in derselben umrandeten Box wie die Icons in Panel 2 */}
                  <div className="col-span-2 flex items-start pt-1">
                    <div
                      style={{
                        width: "34px",
                        height: "34px",
                        border: `1.5px solid rgba(86,88,223,0.25)`,
                        backgroundColor: "rgba(86,88,223,0.06)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        ...MONO,
                        fontSize: "12px",
                        fontWeight: 700,
                        letterSpacing: "0.02em",
                        color: VIOLET,
                      }}
                    >
                      {index}
                    </div>
                  </div>

                  <div className="col-span-10">
                    <h3
                      style={{
                        ...SERIF,
                        fontSize: "clamp(1.1rem, 1.6vw, 1.4rem)",
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
                        fontSize: "15px",
                        lineHeight: 1.65,
                        color: "rgba(23,23,46,0.65)",
                      }}
                    >
                      {desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Panel 2 — Value Pillars (title LEFT, pillars RIGHT) ───────────────────────
const PillarsPanel = () => {
  const isMobile = useIsMobile();
  // Inhalte live aus dem CMS (Strapi „Home"); Fallback: statischer Content-Layer
  const horizontalScroll = useHomeContent().horizontalScroll ?? HS_STATIC;
  return (
  <div
    style={{
      width: isMobile ? "100%" : "100vw",
      height: isMobile ? "auto" : "100dvh",
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      boxSizing: "border-box",
      paddingTop: isMobile ? "clamp(56px, 9vw, 80px)" : "clamp(96px, 12vh, 124px)",
      paddingBottom: isMobile ? "clamp(40px, 8vw, 64px)" : "clamp(28px, 5vh, 52px)",
      background: PANEL_BG,
      overflow: "hidden",
      position: "relative",
    }}
  >
    <PanelGrid />
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
              {horizontalScroll.pillarsPanel.eyebrow}
            </span>
          </div>

          <h2
            style={{
              ...SERIF,
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(1.85rem, 3.4vw, 2.75rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.01em",
              color: INK_DEEP,
              marginBottom: "12px",
            }}
          >
            {horizontalScroll.pillarsPanel.headingLead}{" "}
            <AnimatedTextCycle
              words={horizontalScroll.pillarsPanel.headingWords}
              interval={2800}
              renderWord={(word) => (
                <span style={{ color: VIOLET }}>{word}</span>
              )}
            />
            <br />
            {horizontalScroll.pillarsPanel.headingTail}
          </h2>

          <p
            style={{
              ...MONO,
              fontSize: "15px",
              lineHeight: 1.75,
              color: "rgba(23,23,46,0.55)",
              maxWidth: "38ch",
            }}
          >
            {horizontalScroll.pillarsPanel.body}
          </p>
        </div>

        {/* RIGHT: pillars list */}
        <div
          className="lg:col-span-5 order-2"
          style={{ borderTop: "none" }}
        >
          {horizontalScroll.pillarsPanel.pillars.map(({ icon, title, desc }, i) => (
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
                    border: `1.5px solid rgba(86,88,223,0.25)`,
                    backgroundColor: "rgba(86,88,223,0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon name={icon} style={{ color: VIOLET, width: "15px", height: "15px" }} strokeWidth={1.5} />
                </div>
              </div>

              <div className="col-span-10">
                <h3
                  style={{
                    ...SERIF,
                    fontSize: "clamp(1.1rem, 1.6vw, 1.4rem)",
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
                    fontSize: "15px",
                    lineHeight: 1.65,
                    color: "rgba(23,23,46,0.65)",
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
};

// ── Main export ───────────────────────────────────────────────────────────────
export const HorizontalScrollSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef   = useRef<HTMLDivElement>(null);
  const ctxRef     = useRef<gsap.Context | null>(null);
  const isMobile   = useIsMobile();

  useLayoutEffect(() => {
    // Mobile: kein horizontales Scroll-Jacking — die beiden Panels stapeln vertikal.
    if (isMobile) return;
    const raf = requestAnimationFrame(() => {
      const tid = setTimeout(() => {
        const section = sectionRef.current;
        const track   = trackRef.current;
        if (!section || !track) return;

        ctxRef.current = gsap.context(() => {
          const distance = () => -(track.scrollWidth - window.innerWidth);
          // Timeline mit Verweilzeit (Dwell) auf jedem Panel: erst Panel 1 halten
          // (Lesezeit), dann sanft zu Panel 2 gleiten, dann Panel 2 halten.
          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: section,
              start: "top top",
              // Mehr Scroll-Distanz = mehr Zeit. Der Slide selbst + 1.9 Viewport-
              // Höhen an Dwell verteilt auf beide Panels.
              end: () =>
                `+=${(track.scrollWidth - window.innerWidth) + window.innerHeight * 1.9}`,
              scrub: 1.2,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });
          tl.to(track, { x: 0, duration: 0.55 })      // Dwell Panel 1 (Lesezeit)
            .to(track, { x: distance, duration: 1 })  // Übergang zu Panel 2
            .to(track, { x: distance, duration: 0.6 }); // Dwell Panel 2 (Lesezeit)
        }, section);
      }, 50);

      return () => clearTimeout(tid);
    });

    return () => {
      cancelAnimationFrame(raf);
      ctxRef.current?.revert();
    };
  }, [isMobile]);

  return (
    <div id="prozess" ref={sectionRef} style={{ overflow: "hidden" }}>
      <div
        ref={trackRef}
        style={{ display: "flex", flexDirection: isMobile ? "column" : "row", willChange: "transform" }}
      >
        <ProcessPanel />
        <PillarsPanel />
      </div>
    </div>
  );
};
