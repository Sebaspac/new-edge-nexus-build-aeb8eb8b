import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from "react-helmet-async";
import { Footer } from "@/components/Footer";
import {
  Bot,
  PenTool,
  Palette,
  Calendar,
  BarChart3,
  Eye,
  Target,
  Zap,
  ArrowRight,
  Quote,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  Settings,
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

  const orbitalTimelineData = [
    {
      id: 1,
      title: "Marketing-Automation",
      date: "Core Service",
      content: "KI-Agent für vollständige Marketing-Automation aller Kanäle",
      category: "Automation",
      icon: Bot,
      relatedIds: [2],
      status: "completed" as const,
      energy: 100,
    },
    {
      id: 2,
      title: "Content Engine",
      date: "Content Service",
      content: "Automated Content Engine für Posts, Ads, Newsletter und Landingpages",
      category: "Content",
      icon: PenTool,
      relatedIds: [1, 3],
      status: "completed" as const,
      energy: 95,
    },
    {
      id: 3,
      title: "Design-System & TOV",
      date: "Branding",
      content: "Design-System + Tone of Voice als Trainingsbasis des Agents",
      category: "Design",
      icon: Palette,
      relatedIds: [2, 4],
      status: "completed" as const,
      energy: 90,
    },
    {
      id: 4,
      title: "Redaktionsplan",
      date: "Planning",
      content: "Redaktionsplan-Automation für Themen, Frequenz und Veröffentlichung",
      category: "Planning",
      icon: Calendar,
      relatedIds: [3, 5],
      status: "completed" as const,
      energy: 85,
    },
    {
      id: 5,
      title: "Kampagnen & A/B-Tests",
      date: "Performance",
      content: "Kampagnen-Setup, A/B-Tests, Reporting und kontinuierliche Optimierung",
      category: "Performance",
      icon: BarChart3,
      relatedIds: [4, 6],
      status: "completed" as const,
      energy: 80,
    },
    {
      id: 6,
      title: "Konkurrenzanalyse",
      date: "Intelligence",
      content: "KI-Analyse der Konkurrenzkommunikation für strategische Insights",
      category: "Analysis",
      icon: Eye,
      relatedIds: [5],
      status: "completed" as const,
      energy: 100,
    },
  ];

  const phases = [
    {
      number: "PHASE 1",
      title: "Strategie & Konzeption",
      description: "Fundament für skalierbare Marketing-Automation",
      features: [
        {
          icon: Target,
          title: "Marketing-Audit",
          description: "Vollständige Analyse bestehender Marketing-Prozesse und Bottlenecks",
        },
        {
          icon: Sparkles,
          title: "Content-Strategie",
          description: "Entwicklung einer konsistenten Content-Strategie für alle Kanäle",
        },
        {
          icon: Palette,
          title: "Brand Guidelines",
          description: "Definition von Tone of Voice und visuellen Richtlinien für den KI-Agent",
        },
        {
          icon: Settings,
          title: "Automation-Framework",
          description: "Konzeption der Automatisierungslogik und Workflow-Strukturen",
        },
      ],
    },
    {
      number: "PHASE 2",
      title: "Kreation & Content",
      description: "Aufbau der Content-Bibliothek und Templates",
      features: [
        {
          icon: PenTool,
          title: "Template-Entwicklung",
          description: "Erstellung wiederverwendbarer Content-Templates für alle Formate",
        },
        {
          icon: Palette,
          title: "Design-System",
          description: "Aufbau eines konsistenten Design-Systems als Agent-Trainingsbasis",
        },
        {
          icon: Calendar,
          title: "Redaktionsplanung",
          description: "Strategische Planung von Themen und Veröffentlichungsfrequenzen",
        },
        {
          icon: CheckCircle2,
          title: "Quality Assurance",
          description: "Implementierung von Qualitätssicherungsprozessen für generierten Content",
        },
      ],
    },
    {
      number: "PHASE 3",
      title: "Technische Umsetzung & Launch",
      description: "Aktivierung und kontinuierliche Optimierung",
      features: [
        {
          icon: Bot,
          title: "Agent-Integration",
          description: "Implementierung des Marketing-Agents mit allen Kanälen",
        },
        {
          icon: Zap,
          title: "Workflow-Automation",
          description: "Setup automatisierter Kampagnen und A/B-Test-Prozesse",
        },
        {
          icon: BarChart3,
          title: "Analytics & Reporting",
          description: "Einrichtung von Performance-Tracking und automatisiertem Reporting",
        },
        {
          icon: TrendingUp,
          title: "Optimierung",
          description: "Laufende Performance-Optimierung basierend auf Datenanalyse",
        },
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Marketing-Agent Case Study | Regionaler Händler | New Edge</title>
        <meta
          name="description"
          content="Wie ein KI-Marketing-Agent die gesamte Content-Produktion, Kampagnensteuerung & Analyse eines Händlers automatisiert und die Time-to-Market um 70% reduzierte."
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
                <Bot className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-purple-400">Regionaler Händler X New Edge</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                Marketing, das<br />24/7 arbeitet.
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
                Wie ein KI-Marketing-Agent die gesamte Content-Produktion, Kampagnensteuerung & Analyse eines Händlers automatisiert und die Time-to-Market um 70 % reduzierte.
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
                      Das Handelsunternehmen betreibt 8 Standorte in Süddeutschland und einen stetig wachsenden Online-Shop. Trotz hoher Nachfrage fehlte es an Ressourcen für kontinuierliches Marketing. Kampagnen wurden spontan geplant, Content war inkonsistent, Reports unvollständig.
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
                      <p className="text-gray-400">Support, Social Media & Kampagnen liefen manuell ohne klare Frequenz</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-purple-400" />
                      </div>
                      <p className="text-gray-400">Eingehende Leads wurden nicht priorisiert</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-purple-400" />
                      </div>
                      <p className="text-gray-400">Inhalte wurden jedes Mal neu erstellt statt wiederverwendet</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-purple-400" />
                      </div>
                      <p className="text-gray-400">Keine automatischen Performance-Optimierungen</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-purple-400" />
                      </div>
                      <p className="text-gray-400">Hohe Abhängigkeit von externen Dienstleistern</p>
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
                Vollständige Marketing-Automation mit KI-gesteuerter Content-Produktion
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
                "Unser Marketing arbeitet jetzt skalierbar und konsistent. Ergebnisse kommen schneller, günstiger und messbar besser."
              </blockquote>
              <div className="text-gray-400">
                <p className="font-semibold text-white">Marketing-Leiter</p>
                <p>Regionaler Händler</p>
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
                Lassen Sie uns gemeinsam Ihr Marketing transformieren
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

export default CaseStudyEcommerce;
