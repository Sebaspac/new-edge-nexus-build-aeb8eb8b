import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown, Sparkles, Zap, Brain, Target, Eye, Rocket, Star, Lightbulb, Users, ChevronDown, Palette, Video, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const studioRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const labRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToContact = () => {
    window.location.href = '/#contact-section';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
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
                <Link to="/services" className="text-black font-medium transition-all duration-300 hover:scale-110">
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
      <section className="pt-32 pb-20 px-6 bg-white relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <h1 className="text-6xl md:text-8xl font-black text-black mb-8 leading-tight tracking-tight">
              <span className="inline-block animate-fade-in" style={{ animationDelay: '0.2s' }}>THE</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 italic font-black inline-block animate-fade-in hover:scale-105 transition-transform duration-500" style={{ animationDelay: '0.4s' }}>JOURNEY</span>
              <br />
              <span className="text-4xl md:text-6xl text-gray-600 font-normal inline-block animate-fade-in" style={{ animationDelay: '0.6s' }}>FROM VISION TO REALITY</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto font-light leading-relaxed animate-fade-in" style={{ animationDelay: '0.8s' }}>
              Wir begleiten Sie auf einer strukturierten Reise von der ersten Idee bis zur finalen Implementierung.
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent font-medium">Ein nahtloser Prozess. Drei spezialisierte Teams. Ein Ziel.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Key Activities Overview */}
      <section className="py-20 bg-gradient-to-r from-purple-50 via-blue-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 text-white px-8 py-4 rounded-full text-xl font-bold mb-8 animate-fade-in">
              Key Activities
            </div>
            <h2 className="text-5xl font-bold text-black mb-6 animate-fade-in">Ihr Weg zum Erfolg</h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
              
              {/* Studio Card */}
              <div 
                ref={studioRef}
                className="relative group animate-fade-in"
                style={{ animationDelay: '0.2s' }}
              >
                <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-105 group relative overflow-hidden">
                  <CardContent className="p-8 text-center relative z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-lg font-bold mb-6">
                      New Edge Studio
                    </div>
                    
                    <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-all duration-500 group-hover:scale-110">
                      <Palette className="w-10 h-10 text-purple-600" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-black mb-4">STUDIO</h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      Ihre Ideen, unsere Strategie
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-8">
                      Hier beginnt alles. Wir entwickeln die visuelle Identität, Strategie und das Fundament für Ihr Projekt.
                    </p>
                    
                    <Button 
                      className="bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300 hover:scale-105 w-full group-hover:shadow-lg"
                      asChild
                    >
                      <Link to="/studio">
                        Strategie entwickeln <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Arrow to next step */}
                <div className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2 z-20">
                  <div className="animate-bounce">
                    <ArrowRight className="w-8 h-8 text-purple-400" />
                  </div>
                </div>
              </div>

              {/* Media Card */}
              <div 
                ref={mediaRef}
                className="relative group animate-fade-in"
                style={{ animationDelay: '0.4s' }}
              >
                <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-105 group relative overflow-hidden">
                  <CardContent className="p-8 text-center relative z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-full text-lg font-bold mb-6">
                      New Edge Media
                    </div>
                    
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-all duration-500 group-hover:scale-110">
                      <Video className="w-10 h-10 text-blue-600" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-black mb-4">MEDIA</h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      Für ein klares & einzigartiges Bild nach Außen
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-8">
                      Content, der bewegt. Hier entstehen alle visuellen und medialen Inhalte für Ihre Marke.
                    </p>
                    
                    <Button 
                      className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 hover:scale-105 w-full group-hover:shadow-lg"
                      asChild
                    >
                      <Link to="/media">
                        Content produzieren <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Arrow to next step */}
                <div className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2 z-20">
                  <div className="animate-bounce" style={{ animationDelay: '0.5s' }}>
                    <ArrowRight className="w-8 h-8 text-blue-400" />
                  </div>
                </div>
              </div>

              {/* Lab Card */}
              <div 
                ref={labRef}
                className="relative group animate-fade-in"
                style={{ animationDelay: '0.6s' }}
              >
                <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-105 group relative overflow-hidden">
                  <CardContent className="p-8 text-center relative z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full text-lg font-bold mb-6">
                      New Edge Lab
                    </div>
                    
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-all duration-500 group-hover:scale-110">
                      <Cpu className="w-10 h-10 text-green-600" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-black mb-4">LAB</h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      Die perfekte Schnittstelle für Strategie & Technologie
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-8">
                      Backend, KI und technische Umsetzung. Hier wird alles intelligent und automatisiert.
                    </p>
                    
                    <Button 
                      className="bg-green-600 text-white hover:bg-green-700 transition-all duration-300 hover:scale-105 w-full group-hover:shadow-lg"
                      asChild
                    >
                      <Link to="/lab">
                        Technologie implementieren <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Process Flow Visualization */}
            <div className="mt-20 text-center">
              <div className="inline-block bg-white rounded-2xl p-8 shadow-lg animate-fade-in">
                <p className="text-lg text-gray-700 font-medium mb-4">
                  All das geschieht hier - im kreativen Headquarter für Reichweite, Wirkung & Wachstum.
                </p>
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                  <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full">Strategie</span>
                  <ArrowRight className="w-4 h-4" />
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">Umsetzung</span>
                  <ArrowRight className="w-4 h-4" />
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full">Technologie</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-black mb-6 animate-fade-in">Transparente Preise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
              Klare Kostenstrukturen für jeden Projektumfang
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white border-2 border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-purple-600 mb-4">Studio Starter</h3>
                <div className="text-4xl font-bold text-black mb-6">€2.500</div>
                <ul className="text-gray-600 mb-8 space-y-2">
                  <li>• Brand Identity Entwicklung</li>
                  <li>• Logo & Farbschema</li>
                  <li>• Style Guide (Basic)</li>
                  <li>• 3 Designkonzepte</li>
                </ul>
                <Button className="w-full bg-purple-600 text-white hover:bg-purple-700" asChild>
                  <Link to="/#contact-section">Jetzt starten</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-blue-400 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in relative" style={{ animationDelay: '0.1s' }}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                Beliebt
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Complete Journey</h3>
                <div className="text-4xl font-bold text-black mb-6">€8.500</div>
                <ul className="text-gray-600 mb-8 space-y-2">
                  <li>• Studio + Media + Lab</li>
                  <li>• Vollständige Brand Identity</li>
                  <li>• Content-Produktion</li>
                  <li>• KI-Integration & Backend</li>
                  <li>• 6 Monate Support</li>
                </ul>
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700" asChild>
                  <Link to="/#contact-section">Komplett-Paket</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-green-600 mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-black mb-6">Individual</div>
                <ul className="text-gray-600 mb-8 space-y-2">
                  <li>• Maßgeschneiderte Lösungen</li>
                  <li>• Dedicated Team</li>
                  <li>• Unlimited Revisions</li>
                  <li>• Priority Support</li>
                  <li>• Custom KI-Development</li>
                </ul>
                <Button className="w-full bg-green-600 text-white hover:bg-green-700" asChild>
                  <Link to="/#contact-section">Angebot anfordern</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6 animate-fade-in">Bereit für Ihre Reise?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Lassen Sie uns gemeinsam Ihre Vision Schritt für Schritt zur Realität werden.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-gray-800 hover:bg-gray-100 text-lg px-12 py-4 hover:scale-105 transition-all duration-300 hover:shadow-lg animate-fade-in"
            asChild
          >
            <Link to="/#contact-section">
              Projekt starten
            </Link>
          </Button>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 animate-float">
            <Palette className="w-32 h-32" />
          </div>
          <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
            <Video className="w-24 h-24" />
          </div>
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-float" style={{ animationDelay: '1.5s' }}>
            <Cpu className="w-28 h-28" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;