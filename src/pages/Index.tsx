import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { HeroSection } from "../components/HeroSection";
import { ServicesOverviewSection } from "../components/ServicesOverviewSection";
import { InnovationSection } from "../components/InnovationSection";
import { ScrollAnimation } from "../hooks/useScrollAnimation";
import { FastLoadWrapper } from "../components/FastLoadWrapper";
import { MobileNavigation } from "@/components/MobileNavigation";
import CookieConsent from "@/components/CookieConsent";
import { Footer } from "@/components/Footer";
import { ProblemSolutionSection } from "@/components/ProblemSolutionSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from "@/hooks/use-toast";
import { useCallback, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, Zap, Palette, Target, Rocket, Star, Users, Code, Globe, Briefcase, Phone, MessageSquare, Eye } from "lucide-react";
const Index = () => {
  const {
    t
  } = useLanguage();
  const [isContactSheetOpen, setIsContactSheetOpen] = useState(false);
  const [contactFormType, setContactFormType] = useState<"kmu" | "agentur" | null>(null);
  const [openAccordionIndex, setOpenAccordionIndex] = useState(0);

  // Auto-focus und Reset-Logik für Kontaktformular
  useEffect(() => {
    if (isContactSheetOpen) {
      setTimeout(() => {
        document.getElementById("name")?.focus();
      }, 300);
    }
  }, [isContactSheetOpen]);
  const handleSheetClose = (open: boolean) => {
    setIsContactSheetOpen(open);
    if (!open) {
      setContactFormType(null);
    }
  };

  // ✅ KORRIGIERTE handleSubmit Funktion - alle 6 Felder werden korrekt übertragen
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted - handleSubmit called");
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Log all form fields to debug
    console.log("Raw FormData entries:");
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: "${value}"`);
    }

    // ✅ KORRIGIERT: Deutsche Feldnamen für Webhook + korrekte Feldzuordnung
    const data = {
      name: formData.get("name")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      position: formData.get("position")?.toString() || "",
      firma: formData.get("firma")?.toString() || "",
      // ← firma (nicht company!)
      telefon: formData.get("telefon")?.toString() || "",
      // ← telefon (nicht phone!)
      nachricht: formData.get("nachricht")?.toString() || "" // ← nachricht (nicht message!)
    };
    console.log("Complete data object to send to webhook:", data);
    console.log("Firma:", data.firma);
    console.log("Telefon:", data.telefon);
    console.log("Nachricht:", data.nachricht);
    try {
      console.log("Attempting to send to webhook...");
      const response = await fetch("https://n8n-pro-oh9w.onrender.com/webhook/kontakt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      console.log("Response status:", response.status);
      console.log("Response ok:", response.ok);
      if (response.ok) {
        console.log("Form submitted successfully");
        toast({
          title: "Wir designen für dich",
          description: "Vielen Dank für deine Anfrage! Wir melden uns bald bei dir.",
          duration: 5000
        });
        form.reset();
      } else {
        const errorText = await response.text();
        console.error("Server error:", errorText);
        throw new Error(`Server responded with ${response.status}: ${errorText}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Fehler",
        description: "Es gab ein Problem beim Senden deiner Nachricht. Bitte versuche es erneut.",
        variant: "destructive",
        duration: 5000
      });
    }
  }, []);
  const services = [{
    icon: Lightbulb,
    title: "New Edge Studio",
    description: "Visuelles Storytelling und Brand-Design, das im Gedächtnis bleibt.",
    gradient: "from-primary to-primary/70"
  }, {
    icon: Palette,
    title: "New Edge Media",
    description: "KI-gestützte Inhaltsstrategien, die Ihre Zielgruppe erreichen und konvertieren.",
    gradient: "from-secondary to-secondary/70"
  }, {
    icon: Zap,
    title: "New Edge Lab",
    description: "Intelligente Systeme und Workflows für maximale Effizienz.",
    gradient: "from-accent to-accent/70"
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

        {/* Services Overview Section */}
        <ServicesOverviewSection />

        {/* Info Section */}
        <section id="main-content" className="relative py-8 sm:py-12 bg-gradient-to-br from-white via-gray-50/30 to-white overflow-hidden">
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
                
                
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Innovation Section */}
        <InnovationSection />

        {/* Problem-Lösung Sektion - Neu aus Briefing */}
        <section className="relative py-8 sm:py-12 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
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
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.2,
              duration: 0.7
            }} className="text-h1 mb-4 bg-gradient-primary bg-clip-text text-gray-950 font-semibold text-4xl">
                Ihr Gewinn mit New Edge
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-lg text-muted-foreground leading-relaxed font-normal lg:text-xl max-w-3xl mt-6"
              >
                Gemeinsam mit Ihrem Team und bestehenden Agenturpartnern entwickeln wir KI-gestützte Automationslösungen, die Marke, Content und Prozesse nahtlos verbinden
              </motion.p>
            </motion.div>

            {/* Two-Column Layout with Mobile Scroll Effect */}
            <ProblemSolutionSection openAccordionIndex={openAccordionIndex} setOpenAccordionIndex={setOpenAccordionIndex} />
          </div>
        </section>

        {/* Gemeinsam Zukunft gestalten Section */}
        <section className="relative py-8 sm:py-12 bg-gradient-to-br from-white via-gray-50/30 to-white overflow-hidden">
          <div className="container-xl relative z-10">
            {/* Header */}
            <motion.div className="text-left mb-12" initial={{
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
              <motion.div className="mb-2"></motion.div>
              <motion.h2 className="text-h1 mb-4 text-foreground text-4xl font-semibold">
                Gemeinsam Zukunft gestalten – vernetzt. automatisiert. wirkungsvoll.
              </motion.h2>
              <motion.p className="text-body-lg text-muted-foreground max-w-3xl font-normal text-xl">
                New Edge verbindet Unternehmen und Agenturen in einem exklusiven Netzwerk, um kreative Exzellenz und
                intelligente Automatisierung zu vereinen – für mehr Wirkung, weniger Aufwand und messbares Wachstum
              </motion.p>
            </motion.div>

            {/* Toggle Tabs */}
            <Tabs defaultValue="kmu" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="inline-flex p-0.5 bg-muted/50 rounded-full border border-border/50 h-9">
                  <TabsTrigger value="kmu" className="text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full transition-all duration-200 px-6">
                    KMU
                  </TabsTrigger>
                  <TabsTrigger value="agenturen" className="text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full transition-all duration-200 px-6">
                    Agenturen
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* KMU Content */}
              <TabsContent value="kmu" className="space-y-8">
                <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1]
              }} className="max-w-6xl mx-auto">
                  <div className="bg-white rounded-2xl sm:rounded-[32px] p-6 sm:p-10 md:p-12 lg:p-16 shadow-[0_2px_16px_rgba(0,0,0,0.06)]">
                    <div className="max-w-3xl">
                      <motion.h3 initial={{
                      opacity: 0,
                      y: 10
                    }} animate={{
                      opacity: 1,
                      y: 0
                    }} transition={{
                      delay: 0.2,
                      duration: 0.6
                    }} className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 text-gray-900 tracking-tight leading-[1.1] font-medium lg:text-4xl">
                        Für Unternehmen, die Vorreiter werden wollen
                      </motion.h3>
                      <motion.p initial={{
                      opacity: 0,
                      y: 10
                    }} animate={{
                      opacity: 1,
                      y: 0
                    }} transition={{
                      delay: 0.3,
                      duration: 0.6
                    }} className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 md:mb-16 leading-relaxed font-normal md:text-lg">
                        New Edge ist Ihr Partner für intelligente Automatisierung – und Ihr Zugang zu den besten
                        Kreativagenturen
                      </motion.p>
                    </div>

                    {/* Mobile: Accordion */}
                    <div className="md:hidden">
                      <Accordion type="single" collapsible className="space-y-3">
                        {[{
                        title: "Automatisierung mit Impact",
                        description: "Wir automatisieren Ihre Workflows end-to-end – für mehr Effizienz, Tempo und geringere Kosten.",
                        icon: "⚡"
                      }, {
                        title: "Kreative Exzellenz auf Abruf",
                        description: "Über unser Partnernetzwerk erhalten Sie Zugang zu Top-Agenturen für Branding, Design und Media.",
                        icon: "🎨"
                      }, {
                        title: "Ganzheitliche Projekte",
                        description: "New Edge koordiniert Prozesse und Partner zentral – ein Ansprechpartner, klare Ergebnisse.",
                        icon: "🔗"
                      }, {
                        title: "Beobachtbares Wachstum",
                        description: "Alle KPIs in Echtzeit: Fortschritt, Performance und ROI jederzeit nachvollziehbar.",
                        icon: "📊"
                      }].map((item, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 rounded-2xl border-none">
                            <AccordionTrigger className="px-5 py-4 hover:no-underline">
                              <h4 className="text-h3 font-bold text-gray-900 text-left">
                                {item.title}
                              </h4>
                            </AccordionTrigger>
                            <AccordionContent className="px-5 pb-4">
                              <p className="text-body-sm text-gray-600 leading-relaxed">{item.description}</p>
                            </AccordionContent>
                          </AccordionItem>)}
                      </Accordion>
                    </div>

                    {/* Desktop: Grid */}
                    <div className="hidden md:grid md:grid-cols-2 gap-6">
                      {[{
                      title: "Automatisierung mit Impact",
                      description: "Wir automatisieren Ihre Workflows end-to-end – für mehr Effizienz, Tempo und geringere Kosten.",
                      icon: "⚡"
                    }, {
                      title: "Kreative Exzellenz auf Abruf",
                      description: "Über unser Partnernetzwerk erhalten Sie Zugang zu Top-Agenturen für Branding, Design und Media.",
                      icon: "🎨"
                    }, {
                      title: "Ganzheitliche Projekte",
                      description: "New Edge koordiniert Prozesse und Partner zentral – ein Ansprechpartner, klare Ergebnisse.",
                      icon: "🔗"
                    }, {
                      title: "Beobachtbares Wachstum",
                      description: "Alle KPIs in Echtzeit: Fortschritt, Performance und ROI jederzeit nachvollziehbar.",
                      icon: "📊"
                    }].map((item, index) => <motion.div key={index} initial={{
                      opacity: 0,
                      y: 20
                    }} animate={{
                      opacity: 1,
                      y: 0
                    }} transition={{
                      delay: 0.4 + index * 0.1,
                      duration: 0.6
                    }} className="group bg-gray-50 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 transition-all duration-300 hover:bg-gray-100">
                          <div className="mb-3 sm:mb-4">
                            
                          </div>
                          <h4 className="text-h3 mb-2 sm:mb-3 text-gray-900 font-medium text-2xl">
                            {item.title}
                          </h4>
                          <p className="text-body text-gray-600 leading-relaxed">{item.description}</p>
                        </motion.div>)}
                    </div>
                  </div>
                </motion.div>
              </TabsContent>

              {/* Agenturen Content */}
              <TabsContent value="agenturen" className="space-y-8">
                <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1]
              }} className="max-w-6xl mx-auto">
                  <div className="bg-white rounded-2xl sm:rounded-[32px] p-6 sm:p-10 md:p-12 lg:p-16 shadow-[0_2px_16px_rgba(0,0,0,0.06)]">
                    <div className="max-w-3xl">
                      <motion.h3 initial={{
                      opacity: 0,
                      y: 10
                    }} animate={{
                      opacity: 1,
                      y: 0
                    }} transition={{
                      delay: 0.2,
                      duration: 0.6
                    }} className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 text-gray-900 tracking-tight leading-[1.1] font-medium lg:text-4xl">
                        Für Agenturen, die Wachstum automatisieren wollen
                      </motion.h3>
                      <motion.p initial={{
                      opacity: 0,
                      y: 10
                    }} animate={{
                      opacity: 1,
                      y: 0
                    }} transition={{
                      delay: 0.3,
                      duration: 0.6
                    }} className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 md:mb-16 leading-relaxed font-normal">
                        Als zertifizierter Partner werden Sie Teil unseres exklusiven Netzwerks. Wir vermitteln Kunden,
                        integrieren Automatisierung und schaffen skalierbare Workflows für nachhaltiges Wachstum.
                      </motion.p>
                    </div>

                    {/* Mobile: Accordion */}
                    <div className="md:hidden">
                      <Accordion type="single" collapsible className="space-y-3">
                        {[{
                        title: "Automatisierung für Ihr Agenturbusiness",
                        description: "Agenturprozesse kennen wir aus erster Hand. Wir optimieren Ihre Abläufe – von Briefings bis Reporting – für maximale Effizienz."
                      }, {
                        title: "Gemeinsame Kundenbetreuung",
                        description: "Partneragenturen arbeiten mit uns an Projekten unserer Kunden"
                      }, {
                        title: "Beobachtbares Wachstum",
                        description: "Alle KPIs in Echtzeit: Fortschritt, Performance und ROI jederzeit nachvollziehbar."
                      }, {
                        title: "Eigene Automationslösungen vermarkten",
                        description: "Unsere Technologie läuft im Hintergrund – Sie treten als Anbieter smarter Automatisierung auf."
                      }].map((item, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 rounded-2xl border-none">
                            <AccordionTrigger className="px-5 py-4 hover:no-underline">
                              <h4 className="text-h3 font-bold text-gray-900 text-left">
                                {item.title}
                              </h4>
                            </AccordionTrigger>
                            <AccordionContent className="px-5 pb-4">
                              <p className="text-body-sm text-gray-600 leading-relaxed">{item.description}</p>
                            </AccordionContent>
                          </AccordionItem>)}
                      </Accordion>
                    </div>

                    {/* Desktop: Grid */}
                    <div className="hidden md:grid md:grid-cols-2 gap-6">
                      {[{
                      title: "Automatisierung für Ihr Agenturbusiness",
                      description: "Agenturprozesse kennen wir aus erster Hand. Wir optimieren Ihre Abläufe – von Briefings bis Reporting – für maximale Effizienz."
                    }, {
                      title: "Gemeinsame Kundenbetreuung",
                      description: "Partneragenturen arbeiten mit uns an Projekten unserer Kunden"
                    }, {
                      title: "Beobachtbares Wachstum",
                      description: "Alle KPIs in Echtzeit: Fortschritt, Performance und ROI jederzeit nachvollziehbar."
                    }, {
                      title: "Eigene Automationslösungen vermarkten",
                      description: "Unsere Technologie läuft im Hintergrund – Sie treten als Anbieter smarter Automatisierung auf."
                    }].map((item, index) => <motion.div key={index} initial={{
                      opacity: 0,
                      y: 20
                    }} animate={{
                      opacity: 1,
                      y: 0
                    }} transition={{
                      delay: 0.4 + index * 0.1,
                      duration: 0.6
                    }} className="group bg-gray-50 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 transition-all duration-300 hover:bg-gray-100">
                          <h4 className="text-h3 mb-2 sm:mb-3 text-gray-900 font-medium text-2xl">
                            {item.title}
                          </h4>
                          <p className="text-body text-gray-600 leading-relaxed">{item.description}</p>
                        </motion.div>)}
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            </Tabs>

            {/* CTA-Buttons für KMU und Agenturen */}
            <motion.div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12" initial={{
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
          }}>
              <Button size="lg" onClick={() => {
              setContactFormType("kmu");
              setIsContactSheetOpen(true);
            }} className="min-h-12 px-8 bg-white border-2 border-primary text-primary hover:bg-primary/5 hover:text-primary shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200">
                <Briefcase className="mr-2 h-5 w-5" />
                Kontakt aufnehmen
              </Button>

              <Button size="lg" onClick={() => {
              setContactFormType("agentur");
              setIsContactSheetOpen(true);
            }} className="min-h-12 px-8 bg-white border-2 border-yellow-400 text-gray-900 hover:bg-yellow-400/10 hover:text-gray-900 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200">
                <Users className="mr-2 h-5 w-5" />
                Agentur-Match anfragen
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Impact Points Section with Modern Animations */}

        {/* Unsere Kompetenzbereiche - Light Section */}
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
            }} className="text-h1 text-foreground mb-4 sm:mb-6 leading-[1.25] font-semibold text-4xl">
                Unsere Services
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
            }} className="text-body-lg text-muted-foreground max-w-3xl leading-[1.5] text-xl">
                Drei Bereiche, eine Vision: Ihre Marke erfolgreich in der digitalen Welt erfolgreich zu positionieren
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
                        <h3 className="text-h3 text-foreground mb-2 md:mb-4 leading-[1.3] text-2xl font-medium">
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-body text-muted-foreground mb-3 md:mb-6 leading-[1.5] md:flex-grow">
                          {service.description}
                        </p>

                        {/* Button */}
                        <Button variant="default" size="sm" className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground group text-sm md:text-base md:mt-auto transition-all duration-300" asChild>
                          <Link to={`/${service.title.toLowerCase().split(" ")[0]}`}>
                            Mehr erfahren
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>)}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact-section" className="relative py-12 sm:py-16 bg-gradient-to-br from-primary/5 via-background to-primary/10 overflow-hidden">
          <div className="container-xl relative z-10">
            <motion.div className="text-center" initial={{
            opacity: 0,
            y: 50
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
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.2,
              duration: 0.7
            }} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-5 md:mb-6 leading-[1.25] text-black font-semibold px-4">
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
            }} className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-10 leading-[1.5] max-w-3xl mx-auto px-4">
                New Edge ist das Headquarter für Innovation. Hier entsteht die Zukunft von Marken, Agenturen und
                Prozessen
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
                <Button size="lg" onClick={() => setIsContactSheetOpen(true)} className="group bg-white border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  Kontakt aufnehmen
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => {
                setContactFormType("agentur");
                setIsContactSheetOpen(true);
              }} className="border-2">
                  Partner werden
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Sheet */}
        <Sheet open={isContactSheetOpen} onOpenChange={handleSheetClose}>
          <SheetContent side="right" className="w-full sm:max-w-xl overflow-y-auto backdrop-blur-sm">
            <SheetHeader className="mb-6">
              <SheetTitle className="text-2xl font-bold">
                {contactFormType === "kmu" ? "Anfrage von Unternehmen (KMU)" : contactFormType === "agentur" ? "Anfrage von Agenturpartner" : "Projekt besprechen"}
              </SheetTitle>
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
                  <Textarea id="nachricht" name="nachricht" placeholder="Erzählen Sie uns von Ihrem Projekt..." defaultValue={contactFormType === "kmu" ? "Ich interessiere mich für Automatisierungslösungen mit New Edge." : contactFormType === "agentur" ? "Wir möchten Partner von New Edge werden und gemeinsam Projekte automatisieren." : ""} required className="min-h-[120px] bg-background/50 border-border focus:border-primary transition-colors resize-none" />
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full btn-primary text-slate-50">
                Nachricht senden
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </SheetContent>
        </Sheet>

        {/* Footer */}
        <Footer />

        {/* Cookie Consent */}
        <CookieConsent />
      </div>
    </FastLoadWrapper>;
};
export default Index;