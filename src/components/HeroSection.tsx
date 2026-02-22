import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { LazySplineScene } from "./LazySplineScene";
import CyberneticGridShader from "./ui/cybernetic-grid-shader";
interface HeroSectionProps {
  onContactClick: () => void;
}
export const HeroSection = ({
  onContactClick
}: HeroSectionProps) => {
  const {
    t
  } = useLanguage();
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
    <section className="relative w-full min-h-[100dvh] bg-black" id="hero" style={{
      backgroundColor: '#000000'
    }}>
      <div className="w-full min-h-[100dvh] grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden z-10 bg-black">
        <CyberneticGridShader />
        
        {/* Left Side - CTA Content */}
        <div className="relative flex items-center justify-center lg:items-center lg:justify-start z-20 pt-[80px] lg:pt-[100px]">
          <div className="w-full px-6 sm:px-8 md:px-12 lg:px-12 xl:px-16 max-w-xl md:max-w-2xl lg:max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8
            }} className="block space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 border border-white/20 bg-white/5 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-violet-500" aria-hidden="true"></span>
                <span className="text-[10px] sm:text-xs font-medium tracking-widest text-white/80 uppercase">
                  KI-Agentur aus München
                </span>
              </div>
              
              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-[0.95] tracking-tight uppercase">
                <span className="text-white">STRATEGIE</span><br />
                <span className="text-[#7C3AED]">SYSTEME</span><br />
                <span className="text-white">WACHSTUM</span>
              </h1>
              
              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg text-neutral-400 max-w-xl mx-auto lg:mx-0">
                Wir entwickeln aus Automatisierung, Marke und Plattformen eine integrierte Infrastruktur – für weniger Komplexität und nachhaltiges Wachstum.                   
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start items-center lg:items-start">
                <button onClick={onContactClick} className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-semibold hover:bg-neutral-200 transition-all duration-300 group text-sm sm:text-base w-full sm:w-auto hover:-translate-y-0.5 rounded-none">
                  Projekt Starten
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link to="/about" className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-white font-semibold border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto rounded-none">
                  Über Uns
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side - 3D Spline Scene */}
        <div className="absolute inset-0 lg:relative overflow-hidden z-10 lg:z-20">
          <LazySplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full" threshold={0.25} rootMargin="50px" />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30 hidden lg:flex">
          <span className="text-xs font-medium tracking-widest text-white/50 uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 text-white/50 animate-bounce" />
        </div>

      </div>
    </section>
  </>;
};