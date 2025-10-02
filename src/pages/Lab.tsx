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

  const labServices = [
    {
      title: "KI-gestützte Prozessautomatisierung",
      description: "Optimierung und Automatisierung operativer Aufgaben durch künstliche Intelligenz.",
      details: [
        "Workflow-Analyse und Optimierung",
        "Automatisierte Entscheidungsprozesse",
        "Intelligente Datenverarbeitung",
        "Zeit- und Kostenersparnis maximieren"
      ],
      icon: Cpu,
      gradient: "from-[#fde047] to-[#fbbf24]"
    },
    {
      title: "Webentwicklung",
      description: "CMS, Landingpages, Funnels - maßgeschneiderte Weblösungen für Ihren Erfolg.",
      details: [
        "Content Management Systeme",
        "Conversion-optimierte Landingpages",
        "Sales Funnel Entwicklung",
        "Responsive und performant"
      ],
      icon: Globe,
      gradient: "from-[#fbbf24] to-[#fde047]"
    },
    {
      title: "KI-Agenten-Integration",
      description: "Text, Mail, CRM - intelligente Agenten für automatisierte Kommunikation und Verwaltung.",
      details: [
        "Chatbot-Entwicklung und Integration",
        "E-Mail-Automatisierung mit KI",
        "CRM-Integration und -Optimierung",
        "24/7 automatisierter Kundenservice"
      ],
      icon: Bot,
      gradient: "from-[#fde047] to-[#fbbf24]"
    },
    {
      title: "Tracking- & Analyse-Setups",
      description: "GA4, Tag Manager, Pixel, Dashboards - umfassende Datenanalyse und Reporting.",
      details: [
        "Google Analytics 4 Setup",
        "Tag Manager Konfiguration",
        "Custom Dashboard Entwicklung",
        "Datengetriebene Entscheidungen"
      ],
      icon: BarChart3,
      gradient: "from-[#fbbf24] to-[#fde047]"
    }
  ];

  return (
    <>
      <Helmet>
        <title>NEW EDGE LAB - Tech Innovation | KI & Webentwicklung</title>
        <meta name="description" content="NEW EDGE LAB entwickelt innovative KI-Lösungen und maßgeschneiderte Webanwendungen. Von Prozessautomatisierung bis Analytics - Technologie für Ihren Erfolg." />
        <meta name="keywords" content="KI Entwicklung, Webentwicklung, Prozessautomatisierung, KI Agenten, Analytics, Tech Innovation" />
        <link rel="canonical" href="https://new-edge.de/lab" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <MobileNavigation onContactClick={scrollToContact} theme="light" />

        {/* Hero Section */}
        <section className="relative w-full" style={{ marginTop: '80px' }}>
          <div className="w-full" style={{ paddingTop: '56.25%', position: 'relative' }}>
            <div className="absolute inset-0 overflow-hidden" style={{ background: 'linear-gradient(to bottom right, rgba(253, 224, 71, 0.3), rgba(251, 191, 36, 0.2), rgba(251, 191, 36, 0.1))' }}>
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/assets/lab-hero-video.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(251, 146, 60, 0.4), rgba(251, 191, 36, 0.2), transparent)' }} />
              
              <div className="absolute bottom-0 left-0 p-8 sm:p-12 lg:p-16 max-w-4xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 leading-tight text-white">
                  NEW EDGE<br />
                  <span className="italic font-black" style={{ background: 'linear-gradient(to right, #fde047, #fbbf24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>LAB</span><br />
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-normal">TECH INNOVATION</span>
                </h1>
                <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl leading-relaxed">
                  LAB entwickelt, automatisiert und skaliert Technologielösungen. 
                  Von KI-Integration bis zur vollständigen Webentwicklung.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Sections */}
        {labServices.map((service, index) => {
          const Icon = service.icon;
          const isEven = index % 2 === 0;
          
          return (
            <section 
              key={index}
              className="py-12 sm:py-16"
              style={{ 
                background: index % 2 === 0 
                  ? 'linear-gradient(to bottom right, white, rgba(253, 224, 71, 0.1), rgba(251, 191, 36, 0.1))' 
                  : 'linear-gradient(to bottom right, white, rgba(251, 191, 36, 0.1), rgba(253, 224, 71, 0.1))'
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
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ 
                          duration: 5, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Icon className="w-40 h-40 text-white drop-shadow-2xl" />
                      </motion.div>
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
                       className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-[#fde047]/30"
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
                      className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-[#fde047]/30"
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

        {/* Meet Our Agents Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-white via-yellow-50/30 to-orange-50/30 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 text-black">
                Meet Our Agents
              </h2>
              <p className="text-base sm:text-lg lg:text-xl mb-12 max-w-3xl mx-auto text-gray-700 leading-relaxed">
                Unsere spezialisierten KI-Agenten arbeiten für Ihren Erfolg
              </p>
            </motion.div>

            {/* Agents Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 max-w-7xl mx-auto">
              {/* Riley */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative w-full aspect-square rounded-full overflow-hidden shadow-2xl">
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src="/assets/products-hero-video.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/40 to-transparent flex items-end justify-center pb-6">
                    <div className="text-center">
                      <Lightbulb className="w-10 h-10 text-white mx-auto mb-2" />
                      <span className="text-white font-black text-xl">Riley</span>
                      <p className="text-white/90 text-sm mt-1">Wissensagent</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Liam */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative w-full aspect-square rounded-full overflow-hidden shadow-2xl">
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src="/assets/liam-video.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 via-pink-900/40 to-transparent flex items-end justify-center pb-6">
                    <div className="text-center">
                      <Bot className="w-10 h-10 text-white mx-auto mb-2" />
                      <span className="text-white font-black text-xl">Liam</span>
                      <p className="text-white/90 text-sm mt-1">Lead-Gen-Agent</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Vera */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative w-full aspect-square rounded-full overflow-hidden shadow-2xl">
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src="/assets/vera-agent-video.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 via-cyan-900/40 to-transparent flex items-end justify-center pb-6">
                    <div className="text-center">
                      <Phone className="w-10 h-10 text-white mx-auto mb-2" />
                      <span className="text-white font-black text-xl">Vera</span>
                      <p className="text-white/90 text-sm mt-1">Voice-Agent</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Cora */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative w-full aspect-square rounded-full overflow-hidden shadow-2xl">
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src="/assets/cora-agent-video.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 via-orange-900/40 to-transparent flex items-end justify-center pb-6">
                    <div className="text-center">
                      <FileText className="w-10 h-10 text-white mx-auto mb-2" />
                      <span className="text-white font-black text-xl">Cora</span>
                      <p className="text-white/90 text-sm mt-1">Content-Agent</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#fde047] to-[#fbbf24] hover:opacity-90 text-black px-12 py-6 rounded-xl font-bold text-lg shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => navigate('/products')}
              >
                Alle Agenten entdecken
              </Button>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 text-black relative overflow-hidden" style={{ background: 'linear-gradient(to right, #fde047, #fbbf24, #fde047)' }}>
          <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Let´s innovate the edge</h2>
            <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4 text-gray-900">
              Gemeinsam entwickeln wir innovative Technologielösungen, die Ihr Unternehmen voranbringen.
            </p>
            <Button 
              id="projekt-besprechen-btn"
              size="lg" 
              className="bg-black text-white hover:bg-gray-800 text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 hover:scale-105 transition-all duration-300 hover:shadow-lg"
              onClick={() => setIsModalOpen(true)}
            >
              Projekt besprechen
            </Button>
          </div>
        </section>
      </div>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        accentColor="#fde047"
        gradientFrom="#fde047"
        gradientTo="#fbbf24"
        theme="lab"
      />
    </>
  );
};

export default Lab;
