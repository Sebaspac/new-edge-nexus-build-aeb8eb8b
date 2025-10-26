import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, Palette, Zap } from "lucide-react";

export const ServicesOverviewSection = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "New Edge Studio",
      description: "Kreative Basis Ihrer Marke: Positionierung, Tonalität, Branding – übersetzt in Kampagnen & Designsysteme.",
      path: "/studio"
    },
    {
      icon: Palette,
      title: "New Edge Media",
      description: "Content für den ganzen Funnel: Social bis Website, Paid & Owned – mit klaren KPIs.",
      path: "/media"
    },
    {
      icon: Zap,
      title: "New Edge Lab",
      description: "Automationsmotor: Workflows, Integrationen, KI-Agenten & Dashboards.",
      path: "/lab"
    }
  ];

  return (
    <section className="relative py-24 md:py-32 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            Wir bringen Ihr Unternehmen{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              an die Spitze
            </span>{" "}
            Ihrer Branche
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Unser Creative-Tech-Team vereint Strategie-Know-how und Praxiserfahrung, um maßgeschneiderte Kreativ- und Automationslösungen zu entwickeln.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white rounded-3xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-2xl transition-all duration-500"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* CTA Link */}
                <Link 
                  to={service.path}
                  className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all"
                >
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
