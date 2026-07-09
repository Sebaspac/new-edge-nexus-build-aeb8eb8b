import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { hero as HERO_STATIC } from "@/content/sections/hero";
import { img } from "@/content";

const OUTFIT = "'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
const VIOLET = "#5658DF";

interface FloatingFounderBadgeProps {
  /** Anker, ab dessen Sichtbarkeit der Badge einblendet (z. B. PositionedForImpactSection). */
  startRef: React.RefObject<HTMLElement>;
  /** Anker, ab dessen Sichtbarkeit der Badge wieder ausblendet (z. B. Pillars-Panel). */
  endRef: React.RefObject<HTMLElement>;
}

/**
 * Schwebender Founder-CTA (bottom-left, fixed) — gleiches Design wie der
 * Hero-Badge, aber scroll-getriggert: erscheint sobald `startRef` in den
 * unteren ~60% des Viewports rutscht, verschwindet wieder sobald `endRef`
 * dieselbe Marke erreicht. Funktioniert auch während des GSAP-Pins in
 * HorizontalScrollSection, da `getBoundingClientRect()` transform-aware ist.
 */
export const FloatingFounderBadge = ({ startRef, endRef }: FloatingFounderBadgeProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const startEl = startRef.current;
      const endEl = endRef.current;
      if (!startEl || !endEl) return;
      const line = window.innerHeight * 0.62;
      const hasPassedStart = startEl.getBoundingClientRect().top <= line;
      const hasPassedEnd = endEl.getBoundingClientRect().top <= line;
      setVisible(hasPassedStart && !hasPassedEnd);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [startRef, endRef]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: -6, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, y: 26, rotate: 4, scale: 0.92 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          style={{ position: "fixed", bottom: "24px", left: "24px", zIndex: 40 }}
          className="hidden md:block"
        >
          <Link
            to={HERO_STATIC.founderBadge.to}
            className="group relative inline-flex items-center overflow-hidden transition-transform duration-200 hover:scale-[1.02]"
            style={{
              gap: "14px",
              background: "#fff",
              borderRadius: "999px",
              padding: "8px 26px 8px 8px",
              boxShadow: "0 10px 34px rgba(12,12,28,0.35)",
            }}
          >
            {/* Violett-Sweep — blendet beim Hover von links nach rechts über die ganze Pill ein */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
              style={{ background: VIOLET }}
            />
            {/* Platzhalter hält die Pill-Breite — der Avatar gleitet als Overlay darüber */}
            <span aria-hidden style={{ width: "48px", height: "48px", flexShrink: 0 }} />
            {/* Avatar — gleitet beim Hover von links ans rechte Pill-Ende */}
            <span
              className="absolute left-2 transition-[left] duration-300 ease-out group-hover:left-[calc(100%-56px)]"
              style={{
                top: "8px",
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                overflow: "hidden",
                border: `2px solid ${VIOLET}`,
                zIndex: 2,
              }}
            >
              <img
                src={img(HERO_STATIC.founderBadge.image)}
                alt={HERO_STATIC.founderBadge.imageAlt}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "25% 20%", display: "block" }}
                loading="lazy"
              />
            </span>
            {/* Text — rückt beim Hover nach links, wird auf dem Violett-Sweep weiß */}
            <span className="relative transition-transform duration-300 ease-out group-hover:translate-x-[-44px]">
              <span
                className="block text-[#17172E] transition-colors duration-300 group-hover:text-white"
                style={{ fontFamily: OUTFIT, fontWeight: 600, fontSize: "14.5px", lineHeight: 1.25 }}
              >
                {HERO_STATIC.founderBadge.title}
              </span>
              <span
                className="block text-[#5B566B] transition-colors duration-300 group-hover:text-white/80"
                style={{ fontFamily: OUTFIT, fontWeight: 400, fontSize: "12.5px", lineHeight: 1.3 }}
              >
                {HERO_STATIC.founderBadge.subtitle}
              </span>
            </span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
