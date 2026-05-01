import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import foundersImg from "@/assets/founders-color.webp";

/* ── Design tokens ── */
const PURPLE = "#7c3aed";
const PURPLE_DARK = "#4c1d95";
const PURPLE_LIGHT = "#6d28d9";
const SERIF: React.CSSProperties = { fontFamily: "'DM Serif Display', serif", fontWeight: 400 };
const MONO: React.CSSProperties = { fontFamily: "Consolas, monospace" };
const L = { text: "#111111", textMuted: "#555555" };

const stepsData = [
  {
    icon: "💬",
    title: "Unverbindliches Erstgespräch",
    desc: "Lass uns quatschen! Bei unserem ersten Gespräch wollen wir dich und dein Business kennenlernen. Wähle einfach und bequem online einen Termin aus.",
  },
  {
    icon: "🎯",
    title: "Gemeinsam Ziele definieren",
    desc: "Erzähl uns von deinen Wünschen und Zielen! Egal, ob mehr Sichtbarkeit, höhere Umsätze oder eine stärkere Kundenbindung — wir legen eine Strategie fest, um deine Ziele zu rocken!",
  },
  {
    icon: "🚀",
    title: "Durchstarten",
    desc: "Let's go! Nachdem wir deine Ziele finalisiert haben, geht's erst richtig los! Mit kreativen Ideen und spannendem Content repräsentieren wir dein Unternehmen als individuelle Brand.",
  },
];

