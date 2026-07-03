import { lazy, Suspense, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MobileNavigation } from "@/components/MobileNavigation";
import SEOHead from "@/components/SEOHead";
import { AuroraFlow } from "@/components/ui/aurora-flow";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CursorLine } from "@/components/ui/CursorLine";
import { img } from "@/content";
import { useJobs } from "@/hooks/useJobs";
import { careers as CAREERS_STATIC } from "@/content/pages/careers";
import { useCms } from "@/hooks/useCms";

const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));

const SANS  = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";
const SERIF: React.CSSProperties = { fontFamily: "'DM Serif Display', Georgia, serif" };
const MONO: React.CSSProperties  = { fontFamily: "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace" };
const VIOLET   = "#5658DF";
const INK_DEEP = "#17172E";
const HAIRLINE = "rgba(86,88,223,0.12)";
const EASE     = [0.22, 1, 0.36, 1] as const;

const Careers = () => {
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, []);
  const ctaBtnRef = useRef<HTMLDivElement>(null);

  // Inhalte live aus dem CMS (Strapi); Fallback: statischer Content-Layer
  const careers = useCms("careers", CAREERS_STATIC);
  const jobs = useJobs();

  const CALENDLY = careers.calendly;
  const scrollToContact = () => window.open(CALENDLY, "_blank", "noopener");

  return (
    <>
      <SEOHead
        title={careers.seo.title}
        description={careers.seo.description}
        canonical={careers.seo.canonical}
      />

      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <NoiseOverlay opacity={0.03} fixed zIndex={2} />
        <MobileNavigation onContactClick={scrollToContact} theme="dark" />

        {/* ── HERO ── */}
        <div className="relative" style={{ background: "#0A0A18", minHeight: "100dvh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div aria-hidden style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
            <AuroraFlow />
          </div>
          <div aria-hidden style={{
            position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
            background: "radial-gradient(ellipse 70% 65% at 50% 50%, rgba(4,1,12,0.72) 0%, rgba(4,1,12,0.28) 55%, transparent 82%)",
          }} />

          {/* Shimmer keyframe */}
          <style>{`@keyframes cr-shimmer { from { background-position: -220% center; } to { background-position: 220% center; } }`}</style>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "clamp(100px,16vh,140px) 24px clamp(60px,8vh,100px)", fontFamily: SANS }}
          >
            {/* Eyebrow */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "28px" }}>
              <span style={{ width: "32px", height: "1px", background: "#C2C3F6", display: "block" }} />
              <span style={{ ...MONO, fontSize: "11px", letterSpacing: "0.22em", color: "#C2C3F6", textTransform: "uppercase" }}>
                {careers.hero.eyebrow}
              </span>
              <span style={{ width: "32px", height: "1px", background: "#C2C3F6", display: "block" }} />
            </div>

            {/* Headline */}
            <h1 style={{
              ...SERIF,
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(2.75rem, 6vw, 5.5rem)",
              lineHeight: 0.96,
              letterSpacing: "-0.02em",
              marginBottom: "32px",
            }}>
              <span style={{
                background: "linear-gradient(115deg, #fff 0%, #fff 24%, #f6f2ff 36%, #ece5ff 44%, #f8f5ff 50%, #f3efff 57%, #fff 68%, #fff 100%)",
                backgroundSize: "280% auto",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
                animation: "cr-shimmer 18s ease-in-out infinite alternate",
                display: "inline",
              }}>
                {careers.hero.headline}
              </span>
            </h1>

            {/* Subline */}
            <p style={{
              ...MONO,
              fontSize: "clamp(14px, 1.3vw, 17px)",
              color: "#a0a0a0",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.62,
              fontWeight: 400,
            }}>
              {careers.hero.subline}
            </p>
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
              height: "clamp(80px, 10vh, 130px)",
              background: "linear-gradient(to bottom, rgba(194,195,246,0), #C2C3F6 50%, rgba(194,195,246,0.6))",
              boxShadow: "0 0 10px rgba(194,195,246,0.45)",
              zIndex: 3,
            }}
          />
        </div>

        {/* ── ÜBER UNS + WARUM ── */}
        <div style={{ background: "transparent", padding: "clamp(64px,8vw,112px) 24px" }}>
          <div style={{ maxWidth: "1040px", margin: "0 auto" }}>

            {/* Über uns */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE }}
              style={{ marginBottom: "clamp(56px, 7vw, 96px)" }}
            >
              <p style={{ ...MONO, fontSize: "11px", letterSpacing: "0.22em", color: VIOLET, textTransform: "uppercase", marginBottom: "20px" }}>
                {careers.about.eyebrow}
              </p>
              <p style={{
                fontFamily: SANS,
                fontSize: "clamp(16px, 1.5vw, 19px)",
                color: "rgba(23,23,46,0.55)",
                lineHeight: 1.65,
                fontWeight: 400,
                maxWidth: "760px",
              }}>
                {careers.about.body}
              </p>
            </motion.div>

            {/* Warum NEW EDGE */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: EASE }}
                style={{ marginBottom: "clamp(32px, 4vw, 48px)" }}
              >
                <p style={{ ...MONO, fontSize: "11px", letterSpacing: "0.22em", color: VIOLET, textTransform: "uppercase", marginBottom: "16px" }}>
                  {careers.why.eyebrow}
                </p>
                <h2 style={{ ...SERIF, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(1.85rem, 3.4vw, 2.75rem)", color: INK_DEEP, lineHeight: 1.0, letterSpacing: "-0.02em" }}>
                  {careers.why.heading}
                </h2>
              </motion.div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1px", background: HAIRLINE }}>
                {careers.why.values.map((v, i) => (
                  <motion.div
                    key={v.label}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.55, ease: EASE, delay: i * 0.08 }}
                    style={{ background: "#FFFFFF", padding: "clamp(28px, 4vw, 40px)" }}
                  >
                    <span style={{ ...MONO, fontSize: "10px", letterSpacing: "0.2em", color: VIOLET, textTransform: "uppercase", display: "block", marginBottom: "20px" }}>
                      {v.label}
                    </span>
                    <h3 style={{ ...SERIF, fontStyle: "italic", fontSize: "1.35rem", color: INK_DEEP, marginBottom: "12px", lineHeight: 1.1 }}>
                      {v.title}
                    </h3>
                    <p style={{ ...MONO, fontSize: "12px", color: "rgba(23,23,46,0.58)", lineHeight: 1.65 }}>
                      {v.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── OFFENE POSITIONEN ── */}
        <div style={{ background: "transparent", padding: "clamp(64px,8vw,112px) 24px" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE }}
              style={{ marginBottom: "clamp(40px, 5vw, 64px)", textAlign: "center" }}
            >
              <p style={{ ...MONO, fontSize: "11px", letterSpacing: "0.22em", color: VIOLET, textTransform: "uppercase", marginBottom: "16px" }}>
                {careers.positions.eyebrow}
              </p>
              <h2 style={{ ...SERIF, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(1.85rem, 3.4vw, 2.75rem)", color: INK_DEEP, lineHeight: 1.0, letterSpacing: "-0.02em", marginBottom: "20px" }}>
                {careers.positions.heading}
              </h2>
              <p style={{ fontFamily: SANS, fontSize: "15px", color: "rgba(23,23,46,0.5)", lineHeight: 1.6, maxWidth: "520px", margin: "0 auto" }}>
                {careers.positions.intro}
              </p>
            </motion.div>

            <Accordion type="single" collapsible className="space-y-0">
              {jobs.map((pos, pi) => (
                <motion.div
                  key={pos.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, ease: EASE, delay: pi * 0.07 }}
                >
                  <AccordionItem
                    value={pos.id}
                    style={{
                      border: `1px solid ${HAIRLINE}`,
                      borderTop: pi === 0 ? `1px solid ${HAIRLINE}` : "none",
                      borderRadius: 0,
                      background: "#FFFFFF",
                    }}
                    className="overflow-hidden"
                  >
                    <AccordionTrigger
                      className="hover:no-underline hover:bg-[#F5F5F7] transition-colors duration-200"
                      style={{ padding: "clamp(20px, 3vw, 28px) clamp(20px, 3vw, 32px)" }}
                    >
                      <div style={{ textAlign: "left", flex: 1, paddingRight: "16px" }}>
                        <span style={{ ...SERIF, fontStyle: "italic", fontSize: "clamp(16px, 1.5vw, 19px)", color: INK_DEEP, display: "block", marginBottom: "10px", lineHeight: 1.2 }}>
                          {pos.title}
                        </span>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                          {pos.tags.map((tag, ti) => (
                            <span key={ti} style={{ ...MONO, fontSize: "11px", letterSpacing: "0.06em", color: "rgba(23,23,46,0.45)" }}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent style={{ padding: "0 clamp(20px, 3vw, 32px) clamp(24px, 3vw, 36px)" }}>
                      <div style={{ borderTop: `1px solid ${HAIRLINE}`, paddingTop: "24px" }}>
                        {pos.sections.map((sec, si) => (
                          <div key={si} style={{ marginBottom: si < pos.sections.length - 1 ? "24px" : "28px" }}>
                            <p style={{ ...MONO, fontSize: "11px", letterSpacing: "0.18em", color: VIOLET, textTransform: "uppercase", marginBottom: "10px" }}>
                              {sec.label}
                            </p>
                            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                              {sec.items.map((item, ii) => (
                                <li key={ii} style={{ display: "flex", gap: "10px", marginBottom: "8px" }}>
                                  <span style={{ color: VIOLET, fontSize: "9px", marginTop: "5px", flexShrink: 0 }}>▸</span>
                                  <span style={{ fontFamily: SANS, fontSize: "13px", color: "rgba(23,23,46,0.62)", lineHeight: 1.6 }}>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        <a
                          href={pos.mailto}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            marginTop: "4px",
                            ...MONO,
                            fontSize: "11px",
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            color: "#fff",
                            background: VIOLET,
                            padding: "13px 24px",
                            textDecoration: "none",
                            border: "none",
                          }}
                        >
                          {careers.positions.applyLabel}
                        </a>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>

        {/* ── INITIATIVBEWERBUNG CTA ── */}
        <CursorLine buttonRef={ctaBtnRef} buttonRadius={76}>
        <div style={{
          background: INK_DEEP,
          padding: "clamp(64px,8vw,100px) 24px",
          position: "relative",
        }}>
          <div aria-hidden style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: "radial-gradient(ellipse 70% 60% at 0% 100%, rgba(86,88,223,0.28) 0%, transparent 65%)",
          }} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE }}
            style={{
              position: "relative",
              zIndex: 1,
              maxWidth: "900px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "clamp(32px, 6vw, 80px)",
              alignItems: "center",
            }}
          >
            {/* LEFT — text */}
            <div>
              <p style={{ ...MONO, fontSize: "11px", letterSpacing: "0.22em", color: "#C2C3F6", textTransform: "uppercase", marginBottom: "20px" }}>
                {careers.cta.eyebrow}
              </p>
              <h2 style={{
                ...SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(2.25rem, 4.5vw, 3.4rem)",
                color: "#fff",
                lineHeight: 1.0,
                marginBottom: "20px",
                letterSpacing: "-0.01em",
              }}>
                {careers.cta.heading}
              </h2>
              <p style={{
                fontFamily: SANS,
                fontSize: "15px",
                color: "rgba(194,195,246,0.60)",
                lineHeight: 1.7,
                marginBottom: "32px",
                maxWidth: "380px",
              }}>
                {careers.cta.body}
              </p>
            </div>

            {/* RIGHT — Wenjamin circle */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <motion.div
                ref={ctaBtnRef}
                style={{ position: "relative", width: "152px", height: "152px", cursor: "pointer" }}
                variants={{ rest: { scale: 1 }, hover: { scale: 1.05 } }}
                initial="rest"
                whileHover="hover"
                transition={{ duration: 0.28 }}
                onClick={() => window.open(careers.cta.person.mailto, "_blank")}
              >
                {/* Revolving text ring */}
                <div style={{ position: "absolute", inset: 0, animation: "careers-spin 12s linear infinite" }}>
                  <svg viewBox="0 0 200 200" style={{ width: "100%", height: "100%" }}>
                    <defs>
                      <path id="careers-circle" d="M 100,100 m -72,0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0" />
                    </defs>
                    <text style={{ fontSize: "17px", fill: "#ffffff", fontFamily: "Consolas, ui-monospace, monospace", letterSpacing: "0.04em" }}>
                      <textPath href="#careers-circle" startOffset="0%">{careers.cta.ringText}</textPath>
                    </text>
                  </svg>
                  <style>{`@keyframes careers-spin { to { transform: rotate(360deg); } }`}</style>
                </div>
                {/* Center image */}
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ position: "relative", width: "96px", height: "96px", borderRadius: "50%", overflow: "hidden", border: "2.5px solid #5658DF", boxShadow: "0 4px 20px rgba(86,88,223,0.28)" }}>
                    <img
                      src={img(careers.cta.person.src)}
                      alt={careers.cta.person.alt}
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%" }}
                    />
                    {/* Arrow overlay on hover */}
                    <motion.div
                      variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
                      initial="rest"
                      transition={{ duration: 0.2 }}
                      style={{
                        position: "absolute", inset: 0,
                        background: "rgba(86,88,223,0.65)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "26px", color: "#fff",
                        borderRadius: "50%",
                      }}
                    >
                      ↗
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        </CursorLine>

        <Suspense fallback={<div style={{ minHeight: 200 }} />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default Careers;
