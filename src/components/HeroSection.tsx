import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import CyberneticGridShader from "./ui/cybernetic-grid-shader";

interface HeroSectionProps {
  onContactClick: () => void;
}

export const HeroSection = ({ onContactClick }: HeroSectionProps) => {
  const { t } = useLanguage();

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
        className="relative w-full min-h-[100dvh] overflow-hidden"
        id="hero"
        style={{ backgroundColor: "#000000" }}
      >
        {/* Solid black base layer to prevent any white flash */}
        <div className="absolute inset-0 z-0 bg-black" />

        {/* Background Shader (decorative, optional) */}
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <CyberneticGridShader />
        </div>

        {/* Radial purple glow accent */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 40%, rgba(124,58,237,0.25), transparent 70%)",
          }}
        />

        {/* Centered Content */}
        <div className="relative z-20 min-h-[100dvh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-[88px] pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-5xl mx-auto text-center space-y-6 sm:space-y-8"
          >
            {/* Clutch-style Rating */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="text-white/90 text-sm sm:text-base font-medium tracking-wide">
                  Clutch
                </span>
                <div className="flex items-center gap-0.5" aria-label="5 von 5 Sternen">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#7C3AED] text-[#7C3AED]"
                    />
                  ))}
                </div>
              </div>
              <p className="text-xs sm:text-sm text-white/60">
                4.9 Bewertung von 50+ zufriedenen Kunden
              </p>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight text-white">
              Dein Unternehmen braucht mehr
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              als nur Marketing — es braucht{" "}
              <span className="text-[#7C3AED]">Systeme.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Wir entwickeln KI- und Softwaresysteme, die Marke, Struktur und Wachstum verbinden.
              <br className="hidden sm:block" />
              Klare Prozesse, messbare Ergebnisse — in 4 bis 10 Wochen umgesetzt.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-2">
              <button
                onClick={onContactClick}
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 bg-[#7C3AED] text-white font-semibold hover:bg-[#6D28D9] transition-all duration-300 text-sm sm:text-base w-full sm:w-auto hover:-translate-y-0.5 rounded-none"
              >
                Kostenlose KI-Analyse
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 bg-transparent text-white font-semibold border-2 border-white/40 hover:bg-white/10 hover:border-white/70 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto rounded-none"
              >
                Case Studies ansehen
              </Link>
            </div>

            {/* Spots Available Indicator */}
            <div className="flex items-center justify-center gap-2 pt-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7C3AED] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7C3AED]"></span>
              </span>
              <span className="text-xs sm:text-sm text-white/70 font-medium">
                Aktuell 2 Plätze für Q2 verfügbar
              </span>
            </div>

            {/* Trust Line */}
            <div className="pt-6 sm:pt-8">
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/40 font-medium">
                Vertraut von 50+ Unternehmen im DACH-Raum
              </p>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30">
          <span className="text-xs font-medium tracking-widest text-white/50 uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 text-white/50 animate-bounce" />
        </div>
      </section>
    </>
  );
};
