import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from "react-helmet-async";
import { Footer } from "@/components/Footer";
import {
  MessageSquare,
  TrendingUp,
  Users,
  BarChart3,
  Target,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Brain,
  Hash,
  Share2,
  Heart,
  Calendar,
  Mail,
  UserCheck,
  Database,
  Zap,
  Phone,
  Shield,
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

const CaseStudySocialMedia = () => {
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
      title: "Analyse & Strategie",
      description: "Überprüfung der CRM-Datenqualität und Entwicklung eines intelligenten Lead-Scoring-Systems.",
      features: [
        {
          icon: Database,
          title: "CRM-Audit & Datenqualität prüfen",
          description: "Analyse der bestehenden CRM-Daten und Identifikation von Optimierungspotenzialen.",
        },
        {
          icon: Target,
          title: "Lead-Scoring-Kriterien definieren",
          description: "Entwicklung eines KI-basierten Scoring-Systems für automatische Priorisierung.",
        },
        {
          icon: BarChart3,
          title: "Sales-Prozess dokumentieren",
          description: "Erfassung aller bestehenden Workflows und Touchpoints.",
        },
        {
          icon: Users,
          title: "Zielgruppen-Segmentierung",
          description: "Präzise Analyse und Strukturierung der Lead-Kategorien.",
        },
      ],
    },
    {
      number: "PHASE 2",
      title: "Automation & Content",
      description: "Aufbau automatisierter Lead-Nurturing-Sequenzen und personalisierter Kommunikationsstrategien.",
      features: [
        {
          icon: Brain,
          title: "Lead-Scoring-Modell trainieren",
          description: "KI-basierte Bewertung von Leads in Echtzeit für optimale Priorisierung.",
        },
        {
          icon: Mail,
          title: "E-Mail- & LinkedIn-Sequenzen erstellen",
          description: "Personalisierte Kommunikationsstrategien für verschiedene Lead-Typen.",
        },
        {
          icon: MessageSquare,
          title: "Personalisierungs-Templates entwickeln",
          description: "Dynamische Vorlagen für individuelle Ansprache.",
        },
        {
          icon: Phone,
          title: "Voice-Agent Skripte (optional)",
          description: "Automatisierte Telefon-Erstkontakte für schnellere Qualifizierung.",
        },
      ],
    },
    {
      number: "PHASE 3",
      title: "Integration & Optimierung",
      description: "Implementierung des Sales-Agents und Integration in bestehende CRM-Systeme.",
      features: [
        {
          icon: Zap,
          title: "KI-Sales-Agent implementieren",
          description: "Vollständige Automatisierung der Lead-Qualifizierung und -Ansprache.",
        },
        {
          icon: Database,
          title: "CRM-Integration & Automatisierung",
          description: "Nahtlose Anbindung an bestehende Systeme.",
        },
        {
          icon: Calendar,
          title: "Kalender-Anbindung für Termine",
          description: "Automatische Terminbuchung für qualifizierte Leads.",
        },
        {
          icon: TrendingUp,
          title: "Pipeline-Management automatisieren",
          description: "Vertriebsschulung, Monitoring und kontinuierliche Optimierung.",
        },
      ],
    },
  ];

  const results = [
    {
      metric: "Transformiert",
      description: "Pipeline-Fokus auf hochrelevante Leads",
    },
    {
      metric: "Echtzeit",
      description: "Automatisches Lead-Scoring",
    },
    {
      metric: "100%",
      description: "Personalisierte Ansprache ohne manuellen Aufwand",
    },
    {
      metric: "Höher",
      description: "Conversion-Rate durch bessere Qualifizierung",
    },
  ];

  const services = [
    "KI-Sales-Agent mit Echtzeit-Lead-Scoring",
    "Automatisierte, personalisierte E-Mail-/LinkedIn-Sequenzen",
    "Warme Leads → automatische Terminbuchung im Kalender",
    "Kalte Leads → Aufwärm-Sequenzen",
    "Automatische CRM-Dokumentation & Pipeline-Bereinigung",
    "Voice-Agent für Erstgespräche (optional)",
  ];

  const orbitalTimelineData = [
    {
      id: 1,
      title: "CRM-Audit & Datenanalyse",
      date: "Woche 1",
      content: "Analyse der bestehenden CRM-Daten",
      category: "planning",
      icon: Database,
      status: "completed" as const,
      energy: 90,
      relatedIds: [2],
    },
    {
      id: 2,
      title: "Lead-Scoring-Modell entwickeln",
      date: "Woche 2-4",
      content: "KI-basiertes Scoring-System",
      category: "analysis",
      icon: Brain,
      relatedIds: [1, 3],
      status: "completed" as const,
      energy: 85,
    },
    {
      id: 3,
      title: "Messaging-Sequenzen erstellen",
      date: "Woche 5-7",
      content: "Personalisierte Kommunikationsstrategien",
      category: "design",
      icon: Mail,
      relatedIds: [2, 4],
      status: "completed" as const,
      energy: 95,
    },
    {
      id: 4,
      title: "Agent-Logik implementieren",
      date: "Woche 7",
      content: "KI-Sales-Agent Entwicklung",
      category: "development",
      icon: Zap,
      relatedIds: [3, 5],
      status: "completed" as const,
      energy: 88,
    },
    {
      id: 5,
      title: "CRM & Kalender Integration",
      date: "Woche 8-10",
      content: "System-Anbindungen",
      category: "testing",
      icon: Calendar,
      relatedIds: [4, 6],
      status: "completed" as const,
      energy: 92,
    },
    {
      id: 6,
      title: "Testing & Launch",
      date: "Woche 11-12",
      content: "Pilotphase und Rollout",
      category: "launch",
      icon: TrendingUp,
      relatedIds: [5],
      status: "completed" as const,
      energy: 100,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Sales-Agent Case Study - NEW EDGE</title>
        <meta
          name="description"
          content="Wie ein KI-Sales-Agent Leads automatisch qualifiziert, personalisiert anspricht und den Vertrieb auf echte Chancen fokussiert."
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
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">B2B-Dienstleistung</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                Sales-Agent
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                Vertrieb neu gedacht. Wie ein KI-Sales-Agent Leads automatisch qualifiziert, personalisiert anspricht und den Vertrieb auf echte Chancen fokussiert.
              </p>

              <div className="flex flex-wrap justify-center gap-8 mb-12">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-muted-foreground">Branche</div>
                    <div className="font-semibold">B2B-Dienstleistung</div>
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
                    <div className="font-semibold">12 Wochen</div>
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
                    Ein B2B-Dienstleister für IT-Sicherheitslösungen (ca. 35 Mitarbeiter) generiert viele Leads über Messen, Webinar-Formate und Partnerschaften. Das Problem: hohe Anzahl an Leads, aber wenig Zeit für strukturierte Bearbeitung.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Ein großer Teil der Pipeline "versandete". Eingehende Leads wurden nicht priorisiert, Follow-ups erfolgten manuell und oft zu spät. Es fehlte ein klares Lead-Scoring-System.
                  </p>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <TrendingUp className="w-24 h-24 text-primary/30" />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { label: "Mitarbeiter", value: "35" },
                  { label: "Branche", value: "IT-Sicherheit" },
                  { label: "Lead-Quellen", value: "Messen & Webinare" },
                  { label: "Projektzeitraum", value: "12 Wochen" },
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
                  Eingehende Leads wurden nicht priorisiert, Follow-ups erfolgten manuell und oft zu spät. Kein klares Lead-Scoring-System führte zu ineffizienter Ressourcennutzung im Vertrieb.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  CRM-Daten waren unvollständig und unstrukturiert. Das Vertriebsteam verbrachte zu viel Zeit mit unqualifizierten Leads, während echte Chancen ungenutzt blieben. Keine automatisierten Lead-Nurturing-Sequenzen.
                </p>
                <p className="text-lg text-muted-foreground">
                  Das Ziel: Ein intelligentes System, das Leads automatisch qualifiziert, personalisiert anspricht und den Vertrieb auf hochrelevante Opportunities fokussiert.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <Target className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Fehlende Priorisierung</h3>
                  <p className="text-sm text-muted-foreground">Alle Leads wurden gleich behandelt</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <Users className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Zeitverlust</h3>
                  <p className="text-sm text-muted-foreground">Manuelles Follow-up oft zu spät oder gar nicht</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <TrendingUp className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Ineffizienz</h3>
                  <p className="text-sm text-muted-foreground">Vertrieb fokussiert sich auf falsche Leads</p>
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
                Von der CRM-Analyse bis zum intelligenten Sales-Agent – ein strukturierter 12-Wochen-Prozess
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
                Von der Analyse über Automation bis zur vollständigen Integration – ein strukturierter Prozess für maximalen Erfolg
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
                Messbare Erfolge durch intelligente Lead-Qualifizierung
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
                "Der Agent hat unsere Pipeline transformiert. Wir sprechen nur noch mit hochrelevanten Leads."
              </blockquote>
              
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-semibold">B2B-Dienstleister</div>
                  <div className="text-sm text-muted-foreground">IT-Sicherheitslösungen, 35 Mitarbeiter</div>
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
                Bereit für intelligenten Vertrieb?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Lassen Sie uns gemeinsam Ihren Sales-Prozess automatisieren
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

export default CaseStudySocialMedia;
