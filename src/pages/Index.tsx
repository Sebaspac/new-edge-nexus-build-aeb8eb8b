import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { HeroSection } from "../components/HeroSection";
import { MethodologyGrid } from "../components/MethodologyGrid";
import { PositionedForImpactSection } from "../components/PositionedForImpactSection";
import { StudioStrategySection } from "../components/StudioStrategySection";
import { FeaturedCaseAlbaNova } from "../components/FeaturedCaseAlbaNova";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { ThreeStepsCTA } from "@/components/ThreeStepsCTA";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { useLenis } from "@/hooks/useLenis";

import { ScrollAnimation } from "../hooks/useScrollAnimation";
import { MobileNavigation } from "@/components/MobileNavigation";
import CookieConsent from "@/components/CookieConsent";
import LogoCloud from "@/components/ui/logo-cloud";
import { MagicText } from "@/components/ui/magic-text";
import { PartnerBanner } from "@/components/PartnerBanner";
import { lazy, Suspense, useCallback, useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import newEdgeLogo from "@/assets/new-edge-logo.webp";
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
import { safeGetItem, safeSessionStorage, safeSetItem } from "@/utils/safeStorage";

// Lazy load Footer
const Footer = lazy(() => import("@/components/Footer").then((module) => ({
  default: module.Footer
})));
import { ArrowRight, Lightbulb, Zap, Palette, Target, Rocket, Star, Users, Code, Globe, Briefcase, Phone, MessageSquare, Eye } from "lucide-react";
const Index = () => {
  const sessionStorageSafe = safeSessionStorage();
  const {
    t
  } = useLanguage();
  const [isContactSheetOpen, setIsContactSheetOpen] = useState(false);
  const [contactFormType, setContactFormType] = useState<"kmu" | "agentur" | null>(null);
  const [openAccordionIndex, setOpenAccordionIndex] = useState(0);
  const [showInitialLoading, setShowInitialLoading] = useState(() => {
    // Only show loading on first visit in this session
    if (typeof window !== "undefined") {
      return !safeGetItem(sessionStorageSafe, "hasVisited");
    }
    return false;
  });

  // Initial loading - only on first visit
  useEffect(() => {
    if (showInitialLoading) {
      const timer = setTimeout(() => {
        setShowInitialLoading(false);
        safeSetItem(sessionStorageSafe, "hasVisited", "true");
      }, 2000); // Show logo for 2 seconds
      return () => clearTimeout(timer);
    }
  }, [sessionStorageSafe, showInitialLoading]);

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

        {/* Hero + LogoCloud as one unified dark section */}
        <div className="relative" style={{ background: "linear-gradient(135deg, #1a0533 0%, #0a0a0a 50%, #0d0a1a 100%)" }}>
          {/* Geometric shapes spanning hero + logo cloud */}
          <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: -150, rotate: 12 }}
              animate={{ opacity: 1, y: 0, rotate: 12 }}
              transition={{ duration: 2.4, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className="absolute top-[-8%] left-[-5%]"
              style={{ width: 600, height: 140 }}
            >
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full rounded-full border border-white/[0.15] bg-gradient-to-r from-white/[0.08] via-transparent to-transparent shadow-[0_8px_32px_0_rgba(139,92,246,0.25)] backdrop-blur-[2px]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -100, rotate: -15 }}
              animate={{ opacity: 1, y: 0, rotate: -15 }}
              transition={{ duration: 2.4, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              className="absolute top-[8%] right-[-10%]"
              style={{ width: 500, height: 120 }}
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full rounded-full border border-white/[0.12] bg-gradient-to-r from-violet-500/[0.10] via-transparent to-transparent shadow-[0_8px_32px_0_rgba(124,58,237,0.20)] backdrop-blur-[2px]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100, rotate: -8 }}
              animate={{ opacity: 1, x: 0, rotate: -8 }}
              transition={{ duration: 2.4, delay: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
              className="absolute top-[30%] left-[5%]"
              style={{ width: 550, height: 130 }}
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full rounded-full border border-white/[0.10] bg-gradient-to-r from-white/[0.06] via-transparent to-transparent shadow-[0_8px_32px_0_rgba(168,85,247,0.15)] backdrop-blur-[2px]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100, rotate: 20 }}
              animate={{ opacity: 1, y: 0, rotate: 20 }}
              transition={{ duration: 2.4, delay: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
              className="absolute bottom-[-5%] right-[0%]"
              style={{ width: 480, height: 110 }}
            >
              <motion.div
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full rounded-full border border-white/[0.10] bg-gradient-to-r from-purple-400/[0.08] via-transparent to-transparent shadow-[0_8px_32px_0_rgba(139,92,246,0.18)] backdrop-blur-[2px]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: 35 }}
              animate={{ opacity: 1, scale: 1, rotate: 35 }}
              transition={{ duration: 2.4, delay: 1.1, ease: [0.25, 0.4, 0.25, 1] }}
              className="absolute bottom-[10%] left-[15%]"
              style={{ width: 380, height: 90 }}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full rounded-full border border-white/[0.08] bg-gradient-to-r from-violet-400/[0.06] via-transparent to-transparent shadow-[0_4px_16px_0_rgba(139,92,246,0.12)]"
              />
            </motion.div>
          </div>

          <HeroSection onContactClick={() => setIsContactSheetOpen(true)} />
          <LogoCloud />
        </div>

        {/* Methodology Grid Section */}
        <div className="bg-surface">
          <MethodologyGrid />
        </div>

        {/* Positioned for Impact Section */}
        <div className="bg-surface">
          <PositionedForImpactSection />
        </div>

        {/* Studio Strategy Bento */}
        <StudioStrategySection />

        {/* Problem → Solution Framing */}
        <ProblemSolutionFraming />

        {/* Case Studies Grid */}
        <div className="bg-surface">
          <CaseStudiesGrid />
        </div>

        {/* Entry Point CTA */}
        <EntryPointCTA onContactClick={() => setIsContactSheetOpen(true)} />

        {/* Partner Banner */}
        <PartnerBanner />

        {/* Interactive Core */}
        <div className="bg-surface">
          <InteractiveCore />
        </div>

        {/* Testimonials Section */}
        <div className="bg-surface">
          <TestimonialsSection />
        </div>

        {/* Contact Section */}
        {/* Three Steps CTA */}
        <ThreeStepsCTA />

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