import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { SweepButton, SweepLink } from "@/components/ui/SweepButton";

interface HeroSectionProps {
  onContactClick: () => void;
}

const SANS =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";

export const HeroSection = ({ onContactClick }: HeroSectionProps) => {
  useLanguage();

  return (
    <>
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground"
      >
        Skip to main content
      </a>

      <section
        id="hero"
        className="relative w-full flex items-center justify-center"
        style={{ background: "transparent", minHeight: "100dvh" }}
      >
        {/* Dark vignette — keeps center readable, aurora visible at edges */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            pointerEvents: "none",
            background: "radial-gradient(ellipse 70% 65% at 50% 50%, rgba(4,1,12,0.72) 0%, rgba(4,1,12,0.30) 55%, transparent 80%)",
          }}
        />


        {/* Hero — exact Dapta spec */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative flex flex-col items-center text-center w-full"
          style={{ padding: "clamp(100px, 18vh, 120px) 24px clamp(40px, 6vh, 80px)", fontFamily: SANS, zIndex: 2 }}
        >
          {/* Premium shimmer — slow left→right pendulum, ease-in-out both ways */}
          <style>{`
            @keyframes hs-shimmer {
              from { background-position: -220% center; }
              to   { background-position:  220% center; }
            }
          `}</style>

          {/* Headline */}
          <div
            role="heading"
            aria-level={1}
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(3rem, 7vw, 6rem)",
              lineHeight: 0.96,
              letterSpacing: "-0.02em",
              maxWidth: "780px",
            }}
          >
            {/* Line 1 — ghost iridescence on white */}
            <span
              style={{
                display: "block",
                background: "linear-gradient(115deg, #fff 0%, #fff 24%, #f6f2ff 36%, #ece5ff 44%, #f8f5ff 50%, #f3efff 57%, #fff 68%, #fff 100%)",
                backgroundSize: "280% auto",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
                animation: "hs-shimmer 18s ease-in-out infinite alternate",
              }}
            >
              Mehr Output.
            </span>
            {/* Line 2 — luminous pearl through violet */}
            <span
              style={{
                display: "block",
                background: "linear-gradient(115deg, #7c3aed 0%, #8b5cf6 22%, #9d70f5 33%, #b89af8 42%, #ddd6fe 50%, #b89af8 58%, #8b5cf6 68%, #4c1d95 100%)",
                backgroundSize: "280% auto",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontStyle: "italic",
                fontWeight: 400,
                animation: "hs-shimmer 18s ease-in-out infinite alternate",
                animationDelay: "-4s",
              }}
            >
              Weniger Kosten.
            </span>
          </div>

          {/* Subline */}
          <p
            style={{
              marginTop: "22px",
              fontFamily: SANS,
              fontSize: "clamp(15px, 1.8vw, 18px)",
              color: "#a0a0a0",
              maxWidth: "560px",
              lineHeight: 1.55,
              fontWeight: 400,
            }}
          >
            Wir sorgen dafür, dass Ihr Unternehmen mit weniger Aufwand mehr Wirkung erzielt – indem wir Marke, Kommunikation und Prozesse als ganzheitliche Systeme denken und KI gezielt integrieren.
          </p>

          {/* CTAs */}
          <div
            className="flex items-center justify-center"
            style={{ marginTop: "clamp(20px, 4vh, 32px)", gap: "10px" }}
          >
            <SweepButton
              onClick={() => window.open("https://calendly.com/sebastian-p-newedgebrand/30min", "_blank", "noopener")}
              sweepColor="dark"
              hoverTextColor="#ffffff"
              duration={0.52}
              style={{
                background: "#5B21B6",
                color: "#fff",
                fontFamily: "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace",
                fontSize: "12px",
                fontWeight: 400,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                padding: "14px 28px",
                border: "none",
              }}
            >
              Jetzt beraten lassen
            </SweepButton>
            <SweepLink
              to="/case-studies"
              sweepColor="violet"
              hoverTextColor="#ffffff"
              duration={0.52}
              style={{
                background: "transparent",
                color: "#C4B5FD",
                fontFamily: "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace",
                fontSize: "12px",
                fontWeight: 400,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                padding: "14px 28px",
                border: "1px solid rgba(196,181,253,0.35)",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              Case Studies
            </SweepLink>
          </div>

          {/* Social proof */}
          <div
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center"
            style={{
              marginTop: "clamp(28px, 5vh, 44px)",
              gap: "clamp(12px, 2vh, 28px)",
              fontFamily: SANS,
              fontSize: "14px",
              color: "#a0a0a0",
            }}
          >
            <div className="flex items-center" style={{ gap: "8px" }}>
              <span
                style={{ color: "#6d28d9", fontSize: "18px", letterSpacing: "1px" }}
              >
                ★★★★★
              </span>
              <span>100% Kundenzufriedenheit</span>
            </div>
            <span className="hidden sm:inline" style={{ color: "#3a3a3a", fontSize: "18px" }}>|</span>
            <div
              className="sm:hidden"
              style={{ width: "40px", height: "1px", background: "#3a3a3a" }}
            />
            <div className="flex items-center" style={{ gap: "8px" }}>
              <span>
                <strong style={{ color: "#e0e0e0", fontWeight: 700 }}>BAFA</strong>{" "}
                förderfähig
              </span>
            </div>
            <span className="hidden sm:inline" style={{ color: "#3a3a3a", fontSize: "18px" }}>|</span>
            <div
              className="sm:hidden"
              style={{ width: "40px", height: "1px", background: "#3a3a3a" }}
            />
            <div className="flex items-center" style={{ gap: "8px" }}>
              <span>Schnelle Umsetzung</span>
            </div>
          </div>

        </motion.div>

        {/* Scroll indicator — absolute bottom, ends at LogoCloud */}
        <motion.div
          animate={{ opacity: [0.35, 1, 0.35] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "2px",
            height: "clamp(100px, 11vh, 152px)",
            background: "linear-gradient(to bottom, rgba(196,181,253,0), #C4B5FD 50%, rgba(196,181,253,0.6))",
            boxShadow: "0 0 10px rgba(196,181,253,0.45)",
            zIndex: 3,
          }}
        />
      </section>
    </>
  );
};
