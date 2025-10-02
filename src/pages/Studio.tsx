import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, Palette, Monitor, Package, Grid3x3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { ContactFormModal } from "@/components/ContactFormModal";

const Studio = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    navigate('/', { replace: true });
    setTimeout(() => {
      const contactSection = document.getElementById('contact-section');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const scrollToProjectButton = () => {
    const projectButton = document.getElementById('projekt-besprechen-btn');
    if (projectButton) {
      projectButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const studioServices = [
    {
      title: "Strategie & Markenidentität",
      description: "Strategische Markenpositionierung und Zielgruppenanalyse für eine klare Ausrichtung.",
      details: [
        "Zielgruppen- und Wettbewerbsanalyse",
        "Brand Positioning und Messaging",
        "Markenwerte und Vision definieren",
        "Strategische Roadmap entwickeln"
      ],
      icon: Palette,
      gradient: "from-[#6366f1] to-[#a855f7]"
    },
    {
      title: "Brand Story",
      description: "Authentische Markenstories mit klaren Werten und einzigartiger Tonalität.",
      details: [
        "Storytelling-Konzept entwickeln",
        "Tone of Voice definieren",
        "Emotionale Kundenbindung schaffen",
        "Konsistente Markennarrative"
      ],
      icon: Sparkles,
      gradient: "from-[#a855f7] to-[#6366f1]"
    },
    {
      title: "Template-Rahmen für Social Media & Print",
      description: "Einheitliche Vorlagen und digitale Struktur mit Funnel-Logik.",
      details: [
        "Social Media Templates gestalten",
        "Print-Designvorlagen erstellen",
        "Brand Guidelines dokumentieren",
        "Digitale Asset-Bibliothek aufbauen"
      ],
      icon: Package,
      gradient: "from-[#a855f7] to-[#6366f1]"
    },
    {
      title: "Nutzerführung & Funnel-Wireframes",
      description: "Conversion-Ziele und strategischer Seitenaufbau für maximale Effektivität.",
      details: [
        "User Journey Mapping",
        "Conversion-optimierte Wireframes",
        "Information Architecture",
        "Funnel-Strategien entwickeln"
      ],
      icon: Grid3x3,
      gradient: "from-[#6366f1] to-[#a855f7]"
    }
  ];

  return (
    <>
      <Helmet>
        <title>NEW EDGE STUDIO - Design Excellence | Strategie & Markenidentität</title>
        <meta name="description" content="NEW EDGE STUDIO liefert das strategische Fundament: Markenidentität, Brand Story, Template-Design und Nutzerführung für Ihre digitale Präsenz." />
        <meta name="keywords" content="Design Studio, Markenidentität, Brand Story, UI/UX Design, Template Design, Funnel Design" />
        <link rel="canonical" href="https://new-edge.de/studio" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <MobileNavigation onContactClick={scrollToContact} theme="light" />

        {/* Hero Section */}
        <section className="relative w-full" style={{ marginTop: '80px' }}>
          <div className="w-full" style={{ paddingTop: '56.25%', position: 'relative' }}>
            <div className="absolute inset-0 overflow-hidden" style={{ background: 'linear-gradient(to bottom right, rgba(99, 102, 241, 0.3), rgba(168, 85, 247, 0.2), rgba(168, 85, 247, 0.1))' }}>
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/assets/studio-hero-video.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(99, 102, 241, 0.6), rgba(99, 102, 241, 0.2), transparent)' }} />
              
              <div className="absolute bottom-0 left-0 p-8 sm:p-12 lg:p-16 max-w-4xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 leading-tight text-white">
                  NEW EDGE<br />
                  <span className="italic font-black" style={{ background: 'linear-gradient(to right, #6366f1, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>STUDIO</span><br />
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-normal">DESIGN EXCELLENCE</span>
                </h1>
                <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl leading-relaxed">
                  STUDIO liefert das Fundament: Alles wird strategisch vorbereitet, durchdacht und geplant. 
                  Für eine reibungslose Umsetzung in MEDIA & LAB.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Sections */}
        {studioServices.map((service, index) => {
          const Icon = service.icon;
          const isEven = index % 2 === 0;
          
          return (
            <section 
              key={index}
              className="py-12 sm:py-16"
              style={{ 
                background: index % 2 === 0 
                  ? 'linear-gradient(to bottom right, white, rgba(99, 102, 241, 0.08), rgba(168, 85, 247, 0.08))' 
                  : 'linear-gradient(to bottom right, white, rgba(168, 85, 247, 0.08), rgba(99, 102, 241, 0.08))'
              }}
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.15,
                        delayChildren: 0.1
                      }
                    }
                  }}
                  className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-start"
                >
                  {/* Image - alternating left/right */}
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
                    }}
                    className={`hidden lg:block sticky top-24 ${isEven ? 'order-2' : 'order-1'}`}
                  >
                    <motion.div 
                      whileHover={{ scale: 1.05, rotate: isEven ? 2 : -2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`w-full h-96 bg-gradient-to-br ${service.gradient} rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="w-full h-full object-cover rounded-2xl"
                      >
                        <source src="/assets/studio-service-video.mp4" type="video/mp4" />
                      </video>
                    </motion.div>
                  </motion.div>

                  {/* Content - alternating right/left */}
                  <div className={`space-y-6 ${isEven ? 'order-1' : 'order-2'}`}>
                    <motion.div 
                      variants={{
                        hidden: { opacity: 0, x: isEven ? -30 : 30 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
                      }}
                      className="flex items-center gap-4 mb-8"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl bg-gradient-to-br ${service.gradient}`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black">{service.title}</h2>
                    </motion.div>
                    
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                      }}
                       className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-[#6366f1]/20"
                    >
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {service.description}
                      </p>
                    </motion.div>

                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                      }}
                      className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-[#6366f1]/20"
                    >
                      <h3 className="text-xl sm:text-2xl font-black mb-4 text-black">Unsere Leistungen</h3>
                      <ul className="text-sm sm:text-base text-gray-700 leading-relaxed space-y-3">
                        {service.details.map((detail, idx) => (
                          <motion.li 
                            key={idx}
                            variants={{
                              hidden: { opacity: 0, x: -20 },
                              visible: { opacity: 1, x: 0 }
                            }}
                            className="flex gap-3"
                          >
                            <span className={`flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-r ${service.gradient} text-white flex items-center justify-center text-sm font-bold`}>
                              {idx + 1}
                            </span>
                            <span>{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                      }}
                    >
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button 
                          size="lg" 
                          className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white px-8 py-6 rounded-xl font-bold text-lg shadow-xl transition-all duration-300`}
                          onClick={scrollToProjectButton}
                        >
                          Jetzt starten
                        </Button>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </section>
          );
        })}

        {/* CTA Section */}
        <section className="py-12 sm:py-16 text-white relative overflow-hidden" style={{ background: 'linear-gradient(to right, #6366f1, #8b5cf6, #a855f7)' }}>
          <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Let´s design the edge</h2>
            <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              Gemeinsam entwickeln wir ein Design, das Ihre Vision zum Leben erweckt und Ihre Zielgruppe begeistert.
            </p>
            <Button 
              id="projekt-besprechen-btn"
              size="lg" 
              className="bg-white hover:bg-gray-100 text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 hover:scale-105 transition-all duration-300 hover:shadow-lg"
              style={{ color: '#6366f1' }}
              onClick={() => setIsModalOpen(true)}
            >
              Design-Projekt starten
            </Button>
          </div>
        </section>
      </div>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        accentColor="#6366f1"
        gradientFrom="#6366f1"
        gradientTo="#a855f7"
        theme="studio"
      />
    </>
  );
};

export default Studio;
