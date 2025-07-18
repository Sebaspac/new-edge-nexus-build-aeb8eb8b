import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Brain, Target, Eye, Rocket, Star, Lightbulb, Users, ChevronDown, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { MobileNavigation } from "@/components/MobileNavigation";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import CookieConsent from "@/components/CookieConsent";
import SEO from "@/components/SEO";
import NetworkVisualization from "@/components/NetworkVisualization";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const { scrollY } = useScroll();
  const containerRef = useRef<HTMLDivElement>(null);

  // Optimierte Parallax-Effekte (reduzierte Intensität)
  const y1 = useTransform(scrollY, [0, 1000], [0, -50]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 0.5,
        y: (e.clientY / window.innerHeight - 0.5) * 0.5
      });
    };
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Newsletter abonniert!",
      description: `Du erhältst eine Bestätigung an ${email}.`,
    });
    
    // Reset form
    e.currentTarget.reset();
  };

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Nachricht gesendet!",
      description: "Wir melden uns bald bei dir.",
    });
    
    // Reset form
    e.currentTarget.reset();
  };

  return (
    <>
      <SEO />
      <div className="relative min-h-screen bg-black text-white overflow-hidden" ref={containerRef}>
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                VAYU
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
              <Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link>
              <Link to="/lab" className="hover:text-blue-400 transition-colors">Lab</Link>
              <Link to="/studio" className="hover:text-blue-400 transition-colors">Studio</Link>
              <Link to="/media" className="hover:text-blue-400 transition-colors">Media</Link>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Kontakt</a>
            </div>

            {/* Mobile Navigation */}
            <MobileNavigation onContactClick={scrollToContact} />
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"
            style={{ y: y1, opacity }}
          />
          
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Die Zukunft der
                <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                  Digitalen Innovation
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Wir erschaffen außergewöhnliche digitale Erlebnisse durch Design, Entwicklung und strategische Beratung.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
                onClick={scrollToContact}
              >
                Projekt starten <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/20 text-white hover:bg-white/10 px-8 py-3"
                asChild
              >
                <Link to="/services">Unsere Services</Link>
              </Button>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="h-8 w-8 text-white/60" />
          </motion.div>
        </section>

        {/* Services Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Unsere <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Von der Konzeption bis zur Umsetzung - wir begleiten dich auf dem gesamten Weg deiner digitalen Transformation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: "Strategic Consulting",
                  description: "Datengetriebene Strategien für nachhaltigen digitalen Erfolg",
                  color: "border-blue-500"
                },
                {
                  icon: Zap,
                  title: "Digital Innovation",
                  description: "Zukunftsweisende Technologien für bahnbrechende Lösungen",
                  color: "border-purple-500"
                },
                {
                  icon: Eye,
                  title: "UX/UI Design",
                  description: "Intuitive und ästhetische Benutzererlebnisse",
                  color: "border-cyan-500"
                },
                {
                  icon: Rocket,
                  title: "Web Development",
                  description: "Hochperformante und skalierbare Webanwendungen",
                  color: "border-yellow-500"
                },
                {
                  icon: Target,
                  title: "Brand Strategy",
                  description: "Starke Markenidentitäten für digitale Präsenz",
                  color: "border-green-500"
                },
                {
                  icon: Lightbulb,
                  title: "Creative Solutions",
                  description: "Innovative Ansätze für komplexe Herausforderungen",
                  color: "border-red-500"
                }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  onHoverStart={() => setHoveredCard(service.title)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="relative"
                >
                  <Card className={`bg-transparent border-2 ${service.color} hover:border-opacity-80 transition-all duration-300 hover:shadow-lg h-full`}>
                    <CardContent className="p-8 text-center h-full flex flex-col justify-center">
                      <service.icon className="h-12 w-12 mx-auto mb-6 text-blue-400" />
                      <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Network Statistics Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Unser <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Netzwerk</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                Ein globales Netzwerk aus Experten, Kreativen und Innovatoren arbeitet zusammen, 
                um außergewöhnliche digitale Erlebnisse zu schaffen.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <NetworkVisualization />
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Lass uns <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">zusammenarbeiten</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Bereit für dein nächstes digitales Projekt? Kontaktiere uns und lass uns gemeinsam etwas Großartiges erschaffen.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">Kontaktiere uns</h3>
                    <form onSubmit={handleContactSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name" className="text-white">Name</Label>
                        <Input 
                          id="name" 
                          name="name" 
                          className="bg-white/10 border-white/20 text-white" 
                          required 
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-white">E-Mail</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          className="bg-white/10 border-white/20 text-white" 
                          required 
                        />
                      </div>
                      <div>
                        <Label htmlFor="message" className="text-white">Nachricht</Label>
                        <Textarea 
                          id="message" 
                          name="message" 
                          className="bg-white/10 border-white/20 text-white min-h-[120px]" 
                          required 
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      >
                        Nachricht senden
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4">Direkte Kontaktmöglichkeiten</h3>
                  <div className="space-y-4 text-gray-300">
                    <p>📧 hello@vayu.agency</p>
                    <p>📱 +49 (0) 123 456 789</p>
                    <p>📍 Berlin, Deutschland</p>
                  </div>
                </div>

                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-4">Newsletter abonnieren</h4>
                    <p className="text-gray-300 mb-4">
                      Bleibe auf dem Laufenden über die neuesten Trends und Innovationen.
                    </p>
                    <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                      <Input 
                        name="email" 
                        type="email" 
                        placeholder="Deine E-Mail" 
                        className="bg-white/10 border-white/20 text-white"
                        required 
                      />
                      <Button 
                        type="submit" 
                        variant="outline" 
                        className="border-white/20 text-white hover:bg-white/10"
                      >
                        Abonnieren
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <Link to="/">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                    VAYU
                  </span>
                </Link>
                <p className="text-gray-400 mt-4">
                  Digitale Innovation für eine bessere Zukunft.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/services" className="hover:text-white transition-colors">Web Development</Link></li>
                  <li><Link to="/services" className="hover:text-white transition-colors">UX/UI Design</Link></li>
                  <li><Link to="/services" className="hover:text-white transition-colors">Consulting</Link></li>
                  <li><Link to="/services" className="hover:text-white transition-colors">Strategy</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/studio" className="hover:text-white transition-colors">Über uns</Link></li>
                  <li><Link to="/lab" className="hover:text-white transition-colors">Lab</Link></li>
                  <li><Link to="/media" className="hover:text-white transition-colors">Media</Link></li>
                  <li><a href="#contact" className="hover:text-white transition-colors">Kontakt</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-4">Legal</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/impressum" className="hover:text-white transition-colors">Impressum</Link></li>
                  <li><a href="#" className="hover:text-white transition-colors">Datenschutz</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">AGB</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 VAYU Agency. Alle Rechte vorbehalten.</p>
            </div>
          </div>
        </footer>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-3 rounded-full shadow-lg transition-all duration-300"
          >
            <ArrowDown className="h-6 w-6 rotate-180" />
          </motion.button>
        )}

        <CookieConsent />
      </div>
    </>
  );
};

export default Index;