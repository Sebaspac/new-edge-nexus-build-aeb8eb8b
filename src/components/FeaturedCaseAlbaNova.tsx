import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { ArrowUpRight, Award } from "lucide-react";
import albanovaWebsite from "@/assets/albanova-website.png";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { MagneticButton } from "@/components/ui/MagneticButton";

const stats = [
  { value: "01", label: "Markenrelaunch", sub: "Identity, Web & System" },
  { value: "02", label: "Konversion ↑", sub: "Klare Conversion-Logik" },
  { value: "03", label: "Sichtbarkeit", sub: "Bayerischer Mittelstandspreis 2026" },
];

export const FeaturedCaseAlbaNova = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.12]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-neutral-950 text-white py-20 md:py-28 lg:py-32"
    >
      <NoiseOverlay opacity={0.06} />
      {/* Soft purple glow */}
      <div
        aria-hidden
        className="absolute -top-32 -left-32 w-[520px] h-[520px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.20) 0%, rgba(124,58,237,0.06) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-7"
          >
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-white/60">
              <Award className="w-3.5 h-3.5 text-[#a855f7]" />
              Featured Case · Bayerischer Mittelstandspreis 2026
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-white">
              AlbaNova.
              <span className="block text-white/50 text-2xl sm:text-3xl lg:text-4xl mt-3">
                Marke, Website & System – ausgezeichnet.
              </span>
            </h2>

            <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-xl" style={{ fontFamily: "Consolas, monospace" }}>
              Wir haben AlbaNova von einer fragmentierten Online-Präsenz zu einem
              kohärenten Marken- und Conversion-System geführt. Das Ergebnis: eine Marke
              mit Haltung, eine Website mit Wirkung – nominiert für den Bayerischen
              Mittelstandspreis 2026.
            </p>

            {/* Stats — outline numbers */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 pt-4 border-t border-white/10">
              {stats.map((s) => (
                <div key={s.value}>
                  <div
                    className="text-3xl md:text-4xl font-light text-transparent leading-none"
                    style={{
                      WebkitTextStroke: "1px rgba(168,85,247,0.7)",
                      fontFamily: "'DM Serif Display', serif",
                    }}
                  >
                    {s.value}
                  </div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.15em] text-white/80">
                    {s.label}
                  </div>
                  <div className="text-[11px] text-white/40 mt-1" style={{ fontFamily: "Consolas, monospace" }}>
                    {s.sub}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <MagneticButton>
                <Link
                  to="/case-study/albanova"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold uppercase text-xs tracking-[0.18em] border-2 border-white hover:bg-transparent hover:text-white transition-colors duration-300"
                >
                  Case ansehen
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </MagneticButton>
              <Link
                to="/case-studies"
                className="text-xs uppercase tracking-[0.18em] text-white/60 hover:text-white border-b border-white/30 hover:border-white pb-1 transition-colors"
              >
                Alle Cases
              </Link>
            </div>
          </motion.div>

          {/* Right: Parallax image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden border border-white/10 bg-black">
              <motion.img
                src={albanovaWebsite}
                alt="AlbaNova Website Case Study"
                style={{ y: imgY, scale: imgScale }}
                className="absolute inset-0 w-full h-full object-cover will-change-transform"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 px-3 py-1.5 bg-black text-[10px] uppercase tracking-[0.2em] text-white">
                AlbaNova · 2026
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseAlbaNova;
