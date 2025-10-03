import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ProblemSolutionSectionProps {
  openAccordionIndex: number;
  setOpenAccordionIndex: (index: number) => void;
}

export const ProblemSolutionSection = ({
  openAccordionIndex,
  setOpenAccordionIndex,
}: ProblemSolutionSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Scroll-based animations for mobile
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const visualOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 0.5, 0]);
  const visualScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);
  const visualY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  const accordionItems = [
    {
      title: "Ihre Herausforderung",
      content: "Manuelle, zeitraubende Prozesse im Tagesgeschäft rauben Ihnen wertvolle Zeit. Keine Ressourcen für Digitalisierung und Innovation. Fachkräftemangel und steigende Kosten belasten Ihr Unternehmen. Während Wettbewerber fortschreiten, bleiben Sie zurück. Klassische Agenturen liefern keine echte Innovation."
    },
    {
      title: "Unsere Lösung",
      content: "KI-gestützte Automatisierung Ihrer Prozesse gibt Ihnen 30% mehr Zeit für Ihr Kerngeschäft zurück. Messbare Effizienzsteigerung & ROI durch intelligente Systeme. Sie werden Vorreiter Ihrer Branche mit unserer hybriden Expertise: Marketing + Technologie + Automatisierung aus einer Hand."
    },
    {
      title: "Konkret für Sie",
      content: "Für mittelständische Produktions- oder Dienstleistungsunternehmen (50-300 Mitarbeiter), die ihre Prozesse manuell betreiben und unter Fachkräftemangel leiden, implementiert New Edge KI-gestützte Automatisierungen und vernetzt sie mit passenden Agenturen. Dadurch gewinnen sie 30% mehr Zeit für ihr Kerngeschäft, senken Fehlerquoten, stärken ihre Marke und werden als innovative Vorreiter in ihrer Branche wahrgenommen."
    }
  ];

  return (
    <>
      {/* Mobile/Tablet: Stack Layout with Scroll Effect */}
      <div ref={sectionRef} className="lg:hidden space-y-6 relative max-w-6xl mx-auto">
        {/* Visual with Scroll Effect - shown first */}
        <motion.div
          style={{
            opacity: visualOpacity,
            scale: visualScale,
            y: visualY,
          }}
          className="sticky top-20 z-10"
        >
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary via-secondary to-accent">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-white/20 backdrop-blur-sm rounded-3xl" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </motion.div>

        {/* Accordion Content Below - appears as visual fades */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative z-20 min-h-[60vh] space-y-1"
        >
          {accordionItems.map((item, index) => {
            const isOpen = openAccordionIndex === index;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="border-b border-border last:border-b-0"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setOpenAccordionIndex(isOpen ? -1 : index)}
                  className="w-full py-5 px-0 flex items-center justify-between text-left hover:opacity-70 transition-opacity"
                >
                  <h3 className="text-[28px] sm:text-[30px] text-foreground leading-[1.3] font-semibold">
                    {item.title}
                  </h3>
                  <motion.svg
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-5 h-5 text-muted-foreground flex-shrink-0 ml-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
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
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 pr-8">
                    <p className="text-base text-muted-foreground leading-[1.5]">
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Desktop: Grid Layout */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
        {/* Left: Accordion List */}
        <div className="space-y-1">
          {accordionItems.map((item, index) => {
            const isOpen = openAccordionIndex === index;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="border-b border-border last:border-b-0"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setOpenAccordionIndex(isOpen ? -1 : index)}
                  className="w-full py-5 px-0 flex items-center justify-between text-left hover:opacity-70 transition-opacity"
                >
                  <h3 className="text-lg font-semibold text-foreground leading-[1.3]">
                    {item.title}
                  </h3>
                  <motion.svg
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-5 h-5 text-muted-foreground flex-shrink-0 ml-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
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
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 pr-8">
                    <p className="text-base text-muted-foreground leading-[1.5]">
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Right: Animated Visual */}
        <div className="lg:sticky lg:top-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary via-secondary to-accent"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-white/20 backdrop-blur-sm rounded-3xl" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>
        </div>
      </div>
    </>
  );
};
