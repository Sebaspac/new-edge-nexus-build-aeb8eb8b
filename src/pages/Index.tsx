import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { HeroSection } from "../components/HeroSection";
import { ServicesOverviewSection } from "../components/ServicesOverviewSection";
import { MethodologyGrid } from "../components/MethodologyGrid";
import { PositionedForImpactSection } from "../components/PositionedForImpactSection";
import { CaseStudiesGrid } from "../components/CaseStudiesGrid";
import { AgencyEdgeSection } from "../components/AgencyEdgeSection";
import { InnovationSection } from "../components/InnovationSection";
import { InteractiveCore } from "../components/InteractiveCore";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { BlogGrid } from "@/components/BlogGrid";
import { ScrollAnimation } from "../hooks/useScrollAnimation";
import { MobileNavigation } from "@/components/MobileNavigation";
import CookieConsent from "@/components/CookieConsent";
import LogoCloud from "@/components/ui/logo-cloud";
import { MagicText } from "@/components/ui/magic-text";
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
        <div className="bg-surface">
          <MethodologyGrid />
        </div>

        {/* Logo Cloud */}
        <div className="bg-surface">
          <LogoCloud />
        </div>

        {/* Positioned for Impact Section */}
        <div className="bg-surface">
          <PositionedForImpactSection />
        </div>

        {/* Case Studies Grid */}
        <div className="bg-surface">
          <CaseStudiesGrid />
        </div>

        {/* Agency Edge Section */}
        <div className="bg-surface">
          <AgencyEdgeSection />
        </div>

        {/* Innovation Section */}
        

        {/* Interactive Core - Digital Methodology Reactor */}
        <div className="bg-surface">
          <InteractiveCore />
        </div>

        {/* Unsere Kompetenzbereiche - Light Section */}
        <section className="relative py-24 overflow-hidden bg-surface">
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
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto" initial="hidden" whileInView="visible" viewport={{
            once: true,
            margin: "-100px"
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
              {services.map((service, index) => <motion.div key={index} variants={{
              hidden: {
                opacity: 0,
                y: 40
              },
              visible: {
                opacity: 1,
                y: 0
              }
            }} className="group">
                  <Card className="h-full bg-white border-border hover:border-primary/50 backdrop-blur-sm transition-all duration-500 hover:shadow-xl">
                    <CardContent className="p-4 md:p-8 flex flex-col h-full">
                      <motion.div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${index === 0 ? "from-primary to-primary/70" : index === 1 ? "from-secondary to-secondary/70" : "from-accent to-accent/70"} flex items-center justify-center mb-4 md:mb-6 shadow-lg`} whileHover={{
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: {
                      duration: 0.5
                    }
                  }}>
                        <service.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                      </motion.div>
                      <div className="flex-grow">
                        <h3 className="text-lg mb-3 md:mb-4 text-foreground font-semibold md:text-2xl">{service.title}</h3>
                        <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      <Link to={service.link}>
                        <Button variant="default" className="group/btn w-full md:w-auto bg-white border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                          Mehr erfahren
                          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>)}
            </motion.div>
          </div>
        </section>

        {/* Magic Text Section */}
        <section className="relative py-32 md:py-48 overflow-hidden bg-surface">
          <div className="container-xl relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <motion.span initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }} className="inline-block text-sm font-bold uppercase tracking-widest mb-8 text-primary">
                HIER ENTSTEHT MAGIE
              </motion.span>
              
              <MagicText text="Unsere kreativen Köpfe verschmelzen Expertise und Ideen zu beeindruckenden Ergebnissen." />
              
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.4,
              duration: 0.6
            }} className="mt-12">
                <Link to="/careers">
                  <Button className="bg-black hover:bg-primary text-white px-8 py-6 text-lg rounded-full transition-colors duration-300">
                    Hier suchen wir aktuell Verstärkung
                    <ArrowRight className="ml-2 w-5 h-5 -rotate-45" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <div className="bg-surface">
          <TestimonialsSection />
        </div>

        {/* Blog Section */}
        <div className="bg-surface">
          <BlogGrid />
        </div>

        {/* Contact Section */}
        <section id="contact-section" className="relative py-24 bg-surface overflow-hidden">
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
                <Button size="lg" onClick={() => setIsContactSheetOpen(true)} className="group bg-white text-black hover:bg-gray-100 transition-all duration-300 text-lg px-8 py-6 font-semibold">
                  Kontakt aufnehmen
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => {
                setContactFormType("agentur");
                setIsContactSheetOpen(true);
              }} className="border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 text-lg px-8 py-6 font-semibold">
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