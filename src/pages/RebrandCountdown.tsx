import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";

const TARGET = new Date("2026-08-01T00:00:00+02:00").getTime();

function getRemaining() {
  const diff = Math.max(0, TARGET - Date.now());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff / 3600000) % 24);
  const minutes = Math.floor((diff / 60000) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

const Unit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="relative">
      <motion.div
        key={value}
        initial={{ y: -12, opacity: 0, filter: "blur(6px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        className="tabular-nums text-white text-[15vw] md:text-[9vw] lg:text-[8rem] leading-none font-black tracking-tighter"
        style={{ fontFamily: "'DM Serif Display', serif" }}
      >
        {String(value).padStart(2, "0")}
      </motion.div>
    </div>
    <span className="mt-2 md:mt-4 text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50">
      {label}
    </span>
  </div>
);

const RebrandCountdown = () => {
  const [t, setT] = useState(getRemaining());

  useEffect(() => {
    const id = setInterval(() => setT(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <SEOHead
        title="Rebrand incoming — New Edge"
        description="Something new is coming. Countdown to 01.08."
        canonical="/"
      />
      <main className="relative min-h-[100dvh] w-full overflow-hidden bg-black text-white flex flex-col items-center justify-center px-6">
        {/* Ambient gradient */}
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute -top-1/3 left-1/2 h-[80vh] w-[80vh] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.35),transparent_60%)] blur-3xl" />
          <div className="absolute bottom-[-20%] right-[-10%] h-[60vh] w-[60vh] rounded-full bg-[radial-gradient(circle,hsl(var(--accent)/0.25),transparent_60%)] blur-3xl" />
        </div>

        {/* Grain */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
          }}
        />
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative z-10 text-center text-4xl md:text-6xl lg:text-7xl mb-10 md:mb-16 leading-[1.05]"
          style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}
        >
          Rebrand <em className="italic text-white/60">time</em>
        </motion.h1>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="relative z-10 grid grid-cols-4 gap-4 md:gap-10 lg:gap-16"
        >
          <Unit value={t.days} label="Days" />
          <Unit value={t.hours} label="Hours" />
          <Unit value={t.minutes} label="Minutes" />
          <Unit value={t.seconds} label="Seconds" />
        </motion.div>

        {/* Footer date */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="relative z-10 mt-12 md:mt-20 text-xs md:text-sm uppercase tracking-[0.4em] text-white/40"
        >
          01 · 08
        </motion.div>

        {/* CTA */}
        <motion.a
          href="mailto:wenjamin.z@newedgebrand.com"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.6 }}
          className="relative z-10 mt-6 md:mt-8 inline-flex items-center justify-center border-2 border-white/40 bg-white/5 px-7 py-3 text-[10px] md:text-xs uppercase tracking-[0.4em] text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-black"
        >
          anfragen?
        </motion.a>
      </main>
    </>
  );
};

export default RebrandCountdown;
