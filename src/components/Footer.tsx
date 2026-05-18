import { Link } from "react-router-dom";
import newEdgeLogoHorizontal from "@/assets/new-edge-logo-horizontal.png";

/* ── Design tokens ─────────────────────────────────────────────────── */
const BG       = "#0A0412";
const VIOLET   = "#C4B5FD";
const HAIRLINE = "rgba(196,181,253,0.13)";
const MUTED    = "rgba(255,255,255,0.36)";
const HOVER    = "#C4B5FD";

const MONO: React.CSSProperties = {
  fontFamily: "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace",
};
const SANS = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";

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
        color: "rgba(196,181,253,0.38)",
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
            <Link to="/" aria-label="New Edge – zur Startseite">
              <img
                src={newEdgeLogoHorizontal}
                alt="New Edge"
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
                color: "rgba(196,181,253,0.28)",
                textTransform: "uppercase",
                margin: 0,
                lineHeight: 1.9,
                textAlign: "right",
              }}
            >
              München&nbsp;·&nbsp;BAFA-förderfähig
            </p>
          </div>

          {/* ── GRADIENT HAIRLINE ── */}
          <div
            aria-hidden
            style={{
              height: "1px",
              background: `linear-gradient(90deg, ${HAIRLINE} 0%, rgba(196,181,253,0.28) 30%, rgba(196,181,253,0.28) 70%, ${HAIRLINE} 100%)`,
            }}
          />

          {/* ── NAV COLUMNS ── */}
          <div className="ft-grid">

            {/* Unternehmen */}
            <div className="ft-col">
              <div className="ft-col-inner">
                <ColLabel>Unternehmen</ColLabel>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "15px" }}>
                  {[
                    { label: "Über uns",     to: "/about" },
                    { label: "Case Studies", to: "/case-studies" },
                    { label: "Karriere",     to: "/careers" },
                  ].map(({ label, to }) => (
                    <li key={to}><FLink to={to}>{label}</FLink></li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Ressourcen */}
            <div className="ft-col">
              <div className="ft-col-inner">
                <ColLabel>Ressourcen</ColLabel>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "15px" }}>
                  {[
                    { label: "KI Glossar", to: "/ki-glossar" },
                    { label: "KI Audit",   to: "/ki-audit" },
                  ].map(({ label, to }) => (
                    <li key={to}><FLink to={to}>{label}</FLink></li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Kontakt */}
            <div className="ft-col">
              <div className="ft-col-inner">
                <ColLabel>Kontakt</ColLabel>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "15px" }}>
                  <li>
                    <FAnchor href="mailto:info@newedgebrand.com">
                      info@newedgebrand.com
                    </FAnchor>
                  </li>
                  <li>
                    <FAnchor href="tel:+4917660431467">
                      +49 176 60 431 467
                    </FAnchor>
                  </li>
                  <li>
                    <FAnchor
                      href="https://www.linkedin.com/company/new-edge-brand/"
                      external
                    >
                      LinkedIn&thinsp;↗
                    </FAnchor>
                  </li>
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
              © {year}&nbsp;New Edge. Alle Rechte vorbehalten.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              {[
                { label: "Impressum",   to: "/impressum" },
                { label: "Datenschutz", to: "/impressum#datenschutz" },
              ].map(({ label, to }) => (
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
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(196,181,253,0.5)")}
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
