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
    <section className="relative w-full min-h-screen" id="hero">
      <div className="w-full h-screen grid lg:grid-cols-2">
        {/* Left Side - CTA Content */}
        <div className="relative flex items-end lg:items-center bg-background/95 backdrop-blur-sm">
          <div className="w-full px-6 pb-24 lg:pb-0 lg:px-12 xl:px-16 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-sm font-medium text-primary">KI Beratung</span>
              </div>
              
              <h1 className="text-display-xl lg:text-[64px] xl:text-[72px] leading-tight">
                Innovate Today,<br />
                Lead Tomorrow.
              </h1>
              
              <p className="text-body-lg text-muted-foreground max-w-xl">
                Von der ersten Beratung bis zur vollständigen Implementierung – New Edge ist Ihr strategischer Partner für den erfolgreichen Einsatz von Künstlicher Intelligenz.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  onClick={onContactClick}
                  className="group"
                >
                  Kontakt
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  asChild
                >
                  <Link to="/about">Über Uns</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Video */}
        <div className="relative overflow-hidden bg-gradient-to-br from-primary/30 via-purple-500/20 to-pink-500/10">
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
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 cursor-pointer" 
            onClick={scrollToNext} 
            role="button" 
            aria-label="Scroll to next section" 
            tabIndex={0} 
            onKeyDown={(e) => e.key === 'Enter' && scrollToNext()}
          >
            <span className="text-foreground text-sm font-medium">Scroll</span>
            <ChevronDown className="w-6 h-6 text-foreground" aria-hidden="true" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  </>;
};