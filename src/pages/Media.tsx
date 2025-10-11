import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Megaphone, Video, Camera, Settings, Eye, TrendingUp, Search, Edit, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { ContactFormModal } from "@/components/ContactFormModal";
import { ServiceScrollSection } from "@/components/ServiceScrollSection";
import { Footer } from "@/components/Footer";
import { useHeroScrollAnimation } from "@/hooks/useHeroScrollAnimation";
const Media = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { container: heroContainer, style: heroStyle } = useHeroScrollAnimation();
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
  const mediaServices = [{
    title: "Content-Produktion & Creative Assets",
    description: "Wir produzieren markenorientierten Content mit spezialisierten Partnern – emotional, messbar und auf jede Plattform abgestimmt.",
    details: [{
      title: "Video- & Foto-Produktion",
      description: "Entwicklung und Umsetzung visueller Kampagneninhalte mit Storyline, Stil und markenkonformem Schnitt."
    }, {
      title: "Motion Graphics & Animationen",
      description: "Bewegtbild-Designs für Social, Ads und Produkt-Launches mit maximaler Wiedererkennbarkeit."
    }, {
      title: "Creative Assets für alle Plattformen",
      description: "Formatübergreifende Adaptionen für Social, Web und Performance-Marketing."
    }, {
      title: "Content-Strategie & Konzeption",
      description: "Leitidee, Themenstruktur und visuelle Guidelines für konsistente Markenkommunikation."
    }],
    icon: Settings,
    gradient: "from-[#3b82f6] to-[#06b6d4]",
    video: "/assets/media-launch-video.mp4"
  }, {
    title: "Social Media Management",
    description: "Gemeinsam mit erfahrenen Social- und Influencer-Agenturen entwickeln wir Strategien, die Communities aufbauen und Marken sichtbar machen.",
    details: [{
      title: "Community Management & Engagement",
      description: "Betreuung, Moderation und Dialogaufbau für aktive, markentreue Communities."
    }, {
      title: "Content-Planung & Publishing",
      description: "Redaktionslogik, Posting-Timing und Workflow-Koordination für effiziente Ausspielung."
    }, {
      title: "Performance-Analyse & Reporting",
      description: "Monitoring von Reichweite, Engagement und Wachstumskennzahlen."
    }, {
      title: "Influencer- & Creator-Kooperationen",
      description: "Auswahl, Briefing und Management authentischer Markenbotschafter:innen."
    }],
    icon: Eye,
    gradient: "from-[#06b6d4] to-[#3b82f6]",
    video: "/assets/media-content-video.mp4"
  }, {
    title: "Launch-Kampagnen & Performance-Marketing",
    description: "In Zusammenarbeit mit Performance-Agenturen gestalten wir datengetriebene Kampagnen, die Reichweite in Ergebnisse verwandeln.",
    details: [{
      title: "Launch-Strategien entwickeln",
      description: "Definition von Positionierung, Timing und Kommunikationszielen für Produkteinführungen."
    }, {
      title: "Paid Advertising & Campaign Management",
      description: "Steuerung und Optimierung plattformübergreifender Werbekampagnen."
    }, {
      title: "Conversion-Optimierung",
      description: "Analyse und Testing von Creatives, Landing Pages und Funnels zur Steigerung der Abschlussrate."
    }, {
      title: "A/B-Testing & Analytics",
      description: "Kontinuierliche Datenauswertung und KPI-Optimierung für skalierbare Performance."
    }],
    icon: TrendingUp,
    gradient: "from-[#3b82f6] to-[#06b6d4]",
    video: "/assets/media-section-video.mp4"
  }, {
    title: "Content-Marketing & Copywriting",
    description: "Mit erfahrenen Copy- und SEO-Partnern schaffen wir Texte und Storys, die Markenstimme, Sichtbarkeit und Wirkung vereinen.",
    details: [{
      title: "SEO-optimierte Texte & Landingpages",
      description: "Keyword-orientierte Inhalte, die Performance und Lesbarkeit vereinen."
    }, {
      title: "Storytelling & Marken-Narrative",
      description: "Entwicklung einer unverwechselbaren Sprachidentität für Kampagnen und Markenauftritte."
    }, {
      title: "Blog- & Artikel-Content",
      description: "Redaktionelle Formate zur Steigerung von Reichweite, Expertise und Markenautorität."
    }, {
      title: "E-Mail- & Funnel-Texte",
      description: "Automatisierte Textstrecken zur Leadgewinnung und Kundenbindung."
    }],
    icon: Search,
    gradient: "from-[#06b6d4] to-[#3b82f6]",
    video: "/assets/media-new-video.mp4"
  }];
  return <>
      <Helmet>
        <title>NEW EDGE MEDIA - Content Revolution & Strategic Reach | Performance Marketing</title>
        <meta name="description" content="NEW EDGE MEDIA produziert, veröffentlicht und steuert Content für maximale Wirkung. Von Strategie bis zur viralen Umsetzung - Content-Produktion und strategische Reichweite." />
        <meta name="keywords" content="Content Marketing, Social Media Management, Performance Marketing, Content Produktion, Launchkampagnen, Copywriting" />
        <link rel="canonical" href="https://new-edge.de/media" />
        <meta property="og:title" content="NEW EDGE MEDIA - Content Revolution" />
        <meta property="og:description" content="Content-Produktion und strategische Reichweite für Ihren Erfolg" />
        <meta property="og:url" content="https://new-edge.de/media" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <MobileNavigation onContactClick={scrollToContact} theme="light" />

        {/* Hero Section */}
        <section ref={heroContainer} className="relative w-full">
          <motion.div style={heroStyle} className="w-full relative h-[75vh] lg:h-auto lg:aspect-video">
            <div className="absolute inset-0 overflow-hidden" style={{
            background: 'linear-gradient(to bottom right, rgba(59, 130, 246, 0.3), rgba(6, 182, 212, 0.2), rgba(6, 182, 212, 0.1))'
          }}>
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
                aria-label="Media hero background video"
              >
                <source src="/assets/media-hero-video.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0" style={{
              background: 'linear-gradient(to top, rgba(59, 130, 246, 0.6), rgba(59, 130, 246, 0.2), transparent)'
            }} />
              
              <div className="absolute bottom-0 left-0 p-6 pb-20 sm:p-12 lg:p-16 max-w-full sm:max-w-4xl">
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 leading-tight text-white">
                  NEW EDGE<br />
                  <span className="italic font-black" style={{
                  background: 'linear-gradient(to right, #3b82f6, #06b6d4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>MEDIA</span><br />
                  
                </h1>
              </div>

              {/* Scroll Indicator */}
              <motion.div initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              delay: 1,
              duration: 0.5
            }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                <motion.div animate={{
                y: [0, 10, 0]
              }} transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }} className="flex flex-col items-center gap-2 cursor-pointer" onClick={() => window.scrollBy({
                top: window.innerHeight,
                behavior: 'smooth'
              })}>
                  <span className="text-white text-sm font-medium">Scroll</span>
                  <ChevronDown className="w-6 h-6 text-white" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
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
                <h2 className="text-h1 mb-3 text-black">
                  CONTENT{" "}
                  <motion.span className="inline-block bg-clip-text text-transparent" style={{
                  background: 'linear-gradient(to right, #3b82f6, #06b6d4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }} whileInView={{
                  scale: [1, 1.05, 1]
                }} transition={{
                  duration: 1,
                  delay: 0.3
                }}>
                    REVOLUTION
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
              }} className="text-body-lg text-gray-600 mt-4 max-w-3xl">MEDIA ist die kreative Kraft im Netzwerk. Gemeinsam mit spezialisierten Agenturen, Studios und Produzent:innen gestalten wir Content, Kampagnen und visuelle Erlebnisse.</motion.p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Sections */}
        {mediaServices.map((service, index) => {
        const Icon = service.icon;
        const isEven = index % 2 === 0;
        return <section key={index} className="py-12 sm:py-16" style={{
          background: index % 2 === 0 ? 'linear-gradient(to bottom right, white, rgba(59, 130, 246, 0.08), rgba(6, 182, 212, 0.08))' : 'linear-gradient(to bottom right, white, rgba(6, 182, 212, 0.08), rgba(59, 130, 246, 0.08))'
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
                      <motion.div whileHover={{
                    scale: 1.1,
                    rotate: 5
                  }} className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl bg-gradient-to-br ${service.gradient}`}>
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h2 className="text-h1 text-black">{service.title}</h2>
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
                }} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-[#3b82f6]/20 hover:shadow-xl hover:border-[#3b82f6]/30 transition-all duration-200">
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
                }} whileHover={{
                  scale: 1.02,
                  y: -5
                }} transition={{
                  type: "spring",
                  stiffness: 300
                }} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-[#3b82f6]/20 hover:shadow-xl hover:border-[#3b82f6]/30 transition-all duration-200">
                      <h3 className="text-xl mb-4 text-black sm:text-2xl font-bold">Unsere Leistungen</h3>
                      <ul className="text-sm sm:text-base text-gray-700 leading-relaxed space-y-4">
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
                              <div className="font-bold text-black mb-1">{detail.title}</div>
                              <div className="text-gray-600">{detail.description}</div>
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
                  }}>
                        
                      </motion.div>
                    </motion.div>
                  </div>
                </ServiceScrollSection>
              </div>
            </section>;
      })}

        {/* CTA Section */}
        <section className="py-12 sm:py-16 text-white relative overflow-hidden" style={{
        background: 'linear-gradient(to right, #3b82f6, #0ea5e9, #06b6d4)'
      }}>
          <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
            <h2 className="text-h1 mb-4 sm:mb-6">Bereit für den nächsten Schritt?</h2>
            <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              Lassen Sie uns gemeinsam Ihre Content-Strategie revolutionieren und nachhaltige Reichweite aufbauen.
            </p>
            <Button id="projekt-besprechen-btn" size="lg" className="bg-white hover:bg-gray-50 text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 hover:scale-[1.02] transition-all duration-200" style={{
            color: '#3b82f6'
          }} onClick={() => setIsModalOpen(true)}>
              Projekt starten
            </Button>
          </div>
        </section>

        <Footer />
      </div>

      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} accentColor="#3b82f6" gradientFrom="#3b82f6" gradientTo="#06b6d4" theme="media" />
    </>;
};
export default Media;