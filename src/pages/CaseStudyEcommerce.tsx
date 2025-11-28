import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from "react-helmet-async";
import { Footer } from "@/components/Footer";
import {
  Megaphone,
  Target,
  BarChart3,
  FileText,
  Users,
  Palette,
  Database,
  Brain,
  Calendar,
  Zap,
  TrendingUp,
  Quote,
  ShoppingBag,
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
          icon: Target,
          title: "Tone of Voice Definition",
          description: "Entwicklung einer einheitlichen Markenkommunikation über alle Kanäle.",
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
          icon: Brain,
          title: "Automated Content Engine",
          description: "KI-generierte Visual & Copy Libraries für Posts, Ads und Newsletter.",
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
          icon: TrendingUp,
          title: "Launch & Kontinuierliche Optimierung",
          description: "Launch-Kampagne für neue Brand Experience mit laufenden Verbesserungen.",
        },
      ],
    },
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
      icon: Database,
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

      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
        <MobileNavigation onContactClick={scrollToContact} theme="dark" />

        {/* Hero Section */}
        <section className="relative w-full min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-black py-20">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <AnimatedSection className="text-center max-w-5xl mx-auto">
              <div className="mb-6 md:mb-8">
                <span className="text-purple-400 text-xs md:text-sm font-bold tracking-widest uppercase">
                  Handel & E-Commerce X New edge
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 md:mb-8 leading-tight">
                Marketing-Agent
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto">
                Marketing, das 24/7 arbeitet. Wie ein KI-Marketing-Agent die gesamte Content-Produktion, Kampagnensteuerung & Analyse eines Händlers automatisiert und die Time-to-Market um 70% reduzierte.
              </p>
              <div className="flex justify-center">
                <button
                  onClick={scrollToContact}
                  className="px-6 py-3 md:px-10 md:py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold rounded-full text-base md:text-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/50 active:scale-95"
                >
                  Jetzt Kontakt aufnehmen
                </button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Project Overview & Challenge Section */}
        <section className="py-12 md:py-20 lg:py-32 relative bg-black">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection>
              {/* Project Overview */}
              <div className="text-center mb-12 md:mb-16">
                <div className="mb-4 md:mb-6">
                  <span className="text-purple-400 font-bold text-xs md:text-sm tracking-widest uppercase">
                    Projektüberblick
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 md:mb-8">
                  Über das Unternehmen
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed max-w-5xl mx-auto">
                  Das Handelsunternehmen betreibt 8 Standorte in Süddeutschland und einen stetig wachsenden Online-Shop. Trotz hoher Nachfrage fehlte es an Ressourcen für kontinuierliches Marketing. Kampagnen wurden spontan geplant, Content war inkonsistent, Reports unvollständig. Ein großer Teil der Marketing-Pipeline "versandete" aufgrund fehlender Automatisierung.
                </p>
              </div>

              {/* Challenge Section - Two Column Layout */}
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mt-12 md:mt-20">
                {/* Left: Image/Visual */}
                <div className="relative">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-purple-900/40 via-purple-700/30 to-blue-900/40 border border-purple-500/20 flex items-center justify-center">
                    <Megaphone className="w-32 h-32 text-purple-300/30" />
                  </div>
                </div>

                {/* Right: Challenge Text */}
                <div>
                  <div className="mb-3 md:mb-4">
                    <span className="text-purple-400 font-bold text-xs md:text-sm tracking-widest uppercase">
                      Ausgangssituation
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-6">
                    Die Herausforderung
                  </h3>
                  <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                    Keine skalierbaren Marketingprozesse, fehlende Content-Bibliothek und kein datengetriebenes Vorgehen. Support, Social Media und Kampagnen liefen manuell, ohne klare Frequenz oder Strategie. Inhalte wurden jedes Mal neu erstellt statt wiederverwendet. Keine automatischen Performance-Optimierungen und hohe Abhängigkeit von externen Dienstleistern führten zu ineffizienten Prozessen. Die Time-to-Market war 70% langsamer als bei Wettbewerbern.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Orbital Timeline Section */}
        <section className="py-12 md:py-20 lg:py-32 bg-black">
          <div className="container mx-auto px-4 md:px-6 mb-8 md:mb-12">
            <AnimatedSection>
              <div className="text-center max-w-4xl mx-auto">
                <div className="mb-3 md:mb-4">
                  <span className="text-purple-400 font-bold text-xs md:text-sm tracking-wider uppercase">
                    UNSERE LEISTUNGEN
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 md:mb-6">
                  Von der Vision zur Realität
                </h2>
                <p className="text-base md:text-xl text-gray-300 px-4">
                  Interaktive Timeline: Klicken Sie auf die Knoten, um Details zu sehen
                </p>
              </div>
            </AnimatedSection>
          </div>
          <div className="overflow-x-auto md:overflow-visible">
            <RadialOrbitalTimeline timelineData={orbitalTimelineData} />
          </div>
        </section>

        {/* Phases Section */}
        <section className="py-12 md:py-20 lg:py-32 bg-black">
          <div className="container mx-auto px-4 md:px-6">
            {/* Section Header */}
            <AnimatedSection>
              <div className="text-center mb-12 md:mb-20">
                <div className="mb-4 md:mb-6">
                  <span className="text-purple-400 font-bold text-xs md:text-sm tracking-widest uppercase">
                    Unser Prozess
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 md:mb-8">
                  Die drei Phasen
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
                  Von der Strategie über Content-Automation bis zur vollständigen Integration – ein strukturierter Prozess für maximalen Erfolg.
                </p>
              </div>
            </AnimatedSection>

            {/* Desktop: Vertical Layout, Mobile: Horizontal Scroll */}
            <div className="hidden md:block space-y-32">
              {phases.map((phase, phaseIndex) => (
                <AnimatedSection key={phaseIndex}>
                  <div
                    className={`grid lg:grid-cols-2 gap-12 items-center ${phaseIndex % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                  >
                    {/* Content Side */}
                    <div className={phaseIndex % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="mb-3 md:mb-4">
                        <span className="text-purple-400 font-bold text-xs md:text-sm tracking-wider">
                          {phase.number}
                        </span>
                      </div>
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-6">
                        {phase.title}
                      </h2>
                      <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
                        {phase.description}
                      </p>

                      <div className="space-y-4 md:space-y-6">
                        {phase.features.map((feature, featureIndex) => {
                          const Icon = feature.icon;
                          return (
                            <div
                              key={featureIndex}
                              className="flex items-start gap-3 md:gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 hover:bg-white/10 transition-all duration-300 active:scale-95"
                            >
                              <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg md:rounded-xl flex items-center justify-center">
                                <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                              </div>
                              <div>
                                <h3 className="text-white font-bold text-base md:text-lg mb-1 md:mb-2">
                                  {feature.title}
                                </h3>
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                  {feature.description}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Image Side */}
                    <div className={phaseIndex % 2 === 1 ? "lg:order-1" : ""}>
                      <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-purple-900/40 via-purple-700/30 to-blue-900/40 border border-purple-500/20 flex items-center justify-center">
                        <div className="text-purple-300/30">
                          {phaseIndex === 0 && <BarChart3 className="w-32 h-32" />}
                          {phaseIndex === 1 && <Palette className="w-32 h-32" />}
                          {phaseIndex === 2 && <Zap className="w-32 h-32" />}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Mobile: Horizontal Scroll Cards */}
            <div className="md:hidden">
              <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide">
                {phases.map((phase, phaseIndex) => (
                  <div
                    key={phaseIndex}
                    className="flex-shrink-0 w-[85vw] snap-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6"
                  >
                    <div className="mb-4">
                      <span className="text-purple-400 font-bold text-xs tracking-wider">{phase.number}</span>
                    </div>
                    <h3 className="text-2xl font-black text-white mb-3">{phase.title}</h3>
                    <p className="text-sm text-gray-300 mb-6 leading-relaxed">{phase.description}</p>

                    <div className="space-y-4">
                      {phase.features.map((feature, featureIndex) => {
                        const Icon = feature.icon;
                        return (
                          <div key={featureIndex} className="flex items-start gap-3">
                            <div className="w-10 h-10 flex-shrink-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h4 className="text-white font-bold text-sm mb-1">{feature.title}</h4>
                              <p className="text-gray-400 text-xs leading-relaxed">{feature.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-12 md:py-20 lg:py-32 bg-black">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto text-center">
                <Quote className="w-12 h-12 md:w-16 md:h-16 text-purple-400 mx-auto mb-6 md:mb-8" />
                <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 md:mb-12 leading-relaxed">
                  "Der Marketing-Agent hat unsere Prozesse revolutioniert. Wir produzieren jetzt 24/7 konsistenten Content und haben unsere Time-to-Market um 70% reduziert."
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-white font-bold text-base md:text-lg">Lisa Müller</div>
                    <div className="text-gray-400 text-sm md:text-base">Marketing Director, Handelsunternehmen</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 lg:py-32 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection>
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 md:mb-8">
                  Bereit für Ihr Projekt?
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed">
                  Lassen Sie uns gemeinsam Ihre Vision zum Leben erwecken. Kontaktieren Sie uns für ein unverbindliches Erstgespräch.
                </p>
                <button
                  onClick={scrollToContact}
                  className="px-8 py-4 md:px-12 md:py-5 bg-white text-black font-bold rounded-full text-base md:text-lg hover:scale-105 transition-transform duration-300 shadow-2xl active:scale-95"
                >
                  Projekt starten
                </button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CaseStudyEcommerce;
