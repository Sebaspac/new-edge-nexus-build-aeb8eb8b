import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from 'react-helmet-async';
import { Footer } from "@/components/Footer";
import { ShieldCheck, Globe, TrendingUp, Filter, Heart, ArrowRight, CheckCircle, Target, BarChart3, Palette, BookOpen, PenTool, Monitor, Languages, Calendar, Code, FileText, User, Clock } from "lucide-react";
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
      { threshold: 0.1 }
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
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {children}
    </div>
  );
};

const CaseStudyAlbaNova = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const scrollToContact = () => {
    navigate('/', { replace: true });
    setTimeout(() => {
      const contactSection = document.getElementById('contact-section');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const phases = [
    {
      number: "PHASE 1",
      title: "Strategie & Konzeption",
      description: "Den Grundstein für den Erfolg legen. In dieser initialen Phase definieren wir die strategische Ausrichtung und schaffen eine klare Vision für die Marke.",
      features: [
        {
          icon: Target,
          title: "Markenstrategie & Vision",
          description: "In Workshops schufen wir eine klare Markenidentität, Mission und Vision als Fundament."
        },
        {
          icon: BarChart3,
          title: "Marketing & Social Media",
          description: "Entwicklung einer kanalübergreifenden Strategie, um Zielgruppen gezielt anzusprechen."
        }
      ]
    },
    {
      number: "PHASE 2",
      title: "Kreation & Content",
      description: "Die Marke zum Leben erwecken. Wir gestalten ein einzigartiges visuelles Erscheinungsbild und erstellen Inhalte, die emotional ansprechen und überzeugen.",
      features: [
        {
          icon: Palette,
          title: "Branding & Webdesign",
          description: "Gestaltung eines modernen, seriösen und einladenden Designs."
        },
        {
          icon: BookOpen,
          title: "Storytelling & Texte",
          description: "Empathische und vertrauensbildende Texte, die Expertise vermitteln."
        },
        {
          icon: PenTool,
          title: "Content-Planung",
          description: "Ein detaillierter Redaktionsplan für Blogs, Social Media und Newsletter."
        }
      ]
    },
    {
      number: "PHASE 3",
      title: "Technische Umsetzung & Launch",
      description: "Die Vision wird Realität. Wir entwickeln eine performante, nutzerfreundliche Website und sorgen für eine reibungslose internationale Präsenz.",
      features: [
        {
          icon: Monitor,
          title: "Webentwicklung & Funnel",
          description: "Responsive Umsetzung mit klarer Funnel-Logik zur Lead-Generierung."
        },
        {
          icon: Languages,
          title: "Mehrsprachigkeit",
          description: "Native Übersetzung und Lokalisierung ins Deutsche und Spanische."
        }
      ]
    }
  ];

  const results = [
    { metric: "+250%", label: "Mehr Website-Traffic", icon: TrendingUp },
    { metric: "+180%", label: "Höhere Conversion Rate", icon: Filter },
    { metric: "+320%", label: "Mehr qualifizierte Leads", icon: Globe },
    { metric: "95%", label: "Kundenzufriedenheit", icon: Heart }
  ];

  const services = [
    "Brand Strategy & Positioning",
    "Corporate Identity Design",
    "Website Konzeption & Development",
    "Content Strategy & Creation",
    "SEO & Performance Optimization",
    "Analytics & Tracking Setup"
  ];

  const orbitalTimelineData = [
    {
      id: 1,
      title: "Kick-off",
      date: "Week 1",
      content: "Stakeholder-Interviews und Definition der Projektziele. Festlegung der strategischen Ausrichtung.",
      category: "Planning",
      icon: Calendar,
      relatedIds: [2],
      status: "completed" as const,
      energy: 100,
    },
    {
      id: 2,
      title: "Research",
      date: "Week 2",
      content: "Marktanalyse, Wettbewerbsanalyse und Zielgruppenforschung für die neue Brand Identity.",
      category: "Research",
      icon: FileText,
      relatedIds: [1, 3],
      status: "completed" as const,
      energy: 95,
    },
    {
      id: 3,
      title: "Strategie",
      date: "Week 3",
      content: "Brand Positioning Workshop und Entwicklung des Messaging Frameworks.",
      category: "Strategy",
      icon: Target,
      relatedIds: [2, 4],
      status: "completed" as const,
      energy: 90,
    },
    {
      id: 4,
      title: "Design",
      date: "Week 4-6",
      content: "UI/UX Design, Corporate Identity und Gestaltung des Design Systems.",
      category: "Design",
      icon: Palette,
      relatedIds: [3, 5],
      status: "completed" as const,
      energy: 85,
    },
    {
      id: 5,
      title: "Development",
      date: "Week 7-9",
      content: "Frontend & Backend Development mit React, Performance-Optimierung und SEO-Integration.",
      category: "Development",
      icon: Code,
      relatedIds: [4, 6],
      status: "completed" as const,
      energy: 80,
    },
    {
      id: 6,
      title: "Content",
      date: "Week 8-9",
      content: "Content Creation, Copywriting und Übersetzung in Deutsche und Spanische Sprache.",
      category: "Content",
      icon: BookOpen,
      relatedIds: [5, 7],
      status: "completed" as const,
      energy: 75,
    },
    {
      id: 7,
      title: "Testing",
      date: "Week 10",
      content: "QA Testing, User Testing und Bug Fixes vor dem Launch.",
      category: "Testing",
      icon: User,
      relatedIds: [6, 8],
      status: "completed" as const,
      energy: 70,
    },
    {
      id: 8,
      title: "Launch",
      date: "Week 11",
      content: "Finale Deployment, Go-Live und Monitoring der Performance.",
      category: "Launch",
      icon: Clock,
      relatedIds: [7],
      status: "completed" as const,
      energy: 100,
    }
  ];

  return (
    <>
      <Helmet>
        <title>AlbaNova Case Study - NEW EDGE</title>
        <meta name="description" content="Wie wir AlbaNova Consulting mit einer neuen digitalen Brand Identity zum Erfolg verholfen haben." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
        <MobileNavigation onContactClick={scrollToContact} theme="dark" />

        {/* Hero Section */}
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
          <div className="container mx-auto px-6 relative z-10">
            <AnimatedSection className="text-center max-w-5xl mx-auto">
              <div className="mb-8">
                <span className="text-purple-400 text-sm font-bold tracking-widest uppercase">
                  AlbaNova Consulting Case Study
                </span>
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
                Integration neu<br />gedacht.
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto">
                Wie wir für AlbaNova Consulting eine komplette Marken- und<br />
                Digitalstrategie entwickelten, um Migration in eine Chance zu verwandeln.
              </p>
              <div className="flex justify-center">
                <button
                  onClick={scrollToContact}
                  className="px-10 py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold rounded-full text-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/50"
                >
                  Jetzt Kontakt aufnehmen
                </button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Project Overview & Challenge Section */}
        <section className="py-20 md:py-32 relative bg-black">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              {/* Project Overview */}
              <div className="text-center mb-16">
                <div className="mb-6">
                  <span className="text-purple-400 font-bold text-sm tracking-widest uppercase">
                    Projektüberblick
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8">
                  Unser Kunde: AlbaNova Consulting
                </h2>
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-5xl mx-auto">
                  AlbaNova Consulting ist ein spezialisiertes Beratungsunternehmen, das Migrantinnen und Migranten 
                  sowie ihre Familien beim Ankommen in Deutschland begleitet. Gleichzeitig unterstützen sie 
                  Organisationen bei Relocation- und Integrationsprozessen. Das Ziel: die Herausforderungen der 
                  Migration in Chancen für persönliches und berufliches Wachstum verwandeln.
                </p>
              </div>

              {/* Challenge Section - Two Column Layout */}
              <div className="grid lg:grid-cols-2 gap-12 items-center mt-20">
                {/* Left: Image/Visual */}
                <div className="relative">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-purple-900/40 via-purple-700/30 to-blue-900/40 border border-purple-500/20 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/20 rounded-full flex items-center justify-center border border-purple-400/30">
                        <svg className="w-8 h-8 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <p className="text-sm text-purple-300/60 italic">Abstract representation of challenges</p>
                    </div>
                  </div>
                </div>

                {/* Right: Challenge Text */}
                <div>
                  <div className="mb-4">
                    <span className="text-purple-400 font-bold text-sm tracking-widest uppercase">
                      Ausgangssituation
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
                    Die Herausforderungen
                  </h3>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    Beim Projektstart existierten weder eine konsistente Markenidentität noch eine 
                    digitale Präsenz. Die hochspezialisierte Dienstleistung musste sowohl Unternehmen 
                    als auch Expatriate- und multikulturelle Familien in zwei Sprachen ansprechen. Ein 
                    klarer Marketingplan zur verständlichen und empathischen Kommunikation der 
                    komplexen Leistungen fehlte.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Unsere Lösung</h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Wir entwickelten eine ganzheitliche digitale Transformation-Strategie, die Brand Identity, 
                  User Experience und technische Excellence vereint.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <p className="text-white font-semibold text-lg">{service}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Orbital Timeline Section */}
        <section className="py-20 md:py-32 bg-black">
          <div className="container mx-auto px-6 mb-12">
            <AnimatedSection>
              <div className="text-center max-w-4xl mx-auto">
                <div className="mb-4">
                  <span className="text-purple-400 font-bold text-sm tracking-wider">PROJEKT TIMELINE</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  Von der Vision zur Realität
                </h2>
                <p className="text-xl text-gray-300">
                  Interaktive Timeline: Klicken Sie auf die Knoten, um Details zu den einzelnen Projektphasen zu sehen
                </p>
              </div>
            </AnimatedSection>
          </div>
          <RadialOrbitalTimeline timelineData={orbitalTimelineData} />
        </section>

        {/* Phases Section */}
        <section className="py-20 md:py-32 bg-black">
          <div className="container mx-auto px-6">
            {/* Section Header */}
            <AnimatedSection>
              <div className="text-center mb-20">
                <div className="mb-6">
                  <span className="text-purple-400 font-bold text-sm tracking-widest uppercase">
                    Unser Prozess
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8">
                  Die drei Phasen
                </h2>
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
                  Von der Strategie über die Kreation bis zur technischen Umsetzung – 
                  ein strukturierter Prozess für maximalen Erfolg.
                </p>
              </div>
            </AnimatedSection>

            <div className="space-y-32">
              {phases.map((phase, phaseIndex) => (
                <AnimatedSection key={phaseIndex}>
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${phaseIndex % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Content Side */}
                    <div className={phaseIndex % 2 === 1 ? 'lg:order-2' : ''}>
                      <div className="mb-4">
                        <span className="text-purple-400 font-bold text-sm tracking-wider">
                          {phase.number}
                        </span>
                      </div>
                      <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        {phase.title}
                      </h2>
                      <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                        {phase.description}
                      </p>

                      <div className="space-y-6">
                        {phase.features.map((feature, featureIndex) => {
                          const Icon = feature.icon;
                          return (
                            <div
                              key={featureIndex}
                              className="flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                            >
                              <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                                <Icon className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <h3 className="text-white font-bold text-lg mb-2">
                                  {feature.title}
                                </h3>
                                <p className="text-gray-400">
                                  {feature.description}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Image Side */}
                    <div className={phaseIndex % 2 === 1 ? 'lg:order-1' : ''}>
                      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                        {/* Placeholder for image - using gradient background */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-white/30 text-6xl font-black">
                            {phase.number}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto text-center">
                <ShieldCheck className="w-16 h-16 text-purple-500 mx-auto mb-8" />
                <blockquote className="text-2xl md:text-3xl font-semibold text-white leading-relaxed mb-8">
                  "NEW EDGE hat nicht nur unsere Website neu gestaltet – sie haben unsere gesamte digitale Identität transformiert. 
                  Die Ergebnisse sprechen für sich: Mehr Anfragen, bessere Leads und ein Team, das stolz auf unsere Online-Präsenz ist."
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full" />
                  <div className="text-left">
                    <div className="font-bold text-white text-lg">Dr. Maria Schmidt</div>
                    <div className="text-gray-400">CEO, AlbaNova Consulting</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Results Section */}
        <section id="results" className="py-20 md:py-32 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <div className="text-center mb-16">
                <div className="mb-4">
                  <span className="text-purple-400 font-bold text-sm tracking-wider">ERGEBNISSE</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Der Impact unserer Arbeit</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Innerhalb von 6 Monaten nach dem Launch konnten wir messbare Erfolge erzielen
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {results.map((result, index) => {
                  const Icon = result.icon;
                  return (
                    <div
                      key={index}
                      className="text-center bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:scale-105 transition-transform duration-300"
                    >
                      <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-5xl font-black text-white mb-3">{result.metric}</div>
                      <div className="text-gray-300 font-semibold">{result.label}</div>
                    </div>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-6">
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Bereit für Ihre digitale Transformation?
              </h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Lassen Sie uns gemeinsam eine Strategie entwickeln, die Ihre Vision Realität werden lässt.
              </p>
              <button
                onClick={scrollToContact}
                className="px-10 py-5 bg-white text-black font-bold rounded-full text-lg hover:scale-105 transition-transform duration-300 inline-flex items-center gap-3"
              >
                Projekt starten
                <ArrowRight className="w-5 h-5" />
              </button>
            </AnimatedSection>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CaseStudyAlbaNova;