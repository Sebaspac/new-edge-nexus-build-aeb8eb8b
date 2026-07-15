import { motion, useReducedMotion } from "framer-motion";
import { EdgePillButton } from "@/components/ui/EdgeCta";
import { embeddedAI as EAI_STATIC } from "@/content/sections/embeddedAI";
import { embeddedAI as embeddedAiEn } from "@/content/en/sections/embeddedAI";
import { problemJourney as PJ_STATIC } from "@/content/sections/problemJourney";
import { problemJourney as problemJourneyEn } from "@/content/en/sections/problemJourney";
import { videoShowcase as videoShowcaseStatic } from "@/content";
import { videoShowcase as videoShowcaseEn } from "@/content/en/sections/videoShowcase";
import { useHomeSection } from "@/hooks/useHomeContent";
import { useLocalized } from "@/hooks/useLocalized";

/* ── Design tokens ── */
const VIOLET = "#5658DF";
const VIOLET_LIGHT = "#8B8DF0";
const LILAC = "#C2C3F6";
const INK_DEEP = "#17172E";
const INK = "#3C3C47";
const OUTFIT = "'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
const HEAD: React.CSSProperties = { fontFamily: OUTFIT, fontWeight: 700 };
const BODY: React.CSSProperties = { fontFamily: OUTFIT, fontWeight: 400 };
const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * „Was wir machen"-Modul: Text links (Ein externer Head of AI +
 * „Wir übernehmen"-Liste + CTA), rechts die „Reise zur KI-Abteilung"
 * als dunkle Visual-Karte (5 Stationen).
 */
export const EmbeddedAI = () => {
  // Inhalte live aus dem CMS (locale-fähig); Fallback: sprachrichtiger Content-Layer
  const embeddedAI = useHomeSection("embeddedAI", EAI_STATIC, embeddedAiEn);
  // Reise-Stationen live aus dem CMS; Fallback: statischer Content
  const journey = useHomeSection("problemJourney", PJ_STATIC, problemJourneyEn).right;
  const videoShowcase = useLocalized("video-showcase", videoShowcaseStatic, videoShowcaseEn);
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-label={embeddedAI.ariaLabel}
      className="relative"
      style={{ overflowX: "clip" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center">

          {/* ── LINKS: Head of AI + Wir übernehmen + CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <h2 style={{ color: INK_DEEP }}>
              {embeddedAI.heading.lead}<span style={{ color: VIOLET }}>{embeddedAI.heading.highlight}</span>
            </h2>
            <p style={{ ...BODY, color: INK, maxWidth: "52ch", marginBottom: "28px" }}>
              {embeddedAI.paragraphs[0]}
            </p>

            <p className="uppercase mb-4" style={{ ...BODY, fontWeight: 700, fontSize: "14px", letterSpacing: "0.03em", color: VIOLET }}>
              {embeddedAI.uebernahmeLabel}
            </p>
            <ul className="m-0 p-0 grid sm:grid-cols-2 gap-x-8 gap-y-3" style={{ listStyle: "none", marginBottom: "24px" }}>
              {embeddedAI.uebernahme.map((u, i) => (
                <li key={u} className="flex items-center gap-3">
                  <span
                    style={{
                      ...HEAD,
                      fontSize: "12px",
                      color: "#fff",
                      background: VIOLET,
                      width: "26px",
                      height: "26px",
                      borderRadius: "50%",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {i + 1}
                  </span>
                  <span style={{ ...BODY, fontWeight: 500, fontSize: "14.5px", color: INK_DEEP }}>{u}</span>
                </li>
              ))}
            </ul>

            <p style={{ ...HEAD, fontWeight: 600, color: INK_DEEP, maxWidth: "46ch", marginBottom: "28px" }}>
              {embeddedAI.paragraphs[1]}
            </p>

            <EdgePillButton to={videoShowcase.ctaPrimary.to}>{videoShowcase.ctaPrimary.label}</EdgePillButton>
          </motion.div>

          {/* ── RECHTS: Die Reise zur KI-Abteilung — Route mit Stations-Knoten,
                 die Linie zeichnet sich beim Reinscrollen, Station 05 ist das Ziel ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            style={{
              position: "relative",
              padding: "clamp(8px, 1vw, 16px) 0",
            }}
          >
            <p style={{ ...BODY, fontWeight: 600, fontSize: "14px", color: "#8A8494", marginBottom: "28px", position: "relative" }}>
              {journey.heading}
            </p>

            {/* Route: Verlaufslinie + Stationen */}
            <div style={{ position: "relative", paddingLeft: "34px" }}>
              {/* Linie zeichnet sich von oben nach unten (Route der Reise) */}
              <motion.div
                aria-hidden
                initial={{ scaleY: reduceMotion ? 1 : 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 1.1, delay: 0.2, ease: EASE }}
                style={{
                  position: "absolute",
                  left: "5px",
                  top: "8px",
                  bottom: "26px",
                  width: "2px",
                  transformOrigin: "top",
                  background: `linear-gradient(180deg, ${LILAC} 0%, ${VIOLET_LIGHT} 55%, ${VIOLET} 100%)`,
                }}
              />

              {journey.journey.map((station, i) => {
                const isLast = i === journey.journey.length - 1;
                return (
                  <motion.div
                    key={station.index}
                    initial={{ opacity: 0, x: reduceMotion ? 0 : 14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.55, delay: 0.25 + i * 0.12, ease: EASE }}
                    style={{
                      position: "relative",
                      paddingBottom: isLast ? 0 : "24px",
                    }}
                  >
                    {/* Stations-Knoten auf der Route */}
                    <span
                      aria-hidden
                      style={{
                        position: "absolute",
                        left: "-34px",
                        top: isLast ? "18px" : "4px",
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        background: isLast ? VIOLET : VIOLET_LIGHT,
                        boxShadow: isLast
                          ? "0 0 0 5px rgba(86,88,223,0.16), 0 0 16px rgba(86,88,223,0.45)"
                          : "0 0 0 4px rgba(86,88,223,0.12)",
                      }}
                    />

                    {isLast ? (
                      /* Ziel-Station: hervorgehobenes Panel — hier bleibt NEWEDGE */
                      <div
                        style={{
                          background: "rgba(86,88,223,0.08)",
                          border: "1px solid rgba(86,88,223,0.32)",
                          borderRadius: "14px",
                          padding: "16px 18px",
                        }}
                      >
                        <div className="flex items-baseline gap-3" style={{ marginBottom: "5px" }}>
                          <span style={{ ...HEAD, fontSize: "12px", color: VIOLET }}>{station.index}</span>
                          <span style={{ ...HEAD, fontWeight: 700, fontSize: "16px", letterSpacing: "0.03em", color: INK_DEEP }}>
                            {station.category}
                          </span>
                        </div>
                        <p style={{ ...BODY, color: INK }}>
                          {station.title}
                        </p>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-baseline gap-3" style={{ marginBottom: "4px" }}>
                          <span style={{ ...HEAD, fontSize: "11.5px", color: "rgba(86,88,223,0.75)" }}>{station.index}</span>
                          <span style={{ ...HEAD, fontWeight: 700, fontSize: "14.5px", letterSpacing: "0.03em", color: INK_DEEP }}>
                            {station.category}
                          </span>
                        </div>
                        <p style={{ ...BODY, color: "rgba(23,23,46,0.65)", maxWidth: "38ch" }}>
                          {station.title}
                        </p>
                      </>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
