import { lazy, Suspense, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  FileCheck,
  ListChecks,
  Database,
  Bell,
  SlidersHorizontal,
  Scale,
  TrendingUp,
  LayoutGrid,
  Lightbulb,
  Check,
  X as XIcon,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import LogoCloud from "@/components/ui/logo-cloud";

const Footer = lazy(() => import("@/components/Footer").then((m) => ({ default: m.Footer })));

const ACCENT = "#a855f7";

/* ---------- Reusable bits ---------- */

const VisualPlaceholder = ({ caption, height = "h-[420px]" }: { caption: string; height?: string }) => (
  <div
    className={`relative w-full ${height} border-2 border-dashed border-purple-500/40 bg-gradient-to-br from-purple-500/10 via-black to-black flex items-end p-6 overflow-hidden`}
  >
    <div className="absolute inset-0 pointer-events-none" style={{
      background: "radial-gradient(circle at 30% 30%, rgba(168,85,247,0.25) 0%, transparent 60%)",
    }} />
    <p className="relative text-xs md:text-sm text-purple-200/80 leading-relaxed" style={{ fontFamily: "Consolas, monospace" }}>
      🖼️ {caption}
    </p>
  </div>
);

const Bullet = ({ Icon, children }: { Icon: any; children: React.ReactNode }) => (
  <li className="flex items-start gap-4">
    <span className="shrink-0 w-10 h-10 border border-purple-500/40 flex items-center justify-center bg-purple-500/10">
      <Icon className="w-5 h-5 text-purple-300" />
    </span>
    <span className="text-base md:text-lg text-white/80 leading-relaxed pt-1.5" style={{ fontFamily: "Consolas, monospace" }}>
      {children}
    </span>
  </li>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs uppercase tracking-[0.3em] text-purple-400 mb-4">{children}</p>
);

const PrimaryCTA = ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => (
  <Button
    onClick={onClick}
    className="bg-purple-500 text-white hover:bg-purple-600 rounded-none px-6 py-5 text-base font-semibold transition-all hover:-translate-y-0.5"
  >
    {children}
    <ArrowRight className="w-4 h-4 ml-2" />
  </Button>
);

const GhostCTA = ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => (
  <Button
    onClick={onClick}
    className="bg-transparent backdrop-blur-md text-white border-2 border-white hover:bg-white hover:text-black rounded-none px-6 py-5 text-base font-semibold transition-all"
  >
    {children}
  </Button>
);

/* ---------- Page ---------- */

const PainPointAuswahlverfahren = () => {
  const [, setContactOpen] = useState(false);

  const integrations = [
    "Microsoft Teams",
    "SharePoint",
    "Outlook",
    "HubSpot",
    "Zapier",
    "Make",
    "Notion",
    "Google Workspace",
    "SAP",
  ];

  const compareRows = [
    ["Bewerbungseingang", "Strukturiert & automatisch erfasst", "PDFs, Mails, verschiedene Formate"],
    ["Jury-Koordination", "Vollautomatisiert", "Endlose E-Mail-Threads"],
    ["Vergleichbarkeit", "Einheitliches Kategoriensystem", "Äpfel mit Birnen"],
    ["Entscheidungsdokumentation", "Revisionssicher & automatisch", "Existiert kaum"],
    ["Wissen nach dem Zyklus", "Persistente Datenbasis", "Geht jedes Jahr verloren"],
    ["Implizite Analysen", "Automatisch generiert", "Nicht vorhanden"],
    ["Kosten", "Planbar & skalierbar", "60–70k€ pro Zyklus"],
  ];

  const featureCards = [
    {
      title: "KI Bewerbungsanalyse",
      desc: "Jede Einreichung wird automatisch analysiert, kategorisiert und für die Jury aufbereitet — in Sekunden statt Wochen.",
      caption: "Animation: Dokumente fließen in Trichter, strukturierte Daten kommen raus",
    },
    {
      title: "Automatisierte Jury-Koordination",
      desc: "Briefings, Reminder, Deadlines — alles läuft automatisch. Dein Team fokussiert sich auf Entscheidungen, nicht Verwaltung.",
      caption: "Animation: Kalender + automatische Benachrichtigungen erscheinen",
    },
    {
      title: "Implizite Erkenntnisse & Analysen",
      desc: "Aus jedem Zyklus entstehen automatisch Muster, Trends und Insights — die deinen nächsten Prozess besser machen.",
      caption: "Animation: Datenpunkte clustern sich, Insight-Badge erscheint",
    },
  ];

  const testimonials = Array.from({ length: 8 }).map((_, i) => ({
    name: `Ansprechpartner ${i + 1}`,
    role: i % 2 === 0 ? "Projektleitung, Award-Organisation" : "Geschäftsführung, Förderinstitution",
    quote:
      i % 2 === 0
        ? "Endlich ein System das mit unserem Anspruch an Qualität mithält. Die Jury liebt das neue Interface."
        : "Wir haben unseren gesamten Bewerbungszyklus halbiert — bei doppelter Datenqualität.",
    initials: `O${i + 1}`,
  }));

  const faqs = [
    {
      q: "Wie lange dauert die Implementierung?",
      a: "In der Regel 2–4 Wochen bis zum ersten produktiven Bewerbungszyklus. Wir migrieren bestehende Daten und trainieren euer Team — inklusive.",
    },
    {
      q: "Können wir unser bestehendes Kategoriensystem übernehmen?",
      a: "Ja. New Edge baut auf euren bestehenden Kriterien auf und operationalisiert sie. Wir entwickeln das System gemeinsam — ihr behaltet die volle Kontrolle über die Bewertungslogik.",
    },
    {
      q: "Wie funktioniert die Jury-Anonymität?",
      a: "Jury-Bewertungen können vollständig anonymisiert werden. Einzelne Scores sind nur für definierte Rollen sichtbar — die Aggregation ist für alle zugänglich.",
    },
    {
      q: "Was passiert mit den Daten nach dem Zyklus?",
      a: "Alle Daten verbleiben in eurer Infrastruktur. New Edge kann lokal oder in eurer Cloud gehostet werden — volle Datensouveränität ist garantiert.",
    },
  ];

  return (
    <>
      <SEOHead
        title="KI für Auswahlverfahren & Awards | Bessere Entscheidungen | New Edge"
        description="Automatisierte Bewerbungsanalyse, Jury-Koordination und implizite Erkenntnisse. New Edge transformiert eure Auswahlverfahren in datenbasierte, revisionssichere Systeme."
        canonical="/leistungen/pain-points/auswahlverfahren"
      />

      <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
        <MobileNavigation onContactClick={() => setContactOpen(true)} theme="dark" />

        {/* SECTION 1 — HERO */}
        <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
          <div
            className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: "min(900px, 90vw)",
              height: "min(900px, 90vw)",
              background:
                "radial-gradient(circle, rgba(168,85,247,0.22) 0%, rgba(168,85,247,0.10) 30%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <SectionLabel>KI-Automatisierung für Auswahlverfahren</SectionLabel>
                <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-6">
                  Trefft bessere Entscheidungen mit{" "}
                  <span style={{ color: ACCENT }}>KI-gestützten Bewertungssystemen</span>
                </h1>
                <p
                  className="text-base md:text-lg text-white/70 mb-8 leading-relaxed max-w-xl"
                  style={{ fontFamily: "Consolas, monospace" }}
                >
                  Unstrukturierte Bewerbungen, überlastete Jurys, verlorenes Wissen — Jahr für Jahr. New Edge
                  verwandelt euren gesamten Auswahlprozess in ein datenbasiertes, automatisiertes System. Von der
                  ersten Bewerbung bis zur revisionssicheren Entscheidung.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <PrimaryCTA onClick={() => setContactOpen(true)}>Kostenlose Demo buchen</PrimaryCTA>
                  <GhostCTA>Case Study ansehen — BMP Award</GhostCTA>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <VisualPlaceholder
                  caption="Hero Visual: Dashboard-Mockup. Linke Seite zeigt unstrukturierte PDF-Stapel (chaos), rechte Seite zeigt strukturiertes Scoring-Dashboard mit Balken, Kategorien, Jury-Scores. Transition-Animation zwischen beiden Zuständen. Purple Akzente auf Datenpunkten."
                  height="h-[480px]"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — SOCIAL PROOF */}
        <section className="border-y border-white/10 py-12 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center mb-6">
            <p className="text-sm uppercase tracking-[0.25em] text-white/50">
              Vertraut von führenden Organisationen in Deutschland
            </p>
          </div>
          <LogoCloud />
        </section>

        {/* SECTION 3 — KERN-PROBLEM BLOCK 1 */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <VisualPlaceholder caption="Animiertes Mockup: Ungeordnete PDF-Icons fallen von oben ins Bild → werden von einem KI-System erfasst → strukturiertes Formular erscheint mit ausgefüllten Feldern. Purple Scanning-Linie als Animation." />
              <div>
                <SectionLabel>Pain Point 1</SectionLabel>
                <h2 className="text-3xl md:text-5xl leading-tight mb-6">
                  Schluss mit dem <span style={{ color: ACCENT }}>Dokumenten-Chaos</span>
                </h2>
                <p className="text-white/70 mb-8 text-base md:text-lg leading-relaxed" style={{ fontFamily: "Consolas, monospace" }}>
                  Bewerbungen kommen als PDFs, Freitexte, E-Mails — in zehn verschiedenen Formaten. Niemand kann sie
                  systematisch vergleichen. New Edge schafft strukturierte Datenerfassung, automatische
                  Vollständigkeitsprüfung und einen geführten Bewerbungsprozess — der Bewerber und Organisation
                  gleichermaßen entlastet.
                </p>
                <ul className="space-y-5 mb-10">
                  <Bullet Icon={FileCheck}>Automatische Dokumentenprüfung auf Vollständigkeit</Bullet>
                  <Bullet Icon={ListChecks}>Guided Application — Schritt-für-Schritt geführt</Bullet>
                  <Bullet Icon={Database}>Persistente Datenbasis — kein Wissen geht verloren</Bullet>
                </ul>
                <PrimaryCTA>Wie es funktioniert</PrimaryCTA>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — FEATURE BLOCK 2 */}
        <section className="py-24 md:py-32 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="lg:order-2">
                <VisualPlaceholder caption="Jury-Interface Mockup: 3 Avatar-Icons (Jury-Mitglieder) vergeben jeweils Scores auf Dimensionen. Aggregationsbalken zeigt sich automatisch. Purple Highlight auf 'Konflikt erkannt'-Badge." />
              </div>
              <div className="lg:order-1">
                <SectionLabel>Pain Point 2</SectionLabel>
                <h2 className="text-3xl md:text-5xl leading-tight mb-6">
                  Jury-Koordination die <span style={{ color: ACCENT }}>sich selbst organisiert</span>
                </h2>
                <p className="text-white/70 mb-8 text-base md:text-lg leading-relaxed" style={{ fontFamily: "Consolas, monospace" }}>
                  Endlose E-Mail-Threads, vergessene Deadlines, inkonsistente Bewertungen — das kostet nicht nur Zeit,
                  sondern Qualität. New Edge automatisiert Briefings, Reminder und die gesamte Kommunikation mit
                  Jury-Mitgliedern. Jeder bewertet in seinem eigenen Interface, im eigenen Tempo.
                </p>
                <ul className="space-y-5 mb-10">
                  <Bullet Icon={Bell}>Automatische Briefings und Reminder ohne manuellen Aufwand</Bullet>
                  <Bullet Icon={SlidersHorizontal}>Operationalisiertes Bewertungssystem — keine Subjektivität mehr</Bullet>
                  <Bullet Icon={Scale}>Automatische Konflikt-Erkennung bei abweichenden Jury-Urteilen</Bullet>
                </ul>
                <PrimaryCTA>Jury-Interface ansehen</PrimaryCTA>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 — FEATURE BLOCK 3 */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <VisualPlaceholder caption="Split-Screen: Links ein einzelner Juror-Score. Rechts: Heatmap aller Juror-Scores mit markierten Abweichungen, darunter Prädiktor-Analyse-Chart. Daten leuchten in Purple auf." />
              <div>
                <SectionLabel>Pain Point 3</SectionLabel>
                <h2 className="text-3xl md:text-5xl leading-tight mb-6">
                  Implizite Erkenntnisse die <span style={{ color: ACCENT }}>niemand explizit angefragt hat</span>
                </h2>
                <p className="text-white/70 mb-8 text-base md:text-lg leading-relaxed" style={{ fontFamily: "Consolas, monospace" }}>
                  Das eigentliche Gold liegt unter der Oberfläche. Welche Jury-Mitglieder bewerten systematisch zu
                  hart? Welche Bewerbungsmerkmale korrelieren mit späterem Erfolg? Welche Trends zeigt der Markt?
                  New Edge generiert diese Analysen automatisch — aus jedem abgeschlossenen Zyklus.
                </p>
                <ul className="space-y-5 mb-10">
                  <Bullet Icon={TrendingUp}>Jury-Bias-Erkennung — systematische Muster werden sichtbar</Bullet>
                  <Bullet Icon={LayoutGrid}>Bewerber-Clustering — strukturelle Ähnlichkeiten über Kategorien hinweg</Bullet>
                  <Bullet Icon={Lightbulb}>Markt-Insights — der Award wird zur Forschungsplattform</Bullet>
                </ul>
                <PrimaryCTA>Analyse-Demo ansehen</PrimaryCTA>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 — INTEGRATIONS */}
        <section className="py-24 bg-black border-y border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
            <SectionLabel>Integrationen</SectionLabel>
            <h2 className="text-3xl md:text-5xl leading-tight mb-4 max-w-3xl mx-auto">
              Verbindet sich mit den Tools <span style={{ color: ACCENT }}>die ihr bereits nutzt</span>
            </h2>
            <p className="text-white/60 mb-12 max-w-2xl mx-auto" style={{ fontFamily: "Consolas, monospace" }}>
              Kein neues System das alles ersetzt. New Edge integriert sich in eure bestehende Infrastruktur — und
              macht sie intelligent.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {integrations.map((tool) => (
                <div
                  key={tool}
                  className="px-5 py-3 border border-white/15 bg-white/5 text-sm text-white/80 hover:border-purple-500 hover:text-white transition-colors"
                  style={{ fontFamily: "Consolas, monospace" }}
                >
                  {tool}
                </div>
              ))}
            </div>
            <p className="text-xs text-white/40 mt-8" style={{ fontFamily: "Consolas, monospace" }}>
              🖼️ Slot: echte Logo-Icons der Tools (mono-weiß), später ersetzen
            </p>
          </div>
        </section>

        {/* SECTION 7 — VERGLEICHSTABELLE */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <SectionLabel>Vergleich</SectionLabel>
              <h2 className="text-3xl md:text-5xl leading-tight">
                New Edge <span style={{ color: ACCENT }}>vs. manueller Prozess</span>
              </h2>
            </div>
            <div className="border border-white/15">
              <div className="grid grid-cols-12 bg-white/5 text-xs md:text-sm uppercase tracking-wider">
                <div className="col-span-4 p-4 md:p-5 border-r border-white/10">Kriterium</div>
                <div className="col-span-4 p-4 md:p-5 border-r border-white/10 bg-purple-500/10 text-purple-200">New Edge</div>
                <div className="col-span-4 p-4 md:p-5 text-white/60">Manueller Prozess</div>
              </div>
              {compareRows.map(([k, ne, manual], i) => (
                <div key={i} className={`grid grid-cols-12 ${i % 2 ? "bg-white/[0.02]" : ""} border-t border-white/10`}>
                  <div className="col-span-4 p-4 md:p-5 border-r border-white/10 text-white/80 text-sm md:text-base" style={{ fontFamily: "Consolas, monospace" }}>{k}</div>
                  <div className="col-span-4 p-4 md:p-5 border-r border-white/10 bg-purple-500/[0.06] flex items-start gap-2 text-sm md:text-base">
                    <Check className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                    <span className="text-white">{ne}</span>
                  </div>
                  <div className="col-span-4 p-4 md:p-5 flex items-start gap-2 text-sm md:text-base">
                    <XIcon className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <span className="text-white/60">{manual}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8 — FEATURE CARDS */}
        <section className="py-24 md:py-32 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-14">
              <SectionLabel>Was New Edge tut</SectionLabel>
              <h2 className="text-3xl md:text-5xl leading-tight max-w-3xl mx-auto">
                KI die qualifiziert, koordiniert und <span style={{ color: ACCENT }}>entscheidet</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {featureCards.map((c) => (
                <div
                  key={c.title}
                  className="border border-white/15 p-7 bg-gradient-to-b from-white/[0.03] to-transparent hover:border-purple-500 transition-colors"
                >
                  <div className="aspect-[4/3] mb-6 border border-dashed border-purple-500/40 bg-purple-500/5 flex items-end p-3">
                    <p className="text-[11px] text-purple-200/70 leading-snug" style={{ fontFamily: "Consolas, monospace" }}>
                      🖼️ {c.caption}
                    </p>
                  </div>
                  <h3 className="text-xl md:text-2xl mb-3">{c.title}</h3>
                  <p className="text-sm text-white/65 leading-relaxed" style={{ fontFamily: "Consolas, monospace" }}>
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9 — TESTIMONIAL HERO */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="bg-purple-500 p-10 md:p-20 text-black">
              <p className="text-xs uppercase tracking-[0.3em] mb-8 opacity-70">Kundenstimme</p>
              <p className="text-2xl md:text-4xl lg:text-5xl leading-tight mb-10 max-w-4xl">
                „New Edge hat unseren gesamten Auswahlprozess transformiert. Was früher 60.000€ und drei Monate Aufwand
                war, läuft jetzt automatisch — und die Qualität unserer Entscheidungen ist nachweislich besser."
              </p>
              <div>
                <p className="font-semibold">Projektleitung</p>
                <p className="text-sm opacity-80" style={{ fontFamily: "Consolas, monospace" }}>
                  Best Migration Practice Award
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 10 — TESTIMONIAL GRID */}
        <section className="py-24 md:py-32 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-14">
              <SectionLabel>Stimmen</SectionLabel>
              <h2 className="text-3xl md:text-5xl leading-tight">
                Was Organisationen über <span style={{ color: ACCENT }}>New Edge sagen</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {testimonials.map((t, i) => (
                <div key={i} className="border border-white/15 p-6 bg-white/[0.02]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-purple-500 text-white flex items-center justify-center text-sm font-semibold">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm text-white">{t.name}</p>
                      <p className="text-xs text-white/50" style={{ fontFamily: "Consolas, monospace" }}>{t.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-white/75 leading-relaxed" style={{ fontFamily: "Consolas, monospace" }}>
                    „{t.quote}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 11 — FAQ */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <SectionLabel>FAQ</SectionLabel>
                <h2 className="text-3xl md:text-5xl leading-tight mb-6">
                  Du hast Fragen?<br />
                  <span style={{ color: ACCENT }}>Wir haben Antworten.</span>
                </h2>
                <p className="text-white/65 mb-8 max-w-md" style={{ fontFamily: "Consolas, monospace" }}>
                  Was hier nicht beantwortet wird, klären wir in einem 30-Minuten-Call.
                </p>
                <Link to="/kontakt">
                  <PrimaryCTA>Kontakt aufnehmen</PrimaryCTA>
                </Link>
              </div>
              <div>
                <Accordion type="single" collapsible className="space-y-3">
                  {faqs.map((f, i) => (
                    <AccordionItem
                      key={i}
                      value={`faq-${i}`}
                      className="border border-white/15 bg-white/[0.02] px-5"
                    >
                      <AccordionTrigger className="text-left text-base md:text-lg text-white hover:no-underline">
                        {f.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-white/70 text-sm md:text-base leading-relaxed" style={{ fontFamily: "Consolas, monospace" }}>
                        {f.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 12 — CLOSING CTA */}
        <section className="relative py-28 md:py-40 overflow-hidden border-t border-white/10">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(168,85,247,0.25) 0%, rgba(168,85,247,0.08) 35%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[11px] text-white/30" style={{ fontFamily: "Consolas, monospace" }}>
            🖼️ Background: Subtile Partikel-Animation — Datenpunkte verbinden sich zu Netzwerk
          </p>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center relative z-10">
            <h2 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] mb-8">
              Hört auf, jedes Jahr dasselbe<br />
              <span style={{ color: ACCENT }}>Wissen neu zu erzeugen.</span>
            </h2>
            <p className="text-white/70 mb-10 text-base md:text-lg max-w-2xl mx-auto" style={{ fontFamily: "Consolas, monospace" }}>
              Euer nächster Bewerbungszyklus kann der erste sein, der wirklich skaliert.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <PrimaryCTA onClick={() => setContactOpen(true)}>Demo buchen</PrimaryCTA>
              <GhostCTA>Case Study herunterladen</GhostCTA>
            </div>
          </div>
        </section>

        <Suspense fallback={<div className="min-h-[200px]" />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default PainPointAuswahlverfahren;
