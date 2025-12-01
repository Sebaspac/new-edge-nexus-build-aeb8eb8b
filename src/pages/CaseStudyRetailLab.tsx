import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from "react-helmet-async";
import { Footer } from "@/components/Footer";
import {
  Database,
  FileText,
  MessageSquare,
  Zap,
  Search,
  ShieldCheck,
  Brain,
  Target,
  ArrowRight,
  Quote,
  Settings,
  BookOpen,
  CheckCircle2,
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

  const orbitalTimelineData = [
    {
      id: 1,
      title: "RAG-Stack",
      date: "Core Service",
      content: "Vollständiger RAG-Stack (Retrieval Augmented Generation) für intelligente Wissensabfragen",
      category: "Infrastructure",
      icon: Database,
      relatedIds: [2],
      status: "completed" as const,
      energy: 100,
    },
    {
      id: 2,
      title: "Daten-Indexierung",
      date: "Data Service",
      content: "Extraktion & Indexierung von PDFs, CAD-Daten, Word-Dateien & Datenbanken",
      category: "Data",
      icon: FileText,
      relatedIds: [1, 3],
      status: "completed" as const,
      energy: 95,
    },
    {
      id: 3,
      title: "Chat-Agent",
      date: "AI Service",
      content: "Unternehmensinterner Chat-Agent inkl. Rollenrechten für verschiedene Abteilungen",
      category: "AI",
      icon: MessageSquare,
      relatedIds: [2, 4],
      status: "completed" as const,
      energy: 90,
    },
    {
      id: 4,
      title: "Auto-Antworten",
      date: "Automation",
      content: "Automatisierte Antwortgenerierung für Service & Produktion",
      category: "Automation",
      icon: Zap,
      relatedIds: [3, 5],
      status: "completed" as const,
      energy: 85,
    },
    {
      id: 5,
      title: "Deep-Search",
      date: "Search Service",
      content: "Deep-Search-Funktionen nach Bauteilen, Servicecodes und technischen Daten",
      category: "Search",
      icon: Search,
      relatedIds: [4, 6],
      status: "completed" as const,
      energy: 80,
    },
    {
      id: 6,
      title: "Compliance & Audit",
      date: "Security",
      content: "Protokollierung & Audit-Log für Compliance und Nachverfolgbarkeit",
      category: "Compliance",
      icon: ShieldCheck,
      relatedIds: [5],
      status: "completed" as const,
      energy: 100,
    },
  ];

  const phases = [
    {
      number: "PHASE 1",
      title: "Strategie & Konzeption",
      description: "Fundament für ein zukunftssicheres Wissenssystem",
      features: [
        {
          icon: Target,
          title: "Dokumentenanalyse",
          description: "Vollständige Analyse der Dokumentenlandschaft über alle Abteilungen hinweg",
        },
        {
          icon: Brain,
          title: "Wissensdomänen",
          description: "Definition der Wissensdomänen für Produktion, Service und Vertrieb",
        },
        {
          icon: ShieldCheck,
          title: "Sicherheitskonzept",
          description: "Entwicklung des Sicherheits- & Rollenmodells für sensible Unternehmensdaten",
        },
        {
          icon: Settings,
          title: "UX-Konzept",
          description: "Gestaltung einer intuitiven Benutzeroberfläche für die Wissenssuche",
        },
      ],
    },
    {
      number: "PHASE 2",
      title: "Kreation & Content",
      description: "Transformation von Daten in strukturiertes Wissen",
      features: [
        {
          icon: FileText,
          title: "Datenaufbereitung",
          description: "Professionelle Datenaufbereitung und Chunking für optimale Verarbeitung",
        },
        {
          icon: Brain,
          title: "Embedding-Optimierung",
          description: "Spezielle Optimierung für technische Fachtermini der Maschinenbaubranche",
        },
        {
          icon: MessageSquare,
          title: "Prompt-Logiken",
          description: "Entwicklung rollenbezogener Prompt-Logiken für unterschiedliche Anwendungsfälle",
        },
        {
          icon: CheckCircle2,
          title: "Knowledge Validation",
          description: "Validierung durch interne Experten für höchste Datenqualität",
        },
      ],
    },
    {
      number: "PHASE 3",
      title: "Technische Umsetzung & Launch",
      description: "Live-Gang und kontinuierliche Optimierung",
      features: [
        {
          icon: Database,
          title: "Vektordatenbank",
          description: "Implementation einer hochperformanten Vektordatenbank für schnelle Suchen",
        },
        {
          icon: Zap,
          title: "API-Anbindungen",
          description: "Nahtlose Integration mit bestehenden internen Systemen und Tools",
        },
        {
          icon: ShieldCheck,
          title: "Rechte-Management",
          description: "Implementierung von SSO und granularem Rechte-Management",
        },
        {
          icon: BookOpen,
          title: "Schulung & Support",
          description: "Umfassende Schulung der Teams und laufende Optimierung des Systems",
        },
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>RAG-Wissensagent Case Study | Maschinenbau-KMU | New Edge</title>
        <meta
          name="description"
          content="Wie wir für ein Maschinenbau-KMU einen unternehmensweiten RAG-Wissensagenten entwickelten, der 18.000+ Dokumente indexiert und Supportzeiten halbiert."
        />
      </Helmet>

      <MobileNavigation onContactClick={scrollToContact} theme="dark" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.05),transparent_50%)]" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8">
                <Brain className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-purple-400">Maschinenbau-KMU X New Edge</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                Industriewissen.<br />Sofort verfügbar.
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
                Wie wir für ein Maschinenbau-KMU einen unternehmensweiten RAG-Wissensagenten entwickelten, der 18.000+ Dokumente indexiert, Wissen entlastet und Supportzeiten halbiert.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Project Overview + Challenge */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              <AnimatedSection>
                <div>
                  <h2 className="text-4xl font-bold mb-6 text-white">Projektüberblick</h2>
                  <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                    <p>
                      Das Familienunternehmen (140 Mitarbeiter) produziert Präzisionsmaschinen für die Automobil- und Verpackungsindustrie. Über Jahrzehnte wuchs ein Wissensfundus aus Handbüchern, CAD-Daten, Serviceprotokollen, E-Mails und Excel-Archiven.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div>
                  <h2 className="text-4xl font-bold mb-6 text-white">Herausforderungen</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-purple-400" />
                      </div>
                      <p className="text-gray-400">Wissensinseln, fehlende Dokumentenstruktur, Abhängigkeit von Experten</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-purple-400" />
                      </div>
                      <p className="text-gray-400">Suchzeiten &gt; 20 Min pro Anfrage</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-purple-400" />
                      </div>
                      <p className="text-gray-400">Keine intelligente Suche über technische Daten</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-purple-400" />
                      </div>
                      <p className="text-gray-400">Unterschiedliche Versionsstände von Dokumenten</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-purple-400" />
                      </div>
                      <p className="text-gray-400">Produktion stellten täglich wiederkehrende Fragen</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-purple-400" />
                      </div>
                      <p className="text-gray-400">Wissen verschwand mit erfahrenen Mitarbeitern</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Services Timeline */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Erbrachte Dienstleistungen</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Ein vollständiges RAG-System mit intelligenten Suchfunktionen und Compliance-Features
              </p>
            </div>
            <RadialOrbitalTimeline timelineData={orbitalTimelineData} />
          </AnimatedSection>
        </div>
      </section>

      {/* Phases Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Projekt Phasen</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Von der strategischen Planung bis zum erfolgreichen Launch
              </p>
            </div>

            <div className="space-y-24">
              {phases.map((phase, index) => (
                <div key={index} className="max-w-6xl mx-auto">
                  <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className={index % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
                      <div className="sticky top-24">
                        <div className="text-sm font-semibold text-purple-400 mb-4">
                          {phase.number}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                          {phase.title}
                        </h3>
                        <p className="text-lg text-gray-400">
                          {phase.description}
                        </p>
                      </div>
                    </div>

                    <div className={index % 2 === 0 ? "lg:order-2" : "lg:order-1"}>
                      <div className="space-y-6">
                        {phase.features.map((feature, fIndex) => (
                          <div
                            key={fIndex}
                            className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all"
                          >
                            <feature.icon className="w-8 h-8 text-purple-400 mb-4" />
                            <h4 className="text-xl font-semibold mb-2 text-white">
                              {feature.title}
                            </h4>
                            <p className="text-gray-400">
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

      {/* Testimonial */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <Quote className="w-16 h-16 text-purple-400 mx-auto mb-8 opacity-50" />
              <blockquote className="text-2xl md:text-3xl font-light text-white mb-8 leading-relaxed">
                "Wir haben täglich 4–6 Stunden Zeitersparnis im Support. Das Wissen ist endlich demokratisiert."
              </blockquote>
              <div className="text-gray-400">
                <p className="font-semibold text-white">Projektleiter</p>
                <p>Maschinenbau-KMU</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Bereit für Ihr eigenes KI-Projekt?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Lassen Sie uns gemeinsam Ihre Wissensprozesse transformieren
              </p>
              <button
                onClick={scrollToContact}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                Projekt starten
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
