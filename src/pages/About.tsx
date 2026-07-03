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
import { about as ABOUT_STATIC } from "@/content/pages/about";
import { img } from "@/content";
import { useCms } from "@/hooks/useCms";

const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));

const SANS  = "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace";
const SERIF: React.CSSProperties = { fontFamily: "'DM Serif Display', Georgia, serif" };
const MONO: React.CSSProperties  = { fontFamily: "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace" };
const VIOLET   = "#5658DF";
const INK_DEEP = "#17172E";
const HAIRLINE = "rgba(86,88,223,0.12)";
const EASE     = [0.22, 1, 0.36, 1] as const;

const About = () => {
  // Inhalte live aus dem CMS (Strapi); Fallback: statischer Content-Layer
  const about = useCms("about", ABOUT_STATIC);
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
      toast({ title: about.contact.toast.validationTitle, description: Object.values(v.fieldErrors ?? {})[0], variant: "destructive", duration: 5000 });
      return;
    }
    const r = await submitContactForm(v.data!);
    if (r.success) {
      toast({ title: about.contact.toast.successTitle, description: about.contact.toast.successBody, duration: 5000 });
      form.reset();
    } else {
      toast({ title: about.contact.toast.errorTitle, description: r.error || about.contact.toast.errorFallback, variant: "destructive", duration: 5000 });
    }
  };

  return (
    <>
      <SEOHead
        title={about.seo.title}
        description={about.seo.description}
        canonical={about.seo.canonical}
      />

      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <NoiseOverlay opacity={0.03} fixed zIndex={2} />
        <MobileNavigation onContactClick={() => setContactOpen(true)} theme="dark" />

        {/* ── HERO ──────────────────────────────────────────────── */}
        <div className="relative" style={{ background: "#0A0A18", minHeight: "100dvh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
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
              <span style={{ width: "32px", height: "1px", background: "#C2C3F6", display: "block" }} />
              <span style={{ ...MONO, fontSize: "11px", letterSpacing: "0.22em", color: "#C2C3F6", textTransform: "uppercase" }}>
                {about.hero.eyebrow}
              </span>
              <span style={{ width: "32px", height: "1px", background: "#C2C3F6", display: "block" }} />
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
              fontSize: "clamp(2.75rem, 6vw, 5.5rem)",
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
                {about.hero.headline}
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
              {about.hero.subline}
            </p>

            {/* CTA */}
            <div style={{ marginTop: "36px", display: "flex", justifyContent: "center" }}>
              <SweepButton
                onClick={() => window.open(about.hero.cta.href, "_blank", "noopener")}
                sweepColor="violet"
                hoverTextColor="#ffffff"
                style={{
                  background: "#5658DF",
                  color: "#fff",
                  fontFamily: "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  padding: "14px 32px",
                  border: "1px solid rgba(132,118,239,0.4)",
                  boxShadow: "0 0 20px rgba(132,118,239,0.3)",
                }}
              >
                {about.hero.cta.label}
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

        {/* ── MAGAZIN-HINTERGRUND: Helllila + Spaltenraster (wie ursprünglich auf Über uns) ── */}
        <div style={{ position: "relative", background: "#F8F5FF" }}>
          {/* Editorial-Hintergrund: 12-Spalten-Raster + dezenter Marken-Schimmer */}
          <div aria-hidden style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: [
                  "radial-gradient(ellipse 60% 38% at 100% 0%, rgba(86,88,223,0.05) 0%, transparent 55%)",
                  "radial-gradient(ellipse 55% 42% at 0% 100%, rgba(132,118,239,0.04) 0%, transparent 55%)",
                ].join(", "),
              }}
            />
            <div className="h-full w-full flex justify-center">
              <div className="w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 h-full">
                <div
                  style={{
                    height: "100%",
                    backgroundImage:
                      "linear-gradient(to right, rgba(23,23,46,0.07) 0 1px, transparent 1px)",
                    backgroundSize: "calc(100% / 12) 100%",
                    borderRight: "1px solid rgba(23,23,46,0.07)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Inhalt — über dem Raster */}
          <div style={{ position: "relative", zIndex: 1 }}>

        {/* ── TEAM CARDS ─────────────────────────────────────────── */}
        <div style={{ background: "transparent", padding: "clamp(64px,8vw,112px) 24px clamp(80px,10vw,128px)" }}>
          <div style={{ maxWidth: "1040px", margin: "0 auto" }}>
            <style>{`
              .team-photo .team-img {
                position: absolute; inset: 0; width: 100%; height: 100%;
                object-fit: cover; display: block;
                transition: opacity 0.55s ease, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
                will-change: opacity, transform;
              }
              .team-img-hover { opacity: 0; }
              .team-card--swap:hover .team-img-base { opacity: 0; transform: scale(1.05); }
              .team-card--swap:hover .team-img-hover { opacity: 1; transform: scale(1.05); }
              @media (prefers-reduced-motion: reduce) {
                .team-photo .team-img { transition: opacity 0.2s ease; }
                .team-card--swap:hover .team-img-base,
                .team-card--swap:hover .team-img-hover { transform: none; }
              }
            `}</style>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "28px",
            }}>
              {about.team.map((member, i) => (
                <motion.div
                  key={member.name}
                  className={member.imgHover ? "team-card team-card--swap" : "team-card"}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
                  style={{
                    background: "#FFFFFF",
                    border: `1px solid ${HAIRLINE}`,
                    boxShadow: "0 2px 16px rgba(86,88,223,0.07)",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Photo / Avatar */}
                  <div className="team-photo" style={{ aspectRatio: "3 / 4", background: "#EDE9FF", overflow: "hidden", position: "relative" }}>
                    {member.img ? (
                      <>
                        <img
                          className="team-img team-img-base"
                          src={img(member.img)}
                          alt={member.name}
                          style={{ objectPosition: member.imgPos || "center top" }}
                        />
                        {member.imgHover && (
                          <img
                            className="team-img team-img-hover"
                            src={img(member.imgHover)}
                            alt=""
                            aria-hidden
                            loading="lazy"
                            style={{ objectPosition: member.imgHoverPos || member.imgPos || "center top" }}
                          />
                        )}
                      </>
                    ) : (
                      <div style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: `linear-gradient(135deg, #EDE9FF 0%, #DDD6FE 100%)`,
                      }}>
                        <span style={{
                          ...SERIF,
                          fontSize: "5rem",
                          color: VIOLET,
                          opacity: 0.35,
                          fontStyle: "italic",
                        }}>
                          {member.initials}
                        </span>
                      </div>
                    )}
                    {/* Role badge */}
                    <div style={{
                      position: "absolute",
                      top: "16px",
                      left: "16px",
                      background: "rgba(86,88,223,0.88)",
                      backdropFilter: "blur(8px)",
                      padding: "5px 12px",
                    }}>
                      <span style={{ ...MONO, fontSize: "10px", letterSpacing: "0.18em", color: "#fff", textTransform: "uppercase" }}>
                        {member.role}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div style={{ padding: "28px 24px 32px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <h2 style={{ ...SERIF, fontStyle: "italic", fontSize: "1.5rem", color: INK_DEEP, marginBottom: "20px", lineHeight: 1.1 }}>
                      {member.name}
                    </h2>

                    {/* Facts */}
                    <ul style={{ listStyle: "none", margin: 0, padding: 0, flex: 1 }}>
                      {member.facts.map((f, fi) => (
                        <li key={fi} style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "10px",
                          paddingBottom: "10px",
                          marginBottom: fi < member.facts.length - 1 ? "10px" : 0,
                          borderBottom: fi < member.facts.length - 1 ? `1px solid ${HAIRLINE}` : "none",
                        }}>
                          <span style={{ color: VIOLET, fontSize: "10px", marginTop: "4px", flexShrink: 0 }}>▸</span>
                          <span style={{ ...MONO, fontSize: "12px", color: "rgba(23,23,46,0.65)", lineHeight: 1.6 }}>{f}</span>
                        </li>
                      ))}
                    </ul>

                    {/* LinkedIn */}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          marginTop: "24px",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          textDecoration: "none",
                          color: VIOLET,
                          opacity: 0.75,
                          transition: "opacity 0.2s",
                        }}
                        onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                        onMouseLeave={e => (e.currentTarget.style.opacity = "0.75")}
                        aria-label={`${member.name} auf LinkedIn`}
                      >
                        {/* LinkedIn official logo */}
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="24" height="24" rx="4" fill={VIOLET}/>
                          <path d="M7.5 9.5H5V19H7.5V9.5Z" fill="white"/>
                          <circle cx="6.25" cy="6.75" r="1.5" fill="white"/>
                          <path d="M13 13.5C13 12.4 13.9 11.5 15 11.5C16.1 11.5 17 12.4 17 13.5V19H19.5V13.5C19.5 11 17.5 9 15 9C13.8 9 12.7 9.5 12 10.3V9.5H9.5V19H12V13.5H13Z" fill="white"/>
                        </svg>
                        <span style={{ ...MONO, fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                          LinkedIn
                        </span>
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── WERKBANK — System-Manifest ──────────────────────────── */}
        <div style={{ background: "transparent", borderTop: "1px solid rgba(86,88,223,0.12)", padding: "clamp(64px,8vw,112px) 24px" }}>
          <style>{`
            .wb-grid { display: grid; grid-template-columns: 1.08fr 0.92fr; gap: clamp(32px, 5vw, 72px); align-items: start; }
            .wb-row {
              position: relative; display: grid; grid-template-columns: 64px 1fr; gap: 20px;
              align-items: baseline; padding: clamp(18px, 2.4vw, 26px) 18px;
              border: 1px solid ${HAIRLINE}; overflow: hidden;
              background: #ffffff;
              margin-bottom: 6px;
            }
            .wb-row:last-child { margin-bottom: 0; }
            .wb-row::before {
              content: ""; position: absolute; inset: 0; background: ${VIOLET};
              transform: scaleY(0); transform-origin: bottom; z-index: 0;
              transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
            }
            .wb-row:hover::before { transform: scaleY(1); }
            .wb-row > * { position: relative; z-index: 1; transition: color 0.35s ease, -webkit-text-stroke-color 0.35s ease; }
            .wb-num {
              font-family: 'DM Serif Display', Georgia, serif; font-style: italic;
              font-size: clamp(1.9rem, 3vw, 2.6rem); line-height: 1; color: transparent;
              -webkit-text-stroke: 1px rgba(86,88,223,0.32);
            }
            .wb-row:hover .wb-num { -webkit-text-stroke-color: rgba(255,255,255,0.6); }
            .wb-label {
              color: ${VIOLET};
              font-family: 'DM Serif Display', Georgia, serif;
              font-style: italic;
              font-size: clamp(1.2rem, 2.2vw, 1.55rem);
              letter-spacing: -0.01em;
              line-height: 1.1;
            }
            .wb-desc { color: #26263A; }
            .wb-row:hover .wb-label,
            .wb-row:hover .wb-desc { color: #fff; }
            .wb-photo { position: relative; border: 1px solid ${HAIRLINE}; overflow: hidden; min-height: clamp(360px, 46vw, 520px); }
            @media (max-width: 860px) {
              .wb-grid { grid-template-columns: 1fr; }
              .wb-photo { min-height: 320px; }
            }
            @media (prefers-reduced-motion: reduce) {
              .wb-row::before { transition: none; }
            }
          `}</style>

          <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
            <p style={{ ...MONO, display: "flex", alignItems: "center", gap: "12px", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: VIOLET, marginBottom: "16px" }}>
              <span aria-hidden style={{ display: "inline-block", width: "32px", height: "1px", background: VIOLET }} />
              {about.werkbank.eyebrow}
            </p>
            <h2 style={{ ...SERIF, fontStyle: "italic", fontSize: "clamp(1.85rem, 3.4vw, 2.75rem)", lineHeight: 1.1, letterSpacing: "-0.02em", color: INK_DEEP, marginBottom: "12px" }}>
              {about.werkbank.heading}
            </h2>
            <p style={{ ...MONO, fontSize: "15px", lineHeight: 1.7, color: "#3C3C47", maxWidth: "62ch", marginBottom: "clamp(40px, 5vw, 64px)" }}>
              {about.werkbank.intro}
            </p>

            <div className="wb-grid">
              {/* Manifest */}
              <div>
                {about.werkbank.manifest.map((row, i) => (
                  <div key={row.k} className="wb-row">
                    <span className="wb-num" aria-hidden>{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <span className="wb-label" style={{ display: "block", marginBottom: "8px" }}>{row.k}</span>
                      <span className="wb-desc" style={{ ...MONO, display: "block", fontSize: "13px", lineHeight: 1.65 }}>{row.v}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Video als dokumentiertes Artefakt */}
              <div
                className="wb-photo"
                style={{ aspectRatio: "16 / 9", minHeight: 0 }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${about.werkbank.video.youtubeId}?rel=0&modestbranding=1&color=white`}
                  title={about.werkbank.video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none", display: "block" }}
                />
              </div>
            </div>
          </div>
        </div>

          </div>{/* /Inhalt */}
        </div>{/* /Magazin-Hintergrund */}

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
            {/* LEFT — text */}
            <div>
              <p style={{ ...MONO, fontSize: "11px", letterSpacing: "0.22em", color: "#C2C3F6", textTransform: "uppercase", marginBottom: "20px" }}>
                {about.cta.eyebrow}
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
                {about.cta.headingLine1}<br />{about.cta.headingLine2}
              </h2>
              {/* Phone */}
              <a
                href={about.cta.phone.href}
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
                {about.cta.phone.label}
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
              <SheetTitle className="text-2xl font-bold">{about.contact.title}</SheetTitle>
              <SheetDescription>{about.contact.description}</SheetDescription>
            </SheetHeader>
            <form onSubmit={handleSubmit} className="space-y-5">
              {about.contact.fields.map(f => (
                <div key={f.id} className="space-y-2">
                  <Label htmlFor={f.id}>{f.label}</Label>
                  <Input id={f.id} name={f.id} type={f.type} placeholder={f.placeholder} required={f.required} />
                </div>
              ))}
              <div className="space-y-2">
                <Label htmlFor="nachricht">{about.contact.message.label}</Label>
                <Textarea id="nachricht" name="nachricht" placeholder={about.contact.message.placeholder} required className="min-h-[120px] resize-none" />
              </div>
              <SweepButton type="submit" sweepColor="violet" hoverTextColor="#ffffff" style={{ width: "100%", background: "#5658DF", color: "#fff", ...MONO, fontSize: "12px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", padding: "16px 28px", border: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                {about.contact.submit} <ArrowRight style={{ width: 16, height: 16 }} />
              </SweepButton>
            </form>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default About;
