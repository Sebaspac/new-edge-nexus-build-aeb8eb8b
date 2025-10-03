import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Megaphone, Video, Camera, Settings, Eye, TrendingUp, Search, Edit, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { ContactFormModal } from "@/components/ContactFormModal";
import { ServiceScrollSection } from "@/components/ServiceScrollSection";
const Media = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    title: "Content-Produktion & Creative Asset",
    description: "Strategische Content-Produktion für maximale Wirkung auf allen Kanälen.",
    details: ["Video- und Foto-Content-Produktion", "Motion Graphics und Animationen", "Creative Assets für alle Plattformen", "Content-Strategie und Konzeption"],
    icon: Settings,
    gradient: "from-[#3b82f6] to-[#06b6d4]"
  }, {
    title: "Social Media Management",
    description: "Community- und Content-Management für starke Markenbindung auf allen Kanälen.",
    details: ["Community Management und Engagement", "Content-Planung und Publishing", "Performance-Analyse und Reporting", "Influencer-Kooperationen"],
    icon: Eye,
    gradient: "from-[#06b6d4] to-[#3b82f6]"
  }, {
    title: "Launchkampagnen & Performance-Marketing",
    description: "Erfolgreiche Produktlaunches und datengetriebenes Performance-Marketing.",
    details: ["Launch-Strategien entwickeln", "Paid Advertising Kampagnen", "Conversion-Optimierung", "A/B-Testing und Analytics"],
    icon: TrendingUp,
    gradient: "from-[#3b82f6] to-[#06b6d4]"
  }, {
    title: "Content-Marketing & Copywriting",
    description: "Gestaltung relevanter Inhalte und klarer Botschaften für mehr Sichtbarkeit und Markenwirkung.",
    details: ["SEO-optimierte Texte erstellen", "Storytelling und Narratives", "Blog- und Artikel-Content", "E-Mail-Marketing-Texte"],
    icon: Search,
    gradient: "from-[#06b6d4] to-[#3b82f6]"
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
        <section className="relative w-full mt-20">
          <div className="w-full relative" style={{
          paddingTop: '56.25%',
          // 16:9 aspect ratio
          position: 'relative'
        }}>
            <div className="absolute inset-0 overflow-hidden" style={{
            background: 'linear-gradient(to bottom right, rgba(59, 130, 246, 0.3), rgba(6, 182, 212, 0.2), rgba(6, 182, 212, 0.1))'
          }}>
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
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
              }} className="text-sm text-gray-600 mt-4 leading-[1.6] max-w-3xl sm:text-xl">
                  MEDIA produziert, veröffentlicht und steuert alles, was nach außen sichtbar wird. Ab Strategie bis zur viralen Umsetzung.
                </motion.p>
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
                <ServiceScrollSection gradient={service.gradient} videoSrc="/assets/media-section-video.mp4" imagePosition={isEven ? "right" : "left"}>
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
                }} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-[#3b82f6]/20">
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
                }} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-[#3b82f6]/20">
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
                </ServiceScrollSection>
              </div>
            </section>;
      })}

        {/* CTA Section */}
        <section className="py-12 sm:py-16 text-white relative overflow-hidden" style={{
        background: 'linear-gradient(to right, #3b82f6, #0ea5e9, #06b6d4)'
      }}>
          <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Bereit für den nächsten Schritt?</h2>
            <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              Lassen Sie uns gemeinsam Ihre Content-Strategie revolutionieren und nachhaltige Reichweite aufbauen.
            </p>
            <Button id="projekt-besprechen-btn" size="lg" className="bg-white hover:bg-gray-100 text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 hover:scale-105 transition-all duration-300 hover:shadow-lg" style={{
            color: '#3b82f6'
          }} onClick={() => setIsModalOpen(true)}>
              Projekt starten
            </Button>
          </div>
        </section>
      </div>

      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} accentColor="#3b82f6" gradientFrom="#3b82f6" gradientTo="#06b6d4" theme="media" />
    </>;
};
export default Media;