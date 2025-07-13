import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Brain, Cpu, Settings, Code, ChevronDown, Zap, Database, BarChart3, Globe, Bot, FormInput, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

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

  const services = [
    {
      title: "Technische Umsetzung",
      description: "Professionelle Entwicklung und Implementierung technischer Lösungen für Ihr Unternehmen.",
      icon: Settings,
      delay: "0s"
    },
    {
      title: "KI-Integration & Automation",
      description: "Intelligente Automatisierung und KI-Integration in bestehende Geschäftsprozesse.",
      icon: Brain,
      delay: "0.1s"
    },
    {
      title: "Backend & Tech-Implementierung",
      description: "Robuste Backend-Systeme und technische Infrastruktur für skalierbare Anwendungen.",
      icon: Database,
      delay: "0.2s"
    },
    {
      title: "Webentwicklung",
      description: "CMS, Landingpages, Funnels - maßgeschneiderte Weblösungen für Ihren Erfolg.",
      icon: Globe,
      delay: "0.3s"
    },
    {
      title: "KI-gestützte Prozessautomatisierung",
      description: "Optimierung und Automatisierung von Geschäftsprozessen durch künstliche Intelligenz.",
      icon: Cpu,
      delay: "0.4s"
    },
    {
      title: "KI-Agenten-Integration",
      description: "Text, Mail, CRM - intelligente Agenten für automatisierte Kommunikation und Verwaltung.",
      icon: Bot,
      delay: "0.5s"
    },
    {
      title: "Formular- & Datenbank-Anbindungen",
      description: "Nahtlose Integration von Notion, Airtable, Supabase und anderen Datenquellen.",
      icon: FormInput,
      delay: "0.6s"
    },
    {
      title: "Tracking- & Analyse-Setups",
      description: "GA4, Tag Manager, Pixel, Dashboards - umfassende Datenanalyse und Reporting.",
      icon: BarChart3,
      delay: "0.7s"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 animate-slide-in-right">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center hover:scale-105 transition-transform duration-300">
              <img alt="New Edge Logo" className="h-8 w-8 mr-3 animate-float" src="/lovable-uploads/93b90410-bdbd-4098-938c-5ff9f158253c.png" />
              <div className="text-2xl font-bold text-black">
                New Edge<span className="text-primary"></span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-600 hover:text-black transition-all duration-300 hover:scale-110">Home</Link>
              
              <div className="relative flex items-center">
                <Link to="/services" className="text-gray-600 hover:text-black transition-all duration-300 hover:scale-110">
                  Services
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger className="text-gray-600 hover:text-black transition-all duration-300 hover:scale-110 ml-1">
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg">
                    <DropdownMenuItem asChild>
                      <Link to="/studio" className="w-full text-gray-700 hover:text-black hover:bg-gray-50">
                        New Edge Studio
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/media" className="w-full text-gray-700 hover:text-black hover:bg-gray-50">
                        New Edge Media
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/lab" className="w-full text-gray-700 hover:text-black hover:bg-gray-50">
                        New Edge Lab
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              
              <Button onClick={scrollToContact} className="bg-black text-white hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Kontakt
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-32 px-6 bg-white relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <h1 className="text-6xl md:text-8xl font-black text-black mb-8 leading-tight tracking-tight">
              <span className="inline-block animate-fade-in" style={{
                animationDelay: '0.2s'
              }}>NEW EDGE</span>
              <br />
              <span className="text-yellow-500 italic font-black inline-block animate-fade-in hover:scale-105 transition-transform duration-500" style={{
                animationDelay: '0.4s'
              }}>LAB</span>
              <br />
              <span className="text-4xl md:text-6xl text-gray-600 font-normal inline-block animate-fade-in" style={{
                animationDelay: '0.6s'
              }}>TECH INNOVATION</span>
            </h1>
            
            {/* Floating icons */}
            <div className="absolute top-20 left-10 animate-float" style={{
              animationDelay: '0.5s'
            }}>
              <Brain className="w-8 h-8 text-yellow-400" />
            </div>
            <div className="absolute top-40 right-20 animate-float" style={{
              animationDelay: '1s'
            }}>
              <Zap className="w-6 h-6 text-yellow-500" />
            </div>
            <div className="absolute bottom-20 left-20 animate-float" style={{
              animationDelay: '1.5s'
            }}>
              <Cpu className="w-10 h-10 text-yellow-300" />
            </div>

            {/* Interactive background elements */}
            <div className="absolute w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-30 animate-pulse" style={{
              left: mousePosition.x / 10,
              top: mousePosition.y / 10,
              transform: 'translate(-50%, -50%)'
            }} />
            
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto font-light leading-relaxed animate-fade-in" style={{
              animationDelay: '0.8s'
            }}>
              LAB macht aus Ideen reale, funktionierende Systeme — sicher, automatisiert, effizient.
              <br />
              <span className="text-yellow-600 font-medium">Innovation durch intelligente Technologie.</span>
            </p>
            
            <div className="animate-fade-in" style={{
              animationDelay: '1s'
            }}>
              <Button size="lg" className="bg-yellow-500 text-white hover:bg-yellow-600 transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg px-8 py-4 mr-4" asChild>
                <Link to="/#contact-section">
                  Projekt starten
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-yellow-500 text-yellow-600 hover:bg-yellow-50 transition-all duration-300 hover:scale-105 text-lg px-8 py-4">
                Services entdecken
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-black mb-6 animate-fade-in">Unsere Leistungen</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
              Technische Umsetzung und KI-Integration für moderne Unternehmen
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-200 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6 animate-fade-in">Bereit für die digitale Transformation?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Lassen Sie uns gemeinsam innovative Lösungen entwickeln, die Ihr Unternehmen voranbringen.
          </p>
          <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100 text-lg px-12 py-4 hover:scale-105 transition-all duration-300 hover:shadow-lg animate-fade-in" asChild>
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
    </div>
  );
};

export default Lab;