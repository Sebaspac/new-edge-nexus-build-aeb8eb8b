import { useEffect, useState, lazy, Suspense } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Palette, BookOpen, Plus, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ContactFormModal } from "@/components/ContactFormModal";
import { ServiceScrollSection } from "@/components/ServiceScrollSection";
import { LazyVideo } from "@/components/LazyVideo";
import { BrandStrategyAnimation } from "@/components/ui/brand-strategy-animation";
import { BrandIdentityAnimation } from "@/components/ui/brand-identity-animation";
import albanovaImage from "@/assets/albanova-website.png";
const Footer = lazy(() => import("@/components/Footer").then(m => ({
  default: m.Footer
})));
const Studio = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setIsVisible(true);
  }, []);
  const scrollToContact = () => {
    navigate("/", {
      replace: true
    });
    setTimeout(() => {
      const contactSection = document.getElementById("contact-section");
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth"
        });
      }
    }, 100);
  };
  const studioServices = [{
    title: "Brand Identity & Brand System",
    problem: "Unklare Markenlogik und inkonsistente Kommunikation führen zu Reibung, Fehlannahmen und nicht anschlussfähigen Systemen.",
    solution: "Wir entwickeln eine Markenidentität, die als funktionale Grundlage für Web, Software und KI-Systeme dient.",
    deliverables: [{
      title: "Markenkern & Purpose",
      description: "Das strategische Fundament der Marke als Entscheidungsgrundlage."
    }, {
      title: "Positionierung & Markenlogik",
      description: "Klare Differenzierung und Einordnung im Wettbewerbsumfeld."
    }, {
      title: "Logosystem & Typografie",
      description: "Visuelle Identität mit definierten Anwendungsregeln."
    }, {
      title: "Brand Book als Regelwerk",
      description: "Umfassende Dokumentation aller Markenrichtlinien."
    }],
    icon: BookOpen,
    gradient: "from-[#6366f1] to-[#a855f7]"
  }, {
    title: "KI Enablement & Audit",
    problem: "KI wird oft eingesetzt, ohne klare Ziele, ohne saubere Datenbasis und ohne Verständnis für Risiken.",
    solution: "Wir analysieren Prozesse, Daten und Tools und schaffen Entscheidungsfähigkeit: Was ist sinnvoll – und was nicht?",
    deliverables: [{
      title: "Analyse bestehender Prozesse & Tools",
      description: "Erfassung und Bewertung aktueller Abläufe und Systeme."
    }, {
      title: "Bewertung von KI-Potenzialen",
      description: "Identifikation realistischer Automatisierungs- und KI-Chancen."
    }, {
      title: "Risiko- & Governance-Einordnung",
      description: "Bewertung von Datenrisiken, Compliance und Kontrollmechanismen."
    }, {
      title: "Klare Go-/No-Go-Entscheidungen",
      description: "Fundierte Handlungsempfehlungen für nächste Schritte."
    }],
    icon: Palette,
    gradient: "from-[#a855f7] to-[#6366f1]"
  }, {
    title: "Digitale Kommunikations- & Sichtbarkeitsarchitektur",
    problem: "Digitale Kommunikation entsteht oft isoliert und ohne Verbindung zu Systemen, Vertrieb oder Automatisierung.",
    solution: "Wir definieren eine klare Kommunikationslogik, die als strukturelle Grundlage für Websites, Plattformen und Systeme dient.",
    deliverables: [{
      title: "Rollen digitaler Kanäle",
      description: "Definition der Funktion und Zielsetzung jedes Kanals."
    }, {
      title: "Narrative & Markenstimme",
      description: "Einheitliche Tonalität und Storytelling-Prinzipien."
    }, {
      title: "Systemische Leitplanken",
      description: "Strukturelle Vorgaben für konsistente Kommunikation."
    }, {
      title: "Anschlussfähigkeit für Lab",
      description: "Technische Übergabepunkte für Automatisierung und Systeme."
    }],
    icon: BookOpen,
    gradient: "from-[#6366f1] to-[#a855f7]"
  }];
  const studioCases = [{
    id: "albanova",
    client: "ALBANOVA",
    headline: "Marke & Digitalstrategie von Null aufgebaut",
    category: "BRANDING",
    route: "/case-study/albanova",
    image: albanovaImage
  }];
  return <>
      <Helmet>
        <title>Brand Strategy & Identity München | Markenentwicklung | New Edge Studio</title>
        <meta name="description" content="New Edge Studio München - Ihre Agentur für Brand Strategy und Markenidentität. Wir entwickeln Marken mit KI-gestützten Methoden für den Mittelstand." />
        <meta name="keywords" content="Brand Strategy München, Markenentwicklung München, Brand Identity, Markenidentität, Design System, Positionierung, KI Agentur München" />
        <link rel="canonical" href="https://www.newedgebrand.com/studio" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <MobileNavigation onContactClick={scrollToContact} theme="light" />

        {/* Hero Section */}
        <section className="relative w-full">
          <div className="w-full relative h-[85vh] lg:h-auto lg:aspect-video">
            <div className="absolute inset-0 overflow-hidden" style={{
            background: "linear-gradient(to bottom right, rgba(99, 102, 241, 0.3), rgba(168, 85, 247, 0.2), rgba(168, 85, 247, 0.1))"
          }}>
              <LazyVideo src="/assets/studio-hero-background.mp4" autoPlay loop muted playsInline preload="none" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0" style={{
              background: "linear-gradient(to top, rgba(99, 102, 241, 0.6), rgba(99, 102, 241, 0.2), transparent)"
            }} />

              <div className="absolute bottom-0 left-0 p-6 pb-8 sm:pb-12 sm:p-12 lg:p-16 max-w-full sm:max-w-4xl">
                <h1 className="text-h1 lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 leading-tight text-white">
                  NEW EDGE
                  <br />
                  <span className="italic font-black" style={{
                  background: "linear-gradient(to right, #6366f1, #a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}>
                    STUDIO
                  </span>
                </h1>
                
                
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="relative pt-12 pb-6 sm:pt-16 sm:pb-8 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
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
          }} className="max-w-4xl">
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
                <h2 className="text-h1 font-extrabold text-black">
                  STUDIO{" "}
                  <motion.span className="inline-block bg-clip-text text-transparent" style={{
                  background: "linear-gradient(to right, #6366f1, #a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }} whileInView={{
                  scale: [1, 1.05, 1]
                }} transition={{
                  duration: 1,
                  delay: 0.3
                }}>
                    POWER
                  </motion.span>
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
              }} className="text-body-lg text-gray-600 mt-6 max-w-3xl text-xl leading-relaxed">
                  Wir bauen Klarheit, die Fehlentscheidungen verhindert. Studio übersetzt Marke, Kommunikation und KI-Verständnis in eine belastbare Systemgrundlage.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Sections */}
        {studioServices.map((service, index) => {
        const Icon = service.icon;
        const isEven = index % 2 === 0;
        let videoSrc = "/assets/brandstory-video.mp4";
        if (index === 1) videoSrc = "/assets/template-video.mp4";
        return <section key={index} className="py-12 sm:py-16 bg-primary-foreground">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <ServiceScrollSection gradient={service.gradient} videoSrc={videoSrc} imagePosition={isEven ? "right" : "left"} animationBelow={index === 0 ? <BrandStrategyAnimation /> : <BrandIdentityAnimation />}>
                  <div className="space-y-6">
                    <motion.div variants={{
                  hidden: {
                    opacity: 0,
                    x: isEven ? -30 : 30
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.6
                    }
                  }
                }} className="flex items-center gap-4 mb-8">
                      <h2 className="text-h2 font-bold text-black">{service.title}</h2>
                    </motion.div>

                    {/* Outcome */}

                    {/* Problem */}
                    <motion.div variants={{
                  hidden: {
                    opacity: 0,
                    y: 20
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: 0.1
                    }
                  }
                }} className="bg-red-50 border border-red-100 p-5">
                      <h3 className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-2">Das Problem</h3>
                      <p className="text-gray-700 leading-relaxed">{service.problem}</p>
                    </motion.div>

                    {/* Solution */}
                    <motion.div variants={{
                  hidden: {
                    opacity: 0,
                    y: 20
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: 0.2
                    }
                  }
                }} className="bg-indigo-50 border border-indigo-100 p-5">
                      <h3 className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-2">
                        Unsere Lösung
                      </h3>
                      <p className="text-gray-700 leading-relaxed">{service.solution}</p>
                    </motion.div>

                    {/* Deliverables - Lab Style */}
                    <motion.div variants={{
                  hidden: {
                    opacity: 0,
                    y: 20
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: 0.3
                    }
                  }
                }} className="bg-white/80 backdrop-blur-sm p-6 shadow-lg border border-[#6366f1]/20">
                      <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Deliverables</h4>
                      <div className="space-y-4">
                        {service.deliverables.map((item, idx) => <motion.div key={idx} initial={{
                      opacity: 0,
                      x: -10
                    }} whileInView={{
                      opacity: 1,
                      x: 0
                    }} viewport={{
                      once: true
                    }} transition={{
                      duration: 0.3,
                      delay: idx * 0.05
                    }} whileHover={{
                      x: 6
                    }} className="flex items-start gap-4 group cursor-default">
                            <span className={`flex-shrink-0 w-8 h-8 bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white text-sm font-bold shadow-md group-hover:scale-110 transition-transform duration-200 mt-0.5`}>
                              {idx + 1}
                            </span>
                            <div className="flex-1">
                              <span className="text-gray-900 font-semibold block">{item.title}</span>
                              <span className="text-gray-500 text-sm">{item.description}</span>
                            </div>
                          </motion.div>)}
                      </div>
                    </motion.div>
                  </div>
                </ServiceScrollSection>
              </div>
            </section>;
      })}

        {/* Studio Cases Section */}
        <section className="relative py-8 md:py-12 lg:py-16 bg-white overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            {/* Header */}
            <div className="flex items-end justify-between mb-4 md:mb-8">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }}>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black leading-[1.1] text-black">
                  Studio Cases.
                  <br />
                  <span style={{
                  background: "linear-gradient(to right, #6366f1, #a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}>
                    Marken, die wirken.
                  </span>
                </h2>
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }} className="hidden md:block">
                <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm lg:text-lg font-bold text-black hover:text-[#6366f1] transition-colors duration-300">
                  ALLE CASES
                  <ArrowUpRight className="w-5 h-5 lg:w-6 lg:h-6" />
                </Link>
              </motion.div>
            </div>

            {/* Cases Grid */}
            <div className="flex gap-0 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-4">
              {studioCases.map((caseStudy, index) => <motion.div key={caseStudy.id} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }} className="flex-shrink-0 w-[65%] snap-start md:w-auto">
                  <Link to={caseStudy.route} className="block group">
                    <div className="relative overflow-hidden aspect-square bg-gray-100">
                      <img src={caseStudy.image} alt={caseStudy.headline} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-black/20" />

                      <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                        <Plus className="w-8 h-8 md:w-12 md:h-12 text-white" strokeWidth={2} />
                      </div>

                      <div className="absolute inset-0 bg-[#6366f1] opacity-0 group-hover:opacity-95 transition-all duration-300 flex flex-col justify-between p-3 md:p-6">
                        <div className="w-10 md:w-16 h-0.5 md:h-1 bg-white" />

                        <div className="space-y-1 md:space-y-3">
                          <span className="text-[8px] md:text-xs font-bold text-white/80 uppercase tracking-wider">
                            {caseStudy.client}
                          </span>
                          <h3 className="text-sm md:text-2xl font-bold text-white leading-tight">
                            {caseStudy.headline}
                          </h3>
                          <div className="flex items-center gap-1 md:gap-2 text-white font-medium group-hover:gap-2 md:group-hover:gap-3 transition-all duration-300">
                            <span className="underline text-[10px] md:text-base">Case ansehen</span>
                            <ArrowUpRight className="w-3 h-3 md:w-5 md:h-5" />
                          </div>
                        </div>

                        <div>
                          <span className="inline-block border border-white/80 px-2 md:px-4 py-0.5 md:py-1.5 text-[7px] md:text-xs font-bold text-white uppercase tracking-wider">
                            {caseStudy.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>)}
            </div>

            {/* Mobile Link */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }} className="md:hidden mt-8 text-center">
              <Link to="/case-studies" className="inline-flex items-center gap-2 text-lg font-bold text-black hover:text-[#6366f1] transition-colors duration-300">
                ALLE CASES
                <ArrowUpRight className="w-6 h-6" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 relative overflow-hidden bg-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
            <h2 className="text-h1 mb-4 sm:mb-6 text-gray-900">Bereit für Klarheit?</h2>
            <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4 text-gray-600">
              Studio ist der notwendige Einstieg in kontrollierbare Systeme.
            </p>
            <Button id="projekt-besprechen-btn" size="lg" className="bg-transparent backdrop-blur-md text-black border-2 border-black hover:bg-black hover:text-white font-semibold text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 transition-all duration-300 hover:-translate-y-0.5 rounded-none" onClick={() => setIsModalOpen(true)}>
              Kontakt aufnehmen
            </Button>
          </div>
        </section>

        <Suspense fallback={<div className="h-64" />}>
          <Footer />
        </Suspense>
      </div>

      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} accentColor="#6366f1" gradientFrom="#6366f1" gradientTo="#a855f7" theme="studio" />
    </>;
};
export default Studio;