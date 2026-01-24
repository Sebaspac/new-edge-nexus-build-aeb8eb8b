import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Video, Users, Rocket } from "lucide-react";
import { useState, useEffect, lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { ContactFormModal } from "@/components/ContactFormModal";
import { ServiceScrollSection } from "@/components/ServiceScrollSection";
import { ContentProductionAnimation } from "@/components/ui/content-production-animation";
import { SocialMediaAnimation } from "@/components/ui/social-media-animation";
import { PerformanceLaunchAnimation } from "@/components/ui/performance-launch-animation";
import { LazyVideo } from "@/components/LazyVideo";
import { MobileNavigation } from "@/components/MobileNavigation";
import marketingAutomationImage from "@/assets/marketing-automation.webp";
const Footer = lazy(() =>
  import("@/components/Footer").then((m) => ({
    default: m.Footer,
  })),
);
const Media = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const scrollToContact = () => {
    navigate("/", {
      replace: true,
    });
    setTimeout(() => {
      const contactSection = document.getElementById("contact-section");
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 100);
  };
  const mediaServices = [
    {
      title: "Content-Produktion",
      icon: Video,
      gradient: "from-blue-500 to-cyan-500",
      videoSrc: "/assets/media-launch-video.mp4",
      animation: <ContentProductionAnimation />,
      outcome: "Von der Idee zum fertigen Asset – in Rekordzeit.",
      problem:
        "Fehlende interne Kapazitäten, inkonsistente Qualität und lange Produktionszyklen bremsen Ihre Marketingaktivitäten.",
      solution:
        "Unser Team übernimmt den gesamten Produktionsprozess – von der Konzeption über die Umsetzung bis zur finalen Auslieferung in allen benötigten Formaten.",
      deliverables: [
        {
          title: "Video- & Foto-Produktion",
          description: "Professionelle Aufnahmen für alle Kanäle und Formate.",
        },
        {
          title: "Animationen & Motion Graphics",
          description: "Dynamische visuelle Inhalte für erhöhte Aufmerksamkeit.",
        },
        {
          title: "Ad-Creatives & Social Assets",
          description: "Performanceorientierte Werbemittel für alle Plattformen.",
        },
        {
          title: "Content-Strategie & Planung",
          description: "Redaktionspläne und Formatentwicklung.",
        },
      ],
    },
    {
      title: "Social Media",
      icon: Users,
      gradient: "from-cyan-500 to-blue-500",
      videoSrc: "/assets/media-section-video.mp4",
      animation: <SocialMediaAnimation />,
      outcome: "Konsistente Präsenz auf allen relevanten Kanälen.",
      problem:
        "Ohne klare Redaktionslogik und regelmäßige Veröffentlichungen verlieren Sie Reichweite, Engagement und letztlich potenzielle Kunden.",
      solution:
        "Wir entwickeln eine maßgeschneiderte Social-Media-Strategie und übernehmen die komplette Umsetzung – von der Content-Planung bis zum Community Management.",
      deliverables: [
        {
          title: "Community Management",
          description: "Interaktion und Moderation für aktive Communities.",
        },
        {
          title: "Content-Planung & Publishing",
          description: "Strategische Redaktionspläne mit automatisierter Veröffentlichung.",
        },
        {
          title: "Performance Reporting",
          description: "Detaillierte Analysen mit KPI-Tracking und Insights.",
        },
        {
          title: "Creator-Kooperationen",
          description: "Influencer-Partnerschaften für authentische Reichweite.",
        },
      ],
    },
    {
      title: "Launch & Performance",
      icon: Rocket,
      gradient: "from-blue-600 to-cyan-400",
      videoSrc: "/assets/media-content-video.mp4",
      animation: <PerformanceLaunchAnimation />,
      outcome: "Reichweite in messbare Ergebnisse umwandeln.",
      problem:
        "Ohne datengetriebene Kampagnen und kontinuierliche Optimierung verbrennen Sie Budget ohne nachweisbaren ROI.",
      solution:
        "Wir launchen Ihre Kampagnen strategisch, testen kontinuierlich und skalieren, was funktioniert – für maximale Conversion bei optimalem Budget-Einsatz.",
      deliverables: [
        {
          title: "Launch-Strategie & Planung",
          description: "Go-to-Market-Konzepte mit Timing und Kanalauswahl.",
        },
        {
          title: "Paid Advertising",
          description: "Kampagnen auf Meta, Google und LinkedIn mit Budgetoptimierung.",
        },
        {
          title: "Conversion-Optimierung & A/B-Testing",
          description: "Datenbasierte Tests zur Steigerung der Conversion Rate.",
        },
        {
          title: "Analytics & Reporting",
          description: "Transparente Dashboards mit ROI-Nachweis.",
        },
      ],
    },
  ];
  const mediaCases = [
    {
      id: "ecommerce",
      client: "RETAIL CLIENT",
      headline: "Marketing-Automatisierung mit KI",
      category: "WACHSTUM",
      route: "/case-study/ecommerce",
      image: marketingAutomationImage,
    },
  ];
  return (
    <>
      <Helmet>
        <title>New Edge Media - Content, Social & Performance | Kreative Kampagnen</title>
        <meta
          name="description"
          content="NEW EDGE MEDIA vereint Content-Produktion, Social Media Management und Performance Marketing. Wir schaffen Kampagnen, die Marken sichtbar machen und Wachstum messbar steigern."
        />
        <meta
          name="keywords"
          content="Content Marketing, Social Media Management, Performance Marketing, Content Produktion, Launchkampagnen, Creative Assets"
        />
        <link rel="canonical" href="https://new-edge.de/media" />
        <meta property="og:title" content="NEW EDGE MEDIA - Content, Social & Performance" />
        <meta property="og:description" content="Kreative Kampagnen für messbares Wachstum" />
        <meta property="og:url" content="https://new-edge.de/media" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <MobileNavigation onContactClick={scrollToContact} theme="light" />

        {/* Hero Section */}
        <section className="relative w-full">
          <div className="w-full relative h-[75vh] lg:h-auto lg:aspect-video">
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                background:
                  "linear-gradient(to bottom right, rgba(59, 130, 246, 0.3), rgba(6, 182, 212, 0.2), rgba(6, 182, 212, 0.1))",
              }}
            >
              <LazyVideo
                src="/assets/media-hero-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(59, 130, 246, 0.6), rgba(59, 130, 246, 0.2), transparent)",
                }}
              />

              <div className="absolute bottom-0 left-0 p-6 pb-8 sm:pb-12 sm:p-12 lg:p-16 max-w-full sm:max-w-4xl">
                <h1 className="text-h1 lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 leading-tight text-white">
                  NEW EDGE
                  <br />
                  <span
                    className="italic font-black"
                    style={{
                      background: "linear-gradient(to right, #3b82f6, #06b6d4)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    MEDIA
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section - Matching Studio/Lab Style */}
        <section className="relative py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: "-80px",
              }}
              variants={{
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.1,
                  },
                },
              }}
              className="max-w-4xl"
            >
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 40,
                    scale: 0.95,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.7,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    },
                  },
                }}
                className="mb-6"
              >
                <h2 className="text-h1 font-extrabold text-black">
                  MEDIA{" "}
                  <motion.span
                    className="inline-block bg-clip-text text-transparent"
                    style={{
                      background: "linear-gradient(to right, #3b82f6, #06b6d4)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    whileInView={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.3,
                    }}
                  >
                    POWER
                  </motion.span>
                </h2>
                <motion.p
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 20,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        delay: 0.2,
                      },
                    },
                  }}
                  className="text-body-lg text-gray-600 mt-6 max-w-3xl text-xl leading-relaxed"
                >
                  Wir bauen Media Power, die Reichweite in messbare Ergebnisse verwandelt. Content-Produktion, Social
                  Media und Performance Marketing aus einer Hand – für Marken, die wachsen wollen.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Sections */}
        <section className="section-py-md px-4 md:px-8 lg:px-16 bg-primary-foreground">
          <div className="max-w-7xl mx-auto space-y-24 md:space-y-40">
            {mediaServices.map((service, index) => (
              <ServiceScrollSection
                key={service.title}
                gradient={service.gradient}
                imagePosition={index % 2 === 0 ? "right" : "left"}
                videoSrc={service.videoSrc}
                icon={service.icon}
                animationBelow={service.animation}
              >
                <div className="space-y-6 md:space-y-8">
                  {/* Title */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-10 h-10 bg-gradient-to-r ${service.gradient} flex items-center justify-center`}
                      >
                        <service.icon className="w-5 h-5 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">{service.title}</h2>
                    </div>
                    <p
                      className={`text-lg md:text-xl font-medium bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                    >
                      {service.outcome}
                    </p>
                  </motion.div>

                  {/* Problem */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1,
                    }}
                    className="bg-red-50 border border-red-100 p-5"
                  >
                    <h3 className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-2">Das Problem</h3>
                    <p className="text-gray-700">{service.problem}</p>
                  </motion.div>

                  {/* Solution */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2,
                    }}
                    className="bg-blue-50 border border-blue-100 p-5"
                  >
                    <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">Unsere Lösung</h3>
                    <p className="text-gray-700">{service.solution}</p>
                  </motion.div>

                  {/* Deliverables - Lab Style */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3,
                    }}
                  >
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Deliverables</h3>
                    <div className="space-y-4">
                      {service.deliverables.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{
                            opacity: 0,
                            x: -20,
                          }}
                          whileInView={{
                            opacity: 1,
                            x: 0,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            duration: 0.4,
                            delay: 0.1 * idx,
                          }}
                          whileHover={{
                            x: 8,
                          }}
                          className="group flex items-start gap-4 cursor-default"
                        >
                          <div
                            className={`flex-shrink-0 w-8 h-8 bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white text-sm font-bold shadow-lg group-hover:scale-110 transition-transform duration-200 mt-0.5`}
                          >
                            {idx + 1}
                          </div>
                          <div className="flex-1">
                            <span className="text-gray-900 font-semibold block">{item.title}</span>
                            <span className="text-gray-500 text-sm">{item.description}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </ServiceScrollSection>
            ))}
          </div>
        </section>

        {/* Media Cases Section */}
        <section className="relative py-8 md:py-12 lg:py-16 bg-white overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            {/* Header */}
            <div className="flex items-end justify-between mb-4 md:mb-8">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                }}
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black leading-[1.1] text-black">
                  Media Cases.
                  <br />
                  <span
                    style={{
                      background: "linear-gradient(to right, #3b82f6, #06b6d4)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Content, der performt.
                  </span>
                </h2>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                }}
                className="hidden md:block"
              >
                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-2 text-sm lg:text-lg font-bold text-black hover:text-[#3b82f6] transition-colors duration-300"
                >
                  ALLE CASES
                  <ArrowUpRight className="w-5 h-5 lg:w-6 lg:h-6" />
                </Link>
              </motion.div>
            </div>

            {/* Cases Grid */}
            <div className="flex gap-0 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-4">
              {mediaCases.map((caseItem, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  onClick={() => navigate(caseItem.route)}
                  className="group cursor-pointer flex-shrink-0 w-[65%] snap-start md:w-auto"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={caseItem.image}
                      alt={caseItem.headline}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <span className="text-[10px] md:text-sm font-medium text-blue-600">{caseItem.category}</span>
                  <h3 className="mt-1 md:mt-2 text-sm md:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                    {caseItem.headline}
                  </h3>
                  <p className="mt-0.5 md:mt-1 text-[10px] md:text-base text-gray-600">{caseItem.client}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-py-md px-4 md:px-8 lg:px-16 bg-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              Bereit für die Zukunft?
            </motion.h2>
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            >
              New Edge steht für Innovation und nachhaltige Entwicklung. Gemeinsam gestalten wir die Zukunft von Marken
              und Prozessen.
            </motion.p>
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
            >
              <Button
                size="lg"
                onClick={() => setIsModalOpen(true)}
                className="bg-transparent backdrop-blur-md text-black border-2 border-black hover:bg-black hover:text-white font-semibold px-8 py-6 text-lg transition-all duration-300 hover:-translate-y-0.5 rounded-none"
              >
                Kontakt aufnehmen <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <Suspense fallback={<div className="h-96 bg-black" />}>
          <Footer />
        </Suspense>
      </div>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        accentColor="#3b82f6"
        gradientFrom="#3b82f6"
        gradientTo="#06b6d4"
        theme="media"
      />
    </>
  );
};
export default Media;
