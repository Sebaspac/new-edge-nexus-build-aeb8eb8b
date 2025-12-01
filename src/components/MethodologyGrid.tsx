import { motion } from "framer-motion";
import { Search, Palette, Zap, Users } from "lucide-react";

export const MethodologyGrid = () => {
  const methodologies = [
    {
      icon: Search,
      title: "New Edge® Audit",
      subtitle: "Positionierungsanalyse",
      description: "Tiefgreifende Analyse Ihrer Marktposition und Wettbewerbsvorteile",
    },
    {
      icon: Palette,
      title: "Markenstrategie",
      subtitle: "Brand Growth",
      description: "Entwicklung einer einzigartigen Markenstrategie für nachhaltiges Wachstum",
    },
    {
      icon: Zap,
      title: "AI Automation",
      subtitle: "KI & Prozessautomation",
      description: "Intelligente Automatisierung zur Effizienzsteigerung Ihrer Prozesse",
    },
    {
      icon: Users,
      title: "Markeninteraktion",
      subtitle: "UX & UI Design",
      description: "Nutzerzentrierte Gestaltung für optimale Kundenerlebnisse",
    },
  ];

  return (
    <section className="relative py-24 bg-white">
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#7C3AED] text-sm font-bold uppercase tracking-widest mb-4">
            Unsere Methodik
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6">
            Vier Säulen des Erfolgs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Von der Analyse bis zur Umsetzung – ein ganzheitlicher Ansatz
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methodologies.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#7C3AED] hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-[#7C3AED]/10 flex items-center justify-center mb-6 group-hover:bg-[#7C3AED] transition-colors duration-300">
                  <Icon className="w-7 h-7 text-[#7C3AED] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-2">{method.title}</h3>
                <p className="text-sm font-semibold text-[#7C3AED] mb-4">{method.subtitle}</p>
                <p className="text-gray-600 leading-relaxed">{method.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
