import { useEffect, useState, lazy, Suspense } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ChevronDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileNavigation } from "@/components/MobileNavigation";
import SEOHead from "@/components/SEOHead";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ContactFormModal } from "@/components/ContactFormModal";
import { LazyVideo } from "@/components/LazyVideo";
import WhisperText from "@/components/ui/whisper-text";
import { BrandStrategyAnimation } from "@/components/ui/brand-strategy-animation";
import { BrandIdentityAnimation } from "@/components/ui/brand-identity-animation";
import { KiAuditAnimation } from "@/components/ui/ki-audit-animation";
import albanovaImage from "@/assets/albanova-website.png";
import { LabInfrastructureGrid } from "@/components/ui/lab-infrastructure-grid";

const Footer = lazy(() => import("@/components/Footer").then((m) => ({ default: m.Footer })));

/* ─── Data ─── */
const studioServices = [
{
  number: "01",
  title: "Klarheit & Markenidentität",
  h3Title: "Brand Identity & Brand System",
  problem: "Unklare Markenlogik und inkonsistente Kommunikation führen zu Reibung und nicht anschlussfähigen Systemen.",
  solution: "Wir entwickeln eine Markenidentität, die als funktionale Grundlage für Websites, Software und KI‑Systeme dient.",
  animation: <BrandStrategyAnimation />,
  deliverables: [
  { title: "Marke als Entscheidungsgrundlage", description: "Der Markenkern wird zu einem steuernden Element für Strategie, Kommunikation, Produktentwicklung und Systeme – nicht zu einer reinen Designbasis." },
  { title: "Differenzierung mit operativer Wirkung", description: "Ihre Positionierung wirkt nicht nur nach außen, sondern strukturiert Interfaces, Inhalte, Prozesse und Automatisierungen." },
  { title: "Konsistenz ohne Reibungsverluste", description: "Eine einheitliche visuelle und sprachliche Logik reduziert Abstimmungsaufwand, beschleunigt Entscheidungen und macht Systeme anschlussfähig." },
  { title: "Intern weiterentwickelbares Brand System", description: "Ihre Marke wird zu einem lebendigen, intern gepflegten System – unabhängig von externen Dienstleistern." }]
},
{
  number: "02",
  title: "KI‑Enablement & Audit",
  h3Title: "KI Enablement & Audit",
  problem: "KI wird oft ohne klare Ziele, saubere Datenbasis oder Verständnis der Risiken eingesetzt.",
  solution: "Wir analysieren Prozesse, Daten und Tools, identifizieren realistische Automatisierungs‑ und KI‑Chancen und bewerten Risiken und Governance.",
  animation: <KiAuditAnimation />,
  deliverables: [
  { title: "Transparenz über die bestehende Realität", description: "Alle relevanten Prozesse, Tools und Datenstrukturen werden als zusammenhängendes System sichtbar." },
  { title: "Sichere Automatisierungsentscheidungen", description: "Klare Go-/No-Go-Bewertungen zeigen, welche KI-Vorhaben echten Hebel haben – und verhindern Fehlinvestitionen." },
  { title: "Priorisierte KI-Roadmap", description: "Die nächsten Schritte sind nach Wirkung, Risiko und Aufwand geordnet und bilden eine belastbare Umsetzungslogik." },
  { title: "Entscheidungsfähigkeit im Management", description: "Technologie- und Investitionsentscheidungen basieren auf Struktur statt auf Hype." }]
},
{
  number: "03",
  title: "Kommunikations‑ & Sichtbarkeitsarchitektur",
  h3Title: "Kommunikations- & Sichtbarkeitsarchitektur",
  problem: "Digitale Kommunikation entsteht oft isoliert und ohne Verbindung zu Systemen, Vertrieb oder Automatisierung.",
  solution: "Wir definieren eine strukturelle Kommunikationslogik, die als Grundlage für Websites, Plattformen und Systeme dient.",
  animation: <BrandIdentityAnimation />,
  deliverables: [
  { title: "Klare Rolle jedes Kanals", description: "Website, Content, CRM, Kampagnen und Plattformen übernehmen definierte Funktionen im Gesamtsystem." },
  { title: "Durchgängige Markenlogik über alle Touchpoints", description: "Ihre Kommunikation folgt einer konsistenten Struktur – unabhängig vom Kanal oder Format." },
  { title: "Anschlussfähigkeit für Automatisierung und KI", description: "Inhalte, Daten und Touchpoints sind so aufgebaut, dass sie direkt in Systeme und Workflows integriert werden können." },
  { title: "Sichtbarkeit unter eigener Kontrolle", description: "Ihre digitale Präsenz funktioniert nach Ihrer Systemlogik – nicht nach den Regeln einzelner Plattformen." }]
}];



