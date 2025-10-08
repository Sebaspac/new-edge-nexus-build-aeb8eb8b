import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Code,
  Palette,
  Globe,
  Briefcase,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Zap,
  Heart,
  Target,
  Network,
  Building2,
  Lightbulb,
  Rocket,
  ShieldCheck,
  TrendingUp,
  Handshake,
} from "lucide-react";
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
  media: ["/assets/media-hero-video.mp4", "/assets/media-section-video.mp4", "/assets/template-video.mp4"],
  lab: [
    "/assets/lab-hero-video.mp4",
    "/assets/lab-section-video.mp4",
    "/assets/lab-ki-automation-video.mp4",
    "/assets/wireframes-video.mp4",
    "/assets/liam-video.mp4",
  ],
};
const About = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("intro");
  const [hoveredModule, setHoveredModule] = useState<"studio" | "media" | "lab" | null>(null);
  const [hoveredTeamCard, setHoveredTeamCard] = useState<"strategy" | "creative" | "tech" | null>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState({
    studio: 0,
    media: 0,
    lab: 0,
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
  const studioX = useTransform(orbitalAngle, (a) => Math.cos(((a - 90) * Math.PI) / 180) * orbitalRadius);
  const studioY = useTransform(orbitalAngle, (a) => Math.sin(((a - 90) * Math.PI) / 180) * orbitalRadius);
  const mediaX = useTransform(orbitalAngle, (a) => Math.cos(((a + 30) * Math.PI) / 180) * orbitalRadius);
  const mediaY = useTransform(orbitalAngle, (a) => Math.sin(((a + 30) * Math.PI) / 180) * orbitalRadius);
  const labX = useTransform(orbitalAngle, (a) => Math.cos(((a + 150) * Math.PI) / 180) * orbitalRadius);
  const labY = useTransform(orbitalAngle, (a) => Math.sin(((a + 150) * Math.PI) / 180) * orbitalRadius);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // Start orbital rotation animation
  useEffect(() => {
    const controls = animate(orbitalAngle, 360, {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
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
        playPromise
          .then(() => {
            setIsVideoReady(true);
          })
          .catch(() => {
            setIsVideoReady(false);
          });
      }

      // Start cycling videos every 3 seconds
      intervalRef.current = setInterval(() => {
        setCurrentVideoIndex((prev) => {
          const videos = moduleVideos[hoveredModule];
          const nextIndex = (prev[hoveredModule] + 1) % videos.length;
          return {
            ...prev,
            [hoveredModule]: nextIndex,
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
        behavior: "smooth",
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
    const data = {
      name: formData.get("name")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      position: formData.get("position")?.toString() || "",
      firma: formData.get("firma")?.toString() || "",
      telefon: formData.get("telefon")?.toString() || "",
      nachricht: formData.get("nachricht")?.toString() || "",
      source: "ABOUT",
    };
    try {
      const response = await fetch("https://n8n-pro-oh9w.onrender.com/webhook/kontakt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toast({
          title: "Wir designen für dich",
          description: "Vielen Dank für deine Anfrage! Wir melden uns bald bei dir.",
          duration: 5000,
        });
        form.reset();
        setIsContactSheetOpen(false);
        setIsPartnerRequest(false);
      } else {
        throw new Error(`Server responded with ${response.status}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Fehler",
        description: "Es gab ein Problem beim Senden deiner Nachricht. Bitte versuche es erneut.",
        variant: "destructive",
        duration: 5000,
      });
    }
  };
  return (
    <>
      <Helmet>
        <title>About - The Headquarters of Innovation - NEW EDGE</title>
        <meta
          name="description"
          content="New Edge ist das kreative, technologische und strategische Zentrum für den digitalen Wandel im Mittelstand."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <MobileNavigation onContactClick={() => scrollToContact(false)} theme="dark" />

        {/* Sticky Navigation */}

        {/* Hero Section */}
        <section className="relative w-full mt-16">
          <div className="w-full relative h-[75vh] lg:h-auto lg:aspect-video">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover"
              >
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

              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 1,
                  duration: 0.5,
                }}
                className="absolute bottom-8 left-0 right-0 flex justify-center z-10"
              >
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex flex-col items-center gap-2 cursor-pointer"
                  onClick={() => scrollToSection("intro")}
                >
                  <span className="text-white text-sm font-medium">Scroll</span>
                  <ChevronDown className="w-6 h-6 text-white" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2️⃣ Mission & Vision */}
        <section id="mission" className="relative py-12 sm:py-16 md:section-padding bg-surface">
          <div className="container-xl">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
              <motion.div
                initial={{
                  opacity: 0,
                  x: -60,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="text-center lg:text-left"
              >
                <h2 className="text-3xl sm:text-4xl mb-4 sm:mb-6 md:mb-8 text-foreground font-bold md:text-5xl text-left">
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
                      Wir bringen Innovation dorthin, wo sie am meisten gebraucht wird – in den Mittelstand. Dafür
                      automatisieren wir Prozesse, verbinden Agenturen mit Unternehmen und machen Kreativität
                      skalierbar.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 md:mb-4 text-foreground flex items-center gap-2 sm:gap-3 font-semibold md:text-2xl">
                      <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                      Vision
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed text-left">
                      Ein Ökosystem, in dem Marken, Agenturen und Technologien nahtlos zusammenarbeiten – und der
                      Mittelstand zum Motor echter Innovation wird.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  x: 60,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="relative"
              >
                <div className="relative aspect-square">
                  <motion.div
                    className="absolute inset-0 bg-gradient-primary rounded-3xl"
                    animate={{
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      opacity: 0.1,
                    }}
                  />
                  <div className="absolute inset-8 grid grid-cols-3 gap-4">
                    {[Network, Building2, Lightbulb, Code, Palette, Rocket, Users, Globe, Zap].map((Icon, i) => (
                      <motion.div
                        key={i}
                        className="bg-background rounded-2xl flex items-center justify-center shadow-lg"
                        initial={{
                          opacity: 0,
                          scale: 0,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay: i * 0.1,
                          duration: 0.5,
                        }}
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                        }}
                      >
                        <Icon className="w-8 h-8 text-primary" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 1️⃣ Intro Section - The Headquarters of Innovation */}

        {/* 3️⃣ Unser Modell - Wie New Edge funktioniert */}
        <section id="modell" className="relative py-12 sm:py-16 md:section-padding bg-background overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

          <div className="container-xl relative z-10">
            <motion.div
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="text-center mb-8 sm:mb-12 md:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl mb-4 sm:mb-6 text-foreground lg:text-left text-left font-bold md:text-5xl">
                Wie New Edge <span className="bg-gradient-primary bg-clip-text text-transparent">funktioniert</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl text-left">
                Studio · Media · Lab – drei Einheiten, ein Headquarter.
              </p>
            </motion.div>

            {/* Hub Visualization */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
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
              }}
              className="relative max-w-5xl mx-auto mb-12 sm:mb-16 md:mb-20"
            >
              <div className="relative aspect-square max-w-[280px] sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto">
                {/* Central Hub */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-gradient-primary flex items-center justify-center shadow-2xl z-10"
                  animate={{
                    boxShadow: [
                      "0 0 40px rgba(168, 85, 247, 0.4)",
                      "0 0 80px rgba(168, 85, 247, 0.6)",
                      "0 0 40px rgba(168, 85, 247, 0.4)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                >
                  <div className="text-center text-white">
                    <img
                      src={newEdgeHubLogo}
                      alt="NEW EDGE"
                      className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-2"
                    />
                  </div>
                </motion.div>

                {/* Connection Lines */}

                {/* Studio Node */}
                <motion.div
                  className="absolute left-1/2 top-1/2 w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40"
                  style={{
                    x: studioX,
                    y: studioY,
                    translateX: "-50%",
                    translateY: "-50%",
                  }}
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.5,
                  }}
                  onMouseEnter={() => {
                    setHoveredModule("studio");
                    setVideoPosition({
                      x: studioX.get(),
                      y: studioY.get(),
                    });
                  }}
                  onMouseLeave={() => {
                    setHoveredModule(null);
                    setVideoPosition(null);
                  }}
                >
                  <motion.div className="relative w-full h-full rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/10 via-background to-background backdrop-blur-sm border border-primary/40 shadow-2xl p-3 sm:p-4 md:p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105 hover:border-primary/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <motion.div
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary to-primary/70 p-1.5 sm:p-2 md:p-2.5 mb-2 sm:mb-2.5 md:mb-3 shadow-lg mx-auto"
                        whileHover={{
                          scale: 1.1,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                      >
                        <Lightbulb className="w-full h-full text-white" />
                      </motion.div>
                      <div className="font-bold text-sm sm:text-base md:text-lg mb-0.5 sm:mb-1 text-foreground group-hover:text-primary transition-colors">
                        STUDIO
                      </div>
                      <div className="text-[10px] sm:text-xs text-muted-foreground">Die strategische Quelle</div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Media Node */}
                <motion.div
                  className="absolute left-1/2 top-1/2 w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40"
                  style={{
                    x: mediaX,
                    y: mediaY,
                    translateX: "-50%",
                    translateY: "-50%",
                  }}
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.7,
                  }}
                  onMouseEnter={() => {
                    setHoveredModule("media");
                    setVideoPosition({
                      x: mediaX.get(),
                      y: mediaY.get(),
                    });
                  }}
                  onMouseLeave={() => {
                    setHoveredModule(null);
                    setVideoPosition(null);
                  }}
                >
                  <motion.div className="relative w-full h-full rounded-2xl sm:rounded-3xl bg-gradient-to-br from-secondary/10 via-background to-background backdrop-blur-sm border border-secondary/40 shadow-2xl p-3 sm:p-4 md:p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105 hover:border-secondary/60 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <motion.div
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-secondary to-secondary/70 p-1.5 sm:p-2 md:p-2.5 mb-2 sm:mb-2.5 md:mb-3 shadow-lg mx-auto"
                        whileHover={{
                          scale: 1.1,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                      >
                        <Palette className="w-full h-full text-white" />
                      </motion.div>
                      <div className="font-bold text-sm sm:text-base md:text-lg mb-0.5 sm:mb-1 text-foreground group-hover:text-secondary transition-colors">
                        MEDIA
                      </div>
                      <div className="text-[10px] sm:text-xs text-muted-foreground">Die kreative Energie</div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Lab Node */}
                <motion.div
                  className="absolute left-1/2 top-1/2 w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40"
                  style={{
                    x: labX,
                    y: labY,
                    translateX: "-50%",
                    translateY: "-50%",
                  }}
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.9,
                  }}
                  onMouseEnter={() => {
                    setHoveredModule("lab");
                    setVideoPosition({
                      x: labX.get(),
                      y: labY.get(),
                    });
                  }}
                  onMouseLeave={() => {
                    setHoveredModule(null);
                    setVideoPosition(null);
                  }}
                >
                  <motion.div className="relative w-full h-full rounded-2xl sm:rounded-3xl bg-gradient-to-br from-accent/10 via-background to-background backdrop-blur-sm border border-accent/40 shadow-2xl p-3 sm:p-4 md:p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105 hover:border-accent/60 hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <motion.div
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-accent to-accent/70 p-1.5 sm:p-2 md:p-2.5 mb-2 sm:mb-2.5 md:mb-3 shadow-lg mx-auto"
                        whileHover={{
                          scale: 1.1,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                      >
                        <Zap className="w-full h-full text-white" />
                      </motion.div>
                      <div className="font-bold text-sm sm:text-base md:text-lg mb-0.5 sm:mb-1 text-foreground group-hover:text-accent transition-colors">
                        LAB
                      </div>
                      <div className="text-[10px] sm:text-xs text-muted-foreground">Der Automatisierungs-Motor</div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Floating Video Preview - Now inside aspect-square container */}
                <AnimatePresence>
                  {hoveredModule && videoPosition && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.9,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="absolute left-1/2 top-1/2 z-20 pointer-events-none"
                      style={{
                        x: videoPosition.x,
                        y: videoPosition.y,
                        translateX: "-50%",
                        translateY: "-50%",
                      }}
                    >
                      <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-2 border-primary/50 backdrop-blur-xl bg-background/20 shadow-[0_0_60px_rgba(168,85,247,0.6)]">
                        <video
                          ref={videoRef}
                          autoPlay
                          muted
                          playsInline
                          preload="auto"
                          className="w-full h-full object-cover transition-opacity duration-200"
                          src={moduleVideos[hoveredModule][currentVideoIndex[hoveredModule]]}
                        />
                        <div className="absolute inset-0 rounded-full ring-2 ring-white/20" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Unit Descriptions */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              variants={{
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              {[
                {
                  title: "STUDIO",
                  description: "Identität, Positionierung, Partner-Matching",
                  icon: Lightbulb,
                  link: "/studio",
                },
                {
                  title: "MEDIA",
                  description: "Kampagnen, Sichtbarkeit, Agenturkooperation",
                  icon: Palette,
                  link: "/media",
                },
                {
                  title: "LAB",
                  description: "Systeme, KI, Prozessoptimierung",
                  icon: Zap,
                  link: "/lab",
                },
              ].map((unit, i) => (
                <motion.div
                  key={unit.title}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 40,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  className="group"
                >
                  <Card className="h-full bg-white border-border hover:border-primary/50 backdrop-blur-sm transition-all duration-500 hover:shadow-xl">
                    <CardContent className="p-4 md:p-8 flex flex-col h-full">
                      <motion.div
                        className={`w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${unit.title === "STUDIO" ? "from-primary to-primary/70" : unit.title === "MEDIA" ? "from-secondary to-secondary/70" : "from-accent to-accent/70"} flex items-center justify-center mb-4 md:mb-6 shadow-lg`}
                        whileHover={{
                          scale: 1.1,
                          rotate: [0, -5, 5, 0],
                          transition: {
                            duration: 0.5,
                          },
                        }}
                      >
                        <unit.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                      </motion.div>
                      <div className="flex-grow">
                        <h3 className="text-lg mb-3 md:mb-4 text-foreground font-bold md:text-2xl">{unit.title}</h3>
                        <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                          {unit.description}
                        </p>
                      </div>
                      <Button
                        variant="default"
                        onClick={() => (window.location.href = unit.link)}
                        className="group/btn w-full md:w-auto bg-white border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        {unit.title} ansehen
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 4️⃣ Warum New Edge kein gewöhnliches Studio ist */}
        <section className="relative py-12 sm:py-16 md:section-padding bg-surface">
          <div className="container-xl">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                className="relative order-2 lg:order-1"
              >
                <div className="relative">
                  <motion.div
                    className="absolute -inset-4 bg-gradient-primary rounded-3xl blur-2xl opacity-20"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                    }}
                  />
                  <div className="relative bg-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-border">
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                      {[
                        {
                          icon: Network,
                          label: "Netzwerk",
                        },
                        {
                          icon: Zap,
                          label: "Automation",
                        },
                        {
                          icon: Users,
                          label: "Partnerschaften",
                        },
                        {
                          icon: Rocket,
                          label: "Innovation",
                        },
                      ].map((item, i) => (
                        <motion.div
                          key={item.label}
                          className="bg-surface rounded-2xl p-6 text-center"
                          initial={{
                            opacity: 0,
                            scale: 0,
                          }}
                          whileInView={{
                            opacity: 1,
                            scale: 1,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            delay: i * 0.1,
                          }}
                          whileHover={{
                            scale: 1.05,
                          }}
                        >
                          <item.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                          <div className="text-sm font-medium">{item.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  x: 60,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="order-1 lg:order-2"
              >
                <h2 className="sm:text-4xl mb-4 sm:mb-6 md:mb-8 text-foreground font-bold md:text-5xl text-5xl">
                  Warum New Edge keine gewöhnliche{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">Agentur ist</span>
                </h2>

                <div className="space-y-3 sm:space-y-4 md:space-y-6 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Wir verstehen uns nicht als klassische Agentur – sondern als{" "}
                    <strong className="text-foreground">Innovationspartner und Connector</strong>, der Unternehmen und
                    Agenturen smarter vernetzt, Prozesse automatisiert und kreative Wirkung messbar macht.
                  </p>

                  <p>
                    New Edge ist das <strong className="text-foreground">Headquarter of Innovation</strong> – ein
                    übergeordnetes Netzwerkzentrum, das Agenturen und Unternehmen im Mittelstand miteinander verbindet.
                  </p>
                </div>

                <motion.div
                  className="mt-8"
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.4,
                  }}
                >
                  <Button
                    size="lg"
                    onClick={() => scrollToSection("kontakt")}
                    className="group bg-white border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    Kontakt aufnehmen
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5️⃣ Unsere Geschichte */}
        <section id="geschichte" className="relative py-12 sm:py-16 md:section-padding bg-background">
          <div className="container-xl">
            <motion.div
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="text-center mb-12 sm:mb-16 md:mb-20"
            >
              <h2 className="text-3xl sm:text-4xl mb-4 sm:mb-6 text-foreground lg:text-left text-left font-bold md:text-5xl">
                Von der Idee zum <span className="bg-gradient-primary bg-clip-text text-transparent">Ökosystem</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl text-left mb-6">
                Seit August 2025 liefert New Edge als Innovationspartner & Connector – aufgebaut mit modernster KI &
                Automation.
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="max-w-4xl mx-auto relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

              {[
                {
                  year: "08/2025",
                  title: "Start mit Tech-Vorsprung",
                  subtitle: "Launch",
                  description: "Go-Live von New Edge als Innovationspartner & Connector für KMU und Agenturen.",
                },
                {
                  year: "09–10/2025",
                  title: "Aufbauen. Testen. Liefern.",
                  subtitle: "Build & Proof",
                  description:
                    "Aufbau und Onboarding geprüfter Partner-Agenturen – mit ersten vernetzten Projekten für KMU aus unterschiedlichen Branchen.",
                },
                {
                  year: "11–12/2025",
                  title: "Partner- & Netzwerkerweiterung",
                  subtitle: "Scale",
                  description:
                    "Neue Partnerschaften, neue Branchen, neue Perspektiven – wir verbinden kreative Expertise mit systemischer Präzision.",
                },
                {
                  year: "2026+",
                  title: "Von Prozessen zu Produkten",
                  subtitle: "Expansion & Impact",
                  description:
                    "Wir übersetzen Erfahrung in Technologie – und gestalten daraus smarte Module, die Unternehmen messbar effizienter machen.",
                },
              ].map((milestone, i) => (
                <motion.div
                  key={milestone.year}
                  className={`relative grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16`}
                  initial={{
                    opacity: 0,
                    x: i % 2 === 0 ? -60 : 60,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: i * 0.2,
                  }}
                >
                  {i % 2 === 0 ? (
                    <>
                      <div className="text-right pr-2 sm:pr-4 md:pr-8">
                        <Card className="inline-block text-left hover:shadow-xl transition-all">
                          <CardContent className="p-3 sm:p-4 md:p-6">
                            <div className="text-lg sm:text-xl font-semibold text-primary mb-1">
                              {milestone.year} — {milestone.subtitle}
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
                        <motion.div
                          className="absolute left-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary border-2 sm:border-4 border-background shadow-lg"
                          whileInView={{
                            scale: [0, 1.2, 1],
                          }}
                          transition={{
                            duration: 0.5,
                          }}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="relative flex items-center justify-end">
                        <motion.div
                          className="absolute right-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-secondary border-2 sm:border-4 border-background shadow-lg"
                          whileInView={{
                            scale: [0, 1.2, 1],
                          }}
                          transition={{
                            duration: 0.5,
                          }}
                        />
                      </div>
                      <div className="pl-2 sm:pl-4 md:pl-8">
                        <Card className="hover:shadow-xl transition-all">
                          <CardContent className="p-3 sm:p-4 md:p-6">
                            <div className="text-lg sm:text-xl font-semibold text-secondary mb-1">
                              {milestone.year} — {milestone.subtitle}
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
                    </>
                  )}
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
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
                delay: 0.8,
              }}
              className="flex flex-col sm:flex-row gap-4 justify-center mt-12 sm:mt-16"
            >
              <Button
                size="lg"
                onClick={() => {
                  setIsPartnerRequest(false);
                  setIsContactSheetOpen(true);
                }}
                className="group"
              >
                Agentur-Match anfragen
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  setIsPartnerRequest(false);
                  setIsContactSheetOpen(true);
                }}
                className="group"
              >
                Projekt starten
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* 6️⃣ Team & Netzwerk */}
        <section id="netzwerk" className="relative py-12 sm:py-16 md:section-padding bg-surface overflow-hidden">
          <motion.div
            className="absolute top-10 left-10 w-52 h-52 bg-primary/5 rounded-full blur-3xl"
            animate={{
              x: [0, 40, 0],
              y: [0, -30, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-60 h-60 bg-secondary/5 rounded-full blur-3xl"
            animate={{
              x: [0, -40, 0],
              y: [0, 30, 0],
              scale: [1.3, 1, 1.3],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          <div className="container-xl relative z-10">
            <motion.div
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.9,
              }}
              className="text-center lg:text-left mb-8 sm:mb-10 md:mb-12"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 md:mb-10 text-foreground leading-[1.2] lg:text-left font-bold text-left">
                Team & Netzwerk
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl leading-[1.7] sm:leading-[1.8] md:leading-[1.9] text-left">
                Unser Team vereint Fachwissen aus Strategie, Design, Technologie und Unternehmertum. Gemeinsam mit
                Coaches, Entwickler:innen und Partner-Agenturen bilden wir ein Ökosystem, das für jede Herausforderung
                die passende Lösung findet.
              </p>
            </motion.div>

            {/* Network Stats - Pyramid Top (5 cards) */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto mb-4 sm:mb-6 md:mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              variants={{
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2,
                  },
                },
              }}
            >
              {[
                {
                  icon: Users,
                  label: "Coaches",
                  value: "10+",
                  color: "from-blue-600 to-blue-800",
                  category: "strategy" as const,
                },
                {
                  icon: Code,
                  label: "Entwickler",
                  value: "2",
                  color: "from-purple-600 to-purple-800",
                  category: "tech" as const,
                },
                {
                  icon: Palette,
                  label: "Creative Agencies",
                  value: "3",
                  color: "from-pink-600 to-pink-800",
                  category: "creative" as const,
                },
                {
                  icon: Globe,
                  label: "Länder",
                  value: "4",
                  color: "from-green-600 to-green-800",
                  category: null,
                },
                {
                  icon: Briefcase,
                  label: "Freelancer",
                  value: "15+",
                  color: "from-orange-600 to-orange-800",
                  category: null,
                },
              ].map((stat, index) => {
                const isHighlighted = hoveredTeamCard && stat.category === hoveredTeamCard;
                const isDimmed = hoveredTeamCard && stat.category !== hoveredTeamCard && stat.category !== null;
                return (
                  <motion.div
                    key={stat.label}
                    variants={{
                      hidden: {
                        opacity: 0,
                        scale: 0.5,
                        y: 50,
                      },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        transition: {
                          duration: 0.6,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        },
                      },
                    }}
                    whileHover={{
                      scale: 1.15,
                      y: -10,
                    }}
                    animate={{
                      scale: isHighlighted ? 1.1 : isDimmed ? 0.95 : 1,
                      opacity: isDimmed ? 0.4 : 1,
                    }}
                    className="group"
                  >
                    <Card
                      className={`h-full bg-white border-border backdrop-blur-sm transition-all duration-500 ${isHighlighted ? "border-primary shadow-[0_0_30px_rgba(139,92,246,0.5)] shadow-primary/50" : "hover:border-primary/50 hover:shadow-xl"}`}
                    >
                      <CardContent className="p-4 md:p-6 flex flex-col items-center text-center h-full relative overflow-hidden">
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${stat.color} transition-opacity duration-500`}
                          animate={{
                            opacity: isHighlighted ? 0.15 : 0,
                          }}
                        />
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                        />

                        <motion.div
                          className={`w-12 h-12 md:w-14 md:h-14 mb-3 md:mb-4 rounded-xl md:rounded-2xl bg-gradient-to-br ${stat.color} p-2.5 md:p-3 shadow-lg relative z-10`}
                          whileHover={{
                            rotate: 360,
                            scale: 1.2,
                          }}
                          transition={{
                            duration: 0.6,
                            type: "spring",
                          }}
                        >
                          <stat.icon className="w-full h-full text-white" />
                        </motion.div>

                        <motion.div
                          className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-1 relative z-10"
                          whileHover={{
                            scale: 1.1,
                          }}
                        >
                          {stat.value}
                        </motion.div>

                        <div className="text-xs md:text-sm text-muted-foreground relative z-10">{stat.label}</div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Team Cards - Pyramid Base (3 cards) */}
          </div>
        </section>

        {/* 7️⃣ Werte & Kultur */}

        {/* 8️⃣ Gründer & Leadership */}
        <section className="relative py-12 sm:py-16 md:section-padding bg-gradient-to-br from-white via-gray-50/30 to-white overflow-hidden">
          {/* Subtle background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3" />

          <div className="container-xl relative z-10">
            <motion.div
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="text-center mb-8 sm:mb-12 md:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 text-foreground font-bold leading-[1.2] text-left">
                Die Gründer
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl leading-[1.5] text-left">
                Expertise aus Strategie und Technologie – vereint für Ihren Erfolg.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
              {[
                {
                  name: "Sebastian Pachón",
                  role: "Founder & Creative-Tech Partner",
                  tags: ["Strategie", "Technologie"],
                  image: "/assets/c19dc1d8-e93c-4d25-a965-34dbef5d9fe1.png",
                },
                {
                  name: "Wenjamin Zabezhanskiy",
                  role: "Operations & Innovation Partner",
                  tags: ["Kreation", "Support"],
                  image: "/assets/06cbcdbb-3730-466c-b8c1-cf54d42fc7c1.png",
                },
              ].map((founder, i) => (
                <motion.div
                  key={founder.name}
                  initial={{
                    opacity: 0,
                    y: 60,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: i * 0.2,
                  }}
                  className="group"
                >
                  <Card className="bg-white border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all duration-500 overflow-hidden shadow-lg">
                    <CardContent className="p-4 sm:p-6 md:p-8 flex flex-col items-center text-center">
                      {/* Profile Image with Gradient Border */}
                      <div className="relative mb-4 sm:mb-5 md:mb-6">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-primary animate-gradient blur-sm" />
                        <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 sm:border-3 md:border-4 border-white shadow-lg">
                          <motion.img
                            src={founder.image}
                            alt={founder.name}
                            className="w-full h-full object-cover"
                            whileHover={{
                              scale: 1.1,
                            }}
                            transition={{
                              duration: 0.6,
                            }}
                          />
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
                        {founder.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm border border-gray-200 hover:border-primary/50 hover:bg-gray-50 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 9️⃣ Zukunft & Einladung */}
        <section
          id="kontakt"
          className="relative py-16 sm:py-24 bg-gradient-to-br from-white via-gray-50/50 to-white overflow-hidden"
        >
          <div className="container-xl relative z-10">
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
              className="text-center max-w-4xl mx-auto"
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
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] mb-4 sm:mb-5 md:mb-6 leading-[1.25] text-black font-bold"
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
                className="text-base lg:text-xl text-gray-600 mb-10 leading-[1.5] max-w-3xl mx-auto"
              >
                New Edge ist das Headquarter für Innovation. Hier entsteht die Zukunft von Marken, Agenturen und
                Prozessen.
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
                  onClick={() => scrollToContact(false)}
                  className="group bg-white border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Kontakt aufnehmen
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToContact(true)} className="border-2">
                  Partner werden
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Sheet */}
        <Sheet
          open={isContactSheetOpen}
          onOpenChange={(open) => {
            setIsContactSheetOpen(open);
            if (!open) setIsPartnerRequest(false);
          }}
        >
          <SheetContent side="right" className="w-full sm:max-w-xl overflow-y-auto">
            <SheetHeader className="mb-6">
              <SheetTitle className="text-2xl font-bold">
                {isPartnerRequest ? "Partner werden" : "Projekt besprechen"}
              </SheetTitle>
              <SheetDescription>
                {isPartnerRequest
                  ? "Werden Sie Teil unseres Netzwerks - wir freuen uns auf die Zusammenarbeit."
                  : "Erzählen Sie uns von Ihrem Projekt - wir melden uns zeitnah bei Ihnen."}
              </SheetDescription>
            </SheetHeader>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-5">
                {[
                  {
                    id: "name",
                    label: "Name *",
                    type: "text",
                    placeholder: "Ihr Name",
                    required: true,
                  },
                  {
                    id: "email",
                    label: "E-Mail *",
                    type: "email",
                    placeholder: "ihre@email.com",
                    required: true,
                  },
                  {
                    id: "position",
                    label: "Position *",
                    type: "text",
                    placeholder: "Ihre Position",
                    required: true,
                  },
                  {
                    id: "firma",
                    label: "Firma *",
                    type: "text",
                    placeholder: "Ihr Unternehmen",
                    required: true,
                  },
                  {
                    id: "telefon",
                    label: "Telefon",
                    type: "tel",
                    placeholder: "Ihre Telefonnummer",
                    required: false,
                  },
                ].map((field) => (
                  <div key={field.id} className="space-y-2">
                    <Label htmlFor={field.id} className="text-foreground font-medium">
                      {field.label}
                    </Label>
                    <Input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      required={field.required}
                      className="bg-background/50 border-border focus:border-primary transition-colors"
                    />
                  </div>
                ))}

                <div className="space-y-2">
                  <Label htmlFor="nachricht" className="text-foreground font-medium">
                    Nachricht *
                  </Label>
                  <Textarea
                    id="nachricht"
                    name="nachricht"
                    placeholder={
                      isPartnerRequest
                        ? "Erzählen Sie uns über Ihr Unternehmen und warum Sie Partner werden möchten..."
                        : "Erzählen Sie uns von Ihrem Projekt..."
                    }
                    defaultValue={isPartnerRequest ? "Wir möchten ein Partner von New Edge werden.\n\n" : ""}
                    required
                    className="min-h-[120px] bg-background/50 border-border focus:border-primary transition-colors resize-none"
                  />
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
    </>
  );
};
export default About;
