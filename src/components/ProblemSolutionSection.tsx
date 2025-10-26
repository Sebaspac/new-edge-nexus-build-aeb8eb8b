import { motion } from "framer-motion";
import { Clock, TrendingDown, Rocket, Star } from "lucide-react";

export const ProblemSolutionSection = () => {
  const stats = [
    {
      icon: Clock,
      number: "30%",
      label: "mehr Zeit fürs Kerngeschäft"
    },
    {
      icon: TrendingDown,
      number: "-40%",
      label: "Betriebskosten durch Automatisierung"
    },
    {
      icon: Rocket,
      number: "4x",
      label: "ROI durch intelligente Prozesse"
    },
    {
      icon: Star,
      number: "100%",
      label: "Kundenzufriedenheit"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-8 bg-white rounded-3xl border border-slate-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="inline-flex w-16 h-16 items-center justify-center rounded-2xl bg-primary/10 mb-4">
                <Icon className="w-8 h-8 text-primary" />
              </div>

              {/* Number */}
              <div className="text-5xl font-bold text-slate-900 mb-2">
                {stat.number}
              </div>

              {/* Label */}
              <div className="text-slate-600 leading-relaxed">
                {stat.label}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
