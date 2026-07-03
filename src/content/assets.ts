/**
 * Image Registry
 * --------------------------------------------------------------
 * Zentrale Single-Source-of-Truth für alle Bild-Assets der Website.
 * Ein Bild austauschen = hier den einen Import ändern (nicht in den
 * Komponenten suchen). Content referenziert Bilder per stabilem `ImageKey`;
 * `img(key)` löst den Key zur (gehashten) Vite-URL auf.
 *
 * CMS-Mapping (Strapi): `ImageKey` ⇆ Media-Library-Feld.
 * --------------------------------------------------------------
 */

// — Brand / Logo —
import newEdgeLogo from "@/assets/new-edge-logo.webp";
import newEdgeLogoHorizontal from "@/assets/new-edge-logo-horizontal.png";

// — Team —
import teamSebastian from "@/assets/team-sebastian.png";
import teamSebastian1 from "@/assets/team-sebastian-1.png";
import teamSebastian2 from "@/assets/team-sebastian-2.png";
import teamIvan from "@/assets/team-ivan.png";
import teamIvan2 from "@/assets/team-ivan-2.png";
import teamWenjamin from "@/assets/team-wenjamin.png";
import teamWenjamin1 from "@/assets/team-wenjamin-1.png";
import teamWenjamin2 from "@/assets/team-wenjamin-2.png";
import teamPresentation from "@/assets/team-presentation.png";
import teamPresentationColor from "@/assets/team-presentation-color.png";
import foundersColor from "@/assets/founders-color.webp";

// — Case Studies / Cards —
import albanovaBuilding from "@/assets/albanova-building.webp";
import albanovaWebsite from "@/assets/albanova-website.png";
import leadGeneration from "@/assets/lead-generation.webp";
import marketingAutomation from "@/assets/marketing-automation.webp";
import ragDatacenter from "@/assets/rag-datacenter.webp";

// — KI-Audit —
import kiAuditHero from "@/assets/ki-audit-hero.webp";
import kiAuditProcess from "@/assets/ki-audit-process.webp";

// — Pain Point: Auswahlverfahren —
import painpointAVorherNachher from "@/assets/painpoint-a-vorher-nachher.png";
import painpointASection3 from "@/assets/painpoint-a-section3.png";
import painpointAFeature2 from "@/assets/painpoint-a-feature2.png";
import painpointAFeature3 from "@/assets/painpoint-a-feature3.png";
import painpointAIconAnalyse from "@/assets/painpoint-a-icon-analyse.png";
import painpointAIconKoordination from "@/assets/painpoint-a-icon-koordination.png";
import painpointAIconInsights from "@/assets/painpoint-a-icon-insights.png";

// — Partner / Award Logos —
import logoBafa from "@/assets/logos/bafa-logo.png";
import logoIdc from "@/assets/logos/idc-logo.png";
import logoBmp2026 from "@/assets/logos/bayerischer-mittelstandspreis-2026.png";

// — Client Logos (logo-cloud) —
import logoAlbanovaConsulting from "@/assets/logos/albanova-consulting.png";
import logoBecomingYou from "@/assets/logos/becoming-you.png";
import logoCirclePhoto from "@/assets/logos/circle-photo.webp";
import logoClubCli from "@/assets/logos/club-cli.webp";
import logoDariusCompany from "@/assets/logos/darius-company.webp";
import logoDrAaronLoeb from "@/assets/logos/dr-aaron-loeb.webp";
import logoEliteAesthetic from "@/assets/logos/elite-aesthetic.png";
import logoHydeOfficial from "@/assets/logos/hyde-official.webp";
import logoMuseStudio from "@/assets/logos/muse-studio.webp";
import logoPureDesign from "@/assets/logos/pure-design.webp";
import logoSadieKessler from "@/assets/logos/sadie-kessler.webp";
import logoSeabreeze from "@/assets/logos/seabreeze.webp";

/**
 * Bild-Registry. Keys sind stabil und CMS-tauglich (kebab-case).
 * Werte sind die importierten, von Vite gehashten URLs — identisch
 * zum bisherigen direkten Import (verhaltenserhaltend).
 */
export const IMAGES = {
  // Brand
  "new-edge-logo": newEdgeLogo,
  "new-edge-logo-horizontal": newEdgeLogoHorizontal,
  // Team
  "team-sebastian": teamSebastian,
  "team-sebastian-1": teamSebastian1,
  "team-sebastian-2": teamSebastian2,
  "team-ivan": teamIvan,
  "team-ivan-2": teamIvan2,
  "team-wenjamin": teamWenjamin,
  "team-wenjamin-1": teamWenjamin1,
  "team-wenjamin-2": teamWenjamin2,
  "team-presentation": teamPresentation,
  "team-presentation-color": teamPresentationColor,
  "founders-color": foundersColor,
  // Case Studies
  "albanova-building": albanovaBuilding,
  "albanova-website": albanovaWebsite,
  "lead-generation": leadGeneration,
  "marketing-automation": marketingAutomation,
  "rag-datacenter": ragDatacenter,
  // KI-Audit
  "ki-audit-hero": kiAuditHero,
  "ki-audit-process": kiAuditProcess,
  // Pain Point A
  "painpoint-a-vorher-nachher": painpointAVorherNachher,
  "painpoint-a-section3": painpointASection3,
  "painpoint-a-feature2": painpointAFeature2,
  "painpoint-a-feature3": painpointAFeature3,
  "painpoint-a-icon-analyse": painpointAIconAnalyse,
  "painpoint-a-icon-koordination": painpointAIconKoordination,
  "painpoint-a-icon-insights": painpointAIconInsights,
  // Partner / Award Logos
  "logo-bafa": logoBafa,
  "logo-idc": logoIdc,
  "logo-bmp-2026": logoBmp2026,
  // Client Logos
  "logo-albanova-consulting": logoAlbanovaConsulting,
  "logo-becoming-you": logoBecomingYou,
  "logo-circle-photo": logoCirclePhoto,
  "logo-club-cli": logoClubCli,
  "logo-darius-company": logoDariusCompany,
  "logo-dr-aaron-loeb": logoDrAaronLoeb,
  "logo-elite-aesthetic": logoEliteAesthetic,
  "logo-hyde-official": logoHydeOfficial,
  "logo-muse-studio": logoMuseStudio,
  "logo-pure-design": logoPureDesign,
  "logo-sadie-kessler": logoSadieKessler,
  "logo-seabreeze": logoSeabreeze,
} as const;

export type ImageKey = keyof typeof IMAGES;

/**
 * Löst einen Bild-Key zur finalen (gehashten) URL auf.
 * Nicht-Registry-Werte (CMS-Upload-URLs, /public-Pfade) werden unverändert
 * durchgereicht — so gewinnt ein im CMS hochgeladenes Bild automatisch.
 */
export const img = (key: ImageKey | (string & {})): string =>
  IMAGES[key as ImageKey] ?? (key as string);
