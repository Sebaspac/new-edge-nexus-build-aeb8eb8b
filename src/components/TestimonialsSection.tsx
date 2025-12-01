import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "New Edge hat unsere Prozesse revolutioniert. Die KI-gestützten Workflows sparen uns 30% Zeit im Tagesgeschäft.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Sarah Schmidt",
    role: "Geschäftsführerin",
  },
  {
    text: "Die Implementierung war reibungslos. Das Team hat unsere Anforderungen perfekt verstanden und umgesetzt.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Michael Weber",
    role: "IT-Leiter",
  },
  {
    text: "Endlich eine Agentur, die Design und Technologie perfekt vereint. Unsere Marke ist jetzt zukunftssicher.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Julia Hoffmann",
    role: "Marketing Direktorin",
  },
  {
    text: "Die Automatisierungslösungen haben unsere Effizienz massiv gesteigert. Absolut empfehlenswert!",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Thomas Becker",
    role: "CEO",
  },
  {
    text: "New Edge versteht die Herausforderungen von KMUs. Die Lösungen sind praxisnah und skalierbar.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Anna Müller",
    role: "Projektleiterin",
  },
  {
    text: "Die Edge Methodology hat uns geholfen, unsere Markenidentität neu zu definieren und digital umzusetzen.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Lisa Wagner",
    role: "Brand Managerin",
  },
  {
    text: "Durch die KI-Agenten konnten wir unsere Customer Journey optimieren und die Conversion steigern.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "David Schneider",
    role: "E-Commerce Manager",
  },
  {
    text: "Ein echter Tech-Partner, kein klassisches Agentur-Blabla. New Edge liefert messbare Ergebnisse.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sophie Klein",
    role: "Operations Managerin",
  },
  {
    text: "Die Kombination aus Creative Excellence und intelligenter Automatisierung ist einzigartig am Markt.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Marco Fischer",
    role: "Strategie-Berater",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const TestimonialsSection = () => {
  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="container-xl z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border border-[#7C3AED] text-[#7C3AED] py-1 px-4 rounded-lg text-sm font-medium tracking-wider uppercase">
              Testimonials
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-6 text-center text-black">
            Was unsere Kunden sagen
          </h2>
          <p className="text-center mt-5 text-gray-600 text-lg">
            Erfahrungen echter Unternehmen mit New Edge.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};
