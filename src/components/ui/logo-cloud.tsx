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

const logos = [
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

const LogoItem = ({ src, alt }: { src: string; alt: string }) => (
  <div className="flex-shrink-0 flex items-center justify-center h-10 sm:h-12 md:h-14 lg:h-16 px-6 sm:px-10 md:px-14 lg:px-16">
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="h-full w-auto object-contain max-w-[120px] sm:max-w-[160px] md:max-w-[200px] lg:max-w-[220px] brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
    />
  </div>
);

export default function LogoCloud() {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="bg-black py-20 sm:py-24 md:py-32 overflow-hidden">
      {/* Headline like Dapta */}
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 text-center mb-12 sm:mb-16 md:mb-20">
        <h2
          className="text-white tracking-tight"
          style={{
            fontSize: "clamp(2rem, 5vw, 4rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Vertraut von <span className="text-[#a855f7]">50+ Unternehmen</span>
        </h2>
      </div>

      {/* Marquee with thin purple lines top/bottom */}
      <div
        className="relative w-full py-8 sm:py-10 md:py-12"
        style={{
          borderTop: "1px solid rgba(168, 85, 247, 0.35)",
          borderBottom: "1px solid rgba(168, 85, 247, 0.35)",
        }}
      >
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {duplicatedLogos.map((logo, index) => (
            <LogoItem key={`logo-${index}`} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>
    </section>
  );
}
