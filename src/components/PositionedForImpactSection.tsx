import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import foundersColorImage from "@/assets/founders-color.webp";
import bmpLogo from "@/assets/logos/bayerischer-mittelstandspreis-2026.png";
import bafaLogo from "@/assets/logos/bafa-logo.png";
import idcLogo from "@/assets/logos/idc-logo.png";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";

const partners = [
  { src: bmpLogo, alt: "Bayerischer Mittelstandspreis 2026" },
  { src: bafaLogo, alt: "BAFA förderfähig" },
  { src: idcLogo, alt: "International anerkannt" },
];

const VIOLET = "#5B21B6";
const INK_DEEP = "#1A0A2E";
const MONO: React.CSSProperties = { fontFamily: "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace" };

export const PositionedForImpactSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hiddenLogos, setHiddenLogos] = useState<Record<string, boolean>>({});
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
              backgroundColor: "#5B21B6",
            }}
          />
          <span
            style={{
              fontFamily: "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace",
              fontSize: "11px",
              letterSpacing: "0.2em",
              color: "#5B21B6",
              textTransform: "uppercase",
            }}
          >
            Positioned for Impact, Wie wir arbeiten
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
                  alt="Sebastian Pachon, Gründer von New Edge"
                  src={foundersColorImage}
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
                  backgroundColor: "rgba(91,33,182,0.55)",
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
                Sebastian & Wenjamin<br />
                <span style={{ opacity: 0.5 }}>New Edge Founders</span>
              </figcaption>
            </div>
          </motion.figure>

          {/* Right: Manifesto + stats */}
          <div className="flex flex-col">
            <motion.blockquote
              style={{ y: quoteY, fontFamily: "'DM Serif Display', Georgia, serif", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(2rem, 3.8vw, 3rem)", lineHeight: 0.95, letterSpacing: "-0.01em", color: "#1A0A2E" }}
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="m-0 p-0"
            >
              Wir bauen Systeme, wo
              <br />
              Marke, Kommunikation und{" "}
              <AnimatedTextCycle
                words={["Prozesse", "KI", "Daten", "Automation"]}
                interval={2800}
                renderWord={(word) => (
                  <span
                    style={{
                      color: "#5B21B6",
                      fontStyle: "normal",
                      fontFamily: "'DM Serif Display', Georgia, serif",
                    }}
                  >
                    {word}
                  </span>
                )}
              />
              <br />
              aufeinander hören.
            </motion.blockquote>

            {/* Stats row, hairline separators, no cards */}
            <motion.div
              style={{ y: statsY, borderRadius: 0 }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="mt-6 md:mt-8 grid grid-cols-3"
            >
              {[
                { value: "5,150", label: "Mitarbeitende, Sweet Spot" },
                { value: "30%", label: "Zeit zurück im Tagesgeschäft" },
                { value: "4x", label: "ROI auf Systemarbeit" },
              ].map((stat, idx) => (
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
                      color: "#5B21B6",
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
                      color: "#3A3A3A",
                      lineHeight: 1.5,
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Subtle CTA, no button background */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-5 md:mt-6"
            >
              <Link
                to="/#contact-section"
                onClick={() => {
                  setTimeout(() => {
                    document.querySelector("#contact-section")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }, 100);
                }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  fontFamily: "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace",
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#1A0A2E",
                  textDecoration: "none",
                  paddingBottom: "4px",
                  borderBottom: "1px solid #1A0A2E",
                  transition: "color 200ms ease-out, border-color 200ms ease-out",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#5B21B6";
                  (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "#5B21B6";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#1A0A2E";
                  (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "#1A0A2E";
                }}
              >
                Methodik kennenlernen
                <span aria-hidden style={{ fontFamily: "Consolas, monospace" }}>{"->"}</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Logo proof — same section, no visual break */}
      <div
        style={{
          borderTop: "1px solid rgba(91,33,182,0.14)",
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
              Ausgezeichnet &amp; anerkannt
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
                        background: "linear-gradient(to bottom, transparent, rgba(91,33,182,0.25), transparent)",
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
