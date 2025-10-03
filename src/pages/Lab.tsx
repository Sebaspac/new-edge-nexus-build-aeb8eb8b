import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cpu, Globe, Bot, BarChart3, Lightbulb, Phone, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { ContactFormModal } from "@/components/ContactFormModal";
const Lab = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openAgent, setOpenAgent] = useState<string | null>(null);
  const [selectedAgent, setSelectedAgent] = useState<string>("Riley");
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsVisible(true);
  }, []);
  const scrollToContact = () => {
    navigate('/', {
      replace: true
    });
    setTimeout(() => {
      const contactSection = document.getElementById('contact-section');
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }, 100);
  };
  const scrollToProjectButton = () => {
    const projectButton = document.getElementById('projekt-besprechen-btn');
    if (projectButton) {
      projectButton.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };
  const labServices = [{
    title: "KI-gestützte Prozessautomatisierung",
    description: "Optimierung und Automatisierung operativer Aufgaben durch künstliche Intelligenz.",
    details: ["Workflow-Analyse und Optimierung", "Automatisierte Entscheidungsprozesse", "Intelligente Datenverarbeitung", "Zeit- und Kostenersparnis maximieren"],
    icon: Cpu,
    gradient: "from-[#fde047] to-[#fbbf24]"
  }, {
    title: "Webentwicklung",
    description: "CMS, Landingpages, Funnels - maßgeschneiderte Weblösungen für Ihren Erfolg.",
    details: ["Content Management Systeme", "Conversion-optimierte Landingpages", "Sales Funnel Entwicklung", "Responsive und performant"],
    icon: Globe,
    gradient: "from-[#fbbf24] to-[#fde047]"
  }, {
    title: "KI-Agenten-Integration",
    description: "Text, Mail, CRM - intelligente Agenten für automatisierte Kommunikation und Verwaltung.",
    details: ["Chatbot-Entwicklung und Integration", "E-Mail-Automatisierung mit KI", "CRM-Integration und -Optimierung", "24/7 automatisierter Kundenservice"],
    icon: Bot,
    gradient: "from-[#fde047] to-[#fbbf24]"
  }, {
    title: "Tracking- & Analyse-Setups",
    description: "GA4, Tag Manager, Pixel, Dashboards - umfassende Datenanalyse und Reporting.",
    details: ["Google Analytics 4 Setup", "Tag Manager Konfiguration", "Custom Dashboard Entwicklung", "Datengetriebene Entscheidungen"],
    icon: BarChart3,
    gradient: "from-[#fbbf24] to-[#fde047]"
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
        <section className="relative w-full" style={{
        marginTop: '80px'
      }}>
          <div className="w-full" style={{
          paddingTop: '56.25%',
          position: 'relative'
        }}>
            <div className="absolute inset-0 overflow-hidden" style={{
            background: 'linear-gradient(to bottom right, rgba(253, 224, 71, 0.3), rgba(251, 191, 36, 0.2), rgba(251, 191, 36, 0.1))'
          }}>
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                <source src="/assets/lab-hero-video.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0" style={{
              background: 'linear-gradient(to top, rgba(251, 146, 60, 0.4), rgba(251, 191, 36, 0.2), transparent)'
            }} />
              
              <div className="absolute bottom-0 left-0 p-6 pb-16 sm:p-12 lg:p-16 max-w-full sm:max-w-4xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 leading-tight text-white">
                  NEW EDGE<br />
                  <span className="italic font-black" style={{
                  background: 'linear-gradient(to right, #fde047, #fbbf24)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>LAB</span><br />
                  
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
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3 leading-[1.2] text-black">
                  TECH{" "}
                  <motion.span className="inline-block bg-clip-text text-transparent" style={{
                  background: 'linear-gradient(to right, #fde047, #fbbf24)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }} whileInView={{
                  scale: [1, 1.05, 1]
                }} transition={{
                  duration: 1,
                  delay: 0.3
                }}>
                    INNOVATION
                  </motion.span>
                </h2>
                <motion.p className="text-sm sm:text-base text-gray-600 mt-4 leading-[1.6] max-w-3xl" variants={{
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
              }}>
                  LAB entwickelt, automatisiert und skaliert Technologielösungen. Von KI-Integration bis zur vollständigen Webentwicklung.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Sections */}
        {labServices.map((service, index) => {
        const Icon = service.icon;
        const isEven = index % 2 === 0;
        return <section key={index} className="py-12 sm:py-16" style={{
          background: index % 2 === 0 ? 'linear-gradient(to bottom right, white, rgba(253, 224, 71, 0.1), rgba(251, 191, 36, 0.1))' : 'linear-gradient(to bottom right, white, rgba(251, 191, 36, 0.1), rgba(253, 224, 71, 0.1))'
        }}>
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <motion.div initial="hidden" whileInView="visible" viewport={{
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
                  delayChildren: 0.1
                }
              }
            }} className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-start">
                  {/* Image - alternating left/right */}
                  <motion.div variants={{
                hidden: {
                  opacity: 0,
                  scale: 0.8
                },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.8
                  }
                }
              }} className={`hidden lg:block sticky top-24 ${isEven ? 'order-2' : 'order-1'}`}>
                    <motion.div whileHover={{
                  scale: 1.05,
                  rotate: isEven ? 2 : -2
                }} transition={{
                  type: "spring",
                  stiffness: 300
                }} className={`w-full h-96 bg-gradient-to-br ${service.gradient} rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      <motion.div animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }} transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}>
                        <Icon className="w-40 h-40 text-white drop-shadow-2xl" />
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* Content - alternating right/left */}
                  <div className={`space-y-6 ${isEven ? 'order-1' : 'order-2'}`}>
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
                      <motion.div whileHover={{
                    scale: 1.1,
                    rotate: 5
                  }} className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl bg-gradient-to-br ${service.gradient}`}>
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black">{service.title}</h2>
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
                }} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-[#fde047]/30">
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {service.description}
                      </p>
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
                }} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-[#fde047]/30">
                      <h3 className="text-xl sm:text-2xl font-black mb-4 text-black">Unsere Leistungen</h3>
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
                            <span>{detail}</span>
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
                  }}>
                        
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-2 text-black">
                Meet Our Agents
              </h2>
              <p className="text-base sm:text-lg lg:text-xl max-w-3xl text-gray-700 leading-relaxed">
                Unsere spezialisierten KI-Agenten arbeiten für Ihren Erfolg
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
                        <h3 className="text-xl sm:text-2xl font-bold text-black">
                          {agent.name}
                        </h3>
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
                          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                            {agent.description}
                          </p>
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
              <Button size="lg" className="bg-gradient-to-r from-[#fde047] to-[#fbbf24] hover:opacity-90 text-black px-12 py-6 rounded-xl font-bold text-lg shadow-xl transition-all duration-300 hover:scale-105" onClick={() => navigate('/products')}>
                Alle Agenten entdecken
              </Button>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 text-black relative overflow-hidden" style={{
        background: 'linear-gradient(to right, #fde047, #fbbf24, #fde047)'
      }}>
          <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Let´s innovate the edge</h2>
            <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4 text-gray-900">
              Gemeinsam entwickeln wir innovative Technologielösungen, die Ihr Unternehmen voranbringen.
            </p>
            <Button id="projekt-besprechen-btn" size="lg" className="bg-black text-white hover:bg-gray-800 text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 hover:scale-105 transition-all duration-300 hover:shadow-lg" onClick={() => setIsModalOpen(true)}>Loslegen!</Button>
          </div>
        </section>
      </div>

      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} accentColor="#fde047" gradientFrom="#fde047" gradientTo="#fbbf24" theme="lab" />
    </>;
};
export default Lab;