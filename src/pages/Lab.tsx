import { useEffect, useState, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { Cpu, Globe, Bot, BarChart3, Lightbulb, Phone, FileText, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ContactFormModal } from "@/components/ContactFormModal";
import { ServiceScrollSection } from "@/components/ServiceScrollSection";
import { useHeroScrollAnimation } from "@/hooks/useHeroScrollAnimation";

const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));
const Lab = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openAgent, setOpenAgent] = useState<string | null>(null);
  const [selectedAgent, setSelectedAgent] = useState<string>("Riley");
  const {
    container: heroContainer,
    style: heroStyle
  } = useHeroScrollAnimation();
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
    title: "KI-gestützte Prozessautomatisierung",
    description: "Wir analysieren bestehende Abläufe, bewerten manuelle Routinen und identifizieren, welche Prozesse sich durch künstliche Intelligenz optimieren oder automatisieren lassen.",
    details: [{
      title: "Workflow-Analyse & Prozess-Mapping",
      description: "Erfassen, dokumentieren und bewerten bestehender Abläufe nach Aufwand, Risiko und Automatisierungspotenzial."
    }, {
      title: "Automatisierungs-Audit & Strategische Roadmap",
      description: "Durchführung eines Audits zur Identifikation und Priorisierung von Automatisierungschancen – inklusive Machbarkeitsbewertung, Effizienz-Ranking und Handlungsempfehlungen."
    }, {
      title: "Intelligente Datenverarbeitung & Decision-Flows",
      description: "Erkennen und strukturieren von Prozessen, die von KI-gestützten Analysen, Empfehlungen oder Entscheidungslogiken profitieren."
    }, {
      title: "Chatbot- und LLM-Integration",
      description: "Bewertung möglicher Einsatzszenarien für konversationsbasierte Assistenten, Support-Bots oder interne Wissenssysteme."
    }],
    icon: Cpu,
    gradient: "from-[#fde047] to-[#fbbf24]",
    video: "/assets/lab-ki-automation-video.mp4"
  }, {
    title: "Websysteme & Conversion-Architektur",
    description: "Wir entwickeln performante, KI-fähige Webplattformen mit integrierter Funnel-Logik, Tracking-Setups und Schnittstellen zu Ihren Prozessen.",
    details: [{
      title: "Headless & CMS-Systeme",
      description: "Flexible, wartungsarme Systeme mit API-Anbindung und modularer Struktur."
    }, {
      title: "Conversion-optimierte Landingpages",
      description: "UX-Design, Copy und Struktur, die Nutzer gezielt durch den Funnel führen."
    }, {
      title: "Sales- & Lead-Funnel-Entwicklung",
      description: "Automatisierte Funnel-Logik mit CRM- und Tracking-Integration."
    }, {
      title: "Performance-Optimierung & Skalierbarkeit",
      description: "Schnelle Ladezeiten, sauberer Code und zukunftssichere Architektur."
    }],
    icon: Globe,
    gradient: "from-[#fbbf24] to-[#fde047]",
    video: "/assets/lab-section-video.mp4"
  }, {
    title: "Tracking- & Analyse-Setups",
    description: "Wir verbinden Tracking, Analyse und KI, um Entscheidungsprozesse datenbasiert zu steuern. Statt isolierte Dashboards einzurichten, entwickeln wir ein System, das Erkenntnisse automatisch generiert und Handlungsempfehlungen liefert.",
    details: [{
      title: "Data-Audit & Systemintegration",
      description: "Analyse bestehender Tracking-Setups und Entwicklung einer integrierten Datenarchitektur (GA4, Tag Manager, CRM, AI-Schnittstellen)."
    }, {
      title: "Custom Dashboard & Insight Design",
      description: "Entwicklung intelligenter Dashboards mit KPI-Struktur, Forecasting und Performance Alerts."
    }, {
      title: "Automatisierte Reporting-Flows",
      description: "Einrichtung von Report-Automationen und Alert-Systemen zur Echtzeitbewertung von Kampagnen und Funnels."
    }, {
      title: "KI-basierte Analyse & Handlungsempfehlungen",
      description: "Nutzung von Machine-Learning-Modellen und Agenten, um Muster zu erkennen, Trends vorherzusagen und Optimierungen vorzuschlagen."
    }],
    icon: BarChart3,
    gradient: "from-[#fde047] to-[#fbbf24]",
    video: "/assets/lab-new-video.mp4"
  }];
  return <>
      <Helmet>
        <title>NEW EDGE LAB - Tech Innovation | KI & Webentwicklung</title>
        <meta name="description" content="NEW EDGE LAB entwickelt innovative KI-Lösungen und maßgeschneiderte Webanwendungen. Von Prozessautomatisierung bis Analytics - Technologie für Ihren Erfolg." />
        <meta name="keywords" content="KI Entwicklung, Webentwicklung, Prozessautomatisierung, KI Agenten, Analytics, Tech Innovation" />
        <link rel="canonical" href="https://new-edge.de/lab" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <MobileNavigation onContactClick={scrollToContact} theme="light" />

        {/* Hero Section */}
        <section className="relative w-full">
          <div className="w-full relative h-[75vh] lg:h-auto lg:aspect-video">
            <div className="absolute inset-0 overflow-hidden" style={{
            background: "linear-gradient(to bottom right, rgba(253, 224, 71, 0.3), rgba(251, 191, 36, 0.2), rgba(251, 191, 36, 0.1))"
          }}>
              <video autoPlay loop muted playsInline preload="metadata" className="absolute inset-0 w-full h-full object-cover" aria-label="Lab hero background video">
                <source src="/assets/lab-hero-video.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0" style={{
              background: "linear-gradient(to top, rgba(251, 146, 60, 0.4), rgba(251, 191, 36, 0.2), transparent)"
            }} />

              <div className="absolute bottom-0 left-0 p-6 pb-20 sm:p-12 lg:p-16 max-w-full sm:max-w-4xl">
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
                  <br />
                </h1>
              </div>

            </div>
          </div>
        </section>

        {/* FROM VISION TO REALITY Section */}
        <section className="relative py-12 sm:py-16 bg-white">
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
                  TECH{" "}
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
                    INNOVATION
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
              }} className="text-body-lg text-gray-600 mt-4 max-w-3xl text-xl">LAB ist die technologische Einheit von New Edge – entwickelt, geführt und gesteuert direkt durch unser Team. Hier entstehen KI-gestützte Systeme, automatisierte Prozesse und datengetriebene Infrastrukturen, die Projekte effizienter, präziser und skalierbarer machen.</motion.p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Sections */}
        {labServices.map((service, index) => {
        const Icon = service.icon;
        const isEven = index % 2 === 0;
        return <section key={index} className="py-12 sm:py-16" style={{
          background: index % 2 === 0 ? "linear-gradient(to bottom right, white, rgba(253, 224, 71, 0.1), rgba(251, 191, 36, 0.1))" : "linear-gradient(to bottom right, white, rgba(251, 191, 36, 0.1), rgba(253, 224, 71, 0.1))"
        }}>
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <ServiceScrollSection gradient={service.gradient} videoSrc={service.video} imagePosition={isEven ? "right" : "left"}>
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
                }} whileHover={{
                  scale: 1.02,
                  y: -5
                }} transition={{
                  type: "spring",
                  stiffness: 300
                }} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-[#fde047]/30 hover:shadow-xl hover:border-[#fde047]/40 transition-all duration-200">
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
                }} whileHover={{
                  scale: 1.02,
                  y: -5
                }} transition={{
                  type: "spring",
                  stiffness: 300
                }} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-[#fde047]/30 hover:shadow-xl hover:border-[#fde047]/40 transition-all duration-200">
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
                            <span className={`flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-r ${service.gradient} text-white flex items-center justify-center text-sm font-bold`}>
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
        <section className="py-16 sm:py-24 bg-gradient-to-br from-white via-yellow-50/30 to-orange-50/30 relative overflow-hidden">
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
                      <video key={currentAgent.video} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                        <source src={currentAgent.video} type="video/mp4" />
                      </video>
                    </motion.div>;
              })()}
              </div>
            </div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.5
          }} className="text-center mt-12">
              <Button size="lg" className="bg-white border-2 border-[#fde047] text-black px-12 py-6 rounded-xl font-bold text-lg shadow-lg transition-all duration-200 hover:bg-[#fde047]/10 hover:scale-[1.02]" onClick={() => navigate("/products")}>
                Alle Agenten entdecken
              </Button>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 text-black relative overflow-hidden" style={{
        background: "linear-gradient(to right, #fde047, #fbbf24, #fde047)"
      }}>
          <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
            <h2 className="text-[36px] sm:text-[48px] md:text-[52px] lg:text-[56px] font-bold mb-4 sm:mb-6">
              Bereit für den nächsten Schritt?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4 text-gray-900">
              Gemeinsam entwickeln wir innovative Technologielösungen, die Ihr Unternehmen voranbringen.
            </p>
            <Button id="projekt-besprechen-btn" size="lg" className="bg-black text-white hover:bg-gray-900 text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 hover:scale-[1.02] transition-all duration-200" onClick={() => setIsModalOpen(true)}>
              Loslegen!
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