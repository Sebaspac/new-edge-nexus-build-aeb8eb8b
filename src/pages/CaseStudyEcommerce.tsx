import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from "react-helmet-async";
import { Footer } from "@/components/Footer";
import {
  ShoppingCart,
  TrendingUp,
  Users,
  Sparkles,
  Target,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Zap,
  Brain,
  LineChart,
  ShoppingBag,
  Calendar,
  Palette,
  FileText,
  Database,
  Megaphone,
  BarChart,
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

const CaseStudyEcommerce = () => {
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
      title: "Strategie & Audit",
      description: "Analyse der bestehenden Marketing-Prozesse und Entwicklung einer skalierbaren Content-Strategie.",
      features: [
        {
          icon: BarChart3,
          title: "CRM-Audit & Datenanalyse",
          description: "Analyse bestehender Marketing-Daten und Identifikation von Optimierungspotenzialen.",
        },
        {
          icon: FileText,
          title: "Marketing-Prozesse dokumentieren",
          description: "Erfassung aller bestehenden Workflows und Kommunikationskanäle.",
        },
        {
          icon: Target,
          title: "Tone of Voice Definition",
          description: "Entwicklung einer einheitlichen Markenkommunikation über alle Kanäle.",
        },
        {
          icon: Users,
          title: "Zielgruppen-Segmentierung",
          description: "Präzise Analyse und Strukturierung der Kundengruppen für personalisierte Ansprache.",
        },
      ],
    },
    {
      number: "PHASE 2",
      title: "Content & Automation",
      description: "Aufbau der Content-Engine und Entwicklung wiederverwendbarer Marketing-Assets.",
      features: [
        {
          icon: Palette,
          title: "Design-System + TOV als Trainingsbasis",
          description: "Erstellung eines konsistenten Design-Systems für alle Marketing-Materialien.",
        },
        {
          icon: Database,
          title: "Template-Bibliothek",
          description: "Wiederverwendbare Kampagnenrouten & Templates für effiziente Content-Produktion.",
        },
        {
          icon: Brain,
          title: "Automated Content Engine",
          description: "KI-generierte Visual & Copy Libraries für Posts, Ads und Newsletter.",
        },
        {
          icon: Calendar,
          title: "Redaktionsplan-Automation",
          description: "Aufbau einer zentralen Content-Datenbank mit automatisierter Planung.",
        },
      ],
    },
    {
      number: "PHASE 3",
      title: "Integration & Optimierung",
      description: "Implementierung des Marketing-Agents und Integration in bestehende Systeme.",
      features: [
        {
          icon: Zap,
          title: "KI-Agent für Marketing-Automation",
          description: "Vollständige Automatisierung von Content-Produktion und Kampagnensteuerung.",
        },
        {
          icon: Megaphone,
          title: "Automatisiertes Posting & Kampagnensteuerung",
          description: "Einbindung des Agents in CMS & Social Tools für nahtlose Workflows.",
        },
        {
          icon: BarChart,
          title: "Tracking-Dashboard als Echtzeit-Monitoring",
          description: "Kontinuierliche Performance-Analyse und Optimierung.",
        },
        {
          icon: TrendingUp,
          title: "Launch & Kontinuierliche Optimierung",
          description: "Launch-Kampagne für neue Brand Experience mit laufenden Verbesserungen.",
        },
      ],
    },
  ];

  const results = [
    {
      metric: "70%",
      description: "Reduzierte Time-to-Market",
    },
    {
      metric: "24/7",
      description: "Automatisierte Content-Produktion",
    },
    {
      metric: "8",
      description: "Standorte mit skalierbare Prozesse",
    },
    {
      metric: "100%",
      description: "Konsistente Markenkommunikation",
    },
  ];

  const services = [
    "KI-Agent für vollständige Marketing-Automation",
    "Automated Content Engine (Posts, Ads, Newsletter, Landingpages)",
    "Design-System + TOV (Tone of Voice) als Trainingsbasis des Agents",
    "Redaktionsplan-Automation (Themen, Frequenz, Veröffentlichung)",
    "Kampagnen-Setup, A/B-Tests, Reporting, Optimierung",
    "KI-Analyse der Konkurrenzkommunikation",
  ];

  const orbitalTimelineData = [
    {
      id: 1,
      title: "CRM-Audit & Datenanalyse",
      date: "Woche 1",
      content: "Analyse bestehender Marketing-Daten",
      category: "planning",
      icon: BarChart3,
      status: "completed" as const,
      energy: 90,
      relatedIds: [2],
    },
    {
      id: 2,
      title: "Lead-Scoring-Modell + Messaging Framework",
      date: "Woche 2-4",
      content: "Entwicklung der Marketing-Strategie",
      category: "analysis",
      icon: Target,
      relatedIds: [1, 3],
      status: "completed" as const,
      energy: 85,
    },
    {
      id: 3,
      title: "Asset-Produktion & Template-Bibliothek",
      date: "Woche 5-7",
      content: "Content-Erstellung und Design-System",
      category: "design",
      icon: Palette,
      relatedIds: [2, 4],
      status: "completed" as const,
      energy: 95,
    },
    {
      id: 4,
      title: "Aufbau der Agenten-Logik & Sequenzen",
      date: "Woche 7",
      content: "KI-Agent Implementierung",
      category: "development",
      icon: Brain,
      relatedIds: [3, 5],
      status: "completed" as const,
      energy: 88,
    },
    {
      id: 5,
      title: "Integration in Mail, CRM, Kalender",
      date: "Woche 8-10",
      content: "System-Integration",
      category: "testing",
      icon: ShoppingCart,
      relatedIds: [4, 6],
      status: "completed" as const,
      energy: 92,
    },
    {
      id: 6,
      title: "Testing & Rollout",
      date: "Woche 11-12",
      content: "Launch und Optimierung",
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
        <title>Marketing-Agent Case Study - NEW EDGE</title>
        <meta
          name="description"
          content="Wie ein KI-Marketing-Agent die gesamte Content-Produktion und Kampagnensteuerung automatisiert und die Time-to-Market um 70% reduzierte."
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
                <Megaphone className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Handel & E-Commerce</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                Marketing-Agent
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                Marketing, das 24/7 arbeitet. Wie ein KI-Marketing-Agent die gesamte Content-Produktion, Kampagnensteuerung & Analyse eines Händlers automatisiert und die Time-to-Market um 70% reduzierte.
              </p>

              <div className="flex flex-wrap justify-center gap-8 mb-12">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-muted-foreground">Branche</div>
                    <div className="font-semibold">Handel & E-Commerce</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-muted-foreground">Services</div>
                    <div className="font-semibold">Lab + Media</div>
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
                    Das Handelsunternehmen betreibt 8 Standorte in Süddeutschland und einen stetig wachsenden Online-Shop. Trotz hoher Nachfrage fehlte es an Ressourcen für kontinuierliches Marketing.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Kampagnen wurden spontan geplant, Content war inkonsistent, Reports unvollständig. Ein großer Teil der Marketing-Pipeline "versandete" aufgrund fehlender Automatisierung.
                  </p>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <Megaphone className="w-24 h-24 text-primary/30" />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { label: "Standorte", value: "8" },
                  { label: "Süddeutschland", value: "Region" },
                  { label: "Online-Shop", value: "Wachsend" },
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
                  Keine skalierbaren Marketingprozesse, fehlende Content-Bibliothek und kein datengetriebenes Vorgehen. Support, Social Media und Kampagnen liefen manuell, ohne klare Frequenz oder Strategie.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Inhalte wurden jedes Mal neu erstellt statt wiederverwendet. Keine automatischen Performance-Optimierungen und hohe Abhängigkeit von externen Dienstleistern führten zu ineffizienten Prozessen.
                </p>
                <p className="text-lg text-muted-foreground">
                  Die Time-to-Market war 70% langsamer als bei Wettbewerbern. Es fehlte eine zentrale Marketing-Automation-Lösung für konsistente und skalierbare Markenkommunikation.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <TrendingUp className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Fehlende Skalierbarkeit</h3>
                  <p className="text-sm text-muted-foreground">Manueller Content-Prozess ohne Systematik</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <FileText className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Inkonsistente Kommunikation</h3>
                  <p className="text-sm text-muted-foreground">Keine einheitliche Tone of Voice</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <BarChart className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Zeitverlust</h3>
                  <p className="text-sm text-muted-foreground">70% langsamere Time-to-Market</p>
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
                Von der Strategie bis zur vollautomatisierten Marketing-Engine – ein strukturierter 12-Wochen-Prozess
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
                Von der Strategie über Content-Automation bis zur vollständigen Integration – ein strukturierter Prozess für maximalen Erfolg
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
                Messbare Erfolge durch intelligente Marketing-Automation
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
                "Unser Marketing arbeitet jetzt skalierbar und konsistent. Ergebnisse kommen schneller, günstiger und messbar besser."
              </blockquote>
              
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShoppingBag className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-semibold">Regionaler Händler</div>
                  <div className="text-sm text-muted-foreground">8 Standorte in Süddeutschland</div>
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
                Bereit für skalierbares Marketing?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Lassen Sie uns gemeinsam Ihr Marketing automatisieren
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

export default CaseStudyEcommerce;
