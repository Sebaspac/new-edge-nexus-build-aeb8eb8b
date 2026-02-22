import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import teamImageGray from "@/assets/team-presentation.png";
import teamImageColor from "@/assets/team-presentation-color.png";
export const AgencyEdgeSection = () => {
  return <section className="relative py-12 md:py-16 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Label */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#7C3AED]">Agentur mit Edge</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div initial={{
          opacity: 0,
          x: -40
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-black">Mehr als eine Agentur. Ein Vorsprung.</h2>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">Mit unserer "Edge" Methodik denken wir Marke, Prozesse und KI als zusammenhängendes System – damit Unternehmen langfristig steuerbar bleiben und nicht in Tool- oder Anbieterabhängigkeiten geraten.</p>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">Wir bauen keine Einzelleistungen, sondern zusammenhängende Systeme. Studio schafft Klarheit, Entscheidungsfähigkeit und Systemlogik. Lab setzt diese Logik technisch um und baut produktive Systeme – integrierbar und kontrollierbar.</p>

            <div className="pt-4 sm:pt-6 md:pt-8">
              <Link to="/about">
                <motion.button whileHover={{
                scale: 1.02
              }} whileTap={{
                scale: 0.98
              }} className="relative px-6 sm:px-8 py-3 sm:py-4 font-bold uppercase text-xs sm:text-sm tracking-wider bg-white/10 backdrop-blur-md border-2 border-black text-black shadow-[0_8px_32px_0_rgba(124,58,237,0.1)] hover:bg-black hover:text-white transition-all duration-500">
                  ÜBER UNS
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div initial={{
          opacity: 0,
          x: 40
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="relative">
            <div className="relative overflow-hidden aspect-[4/3] group">
              <img src={teamImageGray} alt="Team Präsentation" className="w-full h-full object-cover absolute inset-0" />
              <img alt="Team Präsentation" className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" src="/lovable-uploads/2ab2b3dd-0eee-48c8-b929-f9663e3d7f17.png" />
              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 bg-black/70 px-4 py-2 z-10">
                <p className="text-white text-sm">
                  Leadership Team | Strategy & Tech
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};