import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Check, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import { MobileNavigation } from "@/components/MobileNavigation";
import SEOHead from "@/components/SEOHead";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { EdgePillButton } from "@/components/ui/EdgeCta";
import { ROI_INDUSTRIES, ROI_ENTRY, BRANCHES, PAINFIELDS, NR_TO_PAIN, ROI_APPS, type RoiUseCase, type PainId } from "@/content/roiAudit";

const Footer = lazy(() => import("@/components/Footer").then((m) => ({ default: m.Footer })));

/* ── NEWEDGE CI (Rebrush 2026-07) ── */
const OUTFIT = "'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
const VIOLET = "#5658DF";
const VIOLET_DARK = "#4446C4";
const VIOLET_LIGHT = "#8B8DF0";
const INK_DEEP = "#17172E";
const INK = "#3C3C47";
const PAPER = "#F8F5FF";
const PAPER_PURE = "#FFFFFF";
const HAIRLINE = "rgba(86,88,223,0.16)";
const EASE = [0.22, 1, 0.36, 1] as const;
const ROI_GRADIENT = "linear-gradient(150deg, #2B2A6E 0%, #4244C9 45%, #5658DF 100%)";

/** n8n-Webhook für die Lead-Zustellung. Leer = Test-Modus (zeigt Erfolg, sendet nicht). */
const ROI_WEBHOOK_URL = "";

const MATURITY = [
  { id: "none", t: "Noch gar nicht", d: "Fast alles läuft manuell" },
  { id: "some", t: "Erste Tools", d: "ChatGPT, Zapier o. Ä. im Einsatz" },
  { id: "advanced", t: "Schon einige Automationen", d: "Läuft, aber unsystematisch" },
] as const;
type Maturity = (typeof MATURITY)[number]["id"];
const READINESS: Record<Maturity, number> = { none: 0.85, some: 1.0, advanced: 1.1 };
const REALISM_DEFAULT: Record<Maturity, number> = { none: 32, some: 45, advanced: 55 };
const HOURS_PER_FTE = 1600;
const clamp = (v: number, lo: number, hi: number) => Math.min(Math.max(v, lo), hi);

/* ── Methodik: reale ROI-Spanne (Ausreißer gedeckelt), skaliert auf Reifegrad + Teamgröße, minus ~15 % laufende Kosten ── */
function ucValue(uc: RoiUseCase, t: number, readiness: number, teamFactor: number) {
  const lo = uc.roiMin;
  const hi = uc.roiMin > 0 ? Math.min(uc.roiMax, uc.roiMin * 3) : uc.roiMax;
  return (lo + t * (hi - lo)) * readiness * teamFactor;
}
const netOf = (v: number) => v * 0.85;
const leverImpl = (uc: RoiUseCase) => 1500 + (10 - uc.effort) * 900;
const effortLabel = (e: number) => (e >= 8 ? "niedrig" : e >= 6 ? "mittel" : "hoch");

function fmtEur(n: number) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(".", ",") + " Mio. €";
  if (n >= 1000) return Math.round(n / 1000) + " Tsd. €";
  return Math.round(n) + " €";
}
const fmtEurExact = (n: number) => n.toLocaleString("de-DE") + " €";
const fmtNum = (n: number) => Math.round(n).toLocaleString("de-DE");
const fmtDec = (n: number) => n.toFixed(1).replace(".", ",");

function useAnimatedNumber(target: number) {
  const [display, setDisplay] = useState(target);
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) { setDisplay(target); return; }
    let raf = 0; const from = display; const diff = target - from; const dur = 500; let start: number | null = null;
    if (diff === 0) return;
    const stepFn = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      setDisplay(from + diff * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(stepFn);
    };
    raf = requestAnimationFrame(stepFn);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);
  return display;
}

const labelStyle: React.CSSProperties = { fontFamily: OUTFIT, fontSize: "13px", fontWeight: 600, color: INK_DEEP };
const inputStyle: React.CSSProperties = {
  width: "100%", padding: "12px 14px", border: `1.5px solid ${HAIRLINE}`, borderRadius: "10px",
  fontSize: "15px", fontFamily: OUTFIT, color: INK_DEEP, background: PAPER_PURE, outline: "none",
};

type Field = { pf: (typeof PAINFIELDS)[number]; rep: RoiUseCase; apps: string[] };

