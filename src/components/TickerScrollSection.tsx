import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BG = "linear-gradient(110deg, #0D0520 0%, #1E0A4E 30%, #2B1060 52%, #1E0A4E 72%, #0D0520 100%)";
const LAVENDER = "#C4B5FD";
const WHITE     = "#F5F0FF";

const SERIF: React.CSSProperties = {
  fontFamily: "'DM Serif Display', Georgia, serif",
  fontStyle: "italic",
};

// ── Inline glyphs ────────────────────────────────────────────────────────────

const Star = () => (
  <svg viewBox="0 0 24 24" fill={LAVENDER}
    style={{ width: "0.7em", height: "0.7em", display: "inline-block", verticalAlign: "middle", flexShrink: 0, margin: "0 0.5em" }}>
    <path d="M12 2l1.2 8.4L20 6l-5.6 6L20 18l-6.8-3.6L12 22l-1.2-7.6L4 18l5.6-6L4 6l6.8 4.4Z" />
  </svg>
);

const Bolt = () => (
  <svg viewBox="0 0 18 24" fill={LAVENDER}
    style={{ width: "0.5em", height: "0.7em", display: "inline-block", verticalAlign: "middle", flexShrink: 0, margin: "0 0.5em" }}>
    <path d="M11 2 L3 14 L9 14 L7 22 L15 10 L9 10 Z" />
  </svg>
);

const Diamond = () => (
  <svg viewBox="0 0 20 20" fill="none"
    style={{ width: "0.55em", height: "0.55em", display: "inline-block", verticalAlign: "middle", flexShrink: 0, margin: "0 0.5em" }}>
    <path d="M10 1 L19 10 L10 19 L1 10 Z" stroke={LAVENDER} strokeWidth="1.5" fill={LAVENDER} fillOpacity="0.25" />
  </svg>
);

// ── Content block — rendered twice for seamless loop ─────────────────────────

const TickerContent = () => (
  <span style={{ display: "inline-flex", alignItems: "center", paddingRight: "4em" }}>
    <span style={{ ...SERIF, color: LAVENDER }}>New Edge</span>
    <span style={{ color: "rgba(255,255,255,0.3)", margin: "0 0.8em" }}>—</span>
    <span style={{ ...SERIF, color: WHITE }}>ist kein einzelner Move</span>
    <Star />
    <span style={{ ...SERIF, color: WHITE }}>Der New Edge entsteht, wenn</span>
    <span style={{ color: "rgba(255,255,255,0.25)", margin: "0 0.6em" }}>·</span>
    <span style={{ ...SERIF, color: LAVENDER }}>Marke</span>
    <Bolt />
    <span style={{ ...SERIF, color: LAVENDER }}>Kommunikation</span>
    <Bolt />
    <span style={{ ...SERIF, color: WHITE }}>und Prozesse zu einem System werden</span>
    <Diamond />
    <span style={{ ...SERIF, color: LAVENDER }}>bold im Output</span>
    <Diamond />
    <span style={{ ...SERIF, color: LAVENDER }}>real im Impact</span>
    <Star />
  </span>
);

// ── Export ───────────────────────────────────────────────────────────────────

export const TickerScrollSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef   = useRef<HTMLDivElement>(null);
  const ctxRef     = useRef<gsap.Context | null>(null);

  useLayoutEffect(() => {
    const raf = requestAnimationFrame(() => {
      const tid = setTimeout(() => {
        const section = sectionRef.current;
        const track   = trackRef.current;
        if (!section || !track) return;

        // Pin the wrapper that contains BOTH services (MethodologyGrid) and the stripe,
        // so services stay locked above while the stripe stays at the bottom.
        const pinTarget = (section.closest('[data-ticker-pin-group]') as HTMLElement | null) ?? section;

        ctxRef.current = gsap.context(() => {
          // With 2 copies of TickerContent + paddingLeft of 50vw on track,
          // one copy width = (scrollWidth - paddingLeft) / 2.
          // Move just enough to scroll the first copy fully off the left edge.
          const paddingLeft = window.innerWidth * 0.5;
          const copyWidth = (track.scrollWidth - paddingLeft) / 2;
          const textDist = paddingLeft + copyWidth;

          gsap.fromTo(track,
            { x: 0 },
            {
              x: () => -textDist,
              ease: "none",
              scrollTrigger: {
                trigger: pinTarget,
                start: "bottom bottom",
                end: () => `+=${textDist}`,   // pin ends right when text finishes
                scrub: 1.5,
                pin: pinTarget,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            }
          );
        }, section);
      }, 50);
      return () => clearTimeout(tid);
    });

    return () => {
      cancelAnimationFrame(raf);
      ctxRef.current?.revert();
    };
  }, []);

  const FS = "clamp(1.6rem, 2.8vw, 2.6rem)";

  return (
    // GSAP trigger wrapper — transparent, just provides the scroll space
    <div ref={sectionRef} style={{ overflow: "hidden" }}>

      {/* Skewed visual stripe */}
      <div
        style={{
          transform: "skewY(-2.5deg)",
          background: BG,
          borderTop:    "1px solid rgba(124,58,237,0.32)",
          borderBottom: "1px solid rgba(124,58,237,0.32)",
          padding: "clamp(24px, 3.5vh, 44px) 0",
          margin: "0 -4%",
          width: "108%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Left fade */}
        <div aria-hidden style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: "120px", zIndex: 2,
          background: "linear-gradient(to right, #0D0520 30%, transparent)",
          pointerEvents: "none",
        }} />
        {/* Right fade */}
        <div aria-hidden style={{
          position: "absolute", right: 0, top: 0, bottom: 0, width: "120px", zIndex: 2,
          background: "linear-gradient(to left, #0D0520 30%, transparent)",
          pointerEvents: "none",
        }} />

        {/* Scrolling track */}
        <div
          ref={trackRef}
          style={{
            display: "inline-flex",
            flexDirection: "row",
            alignItems: "center",
            whiteSpace: "nowrap",
            willChange: "transform",
            fontSize: FS,
            lineHeight: 1,
            letterSpacing: "-0.025em",
            paddingLeft: "50vw",
          }}
        >
          <TickerContent />
          <TickerContent />
        </div>
      </div>
    </div>
  );
};
