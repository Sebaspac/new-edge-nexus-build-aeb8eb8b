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

        {/* Layout wrapper — content vertically centered, logo cloud peeks at the very bottom */}
        <div className="relative z-20 min-h-[100dvh] flex flex-col px-4 sm:px-6 lg:px-8 pt-[88px] pb-6">
          {/* Centered headline block — takes the available space and centers content */}
          <div className="flex-1 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-[1200px] mx-auto text-center"
            >
              {/* Headline — sized 1:1 to Dapta reference (~96px desktop) */}
              <h1
                className="tracking-tight text-white"
                style={{
                  fontSize: "clamp(2.75rem, 8vw, 6rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                }}
              >
                <span className="block">Dein Unternehmen braucht mehr</span>
                <span
                  className="block bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #c084fc 0%, #a855f7 50%, #7e22ce 100%)",
                  }}
                >
                  als nur Marketing — Systeme.
                </span>
              </h1>

              {/* Subheadline */}
              <p
                className="mt-6 sm:mt-8 mx-auto max-w-2xl text-[#B0B0B0]"
                style={{
                  fontSize: "clamp(1rem, 1.4vw, 1.25rem)",
                  lineHeight: 1.5,
                }}
              >
                Wir entwickeln KI- und Softwaresysteme, die Marke,
                <br className="hidden sm:block" />
                Struktur und Wachstum für den Mittelstand verbinden.
              </p>

              {/* CTA Buttons — squared (hard-edge CI) */}
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <button
                  onClick={onContactClick}
                  className="group inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 bg-[#a855f7] text-white font-semibold hover:bg-[#9333ea] transition-all duration-300 text-base sm:text-lg w-full sm:w-auto rounded-none"
                >
                  Start for free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 bg-transparent text-white font-semibold border-2 border-[#a855f7] hover:bg-[#a855f7]/10 transition-all duration-300 text-base sm:text-lg w-full sm:w-auto rounded-none"
                >
                  Book a Demo
                </Link>
              </div>

              {/* Social Proof bar */}
              <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0 text-white/90">
                <div className="flex items-center gap-2 sm:px-6 text-sm sm:text-[15px]">
                  <div className="flex items-center gap-0.5" aria-label="5 von 5 Sternen">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#a855f7] text-[#a855f7]"
                      />
                    ))}
                  </div>
                  <span>4.9 on Clutch</span>
                </div>
                <span className="hidden sm:block h-4 w-px bg-white/20" aria-hidden />
                <div className="sm:px-6 text-sm sm:text-[15px]">
                  Trusted by{" "}
                  <span className="font-bold text-[#a855f7]">50+</span> companies
                </div>
                <span className="hidden sm:block h-4 w-px bg-white/20" aria-hidden />
                <div className="sm:px-6 text-sm sm:text-[15px]">
                  <span className="font-bold text-[#a855f7]">2 Plätze</span> für Q2
                  verfügbar
                </div>
              </div>
            </motion.div>
          </div>

          {/* Logo Cloud — peeks at the bottom edge so the user senses there's more below */}
          <div className="w-full">
            <p className="text-center text-white/50 font-medium mb-4 text-xs uppercase tracking-[0.2em]">
              Vertraut von führenden Unternehmen
            </p>
            <div className="relative w-full overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

              <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                {duplicatedLogos.map((logo, index) => (
                  <div
                    key={`hero-logo-${index}`}
                    className="flex-shrink-0 flex items-center justify-center h-7 sm:h-9 md:h-10 px-4 sm:px-6 md:px-8"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      loading="lazy"
                      className="h-full w-auto object-contain max-w-[100px] sm:max-w-[130px] md:max-w-[160px] brightness-0 invert opacity-50 hover:opacity-90 transition-opacity duration-300"
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
