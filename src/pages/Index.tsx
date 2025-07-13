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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const { scrollY } = useScroll();
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax effects
  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -400]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
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

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    },
    hover: {
      scale: 1.05,
      y: -10
    }
  };

  return <div ref={containerRef} className="min-h-screen bg-black overflow-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }} 
        animate={{ y: 0 }} 
        className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-purple-500/30"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              whileHover={{ scale: 1.1 }} 
              className="flex items-center"
            >
              <img alt="New Edge Logo" className="h-8 w-8 mr-3" src="/lovable-uploads/93b90410-bdbd-4098-938c-5ff9f158253c.png" />
              <div className="text-2xl font-bold text-white">
                New Edge<span className="text-purple-400"></span>
              </div>
            </motion.div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-white font-medium">Home</Link>
              
              <div className="relative flex items-center">
                <Link to="/services" className="text-gray-300 hover:text-white transition-all duration-300">
                  Services
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger className="text-gray-300 hover:text-white transition-all duration-300 ml-1">
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-black/90 border border-purple-500/30 shadow-lg backdrop-blur-lg">
                    <DropdownMenuItem asChild>
                      <Link to="/studio" className="w-full text-gray-300 hover:text-white hover:bg-purple-500/20">
                        New Edge Studio
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/media" className="w-full text-gray-300 hover:text-white hover:bg-blue-500/20">
                        New Edge Media
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/lab" className="w-full text-gray-300 hover:text-white hover:bg-yellow-500/20">
                        New Edge Lab
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Button onClick={scrollToContact} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700">
                  Kontakt
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <motion.div 
          style={{ y: y1, opacity }} 
          className="text-center relative z-10"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }} 
            className="mb-12"
          >
            <motion.div 
              animate={{
                background: ["linear-gradient(45deg, #9f91f8, #4f97f0, #FFED00)", "linear-gradient(45deg, #4f97f0, #FFED00, #9f91f8)", "linear-gradient(45deg, #FFED00, #9f91f8, #4f97f0)"]
              }} 
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }} 
              className="inline-block text-transparent bg-clip-text text-8xl md:text-9xl font-black tracking-tight"
            >
              BRAND
            </motion.div>
            <br />
            <motion.div 
              initial={{ rotateX: -90 }} 
              animate={{ rotateX: 0 }} 
              transition={{ delay: 0.5, duration: 0.8 }} 
              className="text-8xl md:text-9xl font-black text-white italic mb-4"
            >
              INTELLIGENCE
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 1, duration: 0.8 }} 
              className="text-4xl md:text-6xl text-gray-400 font-light"
            >
              FOR CONSUMER BRANDS
            </motion.div>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1.5, duration: 0.8 }} 
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto font-light leading-relaxed"
          >
            New Edge ist eine der innovativsten Creative-Tech-Agentur für intelligente Markenkommunikation in Europa
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-yellow-400 bg-clip-text text-transparent font-medium">Drei spezialisierte Teams. Ein Ziel.</span>
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ duration: 2, repeat: Infinity }} 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
            onClick={() => {
              const nextSection = document.querySelector('.services-section');
              nextSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowDown className="w-8 h-8 text-purple-400" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Interactive Floating Elements */}
        <motion.div 
          style={{ x: mousePosition.x * 100, y: mousePosition.y * 100 }} 
          className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl" 
        />
        <motion.div 
          style={{ x: -mousePosition.x * 150, y: -mousePosition.y * 150 }} 
          className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-xl" 
        />
      </section>

      {/* Video/Visual Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
        <motion.div style={{ y: y2 }} className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            whileHover={{ scale: 1.02 }} 
            transition={{ duration: 0.8 }} 
            className="relative h-96 md:h-[500px] bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800 rounded-3xl overflow-hidden flex items-center justify-center group"
          >
            <div className="text-center text-white z-10">
              <motion.h2 
                initial={{ y: 50, opacity: 0 }} 
                whileInView={{ y: 0, opacity: 1 }} 
                viewport={{ once: true }} 
                transition={{ delay: 0.2, duration: 0.8 }} 
                className="text-4xl md:text-6xl font-black mb-4"
              >
                <span className="inline-block">STRATEGIE </span>
                <br />
                <span className="text-5xl md:text-7xl bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent font-black inline-block">ON-POINT</span>
                <br />
                <span className="text-4xl md:text-6xl inline-block">CREATIVE TECH</span>
              </motion.h2>
            </div>
            
            {/* Animated background pattern */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 0.1 }} 
              transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }} 
              className="absolute inset-0 bg-black/10" 
            />
            <motion.div 
              initial={{ x: "-100%" }} 
              whileInView={{ x: "100%" }} 
              viewport={{ once: true }} 
              transition={{ duration: 2, ease: "easeInOut" }} 
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent" 
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8 }} 
          className="container mx-auto px-6 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 max-w-4xl mx-auto leading-tight">
            <span className="inline-block hover:scale-105 transition-transform duration-300">Innovation voranbringen durch</span>
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent hover:from-yellow-400 hover:to-purple-400 transition-all duration-500"> intelligente Automatisierung</span>
          </h2>
          <motion.p 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.3, duration: 0.8 }} 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Mit Media, Studio und Lab verbinden wir Inhalte, Design und Systeme – für Marken, die funktionieren und wachsen.
          </motion.p>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="services-section relative py-16 bg-gradient-to-b from-black via-gray-900 to-black">
        <motion.div style={{ y: y2 }} className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }} 
            className="text-center mb-12"
          >
            <motion.div 
              animate={{
                boxShadow: ["0 0 20px #9f91f8", "0 0 40px #4f97f0", "0 0 20px #FFED00", "0 0 40px #9f91f8"]
              }} 
              transition={{ duration: 4, repeat: Infinity }} 
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-12 py-6 rounded-full text-2xl font-bold mb-6"
            >
              Drei Bereiche
            </motion.div>
            <h2 className="text-6xl font-bold text-white mb-6">Ihr Weg zum Erfolg</h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
              
              {/* Studio Card */}
              <motion.div 
                variants={cardVariants}
                initial="hidden" 
                whileInView="visible" 
                whileHover="hover" 
                viewport={{ once: true }} 
                onHoverStart={() => setHoveredCard('studio')} 
                onHoverEnd={() => setHoveredCard(null)} 
                className="relative group"
              >
                <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-purple-500/30 shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 backdrop-blur-lg">
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    <motion.div 
                      animate={hoveredCard === 'studio' ? {
                        background: ["radial-gradient(circle, rgba(159,145,248,0.1) 0%, transparent 70%)", "radial-gradient(circle, rgba(236,72,153,0.2) 0%, transparent 70%)", "radial-gradient(circle, rgba(159,145,248,0.1) 0%, transparent 70%)"]
                      } : {}} 
                      transition={{ duration: 2, repeat: Infinity }} 
                      className="absolute inset-0" 
                    />
                    
                    <motion.div 
                      animate={hoveredCard === 'studio' ? {
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      } : {}} 
                      transition={{ duration: 2, repeat: Infinity }} 
                      className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-lg font-bold mb-6 relative z-10"
                    >
                      New Edge Studio
                    </motion.div>
                    
                    <h3 className="text-3xl font-bold text-white mb-4 relative z-10">STUDIO</h3>
                    <p className="text-lg text-purple-200 mb-6 leading-relaxed relative z-10">
                      Das Fundament: Alles wird strategisch vorbereitet, durchdacht und geplant.
                    </p>
                    <ul className="space-y-3 text-gray-300 mb-8 relative z-10">
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
                    
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 w-full relative z-10" asChild>
                        <Link to="/studio">
                          Strategie entwickeln <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>

                {/* Animated Arrow */}
                <div className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2 z-20">
                  <motion.div animate={{ x: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                    <ArrowRight className="w-8 h-8 text-purple-400" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Media Card */}
              <motion.div 
                variants={cardVariants}
                initial="hidden" 
                whileInView="visible" 
                whileHover="hover" 
                viewport={{ once: true }} 
                transition={{ delay: 0.2 }} 
                onHoverStart={() => setHoveredCard('media')} 
                onHoverEnd={() => setHoveredCard(null)} 
                className="relative group"
              >
                <Card className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border border-blue-500/30 shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 backdrop-blur-lg">
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    <motion.div 
                      animate={hoveredCard === 'media' ? {
                        background: ["radial-gradient(circle, rgba(79,151,240,0.1) 0%, transparent 70%)", "radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)", "radial-gradient(circle, rgba(79,151,240,0.1) 0%, transparent 70%)"]
                      } : {}} 
                      transition={{ duration: 2, repeat: Infinity }} 
                      className="absolute inset-0" 
                    />
                    
                    <motion.div 
                      animate={hoveredCard === 'media' ? {
                        scale: [1, 1.1, 1],
                        rotate: [0, -5, 5, 0]
                      } : {}} 
                      transition={{ duration: 2, repeat: Infinity }} 
                      className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-full text-lg font-bold mb-6 relative z-10"
                    >
                      New Edge Media
                    </motion.div>
                    
                    <h3 className="text-3xl font-bold text-white mb-4 relative z-10">MEDIA</h3>
                    <p className="text-lg text-blue-200 mb-6 leading-relaxed relative z-10">
                      Produziert, veröffentlicht und steuert alles, was nach außen sichtbar wird.
                    </p>
                    <ul className="space-y-3 text-gray-300 mb-8 relative z-10">
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
                    
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 w-full relative z-10" asChild>
                        <Link to="/media">
                          Content produzieren <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>

                {/* Animated Arrow */}
                <div className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2 z-20">
                  <motion.div animate={{ x: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}>
                    <ArrowRight className="w-8 h-8 text-blue-400" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Lab Card */}
              <motion.div 
                variants={cardVariants}
                initial="hidden" 
                whileInView="visible" 
                whileHover="hover" 
                viewport={{ once: true }} 
                transition={{ delay: 0.4 }} 
                onHoverStart={() => setHoveredCard('lab')} 
                onHoverEnd={() => setHoveredCard(null)} 
                className="relative group"
              >
                <Card className="bg-gradient-to-br from-yellow-900/50 to-amber-900/50 border border-yellow-500/30 shadow-2xl hover:shadow-yellow-500/20 transition-all duration-700 backdrop-blur-lg">
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    <motion.div 
                      animate={hoveredCard === 'lab' ? {
                        background: ["radial-gradient(circle, rgba(255,237,0,0.1) 0%, transparent 70%)", "radial-gradient(circle, rgba(217,119,6,0.2) 0%, transparent 70%)", "radial-gradient(circle, rgba(255,237,0,0.1) 0%, transparent 70%)"]
                      } : {}} 
                      transition={{ duration: 2, repeat: Infinity }} 
                      className="absolute inset-0" 
                    />
                    
                    <motion.div 
                      animate={hoveredCard === 'lab' ? {
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      } : {}} 
                      transition={{ duration: 2, repeat: Infinity }} 
                      className="inline-block bg-gradient-to-r from-yellow-600 to-amber-600 text-black px-6 py-3 rounded-full text-lg font-bold mb-6 relative z-10"
                    >
                      New Edge Lab
                    </motion.div>
                    
                    <h3 className="text-3xl font-bold text-white mb-4 relative z-10">LAB</h3>
                    <p className="text-lg text-yellow-200 mb-6 leading-relaxed relative z-10">
                      Macht aus Ideen reale, funktionierende Systeme – sicher, automatisiert, effizient.
                    </p>
                    <ul className="space-y-3 text-gray-300 mb-8 relative z-10">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                        KI-Integration & Automation
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                        Backend & Tech-Implementierung
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                        Webentwicklung & Prozessautomatisierung
                      </li>
                    </ul>
                    
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button className="bg-gradient-to-r from-yellow-600 to-amber-600 text-black hover:from-yellow-700 hover:to-amber-700 w-full relative z-10" asChild>
                        <Link to="/lab">
                          Technologie implementieren <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          <div className="text-center mt-20">
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.6 }} 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 px-8 py-4" asChild>
                <Link to="/services">
                  Alle Services entdecken <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Contact Form */}
      <section id="contact-section" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8 }} 
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4 text-white">
                Bereit für den nächsten <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Schritt?</span>
              </h2>
              <p className="text-xl text-gray-300">
                Lassen Sie uns über Ihr Projekt sprechen.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="bg-gray-900/50 border border-purple-500/30 shadow-2xl backdrop-blur-lg">
                <CardContent className="p-8">
                  <form action="https://formspree.io/f/xjkrnyon" method="POST" onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                    <motion.div 
                      initial={{ opacity: 0, x: -50 }} 
                      whileInView={{ opacity: 1, x: 0 }} 
                      viewport={{ once: true }} 
                      transition={{ delay: 0.1, duration: 0.5 }} 
                      className="space-y-2"
                    >
                      <Label htmlFor="fullname" className="text-white">Vollständiger Name</Label>
                      <Input name="fullname" id="fullname" required className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 transition-all duration-300" placeholder="Max Mustermann" />
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, x: 50 }} 
                      whileInView={{ opacity: 1, x: 0 }} 
                      viewport={{ once: true }} 
                      transition={{ delay: 0.2, duration: 0.5 }} 
                      className="space-y-2"
                    >
                      <Label htmlFor="email" className="text-white">E-Mail Adresse</Label>
                      <Input name="email" id="email" type="email" required className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 transition-all duration-300" placeholder="max@example.com" />
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, x: -50 }} 
                      whileInView={{ opacity: 1, x: 0 }} 
                      viewport={{ once: true }} 
                      transition={{ delay: 0.3, duration: 0.5 }} 
                      className="space-y-2"
                    >
                      <Label htmlFor="company" className="text-white">Firma</Label>
                      <Input name="company" id="company" className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 transition-all duration-300" placeholder="Ihr Unternehmen" />
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, x: 50 }} 
                      whileInView={{ opacity: 1, x: 0 }} 
                      viewport={{ once: true }} 
                      transition={{ delay: 0.4, duration: 0.5 }} 
                      className="space-y-2"
                    >
                      <Label htmlFor="position" className="text-white">Position</Label>
                      <Input name="position" id="position" className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 transition-all duration-300" placeholder="Ihre Position" />
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 50 }} 
                      whileInView={{ opacity: 1, y: 0 }} 
                      viewport={{ once: true }} 
                      transition={{ delay: 0.5, duration: 0.5 }} 
                      className="md:col-span-2 space-y-2"
                    >
                      <Label htmlFor="message" className="text-white">Nachricht (optional)</Label>
                      <Textarea name="message" id="message" className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 min-h-[120px] focus:border-purple-500 transition-all duration-300" placeholder="Erzählen Sie uns von Ihrem Projekt..." />
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 50 }} 
                      whileInView={{ opacity: 1, y: 0 }} 
                      viewport={{ once: true }} 
                      transition={{ delay: 0.6, duration: 0.5 }} 
                      className="md:col-span-2"
                    >
                      <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transition-all duration-300 py-3 text-lg">
                        Loslegen <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
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
                  New Edge<span className="text-purple-400"></span>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">New Edge ist ein Creative-Tech-Studio für zukunftsorientierte Markenkommunikation. </p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/new-edge-brand/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                  <span className="text-sm">in</span>
                </a>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
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