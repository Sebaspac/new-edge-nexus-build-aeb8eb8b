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
  Mail,
  Calendar,
  Award,
  Megaphone,
  FileText,
  PenTool,
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
      description: "Analyse der Marketing-Daten und Entwicklung einer umfassenden Content-Strategie mit klarer Tone of Voice.",
      features: [
        {
          icon: Target,
          title: "CRM-Audit & Datenanalyse",
          description: "Vollständige Analyse bestehender Marketing-Daten und Kundeninteraktionen",
        },
        {
          icon: BarChart3,
          title: "Marketing-Prozesse dokumentieren",
          description: "Erfassung und Optimierung bestehender Workflows",
        },
        {
          icon: PenTool,
          title: "Tone of Voice Definition",
          description: "Entwicklung einer einheitlichen Markenkommunikation",
        },
        {
          icon: Sparkles,
          title: "Content-Strategie entwickeln",
          description: "Strategische Planung der gesamten Content-Produktion",
        },
      ],
    },
    {
      number: "PHASE 2",
      title: "Content & Automation",
      description: "Aufbau der automatisierten Content Engine mit Design-System und Template-Bibliothek für skalierbare Produktion.",
      features: [
        {
          icon: Brain,
          title: "Design-System + TOV als Trainingsbasis",
          description: "Umfassende Design-Guidelines für konsistente KI-Outputs",
        },
        {
          icon: Sparkles,
          title: "Template-Bibliothek erstellen",
          description: "Wiederverwendbare Templates für alle Content-Formate",
        },
        {
          icon: Zap,
          title: "Automated Content Engine aufbauen",
          description: "KI-gestützte automatisierte Content-Generierung",
        },
        {
          icon: Calendar,
          title: "Redaktionsplan-Automation",
          description: "Automatische Planung und Veröffentlichung von Inhalten",
        },
      ],
    },
    {
      number: "PHASE 3",
      title: "Integration & Optimierung",
      description: "Vollständige Integration des Marketing-Agents in bestehende Systeme mit kontinuierlicher Performance-Optimierung.",
      features: [
        {
          icon: LineChart,
          title: "KI-Agent für Marketing-Automation",
          description: "Intelligente Automatisierung aller Marketing-Prozesse",
        },
        {
          icon: ShoppingBag,
          title: "Integration in bestehende Tools",
          description: "Nahtlose Anbindung an CRM, E-Mail und Social Media",
        },
        {
          icon: Megaphone,
          title: "Kampagnen-Setup automatisieren",
          description: "Automatische Erstellung und Verwaltung von Kampagnen",
        },
        {
          icon: TrendingUp,
          title: "Performance-Tracking & Optimierung",
          description: "Kontinuierliche Analyse und Verbesserung der Ergebnisse",
        },
      ],
    },
  ];

  const results = [
    {
      metric: "70%",
      description: "Reduzierte Time-to-Market",
      icon: Zap,
    },
    {
      metric: "24/7",
      description: "Automatisierte Content-Produktion",
      icon: Sparkles,
    },
    {
      metric: "100%",
      description: "Skalierbare Marketing-Prozesse",
      icon: TrendingUp,
    },
    {
      metric: "8",
      description: "Standorte mit konsistenter Kommunikation",
      icon: ShoppingBag,
    },
  ];

  const services = [
    {
      title: "KI-Agent für Marketing-Automation",
      description: "Vollständige Automatisierung aller Marketing-Prozesse",
      icon: Brain,
    },
    {
      title: "Automated Content Engine",
      description: "Automatische Generierung von Posts, Ads, Newsletter und Landingpages",
      icon: Sparkles,
    },
    {
      title: "Design-System + TOV",
      description: "Trainingsbasis des Agents für konsistente Markenkommunikation",
      icon: PenTool,
    },
    {
      title: "Redaktionsplan-Automation",
      description: "Automatische Planung von Themen, Frequenz und Veröffentlichung",
      icon: Calendar,
    },
    {
      title: "Kampagnen-Setup & A/B-Tests",
      description: "Automatisches Testing und Performance-Optimierung",
      icon: Megaphone,
    },
    {
      title: "KI-Analyse der Konkurrenz",
      description: "Kontinuierliche Analyse der Konkurrenzkommunikation",
      icon: LineChart,
    },
  ];

  const orbitalTimelineData = [
    {
      id: 1,
      title: "CRM-Audit & Datenanalyse",
      date: "Woche 1",
      content: "Analyse bestehender Marketing-Daten und Kundeninteraktionen",
      category: "Analyse",
      icon: BarChart3,
      status: "completed" as const,
      energy: 95,
      relatedIds: [2],
    },
    {
      id: 2,
      title: "Lead-Scoring & Messaging Framework",
      date: "Woche 2-4",
      content: "Entwicklung der Marketing-Strategie und Tone of Voice",
      category: "Strategie",
      icon: Target,
      status: "completed" as const,
      energy: 90,
      relatedIds: [1, 3],
    },
    {
      id: 3,
      title: "Asset-Produktion & Templates",
      date: "Woche 5-7",
      content: "Content-Erstellung und Aufbau der Design-System-Bibliothek",
      category: "Content",
      icon: FileText,
      status: "completed" as const,
      energy: 85,
      relatedIds: [2, 4],
    },
    {
      id: 4,
      title: "Agenten-Logik & Sequenzen",
      date: "Woche 7",
      content: "Implementierung des KI-Marketing-Agents",
      category: "Development",
      icon: Brain,
      status: "completed" as const,
      energy: 88,
      relatedIds: [3, 5],
    },
    {
      id: 5,
      title: "Integration in Tools",
      date: "Woche 8-10",
      content: "Anbindung an Mail, CRM und Kalender-Systeme",
      category: "Integration",
      icon: Zap,
      status: "completed" as const,
      energy: 92,
      relatedIds: [4, 6],
    },
    {
      id: 6,
      title: "Testing & Rollout",
      date: "Woche 11-12",
      content: "Launch und kontinuierliche Optimierung",
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
        <title>Marketing-Agent - Case Study - NEW EDGE</title>
        <meta
          name="description"
          content="Wie ein KI-Marketing-Agent die gesamte Content-Produktion, Kampagnensteuerung & Analyse eines Händlers automatisiert und die Time-to-Market um 70% reduzierte."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <MobileNavigation onContactClick={scrollToContact} theme="light" />

        {/* Hero Section */}
        <section className="relative w-full pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 opacity-50" />
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <AnimatedSection>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                  Handel & E-Commerce
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                  Lab + Media
                </span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                  12 Wochen
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 text-gray-900">
                Marketing-Agent
              </h1>
              <p className="text-2xl sm:text-3xl font-bold text-blue-600 mb-8">
                Marketing, das 24/7 arbeitet.
              </p>
              <p className="text-xl text-gray-700 max-w-4xl leading-relaxed">
                Wie ein KI-Marketing-Agent die gesamte Content-Produktion, Kampagnensteuerung & Analyse eines Händlers automatisiert und die Time-to-Market um 70% reduzierte.
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
                    Das Handelsunternehmen (ca. 35 Mitarbeiter) betreibt 8 Standorte in Süddeutschland und einen stetig wachsenden Online-Shop. Trotz hoher Nachfrage fehlte es an Ressourcen für kontinuierliches Marketing. Kampagnen wurden spontan geplant, Content war inkonsistent, Reports unvollständig. Ein großer Teil der Pipeline 'versandete'.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl">
                    <div className="text-4xl font-black text-blue-600 mb-2">35</div>
                    <div className="text-sm text-gray-600">Mitarbeiter</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
                    <div className="text-4xl font-black text-purple-600 mb-2">8</div>
                    <div className="text-sm text-gray-600">Standorte</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
                    <div className="text-4xl font-black text-green-600 mb-2">24/7</div>
                    <div className="text-sm text-gray-600">Marketing aktiv</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-2xl">
                    <div className="text-4xl font-black text-orange-600 mb-2">70%</div>
                    <div className="text-sm text-gray-600">Schnellere TTM</div>
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
                <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-500">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Fehlende Skalierbarkeit</h3>
                  <p className="text-gray-700">
                    Manueller Content-Prozess ohne Systematik, spontane Kampagnenplanung
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-purple-500">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <Megaphone className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Inkonsistente Kommunikation</h3>
                  <p className="text-gray-700">
                    Keine einheitliche Tone of Voice, fragmentierte Markenbotschaft
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-red-500">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Zeitverlust</h3>
                  <p className="text-gray-700">
                    70% langsamere Time-to-Market, unvollständige Reports
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
                Von der Analyse bis zur vollautomatisierten Marketing-Maschine in 12 Wochen
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
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-6">
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
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                              <feature.icon className="w-6 h-6 text-blue-600" />
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
          <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
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
                Vollautomatisierte Marketing-Lösung für nachhaltiges Wachstum
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-shadow"
                  >
                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                      <service.icon className="w-7 h-7 text-blue-600" />
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
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-black text-white">H</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Marketing-Leiter</div>
                    <div className="text-gray-600">Regionaler Händler</div>
                  </div>
                </div>
                <blockquote className="text-2xl font-medium text-gray-900 leading-relaxed mb-6">
                  "Unser Marketing arbeitet jetzt skalierbar und konsistent. Ergebnisse kommen schneller, günstiger und messbar besser."
                </blockquote>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-6 h-6 text-blue-500 fill-current"
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
                Lassen Sie uns gemeinsam Ihr Marketing automatisieren und Ihre Time-to-Market drastisch reduzieren.
              </p>
              <button
                onClick={scrollToContact}
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-10 py-5 rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all"
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

export default CaseStudyEcommerce;
