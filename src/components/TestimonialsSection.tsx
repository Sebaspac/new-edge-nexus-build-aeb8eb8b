import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";
const testimonials = [
  {
    text: "New Edge hat unsere internen Abläufe komplett neu gedacht. Durch die KI-gestützten Workflows sparen wir unglaublich viel Zeit im Projektgeschäft.",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=150&h=150&fit=crop&crop=face",
    name: "Kathrin Mertens",
    role: "Geschäftsführerin, Eventlogistik",
  },
  {
    text: "Die Automatisierungslösungen von New Edge haben unsere Effizienz massiv gesteigert. Besonders das zentrale Dashboard gibt uns endlich einen klaren Blick auf unsere KPI´s.",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=150&h=150&fit=crop&crop=face",
    name: "Emre Yılmaz",
    role: "CEO, Automobilzulieferer",
  },
  {
    text: "Die Implementierung lief erstaunlich reibungslos. Das Team hat unsere Anforderungen schnell verstanden, die bestehenden Tools clever integriert und die Übergabe so vorbereitet, dass unser Team ohne Frust weiterarbeiten konnte.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    name: "Anna Kowalski",
    role: "Head of Marketing, E-Commerce",
  },
  {
    text: "Klare Markenstrategie, professionelle Website und durchgängige Begleitung New Edge hat unsere Außenkommunikation auf ein neues Niveau gehoben.",
    image: "",
    name: "Rocio Morales",
    role: "Geschäftsführerin & Coach",
  },
  {
    text: "Mit New Edge haben wir zuerst klein gestartet - ein Reporting-Dashboard und ein paar automatisierte Workflows. Inzwischen laufen komplette Kampagnen automatisiert. Das Team denkt wie eine verlängerter Arm unseres eigenen Teams.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    name: "Stefan Neuhaus",
    role: "Geschäftsführer, IT-Dienstleistungen",
  },
  {
    text: "Dank New Edge konnten wir auch ohne technisches Verständnis schnell ein funktionierendes System umsetzen.",
    image: "",
    name: "Priya Sharma",
    role: "Brand Managerin, Food & Beverage",
  },
  {
    text: "Durch New Edge konnten wir unseren Online-Auftritt verbessern und die Conversion steigern.",
    image: "",
    name: "Aleksandar Kovačević",
    role: "E-Commerce Lead, Fashion Retail",
  },
  {
    text: "Ein echter Tech-Partner, kein klassisches Agentur-Blabla. Das Team denkt nicht nur mit, sondern liefert messbare Ergebnisse.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    name: "Carolin Bruns",
    role: "COO, Tech-Startup",
  },
];
const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);
export const TestimonialsSection = () => {
  return (
    <section className="bg-white py-12 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl z-10 bg-primary-foreground">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          viewport={{
            once: true,
          }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="mb-0">
              <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#7C3AED]">
                Testimonials
              </span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mt-3 sm:mt-4 md:mt-6 text-center text-black">
            Was unsere Kunden sagen
          </h2>
        </motion.div>

        <div className="flex justify-center gap-3 md:gap-6 mt-6 sm:mt-8 md:mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[400px] sm:max-h-[500px] md:max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};
