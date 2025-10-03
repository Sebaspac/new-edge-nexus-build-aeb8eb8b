import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Users, Code, Palette, Globe, Briefcase } from "lucide-react";
const About = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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
        <title>About & Crew - NEW EDGE</title>
        <meta name="description" content="Lernen Sie unser Team kennen und erfahren Sie mehr über unsere Mission und Vision." />
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
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 leading-tight">
                  <span className="text-white">DESIGN BRANDS.</span><br />
                  <span className="italic font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">DRIVE INNOVATION.</span>
                </h1>
                <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl leading-relaxed mb-2">
                  Lernen Sie unser Team kennen und erfahren Sie mehr über unsere Mission und Vision.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl leading-relaxed">
                  Gemeinsam schaffen wir digitale Lösungen, die begeistern.
                </p>
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
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3 leading-[1.2] text-black">
                  UNSER{" "}
                  <motion.span className="inline-block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent" whileInView={{
                  scale: [1, 1.05, 1]
                }} transition={{
                  duration: 1,
                  delay: 0.3
                }}>
                    TEAM
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
              }}>Gemeinsam schaffen wir digitale Lösungen, die begeistern. 
Lernen Sie unser Team kennen und erfahren Sie mehr über unsere Mission und Vision – von Strategie über Kreation bis hin zu Technologie.</motion.p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Know-how trifft Prozess Section */}
        <section className="relative py-8 sm:py-12 bg-gradient-to-br from-white via-purple-50/20 to-white overflow-hidden">
          {/* Enhanced Parallax background orbs */}
          <motion.div className="absolute top-10 left-10 w-52 h-52 bg-primary/5 rounded-full blur-3xl" initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.3, 1],
          rotate: [0, 90, 0]
        }} transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }} />
          <motion.div className="absolute bottom-10 right-10 w-60 h-60 bg-secondary/5 rounded-full blur-3xl" initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1.3, 1, 1.3],
          rotate: [0, -90, 0]
        }} transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }} />

          <div className="container-xl relative z-10">
            <motion.div initial={{
            opacity: 0,
            y: 60,
            scale: 0.85
          }} whileInView={{
            opacity: 1,
            y: 0,
            scale: 1
          }} viewport={{
            once: true,
            margin: "-80px"
          }} transition={{
            duration: 0.9,
            ease: [0.25, 0.46, 0.45, 0.94]
          }} className="text-center mb-24">
              <motion.h2 initial={{
              opacity: 0,
              rotateX: -20
            }} whileInView={{
              opacity: 1,
              rotateX: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.2,
              duration: 0.7
            }} whileHover={{
              scale: 1.03
            }} className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-10 text-black leading-[1.2] text-left">
                Know-how trifft Prozess
              </motion.h2>
              <motion.p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-[1.9] tracking-wide" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.4,
              duration: 0.6
            }}>
                Unser Team bringt sein Fachwissen gezielt in jede Phase ein – 
                von der Strategie bis zur Technologie-Umsetzung.
              </motion.p>
            </motion.div>

            <motion.div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto" initial="hidden" whileInView="visible" viewport={{
            once: true,
            margin: "-60px"
          }} variants={{
            hidden: {
              opacity: 0
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.25,
                delayChildren: 0.2
              }
            }
          }}>
              {[{
              phase: "Studio",
              title: "Strategie & Beratung",
              description: "Unsere Strategy Leads und Coaches entwickeln maßgeschneiderte Markenstrategien.",
              team: "Strategy Leads, Brand Coaches"
            }, {
              phase: "Media",
              title: "Content & Kreation",
              description: "Unsere Content-Teams kreieren Inhalte – kreativ, datenbasiert und KI-gestützt.",
              team: "Creative Directors, Content Specialists"
            }, {
              phase: "Lab",
              title: "Technologie & Innovation",
              description: "Unsere Entwickler und Tech-Experten bringen Ihre Visionen zum Leben.",
              team: "Lead Developers, Tech Innovators"
            }].map((item, index) => <motion.div key={item.phase} variants={{
              hidden: {
                opacity: 0,
                y: 80,
                scale: 0.8,
                rotateY: -25
              },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                rotateY: 0,
                transition: {
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              }
            }} whileHover={{
              scale: 1.08,
              y: -15,
              rotateY: 8,
              transition: {
                duration: 0.4,
                type: "spring",
                stiffness: 200
              }
            }} className="group perspective-1000">
                  <div className="bg-white/90 backdrop-blur-md p-10 rounded-2xl shadow-2xl border border-gray-100 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] hover:border-primary/40 transition-all duration-500 h-full">
                    <motion.h3 className="text-2xl sm:text-3xl font-black mb-8 text-black group-hover:text-primary transition-colors leading-tight" whileHover={{
                  scale: 1.05
                }}>
                      {item.title}
                    </motion.h3>
                    <p className="text-base sm:text-lg text-gray-700 leading-[1.9] tracking-wide mb-8">
                      {item.description}
                    </p>
                    <motion.p className="text-sm sm:text-base text-gray-500 font-bold" initial={{
                  opacity: 0.6
                }} whileInView={{
                  opacity: 1
                }} whileHover={{
                  scale: 1.05,
                  x: 5
                }}>
                      {item.team}
                    </motion.p>
                  </div>
                </motion.div>)}
            </motion.div>
          </div>
        </section>

        {/* Network Stats Section */}
        <section className="relative py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
          {/* Animated background orbs */}
          <motion.div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 30, 0],
          y: [0, -30, 0]
        }} transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }} />
          <motion.div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
          x: [0, -30, 0],
          y: [0, 30, 0]
        }} transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }} />
          
          <div className="container-xl relative z-10">
            <motion.div initial={{
            opacity: 0,
            y: 50,
            rotateX: -20
          }} whileInView={{
            opacity: 1,
            y: 0,
            rotateX: 0
          }} viewport={{
            once: true,
            margin: "-100px"
          }} transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }} className="text-center mb-20">
              <motion.h2 whileHover={{
              scale: 1.05
            }} transition={{
              duration: 0.3
            }} className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent text-left lg:text-5xl">
                Unser Netzwerk
              </motion.h2>
              <motion.p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed" initial={{
              opacity: 0
            }} whileInView={{
              opacity: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.3,
              duration: 0.6
            }}>
                Ein starkes Team aus Experten, Coaches und Partnern – 
                für jede Herausforderung die richtige Expertise.
              </motion.p>
            </motion.div>

            <motion.div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{
            once: true,
            margin: "-50px"
          }} variants={{
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
              {[{
              icon: Users,
              label: "Coaches",
              value: "10+",
              color: "from-blue-600 to-blue-800"
            }, {
              icon: Code,
              label: "Entwickler",
              value: "2",
              color: "from-purple-600 to-purple-800"
            }, {
              icon: Palette,
              label: "Creative Agencies",
              value: "3",
              color: "from-pink-600 to-pink-800"
            }, {
              icon: Globe,
              label: "Länder",
              value: "4",
              color: "from-green-600 to-green-800"
            }, {
              icon: Briefcase,
              label: "Freelancer",
              value: "15+",
              color: "from-orange-600 to-orange-800"
            }].map((stat, index) => <motion.div key={stat.label} variants={{
              hidden: {
                opacity: 0,
                scale: 0.5,
                y: 50,
                rotateY: -30
              },
              visible: {
                opacity: 1,
                scale: 1,
                y: 0,
                rotateY: 0,
                transition: {
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 100
                }
              }
            }} whileHover={{
              scale: 1.15,
              y: -10,
              rotateY: 10,
              transition: {
                duration: 0.3,
                type: "spring",
                stiffness: 300
              }
            }} className="group perspective-1000">
                  <Card className="bg-white border-2 border-border/50 shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all duration-500 h-full">
                    <CardContent className="p-6 text-center relative overflow-hidden">
                      {/* Animated gradient background */}
                      <motion.div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                      
                      <motion.div className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} p-3 shadow-lg relative z-10`} whileHover={{
                    rotate: 360,
                    scale: 1.2
                  }} transition={{
                    duration: 0.6,
                    type: "spring"
                  }}>
                        <stat.icon className="w-full h-full text-white" />
                      </motion.div>
                      
                      <motion.div className="text-2xl sm:text-3xl font-bold text-foreground mb-1 relative z-10" whileHover={{
                    scale: 1.1
                  }}>
                        {stat.value}
                      </motion.div>
                      <div className="text-sm sm:text-base text-muted-foreground font-medium relative z-10">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>)}
            </motion.div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="relative py-12 sm:py-16 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
          {/* Animated background pattern */}
          <motion.div className="absolute top-0 left-0 w-full h-full opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, hsl(var(--primary)) 2px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} animate={{
          backgroundPosition: ['0px 0px', '40px 40px']
        }} transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }} />
          
          <div className="container-xl relative z-10">
            <motion.div initial={{
            opacity: 0,
            y: 50,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            y: 0,
            scale: 1
          }} viewport={{
            once: true,
            margin: "-100px"
          }} transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }} className="text-center mb-20">
              <motion.h2 initial={{
              opacity: 0,
              rotateX: -20
            }} whileInView={{
              opacity: 1,
              rotateX: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.2,
              duration: 0.7
            }} className="text-3xl sm:text-4xl font-bold mb-6 text-left lg:text-5xl">
                <span className="bg-gradient-primary bg-clip-text text-transparent">Die Gründer</span>
              </motion.h2>
              <motion.p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.4,
              duration: 0.6
            }}>
                Expertise aus Strategie und Technologie – vereint für Ihren Erfolg.
              </motion.p>
            </motion.div>

            <motion.div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{
            once: true,
            margin: "-50px"
          }} variants={{
            hidden: {
              opacity: 0
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2
              }
            }
          }}>
              {[{
              name: "Sebastian Pachón",
              role: "Founder & Creative-Tech Partner",
              image: "/assets/c19dc1d8-e93c-4d25-a965-34dbef5d9fe1.png",
              expertise: ["Strategie", "Technologie"]
            }, {
              name: "Wenjamin Zabezhanskiy",
              role: "Operations & Innovation Partner",
              image: "/assets/06cbcdbb-3730-466c-b8c1-cf54d42fc7c1.png",
              expertise: ["Kreation", "Support"]
            }].map((founder, index) => <motion.div key={founder.name} variants={{
              hidden: {
                opacity: 0,
                y: 80,
                rotateY: index % 2 === 0 ? -30 : 30,
                scale: 0.8
              },
              visible: {
                opacity: 1,
                y: 0,
                rotateY: 0,
                scale: 1,
                transition: {
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 80
                }
              }
            }} whileHover={{
              y: -20,
              scale: 1.05,
              rotateY: index % 2 === 0 ? 5 : -5,
              transition: {
                duration: 0.4,
                type: "spring",
                stiffness: 200
              }
            }} className="group perspective-1000">
                  <Card className="h-full bg-white border-2 border-border/50 shadow-xl hover:shadow-2xl hover:border-primary/40 transition-all duration-500 overflow-hidden">
                    <div className="p-8 sm:p-10 flex flex-col h-full relative">
                      {/* Animated gradient overlay */}
                      <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" initial={false} />
                      
                      <div className="flex-shrink-0 mb-8 relative z-10">
                        <motion.div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-3xl overflow-hidden border-4 border-border/30 shadow-2xl group-hover:border-primary/50 transition-all duration-500 group-hover:shadow-primary/20" whileHover={{
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: {
                        duration: 0.5
                      }
                    }}>
                          <motion.img src={founder.image} alt={`${founder.name} - ${founder.role}`} className="w-full h-full object-cover" width={160} height={160} loading="lazy" whileHover={{
                        scale: 1.1
                      }} transition={{
                        duration: 0.5
                      }} />
                        </motion.div>
                      </div>
                      
                      <div className="text-center flex-grow flex flex-col justify-between relative z-10">
                        <div>
                          <motion.h3 className="text-xl sm:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors" whileHover={{
                        scale: 1.05
                      }}>
                            {founder.name}
                          </motion.h3>
                          <motion.p className="text-primary font-semibold mb-8 text-lg" initial={{
                        opacity: 0.8
                      }} whileInView={{
                        opacity: 1
                      }}>
                            {founder.role}
                          </motion.p>
                        </div>
                        
                        <div className="flex justify-center gap-3 flex-wrap">
                          {founder.expertise.map((skill, skillIndex) => <motion.span key={skillIndex} className="px-5 py-3 bg-gradient-to-br from-primary/10 to-secondary/10 text-foreground rounded-2xl text-sm font-bold border-2 border-primary/20 shadow-lg hover:shadow-xl" whileHover={{
                        scale: 1.1,
                        y: -5,
                        backgroundColor: "hsl(var(--primary) / 0.2)",
                        transition: {
                          duration: 0.2
                        }
                      }} initial={{
                        opacity: 0,
                        scale: 0
                      }} whileInView={{
                        opacity: 1,
                        scale: 1
                      }} transition={{
                        delay: skillIndex * 0.1 + 0.5
                      }}>
                              {skill}
                            </motion.span>)}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>)}
            </motion.div>
          </div>
        </section>
      </div>
    </>;
};
export default About;