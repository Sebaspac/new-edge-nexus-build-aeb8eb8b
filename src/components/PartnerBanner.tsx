import { useState } from "react";
import bmpLogo from "@/assets/logos/bayerischer-mittelstandspreis.jpg";
import bafaLogo from "@/assets/logos/bafa-logo.png";
import idcLogo from "@/assets/logos/idc-logo.png";

const partners = [
  { src: bmpLogo, alt: "Bayerischer Mittelstandspreis 2026", label: "Partner von" },
  { src: bafaLogo, alt: "BAFA förderfähig", label: "Akkreditiert durch" },
  { src: idcLogo, alt: "International anerkannt", label: "International anerkannt" },
];

export const PartnerBanner = () => {
  const [hiddenLogos, setHiddenLogos] = useState<Record<string, boolean>>({});

  return (
    <section className="py-10 md:py-14 bg-background border-t border-border" data-section="partner-banner">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center">
          {partners.map((partner) => (
            <div key={partner.alt} className="flex flex-col items-center gap-3 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                {partner.label}
              </span>
              {hiddenLogos[partner.alt] ? (
                <span className="text-sm font-medium text-foreground">{partner.alt}</span>
              ) : (
                <img
                  src={partner.src}
                  alt={partner.alt}
                  loading="lazy"
                  decoding="async"
                  onError={() =>
                    setHiddenLogos((prev) => ({ ...prev, [partner.alt]: true }))
                  }
                  className="h-12 sm:h-14 md:h-16 w-auto object-contain"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
