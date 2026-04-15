import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { safeSessionStorage, safeSetItem, safeGetItem } from "@/utils/safeStorage";

interface KiAuditGateProps {
  onSuccess: () => void;
}

const KiAuditGate = ({ onSuccess }: KiAuditGateProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Client-side validation
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setErrorMsg("Bitte alle Felder ausfüllen.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMsg("Bitte eine gültige E-Mail-Adresse eingeben.");
      return;
    }

    if (phone.trim().length < 5) {
      setErrorMsg("Bitte eine gültige Telefonnummer eingeben.");
      return;
    }

    setStatus("loading");

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const res = await fetch(`${supabaseUrl}/functions/v1/ki-audit-signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), phone: phone.trim(), website }),
      });

      const result = await res.json().catch(() => ({}));
      if (!res.ok || result.error) throw new Error(result.error || "Request failed");

      setStatus("success");
      const storage = safeSessionStorage();
      safeSetItem(storage, "ki-audit-access", "true");

      setTimeout(() => onSuccess(), 1200);
    } catch {
      setStatus("error");
      setErrorMsg("Ein Fehler ist aufgetreten. Bitte versuche es erneut.");
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
    }),
  };

  return (
    <div className="fixed inset-0 z-[100] bg-foreground flex items-center justify-center overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 w-full max-w-md mx-auto px-6">
        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl sm:text-3xl text-primary-foreground mb-2">Zugang freigeschaltet</h2>
              <p className="text-sm text-primary-foreground/50">Du wirst weitergeleitet…</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="space-y-5"
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={fadeUp} custom={0}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-primary-foreground/20 bg-primary-foreground/5 mb-6">
                  <span className="w-1.5 h-1.5 bg-primary" />
                  <span className="text-[10px] sm:text-xs font-medium tracking-widest uppercase text-primary-foreground/70">
                    Kostenloses KI Audit
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl text-primary-foreground leading-[1.1] mb-3">
                  Zugang anfordern
                </h1>
                <p className="text-sm text-primary-foreground/50">
                  Trage deine Daten ein, um den KI-Audit Inhalt freizuschalten.
                </p>
              </motion.div>

              {/* Honeypot */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>

              <motion.div variants={fadeUp} custom={1} className="space-y-3">
                <input
                  type="text"
                  placeholder="Name *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={120}
                  className="w-full px-4 py-3.5 bg-primary-foreground/5 border-2 border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/30 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
                <input
                  type="email"
                  placeholder="E-Mail *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  maxLength={200}
                  className="w-full px-4 py-3.5 bg-primary-foreground/5 border-2 border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/30 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Telefonnummer *"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  maxLength={30}
                  className="w-full px-4 py-3.5 bg-primary-foreground/5 border-2 border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/30 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
              </motion.div>

              {errorMsg && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xs text-destructive"
                >
                  {errorMsg}
                </motion.p>
              )}

              <motion.div variants={fadeUp} custom={2}>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-3 px-7 py-3.5 bg-primary-foreground text-foreground font-semibold border-2 border-primary-foreground hover:bg-transparent hover:text-primary-foreground transition-all duration-300 group text-xs sm:text-sm uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      Zugang freischalten
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </motion.div>

              <motion.p variants={fadeUp} custom={3} className="text-[10px] text-primary-foreground/25 text-center">
                Deine Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
              </motion.p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default KiAuditGate;
