import { lazy, Suspense, useState, useRef } from "react";
import { motion } from "framer-motion";
import { MobileNavigation } from "@/components/MobileNavigation";
import { NewEdgeSystemAnimated } from "@/components/NewEdgeSystemAnimated";
import SEOHead from "@/components/SEOHead";
import { AuroraFlow } from "@/components/ui/aurora-flow";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { FloatingConsultButton } from "@/components/ui/FloatingConsultButton";
import { CursorLine } from "@/components/ui/CursorLine";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { SweepButton } from "@/components/ui/SweepButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { methodik as METHODIK_STATIC } from "@/content/pages/methodik";
import { useCms } from "@/hooks/useCms";

const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));

const SANS  = "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace";
const SERIF: React.CSSProperties = { fontFamily: "'DM Serif Display', Georgia, serif" };
const MONO: React.CSSProperties  = { fontFamily: "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace" };
const VIOLET   = "#5658DF";
const INK_DEEP = "#17172E";
const HAIRLINE = "#E6E6E6";
const EASE     = [0.22, 1, 0.36, 1] as const;

const Methodik = () => {
  // Inhalte live aus dem CMS (Strapi); Fallback: statischer Content-Layer
  const methodik = useCms("methodik", METHODIK_STATIC);
  const [contactOpen, setContactOpen] = useState(false);
  const ctaBtnRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const { validateContactForm, submitContactForm } = await import("@/utils/contactFormValidation");
    const raw = {
      name: formData.get("name")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      phone: formData.get("telefon")?.toString() || "",
      company: formData.get("firma")?.toString() || "",
      position: formData.get("position")?.toString() || "",
      message: formData.get("nachricht")?.toString() || "",
    };
    const v = validateContactForm(raw);
    if (!v.success) {
      toast({ title: methodik.toast.validationTitle, description: Object.values(v.fieldErrors ?? {})[0], variant: "destructive", duration: 5000 });
      return;
    }
    const r = await submitContactForm(v.data!);
    if (r.success) {
      toast({ title: methodik.toast.successTitle, description: methodik.toast.successBody, duration: 5000 });
      form.reset();
    } else {
      toast({ title: methodik.toast.errorTitle, description: r.error || methodik.toast.errorFallback, variant: "destructive", duration: 5000 });
    }
  };

  return (
    <>
      <SEOHead
        title={methodik.seo.title}
        description={methodik.seo.description}
        canonical={methodik.seo.canonical}
      />

      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <NoiseOverlay opacity={0.03} fixed zIndex={2} />
        <MobileNavigation onContactClick={() => setContactOpen(true)} theme="dark" />

        {/* ── HERO ──────────────────────────────────────────────── */}
        <div className="relative" style={{ background: "#0A0A18", minHeight: "100dvh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div aria-hidden style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
            <AuroraFlow />
          </div>
          <div aria-hidden style={{
            position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
            background: "radial-gradient(ellipse 70% 65% at 50% 50%, rgba(4,1,12,0.72) 0%, rgba(4,1,12,0.28) 55%, transparent 82%)",
          }} />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "clamp(100px,16vh,140px) 24px clamp(60px,8vh,100px)", fontFamily: SANS }}
          >
            {/* Eyebrow */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "28px" }}>
              <span style={{ width: "32px", height: "1px", background: "#C2C3F6", display: "block" }} />
              <span style={{ ...MONO, fontSize: "11px", letterSpacing: "0.22em", color: "#C2C3F6", textTransform: "uppercase" }}>
                {methodik.hero.eyebrow}
              </span>
              <span style={{ width: "32px", height: "1px", background: "#C2C3F6", display: "block" }} />
            </div>

            <style>{`
              @keyframes me-shimmer {
                from { background-position: -220% center; }
                to   { background-position:  220% center; }
              }
            `}</style>

            {/* Headline */}
            <h1 style={{
              ...SERIF,
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(2.75rem, 6vw, 5.5rem)",
              lineHeight: 0.98,
              letterSpacing: "-0.02em",
              marginBottom: "32px",
            }}>
              <span style={{
                background: "linear-gradient(115deg, #fff 0%, #fff 24%, #f6f2ff 36%, #ece5ff 44%, #f8f5ff 50%, #f3efff 57%, #fff 68%, #fff 100%)",
                backgroundSize: "280% auto",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
                animation: "me-shimmer 18s ease-in-out infinite alternate",
                display: "inline",
              }}>
                {methodik.hero.headlineLine1}<br />{methodik.hero.headlineLine2}
              </span>
            </h1>

            {/* Subline */}
            <p style={{
              fontFamily: SANS,
              fontSize: "15px",
              color: "#a8a3b3",
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: 1.7,
              fontWeight: 400,
            }}>
              {methodik.hero.subline}
            </p>

            {/* CTA */}
            <div style={{ marginTop: "36px", display: "flex", justifyContent: "center" }}>
              <SweepButton
                onClick={() => window.open(methodik.hero.ctaHref, "_blank", "noopener")}
                sweepColor="violet"
                hoverTextColor="#ffffff"
                style={{
                  background: "#5658DF",
                  color: "#fff",
                  fontFamily: SANS,
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  padding: "14px 32px",
                  border: "1px solid rgba(132,118,239,0.4)",
                  boxShadow: "0 0 20px rgba(132,118,239,0.3)",
                }}
              >
                {methodik.hero.ctaLabel}
              </SweepButton>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "2px",
              height: "clamp(80px, 10vh, 130px)",
              background: "linear-gradient(to bottom, rgba(194,195,246,0), #C2C3F6 50%, rgba(194,195,246,0.6))",
              boxShadow: "0 0 10px rgba(194,195,246,0.45)",
              zIndex: 3,
            }}
          />
        </div>

        {/* ── MANIFEST ──────────────────────────────────────────── */}
        <div style={{ background: "#F8F5FF", padding: "clamp(64px,8vw,112px) 24px" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <p style={{ ...MONO, display: "flex", alignItems: "center", gap: "12px", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: VIOLET, marginBottom: "28px" }}>
              <span aria-hidden style={{ display: "inline-block", width: "32px", height: "1px", background: VIOLET }} />
              {methodik.manifest.eyebrow}
            </p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <p style={{ ...SERIF, fontStyle: "italic", fontSize: "clamp(1.35rem, 2.2vw, 1.85rem)", lineHeight: 1.25, color: INK_DEEP, marginBottom: "28px" }}>
                {methodik.manifest.lead}
              </p>
              <p style={{ ...MONO, fontSize: "15px", lineHeight: 1.8, color: "#3C3C47", marginBottom: "16px" }}>
                {methodik.manifest.body[0]}
              </p>
              <p style={{ ...MONO, fontSize: "15px", lineHeight: 1.8, color: "#3C3C47" }}>
                {methodik.manifest.body[1]}
              </p>
            </motion.div>
          </div>
        </div>

        {/* ── ENTWICKLUNGSSTUFEN ────────────────────────────────── */}
        <div style={{ background: "#F8F5FF", borderTop: `1px solid ${HAIRLINE}`, padding: "clamp(64px,8vw,112px) 24px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <p style={{ ...MONO, display: "flex", alignItems: "center", gap: "12px", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: VIOLET, marginBottom: "16px" }}>
              <span aria-hidden style={{ display: "inline-block", width: "32px", height: "1px", background: VIOLET }} />
              {methodik.stufenSection.eyebrow}
            </p>
            <h2 style={{ ...SERIF, fontStyle: "italic", fontSize: "clamp(1.85rem, 3.4vw, 2.75rem)", lineHeight: 1.1, letterSpacing: "-0.02em", color: INK_DEEP, marginBottom: "clamp(48px, 6vw, 80px)" }}>
              {methodik.stufenSection.headingLine1}<br />{methodik.stufenSection.headingLine2}
            </h2>

            {methodik.stufen.map((s, i) => (
              <motion.section
                key={s.index}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: EASE }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "clamp(24px, 4vw, 64px)",
                  borderTop: `1px solid ${HAIRLINE}`,
                  padding: "clamp(40px, 5vw, 64px) 0",
                }}
              >
                {/* Left: index + title */}
                <div>
                  <span style={{ ...SERIF, fontStyle: "italic", display: "block", fontSize: "clamp(2.25rem, 4.5vw, 3.4rem)", lineHeight: 1, color: VIOLET, opacity: 0.28, marginBottom: "16px" }}>
                    {s.index}
                  </span>
                  <h3 style={{ ...SERIF, fontSize: "clamp(1.35rem, 2.2vw, 1.85rem)", lineHeight: 1.15, color: INK_DEEP, marginBottom: "10px" }}>
                    {s.title}
                  </h3>
                  <p style={{ ...MONO, fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: VIOLET, margin: 0 }}>
                    {s.frage}
                  </p>
                </div>

                {/* Right: body + lists + Ergebnis */}
                <div>
                  {s.intro.map((p, pi) => (
                    <p key={pi} style={{ ...MONO, fontSize: "15px", lineHeight: 1.8, color: "#3C3C47", marginBottom: "14px" }}>
                      {p}
                    </p>
                  ))}

                  {s.list && (
                    <div style={{ margin: "22px 0" }}>
                      <p style={{ ...MONO, fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: VIOLET, marginBottom: "10px" }}>
                        {s.listLabel}
                      </p>
                      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        {s.list.map((item) => (
                          <li key={item} style={{ ...MONO, fontSize: "12px", color: "#26263A", border: `1px solid ${HAIRLINE}`, background: "#FFFFFF", padding: "7px 14px" }}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {s.outro && (
                    <p style={{ ...MONO, fontSize: "15px", lineHeight: 1.8, color: "#3C3C47", marginBottom: "22px" }}>
                      {s.outro}
                    </p>
                  )}

                  {/* Ergebnis */}
                  <div style={{ borderLeft: `2px solid ${VIOLET}`, background: "rgba(86,88,223,0.04)", padding: "18px 22px" }}>
                    <p style={{ ...MONO, fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: VIOLET, marginBottom: "10px" }}>
                      {methodik.stufenSection.ergebnisLabel}
                    </p>
                    <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                      {s.ergebnis.map((e) => (
                        <li key={e} style={{ display: "flex", alignItems: "flex-start", gap: "10px", padding: "4px 0" }}>
                          <span style={{ color: VIOLET, fontSize: "10px", marginTop: "5px", flexShrink: 0 }}>▸</span>
                          <span style={{ ...MONO, fontSize: "13px", color: "rgba(23,23,46,0.75)", lineHeight: 1.6 }}>{e}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.section>
            ))}
          </div>
        </div>

        {/* ── DAS NEWEDGE SYSTEM (animiert) ─────────────────────── */}
        <NewEdgeSystemAnimated />

        {/* ── DAS ZIEL ──────────────────────────────────────────── */}
        <div style={{ background: "#F8F5FF", padding: "clamp(64px,8vw,112px) 24px" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <p style={{ ...MONO, display: "flex", alignItems: "center", gap: "12px", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: VIOLET, marginBottom: "16px" }}>
              <span aria-hidden style={{ display: "inline-block", width: "32px", height: "1px", background: VIOLET }} />
              {methodik.ziel.eyebrow}
            </p>
            <h2 style={{ ...SERIF, fontStyle: "italic", fontSize: "clamp(1.85rem, 3.4vw, 2.75rem)", lineHeight: 1.1, letterSpacing: "-0.02em", color: INK_DEEP, marginBottom: "20px" }}>
              {methodik.ziel.headingLine1}<br />{methodik.ziel.headingLine2}
            </h2>
            <p style={{ ...MONO, fontSize: "15px", lineHeight: 1.8, color: "#3C3C47", marginBottom: "28px" }}>
              {methodik.ziel.intro}
            </p>
            <ul style={{ listStyle: "none", margin: "0 0 28px", padding: 0 }}>
              {methodik.ziel.punkte.map((z, zi) => (
                <li key={z} style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  padding: "12px 0",
                  borderBottom: zi < methodik.ziel.punkte.length - 1 ? `1px solid rgba(86,88,223,0.12)` : "none",
                }}>
                  <span style={{ color: VIOLET, fontSize: "10px", marginTop: "6px", flexShrink: 0 }}>▸</span>
                  <span style={{ ...MONO, fontSize: "15px", color: "#26263A", lineHeight: 1.6 }}>{z}</span>
                </li>
              ))}
            </ul>
            <p style={{ ...SERIF, fontStyle: "italic", fontSize: "clamp(1.1rem, 1.6vw, 1.4rem)", lineHeight: 1.35, color: INK_DEEP, margin: 0 }}>
              {methodik.ziel.closing}
            </p>
          </div>
        </div>

        {/* ── CTA ───────────────────────────────────────────────── */}
        <CursorLine buttonRef={ctaBtnRef} buttonRadius={76}>
        <div style={{ background: INK_DEEP, padding: "clamp(64px,8vw,100px) 24px", position: "relative" }}>
          <div aria-hidden style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: "radial-gradient(ellipse 70% 60% at 0% 100%, rgba(86,88,223,0.28) 0%, transparent 65%)",
          }} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE }}
            style={{
              position: "relative",
              zIndex: 1,
              maxWidth: "900px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "clamp(32px, 6vw, 80px)",
              alignItems: "center",
            }}
          >
            <div>
              <p style={{ ...MONO, fontSize: "11px", letterSpacing: "0.22em", color: "#C2C3F6", textTransform: "uppercase", marginBottom: "20px" }}>
                {methodik.cta.eyebrow}
              </p>
              <h2 style={{
                ...SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(2.25rem, 4.5vw, 3.4rem)",
                color: "#fff",
                lineHeight: 1.0,
                marginBottom: "32px",
                letterSpacing: "-0.01em",
              }}>
                {methodik.cta.headingLine1}<br />{methodik.cta.headingLine2}
              </h2>
              <a
                href={methodik.cta.phoneHref}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  ...MONO,
                  fontSize: "13px",
                  letterSpacing: "0.1em",
                  color: "rgba(194,195,246,0.75)",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(194,195,246,0.2)",
                  paddingBottom: "2px",
                  transition: "color 0.2s",
                }}
              >
                <span style={{ fontSize: "15px", opacity: 0.7 }}>↗</span>
                {methodik.cta.phoneLabel}
              </a>
            </div>

            <div ref={ctaBtnRef} style={{ display: "flex", justifyContent: "center" }}>
              <FloatingConsultButton textColor="#ffffff" />
            </div>
          </motion.div>
        </div>
        </CursorLine>

        {/* Footer */}
        <Suspense fallback={<div style={{ minHeight: 200 }} />}>
          <Footer />
        </Suspense>

        {/* Contact Sheet */}
        <Sheet open={contactOpen} onOpenChange={setContactOpen}>
          <SheetContent side="right" className="w-full sm:max-w-xl overflow-y-auto">
            <SheetHeader className="mb-6">
              <SheetTitle className="text-2xl font-bold">{methodik.contact.title}</SheetTitle>
              <SheetDescription>{methodik.contact.description}</SheetDescription>
            </SheetHeader>
            <form onSubmit={handleSubmit} className="space-y-5">
              {methodik.contact.fields.map(f => (
                <div key={f.id} className="space-y-2">
                  <Label htmlFor={f.id}>{f.label}</Label>
                  <Input id={f.id} name={f.id} type={f.type} placeholder={f.placeholder} required={f.required} />
                </div>
              ))}
              <div className="space-y-2">
                <Label htmlFor="nachricht">{methodik.contact.message.label}</Label>
                <Textarea id="nachricht" name="nachricht" placeholder={methodik.contact.message.placeholder} required className="min-h-[120px] resize-none" />
              </div>
              <SweepButton type="submit" sweepColor="violet" hoverTextColor="#ffffff" style={{ width: "100%", background: "#5658DF", color: "#fff", ...MONO, fontSize: "12px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", padding: "16px 28px", border: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                {methodik.contact.submit} <ArrowRight style={{ width: 16, height: 16 }} />
              </SweepButton>
            </form>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Methodik;
