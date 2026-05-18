import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";

gsap.registerPlugin(ScrollTrigger);

/* ─── Design tokens ────────────────────────────────────────────────── */
const VIOLET_GLOW = "#7C3AED";
const INK_DEEP = "#1A0A2E";
const HAIRLINE = "rgba(91,33,182,0.12)";

const SERIF: React.CSSProperties = {
  fontFamily: "'DM Serif Display', Georgia, serif",
};
const MONO: React.CSSProperties = {
  fontFamily: "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace",
};

const PAINPOINTS: Array<{
  svgSrc?: string;
  Icon?: React.ElementType;
  title: string;
  desc: string;
  cases: number;
}> = [
  {
    svgSrc: "/icons/46_wissensbasis_persistenz.svg",
    title: "Intelligente Dokumentensuche",
    desc: "Schneller Zugriff auf internes Wissen aus PDFs, Handbüchern oder Fachartikeln.",
    cases: 2,
  },
  {
    svgSrc: "/icons/55_ki_agent_chat_bot.svg",
    title: "KI-gestützter Kundenservice",
    desc: "Chatbots beantworten Anfragen zuverlässig auf Basis eigener Inhalte – transparent und nachvollziehbar.",
    cases: 2,
  },
  {
    svgSrc: "/icons/54_ki_empfehlung_gluehbirne.svg",
    title: "Entscheidungsunterstützung",
    desc: "Automatisierte Analyse von Ausschreibungsunterlagen, Verträgen oder anderen umfangreichen Dokumenten zur Identifikation relevanter Anforderungen, Risiken und Handlungsempfehlungen – strukturiert, nachvollziehbar und datenbasiert.",
    cases: 3,
  },
  {
    svgSrc: "/icons/47_strukturierte_erfassung.svg",
    title: "Automatisierte Bestell- & Vorgangsbearbeitung",
    desc: "KI liest, versteht und verarbeitet eingehende Dokumente ohne Medienbrüche.",
    cases: 2,
  },
  {
    svgSrc: "/icons/31_robot_ki_chip.svg",
    title: "Interne KI-Assistenten",
    desc: "Unterstützung von Mitarbeitenden bei Recherche, Analyse und Entscheidungsfindung.",
    cases: 3,
  },
  {
    svgSrc: "/icons/35_bot_automatisierung.svg",
    title: "Prozessautomatisierung",
    desc: "KI übernimmt repetitive Aufgaben in Bereichen wie Einkauf, Vertrieb, Verwaltung oder HR und beschleunigt Abläufe spürbar.",
    cases: 2,
  },
  {
    svgSrc: "/icons/10_funnel_trichter.svg",
    title: "Conversion & Web-Optimierung",
    desc: "Datenbasierte Erkenntnisse für bessere Nutzererfahrung, höhere Abschlussquoten und messbares Wachstum.",
    cases: 2,
  },
];

