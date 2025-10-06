import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Users, Code, Palette, Globe, Briefcase, ChevronDown, ArrowRight, Sparkles, Zap, Heart, Target, Network, Building2, Lightbulb, Rocket, ShieldCheck, TrendingUp, Handshake } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import newEdgeHubLogo from "@/assets/new-edge-hub-logo.png";
const About = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('intro');
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const scrollToContact = () => {
    navigate('/', {
      replace: true
    });
    setTimeout(() => {
      const contactSection = document.getElementById('contact-section');
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }, 100);
  };
  return <>
      <Helmet>
        <title>About - The Headquarters of Innovation - NEW EDGE</title>
        <meta name="description" content="New Edge ist das kreative, technologische und strategische Zentrum für den digitalen Wandel im Mittelstand." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <MobileNavigation onContactClick={scrollToContact} theme="dark" />

        {/* Sticky Navigation */}
        <motion.nav initial={{
        y: -100
      }} animate={{
        y: 0
      }} className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
          
        </motion.nav>

        {/* Hero Section */}
        <section className="relative w-full mt-16">
          <div className="w-full relative h-[75vh] lg:h-auto lg:aspect-video">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background overflow-hidden">
              <video autoPlay loop muted playsInline preload="auto" className="absolute inset-0 w-full h-full object-cover">
                <source src="/assets/hero-video.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-6 pb-20 sm:p-12 lg:p-16 max-w-full sm:max-w-4xl">
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 leading-tight">
                  <span className="text-white">THE HEADQUARTERS</span><br />
                  <span className="italic font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">OF INNOVATION.</span>
                </h1>
              </div>
              
              <motion.div initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              delay: 1,
              duration: 0.5
            }} className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
                <motion.div animate={{
                y: [0, 10, 0]
              }} transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }} className="flex flex-col items-center gap-2 cursor-pointer" onClick={() => scrollToSection('intro')}>
                  <span className="text-white text-sm font-medium">Scroll</span>
                  <ChevronDown className="w-6 h-6 text-white" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 1️⃣ Intro Section - The Headquarters of Innovation */}
        <section id="intro" className="relative section-padding bg-background">
          <div className="absolute inset-0 overflow-hidden">
            <motion.div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }} transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }} />
            <motion.div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1.2, 1, 1.2]
          }} transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }} />
            
            {/* Animated connection lines */}
            <svg className="absolute inset-0 w-full h-full opacity-20">
              <motion.line x1="20%" y1="30%" x2="50%" y2="50%" stroke="url(#gradient1)" strokeWidth="2" initial={{
              pathLength: 0
            }} animate={{
              pathLength: 1
            }} transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }} />
              <motion.line x1="80%" y1="30%" x2="50%" y2="50%" stroke="url(#gradient1)" strokeWidth="2" initial={{
              pathLength: 0
            }} animate={{
              pathLength: 1
            }} transition={{
              duration: 2,
              delay: 0.5,
              repeat: Infinity,
              repeatType: "reverse"
            }} />
              <motion.line x1="50%" y1="70%" x2="50%" y2="50%" stroke="url(#gradient1)" strokeWidth="2" initial={{
              pathLength: 0
            }} animate={{
              pathLength: 1
            }} transition={{
              duration: 2,
              delay: 1,
              repeat: Infinity,
              repeatType: "reverse"
            }} />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="100%" stopColor="hsl(var(--secondary))" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="container-xl relative z-10">
            <motion.div initial={{
            opacity: 0,
            y: 60
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8
          }} className="max-w-4xl mx-auto text-center">
              <motion.h2 className="text-display mb-8 text-foreground" initial={{
              opacity: 0,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }}>
                The Headquarters of{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Innovation
                </span>
              </motion.h2>
              
              <motion.p className="text-body-xl text-muted-foreground mb-12 leading-relaxed" initial={{
              opacity: 0
            }} whileInView={{
              opacity: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.2
            }}>
                Wir sind kein gewöhnliches Studio – wir sind das kreative, technologische und strategische 
                Zentrum für den digitalen Wandel im Mittelstand.
              </motion.p>

              <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.4
            }}>
                <Button size="lg" onClick={() => scrollToSection('mission')} className="group">
                  Unsere Philosophie
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('netzwerk')}>
                  Das Netzwerk entdecken
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 2️⃣ Mission & Vision */}
        <section id="mission" className="relative section-padding bg-surface">
          <div className="container-xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{
              opacity: 0,
              x: -60
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.8
            }}>
                <h2 className="text-h1 mb-8 text-foreground">
                  Unser Auftrag für den{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Mittelstand
                  </span>
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-h3 mb-4 text-foreground flex items-center gap-3">
                      <Target className="w-6 h-6 text-primary" />
                      Mission
                    </h3>
                    <p className="text-body-lg text-muted-foreground leading-relaxed">
                      Wir bringen Innovation dorthin, wo sie am meisten gebraucht wird – in den Mittelstand.
                      Dafür automatisieren wir Prozesse, verbinden Agenturen mit Unternehmen und machen 
                      Kreativität skalierbar.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-h3 mb-4 text-foreground flex items-center gap-3">
                      <Sparkles className="w-6 h-6 text-secondary" />
                      Vision
                    </h3>
                    <p className="text-body-lg text-muted-foreground leading-relaxed">
                      Ein Ökosystem, in dem Marken, Agenturen und Technologien nahtlos zusammenarbeiten – 
                      und der Mittelstand zum Motor echter Innovation wird.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              x: 60
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.8
            }} className="relative">
                <div className="relative aspect-square">
                  <motion.div className="absolute inset-0 bg-gradient-primary rounded-3xl" animate={{
                  rotate: [0, 180, 360]
                }} transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }} style={{
                  opacity: 0.1
                }} />
                  <div className="absolute inset-8 grid grid-cols-3 gap-4">
                    {[Network, Building2, Lightbulb, Code, Palette, Rocket, Users, Globe, Zap].map((Icon, i) => <motion.div key={i} className="bg-background rounded-2xl flex items-center justify-center shadow-lg" initial={{
                    opacity: 0,
                    scale: 0
                  }} whileInView={{
                    opacity: 1,
                    scale: 1
                  }} viewport={{
                    once: true
                  }} transition={{
                    delay: i * 0.1,
                    duration: 0.5
                  }} whileHover={{
                    scale: 1.1,
                    rotate: 5
                  }}>
                        <Icon className="w-8 h-8 text-primary" />
                      </motion.div>)}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3️⃣ Unser Modell - Wie New Edge funktioniert */}
        <section id="modell" className="relative section-padding bg-background overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          
          <div className="container-xl relative z-10">
            <motion.div initial={{
            opacity: 0,
            y: 60
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-center mb-16">
              <h2 className="text-display mb-6 text-foreground">
                Wie New Edge{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  funktioniert
                </span>
              </h2>
              <p className="text-body-xl text-muted-foreground max-w-3xl mx-auto">
                Studio · Media · Lab – drei Einheiten, ein Headquarter.
              </p>
            </motion.div>

            {/* Hub Visualization */}
            <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8
          }} className="max-w-5xl mx-auto mb-20">
              <div className="relative aspect-square max-w-2xl mx-auto">
                {/* Central Hub */}
                <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-primary flex items-center justify-center shadow-2xl z-10" animate={{
                boxShadow: ['0 0 40px rgba(168, 85, 247, 0.4)', '0 0 80px rgba(168, 85, 247, 0.6)', '0 0 40px rgba(168, 85, 247, 0.4)']
              }} transition={{
                duration: 3,
                repeat: Infinity
              }}>
                  <div className="text-center text-white">
                    <img src={newEdgeHubLogo} alt="NEW EDGE" className="w-20 h-20 mx-auto mb-2" />
                    <div className="font-bold text-lg">NEW EDGE</div>
                    <div className="text-xs opacity-80">HQ</div>
                  </div>
                </motion.div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full">
                  <motion.line x1="50%" y1="50%" x2="15%" y2="25%" stroke="url(#lineGradient)" strokeWidth="2" initial={{
                  pathLength: 0
                }} whileInView={{
                  pathLength: 1
                }} transition={{
                  duration: 1.5,
                  ease: "easeInOut"
                }} />
                  <motion.line x1="50%" y1="50%" x2="85%" y2="25%" stroke="url(#lineGradient)" strokeWidth="2" initial={{
                  pathLength: 0
                }} whileInView={{
                  pathLength: 1
                }} transition={{
                  duration: 1.5,
                  delay: 0.3,
                  ease: "easeInOut"
                }} />
                  <motion.line x1="50%" y1="50%" x2="50%" y2="85%" stroke="url(#lineGradient)" strokeWidth="2" initial={{
                  pathLength: 0
                }} whileInView={{
                  pathLength: 1
                }} transition={{
                  duration: 1.5,
                  delay: 0.6,
                  ease: "easeInOut"
                }} />
                  <defs>
                    <linearGradient id="lineGradient">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Studio Node */}
                <motion.div className="absolute top-[15%] left-[5%] w-40 h-40" initial={{
                opacity: 0,
                x: -50
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.5
              }}>
                  <div className="w-full h-full rounded-2xl bg-card border-2 border-primary/30 shadow-lg p-6 flex flex-col items-center justify-center text-center transition-transform hover:scale-105">
                    <Lightbulb className="w-10 h-10 text-primary mb-3" />
                    <div className="font-bold text-lg mb-1">STUDIO</div>
                    <div className="text-xs text-muted-foreground">Die strategische Quelle</div>
                  </div>
                </motion.div>

                {/* Media Node */}
                <motion.div className="absolute top-[15%] right-[5%] w-40 h-40" initial={{
                opacity: 0,
                x: 50
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.7
              }}>
                  <div className="w-full h-full rounded-2xl bg-card border-2 border-secondary/30 shadow-lg p-6 flex flex-col items-center justify-center text-center transition-transform hover:scale-105">
                    <Palette className="w-10 h-10 text-secondary mb-3" />
                    <div className="font-bold text-lg mb-1">MEDIA</div>
                    <div className="text-xs text-muted-foreground">Die kreative Energie</div>
                  </div>
                </motion.div>

                {/* Lab Node */}
                <motion.div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-40 h-40" initial={{
                opacity: 0,
                y: 50
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.9
              }}>
                  <div className="w-full h-full rounded-2xl bg-card border-2 border-accent/30 shadow-lg p-6 flex flex-col items-center justify-center text-center transition-transform hover:scale-105">
                    <Zap className="w-10 h-10 text-accent mb-3" />
                    <div className="font-bold text-lg mb-1">LAB</div>
                    <div className="text-xs text-muted-foreground">Der Automatisierungs-Motor</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Unit Descriptions */}
            <motion.div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto" initial="hidden" whileInView="visible" viewport={{
            once: true
          }} variants={{
            hidden: {
              opacity: 0
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}>
              {[{
              title: "STUDIO",
              description: "Identität, Positionierung, Partner-Matching",
              icon: Lightbulb,
              link: "/studio"
            }, {
              title: "MEDIA",
              description: "Kampagnen, Sichtbarkeit, Agenturkooperation",
              icon: Palette,
              link: "/media"
            }, {
              title: "LAB",
              description: "Systeme, KI, Prozessoptimierung",
              icon: Zap,
              link: "/lab"
            }].map((unit, i) => <motion.div key={unit.title} variants={{
              hidden: {
                opacity: 0,
                y: 40
              },
              visible: {
                opacity: 1,
                y: 0
              }
            }} className="group">
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:border-primary/30">
                    <CardContent className="p-8">
                      <unit.icon className="w-12 h-12 mb-6 text-primary group-hover:scale-110 transition-transform" />
                      <h3 className="text-h3 mb-4">{unit.title}</h3>
                      <p className="text-body text-muted-foreground mb-6">{unit.description}</p>
                      <Button variant="ghost" onClick={() => window.location.href = unit.link} className="group/btn">
                        {unit.title} ansehen
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>)}
            </motion.div>
          </div>
        </section>

        {/* 4️⃣ Warum New Edge kein gewöhnliches Studio ist */}
        <section className="relative section-padding bg-surface">
          <div className="container-xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{
              opacity: 0,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} className="relative order-2 lg:order-1">
                <div className="relative">
                  <motion.div className="absolute -inset-4 bg-gradient-primary rounded-3xl blur-2xl opacity-20" animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }} transition={{
                  duration: 8,
                  repeat: Infinity
                }} />
                  <div className="relative bg-card rounded-3xl p-8 shadow-2xl border border-border">
                    <div className="grid grid-cols-2 gap-4">
                      {[{
                      icon: Network,
                      label: "Netzwerk"
                    }, {
                      icon: Zap,
                      label: "Automation"
                    }, {
                      icon: Users,
                      label: "Partnerschaften"
                    }, {
                      icon: Rocket,
                      label: "Innovation"
                    }].map((item, i) => <motion.div key={item.label} className="bg-surface rounded-2xl p-6 text-center" initial={{
                      opacity: 0,
                      scale: 0
                    }} whileInView={{
                      opacity: 1,
                      scale: 1
                    }} viewport={{
                      once: true
                    }} transition={{
                      delay: i * 0.1
                    }} whileHover={{
                      scale: 1.05
                    }}>
                          <item.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                          <div className="text-sm font-medium">{item.label}</div>
                        </motion.div>)}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              x: 60
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.8
            }} className="order-1 lg:order-2">
                <h2 className="text-h1 mb-8 text-foreground">
                  Warum New Edge kein gewöhnliches{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Studio ist
                  </span>
                </h2>
                
                <div className="space-y-6 text-body-lg text-muted-foreground leading-relaxed">
                  <p>
                    Wir verstehen uns nicht als klassische Agentur – sondern als <strong className="text-foreground">Innovationspartner</strong>, 
                    der andere Agenturen und Unternehmen smarter macht.
                  </p>
                  <p>
                    Wir <strong className="text-foreground">automatisieren Agenturen</strong>, damit sie ihre Kund:innen effizienter betreuen können, 
                    und begleiten externe Unternehmen direkt – vom Friseur bis zum Tech-Startup.
                  </p>
                  <p>
                    New Edge ist das <strong className="text-foreground">Headquarter of Innovation</strong> – 
                    ein übergeordnetes Netzwerkzentrum, das Agenturen und Unternehmen im Mittelstand miteinander verbindet.
                  </p>
                </div>

                <motion.div className="mt-8" initial={{
                opacity: 0
              }} whileInView={{
                opacity: 1
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.4
              }}>
                  <Button size="lg" onClick={() => scrollToSection('kontakt')} className="group">
                    Mit uns sprechen
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5️⃣ Unsere Geschichte */}
        <section id="geschichte" className="relative section-padding bg-background">
          <div className="container-xl">
            <motion.div initial={{
            opacity: 0,
            y: 60
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-center mb-20">
              <h2 className="text-display mb-6 text-foreground">
                Von der Idee zum{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Ökosystem
                </span>
              </h2>
              <p className="text-body-xl text-muted-foreground max-w-3xl mx-auto">
                New Edge wurde gegründet, weil wir gesehen haben, dass Kreativität und Technologie 
                im Mittelstand oft getrennt voneinander existieren.
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="max-w-4xl mx-auto relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />
              
              {[{
              year: "2023",
              title: "Die Gründung",
              description: "New Edge startet mit der Vision, Innovation in den Mittelstand zu bringen."
            }, {
              year: "2024",
              title: "Wachstum & Expansion",
              description: "Aufbau des Netzwerks: Studio, Media und Lab nehmen Form an."
            }, {
              year: "2025",
              title: "Das Ökosystem",
              description: "New Edge wird zum Headquarter of Innovation – Agenturen und Unternehmen arbeiten nahtlos zusammen."
            }, {
              year: "Zukunft",
              title: "Skalierung & Impact",
              description: "Der Mittelstand wird zum Motor echter Innovation durch unser Netzwerk."
            }].map((milestone, i) => <motion.div key={milestone.year} className={`relative grid grid-cols-2 gap-8 mb-16`} initial={{
              opacity: 0,
              x: i % 2 === 0 ? -60 : 60
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: i * 0.2
            }}>
                  {i % 2 === 0 ? <>
                      <div className="text-right pr-8">
                        <Card className="inline-block text-left hover:shadow-xl transition-all">
                          <CardContent className="p-6">
                            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                              {milestone.year}
                            </div>
                            <h3 className="text-h3 mb-3">{milestone.title}</h3>
                            <p className="text-body text-muted-foreground">{milestone.description}</p>
                          </CardContent>
                        </Card>
                      </div>
                      <div className="relative flex items-center">
                        <motion.div className="absolute left-0 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg" whileInView={{
                    scale: [0, 1.2, 1]
                  }} transition={{
                    duration: 0.5
                  }} />
                      </div>
                    </> : <>
                      <div className="relative flex items-center justify-end">
                        <motion.div className="absolute right-0 w-4 h-4 rounded-full bg-secondary border-4 border-background shadow-lg" whileInView={{
                    scale: [0, 1.2, 1]
                  }} transition={{
                    duration: 0.5
                  }} />
                      </div>
                      <div className="pl-8">
                        <Card className="hover:shadow-xl transition-all">
                          <CardContent className="p-6">
                            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                              {milestone.year}
                            </div>
                            <h3 className="text-h3 mb-3">{milestone.title}</h3>
                            <p className="text-body text-muted-foreground">{milestone.description}</p>
                          </CardContent>
                        </Card>
                      </div>
                    </>}
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* 6️⃣ Team & Netzwerk */}
        <section id="netzwerk" className="relative section-padding bg-surface overflow-hidden">
          <motion.div className="absolute top-10 left-10 w-52 h-52 bg-primary/5 rounded-full blur-3xl" animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.3, 1]
        }} transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }} />
          <motion.div className="absolute bottom-10 right-10 w-60 h-60 bg-secondary/5 rounded-full blur-3xl" animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1.3, 1, 1.3]
        }} transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }} />

          <div className="container-xl relative z-10">
            <motion.div initial={{
            opacity: 0,
            y: 60
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.9
          }} className="text-left mb-24">
              <h2 className="text-h1 mb-10 text-foreground leading-[1.2] text-left font-bold">
                Team & Netzwerk
              </h2>
              <p className="text-body-lg text-muted-foreground max-w-3xl leading-[1.9]">
                Unser Team vereint Fachwissen aus Strategie, Design, Technologie und Unternehmertum. 
                Gemeinsam mit Coaches, Entwickler:innen und Partner-Agenturen bilden wir ein Ökosystem, 
                das für jede Herausforderung die passende Lösung findet.
              </p>
            </motion.div>

            <motion.div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20" initial="hidden" whileInView="visible" viewport={{
            once: true
          }} variants={{
            hidden: {
              opacity: 0
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.25,
                delayChildren: 0.2
              }
            }
          }}>
              {[{
              title: "Strategy & Brand Coaching",
              description: "Unsere Strategy Leads und Coaches entwickeln maßgeschneiderte Markenstrategien.",
              team: "Strategy Leads, Brand Coaches"
            }, {
              title: "Creative & Content",
              description: "Unsere Content-Teams kreieren Inhalte – kreativ, datenbasiert und KI-gestützt.",
              team: "Creative Directors, Content Specialists"
            }, {
              title: "Tech & Automation",
              description: "Unsere Entwickler und Tech-Experten bringen Ihre Visionen zum Leben.",
              team: "Lead Developers, Tech Innovators"
            }].map((item, index) => <motion.div key={item.title} variants={{
              hidden: {
                opacity: 0,
                y: 80,
                scale: 0.8
              },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              }
            }} className="group">
                  <div className="bg-card backdrop-blur-md p-10 rounded-2xl shadow-2xl border border-border hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] hover:border-primary/40 transition-all duration-500 h-full">
                    <h3 className="text-2xl mb-8 text-foreground group-hover:text-primary transition-colors leading-tight font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-[1.9] tracking-wide mb-8">
                      {item.description}
                    </p>
                    <p className="text-sm text-muted-foreground font-bold">
                      {item.team}
                    </p>
                  </div>
                </motion.div>)}
            </motion.div>

            {/* Network Stats */}
            <motion.div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{
            once: true
          }} variants={{
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
              {[{
              icon: Users,
              label: "Coaches",
              value: "10+",
              color: "from-blue-600 to-blue-800"
            }, {
              icon: Code,
              label: "Entwickler",
              value: "2",
              color: "from-purple-600 to-purple-800"
            }, {
              icon: Palette,
              label: "Creative Agencies",
              value: "3",
              color: "from-pink-600 to-pink-800"
            }, {
              icon: Globe,
              label: "Länder",
              value: "4",
              color: "from-green-600 to-green-800"
            }, {
              icon: Briefcase,
              label: "Freelancer",
              value: "15+",
              color: "from-orange-600 to-orange-800"
            }].map((stat, index) => <motion.div key={stat.label} variants={{
              hidden: {
                opacity: 0,
                scale: 0.5,
                y: 50
              },
              visible: {
                opacity: 1,
                scale: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              }
            }} whileHover={{
              scale: 1.15,
              y: -10
            }} className="group">
                  <Card className="bg-card border-2 border-border shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all duration-500 h-full">
                    <CardContent className="p-6 text-center relative overflow-hidden">
                      <motion.div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                      
                      <motion.div className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} p-3 shadow-lg relative z-10`} whileHover={{
                    rotate: 360,
                    scale: 1.2
                  }} transition={{
                    duration: 0.6,
                    type: "spring"
                  }}>
                        <stat.icon className="w-full h-full text-white" />
                      </motion.div>
                      
                      <motion.div className="text-2xl sm:text-3xl font-bold text-foreground mb-1 relative z-10" whileHover={{
                    scale: 1.1
                  }}>
                        {stat.value}
                      </motion.div>
                      
                      <div className="text-sm text-muted-foreground relative z-10">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>)}
            </motion.div>
          </div>
        </section>

        {/* 7️⃣ Werte & Kultur */}
        <section id="werte" className="relative section-padding bg-background">
          <div className="container-xl">
            <motion.div initial={{
            opacity: 0,
            y: 60
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-center mb-16">
              <h2 className="text-display mb-6 text-foreground">
                Was uns{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  antreibt
                </span>
              </h2>
              <p className="text-body-xl text-muted-foreground max-w-3xl mx-auto">
                Partnerschaftlich. Innovativ. Transparent. Menschlich.
              </p>
            </motion.div>

            <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto" initial="hidden" whileInView="visible" viewport={{
            once: true
          }} variants={{
            hidden: {
              opacity: 0
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}>
              {[{
              icon: Handshake,
              title: "Partnerschaftlich",
              description: "Wir glauben an echte Zusammenarbeit auf Augenhöhe – mit Agenturen und Unternehmen."
            }, {
              icon: Rocket,
              title: "Innovativ",
              description: "Wir bringen neue Ideen, moderne Technologie und kreative Lösungen zusammen."
            }, {
              icon: ShieldCheck,
              title: "Transparent",
              description: "Offene Kommunikation und klare Prozesse sind die Basis unserer Arbeit."
            }, {
              icon: Heart,
              title: "Menschlich",
              description: "Technologie ist wichtig – aber am Ende geht es immer um Menschen und ihre Ziele."
            }].map((value, i) => <motion.div key={value.title} variants={{
              hidden: {
                opacity: 0,
                y: 40,
                scale: 0.9
              },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1
              }
            }}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:border-primary/30 group">
                    <CardContent className="p-8 text-center">
                      <motion.div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-primary p-4 shadow-lg" whileHover={{
                    rotate: 360,
                    scale: 1.1
                  }} transition={{
                    duration: 0.6
                  }}>
                        <value.icon className="w-full h-full text-white" />
                      </motion.div>
                      <h3 className="text-h3 mb-4 group-hover:text-primary transition-colors">{value.title}</h3>
                      <p className="text-body text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>)}
            </motion.div>
          </div>
        </section>

        {/* 8️⃣ Gründer & Leadership */}
        <section className="relative section-padding bg-surface">
          <div className="container-xl">
            <motion.div initial={{
            opacity: 0,
            y: 60
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-center mb-16">
              <h2 className="text-display mb-6 text-foreground">
                Die{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Gründer
                </span>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {[{
              name: "Sebastian Pachón",
              role: "Founder & Creative-Tech Partner",
              description: "Verbindet technisches Verständnis mit kreativer Vision.",
              image: "/assets/8b2fd89c-8469-4c89-bbba-463d2c352273.png"
            }, {
              name: "Wenjamin Zabezhanskiy",
              role: "Operations & Innovation Partner",
              description: "Denkt in Systemen und Prozessen, entwickelt Strukturen, die Skalierung ermöglichen.",
              image: "/assets/c19dc1d8-e93c-4d25-a965-34dbef5d9fe1.png"
            }].map((founder, i) => <motion.div key={founder.name} initial={{
              opacity: 0,
              y: 60
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: i * 0.2
            }}>
                  <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500">
                    <div className="aspect-square overflow-hidden">
                      <motion.img src={founder.image} alt={founder.name} className="w-full h-full object-cover" whileHover={{
                    scale: 1.05
                  }} transition={{
                    duration: 0.6
                  }} />
                    </div>
                    <CardContent className="p-8">
                      <h3 className="text-h2 mb-2 text-foreground">{founder.name}</h3>
                      <div className="text-body font-semibold text-primary mb-4">{founder.role}</div>
                      <p className="text-body text-muted-foreground leading-relaxed">
                        {founder.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>)}
            </div>

            <motion.div className="text-center mt-12" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.4
          }}>
              <Button size="lg" onClick={scrollToContact} className="group">
                Mit uns sprechen
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* 9️⃣ Zukunft & Einladung */}
        <section id="kontakt" className="relative section-padding bg-background overflow-hidden">
          <div className="absolute inset-0">
            <motion.div className="absolute inset-0 bg-gradient-primary opacity-10" animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          }} transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }} style={{
            backgroundSize: '200% 200%'
          }} />
          </div>

          <div className="container-xl relative z-10">
            <motion.div initial={{
            opacity: 0,
            y: 60
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-center max-w-4xl mx-auto">
              <motion.h2 className="text-display mb-8 text-foreground" initial={{
              opacity: 0,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }}>
                Join the{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Movement
                </span>
              </motion.h2>
              
              <motion.p className="text-body-xl text-muted-foreground mb-12 leading-relaxed" initial={{
              opacity: 0
            }} whileInView={{
              opacity: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.2
            }}>
                New Edge ist das Headquarter für Innovation.
                Hier entsteht die Zukunft von Marken, Agenturen und Prozessen.
                <br />
                <strong className="text-foreground">Sind Sie bereit, Teil davon zu werden?</strong>
              </motion.p>

              <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.4
            }}>
                <Button size="lg" onClick={scrollToContact} className="group">
                  Kontakt aufnehmen
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" onClick={scrollToContact}>
                  Partner werden
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>;
};
export default About;