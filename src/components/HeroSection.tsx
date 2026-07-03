import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { SweepButton, SweepLink } from "@/components/ui/SweepButton";
import { hero as HERO_STATIC } from "@/content/sections/hero";
import { useHomeContent } from "@/hooks/useHomeContent";

interface HeroSectionProps {
  onContactClick: () => void;
}

const MONO =
  "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace";

export const HeroSection = ({ onContactClick }: HeroSectionProps) => {
  useLanguage();

  // Inhalte live aus dem CMS (Strapi „Home"); Fallback: statischer Content-Layer
  const hero = useHomeContent().hero ?? HERO_STATIC;

  return (
    <>
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground"
      >
        {hero.skipLink}
      </a>

      <section
        id="hero"
        className="relative w-full flex items-center"
        style={{ background: "transparent", minHeight: "100dvh" }}
      >
        {/* Dark vignette */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 80% 80% at 30% 50%, rgba(4,1,12,0.68) 0%, rgba(4,1,12,0.22) 60%, transparent 85%)",
          }}
        />

        {/* Two-column layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-[clamp(32px,5vw,72px)]"
          style={{
            padding: "clamp(100px, 18vh, 120px) 24px clamp(40px, 6vh, 80px)",
            fontFamily: MONO,
            zIndex: 2,
          }}
        >
          {/* ── LEFT — text content ── */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>

            {/* Headline */}
            <div
              role="heading"
              aria-level={1}
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(2.75rem, 6vw, 5.5rem)",
                lineHeight: 0.96,
                letterSpacing: "-0.02em",
                marginBottom: "22px",
              }}
            >
              <span style={{ display: "block", color: "#FBF9FF" }}>
                {hero.headline.line1}
              </span>
              <span style={{ display: "block", color: "#9A85F6" }}>
                {hero.headline.line2}
              </span>
            </div>

            {/* Subline — LEAD size, stronger than in-page body */}
            <p
              style={{
                fontFamily: MONO,
                fontSize: "clamp(16px, 1.5vw, 19px)",
                color: "#a8a3b3",
                maxWidth: "520px",
                lineHeight: 1.65,
                fontWeight: 400,
                marginBottom: "clamp(20px, 3vh, 32px)",
              }}
            >
              {hero.subline}
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "clamp(20px, 3.5vh, 36px)" }}>
              <SweepLink
                to="/ki-audit"
                sweepColor="violet"
                hoverTextColor="#ffffff"
                style={{
                  fontFamily: "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace",
                  fontSize: "12px", fontWeight: 700, letterSpacing: "0.18em",
                  textTransform: "uppercase", padding: "14px 28px",
                  background: "#5658DF",
                  color: "#fff",
                  border: "1px solid rgba(154,133,246,0.4)",
                  display: "inline-flex", alignItems: "center",
                }}
              >
                {hero.primaryCta.label}
              </SweepLink>

              <SweepButton
                onClick={onContactClick}
                sweepColor="dark"
                hoverTextColor="#ffffff"
                style={{
                  fontFamily: "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace",
                  fontSize: "12px", fontWeight: 700, letterSpacing: "0.18em",
                  textTransform: "uppercase", padding: "14px 28px",
                  background: "rgba(154,133,246,0.08)",
                  backdropFilter: "blur(16px)",
                  color: "#C2C3F6",
                  border: "1px solid rgba(154,133,246,0.25)",
                }}
              >
                {hero.secondaryCta.label}
              </SweepButton>
            </div>

            {/* Social proof */}
            <div style={{ display: "flex", alignItems: "center", gap: "6px", rowGap: "8px", flexWrap: "wrap" }}>

              {/* Badge 1 — Kunden */}
              <div style={{
                display: "flex", alignItems: "center", gap: "7px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(194,195,246,0.18)",
                borderRadius: "0px",
                padding: "6px 12px 6px 10px",
                whiteSpace: "nowrap",
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#9A85F6" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span style={{ fontFamily: MONO, fontSize: "13px", color: "#d4d4d4", letterSpacing: "0.01em" }}>
                  {hero.badges[0].label}
                </span>
              </div>

              <span style={{ color: "rgba(255,255,255,0.12)", fontSize: "18px", lineHeight: 1 }}>·</span>

              {/* Badge 2 — BAFA */}
              <div style={{
                display: "flex", alignItems: "center", gap: "7px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(194,195,246,0.18)",
                borderRadius: "0px",
                padding: "6px 12px 6px 10px",
                whiteSpace: "nowrap",
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9A85F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="7" width="20" height="14" rx="2"/>
                  <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                  <line x1="12" y1="12" x2="12" y2="16"/>
                  <line x1="10" y1="14" x2="14" y2="14"/>
                </svg>
                <span style={{ fontFamily: MONO, fontSize: "13px", color: "#d4d4d4", letterSpacing: "0.01em" }}>
                  {hero.badges[1].label}
                </span>
              </div>

              <span style={{ color: "rgba(255,255,255,0.12)", fontSize: "18px", lineHeight: 1 }}>·</span>

              {/* Badge 3 — Award */}
              <div style={{
                display: "flex", alignItems: "center", gap: "7px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(194,195,246,0.18)",
                borderRadius: "0px",
                padding: "6px 12px 6px 10px",
                whiteSpace: "nowrap",
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9A85F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="8" r="6"/>
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
                <span style={{ fontFamily: MONO, fontSize: "13px", color: "#d4d4d4", letterSpacing: "0.01em" }}>
                  {hero.badges[2].label}
                </span>
              </div>

            </div>
          </div>

          {/* ── RIGHT — YouTube video ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            style={{ position: "relative", width: "100%" }}
          >
            {/* Glow behind video */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: "-20px",
                background:
                  "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(86,88,223,0.22) 0%, transparent 70%)",
                pointerEvents: "none",
                zIndex: 0,
              }}
            />

            {/* 16:9 video wrapper */}
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingTop: "56.25%",
                borderRadius: "0px",
                overflow: "hidden",
                boxShadow:
                  "0 0 0 1px rgba(194,195,246,0.15), 0 32px 80px rgba(0,0,0,0.55)",
                zIndex: 1,
              }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${hero.video.youtubeId}?rel=0&modestbranding=1&color=white`}
                title={hero.video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
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
            background:
              "linear-gradient(to bottom, rgba(194,195,246,0), #C2C3F6 50%, rgba(194,195,246,0.6))",
            boxShadow: "0 0 10px rgba(194,195,246,0.45)",
            zIndex: 3,
          }}
        />

        {/* ── Mobile styles ── */}
        <style>{`
          @media (max-width: 768px) {
            #hero > div[style*="grid"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>
    </>
  );
};
