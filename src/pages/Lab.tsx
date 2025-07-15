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
              <span className="font-medium text-gray-900">     Innovation durch intelligente Technologie.</span>
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
            <div className="inline-block px-4 py-2 bg-white rounded-full shadow-sm mb-6">
              <span className="text-sm font-medium text-gray-600">PROJEKTBASIERTE LEISTUNGEN</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6 animate-fade-in">Technische Umsetzung</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in px-4">
              Maßgeschneiderte Lösungen für Ihre spezifischen Anforderungen
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
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

          <div className="text-center">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 hover:scale-105 transition-all duration-300 hover:shadow-lg animate-fade-in" asChild>
              <Link to="/#contact-section">
                Projekt anfragen
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Transition Section */}
      <section className="py-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="w-1 h-16 mx-auto mb-4" style={{ backgroundColor: '#FFED00' }}></div>
            <p className="text-gray-500 font-medium">ZUSÄTZLICH</p>
          </div>
        </div>
      </section>

      {/* New Edge Agent Hub */}
      <section className="py-16 sm:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-20">
            <div className="inline-block px-4 py-2 rounded-full shadow-sm mb-6" style={{
              background: 'linear-gradient(135deg, #9F91F8, #4F97F0)',
              color: 'white'
            }}>
              <span className="text-sm font-medium">KI-POWERED SOLUTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in" style={{ color: '#9F91F8' }}>
              New Edge Agent Hub
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in px-4 mb-8">
              Unsere eigenen KI-Anwendungen – sofort einsatzbereit für maximale Effizienz
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 rounded-full">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#FFED00' }}></div>
              <span className="text-sm font-medium text-gray-700">In aktiver Entwicklung</span>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* KI-Helfer App - Featured */}
            <div className="lg:col-span-3 mb-8">
              <Card className="bg-gradient-to-br from-purple-50 via-blue-50 to-yellow-50 border-2 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-fade-in group cursor-pointer overflow-hidden relative">
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold" style={{
                  backgroundColor: '#FFED00',
                  color: '#333333'
                }}>
                  VERFÜGBAR
                </div>
                <CardContent className="p-8 sm:p-12">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="text-center lg:text-left">
                      <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" style={{
                        background: 'linear-gradient(135deg, #9F91F8, #4F97F0)'
                      }}>
                        <Bot className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">KI-Helfer Workforce</h3>
                      <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
                        70+ spezialisierte KI-Agenten für Copywriting, HR, Marketing, Strategie und mehr. 
                        <span className="font-semibold"> Lebenslanger Zugang ohne Abonnement.</span>
                      </p>
                      <div className="space-y-3 mb-8">
                        <div className="flex items-center justify-center lg:justify-start gap-3">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#4F97F0' }}></div>
                          <span className="text-sm text-gray-600">Keine monatlichen Kosten</span>
                        </div>
                        <div className="flex items-center justify-center lg:justify-start gap-3">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#9F91F8' }}></div>
                          <span className="text-sm text-gray-600">Sofort einsatzbereit</span>
                        </div>
                        <div className="flex items-center justify-center lg:justify-start gap-3">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#FFED00' }}></div>
                          <span className="text-sm text-gray-600">80% Rabatt für kurze Zeit</span>
                        </div>
                      </div>
                      <Button size="lg" className="w-full lg:w-auto text-white text-base sm:text-lg px-8 py-4 hover:scale-105 transition-all duration-300 hover:shadow-lg" style={{
                        background: 'linear-gradient(135deg, #9F91F8, #4F97F0)'
                      }} asChild>
                        <a href="https://agenthub.newedgebrand.com" target="_blank" rel="noopener noreferrer">
                          Jetzt entdecken →
                        </a>
                      </Button>
                    </div>
                    <div className="hidden lg:block">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4">
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#9F91F820' }}>
                                <Code className="w-4 h-4" style={{ color: '#9F91F8' }} />
                              </div>
                              <span className="text-sm font-medium">Cody</span>
                            </div>
                            <p className="text-xs text-gray-600">Copywriting</p>
                          </div>
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#4F97F020' }}>
                                <BarChart3 className="w-4 h-4" style={{ color: '#4F97F0' }} />
                              </div>
                              <span className="text-sm font-medium">Inti</span>
                            </div>
                            <p className="text-xs text-gray-600">HR & Recruiting</p>
                          </div>
                        </div>
                        <div className="space-y-4 mt-8">
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFED0020' }}>
                                <Globe className="w-4 h-4" style={{ color: '#FFED00' }} />
                              </div>
                              <span className="text-sm font-medium">Dimarko</span>
                            </div>
                            <p className="text-xs text-gray-600">Digital Marketing</p>
                          </div>
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#9F91F820' }}>
                                <Brain className="w-4 h-4" style={{ color: '#9F91F8' }} />
                              </div>
                              <span className="text-sm font-medium">+66 weitere</span>
                            </div>
                            <p className="text-xs text-gray-600">Alle Bereiche</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Coming Soon Apps */}
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group cursor-pointer" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8 text-center relative">
                <div className="absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-bold bg-gray-200 text-gray-600">
                  Q4 2025
                </div>
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110" style={{
                  background: 'linear-gradient(135deg, #4F97F0, #9F91F8)'
                }}>
                  <Settings className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Automation Studio</h3>
                <p className="text-gray-700 leading-relaxed text-sm mb-6">
                  Workflow-Automatisierung und Prozessoptimierung für Ihr Unternehmen
                </p>
                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-600">
                  In Entwicklung
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group cursor-pointer" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 text-center relative">
                <div className="absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-bold bg-gray-200 text-gray-600">
                  Q4 2025
                </div>
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110" style={{
                  background: 'linear-gradient(135deg, #FFED00, #4F97F0)'
                }}>
                  <Activity className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Intelligence Hub</h3>
                <p className="text-gray-700 leading-relaxed text-sm mb-6">
                  KI-gestützte Analysen und Insights für datengetriebene Entscheidungen
                </p>
                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-600">
                  In Planung
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group cursor-pointer" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-8 text-center relative">
                <div className="absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-bold bg-gray-200 text-gray-600">
                  TBD
                </div>
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 bg-gradient-to-br from-green-400 to-blue-500">
                  <ChevronDown className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Weitere Apps</h3>
                <p className="text-gray-700 leading-relaxed text-sm mb-6">
                  Haben Sie spezielle Anforderungen? Wir entwickeln maßgeschneiderte KI-Lösungen
                </p>
                <Button variant="outline" size="sm" className="border-green-300 text-green-700 hover:bg-green-50" asChild>
                  <Link to="/#contact-section">
                    Anfrage stellen
                  </Link>
                </Button>
              </CardContent>
            </Card>
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