import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { HeroSection } from "../components/HeroSection";
import { PositionedForImpactSection } from "../components/PositionedForImpactSection";
import { HorizontalScrollSection } from "../components/HorizontalScrollSection";
import { TickerScrollSection } from "../components/TickerScrollSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { ThreeStepsCTA } from "@/components/ThreeStepsCTA";
import { ImpactCounterBand } from "@/components/ImpactCounterBand";
import { ProblemJourney } from "@/components/ProblemJourney";
import { CortexSection } from "@/components/CortexSection";
import { EmbeddedAI } from "@/components/EmbeddedAI";
import { DerSchnitt } from "@/components/DerSchnitt";
import { AuroraFlow } from "@/components/ui/aurora-flow";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { useLenis } from "@/hooks/useLenis";

import { ScrollAnimation } from "../hooks/useScrollAnimation";
import { MobileNavigation } from "@/components/MobileNavigation";
import CookieConsent from "@/components/CookieConsent";
import LogoCloud from "@/components/ui/logo-cloud";
import { MagicText } from "@/components/ui/magic-text";
import { lazy, Suspense, useCallback, useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
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
import { home as HOME_STATIC, img } from "@/content";
import { useHomeContent } from "@/hooks/useHomeContent";

// Lazy load Footer
const Footer = lazy(() => import("@/components/Footer").then((module) => ({
  default: module.Footer
})));
import { ArrowRight } from "lucide-react";
const Index = () => {
  const sessionStorageSafe = safeSessionStorage();
  const { t } = useLanguage();
  useLenis();

  // Inhalte live aus dem CMS (Strapi „Home"); Fallback: statischer Content-Layer
  const cms = useHomeContent();
  const home = {
    seo: cms.seo ?? HOME_STATIC.seo,
    loadingAlt: cms.loadingAlt ?? HOME_STATIC.loadingAlt,
    contact: cms.contact ?? HOME_STATIC.contact,
    toast: cms.toast ?? HOME_STATIC.toast,
  };

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
      const firstError = validation.fieldErrors ? Object.values(validation.fieldErrors)[0] : home.toast.validationFallback;
      toast({
        title: home.toast.validationTitle,
        description: firstError,
        variant: "destructive",
        duration: 5000
      });
      return;
    }
    const result = await submitContactForm(validation.data!);
    if (result.success) {
      toast({
        title: home.toast.successTitle,
        description: home.toast.successBody,
        duration: 5000
      });
      form.reset();
    } else {
      toast({
        title: home.toast.errorTitle,
        description: result.error || home.toast.errorFallback,
        variant: "destructive",
        duration: 5000
      });
    }
  }, [home.toast]);
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
            <motion.img src={img("new-edge-logo")} alt={home.loadingAlt} className="w-24 h-24 md:w-32 md:h-32" initial={{
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
        title={home.seo.title}
        description={home.seo.description}
        canonical={home.seo.canonical}
      />

      <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
        {/* Global immersive grain — subtle */}
        <NoiseOverlay opacity={0.035} fixed zIndex={2} />

        {/* Mobile Navigation */}
        <MobileNavigation onContactClick={() => setIsContactSheetOpen(true)} theme="dark" />

        {/* Hero + LogoCloud — unified dark aurora section */}
        <div className="relative" style={{ background: "#0A0A18" }}>
          {/* Aurora — covers this entire dark block */}
          <div aria-hidden style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
            <AuroraFlow />
          </div>
          <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column" }}>
            <HeroSection onContactClick={() => setIsContactSheetOpen(true)} />
            <LogoCloud />
          </div>
        </div>

        {/* All post-hero sections — ein durchgehendes „Magazin": Papier + Spaltenraster */}
        <div
          style={{
            position: "relative",
            background: "#F8F5FF", // helllila — Magazin-Grundton, einheitlich mit ganzer Website
          }}
        >
          {/* ── Editorial-Hintergrund: 12-Spalten-Raster + dezenter Marken-Schimmer (statisch) ── */}
          <div aria-hidden style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
            {/* Sehr feiner Marken-Schimmer in den Ecken — gibt Tiefe ohne Bewegung */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: [
                  "radial-gradient(ellipse 60% 38% at 100% 0%, rgba(86,88,223,0.05) 0%, transparent 55%)",
                  "radial-gradient(ellipse 55% 42% at 0% 100%, rgba(132,118,239,0.04) 0%, transparent 55%)",
                ].join(", "),
              }}
            />
            {/* Spaltenspiegel: 12 feine vertikale Linien, an der Inhaltsbreite ausgerichtet */}
            <div className="h-full w-full flex justify-center">
              <div className="w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 h-full">
                <div
                  style={{
                    height: "100%",
                    backgroundImage:
                      "linear-gradient(to right, rgba(23,23,46,0.07) 0 1px, transparent 1px)",
                    backgroundSize: "calc(100% / 12) 100%",
                    borderRight: "1px solid rgba(23,23,46,0.07)",
                  }}
                />
              </div>
            </div>
          </div>

          <div style={{ position: "relative", zIndex: 1 }}>
            {/* 02 — KPI Bar: NEWEDGE in Zahlen */}
            <ImpactCounterBand />

            {/* 03 — Die Lösung + Reise zur KI-Abteilung, mit Scroll-Ticker */}
            <div data-ticker-pin-group>
              <ProblemJourney />
              <TickerScrollSection />
            </div>

            {/* 04 — Cortex: das Betriebssystem der KI-Abteilung */}
            <CortexSection />

            {/* 05 — Positioned for Impact: Wie wir arbeiten */}
            <PositionedForImpactSection />

            {/* 06 — Unser Prozess: So entsteht eine KI-Abteilung */}
            <HorizontalScrollSection />

            {/* 07 — Der Schnitt */}
            <DerSchnitt />

            {/* 08 — Embedded AI: ein externer Head of AI */}
            <EmbeddedAI />

            {/* Social Proof */}
            <TestimonialsSection />

            {/* 10 — CTA */}
            <ThreeStepsCTA />
          </div>

        </div>

        {/* Contact Form Sheet */}
        <Sheet open={isContactSheetOpen} onOpenChange={handleSheetClose}>
          <SheetContent side="right" className="w-full sm:max-w-xl overflow-y-auto backdrop-blur-sm">
            <SheetHeader className="mb-6">
              <SheetTitle className="text-2xl font-bold">
                {contactFormType === "kmu" ? home.contact.titles.kmu : contactFormType === "agentur" ? home.contact.titles.agentur : home.contact.titles.default}
              </SheetTitle>
              <SheetDescription>
                {home.contact.description}
              </SheetDescription>
            </SheetHeader>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-5">
                {home.contact.fields.map((field) => <div key={field.id} className="space-y-2">
                    <Label htmlFor={field.id} className="text-foreground font-medium">
                      {field.label}
                    </Label>
                    <Input id={field.id} name={field.id} type={field.type} placeholder={field.placeholder} required={field.required} className="bg-background/50 border-border focus:border-primary transition-colors" />
                  </div>)}

                <div className="space-y-2">
                  <Label htmlFor="nachricht" className="text-foreground font-medium">
                    {home.contact.message.label}
                  </Label>
                  <Textarea id="nachricht" name="nachricht" placeholder={home.contact.message.placeholder} defaultValue={contactFormType === "kmu" ? home.contact.message.defaultKmu : contactFormType === "agentur" ? home.contact.message.defaultAgentur : ""} required className="min-h-[120px] bg-background/50 border-border focus:border-primary transition-colors resize-none" />
                </div>
              </div>

              <SweepButton
                type="submit"
                sweepColor="violet"
                hoverTextColor="#ffffff"
                style={{
                  width: "100%",
                  background: "#5658DF",
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
                {home.contact.submit}
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