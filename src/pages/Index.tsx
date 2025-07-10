
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

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-black">
              New Edge<span className="text-primary">°</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-600 hover:text-black transition-colors">Home</Link>
              <Link to="/services" className="text-gray-600 hover:text-black transition-colors">Services</Link>
              <Button className="gradient-primary text-white hover:opacity-90 transition-opacity">
                Kontakt
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <h1 className="text-6xl md:text-8xl font-black text-black mb-6 leading-tight">
              Design the <span className="gradient-primary bg-clip-text text-transparent">Edge</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-4xl mx-auto">
              New Edge – where brand meets intelligence.
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto">
              Branding. Craft. Automation – All connected.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link to="/services">
                <Button size="lg" className="gradient-primary text-white hover:opacity-90 transition-opacity px-8 py-4 text-lg">
                  Discover Services <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:border-primary transition-colors px-8 py-4 text-lg">
                Get Started
              </Button>
            </div>

            {/* Floating elements */}
            <div className="relative">
              <div className="animate-float absolute top-10 left-1/4 opacity-20">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <div className="animate-float absolute top-20 right-1/4 opacity-20" style={{ animationDelay: '2s' }}>
                <Zap className="h-6 w-6 text-secondary" />
              </div>
              <div className="animate-float absolute top-5 right-1/3 opacity-20" style={{ animationDelay: '4s' }}>
                <Brain className="h-10 w-10 text-accent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Ziel Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <CardContent className="p-8 text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-4 text-black">Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  Mit Media, Studio und Lab verbinden wir Inhalte, Design und Systeme – für Marken, die funktionieren und wachsen.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <CardContent className="p-8 text-center">
                <Eye className="h-12 w-12 text-secondary mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-4 text-black">Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  Wir gestalten eine neue Generation von Marken: automatisiert, strukturiert und sichtbar.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <CardContent className="p-8 text-center">
                <Rocket className="h-12 w-12 text-accent mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-4 text-black">Ziel</h3>
                <p className="text-gray-600 leading-relaxed">
                  Menschen und Unternehmen den Zugang zu Innovation bieten für einfachere und effektivere Abläufe.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-6">
              Unsere <span className="gradient-primary bg-clip-text text-transparent">Bereiche</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creative-Tech-Studio für die neue Ära der Kommunikation. KI-basierte Marketinglösungen, die Marken messbar stärken.
            </p>
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

            {/* LAB */}
            <div className="group hover:scale-105 transition-transform duration-300">
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden relative">
                <div className="h-3 bg-gradient-to-r from-yellow-400 to-orange-400"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-accent text-black text-xs font-bold px-2 py-1 rounded-full">HOT</span>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mr-4">
                      <span className="text-2xl">🧠</span>
                    </div>
                    <h3 className="text-2xl font-bold text-black">LAB</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Macht aus Ideen reale, funktionierende Systeme – sicher, automatisiert, effizient.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• KI-Integration & Automation</li>
                    <li>• Backend & Tech-Implementierung</li>
                    <li>• Webentwicklung & Prozessautomatisierung</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="gradient-primary text-white hover:opacity-90 transition-opacity px-8 py-4">
                Alle Services entdecken <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-black text-white">
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

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-8">
                <form className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullname" className="text-white">Vollständiger Name</Label>
                    <Input
                      id="fullname"
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                      placeholder="Max Mustermann"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">E-Mail Adresse</Label>
                    <Input
                      id="email"
                      type="email"
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                      placeholder="max@example.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-white">Firma</Label>
                    <Input
                      id="company"
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                      placeholder="Ihr Unternehmen"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="position" className="text-white">Position</Label>
                    <Input
                      id="position"
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                      placeholder="Ihre Position"
                    />
                  </div>
                  
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="message" className="text-white">Nachricht (optional)</Label>
                    <Textarea
                      id="message"
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 min-h-[120px]"
                      placeholder="Erzählen Sie uns von Ihrem Projekt..."
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <Button className="w-full gradient-primary text-white hover:opacity-90 transition-opacity py-3 text-lg">
                      Projekt besprechen <ArrowRight className="ml-2 h-5 w-5" />
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
                <li>info@newedge.studio</li>
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
