import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { LazySplineScene } from "./LazySplineScene";
import { SplashCursor } from "./ui/splash-cursor";
import { useHeroScrollAnimation } from "@/hooks/useHeroScrollAnimation";
interface HeroSectionProps {
  onContactClick: () => void;
}
export const HeroSection = ({
  onContactClick
}: HeroSectionProps) => {
  const {
    t
  } = useLanguage();
  const {
    container,
    style
  } = useHeroScrollAnimation();
  const scrollToNext = () => {
    const nextSection = document.querySelector('.innovation-section');
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <>
    {/* Skip Link for Keyboard Navigation */}
    <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md">
      Skip to main content
    </a>
    <section ref={container} className="relative w-full min-h-[90vh] bg-gradient-to-br from-slate-50 via-white to-slate-100" id="hero">
      <SplashCursor />
      
      {/* Background Spline Scene */}
      <div className="absolute inset-0 opacity-40 z-0">
        <LazySplineScene 
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" 
          className="w-full h-full"
          threshold={0.25}
          rootMargin="50px"
        />
      </div>
      
      <motion.div style={style} className="relative w-full min-h-[90vh] flex items-center justify-center z-10">
        
        {/* Centered Content */}
        <div className="relative flex items-center justify-center z-20 w-full">
          <div className="w-full px-6 md:px-8 lg:px-12 max-w-5xl text-center">
            <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8
            }} className="space-y-6 md:space-y-8">
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 bg-clip-text text-transparent leading-[1.1]">
                Innovate Today,<br />
                Lead Tomorrow.
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
                Von der ersten Beratung bis zur vollständigen Implementierung – New Edge ist die Creative-Tech-Agentur, die Strategie, Kreation und Automatisierung verbindet.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
                <Button 
                  size="lg" 
                  onClick={onContactClick} 
                  className="group bg-slate-900 hover:bg-slate-800 text-white px-10 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Projekt starten
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="ghost" 
                  asChild
                  className="text-slate-600 hover:text-slate-900 border-2 border-slate-200 hover:border-slate-300 px-10 py-6 text-lg rounded-full"
                >
                  <Link to="/about">Mehr erfahren</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1, duration: 0.5 }} 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30"
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} 
            className="flex flex-col items-center gap-2 cursor-pointer group" 
            onClick={scrollToNext} 
            role="button" 
            aria-label="Scroll to next section" 
            tabIndex={0} 
            onKeyDown={e => e.key === 'Enter' && scrollToNext()}
          >
            <div className="w-8 h-12 rounded-full border-2 border-slate-300 flex items-start justify-center p-2">
              <motion.div 
                animate={{ y: [0, 12, 0] }} 
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 bg-slate-900 rounded-full"
              />
            </div>
            <ChevronDown className="w-5 h-5 text-slate-600 group-hover:text-slate-900 transition-colors" aria-hidden="true" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  </>;
};