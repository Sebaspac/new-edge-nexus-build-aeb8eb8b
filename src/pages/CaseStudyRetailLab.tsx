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
  Search,
  Database,
  Shield,
  FileText,
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
      description: "Vollständige Analyse der Dokumentenlandschaft und Definition der Wissensdomänen mit Fokus auf Sicherheit und Compliance.",
      features: [
        {
          icon: Target,
          title: "Dokumentenlandschaft analysieren",
          description: "Vollständige Erfassung aller Datenquellen und Dokumenttypen im Unternehmen",
        },
        {
          icon: BarChart3,
          title: "Wissensdomänen definieren",
          description: "Definition der Bereiche Produktion, Service und Vertrieb mit spezifischen Anforderungen",
        },
        {
          icon: Shield,
          title: "Sicherheits- & Rollenmodell",
          description: "Entwicklung eines umfassenden Rechtekonzepts für sensible Unternehmensdaten",
        },
        {
          icon: Sparkles,
          title: "UX-Konzept",
          description: "Intuitive Benutzeroberfläche für interne Wissenssuche",
        },
      ],
    },
    {
      number: "PHASE 2",
      title: "Kreation & Content",
      description: "Datenaufbereitung, Embedding-Optimierung und Entwicklung der Prompt-Logiken für verschiedene Nutzerrollen.",
      features: [
        {
          icon: Brain,
          title: "Datenaufbereitung & Chunking",
          description: "Intelligente Segmentierung und Strukturierung der 18.000+ Dokumente",
        },
        {
          icon: Cpu,
          title: "Embedding-Optimierung",
          description: "Spezialisierte Embeddings für technische Fachtermini und Maschinenbau-Jargon",
        },
        {
          icon: Zap,
          title: "Prompt-Logiken",
          description: "Maßgeschneiderte KI-Antworten für unterschiedliche Rollen und Abteilungen",
        },
        {
          icon: CheckCircle,
          title: "Knowledge Validation",
          description: "Qualitätssicherung durch interne Fachexperten",
        },
      ],
    },
    {
      number: "PHASE 3",
      title: "Technische Umsetzung & Launch",
      description: "Implementierung der technischen Infrastruktur, Integration in bestehende Systeme und unternehmensweiter Rollout.",
      features: [
        {
          icon: Rocket,
          title: "Vektordatenbank implementieren",
          description: "High-Performance Datenbank für semantische Suche über alle Dokumente",
        },
        {
          icon: TrendingUp,
          title: "API-Anbindungen",
          description: "Integration mit internen Tools und Systemen",
        },
        {
          icon: Shield,
          title: "Rechte-Management & SSO",
          description: "Single Sign-On und rollenbasierte Zugriffssteuerung",
        },
        {
          icon: Sparkles,
          title: "Schulung & Optimierung",
          description: "Team-Training und kontinuierliche Verbesserung basierend auf Nutzerfeedback",
        },
      ],
    },
  ];

  const results = [
    {
      metric: "4-6 Stunden",
      description: "Täglich Zeitersparnis im Support",
      icon: Zap,
    },
    {
      metric: "18.000+",
      description: "Dokumente indexiert und durchsuchbar",
      icon: FileText,
    },
    {
      metric: "< 1 Min",
      description: "Durchschnittliche Suchzeit (vorher >20 Min)",
      icon: Search,
    },
    {
      metric: "100%",
      description: "Demokratisiertes Wissen für alle Mitarbeiter",
      icon: Brain,
    },
  ];

  const services = [
    {
      title: "RAG-Stack (Retrieval Augmented Generation)",
      description: "Vollständiger RAG-Stack für intelligente Wissenssuche",
      icon: Brain,
    },
    {
      title: "Dokumenten-Extraktion & Indexierung",
      description: "Verarbeitung von PDFs, CAD-Daten, Word-Dateien & Datenbanken",
      icon: FileText,
    },
    {
      title: "Unternehmensinterner Chat-Agent",
      description: "KI-Agent mit Rollenrechten und Sicherheitskonzept",
      icon: Cpu,
    },
    {
      title: "Automatisierte Antwortgenerierung",
      description: "Intelligente Antworten für Service & Produktion",
      icon: Sparkles,
    },
    {
      title: "Deep-Search-Funktionen",
      description: "Suche nach Bauteilen, Servicecodes und technischen Spezifikationen",
      icon: Search,
    },
    {
      title: "Compliance & Audit-Log",
      description: "Protokollierung aller Anfragen für Compliance und Nachvollziehbarkeit",
      icon: Shield,
    },
  ];

  const orbitalTimelineData = [
    {
      id: 1,
      title: "Data & System Audit",
      date: "Woche 1-2",
      content: "Vollständige Analyse der Dokumentenlandschaft und Systemarchitektur",
      category: "Analyse",
      icon: FlaskConical,
      status: "completed" as const,
      energy: 95,
      relatedIds: [2],
    },
    {
      id: 2,
      title: "Architektur & RAG-Konzept",
      date: "Woche 3-5",
      content: "Definition der Wissensdomänen und technisches Konzept",
      category: "Konzeption",
      icon: Brain,
      status: "completed" as const,
      energy: 90,
      relatedIds: [1, 3],
    },
    {
      id: 3,
      title: "Datenreinigung & Embeddings",
      date: "Woche 5-8",
      content: "Datenaufbereitung, Embedding-Optimierung und Vektordatenbank-Setup",
      category: "Implementation",
      icon: Database,
      status: "completed" as const,
      energy: 85,
      relatedIds: [2, 4],
    },
    {
      id: 4,
      title: "Agent-Logik & Chat-Oberfläche",
      date: "Woche 8-10",
      content: "Implementierung der KI-Logik und Benutzeroberfläche",
      category: "Development",
      icon: Cpu,
      status: "completed" as const,
      energy: 88,
      relatedIds: [3, 5],
    },
    {
      id: 5,
      title: "Testphase",
      date: "Woche 10-12",
      content: "Testing mit Service- und Produktionsteams",
      category: "Testing",
      icon: CheckCircle,
      status: "completed" as const,
      energy: 92,
      relatedIds: [4, 6],
    },
    {
      id: 6,
      title: "Rollout & Schulung",
      date: "Woche 13",
      content: "Unternehmensweiter Launch und Team-Training",
      category: "Launch",
      icon: Rocket,
      status: "completed" as const,
      energy: 100,
      relatedIds: [5],
    },
  ];

  return (
    <>
      <Helmet>
        <title>RAG-Wissensagent - Case Study - NEW EDGE</title>
        <meta
          name="description"
          content="Wie wir für ein Maschinenbau-KMU einen unternehmensweiten RAG-Wissensagenten entwickelten, der 18.000+ Dokumente indexiert, Wissen demokratisiert und Supportzeiten halbiert."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <MobileNavigation onContactClick={scrollToContact} theme="light" />

        {/* Hero Section */}
        <section className="relative w-full pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 opacity-50" />
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <AnimatedSection>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                  Maschinenbau
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                  Lab + Studio
                </span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                  13 Wochen
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 text-gray-900">
                RAG-Wissensagent
              </h1>
              <p className="text-2xl sm:text-3xl font-bold text-orange-600 mb-8">
                Industriewissen. Sofort verfügbar.
              </p>
              <p className="text-xl text-gray-700 max-w-4xl leading-relaxed">
                Wie wir für ein Maschinenbau-KMU einen unternehmensweiten RAG-Wissensagenten entwickelten, der 18.000+ Dokumente indexiert, Wissen demokratisiert und Supportzeiten halbiert.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Project Overview */}
        <AnimatedSection>
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-black mb-6 text-gray-900">
                    Über das Unternehmen
                  </h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Das Familienunternehmen (140 Mitarbeiter) produziert Präzisionsmaschinen für die Automobil- und Verpackungsindustrie. Über Jahrzehnte wuchs ein Wissensfundus aus Handbüchern, CAD-Daten, Serviceprotokollen, E-Mails und Excel-Archiven. Neue Mitarbeiter fanden sich kaum zurecht, Serviceanfragen waren schwer skalierbar.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-2xl">
                    <div className="text-4xl font-black text-orange-600 mb-2">140</div>
                    <div className="text-sm text-gray-600">Mitarbeiter</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
                    <div className="text-4xl font-black text-purple-600 mb-2">18.000+</div>
                    <div className="text-sm text-gray-600">Dokumente indexiert</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl">
                    <div className="text-4xl font-black text-blue-600 mb-2">2</div>
                    <div className="text-sm text-gray-600">Hauptindustrien</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
                    <div className="text-4xl font-black text-green-600 mb-2">Jahrzehnte</div>
                    <div className="text-sm text-gray-600">Gewachsenes Wissen</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Challenge Section */}
        <AnimatedSection>
          <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
              <h2 className="text-4xl font-black mb-12 text-gray-900 text-center">
                Die Herausforderung
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-orange-500">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <Database className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Wissensinseln</h3>
                  <p className="text-gray-700">
                    Keine zentrale Wissensquelle, fragmentierte Informationen über verschiedene Systeme verteilt
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-red-500">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Zeitverlust</h3>
                  <p className="text-gray-700">
                    Suchzeiten über 20 Minuten pro Anfrage, ineffiziente Workflows und hoher manueller Aufwand
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-purple-500">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Expertenabhängigkeit</h3>
                  <p className="text-gray-700">
                    Kritisches Wissen nur bei einzelnen Personen, hohes Risiko bei Mitarbeiterwechsel
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Timeline Section */}
        <AnimatedSection>
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
              <h2 className="text-4xl font-black mb-4 text-gray-900 text-center">
                Projekt-Timeline
              </h2>
              <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                Von der ersten Analyse bis zum erfolgreichen Rollout in 13 Wochen
              </p>
              <div className="max-w-5xl mx-auto">
                <RadialOrbitalTimeline timelineData={orbitalTimelineData} />
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Phases Section */}
        <AnimatedSection>
          <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
              <h2 className="text-4xl font-black mb-16 text-gray-900 text-center">
                Projektphasen
              </h2>
              <div className="space-y-12">
                {phases.map((phase, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100"
                  >
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-6">
                      <div className="flex items-center gap-4">
                        <span className="text-white/80 font-bold text-sm">
                          {phase.number}
                        </span>
                        <h3 className="text-2xl font-black text-white">
                          {phase.title}
                        </h3>
                      </div>
                      <p className="text-white/90 mt-3">
                        {phase.description}
                      </p>
                    </div>
                    <div className="p-8">
                      <div className="grid md:grid-cols-2 gap-6">
                        {phase.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                          >
                            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                              <feature.icon className="w-6 h-6 text-orange-600" />
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900 mb-2">
                                {feature.title}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Results Section */}
        <AnimatedSection>
          <section className="py-20 bg-gradient-to-br from-orange-600 to-amber-600 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
              <h2 className="text-4xl font-black mb-16 text-center">
                Ergebnisse
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {results.map((result, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all"
                  >
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <result.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-black mb-2">{result.metric}</div>
                    <p className="text-white/90">{result.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Services Section */}
        <AnimatedSection>
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
              <h2 className="text-4xl font-black mb-4 text-gray-900 text-center">
                Services & Technologien
              </h2>
              <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                Modernste KI-Technologie für unternehmensweites Wissensmanagement
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-shadow"
                  >
                    <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-4">
                      <service.icon className="w-7 h-7 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Testimonial Section */}
        <AnimatedSection>
          <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
              <div className="bg-white rounded-3xl shadow-xl p-12 border border-gray-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-black text-white">M</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Geschäftsführer</div>
                    <div className="text-gray-600">Maschinenbau-KMU</div>
                  </div>
                </div>
                <blockquote className="text-2xl font-medium text-gray-900 leading-relaxed mb-6">
                  "Wir haben täglich 4–6 Stunden Zeitersparnis im Support. Das Wissen ist endlich demokratisiert."
                </blockquote>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-6 h-6 text-orange-500 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection>
          <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
              <h2 className="text-4xl sm:text-5xl font-black mb-6">
                Ihr nächstes Erfolgsprojekt?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Lassen Sie uns gemeinsam Ihr Unternehmenswissen demokratisieren und Ihre Prozesse optimieren.
              </p>
              <button
                onClick={scrollToContact}
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-10 py-5 rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all"
              >
                Beratungsgespräch vereinbaren
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </section>
        </AnimatedSection>

        <Footer />
      </div>
    </>
  );
};

export default CaseStudyRetailLab;
