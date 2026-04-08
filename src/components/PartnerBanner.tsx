import { motion } from "framer-motion";
import bayMpLogo from "@/assets/partners/bayerischer-mittelstandspreis.jpg";
import bafaLogo from "@/assets/partners/bafa.png";
import idcLogo from "@/assets/partners/idc-community.png";

const partners = [
  { src: bayMpLogo, alt: "Bayerischer Mittelstandspreis 2026", label: "Partner" },
  { src: bafaLogo, alt: "BAFA-akkreditiert", label: "BAFA-akkreditiert" },
  { src: idcLogo, alt: "IDC Community – International akkreditiert", label: "International akkreditiert" },
];

export const PartnerBanner = () => {
  return (
    <section className="bg-primary-foreground py-12 md:py-16 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-bold uppercase tracking-widest text-muted-foreground mb-8"
        >
          Wir sind Partner von · BAFA-akkreditiert · International akkreditiert
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-14">
          {partners.map((p, i) => (
            <motion.div
              key={p.alt}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center gap-2"
            >
              <img
                src={p.src}
                alt={p.alt}
                className="h-12 md:h-16 w-auto object-contain"
                loading="lazy"
              />
              <span className="text-xs text-muted-foreground font-medium">{p.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
