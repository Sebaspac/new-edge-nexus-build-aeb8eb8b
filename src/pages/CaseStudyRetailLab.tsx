import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from "react-helmet-async";
import { Footer } from "@/components/Footer";
import {
  Lightbulb,
  Rocket,
  Sparkles,
  Brain,
  Target,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Zap,
  Cpu,
  TrendingUp,
  FlaskConical,
  Database,
  Lock,
  Search,
  FileText,
  Calendar,
  Code,
  Shield,
  Users,
} from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedSection = ({ children, className = "" }: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}
    >
      {children}
    </div>
  );
};

const CaseStudyRetailLab = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const scrollToContact = () => {
    navigate("/", {
      replace: true,
    });
    setTimeout(() => {
      const contactSection = document.getElementById("contact-section");
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 100);
  };

  const phases = [
    {
      number: "PHASE 1",
      title: "Strategie & Konzeption",
      description: "Den Grundstein für intelligente Wissensorganisation legen. Analyse der gesamten Dokumentenlandschaft und Entwicklung der Systemarchitektur.",
      features: [
        {
          icon: Database,
          title: "Vollständige Analyse der Dokumentenlandschaft",
          description: "Erfassung aller Wissensquellen und Dokumententypen im Unternehmen.",
        },
        {
          icon: Target,
          title: "Definition der Wissensdomänen",
          description: "Strukturierung nach Produktion, Service und Vertrieb für optimale Suche.",
        },
        {
          icon: Shield,
          title: "Sicherheits- & Rollenmodell",
          description: "Entwicklung eines Rechte-Management-Systems und Compliance-Check für sensible Daten.",
        },
        {
          icon: Search,
          title: "UX-Konzept für interne Wissenssuche",
          description: "Benutzerfreundliche Oberfläche für schnellen Zugriff auf relevante Informationen.",
        },
      ],
    },
    {
      number: "PHASE 2",
      title: "Kreation & Content",
      description: "Aufbereitung und Optimierung der Wissensbasis. Transformation unstrukturierter Daten in intelligent durchsuchbare Informationen.",
      features: [
        {
          icon: FileText,
          title: "Datenaufbereitung & Chunking",
          description: "Segmentierung großer Dokumente in suchbare Einheiten.",
        },
        {
          icon: Brain,
          title: "Embedding-Optimierung",
          description: "Spezialisierung auf technische Fachtermini für präzise Suchergebnisse.",
        },
        {
          icon: Cpu,
          title: "Prompt-Logiken für unterschiedliche Rollen",
          description: "Anpassung der KI-Antworten an spezifische Abteilungen und Nutzergruppen.",
        },
        {
          icon: CheckCircle,
          title: "Knowledge Validation",
          description: "Überprüfung durch interne Experten für höchste Qualität.",
        },
      ],
    },
    {
      number: "PHASE 3",
      title: "Technische Umsetzung & Launch",
      description: "Integration in die Unternehmensinfrastruktur. Implementierung des vollständigen RAG-Systems mit Sicherheits- und Compliance-Features.",
      features: [
        {
          icon: Database,
          title: "Implementierung der Vektordatenbank",
          description: "Technische Basis für schnelle semantische Suche.",
        },
        {
          icon: Code,
          title: "API-Anbindungen an interne Tools",
          description: "Integration mit bestehenden Systemen und Workflows.",
        },
        {
          icon: Lock,
          title: "Rechte-Management & SSO",
          description: "Sichere Authentifizierung und rollenbasierte Zugriffssteuerung.",
        },
        {
          icon: Rocket,
          title: "Schulung & Laufende Optimierung",
          description: "Team-Training und kontinuierliche Verbesserung des Systems.",
        },
      ],
    },
  ];

  const results = [
    {
      metric: "4-6 Stunden",
      description: "Täglich Zeitersparnis im Support",
    },
    {
      metric: "18.000+",
      description: "Dokumente indexiert und durchsuchbar",
    },
    {
      metric: "< 1 Min",
      description: "Durchschnittliche Suchzeit (vorher >20 Min)",
    },
    {
      metric: "100%",
      description: "Demokratisiertes Wissen für alle Mitarbeiter",
    },
  ];

  const services = [
    "Vollständiger RAG-Stack (Retrieval Augmented Generation)",
    "Extraktion & Indexierung von PDFs, CAD-Daten, Word-Dateien & Datenbanken",
    "Unternehmensinterner Chat-Agent inkl. Rollenrechten",
    "Automatisierte Antwortgenerierung für Service & Produktion",
    "Deep-Search-Funktionen (z. B. nach Bauteilen oder Servicecodes)",
    "Protokollierung & Audit-Log für Compliance",
  ];

  const orbitalTimelineData = [
    {
      id: 1,
      title: "Data & System Audit",
      date: "Woche 1-2",
      content: "Vollständige Analyse der Dokumentenlandschaft und Systemarchitektur",
      category: "planning",
      icon: Database,
      status: "completed" as const,
      energy: 90,
      relatedIds: [2],
    },
    {
      id: 2,
      title: "Architektur & RAG-Konzept",
      date: "Woche 3-5",
      content: "Definition der Wissensdomänen und technisches Konzept",
      category: "analysis",
      icon: Target,
      relatedIds: [1, 3],
      status: "completed" as const,
      energy: 85,
    },
    {
      id: 3,
      title: "Datenreinigung, Embeddings, Vektordatenbank",
      date: "Woche 5-8",
      content: "Datenaufbereitung und Embedding-Optimierung",
      category: "design",
      icon: Brain,
      relatedIds: [2, 4],
      status: "completed" as const,
      energy: 95,
    },
    {
      id: 4,
      title: "Agent-Logik & Chat-Oberfläche",
      date: "Woche 8-10",
      content: "Implementierung der KI-Logik und Benutzeroberfläche",
      category: "development",
      icon: Cpu,
      relatedIds: [3, 5],
      status: "completed" as const,
      energy: 88,
    },
    {
      id: 5,
      title: "Testphase (Service/Produktion)",
      date: "Woche 10-12",
      content: "Testing mit Service- und Produktionsteams",
      category: "testing",
      icon: FlaskConical,
      relatedIds: [4, 6],
      status: "completed" as const,
      energy: 92,
    },
    {
      id: 6,
      title: "Rollout & Schulung",
      date: "Woche 13",
      content: "Unternehmensweiter Launch und Team-Training",
      category: "launch",
      icon: Rocket,
      relatedIds: [5],
      status: "completed" as const,
      energy: 100,
    },
  ];

  return (
    <>
      <Helmet>
        <title>RAG-Wissensagent Case Study - NEW EDGE</title>
        <meta
          name="description"
          content="Wie wir für ein Maschinenbau-KMU einen unternehmensweiten RAG-Wissensagenten entwickelten, der 18.000+ Dokumente indexiert und Supportzeiten halbiert."
        />
      </Helmet>

      <MobileNavigation onContactClick={scrollToContact} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background/95 to-primary/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(var(--primary-rgb),0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(var(--primary-rgb),0.05),transparent_50%)]" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
                <Brain className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Maschinenbau</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                RAG-Wissensagent
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                Industriewissen. Sofort verfügbar. Wie wir für ein Maschinenbau-KMU einen unternehmensweiten RAG-Wissensagenten entwickelten, der 18.000+ Dokumente indexiert, Wissen demokratisiert und Supportzeiten halbiert.
              </p>

              <div className="flex flex-wrap justify-center gap-8 mb-12">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-muted-foreground">Branche</div>
                    <div className="font-semibold">Maschinenbau</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-muted-foreground">Services</div>
                    <div className="font-semibold">Lab + Studio</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-muted-foreground">Timeline</div>
                    <div className="font-semibold">13 Wochen</div>
                  </div>
                </div>
              </div>

              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:scale-105 transition-transform duration-300"
              >
                Jetzt Kontakt aufnehmen
              </button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-24 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Über das Unternehmen
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Das Familienunternehmen (140 Mitarbeiter) produziert Präzisionsmaschinen für die Automobil- und Verpackungsindustrie. Über Jahrzehnte wuchs ein Wissensfundus aus Handbüchern, CAD-Daten, Serviceprotokollen, E-Mails und Excel-Archiven.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Neue Mitarbeiter fanden sich kaum zurecht, Serviceanfragen waren schwer skalierbar. Das Wissen war fragmentiert und nur schwer zugänglich.
                  </p>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <Brain className="w-24 h-24 text-primary/30" />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { label: "Mitarbeiter", value: "140" },
                  { label: "Dokumente indexiert", value: "18.000+" },
                  { label: "Branchen", value: "Auto & Verpackung" },
                  { label: "Projektzeitraum", value: "13 Wochen" },
                ].map((fact, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
                  >
                    <div className="text-3xl font-bold text-primary mb-2">{fact.value}</div>
                    <div className="text-sm text-muted-foreground">{fact.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-24 bg-gradient-to-b from-background/50 to-background">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Die Herausforderung</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto" />
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  Wissensinseln, fehlende Dokumentenstruktur, Abhängigkeit von Experten, Suchzeiten über 20 Minuten pro Anfrage. Das Unternehmen stand vor der Herausforderung, jahrzehntelang gewachsenes Wissen systematisch zugänglich zu machen.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Unterschiedliche Versionsstände von Dokumenten, keine intelligente Suche über technische Daten, und die Produktion stellte täglich wiederkehrende Fragen. Kritisches Wissen verschwand mit erfahrenen Mitarbeitern in den Ruhestand.
                </p>
                <p className="text-lg text-muted-foreground">
                  Der Onboarding-Prozess war fehleranfällig und zeitintensiv. Es fehlte eine zentrale, intelligente Wissensplattform, die allen Mitarbeitern sofortigen Zugang zu relevanten Informationen ermöglicht.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <Database className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Wissensinseln</h3>
                  <p className="text-sm text-muted-foreground">Keine zentrale Wissensquelle, fragmentierte Informationen</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <Search className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Zeitverlust</h3>
                  <p className="text-sm text-muted-foreground">Suchzeiten über 20 Minuten pro Anfrage</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <Users className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Expertenabhängigkeit</h3>
                  <p className="text-sm text-muted-foreground">Kritisches Wissen nur bei einzelnen Personen</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Orbital Timeline */}
      <section className="py-24 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Projekt Timeline</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Von der ersten Analyse bis zum unternehmensweiten Rollout – ein strukturierter 13-Wochen-Prozess
              </p>
            </div>
            <RadialOrbitalTimeline timelineData={orbitalTimelineData} />
          </AnimatedSection>
        </div>
      </section>

      {/* Phases Section */}
      <section className="py-24 bg-gradient-to-b from-background/50 to-background">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Die drei Phasen</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Von der Strategie über die Datenaufbereitung bis zur technischen Umsetzung – ein strukturierter Prozess für maximalen Erfolg
              </p>
            </div>

            <div className="space-y-16">
              {phases.map((phase, index) => (
                <div
                  key={index}
                  className="max-w-6xl mx-auto"
                >
                  <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className={index % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
                      <div className="sticky top-24">
                        <div className="text-sm font-semibold text-primary mb-4">
                          {phase.number}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-6">
                          {phase.title}
                        </h3>
                        <p className="text-lg text-muted-foreground">
                          {phase.description}
                        </p>
                      </div>
                    </div>

                    <div className={index % 2 === 0 ? "lg:order-2" : "lg:order-1"}>
                      <div className="space-y-6">
                        {phase.features.map((feature, fIndex) => (
                          <div
                            key={fIndex}
                            className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
                          >
                            <feature.icon className="w-8 h-8 text-primary mb-4" />
                            <h4 className="text-xl font-semibold mb-2">
                              {feature.title}
                            </h4>
                            <p className="text-muted-foreground">
                              {feature.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services/Technologies Section */}
      <section className="py-24 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Services & Technologien</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
                  >
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ergebnisse</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Messbare Erfolge durch intelligente Wissensorganisation
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {results.map((result, index) => (
                <div
                  key={index}
                  className="text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-4">
                    {result.metric}
                  </div>
                  <div className="text-muted-foreground">
                    {result.description}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-gradient-to-b from-background/50 to-background">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <svg className="w-16 h-16 text-primary/20 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <blockquote className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                "Wir haben täglich 4–6 Stunden Zeitersparnis im Support. Das Wissen ist endlich demokratisiert."
              </blockquote>
              
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-semibold">Maschinenbau-KMU</div>
                  <div className="text-sm text-muted-foreground">140 Mitarbeiter</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Bereit für Ihren eigenen Wissensagenten?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Lassen Sie uns gemeinsam Ihr Unternehmenswissen demokratisieren
              </p>
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:scale-105 transition-transform duration-300 inline-flex items-center gap-2"
              >
                Projekt starten
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CaseStudyRetailLab;
