import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { Award } from "lucide-react";
import albanovaWebsite from "@/assets/albanova-website.png";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";

const INK_DEEP = "#1A0A2E";
const VIOLET_EDGE = "#5B21B6";
const VIOLET_GLOW = "#9F7AEA";
const EASE = [0.16, 1, 0.3, 1] as const;

const CONSOLAS = "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace";
const DM_SERIF = "'DM Serif Display', Georgia, serif";

const credits: Array<{ k: string; v: string }> = [
  { k: "CLIENT", v: "ALBANOVA" },
  { k: "SECTOR", v: "MITTELSTAND, DACH" },
  { k: "SCOPE", v: "BRAND, WEB, SYSTEM" },
  { k: "YEAR", v: "2026" },
  { k: "AWARD", v: "BAYERISCHER MITTELSTANDSPREIS" },
];

const stats: Array<{ value: string; label: string; sub: string }> = [
  { value: "01", label: "MARKENRELAUNCH", sub: "Identity, Web, System" },
  { value: "02", label: "KONVERSION", sub: "Klare Conversion Logik" },
  { value: "03", label: "SICHTBARKEIT", sub: "Mittelstandspreis 2026" },
];

export const FeaturedCaseAlbaNova = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{
        backgroundColor: INK_DEEP,
        color: "#FFFFFF",
        paddingTop: "clamp(2rem, 4vw, 3.5rem)",
        paddingBottom: "clamp(2rem, 4vw, 3.5rem)",
      }}
    >
      <NoiseOverlay opacity={0.06} />

      {/* Single Glow Exemption: violet blob behind the headline */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 1.4, ease: EASE }}
        className="absolute pointer-events-none"
        style={{
          top: "18%",
          left: "-8%",
          width: "780px",
          height: "780px",
          background:
            "radial-gradient(circle, rgba(91,33,182,0.20) 0%, rgba(91,33,182,0.08) 45%, transparent 72%)",
          filter: "blur(100px)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Eyebrow signature */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex items-center gap-3 mb-10"
        >
          <span
            aria-hidden
            style={{
              display: "inline-block",
              width: "32px",
              height: "1px",
              backgroundColor: VIOLET_GLOW,
            }}
          />
          <span
            style={{
              fontFamily: CONSOLAS,
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: VIOLET_GLOW,
            }}
          >
            Featured Case, Ausgezeichneter Mittelstand 2025
          </span>
        </motion.div>

        {/* Display moment + preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Oversized italic AlbaNova. */}
          <div className="lg:col-span-8 relative">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.0, ease: EASE, delay: 0.1 }}
              style={{
                fontFamily: DM_SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                lineHeight: 0.9,
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
                margin: 0,
              }}
            >
              AlbaNova.
            </motion.h2>

            {/* Film credit metadata */}
            <motion.dl
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.35 }}
              className="mt-6"
              style={{
                fontFamily: CONSOLAS,
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                maxWidth: "560px",
              }}
            >
              {credits.map((c, i) => (
                <div
                  key={c.k}
                  className="grid grid-cols-12 gap-4 py-3"
                  style={{
                    borderTop:
                      i === 0
                        ? "1px solid rgba(159,122,234,0.18)"
                        : "1px solid rgba(159,122,234,0.10)",
                    borderBottom:
                      i === credits.length - 1
                        ? "1px solid rgba(159,122,234,0.18)"
                        : "none",
                  }}
                >
                  <dt
                    className="col-span-4"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    {c.k}
                  </dt>
                  <dd
                    className="col-span-8"
                    style={{ color: "#FFFFFF", margin: 0 }}
                  >
                    {c.v}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Preview portrait */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.0, ease: EASE, delay: 0.25 }}
            className="lg:col-span-4 relative"
          >
            <div
              className="relative w-full"
              style={{
                aspectRatio: "4 / 3",
                border: "1px solid rgba(159,122,234,0.18)",
                backgroundColor: INK_DEEP,
                overflow: "hidden",
              }}
            >
              <img
                src={albanovaWebsite}
                alt="AlbaNova Website, Fallstudie Vorschau"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Award badge */}
            <div
              className="mt-4 inline-flex items-center gap-2"
              style={{
                fontFamily: CONSOLAS,
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: VIOLET_GLOW,
              }}
            >
              <Award
                className="w-3.5 h-3.5"
                style={{ color: VIOLET_GLOW }}
                aria-hidden
              />
              Award Issue, 2026
            </div>
          </motion.div>
        </div>

        {/* Lead paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.45 }}
          className="mt-8"
          style={{
            fontFamily: CONSOLAS,
            fontSize: "14px",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.55)",
            maxWidth: "62ch",
          }}
        >
          AlbaNova kam mit einer fragmentierten Online Präsenz. Wir haben Marke,
          Website und Conversion Logik als ein zusammenhängendes System neu
          gedacht. Das Ergebnis: eine Marke mit Haltung, eine Website mit
          Wirkung, nominiert für den Bayerischen Mittelstandspreis 2026.
        </motion.p>

        {/* Ghost numeral stats row */}
        <div
          className="mt-8 pt-6 grid grid-cols-1 sm:grid-cols-3"
          style={{ borderTop: "1px solid rgba(159,122,234,0.18)" }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.value}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.9,
                ease: EASE,
                delay: 0.15 + i * 0.12,
              }}
              className="py-2 sm:py-0"
              style={{
                paddingLeft: i === 0 ? 0 : "clamp(1rem, 2vw, 2rem)",
                borderLeft:
                  i === 0 ? "none" : "1px solid rgba(159,122,234,0.18)",
              }}
            >
              <div
                style={{
                  fontFamily: DM_SERIF,
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.02em",
                  color: "transparent",
                  WebkitTextStroke: "1.5px rgba(91,33,182,0.85)",
                }}
              >
                {s.value}
              </div>
              <div
                className="mt-4"
                style={{
                  fontFamily: CONSOLAS,
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                }}
              >
                {s.label}
              </div>
              <div
                className="mt-2"
                style={{
                  fontFamily: CONSOLAS,
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                {s.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Single CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          className="mt-8"
        >
          <Link
            to="/case-study/albanova"
            className="inline-flex items-center group"
            style={{
              fontFamily: CONSOLAS,
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              backgroundColor: VIOLET_EDGE,
              padding: "16px 32px",
              border: `1px solid ${VIOLET_EDGE}`,
              transition: "background-color 300ms ease-out, color 300ms ease-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = INK_DEEP;
              e.currentTarget.style.color = VIOLET_GLOW;
              e.currentTarget.style.borderColor = VIOLET_GLOW;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = VIOLET_EDGE;
              e.currentTarget.style.color = "#FFFFFF";
              e.currentTarget.style.borderColor = VIOLET_EDGE;
            }}
          >
            Fallstudie lesen
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCaseAlbaNova;
