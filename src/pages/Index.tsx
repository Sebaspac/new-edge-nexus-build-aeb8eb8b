import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Zap, Brain, Target, Eye, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
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
          title: "Wir designen für dich",
          description: "Vielen Dank für deine Anfrage! Wir melden uns bald bei dir.",
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
        description: "Es gab ein Problem beim Senden deiner Nachricht. Bitte versuche es erneut.",
        variant: "destructive",
        duration: 5000
      });
    }
  };
  return <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img alt="New Edge Logo" className="h-8 w-8 mr-3" src="/lovable-uploads/93b90410-bdbd-4098-938c-5ff9f158253c.png" />
              <div className="text-2xl font-bold text-black">
                New Edge<span className="text-primary"></span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-600 hover:text-black transition-colors">Home</Link>
              <Link to="/services" className="text-gray-600 hover:text-black transition-colors">Services</Link>
              <Button onClick={scrollToContact} className="bg-black text-white hover:bg-gray-800 transition-colors">
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
            {/* Main Headline - Inspired by Mawave's bold typography */}
            <h1 className="text-6xl md:text-8xl font-black text-black mb-8 leading-tight tracking-tight">
              BRAND
              <br />
              <span className="text-black italic font-black">INTELLIGENCE</span>
              <br />
              <span className="text-4xl md:text-6xl text-gray-600 font-normal">FOR CONSUMER BRANDS</span>
            </h1>
            
            {/* Subtitle */}
            <div className="max-w-2xl mx-auto mb-12">
              <p className="text-xl text-gray-600 mb-6">
                New Edge ist die führende Creative-Tech-Agentur 
                <br />
                für intelligente Markenkommunikation in Europa
              </p>
              
              {/* CTA Button */}
              <Button 
                onClick={scrollToContact} 
                className="bg-accent text-black hover:bg-accent/90 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-full"
              >
                Ready to Scale? <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Brand Logos Grid - Similar to Mawave */}
            <div className="grid grid-cols-4 md:grid-cols-6 gap-8 items-center opacity-60 max-w-4xl mx-auto">
              <div className="text-gray-400 text-sm font-semibold">AUDI</div>
              <div className="text-gray-400 text-sm font-semibold">OPEL</div>
              <div className="text-gray-400 text-sm font-semibold">BMW</div>
              <div className="text-gray-400 text-sm font-semibold">VW</div>
              <div className="text-gray-400 text-sm font-semibold">NIKE</div>
              <div className="text-gray-400 text-sm font-semibold">ADIDAS</div>
            </div>
          </div>
        </div>

        {/* Background gradient elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl -z-10"></div>
      </section>

      {/* Video/Visual Section - Inspired by Mawave's cyan block */}
      <section className="py-0 bg-white relative">
        <div className="container mx-auto px-6">
          {/* Large Visual Block */}
          <div className="relative h-96 md:h-[500px] bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl overflow-hidden flex items-center justify-center">
            <div className="text-center text-white z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-4">
                WITH YOUR
                <br />
                <span className="text-5xl md:text-7xl text-accent font-black">ONE-STOP</span>
                <br />
                <span className="text-4xl md:text-6xl">SOCIAL SHOP</span>
              </h2>
            </div>
            
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 max-w-4xl mx-auto leading-tight">
            Innovation voranbringen durch 
            <span className="text-primary"> intelligente Automatisierung</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mit Media, Studio und Lab verbinden wir Inhalte, Design und Systeme – für Marken, die funktionieren und wachsen.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-black mb-6 leading-tight">
              DREI BEREICHE.
              <br />
              <span className="text-primary">EINE LÖSUNG.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Creative-Tech-Studio für die neue Ära der Kommunikation. KI-basierte Marketinglösungen, die Marken messbar stärken.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* STUDIO */}
            <Card className="bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8 h-full">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-4">
                    <span className="text-3xl font-bold text-white">S</span>
                  </div>
                  <h3 className="text-3xl font-black text-black mb-2">STUDIO</h3>
                  <div className="w-12 h-1 bg-purple-500 mb-4"></div>
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Das Fundament: Alles wird strategisch vorbereitet, durchdacht und geplant.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Strategie & Markenidentität
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Visuelles Konzept
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Digitale Struktur & Funnel-Logik
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* MEDIA */}
            <Card className="bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8 h-full">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center mb-4">
                    <span className="text-3xl font-bold text-white">M</span>
                  </div>
                  <h3 className="text-3xl font-black text-black mb-2">MEDIA</h3>
                  <div className="w-12 h-1 bg-cyan-500 mb-4"></div>
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Produziert, veröffentlicht und steuert alles, was nach außen sichtbar wird.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                    Content-Produktion & Reichweite
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                    Marketing & Sichtbarkeit
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                    Creative Content Production
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* LAB */}
            <Card className="bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 group relative">
              <div className="absolute top-6 right-6">
                <span className="bg-accent text-black text-xs font-bold px-3 py-1 rounded-full">🚀 INNOVATION</span>
              </div>
              <CardContent className="p-8 h-full">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-4">
                    <span className="text-3xl font-bold text-black">L</span>
                  </div>
                  <h3 className="text-3xl font-black text-black mb-2">LAB</h3>
                  <div className="w-12 h-1 bg-accent mb-4"></div>
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed font-semibold">
                  Macht aus Ideen reale, funktionierende Systeme – sicher, automatisiert, effizient.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    KI-Integration & Automation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Backend & Tech-Implementierung
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Webentwicklung & Prozessautomatisierung
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                  <p className="text-sm text-accent font-semibold text-center">
                    Führend in KI-basierter Innovation
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 transition-colors px-8 py-4">
                Alle Services entdecken <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-section" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-black">
                Bereit für den nächsten <span className="gradient-primary bg-clip-text text-gray-900">Schritt?</span>
              </h2>
              <p className="text-xl text-gray-600">
                Lassen Sie uns über Ihr Projekt sprechen.
              </p>
            </div>

            <Card className="bg-white border border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <form action="https://formspree.io/f/xjkrnyon" method="POST" onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullname" className="text-black">Vollständiger Name</Label>
                    <Input name="fullname" id="fullname" required className="bg-white border-gray-300 text-black placeholder:text-gray-400 focus:border-primary" placeholder="Max Mustermann" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-black">E-Mail Adresse</Label>
                    <Input name="email" id="email" type="email" required className="bg-white border-gray-300 text-black placeholder:text-gray-400 focus:border-primary" placeholder="max@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-black">Firma</Label>
                    <Input name="company" id="company" className="bg-white border-gray-300 text-black placeholder:text-gray-400 focus:border-primary" placeholder="Ihr Unternehmen" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="position" className="text-black">Position</Label>
                    <Input name="position" id="position" className="bg-white border-gray-300 text-black placeholder:text-gray-400 focus:border-primary" placeholder="Ihre Position" />
                  </div>
                  
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="message" className="text-black">Nachricht (optional)</Label>
                    <Textarea name="message" id="message" className="bg-white border-gray-300 text-black placeholder:text-gray-400 min-h-[120px] focus:border-primary" placeholder="Erzählen Sie uns von Ihrem Projekt..." />
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
                <img alt="New Edge Logo" className="h-8 w-8 mr-3" src="/lovable-uploads/90e4fdca-8c29-48f7-9568-686b611a62f4.png" />
                <div className="text-3xl font-bold">
                  New Edge<span className="text-primary"></span>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                New Edge ist ein Creative-Tech-Studio für zukunftsorientierte Markenkommunikation.
                Wir entwickeln strukturierte, skalierbare und KI-gestützte Lösungen, die Marken nachhaltig positionieren und messbar stärken.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/new-edge-brand/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <span className="text-sm">in</span>
                </a>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <span className="text-sm">ig</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/services#studio" className="hover:text-white transition-colors">STUDIO</Link></li>
                <li><Link to="/services#media" className="hover:text-white transition-colors">MEDIA</Link></li>
                <li><Link to="/services#lab" className="hover:text-white transition-colors">LAB</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Kontakt</h4>
              <ul className="space-y-2 text-gray-400">
                <li>info@newedgebrand.com</li>
                <li>+49 (0) 15750998236</li>
                <li>Deutschland</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">©2024 New Edge. Alle Rechte vorbehalten.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Impressum</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Datenschutz</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">AGB</a>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;