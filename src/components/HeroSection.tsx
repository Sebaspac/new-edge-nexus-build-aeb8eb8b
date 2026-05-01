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
        style={{ background: "transparent", minHeight: "100dvh" }}
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

        {/* Geometric background shapes */}
        <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
          <motion.div
            initial={{ opacity: 0, y: -150, rotate: 12 }}
            animate={{ opacity: 1, y: 0, rotate: 12 }}
            transition={{ duration: 2.4, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="absolute top-[-15%] left-[-5%]"
            style={{ width: 600, height: 140 }}
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full rounded-full border border-white/[0.15] bg-gradient-to-r from-white/[0.08] via-transparent to-transparent shadow-[0_8px_32px_0_rgba(139,92,246,0.25)] backdrop-blur-[2px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -100, rotate: -15 }}
            animate={{ opacity: 1, y: 0, rotate: -15 }}
            transition={{ duration: 2.4, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
            className="absolute top-[10%] right-[-10%]"
            style={{ width: 500, height: 120 }}
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full rounded-full border border-white/[0.12] bg-gradient-to-r from-violet-500/[0.10] via-transparent to-transparent shadow-[0_8px_32px_0_rgba(124,58,237,0.20)] backdrop-blur-[2px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100, rotate: -8 }}
            animate={{ opacity: 1, x: 0, rotate: -8 }}
            transition={{ duration: 2.4, delay: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            className="absolute top-[35%] left-[5%]"
            style={{ width: 550, height: 130 }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full rounded-full border border-white/[0.10] bg-gradient-to-r from-white/[0.06] via-transparent to-transparent shadow-[0_8px_32px_0_rgba(168,85,247,0.15)] backdrop-blur-[2px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100, rotate: 20 }}
            animate={{ opacity: 1, y: 0, rotate: 20 }}
            transition={{ duration: 2.4, delay: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
            className="absolute bottom-[5%] right-[0%]"
            style={{ width: 480, height: 110 }}
          >
            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full rounded-full border border-white/[0.10] bg-gradient-to-r from-purple-400/[0.08] via-transparent to-transparent shadow-[0_8px_32px_0_rgba(139,92,246,0.18)] backdrop-blur-[2px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: 35 }}
            animate={{ opacity: 1, scale: 1, rotate: 35 }}
            transition={{ duration: 2.4, delay: 1.1, ease: [0.25, 0.4, 0.25, 1] }}
            className="absolute bottom-[20%] left-[15%]"
            style={{ width: 380, height: 90 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full rounded-full border border-white/[0.08] bg-gradient-to-r from-violet-400/[0.06] via-transparent to-transparent shadow-[0_4px_16px_0_rgba(139,92,246,0.12)]"
            />
          </motion.div>
        </div>

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
            className="flex items-center justify-center"
            style={{ marginTop: "clamp(20px, 4vh, 32px)", gap: "10px" }}
          >
            <button
              onClick={onContactClick}
              style={{
                background: "linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)",
                color: "#fff",
                fontFamily: SANS,
                fontSize: "14px",
                fontWeight: 700,
                padding: "10px 22px",
                borderRadius: "6px",
                border: "1px solid rgba(139,92,246,0.4)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 0 20px rgba(124,58,237,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)";
                e.currentTarget.style.boxShadow = "0 0 30px rgba(124,58,237,0.5), inset 0 1px 0 rgba(255,255,255,0.15)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(124,58,237,0.3), inset 0 1px 0 rgba(255,255,255,0.1)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Jetzt beraten lassen
            </button>
            <Link
              to="/case-studies"
              style={{
                background: "rgba(139,92,246,0.08)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                color: "#c4b5fd",
                fontFamily: SANS,
                fontSize: "14px",
                fontWeight: 700,
                padding: "10px 22px",
                borderRadius: "6px",
                border: "1px solid rgba(139,92,246,0.25)",
                textDecoration: "none",
                display: "inline-block",
                transition: "all 0.3s ease",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(139,92,246,0.15)";
                e.currentTarget.style.borderColor = "rgba(139,92,246,0.4)";
                e.currentTarget.style.color = "#e0d4ff";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(139,92,246,0.08)";
                e.currentTarget.style.borderColor = "rgba(139,92,246,0.25)";
                e.currentTarget.style.color = "#c4b5fd";
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
