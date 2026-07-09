import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { EdgePillButton, EdgeTextButton } from "@/components/ui/EdgeCta";
import { videoShowcase as videoShowcaseStatic } from "@/content";
import { hero as HERO_STATIC } from "@/content/sections/hero";
import { useHomeContent } from "@/hooks/useHomeContent";
import { useCms } from "@/hooks/useCms";

const OUTFIT = "'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
const VIOLET = "#5658DF";
const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Gradient-Showcase-Karte mit Erklärvideo — Referenz-Layout:
 * Text links, Click-to-Play-Video rechts, alles in einer großen
 * abgerundeten Verlaufs-Karte auf Papier-Hintergrund.
 */
export const VideoShowcaseSection = () => {
  // Text/CTAs live aus dem CMS (Strapi Single-Type „video-showcase"); Fallback: statisch
  const videoShowcase = useCms("video-showcase", videoShowcaseStatic);
  const video = useHomeContent().hero?.video ?? HERO_STATIC.video;
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <section aria-label={videoShowcase.heading}>
      <div
        className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8"
        style={{ paddingTop: "clamp(48px,6vw,80px)", paddingBottom: "clamp(48px,6vw,80px)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="grid lg:grid-cols-[1fr_1fr] items-center gap-8 lg:gap-12 lg:min-h-[394px]"
          style={{
            borderRadius: "24px",
            padding: "clamp(20px,2.2vw,30px)",
            background:
              "linear-gradient(120deg, #17172E 0%, #2B2A6E 45%, #5658DF 80%, #8B8DF0 100%)",
            overflow: "hidden",
          }}
        >
          {/* ── Text links ── */}
          <div>
            <h2
              style={{
                color: "#fff",
              }}
            >
              {videoShowcase.heading}
            </h2>
            {/* Subtitle bewusst entfernt — nur der Titel bleibt. */}
            <div className="flex flex-wrap items-center gap-x-7 gap-y-4" style={{ marginTop: "24px" }}>
              <EdgePillButton to={videoShowcase.ctaPrimary.to}>{videoShowcase.ctaPrimary.label}</EdgePillButton>
              {/* Heller Text-Button — die Karte ist dunkel */}
              <EdgeTextButton to="/kontakt" tone="light">
                {videoShowcase.ctaSecondary.label}
              </EdgeTextButton>
            </div>
          </div>

          {/* ── Video rechts — Click-to-Play-Facade, nie rohes Thumbnail ── */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "480px",
              marginLeft: "auto",
              marginRight: "auto",
              aspectRatio: "16 / 9",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
            }}
          >
            {videoPlaying ? (
              <iframe
                src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1&color=white&autoplay=1`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
              />
            ) : (
              <button
                type="button"
                onClick={() => setVideoPlaying(true)}
                aria-label={video.title}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "18px",
                  backgroundImage: [
                    "linear-gradient(180deg, rgba(12,12,28,0.15) 0%, rgba(12,12,28,0.75) 100%)",
                    `url(https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg)`,
                  ].join(", "),
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <span
                  className="hover:scale-110"
                  style={{
                    width: "68px",
                    height: "68px",
                    borderRadius: "50%",
                    background: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "transform 0.25s ease-out",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
                  }}
                >
                  <Play fill={VIOLET} color={VIOLET} style={{ width: "24px", height: "24px", marginLeft: "3px" }} />
                </span>
                <span style={{ fontFamily: OUTFIT, fontWeight: 500, fontSize: "13px", color: "#fff", textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}>
                  {video.title}
                </span>
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
