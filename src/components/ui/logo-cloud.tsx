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
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#0a0a0a", padding: "0 0 60px" }}
    >
      {/* Vertical line on top — fades into the upper arc */}
      <div className="flex justify-center">
        <div
          style={{
            width: "1px",
            height: "32px",
            background: "linear-gradient(to bottom, transparent, #a855f7)",
          }}
        />
      </div>

      {/* Stacked stage: full circle behind, heading + marquee in front.
          The marquee strip cuts the circle exactly in half horizontally. */}
      <div className="relative w-full" style={{ marginTop: "-2px" }}>
        {/* Full circle SVG — purple gradient stroke, no fill */}
        <svg
          aria-hidden
          viewBox="0 0 800 800"
          preserveAspectRatio="xMidYMid meet"
          className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            top: "0",
            width: "min(720px, 88vw)",
            height: "auto",
            zIndex: 0,
          }}
        >
          <circle
            cx="400"
            cy="400"
            r="399"
            fill="none"
            stroke="#a855f7"
            strokeOpacity="0.45"
            strokeWidth="0.6"
          />
        </svg>

        {/* Foreground content */}
        <div className="relative" style={{ zIndex: 1 }}>
          {/* Heading — sits in the upper half of the circle */}
          <div
            role="heading"
            aria-level={2}
            className="text-center px-4"
            style={{
              fontFamily: SANS,
              color: "#fff",
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 700,
              letterSpacing: "-0.5px",
              lineHeight: 1.15,
              marginTop: "clamp(120px, 22vw, 220px)",
              marginBottom: "40px",
            }}
          >
            Vertraut von <span style={{ color: "#a855f7" }}>50+ Unternehmen</span>
          </div>

          {/* Marquee strip — masks the circle's horizontal mid-line */}
          <div
            className="relative w-full overflow-hidden"
            style={{
              padding: "18px 0",
              backgroundColor: "#0a0a0a",
            }}
          >
            {/* Edge fades */}
            <div
              className="absolute left-0 top-0 bottom-0 pointer-events-none"
              style={{
                width: "120px",
                background:
                  "linear-gradient(to right, #0a0a0a, transparent)",
                zIndex: 2,
              }}
            />
            <div
              className="absolute right-0 top-0 bottom-0 pointer-events-none"
              style={{
                width: "120px",
                background:
                  "linear-gradient(to left, #0a0a0a, transparent)",
                zIndex: 2,
              }}
            />

            <div
              className="flex animate-marquee hover:[animation-play-state:paused]"
              style={{ width: "max-content", gap: "72px" }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`logo-${index}`}
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{ height: "44px" }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    className="h-full w-auto object-contain brightness-0 invert"
                    style={{
                      maxWidth: "180px",
                      opacity: 0.7,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Spacer below marquee so the lower half of the circle is visible */}
          <div style={{ height: "clamp(120px, 22vw, 220px)" }} />
        </div>
      </div>
    </section>
  );
}
