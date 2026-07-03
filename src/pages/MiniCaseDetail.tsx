import { lazy, Suspense, useMemo } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { MobileNavigation } from "@/components/MobileNavigation";
import { AuroraFlow } from "@/components/ui/aurora-flow";
import { ThreeStepsCTA } from "@/components/ThreeStepsCTA";
import { miniCaseDetail as T_STATIC } from "@/content/pages/miniCaseDetail";
import { useCms } from "@/hooks/useCms";
import { usePainPoints } from "@/hooks/usePainPoints";

const Footer = lazy(() => import("@/components/Footer").then((m) => ({ default: m.Footer })));

/* ── Design tokens — aligned with PainPoint page ── */
const PURPLE = "#5658DF";
const PURPLE_LIGHT = "#9A85F6";
const PURPLE_BG = "rgba(86,88,223,0.08)";
const L = {
  bg: "#F8F5FF",
  bgAlt: "#FFFFFF",
  text: "#17172E",
  textMuted: "#3C3C47",
  textLight: "#8A8494",
  border: "#E6E6E6",
};
const SERIF: React.CSSProperties = { fontFamily: "'DM Serif Display', serif", fontWeight: 400 };
const MONO: React.CSSProperties = { fontFamily: "Consolas, monospace" };

const Label = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <span
    className="inline-block text-[0.7rem] font-semibold uppercase tracking-[0.14em] mb-3"
    style={{ color: light ? PURPLE_LIGHT : PURPLE, ...MONO }}
  >
    {children}
  </span>
);

/** Sichtbarer „Beispiel"-Hinweis — Pflicht: Cases sind illustrativ, keine echten Kundendaten. */
const ExampleBadge = ({ label }: { label: string }) => (
  <span
    className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] px-3 py-1.5"
    style={{
      color: PURPLE_LIGHT,
      border: "1px solid rgba(154,133,246,0.35)",
      background: "rgba(154,133,246,0.08)",
      ...MONO,
    }}
  >
    <span className="w-1.5 h-1.5 rounded-full" style={{ background: PURPLE_LIGHT }} aria-hidden />
    {label}
  </span>
);

