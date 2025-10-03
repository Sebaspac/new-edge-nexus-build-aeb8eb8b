import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowDown, ChevronDown, Sparkles, Brain, Zap, Star, Target, Eye, Phone, MessageSquare } from "lucide-react";
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
import { Footer } from "@/components/Footer";
const Services = () => {
  console.log('Services component loaded successfully');
  const {
    t
  } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [openAccordionIndex, setOpenAccordionIndex] = useState(-1);
  const [isContactSheetOpen, setIsContactSheetOpen] = useState(false);
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
    setIsContactSheetOpen(true);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      position: formData.get('position')?.toString() || '',
      firma: formData.get('firma')?.toString() || '',
      telefon: formData.get('telefon')?.toString() || '',
      nachricht: formData.get('nachricht')?.toString() || ''
    };
    try {
      const response = await fetch('https://n8n-pro-oh9w.onrender.com/webhook/kontakt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        toast({
          title: "Wir designen für dich",
          description: "Vielen Dank für deine Anfrage! Wir melden uns bald bei dir.",
          duration: 5000
        });
        form.reset();
        setIsContactSheetOpen(false);
      } else {
        throw new Error(`Server responded with ${response.status}`);
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
  return <div ref={containerRef} className="min-h-screen bg-background overflow-hidden">
      <MobileNavigation onContactClick={scrollToContact} theme="dark" />

      {/* Hero Section */}
      <section className="relative w-full">
          <div className="w-full relative h-[75vh] lg:h-auto lg:aspect-video" style={{
        position: 'relative'
      }}>
          {/* Space-like background with stars and floating elements */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            {/* Deep space gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-purple-950/60"></div>
            
            {/* Starfield */}
            {[...Array(150)].map((_, i) => <motion.div key={i} className="absolute w-1 h-1 bg-white rounded-full" style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.8 + 0.2
          }} animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.5, 1.2, 0.5]
          }} transition={{
            duration: 2 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }} />)}
            
            {/* Large twinkling stars */}
            {[...Array(20)].map((_, i) => <motion.div key={`star-${i}`} className="absolute w-2 h-2 bg-white rounded-full opacity-70" style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            filter: 'blur(0.5px)'
          }} animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.5, 0.8]
          }} transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut"
          }} />)}
            
            {/* Beautiful floating geometric elements - more transparent */}
            <motion.div className="absolute top-[15%] left-[8%] w-20 h-32 rounded-2xl opacity-20" style={{
            background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
            boxShadow: '0 0 15px rgba(139, 92, 246, 0.2)'
          }} animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 15, 0],
            scale: [1, 1.1, 1]
          }} transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }} />
            
            <motion.div className="absolute top-[55%] right-[12%] w-24 h-24 rounded-xl opacity-25" style={{
            background: 'linear-gradient(45deg, #06B6D4, #3B82F6)',
            boxShadow: '0 0 15px rgba(6, 182, 212, 0.2)'
          }} animate={{
            y: [0, 25, 0],
            x: [0, -15, 0],
            rotate: [0, -20, 0],
            scale: [1, 1.15, 1]
          }} transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }} />
            
            <motion.div className="absolute bottom-[25%] left-[25%] w-16 h-28 rounded-lg opacity-30" style={{
            background: 'linear-gradient(225deg, #F59E0B, #EF4444)',
            boxShadow: '0 0 12px rgba(245, 158, 11, 0.2)'
          }} animate={{
            y: [0, -20, 0],
            x: [0, 25, 0],
            rotate: [0, 25, 0],
            scale: [1, 1.2, 1]
          }} transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }} />
            
            <motion.div className="absolute top-[35%] right-[30%] w-18 h-18 rounded-full opacity-25" style={{
            background: 'linear-gradient(90deg, #10B981, #059669)',
            boxShadow: '0 0 10px rgba(16, 185, 129, 0.3)'
          }} animate={{
            y: [0, 35, 0],
            x: [0, -30, 0],
            scale: [1, 1.3, 1]
          }} transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }} />
            
            {/* Floating crystal-like elements */}
            <motion.div className="absolute top-[70%] left-[60%] w-12 h-20 opacity-25" style={{
            background: 'linear-gradient(180deg, #A855F7, #7C3AED)',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            boxShadow: '0 0 10px rgba(168, 85, 247, 0.2)'
          }} animate={{
            y: [0, -40, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1]
          }} transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }} />
            
            {/* Nebula-like glow effects */}
            <motion.div className="absolute top-[20%] right-[20%] w-40 h-40 rounded-full opacity-20" style={{
            background: 'radial-gradient(circle, #8B5CF6, transparent)',
            filter: 'blur(30px)'
          }} animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1]
          }} transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }} />
            
            <motion.div className="absolute bottom-[30%] right-[40%] w-32 h-32 rounded-full opacity-15" style={{
            background: 'radial-gradient(circle, #06B6D4, transparent)',
            filter: 'blur(25px)'
          }} animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.25, 0.1]
          }} transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }} />
            
            {/* Shooting stars */}
            {[...Array(3)].map((_, i) => <motion.div key={`shooting-star-${i}`} className="absolute w-1 h-1 bg-white rounded-full" style={{
            top: `${20 + i * 25}%`,
            left: '-5%'
          }} animate={{
            x: ['0vw', '110vw'],
            opacity: [0, 1, 1, 0]
          }} transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 8 + Math.random() * 5,
            ease: "easeOut"
          }} />)}
          </div>
          
          {/* Text Content - Bottom Left */}
          <div className="absolute bottom-0 left-0 p-6 pb-10 sm:p-12 lg:p-16 max-w-full sm:max-w-4xl z-10">
            <motion.h1 initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            ease: "easeOut"
          }} className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 leading-tight">
              <span className="text-white">THE</span><br />
              <span className="bg-clip-text text-transparent" style={{
              background: 'linear-gradient(to right, #8B5CF6, #A855F7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>JOURNEY</span>
            </motion.h1>
          </div>

          {/* Scroll Indicator */}
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 1,
          duration: 0.5
        }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
            <motion.div animate={{
            y: [0, 10, 0]
          }} transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }} className="flex flex-col items-center gap-2 cursor-pointer" onClick={() => window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
          })}>
              <span className="text-white text-sm font-medium">Scroll</span>
              <ChevronDown className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview Section with Subtle Overlap Effect */}
      <section className="services-overview relative py-12 sm:py-16 bg-white overflow-hidden">
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
      }} className="container-xl relative z-10 mx-auto">
          <div className="max-w-6xl mx-auto px-4">
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
          }} className="mt-8 sm:mt-20">
              <div className="max-w-4xl mx-auto">
                {/* Journey Header */}
                <div className="text-center mb-16">
                  <motion.h3 initial={{
                  opacity: 0,
                  scale: 0.8
                }} whileInView={{
                  opacity: 1,
                  scale: 1
                }} viewport={{
                  once: true
                }} transition={{
                  duration: 0.8,
                  ease: "easeOut"
                }} className="sm:text-5xl font-bold text-foreground mb-6 text-5xl">Unsere Reise</motion.h3>
                  <motion.p initial={{
                  opacity: 0,
                  y: 20
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} viewport={{
                  once: true
                }} transition={{
                  delay: 0.2,
                  duration: 0.6
                }} className="text-base lg:text-xl text-muted-foreground max-w-2xl mx-auto text-left">
                    Von der Vision zur Realität - erleben Sie jeden Schritt unserer digitalen Transformation
                  </motion.p>
                </div>

                {/* Animated Journey Path */}
                <div className="relative">
                  {/* Main Journey Line */}
                  <motion.div className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-yellow-500 transform -translate-x-1/2" style={{
                  height: 'calc(100% - 200px)'
                }} initial={{
                  scaleY: 0,
                  opacity: 0
                }} whileInView={{
                  scaleY: 1,
                  opacity: 1
                }} viewport={{
                  once: true,
                  margin: "-100px"
                }} transition={{
                  duration: 2,
                  ease: "easeInOut"
                }} />

                  {/* Journey Steps */}
                  <div className="space-y-24 relative z-10">
                    
                    {/* Step 1: Strategy */}
                    <motion.div className="flex items-center" whileInView={{
                    x: [100, 0],
                    opacity: [0, 1]
                  }} viewport={{
                    once: true
                  }} transition={{
                    duration: 0.8,
                    ease: "easeOut"
                  }}>
                      <div className="flex-1 max-w-md mr-8">
                        <motion.div className="bg-gradient-to-br from-purple-100 to-purple-50 backdrop-blur-xl p-8 rounded-3xl border border-purple-300 shadow-2xl" whileHover={{
                        scale: 1.05,
                        y: -10,
                        boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.3)"
                      }} transition={{
                        duration: 0.3
                      }}>
                          <motion.div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto" whileHover={{
                          rotate: 360,
                          scale: 1.1
                        }} transition={{
                          duration: 0.6
                        }}>
                            <Target className="w-8 h-8 text-white" />
                          </motion.div>
                          <h4 className="mb-4 text-center text-foreground text-lg font-semibold">STRATEGIE</h4>
                          <p className="text-muted-foreground text-center leading-relaxed text-base">
                            Das Fundament für Ihren Erfolg. Wir entwickeln eine klare Roadmap und visuelle Identität.
                          </p>
                        </motion.div>
                      </div>
                      
                {/* Central Journey Node */}
                <motion.div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full border-2 sm:border-4 border-white shadow-2xl flex items-center justify-center relative z-20 mx-auto lg:mx-0 aspect-square" initial={{
                      scale: 0,
                      rotate: -180
                    }} whileInView={{
                      scale: 1,
                      rotate: 0
                    }} viewport={{
                      once: true
                    }} transition={{
                      delay: 0.7,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 200
                    }} whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 30px rgba(139, 92, 246, 0.6)"
                    }}>
                  <span className="text-white font-bold text-lg sm:text-2xl">1</span>
                  
                  {/* Pulsing Ring */}
                  <motion.div className="absolute inset-0 rounded-full border-2 border-purple-400 aspect-square" animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0, 1]
                      }} transition={{
                        duration: 2,
                        repeat: Infinity
                      }} />
                </motion.div>
                
                <div className="hidden lg:block flex-1 max-w-md ml-8 opacity-30">
                  <div className="h-32"></div>
                </div>
                    </motion.div>

                    {/* Step 2: Implementation */}
                    <motion.div className="flex items-center" whileInView={{
                    x: [-100, 0],
                    opacity: [0, 1]
                  }} viewport={{
                    once: true
                  }} transition={{
                    duration: 0.8,
                    ease: "easeOut"
                  }}>
                      <div className="flex-1 max-w-md mr-8 opacity-30">
                        <div className="h-32"></div>
                      </div>
                      
                      {/* Central Journey Node */}
                      <motion.div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full border-2 sm:border-4 border-white shadow-2xl flex items-center justify-center relative z-20 mx-auto lg:mx-0 aspect-square" initial={{
                      scale: 0,
                      rotate: 180
                    }} whileInView={{
                      scale: 1,
                      rotate: 0
                    }} viewport={{
                      once: true
                    }} transition={{
                      delay: 0.9,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 200
                    }} whileHover={{
                      scale: 1.2,
                      boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)"
                    }}>
                        <span className="text-white font-bold text-lg sm:text-2xl">2</span>
                        
                        {/* Pulsing Ring */}
                        <motion.div className="absolute inset-0 rounded-full border-2 border-blue-400 aspect-square" animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0, 1]
                      }} transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 0.5
                      }} />
                      </motion.div>
                      
                      <div className="flex-1 max-w-md ml-8">
                        <motion.div className="bg-gradient-to-br from-blue-100 to-blue-50 backdrop-blur-xl p-8 rounded-3xl border border-blue-300 shadow-2xl" whileHover={{
                        scale: 1.05,
                        y: -10,
                        boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.3)"
                      }} transition={{
                        duration: 0.3
                      }}>
                          <motion.div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto" whileHover={{
                          rotate: 360,
                          scale: 1.1
                        }} transition={{
                          duration: 0.6
                        }}>
                            <Brain className="w-8 h-8 text-white" />
                          </motion.div>
                          <h4 className="mb-4 text-center text-foreground text-lg font-semibold">UMSETZUNG</h4>
                          <p className="text-muted-foreground text-center leading-relaxed">
                            Content-Produktion und Reichweite-Aufbau. Ihre Botschaft erreicht die richtige Zielgruppe.
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Step 3: Innovation */}
                    <motion.div className="flex items-center" whileInView={{
                    x: [100, 0],
                    opacity: [0, 1]
                  }} viewport={{
                    once: true
                  }} transition={{
                    duration: 0.8,
                    ease: "easeOut"
                  }}>
                      <div className="flex-1 max-w-md mr-8">
                        <motion.div className="bg-gradient-to-br from-yellow-100 to-yellow-50 backdrop-blur-xl p-8 rounded-3xl border border-yellow-300 shadow-2xl" whileHover={{
                        scale: 1.05,
                        y: -10,
                        boxShadow: "0 25px 50px -12px rgba(245, 158, 11, 0.3)"
                      }} transition={{
                        duration: 0.3
                      }}>
                          <motion.div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 mx-auto" whileHover={{
                          rotate: 360,
                          scale: 1.1
                        }} transition={{
                          duration: 0.6
                        }}>
                            <Zap className="w-8 h-8 text-white" />
                          </motion.div>
                          <h4 className="mb-4 text-center text-foreground text-lg font-semibold">INNOVATION</h4>
                          <p className="text-muted-foreground text-center leading-relaxed">
                            Technische Implementierung und Automation für nachhaltigen, messbaren Erfolg.
                          </p>
                        </motion.div>
                      </div>
                      
                      {/* Central Journey Node */}
                      <motion.div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full border-2 sm:border-4 border-white shadow-2xl flex items-center justify-center relative z-20 mx-auto lg:mx-0 aspect-square" initial={{
                      scale: 0,
                      rotate: -180
                    }} whileInView={{
                      scale: 1,
                      rotate: 0
                    }} viewport={{
                      once: true
                    }} transition={{
                      delay: 1.1,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 200
                    }} whileHover={{
                      scale: 1.2,
                      boxShadow: "0 0 30px rgba(245, 158, 11, 0.6)"
                    }}>
                        <span className="text-white font-bold text-lg sm:text-2xl">3</span>
                        
                        {/* Pulsing Ring */}
                        <motion.div className="absolute inset-0 rounded-full border-2 border-yellow-400 aspect-square" animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0, 1]
                      }} transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 1
                      }} />
                      </motion.div>
                      
                      <div className="flex-1 max-w-md ml-8 opacity-30">
                        <div className="h-32"></div>
                      </div>
                    </motion.div>

                    {/* Journey Success - Final Destination */}
                    <motion.div className="text-center pt-16" initial={{
                    opacity: 0,
                    scale: 0.5
                  }} whileInView={{
                    opacity: 1,
                    scale: 1
                  }} viewport={{
                    once: true
                  }} transition={{
                    delay: 1.3,
                    duration: 0.8,
                    type: "spring"
                  }}>
                      <motion.div className="w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full border-8 border-white shadow-2xl flex items-center justify-center mx-auto mb-8 relative" animate={{
                      boxShadow: ["0 0 20px rgba(16, 185, 129, 0.3)", "0 0 40px rgba(16, 185, 129, 0.6)", "0 0 20px rgba(16, 185, 129, 0.3)"]
                    }} transition={{
                      boxShadow: {
                        duration: 3,
                        repeat: Infinity
                      }
                    }} whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 50px rgba(16, 185, 129, 0.8)",
                      transition: {
                        duration: 0.3
                      }
                    }}>
                        <Sparkles className="w-16 h-16 text-white" />
                        
                        {/* Success Particles */}
                        {[...Array(8)].map((_, i) => <motion.div key={i} className="absolute w-2 h-2 bg-yellow-400 rounded-full" style={{
                        top: "50%",
                        left: "50%",
                        originX: 0.5,
                        originY: 0.5
                      }} animate={{
                        x: [0, Math.cos(i * 45 * Math.PI / 180) * 60],
                        y: [0, Math.sin(i * 45 * Math.PI / 180) * 60],
                        opacity: [1, 0],
                        scale: [0, 1, 0]
                      }} transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeOut"
                      }} />)}
                      </motion.div>
                      
                      <motion.h4 initial={{
                      opacity: 0,
                      y: 20
                    }} whileInView={{
                      opacity: 1,
                      y: 0
                    }} transition={{
                      delay: 1.5,
                      duration: 0.6
                    }} className="text-3xl font-bold mb-4 text-foreground">
                        ERFOLG ERREICHT
                      </motion.h4>
                      
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Das Ergebnis Section */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 bg-white overflow-hidden">
        <div className="container-xl relative z-10">
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
        }} className="text-left mb-20">
            <h2 className="text-[36px] sm:text-[48px] md:text-[52px] lg:text-[56px] text-foreground mb-6 font-bold">Das Ergebnis</h2>
            <p className="text-muted-foreground max-w-4xl text-base lg:text-xl">
              Eine nahtlose Reise von der ersten Idee bis zur finalen Umsetzung - strukturiert, effizient und erfolgreich.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 max-w-5xl mx-auto px-2 sm:px-4 lg:px-0">
            {[{
            number: "01",
            title: "Klare Strategie",
            description: "Eine durchdachte Roadmap und visuelle Identität als solides Fundament.",
            gradient: "from-purple-600 to-purple-800",
            bgColor: "bg-purple-600/10"
          }, {
            number: "02",
            title: "Überzeugende Inhalte",
            description: "Content, der Ihre Zielgruppe erreicht und nachhaltig begeistert.",
            gradient: "from-blue-600 to-blue-800",
            bgColor: "bg-blue-600/10"
          }, {
            number: "03",
            title: "Intelligente Umsetzung",
            description: "Technische Exzellenz und Automatisierung für nachhaltigen Erfolg.",
            gradient: "from-yellow-500 to-yellow-600",
            bgColor: "bg-yellow-500/10"
          }].map((item, index) => <motion.div key={item.number} initial={{
            opacity: 0,
            y: 40
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} whileHover={{
            scale: 1.03,
            y: -5,
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
            transition: {
              duration: 0.3,
              ease: "easeOut"
            }
          }} className={`rounded-3xl p-4 md:p-8 border border-border/50 backdrop-blur-sm transition-all duration-300 flex flex-row md:flex-col items-start md:items-stretch gap-3 md:gap-0 cursor-pointer`}>
                <motion.div whileHover={{
              rotate: [0, -10, 10, 0],
              scale: 1.1
            }} transition={{
              duration: 0.5
            }} className={`flex-shrink-0 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${item.gradient} text-white font-bold text-xl md:text-2xl md:mb-6 shadow-lg`}>
                  {item.number}
                </motion.div>
                <div className="flex-1 md:flex-none">
                  <h3 className="text-foreground mb-2 md:mb-4 text-base md:text-lg font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{item.description}</p>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Warum New Edge Section */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 bg-white overflow-hidden">
        <div className="container-xl relative z-10">
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
        }} className="text-left mb-20">
            <h2 className="text-[36px] sm:text-[48px] md:text-[52px] lg:text-[56px] text-foreground mb-6 font-bold">Warum New Edge?</h2>
            <p className="text-muted-foreground max-w-4xl text-base lg:text-xl">
              Drei spezialisierte Labels, ein nahtloser Prozess, maximaler Erfolg für Ihr Projekt.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto px-4 sm:px-0">
            {[{
            icon: Star,
            title: "Expertise",
            description: "Spezialisierte Teams für jeden Bereich",
            gradient: "from-purple-600 to-purple-800"
          }, {
            icon: Zap,
            title: "Effizienz",
            description: "Optimierte Prozesse und kurze Wege",
            gradient: "from-blue-600 to-blue-800"
          }, {
            icon: Target,
            title: "Zielgerichtet",
            description: "Fokus auf messbare Ergebnisse",
            gradient: "from-yellow-500 to-yellow-600"
          }, {
            icon: ArrowRight,
            title: "Kontinuität",
            description: "Nahtlose Übergänge zwischen den Phasen",
            gradient: "from-green-600 to-green-800"
          }].map((item, index) => <motion.div key={item.title} initial={{
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
                <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-soft`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-h4 font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Erfolg Erreicht Section */}
      

      {/* Problem-Lösung Section */}
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
          }} className="text-2xl sm:text-3xl mb-4 bg-gradient-primary bg-clip-text leading-[1.2] text-gray-950 font-bold lg:text-4xl">
              Für wen wir arbeiten & warum
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
          }} className="text-base text-gray-600 max-w-3xl leading-[1.6] lg:text-xl">
              Spezialisiert auf mittelständische KMUs, die Vorreiter werden wollen
            </motion.p>
          </motion.div>

            {/* Two-Column Layout: Accordion Left, Animation Right */}
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
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
                    <button onClick={() => setOpenAccordionIndex(isOpen ? -1 : index)} className="w-full py-5 px-0 flex items-center justify-between text-left hover:opacity-70 transition-opacity text-lg font-semibold text-slate-950">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground">
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
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>;
            })}
            </div>

              {/* Right: Animated Visual */}
              <div>
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

      {/* Service Cards Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-br from-white via-gray-50/50 to-white overflow-hidden">
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
          }} className="text-[42px] sm:text-[48px] md:text-[52px] lg:text-[56px] text-foreground mb-6 leading-[1.25] font-bold">
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
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto" initial="hidden" whileInView="visible" viewport={{
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
            {[
              {
                icon: Sparkles,
                title: "New Edge Studio",
                description: "Hier beginnt alles. Wir entwickeln die visuelle Identität, Strategie und das Fundament für Ihr Projekt.",
                gradient: "from-secondary to-accent",
                link: "/studio"
              },
              {
                icon: Brain,
                title: "New Edge Media",
                description: "Content-Produktion und Reichweite. Hier wird alles produziert, veröffentlicht und gesteuert.",
                gradient: "from-primary to-secondary",
                link: "/media"
              },
              {
                icon: Zap,
                title: "New Edge Lab",
                description: "Tech-Innovation und Automatisierung. Von MVP bis zur finalen technischen Umsetzung.",
                gradient: "from-accent to-primary",
                link: "/lab"
              }
            ].map((service, index) => (
              <motion.div key={index} variants={{
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
                  <CardContent className="p-4 md:p-8 flex flex-row md:flex-col items-start md:items-stretch gap-4 md:gap-0 h-full">
                    {/* Icon with gradient background */}
                    <motion.div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center md:mb-6 shadow-lg flex-shrink-0`} whileHover={{
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: {
                      duration: 0.5
                    }
                  }}>
                      <service.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                    </motion.div>

                    <div className="flex-1 md:flex md:flex-col md:h-full">
                      {/* Title */}
                      <h3 className="text-base sm:text-lg md:text-[28px] lg:text-2xl text-foreground mb-2 md:mb-4 leading-[1.3] font-bold">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-6 leading-[1.5] md:flex-grow">
                        {service.description}
                      </p>

                      {/* Button */}
                      <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90 text-white group text-sm md:text-base md:mt-auto" asChild>
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
      <section id="contact-section" className="relative py-12 sm:py-16 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container-xl">
          <div className="text-center mb-16">
            <h2 className="text-[42px] sm:text-[48px] md:text-[52px] lg:text-[56px] font-semibold mb-4 text-foreground leading-[1.25]">
              Get in touch
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-[1.5]">
              Want to get in touch? We'd love to hear from you. Here's how you can reach us.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Talk to Sales */}
            <Card className="card-modern text-center p-3 sm:p-6 md:p-8 hover:shadow-xl transition-all flex flex-col">
              <CardContent className="space-y-3 sm:space-y-4 md:space-y-6 p-0 flex flex-col h-full">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-sm sm:text-lg md:text-[28px] lg:text-[32px] font-medium mb-1 sm:mb-2 text-foreground leading-[1.3]">Talk to Sales</h3>
                  <p className="text-[10px] sm:text-sm md:text-base text-muted-foreground mb-2 sm:mb-3 md:mb-4 leading-[1.5]">
                    Interested in our services? Just pick up the phone to chat with a member of our sales team.
                  </p>
                </div>
                <a href="tel:+4915750998236" className="text-primary font-semibold text-xs sm:text-base md:text-lg hover:underline mt-auto">
                  +49 157 5099 8236
                </a>
              </CardContent>
            </Card>

            {/* Contact Support */}
            <Card className="card-modern text-center p-3 sm:p-6 md:p-8 hover:shadow-xl transition-all flex flex-col">
              <CardContent className="space-y-3 sm:space-y-4 md:space-y-6 p-0 flex flex-col h-full">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-sm sm:text-lg md:text-[28px] lg:text-[32px] font-medium mb-1 sm:mb-2 text-foreground leading-[1.3]">Contact Team</h3>
                  <p className="text-[10px] sm:text-sm md:text-base text-muted-foreground mb-2 sm:mb-3 md:mb-4 leading-[1.5]">
                    Sometimes you need a little help from your friends. Or a support rep. Don't worry... we're here for you.
                  </p>
                </div>
                <Button onClick={() => setIsContactSheetOpen(true)} className="w-full bg-white border border-primary text-primary hover:bg-primary hover:text-white text-[10px] sm:text-sm md:text-base py-1 sm:py-2 mt-auto transition-all duration-300">
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
              <Textarea id="nachricht" name="nachricht" required placeholder="Erzählen Sie uns von Ihrem Projekt..." className="min-h-[120px]" />
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
    })} className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 bg-gradient-primary text-white p-3 sm:p-4 rounded-full shadow-elegant hover:shadow-glow transition-all duration-300 hover-lift min-h-[48px] min-w-[48px]" whileHover={{
      scale: 1.1
    }} whileTap={{
      scale: 0.9
    }}>
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transform -rotate-90" />
        </motion.button>}
        
        {/* Footer */}
        <Footer />
    </div>;
};
export default Services;