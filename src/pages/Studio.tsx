import { useEffect, useState, lazy, Suspense } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Palette, BookOpen, Plus, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from 'react-helmet-async';
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
  const studioServices = [{
    title: "Brand Strategy - Brand Foundation & Insights",
    outcome: "Eine differenzierte, messbare und strategisch fundierte Markenbasis, die alle zukuenftigen Entscheidungen leitet.",
    problem: "Unternehmen fehlt haeufig eine klare Positionierung, Differenzierung und ein strategisches Zentrum. Dadurch entsteht kommunikative Inkonsistenz und verlorenes Marktpotenzial.",
    solution: "AI-gestuetzte Research-Methoden, tiefes Markenverstaendnis und ein strukturierter Strategie-Prozess. Wir definieren Brand Core, Value Proposition und die strategische Roadmap, die dein Wachstum steuert.",
    deliverables: ["Personas & Customer Insights", "Positioning Map", "Differentiation Guide", "Brand Core (Purpose, Vision, Mission)", "Strategische Roadmap (12 Monate)"],
    icon: BookOpen,
    gradient: "from-[#6366f1] to-[#a855f7]"
  }, {
    title: "Brand Identity - Identity & Positioning",
    outcome: "Ein konsistentes, emotionales und skalierbares Designsystem, das Marken sichtbar und unverwechselbar macht.",
    problem: "Viele Marken wirken austauschbar, verlieren an Wiedererkennung und Vertrauen.",
    solution: "Ein Brand System, das Stil, Haltung und Differenzierung transportiert - gestuetzt durch einheitliche Designrichtlinien und AI-gestuetzte Visual Frameworks.",
    deliverables: ["Logo-System", "Farb- & Typografie-System", "UX/UI-Grundlagen", "Visual Language", "Brand Book", "Brand Story & Messaging", "Voice & Tone Guidelines"],
    icon: Palette,
    gradient: "from-[#a855f7] to-[#6366f1]"
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
        <title>NEW EDGE STUDIO - Marken mit Relevanz, Klarheit und kreativer Dominanz</title>
        <meta name="description" content="New Edge Studio vereint Strategie, Design und Technologie zu einem kreativen Kern, der Marken transformiert. Wir schaffen Systeme, die Haltung, Aesthetik und messbaren Impact verbinden." />
        <meta name="keywords" content="Brand Strategy, Brand Identity, Markenidentitaet, Brand Story, Design System, Positionierung" />
        <link rel="canonical" href="https://new-edge.de/studio" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <MobileNavigation onContactClick={scrollToContact} theme="light" />

        {/* Hero Section */}
        <section className="relative w-full">
          <div className="w-full relative h-[85vh] lg:h-auto lg:aspect-video">
            <div className="absolute inset-0 overflow-hidden" style={{
            background: 'linear-gradient(to bottom right, rgba(99, 102, 241, 0.3), rgba(168, 85, 247, 0.2), rgba(168, 85, 247, 0.1))'
          }}>
              <LazyVideo src="/assets/studio-hero-background.mp4" autoPlay loop muted playsInline preload="none" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0" style={{
              background: 'linear-gradient(to top, rgba(99, 102, 241, 0.6), rgba(99, 102, 241, 0.2), transparent)'
            }} />
              
              <div className="absolute bottom-0 left-0 p-6 pb-8 sm:pb-12 sm:p-12 lg:p-16 max-w-full sm:max-w-4xl">
                <h1 className="text-h1 lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 leading-tight text-white">
                  NEW EDGE<br />
                  <span className="italic font-black" style={{
                  background: 'linear-gradient(to right, #6366f1, #a855f7)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>STUDIO</span>
                </h1>
                <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-white/90 max-w-3xl leading-relaxed">
                  Wir bauen Marken, die in einer AI-getriebenen Welt Relevanz, Klarheit und kreative Dominanz gewinnen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="relative py-16 sm:py-24 bg-white">
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
              }} className="text-body-lg text-gray-600 mt-6 max-w-3xl text-xl leading-relaxed">
                  New Edge Studio vereint Strategie, Design und Technologie zu einem kreativen Kern, der Marken transformiert. 
                  Wir schaffen Systeme, die Haltung, Aesthetik und messbaren Impact verbinden - von der strategischen Basis bis zur visuellen Exzellenz.
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
        return <section key={index} className="py-16 sm:py-24" style={{
          background: index % 2 === 0 ? 'linear-gradient(to bottom right, white, rgba(99, 102, 241, 0.08), rgba(168, 85, 247, 0.08))' : 'linear-gradient(to bottom right, white, rgba(168, 85, 247, 0.08), rgba(99, 102, 241, 0.08))'
        }}>
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <ServiceScrollSection 
                  gradient={service.gradient} 
                  videoSrc={videoSrc} 
                  imagePosition={isEven ? "right" : "left"}
                  animationBelow={index === 0 ? <BrandStrategyAnimation /> : <BrandIdentityAnimation />}
                >
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
                    }} className="bg-gradient-to-r from-[#6366f1]/10 to-[#a855f7]/10 backdrop-blur-sm p-6 rounded-2xl border border-[#6366f1]/20">
                      <p className="text-gray-700 leading-relaxed">{service.outcome}</p>
                    </motion.div>

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
                    }} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-[#6366f1]/20">
                      <p className="text-gray-600 leading-relaxed">{service.problem}</p>
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
                    }} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-[#6366f1]/20">
                      <p className="text-gray-600 leading-relaxed">{service.solution}</p>
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
                    }} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-[#6366f1]/20">
                      <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Deliverables</h4>
                      <div className="space-y-3">
                        {service.deliverables.map((item, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                            whileHover={{ x: 6 }}
                            className="flex items-center gap-4 group cursor-default"
                          >
                            <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white text-sm font-bold shadow-md group-hover:scale-110 transition-transform duration-200`}>
                              {idx + 1}
                            </span>
                            <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200 font-medium">
                              {item}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </ServiceScrollSection>
              </div>
            </section>;
      })}

        {/* Studio Cases Section */}
        <section className="relative py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            {/* Header */}
            <div className="flex items-end justify-between mb-12">
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
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] text-black">
                  Studio Cases.
                  <br />
                  <span style={{
                  background: 'linear-gradient(to right, #6366f1, #a855f7)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Marken, die wirken.</span>
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
                <Link to="/case-studies" className="inline-flex items-center gap-2 text-lg font-bold text-black hover:text-[#6366f1] transition-colors duration-300">
                  ALLE CASES
                  <ArrowUpRight className="w-6 h-6" />
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
            }} className="flex-shrink-0 w-[75%] snap-start md:w-auto">
                  <Link to={caseStudy.route} className="block group">
                    <div className="relative overflow-hidden aspect-square bg-gray-100">
                      <img src={caseStudy.image} alt={caseStudy.headline} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-black/20" />
                      
                      <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                        <Plus className="w-12 h-12 text-white" strokeWidth={2} />
                      </div>
                      
                      <div className="absolute inset-0 bg-[#6366f1] opacity-0 group-hover:opacity-95 transition-all duration-300 flex flex-col justify-between p-6">
                        <div className="w-16 h-1 bg-white" />
                        
                        <div className="space-y-3">
                          <span className="text-xs font-bold text-white/80 uppercase tracking-wider">
                            {caseStudy.client}
                          </span>
                          <h3 className="text-2xl font-bold text-white leading-tight">
                            {caseStudy.headline}
                          </h3>
                          <div className="flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all duration-300">
                            <span className="underline">Case ansehen</span>
                            <ArrowUpRight className="w-5 h-5" />
                          </div>
                        </div>
                        
                        <div>
                          <span className="inline-block border border-white/80 px-4 py-1.5 text-xs font-bold text-white uppercase tracking-wider">
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
        <section className="py-16 sm:py-24 text-white relative overflow-hidden" style={{
        background: 'linear-gradient(to right, #6366f1, #8b5cf6, #a855f7)'
      }}>
          <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
            <h2 className="text-h1 mb-4 sm:mb-6">Bereit fuer den naechsten Schritt?</h2>
            <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              Gemeinsam entwickeln wir eine Marke, die Haltung zeigt und in einer AI-getriebenen Welt Relevanz gewinnt.
            </p>
            <Button id="projekt-besprechen-btn" size="lg" className="bg-white hover:bg-gray-50 text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 hover:scale-[1.02] transition-all duration-200" style={{
            color: '#6366f1'
          }} onClick={() => setIsModalOpen(true)}>
              Loslegen!
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