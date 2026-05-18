import { lazy, Suspense, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MobileNavigation } from "@/components/MobileNavigation";
import SEOHead from "@/components/SEOHead";
import { AuroraFlow } from "@/components/ui/aurora-flow";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CursorLine } from "@/components/ui/CursorLine";
import wenjaminImg from "@/assets/team-wenjamin.png";

const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));

const SANS  = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";
const SERIF: React.CSSProperties = { fontFamily: "'DM Serif Display', Georgia, serif" };
const MONO: React.CSSProperties  = { fontFamily: "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace" };
const VIOLET   = "#5B21B6";
const INK_DEEP = "#1A0A2E";
const HAIRLINE = "rgba(91,33,182,0.12)";
const EASE     = [0.22, 1, 0.36, 1] as const;

const positions = [
  {
    id: "item-1",
    title: "Praktikum Marketing & Projektmanagement (m/w/d)",
    tags: ["📍 Remote/München", "💼 Vollzeit, 3–6 Monate", "🚀 Start jederzeit"],
    mailto: "mailto:info@newedgebrand.com?subject=Bewerbung: Praktikum Marketing & Projektmanagement",
    sections: [
      {
        label: "Deine Aufgaben",
        items: [
          "Content & SEO: Keyword-Recherche, Redaktionsplanung, Wettbewerbs-/Benchmark-Analysen, Auswertung von Statistiken & Echtzeit-Daten",
          "Social Media: Planung & Vorbereitung von LinkedIn-/Instagram-Posts, Community-Management, einfache Reportings",
          "Projektmanagement: Mitarbeit in Kick-offs & Workshops, Koordination von Timings/Assets über Studio & Lab hinweg, Quality Assurance (QA)",
          "KPI-Tracking: Monitoring von Traffic, Leads, Conversion-Rates & Social Engagement; Monats-Reports (z. B. Google Analytics/Looker)",
          "KI-Beratung & Audit-Support: Unterstützung bei KI-Readiness-Checks, Recherche zu Automatisierungs- und KI-Tools",
        ],
      },
      {
        label: "Dein Profil",
        items: [
          "Eingeschriebene:r Student:in in Marketing, Medien, WiWi o. ä.; idealerweise Pflichtpraktikum möglich",
          "Erste Erfahrung im Marketing/PM von Vorteil, aber kein Muss",
          "Ausgeprägtes Interesse an Branding, KI-Tools & digitaler Strategie; strukturierte & zuverlässige Arbeitsweise",
          "Sehr gute Deutsch- und Englischkenntnisse; Teamspirit",
        ],
      },
      {
        label: "Wir bieten",
        items: [
          "Onboarding & Mentoring: strukturiertes digitales Onboarding, persönliches Mentoring",
          "Weiterbildung: interne Sessions, Sprachkurse, regelmäßige Coachings",
          "Flexibilität: Remote-first, flexible Arbeitszeiten; Büro im Münchner Kreativviertel nach Absprache",
          "Team-Spirit: After-Work-Formate & Team-Events; sportliche Angebote nach Verfügbarkeit",
          "Einblick in beide Units: Mitarbeit an Projekten aus Studio (Marke & Strategie) und Lab (Web & Automation)",
        ],
      },
    ],
  },
  {
    id: "item-2",
    title: "Vertrieb & Business Development (m/w/d)",
    tags: ["📍 Remote/München", "💼 Vollzeit (unbefristet) oder Freelance", "🚀 Start asap"],
    mailto: "mailto:info@newedgebrand.com?subject=Bewerbung: Vertrieb & Business Development",
    sections: [
      {
        label: "Mission",
        items: [
          "Gewinne mit uns neue Kunden im DACH-Raum und baue langfristige Geschäftsbeziehungen auf – an der Schnittstelle von Kreation, Technologie und KI.",
        ],
      },
      {
        label: "Deine Aufgaben",
        items: [
          "Neukundenakquise & Outreach: Identifikation und Ansprache potenzieller Kunden (B2B) über LinkedIn, E-Mail, Telefon und Events",
          "Beratung & Bedarfsanalyse: Erstgespräche führen, Anforderungen verstehen, passgenaue Lösungen aus Studio, Media & Lab positionieren",
          "Angebotserstellung & Pitches: Erstellung von Angeboten, Präsentationen und Pitch-Decks in enger Abstimmung mit dem Team",
          "Pipeline-Management: Pflege und Steuerung der Sales-Pipeline im CRM; Forecasting & Reporting",
          "Partnerschaften & Netzwerk: Aufbau strategischer Partnerschaften; Teilnahme an Branchen-Events und Meetups",
        ],
      },
      {
        label: "Dein Profil",
        items: [
          "≥2 Jahre Erfahrung im B2B-Vertrieb, idealerweise im Agentur-, SaaS- oder Tech-Umfeld",
          "Starke Kommunikations- und Verhandlungsfähigkeiten; sicheres Auftreten in Kundengesprächen",
          "Verständnis für digitale Produkte, Branding und/oder KI-Lösungen – kein tiefes Tech-Wissen nötig, aber Interesse an Innovation",
          "Eigeninitiative, Abschlussstärke und CRM-Erfahrung (z. B. HubSpot, Pipedrive)",
          "Sehr gutes Deutsch (C2) und gutes Englisch; DACH-Netzwerk von Vorteil",
        ],
      },
      {
        label: "Wir bieten",
        items: [
          "Remote-first & Flex-Time: flexible Arbeitszeiten, remote/hybrid möglich",
          "Attraktive Vergütung: Fixum + leistungsbasierte Provision; faire Konditionen für Freelancer",
          "Modernes Umfeld: innovatives Produkt-Portfolio, kurze Entscheidungswege, direkter Draht zur Geschäftsführung",
          "Weiterbildung: Sales-Trainings, KI-Updates und Zugang zu modernen Tools & Stacks",
          "Wachstumspotenzial: Mitgestaltung der Vertriebsstrategie in einer wachsenden Agentur",
        ],
      },
    ],
  },
  {
    id: "item-3",
    title: "Praktikum Vertrieb & Business Development (m/w/d)",
    tags: ["📍 Remote/München", "💼 Vollzeit, 3–6 Monate", "🚀 Start jederzeit"],
    mailto: "mailto:info@newedgebrand.com?subject=Bewerbung: Praktikum Vertrieb & Business Development",
    sections: [
      {
        label: "Deine Aufgaben",
        items: [
          "Lead-Recherche & Prospecting: Identifikation potenzieller B2B-Kunden, Recherche zu Branchen, Unternehmen und Ansprechpartnern",
          "Outreach-Unterstützung: Vorbereitung von E-Mail-Sequenzen, LinkedIn-Nachrichten und Gesprächsleitfäden",
          "CRM-Pflege: Kontaktdaten anlegen, Pipeline-Updates, einfache Reportings und Auswertungen",
          "Pitch-Vorbereitung: Mitarbeit an Präsentationen, Angeboten und Case-Study-Aufbereitungen für Studio & Lab",
          "Markt- & Wettbewerbsanalysen: Trends im Agentur-/KI-Markt beobachten, Insights aufbereiten",
        ],
      },
      {
        label: "Dein Profil",
        items: [
          "Eingeschriebene:r Student:in in BWL, Marketing, Kommunikation o. ä.; idealerweise Pflichtpraktikum möglich",
          "Interesse an Vertrieb, Kundenbeziehungen und digitalen Geschäftsmodellen",
          "Kommunikationsstärke, Eigeninitiative und strukturierte Arbeitsweise",
          "Sehr gutes Deutsch (C1+) und gutes Englisch; erste CRM-Erfahrung von Vorteil",
        ],
      },
      {
        label: "Wir bieten",
        items: [
          "Onboarding & Mentoring: strukturiertes Onboarding, persönliche Betreuung durch erfahrene Vertriebler:innen",
          "Praxisnahe Einblicke: echte Kundenprojekte, Sales-Calls und Pitch-Situationen von Anfang an",
          "Flexibilität: Remote-first, flexible Arbeitszeiten; Büro in München nach Absprache",
          "Team-Spirit: After-Work-Formate, Team-Events und offene Feedback-Kultur",
          "Karriereperspektive: bei guter Leistung Übernahme in eine Festanstellung möglich",
        ],
      },
    ],
  },
  {
    id: "item-4",
    title: "Werkstudent:in – DevOps & Full-Stack (m/w/d)",
    tags: ["📍 Remote/München", "💼 12–20 h/Woche", "🚀 Start flexibel"],
    mailto: "mailto:info@newedgebrand.com?subject=Bewerbung: Werkstudent:in DevOps & Full-Stack",
    sections: [
      {
        label: "Deine Aufgaben",
        items: [
          "CI/CD & Containers: Unterstützung beim Aufbau/Pflege von Pipelines; Container-Builds; Dev/Test-Environments",
          "Full-Stack-Entwicklung: kleinere Features in internen Tools & Kunden-Dashboards (Frontend: Next.js/React; Backend: Node/TypeScript), API-Integrationen",
          "Datenbanken & Integrationen: Postgres & Supabase; Arbeit mit REST, SQL, ETL",
          "Automationen & Skripte: n8n-Workflows, Supabase-Integrationen, Skripte (TypeScript)",
          "QA & Dokumentation: Tests, Doku, saubere Deliverables",
        ],
      },
      {
        label: "Dein Profil",
        items: [
          "Eingeschriebene:r Student:in (Wirtschafts-)Informatik o. ä.; idealerweise ab dem 3. Semester",
          "Erste Programmiererfahrung mit JavaScript/TypeScript; Interesse an Full-Stack & Software-Architektur",
          "Gute Git-Kenntnisse; Basiswissen Cloud & Docker; sehr gutes Deutsch (C1); eigenständig & strukturiert; Neugier für KI/Automation",
          "Nice-to-have: Prisma, Tailwind, Postgres, Auth/OAuth, Vektor-DBs",
        ],
      },
      {
        label: "Wir bieten",
        items: [
          "Mentoring & Feedback: enge Betreuung durch erfahrene Entwickler:innen, regelmäßige 1:1s",
          "Praxisrelevante Projekte: echte Kunden-/Produkt-Use-Cases mit gesellschaftlichem Impact",
          "Flexibilität: Remote-Optionen, flexible Arbeitszeiten; studiumskompatibel",
          "Team-Spirit: kleines, unterstützendes Team; strukturierte Einarbeitung & klare Roadmaps",
          "Lab-Zugang: Einblicke in produktive KI-Stacks & moderne Toolchains",
        ],
      },
    ],
  },
];

