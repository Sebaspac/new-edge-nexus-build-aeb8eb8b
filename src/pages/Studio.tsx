import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Sparkles, Palette, Monitor, Package, FileImage, Grid3x3, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MobileNavigation } from "@/components/MobileNavigation";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
const Studio = () => {
  const { t } = useLanguage();
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
    navigate('/', { replace: true });
    setTimeout(() => {
      const contactSection = document.getElementById('contact-section');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  return <div className="min-h-screen bg-white">
      <SEO 
        title="KI Agentur für Markenstrategie, Automatisierung & Workshops | New Edge Studio"
        description="New Edge Studio – die KI Agentur für Markenstrategie, smarte Automatisierung & kreative Workshops. Mit KI-gestützten Strategien zu mehr Sichtbarkeit & Wirkung."
        canonical="https://www.newedgebrand.com/studio"
      />
      {/* Mobile Navigation */}
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
              <span className="text-purple-600 italic font-black inline-block animate-fade-in hover:scale-105 transition-transform duration-500" style={{
              animationDelay: '0.4s'
            }}>STUDIO</span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-gray-600 font-normal inline-block animate-fade-in" style={{
              animationDelay: '0.6s'
            }}>DESIGN EXCELLENCE</span>
            </h1>
            
            {/* Floating icons */}
            <div className="absolute top-10 sm:top-20 left-4 sm:left-10 animate-float" style={{
            animationDelay: '0.5s'
          }}>
              <Palette className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
            </div>
            <div className="absolute top-20 sm:top-40 right-8 sm:right-20 animate-float" style={{
            animationDelay: '1s'
          }}>
              <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-purple-400" />
            </div>
            <div className="absolute bottom-10 sm:bottom-20 left-8 sm:left-20 animate-float" style={{
            animationDelay: '1.5s'
          }}>
              <Monitor className="w-8 h-8 sm:w-10 sm:h-10 text-purple-300" />
            </div>

            {/* Interactive background elements */}
            <div className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-purple-100 rounded-full blur-3xl opacity-30 animate-pulse" style={{
            left: mousePosition.x / 10,
            top: mousePosition.y / 10,
            transform: 'translate(-50%, -50%)'
          }} />
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 sm:mb-12 max-w-4xl mx-auto font-light leading-relaxed animate-fade-in px-4" style={{
            animationDelay: '0.8s'
          }}>
              STUDIO liefert das Fundament: Alles wird strategisch vorbereitet, durchdacht und geplant.
              <br className="hidden sm:block" />
              <span className="text-purple-600 font-medium"> Für eine reibungslose Umsetzung in MEDIA & LAB</span>
            </p>
            
            <div className="animate-fade-in flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4" style={{
            animationDelay: '1s'
          }}>
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
                onClick={scrollToContact}
              >
                Projekt starten
              </Button>
              
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 sm:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6 animate-fade-in">UNSERE LEISTUNGEN</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in px-4">
              Strategische Fundamente für Ihren Markenerfolg
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                  <Palette className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-3 sm:mb-4">Strategie & Markenidentität</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Strategische Markenpositionierung und Zielgruppenanalyse für eine klare Ausrichtung.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group" style={{
            animationDelay: '0.1s'
          }}>
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                  <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-3 sm:mb-4">Brand Story</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Authentische Markenstories mit klaren Werten und einzigartiger Tonalität.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group" style={{
            animationDelay: '0.2s'
          }}>
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                  <Monitor className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-3 sm:mb-4">Wettbewerbsanalyse & Differenzierungsstrategie</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Strategische Marktanalyse und visuelles Konzept für klare Abgrenzung.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group" style={{
            animationDelay: '0.3s'
          }}>
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                  <FileImage className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-3 sm:mb-4">Moodboards & Keyvisual-Richtung</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Kreative Design- und Farbwelten für eine einheitliche visuelle Identität.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group" style={{
            animationDelay: '0.4s'
          }}>
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                  <Package className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-3 sm:mb-4">Template-Rahmen für Social Media & Print</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Einheitliche Vorlagen und digitale Struktur mit Funnel-Logik.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group" style={{
            animationDelay: '0.5s'
          }}>
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                  <Grid3x3 className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-3 sm:mb-4">Nutzerführung & Funnel-Wireframes</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Conversion-Ziele und strategischer Seitenaufbau für maximale Effektivität.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-32 bg-gradient-to-r from-purple-600 to-purple-700 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in">Let´s design the edge</h2>
          <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in px-4">
            Gemeinsam entwickeln wir ein Design, das Ihre Vision zum Leben erweckt und Ihre Zielgruppe begeistert.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-purple-600 hover:bg-gray-100 text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 hover:scale-105 transition-all duration-300 hover:shadow-lg animate-fade-in"
            onClick={scrollToContact}
          >
            Design-Projekt starten
          </Button>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 animate-float">
            <Palette className="w-32 h-32" />
          </div>
          <div className="absolute bottom-20 right-20 animate-float" style={{
          animationDelay: '1s'
        }}>
            <Sparkles className="w-24 h-24" />
          </div>
        </div>
      </section>
    </div>;
};
export default Studio;