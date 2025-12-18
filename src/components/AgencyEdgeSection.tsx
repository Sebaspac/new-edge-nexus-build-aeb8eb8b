import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import teamImage from "@/assets/team-presentation.png";

export const AgencyEdgeSection = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="container-xl">
        {/* Label */}
        <div className="inline-block px-4 py-1 mb-8 border border-[#7C3AED]">
          <span className="text-sm font-medium tracking-wider uppercase text-[#7C3AED]">Agentur mit Edge</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black">
              New Edge steht für strategisches Design, das Marken stärkt und Prozesse beschleunigt.
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Mit unserer "Edge Methodology" verbinden wir Purpose, Markencharakter und KI-gestützte User Experience zu digitalen Markenerlebnissen, die berühren, überzeugen und nachhaltig im Gedächtnis bleiben. Wir sind keine klassische Agentur. Wir sind Ihr Tech-Partner.
            </p>

            <div className="pt-8">
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-black text-white px-8 py-4 font-bold uppercase text-sm tracking-wider hover:bg-gray-900 transition-colors duration-300"
                >
                  ÜBER UNS
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                src={teamImage}
                alt="Team Präsentation"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 bg-black/70 px-4 py-2">
                <p className="text-white text-sm">
                  Leadership Team | Strategy & Tech
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
