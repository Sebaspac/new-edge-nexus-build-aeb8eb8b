import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { img } from "@/content";

const VIOLET   = "#5658DF";
const INK_DEEP = "#17172E";
const MONO: React.CSSProperties = {
  fontFamily: "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace",
};
const SERIF: React.CSSProperties = {
  fontFamily: "'DM Serif Display', Georgia, serif",
};

const REVOLVING_TEXT = "KOSTENLOSES ERSTGESPRÄCH · JETZT BUCHEN · ";

export const FloatingConsultButton = ({ textColor }: { textColor?: string } = {}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div style={{ position: "relative", display: "inline-block" }}>

      {/* Popup — absolute, appears above + left */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="popup"
            initial={{ opacity: 0, scale: 0.88, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 8 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "absolute",
              bottom: "calc(100% + 16px)",
              right: 0,
              zIndex: 60,
              background: "#FFFFFF",
              border: "1.5px solid rgba(86,88,223,0.18)",
              boxShadow: "0 8px 40px rgba(86,88,223,0.18), 0 2px 8px rgba(0,0,0,0.12)",
              padding: "28px 24px 24px",
              width: "300px",
            }}
          >
            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: "rgba(23,23,46,0.35)",
                padding: "4px",
                display: "flex",
              }}
              aria-label="Schließen"
            >
              <X size={15} strokeWidth={1.5} />
            </button>

            {/* Author row */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <img
                src={img("team-sebastian")}
                alt="Sebastian Pachon"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  objectPosition: "25% 20%",
                  flexShrink: 0,
                  border: "2px solid rgba(86,88,223,0.20)",
                }}
              />
              <div>
                <div style={{ ...SERIF, fontSize: "15px", color: INK_DEEP, lineHeight: 1.2, marginBottom: "2px" }}>
                  Sebastian Pachon
                </div>
                <div style={{ ...MONO, fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase" as const, color: "rgba(23,23,46,0.45)" }}>
                  Gründer & Geschäftsführer
                </div>
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: "1px", background: "rgba(23,23,46,0.08)", marginBottom: "16px" }} />

            {/* Heading + badge */}
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "8px", marginBottom: "10px" }}>
              <h3 style={{ fontStyle: "italic", color: INK_DEEP }}>
                30-Min Erstgespräch
              </h3>
              <span style={{
                ...MONO,
                fontSize: "9px",
                letterSpacing: "0.18em",
                textTransform: "uppercase" as const,
                color: VIOLET,
                border: `1px solid ${VIOLET}`,
                padding: "3px 7px",
                flexShrink: 0,
                marginTop: "3px",
              }}>
                Kostenlos
              </span>
            </div>

            {/* Description */}
            <p style={{ ...MONO, color: "rgba(23,23,46,0.62)", marginBottom: "20px" }}>
              Ein kurzes, unverbindliches Gespräch mit Sebastian — wir besprechen Ihre
              Situation und prüfen, wie KI oder Prozessautomatisierung bei Ihnen wirkt.
            </p>

            {/* CTA */}
            <button
              onClick={() => { setIsOpen(false); navigate("/kontakt"); }}
              style={{
                width: "100%",
                background: VIOLET,
                color: "#FFFFFF",
                ...MONO,
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase" as const,
                padding: "13px 20px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Jetzt Termin buchen
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Circle button */}
      <motion.div
        style={{ position: "relative", cursor: "pointer", width: "152px", height: "152px" }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.28 }}
        onClick={() => navigate("/kontakt")}
      >
        {/* Revolving text ring — CSS animation, no Framer overhead */}
        <div style={{
          position: "absolute", inset: 0,
          animation: "fcb-spin 12s linear infinite",
        }}>
          <svg viewBox="0 0 200 200" style={{ width: "100%", height: "100%" }}>
            <defs>
              <path id="fcb-circle" d="M 100,100 m -72,0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0" />
            </defs>
            <text style={{ fontSize: "17px", fill: textColor ?? VIOLET, fontFamily: "Consolas, ui-monospace, monospace", letterSpacing: "0.04em" }}>
              <textPath href="#fcb-circle" startOffset="0%">{REVOLVING_TEXT}</textPath>
            </text>
          </svg>
          <style>{`@keyframes fcb-spin { to { transform: rotate(360deg); } }`}</style>
        </div>

        {/* Center image */}
        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <div style={{
            width: "96px",
            height: "96px",
            borderRadius: "50%",
            overflow: "hidden",
            border: `2.5px solid ${VIOLET}`,
            boxShadow: "0 4px 20px rgba(86,88,223,0.28)",
          }}>
            <img
              src={img("team-sebastian")}
              alt="Sebastian Pachon — Erstgespräch buchen"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "25% 20%" }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
