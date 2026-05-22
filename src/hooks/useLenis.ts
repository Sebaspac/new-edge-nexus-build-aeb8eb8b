import { useEffect } from "react";
import Lenis from "lenis";
import { useIsMobile } from "./use-mobile";

/**
 * Initializes Lenis smooth scrolling on the document.
 * Disabled on mobile and when prefers-reduced-motion is set.
 */
export const useLenis = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || isMobile) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [isMobile]);
};
