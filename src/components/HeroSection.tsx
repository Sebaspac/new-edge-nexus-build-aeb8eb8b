import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import sadieKessler from "@/assets/logos/sadie-kessler.webp";
import circlePhoto from "@/assets/logos/circle-photo.webp";
import hydeOfficial from "@/assets/logos/hyde-official.webp";
import dariusCompany from "@/assets/logos/darius-company.webp";
import museStudio from "@/assets/logos/muse-studio.webp";
import drAaronLoeb from "@/assets/logos/dr-aaron-loeb.webp";
import pureDesign from "@/assets/logos/pure-design.webp";
import seabreeze from "@/assets/logos/seabreeze.webp";
import albanova from "@/assets/logos/albanova-consulting.png";
import bayMittelstandspreis from "@/assets/logos/bayerischer-mittelstandspreis-2026.jpg";
import clubCli from "@/assets/logos/club-cli.webp";
import becomingYou from "@/assets/logos/becoming-you.png";

interface HeroSectionProps {
  onContactClick: () => void;
}

const heroLogos = [
  { src: sadieKessler, alt: "Sadie Kessler" },
  { src: circlePhoto, alt: "The Circle Photo Studio" },
  { src: hydeOfficial, alt: "Hyde Official" },
  { src: albanova, alt: "AlbaNova Consulting" },
  { src: dariusCompany, alt: "Darius Company" },
  { src: museStudio, alt: "Muse Music Studio" },
  { src: bayMittelstandspreis, alt: "Bayerischer Mittelstandspreis 2026" },
  { src: drAaronLoeb, alt: "Dr Aaron Loeb" },
  { src: clubCli, alt: "Club Cli" },
  { src: pureDesign, alt: "Pure Design Studio" },
  { src: becomingYou, alt: "Becoming You" },
  { src: seabreeze, alt: "Seabreeze Beach Club" },
];

export const HeroSection = ({ onContactClick }: HeroSectionProps) => {
  useLanguage();

  const duplicatedLogos = [...heroLogos, ...heroLogos];

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
        style={{ backgroundColor: "hsl(0 0% 0%)" }}
      >
        {/* Solid black base layer to prevent any white flash */}
        <div className="absolute inset-0 z-0 bg-[hsl(0_0%_0%)]" />

        {/* Stable CSS-only CI background (no WebGL/3D dependency) */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none opacity-70"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 36%, hsl(var(--primary) / 0.34), transparent 68%), linear-gradient(180deg, hsl(0 0% 0%) 0%, hsl(270 40% 6%) 54%, hsl(0 0% 0%) 100%)",
          }}
        />

        <div
          className="absolute inset-0 z-[2] pointer-events-none opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary) / 0.18) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.18) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 70% 50% at 50% 42%, black, transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 50% at 50% 42%, black, transparent 72%)",
          }}
        />

        {/* Layout wrapper: content centered, logos pinned bottom */}
        <div className="relative z-20 min-h-[100dvh] flex flex-col justify-between px-4 sm:px-6 lg:px-8 pt-[88px] pb-10 sm:pb-12">
          {/* spacer to balance vertical rhythm */}
          <div aria-hidden className="hidden md:block" />

          {/* Centered Headline Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-6xl mx-auto text-center space-y-7 sm:space-y-9 md:space-y-10"
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
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#a855f7] text-[#a855f7]"
                    />
                  ))}
                </div>
              </div>
              <p className="text-xs sm:text-sm text-white/60">
                4.9 Bewertung von 50+ zufriedenen Kunden
              </p>
            </div>

            {/* Headline - large like reference */}
            <h1
              className="text-white tracking-tight"
              style={{
                fontSize: "clamp(2.5rem, 8.5vw, 8.75rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.02em",
              }}
            >
              Dein Unternehmen braucht mehr
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              als nur Marketing — es braucht{" "}
              <span className="text-[#a855f7]">Systeme.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-[1.55]">
              Wir entwickeln KI- und Softwaresysteme, die Marke, Struktur und Wachstum
              verbinden.
              <br className="hidden sm:block" />
              Klare Prozesse, messbare Ergebnisse — in 4 bis 10 Wochen umgesetzt.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-2">
              <button
                onClick={onContactClick}
                className="group inline-flex items-center justify-center gap-2 px-7 sm:px-9 py-4 sm:py-5 min-w-[220px] bg-[#a855f7] text-white font-semibold hover:bg-[#9333ea] transition-all duration-300 text-base sm:text-lg w-full sm:w-auto hover:-translate-y-0.5 rounded-none"
              >
                Kostenlose KI-Analyse
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center px-7 sm:px-9 py-4 sm:py-5 min-w-[220px] bg-transparent text-white font-semibold border-2 border-white/40 hover:bg-white/10 hover:border-white/70 transition-all duration-300 text-base sm:text-lg w-full sm:w-auto rounded-none"
              >
                Case Studies ansehen
              </Link>
            </div>

            {/* Spots Available Indicator - directly under CTAs */}
            <div className="flex items-center justify-center gap-2 pt-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a855f7] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a855f7]"></span>
              </span>
              <span className="text-xs sm:text-sm text-white/70 font-medium">
                Aktuell 2 Plätze für Q2 verfügbar
              </span>
            </div>
          </motion.div>

          {/* Logo Cloud — integrated in hero on dark bg */}
          <div className="w-full mt-12 sm:mt-16">
            <p className="text-center text-white/50 font-medium mb-5 sm:mb-6 text-xs sm:text-sm uppercase tracking-[0.2em]">
              Vertraut von führenden Unternehmen
            </p>
            <div className="relative w-full overflow-hidden">
              {/* Fade overlays against black */}
              <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

              <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                {duplicatedLogos.map((logo, index) => (
                  <div
                    key={`hero-logo-${index}`}
                    className="flex-shrink-0 flex items-center justify-center h-8 sm:h-10 md:h-12 px-4 sm:px-6 md:px-8"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      loading="lazy"
                      className="h-full w-auto object-contain max-w-[110px] sm:max-w-[140px] md:max-w-[170px] brightness-0 invert opacity-50 hover:opacity-90 transition-opacity duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 z-30 pointer-events-none">
          <span className="text-[10px] font-medium tracking-widest text-white/40 uppercase">
            Scroll
          </span>
          <ChevronDown className="w-4 h-4 text-white/40 animate-bounce" />
        </div>
      </section>
    </>
  );
};
