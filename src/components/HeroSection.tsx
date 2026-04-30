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

        {/* Layout 1:1 Dapta — headline starts ~28% from top, large spacing between blocks */}
        <div className="relative z-20 min-h-[100dvh] flex flex-col items-center px-4 sm:px-6 lg:px-8 pt-[28vh] pb-12">
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

            {/* Subheadline — generous spacing like Dapta */}
            <p
              className="mt-10 sm:mt-12 mx-auto max-w-2xl text-[#B0B0B0]"
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
            <div className="mt-14 sm:mt-16 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <button
                onClick={onContactClick}
                className="group inline-flex items-center justify-center gap-2 px-10 sm:px-12 py-4 sm:py-5 bg-[#a855f7] text-white font-semibold hover:bg-[#9333ea] transition-all duration-300 text-base sm:text-lg w-full sm:w-auto rounded-none"
              >
                Start for free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center px-10 sm:px-12 py-4 sm:py-5 bg-transparent text-white font-semibold border-2 border-[#a855f7] hover:bg-[#a855f7]/10 transition-all duration-300 text-base sm:text-lg w-full sm:w-auto rounded-none"
              >
                Book a Demo
              </Link>
            </div>

            {/* Social Proof bar — far below CTAs like Dapta */}
            <div className="mt-16 sm:mt-20 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0 text-white/90">
              <div className="flex items-center gap-2 sm:px-8 text-sm sm:text-[15px]">
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
              <span className="hidden sm:block h-5 w-px bg-white/20" aria-hidden />
              <div className="sm:px-8 text-sm sm:text-[15px]">
                Trusted by{" "}
                <span className="font-bold text-[#a855f7]">50+</span> companies
              </div>
              <span className="hidden sm:block h-5 w-px bg-white/20" aria-hidden />
              <div className="sm:px-8 text-sm sm:text-[15px]">
                <span className="font-bold text-[#a855f7]">2 Plätze</span> für Q2
                verfügbar
              </div>
            </div>
          </motion.div>
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
