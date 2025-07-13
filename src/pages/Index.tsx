import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Zap, Brain, Target, Eye, Rocket, Star, Lightbulb, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
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
              <Link to="/services" className="text-gray-600 hover:text-black transition-all duration-300 hover:scale-110">Services</Link>
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
            {/* Main Headline - Inspired by Mawave's bold typography */}
            <h1 className="text-6xl md:text-8xl font-black text-black mb-8 leading-tight tracking-tight">
              <span className="inline-block animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>BRAND</span>
              <br />
              <span className="text-black italic font-black inline-block animate-fade-in hover:scale-105 transition-transform duration-500" style={{
              animationDelay: '0.4s'
            }}>INTELLIGENCE</span>
              <br />
              <span className="text-4xl md:text-6xl text-gray-600 font-normal inline-block animate-fade-in" style={{
              animationDelay: '0.6s'
            }}>FOR CONSUMER BRANDS</span>
            </h1>
            
            {/* Floating icons */}
            <div className="absolute top-20 left-10 animate-float" style={{
            animationDelay: '1s'
          }}>
              <Sparkles className="w-8 h-8 text-primary opacity-60 animate-spin-slow" />
            </div>
            <div className="absolute top-40 right-20 animate-float" style={{
            animationDelay: '1.5s'
          }}>
              <Zap className="w-10 h-10 text-accent opacity-60 animate-bounce" />
            </div>
            <div className="absolute bottom-20 left-20 animate-float" style={{
            animationDelay: '2s'
          }}>
              <Brain className="w-12 h-12 text-secondary opacity-60 animate-pulse" />
            </div>
            <div className="absolute top-10 right-10 animate-float" style={{
            animationDelay: '2.5s'
          }}>
              <Target className="w-6 h-6 text-primary opacity-50 animate-spin-slow" />
            </div>
            <div className="absolute bottom-40 right-40 animate-float" style={{
            animationDelay: '3s'
          }}>
              <Eye className="w-8 h-8 text-accent opacity-40 animate-pulse" />
            </div>
            <div className="absolute top-1/3 left-1/4 animate-float" style={{
            animationDelay: '3.5s'
          }}>
              <Rocket className="w-7 h-7 text-secondary opacity-60 animate-bounce" />
            </div>
            
            {/* Subtitle */}
            <div className="max-w-2xl mx-auto mb-12 animate-slide-in-right" style={{
            animationDelay: '0.8s'
          }}>
              <p className="text-xl text-gray-600 mb-6">New Edge ist eine der innovativsten Creative-Tech-Agentur
