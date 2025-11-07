import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from 'react-helmet-async';
import { Footer } from "@/components/Footer";
import { ShieldCheck, Globe, TrendingUp, Filter, Heart, ArrowRight, CheckCircle } from "lucide-react";

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

  const timelineData = [
    { phase: "Kick-off & Research", duration: "Week 1-2", description: "Stakeholder-Interviews, Marktanalyse und Strategie-Workshop" },
    { phase: "Konzeption", duration: "Week 3-4", description: "Brand Positioning, Messaging Framework und Design System" },
    { phase: "Design & Entwicklung", duration: "Week 5-8", description: "UI/UX Design, Website Development und Content Creation" },
    { phase: "Testing & Launch", duration: "Week 9-10", description: "QA Testing, Performance Optimization und erfolgreicher Go-Live" },
    { phase: "Nachbetreuung", duration: "Week 11-12", description: "Analytics Setup, Team Training und kontinuierliche Optimierung" }
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

        {/* Results Section */}
        <section id="results" className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Die Ergebnisse</h2>
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

        {/* Timeline Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Projekt Timeline</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Von der ersten Idee bis zum erfolgreichen Launch in 12 Wochen
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-8">
                {timelineData.map((item, index) => (
                  <div
                    key={index}
                    className="relative pl-8 border-l-4 border-purple-500/30 hover:border-purple-500 transition-colors duration-300"
                  >
                    <div className="absolute -left-3 top-0 w-6 h-6 bg-purple-500 rounded-full border-4 border-black" />
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h3 className="text-2xl font-bold text-white">{item.phase}</h3>
                        <span className="text-sm text-gray-400 font-semibold">{item.duration}</span>
                      </div>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
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