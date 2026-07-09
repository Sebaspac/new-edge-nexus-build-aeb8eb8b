import { motion } from "framer-motion";
import { Headset, Users, Workflow } from "lucide-react";
import { teamSupport, img } from "@/content";

const OUTFIT = "'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
const VIOLET = "#5658DF";
const VIOLET_LIGHT = "#8B8DF0";
const INK_DEEP = "#17172E";
const INK = "#3C3C47";
const EASE = [0.22, 1, 0.36, 1] as const;

/** Dekorative Icons je Feature-Spalte (Reihenfolge = Content-Reihenfolge). */
const FEATURE_ICONS = [Headset, Users, Workflow];

interface TeamSupportSectionProps {
  /** Trigger-Anker für den schwebenden Founder-Badge (Index.tsx) — hier blendet er wieder aus. */
  sectionRef?: React.RefObject<HTMLElement>;
}

/**
 * Team-Support-Modul (Referenz-Layout in NEWEDGE-CI): ein Ansprechpartner,
 * die Manpower einer ganzen Agentur — Kicker, zentrierte Headline, Absatz,
 * dunkle Team-Banner-Pill mit echten Avataren, drei Feature-Spalten.
 */
export const TeamSupportSection = ({ sectionRef }: TeamSupportSectionProps = {}) => (
  <section ref={sectionRef as React.RefObject<HTMLElement>} aria-label={teamSupport.kicker}>
    <div
      className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center"
      style={{ paddingTop: "clamp(56px,7vw,96px)", paddingBottom: "clamp(56px,7vw,96px)" }}
    >
      {/* Kicker + Headline + Absatz */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <p
          className="uppercase"
          style={{ fontFamily: OUTFIT, fontWeight: 700, fontSize: "14px", letterSpacing: "0.06em", color: VIOLET, marginBottom: "14px" }}
        >
          {teamSupport.kicker}
        </p>
        <h2
          style={{
            color: INK_DEEP,
          }}
        >
          {teamSupport.headingLead}
          <span style={{ color: VIOLET }}>{teamSupport.headingHighlight}</span>
        </h2>
        <p
          className="mx-auto"
          style={{
            color: INK,
            maxWidth: "62ch",
            marginBottom: "clamp(36px, 5vh, 52px)",
          }}
        >
          {teamSupport.paragraph}
        </p>
      </motion.div>

      {/* Team-Banner-Pill: echte Avatare + Zusage */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
        className="inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
        style={{
          background: `linear-gradient(120deg, #1D1B38 0%, ${INK_DEEP} 60%, #100E1E 100%)`,
          borderRadius: "999px",
          padding: "14px clamp(24px, 3vw, 40px)",
          marginBottom: "clamp(48px, 7vh, 72px)",
        }}
      >
        <div className="flex items-center">
          {teamSupport.banner.avatars.map((a, i) => (
            <img
              key={a.src}
              src={img(a.src)}
              alt={a.alt}
              loading="lazy"
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "50%",
                objectFit: "cover",
                border: `2px solid ${i === 1 ? VIOLET_LIGHT : "rgba(255,255,255,0.25)"}`,
                marginLeft: i === 0 ? 0 : "-12px",
                position: "relative",
                zIndex: teamSupport.banner.avatars.length - i,
                display: "block",
              }}
            />
          ))}
        </div>
        <p style={{ fontFamily: OUTFIT, fontWeight: 600, fontSize: "clamp(15px, 1.4vw, 18px)", color: "#fff", textAlign: "left" }}>
          {teamSupport.banner.textLead}
          <span style={{ color: VIOLET_LIGHT }}>{teamSupport.banner.textHighlight}</span>
        </p>
      </motion.div>

      {/* Drei Feature-Spalten */}
      <div className="grid md:grid-cols-3 gap-x-10 gap-y-12">
        {teamSupport.features.map((f, i) => {
          const Icon = FEATURE_ICONS[i % FEATURE_ICONS.length];
          return (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease: EASE }}
              className="flex flex-col items-center"
            >
              <span
                style={{
                  width: "68px",
                  height: "68px",
                  borderRadius: "50%",
                  background: "#fff",
                  border: "1px solid rgba(86,88,223,0.25)",
                  boxShadow: "0 12px 32px rgba(86,88,223,0.14)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "22px",
                }}
              >
                <Icon strokeWidth={1.7} style={{ width: "26px", height: "26px", color: VIOLET }} />
              </span>
              <h3
                style={{
                  color: VIOLET,
                  maxWidth: "16ch",
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  color: INK,
                  maxWidth: "34ch",
                }}
              >
                {f.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);
