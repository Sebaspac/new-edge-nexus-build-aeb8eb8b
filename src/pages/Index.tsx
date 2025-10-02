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
import { ArrowRight, Sparkles, Zap, Brain, Target, Rocket, Star, Users, Code, Palette, Globe, Briefcase, Phone, MessageSquare } from "lucide-react";
const Index = () => {
  const {
    t
  } = useLanguage();
  const [isContactSheetOpen, setIsContactSheetOpen] = useState(false);

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
        <section className="relative py-12 sm:py-16 bg-gradient-to-br from-white via-gray-50/30 to-white overflow-hidden">
          {/* Parallax Floating Elements */}
          <motion.div 
            className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{ 
              y: [0, -20, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-10 left-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            animate={{ 
              x: [0, 20, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          <div className="container-xl relative z-10">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.1
                  }
                }
              }}
              className="max-w-5xl space-y-8"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
                }}
                className="mb-10"
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 leading-[1.2] text-black">
                  Wir bringen Ihr Unternehmen{" "}
                  <motion.span 
                    className="bg-gradient-primary bg-clip-text text-transparent inline-block"
                    whileInView={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 1, delay: 0.3 }}
                  >
                    an die Spitze
                  </motion.span>
                  {" "}Ihrer Branche
                </h2>
              </motion.div>
              
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -60, rotateY: -10 },
                  visible: { opacity: 1, x: 0, rotateY: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
                }}
                whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.3 } }}
                className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl hover:border-primary/20 transition-all duration-300"
              >
                <motion.h3 
                  className="text-xl sm:text-2xl font-black mb-5 text-black bg-gradient-primary bg-clip-text text-transparent"
                  whileHover={{ scale: 1.03 }}
                >
                  Unsere Mission
                </motion.h3>
                <p className="text-base sm:text-lg text-gray-700 leading-[1.8] tracking-wide">
                  Mit Innovation und Automatisierung, für die Sie im operativen Tagesgeschäft sonst keinen Zugang hätten.
                </p>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 60, rotateY: 10 },
                  visible: { opacity: 1, x: 0, rotateY: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
                }}
                whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.3 } }}
                className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl hover:border-primary/20 transition-all duration-300"
              >
                <motion.h3 
                  className="text-xl sm:text-2xl font-black mb-5 text-black"
                  whileHover={{ scale: 1.03 }}
                >
                  Für wen wir arbeiten
                </motion.h3>
                <p className="text-base sm:text-lg text-gray-700 leading-[1.8] tracking-wide">
                  Spezialisiert auf mittelständische KMUs, die ihre Prozesse modernisieren und Vorreiter ihrer Branche werden wollen – ohne sich im Tagesgeschäft zu verlieren.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Innovation Section */}
        <InnovationSection />

        {/* Problem-Lösung Sektion - Neu aus Briefing */}
        <section className="relative py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
          {/* Enhanced Animated background with multiple layers */}
          <motion.div 
            className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" 
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 60, 0],
              y: [0, -40, 0],
              rotate: [0, 90, 0]
            }} 
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }} 
          />
          <motion.div 
            className="absolute bottom-20 left-20 w-64 h-64 bg-secondary/5 rounded-full blur-2xl" 
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -30, 0],
              y: [0, 40, 0]
            }} 
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }} 
          />

          <div className="container-xl relative z-10">
            {/* Header with enhanced animations */}
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center mb-24"
            >
              <motion.h2 
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-8 bg-gradient-primary bg-clip-text text-transparent leading-[1.2]" 
                initial={{ opacity: 0, rotateX: -20 }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.7 }}
                whileHover={{ scale: 1.03 }}
              >
                Für wen wir arbeiten & warum
              </motion.h2>
              <motion.p 
                className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-[1.8] tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Spezialisiert auf mittelständische KMUs, die Vorreiter werden wollen
              </motion.p>
            </motion.div>

            {/* Problem-Lösung Grid with enhanced animations */}
            <motion.div 
              className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-24" 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-50px" }} 
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.25,
                    delayChildren: 0.2
                  }
                }
              }}
            >
              {/* Problem Card */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: -80, rotateY: -25, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    rotateY: 0,
                    scale: 1,
                    transition: {
                      duration: 0.9,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }
                  }
                }} 
                whileHover={{
                  scale: 1.05,
                  y: -15,
                  rotateY: 5,
                  transition: { duration: 0.4, type: "spring", stiffness: 200 }
                }} 
                className="perspective-1000"
              >
                <Card className="h-full bg-white border-2 border-red-200 shadow-2xl hover:shadow-[0_20px_60px_rgba(239,68,68,0.3)] hover:border-red-400 transition-all duration-500">
                  <CardContent className="p-10">
                    <motion.div 
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-8 shadow-lg"
                      whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Target className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl sm:text-3xl font-black mb-8 text-black leading-tight">Ihre Herausforderung</h3>
                    <motion.ul 
                      className="space-y-5"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={{
                        visible: {
                          transition: { staggerChildren: 0.1 }
                        }
                      }}
                    >
                      {[
                        "Manuelle, zeitraubende Prozesse im Tagesgeschäft",
                        "Keine Zeit für Digitalisierung und Innovation",
                        "Fachkräftemangel und steigende Kosten",
                        "Wettbewerber ziehen davon – Sie bleiben zurück",
                        "Klassische Agenturen liefern keine echte Innovation"
                      ].map((text, i) => (
                        <motion.li 
                          key={i}
                          className="flex items-start gap-3"
                          variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { opacity: 1, x: 0 }
                          }}
                          whileHover={{ x: 8, transition: { duration: 0.2 } }}
                        >
                          <span className="text-red-500 font-black mt-1 text-xl">×</span>
                          <span className="text-gray-700 text-base leading-[1.7]">{text}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Lösung Card */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: 80, rotateY: 25, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    rotateY: 0,
                    scale: 1,
                    transition: {
                      duration: 0.9,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }
                  }
                }} 
                whileHover={{
                  scale: 1.05,
                  y: -15,
                  rotateY: -5,
                  transition: { duration: 0.4, type: "spring", stiffness: 200 }
                }} 
                className="perspective-1000"
              >
                <Card className="h-full bg-gradient-to-br from-white to-green-50 border-2 border-green-200 shadow-2xl hover:shadow-[0_20px_60px_rgba(34,197,94,0.3)] hover:border-green-400 transition-all duration-500">
                  <CardContent className="p-10">
                    <motion.div 
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-8 shadow-lg"
                      whileHover={{ scale: 1.15, rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Rocket className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl sm:text-3xl font-black mb-8 text-black leading-tight">Unsere Lösung</h3>
                    <motion.ul 
                      className="space-y-5"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={{
                        visible: {
                          transition: { staggerChildren: 0.1 }
                        }
                      }}
                    >
                      {[
                        "KI-gestützte Automatisierung Ihrer Prozesse",
                        "30% mehr Zeit für Ihr Kerngeschäft",
                        "Messbare Effizienzsteigerung & ROI",
                        "Sie werden Vorreiter Ihrer Branche",
                        "Hybrid: Marketing + Technologie + Automatisierung"
                      ].map((text, i) => (
                        <motion.li 
                          key={i}
                          className="flex items-start gap-3"
                          variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 }
                          }}
                          whileHover={{ x: 8, transition: { duration: 0.2 } }}
                        >
                          <span className="text-green-500 font-black mt-1 text-xl">✓</span>
                          <span className="text-gray-700 font-semibold text-base leading-[1.7]">{text}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Nutzenversprechen Box with enhanced animations */}
            <motion.div 
              initial={{ opacity: 0, y: 60, scale: 0.85 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.3 } }}
              className="max-w-5xl mx-auto"
            >
              <Card className="bg-gradient-to-br from-primary via-primary to-secondary border-0 shadow-[0_20px_60px_rgba(0,0,0,0.2)] hover:shadow-[0_25px_80px_rgba(0,0,0,0.25)] transition-all duration-500 overflow-hidden">
                <motion.div 
                  className="absolute inset-0 opacity-20" 
                  animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }} 
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }} 
                  style={{
                    backgroundImage: "radial-gradient(circle at 20px 20px, white 2px, transparent 0)",
                    backgroundSize: "40px 40px"
                  }} 
                />
                <CardContent className="p-12 sm:p-16 relative z-10">
                  <div className="text-center">
                    <motion.div 
                      className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-white/20 backdrop-blur-sm mb-10 shadow-2xl" 
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.15, 1]
                      }} 
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <Star className="w-12 h-12 text-white" />
                    </motion.div>
                    <motion.h3 
                      className="text-2xl sm:text-3xl font-black text-white mb-8 leading-tight"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    >
                      Konkret für Sie
                    </motion.h3>
                    <motion.p 
                      className="text-lg sm:text-xl text-white/95 leading-[1.9] max-w-4xl mx-auto tracking-wide"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7, duration: 0.6 }}
                    >
                      Für mittelständische Produktions- oder Dienstleistungsunternehmen (50-300 Mitarbeiter), die ihre Prozesse manuell betreiben und unter Fachkräftemangel leiden, implementiert New Edge <span className="font-black text-white">KI-gestützte Automatisierungen</span> und vernetzt sie mit passenden Agenturen. Dadurch gewinnen sie <span className="font-black text-white">30% mehr Zeit</span> für ihr Kerngeschäft, senken Fehlerquoten, stärken ihre Marke und werden als <span className="font-black text-white">innovative Vorreiter</span> in ihrer Branche wahrgenommen.
                    </motion.p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Impact Points Section with Modern Animations */}
        <section className="relative py-12 sm:py-16 bg-gradient-to-br from-white via-blue-50/20 to-white overflow-hidden">
          {/* Enhanced Parallax Floating Elements */}
          <motion.div 
            className="absolute top-40 right-10 w-28 h-28 bg-accent/10 rounded-full blur-xl" 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{
              x: [0, 40, 0],
              y: [0, -30, 0],
              scale: [1, 1.4, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-20 left-20 w-40 h-40 bg-primary/5 rounded-full blur-2xl" 
            initial={{ opacity: 0, rotate: -180 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            animate={{
              rotate: [0, 360],
              scale: [1, 0.8, 1],
              x: [0, -20, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <div className="container-xl relative z-10">
            {/* Section Title with enhanced scale animation */}
            <motion.div 
              className="text-center mb-20" 
              initial={{ opacity: 0, scale: 0.8, y: 60 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.h2 
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-8 text-black leading-[1.2]" 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.7 }}
                whileHover={{ scale: 1.03 }}
              >
                Unsere innovative Herangehensweise
              </motion.h2>
            </motion.div>
            
            {/* Grid with enhanced stagger animation */}
            <motion.div 
              className="grid md:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto" 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-80px" }} 
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.2
                  }
                }
              }}
            >
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
              }].map((point, index) => 
                <motion.div 
                  key={index} 
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 60,
                      scale: 0.85,
                      rotateX: -15
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      rotateX: 0,
                      transition: {
                        duration: 0.7,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }
                    }
                  }} 
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    rotateX: 5,
                    transition: { duration: 0.4, type: "spring", stiffness: 200 }
                  }} 
                  className="group h-full"
                >
                  <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl hover:border-primary/30 transition-all duration-500 h-full">
                    <div className="flex items-start gap-5 mb-6">
                      <motion.div 
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.6, type: "spring" }}
                        className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center text-white font-black text-lg shadow-lg"
                      >
                        {point.number}
                      </motion.div>
                      <h3 className="text-xl sm:text-2xl font-black text-black group-hover:text-primary transition-colors flex-1 leading-tight">
                        {point.title}
                      </h3>
                    </div>
                    <p className="text-base sm:text-lg text-gray-700 leading-[1.8] tracking-wide pl-[4.75rem]">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Services Section with Modern Animations */}
        <section className="relative py-12 sm:py-16 bg-gradient-to-br from-white via-purple-50/20 to-white overflow-hidden">
          {/* Parallax background orbs */}
          <motion.div 
            className="absolute top-10 left-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl"
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-10 right-10 w-56 h-56 bg-secondary/5 rounded-full blur-3xl"
            animate={{
              x: [0, -30, 0],
              y: [0, 20, 0],
              scale: [1.2, 1, 1.2]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />

          <div className="container-xl relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.9 }} 
              whileInView={{ opacity: 1, y: 0, scale: 1 }} 
              viewport={{ once: true, margin: "-80px" }} 
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }} 
              className="text-center mb-20"
            >
              <motion.h2 
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-8 text-black leading-[1.2]"
                initial={{ opacity: 0, rotateX: -15 }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.7 }}
                whileHover={{ scale: 1.03 }}
              >
                Know-how trifft Prozess
              </motion.h2>
              <motion.p 
                className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-[1.8] tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Unser Team bringt sein Fachwissen gezielt in jede Phase ein – 
                von der Strategie bis zur Technologie-Umsetzung.
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto" 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-50px" }} 
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.2
                  }
                }
              }}
            >
              {[{
                phase: "Studio",
                title: "Strategie & Beratung",
                description: "Unsere Strategy Leads und Coaches entwickeln maßgeschneiderte Markenstrategien.",
                team: "Strategy Leads, Brand Coaches"
              }, {
                phase: "Media",
                title: "Content & Kreation",
                description: "Unsere Content-Teams kreieren Inhalte – kreativ, datenbasiert und KI-gestützt.",
                team: "Creative Directors, Content Specialists"
              }, {
                phase: "Lab",
                title: "Technologie & Innovation",
                description: "Unsere Entwickler und Tech-Experten bringen Ihre Visionen zum Leben.",
                team: "Lead Developers, Tech Innovators"
              }].map((item, index) => 
                <motion.div 
                  key={item.phase} 
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 60,
                      scale: 0.85,
                      rotateY: -20
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      rotateY: 0,
                      transition: {
                        duration: 0.7,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }
                    }
                  }} 
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    rotateY: 5,
                    transition: { duration: 0.4, type: "spring", stiffness: 200 }
                  }} 
                  className="group"
                >
                  <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl hover:border-primary/30 transition-all duration-500 h-full">
                    <motion.h3 
                      className="text-2xl sm:text-3xl font-black mb-6 text-black group-hover:text-primary transition-colors leading-tight"
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.title}
                    </motion.h3>
                    <p className="text-base sm:text-lg text-gray-700 leading-[1.8] tracking-wide mb-6">
                      {item.description}
                    </p>
                    <motion.p 
                      className="text-sm sm:text-base text-gray-500 font-semibold"
                      initial={{ opacity: 0.7 }}
                      whileInView={{ opacity: 1 }}
                    >
                      {item.team}
                    </motion.p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Network Stats Section with Modern Animations */}
        <section className="relative py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
          {/* Animated background orbs */}
          <motion.div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 30, 0],
          y: [0, -30, 0]
        }} transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }} />
          <motion.div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
          x: [0, -30, 0],
          y: [0, 30, 0]
        }} transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }} />
          
          <div className="container-xl relative z-10">
            <motion.div initial={{
            opacity: 0,
            y: 50,
            rotateX: -20
          }} whileInView={{
            opacity: 1,
            y: 0,
            rotateX: 0
          }} viewport={{
            once: true,
            margin: "-100px"
          }} transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }} className="text-center mb-20">
              <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent" whileHover={{
              scale: 1.05
            }} transition={{
              duration: 0.3
            }}>
                Unser Netzwerk
              </motion.h2>
              <motion.p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed" initial={{
              opacity: 0
            }} whileInView={{
              opacity: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.3,
              duration: 0.6
            }}>
                Ein starkes Team aus Experten, Coaches und Partnern – 
                für jede Herausforderung die richtige Expertise.
              </motion.p>
            </motion.div>

            <motion.div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{
            once: true,
            margin: "-50px"
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
                y: 50,
                rotateY: -30
              },
              visible: {
                opacity: 1,
                scale: 1,
                y: 0,
                rotateY: 0,
                transition: {
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 100
                }
              }
            }} whileHover={{
              scale: 1.15,
              y: -10,
              rotateY: 10,
              transition: {
                duration: 0.3,
                type: "spring",
                stiffness: 300
              }
            }} className="group perspective-1000">
                  <Card className="bg-white border-2 border-border/50 shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all duration-500 h-full">
                    <CardContent className="p-6 text-center relative overflow-hidden">
                      {/* Animated gradient background */}
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
                    <div className="text-sm sm:text-base text-muted-foreground font-medium relative z-10">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>)}
            </motion.div>
          </div>
        </section>

        {/* Founders Section with Modern Animations */}
        <section className="relative py-12 sm:py-16 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
          {/* Animated background pattern */}
          <motion.div className="absolute top-0 left-0 w-full h-full opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, hsl(var(--primary)) 2px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} animate={{
          backgroundPosition: ['0px 0px', '40px 40px']
        }} transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }} />
          
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
            margin: "-100px"
          }} transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }} className="text-center mb-20">
              <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" initial={{
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
            }}>
                <span className="bg-gradient-primary bg-clip-text text-transparent">Die Gründer</span>
              </motion.h2>
              <motion.p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed" initial={{
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
                Expertise aus Strategie und Technologie – vereint für Ihren Erfolg.
              </motion.p>
            </motion.div>

            <motion.div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{
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
                delayChildren: 0.2
              }
            }
          }}>
              {[{
              name: "Sebastian Pachón",
              role: "Founder & Creative-Tech Partner",
              image: "/assets/c19dc1d8-e93c-4d25-a965-34dbef5d9fe1.png",
              expertise: ["Strategie", "Technologie"]
            }, {
              name: "Wenjamin Zabezhanskiy",
              role: "Operations & Innovation Partner",
              image: "/assets/06cbcdbb-3730-466c-b8c1-cf54d42fc7c1.png",
              expertise: ["Kreation", "Support"]
            }].map((founder, index) => <motion.div key={founder.name} variants={{
              hidden: {
                opacity: 0,
                y: 80,
                rotateY: index % 2 === 0 ? -30 : 30,
                scale: 0.8
              },
              visible: {
                opacity: 1,
                y: 0,
                rotateY: 0,
                scale: 1,
                transition: {
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 80
                }
              }
            }} whileHover={{
              y: -20,
              scale: 1.05,
              rotateY: index % 2 === 0 ? 5 : -5,
              transition: {
                duration: 0.4,
                type: "spring",
                stiffness: 200
              }
            }} className="group perspective-1000">
                  <Card className="h-full bg-white border-2 border-border/50 shadow-xl hover:shadow-2xl hover:border-primary/40 transition-all duration-500 overflow-hidden">
                    <div className="p-8 sm:p-10 flex flex-col h-full relative">
                      {/* Animated gradient overlay */}
                      <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" initial={false} />
                      
                      <div className="flex-shrink-0 mb-8 relative z-10">
                        <motion.div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-3xl overflow-hidden border-4 border-border/30 shadow-2xl group-hover:border-primary/50 transition-all duration-500 group-hover:shadow-primary/20" whileHover={{
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: {
                        duration: 0.5
                      }
                    }}>
                          <motion.img src={founder.image} alt={`${founder.name} - ${founder.role}`} className="w-full h-full object-cover" width={160} height={160} loading="lazy" whileHover={{
                        scale: 1.1
                      }} transition={{
                        duration: 0.5
                      }} />
                        </motion.div>
                      </div>
                      
                      <div className="text-center flex-grow flex flex-col justify-between relative z-10">
                        <div>
                        <motion.h3 className="text-xl sm:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors" whileHover={{
                        scale: 1.05
                      }}>
                          {founder.name}
                        </motion.h3>
                          <motion.p className="text-primary font-semibold mb-8 text-lg" initial={{
                        opacity: 0.8
                      }} whileInView={{
                        opacity: 1
                      }}>
                            {founder.role}
                          </motion.p>
                        </div>
                        
                        <div className="flex justify-center gap-3 flex-wrap">
                          {founder.expertise.map((skill, skillIndex) => <motion.span key={skillIndex} className="px-5 py-3 bg-gradient-to-br from-primary/10 to-secondary/10 text-foreground rounded-2xl text-sm font-bold border-2 border-primary/20 shadow-lg hover:shadow-xl" whileHover={{
                        scale: 1.1,
                        y: -5,
                        backgroundColor: "hsl(var(--primary) / 0.2)",
                        transition: {
                          duration: 0.2
                        }
                      }} initial={{
                        opacity: 0,
                        scale: 0
                      }} whileInView={{
                        opacity: 1,
                        scale: 1
                      }} transition={{
                        delay: skillIndex * 0.1 + 0.5
                      }}>
                              {skill}
                            </motion.span>)}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>)}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact-section" className="relative py-12 sm:py-16 bg-gradient-to-br from-primary/5 via-background to-primary/10">
          <div className="container-xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                Get in touch
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
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
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-foreground">Talk to Sales</h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Interested in our services? Just pick up the phone to chat with a member of our sales team.
                    </p>
                    <a href="tel:+4915750998236" className="text-primary font-semibold text-lg hover:underline">
                      +49 157 5099 8236
                    </a>
                  </div>
                  <Button variant="outline" className="w-full" onClick={() => window.location.href = 'tel:+4915750998236'}>
                    View all global numbers
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Support */}
              <Card className="card-modern text-center p-8 hover:shadow-xl transition-all">
                <CardContent className="space-y-6 p-0">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-foreground">Contact Customer Support</h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Sometimes you need a little help from your friends. Or a support rep. Don't worry... we're here for you.
                    </p>
                  </div>
                  <Button className="w-full btn-primary" onClick={() => setIsContactSheetOpen(true)}>
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