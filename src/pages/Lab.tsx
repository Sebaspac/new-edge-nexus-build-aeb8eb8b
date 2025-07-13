import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Brain, Cpu, Settings, Code, ChevronDown, Zap, Database, BarChart3, Globe, Bot, FormInput, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MobileNavigation } from "@/components/MobileNavigation";
const Lab = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  const scrollToContact = () => {
    window.location.href = '/#contact-section';
  };
  const services = [{
    title: "Technische Umsetzung",
    description: "Professionelle Entwicklung und Implementierung technischer Lösungen für Ihr Unternehmen.",
    icon: Settings,
    delay: "0s"
  }, {
    title: "KI-Integration & Automation",
    description: "Intelligente Automatisierung und KI-Integration in bestehende Geschäftsprozesse.",
    icon: Brain,
    delay: "0.1s"
  }, {
    title: "Backend & Tech-Implementierung",
    description: "Robuste Backend-Systeme und technische Infrastruktur für skalierbare Anwendungen.",
    icon: Database,
    delay: "0.2s"
  }, {
    title: "Webentwicklung",
    description: "CMS, Landingpages, Funnels - maßgeschneiderte Weblösungen für Ihren Erfolg.",
    icon: Globe,
    delay: "0.3s"
  }, {
    title: "KI-gestützte Prozessautomatisierung",
    description: "Optimierung und Automatisierung von Geschäftsprozessen durch künstliche Intelligenz.",
    icon: Cpu,
    delay: "0.4s"
  }, {
    title: "KI-Agenten-Integration",
    description: "Text, Mail, CRM - intelligente Agenten für automatisierte Kommunikation und Verwaltung.",
    icon: Bot,
    delay: "0.5s"
  }, {
    title: "Formular- & Datenbank-Anbindungen",
    description: "Nahtlose Integration von Notion, Airtable, Supabase und anderen Datenquellen.",
    icon: FormInput,
    delay: "0.6s"
  }, {
    title: "Tracking- & Analyse-Setups",
    description: "GA4, Tag Manager, Pixel, Dashboards - umfassende Datenanalyse und Reporting.",
    icon: BarChart3,
    delay: "0.7s"
  }];
  return <div className="min-h-screen bg-white">
      <MobileNavigation onContactClick={scrollToContact} theme="light" />

      {/* Hero Section */}
      <section className="pt-20 sm:pt-32 pb-16 sm:pb-32 px-4 sm:px-6 bg-white relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-black mb-6 sm:mb-8 leading-tight tracking-tight">
              <span className="inline-block animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>NEW EDGE</span>
              <br />
              <span className="italic font-black inline-block animate-fade-in hover:scale-105 transition-transform duration-500" style={{
              animationDelay: '0.4s',
              color: '#FFED00'
            }}>LAB</span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-gray-600 font-normal inline-block animate-fade-in" style={{
              animationDelay: '0.6s'
            }}>TECH INNOVATION</span>
            </h1>
            
            {/* Floating icons */}
            <div className="absolute top-10 sm:top-20 left-4 sm:left-10 animate-float" style={{
            animationDelay: '0.5s'
          }}>
              <Brain className="w-6 h-6 sm:w-8 sm:h-8" style={{
              color: '#FFED00'
            }} />
            </div>
            <div className="absolute top-20 sm:top-40 right-8 sm:right-20 animate-float" style={{
            animationDelay: '1s'
          }}>
              <Zap className="w-4 h-4 sm:w-6 sm:h-6" style={{
              color: '#FFED00'
            }} />
            </div>
            <div className="absolute bottom-10 sm:bottom-20 left-8 sm:left-20 animate-float" style={{
            animationDelay: '1.5s'
          }}>
              <Cpu className="w-8 h-8 sm:w-10 sm:h-10" style={{
              color: '#FFED00'
            }} />
            </div>

            {/* Interactive background elements */}
            <div className="absolute w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl opacity-30 animate-pulse" style={{
            left: mousePosition.x / 10,
            top: mousePosition.y / 10,
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#FFED00'
          }} />
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 sm:mb-12 max-w-4xl mx-auto font-light leading-relaxed animate-fade-in px-4" style={{
            animationDelay: '0.8s'
          }}>
              LAB macht aus Ideen reale, funktionierende Systeme — sicher, automatisiert, effizient.
              <br className="hidden sm:block" />
              <span className="font-medium text-gray-900">Innovation durch intelligente Technologie.</span>
            </p>
            
            <div className="animate-fade-in flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4" style={{
            animationDelay: '1s'
          }}>
              <Button size="lg" className="w-full sm:w-auto text-black hover:bg-yellow-400 transition-all duration-300 hover:scale-105 hover:shadow-lg text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4" style={{
              backgroundColor: '#FFED00'
            }} asChild>
                <Link to="/#contact-section">
                  Projekt starten
                </Link>
              </Button>
              
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 sm:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6 animate-fade-in">Unsere Leistungen</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in px-4">
              Technische Umsetzung und KI-Integration für moderne Unternehmen
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, index) => <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300" style={{
                backgroundColor: '#FFED0020'
              }}>
                    <service.icon className="w-8 h-8" style={{
                  color: '#FFED00'
                }} />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-32 text-black relative overflow-hidden" style={{
      background: `linear-gradient(to right, #FFED00, #FFED00)`
    }}>
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in text-black">Let´s design the Edge</h2>
          <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in text-gray-800 px-4">
            Gemeinsam entwickeln wir innovative Technologielösungen, die Ihr Unternehmen voranbringen.
          </p>
          <Button size="lg" className="bg-black hover:bg-gray-800 text-white text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 hover:scale-105 transition-all duration-300 hover:shadow-lg animate-fade-in" asChild>
            <Link to="/#contact-section">
              Projekt besprechen
            </Link>
          </Button>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 animate-float">
            <Brain className="w-32 h-32" />
          </div>
          <div className="absolute bottom-20 right-20 animate-float" style={{
          animationDelay: '1s'
        }}>
            <Settings className="w-24 h-24" />
          </div>
        </div>
      </section>
    </div>;
};
export default Lab;