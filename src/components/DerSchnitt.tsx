import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { derSchnitt as DS_STATIC } from "@/content/sections/derSchnitt";
import { useHomeContent } from "@/hooks/useHomeContent";

/* ── Design tokens (Ink & Edge) ── */
const VIOLET = "#5658DF";
const INK_DEEP = "#17172E";
const INK = "#3C3C47";
const HAIRLINE = "#E6E6E6";
const SERIF: React.CSSProperties = { fontFamily: "'DM Serif Display', Georgia, serif", fontWeight: 400 };
const MONO: React.CSSProperties = { fontFamily: "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace" };

export const DerSchnitt = () => {
  const isMobile = useIsMobile();

  // Inhalte live aus dem CMS (Strapi „Home"); Fallback: statischer Content-Layer
  const derSchnitt = useHomeContent().derSchnitt ?? DS_STATIC;
  const trackRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(20); // Prozent der Schnittkante
  const dragging = useRef(false);

  /* Initiale Choreografie: die Kante fährt einmal von 20 % auf 60 % */
  useEffect(() => {
    if (isMobile) return; // Auf Mobile gestapelt – keine Schnitt-Animation
    const el = trackRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPos(55);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const animate = (now: number) => {
          if (dragging.current) return;
          const t = Math.min(1, (now - start) / 1600);
          const eased = 1 - Math.pow(1 - t, 4);
          setPos(20 + 40 * eased);
          if (t < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [isMobile]);

  const updateFromClientX = (clientX: number) => {
    if (isMobile) return;
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(94, Math.max(6, pct)));
  };

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (dragging.current) updateFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <section aria-label={derSchnitt.a11y.sectionLabel} className="relative">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-16 md:py-24">
        <p className="flex items-center gap-3 uppercase mb-4" style={{ ...MONO, fontSize: "11px", letterSpacing: "0.2em", color: VIOLET }}>
          <span aria-hidden style={{ display: "inline-block", width: "32px", height: "1px", background: VIOLET }} />
          {derSchnitt.eyebrow}
        </p>
        <h2 className="italic mb-3" style={{ ...SERIF, fontSize: "clamp(1.85rem, 3.4vw, 2.75rem)", lineHeight: 1.1, letterSpacing: "-0.02em", color: INK_DEEP }}>
          {derSchnitt.heading.lead}<span style={{ color: VIOLET }}>{derSchnitt.heading.brand}</span>
        </h2>
        <p className="mb-10" style={{ ...MONO, fontSize: "15px", lineHeight: 1.7, color: INK, maxWidth: "62ch" }}>
          {derSchnitt.intro}
        </p>

        {/* ── Split-Panel: zwei Spalten, die Kante verschiebt die Gewichtung ── */}
        <div
          ref={trackRef}
          className={`relative select-none overflow-hidden ${isMobile ? "flex flex-col" : "touch-none flex"}`}
          style={{ border: `1px solid ${HAIRLINE}` }}
          onPointerDown={isMobile ? undefined : onPointerDown}
          onPointerMove={isMobile ? undefined : onPointerMove}
          onPointerUp={isMobile ? undefined : onPointerUp}
          onPointerCancel={isMobile ? undefined : onPointerUp}
        >
          {/* VORHER (links der Kante) */}
          <div style={{ width: isMobile ? "100%" : `${pos}%`, overflow: "hidden", background: "#F1F0F3", padding: "clamp(20px, 3vw, 40px)" }}>
            <p className="uppercase mb-5" style={{ ...MONO, fontSize: "10px", letterSpacing: "0.2em", color: "#8A8494", whiteSpace: isMobile ? "normal" : "nowrap" }}>
              {derSchnitt.before.label}
            </p>
            <ul className="m-0 p-0" style={{ listStyle: "none" }}>
              {derSchnitt.before.rows.map((row) => (
                <li key={row} className="py-1.5" style={{ ...MONO, fontSize: "13px", color: "#6B6575", whiteSpace: isMobile ? "normal" : "nowrap", overflow: isMobile ? "visible" : "hidden", textOverflow: isMobile ? "clip" : "ellipsis" }}>
                  <span style={{ color: "#B5B0BE" }}>×</span>{" "}{row}
                </li>
              ))}
            </ul>
          </div>

          {/* NACHHER (rechts der Kante) */}
          <div style={{ width: isMobile ? "100%" : `${100 - pos}%`, overflow: "hidden", background: INK_DEEP, padding: "clamp(20px, 3vw, 40px)" }}>
            <p className="uppercase mb-5" style={{ ...MONO, fontSize: "10px", letterSpacing: "0.2em", color: VIOLET, whiteSpace: isMobile ? "normal" : "nowrap" }}>
              {derSchnitt.after.label}
            </p>
            <ul className="m-0 p-0" style={{ listStyle: "none" }}>
              {derSchnitt.after.rows.map((row) => (
                <li key={row} className="py-1.5" style={{ ...MONO, fontSize: "13px", color: "#C8C2D4", whiteSpace: isMobile ? "normal" : "nowrap", overflow: isMobile ? "visible" : "hidden", textOverflow: isMobile ? "clip" : "ellipsis" }}>
                  <span style={{ color: "#9A85F6" }}>✓</span>{" "}{row}
                </li>
              ))}
            </ul>
          </div>

          {/* Die Schnittkante – auf Mobile ausgeblendet (Panels gestapelt) */}
          {!isMobile && (
          <div
            role="slider"
            aria-label={derSchnitt.a11y.sliderLabel}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(pos)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") setPos((p) => Math.max(6, p - 4));
              if (e.key === "ArrowRight") setPos((p) => Math.min(94, p + 4));
            }}
            className="absolute top-0 bottom-0"
            style={{ left: `${pos}%`, width: "1px", background: VIOLET, cursor: "ew-resize" }}
          >
            {/* Griff */}
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center"
              style={{ width: "28px", height: "44px", background: VIOLET, color: "#FFFFFF", ...MONO, fontSize: "11px", letterSpacing: "0.05em" }}
            >
              ↔
            </div>
          </div>
          )}
        </div>

        {/* Bildunterschrift im Zeichnungs-Stil */}
        <p className="mt-3 uppercase" style={{ ...MONO, fontSize: "10px", letterSpacing: "0.15em", color: "#B5B0BE" }}>
          {derSchnitt.caption}
        </p>
      </div>
    </section>
  );
};
