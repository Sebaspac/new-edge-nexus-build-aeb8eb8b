import { useEffect, useState, lazy, Suspense } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Cpu, Globe, Bot, BarChart3, Lightbulb, Phone, FileText, ChevronDown, Plus, ArrowUpRight } from "lucide-react";
import leadGenerationImage from "@/assets/lead-generation.webp";
import ragDatacenterImage from "@/assets/rag-datacenter.webp";
import marketingAutomationImage from "@/assets/marketing-automation.webp";
import { Button } from "@/components/ui/button";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ContactFormModal } from "@/components/ContactFormModal";
import { ServiceScrollSection } from "@/components/ServiceScrollSection";
import { LazyVideo } from "@/components/LazyVideo";
import { ProcessAutomationAnimation } from "@/components/ui/process-automation-animation";
import { WebSystemsAnimation } from "@/components/ui/web-systems-animation";
import { TrackingAnalyticsAnimation } from "@/components/ui/tracking-analytics-animation";
const Footer = lazy(() => import("@/components/Footer").then(m => ({
  default: m.Footer
})));
const Lab = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openAgent, setOpenAgent] = useState<string | null>(null);
  const [selectedAgent, setSelectedAgent] = useState<string>("Riley");
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
  const scrollToProjectButton = () => {
    const projectButton = document.getElementById("projekt-besprechen-btn");
    if (projectButton) {
      projectButton.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  };
  const labServices = [{
    title: "AI Systems & Automation Architecture",
    description: "Wir automatisieren operative Aufgaben und Prozesse end-to-end – pragmatisch, stabil und skalierbar. Dabei setzen wir dort KI ein, wo sie einen echten Mehrwert bringt, und kombinieren sie mit klassischen Automationen, wo Zuverlässigkeit und Klarheit wichtiger sind. Das Ergebnis sind durchgängige Workflows, die selbstständig laufen und sich sauber in bestehende Systeme integrieren.",
    problem: "Viele operative Aufgaben sind repetitiv, manuell und über mehrere Tools verteilt. Das führt zu hohem Zeitaufwand, Fehleranfälligkeit, Medienbrüchen und fehlender Skalierbarkeit. Ob mit oder ohne KI: Operative Arbeit bindet Ressourcen, die besser für Entscheidungen genutzt würden.",
    details: [{
      title: "Automatisierung operativer Aufgaben",
      description: "Reduktion manueller Tätigkeiten in täglichen Abläufen (z. B. Erfassung, Verarbeitung, Weiterleitung)."
    }, {
      title: "KI-gestützte Prozessschritte (optional)",
      description: "Einsatz von KI für Klassifikation, Priorisierung, Textverarbeitung oder Entscheidungsunterstützung."
    }, {
      title: "End-to-End-Workflows",
      description: "Durchgängige Prozesse ohne manuelle Übergaben zwischen Tools, Systemen oder Teams."
    }, {
      title: "Integration bestehender Systeme",
      description: "Anbindung von CRM, Support-, Ops- oder internen Tools in eine konsistente Automationslogik."
    }, {
      title: "Stabile Prozesslogik & Kontrolle",
      description: "Klare Abläufe, definierte Ausnahmen und nachvollziehbare Ergebnisse."
    }],
    icon: Cpu,
    gradient: "from-[#fde047] to-[#fbbf24]",
    video: "/assets/lab-ki-automation-video.mp4",
    animation: <ProcessAutomationAnimation />
  }, {
    title: "Internal Systems, Data & AI Ownership",
    description: "Wir bauen interne Systeme, die Software, Daten und KI unter eine gemeinsame, kontrollierbare Architektur bringen. Dazu entwickeln wir eigene interne Tools statt SaaS-Zwang, selbst kontrollierte Datenlogik sowie interne KI- und LLM-Systeme mit eigener Infrastruktur. Alles integriert, wartbar und im Besitz des Unternehmens.",
    problem: "SaaS-Stacks und externe KI-APIs erzeugen Abhängigkeiten, steigende laufende Kosten und fragmentierte Datenlandschaften. Unternehmen verlieren dadurch Kontrolle über sensible Daten, Transparenz über Prozesse sowie Einfluss auf Kosten, Verfügbarkeit und Weiterentwicklung. Kritische Systeme liegen außerhalb der eigenen Verantwortung.",
    details: [{
      title: "Interne Dashboards & Tools",
      description: "Maßgeschneiderte Anwendungen zur Abbildung kritischer Unternehmensfunktionen."
    }, {
      title: "Eigene Datenlogik & Datenflüsse",
      description: "Selbst kontrollierte Datenstrukturen, Schnittstellen und Verarbeitungslogik."
    }, {
      title: "Interne KI- & LLM-Systeme",
      description: "Deployment firmeneigener Sprachmodelle für interne Use Cases."
    }, {
      title: "GPU-Infrastruktur & Betrieb",
      description: "Aufbau eigener oder isolierter Rechenkapazitäten für KI-Workloads."
    }, {
      title: "Optionales Fine-Tuning",
      description: "Anpassung von Modellen an unternehmensspezifische Daten und Anforderungen."
    }, {
      title: "Integration in bestehende Systeme",
      description: "Nahtlose Anbindung an vorhandene Workflows, Tools und Plattformen."
    }, {
      title: "Reduktion externer Abhängigkeiten",
      description: "Strategischer Ersatz von SaaS- und API-Abhängigkeiten durch eigene Systeme."
    }],
    icon: Globe,
    gradient: "from-[#fbbf24] to-[#fde047]",
    video: "/assets/lab-new-video.mp4",
    animation: <TrackingAnalyticsAnimation />
  }, {
    title: "Web & Platform Architecture",
    description: "Wir bauen Websites als funktionale Knotenpunkte innerhalb der Systemarchitektur.",
    problem: "Websites sind oft isolierte Marketingflächen ohne Verbindung zu Systemen oder Automatisierung.",
    details: [{
      title: "Technische Web-Architektur",
      description: "Skalierbare und wartbare technische Grundstruktur."
    }, {
      title: "CMS & Datenlogik",
      description: "Content-Management mit klarer Datenstruktur und API-Anbindung."
    }, {
      title: "System-Integrationen",
      description: "Nahtlose Verbindung zu CRM, ERP und Automatisierungssystemen."
    }, {
      title: "Skalierbarkeit & Sicherheit",
      description: "Performante, sichere und zukunftsfähige Infrastruktur."
    }],
    icon: BarChart3,
    gradient: "from-[#fde047] to-[#fbbf24]",
    video: "/assets/lab-section-video.mp4",
    animation: <WebSystemsAnimation />
  }];
  return <>
      <Helmet>
        <title>Prozessautomatisierung München | KI-Lösungen für KMU | New Edge Lab</title>
        <meta name="description" content="Prozessautomatisierung mit KI aus München. New Edge Lab entwickelt intelligente Automatisierungslösungen, KI-Agenten und Workflow-Optimierung für den Mittelstand." />
        <meta name="keywords" content="Prozessautomatisierung München, KI Automatisierung, Workflow Automatisierung, KI Agenten, KI Entwicklung München, Automatisierung KMU, Tech Innovation München" />
        <link rel="canonical" href="https://www.newedgebrand.com/lab" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <MobileNavigation onContactClick={scrollToContact} theme="light" />

        {/* Hero Section */}
        <section className="relative w-full">
          <div className="w-full relative h-[75vh] lg:h-auto lg:aspect-video">
            <div className="absolute inset-0 overflow-hidden" style={{
            background: "linear-gradient(to bottom right, rgba(253, 224, 71, 0.3), rgba(251, 191, 36, 0.2), rgba(251, 191, 36, 0.1))"
          }}>
              <LazyVideo src="/assets/lab-hero-video.mp4" autoPlay loop muted playsInline preload="none" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0" style={{
              background: "linear-gradient(to top, rgba(251, 146, 60, 0.4), rgba(251, 191, 36, 0.2), transparent)"
            }} />

              <div className="absolute bottom-0 left-0 p-6 pb-8 sm:pb-12 sm:p-12 lg:p-16 max-w-full sm:max-w-4xl">
                <h1 className="text-h1 lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 leading-tight text-white">
                  NEW EDGE
                  <br />
                  <span className="italic font-black" style={{
                  background: "linear-gradient(to right, #fde047, #fbbf24)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}>
                    LAB
                  </span>
                </h1>
                
                
              </div>

            </div>
          </div>
        </section>

        {/* FROM VISION TO REALITY Section */}
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
                  LAB{" "}
                  <motion.span className="inline-block bg-clip-text text-transparent" style={{
                  background: "linear-gradient(to right, #fde047, #fbbf24)",
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
              }} className="text-body-lg text-gray-600 mt-4 max-w-3xl text-xl">Wir bauen Systeme statt Tools. Ownership statt Abhängigkeit. Produktiv, integrierbar, kontrollierbar.</motion.p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Sections */}
        {labServices.map((service, index) => {
        const Icon = service.icon;
        const isEven = index % 2 === 0;
        return <section key={index} className="py-12 sm:py-16 bg-primary-foreground">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <ServiceScrollSection gradient={service.gradient} videoSrc={service.video} imagePosition={isEven ? "right" : "left"} animationBelow={service.animation}>
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
                      
                      <h2 className="text-h2 font-bold text-black">
                        {service.title}
                      </h2>
                    </motion.div>

                    {/* Das Problem */}
                    <motion.div variants={{
                  hidden: {
                    opacity: 0,
                    y: 20
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5
                    }
                  }
                }} className="bg-red-50 border border-red-100 p-5">
                      <h3 className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-2">
                        Das Problem
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-700 sm:text-base">{service.problem}</p>
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
                      duration: 0.5
                    }
                  }
                }} className="bg-amber-50 border border-amber-100 p-5">
                      <h3 className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-2">
                        Unsere Lösung
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-600 sm:text-base">{service.description}</p>
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
                      duration: 0.5
                    }
                  }
                }} className="bg-white/80 backdrop-blur-sm p-6 shadow-lg border border-[#fde047]/30">
                      <h3 className="text-h3 font-black mb-4 text-black">Unsere Leistungen</h3>
                      <ul className="text-sm sm:text-base text-gray-700 leading-relaxed space-y-3">
                        {service.details.map((detail, idx) => <motion.li key={idx} variants={{
                      hidden: {
                        opacity: 0,
                        x: -20
                      },
                      visible: {
                        opacity: 1,
                        x: 0
                      }
                    }} className="flex gap-3">
                            <span className={`flex-shrink-0 w-7 h-7 bg-gradient-to-r ${service.gradient} text-white flex items-center justify-center text-sm font-bold`}>
                              {idx + 1}
                            </span>
                            <div className="flex-1">
                              <span className="font-semibold text-black">{typeof detail === 'string' ? detail : detail.title}</span>
                              {typeof detail === 'object' && detail.description && <p className="mt-1 text-gray-600">{detail.description}</p>}
                            </div>
                          </motion.li>)}
                      </ul>
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
                      duration: 0.5
                    }
                  }
                }}>
                      <motion.div whileHover={{
                    scale: 1.02
                  }} whileTap={{
                    scale: 0.98
                  }}></motion.div>
                    </motion.div>
                  </div>
                </ServiceScrollSection>
              </div>
            </section>;
      })}

        {/* Meet Our Agents Section */}
        <section className="section-py-md bg-primary-foreground relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-left mb-12">
              <h2 className="text-h1 font-bold mb-2 text-black">
                Meet Our Agents
              </h2>
              <p className="text-base sm:text-lg lg:text-xl max-w-3xl text-gray-700 leading-relaxed">
                In unseren Projekten arbeiten KI-Agenten Seite an Seite mit Menschen – sie automatisieren Workflows,
                koordinieren Systeme und beschleunigen ganze Prozesse. Jetzt können Sie sie kennenlernen – und erleben,
                wie intelligente Automatisierung in der Praxis funktioniert.
              </p>
            </motion.div>

            {/* Two-Column Layout: Accordion Left, Video Right */}
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-start">
              {/* Left: Accordion List */}
              <div className="space-y-1">
                {[{
                name: "Riley",
                subtitle: "Wissensagent",
                icon: Lightbulb,
                gradient: "from-purple-500 to-blue-500",
                description: "Riley nutzt Retrieval-Augmented Generation (RAG), um präzise, kontextbezogene Antworten aus Ihrer firmeneigenen Wissensbasis zu liefern. Er durchsucht Dokumente, Handbücher und FAQs, extrahiert relevante Informationen und formuliert daraus verständliche Antworten.",
                video: "/assets/products-hero-video.mp4"
              }, {
                name: "Liam",
                subtitle: "Lead-Gen-Agent",
                icon: Bot,
                gradient: "from-purple-500 to-pink-500",
                description: "Liam automatisiert Ihre Lead-Generierung. Er kombiniert Chatbots, Segmentierung, Predictive Lead Scoring und automatisierte E-Mail-Kampagnen. Dadurch identifiziert und pflegt er wertvolle Kontakte, während Ihr Vertrieb sich auf Abschlüsse konzentriert.",
                video: "/assets/liam-video.mp4"
              }, {
                name: "Vera",
                subtitle: "Voice-Agent",
                icon: Phone,
                gradient: "from-green-500 to-emerald-500",
                description: "Vera ist Ihre smarte Telefon-Assistentin. Sie nimmt Anrufe rund um die Uhr entgegen, automatisiert Routinegespräche, beantwortet Fragen und leitet komplexe Anliegen an Ihr Team weiter. Voice-AI-Lösungen können hohe Anrufvolumina bewältigen.",
                video: "/assets/vera-agent-video.mp4"
              }, {
                name: "Cora",
                subtitle: "Content-Agent",
                icon: FileText,
                gradient: "from-amber-500 to-orange-500",
                description: "Cora erstellt und optimiert Inhalte für Blogs, Social Media und E-Mail-Newsletter. AI-Content-Agenten sparen Zeit, verbessern die Qualität und sorgen für konsistente Texte. Cora analysiert Keyword-Trends und generiert SEO-optimierte Texte.",
                video: "/assets/cora-agent-video.mp4"
              }].map((agent, index) => {
                const isOpen = selectedAgent === agent.name;
                return <motion.div key={agent.name} initial={{
                  opacity: 0,
                  y: 10
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} viewport={{
                  once: true
                }} transition={{
                  duration: 0.3,
                  delay: index * 0.05
                }} className="border-b border-gray-200 last:border-b-0">
                      {/* Accordion Header */}
                      <button onClick={() => setSelectedAgent(isOpen ? "" : agent.name)} className="w-full py-5 px-0 flex items-center justify-between text-left hover:opacity-70 transition-opacity">
                        <h3 className="text-xl sm:text-2xl font-bold text-black">{agent.name}</h3>
                        <motion.svg animate={{
                      rotate: isOpen ? 180 : 0
                    }} transition={{
                      duration: 0.3
                    }} className="w-5 h-5 text-gray-500 flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      </button>

                      {/* Accordion Content */}
                      <motion.div initial={false} animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0
                  }} transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                  }} className="overflow-hidden">
                        <div className="pb-6 pr-8">
                          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{agent.description}</p>
                        </div>
                      </motion.div>
                    </motion.div>;
              })}
              </div>

              {/* Right: Sticky Video */}
              <div className="lg:sticky lg:top-24">
                {(() => {
                const agents = [{
                  name: "Riley",
                  video: "/assets/products-hero-video.mp4"
                }, {
                  name: "Liam",
                  video: "/assets/liam-video.mp4"
                }, {
                  name: "Vera",
                  video: "/assets/vera-agent-video.mp4"
                }, {
                  name: "Cora",
                  video: "/assets/cora-agent-video.mp4"
                }];
                const currentAgent = agents.find(a => a.name === selectedAgent) || agents[0];
                return <motion.div key={currentAgent.name} initial={{
                  opacity: 0,
                  scale: 0.95
                }} animate={{
                  opacity: 1,
                  scale: 1
                }} transition={{
                  duration: 0.4
                }} className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                      <LazyVideo key={currentAgent.video} src={currentAgent.video} autoPlay loop muted playsInline preload="none" className="absolute inset-0 w-full h-full object-cover" />
                    </motion.div>;
              })()}
              </div>
            </div>

            
          </div>
        </section>

        {/* Lab Cases Section */}
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
                  Lab Cases.
                  <br />
                  <span style={{
                  background: 'linear-gradient(to right, #fde047, #fbbf24)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Technologie, die liefert.</span>
                </h2>
              </motion.div>

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
              delay: 0.2
            }} className="hidden md:block">
                <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm lg:text-lg font-bold text-black hover:text-[#fbbf24] transition-colors duration-300">
                  ALLE CASES
                  <ArrowUpRight className="w-5 h-5 lg:w-6 lg:h-6" />
                </Link>
              </motion.div>
            </div>

            {/* Cases Grid */}
            <div className="flex gap-0 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-4">
              {[{
              id: "retail-lab",
              client: "TRY KMU",
              headline: "RAG-Wissensagent für Maschinenbau",
              category: "AI AUTOMATION",
              route: "/case-study/retail-lab",
              image: ragDatacenterImage
            }, {
              id: "ecommerce",
              client: "RETAIL CLIENT",
              headline: "Marketing-Automatisierung mit KI",
              category: "WACHSTUM",
              route: "/case-study/ecommerce",
              image: marketingAutomationImage
            }, {
              id: "social-media",
              client: "B2B SALES",
              headline: "Intelligente Lead-Qualifizierung",
              category: "SALES",
              route: "/case-study/social-media",
              image: leadGenerationImage
            }].map((caseStudy, index) => <motion.div key={caseStudy.id} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} className="flex-shrink-0 w-[65%] snap-start md:w-auto">
                  <Link to={caseStudy.route} className="block group">
                    <div className="relative overflow-hidden aspect-square bg-gray-100">
                      <img src={caseStudy.image} alt={caseStudy.headline} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-black/20" />
                      
                      <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                        <Plus className="w-8 h-8 md:w-12 md:h-12 text-white" strokeWidth={2} />
                      </div>
                      
                      {/* Hover Overlay mit Lab-Gradient (Gelb/Orange) */}
                      <div className="absolute inset-0 bg-[#fbbf24] opacity-0 group-hover:opacity-95 transition-all duration-300 flex flex-col justify-between p-3 md:p-6">
                        <div className="w-10 md:w-16 h-0.5 md:h-1 bg-white" />
                        <div className="space-y-1 md:space-y-3">
                          <span className="text-[8px] md:text-xs font-bold text-white/80 uppercase tracking-wider">
                            {caseStudy.client}
                          </span>
                          <h3 className="text-sm md:text-2xl font-bold text-white leading-tight">
                            {caseStudy.headline}
                          </h3>
                          <div className="flex items-center gap-1 md:gap-2 text-white font-medium">
                            <span className="underline text-[10px] md:text-base">Case ansehen</span>
                            <ArrowUpRight className="w-3 h-3 md:w-5 md:h-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 relative overflow-hidden bg-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
            <h2 className="text-[36px] sm:text-[48px] md:text-[52px] lg:text-[56px] font-bold mb-4 sm:mb-6 text-gray-900">
              Bereit für Kontrolle?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4 text-gray-600">
              Lab ist kein Projektgeschäft. Lab ist Systembau.
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

      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} accentColor="#fde047" gradientFrom="#fde047" gradientTo="#fbbf24" theme="lab" />
    </>;
};
export default Lab;