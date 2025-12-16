import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "New Edge hat unsere internen Abläufe komplett neu gedacht. Durch die KI-gestützten Workflows sparen wir unglaublich viel Zeit im Projektgeschäft.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Sarah Schmidt",
    role: "Geschäftsführerin",
  },
  {
    text: "Die Automatisierungslösungen von New Edge haben unsere Effizienz massiv gesteigert. Besonders das zentrale Dashboard gibt uns endlich einen klaren Blick auf unsere KPI´s.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Dr. Tobias Werner",
    role: "CEO",
  },
  {
    text: "Die Implementierung lief erstaunlich reibungslos. Das Team hat unsere Anforderungen schnell verstanden, die bestehenden Tools clever integriert und die Übergabe so vorbereitet, dass unser Team ohne Frust weiterarbeiten konnte.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Julia Hoffmann",
    role: "Marketing Direktorin",
  },
  {
    text: "New Edge versteht die Realität von KMUs: wenig Zeit, begrenzte Ressourcen, hoher Druck. Die Lösungen sind praxisnah und so gebaut, dass jeder unseres Teams davon profitiert.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Sabine Albrecht",
    role: "Leiterin Operations",
  },
  {
    text: "Mit New Edge haben wir zuerst klein gestartet - ein Reporting-Dashboard und ein paar automatisierte Workflows. Inzwischen laufen komplette Kampagnen automatisiert. Das Team denkt wie eine verlängerter Arm unseres eigenen Teams.",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "Christian Vogt",
    role: "Geschäftsführer",
  },
  {
    text: "Dank New Edge konnten wir auch ohne technisches Verständnis schnell ein funktionierendes System umsetzen.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Lisa Wagner",
    role: "Brand Managerin",
  },
  {
    text: "Durch New Edge konnten wir unseren Online-Auftritt verbessern und die Conversion steigern.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "David Schneider",
    role: "E-Commerce Manager",
  },
  {
    text: "Ein echter Tech-Partner, kein klassisches Agentur-Blabla. Das Team denkt nicht nur mit, sondern liefert messbare Ergebnisse.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sophie Klein",
    role: "Operations Managerin",
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
            <div className="inline-block px-4 py-1 border border-[#7C3AED]">
              <span className="text-sm font-medium tracking-wider uppercase text-[#7C3AED]">Testimonials</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-6 text-center text-black">
            Was unsere Kunden sagen
          </h2>
          <p className="text-center mt-5 text-gray-600 text-lg">Erfahrungen echter Unternehmen mit New Edge.</p>
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
