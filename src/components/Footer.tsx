import { Link } from "react-router-dom";
import { footer as FOOTER_STATIC, img } from "@/content";
import { useCms } from "@/hooks/useCms";
import { MaschinenraumTicker } from "@/components/MaschinenraumTicker";

/* ── Design tokens ─────────────────────────────────────────────────── */
const BG       = "#0A0A18";
const VIOLET   = "#C2C3F6";
const HAIRLINE = "rgba(194,195,246,0.13)";
const MUTED    = "rgba(255,255,255,0.36)";
const HOVER    = "#C2C3F6";

const MONO: React.CSSProperties = {
  fontFamily: "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace",
};
const SANS = "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace";

/* ── Reusable link atoms ────────────────────────────────────────────── */
function FLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      style={{
        fontFamily: SANS,
        fontSize: "13px",
        fontWeight: 400,
        color: MUTED,
        textDecoration: "none",
        letterSpacing: "0.01em",
        lineHeight: 1,
        transition: "color 0.18s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = HOVER)}
      onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
    >
      {children}
    </Link>
  );
}

function FAnchor({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      style={{
        fontFamily: SANS,
        fontSize: "13px",
        fontWeight: 400,
        color: MUTED,
        textDecoration: "none",
        letterSpacing: "0.01em",
        lineHeight: 1,
        transition: "color 0.18s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = HOVER)}
      onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
    >
      {children}
    </a>
  );
}

/* ── Column label ───────────────────────────────────────────────────── */
function ColLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        ...MONO,
        fontSize: "9px",
        letterSpacing: "0.28em",
        textTransform: "uppercase",
        color: "rgba(194,195,246,0.38)",
        display: "block",
        marginBottom: "20px",
      }}
    >
      {children}
    </span>
  );
}

/* ── Main component ─────────────────────────────────────────────────── */
export const Footer = () => {
  // Inhalte live aus dem CMS (Strapi); Fallback: statischer Content-Layer
  const footer = useCms("footer", FOOTER_STATIC);
  const year = new Date().getFullYear();

  return (
    <>
      {/* Responsive styles injected once */}
      <style>{`
        .ft-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 0;
        }
        .ft-col {
          padding: 40px 0;
          border-right: 1px solid ${HAIRLINE};
        }
        .ft-col:first-child { padding-left: 0; }
        .ft-col:last-child  { border-right: none; }
        .ft-col-inner       { padding: 0 clamp(20px, 3vw, 40px); }
        .ft-col:first-child .ft-col-inner { padding-left: 0; }
        .ft-col:last-child  .ft-col-inner { padding-right: 0; }

        .ft-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 24px;
          padding: clamp(36px, 5vw, 56px) 0 clamp(28px, 4vw, 40px);
        }

        @media (max-width: 640px) {
          .ft-grid {
            grid-template-columns: 1fr;
          }
          .ft-col {
            border-right: none;
            border-bottom: 1px solid ${HAIRLINE};
            padding: 28px 0;
          }
          .ft-col:last-child { border-bottom: none; }
          .ft-col-inner { padding: 0 !important; }
          .ft-top { flex-direction: column; gap: 16px; }
          .ft-meta { text-align: left !important; }
        }
      `}</style>

      <MaschinenraumTicker />

      <footer
        style={{
          background: BG,
          fontFamily: SANS,
          borderTop: `1px solid ${HAIRLINE}`,
        }}
      >
        <div
          style={{
            maxWidth: "1160px",
            margin: "0 auto",
            padding: "0 clamp(24px, 5vw, 56px)",
          }}
        >

          {/* ── TOP ROW: logo + meta ── */}
          <div className="ft-top">
            <Link to="/" aria-label={footer.logo.homeAriaLabel}>
              <img
                src={img(footer.logo.src)}
                alt={footer.logo.alt}
                style={{
                  height: "24px",
                  width: "auto",
                  opacity: 0.82,
                  display: "block",
                  transition: "opacity 0.18s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.82")}
              />
            </Link>

            <p
              className="ft-meta"
              style={{
                ...MONO,
                fontSize: "10px",
                letterSpacing: "0.2em",
                color: "rgba(194,195,246,0.28)",
                textTransform: "uppercase",
                margin: 0,
                lineHeight: 1.9,
                textAlign: "right",
              }}
            >
              {footer.meta}
            </p>
          </div>

          {/* ── GRADIENT HAIRLINE ── */}
          <div
            aria-hidden
            style={{
              height: "1px",
              background: `linear-gradient(90deg, ${HAIRLINE} 0%, rgba(194,195,246,0.28) 30%, rgba(194,195,246,0.28) 70%, ${HAIRLINE} 100%)`,
            }}
          />

          {/* ── NAV COLUMNS ── */}
          <div className="ft-grid">

            {/* Unternehmen */}
            <div className="ft-col">
              <div className="ft-col-inner">
                <ColLabel>{footer.columns.unternehmen.label}</ColLabel>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "15px" }}>
                  {footer.columns.unternehmen.links.map(({ label, to }) => (
                    <li key={to}><FLink to={to}>{label}</FLink></li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Ressourcen */}
            <div className="ft-col">
              <div className="ft-col-inner">
                <ColLabel>{footer.columns.ressourcen.label}</ColLabel>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "15px" }}>
                  {footer.columns.ressourcen.links.map(({ label, to }) => (
                    <li key={to}><FLink to={to}>{label}</FLink></li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Kontakt */}
            <div className="ft-col">
              <div className="ft-col-inner">
                <ColLabel>{footer.columns.kontakt.label}</ColLabel>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "15px" }}>
                  {footer.columns.kontakt.items.map(({ label, href, external }) => (
                    <li key={href}>
                      <FAnchor href={href} external={external}>
                        {label}
                      </FAnchor>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* ── HAIRLINE ── */}
          <div
            aria-hidden
            style={{ height: "1px", background: HAIRLINE }}
          />

          {/* ── LEGAL BAR ── */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "12px",
              padding: "18px 0 clamp(28px, 4vw, 44px)",
            }}
          >
            <p
              style={{
                ...MONO,
                fontSize: "10px",
                letterSpacing: "0.14em",
                color: "rgba(255,255,255,0.17)",
                margin: 0,
              }}
            >
              {footer.copyrightTemplate.replace("{year}", String(year))}
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              {footer.legalLinks.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  style={{
                    ...MONO,
                    fontSize: "10px",
                    letterSpacing: "0.14em",
                    color: "rgba(255,255,255,0.17)",
                    textDecoration: "none",
                    transition: "color 0.18s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(194,195,246,0.5)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.17)")}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};
