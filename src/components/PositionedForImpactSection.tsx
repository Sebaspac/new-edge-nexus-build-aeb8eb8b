import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import foundersColorImage from "@/assets/founders-color.png";

export const PositionedForImpactSection = () => {
  return <section className="relative py-32 bg-white overflow-hidden">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Founders Image */}
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
        }} className="relative group cursor-pointer">
            <div className="relative overflow-hidden aspect-[4/3]">
              <img 
                alt="New Edge Founders" 
                className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105" 
                src={foundersColorImage} 
              />
              
              {/* Caption Overlay */}
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm px-6 py-3">
                <p className="text-sm font-bold text-black uppercase tracking-wider">
                  New Edge Founders
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
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
        }} className="space-y-8">
            {/* Main Headline */}
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] text-black">
              Positioned for{" "}
              <span className="text-[#7C3AED]">Impact.</span>
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              Erfolg ist das Ergebnis einer klaren KI-Strategie und einer authentischen Markenidentität. Als Expert:innen für Automatisierung, Branding und Markeninteraktion unterstützen wir Unternehmen dabei, ihre unverwechselbare Position im Markt zu finden und durch Technologie zu festigen.
            </p>

            {/* CTA Button */}
            <div className="pt-8">
              <Link to="/#contact-section" onClick={() => {
              setTimeout(() => {
                document.querySelector('#contact-section')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }, 100);
            }}>
                <motion.button whileHover={{
                scale: 1.02
              }} whileTap={{
                scale: 0.98
              }} className="bg-black text-white px-8 py-4 font-bold uppercase text-sm tracking-wider hover:bg-gray-900 transition-colors duration-300">
                  FINDE DEINE EDGE
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};