/* ─── Tiny case card skeleton ────────────────────────────────────────── */
const CaseCardSkeleton = () => (
  <div
    className="group cursor-pointer transition-colors duration-200 hover:border-[#5B21B6]"
    style={{
      background: "#FFFFFF",
      border: `1px solid ${HAIRLINE}`,
      padding: "10px 12px",
      minHeight: "62px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}
  >
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <span
        style={{
          ...MONO,
          fontSize: "8px",
          letterSpacing: "0.22em",
          color: "rgba(91,33,182,0.45)",
          textTransform: "uppercase",
        }}
      >
        Case
      </span>
      <ArrowUpRight size={11} strokeWidth={1.5} style={{ color: "rgba(91,33,182,0.4)" }} />
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <span style={{ display: "block", height: "5px", width: "70%", background: "rgba(91,33,182,0.08)" }} />
      <span style={{ display: "block", height: "5px", width: "45%", background: "rgba(91,33,182,0.06)" }} />
    </div>
  </div>
);

/* ─── Painpoint block ────────────────────────────────────────────────── */
const PainpointBlock = ({
  svgSrc,
  Icon,
  title,
  desc,
  cases,
  index,
  isLast,
}: {
  svgSrc?: string;
  Icon?: React.ElementType;
  title: string;
  desc: string;
  cases: number;
  index: number;
  isLast: boolean;
}) => (
  <div
    style={{
      paddingTop: index === 0 ? "0" : "56px",
      paddingBottom: "56px",
      borderBottom: isLast ? "none" : `1px solid ${HAIRLINE}`,
    }}
  >
    {/* Grid: left = title + desc + cases  |  right = icon (starts below title line) */}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 140px", gridTemplateRows: "auto auto auto", columnGap: "16px" }}>

      {/* Title — left col, row 1 */}
      <h3
        style={{
          ...SERIF,
          fontSize: "clamp(1.3rem, 2vw, 1.7rem)",
          lineHeight: 1.2,
          color: INK_DEEP,
          letterSpacing: "-0.01em",
          margin: 0,
          marginBottom: "10px",
          gridColumn: 1,
          gridRow: 1,
        }}
      >
        {title}
      </h3>

      {/* Description — left col, row 2 */}
      <p
        style={{
          ...MONO,
          fontSize: "13.5px",
          lineHeight: 1.75,
          color: "rgba(26,10,46,0.6)",
          marginBottom: "20px",
          gridColumn: 1,
          gridRow: 2,
        }}
      >
        {desc}
      </p>

      {/* Case cards — left col, row 3 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: cases === 3 ? "repeat(3, 1fr)" : "repeat(2, 1fr)",
          gap: "8px",
          gridColumn: 1,
          gridRow: 3,
        }}
      >
        {Array.from({ length: cases }).map((_, i) => (
          <CaseCardSkeleton key={i} />
        ))}
      </div>

      {/* Icon — right col, spans all rows, pushed down below title line */}
      <div
        style={{
          gridColumn: 2,
          gridRow: "1 / 4",
          display: "flex",
          justifyContent: "center",
          paddingTop: "calc(clamp(1.3rem, 2vw, 1.7rem) * 1.2)",
        }}
      >
        {svgSrc ? (
          <img
            src={svgSrc}
            alt=""
            aria-hidden="true"
            style={{ width: "96px", height: "96px", filter: "drop-shadow(0 6px 20px rgba(124,58,237,0.32))" }}
          />
        ) : Icon ? (
          <div
            style={{
              width: "96px",
              height: "96px",
              background: "rgba(91,33,182,0.08)",
              border: "1px solid rgba(124,58,237,0.28)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 6px 20px rgba(124,58,237,0.18)",
            }}
          >
            <Icon size={36} color={VIOLET_GLOW} strokeWidth={1.5} />
          </div>
        ) : null}
      </div>

    </div>
  </div>
);

/* ─── Main component — GSAP pin for left column ─────────────────────── */
export const UseCasesGridSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const left = leftRef.current;
    if (!section || !left) return;

    let st: ScrollTrigger | null = null;

    // Defer creation so all other GSAP pin spacers are in the DOM first
    const timer = setTimeout(() => {
      st = ScrollTrigger.create({
        trigger: section,
        start: "top top+=96",     // 96px = nav height offset
        end: "bottom bottom",     // release when section bottom hits viewport bottom
        pin: left,
        pinSpacing: false,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      });
    }, 150);

    return () => {
      clearTimeout(timer);
      st?.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10"
          style={{ alignItems: "start" }}
        >
          {/* LEFT — pinned via GSAP */}
          <div ref={leftRef} className="lg:col-span-6">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <span
                className="block flex-shrink-0"
                style={{ width: "32px", height: "1px", backgroundColor: VIOLET_GLOW }}
              />
              <span
                className="uppercase"
                style={{
                  ...MONO,
                  fontSize: "11px",
                  letterSpacing: "0.22em",
                  color: VIOLET_GLOW,
                }}
              >
                Anwendungsfälle
              </span>
            </div>

            {/* Headline */}
            <h2
              style={{
                ...SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(2rem, 3.8vw, 3rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.015em",
                color: INK_DEEP,
                marginBottom: "24px",
              }}
            >
              Typische{" "}
              <AnimatedTextCycle
                words={["Pain-Points", "Anwendungen", "Hürden"]}
                interval={2800}
                renderWord={(word) => (
                  <span style={{ color: "#5B21B6", whiteSpace: "nowrap" }}>{word}</span>
                )}
              />
              <br />
              unserer Kunden
            </h2>

            {/* Intro */}
            <p
              style={{
                ...MONO,
                fontSize: "13.5px",
                lineHeight: 1.85,
                color: "rgba(26,10,46,0.62)",
                maxWidth: "100%",
                marginBottom: "24px",
              }}
            >
              Unternehmen setzen Künstliche Intelligenz dort ein, wo Prozesse komplex,
              datenintensiv oder zeitaufwendig sind. Besonders in wissensgetriebenen
              Organisationen und operativen Abläufen entfaltet KI ihr volles Potenzial:
              Sie erschließt vorhandenes Wissen, automatisiert wiederkehrende Aufgaben
              und unterstützt Mitarbeitende bei fundierten Entscheidungen. Die folgenden
              Anwendungsfälle zeigen, wie unsere Kunden KI heute bereits produktiv und
              messbar einsetzen.
            </p>

            {/* Meta */}
            <div
              className="flex items-center gap-3 pt-4"
              style={{ borderTop: `1px solid ${HAIRLINE}` }}
            >
              <span
                style={{
                  ...MONO,
                  fontSize: "10px",
                  letterSpacing: "0.22em",
                  color: "rgba(26,10,46,0.4)",
                  textTransform: "uppercase",
                }}
              >
                07 Anwendungsfälle
              </span>
              <span style={{ width: "1px", height: "12px", background: "rgba(91,33,182,0.2)" }} />
              <span
                style={{
                  ...MONO,
                  fontSize: "10px",
                  letterSpacing: "0.22em",
                  color: "rgba(26,10,46,0.4)",
                  textTransform: "uppercase",
                }}
              >
                Echte Cases
              </span>
            </div>
          </div>

          {/* RIGHT — scrolls normally */}
          <div ref={rightRef} className="lg:col-span-6">
            {PAINPOINTS.map((pp, i) => (
              <PainpointBlock
                key={pp.title}
                svgSrc={pp.svgSrc}
                Icon={pp.Icon}
                title={pp.title}
                desc={pp.desc}
                cases={pp.cases}
                index={i}
                isLast={i === PAINPOINTS.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
