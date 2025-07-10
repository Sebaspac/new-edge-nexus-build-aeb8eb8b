
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Zap, Brain, Target, Eye, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to sebastian.p@newedgebrand.com
    console.log('Form submitted to sebastian.p@newedgebrand.com');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-lg border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">
              New Edge<span className="text-primary">°</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              <Button 
                onClick={scrollToContact}
                className="gradient-primary text-white hover:opacity-90 transition-opacity"
              >
                Kontakt
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="text-accent text-xl md:text-2xl font-bold mb-4 tracking-wider">
              DESIGN THE EDGE
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
              New <span className="gradient-primary bg-clip-text text-transparent">Edge</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4 max-w-4xl mx-auto font-light">
              Where brand meets <span className="text-accent font-bold">intelligence</span>
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Branding. Craft. Automation – All connected.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link to="/services">
                <Button size="lg" className="gradient-primary text-white hover:opacity-90 transition-opacity px-8 py-4 text-lg shadow-2xl">
                  Discover Services <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={scrollToContact}
                className="border-2 border-accent text-accent hover:bg-accent hover:text-black transition-colors px-8 py-4 text-lg shadow-2xl"
              >
                Get Started
              </Button>
            </div>

            {/* Floating elements */}
            <div className="relative">
              <div className="animate-float absolute top-10 left-1/4 opacity-30">
                <Sparkles className="h-8 w-8 text-accent" />
              </div>
              <div className="animate-float absolute top-20 right-1/4 opacity-30" style={{ animationDelay: '2s' }}>
                <Zap className="h-6 w-6 text-secondary" />
              </div>
              <div className="animate-float absolute top-5 right-1/3 opacity-30" style={{ animationDelay: '4s' }}>
                <Brain className="h-10 w-10 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Ziel Section - Now with black background */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Unsere <span className="gradient-primary bg-clip-text text-transparent">Vision</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Innovation voranbringen durch intelligente Automatisierung
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <Card className="bg-gray-900 border-gray-800 shadow-2xl hover:shadow-primary/20 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-4 text-white">Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  Mit Media, Studio und Lab verbinden wir Inhalte, Design und Systeme – für Marken, die funktionieren und wachsen.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 shadow-2xl hover:shadow-secondary/20 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <Eye className="h-12 w-12 text-secondary mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-4 text-white">Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  Wir gestalten eine neue Generation von Marken: automatisiert, strukturiert und sichtbar.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 shadow-2xl hover:shadow-accent/20 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <Rocket className="h-12 w-12 text-accent mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-4 text-white">Ziel</h3>
                <p className="text-gray-300 leading-relaxed">
                  Menschen und Unternehmen den Zugang zu Innovation bieten für einfachere und effektivere Abläufe.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-6">
              Unsere <span className="gradient-primary bg-clip-text text-transparent">Bereiche</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creative-Tech-Studio für die neue Ära der Kommunikation. KI-basierte Marketinglösungen, die Marken messbar stärken.
            </p>
            <div className="mt-8 text-center">
              <div className="inline-flex items-center bg-accent/10 px-6 py-3 rounded-full">
                <Brain className="h-5 w-5 text-accent mr-2" />
                <span className="text-accent font-semibold">LAB führt Innovation an</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* STUDIO */}
            <div className="group hover:scale-105 transition-transform duration-300">
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                <div className="h-3 bg-gradient-to-r from-purple-500 to-purple-600"></div>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                      <span className="text-2xl">🟣</span>
                    </div>
                    <h3 className="text-2xl font-bold text-black">STUDIO</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Das Fundament: Alles wird strategisch vorbereitet, durchdacht und geplant.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Strategie & Markenidentität</li>
                    <li>• Visuelles Konzept</li>
                    <li>• Digitale Struktur & Funnel-Logik</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* MEDIA */}
            <div className="group hover:scale-105 transition-transform duration-300">
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                <div className="h-3 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <span className="text-2xl">🔵</span>
                    </div>
                    <h3 className="text-2xl font-bold text-black">MEDIA</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Produziert, veröffentlicht und steuert alles, was nach außen sichtbar wird.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Content-Produktion & Reichweite</li>
                    <li>• Marketing & Sichtbarkeit</li>
                    <li>• Creative Content Production</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* LAB - Enhanced */}
            <div className="group hover:scale-105 transition-transform duration-300">
              <Card className="h-full border-0 shadow-2xl hover:shadow-accent/30 transition-shadow duration-300 overflow-hidden relative border-2 border-accent/20">
                <div className="h-3 bg-gradient-to-r from-yellow-400 to-orange-400"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-accent text-black text-xs font-bold px-3 py-1 rounded-full animate-pulse">🔥 INNOVATION</span>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mr-4">
                      <span className="text-2xl">🧠</span>
                    </div>
                    <h3 className="text-2xl font-bold text-black">LAB</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed font-semibold">
                    Macht aus Ideen reale, funktionierende Systeme – sicher, automatisiert, effizient.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• KI-Integration & Automation</li>
                    <li>• Backend & Tech-Implementierung</li>
                    <li>• Webentwicklung & Prozessautomatisierung</li>
                  </ul>
                  <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                    <p className="text-xs text-accent font-semibold text-center">
                      Führend in KI-basierter Innovation
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="gradient-primary text-white hover:opacity-90 transition-opacity px-8 py-4 shadow-2xl">
                Alle Services entdecken <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-section" className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Bereit für den nächsten <span className="gradient-primary bg-clip-text text-transparent">Schritt?</span>
              </h2>
              <p className="text-xl text-gray-300">
                Lassen Sie uns über Ihr Projekt sprechen.
              </p>
            </div>

            <Card className="bg-gray-900 border-gray-800 shadow-2xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullname" className="text-white">Vollständiger Name</Label>
                    <Input
                      id="fullname"
                      required
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-primary"
                      placeholder="Max Mustermann"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">E-Mail Adresse</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-primary"
                      placeholder="max@example.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-white">Firma</Label>
                    <Input
                      id="company"
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-primary"
                      placeholder="Ihr Unternehmen"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="position" className="text-white">Position</Label>
                    <Input
                      id="position"
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-primary"
                      placeholder="Ihre Position"
                    />
                  </div>
                  
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="message" className="text-white">Nachricht (optional)</Label>
                    <Textarea
                      id="message"
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 min-h-[120px] focus:border-primary"
                      placeholder="Erzählen Sie uns von Ihrem Projekt..."
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <Button type="submit" className="w-full gradient-primary text-white hover:opacity-90 transition-opacity py-3 text-lg shadow-2xl">
                      Loslegen <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="text-3xl font-bold mb-4">
                New Edge<span className="text-primary">°</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Creative-Tech-Studio für die neue Ära der Kommunikation. 
                KI-basierte Marketinglösungen, die Marken messbar stärken.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <span className="text-sm">in</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <span className="text-sm">ig</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <span className="text-sm">tw</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/services" className="hover:text-white transition-colors">STUDIO</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">MEDIA</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">LAB</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Kontakt</h4>
              <ul className="space-y-2 text-gray-400">
                <li>sebastian.p@newedgebrand.com</li>
                <li>+49 (0) 123 456 789</li>
                <li>Deutschland</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 New Edge°. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Impressum</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Datenschutz</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">AGB</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
