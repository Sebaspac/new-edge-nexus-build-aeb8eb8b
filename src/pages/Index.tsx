import { useEffect, useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Brain, Target, Eye, Rocket, Star, Lightbulb, Users, ChevronDown, ArrowDown, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { MobileNavigation } from "@/components/MobileNavigation";
import { OptimizedImage } from "@/components/OptimizedImage";
import CookieConsent from "@/components/CookieConsent";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollAnimation, useScrollAnimation } from "@/hooks/useScrollAnimation";
const Index = () => {
  const {
    t
  } = useLanguage();
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [activeSection, setActiveSection] = useState(0);
  const {
    scrollY
  } = useScroll();
  const containerRef = useRef<HTMLDivElement>(null);

  // 🎭 Parallax transforms
  const heroY = useTransform(scrollY, [0, 1000], [0, -200]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.9]);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  // ✅ KORRIGIERTE handleSubmit Funktion - alle 6 Felder werden korrekt übertragen
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted - handleSubmit called');
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Log all form fields to debug
    console.log('Raw FormData entries:');
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: "${value}"`);
    }

    // ✅ KORRIGIERT: Deutsche Feldnamen für Webhook + korrekte Feldzuordnung
    const data = {
      name: formData.get('name')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      position: formData.get('position')?.toString() || '',
      firma: formData.get('firma')?.toString() || '',
      // ← firma (nicht company!)
      telefon: formData.get('telefon')?.toString() || '',
      // ← telefon (nicht phone!)
      nachricht: formData.get('nachricht')?.toString() || '' // ← nachricht (nicht message!)
    };
    console.log('Complete data object to send to webhook:', data);
    console.log('Firma:', data.firma);
    console.log('Telefon:', data.telefon);
    console.log('Nachricht:', data.nachricht);
    try {
      console.log('Attempting to send to webhook...');
      const response = await fetch('https://n8n-pro-oh9w.onrender.com/webhook/kontakt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);
      if (response.ok) {
        console.log('Form submitted successfully');
        toast({
          title: "Wir designen für dich",
          description: "Vielen Dank für deine Anfrage! Wir melden uns bald bei dir.",
          duration: 5000
        });
        form.reset();
      } else {
        const errorText = await response.text();
        console.error('Server error:', errorText);
        throw new Error(`Server responded with ${response.status}: ${errorText}`);
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
  }, []);
  const services = [{
    icon: Sparkles,
    title: "Studio Design",
    description: "Visuelles Storytelling und Brand-Design, das im Gedächtnis bleibt.",
    gradient: "from-secondary to-accent"
  }, {
    icon: Brain,
    title: "Media Intelligence",
    description: "KI-gestützte Inhaltsstrategien, die Ihre Zielgruppe erreichen und konvertieren.",
    gradient: "from-primary to-secondary"
  }, {
    icon: Zap,
    title: "Lab Automation",
    description: "Intelligente Systeme und Workflows für maximale Effizienz.",
    gradient: "from-accent to-primary"
  }];
  const stats = [{
    number: "150+",
    label: "Projekte realisiert",
    icon: Target
  }, {
    number: "98%",
    label: "Kundenzufriedenheit",
    icon: Star
  }, {
    number: "5x",
    label: "Durchschnittliche Effizienzsteigerung",
    icon: Rocket
  }, {
    number: "24/7",
    label: "Support verfügbar",
    icon: Users
  }];
  return <div ref={containerRef} className="min-h-screen bg-background overflow-x-hidden">
      {/* 📱 Mobile Navigation */}
      <MobileNavigation onContactClick={scrollToContact} theme="dark" />

      {/* 🚀 Hero Section */}
      <section className="hero-section relative">
        {/* 🌌 Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-surface-elevated">
          {/* ✨ Floating Orbs */}
          <motion.div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 180, 360]
        }} transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }} />
          <motion.div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.6, 0.3, 0.6],
          rotate: [360, 180, 0]
        }} transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }} />
          <motion.div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent/15 rounded-full blur-2xl" animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 0.8, 1]
        }} transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }} />

          {/* 🌊 Gradient Mesh */}
          <div className="absolute inset-0 bg-gradient-glow opacity-50" />
          
          {/* ⚡ Animated Grid */}
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" className="animate-parallax">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        {/* 🎯 Hero Content */}
        <motion.div style={{
        y: heroY,
        opacity: heroOpacity,
        scale: heroScale
      }} className="relative z-10 container-xl hero-section flex flex-col items-center justify-center text-center">
          <motion.div initial={{
          opacity: 0,
          y: 100
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 1,
          ease: "easeOut"
        }} className="max-w-6xl mx-auto">
            {/* 🎨 Main Headline */}
            <motion.h1 initial={{
            opacity: 0,
            y: 50
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4,
            duration: 0.8
          }} className="text-display-xl font-black mb-6">
              <span className="block bg-gradient-primary bg-clip-text text-transparent animate-gradient">
                BRAND
              </span>
              <span className="block text-foreground">
                INTELLIGENCE
              </span>
              <span className="block text-display-lg text-muted-foreground">
                FOR THE DIGITAL AGE
              </span>
            </motion.h1>

            {/* 📝 Description */}
            <motion.p initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.6,
            duration: 0.8
          }} className="text-body-xl max-w-3xl mx-auto mb-12 leading-relaxed text-base text-slate-50">
              {t('home.hero.description')} <br />
              
            </motion.p>

            {/* 🔥 CTA Buttons */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.8,
            duration: 0.6
          }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button onClick={scrollToContact} size="lg" className="group btn-primary hover-magnetic">
                Projekt starten
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="btn-secondary hover-glow" asChild>
                <Link to="/services">
                  Unsere Services entdecken
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* 🔽 Scroll Indicator */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1.2,
        duration: 0.6
      }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <motion.div animate={{
          y: [0, 10, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }} className="flex flex-col items-center gap-2 text-muted-foreground cursor-pointer hover-scale" onClick={() => {
          const nextSection = document.querySelector('.relative.-mt-32.pt-40.pb-20');
          if (nextSection) {
            nextSection.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }} whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.95
        }}>
            <span className="text-body-sm">Scroll to explore</span>
            <motion.div animate={{
            y: [0, 5, 0]
          }} transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: 0.5
          }}>
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* 🚀 New Edge Innovation Module */}
      <ScrollAnimation animation="fadeUp" className="relative -mt-32 pt-40 pb-20 bg-gradient-subtle overflow-hidden">
        {/* Dynamic background elements */}
        <motion.div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl" animate={{
        y: [0, -20, 0],
        scale: [1, 1.1, 1]
      }} transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }} />
        <motion.div className="absolute bottom-20 right-20 w-32 h-32 bg-accent/10 rounded-full blur-xl" animate={{
        y: [0, 15, 0],
        scale: [1, 0.9, 1]
      }} transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }} />
        
        <div className="container-xl">
          {/* Header */}
          <ScrollAnimation animation="scaleIn" delay={0.1} className="text-center mb-16">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} className="mb-6">
              <span className="inline-block text-body-sm font-semibold text-primary tracking-wider uppercase mb-4">
                New Edge
              </span>
              <h2 className="text-h1 font-bold text-foreground">
                Die Agentur für Innovation
              </h2>
            </motion.div>
          </ScrollAnimation>

          {/* Main Content Grid */}
          <motion.div className="grid lg:grid-cols-2 gap-12 items-center mb-20" initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} variants={{
          hidden: {
            opacity: 0
          },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3,
              delayChildren: 0.2
            }
          }
        }}>
            {/* Left: Core Philosophy */}
            <motion.div variants={{
            hidden: {
              opacity: 0,
              x: -50
            },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut"
              }
            }
          }} className="space-y-6">
              <Card className="card-modern p-8 bg-gradient-to-br from-background to-surface border-primary/20">
                <CardContent className="p-0">
                  <motion.div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-6" whileHover={{
                  scale: 1.1,
                  rotate: 360
                }} transition={{
                  duration: 0.6
                }}>
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-h3 font-semibold mb-4 text-primary">
                    Innovation als Prozess
                  </h3>
                  <p className="text-body text-muted-foreground leading-relaxed">
                    Für uns ist Innovation kein einzelnes Feature – sie ist ein kontinuierlicher Prozess. 
                    Wir schaffen den Zugang zu echter Innovation für KMU, Selbständige und Marken im Wandel.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right: Approach */}
            <motion.div variants={{
            hidden: {
              opacity: 0,
              x: 50
            },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut"
              }
            }
          }} className="space-y-6">
              <Card className="card-modern p-8 bg-gradient-to-br from-surface to-surface-elevated border-accent/20">
                <CardContent className="p-0">
                  <motion.div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 mb-6" whileHover={{
                  scale: 1.1,
                  rotate: -360
                }} transition={{
                  duration: 0.6
                }}>
                    <Zap className="w-6 h-6 text-accent" />
                  </motion.div>
                  <h3 className="text-h3 font-semibold mb-4 text-accent">
                    Ganzheitliche Transformation
                  </h3>
                  <p className="text-body text-muted-foreground leading-relaxed">
                    Unser Fokus liegt nicht nur auf Automatisierung oder Chatbots, sondern auf ganzheitlicher, 
                    kreativer Transformation: Von Markenentwicklung über Medienproduktion bis hin zu Prototypen und KI-gestützten Tools.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Vision Statement */}
          <ScrollAnimation animation="fadeUp" delay={0.4} className="text-center mb-16">
            <motion.div className="max-w-4xl mx-auto" whileHover={{
            scale: 1.02
          }} transition={{
            duration: 0.3
          }}>
              <Card className="card-modern p-8 bg-gradient-to-br from-surface to-surface-elevated border-primary/20">
                <CardContent className="p-0">
                  <motion.div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary mb-8" animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1]
                }} transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}>
                    <Brain className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-h2 font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                    Kreatives Headquarter für Innovation
                  </h3>
                  <p className="text-body-lg text-muted-foreground leading-relaxed mb-4">Mit New Edge Innovation erlebbar machen.</p>
                  <p className="text-body-lg text-muted-foreground leading-relaxed">Nicht als klassische Agentur, sondern als Ort, an dem Ideen, Technologien und Design zu echter Zukunftskraft werden.</p>
                </CardContent>
              </Card>
            </motion.div>
          </ScrollAnimation>

          {/* Interactive Innovation Areas */}
          <motion.div className="grid md:grid-cols-3 gap-8" initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-50px"
        }} variants={{
          hidden: {
            opacity: 0
          },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.5
            }
          }
        }}>
            {[{
            title: "Markenentwicklung",
            description: "Identität und Positionierung",
            icon: Target,
            gradient: "from-primary to-primary/70"
          }, {
            title: "Medienproduktion",
            description: "Content und Storytelling",
            icon: Eye,
            gradient: "from-secondary to-secondary/70"
          }, {
            title: "KI-Tools & Prototypen",
            description: "Technologie und Innovation",
            icon: Rocket,
            gradient: "from-accent to-accent/70"
          }].map((area, index) => <motion.div key={index} variants={{
            hidden: {
              opacity: 0,
              y: 60,
              scale: 0.9
            },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.6,
                ease: "easeOut"
              }
            }
          }} whileHover={{
            y: -10,
            scale: 1.05,
            transition: {
              duration: 0.2
            }
          }} className="group cursor-pointer">
                <Card className="card-modern h-full hover-lift bg-gradient-to-br from-surface to-background border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <motion.div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${area.gradient} p-4 mb-6 mx-auto`} whileHover={{
                  rotate: 15,
                  scale: 1.1
                }} transition={{
                  duration: 0.3
                }}>
                      <area.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h4 className="text-h4 font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {area.title}
                    </h4>
                    <p className="text-body-sm text-muted-foreground">
                      {area.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>)}
          </motion.div>
        </div>
      </ScrollAnimation>

      {/* 🎯 Services Section with Overlap Effect */}
      <ScrollAnimation animation="fadeLeft" className="relative -mt-20 pt-32 pb-20 bg-gradient-to-r from-background to-surface overflow-hidden">
        {/* Animated background elements */}
        
        <motion.div className="absolute -top-10 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360]
      }} transition={{
        duration: 12,
        repeat: Infinity,
        ease: "linear"
      }} />
        <div className="container-xl mt-16">
          <ScrollAnimation animation="fadeUp" delay={0.2} className="text-center mb-16">
            <h2 className="text-h1 font-bold mb-6 text-foreground">Unsere Kompetenzbereiche</h2>
            <p className="text-body-xl text-muted-foreground max-w-2xl mx-auto">
              Drei Bereiche, eine Vision: Ihre Marke erfolgreich in der digitalen Welt positionieren.
            </p>
          </ScrollAnimation>

          <motion.div className="grid-modern" initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-50px"
        }} variants={{
          hidden: {
            opacity: 0
          },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3,
              delayChildren: 0.4
            }
          }
        }}>
            {services.map((service, index) => {
            const links = ['/studio', '/media', '/lab'];
            return <motion.div key={index} variants={{
              hidden: {
                opacity: 0,
                y: 80,
                rotateX: 45
              },
              visible: {
                opacity: 1,
                y: 0,
                rotateX: 0,
                transition: {
                  duration: 0.8,
                  ease: "easeOut"
                }
              }
            }} whileHover={{
              scale: 1.05,
              y: -15,
              transition: {
                duration: 0.3
              }
            }} className="group">
                  <Card className="card-modern h-full hover-lift">
                    <CardContent className="p-8 flex flex-col h-full">
                      <motion.div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`} whileHover={{
                    rotate: 360,
                    scale: 1.2
                  }} transition={{
                    duration: 0.6
                  }}>
                        <service.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-h3 font-semibold mb-4 text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-body text-muted-foreground leading-relaxed mb-6 flex-grow">
                        {service.description}
                      </p>
                      <Button variant="default" size="sm" className="self-start group/btn btn-primary" asChild>
                        <Link to={links[index]}>
                          Mehr erfahren
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>;
          })}
          </motion.div>
        </div>
      </ScrollAnimation>

      {/* 🚀 Impact Points Section with Overlap Effect */}
      <ScrollAnimation animation="fadeRight" className="relative -mt-16 pt-24 pb-20 bg-gradient-to-l from-surface to-background overflow-hidden">
        {/* Modern floating elements */}
        <motion.div className="absolute top-40 right-10 w-24 h-24 bg-accent/10 rounded-full blur-xl" animate={{
        x: [0, 30, 0],
        y: [0, -20, 0],
        scale: [1, 1.3, 1]
      }} transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }} />
        <motion.div className="absolute bottom-20 left-20 w-36 h-36 bg-primary/5 rounded-full blur-2xl" animate={{
        rotate: [0, 360],
        scale: [1, 0.8, 1]
      }} transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear"
      }} />
        <div className="container-xl">
          {/* Section Title */}
          <motion.div className="text-center mb-16" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <h2 className="text-h1 font-bold mb-6 text-foreground">Unsere innovative Herangehensweise</h2>
            
          </motion.div>
          <motion.div className="grid md:grid-cols-2 gap-8 items-stretch" initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} variants={{
          hidden: {
            opacity: 0
          },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.2
            }
          }
        }}>
            {[{
            number: "01",
            title: "Automatisierung mit Impact",
            description: "Wir automatisieren repetitive Aufgaben, damit Sie sich auf Ihr Kerngeschäft konzentrieren können."
          }, {
            number: "02",
            title: "Marketing & Technologie vereint",
            description: "Interdisziplinäres Team aus Strategen, Creatives und Entwicklern; alles aus einer Hand."
          }, {
            number: "03",
            title: "Zugänglichkeit statt Komplexität",
            description: "Transparente Prozesse und verständliche Lösungen statt Technik Buzzwords."
          }, {
            number: "04",
            title: "Individuell & skalierbar",
            description: "Maßgeschneiderte Setups ohne Abo Modelle – Sie bezahlen nur, was Sie nutzen."
          }].map((point, index) => <motion.div key={index} variants={{
            hidden: {
              opacity: 0,
              x: index % 2 === 0 ? -60 : 60,
              scale: 0.9
            },
            visible: {
              opacity: 1,
              x: 0,
              scale: 1,
              transition: {
                duration: 0.7,
                ease: "easeOut",
                type: "spring",
                stiffness: 100
              }
            }
          }} whileHover={{
            scale: 1.02,
            y: -5,
            transition: {
              duration: 0.2
            }
          }} className="group hover-lift h-full">
                <div className="flex items-start gap-6 p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm hover:bg-card transition-all duration-300 h-full">
                  <motion.div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-h3 group-hover:scale-110 transition-transform duration-300" whileHover={{
                rotate: 180
              }} transition={{
                duration: 0.4
              }}>
                    {point.number}
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-h3 mb-3 text-foreground group-hover:text-primary transition-colors text-base font-semibold">
                      {point.title}
                    </h3>
                    <p className="text-body text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </motion.div>)}
          </motion.div>
        </div>
      </ScrollAnimation>

      {/* 📧 Contact Section - ✅ KORRIGIERTE FELDNAMEN */}
      <ScrollAnimation animation="scaleIn" threshold={0.1}>
        <section id="contact-section" className="relative -mt-24 pt-32 pb-20 bg-gradient-to-br from-surface via-background to-surface overflow-hidden">
          {/* Modern floating elements */}
          <motion.div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl" animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 180, 360]
        }} transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }} />
          <motion.div className="absolute bottom-40 right-20 w-40 h-40 bg-accent/5 rounded-full blur-2xl" animate={{
          y: [0, -30, 0],
          scale: [1, 0.8, 1]
        }} transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }} />
          <div className="container-narrow">
            <ScrollAnimation animation="fadeUp" delay={0.1} className="text-center mb-12">
              <h2 className="text-h1 font-bold mb-6 text-foreground">
                Bereit für den nächsten Schritt?
              </h2>
              <p className="text-body-xl text-muted-foreground">
                Ready when you are. Wir bringen's online.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeUp" delay={0.3}>
              <Card className="card-modern">
                <CardContent className="p-8">
                  <motion.form onSubmit={handleSubmit} className="space-y-6" initial="hidden" animate="visible" variants={{
                  hidden: {
                    opacity: 0
                  },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2
                    }
                  }
                }}>
                    <motion.div className="space-y-6" variants={{
                    hidden: {
                      opacity: 0
                    },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}>
                      {/* Form fields with staggered animations */}
                      {[{
                      id: "name",
                      label: "Name *",
                      type: "text",
                      placeholder: "Ihr Name",
                      required: true
                    }, {
                      id: "email",
                      label: "E-Mail *",
                      type: "email",
                      placeholder: "ihre@email.com",
                      required: true
                    }, {
                      id: "position",
                      label: "Position *",
                      type: "text",
                      placeholder: "Ihre Position",
                      required: true
                    }, {
                      id: "firma",
                      label: "Firma *",
                      type: "text",
                      placeholder: "Ihr Unternehmen",
                      required: true
                    }, {
                      id: "telefon",
                      label: "Telefon",
                      type: "tel",
                      placeholder: "Ihre Telefonnummer",
                      required: false
                    }].map(field => <motion.div key={field.id} className="space-y-2" variants={{
                      hidden: {
                        opacity: 0,
                        y: 20
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.4,
                          ease: "easeOut"
                        }
                      }
                    }}>
                          <Label htmlFor={field.id} className="text-body font-medium">{field.label}</Label>
                          <Input id={field.id} name={field.id} type={field.type} placeholder={field.placeholder} required={field.required} className="bg-surface border-border" />
                        </motion.div>)}

                      {/* Message field */}
                      <motion.div className="space-y-2" variants={{
                      hidden: {
                        opacity: 0,
                        y: 20
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.4,
                          ease: "easeOut"
                        }
                      }
                    }}>
                        <Label htmlFor="nachricht" className="text-body font-medium">Nachricht</Label>
                        <Textarea id="nachricht" name="nachricht" placeholder="Erzählen Sie uns von Ihrem Projekt..." rows={6} className="bg-surface border-border resize-none" />
                      </motion.div>
                    </motion.div>
                    
                    <motion.div variants={{
                    hidden: {
                      opacity: 0,
                      y: 20
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                        ease: "easeOut"
                      }
                    }
                  }}>
                      <Button type="submit" size="lg" className="w-full btn-primary hover-magnetic">
                        Nachricht senden
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </motion.div>
                  </motion.form>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </section>
      </ScrollAnimation>

      {/* 🍪 Cookie Consent */}
      <CookieConsent />

      {/* Footer */}
      <footer className="bg-surface-elevated/80 border-t border-border py-12 sm:py-16">
        <div className="container-xl">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="sm:col-span-2">
              <div className="flex items-center mb-4">
                <OptimizedImage src="/lovable-uploads/90e4fdca-8c29-48f7-9568-686b611a62f4.png" alt="New Edge Logo" className="h-6 w-6 sm:h-8 sm:w-8 mr-2 sm:mr-3" priority sizes="32px" />
                <div className="text-2xl sm:text-3xl font-bold text-foreground">
                  New Edge<span className="text-primary"></span>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
                New Edge ist eine Creative-Tech Agentur für innovationsgetriebene Markenkommunikation.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/new-edge-brand/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 bg-surface rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <span className="text-xs sm:text-sm text-foreground hover:text-white">in</span>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-foreground text-sm sm:text-base">Services</h4>
              <ul className="space-y-1 sm:space-y-2 text-muted-foreground text-sm sm:text-base">
                <li><Link to="/studio" className="hover:text-primary transition-colors">STUDIO</Link></li>
                <li><Link to="/media" className="hover:text-primary transition-colors">MEDIA</Link></li>
                <li><Link to="/lab" className="hover:text-primary transition-colors">LAB</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-foreground text-sm sm:text-base">Kontakt</h4>
              <ul className="space-y-1 sm:space-y-2 text-muted-foreground text-sm sm:text-base">
                <li>
                  <a href="mailto:info@newedgebrand.com" className="hover:text-primary transition-colors">
                    info@newedgebrand.com
                  </a>
                </li>
                <li>+49 15750998236</li>
                <li>Deutschland</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-xs sm:text-sm">©2025 New Edge. Alle Rechte vorbehalten.</p>
            <div className="flex space-x-4 sm:space-x-6 mt-3 sm:mt-4 md:mt-0">
              <Link to="/impressum" className="text-muted-foreground hover:text-primary text-xs sm:text-sm transition-colors">Impressum</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;