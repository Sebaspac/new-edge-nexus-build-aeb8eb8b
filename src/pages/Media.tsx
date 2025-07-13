import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Megaphone, Target, BarChart, Users, TrendingUp, Eye, ChevronDown, Video, Camera, Edit, Settings, Search, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MobileNavigation } from "@/components/MobileNavigation";
const Media = () => {
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
              <span className="text-blue-600 italic font-black inline-block animate-fade-in hover:scale-105 transition-transform duration-500" style={{
              animationDelay: '0.4s'
            }}>MEDIA</span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-gray-600 font-normal inline-block animate-fade-in" style={{
              animationDelay: '0.6s'
            }}>CONTENT REVOLUTION</span>
            </h1>
            
            {/* Floating icons */}
            <div className="absolute top-10 sm:top-20 left-4 sm:left-10 animate-float" style={{
            animationDelay: '0.5s'
          }}>
              <Video className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
            </div>
            <div className="absolute top-20 sm:top-40 right-8 sm:right-20 animate-float" style={{
            animationDelay: '1s'
          }}>
              <Camera className="w-4 h-4 sm:w-6 sm:h-6 text-cyan-400" />
            </div>
            <div className="absolute bottom-10 sm:bottom-20 left-8 sm:left-20 animate-float" style={{
            animationDelay: '1.5s'
          }}>
              <Megaphone className="w-8 h-8 sm:w-10 sm:h-10 text-blue-300" />
            </div>

            {/* Interactive background elements */}
            <div className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-blue-100 rounded-full blur-3xl opacity-30 animate-pulse" style={{
            left: mousePosition.x / 10,
            top: mousePosition.y / 10,
            transform: 'translate(-50%, -50%)'
          }} />
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 sm:mb-12 max-w-4xl mx-auto font-light leading-relaxed animate-fade-in px-4" style={{
            animationDelay: '0.8s'
          }}>
              MEDIA produziert, veröffentlicht und steuert alles, was nach außen sichtbar wird.
              <br className="hidden sm:block" />
              <span className="text-blue-600 font-medium">Ab Strategie bis zur viralen Umsetzung.</span>
            </p>
            
            <div className="animate-fade-in flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4" style={{
            animationDelay: '1s'
          }}>
              <Button size="lg" className="w-full sm:w-auto bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4" asChild>
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6 animate-fade-in">UNSERE LEISTUNGEN</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in px-4">
              Content-Produktion und strategische Reichweite für Ihren Erfolg
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                  <Settings className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Operative Umsetzung</h3>
                <p className="text-gray-600 leading-relaxed">
                  Strategische Content-Produktion und zielgerichtete Reichweite für maximale Sichtbarkeit.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group" style={{
            animationDelay: '0.1s'
          }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                  <Video className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Content-Produktion & Reichweite</h3>
                <p className="text-gray-600 leading-relaxed">
                  Professionelle Content-Erstellung für maximale Reichweite und Engagement.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group" style={{
            animationDelay: '0.2s'
          }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                  <Eye className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Marketing & Sichtbarkeit</h3>
                <p className="text-gray-600 leading-relaxed">
                  Strategische Kampagnen für optimale Performance-Marketing und Launchkampagnen.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group" style={{
            animationDelay: '0.3s'
          }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Launchkampagnen & Performance-Marketing</h3>
                <p className="text-gray-600 leading-relaxed">
                  Erfolgreiche Produktlaunches und datengetriebenes Performance-Marketing.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group" style={{
            animationDelay: '0.4s'
          }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                  <Search className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">SEO/SEA-Umsetzung & Conversion-Tracking</h3>
                <p className="text-gray-600 leading-relaxed">
                  Suchmaschinenoptimierung und Content-Marketing mit präzisem Copywriting.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group" style={{
            animationDelay: '0.5s'
          }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                  <Edit className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Content-Marketing & Copywriting</h3>
                <p className="text-gray-600 leading-relaxed">
                  Strategisches Content-Marketing mit überzeugenden Texten und Botschaften.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group" style={{
            animationDelay: '0.6s'
          }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                  <Camera className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Creative Content Production (Video, Visuals, Reels)</h3>
                <p className="text-gray-600 leading-relaxed">
                  Hochwertige Video- und Visual-Produktion für alle digitalen Kanäle.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group" style={{
            animationDelay: '0.7s'
          }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Newsletter, Ads & Kampagnenausspielung</h3>
                <p className="text-gray-600 leading-relaxed">
                  Professionelle Newsletter-Kampagnen und strategische Werbeanzeigen-Ausspielung.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-32 bg-gradient-to-r from-blue-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in">Bereit für den nächsten Schritt?</h2>
          <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in px-4">
            Lassen Sie uns gemeinsam Ihre Content-Strategie revolutionieren und nachhaltige Reichweite aufbauen.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 hover:scale-105 transition-all duration-300 hover:shadow-lg animate-fade-in" asChild>
            <Link to="/#contact-section">
              Projekt starten
            </Link>
          </Button>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 animate-float">
            <Video className="w-32 h-32" />
          </div>
          <div className="absolute bottom-20 right-20 animate-float" style={{
          animationDelay: '1s'
        }}>
            <Megaphone className="w-24 h-24" />
          </div>
        </div>
      </section>
    </div>;
};
export default Media;