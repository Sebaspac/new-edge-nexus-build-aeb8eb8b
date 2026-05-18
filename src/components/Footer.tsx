import { Link } from "react-router-dom";

const BG      = "#0A0412";
const HAIRLINE = "rgba(196,181,253,0.12)";
const SERIF: React.CSSProperties = { fontFamily: "'DM Serif Display', Georgia, serif" };
const MONO: React.CSSProperties  = { fontFamily: "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace" };
const SANS = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";

const COL_LABEL: React.CSSProperties = {
  ...MONO,
  fontSize: "9px",
  letterSpacing: "0.26em",
  textTransform: "uppercase" as const,
  color: "rgba(196,181,253,0.35)",
  marginBottom: "22px",
  display: "block",
};

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      style={{
        fontFamily: SANS,
        fontSize: "14px",
        fontWeight: 400,
        color: "rgba(255,255,255,0.42)",
        textDecoration: "none",
        letterSpacing: "0.01em",
        display: "inline-block",
        transition: "color 0.18s",
      }}
      onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.88)")}
      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.42)")}
    >{children}</Link>
  );
}

function ALink({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      style={{
        fontFamily: SANS,
        fontSize: "14px",
        fontWeight: 400,
        color: "rgba(255,255,255,0.42)",
        textDecoration: "none",
        letterSpacing: "0.01em",
        display: "inline-block",
        transition: "color 0.18s",
      }}
      onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.88)")}
      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.42)")}
    >{children}</a>
  );
}

export const Footer = () => {
  return (
    <footer style={{ background: BG, fontFamily: SANS }}>

      {/* ── TOP WORDMARK BAND ── */}
      <div style={{
        borderTop: `1px solid ${HAIRLINE}`,
        borderBottom: `1px solid ${HAIRLINE}`,
        padding: "clamp(48px,8vw,96px) clamp(24px,6vw,80px)",
        overflow: "hidden",
      }}>
        <p style={{
          ...SERIF,
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: "clamp(4rem, 11vw, 10rem)",
          lineHeight: 0.92,
          letterSpacing: "-0.03em",
          margin: 0,
          color: "rgba(255,255,255,0.07)",
          userSelect: "none",
          WebkitUserSelect: "none",
        }}>
          New Edge.
        </p>
      </div>

      {/* ── MAIN GRID ── */}
      <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "clamp(48px,7vw,80px) clamp(24px,6vw,80px)" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "3fr 1fr 1fr 1fr",
          gap: "clamp(32px,5vw,72px)",
          alignItems: "start",
        }}>

          {/* Brand blurb */}
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            <p style={{
              ...SERIF,
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(1.1rem, 2.2vw, 1.6rem)",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
              color: "rgba(255,255,255,0.55)",
              margin: 0,
              maxWidth: "320px",
            }}>
              KI-gestützte Marken&shy;kommunikation für mittelständische Unternehmen.
            </p>
            <p style={{ ...MONO, fontSize: "10px", letterSpacing: "0.2em", color: "rgba(196,181,253,0.3)", textTransform: "uppercase", margin: 0 }}>
              München · BAFA-förderfähig
            </p>
          </div>

          {/* Unternehmen */}
          <div>
            <span style={COL_LABEL}>Unternehmen</span>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                { label: "Über uns", to: "/about" },
                { label: "Case Studies", to: "/case-studies" },
                { label: "Karriere", to: "/careers" },
              ].map(({ label, to }) => (
                <li key={to}><NavLink to={to}>{label}</NavLink></li>
              ))}
            </ul>
          </div>

          {/* Ressourcen */}
          <div>
            <span style={COL_LABEL}>Ressourcen</span>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                { label: "KI Glossar", to: "/ki-glossar" },
                { label: "KI Audit", to: "/ki-audit" },
              ].map(({ label, to }) => (
                <li key={to}><NavLink to={to}>{label}</NavLink></li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <span style={COL_LABEL}>Kontakt</span>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              <li><ALink href="mailto:info@newedgebrand.com">E-Mail</ALink></li>
              <li><ALink href="tel:+4917660431467">+49 176 60 431 467</ALink></li>
              <li><ALink href="https://www.linkedin.com/company/new-edge-brand/" external>LinkedIn ↗</ALink></li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div style={{
        borderTop: `1px solid ${HAIRLINE}`,
        padding: "18px clamp(24px,6vw,80px)",
        display: "flex",
        flexWrap: "wrap" as const,
        justifyContent: "space-between",
        alignItems: "center",
        gap: "10px",
      }}>
        <p style={{ ...MONO, fontSize: "10px", letterSpacing: "0.15em", color: "rgba(255,255,255,0.18)", margin: 0 }}>
          © {new Date().getFullYear()} New Edge. Alle Rechte vorbehalten.
        </p>
        <div style={{ display: "flex", gap: "20px" }}>
          {[
            { label: "Impressum", to: "/impressum" },
            { label: "Datenschutz", to: "/impressum#datenschutz" },
          ].map(({ label, to }) => (
            <Link key={to} to={to}
              style={{ ...MONO, fontSize: "10px", letterSpacing: "0.15em", color: "rgba(255,255,255,0.18)", textDecoration: "none", transition: "color 0.18s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.18)")}
            >{label}</Link>
          ))}
        </div>
      </div>

    </footer>
  );
};
