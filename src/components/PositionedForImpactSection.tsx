import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import foundersColorImage from "@/assets/founders-color.webp";
export const PositionedForImpactSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.12]);
  return <section className="relative py-12 md:py-20 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-center">
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
        }} className="relative group cursor-pointer order-2 lg:order-1">
            <div className="relative overflow-hidden aspect-[4/3]">
              <img alt="New Edge Founders" className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105" src={foundersColorImage} />
              
              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 bg-black px-3 py-1.5 sm:px-4 sm:py-2">
                <p className="text-xs sm:text-sm font-medium text-white">
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
        }} className="space-y-4 sm:space-y-6 md:space-y-8 order-1 lg:order-2">
            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-[0.95] text-black">
              Positioned for{" "}
              <span className="text-[#7C3AED]">Impact.</span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
              Erfolg entsteht nicht durch mehr Tools, sondern durch klare Systeme.
              <br /><br />
              Wir helfen Unternehmen, ihre operative Realität, Entscheidungslogik und Markenführung in kontrollierbare KI- und Softwaresysteme zu überführen – statt in isolierte Lösungen oder externe Abhängigkeiten.
            </p>

            {/* CTA Button */}
            <div className="pt-4 sm:pt-6 md:pt-8">
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
              }} className="relative px-6 sm:px-8 py-3 sm:py-4 font-bold uppercase text-xs sm:text-sm tracking-wider bg-white/10 backdrop-blur-md border-2 border-black text-black shadow-[0_8px_32px_0_rgba(124,58,237,0.1)] hover:bg-black hover:text-white transition-all duration-500">
                  VORSPRUNG SICHERN 
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};