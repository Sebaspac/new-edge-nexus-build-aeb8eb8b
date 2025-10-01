import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bot, Activity, Sparkles, Zap, Code, BarChart3, Globe, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from 'react-helmet-async';

const Products = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsVisible(true);
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

  return (
    <>
      <Helmet>
        <title>NEW EDGE Produkte - KI-Powered Solutions für Ihr Business</title>
        <meta name="description" content="Entdecken Sie unsere KI-gestützten Produkte: Agent Hub mit 8+ spezialisierten KI-Agenten und weitere innovative Lösungen für Ihr Business." />
        <meta name="keywords" content="KI Produkte, Agent Hub, KI Agenten, Business Tools, Automatisierung" />
        <link rel="canonical" href="https://new-edge.de/products" />
        <meta property="og:title" content="NEW EDGE Produkte - KI-Powered Solutions" />
        <meta property="og:description" content="Innovative KI-gestützte Produkte für Ihr Business" />
        <meta property="og:url" content="https://new-edge.de/products" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <MobileNavigation onContactClick={scrollToContact} theme="light" />

        {/* Hero Section */}
        <section className="h-screen px-4 sm:px-6 bg-white relative overflow-hidden flex items-center">
          {/* Animated Grid Background */}
          <div className="absolute inset-0 opacity-25">
            <svg width="100%" height="100%" className="animate-parallax">
              <defs>
                <pattern id="products-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#9F91F8" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#products-grid)" />
            </svg>
          </div>

          <div className="container mx-auto text-center relative z-10" style={{ transform: 'translateY(10vh)' }}>
            <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-black mb-6 sm:mb-8 leading-tight tracking-tight">
                <span className="inline-block animate-fade-in" style={{ animationDelay: '0.2s' }}>NEW EDGE</span>
                <br />
                <span className="inline-block animate-fade-in hover:scale-105 transition-transform duration-500" style={{ 
                  animationDelay: '0.4s',
                  background: 'linear-gradient(135deg, #9F91F8, #4F97F0)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontStyle: 'italic',
                  fontWeight: 900
                }}>PRODUKTE</span>
                <br />
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-gray-600 font-normal inline-block animate-fade-in" style={{ animationDelay: '0.6s' }}>
                  KI-POWERED SOLUTIONS
                </span>
              </h1>

              {/* Floating elements */}
              <div className="absolute top-10 sm:top-20 left-4 sm:left-10 animate-float-1" style={{ animationDelay: '0.5s' }}>
                <Bot className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: '#9F91F8' }} />
              </div>
              <div className="absolute top-20 sm:top-40 right-8 sm:right-20 animate-float-2" style={{ animationDelay: '1s' }}>
                <Zap className="w-4 h-4 sm:w-6 sm:h-6" style={{ color: '#4F97F0' }} />
              </div>
              <div className="absolute bottom-10 sm:bottom-20 left-8 sm:left-20 animate-float-3" style={{ animationDelay: '1.5s' }}>
                <Sparkles className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: '#9F91F8' }} />
              </div>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 sm:mb-12 max-w-4xl mx-auto font-light leading-relaxed animate-fade-in px-4" style={{ animationDelay: '0.8s' }}>
                Innovative KI-gestützte Lösungen für Ihr Business
                <br />
                <span className="font-medium text-gray-900">Sofort einsatzbereit, ohne Abonnement</span>
              </p>

              <div className="animate-fade-in flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4" style={{ animationDelay: '1s' }}>
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto text-white hover:scale-105 transition-all duration-300 hover:shadow-lg text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
                  style={{ background: 'linear-gradient(135deg, #9F91F8, #4F97F0)' }}
                  onClick={scrollToContact}
                >
                  Jetzt starten
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 sm:py-32 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-20">
              <div className="inline-block px-4 py-2 rounded-full shadow-sm mb-6" style={{
                background: 'linear-gradient(135deg, #9F91F8, #4F97F0)',
                color: 'white'
              }}>
                <span className="text-sm font-medium">UNSERE PRODUKTE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
                KI-gestützte Tools für maximale Effizienz
              </h2>
            </div>

            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
              {/* Agent Hub - Featured */}
              <div className="lg:col-span-3">
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
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl text-black mb-4 font-extrabold">Agent Hub</h3>
                        <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
                          8+ spezialisierte KI-Agenten für Copywriting, HR, Marketing, Strategie und mehr.
                          <span className="font-semibold"> Lebenslanger Zugang ohne Abonnement.</span>
                        </p>
                        <div className="space-y-3 mb-8">
                          <div className="flex items-center justify-center lg:justify-start gap-3">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#4F97F0' }}></div>
                            <span className="text-gray-600 text-sm sm:text-base">Keine monatlichen Kosten</span>
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
                        <Button 
                          size="lg" 
                          className="w-full lg:w-auto text-white text-base sm:text-lg px-8 py-4 hover:scale-105 transition-all duration-300 hover:shadow-lg"
                          style={{ background: 'linear-gradient(135deg, #9F91F8, #4F97F0)' }}
                          onClick={() => window.open('https://agenthub.newedgebrand.com', '_blank')}
                        >
                          Loslegen
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
                                <span className="text-sm font-medium">+9 weitere</span>
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

              {/* Intelligence Hub - Coming Soon */}
              <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group cursor-pointer">
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
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-32 text-black relative overflow-hidden" style={{
          background: 'linear-gradient(135deg, #9F91F8, #4F97F0)'
        }}>
          <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in text-white">
              Bereit für KI-gestützte Innovation?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in text-white/90 px-4">
              Entdecken Sie, wie unsere Produkte Ihr Business revolutionieren können.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-100 text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 hover:scale-105 transition-all duration-300 hover:shadow-lg animate-fade-in"
              onClick={scrollToContact}
            >
              Kontakt aufnehmen
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Products;
