// Exportiert den statischen Content-Layer (src/content/**) nach JSON.
// Grundlage für die Strapi-Schema-Generierung + das Seeding.
// Läuft aus dem Frontend-Repo: `node scripts/export-content.mjs`
import esbuild from "esbuild";
import { writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { tmpdir } from "node:os";
import { join } from "node:path";

// name (Export) → Modulpfad (relativ zu src/content)
const MODULES = {
  // pages
  home: "./pages/home.ts#home",
  about: "./pages/about.ts#about",
  methodik: "./pages/methodik.ts#methodik",
  careers: "./pages/careers.ts#careers",
  kiAudit: "./pages/kiAudit.ts#kiAudit",
  cortexPage: "./pages/cortex.ts#cortexPage",
  webDesign: "./pages/webDesign.ts#webDesign",
  kiGlossar: "./pages/kiGlossar.ts#kiGlossar",
  impressum: "./pages/impressum.ts#impressum",
  contact: "./pages/contact.ts#contact",
  notFound: "./pages/notFound.ts#notFound",
  unsubscribe: "./pages/unsubscribe.ts#unsubscribe",
  painPointPage: "./pages/painPointAuswahlverfahren.ts#painPointPage",
  miniCaseDetail: "./pages/miniCaseDetail.ts#miniCaseDetail",
  // sections (eigene Single Types)
  nav: "./sections/nav.ts#nav",
  footer: "./sections/footer.ts#footer",
  contactFormModal: "./sections/contactFormModal.ts#contactFormModal",
  cookieConsent: "./sections/cookieConsent.ts#cookieConsent",
  maschinenraumTicker: "./sections/maschinenraumTicker.ts#maschinenraumTicker",
  newEdgeSystem: "./sections/newEdgeSystem.ts#newEdgeSystem",
  auditSlaStatus: "./sections/auditSlaStatus.ts#auditSlaStatus",
  caseSpotlight: "./sections/caseSpotlight.ts#caseSpotlight",
  videoShowcase: "./sections/videoShowcase.ts#videoShowcase",
  // sections (Bestandteile von home)
  hero: "./sections/hero.ts#hero",
  impactCounter: "./sections/impactCounter.ts#impactCounter",
  problemJourney: "./sections/problemJourney.ts#problemJourney",
  tickerScroll: "./sections/tickerScroll.ts#tickerScroll",
  cortex: "./sections/cortex.ts#cortex",
  positionedForImpact: "./sections/positionedForImpact.ts#positionedForImpact",
  horizontalScroll: "./sections/horizontalScroll.ts#horizontalScroll",
  derSchnitt: "./sections/derSchnitt.ts#derSchnitt",
  embeddedAI: "./sections/embeddedAI.ts#embeddedAI",
  threeStepsCTA: "./sections/threeStepsCTA.ts#threeStepsCTA",
  testimonialsSection: "./sections/testimonials.ts#testimonialsSection",
  clientLogos: "./sections/clientLogos.ts#clientLogos",
  clientLogosHeading: "./sections/clientLogos.ts#clientLogosHeading",
  structuredData: "./sections/structuredData.ts#structuredData",
  // collections
  testimonials: "./collections/testimonials.ts#testimonials",
  jobs: "./collections/jobs.ts#jobs",
  painPoints: "./painPoints.ts#painPoints",
  defaultPainPoint: "./painPoints.ts#DEFAULT_PAIN_POINT",
};

// Synthetisches Entry-Modul: importiert alle Exporte, sammelt sie in __ALL__
let entry = "";
const names = Object.keys(MODULES);
names.forEach((name, i) => {
  const [path, exp] = MODULES[name].split("#");
  entry += `import { ${exp} as _${i} } from "${path}";\n`;
});
entry += `export const __ALL__ = {\n`;
names.forEach((name, i) => {
  entry += `  ${JSON.stringify(name)}: _${i},\n`;
});
entry += `};\n`;

const outfile = join(tmpdir(), "newedge-content-bundle.mjs");

await esbuild.build({
  stdin: { contents: entry, resolveDir: "src/content", loader: "ts" },
  bundle: true,
  format: "esm",
  platform: "node",
  outfile,
  logLevel: "warning",
});

const mod = await import(pathToFileURL(outfile).href);
const all = mod.__ALL__;

const OUT = join(tmpdir(), "newedge-content.json");
writeFileSync(OUT, JSON.stringify(all, null, 2));
console.log("exported", Object.keys(all).length, "content roots →", OUT);
for (const [k, v] of Object.entries(all)) {
  const kind = Array.isArray(v) ? `array[${v.length}]` : typeof v === "object" ? `object{${Object.keys(v).length}}` : typeof v;
  console.log("  ", k.padEnd(22), kind);
}
