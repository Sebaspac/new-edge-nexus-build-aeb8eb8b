import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { HeroSection } from '../components/HeroSection';
import { InnovationSection } from '../components/InnovationSection';
import { ScrollAnimation } from '../hooks/useScrollAnimation';
import { FastLoadWrapper } from '../components/FastLoadWrapper';
import { MobileNavigation } from '@/components/MobileNavigation';
import CookieConsent from '@/components/CookieConsent';
import { Footer } from '@/components/Footer';
import { ProblemSolutionSection } from '@/components/ProblemSolutionSection';
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
import { ArrowRight, Lightbulb, Zap, Palette, Target, Rocket, Star, Users, Code, Globe, Briefcase, Phone, MessageSquare, Eye } from "lucide-react";
const Index = () => {
  const {
    t
  } = useLanguage();
  const [isContactSheetOpen, setIsContactSheetOpen] = useState(false);
  const [openAccordionIndex, setOpenAccordionIndex] = useState(0);

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
    icon: Lightbulb,
    title: "Studio Design",
    description: "Visuelles Storytelling und Brand-Design, das im Gedächtnis bleibt.",
    gradient: "from-primary to-primary/70"
  }, {
    icon: Palette,
    title: "Media Intelligence",
    description: "KI-gestützte Inhaltsstrategien, die Ihre Zielgruppe erreichen und konvertieren.",
    gradient: "from-secondary to-secondary/70"
  }, {
    icon: Zap,
    title: "Lab Automation",
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

        {/* Info Section */}
        <section className="relative py-8 sm:py-12 bg-gradient-to-br from-white via-gray-50/30 to-white overflow-hidden">

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
                <h2 className="text-[42px] sm:text-[48px] md:text-[52px] lg:text-[56px] mb-3 leading-[1.2] text-black font-extrabold">
                  Wir bringen Ihr Unternehmen{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent inline-block">
                    an die Spitze
                  </span>
                  {" "}Ihrer Branche
                </h2>
                <motion.p variants={{
                hidden: {
                  opacity: 0,
                  y: 20
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: 0.2
                  }
                }
              }} className="text-gray-600 mt-4 leading-[1.5] max-w-3xl text-base lg:text-xl">
                  Wir helfen Marken, sichtbar zu werden, Prozesse zu automatisieren – und den Wandel durch Innovation aktiv zu gestalten.
                </motion.p>
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
            }} className="text-[42px] sm:text-[48px] md:text-[52px] lg:text-[56px] mb-4 bg-gradient-primary bg-clip-text leading-[1.25] text-gray-950 font-bold">Ihr Gewinn mit New Edge</motion.h2>
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
            }} className="text-gray-600 max-w-3xl leading-[1.5] text-base lg:text-xl">Wir machen Effizienz spürbar: automatisierte Abläufe, klare Daten und kreative Systeme, die Wachstum messbar machen – damit Ihr Unternehmen schneller, profitabler und innovativer arbeitet.</motion.p>
            </motion.div>

            {/* Two-Column Layout with Mobile Scroll Effect */}
            <ProblemSolutionSection openAccordionIndex={openAccordionIndex} setOpenAccordionIndex={setOpenAccordionIndex} />
          </div>
        </section>

        {/* Impact Points Section with Modern Animations */}
        <section className="relative py-8 sm:py-12 bg-gradient-to-br from-white via-blue-50/20 to-white overflow-hidden">
          
          <div className="container-xl relative z-10">
            {/* Section Title with enhanced scale animation */}
            <motion.div className="text-left mb-12" initial={{
            opacity: 0,
            scale: 0.8,
            y: 60
          }} whileInView={{
            opacity: 1,
            scale: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: "-80px"
          }} transition={{
            duration: 0.9,
            ease: [0.25, 0.46, 0.45, 0.94]
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
            }} className="text-[42px] sm:text-[48px] md:text-[52px] lg:text-[56px] mb-4 text-black leading-[1.25] font-bold">
                Unsere innovative Herangehensweise
              </motion.h2>
            </motion.div>
            
            {/* Grid with enhanced stagger animation */}
            <motion.div className="grid md:grid-cols-2 gap-3 md:gap-4 items-stretch max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{
            once: true,
            margin: "-80px"
          }} variants={{
            hidden: {
              opacity: 0
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
              }
            }
          }}>
              {[{
              number: "01",
              title: "Automatisierung mit Impact",
              description: "Wir automatisieren repetitive Aufgaben, damit Sie sich auf Ihr Kerngeschäft konzentrieren können.",
              gradient: "from-purple-50/80 to-purple-50/50",
              border: "border-purple-200/60",
              iconBg: "from-purple-500 to-purple-600",
              shadow: "rgba(139, 92, 246, 0.15)",
              icon: Zap
            }, {
              number: "02",
              title: "Marketing & Technologie vereint",
              description: "Interdisziplinäres Team aus Strategen, Creatives und Entwicklern; alles aus einer Hand.",
              gradient: "from-blue-50/80 to-blue-50/50",
              border: "border-blue-200/60",
              iconBg: "from-blue-500 to-blue-600",
              shadow: "rgba(59, 130, 246, 0.15)",
              icon: Palette
            }, {
              number: "03",
              title: "Zugänglichkeit statt Komplexität",
              description: "Transparente Prozesse und verständliche Lösungen statt Technik Buzzwords.",
              gradient: "from-cyan-50/80 to-cyan-50/50",
              border: "border-cyan-200/60",
              iconBg: "from-cyan-500 to-cyan-600",
              shadow: "rgba(6, 182, 212, 0.15)",
              icon: Eye
            }, {
              number: "04",
              title: "Individuell & skalierbar",
              description: "Maßgeschneiderte Setups ohne Abo Modelle – Sie bezahlen nur, was Sie nutzen.",
              gradient: "from-pink-50/80 to-pink-50/50",
              border: "border-pink-200/60",
              iconBg: "from-pink-500 to-pink-600",
              shadow: "rgba(236, 72, 153, 0.15)",
              icon: Star
            }].map((point, index) => <motion.div key={index} variants={{
              hidden: {
                opacity: 0,
                y: 30,
                scale: 0.95
              },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              }
            }} className="h-full">
                  <motion.div className={`bg-gradient-to-br ${point.gradient} backdrop-blur-sm p-3 md:p-6 rounded-xl md:rounded-2xl border ${point.border} shadow-lg h-full flex flex-col`} whileHover={{
                scale: 1.02,
                y: -5,
                boxShadow: `0 15px 30px -10px ${point.shadow}`
              }} transition={{
                duration: 0.2
              }}>
                    <div className={`w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br ${point.iconBg} rounded-lg md:rounded-xl flex items-center justify-center mb-2 md:mb-4`}>
                      <point.icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                    </div>
                    <h3 className="text-base sm:text-lg md:text-[28px] mb-1 md:mb-2 text-foreground leading-[1.3] lg:text-lg font-semibold">
                      {point.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-[1.4] md:leading-[1.5]">
                      {point.description}
                    </p>
                  </motion.div>
                </motion.div>)}
            </motion.div>
          </div>
        </section>

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
            }} className="text-[42px] sm:text-[48px] md:text-[52px] text-foreground mb-6 leading-[1.25] font-bold lg:text-6xl">
                Unsere Kompetenzbereiche
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
            }} className="text-muted-foreground max-w-3xl leading-[1.5] text-xl">
                Drei Bereiche, eine Vision: Ihre Marke erfolgreich in der digitalen Welt positionieren.
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
                      <h3 className="text-base sm:text-lg md:text-[28px] lg:text-2xl text-foreground mb-2 md:mb-4 leading-[1.3] font-bold">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-6 leading-[1.5] md:flex-grow">
                        {service.description}
                      </p>

                      {/* Button */}
                      <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90 text-white group text-sm md:text-base md:mt-auto" asChild>
                        <Link to={`/${service.title.toLowerCase().split(' ')[0]}`}>
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
        <section id="contact-section" className="relative py-12 sm:py-16 bg-gradient-to-br from-primary/5 via-background to-primary/10">
          <div className="container-xl">
            <div className="text-center mb-16">
              <h2 className="text-[42px] sm:text-[48px] md:text-[52px] mb-4 text-foreground leading-[1.25] font-bold lg:text-6xl">
                Get in touch
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-[1.5] text-xl">
                Want to get in touch? We'd love to hear from you. Here's how you can reach us.
              </p>
            </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Talk to Sales */}
            <Card className="card-modern text-center p-3 sm:p-6 md:p-8 hover:shadow-xl transition-all flex flex-col">
              <CardContent className="space-y-3 sm:space-y-4 md:space-y-6 p-0 flex flex-col h-full">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-sm sm:text-lg md:text-[28px] lg:text-[32px] font-medium mb-1 sm:mb-2 text-foreground leading-[1.3]">Talk to Sales</h3>
                  <p className="text-[10px] sm:text-sm md:text-base text-muted-foreground mb-2 sm:mb-3 md:mb-4 leading-[1.5]">
                    Interested in our services? Just pick up the phone to chat with a member of our sales team.
                  </p>
                </div>
                <a href="tel:+4915750998236" className="text-primary font-semibold text-xs sm:text-base md:text-lg hover:underline mt-auto">
                  +49 157 5099 8236
                </a>
              </CardContent>
            </Card>

            {/* Contact Support */}
            <Card className="card-modern text-center p-3 sm:p-6 md:p-8 hover:shadow-xl transition-all flex flex-col">
              <CardContent className="space-y-3 sm:space-y-4 md:space-y-6 p-0 flex flex-col h-full">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-sm sm:text-lg md:text-[28px] lg:text-[32px] font-medium mb-1 sm:mb-2 text-foreground leading-[1.3]">Contact Team</h3>
                  <p className="text-[10px] sm:text-sm md:text-base text-muted-foreground mb-2 sm:mb-3 md:mb-4 leading-[1.5]">
                    Sometimes you need a little help from your friends. Or a support rep. Don't worry... we're here for you.
                  </p>
                </div>
                <Button onClick={() => setIsContactSheetOpen(true)} className="w-full bg-white border border-primary text-primary hover:bg-primary hover:text-white text-[10px] sm:text-sm md:text-base py-1 sm:py-2 mt-auto transition-all duration-300">
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