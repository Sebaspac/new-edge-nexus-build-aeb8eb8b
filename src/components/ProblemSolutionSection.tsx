import { motion } from "framer-motion";
import { Clock, TrendingDown, TrendingUp, BarChart3, Sparkles, Zap } from "lucide-react";
import DisplayCards from "@/components/ui/display-cards";
import GlassCard from "@/components/ui/glass-card";
interface ProblemSolutionSectionProps {
  openAccordionIndex: number;
  setOpenAccordionIndex: (index: number) => void;
}
export const ProblemSolutionSection = ({ openAccordionIndex, setOpenAccordionIndex }: ProblemSolutionSectionProps) => {
  const accordionItems = [
    {
      title: "30 % mehr Zeit",
      content: "Routinearbeit fällt weg – Sie gewinnen bis zu 30 % Fokuszeit zurück.",
      icon: Clock,
    },
    {
      title: "Kosten senken",
      content: "Fehler und Doppelarbeit sinken, Prozesse laufen günstiger.",
      icon: TrendingDown,
    },
    {
      title: "Transparenz",
      content: "Echtzeit-Dashboards zeigen KPIs für schnelle Entscheidungen.",
      icon: BarChart3,
    },
    {
      title: "Schnelle Umsetzung",
      content: "Von der Idee zur Lösung in Rekordzeit – agil und effizient.",
      icon: Zap,
    },
  ];
  const displayCardsData = [
    {
      icon: <Clock className="size-4 text-primary" />,
      title: "Zeit sparen",
      description: "+30% mehr Fokuszeit",
      date: "Automatisierung & Effizienz",
      iconClassName: "text-primary",
      titleClassName: "text-primary",
      className:
        "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <TrendingDown className="size-4 text-accent" />,
      title: "Kosten senken",
      description: "-40% Betriebskosten",
      date: "Intelligente Prozesse",
      iconClassName: "text-accent",
      titleClassName: "text-accent",
      className:
        "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <TrendingUp className="size-4 text-secondary" />,
      title: "Umsatz steigern",
      description: "+50% mehr Conversion",
      date: "Datengetriebene Insights",
      iconClassName: "text-secondary",
      titleClassName: "text-secondary",
      className: "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-center">
        {/* Left side: Accordion */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="space-y-2"
        >
          {accordionItems.map((item, index) => {
            const isOpen = openAccordionIndex === index;
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                className="group"
              >
                <button
                  onClick={() => setOpenAccordionIndex(isOpen ? -1 : index)}
                  className={`
                    w-full p-4 lg:p-5 rounded-xl
                    border-2 transition-all duration-200
                    ${isOpen ? "border-primary bg-primary/5 shadow-lg" : "border-border bg-card hover:border-primary/50 hover:bg-card/80"}
                  `}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <Icon className={`w-5 h-5 ${isOpen ? "text-primary" : "text-muted-foreground"}`} />
                      <h3
                        className={`
                          text-left text-lg lg:text-xl font-bold
                          transition-colors duration-200
                          ${isOpen ? "text-primary" : "text-foreground"}
                        `}
                      >
                        {item.title}
                      </h3>
                    </div>
                    <motion.div
                      animate={{
                        rotate: isOpen ? 180 : 0,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className={`
                        flex-shrink-0 w-7 h-7 rounded-full 
                        flex items-center justify-center
                        transition-colors duration-200
                        ${isOpen ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground group-hover:bg-primary/10"}
                      `}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pt-3">
                      <p className="text-sm text-muted-foreground leading-relaxed text-left lg:text-base">
                        {item.content}
                      </p>
                    </div>
                  </motion.div>
                </button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Right side: Value Proposition */}
        <motion.div
          initial={{
            opacity: 0,
            x: 20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="space-y-8"
        >
          {/* Heading */}
          <div className="space-y-4"></div>

          {/* Apple-Style Feature Cards */}
          <div className="space-y-4">
            {/* Glass Cards Grid */}
            <div className="flex flex-wrap gap-6 justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <GlassCard
                  title="Innovation als Prozess"
                  description="Statt einmaliger Projekte bauen wir Ihnen einen nachhaltigen Ablauf."
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <GlassCard
                  title="Ganzheitliche Transformation"
                  description="Keine Insellösungen mehr. Wir verbinden Marke, Content und KI-Automatisierung zu einem durchgängigen System."
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <GlassCard
                  title="Kreatives Innovations-Hauptquartier"
                  description="Nicht als klassische Agentur, sondern als Ort, an dem Ideen, Technologien und Design zu echter Zukunftskraft werden."
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