const values = [
  {
    label: "01",
    title: "Innovation First",
    desc: "Arbeite mit cutting-edge KI-Technologien und gestalte die Zukunft aktiv mit.",
  },
  {
    label: "02",
    title: "Work-Life Balance",
    desc: "Flexible Arbeitszeiten, Remote-Möglichkeiten und Raum für dein Leben neben der Arbeit.",
  },
  {
    label: "03",
    title: "Weiterentwicklung",
    desc: "Kontinuierliche Weiterbildung, Konferenz-Besuche und persönliches Entwicklungsbudget.",
  },
];

const Careers = () => {
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, []);
  const ctaBtnRef = useRef<HTMLDivElement>(null);

  const CALENDLY = "https://calendly.com/sebastian-p-newedgebrand/30min";
  const scrollToContact = () => window.open(CALENDLY, "_blank", "noopener");

  return (
    <>
      <SEOHead
        title="Karriere bei New Edge München | Jobs in KI, Brand & Digital"
        description="Du willst an der Schnittstelle von Marke, Digital und KI arbeiten? New Edge Brand sucht Gestalter, Entwickler und KI-Strategen für München."
        canonical="/careers"
      />

      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <NoiseOverlay opacity={0.03} fixed zIndex={2} />
        <MobileNavigation onContactClick={scrollToContact} theme="dark" />

        {/* ── HERO ── */}
        <div className="relative" style={{ background: "#0A0412", minHeight: "100dvh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div aria-hidden style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
            <AuroraFlow />
          </div>
          <div aria-hidden style={{
            position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
            background: "radial-gradient(ellipse 70% 65% at 50% 50%, rgba(4,1,12,0.72) 0%, rgba(4,1,12,0.28) 55%, transparent 82%)",
          }} />

          {/* Shimmer keyframe */}
          <style>{`@keyframes cr-shimmer { from { background-position: -220% center; } to { background-position: 220% center; } }`}</style>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "clamp(100px,16vh,140px) 24px clamp(60px,8vh,100px)", fontFamily: SANS }}
          >
            {/* Eyebrow */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "28px" }}>
              <span style={{ width: "32px", height: "1px", background: "#C4B5FD", display: "block" }} />
              <span style={{ ...MONO, fontSize: "11px", letterSpacing: "0.22em", color: "#C4B5FD", textTransform: "uppercase" }}>
                New Edge
              </span>
              <span style={{ width: "32px", height: "1px", background: "#C4B5FD", display: "block" }} />
            </div>

            {/* Headline */}
            <h1 style={{
              ...SERIF,
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(3rem, 7vw, 6rem)",
              lineHeight: 0.96,
              letterSpacing: "-0.02em",
              marginBottom: "32px",
            }}>
              <span style={{
                background: "linear-gradient(115deg, #fff 0%, #fff 24%, #f6f2ff 36%, #ece5ff 44%, #f8f5ff 50%, #f3efff 57%, #fff 68%, #fff 100%)",
                backgroundSize: "280% auto",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
                animation: "cr-shimmer 18s ease-in-out infinite alternate",
                display: "inline",
              }}>
                Karriere.
              </span>
            </h1>

            {/* Subline */}
            <p style={{
              fontFamily: SANS,
              fontSize: "clamp(15px, 1.7vw, 18px)",
              color: "#a0a0a0",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.62,
              fontWeight: 400,
            }}>
              Wir suchen Gestalter, Entwickler und Strategen, die an der Schnittstelle von Marke, Technologie und KI echte Wirkung erzeugen wollen.
            </p>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "2px",
              height: "clamp(80px, 10vh, 130px)",
              background: "linear-gradient(to bottom, rgba(196,181,253,0), #C4B5FD 50%, rgba(196,181,253,0.6))",
              boxShadow: "0 0 10px rgba(196,181,253,0.45)",
              zIndex: 3,
            }}
          />
        </div>

        {/* ── ÜBER UNS + WARUM ── */}
        <div style={{ background: "#F8F5FF", padding: "clamp(64px,8vw,112px) 24px" }}>
          <div style={{ maxWidth: "1040px", margin: "0 auto" }}>

            {/* Über uns */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE }}
              style={{ marginBottom: "clamp(56px, 7vw, 96px)" }}
            >
              <p style={{ ...MONO, fontSize: "11px", letterSpacing: "0.22em", color: VIOLET, textTransform: "uppercase", marginBottom: "20px" }}>
                Über uns
              </p>
              <p style={{
                fontFamily: SANS,
                fontSize: "clamp(17px, 2vw, 22px)",
                color: "rgba(26,10,46,0.55)",
                lineHeight: 1.65,
                fontWeight: 400,
                maxWidth: "760px",
              }}>
                New Edge ist eine Creative-Tech-Agentur an der Schnittstelle von Kreation und Technologie. Wir verbinden Marke, Strategie und Technologie in zwei integrierten Units –{" "}
                <span style={{ color: INK_DEEP, fontWeight: 500 }}>Studio</span>{" "}(Marke, Strategie & KI-Beratung) und{" "}
                <span style={{ color: INK_DEEP, fontWeight: 500 }}>Lab</span>{" "}(Website, Automation & Ownership) – mit klaren Prozessen und messbaren Ergebnissen.
              </p>
            </motion.div>

            {/* Warum NEW EDGE */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: EASE }}
                style={{ marginBottom: "clamp(32px, 4vw, 48px)" }}
              >
                <p style={{ ...MONO, fontSize: "11px", letterSpacing: "0.22em", color: VIOLET, textTransform: "uppercase", marginBottom: "16px" }}>
                  Warum New Edge
                </p>
                <h2 style={{ ...SERIF, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: INK_DEEP, lineHeight: 1.0, letterSpacing: "-0.02em" }}>
                  Was dich erwartet.
                </h2>
              </motion.div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1px", background: HAIRLINE }}>
                {values.map((v, i) => (
                  <motion.div
                    key={v.label}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.55, ease: EASE, delay: i * 0.08 }}
                    style={{ background: "#FFFFFF", padding: "clamp(28px, 4vw, 40px)" }}
                  >
                    <span style={{ ...MONO, fontSize: "10px", letterSpacing: "0.2em", color: VIOLET, textTransform: "uppercase", display: "block", marginBottom: "20px" }}>
                      {v.label}
                    </span>
                    <h3 style={{ ...SERIF, fontStyle: "italic", fontSize: "1.35rem", color: INK_DEEP, marginBottom: "12px", lineHeight: 1.1 }}>
                      {v.title}
                    </h3>
                    <p style={{ ...MONO, fontSize: "12.5px", color: "rgba(26,10,46,0.58)", lineHeight: 1.65 }}>
                      {v.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── OFFENE POSITIONEN ── */}
        <div style={{ background: "#ffffff", padding: "clamp(64px,8vw,112px) 24px" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE }}
              style={{ marginBottom: "clamp(40px, 5vw, 64px)", textAlign: "center" }}
            >
              <p style={{ ...MONO, fontSize: "11px", letterSpacing: "0.22em", color: VIOLET, textTransform: "uppercase", marginBottom: "16px" }}>
                Stellen
              </p>
              <h2 style={{ ...SERIF, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: INK_DEEP, lineHeight: 1.0, letterSpacing: "-0.02em", marginBottom: "20px" }}>
                Offene Positionen.
              </h2>
              <p style={{ fontFamily: SANS, fontSize: "14px", color: "rgba(26,10,46,0.5)", lineHeight: 1.6, maxWidth: "520px", margin: "0 auto 10px" }}>
                Schick uns deine Bewerbung (Lebenslauf + kurzes Anschreiben) an{" "}
                <a href="mailto:info@newedgebrand.com" style={{ color: VIOLET, textDecoration: "none", borderBottom: `1px solid rgba(91,33,182,0.25)` }}>info@newedgebrand.com</a>
                {" "}— oder direkt über den Button.
              </p>
              <a href="tel:+4917660431467" style={{ ...MONO, fontSize: "11px", letterSpacing: "0.12em", color: "rgba(26,10,46,0.38)", textDecoration: "none", borderBottom: "1px solid rgba(26,10,46,0.15)", paddingBottom: "1px" }}>
                ↗ +49 176 60 431 467
              </a>
            </motion.div>

            <Accordion type="single" collapsible className="space-y-0">
              {positions.map((pos, pi) => (
                <motion.div
                  key={pos.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, ease: EASE, delay: pi * 0.07 }}
                >
                  <AccordionItem
                    value={pos.id}
                    style={{
                      border: `1px solid ${HAIRLINE}`,
                      borderTop: pi === 0 ? `1px solid ${HAIRLINE}` : "none",
                      borderRadius: 0,
                    }}
                    className="overflow-hidden"
                  >
                    <AccordionTrigger
                      className="hover:no-underline hover:bg-[#F8F5FF] transition-colors duration-200"
                      style={{ padding: "clamp(20px, 3vw, 28px) clamp(20px, 3vw, 32px)" }}
                    >
                      <div style={{ textAlign: "left", flex: 1, paddingRight: "16px" }}>
                        <span style={{ ...SERIF, fontStyle: "italic", fontSize: "clamp(1rem, 2vw, 1.25rem)", color: INK_DEEP, display: "block", marginBottom: "10px", lineHeight: 1.2 }}>
                          {pos.title}
                        </span>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                          {pos.tags.map((tag, ti) => (
                            <span key={ti} style={{ ...MONO, fontSize: "10.5px", letterSpacing: "0.06em", color: "rgba(26,10,46,0.45)" }}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent style={{ padding: "0 clamp(20px, 3vw, 32px) clamp(24px, 3vw, 36px)" }}>
                      <div style={{ borderTop: `1px solid ${HAIRLINE}`, paddingTop: "24px" }}>
                        {pos.sections.map((sec, si) => (
                          <div key={si} style={{ marginBottom: si < pos.sections.length - 1 ? "24px" : "28px" }}>
                            <p style={{ ...MONO, fontSize: "10.5px", letterSpacing: "0.18em", color: VIOLET, textTransform: "uppercase", marginBottom: "10px" }}>
                              {sec.label}
                            </p>
                            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                              {sec.items.map((item, ii) => (
                                <li key={ii} style={{ display: "flex", gap: "10px", marginBottom: "8px" }}>
                                  <span style={{ color: VIOLET, fontSize: "9px", marginTop: "5px", flexShrink: 0 }}>▸</span>
                                  <span style={{ fontFamily: SANS, fontSize: "13px", color: "rgba(26,10,46,0.62)", lineHeight: 1.6 }}>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        <a
                          href={pos.mailto}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            marginTop: "4px",
                            ...MONO,
                            fontSize: "11px",
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            color: "#fff",
                            background: VIOLET,
                            padding: "13px 24px",
                            textDecoration: "none",
                            border: "none",
                          }}
                        >
                          Jetzt bewerben ↗
                        </a>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>

        {/* ── INITIATIVBEWERBUNG CTA ── */}
        <CursorLine buttonRef={ctaBtnRef} buttonRadius={8}>
        <div style={{
          background: INK_DEEP,
          padding: "clamp(64px,8vw,100px) 24px",
          position: "relative",
        }}>
          <div aria-hidden style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: "radial-gradient(ellipse 70% 60% at 0% 100%, rgba(91,33,182,0.28) 0%, transparent 65%)",
          }} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE }}
            style={{
              position: "relative",
              zIndex: 1,
              maxWidth: "900px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "clamp(32px, 6vw, 80px)",
              alignItems: "center",
            }}
          >
            {/* LEFT — text */}
            <div>
              <p style={{ ...MONO, fontSize: "11px", letterSpacing: "0.22em", color: "#C4B5FD", textTransform: "uppercase", marginBottom: "20px" }}>
                Kein passendes Angebot?
              </p>
              <h2 style={{
                ...SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(2rem, 4vw, 3.4rem)",
                color: "#fff",
                lineHeight: 1.0,
                marginBottom: "20px",
                letterSpacing: "-0.01em",
              }}>
                Initiativ­<br />bewerbung.
              </h2>
              <p style={{
                fontFamily: SANS,
                fontSize: "14px",
                color: "rgba(196,181,253,0.60)",
                lineHeight: 1.7,
                marginBottom: "32px",
                maxWidth: "380px",
              }}>
                Kein passendes Stellenangebot gefunden? Kein Problem — schreib Wenjamin Zabezhanskiy direkt an und erzähl uns, was dich antreibt.
              </p>
              <a
                ref={ctaBtnRef as React.RefObject<HTMLAnchorElement>}
                href="mailto:info@newedgebrand.com?subject=Initiativbewerbung"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  ...MONO,
                  fontSize: "13px",
                  letterSpacing: "0.1em",
                  color: "rgba(196,181,253,0.75)",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(196,181,253,0.2)",
                  paddingBottom: "2px",
                  transition: "color 0.2s",
                  cursor: "pointer",
                }}
              >
                <span style={{ fontSize: "16px", opacity: 0.7 }}>↗</span>
                info@newedgebrand.com
              </a>
            </div>

            {/* RIGHT — Wenjamin circle */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <motion.div
                style={{ position: "relative", width: "152px", height: "152px" }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.28 }}
              >
                {/* Revolving text ring */}
                <div style={{ position: "absolute", inset: 0, animation: "careers-spin 12s linear infinite" }}>
                  <svg viewBox="0 0 200 200" style={{ width: "100%", height: "100%" }}>
                    <defs>
                      <path id="careers-circle" d="M 100,100 m -72,0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0" />
                    </defs>
                    <text style={{ fontSize: "17px", fill: "#ffffff", fontFamily: "Consolas, ui-monospace, monospace", letterSpacing: "0.04em" }}>
                      <textPath href="#careers-circle" startOffset="0%">JETZT BEWERBEN · JETZT BEWERBEN · </textPath>
                    </text>
                  </svg>
                  <style>{`@keyframes careers-spin { to { transform: rotate(360deg); } }`}</style>
                </div>
                {/* Center image */}
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: "96px", height: "96px", borderRadius: "50%", overflow: "hidden", border: "2.5px solid #5B21B6", boxShadow: "0 4px 20px rgba(91,33,182,0.28)" }}>
                    <img
                      src={wenjaminImg}
                      alt="Wenjamin Zabezhanskiy — Initiativbewerbung"
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%" }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        </CursorLine>

        <Suspense fallback={<div style={{ minHeight: 200 }} />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default Careers;
