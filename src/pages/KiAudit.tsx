import { lazy, Suspense, useState } from "react";
import { motion } from "framer-motion";
import { Check, X, Plus } from "lucide-react";
import { MobileNavigation } from "@/components/MobileNavigation";
import SEOHead from "@/components/SEOHead";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { EdgePillButton, EdgeTextButton } from "@/components/ui/EdgeCta";
import { ContactFormModal } from "@/components/ContactFormModal";
import { SpeakWithUsCta } from "@/components/SpeakWithUsCta";
import { VideoShowcaseSection } from "@/components/VideoShowcaseSection";
import { CaseSpotlightSection } from "@/components/CaseSpotlightSection";
import { img } from "@/content";
import { kiAudit as KIAUDIT_STATIC } from "@/content/pages/kiAudit";
import { kiAudit as kiAuditEn } from "@/content/en/pages/kiAudit";
import { useLocalized } from "@/hooks/useLocalized";

const Footer = lazy(() => import("@/components/Footer").then((m) => ({ default: m.Footer })));

const OUTFIT: React.CSSProperties = { fontFamily: "'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" };
const VIOLET      = "#5658DF";
const VIOLET_SOFT = "rgba(86,88,223,0.12)";
const INK_DEEP    = "#17172E";
const INK_DEEPER  = "#100E1E";
const PAPER       = "#F8F5FF";
const RADIUS      = 16;
const EASE        = [0.22, 1, 0.36, 1] as const;
const CORNER      = "1.5px solid rgba(139,141,240,0.55)"; // Scan-Ecken im Garantie-Visual

/** Torn-paper jagged divider — signature transition between full-bleed blocks. */
const JaggedDivider = ({ color, flip = false }: { color: string; flip?: boolean }) => (
  <div
    aria-hidden
    style={{
      height: "44px",
      background: color,
      clipPath: flip
        ? "polygon(0% 100%, 100% 100%, 100% 45%, 96% 65%, 92% 35%, 88% 70%, 84% 40%, 80% 75%, 76% 45%, 72% 80%, 68% 40%, 64% 70%, 60% 100%, 56% 60%, 52% 80%, 48% 45%, 44% 70%, 40% 100%, 36% 60%, 32% 80%, 28% 50%, 24% 75%, 20% 100%, 16% 60%, 12% 80%, 8% 45%, 4% 70%, 0% 40%)"
        : "polygon(0% 0%, 100% 0%, 100% 55%, 96% 35%, 92% 65%, 88% 30%, 84% 60%, 80% 25%, 76% 55%, 72% 20%, 68% 60%, 64% 30%, 60% 0%, 56% 40%, 52% 20%, 48% 55%, 44% 30%, 40% 0%, 36% 40%, 32% 20%, 28% 50%, 24% 25%, 20% 0%, 16% 40%, 12% 20%, 8% 55%, 4% 30%, 0% 60%)",
    }}
  />
);

const NumberBadge = ({ n }: { n: string }) => (
  <span
    style={{
      ...OUTFIT,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      background: VIOLET,
      color: "#fff",
      fontWeight: 700,
      fontSize: "15px",
      flexShrink: 0,
    }}
  >
    {n}
  </span>
);

const SectionHeadline = ({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) => (
  <h2
    style={{
      color: dark ? "#fff" : INK_DEEP,
    }}
  >
    {children}
  </h2>
);

/** Splits `text` on `phrase` and wraps it in the violet accent color. Falls back to plain text if not found. */
const withAccent = (text: string, phrase: string, color = VIOLET) => {
  const idx = text.indexOf(phrase);
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <span style={{ color }}>{phrase}</span>
      {text.slice(idx + phrase.length)}
    </>
  );
};

