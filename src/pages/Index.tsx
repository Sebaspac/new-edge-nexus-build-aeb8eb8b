import SEOHead from "@/components/SEOHead";
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
import { BlogGridHome } from "@/components/BlogGridHome";
import { ScrollAnimation } from "../hooks/useScrollAnimation";
import { MobileNavigation } from "@/components/MobileNavigation";
import CookieConsent from "@/components/CookieConsent";
import LogoCloud from "@/components/ui/logo-cloud";
import { MagicText } from "@/components/ui/magic-text";
import { TargetAudienceSection } from "@/components/TargetAudienceSection";
import { ProblemSolutionFraming } from "@/components/ProblemSolutionFraming";
import { EntryPointCTA } from "@/components/EntryPointCTA";
import { lazy, Suspense, useCallback, useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import newEdgeLogo from "@/assets/new-edge-logo.webp";
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
const Footer = lazy(() => import("@/components/Footer").then((module) => ({
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
  const [showInitialLoading, setShowInitialLoading] = useState(() => {
    // Only show loading on first visit in this session
    if (typeof window !== "undefined") {
      return !sessionStorage.getItem("hasVisited");
    }
    return false;
  });

  // Initial loading - only on first visit
  useEffect(() => {
    if (showInitialLoading) {
      const timer = setTimeout(() => {
        setShowInitialLoading(false);
        sessionStorage.setItem("hasVisited", "true");
      }, 2000); // Show logo for 2 seconds
      return () => clearTimeout(timer);
    }
  }, [showInitialLoading]);

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

  // Contact form submission with validation
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const { validateContactForm, submitContactForm } = await import("@/utils/contactFormValidation");

    const rawData = {
      name: formData.get('name')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      phone: formData.get('phone')?.toString() || formData.get('telefon')?.toString() || '',
      company: formData.get('company')?.toString() || formData.get('firma')?.toString() || '',
      position: formData.get('position')?.toString() || '',
      message: formData.get('message')?.toString() || formData.get('nachricht')?.toString() || '',
    };
    const validation = validateContactForm(rawData);
    if (!validation.success) {
      const firstError = validation.fieldErrors ? Object.values(validation.fieldErrors)[0] : "Validierungsfehler";
      toast({
        title: "Validierungsfehler",
        description: firstError,
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
    } else {
      toast({
        title: "Fehler",
        description: result.error || "Es gab ein Problem beim Senden deiner Nachricht. Bitte versuche es erneut.",
        variant: "destructive",
        duration: 5000
      });
    }
  }, []);
  const services = [{
    icon: Lightbulb,
    title: "New Edge Studio",
    description: "Risk Reduction & Enablement: Klarheit, Entscheidungsfähigkeit und Systemlogik – bevor Unternehmen Systeme bauen.",
    gradient: "from-primary to-primary/70",
    link: "/studio"
  }, {
    icon: Zap,
    title: "New Edge Lab",
    description: "AI Systems & Ownership: Firmeneigene Systeme, die Unternehmen selbst kontrollieren.",
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
      {/* Initial Loading Screen - only first visit */}
      <AnimatePresence mode="wait">
        {showInitialLoading && <motion.div className="fixed inset-0 z-[100] bg-black flex items-center justify-center" initial={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} transition={{
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }}>
            <motion.img src={newEdgeLogo} alt="New Edge" className="w-24 h-24 md:w-32 md:h-32" initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: [1, 1.15, 1, 1.1, 1]
        }} transition={{
          opacity: {
            duration: 0.3
          },
          scale: {
            duration: 0.8,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1],
            times: [0, 0.2, 0.4, 0.6, 1]
          }
        }} />
          </motion.div>}
      </AnimatePresence>

      <SEOHead
        title="KI-Agentur München | Prozessautomatisierung & Markenaufbau für KMU | New Edge"
        description="New Edge ist eure KI-Agentur in München. Wir verbinden Markenaufbau, Prozessautomatisierung und KI-Systeme – für KMU, die konsequent wachsen wollen."
        canonical="/"
      />

      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Mobile Navigation */}
        <MobileNavigation onContactClick={() => setIsContactSheetOpen(true)} theme="dark" />

        {/* Hero Section */}
        <HeroSection onContactClick={() => setIsContactSheetOpen(true)} />

        {/* Methodology Grid Section */}
        <div className="bg-surface">
          <MethodologyGrid />
        </div>

        {/* Target Audience Section */}
        <TargetAudienceSection />

        {/* Problem → Solution Framing */}
        <ProblemSolutionFraming />

        {/* Positioned for Impact Section */}
        <div className="bg-surface">
          <PositionedForImpactSection />
        </div>

        {/* Logo Cloud */}
        <LogoCloud />

        {/* Case Studies Grid - Social Proof early */}
        <div className="bg-surface">
          <CaseStudiesGrid />
        </div>

        {/* Testimonials Section */}
        <div className="bg-surface">
          <TestimonialsSection />
        </div>

        {/* Interactive Core */}
        <div className="bg-surface">
          <InteractiveCore />
        </div>

        {/* Blog Section */}
        <div className="bg-surface">
          <BlogGridHome />
        </div>

        {/* Entry Point CTA */}
        <EntryPointCTA onContactClick={() => setIsContactSheetOpen(true)} />

        {/* Contact Section */}
        <section id="contact-section" className="relative section-py-md overflow-hidden bg-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
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
            }} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-8 leading-[1.05] text-foreground font-black">
Bereit für die digitale Revolution?
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
            }} className="text-base md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-12 leading-relaxed px-4">
                New Edge unterstützt Unternehmen dabei, KI und Automatisierung kontrolliert & nachhaltig im eigenen Besitz umzusetzen. 
              

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
            }} className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
                <Button size="lg" onClick={() => setIsContactSheetOpen(true)} className="group bg-transparent backdrop-blur-md text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-300 text-base md:text-lg px-6 md:px-8 py-4 md:py-6 font-semibold w-full sm:w-auto hover:-translate-y-0.5 rounded-none">
                  Kontakt aufnehmen
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
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
              }].map((field) => <div key={field.id} className="space-y-2">
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