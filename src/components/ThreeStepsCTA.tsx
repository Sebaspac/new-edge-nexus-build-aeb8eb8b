import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import foundersImg from "@/assets/founders-color.webp";
import { SweepLink } from "@/components/ui/SweepButton";
import { FloatingConsultButton } from "@/components/ui/FloatingConsultButton";

/* ── Design tokens ── */
const VIOLET = "#5B21B6";
const VIOLET_DARK = "#2D1060";
const VIOLET_MID = "#7C3AED";
const INK_DEEP = "#1A0A2E";

/* ── Light violet mesh background ── */
const MESH_BG = [
  "radial-gradient(ellipse 90% 70% at 5% 10%, rgba(91,33,182,0.09) 0%, transparent 60%)",
  "radial-gradient(ellipse 70% 60% at 95% 90%, rgba(124,58,237,0.07) 0%, transparent 58%)",
  "radial-gradient(ellipse 50% 40% at 55% 45%, rgba(91,33,182,0.04) 0%, transparent 55%)",
  "#F8F5FF",
].join(", ");
const SERIF: React.CSSProperties = { fontFamily: "'DM Serif Display', serif", fontWeight: 400 };
const MONO: React.CSSProperties = { fontFamily: "Consolas, monospace" };
const L = { text: "#3A3A3A", textMuted: "#555555" };

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
      background: "transparent",
    };

    return (
      <div
        id="cta"
        ref={sectionRef}
        className="relative isolate"
        style={{
          height: "350dvh",
          background: "transparent",
          }}
      >
        <div style={mobilePinStyle} className="overflow-hidden">
          <div className="px-6 pt-16 pb-8 h-full flex flex-col">
            <h2
              className="text-[2rem] leading-[0.94] mb-3 uppercase"
              style={{ ...SERIF, fontStyle: "italic", letterSpacing: "0", color: INK_DEEP }}
            >
              Drei<br />Schritte<br />zum Erfolg
            </h2>

            <div className="mb-3">
              <FloatingConsultButton />
            </div>

            <div className="flex items-center mb-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-wide" style={{ ...MONO, color: INK_DEEP }}>
                  Mit Sebastian Pachon
                </p>
                <p className="text-[0.65rem]" style={{ ...MONO, color: "rgba(26,10,46,0.55)" }}>
                  Gründer und Geschäftsführer New Edge
                </p>
                <a
                  href="tel:+4917660431467"
                  style={{ ...MONO, fontSize: "10px", letterSpacing: "0.1em", color: VIOLET, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "5px", marginTop: "6px", borderBottom: "1px solid rgba(91,33,182,0.25)", paddingBottom: "1px" }}
                >
                  ↗ +49 176 60 431 467
                </a>
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
                        style={{ ...MONO, color: VIOLET }}
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
                    background: mobileStep === i ? VIOLET : "rgba(91,33,182,0.25)",
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
    background: MESH_BG,
  };

  return (
    <div
      id="cta"
      ref={sectionRef}
      className="relative isolate"
      style={{
        height: "280dvh",
        background: "transparent",
      }}
    >
      <div style={pinnedStyle} className="overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 w-full h-full relative">
          <div className="absolute inset-0 grid md:grid-cols-[0.9fr_1.1fr] gap-7 md:gap-12 items-center w-full pt-24 pb-6 md:pt-24 md:pb-8">
            {/* LEFT */}
            <div className="flex flex-col justify-center">
              <h2
                className="text-[clamp(2rem,3.8vw,3rem)] leading-[0.94] mb-4 uppercase"
                style={{ ...SERIF, fontStyle: "italic", letterSpacing: "0", color: INK_DEEP }}
              >
                Drei<br />Schritte<br />zum Erfolg
              </h2>

              <FloatingConsultButton />
              <div className="flex gap-2 mt-4">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="block h-2 transition-all duration-500"
                    style={{
                      background: activeStep === i ? VIOLET : "rgba(91,33,182,0.25)",
                      width: activeStep === i ? "28px" : "10px",
                    }}
                  />
                ))}
              </div>
              <div className="flex items-center mt-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide" style={{ ...MONO, color: INK_DEEP }}>
                    Mit Sebastian Pachon
                  </p>
                  <p className="text-xs" style={{ ...MONO, color: "rgba(26,10,46,0.55)" }}>
                    Gründer und Geschäftsführer New Edge
                  </p>
                  <a
                    href="tel:+4917660431467"
                    style={{ ...MONO, fontSize: "11px", letterSpacing: "0.1em", color: VIOLET, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "8px", borderBottom: "1px solid rgba(91,33,182,0.25)", paddingBottom: "1px" }}
                  >
                    ↗ +49 176 60 431 467
                  </a>
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
                        style={{ ...MONO, color: VIOLET }}
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
