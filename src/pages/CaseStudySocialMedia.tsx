import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from "react-helmet-async";
import { Footer } from "@/components/Footer";
import {
  ShieldCheck,
  Target,
  Mail,
  CalendarCheck,
  Flame,
  Database,
  Phone,
  TrendingUp,
  ArrowRight,
  Brain,
  BarChart3,
} from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { RelatedCaseStudies } from "@/components/RelatedCaseStudies";

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
      title: "Strategie & Konzeption",
      description:
        "Den Grundstein für intelligente Vertriebsautomation legen. In dieser initialen Phase analysieren wir CRM-Daten und entwickeln ein KI-gestütztes Lead-Scoring-System.",
      features: [
        {
          icon: Database,
          title: "CRM-Audit",
          description: "Vollständige Analyse der CRM-Datenqualität und Vertriebsprozesse",
        },
        {
          icon: Target,
          title: "Lead-Scoring-Modell",
          description: "Entwicklung eines KI-gestützten Scoring-Systems zur Lead-Priorisierung",
        },
        {
          icon: Brain,
          title: "Messaging Framework",
          description: "Definition von Messaging-Strategien für unterschiedliche Lead-Segmente",
        },
      ],
    },
    {
      number: "PHASE 2",
      title: "Kreation & Content",
      description:
        "Aufbau der Kommunikations-Assets und Templates. Wir erstellen personalisierte E-Mail-Sequenzen und LinkedIn-Strategien.",
      features: [
        {
          icon: Mail,
          title: "E-Mail-Sequenzen",
          description: "Erstellung personalisierter E-Mail-Templates für verschiedene Use Cases",
        },
        {
          icon: Target,
          title: "LinkedIn-Strategie",
          description: "Entwicklung von LinkedIn-Outreach-Templates und Connection-Strategien",
        },
        {
          icon: Flame,
          title: "Nurturing-Content",
          description: "Aufbau von Multi-Touch-Sequenzen zur Lead-Qualifizierung",
        },
      ],
    },
    {
      number: "PHASE 3",
      title: "Technische Umsetzung & Launch",
      description:
        "Aktivierung und kontinuierliche Optimierung. Wir implementieren den Sales-Agent und richten automatisierte Booking-Workflows ein.",
      features: [
        {
          icon: Target,
          title: "Agent-Integration",
          description: "Implementierung des Sales-Agents mit CRM und Kommunikationskanälen",
        },
        {
          icon: CalendarCheck,
          title: "Booking-Automation",
          description: "Setup automatisierter Terminbuchung und Kalender-Integration",
        },
      ],
    },
  ];

  const orbitalTimelineData = [
    {
      id: 1,
      title: "Lead-Scoring",
      date: "Week 1-2",
      content: "KI-Sales-Agent mit Echtzeit-Lead-Scoring für präzise Priorisierung",
      category: "Scoring",
      icon: Target,
      relatedIds: [2],
      status: "completed" as const,
      energy: 100,
    },
    {
      id: 2,
      title: "E-Mail & LinkedIn",
      date: "Week 3-4",
      content: "Automatisierte, personalisierte E-Mail- und LinkedIn-Sequenzen",
      category: "Outreach",
      icon: Mail,
      relatedIds: [1, 3],
      status: "completed" as const,
      energy: 95,
    },
    {
      id: 3,
      title: "Terminbuchung",
      date: "Week 5",
      content: "Warme Leads werden automatisch im Kalender zur Terminbuchung weitergeleitet",
      category: "Booking",
      icon: CalendarCheck,
      relatedIds: [2, 4],
      status: "completed" as const,
      energy: 90,
    },
    {
      id: 4,
      title: "Aufwärm-Sequenzen",
      date: "Week 6",
      content: "Kalte Leads erhalten automatische Aufwärm-Sequenzen bis zur Reife",
      category: "Nurturing",
      icon: Flame,
      relatedIds: [3, 5],
      status: "completed" as const,
      energy: 85,
    },
    {
      id: 5,
      title: "CRM-Automation",
      date: "Week 7-8",
      content: "Automatische CRM-Dokumentation & Pipeline-Bereinigung",
      category: "CRM",
      icon: Database,
      relatedIds: [4, 6],
      status: "completed" as const,
      energy: 80,
    },
    {
      id: 6,
      title: "Voice-Agent",
      date: "Week 9",
      content: "Voice-Agent für automatisierte Erstgespräche und Qualifizierung",
      category: "Voice",
      icon: Phone,
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

      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
        <MobileNavigation onContactClick={scrollToContact} theme="dark" />

        {/* Hero Section */}
        <section className="relative w-full min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-black py-20">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <AnimatedSection className="text-center max-w-5xl mx-auto">
              <div className="mb-6 md:mb-8">
                <span className="text-purple-400 text-xs md:text-sm font-bold tracking-widest uppercase">
                  B2B-Dienstleister X New Edge
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 md:mb-8 leading-tight">
                Vertrieb
                <br />
                neu gedacht.
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto">
                Wie ein KI-Sales-Agent Leads automatisch qualifiziert, personalisiert anspricht und den Vertrieb auf echte Chancen fokussiert.
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
                  B2B-Dienstleister mit Herausforderungen im Vertriebsprozess. Ein großer Teil der Pipeline "versandete" aufgrund ineffizienter Lead-Qualifizierung und fehlender Follow-up-Automatisierung.
                </p>
              </div>

              {/* Challenge Section - Two Column Layout */}
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mt-12 md:mt-20">
                {/* Left: Image/Visual */}
                <div className="relative">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-purple-900/40 via-purple-700/30 to-blue-900/40 border border-purple-500/20 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/20 rounded-full flex items-center justify-center border border-purple-400/30">
                        <Target className="w-8 h-8 text-purple-300" />
                      </div>
                      <p className="text-sm text-purple-300/60 italic">Intelligente Vertriebsautomation</p>
                    </div>
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
                    Die Herausforderungen
                  </h3>
                  <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                    Follow-ups erfolgten manuell und oft zu spät. Kein klares Lead-Scoring-System. CRM-Daten waren unvollständig & unstrukturiert. Vertrieb verschwendete Zeit mit unqualifizierten Leads. Keine systematische Lead-Nurturing-Strategie.
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
                  Von der Strategie über die Kreation bis zur technischen Umsetzung – ein strukturierter Prozess für
                  maximalen Erfolg.
                </p>
              </div>
            </AnimatedSection>

            {/* Desktop: Vertical Layout */}
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
                                <p className="text-sm md:text-base text-gray-400">{feature.description}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Image Side */}
                    <div className={phaseIndex % 2 === 1 ? "lg:order-1" : ""}>
                      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-white/30 text-6xl font-black">{phase.number}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Mobile: Horizontal Scroll */}
            <div className="md:hidden">
              <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
                {phases.map((phase, phaseIndex) => (
                  <div key={phaseIndex} className="min-w-[85vw] snap-center">
                    <AnimatedSection>
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                        <div className="mb-3">
                          <span className="text-purple-400 font-bold text-xs tracking-wider">{phase.number}</span>
                        </div>
                        <h3 className="text-2xl font-black text-white mb-3">{phase.title}</h3>
                        <p className="text-sm text-gray-300 mb-6 leading-relaxed">{phase.description}</p>

                        <div className="space-y-4">
                          {phase.features.map((feature, featureIndex) => {
                            const Icon = feature.icon;
                            return (
                              <div
                                key={featureIndex}
                                className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4"
                              >
                                <div className="w-10 h-10 flex-shrink-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                                  <Icon className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <h4 className="text-white font-bold text-sm mb-1">{feature.title}</h4>
                                  <p className="text-xs text-gray-400">{feature.description}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </AnimatedSection>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-2 mt-4">
                {phases.map((_, index) => (
                  <div key={index} className="w-2 h-2 rounded-full bg-white/20" />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-12 md:py-20 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto text-center">
                <ShieldCheck className="w-12 h-12 md:w-16 md:h-16 text-purple-500 mx-auto mb-6 md:mb-8" />
                <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white leading-relaxed mb-6 md:mb-8">
                  "Der Agent hat unsere Pipeline transformiert. Wir sprechen nur noch mit hochrelevanten Leads."
                </blockquote>
                <div className="flex items-center justify-center gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-bold text-white text-base md:text-lg">Vertriebsleiter</div>
                    <div className="text-sm md:text-base text-gray-400">B2B-Dienstleister</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Related Case Studies */}
        <RelatedCaseStudies currentCaseId="social-media" />

        {/* CTA Section */}
        <section className="py-12 md:py-20 lg:py-32 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 md:mb-6">
                Bereit für Ihr eigenes KI-Projekt?
              </h2>
              <p className="text-base md:text-xl text-gray-300 mb-8 md:mb-10 leading-relaxed px-4">
                Lassen Sie uns gemeinsam Ihren Vertrieb transformieren.
              </p>
              <button
                onClick={scrollToContact}
                className="px-8 py-4 md:px-10 md:py-5 bg-white text-black font-bold rounded-full text-base md:text-lg hover:scale-105 active:scale-95 transition-transform duration-300 inline-flex items-center gap-3"
              >
                Projekt starten
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </AnimatedSection>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CaseStudySocialMedia;