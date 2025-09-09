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
import { ArrowRight, Sparkles, Zap, Brain, Target, Rocket, Star, Users } from "lucide-react";
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
          <motion.div className="absolute -top-10 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }} transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }} />
          <div className="container-xl mt-16">
            <ScrollAnimation animation="fadeUp" delay={0.2} className="text-center mb-16">
              <h2 className="text-h1 font-bold mb-6 text-foreground">Unsere Kompetenzbereiche</h2>
              <p className="text-body-xl text-muted-foreground max-w-2xl mx-auto">
                Drei Bereiche, eine Vision: Ihre Marke erfolgreich in der digitalen Welt positionieren.
              </p>
            </ScrollAnimation>

            <motion.div className="grid-modern" initial="hidden" whileInView="visible" viewport={{
            once: true,
            margin: "-50px"
          }} variants={{
            hidden: {
              opacity: 0
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
                delayChildren: 0.4
              }
            }
          }}>
              {services.map((service, index) => {
              const links = ['/studio', '/media', '/lab'];
              return <motion.div key={index} variants={{
                hidden: {
                  opacity: 0,
                  y: 80,
                  rotateX: 45
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  transition: {
                    duration: 0.8,
                    ease: "easeOut"
                  }
                }
              }} whileHover={{
                scale: 1.05,
                y: -15,
                transition: {
                  duration: 0.3
                }
              }} className="group">
                    <Card className="card-modern h-full hover-lift">
                      <CardContent className="p-8 flex flex-col h-full">
                        <motion.div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`} whileHover={{
                      rotate: 360,
                      scale: 1.2
                    }} transition={{
                      duration: 0.6
                    }}>
                          <service.icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <h3 className="text-h3 font-semibold mb-4 text-foreground">
                          {service.title}
                        </h3>
                        <p className="text-body text-muted-foreground leading-relaxed mb-6 flex-grow">
                          {service.description}
                        </p>
                        <Button variant="default" size="sm" className="self-start group/btn btn-primary" asChild>
                          <Link to={links[index]}>
                            Mehr erfahren
                            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>;
            })}
            </motion.div>
          </div>
        </ScrollAnimation>

        {/* Contact Section */}
        <ScrollAnimation animation="scaleIn" threshold={0.1}>
          <section id="contact-section" className="relative -mt-24 pt-32 pb-20 bg-gradient-to-br from-surface via-background to-surface overflow-hidden">
            {/* Modern floating elements */}
            <motion.div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl" animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360]
          }} transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }} />
            <motion.div className="absolute bottom-40 right-20 w-40 h-40 bg-accent/5 rounded-full blur-2xl" animate={{
            y: [0, -30, 0],
            scale: [1, 0.8, 1]
          }} transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }} />
            <div className="container-narrow">
              <ScrollAnimation animation="fadeUp" delay={0.1} className="text-center mb-12">
                <h2 className="text-h1 font-bold mb-6 text-foreground">
                  Bereit für den nächsten Schritt?
                </h2>
                <p className="text-body-xl text-muted-foreground">
                  Ready when you are. Wir bringen's online.
                </p>
              </ScrollAnimation>

              <ScrollAnimation animation="fadeUp" delay={0.3}>
                <Card className="card-modern">
                  <CardContent className="p-8">
                    <motion.form onSubmit={handleSubmit} className="space-y-6" initial="hidden" animate="visible" variants={{
                    hidden: {
                      opacity: 0
                    },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.2
                      }
                    }
                  }}>
                      <motion.div className="space-y-6" variants={{
                      hidden: {
                        opacity: 0
                      },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.1
                        }
                      }
                    }}>
                        {/* Form fields with staggered animations */}
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
                      }].map(field => <motion.div key={field.id} className="space-y-2" variants={{
                        hidden: {
                          opacity: 0,
                          y: 20
                        },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.4,
                            ease: "easeOut"
                          }
                        }
                      }}>
                            <Label htmlFor={field.id} className="text-foreground font-medium">
                              {field.label}
                            </Label>
                            <Input id={field.id} name={field.id} type={field.type} placeholder={field.placeholder} required={field.required} className="bg-background/50 border-border focus:border-primary transition-colors" />
                          </motion.div>)}
                        
                        <motion.div className="space-y-2" variants={{
                        hidden: {
                          opacity: 0,
                          y: 20
                        },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.4,
                            ease: "easeOut"
                          }
                        }
                      }}>
                          <Label htmlFor="nachricht" className="text-foreground font-medium">
                            Nachricht *
                          </Label>
                          <Textarea id="nachricht" name="nachricht" placeholder="Erzählen Sie uns von Ihrem Projekt..." required className="min-h-[120px] bg-background/50 border-border focus:border-primary transition-colors resize-none" />
                        </motion.div>
                      </motion.div>

                      <motion.div variants={{
                      hidden: {
                        opacity: 0,
                        y: 20
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.4,
                          ease: "easeOut"
                        }
                      }
                    }}>
                        <Button type="submit" size="lg" className="w-full btn-primary">
                          Nachricht senden
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </motion.div>
                    </motion.form>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </div>
          </section>
        </ScrollAnimation>

        {/* Footer Section */}
        

        {/* Cookie Consent */}
        <CookieConsent />
      </div>
    </FastLoadWrapper>;
};
export default Index;