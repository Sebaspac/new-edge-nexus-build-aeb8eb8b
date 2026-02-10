import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Code, Palette, Globe, Briefcase, ChevronDown, ArrowRight, Sparkles, Zap, Heart, Target, Network, Building2, Lightbulb, Rocket, ShieldCheck, TrendingUp, Handshake, FlaskConical, Fingerprint } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import newEdgeHubLogo from "@/assets/new-edge-hub-logo.png";
const moduleVideos = {
  studio: ["/assets/studio-hero-video.mp4", "/assets/studio-service-video.mp4", "/assets/brandstory-video.mp4"],
  lab: ["/assets/lab-hero-video.mp4", "/assets/lab-section-video.mp4", "/assets/lab-ki-automation-video.mp4", "/assets/wireframes-video.mp4", "/assets/liam-video.mp4"]
};
const About = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("intro");
  const [hoveredModule, setHoveredModule] = useState<"studio" | "lab" | null>(null);
  const [hoveredTeamCard, setHoveredTeamCard] = useState<"strategy" | "creative" | "tech" | null>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState({
    studio: 0,
    lab: 0
  });
  const videoRef = useRef<HTMLVideoElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [videoPosition, setVideoPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [isContactSheetOpen, setIsContactSheetOpen] = useState(false);
  const [isPartnerRequest, setIsPartnerRequest] = useState(false);

  // Orbital rotation setup
  const orbitalRadius = typeof window !== "undefined" && window.innerWidth < 768 ? 180 : 280;
  const orbitalAngle = useMotionValue(0);
  const studioX = useTransform(orbitalAngle, a => Math.cos((a - 90) * Math.PI / 180) * orbitalRadius);
  const studioY = useTransform(orbitalAngle, a => Math.sin((a - 90) * Math.PI / 180) * orbitalRadius);
  const labX = useTransform(orbitalAngle, a => Math.cos((a + 90) * Math.PI / 180) * orbitalRadius);
  const labY = useTransform(orbitalAngle, a => Math.sin((a + 90) * Math.PI / 180) * orbitalRadius);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  // Start orbital rotation animation
  useEffect(() => {
    const controls = animate(orbitalAngle, 360, {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop"
    });
    return () => controls.stop();
  }, [orbitalAngle]);

  // Video cycling logic with smooth transitions
  useEffect(() => {
    if (hoveredModule && videoRef.current) {
      const video = videoRef.current;

      // Preload and play current video
      video.load();
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsVideoReady(true);
        }).catch(() => {
          setIsVideoReady(false);
        });
      }

      // Start cycling videos every 3 seconds
      intervalRef.current = setInterval(() => {
        setCurrentVideoIndex(prev => {
          const videos = moduleVideos[hoveredModule];
          const nextIndex = (prev[hoveredModule] + 1) % videos.length;
          return {
            ...prev,
            [hoveredModule]: nextIndex
          };
        });
      }, 3000);
    } else {
      setIsVideoReady(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [hoveredModule]);

  // Handle video source changes smoothly
  useEffect(() => {
    if (hoveredModule && videoRef.current && isVideoReady) {
      const video = videoRef.current;
      video.load();
      video.play().catch(() => {});
    }
  }, [currentVideoIndex, hoveredModule, isVideoReady]);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  const scrollToContact = (asPartner: boolean = false) => {
    setIsPartnerRequest(asPartner);
    setIsContactSheetOpen(true);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Import validation utilities
    const {
      extractFormData,
      validateContactForm,
      submitContactForm
    } = await import("@/utils/contactFormValidation");

    // Extract and validate form data
    const rawData = extractFormData(formData, "ABOUT");
    const validation = validateContactForm(rawData);
    if (!validation.success) {
      toast({
        title: "Validierungsfehler",
        description: validation.error,
        variant: "destructive",
        duration: 5000
      });
      return;
    }
    const result = await submitContactForm(validation.data!);
    if (result.success) {
      toast({
        title: "Wir designen für dich",
        description: "Vielen Dank für deine Anfrage! Wir melden uns bald bei dir.",
        duration: 5000
      });
      form.reset();
      setIsContactSheetOpen(false);
      setIsPartnerRequest(false);
    } else {
      toast({
        title: "Fehler",
        description: result.error || "Es gab ein Problem beim Senden deiner Nachricht. Bitte versuche es erneut.",
        variant: "destructive",
        duration: 5000
      });
    }
  };
  return <>
      <Helmet>
        <title>Über New Edge | KI Agentur München | Innovation für KMU</title>
        <meta name="description" content="New Edge - KI Agentur aus München. Wir verbinden Strategie, Kreativität und KI-Technologie für den digitalen Erfolg mittelständischer Unternehmen." />
        <meta name="keywords" content="KI Agentur München, Über New Edge, Innovation für KMU, Digitalisierung Mittelstand, KI München, Prozessautomatisierung" />
        <link rel="canonical" href="https://www.newedgebrand.com/about" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <MobileNavigation onContactClick={() => scrollToContact(false)} theme="dark" />

        {/* Hero Section */}
        <section className="relative w-full">
          <div className="w-full relative h-[75vh] lg:h-auto lg:aspect-video">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background overflow-hidden">
              <video autoPlay loop muted playsInline preload="auto" className="absolute inset-0 w-full h-full object-cover">
                <source src="/assets/hero-video.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 pb-20 sm:p-12 lg:p-16 max-w-full sm:max-w-4xl">
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 leading-tight">
                  <span className="text-white">DESIGN BRANDS.</span>
                  <br />
                  <span className="italic font-black bg-gradient-primary bg-clip-text text-transparent">
                    DRIVE INNOVATION.
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* 2️⃣ Mission & Vision */}
        <section id="mission" className="relative py-12 sm:py-16 md:section-padding bg-surface">
          <div className="container-xl">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
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
            }} className="text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl mb-4 sm:mb-6 md:mb-8 text-foreground text-left font-bold md:text-6xl">
                  Unser Auftrag für den{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">Mittelstand</span>
                </h2>

                <div className="space-y-4 sm:space-y-6 md:space-y-8">
                  <div>
                    <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 md:mb-4 text-foreground flex items-center gap-2 sm:gap-3 font-semibold md:text-2xl">
                      <Target className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      Mission
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed text-left">
                      Wir bringen Innovation in den Mittelstand, indem wir Prozesse automatisieren, Teams vernetzen und
                      Kreativität in wiederholbare, skalierbare Systeme übersetzen.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 md:mb-4 text-foreground flex items-center gap-2 sm:gap-3 font-semibold md:text-2xl">
                      <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                      Vision
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed text-left">
                      Ein Ökosystem, in dem Marken und Technologie friktionslos zusammenarbeiten – der Mittelstand als
                      Triebfeder für echte, messbare Innovation.
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

        {/* 1️⃣ Intro Section - The Headquarter of Innovation */}

        {/* 3️⃣ Unser Modell - Wie New Edge funktioniert */}
        <section id="modell" className="relative py-12 sm:py-16 md:section-padding bg-background overflow-hidden">
          

          
        </section>

        {/* 4️⃣ Warum New Edge kein gewöhnliches Studio ist */}
        <section className="relative py-12 sm:py-16 md:section-padding bg-surface">
          <div className="container-xl">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
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
                  <div className="relative bg-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-border">
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
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
                <h2 className="sm:text-4xl mb-4 sm:mb-6 md:mb-8 text-foreground text-5xl md:text-4xl font-semibold">
                  Warum New Edge keine gewöhnliche{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">Agentur ist</span>
                </h2>

                <div className="space-y-3 sm:space-y-4 md:space-y-6 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Wir verstehen uns nicht als Agentur, sondern als{" "}
                    <strong className="text-foreground">Partner für Innovation und nachhaltige Entwicklung:</strong>,
                    smarte Vernetzung, automatisierte Prozesse und messbare kreative Wirkung.
                  </p>

                  <p>
                    Wir übernehmen Marketing & Innovation end-to-end, KI-gestützt, automatisiert und messbar. New Edge
                    ist der Hub, der alle Disziplinen bündelt und in skalierbare Systeme übersetzt.
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
                  <Button size="lg" onClick={() => scrollToSection("kontakt")} className="group bg-transparent backdrop-blur-sm border-2 border-black text-black hover:bg-black hover:text-white rounded-none transition-all duration-300">
                    Kontakt aufnehmen
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>

                {/* Subtle Studio & Lab Links */}
                <motion.div className="mt-8 flex flex-col sm:flex-row gap-3" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>
                  <a href="/studio" className="group flex items-center gap-3 px-4 py-3 border border-purple-200 hover:border-purple-400 bg-purple-50/50 hover:bg-purple-50 transition-all duration-300">
                    <div className="w-8 h-8 flex items-center justify-center bg-purple-100 group-hover:bg-purple-500 transition-colors">
                      <Fingerprint className="w-4 h-4 text-purple-500 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm font-medium text-foreground">Studio entdecken</span>
                    <ArrowRight className="w-3.5 h-3.5 text-purple-400 group-hover:translate-x-1 transition-transform ml-auto" />
                  </a>
                  <a href="/lab" className="group flex items-center gap-3 px-4 py-3 border border-yellow-200 hover:border-yellow-400 bg-yellow-50/50 hover:bg-yellow-50 transition-all duration-300">
                    <div className="w-8 h-8 flex items-center justify-center bg-yellow-100 group-hover:bg-yellow-500 transition-colors">
                      <FlaskConical className="w-4 h-4 text-yellow-600 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm font-medium text-foreground">Lab entdecken</span>
                    <ArrowRight className="w-3.5 h-3.5 text-yellow-500 group-hover:translate-x-1 transition-transform ml-auto" />
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5️⃣ Unsere Geschichte */}
        <section id="geschichte" className="relative py-12 sm:py-16 md:section-padding bg-background">
          <div className="container-xl">
            <motion.div initial={{
            opacity: 0,
            y: 60
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-center mb-12 sm:mb-16 md:mb-20">
              <h2 className="text-3xl sm:text-4xl mb-4 sm:mb-6 text-foreground lg:text-left text-left font-semibold md:text-5xl">
                Von der Idee zum <span className="bg-gradient-primary bg-clip-text text-transparent">Ökosystem</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl text-left mb-6">
                Seit August 2025 liefert New Edge als Innovationspartner &amp; Connector – aufgebaut mit modernster KI
                &amp; Automation.
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="max-w-4xl mx-auto relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

              {[{
              year: "08/2025",
              title: "Start mit Tech-Vorsprung",
              subtitle: "Launch",
              description: "Go-Live von New Edge als Innovationspartner & Connector für KMU und Agenturen."
            }, {
              year: "09-10/2025",
              title: "Aufbauen. Testen. Liefern.",
              subtitle: "Build & Proof",
              description: "Aufbau und Onboarding geprüfter Partner-Agenturen – mit ersten vernetzten Projekten für KMU aus unterschiedlichen Branchen."
            }, {
              year: "11–12/2025",
              title: "Partner- & Netzwerkerweiterung",
              subtitle: "Scale",
              description: "Neue Partnerschaften, neue Branchen, neue Perspektiven – wir verbinden kreative Expertise mit systemischer Präzision."
            }, {
              year: "2026+",
              title: "Von Prozessen zu Produkten",
              subtitle: "Expansion & Impact",
              description: "Wir übersetzen Erfahrung in Technologie – und gestalten daraus smarte Module, die Unternehmen messbar effizienter machen."
            }].map((milestone, i) => <motion.div key={milestone.year} className={`relative grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16`} initial={{
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
                      <div className="text-right pr-2 sm:pr-4 md:pr-8">
                        <Card className="inline-block text-left hover:shadow-xl transition-all">
                          <CardContent className="p-3 sm:p-4 md:p-6">
                            <div className="text-lg sm:text-xl font-semibold text-primary mb-1">
                              {milestone.year} – {milestone.subtitle}
                            </div>
                            <h3 className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3 font-bold">
                              {milestone.title}
                            </h3>
                            <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                              {milestone.description}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                      <div className="relative flex items-center">
                        <motion.div className="absolute left-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary border-2 sm:border-4 border-background shadow-lg" whileInView={{
                    scale: [0, 1.2, 1]
                  }} transition={{
                    duration: 0.5
                  }} />
                      </div>
                    </> : <>
                      <div className="relative flex items-center justify-end">
                        <motion.div className="absolute right-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-secondary border-2 sm:border-4 border-background shadow-lg" whileInView={{
                    scale: [0, 1.2, 1]
                  }} transition={{
                    duration: 0.5
                  }} />
                      </div>
                      <div className="pl-2 sm:pl-4 md:pl-8">
                        <Card className="hover:shadow-xl transition-all">
                          <CardContent className="p-3 sm:p-4 md:p-6">
                            <div className="text-lg sm:text-xl font-semibold text-secondary mb-1">
                              {milestone.year} – {milestone.subtitle}
                            </div>
                            <h3 className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3 font-bold">
                              {milestone.title}
                            </h3>
                            <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                              {milestone.description}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </>}
                </motion.div>)}
            </div>

            {/* CTAs */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.8
          }} className="flex flex-col sm:flex-row gap-4 justify-center mt-12 sm:mt-16">
              <Button size="lg" onClick={() => {
              setIsPartnerRequest(false);
              setIsContactSheetOpen(true);
            }} className="group rounded-none border-2 border-black bg-transparent text-black backdrop-blur-sm transition-all hover:bg-black hover:text-white">
                Projekt anfragen
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* 6️⃣ Team & Netzwerk */}

        {/* 7️⃣ Werte & Kultur */}

        {/* 8️⃣ Gründer & Leadership */}
        <section className="relative py-12 sm:py-16 md:section-padding bg-gradient-to-br from-white via-gray-50/30 to-white overflow-hidden">
          {/* Subtle background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3" />

          <div className="container-xl relative z-10">
            <motion.div initial={{
            opacity: 0,
            y: 60
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-foreground leading-[1.2] text-left font-semibold md:text-5xl">
                Die Gründer
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl leading-[1.5] text-left">
                Expertise aus Strategie und Technologie – vereint für Ihren Erfolg.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
              {[{
              name: "Sebastian Pachón",
              role: "Founder",
              tags: ["Vision", "Innovation"],
              image: "/assets/sebastian-pachon.webp"
            }, {
              name: "Wenjamin Zabezhanskiy",
              role: "Operations & Innovation Partner",
              tags: ["Kreation", "Support"],
              image: "/assets/06cbcdbb-3730-466c-b8c1-cf54d42fc7c1.png"
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
            }} className="group">
                  <Card className="bg-white border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all duration-500 overflow-hidden shadow-lg">
                    <CardContent className="p-4 sm:p-6 md:p-8 flex flex-col items-center text-center">
                      {/* Profile Image with Gradient Border */}
                      <div className="relative mb-4 sm:mb-5 md:mb-6">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-primary animate-gradient blur-sm" />
                        <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 sm:border-3 md:border-4 border-white shadow-lg">
                          <motion.img src={founder.image} alt={founder.name} className="w-full h-full object-cover" whileHover={{
                        scale: 1.1
                      }} transition={{
                        duration: 0.6
                      }} />
                        </div>
                      </div>

                      {/* Name */}
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1 sm:mb-2">
                        {founder.name}
                      </h3>

                      {/* Role with gradient */}
                      <div className="text-sm sm:text-base font-semibold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent mb-4 sm:mb-5 md:mb-6">
                        {founder.role}
                      </div>

                      {/* Tags */}
                      <div className="flex gap-1.5 sm:gap-2 flex-wrap justify-center">
                        {founder.tags.map(tag => <span key={tag} className="px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 bg-gray-100 text-gray-700 rounded-none text-xs sm:text-sm border border-gray-200 hover:border-primary/50 hover:bg-gray-50 transition-colors">
                            {tag}
                          </span>)}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* 9️⃣ Zukunft & Einladung */}
        <section id="kontakt" className="relative py-16 sm:py-24 bg-gradient-to-br from-white via-gray-50/50 to-white overflow-hidden">
          <div className="container-xl relative z-10">
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
          }} className="text-center max-w-4xl mx-auto">
              <motion.h2 initial={{
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
            }} className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-5 md:mb-6 leading-[1.25] text-black font-semibold lg:text-5xl">
                Jetzt Kontakt aufnehmen <span className="bg-gradient-primary bg-clip-text text-transparent"></span>
              </motion.h2>

              <motion.p initial={{
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
            }} className="text-base lg:text-xl text-gray-600 mb-10 leading-[1.5] max-w-3xl mx-auto">
                New Edge steht für Innovation und nachhaltige Entwicklung. Gemeinsam gestalten wir die Zukunft von
                Marken und Prozessen.
                <br />
              </motion.p>

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
              duration: 0.6
            }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" onClick={() => scrollToContact(false)} className="group bg-transparent backdrop-blur-sm border-2 border-black text-black hover:bg-black hover:text-white rounded-none transition-all duration-300">
                  Kontakt aufnehmen
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Sheet */}
        <Sheet open={isContactSheetOpen} onOpenChange={open => {
        setIsContactSheetOpen(open);
        if (!open) setIsPartnerRequest(false);
      }}>
          <SheetContent side="right" className="w-full sm:max-w-xl overflow-y-auto">
            <SheetHeader className="mb-6">
              <SheetTitle className="text-2xl font-bold">
                {isPartnerRequest ? "Partner werden" : "Projekt besprechen"}
              </SheetTitle>
              <SheetDescription>
                {isPartnerRequest ? "Werden Sie Teil unseres Netzwerks - wir freuen uns auf die Zusammenarbeit." : "Erzählen Sie uns von Ihrem Projekt - wir melden uns zeitnah bei Ihnen."}
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
                  <Textarea id="nachricht" name="nachricht" placeholder={isPartnerRequest ? "Erzählen Sie uns über Ihr Unternehmen und warum Sie Partner werden möchten..." : "Erzählen Sie uns von Ihrem Projekt..."} defaultValue={isPartnerRequest ? "Wir möchten ein Partner von New Edge werden.\n\n" : ""} required className="min-h-[120px] bg-background/50 border-border focus:border-primary transition-colors resize-none" />
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full btn-primary text-slate-50">
                Nachricht senden
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </SheetContent>
        </Sheet>

        <Footer />
      </div>
    </>;
};
export default About;