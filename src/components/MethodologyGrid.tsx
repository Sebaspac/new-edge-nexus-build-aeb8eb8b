import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
export const MethodologyGrid = () => {
  const services = [
    {
      category: "STRATEGIE",
      title: "KI Beratung & Workshops",
      link: "/studio",
    },
    {
      category: "AUTOMATION",
      title: "KI Agenten für Unternehmen",
      link: "/lab",
    },
    {
      category: "BRANDING",
      title: "Markenstrategie",
      link: "/studio",
    },
    {
      category: "WACHSTUM",
      title: "Kampagnenmanagement",
      link: "/media",
    },
    {
      category: "SYSTEME",
      title: "Web- & Prototyp Design",
      link: "/studio",
    },
  ];
  return (
    <section className="relative py-12 md:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-start">
          {/* Left Column */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="space-y-4 sm:space-y-6 md:space-y-8"
          >
            {/* Eyebrow */}
            <div className="mb-0">
              <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#7C3AED]">new edge</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-[0.9] text-black">
              SCALE
              <br />
              YOUR
              <br />
              <span className="text-[#7C3AED]">VISION.</span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 leading-relaxed max-w-md">
              Wir verbinden Strategie, Kreativität und Automation aus einer Hand – sicher. schnell. DSGVO-Konform.
            </p>

            {/* CTA Box */}
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
                delay: 0.3,
                duration: 0.6,
              }}
              className="relative bg-black text-white p-4 sm:p-6 md:p-8 overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Purple Circle Decoration */}
              <div className="absolute -right-8 -bottom-8 sm:-right-12 sm:-bottom-12 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 bg-[#7C3AED] opacity-80 group-hover:scale-110 transition-transform duration-500" />

              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">Web-Perfomance Audit 2026</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-base">
                  Kostenlose Analyse sichern: Performance, Struktur & Conversion kurz durchgecheckt.
                </p>

                <a
                  href="https://seo-audit-pro-1064008039464.us-west1.run.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#7C3AED] font-bold uppercase text-xs sm:text-sm tracking-wider group-hover:gap-4 transition-all duration-300"
                >
                  Jetzt Check sichern. For Free.
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Service Cards */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="space-y-0"
          >
            {services.map((service, index) => (
              <Link key={service.title} to={service.link} className="group">
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
                    delay: 0.3 + index * 0.1,
                  }}
                  className="relative py-4 sm:py-5 md:py-8 border-b border-gray-200 hover:bg-gray-50/50 transition-all duration-300 px-2 sm:px-4 md:px-6 -mx-2 sm:-mx-4 md:-mx-6"
                >
                  <div className="flex items-start justify-between gap-3 sm:gap-4 md:gap-8">
                    <div className="flex-1">
                      <span className="text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] mb-1 sm:mb-2 md:mb-3 block text-muted-foreground">
                        {service.category}
                      </span>
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black group-hover:text-[#7C3AED] transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>

                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-300 group-hover:text-[#7C3AED] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0 mt-4 sm:mt-6 md:mt-8" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