export const ThreeStepsCTA = () => {
  const isMobile = useIsMobile();
  const [activeStep, setActiveStep] = useState(0);
  const [mobileStep, setMobileStep] = useState(0);
  const [pinMode, setPinMode] = useState<"before" | "fixed" | "after">("before");
  const sectionRef = useRef<HTMLDivElement>(null);

  // Desktop scroll-pin logic
  useEffect(() => {
    if (isMobile) return;
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;
    const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
    const updateStep = () => {
      const rect = section.getBoundingClientRect();
      const pinDistance = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = clamp(-rect.top / pinDistance, 0, 1);
      const nextMode = rect.top > 0 ? "before" : rect.bottom <= window.innerHeight ? "after" : "fixed";
      const nextStep = progress < 0.34 ? 0 : progress < 0.67 ? 1 : 2;

      setPinMode((current) => (current === nextMode ? current : nextMode));
      setActiveStep((current) => (current === nextStep ? current : nextStep));
    };
    const requestStepUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateStep);
    };

    window.addEventListener("scroll", requestStepUpdate, { passive: true });
    window.addEventListener("resize", requestStepUpdate);
    requestStepUpdate();
    return () => {
      window.removeEventListener("scroll", requestStepUpdate);
      window.removeEventListener("resize", requestStepUpdate);
      cancelAnimationFrame(frame);
    };
  }, [isMobile]);

  // Mobile scroll-driven logic
  useEffect(() => {
    if (!isMobile) return;
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;
    const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));
    const update = () => {
      const rect = section.getBoundingClientRect();
      const pinDist = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = clamp(-rect.top / pinDist, 0, 1);
      const nextMode = rect.top > 0 ? "before" : rect.bottom <= window.innerHeight ? "after" : "fixed";
      const nextStep = progress < 0.34 ? 0 : progress < 0.67 ? 1 : 2;
      setPinMode((c) => (c === nextMode ? c : nextMode));
      setMobileStep((c) => (c === nextStep ? c : nextStep));
    };
    const onScroll = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(update); };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(frame); };
  }, [isMobile]);

  /* ── MOBILE LAYOUT ── */
  if (isMobile) {
    const mobilePinStyle: React.CSSProperties = {
      position: pinMode === "fixed" ? "fixed" : "absolute",
      top: pinMode === "after" ? "auto" : 0,
      bottom: pinMode === "after" ? 0 : "auto",
      left: 0, right: 0, width: "100%", height: "100dvh", zIndex: 1,
      background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 50%, ${PURPLE_LIGHT} 100%)`,
    };

    return (
      <div
        id="cta"
        ref={sectionRef}
        className="relative isolate"
        style={{
          height: "350dvh",
          background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 50%, ${PURPLE_LIGHT} 100%)`,
        }}
      >
        <div style={mobilePinStyle} className="overflow-hidden">
          <div className="px-6 pt-16 pb-8 h-full flex flex-col">
            <h2
              className="text-[2.2rem] leading-[0.94] mb-3 uppercase"
              style={{ ...SERIF, letterSpacing: "0", color: "#ffffff" }}
            >
              Drei<br />Schritte<br />zum Erfolg
            </h2>

            <Link to="/kontakt">
              <button
                className="inline-flex w-fit items-center gap-2 px-5 py-2.5 text-[0.8rem] font-medium transition-all hover:opacity-90 mb-3"
                style={{ background: "#ffffff", color: PURPLE_DARK, ...MONO, border: "none" }}
              >
                Erstgespräch vereinbaren
              </button>
            </Link>

            <div className="flex items-center gap-3 mb-5">
              <img
                src={foundersImg}
                alt="Sebastian Pachon — Gründer New Edge"
                className="w-10 h-10 object-cover object-[25%_20%]"
                style={{ borderRadius: "50%" }}
              />
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-white" style={MONO}>
                  Mit Sebastian Pachon
                </p>
                <p className="text-[0.65rem] text-white/70" style={MONO}>
                  Gründer und Geschäftsführer New Edge
                </p>
              </div>
            </div>

            <div className="relative flex-1" style={{ minHeight: 200 }}>
              {stepsData.map((card, i) => {
                const isActive = mobileStep === i;
                const isPast = mobileStep > i;
                return (
                  <div
                    key={card.title}
                    className="absolute inset-x-0 top-0 p-5 flex flex-col will-change-transform"
                    style={{
                      background: "rgba(255,255,255,0.98)",
                      opacity: isActive ? 1 : 0,
                      transform: isPast
                        ? "translateX(-120%) rotate(-8deg) scale(0.9)"
                        : isActive
                          ? "translateX(0) rotate(0deg) scale(1)"
                          : "translateX(60px) scale(0.92)",
                      transition: "opacity 500ms ease, transform 600ms cubic-bezier(0.4,0,0.2,1)",
                      pointerEvents: isActive ? "auto" : "none",
                      boxShadow: "0 16px 50px rgba(0,0,0,0.18)",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{card.icon}</span>
                      <span
                        className="text-[0.75rem] font-bold uppercase tracking-widest"
                        style={{ ...MONO, color: PURPLE }}
                      >
                        Schritt {i + 1}
                      </span>
                    </div>
                    <h3
                      className="text-[1rem] font-bold mb-2"
                      style={{ ...SERIF, letterSpacing: "-0.01em", color: L.text }}
                    >
                      {card.title}
                    </h3>
                    <p className="text-[0.82rem] leading-[1.6]" style={{ color: L.textMuted, ...MONO }}>
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center gap-2 mt-auto pt-4">
              {stepsData.map((_, i) => (
                <span
                  key={i}
                  className="block h-2 transition-all duration-500"
                  style={{
                    background: mobileStep === i ? "#ffffff" : "rgba(255,255,255,0.3)",
                    width: mobileStep === i ? "28px" : "10px",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ── DESKTOP LAYOUT ── */
  const pinnedStyle: React.CSSProperties = {
    position: pinMode === "fixed" ? "fixed" : "absolute",
    top: pinMode === "after" ? "auto" : 0,
    bottom: pinMode === "after" ? 0 : "auto",
    left: 0,
    right: 0,
    width: "100%",
    height: "100dvh",
    zIndex: 1,
    background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 50%, ${PURPLE_LIGHT} 100%)`,
  };

  return (
    <div
      id="cta"
      ref={sectionRef}
      className="relative isolate"
      style={{
        height: "280dvh",
        background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 50%, ${PURPLE_LIGHT} 100%)`,
      }}
    >
      <div style={pinnedStyle} className="overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 w-full h-full relative">
          <div className="absolute inset-0 grid md:grid-cols-[0.9fr_1.1fr] gap-7 md:gap-12 items-center w-full pt-24 pb-6 md:pt-24 md:pb-8">
            {/* LEFT */}
            <div className="flex flex-col justify-center">
              <h2
                className="text-[clamp(2rem,4.4vw,3.8rem)] leading-[0.94] mb-4 uppercase"
                style={{ ...SERIF, letterSpacing: "0", color: "#ffffff" }}
              >
                Drei<br />Schritte<br />zum Erfolg
              </h2>
              
              <Link to="/kontakt">
                <button
                  className="inline-flex w-fit items-center gap-2 px-5 py-2.5 text-[0.8rem] font-medium transition-all hover:opacity-90 hover:-translate-y-0.5"
                  style={{ background: "#ffffff", color: PURPLE_DARK, ...MONO, border: "none" }}
                >
                  Erstgespräch vereinbaren
                </button>
              </Link>
              <div className="flex gap-2 mt-4">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="block h-2 transition-all duration-500"
                    style={{
                      background: activeStep === i ? "#ffffff" : "rgba(255,255,255,0.3)",
                      width: activeStep === i ? "28px" : "10px",
                    }}
                  />
                ))}
              </div>
              <div className="flex items-center gap-3 mt-4">
                <img
                  src={foundersImg}
                  alt="Sebastian Pachon — Gründer New Edge"
                  className="w-12 h-12 object-cover object-[25%_20%]"
                  style={{ borderRadius: "50%" }}
                />
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-white" style={MONO}>
                    Mit Sebastian Pachon
                  </p>
                  <p className="text-xs text-white/70" style={MONO}>
                    Gründer und Geschäftsführer New Edge
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT — scroll-driven cards */}
            <div className="relative h-[390px] flex items-center" aria-live="polite">
              {stepsData.map((card, i) => {
                const isActive = activeStep === i;
                return (
                  <div
                    key={card.title}
                    className="absolute inset-x-0 top-1/2 min-h-[230px] p-7 md:p-10 flex flex-col justify-center will-change-transform"
                    style={{
                      background: "rgba(255,255,255,0.98)",
                      opacity: isActive ? 1 : 0,
                      transform: `translate3d(0, ${isActive ? "-50%" : i < activeStep ? "-64%" : "-36%"}, 0) scale(${isActive ? 1 : 0.94}) rotate(${isActive ? -2 : 0}deg)`,
                      transition: "opacity 520ms cubic-bezier(0.22,1,0.36,1), transform 520ms cubic-bezier(0.22,1,0.36,1)",
                      pointerEvents: isActive ? "auto" : "none",
                      boxShadow: "0 26px 70px rgba(0,0,0,0.22)",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{card.icon}</span>
                      <span
                        className="text-[0.8rem] font-bold uppercase tracking-widest"
                        style={{ ...MONO, color: PURPLE }}
                      >
                        Schritt {i + 1}
                      </span>
                    </div>
                    <h3
                      className="text-[1.1rem] font-bold mb-3"
                      style={{ ...SERIF, letterSpacing: "-0.01em", color: L.text }}
                    >
                      {card.title}
                    </h3>
                    <p className="text-[0.9rem] leading-[1.7]" style={{ color: L.textMuted, ...MONO }}>
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
