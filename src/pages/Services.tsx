
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Sparkles, Target, Megaphone, Brain, Zap, Cog, Database, Globe, BarChart, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Services = () => {
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
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/108d87d1-d825-4696-ba9e-40debe39cadc.png" 
                alt="New Edge Logo" 
                className="h-8 w-8 mr-3"
              />
              <div className="text-2xl font-bold text-black">
                New Edge<span className="text-primary">°</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-600 hover:text-black transition-colors">Home</Link>
              <Link to="/services" className="text-black font-medium">Services</Link>
              <Button 
                onClick={scrollToContact}
                className="bg-black text-white hover:bg-gray-800 transition-colors"
              >
                Kontakt
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-24 pb-12 px-6 bg-white">
        <div className="container mx-auto">
          <Link to="/" className="inline-flex items-center text-gray-500 hover:text-black transition-colors mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück zur Homepage
          </Link>
          
          <div className="text-center">
            <div className="text-accent text-xl md:text-2xl font-semibold mb-4 tracking-wider">
              DESIGN THE EDGE
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-black mb-6 leading-tight">
              Unsere <span className="gradient-primary bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              Von der strategischen Planung bis zur technischen Umsetzung – 
              wir verbinden Kreativität mit Technologie für maximalen Impact.
            </p>
          </div>
        </div>
      </section>

      {/* STUDIO Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                  <span className="text-3xl">🟣</span>
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-black">New Edge° STUDIO</h2>
                  <p className="text-purple-600 font-medium">Das strategische Fundament</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                STUDIO liefert das Fundament: Alles wird strategisch vorbereitet, durchdacht und geplant – 
                damit MEDIA & LAB reibungslos umsetzen können.
              </p>
              
              <div className="space-y-6">
                <Card className="border-l-4 border-l-purple-500 shadow-sm">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-3 flex items-center">
                      <Target className="mr-2 h-5 w-5 text-purple-500" />
                      Strategie & Markenidentität
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Markenpositionierung & Zielgruppenanalyse</li>
                      <li>• Brand Story, Werte & Tonalität</li>
                      <li>• Wettbewerbsanalyse & Differenzierungsstrategie</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-l-purple-500 shadow-sm">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-3 flex items-center">
                      <Sparkles className="mr-2 h-5 w-5 text-purple-500" />
                      Visuelles Konzept
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Moodboards & Keyvisual-Richtung</li>
                      <li>• Design- und Farbwelten</li>
                      <li>• Template-Rahmen für Social Media & Print</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-l-purple-500 shadow-sm">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-3 flex items-center">
                      <Globe className="mr-2 h-5 w-5 text-purple-500" />
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
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Strategische Planung</h3>
                <p className="mb-6">
                  Von der ersten Idee bis zum vollständigen Markenkonzept – 
                  wir legen das Fundament für Ihren Erfolg.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm">Strategisch</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEDIA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <span className="text-3xl">🔵</span>
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-black">New Edge° MEDIA</h2>
                  <p className="text-blue-600 font-medium">Sichtbarkeit & Reichweite</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                MEDIA produziert, veröffentlicht und steuert alles, was nach außen sichtbar wird.
              </p>
              
              <div className="space-y-6">
                <Card className="border-l-4 border-l-blue-500 shadow-sm">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-3 flex items-center">
                      <Megaphone className="mr-2 h-5 w-5 text-blue-500" />
                      Operative Umsetzung
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Content-Produktion & Reichweite</li>
                      <li>• Marketing & Sichtbarkeit</li>
                      <li>• Launchkampagnen & Performance-Marketing</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-l-blue-500 shadow-sm">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-3 flex items-center">
                      <BarChart className="mr-2 h-5 w-5 text-blue-500" />
                      Marketing & Performance
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• SEO/SEA-Umsetzung & Conversion-Tracking</li>
                      <li>• Content-Marketing & Copywriting</li>
                      <li>• Newsletter, Ads & Kampagnenausspielung</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-l-blue-500 shadow-sm">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-3 flex items-center">
                      <Lightbulb className="mr-2 h-5 w-5 text-blue-500" />
                      Creative Production
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Creative Content Production (Video, Visuals, Reels)</li>
                      <li>• Social Media Management</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="lg:order-1 relative">
              <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Content & Kampagnen</h3>
                <p className="mb-6">
                  Maximale Sichtbarkeit durch strategische Content-Produktion 
                  und zielgerichtete Kampagnen.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">360°</div>
                    <div className="text-sm">Marketing</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">ROI</div>
                    <div className="text-sm">Optimiert</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LAB Section - Enhanced and Featured */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent text-black text-lg px-6 py-3">
              🚀 INNOVATION LEADER
            </Badge>
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mr-6">
                <span className="text-4xl">🧠</span>
              </div>
              <div className="text-left">
                <h2 className="text-5xl font-black text-white mb-2">New Edge° LAB</h2>
                <p className="text-2xl text-accent font-semibold">KI-Integration & Automation</p>
              </div>
            </div>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              LAB macht aus Ideen reale, funktionierende Systeme – sicher, automatisiert, effizient. 
              <span className="text-accent font-bold"> Hier entstehen die innovativsten Lösungen der digitalen Zukunft.</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg bg-gray-800 border border-gray-700">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-white">KI-Integration & Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <Zap className="h-4 w-4 mt-1 mr-2 text-accent flex-shrink-0" />
                    n8n-gestützte Prozessautomatisierung
                  </li>
                  <li className="flex items-start">
                    <Zap className="h-4 w-4 mt-1 mr-2 text-accent flex-shrink-0" />
                    KI-Agenten-Integration (Text, Mail, CRM)
                  </li>
                  <li className="flex items-start">
                    <Zap className="h-4 w-4 mt-1 mr-2 text-accent flex-shrink-0" />
                    Intelligente Workflow-Optimierung
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gray-800 border border-gray-700">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                  <Cog className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-white">Backend & Tech-Implementierung</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <Zap className="h-4 w-4 mt-1 mr-2 text-accent flex-shrink-0" />
                    Webentwicklung (CMS, Landingpages, Funnels)
                  </li>
                  <li className="flex items-start">
                    <Zap className="h-4 w-4 mt-1 mr-2 text-accent flex-shrink-0" />
                    Backend-Systeme & APIs
                  </li>
                  <li className="flex items-start">
                    <Zap className="h-4 w-4 mt-1 mr-2 text-accent flex-shrink-0" />
                    Cloud-Infrastructure
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gray-800 border border-gray-700">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-white">Daten & Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <Zap className="h-4 w-4 mt-1 mr-2 text-accent flex-shrink-0" />
                    Formular- & Datenbank-Anbindungen
                  </li>
                  <li className="flex items-start">
                    <Zap className="h-4 w-4 mt-1 mr-2 text-accent flex-shrink-0" />
                    Tracking & Analyse-Setups
                  </li>
                  <li className="flex items-start">
                    <Zap className="h-4 w-4 mt-1 mr-2 text-accent flex-shrink-0" />
                    Custom Dashboards & Reporting
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* LAB Showcase */}
          <div className="bg-gradient-to-r from-gray-800 to-black rounded-2xl p-12 text-white text-center border border-accent/20">
            <h3 className="text-3xl font-bold mb-6">
              Die Zukunft ist <span className="gradient-accent bg-clip-text text-transparent">automatisiert</span>
            </h3>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Von KI-gestützten Chatbots bis zu vollautomatisierten Marketing-Funnels – 
              LAB bringt Ihre digitalen Visionen zum Leben.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">95%</div>
                <div className="text-sm text-gray-300">Effizienzsteigerung</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <div className="text-sm text-gray-300">Automation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">AI</div>
                <div className="text-sm text-gray-300">Powered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">∞</div>
                <div className="text-sm text-gray-300">Skalierbar</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-section" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-black">
                Lassen Sie uns Ihr Projekt <span className="gradient-primary bg-clip-text text-transparent">realisieren</span>
              </h2>
              <p className="text-xl text-gray-600">
                Von der Strategie bis zur technischen Umsetzung – wir sind Ihr Partner für digitale Excellence.
              </p>
            </div>

            <Card className="bg-white border border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullname" className="text-black">Vollständiger Name</Label>
                    <Input
                      id="fullname"
                      required
                      className="bg-white border-gray-300 text-black placeholder:text-gray-400 focus:border-primary"
                      placeholder="Max Mustermann"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-black">E-Mail Adresse</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      className="bg-white border-gray-300 text-black placeholder:text-gray-400 focus:border-primary"
                      placeholder="max@example.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-black">Firma</Label>
                    <Input
                      id="company"
                      className="bg-white border-gray-300 text-black placeholder:text-gray-400 focus:border-primary"
                      placeholder="Ihr Unternehmen"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="position" className="text-black">Position</Label>
                    <Input
                      id="position"
                      className="bg-white border-gray-300 text-black placeholder:text-gray-400 focus:border-primary"
                      placeholder="Ihre Position"
                    />
                  </div>
                  
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="services" className="text-black">Interessante Services</Label>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white cursor-pointer">
                        STUDIO
                      </Badge>
                      <Badge variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white cursor-pointer">
                        MEDIA
                      </Badge>
                      <Badge variant="outline" className="border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-black cursor-pointer">
                        LAB 🚀
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="message" className="text-black">Projektdetails</Label>
                    <Textarea
                      id="message"
                      className="bg-white border-gray-300 text-black placeholder:text-gray-400 min-h-[120px] focus:border-primary"
                      placeholder="Beschreiben Sie Ihr Projekt und Ihre Ziele..."
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800 transition-colors py-3 text-lg">
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
              <div className="flex items-center mb-4">
                <img 
                  src="/lovable-uploads/108d87d1-d825-4696-ba9e-40debe39cadc.png" 
                  alt="New Edge Logo" 
                  className="h-8 w-8 mr-3 bg-white rounded p-1"
                />
                <div className="text-3xl font-bold">
                  New Edge<span className="text-primary">°</span>
                </div>
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
                <li><a href="#studio" className="hover:text-white transition-colors">STUDIO</a></li>
                <li><a href="#media" className="hover:text-white transition-colors">MEDIA</a></li>
                <li><a href="#lab" className="hover:text-white transition-colors">LAB</a></li>
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

export default Services;
