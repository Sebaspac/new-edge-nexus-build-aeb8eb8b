import { motion } from "framer-motion";

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
    content: "Routinearbeit fällt weg – Sie gewinnen bis zu 30 % Fokuszeit zurück."
  }, {
    title: "Kosten senken",
    content: "Fehler und Doppelarbeit sinken, Prozesse laufen günstiger."
  }, {
    title: "Mehr Umsatz",
    content: "Bessere Leads, höhere Conversion – spürbar mehr Umsatz."
  }, {
    title: "Transparenz",
    content: "Echtzeit-Dashboards zeigen KPIs für schnelle Entscheidungen."
  }];
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        {accordionItems.map((item, index) => {
          const isOpen = openAccordionIndex === index;
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
                  w-full p-6 lg:p-8 rounded-2xl
                  border-2 transition-all duration-300
                  ${isOpen 
                    ? 'border-primary bg-primary/5 shadow-lg' 
                    : 'border-border bg-card hover:border-primary/50 hover:bg-card/80'
                  }
                `}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className={`
                    text-left text-2xl lg:text-3xl font-bold
                    transition-colors duration-300
                    ${isOpen ? 'text-primary' : 'text-foreground'}
                  `}>
                    {item.title}
                  </h3>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`
                      flex-shrink-0 w-8 h-8 rounded-full 
                      flex items-center justify-center
                      transition-colors duration-300
                      ${isOpen 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-muted-foreground group-hover:bg-primary/10'
                      }
                    `}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                  }}
                  className="overflow-hidden"
                >
                  <div className="pt-4">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              </button>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};