/** FAQ-Accordion (Landing-Page-CI): Single-Open, Plus-Toggle, weiche maxHeight-Transition. */
const FaqAccordion = ({ items }: { items: { q: string; a: string }[] }) => {
  const [open, setOpen] = useState(0);
  return (
    <div className="flex flex-col gap-3">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className="overflow-hidden"
            style={{ background: "#fff", borderRadius: RADIUS, border: "1px solid rgba(86,88,223,0.14)", boxShadow: "0 1px 2px rgba(23,23,46,0.06)" }}
          >
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="w-full flex justify-between items-center gap-4 text-left hover:opacity-80 transition-opacity"
              style={{ ...OUTFIT, fontWeight: 600, fontSize: "16px", color: isOpen ? VIOLET : INK_DEEP, padding: "20px 24px" }}
            >
              <span>{f.q}</span>
              <span
                aria-hidden
                className={`shrink-0 w-7 h-7 flex items-center justify-center rounded-full transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                style={{ border: `1px solid ${isOpen ? VIOLET : "rgba(23,23,46,0.18)"}`, background: isOpen ? VIOLET_SOFT : "transparent", color: isOpen ? VIOLET : "rgba(23,23,46,0.45)" }}
              >
                <Plus className="w-4 h-4" />
              </span>
            </button>
            <div className="overflow-hidden" style={{ maxHeight: isOpen ? "340px" : "0px", transition: "max-height 0.32s cubic-bezier(0.22,1,0.36,1)" }}>
              <p style={{ ...OUTFIT, fontWeight: 400, fontSize: "15px", lineHeight: 1.7, color: "#5B566B", padding: "0 24px 22px" }}>
                {f.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const KiAudit = () => {
  const kiAudit = useLocalized("ki-audit", KIAUDIT_STATIC, kiAuditEn);
  const faqs = kiAudit.faq ?? KIAUDIT_STATIC.faq;
  const [isContactOpen, setIsContactOpen] = useState(false);

  const stats = [
    { value: "25 Std.", label: "Aufwand für euer Team" },
    { value: "5–10", label: "Werktage bis zum Report" },
    { value: "≥ 3", label: "Garantierte Use Cases" },
  ];

  return (
    <>
      <SEOHead
        title={kiAudit.seo.title}
        description={kiAudit.seo.description}
        canonical={kiAudit.seo.canonical}
      />

      <div className="min-h-screen" style={{ overflowX: "clip", ...OUTFIT }}>
        <NoiseOverlay opacity={0.03} fixed zIndex={2} />
        <MobileNavigation onContactClick={() => setIsContactOpen(true)} theme="dark" />

        {/* ═══ 1 — HERO ═══ */}
        <div className="relative" style={{ background: INK_DEEPER, minHeight: "94dvh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div
            aria-hidden
            style={{
              position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
              background: "radial-gradient(ellipse 70% 65% at 50% 40%, rgba(4,1,12,0.7) 0%, rgba(4,1,12,0.25) 55%, transparent 82%)",
            }}
          />

          <div className="relative" style={{ zIndex: 2, padding: "clamp(120px,16vh,160px) 24px clamp(56px,7vh,88px)" }}>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center" style={{ maxWidth: "1180px", margin: "0 auto" }}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE }}
              >
                <h1
                  style={{
                    color: "#FBF9FF",
                  }}
                >
                  {withAccent(kiAudit.hero.headline, "Der erste Schritt fehlt", "#8B8DF0")}
                </h1>
                <p style={{ ...OUTFIT, color: "#B0ABC0", maxWidth: "48ch", marginBottom: "36px" }}>
                  {kiAudit.hero.sub}
                </p>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4" style={{ marginBottom: "48px" }}>
                  <EdgePillButton href="#kontakt">{kiAudit.hero.ctaPrimary}</EdgePillButton>
                  <EdgeTextButton href="#fuer-wen" tone="light">
                    {kiAudit.hero.ctaSecondary}
                  </EdgeTextButton>
                </div>

                {/* Stat row */}
                <div className="grid grid-cols-3 gap-3" style={{ maxWidth: "520px" }}>
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: RADIUS,
                        padding: "14px 14px",
                      }}
                    >
                      <div style={{ ...OUTFIT, fontWeight: 700, fontSize: "1.35rem", color: "#fff" }}>{s.value}</div>
                      <div style={{ ...OUTFIT, fontWeight: 400, fontSize: "11.5px", color: "#8A84A0", marginTop: "2px", lineHeight: 1.3 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
                style={{ position: "relative" }}
              >
                <div aria-hidden style={{
                  position: "absolute", inset: "-16px", zIndex: 0, pointerEvents: "none",
                  background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(86,88,223,0.22) 0%, transparent 70%)",
                }} />
                <div style={{ position: "relative", zIndex: 1, borderRadius: RADIUS, overflow: "hidden", boxShadow: "0 0 0 1px rgba(194,195,246,0.15), 0 32px 80px rgba(0,0,0,0.5)" }}>
                  <img
                    src={img(kiAudit.hero.image.src)}
                    alt={kiAudit.hero.image.alt}
                    className="w-full h-[280px] sm:h-[380px] lg:h-[460px] object-cover object-center"
                    loading="eager"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <JaggedDivider color={PAPER} />

        {/* ═══ 2 — PROBLEM ═══ */}
        <section style={{ background: PAPER }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8" style={{ paddingTop: "clamp(24px,4vw,40px)", paddingBottom: "clamp(64px,8vw,100px)" }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, ease: EASE }} style={{ marginBottom: "clamp(40px,5vw,56px)" }}>
              <SectionHeadline>{kiAudit.problem.heading}</SectionHeadline>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-5">
              {kiAudit.problem.situations.map((q, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                  style={{ background: INK_DEEP, borderRadius: RADIUS, padding: "clamp(28px,3vw,34px)" }}
                >
                  <span style={{ ...OUTFIT, fontWeight: 800, fontSize: "1.8rem", color: VIOLET, lineHeight: 1 }}>„</span>
                  <p style={{ ...OUTFIT, fontWeight: 500, color: "#E4E1F0", marginTop: "8px" }}>
                    {q}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ 3 — LÖSUNG / MECHANISMUS — full-bleed violet ═══ */}
        <section style={{ background: VIOLET }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8 grid md:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start" style={{ paddingTop: "clamp(64px,8vw,100px)", paddingBottom: "clamp(64px,8vw,100px)" }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, ease: EASE }}>
              <SectionHeadline dark>{kiAudit.solution.heading}</SectionHeadline>
              <p style={{ ...OUTFIT, fontWeight: 400, color: "rgba(255,255,255,0.82)", marginTop: "20px", maxWidth: "50ch" }}>
                {kiAudit.solution.intro}
              </p>
            </motion.div>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
              className="flex flex-col gap-4 list-none"
            >
              {kiAudit.solution.bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4"
                  style={{ background: "rgba(255,255,255,0.08)", borderRadius: RADIUS, padding: "16px 18px" }}
                >
                  <span
                    className="shrink-0 w-6 h-6 flex items-center justify-center mt-0.5"
                    style={{ background: "#fff", borderRadius: "50%" }}
                  >
                    <Check className="w-3.5 h-3.5" style={{ color: VIOLET }} />
                  </span>
                  <span style={{ ...OUTFIT, fontWeight: 400, fontSize: "14.5px", lineHeight: 1.6, color: "#fff" }}>{b}</span>
                </li>
              ))}
            </motion.ul>
          </div>
        </section>

        {/* ═══ 4 — ABLAUF ═══ */}
        <section style={{ background: PAPER }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8" style={{ paddingTop: "clamp(64px,8vw,100px)", paddingBottom: "clamp(64px,8vw,100px)" }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, ease: EASE }} style={{ marginBottom: "clamp(40px,5vw,56px)" }}>
              <SectionHeadline>{kiAudit.ablauf.heading}</SectionHeadline>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {kiAudit.ablauf.steps.map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                  style={{ background: "#fff", borderRadius: RADIUS, padding: "clamp(24px,3vw,28px)", border: "1px solid rgba(86,88,223,0.12)", boxShadow: "0 1px 2px rgba(23,23,46,0.06)" }}
                >
                  <NumberBadge n={s.step} />
                  <h3 style={{ color: INK_DEEP, marginTop: "16px" }}>{s.title}</h3>
                  <p style={{ ...OUTFIT, color: "#5B566B" }}>{s.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Farbloser CTA unter den Schritten (Ghost-Text, öffnet Kontakt-Modal) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: EASE }}
              className="flex justify-center"
              style={{ marginTop: "clamp(36px,4.5vw,52px)" }}
            >
              <EdgeTextButton onClick={() => setIsContactOpen(true)}>
                Kostenloses Erstgespräch buchen
              </EdgeTextButton>
            </motion.div>
          </div>
        </section>

        {/* ═══ Video-Showcase (Homepage-Modul „NEWEDGE in Aktion") — ca. Seitenmitte ═══ */}
        <div style={{ background: PAPER }}>
          <VideoShowcaseSection />
        </div>

        {/* ═══ 5 — WARUM NEWEDGE ═══ */}
        <section style={{ background: "#fff" }}>
          <div className="max-w-[900px] mx-auto px-6 lg:px-8" style={{ paddingTop: "clamp(64px,8vw,100px)", paddingBottom: "clamp(64px,8vw,100px)" }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, ease: EASE }} style={{ marginBottom: "clamp(40px,5vw,56px)" }}>
              <SectionHeadline>{kiAudit.warum.heading}</SectionHeadline>
            </motion.div>
            <div className="flex flex-col gap-4">
              {kiAudit.warum.points.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
                  className="flex items-start gap-5"
                  style={{ background: PAPER, borderRadius: RADIUS, padding: "22px 24px" }}
                >
                  <NumberBadge n={String(i + 1)} />
                  <p style={{ ...OUTFIT, color: INK_DEEP, maxWidth: "60ch", marginTop: "8px" }}>{p}</p>
                </motion.div>
              ))}
            </div>

            {/* Farbiger Primär-CTA unten (violetter Pill, öffnet Kontakt-Modal) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: EASE }}
              className="flex justify-center"
              style={{ marginTop: "clamp(40px,5vw,60px)" }}
            >
              <EdgePillButton onClick={() => setIsContactOpen(true)}>
                Kostenloses Erstgespräch buchen
              </EdgePillButton>
            </motion.div>
          </div>
        </section>

        {/* ═══ 6 — GARANTIE — Trust-Karte (CI: Ink-Gradient, Shield-Badge, Violett-Glow) ═══ */}
        <section style={{ background: PAPER }}>
          <div className="max-w-[1000px] mx-auto px-6 lg:px-8" style={{ paddingTop: "clamp(56px,7vw,88px)", paddingBottom: "clamp(56px,7vw,88px)" }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: EASE }}
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "24px",
                background: "linear-gradient(160deg, #1D1B38 0%, #17172E 45%, #100E1E 100%)",
                border: "1px solid rgba(139,141,240,0.18)",
                boxShadow: "0 30px 80px -32px rgba(23,23,46,0.5)",
                padding: "clamp(40px,6vw,72px) clamp(28px,5vw,64px)",
                textAlign: "center",
              }}
            >
              {/* Radialer Violett-Glow (oben mittig) */}
              <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 62% 55% at 50% 0%, rgba(86,88,223,0.28) 0%, transparent 62%)" }} />

              <div style={{ position: "relative", zIndex: 1, maxWidth: "640px", margin: "0 auto" }}>
                {/* Cooles Garantie-Visual im Rahmen (Ink-Panel + „≥3"-Siegel, Scan-Ecken) */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    maxWidth: "540px",
                    margin: "0 auto 30px",
                    borderRadius: "18px",
                    padding: "1px",
                    background:
                      "linear-gradient(135deg, rgba(139,141,240,0.6) 0%, rgba(86,88,223,0.12) 42%, rgba(139,141,240,0.45) 100%)",
                    boxShadow: "0 24px 60px -26px rgba(86,88,223,0.55)",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      borderRadius: "17px",
                      overflow: "hidden",
                      background: "linear-gradient(160deg, #221F42 0%, #17172E 55%, #100E1E 100%)",
                    }}
                  >
                    {/* Weicher Violett-Glow hinter dem schwebenden Dashboard */}
                    <div
                      aria-hidden
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "radial-gradient(ellipse 60% 70% at 50% 42%, rgba(86,88,223,0.35) 0%, transparent 62%)",
                      }}
                    />
                    <img
                      src={img("pain-point-kpi-dashboard-hero")}
                      alt="KI-Dashboard — garantierte, umsetzbare Use-Cases aus dem Audit"
                      style={{
                        position: "relative",
                        display: "block",
                        width: "100%",
                        aspectRatio: "16 / 9",
                        objectFit: "contain",
                        padding: "clamp(10px,1.6vw,18px)",
                      }}
                      loading="lazy"
                    />
                    {/* Scan-Ecken */}
                    {([
                      { top: 12, left: 12, borderTop: CORNER, borderLeft: CORNER },
                      { top: 12, right: 12, borderTop: CORNER, borderRight: CORNER },
                      { bottom: 12, left: 12, borderBottom: CORNER, borderLeft: CORNER },
                      { bottom: 12, right: 12, borderBottom: CORNER, borderRight: CORNER },
                    ] as React.CSSProperties[]).map((c, i) => (
                      <span
                        key={i}
                        aria-hidden
                        style={{ position: "absolute", width: "14px", height: "14px", pointerEvents: "none", ...c }}
                      />
                    ))}
                  </div>
                </div>

                {/* Eyebrow */}
                <p style={{ ...OUTFIT, fontWeight: 700, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#8B8DF0", marginBottom: "14px" }}>
                  Unser Versprechen
                </p>

                {/* Heading */}
                <h2 style={{ color: "#fff", marginBottom: "18px" }}>
                  {kiAudit.garantie.heading}
                </h2>

                {/* Promise — Kernaussage prominent */}
                <p style={{ ...OUTFIT, fontWeight: 500, fontSize: "clamp(17px,1.6vw,20px)", lineHeight: 1.5, color: "rgba(255,255,255,0.9)", maxWidth: "48ch", margin: "0 auto 18px" }}>
                  {withAccent(kiAudit.garantie.text, "Garantiert — oder ihr zahlt nicht.", "#8B8DF0")}
                </p>

                {/* Sub — Disclaimer */}
                <p style={{ ...OUTFIT, fontWeight: 400, fontSize: "13.5px", color: "#8A84A0" }}>
                  {kiAudit.garantie.sub}
                </p>

                {/* Farbiger CTA — violett (Kontrast auf der dunklen Karte) */}
                <div style={{ marginTop: "clamp(26px,3.2vw,38px)", display: "flex", justifyContent: "center" }}>
                  <EdgePillButton variant="frost" onClick={() => setIsContactOpen(true)}>
                    Kostenloses Erstgespräch buchen
                  </EdgePillButton>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══ 7 — FÜR WEN / NICHT ═══ */}
        <section id="fuer-wen" style={{ background: PAPER }}>
          <div className="max-w-[1000px] mx-auto px-6 lg:px-8" style={{ paddingTop: "clamp(64px,8vw,100px)", paddingBottom: "clamp(64px,8vw,100px)" }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, ease: EASE }} style={{ marginBottom: "clamp(40px,5vw,56px)" }}>
              <SectionHeadline>{kiAudit.fit.heading}</SectionHeadline>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-5">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, ease: EASE }} style={{ background: "#fff", borderRadius: RADIUS, padding: "clamp(28px,3vw,34px)", border: "1px solid rgba(86,88,223,0.12)", boxShadow: "0 1px 2px rgba(23,23,46,0.06)" }}>
                <h3 style={{ fontWeight: 700, fontSize: "14px", letterSpacing: "0.02em", textTransform: "uppercase", color: VIOLET, marginBottom: "20px" }}>
                  {kiAudit.fit.passtLabel}
                </h3>
                <ul className="flex flex-col gap-4 list-none">
                  {kiAudit.fit.passt.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="shrink-0 w-5 h-5 flex items-center justify-center mt-0.5" style={{ background: VIOLET_SOFT, borderRadius: "50%" }}>
                        <Check className="w-3 h-3" style={{ color: VIOLET }} />
                      </span>
                      <span style={{ ...OUTFIT, fontWeight: 400, fontSize: "14px", lineHeight: 1.6, color: INK_DEEP }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay: 0.08, ease: EASE }} style={{ background: "#EFEDF7", borderRadius: RADIUS, padding: "clamp(28px,3vw,34px)" }}>
                <h3 style={{ fontWeight: 700, fontSize: "14px", letterSpacing: "0.02em", textTransform: "uppercase", color: "#8A84A0", marginBottom: "20px" }}>
                  {kiAudit.fit.passtNichtLabel}
                </h3>
                <ul className="flex flex-col gap-4 list-none">
                  {kiAudit.fit.passtNicht.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="shrink-0 w-5 h-5 flex items-center justify-center mt-0.5" style={{ background: "rgba(90,86,107,0.1)", borderRadius: "50%" }}>
                        <X className="w-3 h-3" style={{ color: "#8A84A0" }} />
                      </span>
                      <span style={{ ...OUTFIT, fontWeight: 400, fontSize: "14px", lineHeight: 1.6, color: "#5B566B" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Farbloser CTA unter den beiden Karten (Ghost-Text, öffnet Kontakt-Modal) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: EASE }}
              className="flex justify-center"
              style={{ marginTop: "clamp(36px,4.5vw,52px)" }}
            >
              <EdgeTextButton onClick={() => setIsContactOpen(true)}>
                Unsicher, ob es passt? Sprecht mit uns
              </EdgeTextButton>
            </motion.div>
          </div>
        </section>

        {/* ═══ BMP-Case (Homepage-Case-Spotlight „Bayerischer Mittelstandspreis") ═══ */}
        <div style={{ background: PAPER }}>
          <CaseSpotlightSection />
        </div>

        {/* ═══ FAQ — Landing-Page (richtige CI) ═══ */}
        <section style={{ background: "#fff" }}>
          <div className="max-w-[820px] mx-auto px-6 lg:px-8" style={{ paddingTop: "clamp(56px,7vw,88px)", paddingBottom: "clamp(56px,7vw,88px)" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE }}
              style={{ marginBottom: "clamp(32px,4vw,48px)", textAlign: "center" }}
            >
              <SectionHeadline>{faqs.heading}</SectionHeadline>
            </motion.div>
            <FaqAccordion items={[...faqs.items]} />
          </div>
        </section>

        {/* ═══ 8 — CTA: geteilte „Sprechen Sie direkt mit uns"-Karte (wie Anwendungsfelder/Methodik/Über uns) ═══ */}
        <div id="kontakt">
          <SpeakWithUsCta
            eyebrow="Bereit loszulegen?"
            headingLine1="Sprechen Sie"
            headingLine2="direkt mit uns."
            phoneHref="tel:+4917660431467"
            phoneLabel="+49 176 60 431 467"
          />
        </div>

        <Suspense fallback={<div style={{ minHeight: 200 }} />}>
          <Footer />
        </Suspense>
      </div>

      <ContactFormModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        accentColor={VIOLET}
        gradientFrom={INK_DEEP}
        gradientTo={INK_DEEPER}
        theme="studio"
        sla
      />
    </>
  );
};

export default KiAudit;