const MiniCaseDetail = () => {
  const { slug, caseId } = useParams<{ slug: string; caseId: string }>();
  const { pathname } = useLocation();
  const basePath = pathname.startsWith("/industrien") ? "/industrien" : "/loesungen";

  // Inhalte live aus dem CMS (Strapi); Fallback: statischer Content-Layer
  const t = useCms("mini-case-detail", T_STATIC);
  const { map: painPoints, defaultPainPoint } = usePainPoints();

  const content = useMemo(() => (slug && painPoints[slug]) || defaultPainPoint, [slug, painPoints, defaultPainPoint]);
  const cases = content.miniCases ?? [];
  const index = cases.findIndex((c) => c.id === caseId);
  const miniCase = index >= 0 ? cases[index] : undefined;

  const overviewHref = `${basePath}/${slug}#cases`;

  // Fallback wenn Case nicht existiert
  if (!miniCase) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center" style={{ background: "#0A0A18", color: "#FBF9FF", ...MONO }}>
        <p className="text-lg">{t.notFound.message}</p>
        <Link to={overviewHref} className="underline" style={{ color: PURPLE_LIGHT }}>
          {t.notFound.backLabel}
        </Link>
      </div>
    );
  }

  const prev = index > 0 ? cases[index - 1] : undefined;
  const next = index < cases.length - 1 ? cases[index + 1] : undefined;

  return (
    <>
      <SEOHead
        title={`${miniCase.title}${t.seo.titleSuffix}`}
        description={miniCase.teaser}
        canonical={`${basePath}/${slug}/case/${miniCase.id}`}
      />

      <div className="min-h-screen" style={{ ...MONO, overflowX: "clip" }}>
        {/* ═══ HERO — dark, AuroraFlow (wie Homepage) ═══ */}
        <section className="relative overflow-hidden flex flex-col text-white" style={{ minHeight: "70dvh", background: "#0A0A18" }}>
          <div aria-hidden style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
            <AuroraFlow />
          </div>
          <MobileNavigation onContactClick={() => {}} theme="dark" />

          <div className="flex-1 flex items-center relative z-10">
            <div className="max-w-[900px] w-full mx-auto px-6 lg:px-8 pt-28 md:pt-32 pb-16">
              <Link
                to={overviewHref}
                className="inline-flex items-center gap-2 text-[0.8rem] mb-8 hover:opacity-80 transition-opacity"
                style={{ color: PURPLE_LIGHT, ...MONO }}
              >
                <ArrowLeft className="w-4 h-4" />
                {t.backLink.prefix}{content.hero.overlabel ? t.backLink.toPhases : t.backLink.toOverview}
              </Link>

              <div className="flex flex-wrap items-center gap-3 mb-6">
                <ExampleBadge label={miniCase.badge ?? t.exampleBadge} />
                <Label light>{miniCase.phaseLabel}</Label>
              </div>

              <h1 className="text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.08] mb-5" style={{ ...SERIF, letterSpacing: "-0.02em" }}>
                {miniCase.title}
              </h1>
              <p className="text-[0.95rem] leading-[1.7] max-w-[640px]" style={{ color: "#A8A3B3" }}>
                {miniCase.teaser}
              </p>
            </div>
          </div>
        </section>

        {/* ═══ CONTENT — light ═══ */}
        <div style={{ background: L.bg, color: L.text }}>
          {/* Scenario / Disclaimer band */}
          <div style={{ background: L.bg, borderBottom: `1px solid ${L.border}` }}>
            <div className="max-w-[900px] mx-auto px-6 lg:px-8 py-6">
              <p className="text-[0.8rem] leading-[1.6]" style={{ color: L.textMuted, ...MONO }}>
                <span style={{ color: PURPLE, fontWeight: 700 }}>{miniCase.scenario}</span>
                {" "}{miniCase.disclaimer ?? t.scenarioDisclaimer}
              </p>
            </div>
          </div>

          {/* Metrics */}
          <div className="max-w-[900px] mx-auto px-6 lg:px-8 pt-16 md:pt-20">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px" style={{ background: L.border, border: `1px solid ${L.border}` }}>
              {miniCase.metrics.map((m, i) => (
                <div key={i} className="p-7 text-center" style={{ background: L.bgAlt }}>
                  <div className="text-[clamp(1.8rem,3vw,2.4rem)] mb-1" style={{ ...SERIF, color: PURPLE }}>
                    {m.value}
                  </div>
                  <div className="text-[0.8rem] leading-[1.5]" style={{ color: L.textMuted, ...MONO }}>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ausgangslage */}
          <section className="max-w-[900px] mx-auto px-6 lg:px-8 pt-16 md:pt-20">
            <Label>{t.labels.situation}</Label>
            <p className="text-[1.05rem] leading-[1.75]" style={{ color: L.textMuted, ...SERIF }}>
              {miniCase.situation}
            </p>
          </section>

          {/* Vorgehen */}
          <section className="max-w-[900px] mx-auto px-6 lg:px-8 pt-14 md:pt-16">
            <Label>{t.labels.approach}</Label>
            <ul className="flex flex-col gap-4 list-none mt-2">
              {miniCase.approach.map((step, i) => (
                <li key={i} className="flex items-start gap-4 text-[0.95rem]" style={{ color: L.text, ...MONO }}>
                  <span
                    className="shrink-0 w-7 h-7 flex items-center justify-center text-[0.8rem] font-bold mt-0.5"
                    style={{ background: PURPLE_BG, border: `1px solid ${PURPLE}`, color: PURPLE }}
                  >
                    {i + 1}
                  </span>
                  <span className="leading-[1.65] pt-0.5">{step}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Ergebnis */}
          <section className="max-w-[900px] mx-auto px-6 lg:px-8 pt-14 md:pt-16">
            <Label>{t.labels.result}</Label>
            <p className="text-[1.05rem] leading-[1.75]" style={{ color: L.textMuted, ...SERIF }}>
              {miniCase.result}
            </p>
          </section>

          {/* Quote */}
          {miniCase.quote && (
            <section className="max-w-[900px] mx-auto px-6 lg:px-8 pt-14 md:pt-16">
              <figure style={{ borderLeft: `2px solid ${PURPLE}`, paddingLeft: "24px" }}>
                <blockquote className="text-[1.15rem] leading-[1.5]" style={{ ...SERIF, fontStyle: "italic", color: L.text }}>
                  „{miniCase.quote.text}"
                </blockquote>
                <figcaption className="text-[0.78rem] mt-3" style={{ color: L.textLight, ...MONO }}>
                  {miniCase.quote.author}
                </figcaption>
              </figure>
            </section>
          )}

          {/* Prev / Next + CTA */}
          <section className="max-w-[900px] mx-auto px-6 lg:px-8 pt-16 md:pt-20 pb-4">
            <div className="grid sm:grid-cols-2 gap-px" style={{ background: L.border, border: `1px solid ${L.border}` }}>
              {prev ? (
                <Link to={`${basePath}/${slug}/case/${prev.id}`} className="group p-6 flex flex-col gap-1 hover:bg-[rgba(86,88,223,0.03)] transition-colors" style={{ background: L.bgAlt }}>
                  <span className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.14em]" style={{ color: L.textLight, ...MONO }}>
                    <ArrowLeft className="w-3.5 h-3.5" /> {prev.phaseLabel}
                  </span>
                  <span className="text-[0.95rem]" style={{ ...SERIF, color: L.text }}>{prev.title}</span>
                </Link>
              ) : <div style={{ background: L.bgAlt }} />}
              {next ? (
                <Link to={`${basePath}/${slug}/case/${next.id}`} className="group p-6 flex flex-col gap-1 items-end text-right hover:bg-[rgba(86,88,223,0.03)] transition-colors" style={{ background: L.bgAlt }}>
                  <span className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.14em]" style={{ color: L.textLight, ...MONO }}>
                    {next.phaseLabel} <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[0.95rem]" style={{ ...SERIF, color: L.text }}>{next.title}</span>
                </Link>
              ) : <div style={{ background: L.bgAlt }} />}
            </div>
          </section>

          {/* CTA — identisch zur Homepage (mit Sebastian) */}
          <ThreeStepsCTA />
        </div>

        <Suspense fallback={<div className="min-h-[300px]" />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default MiniCaseDetail;
