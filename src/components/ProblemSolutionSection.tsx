import { motion } from "framer-motion";
import { Clock, TrendingDown, BarChart3, Zap, Sparkles, Target, Rocket } from "lucide-react";

interface ProblemSolutionSectionProps {
  openAccordionIndex: number;
  setOpenAccordionIndex: (index: number) => void;
}

export const ProblemSolutionSection = ({
  openAccordionIndex,
  setOpenAccordionIndex,
}: ProblemSolutionSectionProps) => {
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

  const featureCards = [
    {
      icon: Sparkles,
      title: "Innovation als Prozess",
      description: "Statt einmaliger Projekte bauen wir Ihnen einen nachhaltigen Ablauf für kontinuierliche Verbesserung.",
    },
    {
      icon: Target,
      title: "Ganzheitliche Transformation",
      description: "Wir verbinden Marke, Content und KI-Automatisierung zu einem durchgängigen System.",
    },
    {
      icon: Rocket,
      title: "Kreatives Innovations-Hub",
      description: "Ein Ort, an dem Ideen, Technologien und Design zu echter Zukunftskraft werden.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left side: Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
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
              >
                <button
                  onClick={() => setOpenAccordionIndex(isOpen ? -1 : index)}
                  className={`
                    w-full p-6 rounded-2xl text-left
                    border-2 transition-all duration-300
                    ${
                      isOpen
                        ? "border-[#7C3AED] bg-[#7C3AED]/5 shadow-lg"
                        : "border-gray-200 bg-white hover:border-[#7C3AED]/50"
                    }
                  `}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${
                          isOpen ? "bg-[#7C3AED]" : "bg-gray-100"
                        }`}
                      >
                        <Icon className={`w-6 h-6 ${isOpen ? "text-white" : "text-gray-600"}`} />
                      </div>
                      <h3
                        className={`text-xl font-bold transition-colors duration-300 ${
                          isOpen ? "text-[#7C3AED]" : "text-black"
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isOpen ? "bg-[#7C3AED]" : "bg-gray-200"
                      }`}
                    >
                      <svg
                        className={`w-5 h-5 ${isOpen ? "text-white" : "text-gray-600"}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
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
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-gray-600 leading-relaxed text-lg pl-16">{item.content}</p>
                  </motion.div>
                </button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Right side: Feature Cards */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {featureCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group bg-white rounded-2xl p-8 border-l-4 border-transparent hover:border-[#7C3AED] hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#7C3AED]/10 flex items-center justify-center mb-4 group-hover:bg-[#7C3AED] transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#7C3AED] group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-bold text-black mb-3">{card.title}</h4>
                <p className="text-gray-600 leading-relaxed">{card.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};
