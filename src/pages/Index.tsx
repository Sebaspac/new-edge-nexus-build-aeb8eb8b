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
import { toast } from "@/hooks/use-toast";
import { useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Zap, Brain, Target, Rocket, Star, Users, Code, Palette, Globe, Briefcase } from "lucide-react";
const Index = () => {
  const {
    t
  } = useLanguage();
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

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
  return <FastLoadWrapper>
      <Helmet>
        <title>New Edge - Innovation trifft Strategie</title>
        <meta name="description" content="New Edge verbindet modernste Technologie mit strategischer Beratung. Wir entwickeln maßgeschneiderte digitale Lösungen und begleiten Unternehmen auf dem Weg in die Zukunft." />
        <meta name="keywords" content="Digitale Transformation, Innovation, Technologie, Beratung, Software, KI, Automatisierung" />
        <meta property="og:title" content="New Edge - Innovation trifft Strategie" />
        <meta property="og:description" content="Modernste Technologie mit strategischer Beratung für die digitale Zukunft Ihres Unternehmens." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://new-edge.com" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Mobile Navigation */}
        <MobileNavigation onContactClick={scrollToContact} theme="dark" />

        {/* Hero Section */}
        <HeroSection onContactClick={scrollToContact} />

        {/* Innovation Section */}
        <InnovationSection />

        {/* Impact Points Section with Overlap Effect */}
        <ScrollAnimation animation="fadeRight" className="relative -mt-16 pt-24 pb-20 bg-gradient-to-l from-surface to-background overflow-hidden">
          {/* Modern floating elements */}
          <motion.div className="absolute top-40 right-10 w-24 h-24 bg-accent/10 rounded-full blur-xl" animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.3, 1]
        }} transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }} />
          <motion.div className="absolute bottom-20 left-20 w-36 h-36 bg-primary/5 rounded-full blur-2xl" animate={{
          rotate: [0, 360],
          scale: [1, 0.8, 1]
        }} transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }} />
          <div className="container-xl">
            {/* Section Title */}
            <motion.div className="text-center mb-16" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <h2 className="text-h1 font-bold mb-6 text-foreground">Unsere innovative Herangehensweise</h2>
            </motion.div>
            <motion.div className="grid md:grid-cols-2 gap-8 items-stretch" initial="hidden" whileInView="visible" viewport={{
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
                delayChildren: 0.2
              }
            }
          }}>
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
            }].map((point, index) => <motion.div key={index} variants={{
              hidden: {
                opacity: 0,
                x: index % 2 === 0 ? -60 : 60,
                scale: 0.9
              },
              visible: {
                opacity: 1,
                x: 0,
                scale: 1,
                transition: {
                  duration: 0.7,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100
                }
              }
            }} whileHover={{
              scale: 1.02,
              y: -5,
              transition: {
                duration: 0.2
              }
            }} className="group hover-lift h-full">
                  <div className="flex items-start gap-6 p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm hover:bg-card transition-all duration-300 h-full">
                    <motion.div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-h3 group-hover:scale-110 transition-transform duration-300" whileHover={{
                  rotate: 180
                }} transition={{
                  duration: 0.4
                }}>
                      {point.number}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-h3 mb-3 text-foreground group-hover:text-primary transition-colors text-base font-semibold">
                        {point.title}
                      </h3>
                      <p className="text-body text-muted-foreground leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </motion.div>)}
            </motion.div>
          </div>
        </ScrollAnimation>

        {/* Services Section with Overlap Effect */}
        <ScrollAnimation animation="fadeLeft" className="relative -mt-20 pt-32 pb-20 bg-gradient-to-r from-background to-surface overflow-hidden">
          <div className="container-xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              className="text-center mb-16"
            >
              <h2 className="text-display font-bold mb-6 text-foreground">
                Know-how trifft Prozess
              </h2>
              <p className="text-body-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Unser Team bringt sein Fachwissen gezielt in jede Phase ein – 
                von der Strategie bis zur Technologie-Umsetzung.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { phase: "Studio", title: "Strategie & Beratung", description: "Unsere Strategy Leads und Coaches entwickeln maßgeschneiderte Markenstrategien.", team: "Strategy Leads, Brand Coaches" },
                { phase: "Media", title: "Content & Kreation", description: "Unsere Content-Teams kreieren Inhalte – kreativ, datenbasiert und KI-gestützt.", team: "Creative Directors, Content Specialists" },
                { phase: "Lab", title: "Technologie & Innovation", description: "Unsere Entwickler und Tech-Experten bringen Ihre Visionen zum Leben.", team: "Lead Developers, Tech Innovators" }
              ].map((item, index) => (
                <motion.div 
                  key={item.phase} 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.6, delay: index * 0.1 }} 
                  className="group hover-lift"
                >
                  <Card className="card-modern h-full bg-card/80 backdrop-blur-sm border-border/50 hover:bg-card transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <h3 className="text-h3 font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-body text-muted-foreground mb-6 leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        {/* Network Stats Section */}
        <section className="section-padding bg-gradient-subtle">
          <div className="container-xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              className="text-center mb-16"
            >
              <h2 className="text-display font-bold mb-6 bg-gradient-accent bg-clip-text text-slate-50">
                Unser Netzwerk
              </h2>
              <p className="text-body-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Ein starkes Team aus Experten, Coaches und Partnern – 
                für jede Herausforderung die richtige Expertise.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Users, label: "Coaches", value: "10+", color: "text-blue-600" },
                { icon: Code, label: "Entwickler", value: "2", color: "text-purple-600" },
                { icon: Palette, label: "Creative Agencies", value: "3", color: "text-pink-600" },
                { icon: Globe, label: "Länder", value: "4", color: "text-green-600" },
                { icon: Briefcase, label: "Freelancer", value: "15+", color: "text-orange-600" }
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label} 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  whileInView={{ opacity: 1, scale: 1 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.4, delay: index * 0.05 }} 
                  className="group hover-lift"
                >
                  <Card className="card-modern text-center h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-primary p-3 group-hover:scale-110 transition-transform duration-300">
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-h2 font-semibold text-foreground mb-1">{stat.value}</div>
                      <div className="text-body-sm text-muted-foreground font-medium">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="section-padding bg-surface">
          <div className="container-xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              className="text-center mb-16"
            >
              <h2 className="text-display font-bold mb-6">
                <span className="bg-gradient-primary bg-clip-text text-slate-50">Die Gründer</span>
              </h2>
              <p className="text-body-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Expertise aus Strategie und Technologie – vereint für Ihren Erfolg.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {[
                { name: "Sebastian Pachón", role: "Founder & Creative-Tech Partner", image: "/assets/c19dc1d8-e93c-4d25-a965-34dbef5d9fe1.png", expertise: ["Strategie", "Technologie"] },
                { name: "Wenjamin Zabezhanskiy", role: "Operations & Innovation Partner", image: "/assets/06cbcdbb-3730-466c-b8c1-cf54d42fc7c1.png", expertise: ["Kreation", "Support"] }
              ].map((founder, index) => (
                <motion.div 
                  key={founder.name} 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.6, delay: index * 0.1 }} 
                  className="group hover-lift"
                >
                  <Card className="card-modern h-full">
                    <div className="p-6 sm:p-8 flex flex-col h-full">
                      <div className="flex-shrink-0 mb-6">
                        <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden border-4 border-border/20 shadow-lg group-hover:border-primary/30 transition-colors duration-300">
                          <img 
                            src={founder.image} 
                            alt={`${founder.name} - ${founder.role}`} 
                            className="w-full h-full object-cover" 
                            width={128}
                            height={128}
                            loading="lazy"
                          />
                        </div>
                      </div>
                      
                      <div className="text-center flex-grow flex flex-col justify-between">
                        <div>
                          <h3 className="text-h3 font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                            {founder.name}
                          </h3>
                          <p className="text-primary font-medium mb-6">{founder.role}</p>
                        </div>
                        
                        <div className="flex justify-center gap-2 sm:gap-3 flex-wrap">
                          {founder.expertise.map((skill, skillIndex) => (
                            <span key={skillIndex} className="px-3 py-2 sm:px-4 bg-white/10 backdrop-blur-sm text-foreground rounded-xl text-sm font-medium border border-white/20 shadow-lg hover:bg-white/20 hover:scale-105 transition-all duration-200 hover:shadow-xl">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact-section" className="section-padding bg-gradient-to-br from-surface via-background to-surface">
          <div className="container-narrow">
            <div className="text-center mb-12">
              <h2 className="text-h1 font-bold mb-6 text-foreground">
                Bereit für den nächsten Schritt?
              </h2>
              <p className="text-body-xl text-muted-foreground">
                Ready when you are. Wir bringen's online.
              </p>
            </div>

            <Card className="card-modern max-w-2xl mx-auto">
              <CardContent className="p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-5">
                    {[
                      { id: "name", label: "Name *", type: "text", placeholder: "Ihr Name", required: true },
                      { id: "email", label: "E-Mail *", type: "email", placeholder: "ihre@email.com", required: true },
                      { id: "position", label: "Position *", type: "text", placeholder: "Ihre Position", required: true },
                      { id: "firma", label: "Firma *", type: "text", placeholder: "Ihr Unternehmen", required: true },
                      { id: "telefon", label: "Telefon", type: "tel", placeholder: "Ihre Telefonnummer", required: false }
                    ].map(field => (
                      <div key={field.id} className="space-y-2">
                        <Label htmlFor={field.id} className="text-foreground font-medium text-sm">
                          {field.label}
                        </Label>
                        <Input 
                          id={field.id} 
                          name={field.id} 
                          type={field.type} 
                          placeholder={field.placeholder} 
                          required={field.required} 
                          className="bg-background border-border focus:border-primary transition-colors h-11"
                        />
                      </div>
                    ))}
                    
                    <div className="space-y-2">
                      <Label htmlFor="nachricht" className="text-foreground font-medium text-sm">
                        Nachricht *
                      </Label>
                      <Textarea 
                        id="nachricht" 
                        name="nachricht" 
                        placeholder="Erzählen Sie uns von Ihrem Projekt..." 
                        required 
                        className="min-h-[120px] bg-background border-border focus:border-primary transition-colors resize-none"
                      />
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full btn-primary">
                    Nachricht senden
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-surface-elevated/80 border-t border-border py-12 sm:py-16">
          <div className="container-xl">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="sm:col-span-2">
                 <div className="flex items-center mb-4">
                    <img 
                      src="/assets/90e4fdca-8c29-48f7-9568-686b611a62f4.png"
                      alt="New Edge Logo" 
                      className="h-6 w-6 sm:h-8 sm:w-8 mr-2 sm:mr-3" 
                      width={32}
                      height={32}
                    />
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