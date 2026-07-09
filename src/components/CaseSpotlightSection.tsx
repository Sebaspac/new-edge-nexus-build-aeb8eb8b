import { motion } from "framer-motion";
import { MapPin, Quote } from "lucide-react";
import { EdgePillButton } from "@/components/ui/EdgeCta";
import { caseSpotlight as caseSpotlightStatic, img } from "@/content";
import { miniCasesBySlug } from "@/content/collections/miniCases";
import { useCms } from "@/hooks/useCms";

const OUTFIT = "'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
const VIOLET_LIGHT = "#8B8DF0";
const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Kunden-Case-Feature im Referenz-Layout (dapta.ai): große dunkle
 * abgerundete Karte, Standort-Pin + „Reales Projekt", Headline mit
 * akzentfarbenem Kundennamen, Testimonial-Zitat, unten links der Autor
 * (Monogramm + Name + Rolle) und unten rechts der CTA, Bild rechts.
 * Nur Homepage-Spotlight — die Case-Detailseite behält result/metrics.
 */
export const CaseSpotlightSection = () => {
  // Inhalt live aus dem CMS (Strapi Single-Type „case-spotlight"); Fallback: statisch
  const caseSpotlight = useCms("case-spotlight", caseSpotlightStatic);
  const c = miniCasesBySlug[caseSpotlight.painPointSlug]?.find((m) => m.id === caseSpotlight.caseId);
  if (!c) return null;

  return (
    <section aria-label={caseSpotlight.headlineClient}>
      <div
        className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8"
        style={{ paddingTop: "clamp(48px,6vw,80px)", paddingBottom: "clamp(48px,6vw,80px)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="grid lg:grid-cols-[1.6fr_1fr] items-stretch"
          style={{
            borderRadius: "24px",
            overflow: "hidden",
            background: "linear-gradient(115deg, #1D1B38 0%, #14131F 55%, #101018 100%)",
            border: "1px solid rgba(139,141,240,0.18)",
          }}
        >
          {/* ── Text links ── */}
          <div
            style={{
              padding: "clamp(16px,1.8vw,24px) clamp(32px,4.5vw,60px)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Standort + „Reales Projekt"-Eyebrow */}
            <div className="flex items-center gap-3" style={{ marginBottom: "12px" }}>
              <span className="flex items-center gap-2">
                <MapPin style={{ width: "16px", height: "16px", color: VIOLET_LIGHT }} />
                <span style={{ fontFamily: OUTFIT, fontWeight: 500, fontSize: "14.5px", color: "#D5D2E2" }}>
                  {caseSpotlight.location}
                </span>
              </span>
              <span aria-hidden style={{ width: "1px", height: "13px", background: "rgba(213,210,226,0.3)" }} />
              <span
                className="uppercase"
                style={{
                  fontFamily: OUTFIT,
                  fontWeight: 700,
                  fontSize: "11px",
                  letterSpacing: "0.08em",
                  color: VIOLET_LIGHT,
                }}
              >
                {c.badge.split("·")[0].trim()}
              </span>
            </div>

            {/* Headline mit Akzent-Kundenname */}
            <h2 style={{ color: "#fff", maxWidth: "26ch", fontSize: "clamp(22px, 2.3vw, 30px)", lineHeight: 1.12 }}>
              {caseSpotlight.headlinePrefix}
              <span style={{ color: VIOLET_LIGHT }}>{caseSpotlight.headlineClient}</span>
              {caseSpotlight.headlineSuffix}
            </h2>

            {/* Testimonial-Zitat */}
            <figure style={{ margin: 0, marginTop: "clamp(12px,1.4vw,18px)" }}>
              <Quote
                aria-hidden
                strokeWidth={1.5}
                style={{ width: "22px", height: "22px", color: VIOLET_LIGHT, opacity: 0.55, marginBottom: "6px" }}
              />
              <blockquote
                style={{
                  margin: 0,
                  fontFamily: OUTFIT,
                  fontWeight: 400,
                  fontSize: "clamp(17px,1.4vw,19px)",
                  lineHeight: 1.4,
                  color: "#E9E7F3",
                  maxWidth: "46ch",
                }}
              >
                {caseSpotlight.quote}
              </blockquote>
            </figure>

            {/* Autor unten links + CTA unten rechts — auf Bildhöhe gezogen */}
            <div
              className="flex flex-wrap items-center justify-between gap-x-6 gap-y-5"
              style={{ marginTop: "auto", paddingTop: "clamp(14px,1.6vw,20px)" }}
            >
              {/* Autor — Monogramm-Avatar + Name + Rolle */}
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    flexShrink: 0,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(139,141,240,0.14)",
                    border: "1px solid rgba(139,141,240,0.34)",
                    fontFamily: OUTFIT,
                    fontWeight: 700,
                    fontSize: "12.5px",
                    letterSpacing: "0.02em",
                    color: VIOLET_LIGHT,
                  }}
                >
                  {caseSpotlight.authorInitials}
                </span>
                <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.3 }}>
                  <span style={{ fontFamily: OUTFIT, fontWeight: 600, fontSize: "15.5px", color: "#F1EFFA" }}>
                    {caseSpotlight.authorName}
                  </span>
                  <span style={{ fontFamily: OUTFIT, fontWeight: 400, fontSize: "14px", color: "#9A94AC" }}>
                    {caseSpotlight.authorRole}
                  </span>
                </span>
              </div>

              {/* CTA */}
              <EdgePillButton to={caseSpotlight.href}>{caseSpotlight.ctaLabel}</EdgePillButton>
            </div>
          </div>

          {/* ── Bild rechts (Querformat, als Figur mit Bildunterschrift) ── */}
          <figure
            className="hidden lg:flex flex-col justify-center"
            style={{ margin: 0, padding: "clamp(20px,2vw,34px)", gap: "14px" }}
          >
            <div
              className="relative w-full"
              style={{
                aspectRatio: "4 / 3",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid rgba(139,141,240,0.2)",
                boxShadow: "0 26px 64px -26px rgba(0,0,0,0.55)",
              }}
            >
              <img
                src={img(caseSpotlight.image.src)}
                alt={caseSpotlight.image.alt}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                loading="lazy"
              />
            </div>
            <figcaption
              className="flex items-center gap-2"
              style={{
                fontFamily: OUTFIT,
                fontWeight: 500,
                fontSize: "13px",
                letterSpacing: "0.01em",
                color: "#9A94AC",
              }}
            >
              <span
                aria-hidden
                style={{ width: "18px", height: "1px", background: "rgba(139,141,240,0.5)", flexShrink: 0 }}
              />
              {caseSpotlight.image.alt}
            </figcaption>
          </figure>
        </motion.div>
      </div>
    </section>
  );
};
