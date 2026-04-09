import { motion } from "framer-motion";
import { X, CheckCircle } from "lucide-react";

const problems = [
  "Die Marke wird nach Außen nicht klar. Intern fehlt die Richtung.",
  "Prozesse sind gewachsen, aber nicht dafür gemacht, automatisiert oder mit KI weitergedacht zu werden.",
  "\u201EAbh\u00E4ngig von externen Tools und Agenturen \u2013 nichts geh\u00F6rt uns.\u201C",
];

const solutions = [
  "Die Marke wird nach Außen nicht klar. Intern fehlt die Richtung.",
  { metric: "Klare Marke", label: "Positionierung, Auftritt und Kommunikation greifen sauber ineinander." },
  {
    metric: "Digitale Struktur",
    label: "Websites und Touchpoints werden zur funktionierenden Grundlage für Wachstum und Systeme.",
  },
  {
    metric: "Wirksame Systeme",
    label: "Automatisierung und KI werden dort eingesetzt, wo sie im Unternehmen wirklich entlasten und skalieren.",
  },
];

export const ProblemSolutionFraming = () => {
  return (
    <section className="section-py-md bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-10 md:mb-14"
        >
          <span className="inline-block text-sm font-bold uppercase tracking-widest mb-3 text-primary">
            Warum viele KI-Initiativen scheitern
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight">
            Zu viele Tools. Zu wenig System.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-destructive mb-4 flex items-center gap-2">
              <X className="w-5 h-5" /> Das bremst Unternehmen aus
            </h3>
            {problems.map((problem, i) => (
              <div
                key={i}
                className="p-5 border border-destructive/20 bg-destructive/5 text-foreground text-sm leading-relaxed italic"
              >
                {problem}
              </div>
            ))}
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" /> So schaffen wir die Grundlage
            </h3>
            {solutions.map((sol, i) => (
              <div key={i} className="p-5 border border-primary/20 bg-primary/5 flex items-start gap-4">
                <span className="text-2xl font-black text-primary whitespace-nowrap">{sol.metric}</span>
                <span className="text-sm text-muted-foreground leading-relaxed pt-1">{sol.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
