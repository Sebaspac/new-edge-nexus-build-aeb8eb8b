import sadieKessler from "@/assets/logos/sadie-kessler.jpg";
import circlePhoto from "@/assets/logos/circle-photo.jpg";
import hydeOfficial from "@/assets/logos/hyde-official.jpg";
import dariusCompany from "@/assets/logos/darius-company.jpg";
import museStudio from "@/assets/logos/muse-studio.jpg";
import drAaronLoeb from "@/assets/logos/dr-aaron-loeb.jpg";
import pureDesign from "@/assets/logos/pure-design.jpg";
import seabreeze from "@/assets/logos/seabreeze.jpg";

const logos = [
  { src: sadieKessler, alt: "Sadie Kessler" },
  { src: circlePhoto, alt: "The Circle Photo Studio" },
  { src: hydeOfficial, alt: "Hyde Official" },
  { src: dariusCompany, alt: "Darius Company" },
  { src: museStudio, alt: "Muse Music Studio" },
  { src: drAaronLoeb, alt: "Dr Aaron Loeb" },
  { src: pureDesign, alt: "Pure Design Studio" },
  { src: seabreeze, alt: "Seabreeze Beach Club" },
];

export default function LogoCloud() {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-muted-foreground font-medium mb-10 text-lg">
          Vertraut von führenden Unternehmen
        </p>
      </div>
      
      <div className="relative">
        {/* Gradient overlays for seamless fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        {/* Marquee container */}
        <div className="flex animate-marquee">
          {/* First set of logos */}
          <div className="flex items-center gap-16 px-8 shrink-0">
            {logos.map((logo, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center h-20 md:h-28 w-auto grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-full w-auto object-contain max-w-[180px] md:max-w-[220px]"
                />
              </div>
            ))}
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center gap-16 px-8 shrink-0">
            {logos.map((logo, index) => (
              <div 
                key={`dup-${index}`} 
                className="flex items-center justify-center h-20 md:h-28 w-auto grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-full w-auto object-contain max-w-[180px] md:max-w-[220px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
