import { useEffect, useState, lazy, Suspense } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ChevronDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from "react-helmet-async";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ContactFormModal } from "@/components/ContactFormModal";
import { LazyVideo } from "@/components/LazyVideo";
import { BrandStrategyAnimation } from "@/components/ui/brand-strategy-animation";
import { BrandIdentityAnimation } from "@/components/ui/brand-identity-animation";
import { KiAuditAnimation } from "@/components/ui/ki-audit-animation";
import albanovaImage from "@/assets/albanova-website.png";

const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));

/* ─── Data ─── */
const studioServices = [
  {
    number: "01",
    title: "Brand Identity & Brand System",
    problem: "Unklare Markenlogik und inkonsistente Kommunikation führen zu Reibung, Fehlannahmen und nicht anschlussfähigen Systemen.",
    solution: "Wir entwickeln eine Markenidentität, die als funktionale Grundlage für Web, Software und KI-Systeme dient.",
    animation: <BrandStrategyAnimation />,
    deliverables: [
      { title: "Markenkern & Purpose", description: "Das strategische Fundament der Marke als Entscheidungsgrundlage." },
      { title: "Positionierung & Markenlogik", description: "Klare Differenzierung und Einordnung im Wettbewerbsumfeld." },
      { title: "Logosystem & Typografie", description: "Visuelle Identität mit definierten Anwendungsregeln." },
      { title: "Brand Book als Regelwerk", description: "Umfassende Dokumentation aller Markenrichtlinien." },
    ],
  },
  {
    number: "02",
    title: "KI Enablement & Audit",
    problem: "KI wird oft eingesetzt, ohne klare Ziele, ohne saubere Datenbasis und ohne Verständnis für Risiken.",
    solution: "Wir analysieren Prozesse, Daten und Tools und schaffen Entscheidungsfähigkeit: Was ist sinnvoll – und was nicht?",
    animation: <KiAuditAnimation />,
    deliverables: [
      { title: "Analyse bestehender Prozesse & Tools", description: "Erfassung und Bewertung aktueller Abläufe und Systeme." },
      { title: "Bewertung von KI-Potenzialen", description: "Identifikation realistischer Automatisierungs- und KI-Chancen." },
      { title: "Risiko- & Governance-Einordnung", description: "Bewertung von Datenrisiken, Compliance und Kontrollmechanismen." },
      { title: "Klare Go-/No-Go-Entscheidungen", description: "Fundierte Handlungsempfehlungen für nächste Schritte." },
    ],
  },
  {
    number: "03",
    title: "Digitale Kommunikations- & Sichtbarkeitsarchitektur",
    problem: "Digitale Kommunikation entsteht oft isoliert und ohne Verbindung zu Systemen, Vertrieb oder Automatisierung.",
    solution: "Wir definieren eine klare Kommunikationslogik, die als strukturelle Grundlage für Websites, Plattformen und Systeme dient.",
    animation: <BrandIdentityAnimation />,
    deliverables: [
      { title: "Rollen digitaler Kanäle", description: "Definition der Funktion und Zielsetzung jedes Kanals." },
      { title: "Narrative & Markenstimme", description: "Einheitliche Tonalität und Storytelling-Prinzipien." },
      { title: "Systemische Leitplanken", description: "Strukturelle Vorgaben für konsistente Kommunikation." },
      { title: "Anschlussfähigkeit für Lab", description: "Technische Übergabepunkte für Automatisierung und Systeme." },
    ],
  },
];

const pillars = [
  { number: "01", label: "Marke", desc: "Identität als Systemgrundlage" },
  { number: "02", label: "KI-Readiness", desc: "Entscheidungsfähigkeit vor Einsatz" },
  { number: "03", label: "Kommunikation", desc: "Struktur statt Silos" },
];

