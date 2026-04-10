import { useState } from "react";
import bmpLogo from "@/assets/logos/bayerischer-mittelstandspreis.jpg";
import bafaLogo from "@/assets/logos/bafa-logo.png";
import idcLogo from "@/assets/logos/idc-logo.png";

const partners = [
  { src: bmpLogo, alt: "Bayerischer Mittelstandspreis 2026", label: "Partner von" },
  { src: bafaLogo, alt: "International anerkannt", label: "International anerkannt" },
  { src: idcLogo, alt: "BAFA förderfähig", label: "BAFA förderfähig" },
];

export const PartnerBanner = () => {
  const [hiddenLogos, setHiddenLogos] = useState<Record<string, boolean>>({});

  return (
    <section className="py-8 md:py-14 bg-background border-t border-border" data-section="partner-banner">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="flex flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 flex-wrap">
          {partners.map((partner) => (
            <div key={partner.alt} className="flex flex-col items-center gap-2 text-center min-w-0">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-muted-foreground whitespace-nowrap">{partner.label}</span>
              {hiddenLogos[partner.alt] ? (
                <span className="text-xs sm:text-sm font-medium text-foreground">{partner.alt}</span>
              ) : (
                <img
                  src={partner.src}
                  alt={partner.alt}
                  loading="lazy"
                  decoding="async"
                  onError={() => setHiddenLogos((prev) => ({ ...prev, [partner.alt]: true }))}
                  className="h-8 sm:h-12 md:h-16 w-auto object-contain"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
