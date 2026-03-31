import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { LazySplineScene } from "./LazySplineScene";
import CyberneticGridShader from "./ui/cybernetic-grid-shader";
import neBrandLogo from "@/assets/ne-logo-brand.png";
interface HeroSectionProps {
  onContactClick: () => void;
}
export const HeroSection = ({ onContactClick }: HeroSectionProps) => {
  const { t } = useLanguage();
  const scrollToNext = () => {
    const nextSection = document.querySelector(".innovation-section");
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      {/* Skip Link for Keyboard Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
      >
        Skip to main content
      </a>
      <section
        className="relative w-full min-h-[100dvh] bg-black"
        id="hero"
        style={{
          backgroundColor: "#000000",
        }}
      >
        <div className="w-full min-h-[100dvh] grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden z-10 bg-black">
          <CyberneticGridShader />

          {/* Left Side - CTA Content */}
          <div className="relative flex items-center justify-center lg:items-center lg:justify-start z-20 pt-[72px] lg:pt-[80px]">
            <div className="w-full px-6 sm:px-8 md:px-12 lg:pl-[calc((100vw-1200px)/2+32px)] xl:pl-[calc((100vw-1200px)/2+32px)] lg:pr-4 lg:max-w-none text-center lg:text-left">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="block space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-4"
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 border border-white/20 bg-white/5 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-violet-500" aria-hidden="true"></span>
                  <span className="text-[10px] sm:text-xs font-medium tracking-widest text-white/80 uppercase">
                    KI-Agentur aus München
                  </span>
                </div>

                {/* Headline */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black leading-[0.95] tracking-tight uppercase">
                  <span className="text-white">Dein Partner</span>
                  <br />
                  <span className="text-white">für systeme, </span>
                  <span className="text-[#7C3AED]">Brand & KI</span>
                </h1>

                {/* Subheadline */}
                <h2 className="text-xs sm:text-sm md:text-base text-neutral-400 max-w-lg mx-auto lg:mx-0 font-normal">
                  Wir bauen keine Slides. Wir bauen Systeme – für Marke, Web und künstliche Intelligenz für messbare
                  Ergebnisse.
                </h2>

                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 border border-white/15 bg-white/5 backdrop-blur-sm text-[10px] sm:text-xs font-medium tracking-wide text-white/70 uppercase">
                    Förderbar bis 80% über BAFA
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 border border-white/15 bg-white/5 backdrop-blur-sm text-[10px] sm:text-xs font-medium tracking-wide text-white/70 uppercase">
                    Umsetzung in 4–10 Wochen
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center lg:justify-start items-center lg:items-start">
                  <button
                    onClick={onContactClick}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-semibold hover:bg-neutral-200 transition-all duration-300 group text-sm w-full sm:w-auto hover:-translate-y-0.5 rounded-none"
                  >
                    Projekt Starten
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <Link
                    to="/about"
                    className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-white font-semibold border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-sm w-full sm:w-auto rounded-none"
                  >
                    Über Uns
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Side - 3D Spline Scene */}
          <div className="absolute inset-0 lg:relative overflow-hidden z-10 lg:z-20">
            <LazySplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
              threshold={0.25}
              rootMargin="50px"
            />
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30 hidden lg:flex">
            <span className="text-xs font-medium tracking-widest text-white/50 uppercase">Scroll</span>
            <ChevronDown className="w-5 h-5 text-white/50 animate-bounce" />
          </div>
        </div>
      </section>
    </>
  );
};
