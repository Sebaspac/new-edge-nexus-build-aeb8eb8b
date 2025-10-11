import { motion } from "framer-motion";
import { Clock, TrendingDown, TrendingUp, BarChart3, Sparkles, Zap } from "lucide-react";

interface ProblemSolutionSectionProps {
  openAccordionIndex: number;
  setOpenAccordionIndex: (index: number) => void;
}

export const ProblemSolutionSection = ({
  openAccordionIndex,
  setOpenAccordionIndex
}: ProblemSolutionSectionProps) => {
  const accordionItems = [{
    title: "30 % mehr Zeit",
    content: "Routinearbeit fällt weg – Sie gewinnen bis zu 30 % Fokuszeit zurück.",
    icon: Clock
  }, {
    title: "Kosten senken",
    content: "Fehler und Doppelarbeit sinken, Prozesse laufen günstiger.",
    icon: TrendingDown
  }, {
    title: "Mehr Umsatz",
    content: "Bessere Leads, höhere Conversion – spürbar mehr Umsatz.",
    icon: TrendingUp
  }, {
    title: "Transparenz",
    content: "Echtzeit-Dashboards zeigen KPIs für schnelle Entscheidungen.",
    icon: BarChart3
  }, {
    title: "Bereit für Innovation",
    content: "Nutzen Sie modernste Technologien und bleiben Sie der Konkurrenz voraus.",
    icon: Sparkles
  }, {
    title: "Schnelle Umsetzung",
    content: "Von der Idee zur Lösung in Rekordzeit – agil und effizient.",
    icon: Zap
  }];

  const cardData = [
    {
      title: "Automatisierung & Effizienz",
      value: "+30%",
      description: "Routineaufgaben werden automatisiert – Ihre Teams gewinnen wertvolle Zeit für strategische Projekte. KI-gestützte Workflows optimieren jeden Prozess.",
      gradient: "from-primary/20 to-primary/5",
      icon: Clock
    },
    {
      title: "Kostenoptimierung",
      value: "-40%",
      description: "Reduzieren Sie Betriebskosten durch intelligente Prozessautomatisierung. Weniger Fehler, keine Doppelarbeit, maximale Effizienz in jedem Workflow.",
      gradient: "from-accent/20 to-accent/5",
      icon: TrendingDown
    },
    {
      title: "Umsatzsteigerung",
      value: "+50%",
      description: "Verbesserte Lead-Qualität und höhere Conversion-Raten durch datengetriebene Insights. KI-Tools identifizieren die besten Chancen für Ihr Wachstum.",
      gradient: "from-secondary/20 to-secondary/5",
      icon: TrendingUp
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left side: Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-2"
        >
          {accordionItems.map((item, index) => {
            const isOpen = openAccordionIndex === index;
            const Icon = item.icon;
            
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <button
                  onClick={() => setOpenAccordionIndex(isOpen ? -1 : index)}
                  className={`
                    w-full p-4 lg:p-5 rounded-xl
                    border-2 transition-all duration-200
                    ${isOpen ? 'border-primary bg-primary/5 shadow-lg' : 'border-border bg-card hover:border-primary/50 hover:bg-card/80'}
                  `}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <Icon className={`w-5 h-5 ${isOpen ? 'text-primary' : 'text-muted-foreground'}`} />
                      <h3
                        className={`
                          text-left text-lg lg:text-xl font-bold
                          transition-colors duration-200
                          ${isOpen ? 'text-primary' : 'text-foreground'}
                        `}
                      >
                        {item.title}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={`
                        flex-shrink-0 w-7 h-7 rounded-full 
                        flex items-center justify-center
                        transition-colors duration-200
                        ${isOpen ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground group-hover:bg-primary/10'}
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
                      opacity: isOpen ? 1 : 0
                    }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
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

        {/* Right side: 3-Card Visualization */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:flex flex-col gap-4"
        >
          {cardData.map((card, index) => {
            const Icon = card.icon;
            
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0
                }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.3 + index * 0.15
                }}
                whileHover={{ 
                  scale: 1.01,
                  x: 4
                }}
                className="cursor-pointer"
              >
                <div className={`
                  p-6 lg:p-8 rounded-2xl
                  bg-gradient-to-br ${card.gradient}
                  border-2 border-border
                  backdrop-blur-sm
                  shadow-lg
                  hover:shadow-xl
                  transition-shadow duration-200
                `}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground">
                      {card.title}
                    </h4>
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-3">
                    {card.value}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};
