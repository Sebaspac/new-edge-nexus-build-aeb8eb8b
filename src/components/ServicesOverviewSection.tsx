import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { TextStaggerHover, TextStaggerHoverActive, TextStaggerHoverHidden } from "@/components/ui/text-stagger-hover";

export const ServicesOverviewSection = () => {
  const services = [
    { title: "KI Beratung", path: "/services" },
    { title: "AI Agents für Unternehmen", path: "/lab" },
    { title: "Voice AI Agents", path: "/lab" },
    { title: "Smart KI-Automation", path: "/lab" },
    { title: "KI-gestützte Marketing & Automation", path: "/media" },
    { title: "Conversational AI & Chatbots", path: "/lab" },
  ];

  return (
    <section className="relative py-16 lg:py-24 bg-background">
      <div className="container-xl">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16"
        >
          <h2 className="text-h1 mb-3 text-black">
            Wir bringen Ihr Unternehmen{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent inline-block">an die Spitze</span>{" "}
            Ihrer Branche
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side: Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Unser Team aus branchenführenden Experten verbindet theoretisches Wissen mit praktischer Erfahrung, um maßgeschneiderte KI-Lösungen zu entwickeln, die auf die spezifischen Bedürfnisse und Herausforderungen Ihres Unternehmens zugeschnitten sind.
            </p>
          </motion.div>

          {/* Right side: Services List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-end space-y-4 lg:space-y-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="w-full lg:w-auto"
              >
                <Link
                  to={service.path}
                  className="group flex items-center justify-end gap-4 text-right py-4 px-6 rounded-lg transition-all duration-200 hover:bg-primary/5"
                >
                  <TextStaggerHover as="span">
                    <TextStaggerHoverActive
                      animation="right"
                      className="text-3xl lg:text-4xl xl:text-5xl font-epilogue font-light tracking-tight text-foreground"
                    >
                      {service.title}
                    </TextStaggerHoverActive>
                    <TextStaggerHoverHidden
                      animation="left"
                      className="text-3xl lg:text-4xl xl:text-5xl font-epilogue font-light tracking-tight text-primary"
                    >
                      {service.title}
                    </TextStaggerHoverHidden>
                  </TextStaggerHover>
                  <ArrowRight className="w-6 h-6 lg:w-7 lg:h-7 text-muted-foreground group-hover:text-primary transition-all duration-200 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
