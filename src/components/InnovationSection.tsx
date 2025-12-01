import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Brain, Zap, ArrowRight } from "lucide-react";

export const InnovationSection = () => {
  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      <div className="container-xl">
        {/* Top Grid: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Left Card - Innovationsagentur */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-12">
                <div className="w-12 h-12 mb-8">
                  <Lightbulb className="w-12 h-12 text-black" strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
                  Innovationsagentur
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Kreative Strategien treffen auf modernste KI-Technologie. Als Innovationsagentur bauen wir das Fundament für Ihre Zukunft.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Card - Vision Mission (Large Dark Card) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="h-full bg-black border-0 shadow-lg relative overflow-hidden">
              <CardContent className="p-12 relative z-10">
                <div className="w-16 h-16 mb-8">
                  <Brain className="w-16 h-16 text-[#7C3AED]" strokeWidth={1.5} />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Ihre Vision. Unsere Mission.
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  New Edge ist mehr als eine Agentur. Wir sind Ihr technologischer Partner, der kreative Exzellenz mit intelligenter KI Automatisierung verbindet.
                </p>
              </CardContent>
              {/* Decorative Circle */}
              <div className="absolute top-1/2 right-[-100px] w-[300px] h-[300px] rounded-full border border-[#7C3AED]/20 opacity-50" />
              {/* Robot Icon in Circle */}
              <div className="absolute top-1/2 right-[50px] transform -translate-y-1/2">
                <div className="w-32 h-32 rounded-full border-2 border-[#7C3AED]/30 flex items-center justify-center">
                  <div className="w-16 h-16 text-[#7C3AED]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="7" y="7" width="10" height="10" rx="2" />
                      <circle cx="9.5" cy="10.5" r="1" fill="currentColor" />
                      <circle cx="14.5" cy="10.5" r="1" fill="currentColor" />
                      <path d="M12 7V4M8 7L6 5M16 7l2-2M9 17v3M15 17v3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Bottom Card - Prozessautomatisierung (Full Width) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300 group cursor-pointer">
            <CardContent className="p-12">
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-8 flex-1">
                  <div className="w-12 h-12 flex-shrink-0">
                    <Zap className="w-12 h-12 text-black" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
                      Prozessautomatisierung für Firmen
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
                      Durch intelligente Automatisierung schaffen wir mehr Zeit für das Wesentliche – Ihr Kerngeschäft. Wir analysieren, optimieren und implementieren Workflows, die skalieren.
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0 ml-8">
                  <ArrowRight className="w-8 h-8 text-black group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
