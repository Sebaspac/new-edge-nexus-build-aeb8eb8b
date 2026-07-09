import { MarqueeAnimation } from "@/components/ui/marquee-effect";
import { useIsMobile } from "@/hooks/use-mobile";
import { tickerScroll as TICKER_STATIC } from "@/content/sections/tickerScroll";
import { useHomeContent } from "@/hooks/useHomeContent";

const HEAD: React.CSSProperties = {
  fontFamily: "'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  fontWeight: 600,
};
const TAGS: React.CSSProperties = {
  fontFamily: "'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  fontWeight: 500,
};

export const TickerScrollSection = () => {
  const isMobile = useIsMobile();

  // Inhalte live aus dem CMS (Strapi „Home"); Fallback: statischer Content-Layer
  const tickerScroll = useHomeContent().tickerScroll ?? TICKER_STATIC;

  // On mobile the skewY overhang (each full-width band is rotated, pushing its
  // corners ~2-3px past its box) eats the tiny 6px gap and makes the two lines
  // collide. Drop the skew, widen the gap, and give each band breathing room so
  // every line is fully contained. Desktop keeps the original look.
  const stripBase: React.CSSProperties = {
    overflow: "hidden",
    position: "relative",
    transform: isMobile ? "none" : "skewY(-0.8deg)",
    padding: isMobile ? "12px 0" : "10px 0",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? "12px" : "6px", margin: "16px 0" }}>

      {/* Strip 1 — dark violet, bold sentence, scrolls left */}
      <div style={{ ...stripBase, background: "#5658DF" }}>
        <MarqueeAnimation
          direction="left"
          baseVelocity={1.5}
          style={{
            ...HEAD,
            fontSize: isMobile ? "1rem" : "clamp(1.1rem, 1.8vw, 1.5rem)",
            lineHeight: 1.3,
            color: "#ffffff",
            letterSpacing: "-0.01em",
          }}
        >
          {tickerScroll.sentence}
        </MarqueeAnimation>
      </div>

      {/* Strip 2 — light lilac, hashtags, scrolls right */}
      <div style={{ ...stripBase, background: "#C2C3F6" }}>
        <MarqueeAnimation
          direction="right"
          baseVelocity={1.2}
          style={{
            ...TAGS,
            fontSize: isMobile ? "0.75rem" : "clamp(0.7rem, 1vw, 0.9rem)",
            lineHeight: 1.4,
            color: "#17172E",
            letterSpacing: "0.12em",
          }}
        >
          {tickerScroll.hashtags}
        </MarqueeAnimation>
      </div>

    </div>
  );
};
