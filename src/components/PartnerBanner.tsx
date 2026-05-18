import { useState } from "react";
import { motion } from "framer-motion";
import bmpLogo from "@/assets/logos/bayerischer-mittelstandspreis-2026.png";
import bafaLogo from "@/assets/logos/bafa-logo.png";
import idcLogo from "@/assets/logos/idc-logo.png";

const VIOLET = "#5B21B6";
const VIOLET_MID = "#7C3AED";
const INK_DEEP = "#1A0A2E";
const MONO: React.CSSProperties = { fontFamily: "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace" };

const partners = [
  { src: bmpLogo, alt: "Bayerischer Mittelstandspreis 2026" },
  { src: bafaLogo, alt: "BAFA förderfähig" },
  { src: idcLogo, alt: "International anerkannt" },
];

export const PartnerBanner = () => {
  const [hiddenLogos, setHiddenLogos] = useState<Record<string, boolean>>({});

  return (
    <section
      style={{
        background: [
          "radial-gradient(ellipse 80% 100% at 50% 50%, rgba(91,33,182,0.07) 0%, transparent 70%)",
          "linear-gradient(180deg, rgba(91,33,182,0.04) 0%, rgba(248,245,255,0.0) 100%)",
          "#F2ECFF",
        ].join(", "),
        borderTop: "1px solid rgba(91,33,182,0.14)",
      }}
      data-section="partner-banner"
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
            style={{ ...MONO, fontSize: "9px", letterSpacing: "0.26em", color: VIOLET, textTransform: "uppercase" as const }}
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
                  <span
                    style={{ ...MONO, fontSize: "11px", letterSpacing: "0.16em", color: INK_DEEP, opacity: 0.5, textTransform: "uppercase" as const }}
                  >
                    {partner.alt}
                  </span>
                ) : (
                  <motion.img
                    src={partner.src}
                    alt={partner.alt}
                    loading="lazy"
                    decoding="async"
                    onError={() =>
                      setHiddenLogos((prev) => ({ ...prev, [partner.alt]: true }))
                    }
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
    </section>
  );
};
