import { useEffect, useState, lazy, Suspense, useRef } from "react";
import WhisperText from "@/components/ui/whisper-text";
import { useNavigate, Link } from "react-router-dom";
import { Bot, Lightbulb, Phone, FileText, Plus, ArrowUpRight, ChevronDown } from "lucide-react";
import leadGenerationImage from "@/assets/lead-generation.webp";
import ragDatacenterImage from "@/assets/rag-datacenter.webp";
import marketingAutomationImage from "@/assets/marketing-automation.webp";
import { Button } from "@/components/ui/button";
import { MobileNavigation } from "@/components/MobileNavigation";
import SEOHead from "@/components/SEOHead";
import { motion, useScroll, useTransform } from "framer-motion";
import { LabInfrastructureGrid } from "@/components/ui/lab-infrastructure-grid";
import { ContactFormModal } from "@/components/ContactFormModal";
import { LazyVideo } from "@/components/LazyVideo";
import { ProcessAutomationAnimation } from "@/components/ui/process-automation-animation";
import { WebSystemsAnimation } from "@/components/ui/web-systems-animation";
import { TrackingAnalyticsAnimation } from "@/components/ui/tracking-analytics-animation";
const Footer = lazy(() =>
import("@/components/Footer").then((m) => ({
  default: m.Footer
}))
);
const Lab = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openAgent, setOpenAgent] = useState<string | null>(null);
  const [selectedAgent, setSelectedAgent] = useState<string>("Riley");
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setIsVisible(true);
  }, []);

  /* Parallax for hero */
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(heroProgress, [0, 0.6], [1, 0]);

  const scrollToContact = () => {
    navigate("/", {
      replace: true
    });
    setTimeout(() => {
      const contactSection = document.getElementById("contact-section");
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth"
        });
      }
    }, 100);
  };
  const scrollToProjectButton = () => {
    const projectButton = document.getElementById("projekt-besprechen-btn");
    if (projectButton) {
      projectButton.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  };
  const labServices = [
  {
    number: "01",
    title: "AI Systems & Automation Architecture",
    problem:
    "Viele operative Aufgaben sind repetitiv, manuell und über mehrere Tools verteilt. Das führt zu hohem Zeitaufwand, Fehleranfälligkeit, Medienbrüchen und fehlender Skalierbarkeit.",
    solution:
    "Wir automatisieren operative Aufgaben und Prozesse end-to-end – pragmatisch, stabil und skalierbar. Dabei setzen wir dort KI ein, wo sie einen echten Mehrwert bringt, und kombinieren sie mit klassischen Automationen.",
    animation: <ProcessAutomationAnimation />,
    deliverables: [
    {
      title: "Operative Entlastung durch End-to-End-Workflows",
      description: "Manuelle Abläufe werden in stabile Prozesse übersetzt, die systemübergreifend laufen."
    },
    {
      title: "Skalierbare Prozesslogik statt Tool-Flickwerk",
      description: "Workflows folgen einer klaren Architektur, unabhängig von einzelnen Tools."
    },
    {
      title: "KI dort, wo sie echten Hebel hat",
      description:
      "KI wird gezielt für Klassifikation, Priorisierung und Entscheidungsunterstützung eingesetzt – nicht als Gimmick."
    },
    {
      title: "Transparenz & Kontrolle über Ergebnisse",
      description: "Automatisierungen bleiben nachvollziehbar, steuerbar und auditierbar."
    }]

  },
  {
    number: "02",
    title: "Internal Systems, Data & AI Ownership",
    problem:
    "SaaS-Stacks und externe KI-APIs erzeugen Abhängigkeiten, steigende Kosten und fragmentierte Datenlandschaften. Unternehmen verlieren Kontrolle über sensible Daten und Prozesse.",
    solution:
    "Wir bauen interne Systeme, die Software, Daten und KI unter eine gemeinsame, kontrollierbare Architektur bringen – inklusive eigener LLM- und GPU-Infrastruktur.",
    animation: <TrackingAnalyticsAnimation />,
    deliverables: [
    {
      title: "Eigene Systeme statt SaaS-Abhängigkeit",
      description: "Kritische Funktionen werden intern kontrollierbar aufgebaut."
    },
    { title: "Datenhoheit als Grundlage", description: "Datenflüsse, Logik und Zugriff bleiben im Unternehmen." },
    {
      title: "Interne KI für sensible Bereiche",
      description: "Modelle können isoliert und kontrolliert betrieben werden."
    },
    {
      title: "Planbare Kosten & Unabhängigkeit",
      description: "Weniger Vendor-Lock-in, weniger laufende Toolkosten."
    },
    {
      title: "Weiterentwickelbar aus eigener Kraft",
      description: "Systeme sind so gebaut, dass sie intern ausgebaut werden können."
    }]

  },
  {
    number: "03",
    title: "Web & Platform Architecture",
    problem: "Websites sind oft isolierte Marketingflächen ohne Verbindung zu Systemen oder Automatisierung.",
    solution:
    "Wir bauen Websites als funktionale Knotenpunkte innerhalb der Systemarchitektur – skalierbar, integriert und wartbar.",
    animation: <WebSystemsAnimation />,
    deliverables: [
    {
      title: "Plattform statt Website",
      description: "Digitale Präsenz wird als System gebaut – nicht als Einzelprojekt."
    },
    {
      title: "Conversion durch Struktur, nicht durch Hacks",
      description:
      "Informationsarchitektur und Journey-Logik reduzieren Reibung und erhöhen Abschlusswahrscheinlichkeit."
    },
    { title: "Messbarkeit als Standard", description: "Tracking- und Datenlogik sind integriert und wartbar." },
    {
      title: "Direkte Anschlussfähigkeit an Systeme",
      description: "Web wird Einstiegspunkt in CRM, Automationen und Agenten."
    }]

  }];


  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }
    })
  };
  return (
    <>
      <SEOHead
        title="Lab – Webentwicklung, KI-Systeme & LLM Deployment München | New Edge Brand"
        description="Website-Entwicklung, KI-Automatisierung und LLM-Deployment für Unternehmen in München. Von €2.240 bis Enterprise. Förderbar über BAFA."
        canonical="/lab"
      />

      <div className="min-h-screen bg-white">
        <MobileNavigation onContactClick={scrollToContact} theme="light" />

        {/* Hero Section */}
        <section ref={heroRef} className="relative w-full h-[100dvh] overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                background:
                "linear-gradient(to bottom right, rgba(253, 224, 71, 0.3), rgba(251, 191, 36, 0.2), rgba(251, 191, 36, 0.1))"
              }}>

              <LazyVideo
                src="/assets/lab-hero-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                className="absolute inset-0 w-full h-full object-cover" />

              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(251, 146, 60, 0.4), rgba(251, 191, 36, 0.2), transparent)"
                }} />
            </div>
          </div>

          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="relative z-10 h-full flex flex-col justify-end pb-8 sm:pb-12 px-6 sm:px-12 lg:px-16">
            <div className="max-w-4xl">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.95] tracking-tight text-white">
                Lab – Website, Automation{" "}
                <span
                  className="italic font-black"
                  style={{
                    background: "linear-gradient(to right, #fde047, #fbbf24)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}>
                  & Ownership
                </span>
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-lg sm:text-xl lg:text-2xl text-white/60 font-medium mt-4 leading-relaxed">
                Wir bauen. Wir deployen. Wir übergeben – mit Dokumentation und laufende Betreuung.
              </motion.h2>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            style={{ opacity: heroOpacity }}
            className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
            <span className="text-xs font-medium tracking-widest text-white/50 uppercase">Scroll</span>
            <ChevronDown className="w-5 h-5 text-white/50 animate-bounce" />
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════════════════════
             INTRO / MANIFESTO SECTION
             ═══════════════════════════════════════════════════════ */}
        <section className="relative bg-white py-24 sm:py-32 lg:py-40 overflow-hidden border-b border-black/5">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
            {/* Label */}
            









            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05] tracking-tight mb-12 lg:mb-16">

              Systeme statt <span className="italic">Chaos</span>
            </motion.h2>

            {/* Description */}
            <div className="max-w-3xl space-y-4">
              <WhisperText
                text="Im Lab entwickeln wir die operative Infrastruktur für Ihr Unternehmen – von automatisierten End-to-End-Prozessen über Plattform-Architektur bis zu firmeneigener KI."
                className="text-lg sm:text-xl text-black/50 leading-relaxed"
                y={12}
                delay={30} />

              <WhisperText
                text="Alles folgt einer klaren Systemlogik, bleibt steuerbar und gehört Ihrem Unternehmen."
                className="text-lg sm:text-xl text-black/50 leading-relaxed"
                y={12}
                delay={30}
                triggerStart="top 92%" />

              <WhisperText
                text="So entsteht Technologie, die Wachstum ermöglicht, ohne Komplexität zu erhöhen."
                className="text-lg sm:text-xl text-black/50 leading-relaxed"
                y={12}
                delay={30}
                triggerStart="top 94%" />

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
             SERVICE MODULES
             ═══════════════════════════════════════════════════════ */}
        {labServices.map((service, idx) => {
          const isReversed = idx % 2 !== 0;
          return (
            <section
              key={service.number}
              className="relative bg-white py-24 sm:py-32 overflow-hidden border-b border-black/5 last:border-b-0">

              <div className="absolute top-8 right-8 lg:right-16 select-none pointer-events-none">
                <span
                  className="text-[120px] sm:text-[180px] lg:text-[240px] font-black leading-none"
                  style={{ WebkitTextStroke: "1.5px rgba(251,191,36,0.25)", WebkitTextFillColor: "transparent" }}>

                  {service.number}
                </span>
              </div>
              <div className="container mx-auto px-6 sm:px-8 lg:px-16 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                  <div className={isReversed ? "order-2 lg:order-2" : ""}>
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-80px" }}
                      variants={fadeUp}>

                      <span className="text-xs font-mono tracking-widest text-black/30 uppercase">
                        Service {service.number}
                      </span>
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black mt-3 leading-[1.05]">
                        {service.title}
                      </h3>
                    </motion.div>
                    <div className="mt-12 space-y-8">
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        custom={1}>

                        <h3 className="text-xs font-bold tracking-widest text-red-500/70 uppercase mb-3">
                          Das Problem
                        </h3>
                        <p className="text-black/60 text-sm leading-relaxed">{service.problem}</p>
                      </motion.div>
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        custom={2}>

                        <h3 className="text-xs font-bold tracking-widest text-amber-500/70 uppercase mb-3">
                          Unsere Lösung
                        </h3>
                        <p className="text-black/60 text-sm leading-relaxed">{service.solution}</p>
                      </motion.div>
                    </div>
                  </div>
                  <div className={`lg:sticky lg:top-24 ${isReversed ? "order-1 lg:order-1" : ""}`}>
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      custom={2}>

                      {service.animation}
                    </motion.div>
                  </div>
                </div>
                <div
                  className={`grid grid-cols-1 sm:grid-cols-2 ${service.deliverables.length === 5 ? "lg:grid-cols-5" : "lg:grid-cols-4"} gap-px mt-20 bg-black/5`}>

                  {service.deliverables.map((d, i) =>
                  <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={i}
                    className="bg-white p-6 sm:p-8 group hover:bg-gray-50 transition-colors duration-300">

                      <span className="text-xs font-mono text-amber-600">{String(i + 1).padStart(2, "0")}</span>
                      <h4 className="text-black font-bold mt-2 text-sm">{d.title}</h4>
                      <p className="text-black/40 text-xs mt-2 leading-relaxed">{d.description}</p>
                    </motion.div>
                  )}
                </div>
              </div>
            </section>);

        })}
        {/* ═══════════════════════════════════════════════════════
             INTEGRATION & ÜBERGEORDNETER LAB-EFFEKT
             ═══════════════════════════════════════════════════════ */}
        <section className="relative py-24 sm:py-32 lg:py-40 bg-white overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12">

              <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-amber-500">
                Das Ergebnis
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] text-black mt-3">
                Der Lab‑{" "}
                <span
                  style={{
                    background: "linear-gradient(to right, #fde047, #fbbf24)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}>

                  Effekt.
                </span>
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
                className="col-span-2 row-span-2 bg-amber-50 p-6 sm:p-8 lg:p-10 flex flex-col justify-between group hover:bg-amber-100/80 transition-colors duration-500 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 text-[80px] sm:text-[120px] font-black leading-none select-none pointer-events-none" style={{ WebkitTextStroke: '2px rgba(251,191,36,0.2)', WebkitTextFillColor: 'transparent' }}>01</div>
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-amber-700 bg-amber-200/60 mb-4">Infrastruktur</span>
                  <h4 className="text-xl sm:text-2xl lg:text-3xl font-black text-black leading-tight">Produktive Systeme statt Einzelautomationen</h4>
                </div>
                <p className="text-black/50 text-sm sm:text-base mt-4 leading-relaxed relative z-10">Anstatt Insellösungen, eine zusammenhängende operative Infrastruktur.</p>
              </motion.div>

              {/* Card 2 - Top right */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="col-span-1 bg-yellow-50 p-5 sm:p-6 group hover:bg-yellow-100/80 transition-colors duration-500 relative overflow-hidden"
              >
                <div className="absolute -bottom-2 -right-2 text-[60px] font-black leading-none select-none pointer-events-none" style={{ WebkitTextStroke: '1.5px rgba(251,191,36,0.15)', WebkitTextFillColor: 'transparent' }}>02</div>
                <span className="inline-block w-8 h-8 rounded-full bg-amber-200/60 flex items-center justify-center mb-3">
                  <span className="text-[10px] font-mono font-bold text-amber-700">02</span>
                </span>
                <h4 className="text-sm sm:text-base font-black text-black leading-snug">Ownership statt Abhängigkeit</h4>
                <p className="text-black/45 text-xs sm:text-sm mt-2 leading-relaxed">Ihr Unternehmen bleibt Eigentümer von Logik, Daten und Technologie.</p>
              </motion.div>

              {/* Card 3 - Top right next */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="col-span-1 bg-orange-50 p-5 sm:p-6 group hover:bg-orange-100/80 transition-colors duration-500 relative overflow-hidden"
              >
                <div className="absolute -bottom-2 -right-2 text-[60px] font-black leading-none select-none pointer-events-none" style={{ WebkitTextStroke: '1.5px rgba(251,191,36,0.15)', WebkitTextFillColor: 'transparent' }}>03</div>
                <span className="inline-block w-8 h-8 rounded-full bg-orange-200/60 flex items-center justify-center mb-3">
                  <span className="text-[10px] font-mono font-bold text-orange-700">03</span>
                </span>
                <h4 className="text-sm sm:text-base font-black text-black leading-snug">Technologie als steuerbares System</h4>
                <p className="text-black/45 text-xs sm:text-sm mt-2 leading-relaxed">Ihre digitale Infrastruktur wird zu einem aktiven Bestandteil Ihrer Wertschöpfung.</p>
              </motion.div>

              {/* Card 4 - Bottom right wide */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="col-span-1 bg-amber-50/80 p-5 sm:p-6 group hover:bg-amber-100/60 transition-colors duration-500 relative overflow-hidden"
              >
                <div className="absolute -bottom-2 -right-2 text-[60px] font-black leading-none select-none pointer-events-none" style={{ WebkitTextStroke: '1.5px rgba(251,191,36,0.15)', WebkitTextFillColor: 'transparent' }}>04</div>
                <span className="inline-block w-8 h-8 rounded-full bg-amber-200/60 flex items-center justify-center mb-3">
                  <span className="text-[10px] font-mono font-bold text-amber-700">04</span>
                </span>
                <h4 className="text-sm sm:text-base font-black text-black leading-snug">Skalierung ohne steigende Komplexität</h4>
                <p className="text-black/45 text-xs sm:text-sm mt-2 leading-relaxed">Wachstum führt nicht zu mehr Chaos, sondern zu stabileren Abläufen.</p>
              </motion.div>

              {/* Card 5 - Bottom right */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="col-span-1 bg-yellow-50/80 p-5 sm:p-6 group hover:bg-yellow-100/60 transition-colors duration-500 relative overflow-hidden"
              >
                <div className="absolute -bottom-2 -right-2 text-[60px] font-black leading-none select-none pointer-events-none" style={{ WebkitTextStroke: '1.5px rgba(251,191,36,0.15)', WebkitTextFillColor: 'transparent' }}>05</div>
                <span className="inline-block w-8 h-8 rounded-full bg-yellow-200/60 flex items-center justify-center mb-3">
                  <span className="text-[10px] font-mono font-bold text-yellow-700">05</span>
                </span>
                <h4 className="text-sm sm:text-base font-black text-black leading-snug">Integration bestehender Systeme</h4>
                <p className="text-black/45 text-xs sm:text-sm mt-2 leading-relaxed">Bestehende Systeme werden verbunden statt ersetzt. Prozesse sind zentral steuerbar.</p>
              </motion.div>
            </div>

          </div>
        </section>

        {/* Meet Our Agents Section */}
        <section className="section-py-md bg-primary-foreground relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <motion.div
              initial={{
                opacity: 0,
                y: 30
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.6
              }}
              className="text-left mb-12">

              <h2 className="text-h1 font-bold mb-2 text-black">Meet Our Agents</h2>
              <p className="text-base sm:text-lg lg:text-xl max-w-3xl text-gray-700 leading-relaxed">
                In unseren Projekten arbeiten KI-Agenten Seite an Seite mit Menschen – sie automatisieren Workflows,
                koordinieren Systeme und beschleunigen ganze Prozesse. Jetzt können Sie sie kennenlernen – und erleben,
                wie intelligente Automatisierung in der Praxis funktioniert.
              </p>
            </motion.div>

            {/* Two-Column Layout: Accordion Left, Video Right */}
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-start">
              {/* Left: Accordion List */}
              <div className="space-y-1">
                {[
                {
                  name: "Riley",
                  subtitle: "Wissensagent",
                  icon: Lightbulb,
                  gradient: "from-purple-500 to-blue-500",
                  description:
                  "Riley nutzt Retrieval-Augmented Generation (RAG), um präzise, kontextbezogene Antworten aus Ihrer firmeneigenen Wissensbasis zu liefern. Er durchsucht Dokumente, Handbücher und FAQs, extrahiert relevante Informationen und formuliert daraus verständliche Antworten.",
                  video: "/assets/products-hero-video.mp4"
                },
                {
                  name: "Liam",
                  subtitle: "Lead-Gen-Agent",
                  icon: Bot,
                  gradient: "from-purple-500 to-pink-500",
                  description:
                  "Liam automatisiert Ihre Lead-Generierung. Er kombiniert Chatbots, Segmentierung, Predictive Lead Scoring und automatisierte E-Mail-Kampagnen. Dadurch identifiziert und pflegt er wertvolle Kontakte, während Ihr Vertrieb sich auf Abschlüsse konzentriert.",
                  video: "/assets/liam-video.mp4"
                },
                {
                  name: "Vera",
                  subtitle: "Voice-Agent",
                  icon: Phone,
                  gradient: "from-green-500 to-emerald-500",
                  description:
                  "Vera ist Ihre smarte Telefon-Assistentin. Sie nimmt Anrufe rund um die Uhr entgegen, automatisiert Routinegespräche, beantwortet Fragen und leitet komplexe Anliegen an Ihr Team weiter. Voice-AI-Lösungen können hohe Anrufvolumina bewältigen.",
                  video: "/assets/vera-agent-video.mp4"
                },
                {
                  name: "Cora",
                  subtitle: "Content-Agent",
                  icon: FileText,
                  gradient: "from-amber-500 to-orange-500",
                  description:
                  "Cora erstellt und optimiert Inhalte für Blogs, Social Media und E-Mail-Newsletter. AI-Content-Agenten sparen Zeit, verbessern die Qualität und sorgen für konsistente Texte. Cora analysiert Keyword-Trends und generiert SEO-optimierte Texte.",
                  video: "/assets/cora-agent-video.mp4"
                }].
                map((agent, index) => {
                  const isOpen = selectedAgent === agent.name;
                  return (
                    <motion.div
                      key={agent.name}
                      initial={{
                        opacity: 0,
                        y: 10
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0
                      }}
                      viewport={{
                        once: true
                      }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.05
                      }}
                      className="border-b border-gray-200 last:border-b-0">

                      {/* Accordion Header */}
                      <button
                        onClick={() => setSelectedAgent(isOpen ? "" : agent.name)}
                        className="w-full py-5 px-0 flex items-center justify-between text-left hover:opacity-70 transition-opacity">

                        <h3 className="text-xl sm:text-2xl font-bold text-black">{agent.name}</h3>
                        <motion.svg
                          animate={{
                            rotate: isOpen ? 180 : 0
                          }}
                          transition={{
                            duration: 0.3
                          }}
                          className="w-5 h-5 text-gray-500 flex-shrink-0 ml-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">

                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      </button>

                      {/* Accordion Content */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? "auto" : 0,
                          opacity: isOpen ? 1 : 0
                        }}
                        transition={{
                          duration: 0.3,
                          ease: "easeInOut"
                        }}
                        className="overflow-hidden">

                        <div className="pb-6 pr-8">
                          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{agent.description}</p>
                        </div>
                      </motion.div>
                    </motion.div>);

                })}
              </div>

              {/* Right: Sticky Video */}
              <div className="lg:sticky lg:top-24">
                {(() => {
                  const agents = [
                  {
                    name: "Riley",
                    video: "/assets/products-hero-video.mp4"
                  },
                  {
                    name: "Liam",
                    video: "/assets/liam-video.mp4"
                  },
                  {
                    name: "Vera",
                    video: "/assets/vera-agent-video.mp4"
                  },
                  {
                    name: "Cora",
                    video: "/assets/cora-agent-video.mp4"
                  }];

                  const currentAgent = agents.find((a) => a.name === selectedAgent) || agents[0];
                  return (
                    <motion.div
                      key={currentAgent.name}
                      initial={{
                        opacity: 0,
                        scale: 0.95
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1
                      }}
                      transition={{
                        duration: 0.4
                      }}
                      className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-100">

                      <LazyVideo
                        key={currentAgent.video}
                        src={currentAgent.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="none"
                        className="absolute inset-0 w-full h-full object-cover" />

                    </motion.div>);

                })()}
              </div>
            </div>
          </div>
        </section>

        {/* Lab Cases Section */}
        <section className="relative py-16 sm:py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-6 sm:px-8 lg:px-16 max-w-7xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="flex items-end justify-between mb-8">
                <div>
                  <span className="text-xs font-mono tracking-widest text-black/30 uppercase">Case Study</span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black mt-2">
                    Lab Cases.{" "}
                    







                  </h2>
                </div>
                <Link to="/case-studies" className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-black hover:text-[#fbbf24] transition-colors">
                  ALLE CASES <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Cases Grid */}
            <div className="flex gap-0 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-4">
              {[
              {
                id: "retail-lab",
                client: "TRY KMU",
                headline: "RAG-Wissensagent für Maschinenbau",
                category: "AI AUTOMATION",
                route: "/case-study/retail-lab",
                image: ragDatacenterImage
              },
              {
                id: "ecommerce",
                client: "RETAIL CLIENT",
                headline: "Marketing-Automatisierung mit KI",
                category: "WACHSTUM",
                route: "/case-study/ecommerce",
                image: marketingAutomationImage
              },
              {
                id: "social-media",
                client: "B2B SALES",
                headline: "Intelligente Lead-Qualifizierung",
                category: "SALES",
                route: "/case-study/social-media",
                image: leadGenerationImage
              }].
              map((caseStudy, index) =>
              <motion.div
                key={caseStudy.id}
                initial={{
                  opacity: 0,
                  y: 30
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1
                }}
                className="flex-shrink-0 w-[65%] snap-start md:w-auto">

                  <Link to={caseStudy.route} className="block group">
                    <div className="relative overflow-hidden aspect-square bg-gray-100">
                      <img
                      src={caseStudy.image}
                      alt={caseStudy.headline}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                      <div className="absolute inset-0 bg-black/20" />

                      <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                        <Plus className="w-8 h-8 md:w-12 md:h-12 text-white" strokeWidth={2} />
                      </div>

                      {/* Hover Overlay mit Lab-Gradient (Gelb/Orange) */}
                      <div className="absolute inset-0 bg-[#fbbf24] opacity-0 group-hover:opacity-95 transition-all duration-300 flex flex-col justify-between p-3 md:p-6">
                        <div className="w-10 md:w-16 h-0.5 md:h-1 bg-white" />
                        <div className="space-y-1 md:space-y-3">
                          <span className="text-[8px] md:text-xs font-bold text-white/80 uppercase tracking-wider">
                            {caseStudy.client}
                          </span>
                          <h3 className="text-sm md:text-2xl font-bold text-white leading-tight">
                            {caseStudy.headline}
                          </h3>
                          <div className="flex items-center gap-1 md:gap-2 text-white font-medium">
                            <span className="underline text-[10px] md:text-base">Case ansehen</span>
                            <ArrowUpRight className="w-3 h-3 md:w-5 md:h-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )}
            </div>

            {/* Mobile link */}
            <div className="md:hidden mt-6 text-center">
              <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm font-bold text-black hover:text-[#fbbf24] transition-colors">
                ALLE CASES <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 relative overflow-hidden bg-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
            <h2 className="text-[36px] sm:text-[48px] md:text-[52px] lg:text-[56px] font-bold mb-4 sm:mb-6 text-gray-900">
              Bereit für die digitale Revolution?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4 text-gray-600">
              Gemeinsam entwickeln wir die operative Infrastruktur & automatisierte Systeme, die deine Daten unter Kontrolle bringen und deine KI produktiver machen.
            </p>
            <Button
              id="projekt-besprechen-btn"
              size="lg"
              className="bg-transparent backdrop-blur-md text-black border-2 border-black hover:bg-black hover:text-white font-semibold text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 transition-all duration-300 hover:-translate-y-0.5 rounded-none"
              onClick={() => setIsModalOpen(true)}>

              Kontakt aufnehmen
            </Button>
          </div>
        </section>

        <Suspense fallback={<div className="h-64" />}>
          <Footer />
        </Suspense>
      </div>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        accentColor="#fde047"
        gradientFrom="#fde047"
        gradientTo="#fbbf24"
        theme="lab" />

    </>);

};
export default Lab;