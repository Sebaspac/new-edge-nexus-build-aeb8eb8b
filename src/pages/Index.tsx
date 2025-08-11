import { useEffect, useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Brain, Target, Eye, Rocket, Star, Lightbulb, Users, ChevronDown, ArrowDown, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { MobileNavigation } from "@/components/MobileNavigation";
import CookieConsent from "@/components/CookieConsent";
import { useLanguage } from "@/contexts/LanguageContext";
const Index = () => {
  const {
    t
  } = useLanguage();
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [activeSection, setActiveSection] = useState(0);
  const {
    scrollY
  } = useScroll();
  const containerRef = useRef<HTMLDivElement>(null);

  // 🎭 Parallax transforms
  const heroY = useTransform(scrollY, [0, 1000], [0, -200]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.9]);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
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
    
    // Convert FormData to JSON for the webhook - ensure ALL fields are captured
    const data = {
      name: formData.get('name')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      position: formData.get('position')?.toString() || '',
      company: formData.get('firma')?.toString() || '',
      phone: formData.get('telefon')?.toString() || '',
      message: formData.get('nachricht')?.toString() || ''
    };
    
    console.log('Complete data object to send to webhook:', data);
    console.log('Phone (telefon):', data.phone);
    console.log('Company (firma):', data.company);
    console.log('Message (nachricht):', data.message);
    
    try {
      console.log('Attempting to send to webhook...');
      const response = await fetch('https://n8n-pro-oh9w.onrender.com/webhook/kontakt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
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
    icon: Brain,
    title: "Media Intelligence",
    description: "KI-gestützte Inhaltsstrategien, die Ihre Zielgruppe erreichen und konvertieren.",
    gradient: "from-primary to-secondary"
  }, {
    icon: Sparkles,
    title: "Studio Design",
    description: "Visuelles Storytelling und Brand-Design, das im Gedächtnis bleibt.",
    gradient: "from-secondary to-accent"
  }, {
    icon: Zap,
    title: "Lab Automation",
    description: "Intelligente Systeme und Workflows für maximale Effizienz.",
    gradient: "from-accent to-primary"
  }];
  const stats = [{
    number: "150+",
    label: "Projekte realisiert",
    icon: Target
  }, {
    number: "98%",
    label: "Kundenzufriedenheit",
    icon: Star
  }, {
    number: "5x",
    label: "Durchschnittliche Effizienzsteigerung",
    icon: Rocket
  }, {
    number: "24/7",
    label: "Support verfügbar",
    icon: Users
  }];
  return <div ref={containerRef} className="min-h-screen bg-background overflow-x-hidden">
      {/* 📱 Mobile Navigation */}
      <MobileNavigation onContactClick={scrollToContact} theme="dark" />

      {/* 🚀 Hero Section */}
      <section className="hero-section relative">
        {/* 🌌 Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-surface-elevated">
          {/* ✨ Floating Orbs */}
          <motion.div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 180, 360]
        }} transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }} />
          <motion.div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.6, 0.3, 0.6],
          rotate: [360, 180, 0]
        }} transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }} />
          <motion.div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent/15 rounded-full blur-2xl" animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 0.8, 1]
        }} transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }} />

          {/* 🌊 Gradient Mesh */}
          <div className="absolute inset-0 bg-gradient-glow opacity-50" />
          
          {/* ⚡ Animated Grid */}
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" className="animate-parallax">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        {/* 🎯 Hero Content */}
        <motion.div style={{
        y: heroY,
        opacity: heroOpacity,
        scale: heroScale
      }} className="relative z-10 container-xl hero-section flex flex-col items-center justify-center text-center">
          <motion.div initial={{
          opacity: 0,
          y: 100
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 1,
          ease: "easeOut"
        }} className="max-w-6xl mx-auto">
            {/* 🏷️ Badge */}
            

            {/* 🎨 Main Headline */}
            <motion.h1 initial={{
            opacity: 0,
            y: 50
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4,
            duration: 0.8
          }} className="text-display-xl font-black mb-6">
              <span className="block bg-gradient-primary bg-clip-text text-transparent animate-gradient">
                BRAND
              </span>
              <span className="block text-foreground">
                INTELLIGENCE
              </span>
              <span className="block text-display-lg text-muted-foreground">
                FOR THE DIGITAL AGE
              </span>
            </motion.h1>

            {/* 📝 Description */}
            <motion.p initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.6,
            duration: 0.8
          }} className="text-body-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              {t('home.hero.description')} <br />
              <span className="text-primary font-medium">{t('home.hero.subtitle')}</span>
            </motion.p>

            {/* 🔥 CTA Buttons */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.8,
            duration: 0.6
          }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button onClick={scrollToContact} size="lg" className="group btn-primary hover-magnetic">
                Projekt starten
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="btn-secondary hover-glow" asChild>
                <Link to="/services">
                  Unsere Services entdecken
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* 🔽 Scroll Indicator */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1.2,
        duration: 0.6
      }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <motion.div animate={{
          y: [0, 10, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }} className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-body-sm">Scroll to explore</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* 🎯 Mission/Vision Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-xl">
          <motion.div initial={{
          opacity: 0,
          y: 60
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="text-center mb-16">
            <h2 className="text-h1 font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">In den Wandel mit New Edge</h2>
          </motion.div>

          <div className="grid-modern">
            {[{
            title: "UNSERE MISSION",
            description: "Mit Media, Studio und Lab verbinden wir Inhalte, Design und Systeme - für Marken, die funktionieren und wachsen.",
            icon: Target
          }, {
            title: "UNSERE VISION",
            description: "Wir gestalten eine neue Generation von Marken: automatisiert, strukturiert und sichtbar.",
            icon: Eye
          }, {
            title: "UNSER ZIEL",
            description: "Menschen und Unternehmen den Zugang zu Innovation bieten - für einfachere und effektivere Abläufe.",
            icon: Rocket
          }].map((item, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 60
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.2,
            duration: 0.6
          }} className="group">
                <Card className="card-modern h-full hover-lift">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-h3 font-semibold mb-4 text-primary">
                      {item.title}
                    </h3>
                    <p className="text-body text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* 🎯 Services Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-xl">
          <motion.div initial={{
          opacity: 0,
          y: 60
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="text-center mb-16">
            <h2 className="text-display font-bold mb-6">
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Unsere Services
              </span>
            </h2>
            <p className="text-body-xl text-muted-foreground max-w-2xl mx-auto">
              Drei Bereiche, eine Vision: Ihre Marke erfolgreich in der digitalen Welt positionieren.
            </p>
          </motion.div>

          <div className="grid-modern">
            {services.map((service, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 60
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.2,
            duration: 0.6
          }} className="group">
                <Card className="card-modern h-full hover-lift">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-h3 font-semibold mb-4 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-body text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* 🚀 Impact Points Section */}
      <section className="section-padding bg-surface">
        <div className="container-xl">
          <div className="grid md:grid-cols-2 gap-8">
            {[{
            number: "01",
            title: "Impact durch Automatisierung",
            description: "Intelligente Systeme steigern Ihre Effizienz nachhaltig"
          }, {
            number: "02",
            title: "Marketingexpertise trifft technische Umsetzung",
            description: "Perfekte Symbiose aus Strategie und Innovation"
          }, {
            number: "03",
            title: "Zugänglichkeit & Klarheit statt Komplexität",
            description: "Einfache Lösungen für komplexe Herausforderungen"
          }, {
            number: "04",
            title: "Individuelle Setups ohne Standardbausteine",
            description: "Maßgeschneiderte Lösungen für Ihre spezifischen Anforderungen"
          }].map((point, index) => <motion.div key={index} initial={{
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.15,
            duration: 0.6
          }} className="group hover-lift">
                <div className="flex items-start gap-6 p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm hover:bg-card transition-all duration-300">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-h3 group-hover:scale-110 transition-transform duration-300">
                    {point.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-h3 font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-body text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* 📊 Stats Section */}
      

      {/* 📧 Contact Section */}
      <section id="contact-section" className="section-padding bg-gradient-to-br from-surface via-background to-surface">
        <div className="container-narrow">
          <motion.div initial={{
          opacity: 0,
          y: 60
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="text-center mb-12">
            <h2 className="text-display font-bold mb-6">
              Bereit für den nächsten Schritt?
            </h2>
            <p className="text-body-xl text-muted-foreground">Ready when you are. Wir bringen’s online.</p>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2,
          duration: 0.8
        }}>
            <Card className="card-modern">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-body font-medium">Name *</Label>
                      <Input id="name" name="name" placeholder="Ihr Name" required className="bg-surface border-border" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-body font-medium">E-Mail *</Label>
                      <Input id="email" name="email" type="email" placeholder="ihre@email.com" required className="bg-surface border-border" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="position" className="text-body font-medium">Position *</Label>
                      <Input id="position" name="position" placeholder="Ihre Position" required className="bg-surface border-border" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-body font-medium">Firma *</Label>
                      <Input id="company" name="company" placeholder="Ihr Unternehmen" required className="bg-surface border-border" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-body font-medium">Telefon</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="Ihre Telefonnummer" className="bg-surface border-border" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-body font-medium">Nachricht</Label>
                      <Textarea id="message" name="message" placeholder="Erzählen Sie uns von Ihrem Projekt..." rows={6} className="bg-surface border-border resize-none" />
                    </div>
                  </div>
                  <Button type="submit" size="lg" className="w-full btn-primary hover-magnetic">
                    Nachricht senden
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* 🍪 Cookie Consent */}
      <CookieConsent />
    </div>;
};
export default Index;