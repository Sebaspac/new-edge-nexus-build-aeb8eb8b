import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { MobileNavigation } from "@/components/MobileNavigation";
import SEOHead from "@/components/SEOHead";
import { AuroraFlow } from "@/components/ui/aurora-flow";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { FloatingConsultButton } from "@/components/ui/FloatingConsultButton";
import { CursorLine } from "@/components/ui/CursorLine";
import { useState, useRef } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { SweepButton } from "@/components/ui/SweepButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";
const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));

const SANS  = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";
const SERIF: React.CSSProperties = { fontFamily: "'DM Serif Display', Georgia, serif" };
const MONO: React.CSSProperties  = { fontFamily: "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace" };
const VIOLET   = "#5B21B6";
const INK_DEEP = "#1A0A2E";
const EASE     = [0.22, 1, 0.36, 1] as const;

const About = () => {
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
      toast({ title: "Validierungsfehler", description: Object.values(v.fieldErrors ?? {})[0], variant: "destructive", duration: 5000 });
      return;
    }
    const r = await submitContactForm(v.data!);
    if (r.success) {
      toast({ title: "Nachricht gesendet", description: "Wir melden uns bald.", duration: 5000 });
      form.reset();
    } else {
      toast({ title: "Fehler", description: r.error || "Bitte erneut versuchen.", variant: "destructive", duration: 5000 });
    }
  };

  return (
    <>
      <SEOHead
        title="Unser Team | New Edge KI-Agentur München"
        description="Das New Edge Team verbindet tiefe technische KI-Kenntnisse mit Business-Verständnis für den DACH-Raum und die USA."
        canonical="/about"
      />

      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <NoiseOverlay opacity={0.03} fixed zIndex={2} />
        <MobileNavigation onContactClick={() => setContactOpen(true)} theme="dark" />

        {/* ── HERO ──────────────────────────────────────────────── */}
        <div className="relative" style={{ background: "#0A0412", minHeight: "100dvh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          {/* Aurora */}
          <div aria-hidden style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
            <AuroraFlow />
          </div>
          {/* Vignette */}
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
              <span style={{ width: "32px", height: "1px", background: "#C4B5FD", display: "block" }} />
              <span style={{ ...MONO, fontSize: "11px", letterSpacing: "0.22em", color: "#C4B5FD", textTransform: "uppercase" }}>
                New Edge
              </span>
              <span style={{ width: "32px", height: "1px", background: "#C4B5FD", display: "block" }} />
            </div>

            {/* Premium shimmer — slow left→right pendulum */}
            <style>{`
              @keyframes ab-shimmer {
                from { background-position: -220% center; }
                to   { background-position:  220% center; }
              }
            `}</style>

            {/* Headline */}
            <h1 style={{
              ...SERIF,
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(3rem, 7vw, 6rem)",
              lineHeight: 0.96,
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
                animation: "ab-shimmer 18s ease-in-out infinite alternate",
                display: "inline",
              }}>
                Unser Team.
              </span>
            </h1>

            {/* Subline */}
            <p style={{
              fontFamily: SANS,
              fontSize: "clamp(15px, 1.7vw, 18px)",
              color: "#a0a0a0",
              maxWidth: "640px",
              margin: "0 auto",
              lineHeight: 1.62,
              fontWeight: 400,
            }}>
              Unser Team hat KI-Projekte sowohl in den USA wie im DACH-Raum implementiert und vereint tiefe technische Kenntnisse mit einem fundierten Business-Verständnis — um zielführende Lösungen für Ihr Unternehmen zu entwickeln.
            </p>

            {/* CTA */}
            <div style={{ marginTop: "36px", display: "flex", justifyContent: "center" }}>
              <SweepButton
                onClick={() => window.open("https://calendly.com/sebastian-p-newedgebrand/30min", "_blank", "noopener")}
                sweepColor="white"
                hoverTextColor="#5B21B6"
                style={{
                  background: "linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)",
                  color: "#fff",
                  fontFamily: "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  padding: "14px 32px",
                  border: "1px solid rgba(139,92,246,0.4)",
                  boxShadow: "0 0 20px rgba(124,58,237,0.3)",
                }}
              >
                Erstgespräch buchen
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
              background: "linear-gradient(to bottom, rgba(196,181,253,0), #C4B5FD 50%, rgba(196,181,253,0.6))",
              boxShadow: "0 0 10px rgba(196,181,253,0.45)",
              zIndex: 3,
            }}
          />
        </div>

        {/* ── CTA ───────────────────────────────────────────────── */}
        <CursorLine buttonRef={ctaBtnRef} buttonRadius={76}>
        <div style={{
          background: INK_DEEP,
          padding: "clamp(64px,8vw,100px) 24px",
          position: "relative",
        }}>
          {/* subtle glow */}
          <div aria-hidden style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: "radial-gradient(ellipse 70% 60% at 0% 100%, rgba(91,33,182,0.28) 0%, transparent 65%)",
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
            {/* LEFT — text */}
            <div>
              <p style={{ ...MONO, fontSize: "11px", letterSpacing: "0.22em", color: "#C4B5FD", textTransform: "uppercase", marginBottom: "20px" }}>
                Bereit loszulegen?
              </p>
              <h2 style={{
                ...SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(2rem, 4vw, 3.4rem)",
                color: "#fff",
                lineHeight: 1.0,
                marginBottom: "32px",
                letterSpacing: "-0.01em",
              }}>
                Sprechen Sie<br />direkt mit uns.
              </h2>
              {/* Phone */}
              <a
                href="tel:+4917660431467"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  ...MONO,
                  fontSize: "13px",
                  letterSpacing: "0.1em",
                  color: "rgba(196,181,253,0.75)",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(196,181,253,0.2)",
                  paddingBottom: "2px",
                  transition: "color 0.2s",
                }}
              >
                <span style={{ fontSize: "16px", opacity: 0.7 }}>↗</span>
                +49 176 60 431 467
              </a>
            </div>

            {/* RIGHT — circle button */}
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
              <SheetTitle className="text-2xl font-bold">Projekt besprechen</SheetTitle>
              <SheetDescription>Erzählen Sie uns von Ihrem Projekt — wir melden uns zeitnah.</SheetDescription>
            </SheetHeader>
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { id: "name",     label: "Name *",     type: "text",  placeholder: "Ihr Name",          required: true },
                { id: "email",    label: "E-Mail *",   type: "email", placeholder: "ihre@email.com",    required: true },
                { id: "position", label: "Position *", type: "text",  placeholder: "Ihre Position",     required: true },
                { id: "firma",    label: "Firma *",    type: "text",  placeholder: "Ihr Unternehmen",   required: true },
                { id: "telefon",  label: "Telefon",    type: "tel",   placeholder: "Ihre Telefonnummer", required: false },
              ].map(f => (
                <div key={f.id} className="space-y-2">
                  <Label htmlFor={f.id}>{f.label}</Label>
                  <Input id={f.id} name={f.id} type={f.type} placeholder={f.placeholder} required={f.required} />
                </div>
              ))}
              <div className="space-y-2">
                <Label htmlFor="nachricht">Nachricht *</Label>
                <Textarea id="nachricht" name="nachricht" placeholder="Erzählen Sie uns von Ihrem Projekt..." required className="min-h-[120px] resize-none" />
              </div>
              <SweepButton type="submit" sweepColor="white" hoverTextColor="#5B21B6" style={{ width: "100%", background: "linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)", color: "#fff", ...MONO, fontSize: "12px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", padding: "16px 28px", border: "1px solid rgba(139,92,246,0.4)", boxShadow: "0 0 20px rgba(124,58,237,0.3)", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                Nachricht senden <ArrowRight style={{ width: 16, height: 16 }} />
              </SweepButton>
            </form>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default About;
