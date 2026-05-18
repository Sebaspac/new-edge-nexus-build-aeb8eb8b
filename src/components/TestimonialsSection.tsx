import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const VIOLET  = "#5B21B6";
const INK_DEEP = "#0D0D12";

const EASE = [0.22, 1, 0.36, 1] as const;

const SERIF: React.CSSProperties = {
  fontFamily: "'DM Serif Display', Georgia, serif",
};
const MONO: React.CSSProperties = {
  fontFamily: "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace",
};

const testimonials = [
  {
    text: "New Edge hat unsere internen Abläufe komplett neu gedacht. Durch die KI-gestützten Workflows sparen wir unglaublich viel Zeit im Projektgeschäft.",
    name: "Kathrin Mertens",
    role: "Geschäftsführerin, Eventlogistik",
  },
  {
    text: "Die Automatisierungslösungen von New Edge haben unsere Effizienz massiv gesteigert. Besonders das zentrale Dashboard gibt uns endlich einen klaren Blick auf unsere KPIs.",
    name: "Emre Yılmaz",
    role: "CEO, Automobilzulieferer",
  },
  {
    text: "Die Implementierung lief erstaunlich reibungslos. Das Team hat unsere Anforderungen schnell verstanden und die Übergabe so vorbereitet, dass unser Team ohne Frust weiterarbeiten konnte.",
    name: "Anna Kowalski",
    role: "Head of Marketing, E-Commerce",
  },
  {
    text: "Klare Markenstrategie, professionelle Website und durchgängige Begleitung. New Edge hat unsere Außenkommunikation auf ein neues Niveau gehoben.",
    name: "Rocio Morales",
    role: "Geschäftsführerin & Coach",
  },
  {
    text: "Mit New Edge haben wir zuerst klein gestartet. Inzwischen laufen komplette Kampagnen automatisiert. Das Team denkt wie ein verlängerter Arm unseres eigenen Teams.",
    name: "Stefan Neuhaus",
    role: "Geschäftsführer, IT-Dienstleistungen",
  },
  {
    text: "Dank New Edge konnten wir auch ohne technisches Verständnis schnell ein funktionierendes System umsetzen.",
    name: "Priya Sharma",
    role: "Brand Managerin, Food & Beverage",
  },
  {
    text: "Durch New Edge konnten wir unseren Online-Auftritt verbessern und die Conversion messbar steigern.",
    name: "Aleksandar Kovačević",
    role: "E-Commerce Lead, Fashion Retail",
  },
  {
    text: "Ein echter Tech-Partner, kein klassisches Agentur-Blabla. Das Team denkt nicht nur mit, sondern liefert messbare Ergebnisse.",
    name: "Carolin Bruns",
    role: "COO, Tech-Startup",
  },
];

const VISIBLE  = 2.5;
const GAP      = 20;
const MAX_INDEX = testimonials.length - 3; // 5

