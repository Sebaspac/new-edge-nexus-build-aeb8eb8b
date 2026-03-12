import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, FileText, Presentation, Quote, Shield, Zap } from "lucide-react";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Footer } from "@/components/Footer";
import { ContactFormModal } from "@/components/ContactFormModal";
import { Helmet } from "react-helmet-async";
import LogoCloud from "@/components/ui/logo-cloud";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] as const }
  })
};

const KiAudit = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>KI Enablement & Audit — New Edge</title>
        <meta
          name="description"
          content="Strukturierter KI Audit für den Mittelstand. IST-Analyse, Roadmap, BAFA-förderfähig. Ab €448 mit Förderung." />
        
      </Helmet>

      <MobileNavigation onContactClick={() => setIsContactOpen(true)} theme="dark" />

      {/* ═══════════════════════════════════════════════
              1 — HERO
           ═══════════════════════════════════════════════ */}
      <section className="relative min-h-[100dvh] bg-foreground text-primary-foreground flex items-center overflow-hidden">
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="max-w-4xl">
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-primary-foreground/20 bg-primary-foreground/5 backdrop-blur-sm mb-8">
                <span className="w-2 h-2 bg-primary" />
                <span className="text-xs font-medium tracking-widest uppercase text-primary-foreground/70">
                  KI Enablement & Audit
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-display-lg lg:text-display-xl mb-8 max-w-3xl">
              
              Wir sagen euch auch, wenn KI bei euch gerade noch keinen Sinn macht.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-body-lg text-primary-foreground/60 max-w-xl mb-10">
              
              KI Enablement & Audit — strukturiert, konkret, BAFA-gefördert.
            </motion.p>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3} className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsContactOpen(true)}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary-foreground text-foreground font-semibold border-2 border-primary-foreground hover:bg-transparent hover:text-primary-foreground transition-all duration-300 group text-sm uppercase tracking-wider rounded-none">
                
                Audit anfragen
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
              2 — PROBLEM / PAIN POINTS
           ═══════════════════════════════════════════════ */}
      <section className="bg-primary-foreground py-20 md:py-32">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="mb-16">
            <span className="text-xs font-medium tracking-widest uppercase text-primary mb-4 block">Das Problem</span>
            <h2 className="text-display max-w-2xl">
              Kommt euch das bekannt vor?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
            { q: "ChatGPT läuft. Zapier auch. Aber eigentlich läuft alles noch manuell." },
            { q: "Wir haben 2 KI-Projekte gestartet, keines läuft heute produktiv." },
            { q: "Wir wissen nicht, ob wir überhaupt KI-ready sind." }].
            map(({ q }, i) =>
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 1}
              className="relative border-2 border-foreground/10 p-8 md:p-10 hover:border-primary/40 transition-colors duration-300 rounded-none">
              
                <Quote className="w-6 h-6 text-primary/40 mb-4" />
                <p className="text-body-lg text-foreground/80 italic leading-relaxed">{q}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
              3 — LEISTUNG
           ═══════════════════════════════════════════════ */}
      <section className="bg-muted py-20 md:py-32">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="mb-16">
            <span className="text-xs font-medium tracking-widest uppercase text-primary mb-4 block">Leistung</span>
            <h2 className="text-display max-w-3xl">
              Was ist der KI Enablement & Audit?
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* What it is */}
            <div className="space-y-5">
              {[
              { icon: FileText, text: "Strukturierte IST-Analyse eurer Prozesse und Tools" },
              { icon: Zap, text: "Bewertung: Wo lohnt sich KI, wo noch nicht" },
              { icon: CheckCircle2, text: "Konkrete Maßnahmen-Roadmap für die nächsten 90 Tage" },
              { icon: Shield, text: "Kein Bericht der in der Schublade landet — sondern Aktionsplan" }].
              map((item, i) =>
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="flex items-start gap-4 p-5 border-2 border-foreground/[0.08] bg-primary-foreground hover:border-primary/30 transition-colors duration-300 rounded-none">
                
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-primary/10">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-body text-foreground/80 pt-1.5">{item.text}</p>
                </motion.div>
              )}
            </div>

            {/* What it's NOT */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="border-2 border-foreground/10 p-8 md:p-10 bg-primary-foreground rounded-none">
              
              <h3 className="text-h3 mb-6">Kein:</h3>
              <ul className="space-y-4">
                {[
                "Tool-Demo",
                "Theorie-Workshop",
                "Framework-Folien"].
                map((item, i) =>
                <li key={i} className="flex items-center gap-3 text-body text-foreground/60">
                    <span className="w-5 h-px bg-foreground/30" />
                    {item}
                  </li>
                )}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
              4 — PROZESS
           ═══════════════════════════════════════════════ */}
      <section className="bg-primary-foreground py-20 md:py-32">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="mb-16">
            <span className="text-xs font-medium tracking-widest uppercase text-primary mb-4 block">Prozess</span>
            <h2 className="text-display max-w-2xl">
              Von der Anfrage zum Aktionsplan
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
            {
              step: "01",
              title: "30-Min Erstgespräch",
              desc: "Kostenlos, unverbindlich — wir lernen euer Unternehmen kennen.",
              icon: Clock
            },
            {
              step: "02",
              title: "Audit-Durchführung",
              desc: "1–2 Wochen intensive Analyse eurer Prozesse, Tools und Potenziale.",
              icon: FileText
            },
            {
              step: "03",
              title: "Ergebnis & Aktionsplan",
              desc: "Präsentation mit konkreter Roadmap für die nächsten 90 Tage.",
              icon: Presentation
            }].
            map((item, i) =>
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="group border-2 border-foreground/10 p-8 md:p-10 hover:border-primary/40 transition-all duration-300 rounded-none">
              
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-display text-primary/20 group-hover:text-primary/40 transition-colors">{item.step}</span>
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 group-hover:bg-primary transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-h3 mb-3">{item.title}</h3>
                <p className="text-body-sm text-foreground/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            )}
          </div>

          








          
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
              5 — PREIS & FÖRDERUNG
           ═══════════════════════════════════════════════ */}
      <section className="bg-foreground text-primary-foreground py-20 md:py-32">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-4xl text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            
            

            
          </motion.div>

          



























          
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
              6 — TRUST & SOCIAL PROOF
           ═══════════════════════════════════════════════ */}
      <section className="bg-primary-foreground py-20 md:py-32">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="mb-16">
            <span className="text-xs font-medium tracking-widest uppercase text-primary mb-4 block">Referenz</span>
            <h2 className="text-display max-w-2xl">
              Ergebnisse, keine Versprechen
            </h2>
          </motion.div>

          {/* Reference Case */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="border-2 border-foreground/10 p-8 md:p-12 mb-12 rounded-none">
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {[
              { value: "30%", label: "Zeitersparnis bei Routineaufgaben" },
              { value: "5×", label: "Schnellere Angebotserstellung" },
              { value: "90 Tage", label: "Vom Audit zur produktiven KI" }].
              map((stat, i) =>
              <div key={i} className="text-center md:text-left">
                  <p className="text-display text-primary mb-2">{stat.value}</p>
                  <p className="text-body-sm text-foreground/60">{stat.label}</p>
                </div>
              )}
            </div>

            <div className="border-t border-foreground/10 pt-8">
              <Quote className="w-5 h-5 text-primary/40 mb-3" />
              <p className="text-body-lg text-foreground/70 italic max-w-3xl mb-4">
                „New Edge hat uns in 3 Wochen gezeigt, wo KI bei uns wirklich Hebel hat — und wo wir besser die Finger davon lassen. Das hat uns Monate an Fehlversuchen erspart."
              </p>
              <p className="text-body-sm text-foreground/50">
                — Geschäftsführer, mittelständisches Industrieunternehmen
              </p>
            </div>
          </motion.div>

          {/* Logo Cloud */}
          <LogoCloud />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
              7 — FINAL CTA
           ═══════════════════════════════════════════════ */}
      <section className="bg-foreground text-primary-foreground py-24 md:py-36">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-3xl text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            <h2 className="text-display-lg mb-6">Bereit für Klarheit?</h2>
            <p className="text-body-lg text-primary-foreground/60 mb-10 max-w-xl mx-auto">
              Kein Verkaufsgespräch. 30 Minuten. Wir hören zu.
            </p>

            <button
              onClick={() => setIsContactOpen(true)}
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary-foreground text-foreground font-semibold border-2 border-primary-foreground hover:bg-transparent hover:text-primary-foreground transition-all duration-300 group text-sm uppercase tracking-wider rounded-none">
              
              Jetzt kostenloses Erstgespräch buchen
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />

      <ContactFormModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        accentColor="#ffffff"
        gradientFrom="#333333"
        gradientTo="#000000"
        theme="studio" />
      
    </>);

};

export default KiAudit;