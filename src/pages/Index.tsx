import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { HeroSection } from "../components/HeroSection";
import { MethodologyGrid } from "../components/MethodologyGrid";
import { PositionedForImpactSection } from "../components/PositionedForImpactSection";
import { StudioStrategySection } from "../components/StudioStrategySection";
import { HorizontalScrollSection } from "../components/HorizontalScrollSection";
import { TickerScrollSection } from "../components/TickerScrollSection";
import { UseCasesGridSection } from "../components/UseCasesGridSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { ThreeStepsCTA } from "@/components/ThreeStepsCTA";
import { AuroraFlow } from "@/components/ui/aurora-flow";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { useLenis } from "@/hooks/useLenis";

import { ScrollAnimation } from "../hooks/useScrollAnimation";
import { MobileNavigation } from "@/components/MobileNavigation";
import CookieConsent from "@/components/CookieConsent";
import LogoCloud from "@/components/ui/logo-cloud";
import { MagicText } from "@/components/ui/magic-text";
import { lazy, Suspense, useCallback, useState, useEffect } from "react";
import { AnimatePresence, useScroll, useTransform } from "framer-motion";
import newEdgeLogo from "@/assets/new-edge-logo.webp";
import { useLanguage } from "@/contexts/LanguageContext";
import { SweepButton } from "@/components/ui/SweepButton";
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
  const { t } = useLanguage();
  useLenis();

  const { scrollY } = useScroll();
  const blob1Y = useTransform(scrollY, [0, 5000], [0, -200]);
  const blob2Y = useTransform(scrollY, [0, 5000], [0, 300]);
  const blob3Y = useTransform(scrollY, [0, 8000], [0, -350]);
  const blob4Y = useTransform(scrollY, [0, 8000], [0, 250]);
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

      <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
        {/* Global immersive grain — subtle */}
        <NoiseOverlay opacity={0.035} fixed zIndex={2} />

        {/* Mobile Navigation */}
        <MobileNavigation onContactClick={() => setIsContactSheetOpen(true)} theme="dark" />

        {/* Hero + LogoCloud — unified dark aurora section */}
        <div className="relative" style={{ background: "#0A0412" }}>
          {/* Aurora — covers this entire dark block */}
          <div aria-hidden style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
            <AuroraFlow />
          </div>
          <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column" }}>
            <HeroSection onContactClick={() => setIsContactSheetOpen(true)} />
            <LogoCloud />
          </div>
        </div>

        {/* All post-hero sections — unified light background */}
        <div
          style={{
            position: "relative",
            background: [
              "radial-gradient(ellipse 100% 60% at 8% 8%, rgba(91,33,182,0.08) 0%, transparent 55%)",
              "radial-gradient(ellipse 80% 55% at 92% 92%, rgba(124,58,237,0.06) 0%, transparent 50%)",
              "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(91,33,182,0.03) 0%, transparent 60%)",
              "#F8F5FF",
            ].join(", "),
          }}
        >
          {/* Parallax depth orbs */}
          <div aria-hidden style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
            <motion.div style={{ y: blob1Y, position: "absolute", top: "8%", left: "-5%", width: "420px", height: "420px", borderRadius: "50%", background: "radial-gradient(circle, rgba(91,33,182,0.07) 0%, transparent 70%)" }} />
            <motion.div style={{ y: blob2Y, position: "absolute", top: "22%", right: "-8%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)" }} />
            <motion.div style={{ y: blob3Y, position: "absolute", top: "55%", left: "10%", width: "360px", height: "360px", borderRadius: "50%", background: "radial-gradient(circle, rgba(91,33,182,0.06) 0%, transparent 70%)" }} />
            <motion.div style={{ y: blob4Y, position: "absolute", top: "72%", right: "5%", width: "440px", height: "440px", borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.04) 0%, transparent 70%)" }} />
          </div>

          <div style={{ position: "relative", zIndex: 1 }}>
            <div data-ticker-pin-group>
              <MethodologyGrid />
              <TickerScrollSection />
            </div>

            {/* Positioned for Impact — photo + stats + logo proof as one section */}
            <PositionedForImpactSection />

            <HorizontalScrollSection />
            <StudioStrategySection />
            <UseCasesGridSection />
            <TestimonialsSection />
            <ThreeStepsCTA />
          </div>

        </div>

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

              <SweepButton
                type="submit"
                sweepColor="dark"
                hoverTextColor="#ffffff"
                style={{
                  width: "100%",
                  background: "#5B21B6",
                  color: "#ffffff",
                  fontFamily: "Consolas, ui-monospace, SFMono-Regular, Menlo, monospace",
                  fontSize: "12px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  padding: "16px 28px",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                Nachricht senden
                <ArrowRight style={{ width: "16px", height: "16px" }} />
              </SweepButton>
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