export const TestimonialsSection = () => {
  const [current, setCurrent]       = useState(0);
  const [autoPlayed, setAutoPlayed] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const isInView   = useInView(sectionRef, { once: true, margin: "-100px" });

  /* one-time nudge: advance by 1 when section enters view */
  useEffect(() => {
    if (!isInView || autoPlayed) return;
    const t = setTimeout(() => {
      setCurrent(1);
      setAutoPlayed(true);
    }, 800);
    return () => clearTimeout(t);
  }, [isInView, autoPlayed]);

  const prev = () => setCurrent((i) => Math.max(0, i - 1));
  const next = () => setCurrent((i) => Math.min(MAX_INDEX, i + 1));

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 110% 70% at 60% 40%, rgba(91,33,182,0.06) 0%, transparent 65%), #F8F5FF",
        paddingTop:    "clamp(4rem, 8vw, 7rem)",
        paddingBottom: "clamp(4rem, 8vw, 7rem)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* ── Header: headline left, arrows right ─────────────────────────── */}
        <div className="flex items-end justify-between gap-6 mb-10 md:mb-14">

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span
                className="block h-px flex-shrink-0"
                style={{ width: "32px", backgroundColor: VIOLET }}
              />
              <span
                className="uppercase"
                style={{ ...MONO, fontSize: "11px", letterSpacing: "0.22em", color: VIOLET }}
              >
                Testimonials
              </span>
            </div>

            <h2
              style={{
                ...SERIF,
                fontStyle:     "italic",
                fontWeight:    400,
                fontSize:      "clamp(2rem, 3.8vw, 3rem)",
                lineHeight:    1.0,
                letterSpacing: "-0.01em",
                color:         INK_DEEP,
                maxWidth:      "20ch",
              }}
            >
              Was unsere{" "}
              <span style={{ color: VIOLET }}>Kunden</span>{" "}
              sagen
            </h2>
          </motion.div>

          {/* Arrow buttons — square */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-3 flex-shrink-0"
          >
            <button
              onClick={prev}
              disabled={current === 0}
              aria-label="Vorheriges Testimonial"
              className="flex items-center justify-center transition-all duration-200"
              style={{
                width:        "52px",
                height:       "52px",
                borderRadius: "0",
                background:   "transparent",
                border:       `1px solid ${current === 0 ? "rgba(91,33,182,0.18)" : VIOLET}`,
                color:        current === 0 ? "rgba(91,33,182,0.28)" : INK_DEEP,
                cursor:       current === 0 ? "not-allowed" : "pointer",
              }}
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
            </button>

            <button
              onClick={next}
              disabled={current === MAX_INDEX}
              aria-label="Nächstes Testimonial"
              className="flex items-center justify-center transition-all duration-200"
              style={{
                width:        "52px",
                height:       "52px",
                borderRadius: "0",
                background:   current === MAX_INDEX ? "transparent" : VIOLET,
                border:       `1px solid ${current === MAX_INDEX ? "rgba(91,33,182,0.18)" : VIOLET}`,
                color:        current === MAX_INDEX ? "rgba(91,33,182,0.28)" : "#FFFFFF",
                cursor:       current === MAX_INDEX ? "not-allowed" : "pointer",
              }}
            >
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </motion.div>
        </div>

        {/* ── Carousel ─────────────────────────────────────────────────────── */}
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: `calc(-${current} * (100% / ${VISIBLE} + ${GAP / VISIBLE}px))`,
            }}
            transition={{ duration: 0.6, ease: EASE }}
            style={{ gap: `${GAP}px` }}
          >
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} testimonial={t} index={i} />
            ))}
          </motion.div>
        </div>

        {/* ── Progress dots ────────────────────────────────────────────────── */}
        <div className="flex items-center gap-2 mt-8">
          {Array.from({ length: MAX_INDEX + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Gehe zu Testimonial ${i + 1}`}
              className="transition-all duration-300"
              style={{
                width:           i === current ? "24px" : "6px",
                height:          "6px",
                borderRadius:    "0",
                backgroundColor: i === current ? VIOLET : "rgba(91,33,182,0.18)",
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

// ─── Single card ──────────────────────────────────────────────────────────────
type CardProps = {
  testimonial: { text: string; name: string; role: string };
  index: number;
};

const TestimonialCard = ({ testimonial }: CardProps) => (
  <div
    className="flex flex-col justify-between flex-none"
    style={{
      width:    `calc((100% - ${GAP * (VISIBLE - 1)}px) / ${VISIBLE})`,
      minWidth: `calc((100% - ${GAP * (VISIBLE - 1)}px) / ${VISIBLE})`,
      minHeight: "310px",
      padding:   "30px 28px 28px",
      background:           "rgba(255, 255, 255, 0.62)",
      backdropFilter:       "blur(32px) saturate(200%) brightness(1.04)",
      WebkitBackdropFilter: "blur(32px) saturate(200%) brightness(1.04)",
      border:       "1px solid rgba(255,255,255,0.85)",
      boxShadow:    [
        "0 2px 0 0 rgba(255,255,255,0.9) inset",
        "0 8px 24px rgba(91,33,182,0.13)",
        "0 24px 64px rgba(91,33,182,0.09)",
        "0 4px 12px rgba(0,0,0,0.08)",
        "0 1px 3px rgba(0,0,0,0.06)",
      ].join(", "),
      borderRadius: "0",
      position:     "relative",
    }}
  >
    {/* Dot accent */}
    <div
      style={{
        position:     "absolute",
        top:          "20px",
        right:        "20px",
        width:        "9px",
        height:       "9px",
        borderRadius: "50%",
        background:   VIOLET,
      }}
    />

    {/* Quote */}
    <p
      style={{
        ...MONO,
        fontSize:     "14px",
        lineHeight:   1.74,
        color:        "rgba(13,13,18,0.82)",
        paddingRight: "24px",
        flex:         1,
        marginBottom: "28px",
      }}
    >
      {testimonial.text}
    </p>

    {/* Author */}
    <div>
      <div style={{ height: "1px", backgroundColor: "rgba(13,13,18,0.10)", marginBottom: "14px" }} />
      <div style={{ ...SERIF, fontWeight: 700, fontSize: "15px", color: INK_DEEP, lineHeight: 1.2, marginBottom: "3px" }}>
        {testimonial.name}
      </div>
      <div style={{ ...MONO, fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(13,13,18,0.5)" }}>
        {testimonial.role}
      </div>
    </div>
  </div>
);
