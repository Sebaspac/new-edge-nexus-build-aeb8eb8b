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

export default function LogoCloud() {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section
      className="flex flex-col items-center overflow-hidden"
      style={{ backgroundColor: "#0a0a0a", padding: "0 0 60px" }}
    >
      {/* Orb wrap — vertical line + half-ellipse arc */}
      <div
        className="flex flex-col items-center"
        style={{ marginBottom: "40px" }}
      >
        {/* Vertical line: 1px wide, 80px tall, transparent → #a855f7 */}
        <div
          style={{
            width: "1px",
            height: "80px",
            background: "linear-gradient(to bottom, transparent, #a855f7)",
          }}
        />
        {/* Half-ellipse arc — 260x130, gradient border, no fill */}
        <div
          style={{
            width: "260px",
            height: "130px",
            borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
              padding: "1.5px",
              background:
                "linear-gradient(90deg, #a855f7 0%, #c084fc 50%, #a855f7 100%)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />
        </div>
      </div>

      {/* Heading — clamp(28px,4vw,42px), weight 700, mb 40px. Rendered as div to bypass global h1-h6 DM-Serif !important. */}
      <div
        role="heading"
        aria-level={2}
        className="text-center px-4"
        style={{
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
          color: "#fff",
          fontSize: "clamp(28px, 4vw, 42px)",
          fontWeight: 700,
          marginBottom: "40px",
          letterSpacing: "-0.5px",
          lineHeight: 1.15,
        }}
      >
        Vertraut von <span style={{ color: "#a855f7" }}>50+ Unternehmen</span>
      </div>

      {/* Marquee — full width, 1px subtle borders top+bottom, padding 20px 0 */}
      <div
        className="w-full overflow-hidden relative"
        style={{
          borderTop: "1px solid #222",
          borderBottom: "1px solid #222",
          padding: "20px 0",
        }}
      >
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
    </section>
  );
}
