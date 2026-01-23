import { useEffect, useState, useRef, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useOptimizedAnimation } from "@/hooks/useOptimizedAnimation";
import {
  ArrowRight,
  ArrowDown,
  ChevronDown,
  Lightbulb,
  Palette,
  Zap,
  Star,
  Target,
  Eye,
  Phone,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { MobileNavigation } from "@/components/MobileNavigation";
import CookieConsent from "@/components/CookieConsent";
import { useLanguage } from "@/contexts/LanguageContext";
import CyberneticGridShader from "@/components/ui/cybernetic-grid-shader";
import DisplayCards from "@/components/ui/display-cards";
import { SplashCursor } from "@/components/ui/splash-cursor";
const Footer = lazy(() =>
  import("@/components/Footer").then((m) => ({
    default: m.Footer,
  })),
);
const Services = () => {
  console.log("Services component loaded successfully");
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [openAccordionIndex, setOpenAccordionIndex] = useState(0);
  const [isContactSheetOpen, setIsContactSheetOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { shouldAnimate, whileHover } = useOptimizedAnimation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsVisible(true);
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToContact = () => {
    setIsContactSheetOpen(true);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Import validation utilities
    const { extractFormData, validateContactForm, submitContactForm } = await import("@/utils/contactFormValidation");

    // Extract and validate form data
    const rawData = extractFormData(formData, "SERVICES");
    const validation = validateContactForm(rawData);

    if (!validation.success) {
      toast({
        title: "Validierungsfehler",
        description: validation.error,
        variant: "destructive",
        duration: 5000,
      });
      return;
    }

    const result = await submitContactForm(validation.data!);

    if (result.success) {
      toast({
        title: "Wir designen für dich",
        description: "Vielen Dank für deine Anfrage! Wir melden uns bald bei dir.",
        duration: 5000,
      });
      form.reset();
      setIsContactSheetOpen(false);
    } else {
      toast({
        title: "Fehler",
        description: result.error || "Es gab ein Problem beim Senden deiner Nachricht. Bitte versuche es erneut.",
        variant: "destructive",
        duration: 5000,
      });
    }
  };
  return (
    <div ref={containerRef} className="min-h-screen bg-background overflow-hidden">
      <MobileNavigation onContactClick={scrollToContact} theme="dark" />

      {/* Hero Section */}
      <section className="relative w-full">
        <SplashCursor />
        <div className="w-full relative h-[75vh] lg:h-auto lg:aspect-video">
          <CyberneticGridShader />

          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900/80 z-10 pointer-events-none" />

          {/* Text Content - Lower Center */}
          <div className="absolute inset-x-0 bottom-0 pb-24 sm:pb-32 flex flex-col items-center justify-end p-6 z-20">
            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="text-center mb-6"
            >
              <span className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black block mb-2">
                THE
              </span>
              <motion.span
                className="italic bg-clip-text text-transparent text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black block"
                style={{
                  background: "linear-gradient(135deg, #A78BFA, #818CF8, #60A5FA)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                {...(shouldAnimate && {
                  whileHover: {
                    scale: 1.05,
                    textShadow: "0 0 20px rgba(167, 139, 250, 0.5)",
                  },
                })}
              >
                JOURNEY
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="text-gray-400 text-sm sm:text-base md:text-lg font-medium tracking-wider uppercase mb-8 text-center"
            >
              From Vision to Reality
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="services-overview relative py-12 sm:py-16 bg-white overflow-hidden">
        <div className="container-xl relative z-10 mx-auto">
          <div className="max-w-6xl mx-auto px-4">
            {/* Simplified Journey Visualization */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-100px",
              }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
              className="mt-8 sm:mt-20"
            >
              <div className="max-w-4xl mx-auto">
                {/* Journey Header */}
                <div className="text-center mb-16">
                  <motion.h3
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    className="text-display text-foreground mb-6 text-center"
                  >
                    Unsere Reise
                  </motion.h3>
                </div>

                {/* Animated Journey Path */}
                <div className="relative">
                  {/* Main Journey Line */}
                  <motion.div
                    className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-yellow-500 transform -translate-x-1/2"
                    style={{
                      height: "calc(100% - 200px)",
                    }}
                    initial={{
                      scaleY: 0,
                      opacity: 0,
                    }}
                    whileInView={{
                      scaleY: 1,
                      opacity: 1,
                    }}
                    viewport={{
                      once: true,
                      margin: "-100px",
                    }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Journey Steps */}
                  <div className="space-y-24 relative z-10">
                    {/* Step 1: Strategy */}
                    <motion.div
                      className="flex items-center"
                      whileInView={
                        shouldAnimate
                          ? {
                              x: [100, 0],
                              opacity: [0, 1],
                            }
                          : {
                              opacity: 1,
                            }
                      }
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: shouldAnimate ? 0.8 : 0,
                        ease: "easeOut",
                      }}
                    >
                      <div className="flex-1 max-w-md mr-8">
                        <div className="bg-gradient-to-br from-purple-100 to-purple-50 backdrop-blur-xl p-8 rounded-3xl border border-purple-300 shadow-lg transition-transform hover:scale-[1.02] duration-200">
                          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                            <Target className="w-8 h-8 text-white" />
                          </div>
                          <h4 className="text-h3 mb-4 text-center text-foreground text-lg">STRATEGIE</h4>
                          <p className="text-muted-foreground text-center leading-relaxed text-base">
                            Das Fundament für Ihren Erfolg. Wir entwickeln eine klare Roadmap und visuelle Identität.
                          </p>
                        </div>
                      </div>

                      {/* Central Journey Node */}
                      <motion.div
                        className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full border-2 sm:border-4 border-white shadow-2xl flex items-center justify-center relative z-20 mx-auto lg:mx-0 aspect-square"
                        initial={{
                          scale: 0,
                          opacity: 0,
                        }}
                        whileInView={{
                          scale: 1,
                          opacity: 1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay: 0.5,
                          duration: 0.5,
                        }}
                      >
                        <span className="text-white font-bold text-lg sm:text-2xl">1</span>
                      </motion.div>

                      <div className="hidden lg:block flex-1 max-w-md ml-8 opacity-30">
                        <div className="h-32"></div>
                      </div>
                    </motion.div>

                    {/* Step 2: Implementation */}
                    <motion.div
                      className="flex items-center"
                      whileInView={
                        shouldAnimate
                          ? {
                              x: [-100, 0],
                              opacity: [0, 1],
                            }
                          : {
                              opacity: 1,
                            }
                      }
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: shouldAnimate ? 0.8 : 0,
                        ease: "easeOut",
                      }}
                    >
                      <div className="flex-1 max-w-md mr-8 opacity-30">
                        <div className="h-32"></div>
                      </div>

                      {/* Central Journey Node */}
                      <motion.div
                        className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full border-2 sm:border-4 border-white shadow-2xl flex items-center justify-center relative z-20 mx-auto lg:mx-0 aspect-square"
                        initial={{
                          scale: 0,
                          opacity: 0,
                        }}
                        whileInView={{
                          scale: 1,
                          opacity: 1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay: 0.6,
                          duration: 0.5,
                        }}
                      >
                        <span className="text-white font-bold text-lg sm:text-2xl">2</span>
                      </motion.div>

                      <div className="flex-1 max-w-md ml-8">
                        <div className="bg-gradient-to-br from-blue-100 to-blue-50 backdrop-blur-xl p-8 rounded-3xl border border-blue-300 shadow-lg transition-transform hover:scale-[1.02] duration-200">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                            <Palette className="w-8 h-8 text-white" />
                          </div>
                          <h4 className="text-h3 mb-4 text-center text-foreground text-lg">UMSETZUNG</h4>
                          <p className="text-muted-foreground text-center leading-relaxed">
                            Content-Produktion und Reichweite-Aufbau. Ihre Botschaft erreicht die richtige Zielgruppe.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Step 3: Innovation */}
                    <motion.div
                      className="flex items-center"
                      whileInView={
                        shouldAnimate
                          ? {
                              x: [100, 0],
                              opacity: [0, 1],
                            }
                          : {
                              opacity: 1,
                            }
                      }
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: shouldAnimate ? 0.8 : 0,
                        ease: "easeOut",
                      }}
                    >
                      <div className="flex-1 max-w-md mr-8">
                        <div className="bg-gradient-to-br from-yellow-50 to-white backdrop-blur-xl p-8 rounded-3xl border border-yellow-200 shadow-lg transition-transform hover:scale-[1.02] duration-200">
                          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                            <Zap className="w-8 h-8 text-white" />
                          </div>
                          <h4 className="mb-4 text-center text-foreground text-lg font-semibold">INNOVATION</h4>
                          <p className="text-muted-foreground text-center leading-relaxed">
                            Technische Implementierung und Automation für nachhaltigen, messbaren Erfolg.
                          </p>
                        </div>
                      </div>

                      {/* Central Journey Node */}
                      <motion.div
                        className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full border-2 sm:border-4 border-white shadow-2xl flex items-center justify-center relative z-20 mx-auto lg:mx-0 aspect-square"
                        initial={{
                          scale: 0,
                          opacity: 0,
                        }}
                        whileInView={{
                          scale: 1,
                          opacity: 1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay: 0.7,
                          duration: 0.5,
                        }}
                      >
                        <span className="text-white font-bold text-lg sm:text-2xl">3</span>
                      </motion.div>

                      <div className="flex-1 max-w-md ml-8 opacity-30">
                        <div className="h-32"></div>
                      </div>
                    </motion.div>

                    {/* Journey Success - Final Destination */}
                    <motion.div
                      className="text-center pt-16"
                      initial={{
                        opacity: 0,
                        scale: 0.5,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: 1.3,
                        duration: 0.8,
                        type: "spring",
                      }}
                    >
                      <motion.div
                        className="w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full border-8 border-white shadow-2xl flex items-center justify-center mx-auto mb-8 relative"
                        {...(shouldAnimate && {
                          whileHover: {
                            scale: 1.1,
                            boxShadow: "0 0 50px rgba(16, 185, 129, 0.8)",
                            transition: {
                              duration: 0.3,
                            },
                          },
                        })}
                      >
                        <Lightbulb className="w-16 h-16 text-white" />
                      </motion.div>

                      <motion.h4
                        initial={{
                          opacity: 0,
                          y: 20,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: 1.5,
                          duration: 0.6,
                        }}
                        className="text-3xl mb-4 text-foreground font-extrabold"
                      >
                        SKALIERUNG
                      </motion.h4>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Das Ergebnis Section */}

      {/* Warum New Edge Section */}

      {/* Erfolg Erreicht Section */}

      {/* Problem-Lösung Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-br from-white via-gray-50/50 to-white overflow-hidden">
        {/* Static background decorations */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-secondary/5 rounded-full blur-2xl" />

        <div className="container-xl relative z-10">
          {/* Header with enhanced animations */}
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="text-left mb-12"
          >
            <motion.h2
              initial={{
                opacity: 0,
                rotateX: -20,
              }}
              whileInView={{
                opacity: 1,
                rotateX: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.2,
                duration: 0.7,
              }}
              {...(shouldAnimate && whileHover)}
              className="text-[42px] sm:text-[48px] md:text-[52px] text-foreground mb-6 leading-[1.25] lg:text-4xl font-semibold"
            >
              Die Vorteile im Detail
            </motion.h2>
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.4,
                duration: 0.6,
              }}
              className="text-muted-foreground max-w-3xl leading-[1.5] text-xl mb-4"
            >
              Wir arbeiten partnerfähig mit Ihren Teams und bestehenden Agenturen: New Edge orchestriert
              Kreativ-Spezialist:innen und liefert die Automations-Ebene.
            </motion.p>
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.5,
                duration: 0.6,
              }}
              className="text-muted-foreground max-w-3xl leading-[1.5] text-xl"
            >
              Ein Prozess, ein Dashboard, ein System.
            </motion.p>
          </motion.div>

          {/* Two-Column Layout: Accordion Left, Apple Cards Right */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-center">
            {/* Left side: Accordion */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="space-y-2"
            >
              {[
                {
                  title: "Skalierbare Automatisierung",
                  content: "Automationen modular starten – bei Wachstum einfach erweitern und optimieren.",
                },
                {
                  title: "Markenstärke durch Kreativität",
                  content: "Vernetzte Agenturpartner sorgen für Design, Content & Strategie mit messbarer Wirkung.",
                },
                {
                  title: "Team-Entlastung & Fokus",
                  content: "Routineaufgaben laufen automatisch – Ihr Team konzentriert sich auf Wachstum.",
                },
                {
                  title: "Sicher & transparent",
                  content: "DSGVO-konforme Setups mit klaren Rollen und Echtzeit-Dashboards für volle Kontrolle.",
                },
              ].map((item, index) => {
                const isOpen = openAccordionIndex === index;
                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: shouldAnimate ? index * 0.05 : 0,
                    }}
                    className="group"
                  >
                    <button
                      onClick={() => setOpenAccordionIndex(isOpen ? -1 : index)}
                      className={`
                    w-full p-4 lg:p-5 rounded-xl
                    border-2 transition-all duration-300
                    ${isOpen ? "border-primary bg-primary/5 shadow-lg" : "border-border bg-card hover:border-primary/50 hover:bg-card/80"}
                  `}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <h3
                          className={`
                        text-left text-lg lg:text-xl font-bold
                        transition-colors duration-300
                        ${isOpen ? "text-primary" : "text-foreground"}
                      `}
                        >
                          {item.title}
                        </h3>
                        <motion.div
                          animate={{
                            rotate: isOpen ? 180 : 0,
                          }}
                          transition={{
                            duration: 0.3,
                          }}
                          className={`
                        flex-shrink-0 w-7 h-7 rounded-full 
                        flex items-center justify-center
                        transition-colors duration-300
                        ${isOpen ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground group-hover:bg-primary/10"}
                      `}
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </motion.div>
                      </div>

                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? "auto" : 0,
                          opacity: isOpen ? 1 : 0,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: "easeInOut",
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3">
                          <p className="text-sm text-muted-foreground leading-relaxed text-left lg:text-base">
                            {item.content}
                          </p>
                        </div>
                      </motion.div>
                    </button>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Right side: Display Cards */}
            <motion.div
              initial={{
                opacity: 0,
                x: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12"
            >
              <DisplayCards
                cards={[
                  {
                    icon: <Star className="size-5 text-purple-500" />,
                    title: "01 Klare Strategie",
                    description: "Durchdachte Roadmap",
                    date: "Solides Fundament",
                    iconClassName: "text-purple-500",
                    titleClassName: "text-purple-500",
                    className:
                      "[grid-area:stack] hover:-translate-y-24 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-purple-500/20 before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/30 grayscale-[30%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 shadow-lg hover:shadow-2xl border-purple-500/30",
                  },
                  {
                    icon: <Palette className="size-5 text-blue-500" />,
                    title: "02 Überzeugende Inhalte",
                    description: "Content der begeistert",
                    date: "Zielgruppen erreichen",
                    iconClassName: "text-blue-500",
                    titleClassName: "text-blue-500",
                    className:
                      "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-14 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-blue-500/20 before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/30 grayscale-[30%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 shadow-lg hover:shadow-2xl border-blue-500/30",
                  },
                  {
                    icon: <Zap className="size-5 text-yellow-500" />,
                    title: "03 Intelligente Umsetzung",
                    description: "Technische Exzellenz",
                    date: "Nachhaltiger Erfolg",
                    iconClassName: "text-yellow-500",
                    titleClassName: "text-yellow-500",
                    className:
                      "[grid-area:stack] translate-x-32 translate-y-20 hover:-translate-y-4 shadow-lg hover:shadow-2xl border-yellow-500/30",
                  },
                ]}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Cards Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-br from-white via-gray-50/50 to-white overflow-hidden">
        <div className="container-xl relative z-10">
          {/* Header */}
          <motion.div
            className="text-left mb-16"
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <motion.h2
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.2,
                duration: 0.7,
              }}
              className="text-[42px] sm:text-[48px] md:text-[52px] text-foreground mb-6 leading-[1.25] font-semibold lg:text-4xl"
            >
              Unsere Services
            </motion.h2>
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.4,
                duration: 0.6,
              }}
              className="text-muted-foreground max-w-3xl leading-[1.5] text-xl"
            >
              Drei Bereiche, eine Vision: Ihre Marke erfolgreich in der digitalen Welt positionieren.
            </motion.p>
          </motion.div>

          {/* Service Cards Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: "-100px",
            }}
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: shouldAnimate ? 0.08 : 0,
                  delayChildren: shouldAnimate ? 0.1 : 0,
                },
              },
            }}
          >
            {[
              {
                icon: Lightbulb,
                title: "New Edge Studio",
                description:
                  "Hier beginnt alles. Wir entwickeln die visuelle Identität, Strategie und das Fundament für Ihr Projekt.",
                gradient: "from-primary to-primary/70",
                link: "/studio",
              },
              {
                icon: Palette,
                title: "New Edge Media",
                description:
                  "Content-Produktion und Reichweite. Hier wird alles produziert, veröffentlicht und gesteuert.",
                gradient: "from-secondary to-secondary/70",
                link: "/media",
              },
              {
                icon: Zap,
                title: "New Edge Lab",
                description: "Tech-Innovation und Automatisierung. Von MVP bis zur finalen technischen Umsetzung.",
                gradient: "from-accent to-accent/70",
                link: "/lab",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 60,
                    scale: 0.9,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.7,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    },
                  },
                }}
                {...(shouldAnimate && {
                  whileHover: {
                    scale: 1.02,
                    y: -4,
                    transition: {
                      duration: 0.2,
                    },
                  },
                })}
              >
                <Card className="h-full bg-white border-border hover:border-primary/50 backdrop-blur-sm transition-all duration-200 hover:shadow-lg">
                  <CardContent className="p-4 md:p-8 flex flex-row md:flex-col items-start md:items-stretch gap-4 md:gap-0 h-full">
                    {/* Icon with gradient background */}
                    <div
                      className={`w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center md:mb-6 shadow-lg flex-shrink-0 transition-transform duration-200 hover:scale-105`}
                    >
                      <service.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                    </div>

                    <div className="flex-1 md:flex md:flex-col md:h-full">
                      {/* Title */}
                      <h3 className="text-base sm:text-lg md:text-[28px] text-foreground mb-2 md:mb-4 leading-[1.3] font-medium lg:text-2xl">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-6 leading-[1.5] md:flex-grow">
                        {service.description}
                      </p>

                      {/* Button */}
                      <Button
                        size="sm"
                        className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground group text-sm md:text-base md:mt-auto"
                        asChild
                      >
                        <Link to={service.link}>
                          Mehr erfahren
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact-section"
        className="relative py-12 sm:py-16 bg-gradient-to-br from-primary/5 via-background to-primary/10 overflow-hidden"
      >
        <div className="container-xl relative z-10">
          <motion.div
            className="text-center"
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.2,
                duration: 0.7,
              }}
              className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-5 md:mb-6 leading-[1.25] text-black font-medium lg:text-5xl"
            >
              Jetzt Kontakt aufnehmen <span className="bg-gradient-primary bg-clip-text text-transparent"></span>
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.4,
                duration: 0.6,
              }}
              className="text-base mb-10 leading-[1.5] max-w-3xl mx-auto text-gray-500 lg:text-xl"
            >
              New Edge steht für Innovation und nachhaltige Entwicklung. Gemeinsam gestalten wir die Zukunft von Marken
              und Prozessen.
              <br />
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.6,
                duration: 0.6,
              }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                size="lg"
                asChild
                className="group bg-white border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <a href="tel:+4915750998236" className="relative">
                  <Phone className="mr-2 w-4 h-4" />
                  <span className="group-hover:hidden">Talk to Sales</span>
                  <span className="hidden group-hover:inline">+49 157 5099 8236</span>
                </a>
              </Button>
              <Button size="lg" variant="outline" onClick={() => setIsContactSheetOpen(true)} className="border-2">
                Kontakt aufnehmen
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Sheet */}
      <Sheet open={isContactSheetOpen} onOpenChange={setIsContactSheetOpen}>
        <SheetContent side="right" className="w-full sm:max-w-xl overflow-y-auto">
          <SheetHeader className="mb-6">
            <SheetTitle className="text-2xl font-bold">Projekt besprechen</SheetTitle>
            <SheetDescription>Erzählen Sie uns von Ihrem Projekt - wir melden uns zeitnah bei Ihnen.</SheetDescription>
          </SheetHeader>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input id="name" name="name" required placeholder="Ihr Name" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-Mail *</Label>
              <Input id="email" name="email" type="email" required placeholder="ihre@email.de" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="position">Position</Label>
              <Input id="position" name="position" placeholder="Ihre Position" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="firma">Firma</Label>
              <Input id="firma" name="firma" placeholder="Ihre Firma" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="telefon">Telefon</Label>
              <Input id="telefon" name="telefon" type="tel" placeholder="+49 123 456789" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="nachricht">Nachricht *</Label>
              <Textarea
                id="nachricht"
                name="nachricht"
                required
                placeholder="Erzählen Sie uns von Ihrem Projekt..."
                className="min-h-[120px]"
              />
            </div>

            <Button type="submit" className="w-full btn-primary text-slate-50">
              Absenden
            </Button>
          </form>
        </SheetContent>
      </Sheet>

      {/* Footer */}

      {/* Cookie Consent */}
      <CookieConsent />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0,
          }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 bg-gradient-primary text-white p-3 sm:p-4 rounded-full shadow-elegant hover:shadow-glow transition-all duration-200 hover-lift min-h-[48px] min-w-[48px]"
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
        >
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transform -rotate-90" />
        </motion.button>
      )}

      {/* Footer */}
      <Suspense fallback={<div className="h-64" />}>
        <Footer />
      </Suspense>
    </div>
  );
};
export default Services;
