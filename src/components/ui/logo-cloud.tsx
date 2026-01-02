import sadieKessler from "@/assets/logos/sadie-kessler.jpg";
import circlePhoto from "@/assets/logos/circle-photo.jpg";
import hydeOfficial from "@/assets/logos/hyde-official.jpg";
import dariusCompany from "@/assets/logos/darius-company.jpg";
import museStudio from "@/assets/logos/muse-studio.jpg";
import drAaronLoeb from "@/assets/logos/dr-aaron-loeb.jpg";
import pureDesign from "@/assets/logos/pure-design.jpg";
import seabreeze from "@/assets/logos/seabreeze.jpg";

// ✅ Einfach neue Logos hier hinzufügen - die Marquee passt sich automatisch an
const logos = [
  { src: sadieKessler, alt: "Sadie Kessler" },
  { src: circlePhoto, alt: "The Circle Photo Studio" },
  { src: hydeOfficial, alt: "Hyde Official" },
  { src: dariusCompany, alt: "Darius Company" },
  { src: museStudio, alt: "Muse Music Studio" },
  { src: drAaronLoeb, alt: "Dr Aaron Loeb" },
  { src: pureDesign, alt: "Pure Design Studio" },
  { src: seabreeze, alt: "Seabreeze Beach Club" },
  // Neue Logos einfach hier hinzufügen:
  // { src: neuesLogo, alt: "Neuer Kunde" },
];

const LogoItem = ({ src, alt }: { src: string; alt: string }) => (
  <div className="flex-shrink-0 flex items-center justify-center h-12 sm:h-16 md:h-20 lg:h-24 px-4 sm:px-6 md:px-8">
    <img
      src={src}
      alt={alt}
      className="h-full w-auto object-contain max-w-[100px] sm:max-w-[140px] md:max-w-[180px] lg:max-w-[200px] grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
    />
  </div>
);

export default function LogoCloud() {
  // Logos für nahtlosen Loop duplizieren
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-24 overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-center text-muted-foreground font-medium mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base md:text-lg">
          Vertraut von führenden Unternehmen
        </p>
      </div>
      
      <div className="relative w-full">
        {/* Gradient overlays für seamless fade */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 lg:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 lg:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        {/* Marquee container mit CSS Animation */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {duplicatedLogos.map((logo, index) => (
            <LogoItem key={`logo-${index}`} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>
    </section>
  );
}
