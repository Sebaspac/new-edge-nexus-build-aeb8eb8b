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
  const {
    scrollY
  } = useScroll();
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
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    },
    hover: {
      scale: 1.02,
      y: -5
    }
  };
  return <div ref={containerRef} className="min-h-screen bg-black overflow-hidden">
      <SEO title="New Edge - Creative Tech Studio" description="New Edge - where brand meets intelligence. Creative-Tech-Studio für KI-basierte Marketinglösungen." canonical="https://www.newedgebrand.com/" />
      {/* Mobile Navigation */}
      <MobileNavigation onContactClick={scrollToContact} theme="dark" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden">
        <motion.div style={{
        y: y1,
        opacity
      }} className="text-center relative z-10 max-w-6xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 1,
          ease: "easeOut"
        }} className="mb-6 sm:mb-8 md:mb-12">
            <motion.div className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-black tracking-tight mb-2 sm:mb-3 md:mb-4 relative" style={{
            background: "linear-gradient(45deg, #9f91f8, #4f97f0, #FFED00)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent"
          }} whileHover={{
            scale: 1.02,
            transition: {
              duration: 0.3
            }
          }}>
              <div className="animate-text-shimmer mt-16">BRAND</div>
            </motion.div>
            <motion.div initial={{
            rotateX: -90
          }} animate={{
            rotateX: 0
          }} transition={{
            delay: 0.3,
            duration: 0.8
          }} className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-black text-white italic mb-2 sm:mb-3 md:mb-4">
              INTELLIGENCE
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4,
            duration: 0.8
          }} className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl text-gray-400 font-light">
              FOR THE DIGITAL AGE
            </motion.div>
          </motion.div>
          
          <motion.p initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.6,
          duration: 0.8
        }} className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 mb-6 sm:mb-8 md:mb-10 max-w-4xl mx-auto font-light leading-relaxed px-4">
            Wir verwandeln Visionen in digitale Realitäten durch intelligente Strategien, 
            überzeugende Inhalte und innovative Technologien.
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-yellow-400 bg-clip-text text-transparent font-medium">Ein Team. Drei Ansätze. Unendliche Möglichkeiten.</span>
          </motion.p>
          
          {/* Scroll Indicator - Positioned with more spacing and properly centered on mobile */}
          <motion.div animate={{
          y: [0, 10, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }} className="flex justify-center w-full mt-16 sm:mt-20 md:mt-24 mb-8" onClick={() => {
          const nextSection = document.querySelector('.visual-section');
          nextSection?.scrollIntoView({
            behavior: 'smooth'
          });
        }}>
            <motion.div whileHover={{
            scale: 1.2
          }} whileTap={{
            scale: 0.9
          }} className="cursor-pointer">
              <ArrowDown className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Subtle Floating Elements */}
        <motion.div style={{
        x: mousePosition.x * 30,
        y: mousePosition.y * 30
      }} className="absolute top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl" />
        <motion.div style={{
        x: -mousePosition.x * 40,
        y: -mousePosition.y * 40
      }} className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-xl" />
      </section>

      {/* Visual Section */}
      <section className="visual-section py-20 bg-gradient-to-b from-black to-gray-900 relative">
        <motion.div style={{
        y: y2
      }} className="container mx-auto px-6">
        <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} whileHover={{
          scale: 1.01
        }} transition={{
          duration: 0.8
        }} style={{
          scale: useTransform(scrollY, [600, 1400], [1, 0.8]),
          borderRadius: useTransform(scrollY, [600, 1400], ["24px", "40px"]),
          opacity: useTransform(scrollY, [600, 1400], [1, 0.7]),
          willChange: "transform, opacity"
        }} className="relative h-96 md:h-[500px] bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800 rounded-3xl overflow-hidden flex items-center justify-center group">
            <motion.div className="text-center text-white z-10" style={{
            opacity: useTransform(scrollY, [600, 900], [1, 0])
          }}>
              <motion.h2 initial={{
              y: 30,
              opacity: 0
            }} whileInView={{
              y: 0,
              opacity: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.2,
              duration: 0.6
            }} className="text-4xl md:text-6xl font-black mb-4">
                <span className="inline-block">STRATEGIE </span>
                <br />
                <span className="text-5xl md:text-7xl bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent font-black inline-block">ON-POINT</span>
                <br />
                <span className="text-4xl md:text-6xl inline-block">CREATIVE TECH</span>
              </motion.h2>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }} className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 max-w-4xl mx-auto leading-tight">
            <span className="inline-block">Innovation voranbringen durch </span>
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> intelligente Automatisierung</span>
          </h2>
          <motion.p initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.3,
          duration: 0.8
        }} className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mit Media, Studio und Lab verbinden wir Inhalte, Design und Systeme – für Marken, die funktionieren und wachsen.
          </motion.p>
        </motion.div>
      </section>

      {/* Mission/Vision/Ziel Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Wir wachsen mit unseren Kunden
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Mission */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.1,
            duration: 0.6
          }}>
              <Card className="bg-transparent border-2 border-purple-500 h-full hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
                <CardContent className="p-8 text-center">
                  <div className="text-purple-400 text-sm font-semibold mb-4 tracking-wider">UNSERE MISSION</div>
                  <p className="text-gray-200 leading-relaxed">
                    Mit Media, Studio und Lab verbinden wir Inhalte, Design und Systeme — für Marken, die funktionieren und wachsen.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Vision */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.2,
            duration: 0.6
          }}>
              <Card className="bg-transparent border-2 border-blue-500 h-full hover:border-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                <CardContent className="p-8 text-center">
                  <div className="text-blue-400 text-sm font-semibold mb-4 tracking-wider">UNSERE VISION</div>
                  <p className="text-gray-200 leading-relaxed">
                    Wir gestalten eine neue Generation von Marken: automatisiert, strukturiert und sichtbar.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Ziel */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.3,
            duration: 0.6
          }}>
              <Card className="bg-transparent border-2 border-yellow-500 h-full hover:border-yellow-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/20">
                <CardContent className="p-8 text-center">
                  <div className="text-yellow-400 text-sm font-semibold mb-4 tracking-wider">UNSER ZIEL</div>
                  <p className="text-gray-200 leading-relaxed">
                    Menschen und Unternehmen den Zugang zu Innovation bieten für einfachere und effektivere Abläufe.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Warum <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">New Edge?</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* USP 1 */}
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.1,
            duration: 0.6
          }} className="flex items-center space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">01</div>
              <Card className="flex-1 bg-white/5 border border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Impact durch Automatisierung</h3>
                  <p className="text-gray-300">Intelligente Systeme steigern Ihre Effizienz nachhaltig</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* USP 2 */}
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.2,
            duration: 0.6
          }} className="flex items-center space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">02</div>
              <Card className="flex-1 bg-white/5 border border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Marketingexpertise trifft technische Umsetzung</h3>
                  <p className="text-gray-300">Perfekte Symbiose aus Strategie und Innovation</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* USP 3 */}
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.3,
            duration: 0.6
          }} className="flex items-center space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">03</div>
              <Card className="flex-1 bg-white/5 border border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Zugänglichkeit & Klarheit statt Komplexität</h3>
                  <p className="text-gray-300">Einfache Lösungen für komplexe Herausforderungen</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* USP 4 */}
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.4,
            duration: 0.6
          }} className="flex items-center space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">04</div>
              <Card className="flex-1 bg-white/5 border border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Individuelle Setups ohne Standardbausteine</h3>
                  <p className="text-gray-300">Maßgeschneiderte Lösungen für Ihre spezifischen Anforderungen</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Unternehmensvorteile Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full text-lg font-bold mb-8">
              Vorteile für Ihr Unternehmen
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Persönlich, transparent, individuell
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Vorteil 1 */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.1,
            duration: 0.6
          }}>
              <Card className="bg-white/5 border border-white/10 h-full hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Brain className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-4">PERSÖNLICHE BERATUNG</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Individuelle Betreuung und maßgeschneiderte Strategien für Ihr Unternehmen
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Vorteil 2 */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.2,
            duration: 0.6
          }}>
              <Card className="bg-white/5 border border-white/10 h-full hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-4">MODULAR & SKALIERBAR</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Flexible Lösungen, die mit Ihrem Unternehmen wachsen und sich anpassen
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Vorteil 3 */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.3,
            duration: 0.6
          }}>
              <Card className="bg-white/5 border border-white/10 h-full hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Star className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-4">FAIRE PREISE</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Transparente Kostenstruktur ohne versteckte Gebühren für maximale Planungssicherheit
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Vorteil 4 */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.4,
            duration: 0.6
          }}>
              <Card className="bg-white/5 border border-white/10 h-full hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Eye className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-4">TRANSPARENTER ABLAUF</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Klare Kommunikation und nachvollziehbare Prozesse in jeder Projektphase
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Network Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Unser <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Netzwerk</span>
            </h2>
          </motion.div>
          
          <NetworkVisualization />
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-section relative py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <motion.div className="container mx-auto px-6">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="text-center mb-16">
            <motion.div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-bold mb-8 sm:mb-8" whileHover={{
            scale: 1.05
          }}>
              Drei Bereiche
            </motion.div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">Ihr Weg zum Erfolg</h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 relative max-w-5xl mx-auto">
              
              {/* Studio Card */}
              <motion.div variants={cardVariants} initial="hidden" whileInView="visible" whileHover="hover" viewport={{
              once: true
            }} onHoverStart={() => setHoveredCard('studio')} onHoverEnd={() => setHoveredCard(null)} className="relative group" transition={{
              duration: 0.6
            }}>
                <Card className="bg-white/5 border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm h-full min-h-[320px] rounded-xl">
                  <CardContent className="p-6 text-center relative overflow-hidden h-full flex flex-col justify-between">
                    
                    <div className="relative z-10 flex-1 flex flex-col">
                      <Link to="/studio">
                        <motion.div whileHover={{
                        scale: 1.05
                      }} className="inline-block bg-purple-600 text-white py-2 rounded-lg text-sm font-semibold mb-4 px-[12px] cursor-pointer hover:bg-purple-700 transition-colors">New Edge Studio</motion.div>
                      </Link>
                      
                      <p className="text-white mb-4 leading-relaxed flex-1 text-base">
                        Das Fundament: Alles wird strategisch vorbereitet, durchdacht und geplant.
                      </p>
                      <ul className="space-y-2 text-gray-300 mb-6 text-left text-sm">
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                          Strategie & Markenidentität
                        </li>
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                          Visuelles Konzept
                        </li>
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                          Digitale Struktur & Funnel-Logik
                        </li>
                      </ul>
                    </div>
                    
                    <motion.div whileHover={{
                    scale: 1.02
                  }} whileTap={{
                    scale: 0.98
                  }} className="relative z-10 mt-auto">
                      <Button onClick={scrollToContact} className="bg-purple-600 text-white hover:bg-purple-700 w-full transition-all duration-300 rounded-lg py-1 text-xs">
                        Projekt starten <ArrowRight className="ml-1 w-2.5 h-2.5" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>

              </motion.div>

              {/* Media Card */}
              <motion.div variants={cardVariants} initial="hidden" whileInView="visible" whileHover="hover" viewport={{
              once: true
            }} transition={{
              delay: 0.2,
              duration: 0.6
            }} onHoverStart={() => setHoveredCard('media')} onHoverEnd={() => setHoveredCard(null)} className="relative group">
                <Card className="bg-white/5 border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm h-full min-h-[320px] rounded-xl">
                  <CardContent className="p-6 text-center relative overflow-hidden h-full flex flex-col justify-between">
                    
                    <div className="relative z-10 flex-1 flex flex-col">
                      <motion.div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold mb-4" whileHover={{
                      scale: 1.05
                    }}>
                        New Edge Media
                      </motion.div>
                      
                      <p className="text-white mb-4 leading-relaxed flex-1 text-base">
                        Produziert, veröffentlicht und steuert alles, was nach außen sichtbar wird.
                      </p>
                      <ul className="space-y-2 text-gray-300 mb-6 text-left text-sm">
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></div>
                          Content-Produktion & Reichweite
                        </li>
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></div>
                          Marketing & Sichtbarkeit
                        </li>
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></div>
                          Creative Content Production
                        </li>
                      </ul>
                    </div>
                    
                    <motion.div whileHover={{
                    scale: 1.02
                  }} whileTap={{
                    scale: 0.98
                  }} className="relative z-10 mt-auto">
                      <Button onClick={scrollToContact} className="bg-blue-600 text-white hover:bg-blue-700 w-full transition-all duration-300 rounded-lg py-1 text-xs">
                        Projekt besprechen <ArrowRight className="ml-1 w-2.5 h-2.5" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>

              </motion.div>

              {/* Lab Card */}
              <motion.div variants={cardVariants} initial="hidden" whileInView="visible" whileHover="hover" viewport={{
              once: true
            }} transition={{
              delay: 0.4,
              duration: 0.6
            }} onHoverStart={() => setHoveredCard('lab')} onHoverEnd={() => setHoveredCard(null)} className="relative group">
                <Card className="bg-white/5 border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm h-full min-h-[320px] rounded-xl">
                  <CardContent className="p-6 text-center relative overflow-hidden h-full flex flex-col justify-between">
                    
                    <div className="relative z-10 flex-1 flex flex-col">
                      <motion.div className="inline-block text-black px-4 py-2 rounded-lg text-sm font-semibold mb-4" style={{
                      background: '#FFED00'
                    }} whileHover={{
                      scale: 1.05
                    }}>
                        New Edge Lab
                      </motion.div>
                      
                      <p className="mb-4 leading-relaxed flex-1 text-base text-white">
                        Macht aus Ideen reale, funktionierende Systeme – sicher, automatisiert, effizient.
                      </p>
                      <ul className="space-y-2 text-gray-300 mb-6 text-left text-sm">
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></div>
                          KI-Integration & Automation
                        </li>
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></div>
                          Backend & Tech-Implementierung
                        </li>
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></div>
                          Webentwicklung & Prozessautomatisierung
                        </li>
                      </ul>
                    </div>
                    
                    <motion.div whileHover={{
                    scale: 1.02
                  }} whileTap={{
                    scale: 0.98
                  }} className="relative z-10 mt-auto">
                      <Button onClick={scrollToContact} className="text-black hover:text-gray-800 w-full transition-all duration-300 rounded-lg py-1 text-xs" style={{
                      background: '#FFED00'
                    }}>
                        Projekt starten <ArrowRight className="ml-1 w-2.5 h-2.5" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          <div className="text-center mt-16">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.6,
            duration: 0.6
          }} whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }}>
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 px-8 py-4 transition-all duration-300" asChild>
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
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8
          }} className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-white">
                Bereit für den nächsten <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Schritt?</span>
              </h2>
              <p className="text-xl text-gray-300">
                Lassen Sie uns über Ihr Projekt sprechen.
              </p>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            scale: 0.95
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8
          }} whileHover={{
            scale: 1.01
          }}>
              <Card className="bg-gray-900/50 border border-purple-500/20 shadow-2xl backdrop-blur-lg">
                <CardContent className="p-8">
                  <form action="https://formspree.io/f/xjkrnyon" method="POST" onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                    <motion.div initial={{
                    opacity: 0,
                    x: -20
                  }} whileInView={{
                    opacity: 1,
                    x: 0
                  }} viewport={{
                    once: true
                  }} transition={{
                    delay: 0.1,
                    duration: 0.5
                  }} className="space-y-2">
                      <Label htmlFor="fullname" className="text-white">Vollständiger Name</Label>
                      <Input name="fullname" id="fullname" required className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 transition-all duration-300" placeholder="Max Mustermann" />
                    </motion.div>
                    
                    <motion.div initial={{
                    opacity: 0,
                    x: 20
                  }} whileInView={{
                    opacity: 1,
                    x: 0
                  }} viewport={{
                    once: true
                  }} transition={{
                    delay: 0.2,
                    duration: 0.5
                  }} className="space-y-2">
                      <Label htmlFor="email" className="text-white">E-Mail Adresse</Label>
                      <Input name="email" id="email" type="email" required className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 transition-all duration-300" placeholder="max@example.com" />
                    </motion.div>
                    
                    <motion.div initial={{
                    opacity: 0,
                    x: -20
                  }} whileInView={{
                    opacity: 1,
                    x: 0
                  }} viewport={{
                    once: true
                  }} transition={{
                    delay: 0.3,
                    duration: 0.5
                  }} className="space-y-2">
                      <Label htmlFor="company" className="text-white">Firma</Label>
                      <Input name="company" id="company" className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 transition-all duration-300" placeholder="Ihr Unternehmen" />
                    </motion.div>
                    
                    <motion.div initial={{
                    opacity: 0,
                    x: 20
                  }} whileInView={{
                    opacity: 1,
                    x: 0
                  }} viewport={{
                    once: true
                  }} transition={{
                    delay: 0.4,
                    duration: 0.5
                  }} className="space-y-2">
                      <Label htmlFor="position" className="text-white">Position</Label>
                      <Input name="position" id="position" className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 transition-all duration-300" placeholder="Ihre Position" />
                    </motion.div>
                    
                    <motion.div initial={{
                    opacity: 0,
                    y: 20
                  }} whileInView={{
                    opacity: 1,
                    y: 0
                  }} viewport={{
                    once: true
                  }} transition={{
                    delay: 0.5,
                    duration: 0.5
                  }} className="md:col-span-2 space-y-2">
                      <Label htmlFor="message" className="text-white">Nachricht (optional)</Label>
                      <Textarea name="message" id="message" className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 min-h-[120px] focus:border-purple-500 transition-all duration-300" placeholder="Erzählen Sie uns von Ihrem Projekt..." />
                    </motion.div>
                    
                    <motion.div initial={{
                    opacity: 0,
                    y: 20
                  }} whileInView={{
                    opacity: 1,
                    y: 0
                  }} viewport={{
                    once: true
                  }} transition={{
                    delay: 0.6,
                    duration: 0.5
                  }} className="md:col-span-2">
                      <motion.div whileHover={{
                      scale: 1.02
                    }} whileTap={{
                      scale: 0.98
                    }}>
                        <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transition-all duration-300 py-3 text-lg animate-glow-pulse hover-lift">
                          Loslegen <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </motion.div>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/80 text-white py-12 sm:py-16 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="sm:col-span-2">
              <div className="flex items-center mb-4">
                <img alt="New Edge Logo" className="h-6 w-6 sm:h-8 sm:w-8 mr-2 sm:mr-3" src="/lovable-uploads/90e4fdca-8c29-48f7-9568-686b611a62f4.png" />
                <div className="text-2xl sm:text-3xl font-bold">
                  New Edge<span className="text-purple-400"></span>
                </div>
              </div>
              <p className="text-gray-400 mb-4 sm:mb-6 max-w-md text-sm sm:text-base">New Edge ist ein Creative-Tech-Studio für zukunftsorientierte Markenkommunikation. </p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/new-edge-brand/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                  <span className="text-xs sm:text-sm">in</span>
                </a>
                
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-white text-sm sm:text-base">Services</h4>
              <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                <li><Link to="/studio" className="hover:text-white transition-colors">STUDIO</Link></li>
                <li><Link to="/media" className="hover:text-white transition-colors">MEDIA</Link></li>
                <li><Link to="/lab" className="hover:text-white transition-colors">LAB</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-white text-sm sm:text-base">Kontakt</h4>
              <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                <li>info@newedgebrand.com</li>
                <li>+49 15750998236</li>
                <li>Deutschland</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs sm:text-sm">©2024 New Edge. Alle Rechte vorbehalten.</p>
            <div className="flex space-x-4 sm:space-x-6 mt-3 sm:mt-4 md:mt-0">
              <Link to="/impressum" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">Impressum</Link>
              
              
            </div>
          </div>
        </div>
      </footer>

      {/* Cookie Consent */}
      <CookieConsent />

      {/* Scroll to Top Button */}
      {showScrollTop && <motion.button initial={{
      opacity: 0,
      scale: 0
    }} animate={{
      opacity: 1,
      scale: 1
    }} exit={{
      opacity: 0,
      scale: 0
    }} onClick={() => window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })} className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-glow-pulse hover-lift" whileHover={{
      scale: 1.1
    }} whileTap={{
      scale: 0.9
    }}>
          <ArrowRight className="w-6 h-6 transform -rotate-90" />
        </motion.button>}
    </div>;
};
export default Index;