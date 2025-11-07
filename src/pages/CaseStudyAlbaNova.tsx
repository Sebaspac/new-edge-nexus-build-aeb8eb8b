import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from 'react-helmet-async';
import { Footer } from "@/components/Footer";
import { ShieldCheck, Globe, TrendingUp, Filter, Heart, ArrowRight, CheckCircle, Target, BarChart3, Palette, BookOpen, PenTool, Monitor, Languages } from "lucide-react";

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

  return (
    <>
      <Helmet>
        <title>AlbaNova Case Study - NEW EDGE</title>
        <meta name="description" content="Wie wir AlbaNova Consulting mit einer neuen digitalen Brand Identity zum Erfolg verholfen haben." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
        <MobileNavigation onContactClick={scrollToContact} theme="dark" />

        {/* Hero Section */}
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <AnimatedSection className="text-center max-w-5xl mx-auto">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-semibold border border-white/20">
                  Case Study
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
                AlbaNova Consulting
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
                Wie wir eine traditionelle Unternehmensberatung in einen digitalen Vorreiter verwandelt haben
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={scrollToContact}
                  className="px-8 py-4 bg-white text-black font-bold rounded-full text-lg hover:scale-105 transition-transform duration-300"
                >
                  Ähnliches Projekt starten
                </button>
                <button
                  onClick={() => document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full text-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  Ergebnisse ansehen
                </button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-20 md:py-32 relative">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Die Herausforderung</h2>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  AlbaNova Consulting, eine etablierte Unternehmensberatung mit 25 Jahren Erfahrung, stand vor einer kritischen Herausforderung: 
                  Ihre digitale Präsenz spiegelte nicht die Expertise und Innovation wider, für die sie bekannt waren.
                </p>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Die veraltete Website führte zu sinkenden Lead-Zahlen und einer wachsenden Disconnect zwischen der Brand Identity 
                  und der tatsächlichen Wahrnehmung im Markt.
                </p>
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

        {/* Phases Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6">
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