/* ─── Fade-in variant ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

/* ─── Component ─── */
const Studio = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const scrollToContact = () => {
    navigate("/", { replace: true });
    setTimeout(() => {
      document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  /* Parallax for hero */
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(heroProgress, [0, 0.6], [1, 0]);

  return (
    <>
      <Helmet>
        <title>Brand Strategy & Identity München | Markenentwicklung | New Edge Studio</title>
        <meta name="description" content="New Edge Studio München - Ihre Agentur für Brand Strategy und Markenidentität. Wir entwickeln Marken mit KI-gestützten Methoden für den Mittelstand." />
        <meta name="keywords" content="Brand Strategy München, Markenentwicklung München, Brand Identity, Markenidentität, Design System, Positionierung, KI Agentur München" />
        <link rel="canonical" href="https://www.newedgebrand.com/studio" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <MobileNavigation onContactClick={scrollToContact} theme="light" />

        {/* ═══════════════════════════════════════════════════════
            1. HERO — Immersive full-screen with claim
        ═══════════════════════════════════════════════════════ */}
        <section ref={heroRef} className="relative w-full h-[100dvh] overflow-hidden">
          <div className="absolute inset-0">
            <LazyVideo
              src="/assets/studio-hero-background.mp4"
              autoPlay loop muted playsInline preload="none"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0" style={{
              background: "linear-gradient(to top, rgba(99,102,241,0.5) 0%, rgba(99,102,241,0.15) 40%, transparent 70%)"
            }} />
          </div>

          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="relative z-10 h-full flex flex-col justify-end pb-20 sm:pb-28 px-6 sm:px-12 lg:px-16"
          >
            <div className="max-w-4xl">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight text-white"
              >
                NEW EDGE<br />
                <span className="italic" style={{
                  background: "linear-gradient(to right, #6366f1, #a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  STUDIO
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-xl sm:text-2xl lg:text-3xl text-white/80 mt-4 sm:mt-6 font-light tracking-wide"
              >
                Klarheit vor Umsetzung.
              </motion.p>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] font-medium tracking-[0.3em] text-white/50 uppercase">Scroll</span>
            <ChevronDown className="w-5 h-5 text-white/50 animate-bounce" />
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            2. MANIFESTO STATEMENT
        ═══════════════════════════════════════════════════════ */}
        <section className="py-24 sm:py-32 lg:py-40 bg-white">
          <div className="container mx-auto px-6 sm:px-8 lg:px-16 max-w-6xl">
            <motion.h2
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.05] text-black max-w-5xl"
            >
              Bevor Systeme gebaut werden,{" "}
              <span style={{
                background: "linear-gradient(to right, #6366f1, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                muss Klarheit geschaffen werden.
              </span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px mt-16 sm:mt-20 bg-black/10">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.number}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={fadeUp} custom={i + 1}
                  className="bg-white p-8 sm:p-10"
                >
                  <span className="text-xs font-mono tracking-widest text-black/30">{p.number}</span>
                  <h3 className="text-xl sm:text-2xl font-black text-black mt-2">{p.label}</h3>
                  <p className="text-sm text-black/50 mt-2 leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            3-5. UNIFIED SERVICE MODULES
        ═══════════════════════════════════════════════════════ */}
        {studioServices.map((service, idx) => {
          const isReversed = idx % 2 !== 0;
          return (
            <section key={service.number} className="relative bg-white py-24 sm:py-32 overflow-hidden border-b border-black/5 last:border-b-0">
              <div className="absolute top-8 right-8 lg:right-16 select-none pointer-events-none">
                <span className="text-[120px] sm:text-[180px] lg:text-[240px] font-black leading-none"
                  style={{ WebkitTextStroke: "1px rgba(99,102,241,0.12)", WebkitTextFillColor: "transparent" }}>
                  {service.number}
                </span>
              </div>
              <div className="container mx-auto px-6 sm:px-8 lg:px-16 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                  <div className={isReversed ? "order-2 lg:order-2" : ""}>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
                      <span className="text-xs font-mono tracking-widest text-black/30 uppercase">Service {service.number}</span>
                      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black mt-3 leading-[1.05]">{service.title}</h2>
                    </motion.div>
                    <div className="mt-12 space-y-8">
                      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
                        <h3 className="text-xs font-bold tracking-widest text-red-500/70 uppercase mb-3">Das Problem</h3>
                        <p className="text-black/60 text-sm leading-relaxed">{service.problem}</p>
                      </motion.div>
                      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}>
                        <h3 className="text-xs font-bold tracking-widest text-indigo-600/70 uppercase mb-3">Unsere Lösung</h3>
                        <p className="text-black/60 text-sm leading-relaxed">{service.solution}</p>
                      </motion.div>
                    </div>
                  </div>
                  <div className={`lg:sticky lg:top-24 ${isReversed ? "order-1 lg:order-1" : ""}`}>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}>
                      {service.animation}
                    </motion.div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px mt-20 bg-black/5">
                  {service.deliverables.map((d, i) => (
                    <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                      className="bg-white p-6 sm:p-8 group hover:bg-gray-50 transition-colors duration-300">
                      <span className="text-xs font-mono text-black/20">{String(i + 1).padStart(2, "0")}</span>
                      <h4 className="text-black font-bold mt-2 text-sm">{d.title}</h4>
                      <p className="text-black/40 text-xs mt-2 leading-relaxed">{d.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* ═══════════════════════════════════════════════════════
            6. CASE STUDY — Full-width feature
        ═══════════════════════════════════════════════════════ */}
        <section className="bg-white py-16 sm:py-24">
          <div className="container mx-auto px-6 sm:px-8 lg:px-16 max-w-7xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="flex items-end justify-between mb-8">
                <div>
                  <span className="text-xs font-mono tracking-widest text-black/30 uppercase">Case Study</span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black mt-2">
                    Studio Cases.{" "}
                    <span style={{
                      background: "linear-gradient(to right, #6366f1, #a855f7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}>
                      Marken, die wirken.
                    </span>
                  </h2>
                </div>
                <Link to="/case-studies" className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-black hover:text-indigo-600 transition-colors">
                  ALLE CASES <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
              <Link to="/case-study/albanova" className="block group relative overflow-hidden">
                <div className="relative aspect-[21/9] sm:aspect-[21/9] w-full">
                  <img
                    src={albanovaImage}
                    alt="ALBANOVA — Marke & Digitalstrategie von Null aufgebaut"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 sm:p-10 lg:p-14">
                    <span className="inline-block border border-white/40 px-3 py-1 text-[10px] font-bold text-white uppercase tracking-widest mb-3">
                      Branding
                    </span>
                    <h3 className="text-xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                      ALBANOVA
                    </h3>
                    <p className="text-white/60 text-sm sm:text-base mt-2 max-w-lg">
                      Marke & Digitalstrategie von Null aufgebaut
                    </p>
                    <div className="inline-flex items-center gap-2 text-white/80 text-sm font-semibold mt-4 group-hover:gap-3 transition-all">
                      Case ansehen <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Mobile link */}
            <div className="md:hidden mt-6 text-center">
              <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm font-bold text-black hover:text-indigo-600 transition-colors">
                ALLE CASES <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            7. CTA — Design-system conform
        ═══════════════════════════════════════════════════════ */}
        <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
          {/* Subtle gradient accent */}
          <div className="absolute inset-0 opacity-10" style={{
            background: "radial-gradient(ellipse at 50% 100%, rgba(99,102,241,0.4) 0%, transparent 70%)"
          }} />

          <div className="container mx-auto px-6 sm:px-8 text-center relative z-10 max-w-3xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black leading-[1.05]">
                Bereit für die Zukunft?
              </h2>
              <p className="text-black/50 text-base sm:text-lg mt-6 leading-relaxed max-w-2xl mx-auto">
                New Edge steht für Innovation und nachhaltige Entwicklung. Gemeinsam gestalten wir die Zukunft von Marken und Prozessen.
              </p>
              <Button
                size="lg"
                className="mt-10 bg-transparent backdrop-blur-md text-black border-2 border-black/30 hover:bg-black hover:text-white font-semibold text-base sm:text-lg px-10 sm:px-14 py-4 transition-all duration-300 hover:-translate-y-0.5 rounded-none"
                onClick={() => setIsModalOpen(true)}
              >
                Kontakt aufnehmen
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>

        <Suspense fallback={<div className="h-64" />}>
          <Footer />
        </Suspense>
      </div>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        accentColor="#6366f1"
        gradientFrom="#6366f1"
        gradientTo="#a855f7"
        theme="studio"
      />
    </>
  );
};

export default Studio;
