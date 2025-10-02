import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface HeroSectionProps {
  onContactClick: () => void;
}

export const HeroSection = ({ onContactClick }: HeroSectionProps) => {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const containerRef = useRef<HTMLDivElement>(null);

  // Optimized parallax transforms - reduced complexity
  const heroY = useTransform(scrollY, [0, 800], [0, -100]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  const scrollToNext = () => {
    const nextSection = document.querySelector('.innovation-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full" style={{ marginTop: '80px' }}>
      <div className="w-full" style={{ paddingTop: '56.25%', position: 'relative' }}>
        <div className="absolute inset-0 overflow-hidden" style={{ background: 'linear-gradient(to bottom right, rgba(139, 92, 246, 0.3), rgba(168, 85, 247, 0.2), rgba(192, 132, 252, 0.1))' }}>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/assets/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(139, 92, 246, 0.6), rgba(139, 92, 246, 0.2), transparent)' }} />
          
          <div className="absolute bottom-0 left-0 p-8 sm:p-12 lg:p-16 max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 leading-tight text-white"
            >
              <span className="block">BRAND</span>
              <span className="block">INTELLIGENCE</span>
              <span className="block italic font-black" style={{ background: 'linear-gradient(to right, #8b5cf6, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                FOR THE DIGITAL AGE
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl leading-relaxed"
            >
              Wir helfen Marken, sichtbar zu werden, Prozesse zu automatisieren – und den Wandel durch Innovation aktiv zu gestalten.
            </motion.p>
          </div>
        </div>
      </div>

      {/* CTA Buttons - Below Video */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            onClick={onContactClick} 
            size="lg" 
            className="group btn-primary hover-magnetic"
          >
            Projekt starten
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="outline" size="lg" className="btn-secondary hover-glow" asChild>
            <Link to="/services">
              Unsere Services entdecken
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-300 cursor-pointer hover-scale"
          onClick={scrollToNext}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-body-sm">Scroll to explore</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};