import { lazy, Suspense, useEffect } from "react";
import { motion } from "framer-motion";
import { MobileNavigation } from "@/components/MobileNavigation";
import SEOHead from "@/components/SEOHead";
import { AuroraFlow } from "@/components/ui/aurora-flow";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";

const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));

const SANS  = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";
const SERIF: React.CSSProperties = { fontFamily: "'DM Serif Display', Georgia, serif" };
const MONO: React.CSSProperties  = { fontFamily: "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace" };
const EASE = [0.22, 1, 0.36, 1] as const;

const KiGlossar = () => {
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, []);

  return (
    <>
      <SEOHead
        title="KI Glossar | New Edge München"
        description="Das KI-Glossar von New Edge — Begriffe, Konzepte und Definitionen rund um Künstliche Intelligenz verständlich erklärt."
        canonical="/ki-glossar"
      />

      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <NoiseOverlay opacity={0.03} fixed zIndex={2} />
        <MobileNavigation onContactClick={() => window.open("https://calendly.com/sebastian-p-newedgebrand/30min", "_blank", "noopener")} theme="dark" />

        {/* ── HERO ── */}
        <div className="relative" style={{ background: "#0A0412", minHeight: "100dvh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div aria-hidden style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
            <AuroraFlow />
          </div>
          <div aria-hidden style={{
            position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
            background: "radial-gradient(ellipse 70% 65% at 50% 50%, rgba(4,1,12,0.72) 0%, rgba(4,1,12,0.28) 55%, transparent 82%)",
          }} />

          <style>{`@keyframes kg-shimmer { from { background-position: -220% center; } to { background-position: 220% center; } }`}</style>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "clamp(100px,16vh,140px) 24px clamp(60px,8vh,100px)", fontFamily: SANS }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "28px" }}>
              <span style={{ width: "32px", height: "1px", background: "#C4B5FD", display: "block" }} />
              <span style={{ ...MONO, fontSize: "11px", letterSpacing: "0.22em", color: "#C4B5FD", textTransform: "uppercase" }}>New Edge</span>
              <span style={{ width: "32px", height: "1px", background: "#C4B5FD", display: "block" }} />
            </div>

            <h1 style={{ ...SERIF, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(3rem, 7vw, 6rem)", lineHeight: 0.96, letterSpacing: "-0.02em", marginBottom: "32px" }}>
              <span style={{
                background: "linear-gradient(115deg, #fff 0%, #fff 24%, #f6f2ff 36%, #ece5ff 44%, #f8f5ff 50%, #f3efff 57%, #fff 68%, #fff 100%)",
                backgroundSize: "280% auto",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
                animation: "kg-shimmer 18s ease-in-out infinite alternate",
                display: "inline",
              }}>
                KI Glossar.
              </span>
            </h1>

            <p style={{ fontFamily: SANS, fontSize: "clamp(15px, 1.7vw, 18px)", color: "#a0a0a0", maxWidth: "560px", margin: "0 auto", lineHeight: 1.62, fontWeight: 400 }}>
              Begriffe, Konzepte und Definitionen rund um Künstliche Intelligenz — verständlich erklärt für Entscheider.
            </p>
          </motion.div>

          <motion.div
            animate={{ opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
              width: "2px", height: "clamp(80px, 10vh, 130px)",
              background: "linear-gradient(to bottom, rgba(196,181,253,0), #C4B5FD 50%, rgba(196,181,253,0.6))",
              boxShadow: "0 0 10px rgba(196,181,253,0.45)", zIndex: 3,
            }}
          />
        </div>

        {/* ── CONTENT PLACEHOLDER ── */}
        <div style={{ background: "#F8F5FF", padding: "clamp(80px,10vw,140px) 24px", textAlign: "center" }}>
          <p style={{ ...MONO, fontSize: "11px", letterSpacing: "0.22em", color: "rgba(91,33,182,0.4)", textTransform: "uppercase" }}>
            Demnächst verfügbar
          </p>
        </div>

        <Suspense fallback={<div style={{ minHeight: 200 }} />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default KiGlossar;