für intelligente Markenkommunikation in Europa
            </p>
              
              {/* CTA Button */}
              <Button onClick={scrollToContact} className="bg-accent text-black hover:bg-accent/90 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-full hover:scale-110 hover:shadow-2xl">
                Ready to Scale? <ArrowRight className="ml-2 h-5 w-5 animate-bounce" />
              </Button>
            </div>

            {/* Brand Logos Grid - Similar to Mawave */}
            <div className="grid grid-cols-4 md:grid-cols-6 gap-8 items-center opacity-60 max-w-4xl mx-auto animate-fade-in" style={{
            animationDelay: '1s'
          }}>
              
              
              
              
              
              
            </div>
          </div>
        </div>

        {/* Dynamic background gradient elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl -z-10 animate-pulse" style={{
        transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) translate(-50%, -50%)`
      }}></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-secondary/15 to-primary/15 rounded-full blur-2xl -z-10 animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-full blur-xl -z-10 animate-float" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute top-10 right-1/3 w-32 h-32 bg-gradient-to-r from-primary/25 to-accent/25 rounded-full blur-xl -z-10 animate-bounce" style={{
        animationDelay: '2s',
        animationDuration: '4s'
      }}></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full blur-2xl -z-10 animate-pulse" style={{
        animationDelay: '3s'
      }}></div>
        <div className="absolute top-2/3 left-10 w-24 h-24 bg-gradient-to-r from-accent/30 to-secondary/30 rounded-full blur-lg -z-10 animate-float" style={{
        animationDelay: '4s'
      }}></div>
      </section>

      {/* Video/Visual Section - Inspired by Mawave's cyan block */}
      <section className="py-0 bg-white relative">
        <div className="container mx-auto px-6">
          {/* Large Visual Block */}
          <div className="relative h-96 md:h-[500px] bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl overflow-hidden flex items-center justify-center group hover:scale-105 transition-transform duration-500 animate-gradient">
            <div className="text-center text-white z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-4">
                <span className="inline-block animate-slide-in-right" style={{
                animationDelay: '0.2s'
              }}>STRATEGIE </span>
                <br />
                <span className="text-5xl md:text-7xl text-accent font-black inline-block animate-fade-up hover:rotate-2 transition-transform duration-300" style={{
                animationDelay: '0.4s'
              }}>ON-POINT</span>
                <br />
                <span className="text-4xl md:text-6xl inline-block animate-slide-in-right" style={{
                animationDelay: '0.6s'
              }}>CREATIVE TECH
              </span>
              </h2>
              
              {/* Floating elements */}
              <div className="absolute top-10 left-10 animate-float">
                <Star className="w-8 h-8 text-accent opacity-70 animate-spin-slow" />
              </div>
              <div className="absolute bottom-10 right-10 animate-float" style={{
              animationDelay: '1s'
            }}>
                <Lightbulb className="w-10 h-10 text-yellow-300 opacity-70 animate-pulse" />
              </div>
              <div className="absolute top-1/2 left-20 animate-float" style={{
              animationDelay: '2s'
            }}>
                <Users className="w-6 h-6 text-white opacity-70 animate-bounce" />
              </div>
              <div className="absolute top-1/4 right-1/4 animate-float" style={{
              animationDelay: '2.5s'
            }}>
                <Sparkles className="w-7 h-7 text-white opacity-60 animate-pulse" />
              </div>
              <div className="absolute bottom-1/4 left-1/3 animate-float" style={{
              animationDelay: '3s'
            }}>
                <Zap className="w-9 h-9 text-accent opacity-80 animate-bounce" />
              </div>
              <div className="absolute top-3/4 right-1/3 animate-float" style={{
              animationDelay: '3.5s'
            }}>
                <Target className="w-5 h-5 text-yellow-300 opacity-50 animate-spin-slow" />
              </div>
            </div>
            
            {/* Animated background pattern */}
            <div className="absolute inset-0 bg-black/10 animate-pulse"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-slide-in-right opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 max-w-4xl mx-auto leading-tight animate-fade-up">
            <span className="inline-block hover:scale-105 transition-transform duration-300">Innovation voranbringen durch</span>
            <span className="text-primary animate-pulse hover:text-secondary transition-colors duration-500"> intelligente Automatisierung</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in-right" style={{
          animationDelay: '0.3s'
        }}>
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
            <Card className="bg-white border-0 shadow-sm hover:shadow-xl transition-all duration-500 group hover:scale-105 hover:-translate-y-2 animate-fade-up" style={{
            animationDelay: '0.1s'
          }}>
              <CardContent className="p-8 h-full">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300 animate-float">
                    <span className="text-3xl font-bold text-white">S</span>
                  </div>
                  <h3 className="text-3xl font-black text-black mb-2 group-hover:text-purple-500 transition-colors duration-300">STUDIO</h3>
                  <div className="w-12 h-1 bg-purple-500 mb-4 group-hover:w-20 transition-all duration-300"></div>
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
            <Card className="bg-white border-0 shadow-sm hover:shadow-xl transition-all duration-500 group hover:scale-105 hover:-translate-y-2 animate-fade-up" style={{
            animationDelay: '0.3s'
          }}>
              <CardContent className="p-8 h-full">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300 animate-float" style={{
                  animationDelay: '1s'
                }}>
                    <span className="text-3xl font-bold text-white">M</span>
                  </div>
                  <h3 className="text-3xl font-black text-black mb-2 group-hover:text-cyan-500 transition-colors duration-300">MEDIA</h3>
                  <div className="w-12 h-1 bg-cyan-500 mb-4 group-hover:w-20 transition-all duration-300"></div>
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
            <Card className="bg-white border-0 shadow-sm hover:shadow-xl transition-all duration-500 group relative hover:scale-105 hover:-translate-y-2 animate-fade-up" style={{
            animationDelay: '0.5s'
          }}>
              <div className="absolute top-6 right-6">
                <span className="bg-accent text-black text-xs font-bold px-3 py-1 rounded-full animate-bounce group-hover:scale-110 transition-transform duration-300">🚀 INNOVATION</span>
              </div>
              <CardContent className="p-8 h-full">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300 animate-float" style={{
                  animationDelay: '2s'
                }}>
                    <span className="text-3xl font-bold text-black">L</span>
                  </div>
                  <h3 className="text-3xl font-black text-black mb-2 group-hover:text-accent transition-colors duration-300">LAB</h3>
                  <div className="w-12 h-1 bg-accent mb-4 group-hover:w-20 transition-all duration-300"></div>
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

          <div className="text-center mt-12 animate-fade-up" style={{
          animationDelay: '0.7s'
        }}>
            <Link to="/services">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 transition-all duration-300 px-8 py-4 hover:scale-110 hover:shadow-2xl">
                Alle Services entdecken <ArrowRight className="ml-2 h-5 w-5 animate-bounce" />
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

            <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-up hover:scale-105" style={{
            animationDelay: '0.2s'
          }}>
              <CardContent className="p-8">
                <form action="https://formspree.io/f/xjkrnyon" method="POST" onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2 animate-slide-in-right" style={{
                  animationDelay: '0.1s'
                }}>
                    <Label htmlFor="fullname" className="text-black">Vollständiger Name</Label>
                    <Input name="fullname" id="fullname" required className="bg-white border-gray-300 text-black placeholder:text-gray-400 focus:border-primary transition-all duration-300 hover:border-accent focus:scale-105" placeholder="Max Mustermann" />
                  </div>
                  
                  <div className="space-y-2 animate-slide-in-right" style={{
                  animationDelay: '0.2s'
                }}>
                    <Label htmlFor="email" className="text-black">E-Mail Adresse</Label>
                    <Input name="email" id="email" type="email" required className="bg-white border-gray-300 text-black placeholder:text-gray-400 focus:border-primary transition-all duration-300 hover:border-accent focus:scale-105" placeholder="max@example.com" />
                  </div>
                  
                  <div className="space-y-2 animate-slide-in-right" style={{
                  animationDelay: '0.3s'
                }}>
                    <Label htmlFor="company" className="text-black">Firma</Label>
                    <Input name="company" id="company" className="bg-white border-gray-300 text-black placeholder:text-gray-400 focus:border-primary transition-all duration-300 hover:border-accent focus:scale-105" placeholder="Ihr Unternehmen" />
                  </div>
                  
                  <div className="space-y-2 animate-slide-in-right" style={{
                  animationDelay: '0.4s'
                }}>
                    <Label htmlFor="position" className="text-black">Position</Label>
                    <Input name="position" id="position" className="bg-white border-gray-300 text-black placeholder:text-gray-400 focus:border-primary transition-all duration-300 hover:border-accent focus:scale-105" placeholder="Ihre Position" />
                  </div>
                  
                  <div className="md:col-span-2 space-y-2 animate-fade-up" style={{
                  animationDelay: '0.5s'
                }}>
                    <Label htmlFor="message" className="text-black">Nachricht (optional)</Label>
                    <Textarea name="message" id="message" className="bg-white border-gray-300 text-black placeholder:text-gray-400 min-h-[120px] focus:border-primary transition-all duration-300 hover:border-accent focus:scale-105" placeholder="Erzählen Sie uns von Ihrem Projekt..." />
                  </div>
                  
                  <div className="md:col-span-2 animate-fade-up" style={{
                  animationDelay: '0.6s'
                }}>
                    <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800 transition-all duration-300 py-3 text-lg hover:scale-105 hover:shadow-2xl">
                      Loslegen <ArrowRight className="ml-2 h-5 w-5 animate-bounce" />
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
              <p className="text-gray-400 mb-6 max-w-md">New Edge ist ein Creative-Tech-Studio für zukunftsorientierte Markenkommunikation. </p>
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