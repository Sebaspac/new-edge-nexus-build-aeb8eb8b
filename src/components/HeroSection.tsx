import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { LazySplineScene } from "./LazySplineScene";
import CyberneticGridShader from "./ui/cybernetic-grid-shader";
import { SplashCursor } from "./ui/splash-cursor";
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
    <section className="relative w-full min-h-screen bg-slate-900" id="hero">
      <SplashCursor />
      <div className="w-full h-screen grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden bg-slate-900 z-10">
        <CyberneticGridShader />
        
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900/80 z-10 pointer-events-none" />
        
        {/* Left Side - CTA Content */}
        <div className="relative flex items-end lg:items-center z-20">
          <div className="w-full px-6 pb-12 md:pb-16 lg:pb-0 lg:px-12 xl:px-16 max-w-2xl lg:mt-auto lg:mb-auto text-center lg:text-left">
            <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8
            }} className="block space-y-6 md:space-y-8 lg:space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-violet-500"></span>
                <span className="text-xs font-medium tracking-widest text-white/80 uppercase">
                  Innovationen & Automatisierung
                </span>
              </div>
              
              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight uppercase">
                <span className="text-white">KI- & Marketing</span><br />
                <span className="text-[#7C3AED]">Agentur</span><br />
                <span className="text-white">für KMU.</span>
              </h1>
              
              {/* Description */}
              <p className="text-base md:text-lg text-neutral-400 max-w-xl mx-auto lg:mx-0">
                New Edge ist Ihre Innovationsagentur für den Mittelstand. Wir verbinden Strategie, Kreation und Prozessautomatisierung für messbares Wachstum.
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <button 
                  onClick={onContactClick} 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold hover:bg-neutral-200 transition-colors group"
                >
                  Projekt Starten
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link 
                  to="/about"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold border border-white/30 hover:bg-white/10 transition-colors"
                >
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