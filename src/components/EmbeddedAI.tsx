import { useIsMobile } from "@/hooks/use-mobile";
import { embeddedAI as EAI_STATIC } from "@/content/sections/embeddedAI";
import { useHomeContent } from "@/hooks/useHomeContent";

/* ── Design tokens (Ink & Edge) ── */
const VIOLET = "#5658DF";
const INK_DEEP = "#17172E";
const INK = "#3C3C47";
const HAIRLINE = "#E6E6E6";
const SERIF: React.CSSProperties = { fontFamily: "'DM Serif Display', Georgia, serif", fontWeight: 400 };
const MONO: React.CSSProperties = { fontFamily: "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace" };

export const EmbeddedAI = () => {
  const isMobile = useIsMobile();

  // Inhalte live aus dem CMS (Strapi „Home"); Fallback: statischer Content-Layer
  const embeddedAI = useHomeContent().embeddedAI ?? EAI_STATIC;
  // On mobile, the monospace `54ch` cap renders wider than a 375px viewport,
  // so the paragraphs cannot wrap and clip on the right edge. Drop the cap on
  // mobile and let text flow to the full column width.
  const proseMaxWidth = isMobile ? "100%" : "54ch";

  return (
    <section
      aria-label={embeddedAI.ariaLabel}
      className="relative"
      style={{ overflowX: "clip" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-16 md:py-24">
        <p className="flex items-center gap-3 uppercase mb-4" style={{ ...MONO, fontSize: "11px", letterSpacing: "0.2em", color: VIOLET }}>
          <span aria-hidden style={{ display: "inline-block", width: "32px", height: "1px", background: VIOLET }} />
          {embeddedAI.eyebrow}
        </p>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-start">
          {/* Statement */}
          <div>
            <h2 className="italic mb-4" style={{ ...SERIF, fontSize: "clamp(2.25rem, 4.5vw, 3.4rem)", lineHeight: 1.05, letterSpacing: "-0.02em", color: INK_DEEP }}>
              {embeddedAI.heading.lead}<span style={{ color: VIOLET }}>{embeddedAI.heading.highlight}</span>
            </h2>
            <p className="mb-4" style={{ ...MONO, fontSize: "15px", lineHeight: 1.7, color: INK, maxWidth: proseMaxWidth }}>
              {embeddedAI.paragraphs[0]}
            </p>
            <p className="m-0" style={{ ...MONO, fontSize: "15px", lineHeight: 1.7, color: INK, maxWidth: proseMaxWidth }}>
              {embeddedAI.paragraphs[1]}
            </p>
          </div>

          {/* Übernahme-Liste */}
          <div style={{ border: `1px solid ${HAIRLINE}`, background: "#FFFFFF", padding: "clamp(24px, 3vw, 40px)" }}>
            <p className="uppercase mb-5" style={{ ...MONO, fontSize: "10px", letterSpacing: "0.2em", color: VIOLET }}>
              {embeddedAI.uebernahmeLabel}
            </p>
            <ul className="m-0 p-0" style={{ listStyle: "none" }}>
              {embeddedAI.uebernahme.map((u, i) => (
                <li key={u} className="py-3 flex items-baseline gap-4" style={{ borderBottom: i < embeddedAI.uebernahme.length - 1 ? `1px solid ${HAIRLINE}` : "none" }}>
                  <span className="italic" style={{ ...SERIF, fontSize: "1.05rem", color: "transparent", WebkitTextStroke: "1px rgba(86,88,223,0.45)", flexShrink: 0 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{ ...MONO, fontSize: "15px", color: INK_DEEP }}>{u}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
