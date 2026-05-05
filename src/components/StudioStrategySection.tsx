import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  X,
  ArrowRight,
  Compass,
  ListChecks,
  ShieldCheck,
  Layers,
  Radio,
  Network,
  Plug,
  Eye,
  type LucideIcon,
} from "lucide-react";

type Service = {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  problem: string;
  solution: string;
  points: { title: string; description: string; icon: LucideIcon }[];
  partnerNote?: string;
};

const services: Service[] = [
  {
    id: "01",
    number: "01",
    title: "Systemstrategie für Marke, Daten & KI",
    shortDescription:
      "Wir entwickeln die Entscheidungs- und Systemlogik, auf der Marke, Kommunikation und der sinnvolle Einsatz von KI überhaupt funktionieren.",
    problem:
      "Unklare Markenlogik und unstrukturierter KI-Einsatz führen zu widersprüchlichen Entscheidungen, ineffizienten Prozessen und nicht skalierbaren Systemen.",
    solution:
      "Wir verbinden Markenstrategie mit der Analyse von Daten, Prozessen und Technologien – und übersetzen alles in eine klare, priorisierte System-Roadmap.",
    points: [
      {
        title: "Einheitliche Entscheidungslogik",
        description:
          "Marke wird zum steuernden System für Strategie, Prozesse und Technologie.",
        icon: Compass,
      },
      {
        title: "Klare Prioritäten statt Einzelmaßnahmen",
        description:
          "Alle Initiativen folgen einer gemeinsamen, umsetzbaren Roadmap.",
        icon: ListChecks,
      },
      {
        title: "Sichere KI- & Technologieentscheidungen",
        description:
          "KI wird nur dort eingesetzt, wo sie echten operativen Hebel hat.",
        icon: ShieldCheck,
      },
      {
        title: "Grundlage für skalierbare Systeme",
        description:
          "Marke, Daten und Prozesse sind so aufgebaut, dass Systeme darauf aufsetzen können.",
        icon: Layers,
      },
    ],
  },
  {
    id: "02",
    number: "02",
    title: "Kommunikations- & Sichtbarkeitsarchitektur",
    shortDescription:
      "Wir übersetzen die definierte Systemlogik in eine klare Kommunikationsstruktur – als Grundlage für Sichtbarkeit, Inhalte und skalierbare Systeme.",
    problem:
      "Kommunikation entsteht oft isoliert und ohne Verbindung zu Markenlogik, Systemen oder skalierbaren Prozessen.",
    solution:
      "Wir definieren eine strukturelle Kommunikationslogik mit klaren Rollen, Regeln und Leitplanken – anschlussfähig für Technologie, Automatisierung und Wachstum.",
    points: [
      {
        title: "Klare Rolle jedes Kanals",
        description:
          "Jeder Touchpoint erfüllt eine definierte Funktion im Gesamtsystem.",
      },
      {
        title: "Durchgängige Markenlogik",
        description:
          "Kommunikation folgt einer einheitlichen Struktur über alle Kanäle hinweg.",
      },
      {
        title: "Anschlussfähigkeit für Systeme & KI",
        description:
          "Inhalte, Daten und Touchpoints sind direkt integrierbar in Systeme und Automatisierung.",
      },
      {
        title: "Sichtbarkeit unter eigener Kontrolle",
        description:
          "Ihre Präsenz folgt Ihrer Logik – nicht der von Plattformen.",
      },
    ],
    partnerNote:
      "Für die Umsetzung arbeiten wir mit unserer Partneragentur 340 Consultancy zusammen – für maximale Wirkung im System.",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export const StudioStrategySection = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    if (expandedId) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [expandedId]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpandedId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const expanded = services.find((s) => s.id === expandedId) || null;

  return (
    <section className="relative py-20 md:py-28 lg:py-36 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="max-w-3xl mb-14 md:mb-20"
        >
          <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-neutral-500 mb-5">
            Strategie — Studio
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-neutral-900 mb-8">
            Strategie – die Grundlage für alles, was danach gebaut wird.
          </h2>
          <div className="space-y-4 text-base md:text-lg text-neutral-600 leading-relaxed">
            <p>
              Im Studio entsteht die Systemlogik für Marke, Kommunikation und
              den sinnvollen Einsatz von KI.
            </p>
            <p>
              Wir analysieren Ihre bestehende Realität, schaffen
              Entscheidungsfähigkeit im Management und entwickeln die
              priorisierte Grundlage für steuerbare Systeme.
            </p>
            <p className="text-neutral-900">
              Keine Maßnahmenliste – sondern die Logik dahinter.
            </p>
          </div>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
          {services.map((service, i) => (
            <motion.button
              key={service.id}
              type="button"
              onClick={() => setExpandedId(service.id)}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
              whileHover={{ y: -2 }}
              className="group relative text-left bg-white border border-neutral-200 hover:border-neutral-300 transition-colors duration-500 p-8 md:p-10 lg:p-12 flex flex-col min-h-[480px] md:min-h-[560px] shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.12)]"
              style={{ willChange: "transform" }}
            >
              <div className="flex items-start justify-between mb-10 md:mb-12">
                <span className="text-xs tracking-[0.2em] uppercase text-neutral-400">
                  Service {service.number}
                </span>
                <span className="text-xs tracking-[0.2em] uppercase text-neutral-400">
                  Studio
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl lg:text-[2.25rem] leading-[1.15] text-neutral-900 mb-6 max-w-[22ch]">
                {service.title}
              </h3>

              <p className="text-base text-neutral-600 leading-relaxed mb-10 max-w-[44ch]">
                {service.shortDescription}
              </p>

              <ul className="mt-auto space-y-3 mb-10">
                {service.points.map((p) => (
                  <li
                    key={p.title}
                    className="flex items-baseline gap-4 text-sm text-neutral-700"
                  >
                    <span className="text-neutral-400 tabular-nums">
                      0{service.points.indexOf(p) + 1}
                    </span>
                    <span>{p.title}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-2 text-sm text-neutral-900">
                <span className="tracking-wide">Mehr erfahren</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Bubble Expansion Overlay */}
      <AnimatePresence>
        {expanded && (
          <>
            {/* Soft dim */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              onClick={() => setExpandedId(null)}
              className="fixed inset-0 z-[80] bg-neutral-950/30 backdrop-blur-[2px]"
            />

            {/* Bubble */}
            <motion.div
              key={expanded.id}
              initial={{ opacity: 0, scale: 0.92, borderRadius: "40% 60% 55% 45% / 50% 45% 55% 50%" }}
              animate={{ opacity: 1, scale: 1, borderRadius: "0% 0% 0% 0%" }}
              exit={{ opacity: 0, scale: 0.94, borderRadius: "45% 55% 50% 50% / 55% 45% 55% 45%" }}
              transition={{ duration: 0.75, ease: EASE }}
              className="fixed inset-0 z-[81] m-auto bg-white overflow-y-auto w-full max-w-[1100px] h-[88vh] my-[6vh] shadow-[0_40px_120px_-30px_rgba(0,0,0,0.25)]"
              style={{ willChange: "transform, border-radius" }}
            >
              <div className="sticky top-0 z-10 flex items-center justify-between px-6 md:px-12 lg:px-16 py-5 bg-white/90 backdrop-blur-md border-b border-neutral-100">
                <span className="text-xs tracking-[0.2em] uppercase text-neutral-400">
                  Service {expanded.number} — Studio
                </span>
                <button
                  onClick={() => setExpandedId(null)}
                  className="w-9 h-9 flex items-center justify-center text-neutral-500 hover:text-neutral-900 transition-colors"
                  aria-label="Schließen"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
                className="px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 max-w-[820px] mx-auto"
              >
                <h3 className="text-3xl md:text-5xl lg:text-6xl leading-[1.05] text-neutral-900 mb-10 md:mb-14">
                  {expanded.title}
                </h3>

                <p className="text-lg md:text-xl text-neutral-600 leading-relaxed mb-16">
                  {expanded.shortDescription}
                </p>

                <div className="grid md:grid-cols-2 gap-10 md:gap-14 mb-16 md:mb-20">
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-4">
                      Das Problem
                    </p>
                    <p className="text-base md:text-lg text-neutral-800 leading-relaxed">
                      {expanded.problem}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-4">
                      Unsere Lösung
                    </p>
                    <p className="text-base md:text-lg text-neutral-800 leading-relaxed">
                      {expanded.solution}
                    </p>
                  </div>
                </div>

                <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-8">
                  4 Kernpunkte
                </p>
                <div className="space-y-px bg-neutral-100">
                  {expanded.points.map((p, idx) => (
                    <div
                      key={p.title}
                      className="bg-white grid grid-cols-[auto_1fr] gap-6 md:gap-10 py-6 md:py-8"
                    >
                      <span className="text-sm tabular-nums text-neutral-400 pt-1">
                        0{idx + 1}
                      </span>
                      <div>
                        <h4 className="text-lg md:text-xl text-neutral-900 mb-2">
                          {p.title}
                        </h4>
                        <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                          {p.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {expanded.partnerNote && (
                  <p className="mt-16 pt-8 border-t border-neutral-100 text-sm text-neutral-500 leading-relaxed">
                    {expanded.partnerNote}
                  </p>
                )}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default StudioStrategySection;
