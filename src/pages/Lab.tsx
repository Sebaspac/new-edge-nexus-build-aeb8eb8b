import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Brain, Cpu, Eye, Cog, BarChart, Code, ChevronDown, Zap, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Lab = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContact = () => {
    window.location.href = '/#contact-section';
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
              <span className="inline-block animate-fade-in" style={{ animationDelay: '0.2s' }}>NEW EDGE</span>
              <br />
              <span className="text-yellow-600 italic font-black inline-block animate-fade-in hover:scale-105 transition-transform duration-500" style={{ animationDelay: '0.4s' }}>LAB</span>
              <br />
              <span className="text-4xl md:text-6xl text-gray-600 font-normal inline-block animate-fade-in" style={{ animationDelay: '0.6s' }}>AI INNOVATION</span>
            </h1>
            
            {/* Floating icons */}
            <div className="absolute top-20 left-10 animate-float" style={{ animationDelay: '0.5s' }}>
              <Brain className="w-8 h-8 text-yellow-400" />
            </div>
            <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
              <Zap className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="absolute bottom-20 left-20 animate-float" style={{ animationDelay: '1.5s' }}>
              <Cpu className="w-10 h-10 text-yellow-300" />
            </div>

            {/* Interactive background elements */}
            <div 
              className="absolute w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-30 animate-pulse"
              style={{
                left: mousePosition.x / 10,
                top: mousePosition.y / 10,
                transform: 'translate(-50%, -50%)'
              }}
            />
            
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto font-light leading-relaxed animate-fade-in" style={{ animationDelay: '0.8s' }}>
              Wir erforschen die Grenzen des Möglichen und entwickeln KI-Lösungen für morgen.
              <br />
              <span className="text-yellow-600 font-medium">Innovation durch intelligente Automatisierung.</span>
            </p>
            
            <div className="animate-fade-in" style={{ animationDelay: '1s' }}>
              <Button 
                size="lg" 
                className="bg-yellow-600 text-white hover:bg-yellow-700 transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg px-8 py-4 mr-4"
                asChild
              >
                <Link to="/#contact-section">
                  Innovation starten
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-yellow-600 text-yellow-600 hover:bg-yellow-50 transition-all duration-300 hover:scale-105 text-lg px-8 py-4"
              >
                Technologien entdecken
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-black mb-6 animate-fade-in">Lab-Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
              Zukunftsweisende KI-Lösungen für innovative Unternehmen
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-200 transition-colors duration-300">
                  <Brain className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Machine Learning</h3>
                <p className="text-gray-600 leading-relaxed">
                  Entwicklung intelligenter Algorithmen für Datenanalyse und Vorhersagemodelle.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-200 transition-colors duration-300">
                  <Eye className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Computer Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  Bildverarbeitung und visuelle Erkennung für automatisierte Systeme.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-200 transition-colors duration-300">
                  <Code className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Custom AI Solutions</h3>
                <p className="text-gray-600 leading-relaxed">
                  Maßgeschneiderte KI-Anwendungen für spezifische Unternehmensanforderungen.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-200 transition-colors duration-300">
                  <Cog className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Process Automation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Intelligente Automatisierung von Geschäftsprozessen durch KI-Integration.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-200 transition-colors duration-300">
                  <BarChart className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Predictive Analytics</h3>
                <p className="text-gray-600 leading-relaxed">
                  Vorhersagemodelle für fundierte Geschäftsentscheidungen und Trends.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group" style={{ animationDelay: '0.5s' }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-200 transition-colors duration-300">
                  <Lightbulb className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">AI Consulting</h3>
                <p className="text-gray-600 leading-relaxed">
                  Strategische Beratung für die optimale Integration von KI in Ihr Unternehmen.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-yellow-600 to-yellow-600 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6 animate-fade-in">Bereit für die Zukunft?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Lassen Sie uns gemeinsam innovative KI-Lösungen entwickeln, die Ihr Unternehmen transformieren.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-yellow-600 hover:bg-gray-100 text-lg px-12 py-4 hover:scale-105 transition-all duration-300 hover:shadow-lg animate-fade-in"
            asChild
          >
            <Link to="/#contact-section">
              Innovation starten
            </Link>
          </Button>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 animate-float">
            <Brain className="w-32 h-32" />
          </div>
          <div className="absolute bottom-20 right-20 animate-float" style={{ animationDelay: '1s' }}>
            <Cpu className="w-24 h-24" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lab;