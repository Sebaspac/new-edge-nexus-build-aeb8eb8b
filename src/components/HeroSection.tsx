import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

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
        className="relative w-full overflow-hidden flex items-start sm:items-center justify-center"
        style={{ backgroundColor: "#0a0a0a", minHeight: "100dvh" }}
      >
        {/* Soft purple glow behind the headline */}
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: "min(900px, 90vw)",
            height: "min(900px, 90vw)",
            background:
              "radial-gradient(circle, rgba(91,33,182,0.30) 0%, rgba(76,29,149,0.16) 28%, rgba(76,29,149,0.06) 55%, transparent 75%)",
            filter: "blur(40px)",
            zIndex: 0,
          }}
        />

        {/* Vertical line at bottom of hero — fades down toward LogoCloud */}
        <div
          aria-hidden
          className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            bottom: "0",
            width: "1px",
            height: "60px",
            background: "linear-gradient(to bottom, transparent, #6d28d9)",
            zIndex: 2,
          }}
        />
        {/* Hero — exact Dapta spec */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative flex flex-col items-center text-center w-full"
          style={{ padding: "clamp(100px, 18vh, 120px) 24px clamp(40px, 6vh, 80px)", fontFamily: SANS, zIndex: 1 }}
        >
          {/* Headline — slightly smaller for better fit; rendered as div to bypass global h1 DM-Serif !important */}
          <div
            role="heading"
            aria-level={1}
            style={{
              fontFamily: SANS,
              fontSize: "clamp(36px, 5.5vw, 64px)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-1.5px",
              color: "#fff",
              maxWidth: "780px",
            }}
          >
            Mehr Output.
            <span
              className="block bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #8b5cf6 0%, #6d28d9 50%, #4c1d95 100%)",
                fontFamily: SANS,
                fontWeight: 800,
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
            className="flex flex-wrap justify-center"
            style={{ marginTop: "clamp(20px, 4vh, 32px)", gap: "14px" }}
          >
            <button
              onClick={onContactClick}
              style={{
                background: "#c8e64a",
                color: "#0a0a0a",
                fontFamily: SANS,
                fontSize: "16px",
                fontWeight: 700,
                padding: "14px 32px",
                borderRadius: "12px",
                border: "none",
                cursor: "pointer",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#b8d63a";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#c8e64a";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Jetzt beraten lassen
            </button>
            <Link
              to="/case-studies"
              style={{
                background: "transparent",
                color: "#c8e64a",
                fontFamily: SANS,
                fontSize: "16px",
                fontWeight: 700,
                padding: "14px 32px",
                borderRadius: "12px",
                border: "2px solid #c8e64a",
                textDecoration: "none",
                display: "inline-block",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(200,230,74,0.1)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Case Studies
            </Link>
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
      </section>
    </>
  );
};