const RoiRechner = () => {
  const [step, setStep] = useState(1);
  const [brancheId, setBrancheId] = useState<string | null>(null);
  const [team, setTeam] = useState(12);
  const [selected, setSelected] = useState<Set<PainId>>(new Set());
  const [usedApps, setUsedApps] = useState<Set<string>>(new Set());
  const [maturity, setMaturity] = useState<Maturity | null>(null);
  const [realism, setRealism] = useState(45);
  const [lens, setLens] = useState<"geld" | "zeit" | "wachstum">("geld");

  const [lead, setLead] = useState({ name: "", email: "", company: "" });
  const [leadDone, setLeadDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [revealed, setRevealed] = useState(false); // Analyse erst nach den Fragen zeigen

  const branche = useMemo(() => BRANCHES.find((b) => b.id === brancheId) || null, [brancheId]);
  const teamFactor = clamp(team / 20, 0.7, 2.0);
  const readiness = maturity ? READINESS[maturity] : 1.0;
  const t = realism / 100;

  // Ein repräsentativer Use Case je Persona für die gewählte Branche (bester Score aus den gebündelten Industrien)
  const fields = useMemo<Field[]>(() => {
    if (!branche) return [];
    const pooled = branche.industryIds.flatMap((iid) => ROI_INDUSTRIES.find((i) => i.id === iid)?.useCases || []);
    return PAINFIELDS.map((pf) => {
      const cands = pooled.filter((u) => NR_TO_PAIN[u.nr] === pf.id);
      if (!cands.length) return null;
      const rep = cands.slice().sort((a, b) => b.score - a.score || b.roiMax - a.roiMax)[0];
      // Kuratierte, real in DE je Branche genutzte Apps für dieses Feld (anklickbar)
      const apps = ROI_APPS[branche.id]?.[pf.id] ?? [];
      return { pf, rep, apps };
    }).filter(Boolean) as Field[];
  }, [branche]);

  const estimated = useMemo(
    () => !!branche && branche.industryIds.some((iid) => ROI_INDUSTRIES.find((i) => i.id === iid)?.estimated),
    [branche]
  );

  const calc = useMemo(() => {
    if (!branche || fields.length === 0) return null;
    const sel = fields.filter((f) => selected.has(f.pf.id));
    const rows = sel.map((f) => ({ ...f, net: netOf(ucValue(f.rep, t, readiness, teamFactor)) })).sort((a, b) => b.net - a.net);
    const totalNet = rows.reduce((s, r) => s + r.net, 0);
    const netLo = sel.reduce((s, f) => s + netOf(ucValue(f.rep, 0, readiness, teamFactor)), 0);
    const netHi = sel.reduce((s, f) => s + netOf(ucValue(f.rep, 1, readiness, teamFactor)), 0);
    const invest = ROI_ENTRY.price + sel.reduce((s, f) => s + leverImpl(f.rep), 0);
    const payback = totalNet > 0 ? invest / (totalNet / 12) : 0;
    const fullNet = fields.reduce((s, f) => s + netOf(ucValue(f.rep, t, readiness, teamFactor)), 0);
    const share = fullNet > 0 ? Math.round((totalNet / fullNet) * 100) : 0;
    const hoursYear = sel.reduce((s, f) => s + f.rep.hours * 46 * teamFactor, 0);
    const fte = hoursYear / HOURS_PER_FTE;
    return { sel, rows, totalNet, netLo, netHi, invest, payback, fullNet, share, hoursYear, fte, maxNet: rows[0]?.net || 1, topField: rows[0] };
  }, [branche, fields, selected, t, readiness, teamFactor]);

  const animatedNet = useAnimatedNumber(calc?.totalNet || 0);

  const toggle = (id: PainId) =>
    setSelected((prev) => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });
  const toggleApp = (app: string) =>
    setUsedApps((prev) => { const n = new Set(prev); n.has(app) ? n.delete(app) : n.add(app); return n; });
  const chooseMaturity = (m: Maturity) => { setMaturity(m); setRealism(REALISM_DEFAULT[m]); };

  const submitLead = async () => {
    setSending(true);
    const payload = {
      ...lead, branche: branche?.label, team,
      felder: calc?.sel.map((f) => f.pf.name), apps: Array.from(usedApps), maturity, potentialNet: Math.round(calc?.totalNet || 0),
    };
    try {
      if (ROI_WEBHOOK_URL) await fetch(ROI_WEBHOOK_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      else await new Promise((r) => setTimeout(r, 800));
    } catch { /* serverseitig erneut versuchbar */ }
    setSending(false); setLeadDone(true);
  };

  const canNext = (step === 1 && !!brancheId) || (step === 2 && selected.size > 0) || (step === 3 && !!maturity);

  return (
    <>
      <SEOHead
        title="KI-Hebel-Audit — Ihre KI-Abteilung nach Branche | NEWEDGE"
        description="Branchenspezifisches Kurz-Audit: welche Rollen Ihrer KI-Abteilung sich zuerst auszahlen — in Euro, freigesetzten Stunden und Wachstums-Kapazität. Kostenlos."
        canonical="/roi-rechner"
      />
      <style>{`
        .roi-range{-webkit-appearance:none;appearance:none;width:100%;height:6px;border-radius:99px;outline:none;cursor:pointer}
        .roi-range::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:22px;height:22px;border-radius:50%;background:${VIOLET};cursor:pointer;box-shadow:0 2px 8px rgba(86,88,223,.4);border:2px solid #fff}
        .roi-range::-moz-range-thumb{width:22px;height:22px;border-radius:50%;background:${VIOLET};border:2px solid #fff;cursor:pointer}
        .roi-input:focus{border-color:${VIOLET} !important;box-shadow:0 0 0 3px rgba(86,88,223,.14)}
        .lk-fill{transition:width .35s cubic-bezier(.22,1,.36,1)}
        @media print {
          @page { margin: 14mm; }
          body { background:#fff !important; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
          nav, .roi-noprint { display:none !important; }
          #roi-report { box-shadow:none !important; }
        }
      `}</style>

      <div className="min-h-screen overflow-x-hidden" style={{ background: PAPER, color: INK }}>
        <NoiseOverlay opacity={0.03} fixed zIndex={2} />
        <MobileNavigation onContactClick={() => {}} theme="dark" />

        {/* ── HERO (nur Phase 1) ── */}
        <section className="roi-noprint" style={{ display: revealed ? "none" : "block", maxWidth: "1140px", margin: "0 auto", padding: "clamp(104px,15vh,150px) clamp(20px,4vw,40px) clamp(20px,3vw,32px)", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }}>
            <p style={{ fontFamily: OUTFIT, fontWeight: 700, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", color: VIOLET, marginBottom: "16px" }}>KI-Hebel-Audit</p>
            <h1 style={{ color: INK_DEEP, textWrap: "balance", maxWidth: "20ch", margin: "0 auto" }}>
              Welche Rollen Ihre <span style={{ color: VIOLET }}>KI-Abteilung</span> zuerst braucht.
            </h1>
            <p style={{ fontFamily: OUTFIT, color: INK, maxWidth: "62ch", margin: "20px auto 0", fontSize: "17px" }}>
              Wählen Sie Ihre Branche und die Mitglieder Ihrer künftigen KI-Abteilung. Sie sehen das Potenzial in Euro, freigesetzten Stunden und Wachstums-Kapazität — pro Rolle, aus über 40 realen Automatisierungen.
            </p>
          </motion.div>
        </section>

        {/* ── MAIN ── */}
        <section style={{ maxWidth: "1140px", margin: "0 auto", padding: `${revealed ? "clamp(104px,15vh,150px)" : "0"} clamp(20px,4vw,40px) clamp(72px,9vw,112px)` }}>
          <div className="max-w-[900px] mx-auto">

            {/* PHASE 1 — Fragen (Analyse verborgen) */}
            <div style={{ display: revealed ? "none" : "block" }}>
              <div style={{ background: PAPER_PURE, borderRadius: "18px", border: `1px solid ${HAIRLINE}`, boxShadow: "0 18px 50px -30px rgba(23,23,46,0.35)", padding: "clamp(24px,3vw,40px)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "28px" }}>
                  {[1, 2, 3].map((i) => (
                    <span key={i} style={{ width: i === step ? "22px" : "8px", height: "8px", borderRadius: "99px", background: i === step ? VIOLET : i < step ? VIOLET_LIGHT : HAIRLINE, transition: "all .3s ease" }} />
                  ))}
                  <span style={{ marginLeft: "auto", fontFamily: OUTFIT, fontSize: "13px", fontWeight: 500, color: "#8A85A0" }}>Schritt {step} von 3</span>
                </div>

                {/* STEP 1 — Branche + Team */}
                {step === 1 && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                    <StepHead title="Ihre Branche" sub="Wir gleichen mit realen Automatisierungs-Werten aus Ihrem Anwendungsfeld ab." />
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
                      {BRANCHES.map((b) => {
                        const active = brancheId === b.id;
                        return (
                          <button key={b.id} type="button" onClick={() => { setBrancheId(b.id); setSelected(new Set()); }}
                            style={{ textAlign: "left", border: `1.5px solid ${active ? VIOLET : HAIRLINE}`, background: active ? "rgba(86,88,223,0.06)" : PAPER_PURE, borderRadius: "12px", padding: "14px 16px", cursor: "pointer", transition: "border-color .18s, background .18s" }}>
                            <div style={{ fontFamily: OUTFIT, fontSize: "11px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: VIOLET, marginBottom: "3px" }}>{b.cool}</div>
                            <div style={{ fontFamily: OUTFIT, fontWeight: 700, fontSize: "15px", color: active ? VIOLET : INK_DEEP }}>{b.label}</div>
                            <div style={{ fontFamily: OUTFIT, fontSize: "12.5px", color: "#8A85A0", marginTop: "2px" }}>{b.sub}</div>
                          </button>
                        );
                      })}
                    </div>
                    <RangeField label={`Teamgröße · ${team} Mitarbeitende`} min={1} max={150} value={team} onChange={setTeam} />
                    <PrimaryButton disabled={!canNext} onClick={() => setStep(2)}>Weiter</PrimaryButton>
                  </motion.div>
                )}

                {/* STEP 2 — KI-Abteilung (Personas) */}
                {step === 2 && branche && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                    <StepHead title="Ihre KI-Abteilung" sub={`Welche Rollen würden Ihnen in „${branche.label}" am meisten Arbeit abnehmen? Mehrfachauswahl.`} />
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
                      {fields.map(({ pf, rep, apps }) => {
                        const active = selected.has(pf.id);
                        return (
                          <div key={pf.id}
                            style={{ border: `1.5px solid ${active ? VIOLET : HAIRLINE}`, background: active ? "rgba(86,88,223,0.06)" : PAPER_PURE, borderRadius: "12px", overflow: "hidden", transition: "border-color .18s, background .18s" }}>
                            <button type="button" onClick={() => toggle(pf.id)}
                              style={{ display: "block", width: "100%", textAlign: "left", border: "none", background: "transparent", padding: "14px 16px", cursor: "pointer" }}>
                              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "10px" }}>
                                <div>
                                  <span style={{ fontFamily: OUTFIT, fontWeight: 700, fontSize: "15px", color: active ? VIOLET : INK_DEEP }}>{pf.name}</span>
                                  <span style={{ fontFamily: OUTFIT, fontSize: "12.5px", color: "#8A85A0", marginLeft: "8px" }}>{pf.sub}</span>
                                </div>
                                <span style={{ width: "20px", height: "20px", flex: "none", borderRadius: "6px", border: `1.5px solid ${active ? VIOLET : HAIRLINE}`, background: active ? VIOLET : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                  {active && <Check style={{ width: "13px", height: "13px", color: "#fff" }} strokeWidth={3} />}
                                </span>
                              </div>
                              <div style={{ fontFamily: OUTFIT, fontSize: "12.5px", color: INK, marginTop: "5px", lineHeight: 1.5 }}>z. B. {rep.prozess}</div>
                              <div style={{ display: "flex", gap: "12px", marginTop: "8px", fontFamily: OUTFIT, fontSize: "12px", color: "#8A85A0" }}>
                                <span>~{String(rep.hours).replace(".", ",")} Std./Woche</span>
                                {rep.quickWin && <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", color: VIOLET }}><Zap style={{ width: "12px", height: "12px" }} strokeWidth={2.4} /> Quick Win</span>}
                              </div>
                            </button>
                            {/* Tools, die man je nach Anwendungsfeld schon nutzt — anklickbar */}
                            {active && apps.length > 0 && (
                              <div style={{ padding: "0 16px 14px" }}>
                                <div style={{ fontFamily: OUTFIT, fontSize: "11.5px", fontWeight: 600, color: "#8A85A0", margin: "0 0 8px" }}>Welche dieser Tools nutzen Sie schon?</div>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
                                  {apps.map((app) => {
                                    const on = usedApps.has(app);
                                    return (
                                      <button key={app} type="button" onClick={() => toggleApp(app)}
                                        style={{ fontFamily: OUTFIT, fontSize: "12px", fontWeight: 500, padding: "5px 11px", borderRadius: "99px", cursor: "pointer", transition: "all .15s", border: `1px solid ${on ? VIOLET : HAIRLINE}`, background: on ? VIOLET : PAPER_PURE, color: on ? "#fff" : INK }}>
                                        {app}
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    <PrimaryButton disabled={!canNext} onClick={() => setStep(3)}>Weiter</PrimaryButton>
                    <BackLink onClick={() => setStep(1)} />
                  </motion.div>
                )}

                {/* STEP 3 — Reifegrad */}
                {step === 3 && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                    <StepHead title="Ihr Startpunkt" sub="Wie weit sind Sie mit Automatisierung? Das kalibriert, wie schnell Sie den Wert heben." />
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
                      {MATURITY.map((m) => {
                        const active = maturity === m.id;
                        return (
                          <button key={m.id} type="button" onClick={() => chooseMaturity(m.id)}
                            style={{ textAlign: "left", border: `1.5px solid ${active ? VIOLET : HAIRLINE}`, background: active ? "rgba(86,88,223,0.06)" : PAPER_PURE, borderRadius: "12px", padding: "15px 18px", cursor: "pointer", transition: "border-color .18s, background .18s" }}>
                            <div style={{ fontFamily: OUTFIT, fontWeight: 700, fontSize: "15px", color: active ? VIOLET : INK_DEEP, marginBottom: "2px" }}>{m.t}</div>
                            <div style={{ fontFamily: OUTFIT, fontSize: "13px", color: INK }}>{m.d}</div>
                          </button>
                        );
                      })}
                    </div>
                    <PrimaryButton disabled={!canNext} onClick={() => { setRevealed(true); setTimeout(() => { const el = document.getElementById("audit"); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); }, 60); }}>Analyse ansehen</PrimaryButton>
                    <BackLink onClick={() => setStep(2)} />
                  </motion.div>
                )}
              </div>
            </div>

            {/* PHASE 2 — nur die Analyse (nach den Fragen) */}
            <div id="audit" style={{ display: revealed ? "block" : "none" }}>
              {revealed && (
                <button type="button" onClick={() => setRevealed(false)}
                  style={{ border: "none", background: "transparent", cursor: "pointer", fontFamily: OUTFIT, fontSize: "13px", fontWeight: 600, color: "#8A85A0", padding: "0 0 14px", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  ← Antworten ändern
                </button>
              )}
              <div style={{ background: ROI_GRADIENT, borderRadius: "18px", padding: "clamp(24px,3vw,36px)", color: "#fff", boxShadow: "0 20px 50px -24px rgba(86,88,223,0.5)" }}>
                <div style={{ fontFamily: OUTFIT, fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.72, marginBottom: "16px" }}>
                  {branche ? `Ihr Kurz-Audit · ${branche.cool}` : "Ihr Kurz-Audit"}
                </div>

                {!branche || !calc || calc.sel.length === 0 ? (
                  <div style={{ fontFamily: OUTFIT, fontSize: "15px", opacity: 0.8, lineHeight: 1.6, padding: "8px 0 6px" }}>
                    {branche ? "Wählen Sie die Rollen Ihrer KI-Abteilung. Ihr Potenzial erscheint hier sofort." : "Wählen Sie Ihre Branche. Wir gleichen mit realen Automatisierungs-Werten aus über 40 Use Cases ab."}
                  </div>
                ) : (
                  <>
                    {/* Lens-Umschalter: Geld · Zeit · Wachstum */}
                    <div style={{ display: "inline-flex", background: "rgba(255,255,255,0.10)", borderRadius: "99px", padding: "3px", marginBottom: "16px" }}>
                      {([["geld", "Geld"], ["zeit", "Zeit"], ["wachstum", "Wachstum"]] as const).map(([id, lbl]) => (
                        <button key={id} type="button" onClick={() => setLens(id)}
                          style={{ border: "none", cursor: "pointer", fontFamily: OUTFIT, fontSize: "12.5px", fontWeight: 600, padding: "6px 15px", borderRadius: "99px", background: lens === id ? "#fff" : "transparent", color: lens === id ? INK_DEEP : "rgba(255,255,255,0.8)", transition: "background .18s" }}>
                          {lbl}
                        </button>
                      ))}
                    </div>

                    <div style={{ fontFamily: OUTFIT, fontSize: "clamp(38px,6vw,52px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1, fontVariantNumeric: "tabular-nums", marginBottom: "4px" }}>
                      {lens === "geld" ? fmtEur(animatedNet) : lens === "zeit" ? `${fmtNum(calc.hoursYear)} Std.` : `${fmtDec(calc.fte)} FTE`}
                    </div>
                    <div style={{ fontFamily: OUTFIT, fontSize: "13px", opacity: 0.72, marginBottom: "6px" }}>
                      {lens === "geld" ? "Netto-Einsparpotenzial / Jahr" : lens === "zeit" ? "freigesetzte Arbeitszeit / Jahr" : "Kapazität, die frei wird"}
                    </div>
                    <div style={{ fontFamily: OUTFIT, fontSize: "12px", opacity: 0.62, marginBottom: "22px" }}>
                      {lens === "geld"
                        ? `konservativ ${fmtEur(calc.netLo)} … ambitioniert ${fmtEur(calc.netHi)}`
                        : lens === "zeit"
                        ? `≈ ${fmtDec(calc.fte)} Vollzeitkräfte, die Sie für anderes einsetzen können`
                        : `${fmtNum(calc.hoursYear)} Std./Jahr — reinvestierbar statt Neueinstellung`}
                    </div>

                    {/* Benchmark-Verdikt */}
                    <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: "12px", padding: "14px 16px", marginBottom: "20px" }}>
                      <div style={{ fontFamily: OUTFIT, fontSize: "13px", lineHeight: 1.55, opacity: 0.92 }}>
                        Betriebe in „{branche.label}" heben mit einer vollen KI-Abteilung typischerweise <strong>{fmtEur(calc.fullNet)}/Jahr</strong>. Sie adressieren gerade <strong>{calc.share}%</strong> davon.
                      </div>
                      <div style={{ position: "relative", height: "6px", borderRadius: "99px", background: "rgba(255,255,255,0.18)", marginTop: "10px", overflow: "hidden" }}>
                        <div className="lk-fill" style={{ height: "100%", width: `${clamp(calc.share, 2, 100)}%`, background: "#fff", borderRadius: "99px" }} />
                      </div>
                    </div>

                    {/* Aktueller Tool-Stack — aus den Anwendungsfeldern angeklickt */}
                    {usedApps.size > 0 && (
                      <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: "12px", padding: "14px 16px", marginBottom: "20px" }}>
                        <div style={{ fontFamily: OUTFIT, fontSize: "12px", letterSpacing: "0.06em", textTransform: "uppercase", opacity: 0.6, marginBottom: "10px" }}>
                          Ihr Stack · {usedApps.size} {usedApps.size === 1 ? "Tool" : "Tools"}
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "10px" }}>
                          {Array.from(usedApps).map((app) => (
                            <span key={app} style={{ fontFamily: OUTFIT, fontSize: "11.5px", fontWeight: 500, padding: "4px 9px", borderRadius: "99px", background: "rgba(255,255,255,0.14)", color: "#fff" }}>{app}</span>
                          ))}
                        </div>
                        <div style={{ fontFamily: OUTFIT, fontSize: "12.5px", lineHeight: 1.5, opacity: 0.82 }}>
                          Diese Tools binden wir direkt an — Ihre KI-Abteilung baut auf dem auf, was schon läuft, statt es zu ersetzen.
                        </div>
                      </div>
                    )}

                    {/* Wachstums-Hebel — nur in der Wachstums-Lens */}
                    {lens === "wachstum" && calc.topField && (
                      <div style={{ background: "rgba(194,195,246,0.16)", borderRadius: "12px", padding: "14px 16px", marginBottom: "20px" }}>
                        <div style={{ fontFamily: OUTFIT, fontSize: "13px", lineHeight: 1.55, opacity: 0.95 }}>
                          <strong>{fmtDec(calc.fte)} Vollzeitkräfte</strong> frei — genug, um z. B. „{calc.topField.pf.sub}" auszubauen, Durchlaufzeiten zu senken oder mehr Aufträge zu stemmen, ohne einzustellen.
                        </div>
                      </div>
                    )}

                    {/* Nach Rolle (KI-Abteilung) */}
                    <div style={{ fontFamily: OUTFIT, fontSize: "12px", letterSpacing: "0.06em", textTransform: "uppercase", opacity: 0.6, marginBottom: "10px" }}>Nach Rolle</div>
                    <div style={{ marginBottom: "22px" }}>
                      {calc.rows.map((r) => (
                        <div key={r.pf.id} style={{ marginBottom: "10px" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", fontFamily: OUTFIT, fontSize: "13px", marginBottom: "4px" }}>
                            <span style={{ opacity: 0.92 }}>{r.pf.name}</span>
                            <span style={{ fontWeight: 500 }}>{fmtEur(r.net)}</span>
                          </div>
                          <div style={{ height: "8px", borderRadius: "99px", background: "rgba(255,255,255,0.14)", overflow: "hidden" }}>
                            <div className="lk-fill" style={{ height: "100%", width: `${clamp(Math.round((r.net / calc.maxNet) * 100), 6, 100)}%`, background: r.rep.quickWin ? "#C2C3F6" : "rgba(255,255,255,0.85)", borderRadius: "99px" }} />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Realitäts-Regler */}
                    <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: "12px", padding: "12px 14px", marginBottom: "20px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontFamily: OUTFIT, fontSize: "12.5px", marginBottom: "6px", opacity: 0.9 }}>
                        <span>Realitäts-Regler</span>
                        <span style={{ fontWeight: 500 }}>{realism < 33 ? "sehr konservativ" : realism < 67 ? "ausgewogen" : "ambitioniert"}</span>
                      </div>
                      <input type="range" className="roi-range" min={0} max={100} step={1} value={realism}
                        style={{ background: `linear-gradient(to right,#fff ${realism}%, rgba(255,255,255,0.22) ${realism}%)` }}
                        onChange={(e) => setRealism(+e.target.value)} />
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "6px" }}>
                      <Mini val={calc.payback < 1 ? "< 1 Mon." : `${Math.round(calc.payback)} Mon.`} lab="Amortisation" />
                      <Mini val={`ab ${fmtEurExact(ROI_ENTRY.price)}`} lab={`Einstieg · ${ROI_ENTRY.note}`} />
                    </div>
                    <div style={{ fontFamily: OUTFIT, fontSize: "11.5px", opacity: 0.55, lineHeight: 1.5, marginTop: "8px" }}>
                      {estimated
                        ? "Modellierte Richtwerte für Entscheidungsinstanzen, skaliert auf Reifegrad und Teamgröße, minus ~15 % laufende Kosten."
                        : "Spannen aus realen Automatisierungen, skaliert auf Reifegrad und Teamgröße, minus ~15 % laufende Kosten. Investition = KI-Audit + geschätzte Umsetzung."}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* ── VOLL-AUDIT / Tool-Roadmap + Report (nur nach den Fragen) ── */}
          {revealed && branche && calc && calc.sel.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, ease: EASE }} style={{ marginTop: "clamp(24px,3vw,36px)" }}>
              <div style={{ background: PAPER_PURE, borderRadius: "18px", border: `1px solid ${HAIRLINE}`, padding: "clamp(24px,3vw,40px)" }}>
                <h2 style={{ color: INK_DEEP, marginBottom: "6px" }}>Ihre KI-Abteilung im Einsatz</h2>
                <p style={{ fontFamily: OUTFIT, color: INK, fontSize: "15px", marginBottom: "24px" }}>
                  Sortiert nach Wirkung × Aufwand. Quick Wins zuerst — inklusive des Tool-Stacks, mit dem wir jede Rolle bauen.
                </p>
                <div>
                  {calc.rows.map((r, i) => (
                    <div key={r.pf.id} style={{ display: "flex", gap: "14px", alignItems: "flex-start", padding: "16px 0", borderTop: `1px solid ${HAIRLINE}` }}>
                      <span style={{ width: "26px", height: "26px", flex: "none", borderRadius: "50%", background: "rgba(86,88,223,0.10)", color: VIOLET, fontFamily: OUTFIT, fontSize: "13px", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", marginBottom: "3px" }}>
                          <span style={{ fontFamily: OUTFIT, fontWeight: 700, fontSize: "15px", color: INK_DEEP }}>{r.pf.name}</span>
                          <span style={{ fontFamily: OUTFIT, fontSize: "12.5px", color: "#8A85A0" }}>{r.pf.sub}</span>
                          {r.rep.quickWin && <span style={{ fontFamily: OUTFIT, fontSize: "11px", fontWeight: 600, color: VIOLET, background: "rgba(86,88,223,0.10)", padding: "2px 8px", borderRadius: "6px" }}>Quick Win</span>}
                        </div>
                        <div style={{ fontFamily: OUTFIT, fontSize: "12.5px", color: "#8A85A0" }}>z. B. {r.rep.prozess} · Aufwand {effortLabel(r.rep.effort)}{r.apps.length > 0 ? ` · Tools: ${r.apps.slice(0, 5).join(" · ")}` : ""}</div>
                      </div>
                      <div style={{ fontFamily: OUTFIT, fontWeight: 700, fontSize: "15px", color: VIOLET, whiteSpace: "nowrap" }}>{fmtEur(r.net)}<span style={{ fontSize: "12px", fontWeight: 400, color: "#8A85A0" }}>/J</span></div>
                    </div>
                  ))}
                </div>

                {/* Empfohlener Einstieg */}
                <div style={{ background: PAPER, borderRadius: "14px", padding: "20px 22px", marginTop: "24px", display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ maxWidth: "46ch" }}>
                    <div style={{ fontFamily: OUTFIT, fontWeight: 700, fontSize: "16px", color: INK_DEEP, marginBottom: "4px" }}>Ihr Einstieg: {ROI_ENTRY.label} · {fmtEurExact(ROI_ENTRY.price)} <span style={{ color: VIOLET }}>({ROI_ENTRY.note})</span></div>
                    <div style={{ fontFamily: OUTFIT, fontSize: "13.5px", color: INK }}>Daraus wird die konkrete Roadmap für Ihre KI-Abteilung — mit fixem Angebot statt Schätzung.</div>
                  </div>
                  <EdgePillButton to="/kontakt">Gespräch anfragen</EdgePillButton>
                </div>

                {/* Lead-Gate: PDF-Report */}
                <div className="roi-noprint" style={{ borderTop: `1px solid ${HAIRLINE}`, marginTop: "26px", paddingTop: "24px" }}>
                  <div style={{ fontFamily: OUTFIT, fontWeight: 700, fontSize: "16px", color: INK_DEEP, marginBottom: "4px" }}>Report als PDF + Tool-Roadmap</div>
                  <p style={{ fontFamily: OUTFIT, fontSize: "13.5px", color: INK, marginBottom: "16px" }}>Speichern Sie Ihr Audit inkl. Tool-Roadmap direkt als PDF — oder lassen Sie es sich persönlich per E-Mail schicken.</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center", marginBottom: "18px" }}>
                    <PrimaryButton inline onClick={() => window.print()}>Als PDF speichern</PrimaryButton>
                  </div>
                  {!leadDone ? (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: "12px", marginBottom: "14px" }}>
                        <input className="roi-input" style={inputStyle} placeholder="Name" value={lead.name} onChange={(e) => setLead({ ...lead, name: e.target.value })} />
                        <input className="roi-input" style={inputStyle} placeholder="Unternehmen" value={lead.company} onChange={(e) => setLead({ ...lead, company: e.target.value })} />
                        <input className="roi-input" type="email" style={inputStyle} placeholder="E-Mail" value={lead.email} onChange={(e) => setLead({ ...lead, email: e.target.value })} />
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", alignItems: "center" }}>
                        <PrimaryButton inline disabled={sending || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)} onClick={submitLead}>{sending ? "Wird gesendet …" : "Report anfordern"}</PrimaryButton>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontFamily: OUTFIT, fontSize: "12.5px", color: "#948FA8" }}><ShieldCheck style={{ width: "14px", height: "14px" }} strokeWidth={1.8} /> Keine Weitergabe.</span>
                      </div>
                    </>
                  ) : (
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span style={{ width: "40px", height: "40px", flex: "none", borderRadius: "50%", background: "rgba(86,88,223,0.10)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Check style={{ width: "20px", height: "20px", color: VIOLET }} strokeWidth={3} />
                      </span>
                      <div style={{ fontFamily: OUTFIT, fontSize: "15px", color: INK_DEEP }}>Unterwegs an <strong>{lead.email}</strong>. Wir melden uns mit Ihrer Roadmap.</div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </section>

        <div className="roi-noprint">
          <Suspense fallback={<div style={{ minHeight: 200 }} />}>
            <Footer />
          </Suspense>
        </div>
      </div>
    </>
  );
};

/* ── Bausteine ── */
function StepHead({ title, sub }: { title: string; sub: string }) {
  return (
    <div style={{ marginBottom: "22px" }}>
      <div style={{ fontFamily: OUTFIT, fontSize: "21px", fontWeight: 700, color: INK_DEEP, marginBottom: "6px" }}>{title}</div>
      <div style={{ fontFamily: OUTFIT, fontSize: "14px", color: INK, lineHeight: 1.5 }}>{sub}</div>
    </div>
  );
}

function RangeField({ label, min, max, value, onChange }: { label: string; min: number; max: number; value: number; onChange: (v: number) => void }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div style={{ marginBottom: "24px" }}>
      <div style={{ ...labelStyle, marginBottom: "12px" }}>{label}</div>
      <input type="range" className="roi-range" min={min} max={max} step={1} value={value}
        style={{ background: `linear-gradient(to right, ${VIOLET} ${pct}%, ${HAIRLINE} ${pct}%)` }}
        onChange={(e) => onChange(clamp(parseInt(e.target.value, 10) || min, min, max))} />
    </div>
  );
}

function PrimaryButton({ children, onClick, disabled, inline }: { children: React.ReactNode; onClick: () => void; disabled?: boolean; inline?: boolean }) {
  return (
    <button type="button" onClick={onClick} disabled={disabled}
      onMouseEnter={(e) => !disabled && (e.currentTarget.style.background = VIOLET_DARK)}
      onMouseLeave={(e) => (e.currentTarget.style.background = VIOLET)}
      style={{ width: inline ? "auto" : "100%", marginTop: inline ? 0 : "8px", padding: "14px 26px", background: VIOLET, color: "#fff", border: "none", borderRadius: "12px", fontFamily: OUTFIT, fontSize: "16px", fontWeight: 700, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.55 : 1, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", boxShadow: "0 10px 26px -12px rgba(86,88,223,0.7)", transition: "background .18s" }}>
      {children}
      <ArrowRight style={{ width: "18px", height: "18px" }} strokeWidth={2.4} />
    </button>
  );
}

function BackLink({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} style={{ display: "inline-block", marginTop: "14px", background: "none", border: "none", cursor: "pointer", fontFamily: OUTFIT, fontSize: "13px", color: "#8A85A0" }}>← Zurück</button>
  );
}

function Mini({ val, lab }: { val: string; lab: string }) {
  return (
    <div style={{ background: "rgba(255,255,255,0.10)", borderRadius: "12px", padding: "13px 15px" }}>
      <div style={{ fontFamily: OUTFIT, fontSize: "19px", fontWeight: 800, fontVariantNumeric: "tabular-nums" }}>{val}</div>
      <div style={{ fontFamily: OUTFIT, fontSize: "11px", opacity: 0.66, marginTop: "3px" }}>{lab}</div>
    </div>
  );
}

export default RoiRechner;
