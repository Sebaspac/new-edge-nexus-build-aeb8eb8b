import sadieKessler from "@/assets/logos/sadie-kessler.png";
import circlePhoto from "@/assets/logos/circle-photo.png";
import hydeOfficial from "@/assets/logos/hyde-official.png";
import dariusCompany from "@/assets/logos/darius-company.webp";
import museStudio from "@/assets/logos/muse-studio.webp";
import drAaronLoeb from "@/assets/logos/dr-aaron-loeb.webp";
import pureDesign from "@/assets/logos/pure-design.webp";
import seabreeze from "@/assets/logos/seabreeze.webp";
import albanova from "@/assets/logos/albanova-consulting.png";
import bayMittelstandspreis from "@/assets/logos/bayerischer-mittelstandspreis-2026.png";
import clubCli from "@/assets/logos/club-cli.webp";
import becomingYou from "@/assets/logos/becoming-you.png";

const SANS =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";

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

export default function LogoCloud() {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section
      className="relative w-full overflow-hidden flex flex-col items-center justify-center"
      style={{
        backgroundColor: "#0a0a0a",
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
        Vertraut von <span style={{ color: "#6d28d9" }}>50+ Unternehmen</span>
      </div>

      {/* Marquee strip */}
      <div
        className="relative w-full overflow-hidden mt-8"
        style={{ padding: "10px 0" }}
      >
        <div
          className="absolute left-0 top-0 bottom-0 pointer-events-none"
          style={{
            width: "80px",
            background: "linear-gradient(to right, #0a0a0a, transparent)",
            zIndex: 2,
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 pointer-events-none"
          style={{
            width: "80px",
            background: "linear-gradient(to left, #0a0a0a, transparent)",
            zIndex: 2,
          }}
        />

        <div
          className="flex animate-marquee hover:[animation-play-state:paused]"
          style={{ width: "max-content", gap: "56px", alignItems: "center" }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`logo-${index}`}
              className="flex-shrink-0 flex items-center justify-center"
              style={{ height: "48px" }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="object-contain brightness-0 invert"
                style={{
                  height: "48px",
                  width: "auto",
                  maxWidth: "180px",
                  opacity: 0.7,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
