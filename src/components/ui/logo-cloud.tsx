import sadieKessler from "@/assets/logos/sadie-kessler.webp";
import circlePhoto from "@/assets/logos/circle-photo.webp";
import hydeOfficial from "@/assets/logos/hyde-official.webp";
import dariusCompany from "@/assets/logos/darius-company.webp";
import museStudio from "@/assets/logos/muse-studio.webp";
import drAaronLoeb from "@/assets/logos/dr-aaron-loeb.webp";
import pureDesign from "@/assets/logos/pure-design.webp";
import seabreeze from "@/assets/logos/seabreeze.webp";
import albanova from "@/assets/logos/albanova-consulting.png";
import bayMittelstandspreis from "@/assets/logos/bayerischer-mittelstandspreis-2026.png";
import clubCli from "@/assets/logos/club-cli.webp";
import becomingYou from "@/assets/logos/becoming-you.png";
import eliteAesthetic from "@/assets/logos/elite-aesthetic.png";


const SANS =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";

const logos = [
  { src: sadieKessler, alt: "Sadie Kessler" },
  { src: circlePhoto, alt: "The Circle Photo Studio" },
  { src: hydeOfficial, alt: "Hyde Official" },
  { src: albanova, alt: "AlbaNova Consulting" },
  { src: dariusCompany, alt: "Darius Company" },
  { src: museStudio, alt: "Muse Music Studio" },
  { src: bayMittelstandspreis, alt: "Bayerischer Mittelstandspreis 2026", height: 48 },
  { src: drAaronLoeb, alt: "Dr Aaron Loeb" },
  { src: clubCli, alt: "Club Cli" },
  { src: pureDesign, alt: "Pure Design Studio" },
  { src: becomingYou, alt: "Becoming You" },
  { src: seabreeze, alt: "Seabreeze Beach Club" },
  { src: eliteAesthetic, alt: "Elite Aesthetic" },
  
];

export default function LogoCloud() {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section
      className="relative w-full overflow-hidden flex flex-col items-center justify-center"
      style={{
        background: "transparent",
        padding: "32px 0 24px",
      }}
    >
      {/* Heading */}
      <div
        role="heading"
        aria-level={2}
        className="text-center px-4"
        style={{
          fontFamily: SANS,
          color: "#fff",
          fontSize: "clamp(20px, 2.6vw, 28px)",
          fontWeight: 700,
          letterSpacing: "-0.5px",
          lineHeight: 1.15,
        }}
      >
        Vertraut von <span style={{ color: "#9F7AEA" }}>50+ Unternehmen</span>
      </div>

      {/* Vertical line between heading and circle */}
      <div
        style={{
          width: "2px",
          height: "clamp(40px, 5vh, 64px)",
          background: "linear-gradient(to bottom, #C4B5FD, rgba(196,181,253,0))",
          marginTop: "20px",
          boxShadow: "0 0 8px rgba(196,181,253,0.6)",
        }}
      />

      {/* Circle stage — contained within viewport, cropped left/right */}
      <div
        className="relative w-full flex items-center justify-center overflow-hidden"
        style={{ height: "clamp(260px, 42vh, 400px)" }}
      >
        {/* Circle SVG — larger, cropped by parent overflow */}
        <svg
          aria-hidden
          viewBox="0 0 800 800"
          preserveAspectRatio="xMidYMid meet"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: "clamp(340px, 52vh, 520px)",
            height: "clamp(340px, 52vh, 520px)",
            zIndex: 0,
          }}
        >
          <defs>
            <linearGradient id="orb-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor="#C4B5FD" stopOpacity="1" />
              <stop offset="25%"  stopColor="#9F7AEA" stopOpacity="1" />
              <stop offset="50%"  stopColor="#7C3AED" stopOpacity="1" />
              <stop offset="75%"  stopColor="#5B21B6" stopOpacity="1" />
              <stop offset="100%" stopColor="#3B0D72" stopOpacity="0.95" />
            </linearGradient>
          </defs>
          <circle
            cx="400"
            cy="400"
            r="397"
            fill="none"
            stroke="url(#orb-stroke)"
            strokeWidth="2"
            style={{
              filter:
                "drop-shadow(0 0 8px rgba(124,58,237,0.7)) drop-shadow(0 0 20px rgba(91,33,182,0.5)) drop-shadow(0 0 36px rgba(59,13,114,0.35))",
            }}
          />
        </svg>

        {/* Marquee strip — vertically centered on the circle's mid-line */}
        <div
          className="absolute left-0 right-0 top-1/2 -translate-y-1/2 w-full overflow-hidden"
          style={{
            padding: "16px 0",
            backgroundColor: "transparent",
            zIndex: 1,
          }}
        >
          <div
            className="absolute left-0 top-0 bottom-0 pointer-events-none"
            style={{
              width: "80px",
              background: "linear-gradient(to right, rgba(0,0,0,0), transparent)",
              zIndex: 2,
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 pointer-events-none"
            style={{
              width: "80px",
              background: "linear-gradient(to left, rgba(0,0,0,0), transparent)",
              zIndex: 2,
            }}
          />

          <div
            className="flex animate-marquee hover:[animation-play-state:paused]"
            style={{ width: "max-content", gap: "48px", alignItems: "center" }}
          >
            {duplicatedLogos.map((logo, index) => {
              const h = (logo as any).height || 56;
              return (
              <div
                key={`logo-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
                style={{ height: `${h}px` }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  className="object-contain brightness-0 invert"
                  style={{
                    height: `${h}px`,
                    width: "auto",
                    maxWidth: "220px",
                    opacity: 0.85,
                  }}
                />
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
