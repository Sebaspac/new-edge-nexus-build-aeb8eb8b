import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Brain, Cpu, Settings, Code, ChevronDown, Zap, Database, BarChart3, Globe, Bot, FormInput, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MobileNavigation } from "@/components/MobileNavigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { ServicesSection } from "@/components/ServicesSection";
const Lab = () => {
  const {
    t
  } = useLanguage();
  const navigate = useNavigate();
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
    navigate('/', {
      replace: true
    });
    setTimeout(() => {
      const contactSection = document.getElementById('contact-section');
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }, 100);
  };
  const labServices = [{
    title: "KI-gestützte Prozessautomatisierung",
    description: "Optimierung und Automatisierung operativer Aufgaben durch künstliche Intelligenz.",
    icon: Cpu
  }, {
    title: "Webentwicklung",
    description: "CMS, Landingpages, Funnels - maßgeschneiderte Weblösungen für Ihren Erfolg.",
    icon: Globe
  }, {
    title: "KI-Agenten-Integration",
    description: "Text, Mail, CRM - intelligente Agenten für automatisierte Kommunikation und Verwaltung.",
    icon: Bot
  }, {
    title: "Tracking- & Analyse-Setups",
    description: "GA4, Tag Manager, Pixel, Dashboards - umfassende Datenanalyse und Reporting.",
    icon: BarChart3
  }];
  return <div className="min-h-screen bg-white">
      
      <MobileNavigation onContactClick={scrollToContact} theme="light" />

      {/* Hero Section */}
      <section className="h-screen px-4 sm:px-6 bg-white relative overflow-hidden flex items-center">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-25">
          <svg width="100%" height="100%" className="animate-parallax">
            <defs>
              <pattern id="lab-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D97706" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#lab-grid)" />
          </svg>
        </div>
        <div className="container mx-auto text-center relative z-10" style={{
        transform: 'translateY(10vh)'
      }}>
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
            
            {/* Enhanced floating tech elements */}
            <div className="absolute top-10 sm:top-20 left-4 sm:left-10 animate-float-1" style={{
            animationDelay: '0.5s'
          }}>
              <Brain className="w-6 h-6 sm:w-8 sm:h-8" style={{
              color: '#FFED00'
            }} />
            </div>
            <div className="absolute top-20 sm:top-40 right-8 sm:right-20 animate-float-2" style={{
            animationDelay: '1s'
          }}>
              <Zap className="w-4 h-4 sm:w-6 sm:h-6" style={{
              color: '#FFED00'
            }} />
            </div>
            <div className="absolute bottom-10 sm:bottom-20 left-8 sm:left-20 animate-float-3" style={{
            animationDelay: '1.5s'
          }}>
              <Cpu className="w-8 h-8 sm:w-10 sm:h-10" style={{
              color: '#FFED00'
            }} />
            </div>
            
            {/* Additional tech elements */}
            <div className="absolute top-1/2 right-1/4 animate-drift opacity-20" style={{
            animationDelay: '2s'
          }}>
              <Database className="w-12 h-12" style={{
              color: '#FFED00'
            }} />
            </div>
            <div className="absolute top-1/3 left-1/4 animate-orbit opacity-30" style={{
            animationDelay: '3s'
          }}>
              <Bot className="w-8 h-8" style={{
              color: '#FFED00'
            }} />
            </div>
            <div className="absolute bottom-1/4 right-1/3 animate-float-1 opacity-25" style={{
            animationDelay: '4s'
          }}>
              <Code className="w-10 h-10" style={{
              color: '#FFED00'
            }} />
            </div>
            <div className="absolute top-1/4 right-10 animate-float-2 opacity-20" style={{
            animationDelay: '5s'
          }}>
              <Settings className="w-8 h-8" style={{
              color: '#FFED00'
            }} />
            </div>
            
            {/* Tech circuit patterns */}
            <div className="absolute top-20 right-1/3 w-20 h-20 rounded-full animate-float-3 opacity-20" style={{
            backgroundColor: '#FFED00',
            animationDelay: '4s'
          }}></div>
            <div className="absolute bottom-1/3 left-1/3 w-16 h-16 rounded-lg animate-drift opacity-25" style={{
            backgroundColor: '#FFED00',
            animationDelay: '2.5s'
          }}></div>
            <div className="absolute top-1/2 left-10 w-12 h-12 rounded-full animate-orbit opacity-15" style={{
            backgroundColor: '#FFED00',
            animationDelay: '6s'
          }}></div>

            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 sm:mb-12 max-w-4xl mx-auto font-light leading-relaxed animate-fade-in px-4" style={{
            animationDelay: '0.8s'
          }}>
              LAB macht aus Ideen reale, funktionierende Systeme - sicher, automatisiert, effizient.
              <br className="hidden sm:block" />
              <span className="font-medium text-gray-900">Innovation durch intelligente Technologie</span>
            </p>
            
            <div className="animate-fade-in flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4" style={{
            animationDelay: '1s'
          }}>
              <Button size="lg" className="w-full sm:w-auto text-black hover:bg-yellow-400 transition-all duration-300 hover:scale-105 hover:shadow-lg text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4" style={{
              backgroundColor: '#FFED00'
            }} onClick={scrollToContact}>
                Projekt starten
              </Button>
              
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 sm:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          
          
          <ServicesSection title="Technische Umsetzung" subtitle="Maßgeschneiderte Lösungen für Ihre spezifischen Anforderungen" services={labServices} accentColor="#FFED00" bgColor="bg-transparent" />

          <div className="text-center mt-12">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 hover:scale-105 transition-all duration-300 hover:shadow-lg animate-fade-in" onClick={scrollToContact}>
              Projekt anfragen
            </Button>
          </div>
        </div>
      </section>

      {/* Transition Section */}
      <section className="py-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="w-1 h-16 mx-auto mb-4" style={{
            backgroundColor: '#FFED00'
          }}></div>
            <p className="text-gray-500 font-medium">ZUSÄTZLICH</p>
          </div>
        </div>
      </section>

      {/* Comprehensive KI-Agents Module */}
      <section className="py-16 sm:py-32 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-secondary/10 to-primary/10 rounded-full blur-3xl animate-pulse" style={{
          animationDelay: '2s'
        }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Module Header */}
          <div className="text-center mb-16 sm:mb-24">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 backdrop-blur-sm mb-8">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">KI-POWERED SOLUTIONS</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-8 leading-tight">
              Unsere{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                KI-Agenten
              </span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl text-gray-600">
                Ihr digitales Team für mehr Effizienz
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Mit unseren KI-Agenten automatisieren Sie Routineaufgaben und gewinnen wertvolle Zeit. 
              Lernen Sie unsere vier smarten Helfer kennen – sie unterstützen Sie in Recherche, Lead-Generierung, 
              Content-Erstellung und im Kundenkontakt.
            </p>
          </div>

          {/* AI Agents Grid */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-20">
            {/* RAG Agent */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white border-0 shadow-xl hover:shadow-2xl rounded-2xl transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                
                <div className="relative p-8 sm:p-10">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/80 shadow-lg shadow-primary/25 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Database className="w-10 h-10 text-white drop-shadow-sm" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4 group-hover:text-primary transition-colors">
                        RAG Agent
                      </h3>
                      <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-4">
                        Recherche & Wissensautomatisierung
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-6 text-base">
                    Der RAG Agent durchsucht blitzschnell Datenbanken und das Web, um relevante Informationen zu liefern. 
                    Er beantwortet Fragen, erstellt Berichte und findet Hintergrundwissen – ganz automatisch.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm font-medium text-gray-800">Sofort Zugriff auf aktualisiertes Expertenwissen ohne manuellen Aufwand</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm font-medium text-gray-800">Spart Ihrem Team wertvolle Stunden bei der Informationssuche</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm font-medium text-gray-800">Erstellt auf Knopfdruck Marktanalysen oder Trendüberblicke</span>
                    </div>
                  </div>
                  
                  {/* Testimonial */}
                  <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-6 border-l-4 border-primary">
                    <p className="text-gray-700 italic mb-3 text-sm leading-relaxed">
                      "Dank des RAG Agent haben wir in Minuten Antworten, für die wir früher Tage benötigten."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-bold text-sm">AM</span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Anna Müller</p>
                        <p className="text-xs text-gray-600">Geschäftsführerin, Muster GmbH</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lead Gen Agent */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white border-0 shadow-xl hover:shadow-2xl rounded-2xl transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
                
                <div className="relative p-8 sm:p-10">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary to-secondary/80 shadow-lg shadow-secondary/25 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <BarChart3 className="w-10 h-10 text-white drop-shadow-sm" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4 group-hover:text-secondary transition-colors">
                        Lead Gen Agent
                      </h3>
                      <p className="text-sm uppercase tracking-wider text-secondary font-semibold mb-4">
                        Lead-Identifikation & Qualifizierung
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-6 text-base">
                    Dieser Agent identifiziert eigenständig potenzielle Kunden und qualifiziert Leads automatisch. 
                    Er findet relevante Kontakte, nimmt Erstansprache vor und vereinbart Termine.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      <span className="text-sm font-medium text-gray-800">Ein stetiger Strom neuer, qualifizierter Leads ohne Mehraufwand im Vertrieb</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      <span className="text-sm font-medium text-gray-800">Höhere Abschlussraten durch personalisierte Ansprachen</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      <span className="text-sm font-medium text-gray-800">Scannt das Internet nach Branchen-News und generiert warme Leads</span>
                    </div>
                  </div>
                  
                  {/* Testimonial */}
                  <div className="bg-gradient-to-r from-secondary/5 to-secondary/10 rounded-xl p-6 border-l-4 border-secondary">
                    <p className="text-gray-700 italic mb-3 text-sm leading-relaxed">
                      "Mit dem Lead Gen Agent konnten wir unsere Abschlussrate verdoppeln und die Kontaktpflege vereinfachen!"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                        <span className="text-secondary font-bold text-sm">MM</span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Max Mustermann</p>
                        <p className="text-xs text-gray-600">Vertriebsleiter, Beispiel AG</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Agent */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white border-0 shadow-xl hover:shadow-2xl rounded-2xl transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
                
                <div className="relative p-8 sm:p-10">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-accent/80 shadow-lg shadow-accent/25 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FormInput className="w-10 h-10 text-white drop-shadow-sm" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4 group-hover:text-accent transition-colors">
                        Content Agent
                      </h3>
                      <p className="text-sm uppercase tracking-wider text-accent font-semibold mb-4">
                        Texterstellung & Contentautomatisierung
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-6 text-base">
                    Der Content Agent erstellt auf Knopfdruck ansprechende Texte für Blog, Social Media oder Produktbeschreibungen. 
                    Er passt Ton und Stil an Ihre Marke an und optimiert Inhalte für bessere Auffindbarkeit.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-sm font-medium text-gray-800">Regelmäßig frische Inhalte, ohne dass Sie einen Texter beauftragen müssen</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-sm font-medium text-gray-800">Steigert Ihre Online-Sichtbarkeit und stärkt die Markenbindung</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-sm font-medium text-gray-800">Schreibt redaktionelle Artikel oder Social-Posts für sofortige Veröffentlichung</span>
                    </div>
                  </div>
                  
                  {/* Testimonial */}
                  <div className="bg-gradient-to-r from-accent/5 to-accent/10 rounded-xl p-6 border-l-4 border-accent">
                    <p className="text-gray-700 italic mb-3 text-sm leading-relaxed">
                      "Seit der Einsatz des Content Agent arbeiten wir kostengünstig mit konstantem Content-Nachschub. Die Resonanz ist hervorragend."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                        <span className="text-accent font-bold text-sm">JS</span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Julia Schmidt</p>
                        <p className="text-xs text-gray-600">Marketingmanagerin, Innovativ GmbH</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Voice Agent */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white border-0 shadow-xl hover:shadow-2xl rounded-2xl transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent" />
                
                <div className="relative p-8 sm:p-10">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-lg shadow-yellow-400/25 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Bot className="w-10 h-10 text-white drop-shadow-sm" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4 group-hover:text-yellow-600 transition-colors">
                        Voice Agent
                      </h3>
                      <p className="text-sm uppercase tracking-wider text-yellow-600 font-semibold mb-4">
                        Telefon- & Sprachassistenz
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-6 text-base">
                    Unser Voice Agent ist Ihr virtueller Telefonist und Sprach-Assistent. Er übernimmt Anrufmanagement, 
                    führt vorqualifizierende Telefonate oder nimmt per Sprachdialog Termine an.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-yellow-500" />
                      <span className="text-sm font-medium text-gray-800">Rund-um-die-Uhr-Erreichbarkeit ohne zusätzlichen Personalaufwand</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-yellow-500" />
                      <span className="text-sm font-medium text-gray-800">Freundliche, effiziente Kundenkommunikation – sogar außerhalb der Geschäftszeiten</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-yellow-500" />
                      <span className="text-sm font-medium text-gray-800">Bucht selbstständig Termine oder beantwortet häufige Kundenfragen per Telefon</span>
                    </div>
                  </div>
                  
                  {/* Testimonial */}
                  <div className="bg-gradient-to-r from-yellow-400/5 to-yellow-400/10 rounded-xl p-6 border-l-4 border-yellow-400">
                    <p className="text-gray-700 italic mb-3 text-sm leading-relaxed">
                      "Der Voice Agent hat unseren Kundenservice erweitert – jetzt gehen keine Anrufe mehr verloren."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center">
                        <span className="text-yellow-600 font-bold text-sm">PB</span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Petra Becker</p>
                        <p className="text-xs text-gray-600">Inhaberin, Service24</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chatbot Agent */}
            <div className="group cursor-pointer lg:col-span-2 max-w-2xl mx-auto">
              <div className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white border-0 shadow-xl hover:shadow-2xl rounded-2xl transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
                
                <div className="relative p-8 sm:p-10">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/25 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Bot className="w-10 h-10 text-white drop-shadow-sm" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4 group-hover:text-blue-600 transition-colors">
                        Website Chatbot
                      </h3>
                      <p className="text-sm uppercase tracking-wider text-blue-600 font-semibold mb-4">
                        24/7 Kundenbetreuung & Support
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-6 text-base">
                    Unser Website Chatbot ist Ihr digitaler Kundenservice-Mitarbeiter. Er beantwortet Fragen rund um die Uhr, 
                    führt Besucher durch Ihre Website und sammelt wertvolle Leads – vollautomatisch und intelligent.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <span className="text-sm font-medium text-gray-800">24/7 Verfügbarkeit ohne Personalkosten oder Warteschlangen</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <span className="text-sm font-medium text-gray-800">Sofortige Antworten steigern Kundenzufriedenheit und Conversion-Rate</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <span className="text-sm font-medium text-gray-800">Sammelt automatisch Kontaktdaten und leitet qualifizierte Anfragen weiter</span>
                    </div>
                  </div>
                  
                  {/* Testimonial */}
                  <div className="bg-gradient-to-r from-blue-500/5 to-blue-500/10 rounded-xl p-6 border-l-4 border-blue-500">
                    <p className="text-gray-700 italic mb-3 text-sm leading-relaxed">
                      "Seit wir den Website Chatbot nutzen, haben sich unsere Anfragen verdreifacht und die Kunden sind begeistert vom schnellen Service."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-sm">TB</span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Thomas Bauer</p>
                        <p className="text-xs text-gray-600">Geschäftsführer, Digital Solutions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Closing Statement & CTA */}
          <div className="text-center">
            

            {/* Customer Logos */}
            
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
          <Button size="lg" className="bg-black hover:bg-gray-800 text-white text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 hover:scale-105 transition-all duration-300 hover:shadow-lg animate-fade-in" onClick={scrollToContact}>
            Projekt besprechen
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