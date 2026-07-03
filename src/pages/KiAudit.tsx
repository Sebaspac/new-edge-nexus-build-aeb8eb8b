import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Quote, X } from "lucide-react";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Footer } from "@/components/Footer";
import { ContactFormModal } from "@/components/ContactFormModal";
import { AuditSlaStatus } from "@/components/AuditSlaStatus";
import SEOHead from "@/components/SEOHead";
import { ThreeStepsCTA } from "@/components/ThreeStepsCTA";
import LogoCloud from "@/components/ui/logo-cloud";
import KiAuditGate from "@/components/KiAuditGate";
import { safeSessionStorage, safeGetItem } from "@/utils/safeStorage";
import { img, Icon } from "@/content";
import { kiAudit as KIAUDIT_STATIC } from "@/content/pages/kiAudit";
import { useCms } from "@/hooks/useCms";
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as const }
  })
};

const KiAudit = () => {
  // Inhalte live aus dem CMS (Strapi); Fallback: statischer Content-Layer
  const kiAudit = useCms("ki-audit", KIAUDIT_STATIC);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [hasAccess, setHasAccess] = useState(() => {
    const storage = safeSessionStorage();
    return safeGetItem(storage, "ki-audit-access") === "true";
  });

  if (!hasAccess) {
    return <KiAuditGate onSuccess={() => setHasAccess(true)} />;
  }

  return (
    <>
      <SEOHead
        title={kiAudit.seo.title}
        description={kiAudit.seo.description}
        canonical={kiAudit.seo.canonical}
      />

      <MobileNavigation onContactClick={() => setIsContactOpen(true)} theme="dark" />

      {/* ═══════════════════════════════════════════════
                                             1 — HERO (mobile-first, image below text)
                                        ═══════════════════════════════════════════════ */}
      <section className="relative bg-foreground text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="container mx-auto px-5 sm:px-8 lg:px-12 relative z-10 pt-28 pb-0 md:pt-36 md:pb-0">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Text */}
            <div className="max-w-xl">
              <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-primary-foreground/20 bg-primary-foreground/5 backdrop-blur-sm mb-6">
                  <span className="w-1.5 h-1.5 bg-primary" />
                  <span className="text-[10px] sm:text-xs font-medium tracking-widest uppercase text-primary-foreground/70">
                    {kiAudit.hero.badge}
                  </span>
                </div>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={1}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] mb-5 sm:mb-8">

                {kiAudit.hero.headline}
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={2}
                className="text-sm sm:text-body-lg text-primary-foreground/60 mb-8 whitespace-pre-line">
                {kiAudit.hero.sublineLine1}{"\n"}
                {kiAudit.hero.sublineLine2}
              </motion.p>

              <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}>
                <a
                  href={kiAudit.hero.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-7 py-3.5 bg-primary-foreground text-foreground font-semibold border-2 border-primary-foreground hover:bg-transparent hover:text-primary-foreground transition-all duration-300 group text-xs sm:text-sm uppercase tracking-wider rounded-none">

                  {kiAudit.hero.cta.label}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="relative mt-8 lg:mt-0">
              
              <div className="relative overflow-hidden rounded-none">
                <img
                  src={img(kiAudit.hero.image.src)}
                  alt={kiAudit.hero.image.alt}
                  className="w-full h-[280px] sm:h-[360px] lg:h-[520px] object-cover object-center"
                  loading="eager" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
              </div>
            </motion.div>
           </div>
         </div>

         {/* Scroll Indicator */}
         <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
           <span className="text-[10px] font-medium tracking-[0.3em] text-primary-foreground/50 uppercase">{kiAudit.hero.scroll}</span>
           <ChevronDown className="w-5 h-5 text-primary-foreground/50 animate-pulse" />
         </div>
       </section>

      {/* SLA-Status: erscheint nur, wenn eine Audit-Anfrage läuft */}
      <AuditSlaStatus />

      {/* ═══════════════════════════════════════════════
                                             2 — PROBLEM / PAIN POINTS
                                        ═══════════════════════════════════════════════ */}
      <section className="bg-primary-foreground py-14 md:py-28">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12 max-w-6xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="mb-10 md:mb-16">
            <span className="text-[10px] sm:text-xs font-medium tracking-widest uppercase text-primary mb-3 block">{kiAudit.problem.eyebrow}</span>
            <h2 className="text-2xl sm:text-display max-w-2xl">
              {kiAudit.problem.heading}
            </h2>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3 md:gap-6">
            {kiAudit.problem.items.
            map(({ q }, i) =>
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 1}
              className="relative border-2 border-foreground/10 p-6 sm:p-8 md:p-10 hover:border-primary/40 transition-colors duration-300 rounded-none">
              
                <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-primary/40 mb-3" />
                <p className="text-sm sm:text-body-lg text-foreground/80 italic leading-relaxed">{q}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
                                             3 — LEISTUNG
                                        ═══════════════════════════════════════════════ */}
      <section className="bg-muted py-14 md:py-28">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12 max-w-6xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="mb-10 md:mb-16">
            <span className="text-[10px] sm:text-xs font-medium tracking-widest uppercase text-primary mb-3 block">{kiAudit.leistung.eyebrow}</span>
            <h2 className="text-2xl sm:text-display max-w-3xl">
              {kiAudit.leistung.heading}
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* What it is */}
            <div className="space-y-3 sm:space-y-4">
              {kiAudit.leistung.items.
              map((item, i) =>
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 border-2 border-foreground/[0.08] bg-primary-foreground hover:border-primary/30 transition-colors duration-300 rounded-none">
                
                  <div className="w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center bg-primary/10">
                    <Icon name={item.icon} className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <p className="text-sm sm:text-body text-foreground/80 pt-1">{item.text}</p>
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
              className="border-2 border-foreground/10 p-6 sm:p-8 md:p-10 bg-primary-foreground rounded-none">
              
              <h3 className="text-lg sm:text-h3 mb-5">{kiAudit.leistung.notHeading}</h3>
              <ul className="space-y-3 sm:space-y-4">
                {kiAudit.leistung.notItems.map((item, i) =>
                <li key={i} className="flex items-center gap-3 text-sm sm:text-body text-foreground/60">
                    <X className="w-4 h-4 text-foreground/30 flex-shrink-0" />
                    {item}
                  </li>
                )}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
                                             4 — PROZESS (with image)
                                        ═══════════════════════════════════════════════ */}
      <section className="bg-primary-foreground py-14 md:py-28">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12 max-w-6xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="mb-10 md:mb-16">
            <span className="text-[10px] sm:text-xs font-medium tracking-widest uppercase text-primary mb-3 block">{kiAudit.prozess.eyebrow}</span>
            <h2 className="text-2xl sm:text-display max-w-2xl">
              {kiAudit.prozess.heading}
            </h2>
          </motion.div>

          {/* Process Image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.5}
            className="mb-8 md:mb-12 overflow-hidden rounded-none">
            
            <img
              src={img(kiAudit.prozess.image.src)}
              alt={kiAudit.prozess.image.alt}
              className="w-full h-[200px] sm:h-[280px] md:h-[360px] object-cover object-center"
              loading="lazy" />
            
          </motion.div>

          {/* Steps — horizontal scroll on mobile, grid on desktop */}
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0 -mx-5 px-5 md:mx-0 md:px-0">
            {kiAudit.prozess.steps.
            map((item, i) =>
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 1}
              className="group flex-shrink-0 w-[80vw] snap-center md:w-auto border-2 border-foreground/10 p-6 sm:p-8 md:p-10 hover:border-primary/40 transition-all duration-300 rounded-none">
              
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <span className="text-3xl sm:text-display text-primary/20 group-hover:text-primary/40 transition-colors font-bold">{item.step}</span>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-primary/10 group-hover:bg-primary transition-colors duration-300">
                    <Icon name={item.icon} className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-base sm:text-h3 mb-2 sm:mb-3 font-semibold">{item.title}</h3>
                <p className="text-xs sm:text-body-sm text-foreground/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            )}
          </div>

          {/* Duration note */}
          








          
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
                                             5 — TRUST & SOCIAL PROOF
                                        ═══════════════════════════════════════════════ */}
      <section className="bg-muted py-14 md:py-28">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12 max-w-6xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="mb-10 md:mb-16">
            <span className="text-[10px] sm:text-xs font-medium tracking-widest uppercase text-primary mb-3 block">{kiAudit.trust.eyebrow}</span>
            <h2 className="text-2xl sm:text-display max-w-2xl">
              {kiAudit.trust.heading}
            </h2>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="border-2 border-foreground/10 p-6 sm:p-8 md:p-12 mb-8 md:mb-12 rounded-none bg-primary-foreground">
            
            <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-6 sm:mb-8">
              {kiAudit.trust.stats.
              map((stat, i) =>
              <div key={i} className="text-center">
                  <p className="text-2xl sm:text-4xl md:text-display text-primary mb-1 sm:mb-2 font-bold">{stat.value}</p>
                  <p className="text-[10px] sm:text-body-sm text-foreground/60 leading-tight">{stat.label}</p>
                </div>
              )}
            </div>

            <div className="border-t border-foreground/10 pt-6 sm:pt-8">
              <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-primary/40 mb-2 sm:mb-3" />
              <p className="text-sm sm:text-body-lg text-foreground/70 italic max-w-3xl mb-3 sm:mb-4 leading-relaxed">
                {kiAudit.trust.quote}
              </p>
              <p className="text-xs sm:text-body-sm text-foreground/50">
                {kiAudit.trust.quoteAuthor}
              </p>
            </div>
          </motion.div>

          <LogoCloud />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
                                             6 — FINAL CTA
                                        ═══════════════════════════════════════════════ */}
      <ThreeStepsCTA />

      <Footer />

      <ContactFormModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        accentColor="#ffffff"
        gradientFrom="#333333"
        gradientTo="#000000"
        theme="studio"
        sla />
      
    </>);

};

export default KiAudit;