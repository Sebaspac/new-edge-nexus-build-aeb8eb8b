import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const ServicesOverviewSection = () => {
  return (
    <section className="relative py-24 bg-white">
      <div className="container-xl">
        <div className="max-w-7xl mx-auto">
          {/* Large headline with purple accent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-black leading-[1.1] mb-8">
              Wir bringen Ihr <br />
              Unternehmen{" "}
              <span className="bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] bg-clip-text text-transparent">
                an die Spitze
              </span>{" "}
              <br />
              Ihrer Branche
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed font-normal">
              Unser Creative-Tech-Team vereint Strategie-Know-how und Praxiserfahrung, um maßgeschneiderte Kreativ- und
              Automationslösungen zu entwickeln, die auf die spezifischen Bedürfnisse Ihres Unternehmens zugeschnitten sind.
            </p>
          </motion.div>

          {/* Modern callout box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 rounded-3xl p-8 md:p-12 border-l-4 border-[#7C3AED]"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-3">
                  Bereit für die Zukunft?
                </h3>
                <p className="text-lg text-gray-600">
                  Lassen Sie uns gemeinsam Ihre Vision in die Realität umsetzen.
                </p>
              </div>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-[#7C3AED] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#6D28D9] transition-colors"
              >
                Jetzt starten
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
