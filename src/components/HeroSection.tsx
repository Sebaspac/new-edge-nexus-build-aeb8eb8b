import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { LazySplineScene } from "./LazySplineScene";
import CyberneticGridShader from "./ui/cybernetic-grid-shader";
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
    <section ref={container} className="relative w-full min-h-screen bg-slate-900" id="hero">
      <div className="pointer-events-none absolute inset-0 z-0">
        <SplashCursor />
      </div>
      <motion.div style={style} className="w-full h-screen grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden bg-slate-900 pointer-events-auto">
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
            }} className="block space-y-4 md:space-y-6 lg:space-y-4">
              
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] xl:text-[72px] leading-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                Innovate Today,<br />
                Lead Tomorrow.
              </h1>
              
              <p className="text-sm sm:text-base lg:text-lg text-neutral-300 max-w-xl mx-auto lg:mx-0">Von der ersten Beratung bis zur vollständigen Implementierung – New Edge ist die Creative-Tech-Agentur, die Strategie, Kreation und Automatisierung verbindet.</p>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-6 justify-center lg:justify-start">
                <Button size="lg" onClick={onContactClick} className="group">
                  Kontakt
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/about">Über Uns</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side - 3D Spline Scene */}
        <div className="absolute inset-0 lg:relative overflow-hidden z-10 lg:z-20">
          <LazySplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" 
            className="w-full h-full"
            threshold={0.1}
            rootMargin="100px"
          />
        </div>

        {/* Scroll Indicator */}
        <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 1,
          duration: 0.5
        }} className="absolute bottom-20 sm:bottom-24 md:bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <motion.div animate={{
            y: [0, 10, 0]
          }} transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }} className="flex flex-col items-center gap-2 cursor-pointer" onClick={scrollToNext} role="button" aria-label="Scroll to next section" tabIndex={0} onKeyDown={e => e.key === 'Enter' && scrollToNext()}>
            <span className="text-white text-sm font-medium">Scroll</span>
            <ChevronDown className="w-6 h-6 text-white" aria-hidden="true" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  </>;
};