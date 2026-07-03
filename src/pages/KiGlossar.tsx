import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MobileNavigation } from "@/components/MobileNavigation";
import SEOHead from "@/components/SEOHead";
import { AuroraFlow } from "@/components/ui/aurora-flow";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { kiGlossar as GLOSSAR_STATIC, type GlossaryTerm } from "@/content/pages/kiGlossar";
import { useCms } from "@/hooks/useCms";

const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));

const SANS  = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";
const SERIF: React.CSSProperties = { fontFamily: "'DM Serif Display', Georgia, serif" };
const MONO: React.CSSProperties  = { fontFamily: "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace" };
const EASE = [0.22, 1, 0.36, 1] as const;

/* ── NEWEDGE CI ── */
const VIOLET = "#5658DF";
const ACCENT = "#8476EF";
const INK = "#17172E";
const INK_BODY = "#4A4458";
const LIGHT_BG = "#F8F5FF";
const HAIRLINE = "rgba(86,88,223,0.14)";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const KiGlossar = () => {
  // Inhalte live aus dem CMS (Strapi); Fallback: statischer Content-Layer
  const kiGlossar = useCms("ki-glossar", GLOSSAR_STATIC);
  const GLOSSARY: Record<string, GlossaryTerm[]> = kiGlossar.glossary;
  const TOTAL = Object.values(GLOSSARY).reduce((n, arr) => n + arr.length, 0);

  const [query, setQuery] = useState("");
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return GLOSSARY;
    const out: Record<string, GlossaryTerm[]> = {};
    for (const L of ALPHABET) {
      const items = (GLOSSARY[L] || []).filter(
        e => e.term.toLowerCase().includes(q) || e.def.toLowerCase().includes(q)
      );
      if (items.length) out[L] = items;
    }
    return out;
  }, [query]);

  const lettersWithContent = ALPHABET.filter(L => (filtered[L]?.length ?? 0) > 0);
  const resultCount = lettersWithContent.reduce((n, L) => n + filtered[L].length, 0);

  const scrollToLetter = (L: string) => {
    const el = document.getElementById(`gl-${L}`);
    if (!el) return;
    // window.scrollTo statt scrollIntoView: der overflow-x-hidden-Wrapper wird vom
    // Browser zum (nicht scrollenden) Scroll-Container, scrollIntoView würde ins Leere zielen.
    const top = el.getBoundingClientRect().top + window.scrollY - 124;
    window.scrollTo({ top, behavior: "smooth" });
  };

  // Scroll-Spy: aktiven Buchstaben hervorheben
  useEffect(() => {
    const sections = lettersWithContent
      .map(L => document.getElementById(`gl-${L}`))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveLetter(visible[0].target.id.replace("gl-", ""));
      },
      { rootMargin: "-150px 0px -72% 0px", threshold: 0 }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, [query]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <SEOHead
        title={kiGlossar.seo.title}
        description={kiGlossar.seo.descriptionTemplate.replace("{total}", String(TOTAL))}
        canonical={kiGlossar.seo.canonical}
      />

      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <NoiseOverlay opacity={0.03} fixed zIndex={2} />
        <MobileNavigation onContactClick={() => window.open(kiGlossar.calendlyUrl, "_blank", "noopener")} theme="dark" />

        {/* ── HERO ── */}
        <div className="relative" style={{ background: "#0A0A18", minHeight: "100dvh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div aria-hidden style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
            <AuroraFlow />
          </div>
          <div aria-hidden style={{
            position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
            background: "radial-gradient(ellipse 70% 65% at 50% 50%, rgba(4,1,12,0.72) 0%, rgba(4,1,12,0.28) 55%, transparent 82%)",
          }} />

          <style>{`@keyframes kg-shimmer { from { background-position: -220% center; } to { background-position: 220% center; } }`}</style>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "clamp(100px,16vh,140px) 24px clamp(60px,8vh,100px)", fontFamily: SANS }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "28px" }}>
              <span style={{ width: "32px", height: "1px", background: "#C2C3F6", display: "block" }} />
              <span style={{ ...MONO, fontSize: "11px", letterSpacing: "0.22em", color: "#C2C3F6", textTransform: "uppercase" }}>{kiGlossar.hero.eyebrow}</span>
              <span style={{ width: "32px", height: "1px", background: "#C2C3F6", display: "block" }} />
            </div>

            <h1 style={{ ...SERIF, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(2.75rem, 6vw, 5.5rem)", lineHeight: 0.96, letterSpacing: "-0.02em", marginBottom: "32px" }}>
              <span style={{
                background: "linear-gradient(115deg, #fff 0%, #fff 24%, #f6f2ff 36%, #ece5ff 44%, #f8f5ff 50%, #f3efff 57%, #fff 68%, #fff 100%)",
                backgroundSize: "280% auto",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
                animation: "kg-shimmer 18s ease-in-out infinite alternate",
                display: "inline",
              }}>
                {kiGlossar.hero.headline}
              </span>
            </h1>

            <p style={{ fontFamily: SANS, fontSize: "clamp(16px, 1.5vw, 19px)", color: "#a0a0a0", maxWidth: "560px", margin: "0 auto", lineHeight: 1.62, fontWeight: 400 }}>
              {kiGlossar.hero.sublineTemplate.replace("{total}", String(TOTAL))}
            </p>
          </motion.div>

          <motion.div
            animate={{ opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
              width: "2px", height: "clamp(80px, 10vh, 130px)",
              background: "linear-gradient(to bottom, rgba(194,195,246,0), #C2C3F6 50%, rgba(194,195,246,0.6))",
              boxShadow: "0 0 10px rgba(194,195,246,0.45)", zIndex: 3,
            }}
          />
        </div>

        {/* ── GLOSSAR ── */}
        <div style={{ background: LIGHT_BG, position: "relative" }}>
          {/* Sticky Toolbar: Suche + Alphabet */}
          <div
            style={{
              position: "sticky", top: 0, zIndex: 20,
              background: "rgba(248,245,255,0.92)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              borderBottom: `1px solid ${HAIRLINE}`,
            }}
          >
            <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "16px 24px" }}>
              {/* Suche */}
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "14px" }}>
                <div style={{ position: "relative", width: "100%", maxWidth: "440px" }}>
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={kiGlossar.toolbar.searchPlaceholder}
                    aria-label={kiGlossar.toolbar.searchAriaLabel}
                    style={{
                      width: "100%",
                      padding: "11px 38px 11px 16px",
                      ...MONO,
                      fontSize: "13px",
                      color: INK,
                      background: "#fff",
                      border: `1px solid ${HAIRLINE}`,
                      borderRadius: "10px",
                      outline: "none",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = ACCENT)}
                    onBlur={(e) => (e.currentTarget.style.borderColor = HAIRLINE)}
                  />
                  <span aria-hidden style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", color: VIOLET, fontSize: "15px", pointerEvents: "none" }}>{kiGlossar.toolbar.searchGlyph}</span>
                </div>
              </div>

              {/* Alphabet */}
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "4px" }}>
                {ALPHABET.map((L) => {
                  const has = (filtered[L]?.length ?? 0) > 0;
                  const isActive = activeLetter === L;
                  return (
                    <button
                      key={L}
                      onClick={() => has && scrollToLetter(L)}
                      disabled={!has}
                      aria-label={kiGlossar.toolbar.letterAriaTemplate.replace("{letter}", L)}
                      style={{
                        ...MONO,
                        width: "30px", height: "30px",
                        display: "inline-flex", alignItems: "center", justifyContent: "center",
                        fontSize: "12px", fontWeight: 600,
                        borderRadius: "8px",
                        border: "1px solid transparent",
                        cursor: has ? "pointer" : "default",
                        transition: "all 0.18s ease",
                        background: isActive ? VIOLET : "transparent",
                        color: isActive ? "#fff" : has ? VIOLET : "rgba(86,88,223,0.22)",
                      }}
                      onMouseEnter={(e) => { if (has && !isActive) { e.currentTarget.style.background = "rgba(86,88,223,0.08)"; } }}
                      onMouseLeave={(e) => { if (has && !isActive) { e.currentTarget.style.background = "transparent"; } }}
                    >
                      {L}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Begriffe */}
          <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "clamp(48px,7vw,88px) 24px clamp(80px,10vw,130px)" }}>
            {resultCount === 0 ? (
              <p style={{ ...MONO, textAlign: "center", color: INK_BODY, fontSize: "15px", padding: "60px 0" }}>
                {kiGlossar.emptyTemplate.split("{query}")[0]}{query}{kiGlossar.emptyTemplate.split("{query}")[1]}
              </p>
            ) : (
              lettersWithContent.map((L) => (
                <section
                  key={L}
                  id={`gl-${L}`}
                  style={{ scrollMarginTop: "150px", marginBottom: "clamp(48px,6vw,72px)" }}
                >
                  {/* Buchstaben-Überschrift */}
                  <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "28px", paddingBottom: "14px", borderBottom: `1px solid ${HAIRLINE}` }}>
                    <span style={{ ...SERIF, fontStyle: "italic", fontSize: "clamp(2.25rem, 4.5vw, 3.4rem)", lineHeight: 1, color: VIOLET }}>{L}</span>
                    <span style={{ ...MONO, fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(86,88,223,0.4)" }}>
                      {filtered[L].length} {filtered[L].length === 1 ? kiGlossar.countLabel.singular : kiGlossar.countLabel.plural}
                    </span>
                  </div>

                  {/* Begriffs-Grid */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "2px 40px" }}>
                    {filtered[L].map((e) => (
                      <div key={e.term} style={{ padding: "16px 0", borderBottom: `1px solid rgba(86,88,223,0.07)` }}>
                        <h3 style={{ ...SERIF, fontSize: "1.18rem", lineHeight: 1.25, color: INK, marginBottom: "7px" }}>
                          {e.term}
                        </h3>
                        <p style={{ fontFamily: SANS, fontSize: "15px", lineHeight: 1.65, color: INK_BODY }}>
                          {e.def}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              ))
            )}

            {/* Abschluss-CTA */}
            <div style={{ marginTop: "clamp(40px,5vw,64px)", paddingTop: "clamp(40px,5vw,56px)", borderTop: `1px solid ${HAIRLINE}`, textAlign: "center" }}>
              <p style={{ ...SERIF, fontStyle: "italic", fontSize: "clamp(1.35rem, 2.2vw, 1.85rem)", color: INK, lineHeight: 1.25, marginBottom: "10px" }}>
                {kiGlossar.cta.heading}
              </p>
              <p style={{ fontFamily: SANS, fontSize: "15px", color: INK_BODY, maxWidth: "480px", margin: "0 auto 26px", lineHeight: 1.6 }}>
                {kiGlossar.cta.body}
              </p>
              <button
                onClick={() => window.open(kiGlossar.calendlyUrl, "_blank", "noopener")}
                style={{
                  ...MONO, fontSize: "12px", letterSpacing: "0.16em", textTransform: "uppercase",
                  color: "#fff", background: VIOLET, border: "none",
                  padding: "14px 30px", borderRadius: "10px", cursor: "pointer",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = ACCENT)}
                onMouseLeave={(e) => (e.currentTarget.style.background = VIOLET)}
              >
                {kiGlossar.cta.button}
              </button>
            </div>
          </div>
        </div>

        <Suspense fallback={<div style={{ minHeight: 200 }} />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default KiGlossar;
