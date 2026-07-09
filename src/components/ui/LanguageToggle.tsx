import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { switchLocalePath } from "@/utils/localePath";

const VIOLET = "#5658DF";
const OUTFIT = "'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

/**
 * Segmentierter DE|EN-Sprachumschalter (Marken-Pill).
 * Wechselt Sprache + navigiert zur locale-äquivalenten URL (`/en`-Präfix).
 * `tone="light"` für dunkle Flächen (weißer Text).
 */
export const LanguageToggle = ({
  tone = "dark",
  className = "",
  onSwitch,
}: {
  tone?: "dark" | "light";
  className?: string;
  onSwitch?: () => void;
}) => {
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const go = (lang: "de" | "en") => {
    if (lang === language) return;
    setLanguage(lang);
    navigate(switchLocalePath(pathname, lang));
    onSwitch?.();
  };

  const light = tone === "light";
  return (
    <div
      role="group"
      aria-label="Sprache / Language"
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "2px",
        padding: "3px",
        borderRadius: "999px",
        background: light ? "rgba(255,255,255,0.10)" : "rgba(23,23,46,0.055)",
        border: `1px solid ${light ? "rgba(255,255,255,0.18)" : "rgba(23,23,46,0.10)"}`,
      }}
    >
      {(["de", "en"] as const).map((l) => {
        const active = language === l;
        return (
          <button
            key={l}
            type="button"
            onClick={() => go(l)}
            aria-pressed={active}
            aria-label={l === "de" ? "Deutsch" : "English"}
            style={{
              fontFamily: OUTFIT,
              fontWeight: 700,
              fontSize: "12px",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              lineHeight: 1,
              padding: "6px 11px",
              borderRadius: "999px",
              border: "none",
              cursor: "pointer",
              transition: "background 0.2s ease-out, color 0.2s ease-out",
              background: active ? VIOLET : "transparent",
              color: active ? "#fff" : light ? "rgba(255,255,255,0.72)" : "#3A3A47",
            }}
          >
            {l}
          </button>
        );
      })}
    </div>
  );
};
