import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from "react-helmet-async";
import { Footer } from "@/components/Footer";
import { ShieldCheck, Bot, PenTool, Palette, Calendar, BarChart3, Eye, Target, Zap, ArrowRight, Sparkles, TrendingUp, CheckCircle2, Settings } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { RelatedCaseStudies } from "@/components/RelatedCaseStudies";
import { MarketingChaosAnimation } from "@/components/ui/marketing-chaos-animation";
import { StrategyPlanningAnimation } from "@/components/ui/strategy-planning-animation";
import { ContentCreationAnimation } from "@/components/ui/content-creation-animation";
import { MarketingAgentDeployAnimation } from "@/components/ui/marketing-agent-deploy-animation";
interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}
const AnimatedSection = ({
  children,
  className = ""
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return <div ref={sectionRef} className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}>
      {children}
    </div>;
};
const CaseStudyEcommerce = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);
  const scrollToContact = () => {
    navigate("/", {
      replace: true
    });
    setTimeout(() => {
      const contactSection = document.getElementById("contact-section");
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth"
        });
      }
    }, 100);
  };
  const phases = [{
    number: "PHASE 1",
    title: "Strategie & Konzeption",
    description: "Den Grundstein für skalierbare Marketing-Automation legen. In dieser initialen Phase analysieren wir bestehende Prozesse und definieren die strategische Ausrichtung.",
    features: [{
      icon: Target,
      title: "Marketing-Audit",
      description: "Vollständige Analyse bestehender Marketing-Prozesse und Bottlenecks"
    }, {
      icon: Sparkles,
      title: "Content-Strategie",
      description: "Entwicklung einer konsistenten Content-Strategie für alle Kanäle"
    }, {
      icon: Palette,
      title: "Brand Guidelines",
      description: "Definition von Tone of Voice und visuellen Richtlinien für den KI-Agent"
    }]
  }, {
    number: "PHASE 2",
    title: "Kreation & Content",
    description: "Aufbau der Content-Bibliothek und Templates. Wir erstellen wiederverwendbare Assets und ein Design-System als Trainingsbasis für den KI-Agent.",
    features: [{
      icon: PenTool,
      title: "Template-Entwicklung",
      description: "Erstellung wiederverwendbarer Content-Templates für alle Formate"
    }, {
      icon: Palette,
      title: "Design-System",
      description: "Aufbau eines konsistenten Design-Systems als Agent-Trainingsbasis"
    }, {
      icon: Calendar,
      title: "Redaktionsplanung",
      description: "Strategische Planung von Themen und Veröffentlichungsfrequenzen"
    }]
  }, {
    number: "PHASE 3",
    title: "Technische Umsetzung & Launch",
    description: "Aktivierung und kontinuierliche Optimierung. Wir implementieren den Marketing-Agent und richten automatisierte Workflows ein.",
    features: [{
      icon: Bot,
      title: "Agent-Integration",
      description: "Implementierung des Marketing-Agents mit allen Kanälen"
    }, {
      icon: Zap,
      title: "Workflow-Automation",
      description: "Setup automatisierter Kampagnen und A/B-Test-Prozesse"
    }]
  }];
  const orbitalTimelineData = [{
    id: 1,
    title: "Marketing-Automation",
    date: "Week 1-2",
    content: "KI-Agent für vollständige Marketing-Automation aller Kanäle",
    category: "Automation",
    icon: Bot,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100
  }, {
    id: 2,
    title: "Content Engine",
    date: "Week 3-4",
    content: "Automated Content Engine für Posts, Ads, Newsletter und Landingpages",
    category: "Content",
    icon: PenTool,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 95
  }, {
    id: 3,
    title: "Design-System & TOV",
    date: "Week 5",
    content: "Design-System + Tone of Voice als Trainingsbasis des Agents",
    category: "Design",
    icon: Palette,
    relatedIds: [2, 4],
    status: "completed" as const,
    energy: 90
  }, {
    id: 4,
    title: "Redaktionsplan",
    date: "Week 6",
    content: "Redaktionsplan-Automation für Themen, Frequenz und Veröffentlichung",
    category: "Planning",
    icon: Calendar,
    relatedIds: [3, 5],
    status: "completed" as const,
    energy: 85
  }, {
    id: 5,
    title: "Kampagnen & A/B-Tests",
    date: "Week 7-8",
    content: "Kampagnen-Setup, A/B-Tests, Reporting und kontinuierliche Optimierung",
    category: "Performance",
    icon: BarChart3,
    relatedIds: [4, 6],
    status: "completed" as const,
    energy: 80
  }, {
    id: 6,
    title: "Konkurrenzanalyse",
    date: "Week 9",
    content: "KI-Analyse der Konkurrenzkommunikation für strategische Insights",
    category: "Analysis",
    icon: Eye,
    relatedIds: [5],
    status: "completed" as const,
    energy: 100
  }];
  return <>
      <Helmet>
        <title>Marketing-Agent Case Study - NEW EDGE</title>
        <meta name="description" content="Wie ein KI-Marketing-Agent die gesamte Content-Produktion, Kampagnensteuerung & Analyse eines Händlers automatisiert." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
        <MobileNavigation onContactClick={scrollToContact} theme="dark" />

        {/* Hero Section */}
        <section className="relative w-full min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-black pt-24 lg:pt-32 pb-20">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <AnimatedSection className="text-center max-w-5xl mx-auto">
              <div className="mb-6 md:mb-8">
                <span className="text-purple-400 text-xs md:text-sm font-bold tracking-widest uppercase">
                  Regionaler Händler X New Edge
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 md:mb-8 leading-tight">
                Marketing, das
                <br />
                24/7 arbeitet.
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto">
                Wie ein KI-Marketing-Agent die gesamte Content-Produktion, Kampagnensteuerung & Analyse eines Händlers automatisiert und die Time-to-Market um 70 % reduzierte.
              </p>
              <div className="flex justify-center">
                <button onClick={scrollToContact} className="px-6 py-3 md:px-10 md:py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold rounded-none text-base md:text-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/50 active:scale-95">
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
                  Das Handelsunternehmen betreibt 8 Standorte in Süddeutschland und einen stetig wachsenden Online-Shop. Trotz hoher Nachfrage fehlte es an Ressourcen für kontinuierliches Marketing. Kampagnen wurden spontan geplant, Content war inkonsistent, Reports unvollständig.
                </p>
              </div>

              {/* Challenge Section - Two Column Layout */}
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mt-12 md:mt-20">
                {/* Left: Image/Visual */}
                <div className="relative">
                  <MarketingChaosAnimation />
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
                    Support, Social Media & Kampagnen liefen manuell ohne klare Frequenz. Eingehende Leads wurden nicht priorisiert. Inhalte wurden jedes Mal neu erstellt statt wiederverwendet. Keine automatischen Performance-Optimierungen. Hohe Abhängigkeit von externen Dienstleistern.
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
                <p className="text-base md:text-xl text-gray-300 px-4 hidden md:block">
                  Interaktive Timeline: Klicken Sie auf die Knoten, um Details zu sehen
                </p>
                <p className="text-base text-gray-300 px-4 md:hidden">
                  Wischen Sie, um die Projektphasen zu erkunden
                </p>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Desktop: Radial Timeline */}
          <div className="hidden md:block">
            <RadialOrbitalTimeline timelineData={orbitalTimelineData} />
          </div>
          
          {/* Mobile: Horizontal Snap-Scroll Timeline */}
          <div className="md:hidden relative">
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-6 pt-2 scrollbar-hide" style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}>
              {orbitalTimelineData.map((item, index) => {
              const Icon = item.icon;
              return <div key={item.id} className="flex-shrink-0 w-[80vw] snap-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-4 h-4 rounded-none bg-purple-500 border-2 border-purple-300 shadow-lg shadow-purple-500/50" />
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-none p-5 h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-none bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-lg">{item.title}</h3>
                          <span className="text-purple-400 text-xs font-medium">{item.date}</span>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">{item.content}</p>
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-medium rounded-none">{item.category}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-1.5 bg-gray-700 rounded-none overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-none" style={{
                          width: `${item.energy}%`
                        }} />
                          </div>
                          <span className="text-gray-400 text-xs">{item.energy}%</span>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-center gap-1">
                        {orbitalTimelineData.map((_, i) => <div key={i} className={`w-1.5 h-1.5 rounded-none transition-colors ${i === index ? 'bg-purple-500' : 'bg-gray-600'}`} />)}
                      </div>
                    </div>
                  </div>;
            })}
            </div>
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
              {phases.map((phase, phaseIndex) => <AnimatedSection key={phaseIndex}>
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${phaseIndex % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
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
                      return <div key={featureIndex} className="flex items-start gap-3 md:gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-none p-4 md:p-6 hover:bg-white/10 transition-all duration-300 active:scale-95">
                              <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-none flex items-center justify-center">
                                <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                              </div>
                              <div>
                                <h3 className="text-white font-bold text-base md:text-lg mb-1 md:mb-2">
                                  {feature.title}
                                </h3>
                                <p className="text-sm md:text-base text-gray-400">{feature.description}</p>
                              </div>
                            </div>;
                    })}
                      </div>
                    </div>

                    {/* Animation Side */}
                    <div className={phaseIndex % 2 === 1 ? "lg:order-1" : ""}>
                      {phaseIndex === 0 && <StrategyPlanningAnimation />}
                      {phaseIndex === 1 && <ContentCreationAnimation />}
                      {phaseIndex === 2 && <MarketingAgentDeployAnimation />}
                    </div>
                  </div>
                </AnimatedSection>)}
            </div>

            {/* Mobile: Horizontal Scroll */}
            <div className="md:hidden">
              <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
                {phases.map((phase, phaseIndex) => <div key={phaseIndex} className="min-w-[85vw] snap-center">
                    <AnimatedSection>
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-none p-6">
                        <div className="mb-3">
                          <span className="text-purple-400 font-bold text-xs tracking-wider">{phase.number}</span>
                        </div>
                        <h3 className="text-2xl font-black text-white mb-3">{phase.title}</h3>
                        <p className="text-sm text-gray-300 mb-6 leading-relaxed">{phase.description}</p>

                        <div className="space-y-4">
                          {phase.features.map((feature, featureIndex) => {
                        const Icon = feature.icon;
                        return <div key={featureIndex} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-none p-4">
                                <div className="w-10 h-10 flex-shrink-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-none flex items-center justify-center">
                                  <Icon className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <h4 className="text-white font-bold text-sm mb-1">{feature.title}</h4>
                                  <p className="text-xs text-gray-400">{feature.description}</p>
                                </div>
                              </div>;
                      })}
                        </div>
                      </div>
                    </AnimatedSection>
                  </div>)}
              </div>
              <div className="flex justify-center gap-2 mt-4">
                {phases.map((_, index) => <div key={index} className="w-2 h-2 rounded-none bg-white/20" />)}
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
                  "Unser Marketing arbeitet jetzt skalierbar und konsistent. Ergebnisse kommen schneller, günstiger und messbar besser. Prozesse, die früher manuell und fehleranfällig waren, sind jetzt automatisiert – inklusive Auswertung und Optimierung. Unser Team kann sich wieder auf Wachstum statt auf operative Aufgaben konzentrieren.“ 
                </blockquote>
                <div className="flex items-center justify-center gap-3 md:gap-4">
                  
                  <div className="text-left">
                    <div className="font-bold text-white text-base md:text-lg">Marketing-Leiter</div>
                    <div className="text-sm md:text-base text-gray-400">Regionaler Händler</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Related Case Studies */}
        <RelatedCaseStudies currentCaseId="ecommerce" />

        {/* CTA Section */}
        <section className="py-12 md:py-20 lg:py-32 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 md:mb-6">
                Bereit für Ihr eigenes KI-Projekt?
              </h2>
              <p className="text-base md:text-xl text-gray-300 mb-8 md:mb-10 leading-relaxed px-4">
                Lassen Sie uns gemeinsam Ihr Marketing transformieren.
              </p>
              <button onClick={scrollToContact} className="px-8 py-4 md:px-10 md:py-5 bg-white text-black font-bold rounded-full text-base md:text-lg hover:scale-105 active:scale-95 transition-transform duration-300 inline-flex items-center gap-3">
                Projekt starten
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </AnimatedSection>
          </div>
        </section>

        <Footer />
      </div>
    </>;
};
export default CaseStudyEcommerce;