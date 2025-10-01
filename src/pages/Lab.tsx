import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Brain, Cpu, Settings, Code, ChevronDown, Zap, Database, BarChart3, Globe, Bot, FormInput, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MobileNavigation } from "@/components/MobileNavigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { ServicesSection } from "@/components/ServicesSection";
import kiStrategyImg from "@/assets/ki-strategy.png";
import kiInfrastructureImg from "@/assets/ki-infrastructure.png";
import kiCustomerImg from "@/assets/ki-customer.png";
import kiMediaImg from "@/assets/ki-media.png";
import kiWorkflowImg from "@/assets/ki-workflow.png";

const Lab = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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

  const labServices = [
    { title: "KI-gestützte Prozessautomatisierung", description: "Optimierung und Automatisierung operativer Aufgaben durch künstliche Intelligenz.", icon: Cpu },
    { title: "Webentwicklung", description: "CMS, Landingpages, Funnels - maßgeschneiderte Weblösungen für Ihren Erfolg.", icon: Globe },
    { title: "KI-Agenten-Integration", description: "Text, Mail, CRM - intelligente Agenten für automatisierte Kommunikation und Verwaltung.", icon: Bot },
    { title: "Tracking- & Analyse-Setups", description: "GA4, Tag Manager, Pixel, Dashboards - umfassende Datenanalyse und Reporting.", icon: BarChart3 }
  ];

  return (
    <div className="min-h-screen bg-white">
      <MobileNavigation onContactClick={scrollToContact} theme="light" />

      {/* Hero Section with Video Background */}
      <section className="relative w-full">
        <div className="w-full" style={{ paddingTop: '56.25%', position: 'relative' }}>
          {/* 16:9 Aspect Ratio Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background overflow-hidden">
            {/* Background Video */}
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/assets/hero-video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            {/* Text Content - Bottom Left */}
            <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-12 md:px-12 md:pb-16 lg:px-16 lg:pb-20">
              <div className={`max-w-3xl transition-all duration-1000 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-4 leading-tight tracking-tight">
                  <span className="block animate-fade-in" style={{ animationDelay: '0.2s' }}>NEW EDGE</span>
                  <span className="block text-primary italic font-black animate-fade-in" style={{ animationDelay: '0.4s' }}>LAB</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: '0.6s' }}>
                  TECH INNOVATION
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KI Transformation Section - PDF Style */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Header */}
          <div className="mb-16 sm:mb-24 lg:mb-32">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 sm:mb-8 leading-tight text-black">
              TRANSFORMIEREN<br />
              SIE IHR<br />
              UNTERNEHMEN<br />
              <span className="italic font-black">Heute</span> MIT KI
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 max-w-2xl leading-relaxed">
              Künstliche Intelligenz ist nicht nur noch ein weiteres Tool – sie ist der Wendepunkt, der Ihr gesamtes Unternehmen verändern wird. 
              Wenn Sie KI ausschließlich als Mittel zur Kostenreduktion oder zur schnelleren Erstellung von Inhalten betrachten, schöpfen Sie nur einen Bruchteil ihres tatsächlichen Potenzials aus. 
              Bei DEPT® entfalten wir das volle Potenzial von KI und helfen Unternehmen nicht nur dabei, sich zu verbessern, sondern auch die Art und Weise wie sie arbeiten, Kund:innen ansprechen und ihre Märkte anführen, radikal zu verändern.
            </p>
          </div>

          {/* Service Items */}
          <div className="space-y-12 sm:space-y-16 lg:space-y-20 mb-16 sm:mb-24">
            {/* Item 1 */}
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start pb-12 sm:pb-16 border-b border-gray-200">
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-black">
                  KI Strategie & Leadership
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Künstliche Intelligenz ist für uns nicht nur ein weiteres Tool – sie ist der Wendepunkt, der Marken in ein neues Zeitalter führt. Wer KI nur für Kostensenkung oder schnellere Inhalte nutzt, bleibt weit hinter dem Möglichen zurück. New Edge verbindet Kreativität mit Technologie zu maßgeschneiderten, datengetriebenen Lösungen – von Branding und Content bis zu Automatisierung und eigens entwickelten Prototypen. So verändern wir nicht nur, was Unternehmen tun, sondern wie sie arbeiten, Kund:innen begeistern und ihre Märkte anführen.
                </p>
              </div>
              <div className="order-first lg:order-last">
                <img src={kiStrategyImg} alt="KI Strategie" className="w-full h-auto rounded-lg shadow-sm" />
              </div>
            </div>

            {/* Item 2 */}
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start pb-12 sm:pb-16 border-b border-gray-200">
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-black">
                  KI Grundlagen & Infrastruktur
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Wir schaffen die Basis, auf der KI wirkt: skalierbare Datenarchitekturen, verantwortungsvolle Governance – plus maßgeschneiderte Webentwicklung (CMS, Landingpages, Funnels), die Ihre KI-Systeme nahtlos integriert und mitwächst.
                </p>
              </div>
              <div className="order-first lg:order-last">
                <img src={kiInfrastructureImg} alt="KI Infrastruktur" className="w-full h-auto rounded-lg shadow-sm" />
              </div>
            </div>

            {/* Item 3 */}
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start pb-12 sm:pb-16 border-b border-gray-200">
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-black">
                  KI-gesteuerte Customer Experiences & Produkte
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Wir entwickeln Erlebnisse, die konvertieren: Durch KI-Agenten verbinden wir Text, E-Mail und CRM zu automatisierten Journeys – für schnellere Reaktionen, relevantere Interaktionen und spürbar besseren Service.
                </p>
              </div>
              <div className="order-first lg:order-last">
                <img src={kiCustomerImg} alt="KI Customer Experiences" className="w-full h-auto rounded-lg shadow-sm" />
              </div>
            </div>

            {/* Item 4 */}
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start pb-12 sm:pb-16 border-b border-gray-200">
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-black">
                  KI-gestützte Inhalte & Media
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Wir liefern personalisierte Content- und Media-Setups – präzise getrackt mit GA4, Tag Manager, Pixel & individuellen Dashboards. So erhalten Sie verlässliche Daten und klare Entscheidungsgrundlagen statt Bauchgefühl.
                </p>
              </div>
              <div className="order-first lg:order-last">
                <img src={kiMediaImg} alt="KI Media" className="w-full h-auto rounded-lg shadow-sm" />
              </div>
            </div>

            {/* Item 5 */}
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start pb-12 sm:pb-16 border-b border-gray-200">
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-black">
                  Prozess- und Workflow Optimierung
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Wir eliminieren Reibung: Wiederkehrende Aufgaben werden KI-gestützt automatisiert, Teams entlastet und Durchlaufzeiten verkürzt – damit mehr Zeit für Innovation und Wachstum bleibt.
                </p>
              </div>
              <div className="order-first lg:order-last">
                <img src={kiWorkflowImg} alt="KI Workflow" className="w-full h-auto rounded-lg shadow-sm" />
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center pt-8 sm:pt-12">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-black">
                Wo KI auf reale<br />Erfolge trifft
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8">
                Mit unserer Erfahrung und unseren starken Partnerschaften liefern wir KI Lösungen, die nicht nur Trends folgen, sondern die Art und Weise, wie Sie Ihr Unternehmen betreiben, neu definieren – und Sie schneller, intelligenter und wettbewerbsfähiger machen.
              </p>
              <Button 
                size="lg" 
                className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
                onClick={scrollToContact}
              >
                KONTAKT AUFNEHMEN
              </Button>
            </div>
            <div className="hidden lg:block">
              <div className="flex items-center gap-8 opacity-40">
                <span className="text-xl font-bold text-gray-400">MASIMO</span>
                <span className="text-xl font-bold text-gray-400">Signify</span>
                <span className="text-xl font-bold text-gray-400">ebay</span>
                <span className="text-xl font-bold text-gray-400">Just Spices</span>
                <span className="text-xl font-bold text-gray-400">Google</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transition Section */}
      <section className="py-8 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="w-1 h-16 mx-auto mb-4" style={{ backgroundColor: '#FFED00' }}></div>
            <p className="text-gray-500 font-medium">ZUSÄTZLICH</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-32 text-black relative overflow-hidden" style={{ background: `linear-gradient(to right, #FFED00, #FFED00)` }}>
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in text-black">Let´s design the Edge</h2>
          <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in text-gray-800 px-4">
            Gemeinsam entwickeln wir innovative Technologielösungen, die Ihr Unternehmen voranbringen.
          </p>
          <Button size="lg" className="bg-black hover:bg-gray-800 text-white text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 hover:scale-105 transition-all duration-300 hover:shadow-lg animate-fade-in" onClick={scrollToContact}>
            Projekt besprechen
          </Button>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 animate-float">
            <Brain className="w-32 h-32" />
          </div>
          <div className="absolute bottom-20 right-20 animate-float" style={{ animationDelay: '1s' }}>
            <Settings className="w-24 h-24" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lab;
