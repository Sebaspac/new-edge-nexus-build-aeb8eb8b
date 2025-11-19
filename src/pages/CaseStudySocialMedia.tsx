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
  Mail,
  Calendar,
  Award,
  Zap,
  Phone,
  Database,
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
      description: "Gründliche Analyse der CRM-Datenqualität und Entwicklung eines präzisen Lead-Scoring-Systems.",
      features: [
        {
          icon: Target,
          title: "CRM-Audit & Datenqualität",
          description: "Vollständige Prüfung und Bereinigung der bestehenden CRM-Daten",
        },
        {
          icon: BarChart3,
          title: "Lead-Scoring-Kriterien definieren",
          description: "KI-basiertes Scoring-Modell für automatische Lead-Qualifizierung",
        },
        {
          icon: Database,
          title: "Sales-Prozess dokumentieren",
          description: "Erfassung und Optimierung bestehender Vertriebsprozesse",
        },
        {
          icon: Sparkles,
          title: "Messaging-Framework entwickeln",
          description: "Personalisierte Kommunikationsstrategien für verschiedene Zielgruppen",
        },
      ],
    },
    {
      number: "PHASE 2",
      title: "Automation & Content",
      description: "Entwicklung automatisierter E-Mail- und LinkedIn-Sequenzen mit personalisierten Templates für maximale Conversion.",
      features: [
        {
          icon: Brain,
          title: "Lead-Scoring-Modell trainieren",
          description: "KI-Training für präzise Lead-Qualifizierung in Echtzeit",
        },
        {
          icon: MessageSquare,
          title: "E-Mail- & LinkedIn-Sequenzen",
          description: "Automatisierte, personalisierte Ansprache über mehrere Kanäle",
        },
        {
          icon: Hash,
          title: "Personalisierungs-Templates",
          description: "Dynamische Content-Templates für individuelle Kundenansprache",
        },
        {
          icon: Phone,
          title: "Voice-Agent Skripte (optional)",
          description: "KI-gestützte Telefon-Skripte für Erstgespräche",
        },
      ],
    },
    {
      number: "PHASE 3",
      title: "Integration & Optimierung",
      description: "Vollständige Integration des Sales-Agents in bestehende Systeme mit automatischer Pipeline-Verwaltung.",
      features: [
        {
          icon: Share2,
          title: "KI-Sales-Agent implementieren",
          description: "Intelligente Automatisierung des gesamten Vertriebsprozesses",
        },
        {
          icon: TrendingUp,
          title: "CRM-Integration & Automatisierung",
          description: "Nahtlose Anbindung an bestehende CRM-Systeme",
        },
        {
          icon: Calendar,
          title: "Kalender-Anbindung",
          description: "Automatische Terminbuchung für qualifizierte Leads",
        },
        {
          icon: Award,
          title: "Pipeline-Management automatisieren",
          description: "Kontinuierliche Optimierung und Performance-Tracking",
        },
      ],
    },
  ];

  const results = [
    {
      metric: "Transformiert",
      description: "Fokus auf hochrelevante Leads",
      icon: Target,
    },
    {
      metric: "Echtzeit",
      description: "Automatisches Lead-Scoring",
      icon: Zap,
    },
    {
      metric: "Personalisiert",
      description: "Ansprache ohne manuellen Aufwand",
      icon: Sparkles,
    },
    {
      metric: "Höher",
      description: "Conversion-Rate durch bessere Qualifizierung",
      icon: TrendingUp,
    },
  ];

  const services = [
    {
      title: "KI-Sales-Agent mit Echtzeit-Lead-Scoring",
      description: "Automatische Qualifizierung und Priorisierung aller eingehenden Leads",
      icon: Brain,
    },
    {
      title: "Automatisierte E-Mail-/LinkedIn-Sequenzen",
      description: "Personalisierte Multi-Channel-Kommunikation für maximale Reichweite",
      icon: Mail,
    },
    {
      title: "Warme Leads → automatische Terminbuchung",
      description: "Direkte Kalender-Integration für qualifizierte Interessenten",
      icon: Calendar,
    },
    {
      title: "Kalte Leads → Aufwärm-Sequenzen",
      description: "Intelligente Nurturing-Kampagnen für langfristigen Erfolg",
      icon: Sparkles,
    },
    {
      title: "Automatische CRM-Dokumentation",
      description: "Pipeline-Bereinigung und vollständige Aktivitätshistorie",
      icon: Database,
    },
    {
      title: "Voice-Agent für Erstgespräche",
      description: "KI-gestützte Telefon-Qualifizierung (optional)",
      icon: Phone,
    },
  ];

  const orbitalTimelineData = [
    {
      id: 1,
      title: "CRM-Audit & Datenanalyse",
      date: "Woche 1",
      content: "Analyse der bestehenden CRM-Daten und Datenqualität",
      category: "Analyse",
      icon: Database,
      status: "completed" as const,
      energy: 95,
      relatedIds: [2],
    },
    {
      id: 2,
      title: "Lead-Scoring-Modell entwickeln",
      date: "Woche 2-4",
      content: "KI-basiertes Scoring-System für automatische Qualifizierung",
      category: "Strategie",
      icon: Target,
      status: "completed" as const,
      energy: 90,
      relatedIds: [1, 3],
    },
    {
      id: 3,
      title: "Messaging-Sequenzen erstellen",
      date: "Woche 5-7",
      content: "Personalisierte E-Mail- und LinkedIn-Kommunikationsstrategien",
      category: "Content",
      icon: MessageSquare,
      status: "completed" as const,
      energy: 85,
      relatedIds: [2, 4],
    },
    {
      id: 4,
      title: "Agent-Logik implementieren",
      date: "Woche 7",
      content: "Entwicklung des KI-Sales-Agents mit Echtzeit-Scoring",
      category: "Development",
      icon: Brain,
      status: "completed" as const,
      energy: 88,
      relatedIds: [3, 5],
    },
    {
      id: 5,
      title: "CRM & Kalender Integration",
      date: "Woche 8-10",
      content: "Anbindung an bestehende Systeme und Automatisierung",
      category: "Integration",
      icon: Zap,
      status: "completed" as const,
      energy: 92,
      relatedIds: [4, 6],
    },
    {
      id: 6,
      title: "Testing & Launch",
      date: "Woche 11-12",
      content: "Pilotphase, Optimierung und unternehmensweiter Rollout",
      category: "Launch",
      icon: CheckCircle,
      status: "completed" as const,
      energy: 100,
      relatedIds: [5],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Sales-Agent - Case Study - NEW EDGE</title>
        <meta
          name="description"
          content="Wie ein KI-Sales-Agent Leads automatisch qualifiziert, personalisiert anspricht und den Vertrieb auf echte Chancen fokussiert."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <MobileNavigation onContactClick={scrollToContact} theme="light" />

        {/* Hero Section */}
        <section className="relative w-full pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 opacity-50" />
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <AnimatedSection>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                  B2B-Dienstleistung
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                  Lab + Studio
                </span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                  12 Wochen
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 text-gray-900">
                Sales-Agent
              </h1>
              <p className="text-2xl sm:text-3xl font-bold text-purple-600 mb-8">
                Vertrieb neu gedacht.
              </p>
              <p className="text-xl text-gray-700 max-w-4xl leading-relaxed">
                Wie ein KI-Sales-Agent Leads automatisch qualifiziert, personalisiert anspricht und den Vertrieb auf echte Chancen fokussiert.
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
                    Abstract
                  </h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    B2B-Dienstleister mit komplexem Vertriebsprozess und hohem Lead-Volumen. Die Herausforderung: Leads automatisch qualifizieren, personalisiert ansprechen und den Vertrieb auf hochrelevante Chancen fokussieren.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
                    <div className="text-4xl font-black text-purple-600 mb-2">B2B</div>
                    <div className="text-sm text-gray-600">Dienstleister</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl">
                    <div className="text-4xl font-black text-blue-600 mb-2">Hoch</div>
                    <div className="text-sm text-gray-600">Lead-Volumen</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
                    <div className="text-4xl font-black text-green-600 mb-2">Auto</div>
                    <div className="text-sm text-gray-600">Lead-Scoring</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-2xl">
                    <div className="text-4xl font-black text-orange-600 mb-2">24/7</div>
                    <div className="text-sm text-gray-600">Sales aktiv</div>
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
                <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-purple-500">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Fehlende Priorisierung</h3>
                  <p className="text-gray-700">
                    Alle Leads wurden gleich behandelt, keine Unterscheidung zwischen heißen und kalten Leads
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-red-500">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Zeitverlust</h3>
                  <p className="text-gray-700">
                    Manuelles Follow-up oft zu spät oder gar nicht, verpasste Chancen
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-orange-500">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Ineffizienz</h3>
                  <p className="text-gray-700">
                    Vertrieb fokussierte sich auf falsche Leads, niedrige Conversion-Rate
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
                Von der CRM-Analyse bis zum intelligenten Sales-Agent in 12 Wochen
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
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-6">
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
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                              <feature.icon className="w-6 h-6 text-purple-600" />
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
          <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
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
                Intelligente Vertriebsautomatisierung für maximale Effizienz
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-shadow"
                  >
                    <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-4">
                      <service.icon className="w-7 h-7 text-purple-600" />
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
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-black text-white">V</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Vertriebsleiter</div>
                    <div className="text-gray-600">B2B-Dienstleister</div>
                  </div>
                </div>
                <blockquote className="text-2xl font-medium text-gray-900 leading-relaxed mb-6">
                  "Der Agent hat unsere Pipeline transformiert. Wir sprechen nur noch mit hochrelevanten Leads."
                </blockquote>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-6 h-6 text-purple-500 fill-current"
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
                Lassen Sie uns gemeinsam Ihren Vertrieb automatisieren und Ihre Conversion-Rate maximieren.
              </p>
              <button
                onClick={scrollToContact}
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-5 rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all"
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

export default CaseStudySocialMedia;
