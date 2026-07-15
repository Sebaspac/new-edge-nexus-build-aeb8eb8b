---
name: NEWEDGE
description: Rebrush 2026 — helles Papier, ein sattes Violett, weiche runde Karten, Outfit überall. Dapta-inspirierte Kompositionen mit Marken-Riss.
colors:
  violet: "#5658DF"
  violet-light: "#8B8DF0"
  lilac: "#C2C3F6"
  violet-soft: "rgba(86,88,223,0.12)"
  ink-deep: "#17172E"
  ink-deeper: "#100E1E"
  ink: "#3C3C47"
  paper: "#F8F5FF"
  paper-pure: "#FFFFFF"
  hairline: "rgba(86,88,223,0.14)"
typography:
  h1:
    fontFamily: "'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "var(--font-h1)  /* 28px mobile → 48px desktop, clamp via CSS-Vars in index.css */"
    fontWeight: 800
    lineHeight: "var(--lh-heading)"
    letterSpacing: "-0.02em"
  h2:
    fontFamily: "'Outfit', sans-serif"
    fontSize: "var(--font-h2)  /* 28px mobile → 40px desktop */"
    fontWeight: 700
    letterSpacing: "-0.015em"
  h3:
    fontFamily: "'Outfit', sans-serif"
    fontSize: "var(--font-h3)  /* 22px mobile → 28px desktop */"
    fontWeight: 700
    lineHeight: 1.25
  body:
    fontFamily: "'Outfit', sans-serif"
    fontSize: "var(--font-body)  /* 16px mobile → 18px desktop */"
    fontWeight: 400
    lineHeight: "var(--lh-body)"
  label:
    fontFamily: "'Outfit', sans-serif"
    fontSize: "13px"
    fontWeight: 700
    letterSpacing: "0.08em"
    textTransform: "uppercase"
rounded:
  card: "16px"
  cardLarge: "20px"
  canvas: "24px – 40px (Hero-Bühnen)"
  pill: "999px"
spacing:
  section: "clamp(56px, 7vw, 96px)"
  sectionLarge: "clamp(64px, 8vw, 100px)"
  cardPadding: "20px – 34px"
components:
  button-primary:
    name: "EdgePillButton (src/components/ui/EdgeCta.tsx)"
    shape: "Pill (999px), Label + violetter Pfeil-Kreis rechts"
    backgroundColor: "Ink-Verlauf linear-gradient(160deg,#1D1B38,#17172E,#100E1E); Varianten: violet, frost"
    hover: "Violett-Overlay + Mini-EdgeRip; scale 1.03"
  button-secondary:
    name: "EdgeTextButton"
    shape: "nur Label + Pfeil, transparent; tone=light auf dunklen Flächen"
  card:
    backgroundColor: "{colors.paper-pure}"
    border: "1px solid {colors.hairline}"
    rounded: "16px"
    shadow: "0 1px 2px rgba(23,23,46,0.06)  /* Feature-Karten größer, aber weich */"
  nav:
    name: "MobileNavigation — schwebende weiße Pill, fixed, schrumpft beim Scroll"
---

# Design System: NEWEDGE (Rebrush 2026)

> Dieses Dokument beschreibt das SHIPPENDE System (Stand 2026-07). Das frühere
> „Ink & Edge"-System (DM Serif Display, Consolas, 0-Radius, #5B21B6) ist
> abgelöst und darf nicht mehr referenziert werden.
> Copy-Regeln: `.claude/brand-voice-guidelines.md` (bindend, Sie-Form; Careers Du).

## 1. Overview

**Creative North Star: „Helles Papier, ein Violett, weiche Präzision."**

Die Website steht auf einem hell-lila Papierton (`#F8F5FF`), auf dem weiße,
weich gerundete Karten und ein einziges sattes Violett (`#5658DF`) arbeiten.
Referenz-Ästhetik sind Dapta-artige SaaS-Kompositionen — große abgerundete
Bühnen, schwebende App-Fenster, Stat-Kreise — kombiniert mit dem Marken-Detail
des „Edge-Risses" (`EdgeRip`): ein kleiner Papier-Riss an Kanten und Bildern.

- **Alle Heroes sind hell** (Papier + dezenter Violett-Glow von oben,
  `radial-gradient(… rgba(86,88,223,0.10) …)`). Dunkle Flächen gibt es nur
  noch als bewusste Mid-Page-Momente (Video-Showcase, Garantie, Kontakt-CTA,
  Zitat-Karten).
- **Eine Schrift:** Outfit, für alles. Gewicht macht die Hierarchie
  (800 H1 / 700 H2-H3 / 400–600 Body/Labels).
- **Keine Hero-Eyebrows.** Subpage-Heroes öffnen direkt mit der H1
  (nur der Homepage-Hero behält sein Greeting). Sektions-Eyebrows
  (Label-Stil, Violett) sind weiterhin erlaubt.

## 2. Farben

- **Violet `#5658DF`** — der eine Akzent: CTAs, Akzent-Wörter in Headlines
  (per `withAccent`, sprachbewusst DE/EN), Nummern-Badges, aktive Zustände.
- **Violet Light `#8B8DF0`** — Akzent auf dunklen Flächen.
- **Lilac `#C2C3F6`** — Chip-/Pill-Hintergründe (z. B. AiVoices); Hover
  invertiert auf Ink + weiße Schrift.
