import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bot, Phone, FileText, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
const Products = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
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
  return <>
      <Helmet>
        <title>NEW EDGE Produkte - KI-Agenten für Ihr Business</title>
        <meta name="description" content="Entdecken Sie unsere KI-Agenten: Riley (Wissensagent), Liam (Lead-Gen), Vera (Voice-Agent), Cora (Content-Agent) und Agent Hub mit 8+ spezialisierten KI-Agenten." />
        <meta name="keywords" content="KI Agenten, Riley, Liam, Vera, Cora, Agent Hub, RAG, Lead Generation, Voice AI, Content AI" />
        <link rel="canonical" href="https://new-edge.de/products" />
        <link rel="preload" href="/assets/hero-video.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/assets/products-hero-video.mp4" as="video" type="video/mp4" />
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
            {/* 16:9 Aspect Ratio Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background overflow-hidden">
              {/* Background Video */}
              <video autoPlay loop muted playsInline preload="auto" className="absolute inset-0 w-full h-full object-cover">
                <source src="/assets/hero-video.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              {/* Text Content - Bottom Left */}
              <div className="absolute bottom-0 left-0 p-8 sm:p-12 lg:p-16 max-w-4xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 leading-tight text-white">
                  UNSERE<br />
                  KI-AGENTEN<br />
                  
                </h1>
                
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
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
                <h2 className="text-[42px] sm:text-[44px] lg:text-[48px] font-semibold mb-3 leading-[1.25] text-black">
                  INTELLIGENTE{" "}
                  <motion.span className="inline-block bg-clip-text text-transparent" style={{
                  background: 'linear-gradient(to right, #9F91F8, #4F97F0)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }} whileInView={{
                  scale: [1, 1.05, 1]
                }} transition={{
                  duration: 1,
                  delay: 0.3
                }}>
                    KI-AGENTEN
                  </motion.span>
                </h2>
                <motion.p className="text-base text-gray-600 mt-4 leading-[1.5] max-w-3xl" variants={{
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
                  Unsere spezialisierten KI-Agenten automatisieren Ihre Prozesse, verbessern Effizienz und steigern Produktivität. Von Wissensmanagement bis Content-Erstellung – maßgeschneiderte Lösungen für Ihr Business.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Riley - Wissensagent */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30">
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
          }} className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-start pb-12 sm:pb-16">
              <div className="space-y-6">
                <motion.div variants={{
                hidden: {
                  opacity: 0,
                  x: -30
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
                }} className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl" style={{
                  background: 'linear-gradient(135deg, #9F91F8, #4F97F0)'
                }}>
                    <Lightbulb className="w-8 h-8 text-white" />
                  </motion.div>
                  <h2 className="text-[42px] sm:text-[44px] lg:text-[48px] font-semibold text-black leading-[1.25]">Riley – Ihr Wissensagent</h2>
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
              }} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-purple-100">
                  <h3 className="text-[28px] sm:text-[30px] lg:text-[32px] font-medium mb-4 text-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent leading-[1.3]">Was macht Riley?</h3>
                  <p className="text-base text-gray-700 leading-[1.5]">
                    Riley nutzt Retrieval‑Augmented Generation (RAG), um präzise, kontextbezogene Antworten aus Ihrer firmeneigenen Wissensbasis zu liefern. Er durchsucht Dokumente, Handbücher und FAQs, extrahiert relevante Informationen und formuliert daraus verständliche Antworten. Der Einsatz von RAG verringert Halluzinationen und schafft mehr Vertrauen in die Ergebnisse.
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
              }} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-purple-100">
                  <h3 className="text-[28px] sm:text-[30px] lg:text-[32px] font-medium mb-4 text-black leading-[1.3]">So funktioniert Riley</h3>
                  <ol className="text-base text-gray-700 leading-[1.5] space-y-3">
                    <motion.li variants={{
                    hidden: {
                      opacity: 0,
                      x: -20
                    },
                    visible: {
                      opacity: 1,
                      x: 0
                    }
                  }} className="flex gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white flex items-center justify-center text-sm font-bold">1</span>
                      <span><strong>Daten sammeln & organisieren:</strong> Alle wichtigen Dokumente, FAQs und Anleitungen werden in einer zentralen Wissensbasis gespeichert.</span>
                    </motion.li>
                    <motion.li variants={{
                    hidden: {
                      opacity: 0,
                      x: -20
                    },
                    visible: {
                      opacity: 1,
                      x: 0
                    }
                  }} className="flex gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white flex items-center justify-center text-sm font-bold">2</span>
                      <span><strong>Recherche & Analyse:</strong> Riley identifiziert die relevanten Abschnitte und bringt sie in den richtigen Kontext.</span>
                    </motion.li>
                    <motion.li variants={{
                    hidden: {
                      opacity: 0,
                      x: -20
                    },
                    visible: {
                      opacity: 1,
                      x: 0
                    }
                  }} className="flex gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white flex items-center justify-center text-sm font-bold">3</span>
                      <span><strong>Generieren & Antworten:</strong> Das Sprachmodell erstellt daraus eine verständliche, hochwertige Antwort.</span>
                    </motion.li>
                    <motion.li variants={{
                    hidden: {
                      opacity: 0,
                      x: -20
                    },
                    visible: {
                      opacity: 1,
                      x: 0
                    }
                  }} className="flex gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white flex items-center justify-center text-sm font-bold">4</span>
                      <span><strong>Lernen & verbessern:</strong> Nutzerfeedback fließt in die Optimierung ein; so werden Antworten stetig präziser.</span>
                    </motion.li>
                  </ol>
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
              }} className="bg-gradient-to-br from-purple-600 to-blue-600 p-6 rounded-2xl shadow-xl text-white">
                  <h3 className="text-[28px] sm:text-[30px] lg:text-[32px] font-medium mb-4 leading-[1.3]">Ihre Vorteile mit Riley</h3>
                  <ul className="text-base leading-[1.5] space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-2xl">✓</span>
                      <span>Verlässliche und aktuelle Informationen anstelle von Halluzinationen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-2xl">✓</span>
                      <span>Schneller Zugriff auf verborgenes Wissen und weniger Suchaufwand</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-2xl">✓</span>
                      <span>Maßgeschneiderte Antworten für Ihr Team und Ihre Kunden</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-2xl">✓</span>
                      <span>Integration in bestehende Systeme wie Chat- oder CRM‑Tools</span>
                    </li>
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
              }} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-purple-100">
                  <h3 className="text-[28px] sm:text-[30px] lg:text-[32px] font-medium mb-4 text-black leading-[1.3]">Riley in der Praxis</h3>
                  <p className="text-base text-gray-700 leading-[1.5] mb-6">
                    Ein neuer Mitarbeiter stellt im internen Chat Fragen zum Onboarding. Riley greift auf Handbücher und FAQs zu, liefert sofort die korrekte Antwort und verkürzt so die Einarbeitungszeit.
                  </p>

                  <motion.div whileHover={{
                  scale: 1.02
                }} whileTap={{
                  scale: 0.98
                }}>
                    <Button size="lg" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 rounded-xl font-bold text-lg shadow-xl transition-all duration-300" onClick={scrollToContact}>
                      Jetzt mit Riley starten
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
              
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
            }} className="hidden lg:block sticky top-24">
                <motion.div whileHover={{
                scale: 1.05,
                rotate: 2
              }} transition={{
                type: "spring",
                stiffness: 300
              }} className="w-full h-96 bg-gradient-to-br from-purple-500 via-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden">
                  <video autoPlay loop muted playsInline preload="auto" className="absolute inset-0 w-full h-full object-cover">
                    <source src="/assets/products-hero-video.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Liam - Lead-Gen-Agent */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
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
          }} className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-start pb-12 sm:pb-16">
              {/* Image Left */}
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
            }} className="hidden lg:block sticky top-24 order-2 lg:order-1">
                <motion.div whileHover={{
                scale: 1.05,
                rotate: -2
              }} transition={{
                type: "spring",
                stiffness: 300
              }} className="w-full h-96 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden">
                  <video autoPlay loop muted playsInline preload="auto" className="absolute inset-0 w-full h-full object-cover">
                    <source src="/assets/liam-video.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
              </motion.div>

              {/* Text Right */}
              <div className="space-y-6 order-1 lg:order-2">
                <motion.div variants={{
                hidden: {
                  opacity: 0,
                  x: 30
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
                }} className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl" style={{
                  background: 'linear-gradient(135deg, #a855f7, #ec4899)'
                }}>
                    <Bot className="w-8 h-8 text-white" />
                  </motion.div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black">Liam – Ihr Lead‑Gen‑Agent</h2>
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
              }} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-purple-100">
                  <h3 className="text-xl sm:text-2xl font-black mb-4 text-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Was macht Liam?</h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Liam automatisiert Ihre Lead‑Generierung. Er kombiniert Chatbots, Segmentierung, Predictive Lead Scoring und automatisierte E‑Mail‑Kampagnen. Dadurch identifiziert und pflegt er wertvolle Kontakte, während Ihr Vertrieb sich auf Abschlüsse konzentriert. KI‑gestützte Lead‑Generierung steigert Effizienz, verbessert die Lead‑Qualität und ermöglicht hyperpersonalisierte Ansprache.
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
              }} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-purple-100">
                  <h3 className="text-xl sm:text-2xl font-black mb-4 text-black">So funktioniert Liam</h3>
                  <ol className="text-sm sm:text-base text-gray-700 leading-relaxed space-y-3">
                    <motion.li variants={{
                    hidden: {
                      opacity: 0,
                      x: -20
                    },
                    visible: {
                      opacity: 1,
                      x: 0
                    }
                  }} className="flex gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center text-sm font-bold">1</span>
                      <span><strong>Erkennen & Segmentieren:</strong> Liam analysiert Website‑Besucher und teilt sie in Zielgruppen ein.</span>
                    </motion.li>
                    <motion.li variants={{
                    hidden: {
                      opacity: 0,
                      x: -20
                    },
                    visible: {
                      opacity: 1,
                      x: 0
                    }
                  }} className="flex gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center text-sm font-bold">2</span>
                      <span><strong>Interagieren & Qualifizieren:</strong> Ein Chatbot begrüßt Interessenten, beantwortet Fragen und erfasst Kontaktdaten samt Lead‑Score.</span>
                    </motion.li>
                    <motion.li variants={{
                    hidden: {
                      opacity: 0,
                      x: -20
                    },
                    visible: {
                      opacity: 1,
                      x: 0
                    }
                  }} className="flex gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center text-sm font-bold">3</span>
                      <span><strong>Nurturing & Personalisierung:</strong> Automatisierte E‑Mails und Nachrichten liefern passende Inhalte und pflegen den Kontakt.</span>
                    </motion.li>
                    <motion.li variants={{
                    hidden: {
                      opacity: 0,
                      x: -20
                    },
                    visible: {
                      opacity: 1,
                      x: 0
                    }
                  }} className="flex gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center text-sm font-bold">4</span>
                      <span><strong>Übergabe an den Vertrieb:</strong> Heiß qualifizierte Leads werden mit Scoring und Empfehlungen an Ihr Team übergeben.</span>
                    </motion.li>
                  </ol>
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
              }} className="bg-gradient-to-br from-purple-600 to-pink-600 p-6 rounded-2xl shadow-xl text-white">
                  <h3 className="text-xl sm:text-2xl font-black mb-4">Ihre Vorteile mit Liam</h3>
                  <ul className="text-sm sm:text-base leading-relaxed space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-2xl">✓</span>
                      <span>Effizienz und Skalierbarkeit – Liam arbeitet 24/7 und verpasst keinen Besucher</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-2xl">✓</span>
                      <span>Präzises Lead‑Scoring und gezielte Segmentierung für höhere Abschlussraten</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-2xl">✓</span>
                      <span>Hyperpersonalisierte Ansprache und bessere Kundenbeziehungen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-2xl">✓</span>
                      <span>Automatische Lead‑Pflege reduziert Ihren manuellen Aufwand</span>
                    </li>
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
              }} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-purple-100">
                  <h3 className="text-xl sm:text-2xl font-black mb-4 text-black">Liam in der Praxis</h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
                    Ein E‑Commerce‑Shop integriert Liam in sein Kontaktformular. Der Chatbot beantwortet Produktfragen, erfasst Kontaktdaten und bewertet die Kaufbereitschaft. Täglich erhält das Vertriebsteam eine Liste neuer, qualifizierter Leads inklusive Kaufwahrscheinlichkeit.
                  </p>

                  <motion.div whileHover={{
                  scale: 1.02
                }} whileTap={{
                  scale: 0.98
                }}>
                    <Button size="lg" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 rounded-xl font-bold text-lg shadow-xl transition-all duration-300" onClick={scrollToContact}>
                      Mehr qualifizierte Leads – Liam jetzt testen
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vera - Voice-Agent */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-white via-green-50/30 to-emerald-50/30">
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
          }} className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-start pb-12 sm:pb-16">
              <div className="space-y-6">
                <motion.div variants={{
                hidden: {
                  opacity: 0,
                  x: -30
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
                }} className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl" style={{
                  background: 'linear-gradient(135deg, #22c55e, #10b981)'
                }}>
                    <Phone className="w-8 h-8 text-white" />
                  </motion.div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black">Vera – Ihr Voice‑Agent</h2>
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
              }} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-green-100">
                  <h3 className="text-xl sm:text-2xl font-black mb-4 text-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Was macht Vera?</h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Vera ist Ihre smarte Telefon‑Assistentin. Sie nimmt Anrufe rund um die Uhr entgegen, automatisiert Routinegespräche, beantwortet Fragen und leitet komplexe Anliegen an Ihr Team weiter. Voice‑AI‑Lösungen können hohe Anrufvolumina bewältigen, Wartezeiten verkürzen und 24/7‑Service ermöglichen.
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
              }} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-green-100">
                  <h3 className="text-xl sm:text-2xl font-black mb-4 text-black">So funktioniert Vera</h3>
                  <ol className="text-sm sm:text-base text-gray-700 leading-relaxed space-y-3">
                    <motion.li variants={{
                    hidden: {
                      opacity: 0,
                      x: -20
                    },
                    visible: {
                      opacity: 1,
                      x: 0
                    }
                  }} className="flex gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white flex items-center justify-center text-sm font-bold">1</span>
                      <span><strong>Anruf entgegennehmen:</strong> Vera nimmt jeden Anruf automatisch an und begrüßt den Kunden.</span>
                    </motion.li>
                    <motion.li variants={{
                    hidden: {
                      opacity: 0,
                      x: -20
                    },
                    visible: {
                      opacity: 1,
                      x: 0
                    }
                  }} className="flex gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white flex items-center justify-center text-sm font-bold">2</span>
                      <span><strong>Anliegen verstehen:</strong> Dank natürlicher Spracherkennung erfasst sie Absicht und Kontext des Gesprächs.</span>
                    </motion.li>
                    <motion.li variants={{
                    hidden: {
                      opacity: 0,
                      x: -20
                    },
                    visible: {
                      opacity: 1,
                      x: 0
                    }
                  }} className="flex gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white flex items-center justify-center text-sm font-bold">3</span>
                      <span><strong>Automatisierte Antworten & Aktionen:</strong> Sie beantwortet Fragen, führt Bestellungen aus und erfasst Feedback.</span>
                    </motion.li>
                    <motion.li variants={{
                    hidden: {
                      opacity: 0,
                      x: -20
                    },
                    visible: {
                      opacity: 1,
                      x: 0
                    }
                  }} className="flex gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white flex items-center justify-center text-sm font-bold">4</span>
                      <span><strong>Weiterleiten & Protokollieren:</strong> Komplexere Fälle übergibt sie samt Gesprächsnotizen an Ihre Mitarbeitenden – jederzeit.</span>
                    </motion.li>
                  </ol>
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
              }} className="bg-gradient-to-br from-green-600 to-emerald-600 p-6 rounded-2xl shadow-xl text-white">
                  <h3 className="text-xl sm:text-2xl font-black mb-4">Ihre Vorteile mit Vera</h3>
                  <ul className="text-sm sm:text-base leading-relaxed space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-2xl">✓</span>
                      <span>Rund‑um‑die‑Uhr‑Erreichbarkeit, ohne zusätzliches Personal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-2xl">✓</span>
                      <span>Kürzere Wartezeiten und mehr Kundenzufriedenheit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-2xl">✓</span>
                      <span>Entlastung Ihres Service‑Teams durch automatische Abwicklung von Routineanfragen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-2xl">✓</span>
                      <span>Natürliche, personalisierte Gespräche für ein positives Kundenerlebnis</span>
                    </li>
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
              }} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-green-100">
                  <h3 className="text-xl sm:text-2xl font-black mb-4 text-black">Vera in der Praxis</h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
                    Ein Service‑Center setzt Vera ein, damit Kunden jederzeit Bestellungen aufgeben oder Termine verschieben können. Standardfragen beantwortet die KI sofort, während Mitarbeitende sich auf individuelle Beratung konzentrieren.
                  </p>

                  <motion.div whileHover={{
                  scale: 1.02
                }} whileTap={{
                  scale: 0.98
                }}>
                    <Button size="lg" className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-6 rounded-xl font-bold text-lg shadow-xl transition-all duration-300" onClick={scrollToContact}>
                      Vera live erleben – jetzt Termin buchen
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
              
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
            }} className="hidden lg:block sticky top-24">
                <motion.div whileHover={{
                scale: 1.05,
                rotate: 2
              }} transition={{
                type: "spring",
                stiffness: 300
              }} className="w-full h-96 bg-gradient-to-br from-green-500 via-emerald-500 to-green-600 rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden">
                  <video autoPlay loop muted playsInline preload="auto" className="absolute inset-0 w-full h-full object-cover">
                    <source src="/assets/vera-agent-video.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Cora - Content-Agent */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-white via-amber-50/30 to-orange-50/30">
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
          }} className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-start pb-12 sm:pb-16">
              {/* Image Left */}
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
            }} className="hidden lg:block sticky top-24 order-2 lg:order-1">
                <motion.div whileHover={{
                scale: 1.05,
                rotate: -2
              }} transition={{
                type: "spring",
                stiffness: 300
              }} className="w-full h-96 bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden">
                  <video autoPlay loop muted playsInline preload="auto" className="absolute inset-0 w-full h-full object-cover">
                    <source src="/assets/cora-agent-video.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
              </motion.div>

              {/* Text Right */}
              <div className="space-y-6 order-1 lg:order-2">
                <motion.div variants={{
                hidden: {
                  opacity: 0,
                  x: 30
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
                }} className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl" style={{
                  background: 'linear-gradient(135deg, #f59e0b, #d97706)'
                }}>
                    <FileText className="w-8 h-8 text-white" />
                  </motion.div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black">Cora – Ihr Content‑Agent</h2>
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
              }} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-amber-100">
                  <h3 className="text-xl sm:text-2xl font-black mb-4 text-black bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Was macht Cora?</h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Cora erstellt und optimiert Inhalte für Blogs, Social Media und E‑Mail‑Newsletter. AI‑Content‑Agenten sparen Zeit, verbessern die Qualität und sorgen für konsistente Texte. Cora analysiert Keyword‑Trends, generiert SEO‑optimierte Texte und passt Inhalte an Ihre Zielgruppen an.
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
              }} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-amber-100">
                  <h3 className="text-xl sm:text-2xl font-black mb-4 text-black">So funktioniert Cora</h3>
                  <ol className="text-sm sm:text-base text-gray-700 leading-relaxed space-y-3">
                    <motion.li variants={{
                    hidden: {
                      opacity: 0,
                      x: -20
                    },
                    visible: {
                      opacity: 1,
                      x: 0
                    }
                  }} className="flex gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 text-white flex items-center justify-center text-sm font-bold">1</span>
                      <span><strong>Themen & Keywords recherchieren:</strong> Cora analysiert Branchentrends und Keywords für Ihre Zielgruppe.</span>
                    </motion.li>
                    <motion.li variants={{
                    hidden: {
                      opacity: 0,
                      x: -20
                    },
                    visible: {
                      opacity: 1,
                      x: 0
                    }
                  }} className="flex gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 text-white flex items-center justify-center text-sm font-bold">2</span>
                      <span><strong>Inhalte generieren:</strong> Die KI erstellt Blogposts, Social‑Media‑Beiträge und Newsletter‑Entwürfe.</span>
                    </motion.li>
                    <motion.li variants={{
                    hidden: {
                      opacity: 0,
                      x: -20
                    },
                    visible: {
                      opacity: 1,
                      x: 0
                    }
                  }} className="flex gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 text-white flex items-center justify-center text-sm font-bold">3</span>
                      <span><strong>Optimieren & Personalisieren:</strong> Grammatik und Stil werden verbessert; Texte werden für verschiedene Zielgruppen angepasst.</span>
                    </motion.li>
                    <motion.li variants={{
                    hidden: {
                      opacity: 0,
                      x: -20
                    },
                    visible: {
                      opacity: 1,
                      x: 0
                    }
                  }} className="flex gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 text-white flex items-center justify-center text-sm font-bold">4</span>
                      <span><strong>Veröffentlichen & Lernen:</strong> Veröffentlichungen werden geplant; Engagement‑Daten fließen zurück in die Optimierung.</span>
                    </motion.li>
                  </ol>
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
              }} className="bg-gradient-to-br from-amber-600 to-orange-600 p-6 rounded-2xl shadow-xl text-white">
                  <h3 className="text-xl sm:text-2xl font-black mb-4">Ihre Vorteile mit Cora</h3>
                  <ul className="text-sm sm:text-base leading-relaxed space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-2xl">✓</span>
                      <span>Zeitersparnis durch automatisierte Content‑Erstellung</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-2xl">✓</span>
                      <span>Konsistente Qualität und Tonalität in allen Kanälen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-2xl">✓</span>
                      <span>Bessere SEO‑Performance und höhere Sichtbarkeit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-2xl">✓</span>
                      <span>Personalisierte Inhalte für unterschiedliche Zielgruppen</span>
                    </li>
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
              }} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-amber-100">
                  <h3 className="text-xl sm:text-2xl font-black mb-4 text-black">Cora in der Praxis</h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
                    Eine Marketing‑Abteilung nutzt Cora, um wöchentlich Blogartikel und Social‑Media‑Posts zu erstellen. Die KI passt jeden Beitrag an die jeweilige Plattform an, verbessert die Sichtbarkeit und steigert das Engagement – was wiederum zu mehr Leads führt.
                  </p>

                  <motion.div whileHover={{
                  scale: 1.02
                }} whileTap={{
                  scale: 0.98
                }}>
                    <Button size="lg" className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-6 rounded-xl font-bold text-lg shadow-xl transition-all duration-300" onClick={scrollToContact}>
                      Entdecken Sie, wie Cora Ihr Content‑Marketing transformiert
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Agent Hub */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/30">
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
          }} className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-start pb-12 sm:pb-16">
              <div className="space-y-6">
                <motion.div variants={{
                hidden: {
                  opacity: 0,
                  x: -30
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
                }} className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl" style={{
                  background: 'linear-gradient(135deg, #9F91F8, #4F97F0)'
                }}>
                    <Bot className="w-8 h-8 text-white" />
                  </motion.div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black">Agent Hub – Ihre Komplettlösung</h2>
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
              }} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-indigo-100">
                  <h3 className="text-xl sm:text-2xl font-black mb-4 text-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Was ist der Agent Hub?</h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Der Agent Hub ist Ihre zentrale Plattform mit 8+ spezialisierten KI-Agenten für Copywriting, HR, Marketing, Strategie und mehr. Mit einem einmaligen Zugang erhalten Sie lebenslangen Zugriff auf alle Agenten – ohne monatliche Abonnementkosten.
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
              }} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-indigo-100">
                  <h3 className="text-xl sm:text-2xl font-black mb-4 text-black">So funktioniert der Agent Hub</h3>
                  <ol className="text-sm sm:text-base text-gray-700 leading-relaxed space-y-3">
                    <motion.li variants={{
                    hidden: {
                      opacity: 0,
                      x: -20
                    },
                    visible: {
                      opacity: 1,
                      x: 0
                    }
                  }} className="flex gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-center text-sm font-bold">1</span>
                      <span><strong>Einmalige Registrierung:</strong> Erstellen Sie Ihren Account und erhalten Sie sofortigen Zugang zu allen verfügbaren Agenten.</span>
                    </motion.li>
                    <motion.li variants={{
                    hidden: {
                      opacity: 0,
                      x: -20
                    },
                    visible: {
                      opacity: 1,
                      x: 0
                    }
                  }} className="flex gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-center text-sm font-bold">2</span>
                      <span><strong>Agent auswählen:</strong> Wählen Sie aus über 8 spezialisierten Agenten den passenden für Ihre aktuelle Aufgabe.</span>
                    </motion.li>
                    <motion.li variants={{
                    hidden: {
                      opacity: 0,
                      x: -20
                    },
                    visible: {
                      opacity: 1,
                      x: 0
                    }
                  }} className="flex gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-center text-sm font-bold">3</span>
                      <span><strong>Aufgabe definieren:</strong> Beschreiben Sie Ihr Anliegen – der Agent analysiert und verarbeitet Ihre Anfrage.</span>
                    </motion.li>
                    <motion.li variants={{
                    hidden: {
                      opacity: 0,
                      x: -20
                    },
                    visible: {
                      opacity: 1,
                      x: 0
                    }
                  }} className="flex gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-center text-sm font-bold">4</span>
                      <span><strong>Ergebnisse nutzen:</strong> Erhalten Sie hochwertige Outputs, die Sie direkt einsetzen können.</span>
                    </motion.li>
                  </ol>
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
              }} className="bg-gradient-to-br from-indigo-600 to-purple-600 p-6 rounded-2xl shadow-xl text-white">
                  <h3 className="text-xl sm:text-2xl font-black mb-4">Ihre Vorteile mit dem Agent Hub</h3>
                  <ul className="text-sm sm:text-base leading-relaxed space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-2xl">✓</span>
                      <span>Keine monatlichen Kosten – einmalige Zahlung für lebenslangen Zugang</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-2xl">✓</span>
                      <span>8+ spezialisierte Agenten für alle Unternehmensbereiche</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-2xl">✓</span>
                      <span>Sofort einsatzbereit ohne komplexe Einrichtung</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-2xl">✓</span>
                      <span>Regelmäßige Updates und neue Agenten inklusive</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-2xl">✓</span>
                      <span>80% Rabatt für kurze Zeit</span>
                    </li>
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
              }} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-indigo-100">
                  <h3 className="text-xl sm:text-2xl font-black mb-4 text-black">Agent Hub in der Praxis</h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
                    Ein Startup nutzt den Agent Hub für seine gesamte Content-Produktion: Cody erstellt Werbetexte, Dimarko plant Social-Media-Kampagnen und Inti unterstützt bei der Mitarbeitersuche. Alle Bereiche werden mit einem Tool abgedeckt – effizient und kostenoptimiert.
                  </p>

                  <motion.div whileHover={{
                  scale: 1.02
                }} whileTap={{
                  scale: 0.98
                }}>
                    <Button size="lg" className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-6 rounded-xl font-bold text-lg shadow-xl transition-all duration-300" onClick={() => window.open('https://agenthub.newedgebrand.com', '_blank')}>
                      Loslegen
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
              
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
            }} className="hidden lg:block sticky top-24">
                <motion.div whileHover={{
                scale: 1.05
              }} transition={{
                type: "spring",
                stiffness: 300
              }} className="w-full bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-600 rounded-3xl p-8 shadow-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div className="space-y-4" variants={{
                    hidden: {
                      opacity: 0
                    },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}>
                      <motion.div variants={{
                      hidden: {
                        opacity: 0,
                        y: 20
                      },
                      visible: {
                        opacity: 1,
                        y: 0
                      }
                    }} whileHover={{
                      scale: 1.05,
                      y: -5
                    }} className="bg-white p-4 rounded-xl shadow-lg">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-500">
                            <FileText className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-sm font-bold">Cody</span>
                        </div>
                        <p className="text-xs text-gray-600">Copywriting</p>
                      </motion.div>
                      <motion.div variants={{
                      hidden: {
                        opacity: 0,
                        y: 20
                      },
                      visible: {
                        opacity: 1,
                        y: 0
                      }
                    }} whileHover={{
                      scale: 1.05,
                      y: -5
                    }} className="bg-white p-4 rounded-xl shadow-lg">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-500">
                            <Bot className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-sm font-bold">Inti</span>
                        </div>
                        <p className="text-xs text-gray-600">HR & Recruiting</p>
                      </motion.div>
                    </motion.div>
                    <motion.div className="space-y-4 mt-8" variants={{
                    hidden: {
                      opacity: 0
                    },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.2
                      }
                    }
                  }}>
                      <motion.div variants={{
                      hidden: {
                        opacity: 0,
                        y: 20
                      },
                      visible: {
                        opacity: 1,
                        y: 0
                      }
                    }} whileHover={{
                      scale: 1.05,
                      y: -5
                    }} className="bg-white p-4 rounded-xl shadow-lg">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-yellow-500 to-orange-500">
                            <Lightbulb className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-sm font-bold">Dimarko</span>
                        </div>
                        <p className="text-xs text-gray-600">Digital Marketing</p>
                      </motion.div>
                      <motion.div variants={{
                      hidden: {
                        opacity: 0,
                        y: 20
                      },
                      visible: {
                        opacity: 1,
                        y: 0
                      }
                    }} whileHover={{
                      scale: 1.05,
                      y: -5
                    }} className="bg-white p-4 rounded-xl shadow-lg">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-pink-500 to-purple-500">
                            <Bot className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-sm font-bold">+9 weitere</span>
                        </div>
                        <p className="text-xs text-gray-600">Alle Bereiche</p>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-black">
                Bereit für KI-gestützte Innovation?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-700">
                Entdecken Sie, wie unsere KI-Agenten Ihr Business revolutionieren können.
              </p>
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white text-base sm:text-lg px-12 py-4 rounded-full font-medium transition-all duration-300" onClick={scrollToContact}>
                KONTAKT AUFNEHMEN
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>;
};
export default Products;