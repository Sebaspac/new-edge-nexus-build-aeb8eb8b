import { motion } from "framer-motion";
import { Lightbulb, Zap, Brain } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export const InnovationSection = () => {
  return (
    <section className="relative py-24 bg-gray-50">
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6">
            Innovation trifft Automatisierung
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Two main cards */}
          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <Card className="h-full bg-white border-l-4 border-transparent hover:border-[#7C3AED] transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-full bg-[#7C3AED]/10 flex items-center justify-center mb-6">
                    <Lightbulb className="w-7 h-7 text-[#7C3AED]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-black">
                    Innovation vorantreiben
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Wir kombinieren kreative Strategien mit modernster KI-Technologie, 
                    um Ihr Unternehmen zukunftssicher zu machen.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <Card className="h-full bg-white border-l-4 border-transparent hover:border-[#7C3AED] transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-full bg-[#7C3AED]/10 flex items-center justify-center mb-6">
                    <Zap className="w-7 h-7 text-[#7C3AED]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-black">
                    Prozesse automatisieren
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Durch intelligente Automatisierung schaffen wir mehr Zeit für 
                    das Wesentliche – Ihr Kerngeschäft.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Vision Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] border-none text-white">
              <CardContent className="p-10 text-center">
                <Brain className="w-16 h-16 mx-auto mb-6 opacity-90" />
                <h3 className="text-3xl md:text-4xl font-black mb-4">
                  Ihre Vision. Unsere Mission.
                </h3>
                <p className="text-xl leading-relaxed max-w-3xl mx-auto opacity-90">
                  New Edge verbindet kreative Exzellenz mit technischer Innovation, 
                  um Unternehmen zu transformieren und nachhaltig erfolgreich zu machen.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
