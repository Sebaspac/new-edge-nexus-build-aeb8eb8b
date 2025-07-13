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
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
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
  return <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 animate-slide-in-right">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-start">
              <div className="flex items-center hover:scale-105 transition-transform duration-300 mb-2">
                <img alt="New Edge Logo" className="h-8 w-8 mr-3 animate-float" src="/lovable-uploads/93b90410-bdbd-4098-938c-5ff9f158253c.png" />
                <div className="text-2xl font-bold text-black">
                  New Edge<span className="text-primary animate-pulse"></span>
                </div>
              </div>
              <Link to="/" className="inline-flex items-center text-gray-500 hover:text-black transition-all duration-300 hover:scale-110 animate-fade-in text-sm">
                <ArrowLeft className="mr-2 h-3 w-3" />
                Zurück zur Homepage
              </Link>
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
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/15 rounded-full blur-2xl animate-pulse" style={{
          animationDelay: '1s'
        }}></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl animate-bounce" style={{
          animationDelay: '2s',
          animationDuration: '3s'
        }}></div>
          <div className="absolute top-1/6 right-1/6 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-pulse" style={{
          animationDelay: '4s'
        }}></div>
          <div className="absolute bottom-1/6 left-1/6 w-56 h-56 bg-primary/15 rounded-full blur-xl animate-bounce" style={{
          animationDelay: '3s',
          animationDuration: '4s'
        }}></div>
          
          {/* Floating Icons */}
          <div className="absolute top-1/4 left-1/4 text-primary/30 animate-float" style={{
          animationDelay: '0.5s'
        }}>
            <Target size={32} className="animate-spin-slow" />
          </div>
          <div className="absolute top-3/4 right-1/4 text-accent/30 animate-float" style={{
          animationDelay: '1.5s'
        }}>
            <Sparkles size={28} className="animate-pulse" />
          </div>
          <div className="absolute top-1/3 right-1/3 text-primary/40 animate-float" style={{
          animationDelay: '2.5s'
        }}>
            <Lightbulb size={24} className="animate-bounce" />
          </div>
          <div className="absolute bottom-1/3 left-1/5 text-accent/35 animate-float" style={{
          animationDelay: '3s'
        }}>
            <Zap size={30} className="animate-pulse" />
          </div>
          <div className="absolute top-1/6 left-2/3 text-primary/25 animate-float" style={{
          animationDelay: '4s'
        }}>
            <Brain size={26} className="animate-spin-slow" />
          </div>
          <div className="absolute bottom-1/6 right-1/6 text-accent/40 animate-float" style={{
          animationDelay: '5s'
        }}>
            <Megaphone size={28} className="animate-bounce" />
          </div>
          <div className="absolute top-2/3 left-1/6 text-primary/30 animate-float" style={{
          animationDelay: '6s'
        }}>
            <Globe size={32} className="animate-spin-slow" />
          </div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          
          <div className="bg-black px-8 py-4 rounded-2xl inline-block mt-16 mb-12 shadow-2xl animate-fade-in transform hover:scale-105 transition-transform duration-300">
            <div className="text-white text-3xl md:text-4xl font-black tracking-wider animate-pulse">
              DESIGN <span className="text-yellow-400">THE EDGE</span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-black mb-8 leading-none animate-fade-in transform hover:scale-105 transition-transform duration-500" style={{
          animationDelay: '0.3s'
        }}>
            SERVICES
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 animate-fade-in" style={{
          animationDelay: '0.6s'
        }}>
            Von der strategischen Planung bis zur technischen Umsetzung – 
            wir verbinden Kreativität mit Technologie für maximalen Impact.
          </p>

          {/* Dynamic background gradient elements */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl -z-10 animate-pulse" style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) translate(-50%, -50%)`
        }}></div>
        </div>
      </section>

      {/* Services Header */}
      <section className="py-20 bg-black relative overflow-hidden">
        {/* Floating elements in black section */}
        <div className="absolute top-10 left-20 text-accent/30 animate-float" style={{
        animationDelay: '1s'
      }}>
          <Star size={24} className="animate-spin-slow" />
        </div>
        <div className="absolute bottom-10 right-20 text-primary/40 animate-float" style={{
        animationDelay: '2s'
      }}>
          <Users size={28} className="animate-pulse" />
        </div>
        <div className="absolute top-1/2 right-1/4 text-accent/25 animate-float" style={{
        animationDelay: '3s'
      }}>
          <Rocket size={20} className="animate-bounce" />
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 animate-fade-in hover:scale-105 transition-transform duration-500">
            Unsere <span className="text-accent animate-pulse">Leistungen</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-50 animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
            Innovative Lösungen für die digitale Transformation
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-black mb-4">Unsere Bereiche</h2>
          <p className="text-xl text-gray-600 mb-16">Drei Säulen für Ihren digitalen Erfolg</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Media Card */}
            <Link to="/media" className="group">
              <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border-0">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                    <Megaphone className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-3">New Edge Media</h3>
                  <p className="text-blue-600 font-medium mb-4">Content & Strategie</p>
                  <p className="text-gray-600">
                    Datengetriebene Content-Strategien, die Ihre Zielgruppe erreichen und engagieren.
                  </p>
                  <div className="mt-6 text-blue-600 group-hover:text-blue-700 font-medium">
                    Mehr erfahren →
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Studio Card */}
            <Link to="/studio" className="group">
              <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border-0">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                    <Sparkles className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-3">New Edge Studio</h3>
                  <p className="text-purple-600 font-medium mb-4">Design & Kreation</p>
                  <p className="text-gray-600">
                    Visuelle Identitäten, die nicht nur schön aussehen, sondern auch funktionieren.
                  </p>
                  <div className="mt-6 text-purple-600 group-hover:text-purple-700 font-medium">
                    Mehr erfahren →
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Lab Card */}
            <Link to="/lab" className="group">
              <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border-0">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                    <Brain className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-3">New Edge Lab</h3>
                  <p className="text-green-600 font-medium mb-4">KI & Innovation</p>
                  <p className="text-gray-600">
                    Marketing-Tools von morgen. KI-getriebene Lösungen für Ihre Prozesse.
                  </p>
                  <div className="mt-6 text-green-600 group-hover:text-green-700 font-medium">
                    Mehr erfahren →
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Transparente Preise</h2>
            <p className="text-xl text-gray-600">Individuelle Lösungen für jeden Bedarf</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative bg-white border-2 border-gray-200 hover:border-blue-500 transition-all duration-300">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl font-bold">Starter</CardTitle>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  ab 2.500€
                </div>
                <p className="text-gray-600">Perfekt für den Einstieg</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span>Basis Markenidentität</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span>Social Media Setup</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span>Website Landing Page</span>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Anfrage stellen
                </Button>
              </CardContent>
            </Card>

            <Card className="relative bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-500 transform scale-105">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-purple-500 text-white px-6 py-1">Beliebt</Badge>
              </div>
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl font-bold">Professional</CardTitle>
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  ab 7.500€
                </div>
                <p className="text-gray-600">Für wachsende Unternehmen</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span>Komplette Markenidentität</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span>Content-Strategie</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span>Website + E-Commerce</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span>Marketing Automation</span>
                  </div>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Anfrage stellen
                </Button>
              </CardContent>
            </Card>

            <Card className="relative bg-white border-2 border-gray-200 hover:border-green-500 transition-all duration-300">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl font-bold">Enterprise</CardTitle>
                <div className="text-4xl font-bold text-green-600 mb-2">
                  ab 15.000€
                </div>
                <p className="text-gray-600">Für etablierte Unternehmen</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span>Vollständige Transformation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span>KI-Integration</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span>Multi-Platform Lösung</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span>24/7 Support</span>
                  </div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Anfrage stellen
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact-section" className="py-20 bg-white relative overflow-hidden">
        {/* Background animations */}
        <div className="absolute top-10 right-20 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float" style={{
        animationDelay: '2s'
      }}></div>
        <div className="absolute bottom-10 left-20 w-40 h-40 bg-accent/10 rounded-full blur-2xl animate-float" style={{
        animationDelay: '3s'
      }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-black text-black mb-6 hover:scale-105 transition-transform duration-500">
              Bereit für den <span className="text-primary animate-pulse">
nächsten Schritt?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
              Lassen Sie uns gemeinsam Ihre digitale Zukunft gestalten.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in" style={{
            animationDelay: '0.4s'
          }}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">Name *</Label>
                  <Input id="name" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary" placeholder="Ihr Name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">E-Mail *</Label>
                  <Input id="email" name="email" type="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary" placeholder="ihre@email.de" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-medium text-gray-700">Unternehmen</Label>
                <Input id="company" name="company" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary" placeholder="Ihr Unternehmen" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium text-gray-700">Nachricht *</Label>
                <Textarea id="message" name="message" required rows={6} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all duration-300 hover:border-primary" placeholder="Erzählen Sie uns von Ihrem Projekt..." />
              </div>
              
              <Button type="submit" size="lg" className="w-full bg-black text-white hover:bg-gray-800 transition-colors py-4 text-lg font-semibold rounded-lg">
                Nachricht senden <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>;
};
export default Services;