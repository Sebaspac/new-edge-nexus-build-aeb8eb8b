import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { img } from "@/content";
import { positionedForImpact as PFI_STATIC } from "@/content/sections/positionedForImpact";
import { useHomeContent } from "@/hooks/useHomeContent";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";

const VIOLET = "#5658DF";
const INK_DEEP = "#17172E";
const MONO: React.CSSProperties = { fontFamily: "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace" };

const SERIF_STYLE: React.CSSProperties = { fontFamily: "'DM Serif Display', Georgia, serif", fontWeight: 400 };

export const PositionedForImpactSection = () => {
  // Inhalte live aus dem CMS (Strapi „Home"); Fallback: statischer Content-Layer
  const positionedForImpact = useHomeContent().positionedForImpact ?? PFI_STATIC;
  const partners = positionedForImpact.proof.partners.map((p: { src: string; alt: string }) => ({
    src: img(p.src as Parameters<typeof img>[0]),
    alt: p.alt,
  }));
  const LETTER_PARAGRAPHS = positionedForImpact.letter.paragraphs;

  const containerRef = useRef<HTMLDivElement>(null);
  const [hiddenLogos, setHiddenLogos] = useState<Record<string, boolean>>({});
  const [letterOpen, setLetterOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const quoteY = useTransform(scrollYProgress, [0, 1], ["30px", "-30px"]);
  const statsY = useTransform(scrollYProgress, [0, 1], ["20px", "-20px"]);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: "transparent",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "clamp(5rem, 10vh, 9rem)",
        paddingBottom: "clamp(0.5rem, 1.5vh, 1.5rem)",
      }}
    >
      <motion.div ref={containerRef} className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-5 md:mb-7"
        >
          <span
            aria-hidden
            style={{
              display: "block",
              width: "32px",
              height: "1px",
              backgroundColor: "#5658DF",
            }}
          />
          <span
            style={{
              fontFamily: "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace",
              fontSize: "11px",
              letterSpacing: "0.2em",
              color: "#5658DF",
              textTransform: "uppercase",
            }}
          >
            {positionedForImpact.eyebrow}
          </span>
        </motion.div>

        {/* Split Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-14 items-center">

          {/* Left: Founders portrait, paper-stock */}
          <motion.figure
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative m-0"
          >
            <div
              className="relative w-full"
              style={{
                aspectRatio: "16 / 9",
                overflow: "hidden",
                borderRadius: 0,
              }}
            >
              <motion.div
                style={{ y: imageY, position: "absolute", inset: "-12% 0", height: "124%" }}
              >
                <img
                  alt={positionedForImpact.portrait.alt}
                  src={img(positionedForImpact.portrait.src)}
                  className="w-full h-full object-cover"
                  style={{ display: "block", borderRadius: 0 }}
                />
              </motion.div>
              {/* Caption — bottom-right, minimal */}
              <figcaption
                style={{
                  position: "absolute",
                  right: 0,
                  bottom: 0,
                  padding: "8px 12px",
                  backgroundColor: "rgba(86,88,223,0.55)",
                  backdropFilter: "blur(6px)",
                  fontFamily: "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace",
                  fontSize: "9px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.5,
                  textAlign: "right",
                }}
              >
                {positionedForImpact.portrait.captionName}<br />
                <span style={{ opacity: 0.5 }}>{positionedForImpact.portrait.captionRole}</span>
              </figcaption>
            </div>
          </motion.figure>

          {/* Right: Manifesto + stats */}
          <div className="flex flex-col">
            <motion.blockquote
              style={{ y: quoteY, fontFamily: "'DM Serif Display', Georgia, serif", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(1.85rem, 3.4vw, 2.75rem)", lineHeight: 0.95, letterSpacing: "-0.01em", color: "#17172E" }}
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="m-0 p-0"
            >
              {positionedForImpact.quote.line1}
              <br />
              {positionedForImpact.quote.line2Prefix}{" "}
              <AnimatedTextCycle
                words={positionedForImpact.quote.cycleWords}
                interval={2800}
                renderWord={(word) => (
                  <span
                    style={{
                      color: "#5658DF",
                      fontStyle: "normal",
                      fontFamily: "'DM Serif Display', Georgia, serif",
                    }}
                  >
                    {word}
                  </span>
                )}
              />
              <br />
              {positionedForImpact.quote.line3}
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 mb-0"
              style={{
                fontFamily: "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace",
                fontSize: "15px",
                lineHeight: 1.75,
                color: "rgba(23,23,46,0.62)",
                maxWidth: "52ch",
              }}
            >
              {positionedForImpact.body}
            </motion.p>

            {/* Stats row, hairline separators, no cards */}
            <motion.div
              style={{ y: statsY, borderRadius: 0 }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="mt-6 md:mt-8 grid grid-cols-3"
            >
              {positionedForImpact.stats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className="flex flex-col"
                  style={{
                    paddingLeft: idx === 0 ? 0 : "20px",
                    paddingRight: idx === 2 ? 0 : "20px",
                    borderLeft: idx === 0 ? "none" : "1px solid #E6E6E6",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'DM Serif Display', Georgia, serif",
                      fontStyle: "normal",
                      fontWeight: 400,
                      color: "#5658DF",
                      fontSize: "clamp(1.35rem, 2.2vw, 1.85rem)",
                      lineHeight: 1,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    style={{
                      marginTop: "10px",
                      fontFamily: "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace",
                      fontSize: "11px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#3C3C47",
                      lineHeight: 1.5,
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Founder Letter Card CTA */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-5 md:mt-6"
            >
              <motion.button
                onClick={() => setLetterOpen(true)}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                initial="rest"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "transparent",
                  border: "none",
                  padding: "0 0 3px",
                  cursor: "pointer",
                  borderBottom: "1px solid rgba(23,23,46,0.2)",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.borderBottomColor = VIOLET)}
                onMouseLeave={e => (e.currentTarget.style.borderBottomColor = "rgba(23,23,46,0.2)")}
              >
                <motion.span
                  variants={{ rest: { color: "#17172E" }, hover: { color: VIOLET } }}
                  transition={{ duration: 0.22 }}
                  style={{ ...MONO, fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" }}
                >
                  {positionedForImpact.letterCta}
                </motion.span>
                <span aria-hidden style={{ fontSize: "15px", lineHeight: 1 }}>😊📨</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ── Founder Letter Overlay ── */}
      <AnimatePresence>
        {letterOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.32 }}
              onClick={() => setLetterOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 200,
                background: "rgba(10,4,18,0.72)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                cursor: "pointer",
              }}
            />

            {/* Letter card */}
            <motion.div
              key="letter"
              initial={{ opacity: 0, scale: 0.94, y: 32 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 201,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "clamp(16px, 4vw, 48px)",
                pointerEvents: "none",
              }}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                style={{
                  pointerEvents: "auto",
                  background: "#FFFFFF",
                  border: "1px solid #E6E6E6",
                  maxWidth: "600px",
                  width: "100%",
                  maxHeight: "90dvh",
                  overflowY: "auto",
                  padding: "clamp(28px, 6vw, 64px)",
                  position: "relative",
                  boxShadow: "0 32px 80px rgba(10,4,18,0.45), 0 0 0 1px rgba(86,88,223,0.08)",
                }}
              >
                {/* Close */}
                <button
                  onClick={() => setLetterOpen(false)}
                  aria-label={positionedForImpact.letter.closeAria}
                  style={{
                    position: "absolute",
                    top: "18px",
                    right: "18px",
                    width: "32px",
                    height: "32px",
                    background: "transparent",
                    border: "1px solid rgba(86,88,223,0.2)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: VIOLET,
                    fontSize: "15px",
                    fontFamily: "Consolas, monospace",
                    lineHeight: 1,
                    transition: "background 0.18s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(86,88,223,0.07)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                >
                  ✕
                </button>

                {/* Eyebrow */}
                <p style={{ ...MONO, display: "flex", alignItems: "center", gap: "10px", fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: VIOLET, marginBottom: "28px" }}>
                  <span aria-hidden style={{ display: "inline-block", width: "24px", height: "1px", background: VIOLET }} />
                  {positionedForImpact.letter.eyebrow}
                </p>

                {/* Date */}
                <p style={{ ...MONO, fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#8A8494", marginBottom: "24px" }}>
                  {positionedForImpact.letter.date}
                </p>

                {/* Headline */}
                <h2 style={{ ...SERIF_STYLE, fontStyle: "italic", fontSize: "clamp(1.35rem, 2.2vw, 1.85rem)", lineHeight: 1.15, letterSpacing: "-0.02em", color: INK_DEEP, marginBottom: "28px" }}>
                  {positionedForImpact.letter.headline}
                </h2>

                {/* Body */}
                {LETTER_PARAGRAPHS.map((p) => (
                  <p key={p.slice(0, 24)} style={{ ...SERIF_STYLE, fontSize: "15px", lineHeight: 1.7, color: "#26263A", marginBottom: "18px" }}>
                    {p}
                  </p>
                ))}

                {/* Signature */}
                <div style={{ marginTop: "36px", display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
                  <div>
                    <p style={{ ...SERIF_STYLE, fontStyle: "italic", fontSize: "clamp(1.1rem, 1.6vw, 1.4rem)", lineHeight: 1.1, color: INK_DEEP }}>
                      {positionedForImpact.letter.signatureName}
                    </p>
                    <p style={{ ...MONO, marginTop: "8px", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#8A8494" }}>
                      {positionedForImpact.letter.signatureRole}
                    </p>
                  </div>
                  <div aria-hidden style={{ width: "40px", height: "40px", border: `1px solid ${VIOLET}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ ...SERIF_STYLE, fontStyle: "italic", fontSize: "17px", color: VIOLET }}>NE</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Logo proof — same section, no visual break */}
      <div
        style={{
          borderTop: "1px solid rgba(86,88,223,0.14)",
          marginTop: "clamp(1.5rem, 3vh, 2.5rem)",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-10 py-5 md:py-6"
          >
            {/* Left label */}
            <p
              className="flex-shrink-0 flex items-center gap-2"
              style={{ ...MONO, fontSize: "9px", letterSpacing: "0.26em", color: VIOLET, textTransform: "uppercase" }}
            >
              <span
                aria-hidden
                style={{ display: "inline-block", width: "20px", height: "1px", backgroundColor: VIOLET, opacity: 0.5 }}
              />
              {positionedForImpact.proof.label}
            </p>

            {/* Logo strip */}
            <div className="flex flex-row items-center justify-start md:justify-end flex-wrap gap-x-8 md:gap-x-12 gap-y-3">
              {partners.map((partner, i) => (
                <div key={partner.alt} className="flex items-center gap-8 md:gap-12">
                  {hiddenLogos[partner.alt] ? (
                    <span style={{ ...MONO, fontSize: "11px", letterSpacing: "0.16em", color: INK_DEEP, opacity: 0.5, textTransform: "uppercase" }}>
                      {partner.alt}
                    </span>
                  ) : (
                    <motion.img
                      src={partner.src}
                      alt={partner.alt}
                      loading="lazy"
                      decoding="async"
                      onError={() => setHiddenLogos((prev) => ({ ...prev, [partner.alt]: true }))}
                      whileHover={{ opacity: 1, scale: 1.05, filter: "grayscale(0%) brightness(1)" }}
                      transition={{ duration: 0.25 }}
                      style={{
                        height: "clamp(32px, 4.5vh, 48px)",
                        width: "auto",
                        objectFit: "contain",
                        display: "block",
                        filter: "grayscale(15%) brightness(0.85)",
                        opacity: 0.75,
                      }}
                    />
                  )}
                  {i < partners.length - 1 && (
                    <span
                      aria-hidden
                      className="hidden md:block"
                      style={{
                        width: "1px",
                        height: "28px",
                        background: "linear-gradient(to bottom, transparent, rgba(86,88,223,0.25), transparent)",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
