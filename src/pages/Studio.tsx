import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Sparkles, Palette, Monitor, Package, FileImage, Grid3x3, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MobileNavigation } from "@/components/MobileNavigation";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";
import { ServicesSection } from "@/components/ServicesSection";

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

  const studioServices = [
    {
      title: "Strategie & Markenidentität",
      description: "Strategische Markenpositionierung und Zielgruppenanalyse für eine klare Ausrichtung.",
      icon: Palette
    },
    {
      title: "Brand Story",
      description: "Authentische Markenstories mit klaren Werten und einzigartiger Tonalität.",
      icon: Sparkles
    },
    {
      title: "Template-Rahmen für Social Media & Print",
      description: "Einheitliche Vorlagen und digitale Struktur mit Funnel-Logik.",
      icon: Package
    },
    {
      title: "Nutzerführung & Funnel-Wireframes",
      description: "Conversion-Ziele und strategischer Seitenaufbau für maximale Effektivität.",
      icon: Grid3x3
    }
  ];

  return <div className="min-h-screen bg-white">
      {/* Mobile Navigation */}
      <MobileNavigation onContactClick={scrollToContact} theme="light" />

      {/* Hero Section */}
      <section className="h-screen px-4 sm:px-6 bg-white relative overflow-hidden flex items-center">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-25">
          <svg width="100%" height="100%" className="animate-parallax">
            <defs>
              <pattern id="studio-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#7c3aed" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#studio-grid)" />
          </svg>
        </div>
        <div className="container mx-auto text-center relative z-10" style={{ transform: 'translateY(10vh)' }}>
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
            
            {/* Enhanced floating design elements */}
            <div className="absolute top-10 sm:top-20 left-4 sm:left-10 animate-float-1" style={{
            animationDelay: '0.5s'
          }}>
              <Palette className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
            </div>
            <div className="absolute top-20 sm:top-40 right-8 sm:right-20 animate-float-2" style={{
            animationDelay: '1s'
          }}>
              <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-purple-400" />
            </div>
            <div className="absolute bottom-10 sm:bottom-20 left-8 sm:left-20 animate-float-3" style={{
            animationDelay: '1.5s'
          }}>
              <Monitor className="w-8 h-8 sm:w-10 sm:h-10 text-purple-300" />
            </div>
            
            {/* Additional design elements */}
            <div className="absolute top-1/2 left-1/4 animate-drift opacity-20" style={{
            animationDelay: '2s'
          }}>
              <Package className="w-12 h-12 text-purple-300" />
            </div>
            <div className="absolute top-1/3 right-1/4 animate-orbit opacity-30" style={{
            animationDelay: '3s'
          }}>
              <Grid3x3 className="w-8 h-8 text-purple-400" />
            </div>
            
            {/* Geometric shapes */}
            <div className="absolute top-20 right-1/3 w-20 h-20 bg-purple-200 rounded-full animate-float-1 opacity-20" style={{
            animationDelay: '4s'
          }}></div>
            <div className="absolute bottom-1/3 right-10 w-16 h-16 bg-purple-300 rounded-lg animate-float-2 opacity-25" style={{
            animationDelay: '2.5s'
          }}></div>

            
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
              <motion.div whileHover={{
                scale: 1.3,
                rotate: 5
              }} whileTap={{
                scale: 0.8
              }} className="relative">
                {/* Pulsing ring */}
                <motion.div className="absolute inset-0 w-16 h-16 -m-4 rounded-full border-2 border-purple-500/50" animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5]
                }} transition={{
                  duration: 2,
                  repeat: Infinity
                }} />
                <Button size="lg" className="w-full sm:w-auto bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4" onClick={scrollToContact}>
                  Projekt starten
                </Button>
              </motion.div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <ServicesSection
        title="UNSERE LEISTUNGEN"
        subtitle="Strategische Fundamente für Ihren Markenerfolg"
        services={studioServices}
        accentColor="#7c3aed"
      />

      {/* CTA Section */}
      <section className="py-16 sm:py-32 bg-gradient-to-r from-purple-600 to-purple-700 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in">Let´s design the edge</h2>
          <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in px-4">
            Gemeinsam entwickeln wir ein Design, das Ihre Vision zum Leben erweckt und Ihre Zielgruppe begeistert.
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 hover:scale-105 transition-all duration-300 hover:shadow-lg animate-fade-in" onClick={scrollToContact}>
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