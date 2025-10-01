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
    <section ref={containerRef} className="hero-section relative">
      {/* Simplified animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-surface-elevated">
        {/* Reduced number of floating orbs for better performance */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-secondary/15 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />

        {/* Simplified gradient mesh */}
        <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      </div>

      {/* Hero Content */}
      <motion.div 
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-10 container-xl hero-section flex flex-col items-center justify-center text-center will-change-transform"
      >
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >
          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-display-xl font-black mb-6"
          >
            <span className="block overflow-visible py-16">
              <span className="bg-gradient-primary bg-clip-text text-transparent flex justify-center items-center group">
                <span className="inline-block transition-all duration-300 ease-in-out group-hover:-mt-[30px] group-hover:rotate-[-20deg]">B</span>
                <span className="inline-block transition-all duration-300 ease-in-out group-hover:-mt-[40px] group-hover:ml-[10px] group-hover:rotate-[5deg]">R</span>
                <span className="inline-block transition-all duration-300 ease-in-out group-hover:mt-[15px] group-hover:ml-[10px] group-hover:rotate-[12deg]">A</span>
                <span className="inline-block transition-all duration-300 ease-in-out group-hover:-mt-[25px] group-hover:rotate-[5deg]">N</span>
                <span className="inline-block transition-all duration-300 ease-in-out group-hover:-mt-[40px] group-hover:ml-[5px] group-hover:rotate-[-10deg]">D</span>
              </span>
            </span>
            <span className="block text-foreground">
              INTELLIGENCE
            </span>
            <span className="block text-display-lg text-muted-foreground">
              FOR THE DIGITAL AGE
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-body-xl max-w-3xl mx-auto mb-12 leading-relaxed text-base text-slate-50"
          >
            {t('home.hero.description')} <br />
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
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
        </motion.div>
      </motion.div>

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
          className="flex flex-col items-center gap-2 text-muted-foreground cursor-pointer hover-scale"
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