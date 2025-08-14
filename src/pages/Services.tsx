import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowDown, ChevronDown, Sparkles, Brain, Zap, Star, Target, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MobileNavigation } from "@/components/MobileNavigation";
import { LazyImage } from "@/components/LazyImage";
import CookieConsent from "@/components/CookieConsent";
import { useLanguage } from "@/contexts/LanguageContext";
const Services = () => {
  const {
    t
  } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const {
    scrollY
  } = useScroll();
  const containerRef = useRef<HTMLDivElement>(null);

  // Simplified parallax effects
  const y1 = useTransform(scrollY, [0, 1000], [0, -50]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsVisible(true);
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToContact = () => {
    window.location.href = '/#contact-section';
  };
  return <div ref={containerRef} className="min-h-screen bg-background overflow-hidden">
      <MobileNavigation onContactClick={scrollToContact} theme="dark" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden pt-20 sm:pt-0">
        {/* Complex animated background with particles and geometric shapes */}
        <div className="absolute inset-0 z-0">
          {/* Main gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-surface-elevated"></div>
          
          {/* Animated geometric shapes */}
          <motion.div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }} transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }} />
          <motion.div className="absolute top-3/4 right-1/4 w-48 h-48 bg-secondary/15 rounded-full blur-2xl" animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
          x: [0, -40, 0],
          y: [0, 20, 0]
        }} transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }} />
          <motion.div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-accent/20 rounded-full blur-xl" animate={{
          scale: [1, 1.5, 1],
          x: [0, 60, 0],
          y: [0, -50, 0]
        }} transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }} />
          
          {/* Floating particles */}
          {[...Array(15)].map((_, i) => <motion.div key={i} className="absolute w-2 h-2 bg-primary/30 rounded-full" style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`
        }} animate={{
          y: [0, -100, 0],
          opacity: [0, 1, 0],
          scale: [0, 1, 0]
        }} transition={{
          duration: 8 + Math.random() * 4,
          repeat: Infinity,
          delay: Math.random() * 5,
          ease: "easeInOut"
        }} />)}
          
          {/* Hexagonal grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hexagons" x="0" y="0" width="50" height="43.4" patternUnits="userSpaceOnUse">
                  <polygon fill="none" stroke="currentColor" strokeWidth="1" points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hexagons)" className="text-primary" />
            </svg>
          </div>
          
          {/* Dynamic light rays */}
          <motion.div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [0.8, 1.2, 0.8]
        }} transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }} />
        </div>
        
        <motion.div style={{
        y: y1,
        opacity
      }} className="text-center relative z-10">
          <motion.div initial={{
          opacity: 0,
          scale: 0.8,
          rotateX: -20
        }} animate={{
          opacity: 1,
          scale: 1,
          rotateX: 0
        }} transition={{
          duration: 1.2,
          ease: "easeOut"
        }} className="mb-12">
            {/* Complex text animations */}
            <motion.div initial={{
            opacity: 0,
            y: -50,
            rotateY: -45
          }} animate={{
            opacity: 1,
            y: 0,
            rotateY: 0
          }} transition={{
            delay: 0.3,
            duration: 1,
            ease: "easeOut"
          }} className="inline-block text-transparent bg-gradient-primary bg-clip-text text-display-xl font-black tracking-tight mb-4 perspective-1000">
              <motion.span animate={{
              textShadow: ["0 0 20px rgba(var(--primary-rgb), 0.5)", "0 0 40px rgba(var(--primary-rgb), 0.8)", "0 0 20px rgba(var(--primary-rgb), 0.5)"]
            }} transition={{
              duration: 3,
              repeat: Infinity
            }}>
                THE
              </motion.span>
            </motion.div>
            <br />
            <motion.div initial={{
            opacity: 0,
            rotateX: -90,
            scale: 0.5
          }} animate={{
            opacity: 1,
            rotateX: 0,
            scale: 1
          }} transition={{
            delay: 0.7,
            duration: 1.2,
            ease: "backOut"
          }} className="text-display-xl font-black text-foreground italic mb-4 transform-gpu">
              <motion.span animate={{
              rotateZ: [0, 2, -2, 0],
              scale: [1, 1.02, 1]
            }} transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}>
                JOURNEY
              </motion.span>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 50,
            scale: 0.8
          }} animate={{
            opacity: 1,
            y: 0,
            scale: 1
          }} transition={{
            delay: 1.2,
            duration: 1,
            ease: "easeOut"
          }} className="text-body-xl text-muted-foreground font-light">
              <motion.span animate={{
              opacity: [0.7, 1, 0.7]
            }} transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}>
                FROM VISION TO REALITY
              </motion.span>
            </motion.div>
          </motion.div>
          
          {/* Parallax text content */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 1.8,
          duration: 1
        }} className="text-body-lg text-muted-foreground mb-6 max-w-4xl mx-auto font-light leading-relaxed">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 2,
            duration: 0.8
          }}>
              Umfassende digitale Lösungen, die Strategie, Design und Technologie nahtlos verbinden.
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            x: 50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 2.3,
            duration: 0.8
          }}>
              Wir entwickeln maßgeschneiderte Ansätze für Ihre einzigartigen Herausforderungen.
            </motion.div>
          </motion.div>
          
          <motion.p initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 2.5,
          duration: 0.8
        }} className="text-body-lg mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            <span className="bg-gradient-primary bg-clip-text text-transparent font-medium text-h2">
              
            </span>
          </motion.p>

          {/* Enhanced scroll indicator with complex animations */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 3,
          duration: 0.8
        }} className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 cursor-pointer z-20" onClick={() => {
          const nextSection = document.querySelector('.services-overview');
          nextSection?.scrollIntoView({
            behavior: 'smooth'
          });
        }}>
            <motion.div whileHover={{
            scale: 1.3,
            rotate: 5
          }} whileTap={{
            scale: 0.8
          }} className="relative">
              {/* Pulsing ring */}
              <motion.div className="absolute inset-0 w-16 h-16 -m-4 rounded-full border-2 border-primary/50" animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5]
            }} transition={{
              duration: 2,
              repeat: Infinity
            }} />
              {/* Main arrow with glow effect */}
              <motion.div animate={{
              y: [0, 8, 0]
            }} transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }} className="relative">
                <motion.div className="absolute inset-0 blur-sm" animate={{
                boxShadow: ["0 0 20px rgba(var(--primary-rgb), 0.8)", "0 0 40px rgba(var(--primary-rgb), 1)", "0 0 20px rgba(var(--primary-rgb), 0.8)"]
              }} transition={{
                duration: 1.5,
                repeat: Infinity
              }}>
                  <ArrowDown className="w-8 h-8 text-primary" />
                </motion.div>
                <ArrowDown className="w-8 h-8 text-primary relative z-10" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Overview Section with Subtle Overlap Effect */}
      <section className="services-overview relative -mt-20 pt-32 pb-24 bg-gradient-subtle overflow-hidden">
        {/* Simple floating elements */}
        <motion.div className="absolute top-20 left-10 w-24 h-24 bg-primary/5 rounded-full blur-xl" animate={{
        y: [0, -15, 0],
        opacity: [0.3, 0.6, 0.3]
      }} transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }} />
        <motion.div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary/5 rounded-full blur-xl" animate={{
        y: [0, 10, 0],
        opacity: [0.4, 0.2, 0.4]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 3
      }} />
        
        <motion.div style={{
        y: y2
      }} className="container-xl relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.8
        }} className="text-center mb-20">
            <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.2,
            duration: 0.6
          }} className="inline-block bg-gradient-primary text-white px-8 py-4 rounded-full text-xl font-semibold mb-12 shadow-elegant">
              {t('services.keyActivities')}
            </motion.div>
            <h2 className="text-h1 font-bold text-foreground mb-6">Ihr Weg zum Erfolg</h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
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
                delayChildren: 0.1
              }
            }
          }}>
              
              {/* Media Card */}
              <motion.div variants={{
              hidden: {
                opacity: 0,
                y: 40,
                scale: 0.95
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
            }} className="group hover-lift">
                <Card className="card-modern h-full transition-all duration-300 hover:shadow-glow border-border/50 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary p-4 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-h3 font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                      NEW EDGE MEDIA
                    </h3>
                    <p className="text-body text-muted-foreground mb-6 leading-relaxed">
                      Die perfekte Bühne für Ihre Marke
                    </p>
                    <p className="text-body-sm text-muted-foreground leading-relaxed mb-8">
                      Content-Produktion und Reichweite. Hier wird alles produziert, veröffentlicht und gesteuert.
                    </p>
                    
                    <Button className="btn-primary w-full" asChild>
                      <Link to="/media">
                        Content erstellen <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Studio Card */}
              <motion.div variants={{
              hidden: {
                opacity: 0,
                y: 40,
                scale: 0.95
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
            }} className="group hover-lift">
                <Card className="card-modern h-full transition-all duration-300 hover:shadow-glow border-border/50 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary to-accent p-4 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-h3 font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                      NEW EDGE STUDIO
                    </h3>
                    <p className="text-body text-muted-foreground mb-6 leading-relaxed">
                      Ihre Ideen, unsere Strategie
                    </p>
                    <p className="text-body-sm text-muted-foreground leading-relaxed mb-8">
                      Hier beginnt alles. Wir entwickeln die visuelle Identität, Strategie und das Fundament für Ihr Projekt.
                    </p>
                    
                    <Button className="btn-primary w-full" asChild>
                      <Link to="/studio">
                        Strategie entwickeln <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Lab Card */}
              <motion.div variants={{
              hidden: {
                opacity: 0,
                y: 40,
                scale: 0.95
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
            }} className="group hover-lift">
                <Card className="card-modern h-full transition-all duration-300 hover:shadow-glow border-border/50 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-primary p-4 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-h3 font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                      NEW EDGE LAB
                    </h3>
                    <p className="text-body text-muted-foreground mb-6 leading-relaxed">
                      Die perfekte Schnittstelle für Strategie & Technologie
                    </p>
                    <p className="text-body-sm text-muted-foreground leading-relaxed mb-8">
                      Backend, KI und technische Umsetzung. Hier wird alles intelligent und automatisiert.
                    </p>
                    
                    <Button className="btn-primary w-full" asChild>
                      <Link to="/lab">
                        Technologie implementieren <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Simplified Journey Visualization */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: "-100px"
          }} transition={{
            duration: 0.8,
            delay: 0.3
          }} className="mt-20">
              <div className="max-w-4xl mx-auto">
                {/* Journey Header */}
                <div className="text-center mb-16">
                  <h3 className="text-h1 font-bold text-foreground mb-6">
                    Unsere Journey
                  </h3>
                  <p className="text-body-xl text-muted-foreground max-w-2xl mx-auto">
                    Von der Vision zur Realität - ein strukturierter Prozess für Ihren Erfolg
                  </p>
                </div>

                {/* Journey Steps with Animation Line */}
                <div className="relative">
                  {/* Animated Journey Line */}
                  <div className="hidden md:block absolute top-10 left-1/2 transform -translate-x-1/2 w-full max-w-2xl">
                    <motion.div 
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                      viewport={{ once: true }}
                    >
                      <svg width="100%" height="60" viewBox="0 0 400 60" className="absolute top-0">
                        <motion.path
                          d="M20,30 Q100,10 200,30 T380,30"
                          stroke="hsl(var(--primary))"
                          strokeWidth="2"
                          fill="none"
                          strokeDasharray="5,5"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          transition={{ duration: 2, ease: "easeInOut" }}
                          viewport={{ once: true }}
                        />
                        {/* Green dot at the end */}
                        <motion.circle
                          cx="380"
                          cy="30"
                          r="4"
                          fill="hsl(var(--primary))"
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 2, duration: 0.3 }}
                          viewport={{ once: true }}
                        />
                      </svg>
                    </motion.div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-8 relative z-10">
                    {[{
                  number: "01",
                  title: "STRATEGIE",
                  description: "Das Fundament für Ihren Erfolg. Wir entwickeln eine klare Roadmap und visuelle Identität.",
                  icon: Target,
                  gradient: "from-primary to-primary"
                }, {
                  number: "02",
                  title: "PRODUKTION",
                  description: "Content-Erstellung und kreative Umsetzung. Hier entstehen die Inhalte für Ihre Marke.",
                  icon: Star,
                  gradient: "from-secondary to-secondary"
                }, {
                  number: "03",
                  title: "AUTOMATION",
                  description: "Intelligente Systeme und Workflows für nachhaltigen Erfolg und Effizienz.",
                  icon: Eye,
                  gradient: "from-accent to-accent"
                 }].map((step, index) => <motion.div key={step.number} initial={{
                  opacity: 0,
                  y: 30
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} viewport={{
                  once: true
                }} transition={{
                  duration: 0.6,
                  delay: index * 0.1
                }} className="text-center group">
                      <div className="relative mb-6">
                        <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-soft group-hover:scale-105 transition-transform duration-300`}>
                          <span className="text-white font-bold text-xl">{step.number}</span>
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-surface rounded-full border-2 border-border flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <step.icon className="w-4 h-4 text-muted-foreground" />
                        </div>
                      </div>
                      
                      <h4 className="text-h4 font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-body-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>)}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 sm:px-6 bg-gradient-to-br from-surface via-background to-surface-elevated overflow-hidden">
        <motion.div className="container-narrow text-center relative z-10" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }}>
          <h2 className="text-h1 font-bold mb-6 text-foreground">
            Bereit für Ihre Reise?
          </h2>
          <p className="text-body-xl mb-12 max-w-3xl mx-auto leading-relaxed text-muted-foreground">
            Lassen Sie uns gemeinsam Ihre Vision Schritt für Schritt zur Realität werden.
          </p>
          <motion.div whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }}>
            <Button size="lg" className="btn-primary px-12 py-4 text-lg" asChild>
              <Link to="/#contact-section">
                Projekt starten
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-elevated/80 border-t border-border py-12 sm:py-16">
        <div className="container-xl">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="sm:col-span-2">
              <div className="flex items-center mb-4">
                <LazyImage alt="New Edge Logo" className="h-6 w-6 sm:h-8 sm:w-8 mr-2 sm:mr-3" src="/lovable-uploads/90e4fdca-8c29-48f7-9568-686b611a62f4.png" sizes="(max-width: 640px) 24px, 32px" />
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
                <li>info@newedgebrand.com</li>
                <li>+49 15750998236</li>
                <li>Deutschland</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-xs sm:text-sm">©2024 New Edge. Alle Rechte vorbehalten.</p>
            <div className="flex space-x-4 sm:space-x-6 mt-3 sm:mt-4 md:mt-0">
              <Link to="/impressum" className="text-muted-foreground hover:text-primary text-xs sm:text-sm transition-colors">Impressum</Link>
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
    })} className="fixed bottom-8 right-8 z-50 bg-gradient-primary text-white p-3 rounded-full shadow-elegant hover:shadow-glow transition-all duration-300 hover-lift" whileHover={{
      scale: 1.1
    }} whileTap={{
      scale: 0.9
    }}>
          <ArrowRight className="w-6 h-6 transform -rotate-90" />
        </motion.button>}
    </div>;
};
export default Services;