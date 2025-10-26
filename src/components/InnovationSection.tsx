import { motion } from "framer-motion";
import { Lightbulb, Zap } from "lucide-react";

export const InnovationSection = () => {
  const cards = [
    {
      icon: Lightbulb,
      title: "Innovation durch KI",
      description: "Wir transformieren Ihre Prozesse durch intelligente KI-Lösungen und Automatisierung, die messbare Ergebnisse liefern."
    },
    {
      icon: Zap,
      title: "Schnelle Umsetzung",
      description: "Von der Idee zur Implementierung in Rekordzeit – agil, effizient und mit klarem Fokus auf Ihre Business-Ziele."
    }
  ];

  return (
    <section className="innovation-section relative py-24 md:py-32 lg:py-40 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-3xl p-10 border border-slate-200 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-lg text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
