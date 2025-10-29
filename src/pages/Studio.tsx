import { useEffect, useState, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, Palette, Monitor, Package, Grid3x3, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { ContactFormModal } from "@/components/ContactFormModal";
import { ServiceScrollSection } from "@/components/ServiceScrollSection";

const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));
const Studio = () => {
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
  const studioServices = [{
    title: "Brand Foundation & Insights",
    description: "Wir analysieren Zielgruppen, Märkte und Wettbewerb, um Chancen und Differenzierungspotenziale sichtbar zu machen. Das Ergebnis ist ein klares Verständnis darüber, wo deine Marke steht – und wie sie sich wirkungsvoll positionieren kann.",
    details: [{
      title: "Zielgruppenanalyse",
      description: "Erforschung von Bedürfnissen, Pain Points und Entscheidungsfaktoren."
    }, {
      title: "Wettbewerbsanalyse",
      description: "Identifikation von Stärken, Schwächen und Chancen im Marktumfeld."
    }, {
      title: "Markenpotenzial-Bewertung",
      description: "Ableitung konkreter Differenzierungs- und Wachstumsfelder."
    }],
    icon: Sparkles,
    gradient: "from-[#a855f7] to-[#6366f1]"
  }, {
    title: "Brand Identity & Positioning",
    description: "Gemeinsam definieren wir den Kern deiner Marke: Werte, Vision und Nutzenversprechen. Daraus entsteht eine klare, emotionale und strategisch fundierte Markenidentität, die Orientierung und Vertrauen schafft.",
    details: [{
      title: "Markenwerte & Vision",
      description: "Definition von Haltung, Zweck und emotionaler Leitidee."
    }, {
      title: "Positionierung & Nutzenversprechen",
      description: "Entwicklung eines präzisen Kernstatements, das deine Marke differenziert."
    }, {
      title: "Brand Framework",
      description: "Dokumentation der zentralen Markenelemente für Strategie, Design und Kommunikation."
    }],
    icon: Package,
    gradient: "from-[#a855f7] to-[#6366f1]"
  }, {
    title: "Storytelling & Brand Roadmap",
    description: "Wir übersetzen Strategie in Sprache, Narrative und konkrete Handlungsschritte. So entsteht ein konsistentes Markenbild – mit einer klaren Story, messbaren Zielen und einem umsetzbaren Jahresplan.",
    details: [{
      title: "Brand Story & Messaging",
      description: "Entwicklung einer authentischen Markenstory und sprachlicher Leitlinien."
    }, {
      title: "Voice & Tone Guidelines",
      description: "Festlegung der Tonalität für alle Kanäle und Formate."
    }, {
      title: "Strategische Roadmap",
      description: "Prioritäten, Milestones und KPIs als klarer Fahrplan für Markenführung."
    }],
    icon: Grid3x3,
    gradient: "from-[#6366f1] to-[#a855f7]"
  }];
  return <>
      <Helmet>
        <title>NEW EDGE STUDIO - Design Excellence | Brand Strategy & Story</title>
        <meta name="description" content="NEW EDGE STUDIO liefert das strategische Fundament: Markenidentität, Brand Story, Template-Design und Nutzerführung für Ihre digitale Präsenz." />
        <meta name="keywords" content="Design Studio, Markenidentität, Brand Story, UI/UX Design, Template Design, Funnel Design" />
        <link rel="canonical" href="https://new-edge.de/studio" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <MobileNavigation onContactClick={scrollToContact} theme="light" />

        {/* Hero Section */}
        <section className="relative w-full">
          <div className="w-full relative h-[75vh] lg:h-auto lg:aspect-video">
            <div className="absolute inset-0 overflow-hidden" style={{
            background: 'linear-gradient(to bottom right, rgba(99, 102, 241, 0.3), rgba(168, 85, 247, 0.2), rgba(168, 85, 247, 0.1))'
          }}>
              <video autoPlay loop muted playsInline preload="metadata" className="absolute inset-0 w-full h-full object-cover" aria-label="Studio hero background video">
                <source src="/assets/studio-hero-background.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0" style={{
              background: 'linear-gradient(to top, rgba(99, 102, 241, 0.6), rgba(99, 102, 241, 0.2), transparent)'
            }} />
              
              <div className="absolute bottom-0 left-0 p-6 pb-20 sm:p-12 lg:p-16 max-w-full sm:max-w-4xl">
                <h1 className="text-h1 lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 leading-tight text-white">
                  NEW EDGE<br />
                  <span className="italic font-black" style={{
                  background: 'linear-gradient(to right, #6366f1, #a855f7)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>STUDIO</span><br />
                  
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
                  DESIGN{" "}
                  <motion.span className="inline-block bg-clip-text text-transparent" style={{
                  background: 'linear-gradient(to right, #6366f1, #a855f7)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }} whileInView={{
                  scale: [1, 1.05, 1]
                }} transition={{
                  duration: 1,
                  delay: 0.3
                }}>
                    EXCELLENCE
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
              }} className="text-body-lg text-gray-600 mt-4 max-w-3xl text-xl">STUDIO bildet das Fundament jeder Zusammenarbeit. Hier entwickeln wir Markenstrategien, Positionierungen und Identitäten – in enger Abstimmung mit ausgewählten Branding- und Research-Partnern, gesteuert durch das New Edge Team. </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Sections */}
        {studioServices.map((service, index) => {
        const Icon = service.icon;
        const isEven = index % 2 === 0;
        // Use specific videos for each section
        let videoSrc = "/assets/studio-service-video.mp4";
        if (index === 0) videoSrc = "/assets/brandstory-video.mp4"; // Brand Story
        if (index === 1) videoSrc = "/assets/template-video.mp4"; // Template-Rahmen
        if (index === 2) videoSrc = "/assets/wireframes-video.mp4"; // Nutzerführung & Wireframes
        return <section key={index} className="py-12 sm:py-16" style={{
          background: index % 2 === 0 ? 'linear-gradient(to bottom right, white, rgba(99, 102, 241, 0.08), rgba(168, 85, 247, 0.08))' : 'linear-gradient(to bottom right, white, rgba(168, 85, 247, 0.08), rgba(99, 102, 241, 0.08))'
        }}>
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <ServiceScrollSection gradient={service.gradient} videoSrc={videoSrc} imagePosition={isEven ? "right" : "left"}>
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
                  scale: 1.01,
                  y: -2
                }} transition={{
                  type: "spring",
                  stiffness: 300
                }} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-[#6366f1]/20 hover:shadow-xl hover:border-[#6366f1]/30 transition-all duration-200">
                      <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
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
                  scale: 1.01,
                  y: -2
                }} transition={{
                  type: "spring",
                  stiffness: 300
                }} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-[#6366f1]/20 hover:shadow-xl hover:border-[#6366f1]/30 transition-all duration-200">
                      <h3 className="text-h3 font-bold mb-4 text-black">Unsere Leistungen</h3>
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
                              <div className="font-semibold text-black mb-1">{detail.title}</div>
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
        background: 'linear-gradient(to right, #6366f1, #8b5cf6, #a855f7)'
      }}>
          <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
            <h2 className="text-h1 mb-4 sm:mb-6">Bereit für den nächsten Schritt?</h2>
            <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              Gemeinsam entwickeln wir ein Design, das Ihre Vision zum Leben erweckt und Ihre Zielgruppe begeistert.
            </p>
            <Button id="projekt-besprechen-btn" size="lg" className="bg-white hover:bg-gray-50 text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 hover:scale-[1.02] transition-all duration-200" style={{
            color: '#6366f1'
          }} onClick={() => setIsModalOpen(true)}>Loslegen!</Button>
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