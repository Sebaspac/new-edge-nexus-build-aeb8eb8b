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
        className="relative w-full overflow-hidden flex items-center justify-center"
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
              "radial-gradient(circle, rgba(168,85,247,0.28) 0%, rgba(168,85,247,0.14) 28%, rgba(126,34,206,0.06) 55%, transparent 75%)",
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
            background: "linear-gradient(to bottom, transparent, #a855f7)",
            zIndex: 2,
          }}
        />
        {/* Hero — exact Dapta spec */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative flex flex-col items-center text-center w-full"
          style={{ padding: "clamp(80px, 12vh, 120px) 24px clamp(40px, 8vh, 80px)", fontFamily: SANS, zIndex: 1 }}
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
            Close Deals Faster With
            <span
              className="block bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #c084fc 0%, #a855f7 50%, #7e22ce 100%)",
                fontFamily: SANS,
                fontWeight: 800,
              }}
            >
              AI Sales Automation
            </span>
          </div>

          {/* Subline */}
          <p
            style={{
              marginTop: "22px",
              fontFamily: SANS,
              fontSize: "clamp(15px, 1.8vw, 18px)",
              color: "#a0a0a0",
              maxWidth: "500px",
              lineHeight: 1.55,
              fontWeight: 400,
            }}
          >
            The all-in-one conversational AI voice and text agent platform built for
            SMBs
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap justify-center"
            style={{ marginTop: "32px", gap: "14px" }}
          >
            <button
              onClick={onContactClick}
              style={{
                background: "#a855f7",
                color: "#fff",
                fontFamily: SANS,
                fontSize: "16px",
                fontWeight: 700,
                padding: "13px 30px",
                borderRadius: "12px",
                border: "none",
                cursor: "pointer",
                transition: "background 0.2s, transform 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#9333ea";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#a855f7";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Start for free
            </button>
            <Link
              to="/case-studies"
              style={{
                background: "transparent",
                color: "#a855f7",
                fontFamily: SANS,
                fontSize: "16px",
                fontWeight: 700,
                padding: "13px 30px",
                borderRadius: "12px",
                border: "2px solid #a855f7",
                textDecoration: "none",
                display: "inline-block",
                transition: "background 0.2s, transform 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(168,85,247,0.06)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Book a Demo
            </Link>
          </div>

          {/* Social proof */}
          <div
            className="flex flex-wrap items-center justify-center"
            style={{
              marginTop: "44px",
              gap: "28px",
              fontFamily: SANS,
              fontSize: "14px",
              color: "#a0a0a0",
            }}
          >
            <div className="flex items-center" style={{ gap: "8px" }}>
              <span
                style={{ color: "#a855f7", fontSize: "18px", letterSpacing: "1px" }}
              >
                ★★★★★
              </span>
              <span>4.9 on Clutch</span>
            </div>
            <span style={{ color: "#3a3a3a", fontSize: "18px" }}>|</span>
            <div className="flex items-center" style={{ gap: "8px" }}>
              <span>
                Trusted by{" "}
                <strong style={{ color: "#e0e0e0", fontWeight: 700 }}>50+</strong>{" "}
                companies
              </span>
            </div>
            <span style={{ color: "#3a3a3a", fontSize: "18px" }}>|</span>
            <div className="flex items-center" style={{ gap: "8px" }}>
              <span>
                <strong style={{ color: "#e0e0e0", fontWeight: 700 }}>2 Plätze</strong>{" "}
                für Q2 verfügbar
              </span>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};