/* ─── Fade-in variant ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }
  })
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
      <SEOHead
        title="Brand Strategie & KI-Audit München | BAFA-förderfähig | New Edge"
        description="Brand Identity, KI-Audit und Kommunikationsarchitektur für Unternehmen in München. Förderfähig bis 80% über BAFA."
        canonical="/studio"
      />

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
              className="absolute inset-0 w-full h-full object-cover" />

            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0" style={{
              background: "linear-gradient(to top, rgba(99,102,241,0.5) 0%, rgba(99,102,241,0.15) 40%, transparent 70%)"
            }} />
          </div>

          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="relative z-10 h-full flex flex-col justify-end pb-20 sm:pb-28 px-6 sm:px-12 lg:px-16">

            <div className="max-w-4xl">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.95] tracking-tight text-white">
                Studio – Marke, Strategie{" "}
                <span className="italic" style={{
                  background: "linear-gradient(to right, #6366f1, #a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}>
                  & KI-Beratung
                </span>
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-lg sm:text-xl lg:text-2xl text-white/60 font-medium mt-4 leading-relaxed">
                Drei Bausteine. Ein System. Messbares Ergebnis.
              </motion.h2>



            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">

            <span className="text-[10px] font-medium tracking-[0.3em] text-white/50 uppercase">Scroll</span>
            <ChevronDown className="w-5 h-5 text-white/50 animate-bounce" />
          </motion.div>
        </section>


        {/* ═══════════════════════════════════════════════════════
                                                                                        INTRO / MANIFESTO SECTION
                                                                                     ═══════════════════════════════════════════════════════ */}
        <section className="relative bg-white py-24 sm:py-32 lg:py-40 overflow-hidden border-b border-black/5">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05] tracking-tight mb-12 lg:mb-16">

              Wir schaffen die Grundlage für skalierbare <span className="italic">Systeme.</span>
            </motion.h2>

            {/* Description */}
            <div className="max-w-3xl space-y-4">
              <WhisperText
                text="Im Studio entsteht die Systemlogik für Marke, Kommunikation und den sinnvollen Einsatz von KI."
                className="text-lg sm:text-xl text-black/50 leading-relaxed"
                delay={30} />

              <WhisperText
                text="Wir analysieren Ihre bestehende Realität, schaffen Entscheidungsfähigkeit im Management und entwickeln die priorisierte Roadmap für steuerbare Systeme."
                className="text-lg sm:text-xl text-black/50 leading-relaxed"
                delay={30}
                triggerStart="top 92%" />

              <WhisperText
                text="Keine Maßnahmenliste – sondern die belastbare Grundlage für alles, was danach gebaut wird."
                className="text-lg sm:text-xl text-black/50 leading-relaxed"
                delay={30}
                triggerStart="top 94%" />

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
                                                                                        3-5. UNIFIED SERVICE MODULES
                                                                                     ═══════════════════════════════════════════════════════ */}
        {studioServices.map((service, idx) => {
          const isReversed = idx % 2 !== 0;
          return (
            <section key={service.number} className="relative bg-white min-h-screen flex items-center overflow-hidden border-b border-black/5 last:border-b-0 py-12 sm:py-16">
              <div className="absolute top-8 right-8 lg:right-16 select-none pointer-events-none">
                <span className="text-[120px] sm:text-[180px] lg:text-[240px] font-black leading-none"
                style={{ WebkitTextStroke: "1px rgba(99,102,241,0.12)", WebkitTextFillColor: "transparent" }}>
                  {service.number}
                </span>
              </div>
              <div className="container mx-auto px-6 sm:px-8 lg:px-16 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                  <div className={isReversed ? "order-2 lg:order-2" : ""}>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
                      <span className="text-xs font-mono tracking-widest text-black/30 uppercase">Service {service.number}</span>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black mt-2 leading-[1.05]">{service.h3Title}</h3>
                    </motion.div>
                    <div className="mt-6 space-y-5">
                      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
                        <h3 className="text-xs font-bold tracking-widest text-red-500/70 uppercase mb-2">Das Problem</h3>
                        <p className="text-black/60 text-sm leading-relaxed">{service.problem}</p>
                      </motion.div>
                      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}>
                        <h3 className="text-xs font-bold tracking-widest text-indigo-600/70 uppercase mb-2">Unsere Lösung</h3>
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
                {/* Deliverables — full width, reduced spacing, smaller */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px mt-10 bg-black/5">
                  {service.deliverables.map((d, i) =>
                  <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                  className="bg-white p-4 sm:p-5 group hover:bg-gray-50 transition-colors duration-300">
                      <span className="text-[10px] font-mono font-bold text-indigo-600">{String(i + 1).padStart(2, "0")}</span>
                      <h4 className="text-black font-bold mt-1 text-xs sm:text-sm leading-snug">{d.title}</h4>
                      <p className="text-black/40 text-[10px] sm:text-xs mt-1 leading-relaxed">{d.description}</p>
                    </motion.div>
                  )}
                </div>
              </div>
            </section>);

        })}

        {/* ═══════════════════════════════════════════════════════
                                                                                        STUDIO-EFFEKT — Infrastructure Grid
                                                                                     ═══════════════════════════════════════════════════════ */}
        <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-8">

              <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-indigo-500">Das Ergebnis</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-[0.95] text-black mt-3">
                Der Studio‑{" "}
                <span style={{
                  background: "linear-gradient(to right, #6366f1, #a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}>Effekt.</span>
              </h2>
            </motion.div>
            {/* Bento Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-[auto_auto_auto] gap-3 sm:gap-4">
              {/* Card 1 - Large left (spans 2 rows) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="col-span-2 row-span-2 bg-indigo-50 p-6 sm:p-8 lg:p-10 flex flex-col justify-between group hover:bg-indigo-100/80 transition-colors duration-500 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 text-[80px] sm:text-[120px] font-black leading-none select-none pointer-events-none" style={{ WebkitTextStroke: '2px rgba(99,102,241,0.2)', WebkitTextFillColor: 'transparent' }}>01</div>
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-indigo-700 bg-indigo-200/60 mb-4">Strategie</span>
                  <h4 className="text-xl sm:text-2xl lg:text-3xl font-black text-black leading-tight">Klarheit als operative Grundlage</h4>
                </div>
                <p className="text-black/50 text-sm sm:text-base mt-4 leading-relaxed relative z-10">Marke, Kommunikation und Systeme folgen einer gemeinsamen Logik – statt isolierter Einzelmaßnahmen.</p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="col-span-1 bg-violet-50 p-5 sm:p-6 group hover:bg-violet-100/80 transition-colors duration-500 relative overflow-hidden"
              >
                <div className="absolute -bottom-2 -right-2 text-[60px] font-black leading-none select-none pointer-events-none" style={{ WebkitTextStroke: '1.5px rgba(99,102,241,0.15)', WebkitTextFillColor: 'transparent' }}>02</div>
                <span className="inline-block w-8 h-8 rounded-full bg-indigo-200/60 flex items-center justify-center mb-3">
                  <span className="text-[10px] font-mono font-bold text-indigo-700">02</span>
                </span>
                <h4 className="text-sm sm:text-base font-black text-black leading-snug">Entscheidungsfähigkeit statt Abhängigkeit</h4>
                <p className="text-black/45 text-xs sm:text-sm mt-2 leading-relaxed">Ihr Unternehmen versteht seine eigene Systemlogik und kann strategische Entscheidungen eigenständig treffen.</p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="col-span-1 bg-purple-50 p-5 sm:p-6 group hover:bg-purple-100/80 transition-colors duration-500 relative overflow-hidden"
              >
                <div className="absolute -bottom-2 -right-2 text-[60px] font-black leading-none select-none pointer-events-none" style={{ WebkitTextStroke: '1.5px rgba(99,102,241,0.15)', WebkitTextFillColor: 'transparent' }}>03</div>
                <span className="inline-block w-8 h-8 rounded-full bg-purple-200/60 flex items-center justify-center mb-3">
                  <span className="text-[10px] font-mono font-bold text-purple-700">03</span>
                </span>
                <h4 className="text-sm sm:text-base font-black text-black leading-snug">Konsistenz über alle Touchpoints</h4>
                <p className="text-black/45 text-xs sm:text-sm mt-2 leading-relaxed">Website, Kampagnen, CRM und Plattformen sprechen eine einheitliche Sprache – visuell und strukturell.</p>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="col-span-1 bg-indigo-50/80 p-5 sm:p-6 group hover:bg-indigo-100/60 transition-colors duration-500 relative overflow-hidden"
              >
                <div className="absolute -bottom-2 -right-2 text-[60px] font-black leading-none select-none pointer-events-none" style={{ WebkitTextStroke: '1.5px rgba(99,102,241,0.15)', WebkitTextFillColor: 'transparent' }}>04</div>
                <span className="inline-block w-8 h-8 rounded-full bg-indigo-200/60 flex items-center justify-center mb-3">
                  <span className="text-[10px] font-mono font-bold text-indigo-700">04</span>
                </span>
                <h4 className="text-sm sm:text-base font-black text-black leading-snug">Anschlussfähigkeit für Technologie</h4>
                <p className="text-black/45 text-xs sm:text-sm mt-2 leading-relaxed">Markenlogik und Kommunikationsarchitektur sind so aufgebaut, dass KI und Automatisierung direkt andocken können.</p>
              </motion.div>

              {/* Card 5 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="col-span-1 bg-violet-50/80 p-5 sm:p-6 group hover:bg-violet-100/60 transition-colors duration-500 relative overflow-hidden"
              >
                <div className="absolute -bottom-2 -right-2 text-[60px] font-black leading-none select-none pointer-events-none" style={{ WebkitTextStroke: '1.5px rgba(99,102,241,0.15)', WebkitTextFillColor: 'transparent' }}>05</div>
                <span className="inline-block w-8 h-8 rounded-full bg-violet-200/60 flex items-center justify-center mb-3">
                  <span className="text-[10px] font-mono font-bold text-violet-700">05</span>
                </span>
                <h4 className="text-sm sm:text-base font-black text-black leading-snug">Sichtbarkeit unter eigener Kontrolle</h4>
                <p className="text-black/45 text-xs sm:text-sm mt-2 leading-relaxed">Ihre digitale Präsenz funktioniert nach Ihrer Systemlogik – unabhängig von externen Dienstleistern.</p>
              </motion.div>
            </div>
          </div>
        </section>

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
                    







                  </h2>
                </div>
                <Link to="/case-studies" className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-black hover:text-indigo-600 transition-colors">
                  ALLE CASES <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
              <div className="w-[65%] sm:w-[50%] md:w-[280px]">
                <Link to="/case-study/albanova" className="block group relative overflow-hidden">
                  <div className="relative aspect-square w-full bg-gray-100">
                    <img
                      src={albanovaImage}
                      alt="ALBANOVA — Marke & Digitalstrategie von Null aufgebaut"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 bg-indigo-500 opacity-0 group-hover:opacity-95 transition-all duration-300 flex flex-col justify-between p-4 md:p-6">
                      <div className="w-10 md:w-16 h-0.5 md:h-1 bg-white" />
                      <div className="space-y-1 md:space-y-3">
                        <span className="text-[8px] md:text-xs font-bold text-white/80 uppercase tracking-wider">Branding</span>
                        <h3 className="text-lg md:text-2xl font-black text-white leading-tight">ALBANOVA</h3>
                        <p className="text-white/70 text-[10px] md:text-sm mt-1">Marke & Digitalstrategie von Null aufgebaut</p>
                        <div className="inline-flex items-center gap-2 text-white text-[10px] md:text-sm font-semibold mt-1 md:mt-2">
                          Case ansehen <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black leading-[1.05]">Bereit für die digitale Revolution?

              </h2>
              <p className="text-black/50 text-base sm:text-lg mt-6 leading-relaxed max-w-2xl mx-auto">
                
Im Studio schaffen wir Klarheit,  für die nächsten technologischen Entscheidungen und entwickeln die Systemlogik für Marke, Kommunikation & KI.     
              </p>
              <Button size="lg"
              className="mt-10 bg-transparent backdrop-blur-md text-black border-2 border-black/30 hover:bg-black hover:text-white font-semibold text-base sm:text-lg px-10 sm:px-14 py-4 transition-all duration-300 hover:-translate-y-0.5 rounded-none"
              onClick={() => setIsModalOpen(true)}>

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
        theme="studio" />

    </>);

};

export default Studio;
