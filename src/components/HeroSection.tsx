import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
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
    scrollY
  } = useScroll();
  const containerRef = useRef<HTMLDivElement>(null);

  // Optimized parallax transforms - reduced complexity
  const heroY = useTransform(scrollY, [0, 800], [0, -100]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
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
    <a 
      href="#main-content" 
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
    >
      Skip to main content
    </a>
    <section className="relative w-full" id="hero">
      <div className="w-full relative h-[75vh] lg:h-auto lg:aspect-video" style={{
      position: 'relative'
    }}>
        <div className="absolute inset-0 overflow-hidden" style={{
        background: 'linear-gradient(to bottom right, rgba(139, 92, 246, 0.3), rgba(168, 85, 247, 0.2), rgba(192, 132, 252, 0.1))'
      }}>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
            aria-label="Hero background video showing New Edge brand visual"
          >
            <source src="/assets/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0" style={{
          background: 'linear-gradient(to top, rgba(139, 92, 246, 0.6), rgba(139, 92, 246, 0.2), transparent)'
        }} />
          
          <div className="absolute bottom-0 left-0 p-6 pb-20 sm:p-12 lg:p-16 max-w-full sm:max-w-4xl">
            
            
          </div>

          {/* Scroll Indicator */}
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 1,
          duration: 0.5
        }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
            <motion.div animate={{
            y: [0, 10, 0]
          }} transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }} className="flex flex-col items-center gap-2 cursor-pointer" onClick={scrollToNext} role="button" aria-label="Scroll to next section" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && scrollToNext()}>
              <span className="text-white text-sm font-medium">Scroll</span>
              <ChevronDown className="w-6 h-6 text-white" aria-hidden="true" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  </>;
};