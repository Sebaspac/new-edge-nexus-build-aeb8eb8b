import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { HeroSection } from "../components/HeroSection";
import { ServicesOverviewSection } from "../components/ServicesOverviewSection";
import { MethodologyGrid } from "../components/MethodologyGrid";
import { PositionedForImpactSection } from "../components/PositionedForImpactSection";
import { CaseStudiesGrid } from "../components/CaseStudiesGrid";
import { InnovationSection } from "../components/InnovationSection";
import { ScrollAnimation } from "../hooks/useScrollAnimation";
import { MobileNavigation } from "@/components/MobileNavigation";
import CookieConsent from "@/components/CookieConsent";
import { lazy, Suspense, useCallback, useState, useEffect } from "react";
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
import { Link } from "react-router-dom";

// Lazy load Footer
const Footer = lazy(() => import("@/components/Footer").then(module => ({
  default: module.Footer
})));
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
    description: "Kreative Basis Ihrer Marke: Positionierung, Tonalität, Branding – übersetzt in Kampagnen & Designsysteme.",
    gradient: "from-primary to-primary/70",
    link: "/studio"
  }, {
    icon: Palette,
    title: "New Edge Media",
    description: "Content für den ganzen Funnel: Social bis Website, Paid & Owned – mit klaren KPIs.",
    gradient: "from-secondary to-secondary/70",
    link: "/media"
  }, {
    icon: Zap,
    title: "New Edge Lab",
    description: "Automationsmotor: Workflows, Integrationen, KI-Agenten & Dashboards.",
    gradient: "from-accent to-accent/70",
    link: "/lab"
  }];
  const stats = [{
    number: "30%",
    label: "mehr Zeit fürs Kerngeschäft",
    icon: Target
  }, {
    number: "5-150",
    label: "Mitarbeiter (unsere Zielgruppe)",
    icon: Users
  }, {
    number: "4x",
    label: "ROI durch Automatisierung",
    icon: Rocket
  }, {
    number: "100%",
    label: "Kundenzufriedenheit",
    icon: Star
  }];
  return <>
      <Helmet>
        <title>New Edge - Ihr Unternehmen an die Spitze bringen | Innovations- und KI Agentur für KMUs</title>
        <meta name="description" content="New Edge ist eine KI- & Automationsagentur für KMU. Wir verbinden Markenstrategie und Content mit maßgeschneiderten KI-Agenten und Integrationen." />
        <meta name="keywords" content="KI Agentur, KMU Automatisierung, Prozessoptimierung, Digitalisierung Mittelstand, KI für Unternehmen, Geschäftsprozesse automatisieren, Effizienzsteigerung, Innovation für KMUs" />
        <meta property="og:title" content="New Edge - Innovations- und KI Agentur für KMUs" />
        <meta property="og:description" content="Durch KI & Automationen Vorreiter Ihrer Branche werden mit New Edge - wir verbinden creative Prozesse mit KI Lösungen.  " />
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
        

        {/* Methodology Grid Section */}
        <MethodologyGrid />

        {/* Positioned for Impact Section */}
        <PositionedForImpactSection />

        {/* Case Studies Grid */}
        <CaseStudiesGrid />

        {/* Innovation Section */}
        <InnovationSection />

        {/* Gemeinsam Zukunft gestalten Section */}
        <section className="relative py-24 bg-white overflow-hidden">
          <div className="container-xl relative z-10">
            {/* Header */}
            <motion.div className="text-center mb-16" initial={{
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
              <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-black">
                Gemeinsam Zukunft gestalten
              </motion.h2>
              <motion.p className="text-xl text-gray-600 max-w-3xl mx-auto font-normal">
                New Edge verbindet Unternehmen und Agenturen in einem exklusiven Netzwerk, um kreative Exzellenz und
                intelligente Automatisierung zu vereinen.
              </motion.p>
            </motion.div>

            {/* Toggle Tabs */}
            <Tabs defaultValue="kmu" className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="inline-flex p-1 bg-gray-100 rounded-full h-12">
                  <TabsTrigger value="kmu" className="text-base font-semibold data-[state=active]:bg-[#7C3AED] data-[state=active]:text-white rounded-full transition-all duration-300 px-8">
                    KMU
                  </TabsTrigger>
                  <TabsTrigger value="agenturen" className="text-base font-semibold data-[state=active]:bg-[#7C3AED] data-[state=active]:text-white rounded-full transition-all duration-300 px-8">
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
                  <div className="bg-gray-50 rounded-3xl p-12 lg:p-16">
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
                    }} className="text-3xl md:text-4xl mb-6 text-black tracking-tight leading-[1.1] font-bold">
                        Für Unternehmen, die zukunftsorientiert denken
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
                    }} className="text-xl text-gray-600 mb-16 leading-relaxed font-normal">
                        New Edge ist Ihr Partner für intelligente Automatisierung – und Ihr Zugang zu den besten
                        Kreativagenturen.
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
                              <h4 className="text-h3 font-bold text-gray-900 text-left">{item.title}</h4>
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
                    }} className="group bg-white rounded-2xl p-8 border-l-4 border-transparent hover:border-[#7C3AED] hover:shadow-xl transition-all duration-300">
                          <h4 className="text-2xl mb-3 text-black font-bold">{item.title}</h4>
                          <p className="text-lg text-gray-600 leading-relaxed">{item.description}</p>
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
                  <div className="bg-gray-50 rounded-3xl p-12 lg:p-16">
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
                    }} className="text-3xl md:text-4xl mb-6 text-black tracking-tight leading-[1.1] font-bold">
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
                    }} className="text-xl text-gray-600 mb-16 leading-relaxed font-normal">
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
                              <h4 className="text-h3 font-bold text-gray-900 text-left">{item.title}</h4>
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
                          <h4 className="text-h3 mb-2 sm:mb-3 text-gray-900 font-medium text-xl">{item.title}</h4>
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

        {/* Problem-Lösung Sektion - Neu aus Briefing */}
        <section className="relative py-24 bg-gray-50 overflow-hidden">
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
          }} className="text-center mb-16">
              <span className="inline-block text-[#7C3AED] text-sm font-bold uppercase tracking-widest mb-4">
                VORTEILE
              </span>
              <motion.h3 initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.1,
              duration: 0.7
            }} className="mb-6 text-4xl md:text-5xl lg:text-6xl text-black font-black">Vorteile eines Innovationshubs</motion.h3>

              

              <motion.p initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.3,
              duration: 0.7
            }} className="text-xl text-gray-600 leading-relaxed font-normal max-w-3xl mx-auto">
                Gemeinsam mit Ihrem Team und bestehenden Agenturpartnern entwickeln wir kreative und KI-gestützte
                Automationslösungen, die Marke, Content und Prozesse nahtlos verbinden.
              </motion.p>
            </motion.div>

            {/* Two-Column Layout with Mobile Scroll Effect */}
            <ProblemSolutionSection openAccordionIndex={openAccordionIndex} setOpenAccordionIndex={setOpenAccordionIndex} />
          </div>
        </section>

        {/* Impact Points Section with Modern Animations */}

        {/* Unsere Kompetenzbereiche - Light Section */}
        <section className="relative py-24 bg-white overflow-hidden">
          <div className="container-xl relative z-10">
            {/* Header */}
            <motion.div className="text-center mb-16" initial={{
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
              <span className="inline-block text-[#7C3AED] text-sm font-bold uppercase tracking-widest mb-4">
                UNSERE SERVICES
              </span>
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
            }} className="text-4xl md:text-5xl lg:text-6xl text-black mb-6 font-black">
                Drei Bereiche, eine Vision
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
            }} className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Ihre Marke erfolgreich in der digitalen Welt positionieren
              </motion.p>
            </motion.div>

            {/* Service Cards Grid */}
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto" initial="hidden" whileInView="visible" viewport={{
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
                delayChildren: 0.3
              }
            }
          }}>
              {services.map((service, index) => <motion.div key={index} variants={{
              hidden: {
                opacity: 0,
                y: 40
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              }
            }} whileHover={{
              y: -8
            }}>
                  <Card className="h-full group bg-white border-l-4 border-transparent hover:border-[#7C3AED] transition-all duration-300 hover:shadow-xl">
                    <CardContent className="p-8 flex flex-col h-full">
                      {/* Icon with circular background */}
                      <motion.div className="w-14 h-14 rounded-full bg-[#7C3AED]/10 flex items-center justify-center mb-6 group-hover:bg-[#7C3AED] transition-colors duration-300" whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.3
                    }
                  }}>
                        <service.icon className="w-7 h-7 text-[#7C3AED] group-hover:text-white transition-colors duration-300" />
                      </motion.div>

                      <div className="flex-1 flex flex-col">
                        {/* Title */}
                        <h3 className="text-2xl text-black mb-4 font-bold">
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed flex-grow">
                          {service.description}
                        </p>

                        {/* Button */}
                        <Link to={service.link} className="inline-block w-fit">
                          <Button variant="ghost" className="text-[#7C3AED] hover:text-[#6D28D9] p-0 h-auto font-semibold group/btn">
                            Mehr erfahren
                            <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>)}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact-section" className="relative py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
          <div className="container-xl relative z-10">
            <motion.div className="text-center max-w-4xl mx-auto" initial={{
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
            }} className="text-5xl md:text-6xl lg:text-7xl mb-8 leading-[1.1] text-black font-black">
                Bereit für die{" "}
                <span className="bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] bg-clip-text text-transparent">
                  Zukunft?
                </span>
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
            }} className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
                New Edge ist das Headquarter für Innovation. Hier entsteht die Zukunft von Marken, Agenturen und
                Prozessen.
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
                <Button size="lg" onClick={() => setIsContactSheetOpen(true)} className="group bg-white text-black hover:bg-gray-100 transition-all duration-300 text-lg px-8 py-6 rounded-full font-semibold">
                  Kontakt aufnehmen
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => {
                setContactFormType("agentur");
                setIsContactSheetOpen(true);
              }} className="border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 text-lg px-8 py-6 rounded-full font-semibold">
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
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <Footer />
        </Suspense>

        {/* Cookie Consent */}
        <CookieConsent />
      </div>
    </>;
};
export default Index;