import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Sparkles, Target, Megaphone, Brain, Zap, Cog, Database, Globe, BarChart, Lightbulb, Users, Star, Eye, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";

const Services = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    try {
      const response = await fetch('https://formspree.io/f/xjkrnyon', {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        toast({
          title: "Nachricht versendet!",
          description: "Wir melden uns bald bei Ihnen zurück.",
          duration: 5000
        });
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Fehler",
        description: "Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut.",
        variant: "destructive",
        duration: 5000
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 animate-slide-in-right">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center hover:scale-105 transition-transform duration-300">
              <img alt="New Edge Logo" className="h-8 w-8 mr-3 animate-float" src="/lovable-uploads/93b90410-bdbd-4098-938c-5ff9f158253c.png" />
              <div className="text-2xl font-bold text-black">
                New Edge<span className="text-primary animate-pulse"></span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-600 hover:text-black transition-all duration-300 hover:scale-110">Home</Link>
              <Link to="/services" className="text-black font-medium">Services</Link>
              <Button onClick={scrollToContact} className="bg-black text-white hover:bg-gray-800 transition-colors">
                Kontakt
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-32 px-6 bg-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '2s', animationDuration: '3s' }}></div>
          <div className="absolute top-1/6 right-1/6 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
          <div className="absolute bottom-1/6 left-1/6 w-56 h-56 bg-primary/15 rounded-full blur-xl animate-bounce" style={{ animationDelay: '3s', animationDuration: '4s' }}></div>
          
          {/* Floating Icons */}
          <div className="absolute top-1/4 left-1/4 text-primary/30 animate-float" style={{ animationDelay: '0.5s' }}>
            <Target size={32} className="animate-spin-slow" />
          </div>
          <div className="absolute top-3/4 right-1/4 text-accent/30 animate-float" style={{ animationDelay: '1.5s' }}>
            <Sparkles size={28} className="animate-pulse" />
          </div>
          <div className="absolute top-1/3 right-1/3 text-primary/40 animate-float" style={{ animationDelay: '2.5s' }}>
            <Lightbulb size={24} className="animate-bounce" />
          </div>
          <div className="absolute bottom-1/3 left-1/5 text-accent/35 animate-float" style={{ animationDelay: '3s' }}>
            <Zap size={30} className="animate-pulse" />
          </div>
          <div className="absolute top-1/6 left-2/3 text-primary/25 animate-float" style={{ animationDelay: '4s' }}>
            <Brain size={26} className="animate-spin-slow" />
          </div>
          <div className="absolute bottom-1/6 right-1/6 text-accent/40 animate-float" style={{ animationDelay: '5s' }}>
            <Megaphone size={28} className="animate-bounce" />
          </div>
          <div className="absolute top-2/3 left-1/6 text-primary/30 animate-float" style={{ animationDelay: '6s' }}>
            <Globe size={32} className="animate-spin-slow" />
          </div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <Link to="/" className="inline-flex items-center text-gray-500 hover:text-black transition-all duration-300 hover:scale-110 mb-8 animate-fade-in">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück zur Homepage
          </Link>
          
          <div className="bg-black px-8 py-4 rounded-2xl inline-block mb-8 shadow-2xl animate-fade-in transform hover:scale-105 transition-transform duration-300">
            <div className="text-white text-3xl md:text-4xl font-black tracking-wider animate-pulse">
              DESIGN <span className="text-yellow-400">THE EDGE</span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-black mb-8 leading-none animate-fade-in transform hover:scale-105 transition-transform duration-500" style={{ animationDelay: '0.3s' }}>
            SERVICES
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Von der strategischen Planung bis zur technischen Umsetzung – 
            wir verbinden Kreativität mit Technologie für maximalen Impact.
          </p>

          {/* Dynamic background gradient elements */}
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl -z-10 animate-pulse"
            style={{
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) translate(-50%, -50%)`
            }}
          ></div>
        </div>
      </section>

      {/* Services Header */}
      <section className="py-20 bg-black relative overflow-hidden">
        {/* Floating elements in black section */}
        <div className="absolute top-10 left-20 text-accent/30 animate-float" style={{ animationDelay: '1s' }}>
          <Star size={24} className="animate-spin-slow" />
        </div>
        <div className="absolute bottom-10 right-20 text-primary/40 animate-float" style={{ animationDelay: '2s' }}>
          <Users size={28} className="animate-pulse" />
        </div>
        <div className="absolute top-1/2 right-1/4 text-accent/25 animate-float" style={{ animationDelay: '3s' }}>
          <Rocket size={20} className="animate-bounce" />
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 animate-fade-in hover:scale-105 transition-transform duration-500">
            Unsere <span className="text-accent animate-pulse">Leistungen</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-50 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Innovative Lösungen für die digitale Transformation
          </p>
        </div>
      </section>

      {/* STUDIO Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background animations */}
        <div className="absolute top-10 right-20 w-32 h-32 bg-purple-100/50 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 left-20 w-40 h-40 bg-purple-200/30 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mr-4 animate-bounce hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl animate-pulse">🟣</span>
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-black hover:text-purple-600 transition-colors duration-300">New Edge° STUDIO</h2>
                  <p className="text-purple-600 font-medium animate-pulse">strategische Fundament</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                STUDIO liefert <span className="font-bold text-purple-600">DAS</span> Fundament: Alles wird strategisch vorbereitet, durchdacht und geplant – 
                damit MEDIA & LAB reibungslos umsetzen können.
              </p>
              
              <div className="space-y-6">
                <Card className="border-l-4 border-l-purple-500 shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-in hover:scale-105 transform hover:rotate-1" style={{ animationDelay: '0.4s' }}>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-3 flex items-center">
                      <Target className="mr-2 h-5 w-5 text-purple-500 animate-spin-slow" />
                      Strategie & Markenidentität
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Markenpositionierung & Zielgruppenanalyse</li>
                      <li>• Brand Story</li>
                      <li>• Werte & Tonalität</li>
                      <li>• Wettbewerbsanalyse & Differenzierungsstrategie</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-l-purple-500 shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-in hover:scale-105 transform hover:-rotate-1" style={{ animationDelay: '0.6s' }}>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-3 flex items-center">
                      <Sparkles className="mr-2 h-5 w-5 text-purple-500 animate-pulse" />
                      Visuelles Konzept
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Moodboards & Keyvisual-Richtung</li>
                      <li>• Design- und Farbwelten</li>
                      <li>• Template-Rahmen für Social Media & Print</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-l-purple-500 shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-in hover:scale-105 transform hover:rotate-1" style={{ animationDelay: '0.8s' }}>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-3 flex items-center">
                      <Globe className="mr-2 h-5 w-5 text-purple-500 animate-bounce" />
                      Digitale Struktur & Funnel-Logik
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Nutzerführung & Funnel-Wireframes</li>
                      <li>• Conversion-Ziele & Seitenaufbau-Strategien</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden hover:scale-105 transition-transform duration-500">
                {/* Floating icons in purple box */}
                <div className="absolute top-4 right-4 animate-float">
                  <Sparkles className="w-6 h-6 text-white/70 animate-pulse" />
                </div>
                <div className="absolute bottom-4 left-4 animate-float" style={{ animationDelay: '1s' }}>
                  <Target className="w-5 h-5 text-white/60 animate-spin-slow" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 animate-pulse">Strategische Planung</h3>
                <p className="mb-6">
                  Von der ersten Idee bis zum vollständigen Markenkonzept – 
                  wir legen das Fundament für Ihren Erfolg.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-lg p-4 text-center hover:scale-110 transition-transform duration-300">
                    <div className="text-2xl font-bold animate-bounce">100%</div>
                    <div className="text-sm">Strategisch</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center hover:scale-110 transition-transform duration-300">
                    <div className="text-2xl font-bold animate-pulse">24/7</div>
                    <div className="text-sm">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEDIA Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background animations */}
        <div className="absolute top-10 left-20 w-32 h-32 bg-blue-100/50 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-cyan-200/30 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4 animate-bounce hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl animate-pulse">🔵</span>
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-black hover:text-blue-600 transition-colors duration-300">New Edge° MEDIA</h2>
                  <p className="text-blue-600 font-medium animate-pulse">Sichtbarkeit & Reichweite</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                MEDIA produziert, veröffentlicht und steuert alles, was nach außen sichtbar wird.
              </p>
              
              <div className="space-y-6">
                <Card className="border-l-4 border-l-blue-500 shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-in hover:scale-105 transform hover:rotate-1" style={{ animationDelay: '0.4s' }}>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-3 flex items-center">
                      <Megaphone className="mr-2 h-5 w-5 text-blue-500 animate-pulse" />
                      Operative Umsetzung
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Content-Produktion & Reichweite</li>
                      <li>• Marketing & Sichtbarkeit</li>
                      <li>• Launchkampagnen & Performance-Marketing</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-l-blue-500 shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-in hover:scale-105 transform hover:-rotate-1" style={{ animationDelay: '0.6s' }}>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-3 flex items-center">
                      <BarChart className="mr-2 h-5 w-5 text-blue-500 animate-bounce" />
                      Marketing & Performance
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• SEO/SEA-Umsetzung & Conversion-Tracking</li>
                      <li>• Content-Marketing & Copywriting</li>
                      <li>• Newsletter, Ads & Kampagnenausspielung</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-l-blue-500 shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-in hover:scale-105 transform hover:rotate-1" style={{ animationDelay: '0.8s' }}>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-3 flex items-center">
                      <Lightbulb className="mr-2 h-5 w-5 text-blue-500 animate-spin-slow" />
                      Creative Content Production
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Creative Content Production (Video, Visuals, Reels)</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="lg:order-1 relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl p-8 text-white relative overflow-hidden hover:scale-105 transition-transform duration-500">
                {/* Floating icons in blue box */}
                <div className="absolute top-4 right-4 animate-float">
                  <Megaphone className="w-6 h-6 text-white/70 animate-pulse" />
                </div>
                <div className="absolute bottom-4 left-4 animate-float" style={{ animationDelay: '1s' }}>
                  <BarChart className="w-5 h-5 text-white/60 animate-bounce" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 animate-pulse">Content & Kampagnen</h3>
                <p className="mb-6">
                  Maximale Sichtbarkeit durch strategische Content-Produktion 
                  und zielgerichtete Kampagnen.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-lg p-4 text-center hover:scale-110 transition-transform duration-300">
                    <div className="text-2xl font-bold animate-spin-slow">360°</div>
                    <div className="text-sm">Marketing</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center hover:scale-110 transition-transform duration-300">
                    <div className="text-2xl font-bold animate-pulse">ROI</div>
                    <div className="text-sm">Optimiert</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LAB Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute top-10 left-20 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-primary/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/4 text-accent/20 animate-float" style={{ animationDelay: '4s' }}>
          <Brain size={48} className="animate-spin-slow" />
        </div>
        <div className="absolute top-1/4 right-1/3 text-primary/15 animate-float" style={{ animationDelay: '5s' }}>
          <Zap size={36} className="animate-pulse" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-accent text-black text-lg px-6 py-3 hover:scale-110 transition-transform duration-300">
              🚀 INNOVATION LEADER
            </Badge>
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mr-6 animate-bounce hover:scale-110 transition-transform duration-300">
                <span className="text-4xl animate-pulse">🧠</span>
              </div>
              <div className="text-left">
                <h2 className="text-5xl font-black text-white mb-2 hover:text-accent transition-colors duration-300">New Edge° LAB</h2>
                <p className="text-2xl text-accent font-semibold animate-pulse">KI-Integration & Automation</p>
              </div>
            </div>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
              LAB macht aus Ideen reale, funktionierende Systeme – sicher, automatisiert, effizient.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="border-0 shadow-lg bg-gray-800 border border-gray-700 hover:shadow-xl transition-all duration-500 animate-fade-in hover:scale-105 transform hover:rotate-1" style={{ animationDelay: '0.2s' }}>
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 animate-bounce hover:scale-110 transition-transform duration-300">
                  <Brain className="h-6 w-6 text-white animate-pulse" />
                </div>
                <CardTitle className="text-xl text-white hover:text-purple-400 transition-colors duration-300">Technische Umsetzung</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start hover:text-accent transition-colors duration-300">
                    <Zap className="h-4 w-4 mt-1 mr-2 text-accent flex-shrink-0 animate-pulse" />
                    KI-Integration & Automation
                  </li>
                  <li className="flex items-start hover:text-accent transition-colors duration-300">
                    <Zap className="h-4 w-4 mt-1 mr-2 text-accent flex-shrink-0 animate-bounce" />
                    Backend & Tech-Implementierung
                  </li>
                  <li className="flex items-start hover:text-accent transition-colors duration-300">
                    <Zap className="h-4 w-4 mt-1 mr-2 text-accent flex-shrink-0 animate-pulse" />
                    Webentwicklung (CMS, Landingpages, Funnels)
                  </li>
                  <li className="flex items-start hover:text-accent transition-colors duration-300">
                    <Zap className="h-4 w-4 mt-1 mr-2 text-accent flex-shrink-0 animate-spin-slow" />
                    n8n-gestützte Prozessautomatisierung
                  </li>
                  <li className="flex items-start hover:text-accent transition-colors duration-300">
                    <Zap className="h-4 w-4 mt-1 mr-2 text-accent flex-shrink-0 animate-bounce" />
                    KI-Agenten-Integration (Text, Mail, CRM)
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gray-800 border border-gray-700 hover:shadow-xl transition-all duration-500 animate-fade-in hover:scale-105 transform hover:-rotate-1" style={{ animationDelay: '0.4s' }}>
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center mb-4 animate-float hover:scale-110 transition-transform duration-300">
                  <Database className="h-6 w-6 text-white animate-pulse" />
                </div>
                <CardTitle className="text-xl text-white hover:text-green-400 transition-colors duration-300">Daten & Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start hover:text-accent transition-colors duration-300">
                    <Zap className="h-4 w-4 mt-1 mr-2 text-accent flex-shrink-0 animate-pulse" />
                    Formular- & Datenbank-Anbindungen (z. B. Notion, Airtable, Supabase)
                  </li>
                  <li className="flex items-start hover:text-accent transition-colors duration-300">
                    <Zap className="h-4 w-4 mt-1 mr-2 text-accent flex-shrink-0 animate-bounce" />
                    Tracking- & Analyse-Setups (GA4, Tag Manager, Pixel, Dashboards)
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-gray-800 to-black rounded-2xl p-12 text-white text-center border border-accent/20 relative overflow-hidden hover:scale-105 transition-transform duration-500 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {/* Floating elements inside gradient box */}
            <div className="absolute top-6 left-6 animate-float">
              <Rocket className="w-8 h-8 text-accent/50 animate-bounce" />
            </div>
            <div className="absolute bottom-6 right-6 animate-float" style={{ animationDelay: '1s' }}>
              <Star className="w-6 h-6 text-accent/60 animate-pulse" />
            </div>
            
            <h3 className="text-3xl font-bold mb-6 animate-pulse">
              Die Zukunft ist <span className="text-accent">automatisiert</span>
            </h3>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Von KI-gestützten Chatbots bis zu vollautomatisierten Funnels – LAB bringt Ihre digitalen Visionen zum Leben.</p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-bold text-accent mb-2 animate-bounce">95%</div>
                <div className="text-sm text-gray-300">Effizienzsteigerung</div>
              </div>
              <div className="text-center hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-bold text-accent mb-2 animate-pulse">24/7</div>
                <div className="text-sm text-gray-300">Automation</div>
              </div>
              <div className="text-center hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-bold text-accent mb-2 animate-spin-slow">AI</div>
                <div className="text-sm text-gray-300">Powered</div>
              </div>
              <div className="text-center hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-bold text-accent mb-2 animate-bounce">∞</div>
                <div className="text-sm text-gray-300">Möglichkeiten</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-20 bg-white relative overflow-hidden">
        {/* Background animations */}
        <div className="absolute top-10 right-20 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 left-20 w-40 h-40 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-black text-black mb-6 hover:scale-105 transition-transform duration-500">
              Bereit für den <span className="text-primary animate-pulse">nächsten Schritt?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Lassen Sie uns gemeinsam Ihre digitale Zukunft gestalten.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">Name *</Label>
                  <Input 
                    id="name"
                    name="name"
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary"
                    placeholder="Ihr Name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">E-Mail *</Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email" 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary"
                    placeholder="ihre@email.de"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-medium text-gray-700">Unternehmen</Label>
                <Input 
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary"
                  placeholder="Ihr Unternehmen"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium text-gray-700">Nachricht *</Label>
                <Textarea 
                  id="message"
                  name="message"
                  required 
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all duration-300 hover:border-primary"
                  placeholder="Erzählen Sie uns von Ihrem Projekt..."
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-black text-white hover:bg-gray-800 transition-colors py-4 text-lg font-semibold rounded-lg"
              >
                Nachricht senden <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;