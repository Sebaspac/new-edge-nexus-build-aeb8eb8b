import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { TextStaggerHover, TextStaggerHoverActive, TextStaggerHoverHidden } from "@/components/ui/text-stagger-hover";
export const ServicesOverviewSection = () => {
  const services = [
    {
      title: "KI Beratung & Workshops",
      path: "/services",
    },
    {
      title: "KI Agenten für Unternehmen",
      path: "/products",
    },
    {
      title: "Markenstrategie",
      path: "/studio",
    },
    {
      title: "Kampagnenmanagement",
      path: "/media",
    },
    {
      title: "Web- & Prototyp Design",
      path: "/lab",
    },
    {
      title: "KI-gestütztes Marketing & Automation",
      path: "/media",
    },
  ];
  return (
    <section className="relative pt-20 pb-12 lg:py-16 bg-background">
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side: Text */}
          <motion.div
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
              duration: 0.6,
            }}
          >
            <h2 className="text-h1 mb-10 text-black">
              Wir bringen Ihr Unternehmen{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent inline-block">an die Spitze</span>{" "}
              Ihrer Branche
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-normal lg:text-xl">
              Unser Creative-Tech-Team vereint Strategie-Know-how und Praxiserfahrung, um maßgeschneiderte Kreativ- und
              Automationslösungen, die auf die spezifischen Bedürfnisse und Herausforderungen Ihres Unternehmens
              zugeschnitten sind.
            </p>
          </motion.div>

          {/* Right side: Services List */}
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
            className="flex flex-col items-end space-y-4 lg:space-y-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
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
                  duration: 0.4,
                  delay: 0.3 + index * 0.1,
                }}
                className="w-full lg:w-auto"
              >
                <Link
                  to={service.path}
                  className="group flex items-center justify-start lg:justify-end gap-3 lg:gap-4 text-left lg:text-right py-3 px-4 lg:py-4 lg:px-6 rounded-lg transition-all duration-200 hover:bg-primary/5"
                >
                  <ArrowRight className="w-5 h-5 lg:w-7 lg:h-7 text-muted-foreground group-hover:text-primary transition-all duration-200 group-hover:translate-x-1 lg:order-2" />
                  <TextStaggerHover as="span" className="flex-1">
                    <TextStaggerHoverActive
                      animation="right"
                      className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-epilogue font-light tracking-tight text-foreground"
                    >
                      {service.title}
                    </TextStaggerHoverActive>
                    <TextStaggerHoverHidden
                      animation="left"
                      className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-epilogue font-light tracking-tight text-primary"
                    >
                      {service.title}
                    </TextStaggerHoverHidden>
                  </TextStaggerHover>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
