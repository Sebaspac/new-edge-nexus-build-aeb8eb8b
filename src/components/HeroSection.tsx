import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { SweepButton, SweepLink } from "@/components/ui/SweepButton";

interface HeroSectionProps {
  onContactClick: () => void;
}

const SANS =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";

/* ── Replace with your actual YouTube video ID ── */
const YT_VIDEO_ID = "dQw4w9WgXcQ";

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
          className="relative w-full max-w-[1200px] mx-auto"
          style={{
            padding: "clamp(100px, 18vh, 120px) 24px clamp(40px, 6vh, 80px)",
            fontFamily: SANS,
            zIndex: 2,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(32px, 5vw, 72px)",
            alignItems: "center",
          }}
        >
          {/* ── LEFT — text content ── */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>

            {/* Shimmer keyframe */}
            <style>{`
              @keyframes hs-shimmer {
                from { background-position: -450% center; }
                to   { background-position:  450% center; }
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
                fontSize: "clamp(3rem, 5.5vw, 5.5rem)",
                lineHeight: 0.96,
                letterSpacing: "-0.02em",
                marginBottom: "22px",
              }}
            >
              <span
                style={{
                  display: "block",
                  background:
                    "linear-gradient(105deg, #fff 0%, #fff 44%, #fdfbff 47%, #ede5ff 50%, #fdfbff 53%, #fff 56%, #fff 100%)",
                  backgroundSize: "700% auto",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                  animation: "hs-shimmer 240s ease-in-out infinite alternate",
                }}
              >
                Mehr Output.
              </span>
              <span
                style={{
                  display: "block",
                  background:
                    "linear-gradient(105deg, #6d28d9 0%, #7c3aed 30%, #8b5cf6 44%, #b8a0fa 47%, #ede8ff 50%, #b8a0fa 53%, #8b5cf6 56%, #7c3aed 70%, #6d28d9 100%)",
                  backgroundSize: "700% auto",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  animation: "hs-shimmer 240s ease-in-out infinite alternate",
                  animationDelay: "-48s",
                }}
              >
                Weniger Kosten.
              </span>
            </div>

            {/* Subline */}
            <p
              style={{
                fontFamily: SANS,
                fontSize: "clamp(15px, 1.4vw, 17px)",
                color: "#a0a0a0",
                maxWidth: "480px",
                lineHeight: 1.6,
                fontWeight: 400,
                marginBottom: "clamp(20px, 3vh, 32px)",
              }}
            >
              Wir sorgen dafür, dass Ihr Unternehmen mit weniger Aufwand mehr
              Wirkung erzielt – indem wir Marke, Kommunikation und Prozesse als
              ganzheitliche Systeme denken und KI gezielt integrieren.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "clamp(20px, 3.5vh, 36px)" }}>
              <SweepButton
                onClick={() => window.open("https://calendly.com/sebastian-p-newedgebrand/30min", "_blank", "noopener")}
                sweepColor="white"
                hoverTextColor="#5B21B6"
                style={{
                  fontFamily: "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace",
                  fontSize: "12px", fontWeight: 700, letterSpacing: "0.18em",
                  textTransform: "uppercase", padding: "14px 28px",
                  background: "linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)",
                  color: "#fff",
                  border: "1px solid rgba(139,92,246,0.4)",
                  boxShadow: "0 0 20px rgba(124,58,237,0.3)",
                }}
              >
                Jetzt beraten lassen
              </SweepButton>

              <SweepLink
                to="/case-studies"
                hoverTextColor="#ffffff"
                style={{
                  fontFamily: "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace",
                  fontSize: "12px", fontWeight: 700, letterSpacing: "0.18em",
                  textTransform: "uppercase", padding: "14px 28px",
                  background: "rgba(139,92,246,0.08)",
                  backdropFilter: "blur(16px)",
                  color: "#c4b5fd",
                  border: "1px solid rgba(139,92,246,0.25)",
                  display: "inline-flex", alignItems: "center",
                }}
              >
                Case Studies
              </SweepLink>
            </div>

            {/* Social proof */}
            <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "nowrap" }}>

              {/* Badge 1 — Bewertung */}
              <div style={{
                display: "flex", alignItems: "center", gap: "7px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(196,181,253,0.18)",
                borderRadius: "0px",
                padding: "6px 12px 6px 10px",
                whiteSpace: "nowrap",
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#7c3aed" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span style={{ fontFamily: SANS, fontSize: "12px", color: "#d4d4d4", letterSpacing: "0.01em" }}>
                  100% Zufriedenheit
                </span>
              </div>

              <span style={{ color: "rgba(255,255,255,0.12)", fontSize: "18px", lineHeight: 1 }}>·</span>

              {/* Badge 2 — BAFA */}
              <div style={{
                display: "flex", alignItems: "center", gap: "7px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(196,181,253,0.18)",
                borderRadius: "0px",
                padding: "6px 12px 6px 10px",
                whiteSpace: "nowrap",
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="7" width="20" height="14" rx="2"/>
                  <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                  <line x1="12" y1="12" x2="12" y2="16"/>
                  <line x1="10" y1="14" x2="14" y2="14"/>
                </svg>
                <span style={{ fontFamily: SANS, fontSize: "12px", color: "#d4d4d4", letterSpacing: "0.01em" }}>
                  BAFA-förderfähig
                </span>
              </div>

              <span style={{ color: "rgba(255,255,255,0.12)", fontSize: "18px", lineHeight: 1 }}>·</span>

              {/* Badge 3 — Schnell */}
              <div style={{
                display: "flex", alignItems: "center", gap: "7px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(196,181,253,0.18)",
                borderRadius: "0px",
                padding: "6px 12px 6px 10px",
                whiteSpace: "nowrap",
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
                <span style={{ fontFamily: SANS, fontSize: "12px", color: "#d4d4d4", letterSpacing: "0.01em" }}>
                  Schnelle Umsetzung
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
                  "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(91,33,182,0.22) 0%, transparent 70%)",
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
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow:
                  "0 0 0 1px rgba(196,181,253,0.15), 0 32px 80px rgba(0,0,0,0.55)",
                zIndex: 1,
              }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${YT_VIDEO_ID}?rel=0&modestbranding=1&color=white`}
                title="New Edge Brand — Erklärvideo"
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
              "linear-gradient(to bottom, rgba(196,181,253,0), #C4B5FD 50%, rgba(196,181,253,0.6))",
            boxShadow: "0 0 10px rgba(196,181,253,0.45)",
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