- **Ink Deep `#17172E`** — Headlines, dunkle Karten, Primär-Pill-Verlauf.
  Nie `#000`.
- **Ink `#3C3C47`** — Fließtext auf hell. Sekundärtext: `rgba(23,23,46,0.68)`.
- **Paper `#F8F5FF`** — globaler Seitenton (auch als `--background`-Token).
  Karten: Paper Pure `#FFFFFF`.
- **Hairline `rgba(86,88,223,0.14)`** — Standard-Border für Karten auf Papier.
- **Verläufe (die einzigen erlaubten):**
  - Ink-Pill: `linear-gradient(160deg,#1D1B38,#17172E,#100E1E)`
  - Showcase/Case-Karte: `linear-gradient(120deg,#17172E,#2B2A6E 45%,#5658DF 80%,#8B8DF0)`
  - Garantie-Karte: `linear-gradient(150deg,#6B4FE0,#5658DF 50%,#3B2F9E)`

## 3. Typografie

Global über CSS-Variablen in `src/index.css` (`--font-h1…--font-body`,
responsive Stufen mobile/tablet/desktop). Komponenten setzen KEINE eigenen
H-Größen, außer bewusst kompaktere Karten (dann explizit, z. B. Case-Karten
19px). Kompositum-Bindestriche in Headlines non-breaking (`‑`).

## 4. Flächen & Tiefe

- Karten: weiß, Hairline-Border, **weiche** Schatten
  (klein `0 1px 2px rgba(23,23,46,0.06)`, Feature-Karten bis
  `0 24px 56px -18px rgba(23,23,46,0.18)`).
- Radius-Sprache: 16px Karten, 20–24px große Karten/Bühnen, 40px Hero-Canvas,
  999px Pills. **Kein 0-Radius mehr.**
- `NoiseOverlay` (0.03) liegt seitenweit als Körnung.
- `JaggedDivider` + `EdgeRip` sind die Marken-Übergänge/-Risse.

## 5. Komponenten (Quelle der Wahrheit im Code)

- **EdgeCta** (`ui/EdgeCta.tsx`): `EdgePillButton` (primär; Varianten ink /
  violet / frost) + `EdgeTextButton` (sekundär). Interne `href="/…"` werden
  automatisch lokalisiert (LocaleLink).
- **MitStudyGrid** (`ui/MitStudyGrid.tsx`): „5/100"-MIT-Studien-Grafik
  (10×10-Raster, 5 violett), Varianten voll/compact — Methodik-Intro,
  Homepage-Prozess, KI-Audit/Cortex-Intros. Identische Grafik überall.
- **MobileNavigation**: schwebende weiße Pill, Logo aus `nav.logo.src`.
- **SpeakWithUsCta / ThreeStepsCTA / FloatingConsultButton**: Abschluss-CTAs;
  ThreeSteps nutzt Scroll-Pin (Desktop) bzw. gepinntes Karten-Cycling (Mobile).
- **CaseSpotlight / VideoShowcase**: teilen den violetten 120deg-Verlauf;
  Videos als **natives YouTube-iframe** (keine Custom-Facades).
- **Bilder:** ausnahmslos über den Content-Layer (`img(key)`-Resolver,
  Registry in `src/content/assets.ts`); CMS-Upload-URLs werden durchgereicht.
  Nie Bild-Keys in Komponenten hartcodieren.

## 6. Layout-Regeln

- **Mobile-Bildreihenfolge:** Inhaltsmodule = Bild → Überschrift → Text;
  Ausnahmen (CTA, Video, Case) = Titel → Text → Bild. Desktop unberührt
  (responsive `order-*` am Spalten-Breakpoint des Moduls).
- Zweispaltige Intro-/Feature-Module gern 60/40 (`lg:grid-cols-[3fr_2fr]`).
- Statement-Callout: violette Akzentkante (3px, Gradient) + H2 + Text
  (Definition-Layout; Methodik-/Careers-Intro).
- Sprachen: DE (`/`) + EN (`/en`), ein Routen-Set; Inhalte aus
  `src/content/**` (DE) / `src/content/en/**` (EN) bzw. Strapi-CMS
  (`<type>` / `<type>-en`).

## 7. Motion

- framer-motion `whileInView` (y: 16–24, once, margin -60px),
  EASE `[0.22, 1, 0.36, 1]`.
- GSAP nur für die horizontale Scroll-Strecke (Homepage) + ThreeSteps-Pin.
- `prefers-reduced-motion` respektieren (Hero-Puls etc. deaktivieren).

## 8. Do / Don't

**Do:** ein Violett-Akzent pro Modul · weiche Schatten · Outfit-Gewichte für
Hierarchie · Zahlen als Beweis zuerst · Sie-Form · Mobile-Bildreihenfolge
einhalten · Bilder nur über den Content-Layer.

**Don't:** dunkle Heroes · 0-Radius/scharfe Kanten · DM Serif/Consolas/Inter ·
Hero-Eyebrows auf Subpages · Custom-Video-Facades · neue Verläufe erfinden ·
`#000`/`#fff` als Text-/Flächenfarbe · Bild-Keys oder Texte in Komponenten
hartcodieren (Content-Layer!) · Buzzwords (siehe Brand-Voice-Guidelines).
