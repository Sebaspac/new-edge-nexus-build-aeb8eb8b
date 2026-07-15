import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MobileNavigation } from "@/components/MobileNavigation";
import SEOHead from "@/components/SEOHead";
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Code,
  Palette,
  Globe,
  Briefcase,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Zap,
  Heart,
  Target,
  Network,
  Building2,
  Lightbulb,
  Rocket,
  ShieldCheck,
  TrendingUp,
  Handshake,
  FlaskConical,
  Fingerprint,
  Eye,
  Cog,
  Brain,
  Shield,
  Compass,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import newEdgeHubLogo from "@/assets/new-edge-hub-logo.png";

const About = () => {
  const navigate = useNavigate();
  const [isContactSheetOpen, setIsContactSheetOpen] = useState(false);
  const [isPartnerRequest, setIsPartnerRequest] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const scrollToContact = (asPartner: boolean = false) => {
    setIsPartnerRequest(asPartner);
    setIsContactSheetOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const { validateContactForm, submitContactForm } = await import("@/utils/contactFormValidation");

    const rawData = {
      name: formData.get('name')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      message: formData.get('message')?.toString() || formData.get('nachricht')?.toString() || '',
    };
    const validation = validateContactForm(rawData);
    if (!validation.success) {
      const firstError = validation.fieldErrors ? Object.values(validation.fieldErrors)[0] : "Validierungsfehler";
      toast({
        title: "Validierungsfehler",
        description: firstError,
        variant: "destructive",
        duration: 5000,
      });
      return;
    }
    const result = await submitContactForm(validation.data!);
    if (result.success) {
      toast({
        title: "Wir designen für dich",
        description: "Vielen Dank für deine Anfrage! Wir melden uns bald bei dir.",
        duration: 5000,
      });
      form.reset();
      setIsContactSheetOpen(false);
      setIsPartnerRequest(false);
    } else {
      toast({
        title: "Fehler",
        description: result.error || "Es gab ein Problem beim Senden deiner Nachricht. Bitte versuche es erneut.",
        variant: "destructive",
        duration: 5000,
      });
    }
  };

  return (
    <>
      <SEOHead
        title="Über New Edge | KI-Agentur München für Marke, Digital & AI"
        description="New Edge Brand ist eine KI-Agentur aus München. Wir arbeiten an der Schnittstelle von Marke, Digital und KI – für Unternehmen, die Verantwortung übernehmen wollen."
        canonical="/about"
      />

      <div className="min-h-screen bg-background">
        <MobileNavigation onContactClick={() => scrollToContact(false)} theme="dark" />

        {/* 1️⃣ Hero Section */}
        <section className="relative w-full h-[100dvh]">
          <div className="absolute inset-0 overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/assets/hero-video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            <div className="absolute bottom-0 left-0 p-6 pb-24 sm:p-12 sm:pb-28 lg:p-16 lg:pb-32 max-w-full sm:max-w-4xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 leading-tight text-white">
                Über uns
              </h1>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30">
            <span className="text-xs font-medium tracking-widest text-white/50 uppercase">Scroll</span>
            <ChevronDown className="w-5 h-5 text-white/50 animate-bounce" />
          </div>
        </section>

        {/* 2️⃣ Mission & Vision – UPDATED */}
        <section id="mission" className="relative py-12 sm:py-16 md:section-padding bg-surface">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left"
              >
                <h2 className="text-3xl sm:text-4xl mb-4 sm:mb-6 md:mb-8 text-foreground text-left font-bold md:text-6xl">
                  Unser Auftrag für den{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">Mittelstand</span>
                </h2>

                <div className="space-y-4 sm:space-y-6 md:space-y-8">
                  <div>
                    <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 md:mb-4 text-foreground flex items-center gap-2 sm:gap-3 font-semibold md:text-2xl">
                      <Target className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      Mission
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed text-left">
                      Innovationszugang für KMU – wirtschaftlich, strukturiert, praxisnah. Wir bringen keine Showcases, sondern Lösungen, die in Prozessen, Budget und Realität eines KMU funktionieren.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 md:mb-4 text-foreground flex items-center gap-2 sm:gap-3 font-semibold md:text-2xl">
                      <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                      Vision
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed text-left">
                      Ganzheitlicher Aufbau von Marken & digitaler Ökosysteme im KI-Zeitalter – der Mittelstand als Triebfeder für echte, messbare Innovation.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative aspect-square">
                  <motion.div
                    className="absolute inset-0 bg-gradient-primary rounded-3xl"
                    animate={{ rotate: [0, 180, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{ opacity: 0.1 }}
                  />
                  <div className="absolute inset-8 grid grid-cols-3 gap-4">
                    {[Network, Building2, Lightbulb, Code, Palette, Rocket, Users, Globe, Zap].map((Icon, i) => (
                      <motion.div
                        key={i}
                        className="bg-background rounded-2xl flex items-center justify-center shadow-lg"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Icon className="w-8 h-8 text-primary" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3️⃣ Unsere DNA – NEW Bento Grid */}
        <section className="relative py-12 sm:py-16 md:section-padding bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 sm:mb-12"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground text-left mb-3">
                Unsere <span className="bg-gradient-primary bg-clip-text text-transparent">DNA</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl text-left">
                Drei Prinzipien treiben alles an, was wir tun – von der Strategie bis zum letzten Deployment.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-[auto_auto_auto] gap-3 sm:gap-4">
              {/* Featured Card – Smart Execution */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="col-span-2 row-span-2 bg-emerald-50 p-6 lg:p-10 relative overflow-hidden group hover:bg-emerald-100/80 transition-colors duration-300"
              >
                <div
                  className="absolute top-4 right-4 text-[80px] lg:text-[120px] font-black leading-none select-none pointer-events-none"
                  style={{
                    WebkitTextStroke: '2px rgba(16,185,129,0.2)',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  01
                </div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 mb-4">
                      <Zap className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-emerald-700 uppercase">
                        Prinzip
                      </span>
                    </div>
                    <h4 className="text-xl lg:text-3xl font-black text-gray-900 mb-3 leading-tight">
                      Smart Execution
                    </h4>
                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed max-w-md">
                      Wir liefern schnell verwertbare Ergebnisse – pragmatisch, umsetzungsstark und konsequent auf Wirkung ausgerichtet. Wir nutzen KI, um Output zu skalieren, Qualität zu sichern und Umsetzung zu beschleunigen.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Next-Gen Thinking */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="col-span-1 bg-violet-50 p-4 lg:p-6 relative overflow-hidden group hover:bg-violet-100/80 transition-colors duration-300"
              >
                <div
                  className="absolute top-2 right-3 text-[50px] lg:text-[70px] font-black leading-none select-none pointer-events-none"
                  style={{
                    WebkitTextStroke: '1.5px rgba(139,92,246,0.2)',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  02
                </div>
                <div className="relative z-10">
                  <Brain className="w-5 h-5 text-violet-500 mb-3" />
                  <h4 className="text-sm lg:text-lg font-bold text-gray-900 mb-1.5 leading-tight">
                    Next-Gen Thinking
                  </h4>
                  <p className="text-xs lg:text-sm text-gray-600 leading-relaxed">
                    Frische Konzepte, moderne Technologien und visionäre Perspektive – wir prüfen, welche Lösung heute wirklich vorne liegt.
                  </p>
                </div>
              </motion.div>

              {/* Operate Safe Systems */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="col-span-1 bg-sky-50 p-4 lg:p-6 relative overflow-hidden group hover:bg-sky-100/80 transition-colors duration-300"
              >
                <div
                  className="absolute top-2 right-3 text-[50px] lg:text-[70px] font-black leading-none select-none pointer-events-none"
                  style={{
                    WebkitTextStroke: '1.5px rgba(14,165,233,0.2)',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  03
                </div>
                <div className="relative z-10">
                  <Shield className="w-5 h-5 text-sky-500 mb-3" />
                  <h4 className="text-sm lg:text-lg font-bold text-gray-900 mb-1.5 leading-tight">
                    Operate Safe Systems
                  </h4>
                  <p className="text-xs lg:text-sm text-gray-600 leading-relaxed">
                    Datenhoheit, Security by Design, auditierbar & stabil betreibbar – Kontrolle und Schutz von Anfang an.
                  </p>
                </div>
              </motion.div>

              {/* Partnerschaft auf Augenhöhe */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="col-span-1 bg-amber-50 p-4 lg:p-6 relative overflow-hidden group hover:bg-amber-100/80 transition-colors duration-300"
              >
                <div
                  className="absolute top-2 right-3 text-[50px] lg:text-[70px] font-black leading-none select-none pointer-events-none"
                  style={{
                    WebkitTextStroke: '1.5px rgba(251,191,36,0.2)',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  04
                </div>
                <div className="relative z-10">
                  <Handshake className="w-5 h-5 text-amber-500 mb-3" />
                  <h4 className="text-sm lg:text-lg font-bold text-gray-900 mb-1.5 leading-tight">
                    Partnerschaft auf Augenhöhe
                  </h4>
                  <p className="text-xs lg:text-sm text-gray-600 leading-relaxed">
                    Wie ein internes Team – offen, direkt, transparent. Keine Blackbox, nachvollziehbare Entscheidungen.
                  </p>
                </div>
              </motion.div>

              {/* Edge Mentality */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="col-span-1 bg-rose-50 p-4 lg:p-6 relative overflow-hidden group hover:bg-rose-100/80 transition-colors duration-300"
              >
                <div
                  className="absolute top-2 right-3 text-[50px] lg:text-[70px] font-black leading-none select-none pointer-events-none"
                  style={{
                    WebkitTextStroke: '1.5px rgba(244,63,94,0.2)',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  05
                </div>
                <div className="relative z-10">
                  <Compass className="w-5 h-5 text-rose-500 mb-3" />
                  <h4 className="text-sm lg:text-lg font-bold text-gray-900 mb-1.5 leading-tight">
                    Edge Mentality
                  </h4>
                  <p className="text-xs lg:text-sm text-gray-600 leading-relaxed">
                    Visionär mit Bodenhaftung. Der beste Weg für jede Situation – passgenau statt Standardschablone.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 4️⃣ Warum New Edge keine gewöhnliche Agentur ist – UPDATED TEXT */}
        <section className="relative py-12 sm:py-16 md:section-padding bg-surface">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative order-2 lg:order-1"
              >
                <div className="relative">
                  <motion.div
                    className="absolute -inset-4 bg-gradient-primary rounded-3xl blur-2xl opacity-20"
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 8, repeat: Infinity }}
                  />
                  <div className="relative bg-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-border">
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                      {[
                        { icon: Network, label: "Netzwerk" },
                        { icon: Zap, label: "Automation" },
                        { icon: Users, label: "Partnerschaften" },
                        { icon: Rocket, label: "Innovation" },
                      ].map((item, i) => (
                        <motion.div
                          key={item.label}
                          className="bg-surface rounded-2xl p-6 text-center"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <item.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                          <div className="text-sm font-medium">{item.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-1 lg:order-2"
              >
                <h2 className="sm:text-4xl mb-4 sm:mb-6 md:mb-8 text-foreground text-5xl md:text-4xl font-semibold">
                  Warum New Edge keine gewöhnliche{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">Agentur ist</span>
                </h2>

                <div className="space-y-3 sm:space-y-4 md:space-y-6 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Wir verstehen uns nicht als Agentur, sondern als{" "}
                    <strong className="text-foreground">langfristiger Innovationspartner</strong>. Wir arbeiten auf Augenhöhe wie ein internes Team – verbindlich, transparent und nah dran.
                  </p>

                  <p>
                    Unsere Lösungen passen zu eurem Reifegrad, euren Prozessen und Ressourcen. Keine Standardschablonen, sondern{" "}
                    <strong className="text-foreground">der beste Weg für eure Situation</strong> – wirtschaftlich tragfähig und im Alltag nutzbar.
                  </p>

                  <p>
                    Von Strategie über Prototyp bis Rollout – durchgängig. Wir beraten nicht nur, wir liefern. End-to-End: {" "}
                    <strong className="text-foreground">Richtung + Umsetzung</strong>.
                  </p>
                </div>

                {/* Studio & Lab Links */}
                <motion.div
                  className="mt-8 flex flex-col sm:flex-row gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <a
                    href="/studio"
                    className="group flex items-center gap-3 px-4 py-3 border border-purple-200 hover:border-purple-400 bg-purple-50/50 hover:bg-purple-50 transition-all duration-300"
                  >
                    <div className="w-8 h-8 flex items-center justify-center bg-purple-100 group-hover:bg-purple-500 transition-colors">
                      <Fingerprint className="w-4 h-4 text-purple-500 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm font-medium text-foreground">Studio entdecken</span>
                    <ArrowRight className="w-3.5 h-3.5 text-purple-400 group-hover:translate-x-1 transition-transform ml-auto" />
                  </a>
                  <a
                    href="/lab"
                    className="group flex items-center gap-3 px-4 py-3 border border-yellow-200 hover:border-yellow-400 bg-yellow-50/50 hover:bg-yellow-50 transition-all duration-300"
                  >
                    <div className="w-8 h-8 flex items-center justify-center bg-yellow-100 group-hover:bg-yellow-500 transition-colors">
                      <FlaskConical className="w-4 h-4 text-yellow-600 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm font-medium text-foreground">Lab entdecken</span>
                    <ArrowRight className="w-3.5 h-3.5 text-yellow-500 group-hover:translate-x-1 transition-transform ml-auto" />
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5️⃣ Unsere Geschichte – Timeline */}
        <section id="geschichte" className="relative py-12 sm:py-16 md:section-padding bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16 md:mb-20"
            >
              <h2 className="text-3xl sm:text-4xl mb-4 sm:mb-6 text-foreground lg:text-left text-left font-semibold md:text-5xl">
                Von der Idee zum <span className="bg-gradient-primary bg-clip-text text-transparent">Ökosystem</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl text-left mb-6">
                Seit August 2025 liefert New Edge als Innovationspartner &amp; Connector – aufgebaut mit modernster KI &amp; Automation.
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="max-w-4xl mx-auto relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

              {[
                {
                  year: "08/2025",
                  title: "Start mit Tech-Vorsprung",
                  subtitle: "Launch",
                  description: "Go-Live von New Edge als Innovationspartner & Connector für KMU und Agenturen.",
                },
                {
                  year: "09-10/2025",
                  title: "Aufbauen. Testen. Liefern.",
                  subtitle: "Build & Proof",
                  description:
                    "Aufbau und Onboarding geprüfter Partner-Agenturen – mit ersten vernetzten Projekten für KMU aus unterschiedlichen Branchen.",
                },
                {
                  year: "11–12/2025",
                  title: "Partner- & Netzwerkerweiterung",
                  subtitle: "Scale",
                  description:
                    "Neue Partnerschaften, neue Branchen, neue Perspektiven – wir verbinden kreative Expertise mit systemischer Präzision.",
                },
                {
                  year: "2026+",
                  title: "Von Prozessen zu Produkten",
                  subtitle: "Expansion & Impact",
                  description:
                    "Wir übersetzen Erfahrung in Technologie – und gestalten daraus smarte Module, die Unternehmen messbar effizienter machen.",
                },
              ].map((milestone, i) => (
                <motion.div
                  key={milestone.year}
                  className={`relative grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16`}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                >
                  {i % 2 === 0 ? (
                    <>
                      <div className="text-right pr-2 sm:pr-4 md:pr-8">
                        <Card className="inline-block text-left hover:shadow-xl transition-all">
                          <CardContent className="p-3 sm:p-4 md:p-6">
                            <div className="text-lg sm:text-xl font-semibold text-primary mb-1">
                              {milestone.year} – {milestone.subtitle}
                            </div>
                            <h3 className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3 font-bold">
                              {milestone.title}
                            </h3>
                            <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                              {milestone.description}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                      <div className="relative flex items-center">
                        <motion.div
                          className="absolute left-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary border-2 sm:border-4 border-background shadow-lg"
                          whileInView={{ scale: [0, 1.2, 1] }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="relative flex items-center justify-end">
                        <motion.div
                          className="absolute right-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-secondary border-2 sm:border-4 border-background shadow-lg"
                          whileInView={{ scale: [0, 1.2, 1] }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                      <div className="pl-2 sm:pl-4 md:pl-8">
                        <Card className="hover:shadow-xl transition-all">
                          <CardContent className="p-3 sm:p-4 md:p-6">
                            <div className="text-lg sm:text-xl font-semibold text-secondary mb-1">
                              {milestone.year} – {milestone.subtitle}
                            </div>
                            <h3 className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3 font-bold">
                              {milestone.title}
                            </h3>
                            <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                              {milestone.description}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mt-12 sm:mt-16"
            >
              <Button
                size="lg"
                onClick={() => {
                  setIsPartnerRequest(false);
                  setIsContactSheetOpen(true);
                }}
                className="group rounded-none border-2 border-black bg-transparent text-black backdrop-blur-sm transition-all hover:bg-black hover:text-white"
              >
                Projekt anfragen
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* 6️⃣ Für wen wir arbeiten – NEW */}
        <section className="relative py-12 sm:py-16 md:section-padding bg-surface">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 sm:mb-12"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground text-left mb-3">
                Unsere Kunden & <span className="bg-gradient-primary bg-clip-text text-transparent">Partner</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl text-left">
                Unsere Kunden haben eines gemeinsam: Sie brauchen mehr Sichtbarkeit, haben manuelle Prozesse und kein internes Marketing- oder Automatisierungsteam.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  icon: Eye,
                  title: "Sichtbarkeit ohne eigenes Team",
                  description: "Unternehmen, die online wachsen wollen – aber kein internes Marketing-Team haben. Social Media, Branding und digitale Präsenz, die Vertrauen aufbaut und Anfragen generiert.",
                  tags: ["Handwerk", "Architektur", "Immobilien"],
                  color: "bg-violet-50",
                  iconColor: "text-violet-500",
                  tagBg: "bg-violet-100 text-violet-700",
                },
                {
                  icon: Cog,
                  title: "Prozesse, die skalieren sollen",
                  description: "Betriebe mit vielen manuellen Abläufen – von Terminen über Leads bis Dokumentation. KI und Automatisierung für operativen Entlastung und strukturiertes Wachstum.",
                  tags: ["Kliniken", "Praxen", "Hausverwaltungen"],
                  color: "bg-amber-50",
                  iconColor: "text-amber-500",
                  tagBg: "bg-amber-100 text-amber-700",
                },
                {
                  icon: ShieldCheck,
                  title: "KI nutzen – strukturiert & sicher",
                  description: "KMU, die KI einsetzen wollen, aber Wert auf Kontrolle, Datenhoheit und Nachvollziehbarkeit legen. Keine Experimente, sondern produktive Systeme mit klarer Governance.",
                  tags: ["Consultants", "Agenturen", "Institutionen"],
                  color: "bg-sky-50",
                  iconColor: "text-sky-500",
                  tagBg: "bg-sky-100 text-sky-700",
                },
              ].map((profile, i) => (
                <motion.div
                  key={profile.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className={`${profile.color} p-6 sm:p-8 relative overflow-hidden group hover:shadow-lg transition-all duration-300`}
                >
                  <profile.icon className={`w-8 h-8 ${profile.iconColor} mb-4`} />
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                    {profile.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-5">
                    {profile.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {profile.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-1 text-[10px] sm:text-xs font-medium ${profile.tagBg} rounded-none`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 8️⃣ CTA Kontakt */}
        <section
          id="kontakt"
          className="relative py-16 sm:py-24 bg-gradient-to-br from-white via-gray-50/50 to-white overflow-hidden"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-5 md:mb-6 leading-[1.25] text-black font-semibold lg:text-5xl"
              >
                Jetzt Kontakt aufnehmen
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-base lg:text-xl text-gray-600 mb-10 leading-[1.5] max-w-3xl mx-auto"
              >
                New Edge steht für Innovation und nachhaltige Entwicklung. Gemeinsam gestalten wir die Zukunft von Marken und Prozessen.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button
                  size="lg"
                  onClick={() => scrollToContact(false)}
                  className="group bg-transparent backdrop-blur-sm border-2 border-black text-black hover:bg-black hover:text-white rounded-none transition-all duration-300"
                >
                  Kontakt aufnehmen
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Sheet */}
        <Sheet
          open={isContactSheetOpen}
          onOpenChange={(open) => {
            setIsContactSheetOpen(open);
            if (!open) setIsPartnerRequest(false);
          }}
        >
          <SheetContent side="right" className="w-full sm:max-w-xl overflow-y-auto">
            <SheetHeader className="mb-6">
              <SheetTitle className="text-2xl font-bold">
                {isPartnerRequest ? "Partner werden" : "Projekt besprechen"}
              </SheetTitle>
              <SheetDescription>
                {isPartnerRequest
                  ? "Werden Sie Teil unseres Netzwerks - wir freuen uns auf die Zusammenarbeit."
                  : "Erzählen Sie uns von Ihrem Projekt - wir melden uns zeitnah bei Ihnen."}
              </SheetDescription>
            </SheetHeader>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-5">
                {[
                  { id: "name", label: "Name *", type: "text", placeholder: "Ihr Name", required: true },
                  { id: "email", label: "E-Mail *", type: "email", placeholder: "ihre@email.com", required: true },
                  { id: "position", label: "Position *", type: "text", placeholder: "Ihre Position", required: true },
                  { id: "firma", label: "Firma *", type: "text", placeholder: "Ihr Unternehmen", required: true },
                  { id: "telefon", label: "Telefon", type: "tel", placeholder: "Ihre Telefonnummer", required: false },
                ].map((field) => (
                  <div key={field.id} className="space-y-2">
                    <Label htmlFor={field.id} className="text-foreground font-medium">
                      {field.label}
                    </Label>
                    <Input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      required={field.required}
                      className="bg-background/50 border-border focus:border-primary transition-colors"
                    />
                  </div>
                ))}

                <div className="space-y-2">
                  <Label htmlFor="nachricht" className="text-foreground font-medium">
                    Nachricht *
                  </Label>
                  <Textarea
                    id="nachricht"
                    name="nachricht"
                    placeholder={
                      isPartnerRequest
                        ? "Erzählen Sie uns über Ihr Unternehmen und warum Sie Partner werden möchten..."
                        : "Erzählen Sie uns von Ihrem Projekt..."
                    }
                    defaultValue={isPartnerRequest ? "Wir möchten ein Partner von New Edge werden.\n\n" : ""}
                    required
                    className="min-h-[120px] bg-background/50 border-border focus:border-primary transition-colors resize-none"
                  />
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full btn-primary text-slate-50">
                Nachricht senden
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </SheetContent>
        </Sheet>

        <Footer />
      </div>
    </>
  );
};
export default About;
