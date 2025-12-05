import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from "react-helmet-async";
import { Footer } from "@/components/Footer";
import {
  Target,
  Mail,
  CalendarCheck,
  Flame,
  Database,
  Phone,
  TrendingUp,
  Users,
  ArrowRight,
  Quote,
  Sparkles,
  CheckCircle2,
  Settings,
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

  const orbitalTimelineData = [
    {
      id: 1,
      title: "Lead-Scoring",
      date: "Core Service",
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
      date: "Outreach",
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
      date: "Automation",
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
      date: "Nurturing",
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
      date: "Data Service",
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
      date: "Optional",
      content: "Voice-Agent für automatisierte Erstgespräche und Qualifizierung",
      category: "Voice",
      icon: Phone,
      relatedIds: [5],
      status: "completed" as const,
      energy: 100,
    },
  ];

  const phases = [
    {
      number: "PHASE 1",
      title: "Strategie & Konzeption",
      description: "Fundament für intelligente Vertriebsautomation",
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
        {
          icon: Settings,
          title: "Workflow-Design",
          description: "Konzeption automatisierter Workflows für den gesamten Sales-Funnel",
        },
      ],
    },
    {
      number: "PHASE 2",
      title: "Kreation & Content",
      description: "Aufbau der Kommunikations-Assets und Templates",
      features: [
        {
          icon: Mail,
          title: "E-Mail-Sequenzen",
          description: "Erstellung personalisierter E-Mail-Templates für verschiedene Use Cases",
        },
        {
          icon: Sparkles,
          title: "LinkedIn-Strategie",
          description: "Entwicklung von LinkedIn-Outreach-Templates und Connection-Strategien",
        },
        {
          icon: Flame,
          title: "Nurturing-Content",
          description: "Aufbau von Multi-Touch-Sequenzen zur Lead-Qualifizierung",
        },
        {
          icon: CheckCircle2,
          title: "Template-Bibliothek",
          description: "Erstellung einer umfassenden Bibliothek wiederverwendbarer Assets",
        },
      ],
    },
    {
      number: "PHASE 3",
      title: "Technische Umsetzung & Launch",
      description: "Aktivierung und kontinuierliche Optimierung",
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
        {
          icon: BarChart3,
          title: "Performance-Tracking",
          description: "Einrichtung von Conversion-Tracking und Pipeline-Analytics",
        },
        {
          icon: TrendingUp,
          title: "Optimierung",
          description: "Laufende Performance-Kalibrierung basierend auf Conversion-Daten",
        },
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Sales-Agent Case Study | B2B-Dienstleister | New Edge</title>
        <meta
          name="description"
          content="Wie ein KI-Sales-Agent Leads automatisch qualifiziert, personalisiert anspricht und den Vertrieb auf echte Chancen fokussiert."
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
                <Target className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-purple-400">B2B-Dienstleister X New Edge</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                Vertrieb<br />neu gedacht.
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
                Wie ein KI-Sales-Agent Leads automatisch qualifiziert, personalisiert anspricht und den Vertrieb auf echte Chancen fokussiert.
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
                      B2B-Dienstleister mit Herausforderungen im Vertriebsprozess. Ein großer Teil der Pipeline "versandete" aufgrund ineffizienter Lead-Qualifizierung und fehlender Follow-up-Automatisierung.
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
                      <p className="text-gray-400">Follow-ups erfolgten manuell und oft zu spät</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-purple-400" />
                      </div>
                      <p className="text-gray-400">Kein klares Lead-Scoring-System</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-purple-400" />
                      </div>
                      <p className="text-gray-400">CRM-Daten waren unvollständig & unstrukturiert</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-purple-400" />
                      </div>
                      <p className="text-gray-400">Vertrieb verschwendete Zeit mit unqualifizierten Leads</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-purple-400" />
                      </div>
                      <p className="text-gray-400">Keine systematische Lead-Nurturing-Strategie</p>
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
                Intelligente Sales-Automation mit KI-gestütztem Lead-Scoring und Nurturing
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
                "Der Agent hat unsere Pipeline transformiert. Wir sprechen nur noch mit hochrelevanten Leads."
              </blockquote>
              <div className="text-gray-400">
                <p className="font-semibold text-white">Vertriebsleiter</p>
                <p>B2B-Dienstleister</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Related Case Studies */}
      <RelatedCaseStudies currentCaseId="social-media" />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Bereit für Ihr eigenes KI-Projekt?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Lassen Sie uns gemeinsam Ihren Vertrieb transformieren
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

export default CaseStudySocialMedia;
