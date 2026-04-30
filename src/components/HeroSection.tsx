import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface HeroSectionProps {
  onContactClick: () => void;
}

export const HeroSection = ({ onContactClick }: HeroSectionProps) => {
  useLanguage();

  return (
    <>
      {/* Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground"
      >
        Skip to main content
      </a>

      <section
        id="hero"
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: "#0a0a0a" }}
      >
        {/* Hero — exact Dapta spec: padding 100px 24px 80px, centered flex column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center"
          style={{ padding: "100px 24px 80px" }}
        >
          {/* Headline — clamp(48px,7vw,80px), weight 800, letter-spacing -2px, line-height 1.08 */}
          <h1
            className="text-white"
            style={{
              fontSize: "clamp(48px, 7vw, 80px)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-2px",
              maxWidth: "860px",
            }}
          >
            Close Deals Faster With
            <span
              className="block bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #c084fc 0%, #a855f7 50%, #7e22ce 100%)",
              }}
            >
              AI Sales Automation
            </span>
          </h1>

          {/* Subline — margin-top 28px, clamp(16px,2.2vw,20px), max-width 520px */}
          <p
            style={{
              marginTop: "28px",
              fontSize: "clamp(16px, 2.2vw, 20px)",
              color: "#a0a0a0",
              maxWidth: "520px",
              lineHeight: 1.55,
              fontWeight: 400,
            }}
          >
            The all-in-one conversational AI voice and text agent platform built for
            SMBs
          </p>

          {/* CTAs — margin-top 44px, gap 16px */}
          <div
            className="flex flex-wrap justify-center"
            style={{ marginTop: "44px", gap: "16px" }}
          >
            <button
              onClick={onContactClick}
              className="text-white transition-all hover:-translate-y-0.5"
              style={{
                background: "#a855f7",
                fontSize: "16px",
                fontWeight: 700,
                padding: "16px 36px",
                borderRadius: "12px",
                border: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#9333ea")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#a855f7")}
            >
              Start for free
            </button>
            <Link
              to="/case-studies"
              className="transition-all hover:-translate-y-0.5"
              style={{
                background: "transparent",
                color: "#a855f7",
                fontSize: "16px",
                fontWeight: 700,
                padding: "16px 36px",
                borderRadius: "12px",
                border: "2px solid #a855f7",
                textDecoration: "none",
                display: "inline-block",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(168,85,247,0.08)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              Book a Demo
            </Link>
          </div>

          {/* Social proof — margin-top 60px, gap 28px */}
          <div
            className="flex flex-wrap items-center justify-center"
            style={{
              marginTop: "60px",
              gap: "28px",
              fontSize: "14px",
              color: "#a0a0a0",
            }}
          >
            <div className="flex items-center" style={{ gap: "8px" }}>
              <span style={{ color: "#a855f7", fontSize: "18px", letterSpacing: "1px" }}>
                ★★★★★
              </span>
              <span>4.9 on Clutch</span>
            </div>
            <span style={{ color: "#3a3a3a", fontSize: "18px" }}>|</span>
            <div className="flex items-center" style={{ gap: "8px" }}>
              <span>
                Trusted by <strong style={{ color: "#e0e0e0" }}>50+</strong> companies
              </span>
            </div>
            <span style={{ color: "#3a3a3a", fontSize: "18px" }}>|</span>
            <div className="flex items-center" style={{ gap: "8px" }}>
              <span>
                <strong style={{ color: "#e0e0e0" }}>2 Plätze</strong> für Q2
                verfügbar
              </span>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};
