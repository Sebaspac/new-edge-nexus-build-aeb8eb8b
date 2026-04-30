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
      style={{ backgroundColor: "#0a0a0a", padding: "0 0 12px" }}
    >
      {/* Heading — top of the second viewport */}
      <div
        role="heading"
        aria-level={2}
        className="text-center px-4"
        style={{
          fontFamily: SANS,
          color: "#fff",
          fontSize: "clamp(22px, 3vw, 32px)",
          fontWeight: 700,
          letterSpacing: "-0.5px",
          lineHeight: 1.15,
          marginTop: "60px",
          marginBottom: "0",
        }}
      >
        Vertraut von <span style={{ color: "#a855f7" }}>50+ Unternehmen</span>
      </div>

      {/* Vertical line between heading and circle */}
      <div className="flex justify-center" style={{ marginTop: "24px" }}>
        <div
          style={{
            width: "1px",
            height: "60px",
            background: "linear-gradient(to bottom, #a855f7, transparent)",
          }}
        />
      </div>

      {/* Circle stage starts AFTER the heading */}
      <div className="relative w-full">
        {/* Compact circle — minimal stroke with cool purple gradient */}
        <svg
          aria-hidden
          viewBox="0 0 800 800"
          preserveAspectRatio="xMidYMid meet"
          className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            top: "0",
            width: "min(320px, 60vw)",
            height: "auto",
            zIndex: 0,
          }}
        >
          <defs>
            <linearGradient id="orb-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e9d5ff" stopOpacity="1" />
              <stop offset="25%" stopColor="#c084fc" stopOpacity="1" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
              <stop offset="75%" stopColor="#7e22ce" stopOpacity="1" />
              <stop offset="100%" stopColor="#4c1d95" stopOpacity="0.95" />
            </linearGradient>
          </defs>
          {/* Glowing gradient ring (no inner fill) */}
          <circle
            cx="400"
            cy="400"
            r="397"
            fill="none"
            stroke="url(#orb-stroke)"
            strokeWidth="2"
            style={{
              filter:
                "drop-shadow(0 0 8px rgba(192,132,252,0.7)) drop-shadow(0 0 20px rgba(168,85,247,0.5)) drop-shadow(0 0 36px rgba(126,34,206,0.35))",
            }}
          />
        </svg>

        {/* Foreground content */}
        <div className="relative" style={{ zIndex: 1 }}>
          {/* Spacer above marquee — pushes marquee to circle's vertical center */}
          <div style={{ height: "clamp(70px, 11vw, 110px)" }} />

          {/* Marquee strip — masks the circle's horizontal mid-line */}
          <div
            className="relative w-full overflow-hidden"
            style={{
              padding: "14px 0",
              backgroundColor: "#0a0a0a",
            }}
          >
            <div
              className="absolute left-0 top-0 bottom-0 pointer-events-none"
              style={{
                width: "120px",
                background: "linear-gradient(to right, #0a0a0a, transparent)",
                zIndex: 2,
              }}
            />
            <div
              className="absolute right-0 top-0 bottom-0 pointer-events-none"
              style={{
                width: "120px",
                background: "linear-gradient(to left, #0a0a0a, transparent)",
                zIndex: 2,
              }}
            />

            <div
              className="flex animate-marquee hover:[animation-play-state:paused]"
              style={{ width: "max-content", gap: "64px" }}
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
                    className="h-full w-auto object-contain brightness-0 invert"
                    style={{
                      maxWidth: "200px",
                      opacity: 0.75,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Spacer below marquee — tighter, lets next section peek up */}
          <div style={{ height: "calc(min(320px, 60vw) / 2 - 24px)" }} />
        </div>
      </div>
    </section>
  );
}
