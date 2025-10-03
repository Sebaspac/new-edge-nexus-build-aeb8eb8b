import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { HeroSection } from '../components/HeroSection';
import { InnovationSection } from '../components/InnovationSection';
import { ScrollAnimation } from '../hooks/useScrollAnimation';
import { FastLoadWrapper } from '../components/FastLoadWrapper';
import { MobileNavigation } from '@/components/MobileNavigation';
import CookieConsent from '@/components/CookieConsent';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { toast } from "@/hooks/use-toast";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Zap, Brain, Target, Rocket, Star, Users, Code, Palette, Globe, Briefcase, Phone, MessageSquare, Eye } from "lucide-react";
const Index = () => {
  const {
    t
  } = useLanguage();
  const [isContactSheetOpen, setIsContactSheetOpen] = useState(false);
  const [openAccordionIndex, setOpenAccordionIndex] = useState(0);

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
    number: "30%",
    label: "mehr Zeit fürs Kerngeschäft",
    icon: Target
  }, {
    number: "50-300",
    label: "Mitarbeiter (unsere Zielgruppe)",
    icon: Users
  }, {
    number: "5x",
    label: "ROI durch Automatisierung",
    icon: Rocket
  }, {
    number: "95%",
    label: "Kundenzufriedenheit",
    icon: Star
  }];
  return <FastLoadWrapper>
      <Helmet>
        <title>New Edge - Ihr Unternehmen an die Spitze bringen | Innovation & Automatisierung für KMUs</title>
        <meta name="description" content="New Edge automatisiert Geschäftsprozesse für mittelständische KMUs. Gewinnen Sie 30% mehr Zeit, steigern Sie Effizienz und werden Sie Vorreiter Ihrer Branche – mit KI-gestützten Tools und hybrider Expertise." />
        <meta name="keywords" content="KMU Automatisierung, Prozessoptimierung, Digitalisierung Mittelstand, KI für Unternehmen, Geschäftsprozesse automatisieren, Effizienzsteigerung, Innovation für KMUs" />
        <meta property="og:title" content="New Edge - Innovation & Automatisierung für mittelständische KMUs" />
        <meta property="og:description" content="Automatisierung und Innovation für KMUs: 30% mehr Zeit fürs Kerngeschäft, messbare Effizienzsteigerung, Vorreiter Ihrer Branche werden." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://new-edge.com" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Mobile Navigation */}
        <MobileNavigation onContactClick={() => setIsContactSheetOpen(true)} theme="dark" />

        {/* Hero Section */}
        <HeroSection onContactClick={() => setIsContactSheetOpen(true)} />

        {/* Info Section */}
        <section className="relative py-8 sm:py-12 bg-gradient-to-br from-white via-gray-50/30 to-white overflow-hidden">
          {/* Parallax Floating Elements */}
          <motion.div className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl" initial={{
          opacity: 0,
          scale: 0
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }} transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }} />
          <motion.div className="absolute bottom-10 left-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl" initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} animate={{
          x: [0, 20, 0],
          rotate: [0, 180, 360]
        }} transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }} />

          <div className="container-xl relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{
            once: true,
            margin: "-80px"
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
          }} className="max-w-5xl space-y-4">
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
                  duration: 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              }
            }} className="mb-6">
                <h2 className="text-[42px] sm:text-[44px] lg:text-[48px] font-semibold mb-3 leading-[1.2] text-black">
                  Wir bringen Ihr Unternehmen{" "}
                  <motion.span className="bg-gradient-primary bg-clip-text text-transparent inline-block" whileInView={{
                  scale: [1, 1.05, 1]
                }} transition={{
                  duration: 1,
                  delay: 0.3
                }}>
                    an die Spitze
                  </motion.span>
                  {" "}Ihrer Branche
                </h2>
                <motion.p className="text-base text-gray-600 mt-4 leading-[1.5] max-w-3xl" variants={{
                hidden: {
                  opacity: 0,
                  y: 20
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: 0.2
                  }
                }
              }}>
                  Wir helfen Marken, sichtbar zu werden, Prozesse zu automatisieren – und den Wandel durch Innovation aktiv zu gestalten.
                </motion.p>
              </motion.div>
              
              

              
            </motion.div>
          </div>
        </section>

        {/* Innovation Section */}
        <InnovationSection />

        {/* Problem-Lösung Sektion - Neu aus Briefing */}
        <section className="relative py-8 sm:py-12 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
          {/* Enhanced Animated background with multiple layers */}
          <motion.div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" animate={{
          scale: [1, 1.3, 1],
          x: [0, 60, 0],
          y: [0, -40, 0],
          rotate: [0, 90, 0]
        }} transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }} />
          <motion.div className="absolute bottom-20 left-20 w-64 h-64 bg-secondary/5 rounded-full blur-2xl" animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
          y: [0, 40, 0]
        }} transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }} />

          <div className="container-xl relative z-10">
            {/* Header with enhanced animations */}
            <motion.div initial={{
            opacity: 0,
            y: 50,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            y: 0,
            scale: 1
          }} viewport={{
            once: true,
            margin: "-80px"
          }} transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }} className="text-left mb-12">
              <motion.h2 initial={{
              opacity: 0,
              rotateX: -20
            }} whileInView={{
              opacity: 1,
              rotateX: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.2,
              duration: 0.7
            }} whileHover={{
              scale: 1.03
            }} className="text-[42px] sm:text-[44px] lg:text-[48px] font-semibold mb-4 bg-gradient-primary bg-clip-text leading-[1.25] text-gray-950">
                Für wen wir arbeiten & warum
              </motion.h2>
              <motion.p className="text-base text-gray-600 max-w-3xl leading-[1.5]" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.4,
              duration: 0.6
            }}>
                Spezialisiert auf mittelständische KMUs, die Vorreiter werden wollen
              </motion.p>
            </motion.div>

            {/* Two-Column Layout: Accordion Left, Animation Right */}
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
              {/* Left: Accordion List */}
              <div className="space-y-1">
                {[{
                title: "Ihre Herausforderung",
                content: "Manuelle, zeitraubende Prozesse im Tagesgeschäft rauben Ihnen wertvolle Zeit. Keine Ressourcen für Digitalisierung und Innovation. Fachkräftemangel und steigende Kosten belasten Ihr Unternehmen. Während Wettbewerber fortschreiten, bleiben Sie zurück. Klassische Agenturen liefern keine echte Innovation."
              }, {
                title: "Unsere Lösung",
                content: "KI-gestützte Automatisierung Ihrer Prozesse gibt Ihnen 30% mehr Zeit für Ihr Kerngeschäft zurück. Messbare Effizienzsteigerung & ROI durch intelligente Systeme. Sie werden Vorreiter Ihrer Branche mit unserer hybriden Expertise: Marketing + Technologie + Automatisierung aus einer Hand."
              }, {
                title: "Konkret für Sie",
                content: "Für mittelständische Produktions- oder Dienstleistungsunternehmen (50-300 Mitarbeiter), die ihre Prozesse manuell betreiben und unter Fachkräftemangel leiden, implementiert New Edge KI-gestützte Automatisierungen und vernetzt sie mit passenden Agenturen. Dadurch gewinnen sie 30% mehr Zeit für ihr Kerngeschäft, senken Fehlerquoten, stärken ihre Marke und werden als innovative Vorreiter in ihrer Branche wahrgenommen."
              }].map((item, index) => {
                const isOpen = openAccordionIndex === index;
                return <motion.div key={item.title} initial={{
                  opacity: 0,
                  y: 10
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} viewport={{
                  once: true
                }} transition={{
                  duration: 0.3,
                  delay: index * 0.05
                }} className="border-b border-border last:border-b-0">
                      {/* Accordion Header */}
                      <button onClick={() => setOpenAccordionIndex(isOpen ? -1 : index)} className="w-full py-5 px-0 flex items-center justify-between text-left hover:opacity-70 transition-opacity">
                        <h3 className="text-[28px] sm:text-[30px] lg:text-[32px] font-medium text-foreground leading-[1.3]">
                          {item.title}
                        </h3>
                        <motion.svg animate={{
                      rotate: isOpen ? 180 : 0
                    }} transition={{
                      duration: 0.3
                    }} className="w-5 h-5 text-muted-foreground flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      </button>

                      {/* Accordion Content */}
                      <motion.div initial={false} animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0
                  }} transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                  }} className="overflow-hidden">
                        <div className="pb-6 pr-8">
                          <p className="text-base text-muted-foreground leading-[1.5]">
                            {item.content}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>;
              })}
              </div>

              {/* Right: Animated Visual */}
              <div className="lg:sticky lg:top-24">
                <motion.div initial={{
                opacity: 0,
                scale: 0.95
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.6
              }} className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <motion.div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent" animate={{
                  backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
                }} transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }} style={{
                  backgroundSize: "200% 200%"
                }} />
                  <motion.div className="absolute inset-0 flex items-center justify-center" animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }} transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}>
                    <motion.div className="w-64 h-64 bg-white/20 backdrop-blur-sm rounded-3xl" animate={{
                    rotateY: [0, 360]
                  }} transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }} style={{
                    transformStyle: "preserve-3d"
                  }} />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Points Section with Modern Animations */}
        <section className="relative py-8 sm:py-12 bg-gradient-to-br from-white via-blue-50/20 to-white overflow-hidden">
          {/* Enhanced Parallax Floating Elements */}
          <motion.div className="absolute top-40 right-10 w-28 h-28 bg-accent/10 rounded-full blur-xl" initial={{
          opacity: 0,
          scale: 0
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.4, 1],
          rotate: [0, 180, 360]
        }} transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }} />
          <motion.div className="absolute bottom-20 left-20 w-40 h-40 bg-primary/5 rounded-full blur-2xl" initial={{
          opacity: 0,
          rotate: -180
        }} whileInView={{
          opacity: 1,
          rotate: 0
        }} viewport={{
          once: true
        }} animate={{
          rotate: [0, 360],
          scale: [1, 0.8, 1],
          x: [0, -20, 0]
        }} transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }} />
          
          <div className="container-xl relative z-10">
            {/* Section Title with enhanced scale animation */}
            <motion.div className="text-left mb-12" initial={{
            opacity: 0,
            scale: 0.8,
            y: 60
          }} whileInView={{
            opacity: 1,
            scale: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: "-80px"
          }} transition={{
            duration: 0.9,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}>
              <motion.h2 className="text-[42px] sm:text-[44px] lg:text-[48px] font-semibold mb-4 text-black leading-[1.25]" initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.2,
              duration: 0.7
            }} whileHover={{
              scale: 1.03
            }}>
                Unsere innovative Herangehensweise
              </motion.h2>
            </motion.div>
            
            {/* Grid with enhanced stagger animation */}
            <motion.div className="grid md:grid-cols-2 gap-4 items-stretch max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{
            once: true,
            margin: "-80px"
          }} variants={{
            hidden: {
              opacity: 0
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
              }
            }
          }}>
              {[{
              number: "01",
              title: "Automatisierung mit Impact",
              description: "Wir automatisieren repetitive Aufgaben, damit Sie sich auf Ihr Kerngeschäft konzentrieren können.",
              gradient: "from-purple-50/80 to-purple-50/50",
              border: "border-purple-200/60",
              iconBg: "from-purple-500 to-purple-600",
              shadow: "rgba(139, 92, 246, 0.15)",
              icon: Zap
            }, {
              number: "02",
              title: "Marketing & Technologie vereint",
              description: "Interdisziplinäres Team aus Strategen, Creatives und Entwicklern; alles aus einer Hand.",
              gradient: "from-blue-50/80 to-blue-50/50",
              border: "border-blue-200/60",
              iconBg: "from-blue-500 to-blue-600",
              shadow: "rgba(59, 130, 246, 0.15)",
              icon: Brain
            }, {
              number: "03",
              title: "Zugänglichkeit statt Komplexität",
              description: "Transparente Prozesse und verständliche Lösungen statt Technik Buzzwords.",
              gradient: "from-cyan-50/80 to-cyan-50/50",
              border: "border-cyan-200/60",
              iconBg: "from-cyan-500 to-cyan-600",
              shadow: "rgba(6, 182, 212, 0.15)",
              icon: Eye
            }, {
              number: "04",
              title: "Individuell & skalierbar",
              description: "Maßgeschneiderte Setups ohne Abo Modelle – Sie bezahlen nur, was Sie nutzen.",
              gradient: "from-pink-50/80 to-pink-50/50",
              border: "border-pink-200/60",
              iconBg: "from-pink-500 to-pink-600",
              shadow: "rgba(236, 72, 153, 0.15)",
              icon: Star
            }].map((point, index) => <motion.div key={index} variants={{
              hidden: {
                opacity: 0,
                y: 30,
                scale: 0.95
              },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              }
            }} className="h-full">
                  <motion.div className={`bg-gradient-to-br ${point.gradient} backdrop-blur-sm p-6 rounded-2xl border ${point.border} shadow-lg h-full flex flex-col`}
                    whileHover={{
                      scale: 1.02,
                      y: -5,
                      boxShadow: `0 15px 30px -10px ${point.shadow}`
                    }}
                    transition={{
                      duration: 0.2
                    }}
                  >
                    <motion.div 
                      className={`w-12 h-12 bg-gradient-to-br ${point.iconBg} rounded-xl flex items-center justify-center mb-4`}
                      whileHover={{
                        rotate: 180,
                        scale: 1.05
                      }}
                      transition={{
                        duration: 0.4
                      }}
                    >
                      <point.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-[28px] sm:text-[30px] lg:text-[32px] font-medium mb-2 text-foreground leading-[1.3]">
                      {point.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-[1.5]">
                      {point.description}
                    </p>
                  </motion.div>
                </motion.div>)}
            </motion.div>
          </div>
        </section>

        {/* Unsere Kompetenzbereiche - Light Section */}
        <section className="relative py-16 sm:py-24 bg-gradient-to-br from-white via-gray-50/50 to-white overflow-hidden">
          {/* Animated background elements */}
          <motion.div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }} transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }} />
          <motion.div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
          y: [0, 40, 0]
        }} transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }} />

          <div className="container-xl relative z-10">
            {/* Header */}
            <motion.div className="text-left mb-16" initial={{
            opacity: 0,
            y: 40
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8
          }}>
              <motion.h2 className="text-[42px] sm:text-[44px] lg:text-[48px] font-semibold text-foreground mb-6 leading-[1.25]" initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.2,
              duration: 0.7
            }}>
                Unsere Kompetenzbereiche
              </motion.h2>
              <motion.p className="text-base text-muted-foreground max-w-3xl leading-[1.5]" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.4,
              duration: 0.6
            }}>
                Drei Bereiche, eine Vision: Ihre Marke erfolgreich in der digitalen Welt positionieren.
              </motion.p>
            </motion.div>

            {/* Service Cards Grid */}
            <motion.div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto" initial="hidden" whileInView="visible" viewport={{
            once: true,
            margin: "-100px"
          }} variants={{
            hidden: {
              opacity: 0
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
              }
            }
          }}>
              {services.map((service, index) => <motion.div key={index} variants={{
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
                  duration: 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              }
            }} whileHover={{
              scale: 1.05,
              y: -10,
              transition: {
                duration: 0.3
              }
            }}>
                  <Card className="h-full bg-white border-border hover:border-primary/50 backdrop-blur-sm transition-all duration-500 hover:shadow-xl">
                    <CardContent className="p-8">
                      {/* Icon with gradient background */}
                      <motion.div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`} whileHover={{
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: {
                      duration: 0.5
                    }
                  }}>
                        <service.icon className="w-8 h-8 text-white" />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-[28px] sm:text-[30px] lg:text-[32px] font-medium text-foreground mb-4 leading-[1.3]">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-base text-muted-foreground mb-6 leading-[1.5]">
                        {service.description}
                      </p>

                      {/* Button */}
                      <Button variant="default" className="bg-primary hover:bg-primary/90 text-white group" asChild>
                        <Link to={`/${service.title.toLowerCase().split(' ')[0]}`}>
                          Mehr erfahren
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>)}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact-section" className="relative py-12 sm:py-16 bg-gradient-to-br from-primary/5 via-background to-primary/10">
          <div className="container-xl">
            <div className="text-center mb-16">
              <h2 className="text-[42px] sm:text-[44px] lg:text-[48px] font-semibold mb-4 text-foreground leading-[1.25]">
                Get in touch
              </h2>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-[1.5]">
                Want to get in touch? We'd love to hear from you. Here's how you can reach us.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Talk to Sales */}
              <Card className="card-modern text-center p-8 hover:shadow-xl transition-all">
                <CardContent className="space-y-6 p-0">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-[28px] sm:text-[30px] lg:text-[32px] font-medium mb-2 text-foreground leading-[1.3]">Talk to Sales</h3>
                    <p className="text-base text-muted-foreground mb-4 leading-[1.5]">
                      Interested in our services? Just pick up the phone to chat with a member of our sales team.
                    </p>
                    <a href="tel:+4915750998236" className="text-primary font-semibold text-lg hover:underline">
                      +49 157 5099 8236
                    </a>
                  </div>
                  
                </CardContent>
              </Card>

              {/* Contact Support */}
              <Card className="card-modern text-center p-8 hover:shadow-xl transition-all">
                <CardContent className="space-y-6 p-0">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-[28px] sm:text-[30px] lg:text-[32px] font-medium mb-2 text-foreground leading-[1.3]">Contact Customer Support</h3>
                    <p className="text-base text-muted-foreground mb-4 leading-[1.5]">
                      Sometimes you need a little help from your friends. Or a support rep. Don't worry... we're here for you.
                    </p>
                  </div>
                  <Button onClick={() => setIsContactSheetOpen(true)} className="w-full btn-primary text-slate-50">
                    Contact Support
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form Sheet */}
        <Sheet open={isContactSheetOpen} onOpenChange={setIsContactSheetOpen}>
          <SheetContent side="right" className="w-full sm:max-w-xl overflow-y-auto">
            <SheetHeader className="mb-6">
              <SheetTitle className="text-2xl font-bold">Projekt besprechen</SheetTitle>
              <SheetDescription>
                Erzählen Sie uns von Ihrem Projekt - wir melden uns zeitnah bei Ihnen.
              </SheetDescription>
            </SheetHeader>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-5">
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
              }].map(field => <div key={field.id} className="space-y-2">
                    <Label htmlFor={field.id} className="text-foreground font-medium">
                      {field.label}
                    </Label>
                    <Input id={field.id} name={field.id} type={field.type} placeholder={field.placeholder} required={field.required} className="bg-background/50 border-border focus:border-primary transition-colors" />
                  </div>)}
                
                <div className="space-y-2">
                  <Label htmlFor="nachricht" className="text-foreground font-medium">
                    Nachricht *
                  </Label>
                  <Textarea id="nachricht" name="nachricht" placeholder="Erzählen Sie uns von Ihrem Projekt..." required className="min-h-[120px] bg-background/50 border-border focus:border-primary transition-colors resize-none" />
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full btn-primary">
                Nachricht senden
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </SheetContent>
        </Sheet>

        {/* Footer */}
        <footer className="bg-surface-elevated/80 border-t border-border py-12 sm:py-16">
          <div className="container-xl">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="sm:col-span-2">
                 <div className="flex items-center mb-4">
                    <img src="/assets/90e4fdca-8c29-48f7-9568-686b611a62f4.png" alt="New Edge Logo" className="h-6 w-6 sm:h-8 sm:w-8 mr-2 sm:mr-3" width={32} height={32} />
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
                <Link to="/impressum" className="text-muted-foreground hover:text-primary text-xs sm:text-sm transition-colors">Impressum & Datenschutz</Link>
              </div>
            </div>
          </div>
        </footer>

        {/* Cookie Consent */}
        <CookieConsent />
      </div>
    </FastLoadWrapper>;
};
export default Index;