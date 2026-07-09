/**
 * Collection: Mini-Cases — Custom Post (anlegbar)
 * --------------------------------------------------------------
 * Alle Mini-Case-Studies der Anwendungsfeld-Seiten (Industrien & Pain
 * Points), gruppiert nach Seiten-Slug. Quelle: Redaktionsdokument
 * „Mini Case Studies — Industrien & Pain Points" (27 Cases).
 *
 * Zwei Case-Typen (Badge bleibt bewusst sichtbar auf der Website):
 * - „Reales Projekt · <Kunde>": basiert auf einem echten NEWEDGE-Projekt.
 *   WICHTIG: Beschreibungen/Zahlen vor Veröffentlichung mit dem Kunden
 *   abstimmen (siehe Redaktionsdokument).
 * - „Beispielhafter Anwendungsfall": plausible Demo-Geschichte, kein
 *   realer Kunde — wird ausgetauscht, sobald echte Referenzen vorliegen.
 *
 * `unassignedMiniCases` (Kundengewinnung & Funnel) haben noch keine
 * eigene Anwendungsfeld-Seite — sie werden nur ins CMS geseedet und
 * erscheinen erst, wenn eine passende Seite existiert.
 *
 * Strapi-Mapping: Collection `mini-case` (Relation auf `pain-point`).
 * --------------------------------------------------------------
 */
import type { MiniCase } from "@/content/painPoints";

const REAL_DISCLAIMER =
  "Based on a real NEWEDGE client project; individual automation details have been added for illustration.";
const BEISPIEL_BADGE = "Illustrative use case";
const BEISPIEL_DISCLAIMER =
  "This is an illustrative example scenario for demonstration — not real client data.";

export const miniCasesBySlug: Record<string, MiniCase[]> = {
  /* ── A1 · Entscheidungsinstanzen ─────────────────────────── */
  entscheidungsinstanzen: [
    {
      id: "bmp-award",
      phaseLabel: "Case 01",
      badge: "Real project · Bayerischer Mittelstandspreis",
      disclaimer: REAL_DISCLAIMER,
      title: "BMP Award — From 400 applications in Excel to an automated jury pipeline",
      teaser:
        "How one of Bavaria's most prestigious SME awards captures, structures and presents hundreds of applications to the jury, ready for a decision.",
      scenario:
        "Real project: Bayerischer Mittelstandspreis · hundreds of applications per year · several jury categories.",
      situation:
        "Applications arrived through various channels and were prepared for the jury manually in Excel lists: reviewing documents one by one, assigning categories by hand, emailing scoring sheets back and forth between jurors — a process that took weeks and was hard to trace.",
      approach: [
        "Incoming applications are captured, structured and assigned to the right jury category automatically.",
        "An AI-powered scoring system builds a structured evaluation profile and summary for each application.",
        "Jurors work directly from a decision-ready basis instead of raw data.",
        "Every scoring decision is documented in an audit-proof way.",
      ],
      result:
        "The jury works faster and more transparently: 70% less effort with audit-proof documentation, 60% higher jury efficiency and a complete audit trail for every single decision.",
      metrics: [
        { value: "70 %", label: "less effort — audit-proof documentation" },
        { value: "60 %", label: "higher jury efficiency" },
        { value: "100 %", label: "audit trail for every decision" },
      ],
    },
    {
      id: "hochschul-zulassung",
      phaseLabel: "Case 02",
      badge: BEISPIEL_BADGE,
      disclaimer: BEISPIEL_DISCLAIMER,
      title: "University — Admissions process for 3,000 applications automated",
      teaser:
        "How a private university cut the formal pre-check per application from 25 to under 3 minutes.",
      scenario:
        "Example scenario: private university · ~3,000 master's applications per semester · formal pre-check by the admissions team.",
      situation:
        "Every application had to be checked manually for completeness and compared against formal criteria — transcripts, language certificates, motivation letters, letters of recommendation. That meant 20 to 30 minutes of checking per application before it even reached the academic pre-selection.",
      approach: [
        "Documents are captured automatically, checked for completeness and compared against the admission criteria.",
        "Incomplete applications immediately receive automatic feedback with a specific note.",
        "Complete applications move into academic review, prioritized by suitability score.",
      ],
      result:
        "The formal review runs almost entirely automatically: admission decisions go out 18 days earlier on average, and processing errors from overlooked documents are a thing of the past.",
      metrics: [
        { value: "<3 min.", label: "formal check time instead of 25 minutes" },
        { value: "18 days", label: "earlier admission decisions sent" },
        { value: "0", label: "errors from overlooked documents" },
      ],
    },
    {
      id: "foerderbank-antragspruefung",
      phaseLabel: "Case 03",
      badge: BEISPIEL_BADGE,
      disclaimer: BEISPIEL_DISCLAIMER,
      title: "Development bank — Application review for regional economic funding automated",
      teaser:
        "How a regional development bank cut processing time per application from 3 hours to 45 minutes.",
      scenario:
        "Example scenario: regional development bank · complex rulebook of funding guidelines, thresholds and industry exclusions · rising application volume.",
      situation:
        "Case handlers checked applications manually against the rulebook and spent most of their time on formal review instead of the actual assessment of funding eligibility — a growing bottleneck as application volume rose.",
      approach: [
        "Incoming applications are automatically checked against the current funding rulebook.",
        "Missing documentation is flagged immediately.",
        "A prioritized decision brief with all relevant figures is created automatically for the approval committee.",
      ],
      result:
        "The formal review is no longer a bottleneck: the approval committee meets monthly instead of quarterly, and the error rate in the criteria check is close to zero.",
      metrics: [
        { value: "45 min.", label: "per application instead of 3 hours" },
        { value: "Monthly", label: "committee meetings instead of quarterly" },
        { value: "~0", label: "errors in the funding-criteria check" },
      ],
    },
  ],

  /* ── A2 · Health Care ────────────────────────────────────── */
  "health-care": [
    {
      id: "gyn-praxis-muenchen",
      phaseLabel: "Case 01",
      badge: "Real project · Gynecology Practice Munich",
      disclaimer: REAL_DISCLAIMER,
      title: "Gynecology Practice Munich — Digital presence with an automated booking path",
      teaser:
        "How a gynecology practice went from a phone bottleneck to a seamless online booking path.",
      scenario:
        "Real project: gynecology practice in Munich · website relaunch with automated Doctolib integration.",
      situation:
        "The practice ran an outdated, hard-to-maintain website with no clear path to an appointment — patients had to call, often during consultation hours, which led to missed calls and unnecessary admin work. The range of services was fragmented into small, hard-to-find sections.",
      approach: [
        "Migrated the entire web presence to a maintainable WordPress structure.",
        "Organized the service offering into seven clear categories with their own subpages.",
        "Connected appointment booking directly and automatically to Doctolib.",
        "Automatic notice when time slots are fully booked, so no patient hits a dead end.",
      ],
      result:
        "Patients book online end to end instead of by phone: the practice sees noticeably fewer admin calls, and the offering is clearly structured and easy to find.",
      metrics: [
        { value: "24/7", label: "booking path without a phone detour" },
        { value: "7", label: "structured service pages instead of short texts" },
        { value: "Noticeably", label: "fewer admin calls at the practice" },
      ],
    },
    {
      id: "therapiezentrum-onboarding",
      phaseLabel: "Case 02",
      badge: BEISPIEL_BADGE,
      disclaimer: BEISPIEL_DISCLAIMER,
      title: "Therapy center — First inquiries handled automatically around the clock",
      teaser:
        "How a therapy center cut response time from 18 hours to under 5 minutes — and closed 35% more first consultations.",
      scenario:
        "Example scenario: therapy center with several treatment areas · first inquiries previously only by phone during opening hours.",
      situation:
        "Prospective patients often called outside opening hours or gave up after several failed attempts. The administration also had no structured overview of which inquiry matched which treatment area.",
      approach: [
        "Automated WhatsApp onboarding takes first inquiries around the clock.",
        "Inquiries are automatically assigned to the right treatment area.",
        "Available capacity is checked and concrete appointment suggestions are sent back directly — with no manual intervention from the team.",
      ],
      result:
        "First inquiries come in around the clock in a structured way and are answered within minutes — with significantly more first consultations closed.",
      metrics: [
        { value: "+35 %", label: "first consultations closed" },
        { value: "<5 min.", label: "response time instead of 18 hours" },
        { value: "Automatic", label: "assignment to the treatment area" },
      ],
    },
    {
      id: "praxisverbund-kapazitaeten",
      phaseLabel: "Case 03",
      badge: BEISPIEL_BADGE,
      disclaimer: BEISPIEL_DISCLAIMER,
      title: "Specialist practice network — Cross-location capacity management automated",
      teaser:
        "How a practice network spots bottlenecks a week ahead instead of on the day itself.",
      scenario:
        "Example scenario: network of several specialist practices · decentralized appointment lists per location.",
      situation:
        "There was no central overview of utilization, waiting times and no-show rates — each location kept its own lists. Bottlenecks at one location went unnoticed even when another had free capacity; shifting patients happened purely by chance through staff recommendations.",
      approach: [
        "An automated real-time dashboard brings all locations together.",
        "Utilization patterns are detected automatically.",
        "When bottlenecks loom, alternative free appointments at nearby locations are suggested automatically.",
      ],
      result:
        "The network manages capacity across locations for the first time: fewer no-shows, better utilization, bottlenecks visible a week in advance.",
      metrics: [
        { value: "−22 %", label: "no-show rate" },
        { value: "+15 %", label: "appointment utilization across locations" },
        { value: "1 week", label: "lead time in detecting bottlenecks" },
      ],
    },
  ],

  /* ── A3 · Handel & Supply Chain ──────────────────────────── */
  "handel-supply-chain": [
    {
      id: "grosshandel-bestelleingabe",
      phaseLabel: "Case 01",
      badge: BEISPIEL_BADGE,
      disclaimer: BEISPIEL_DISCLAIMER,
      title: "Wholesale DACH — Three full-time order-entry roles replaced by automation",
      teaser:
        "How a wholesaler processes 400 orders a day in under 30 seconds per order.",
      scenario:
        "Example scenario: wholesaler in the DACH region · ~400 orders daily via email, customer portal and EDI interfaces.",
      situation:
        "Three employees were occupied solely with entering order data manually and transferring it into the ERP system — at peak times this regularly led to delays and typos that later had to be corrected at great effort.",
      approach: [
        "Every incoming order is captured automatically, regardless of format.",
        "Item numbers and quantities are extracted, checked against stock and passed straight into the ERP.",
        "Discrepancies or unclear details are flagged automatically and escalated to the responsible employee.",
      ],
      result:
        "Order processing runs virtually without manual entry: faster, error-free — and two of the three employees were able to move into customer service.",
      metrics: [
        { value: "<30 sec.", label: "per order instead of 12 minutes" },
        { value: "<0.5 %", label: "error rate instead of 6%" },
        { value: "2 of 3", label: "employees moved into customer service" },
      ],
    },
    {
      id: "maschinenbau-sendungstransparenz",
      phaseLabel: "Case 02",
      badge: BEISPIEL_BADGE,
      disclaimer: BEISPIEL_DISCLAIMER,
      title: "Machinery exporter — Shipment transparency across 23 countries automated",
      teaser:
        "How an exporter bundles shipment status, customs documents and compliance in one real-time dashboard.",
      scenario:
        "Example scenario: mid-sized machinery manufacturer · exports to 23 countries · communication with freight forwarders and customs agents.",
      situation:
        "Status checks ran over phone and email, often with several parties at once — delays were frequently noticed only once the container was already stuck at the destination port.",
      approach: [
        "A central real-time dashboard automatically brings together document status, shipment tracking and compliance checks.",
        "Sanctions lists and preferential trade agreements are automatically checked against the current shipment for every export.",
        "The check happens before the goods leave the warehouse.",
      ],
      result:
        "Since rollout, no shipment has been delayed by missing documents; phone status checks have nearly disappeared, and customs costs drop thanks to automatically detected preferential trade agreements.",
      metrics: [
        { value: "0", label: "shipments delayed by missing documents" },
        { value: "~14 %", label: "customs costs saved via preferential agreements" },
        { value: "~0", label: "status checks by phone" },
      ],
    },
    {
      id: "fachhaendler-fruehwarnsystem",
      phaseLabel: "Case 03",
      badge: BEISPIEL_BADGE,
      disclaimer: BEISPIEL_DISCLAIMER,
      title: "Specialist retailer — A supplier early-warning system instead of gut feeling",
      teaser:
        "How a specialist retailer with 80 suppliers spots quality problems three weeks earlier.",
      scenario:
        "Example scenario: specialist retailer with ~80 active suppliers · supplier assessment previously informal, based on experience.",
      situation:
        "Quality problems or a creeping rise in complaint rates were often only noticed once several faulty deliveries had already arrived. There was no structured data basis for supplier conversations, and negotiations ran on the experience of individual buyers.",
      approach: [
        "An automated supplier score continuously combines incoming-goods inspection, on-time delivery and complaints.",
        "Conspicuous patterns automatically trigger an early warning to the responsible buyer.",
        "A data-based negotiation basis is ready for every supplier conversation.",
      ],
      result:
        "Purchasing spots quality decline weeks earlier and negotiates on a data basis for the first time — the complaint rate of the most important suppliers drops measurably.",
      metrics: [
        { value: "3 weeks", label: "earlier warning of quality decline" },
        { value: "−19 %", label: "complaint rate for top-10 suppliers" },
        { value: "For the first time", label: "data-based negotiation basis" },
      ],
    },
  ],

  /* ── A4 · Professional Services ──────────────────────────── */
  "professional-services": [
    {
      id: "aeskon-prozesslandkarte",
      phaseLabel: "Case 01",
      badge: "Real project · AESKON GmbH",
      disclaimer: REAL_DISCLAIMER,
      title: "Industrial consulting — Process map and BAFA roadmap documented automatically",
      teaser:
        "How a consulting and technology business set up its digitalization to be eligible for BAFA funding.",
      scenario:
        "Real project: AESKON GmbH · BAFA-funded digitalization · process documentation as the foundation.",
      situation:
        "The business wanted to drive its own digitalization forward in a BAFA-eligible way, but had no structured process documentation as a basis — internal workflows existed only in the heads of individual employees. Without clean documentation, neither the funding application nor a later implementation could be planned properly.",
      approach: [
        "Created complete process diagrams with automation potential clearly marked.",
        "Developed a detailed specification document as the technical basis.",
        "Facilitated an architecture workshop that prioritized the automation steps for frontend, AI components and backend.",
      ],
      result:
        "The BAFA funding application went out on time and complete — with a process map documented in writing for the first time and a clear, prioritized implementation plan for the next automation steps.",
      metrics: [
        { value: "On time", label: "BAFA application fully prepared" },
        { value: "For the first time", label: "complete process map documented" },
        { value: "Prioritized", label: "implementation plan for the next steps" },
      ],
    },
    {
      id: "steuerkanzlei-mandantenkommunikation",
      phaseLabel: "Case 02",
      badge: BEISPIEL_BADGE,
      disclaimer: BEISPIEL_DISCLAIMER,
      title: "Tax advisory firm — Client communication automated during peak season",
      teaser:
        "How a firm with 600 clients answers 40% of standard inquiries automatically.",
      scenario:
        "Example scenario: tax firm with ~600 clients · recurring standard questions during tax season.",
      situation:
        "Questions about deadlines, required documents and processing status tied up so much capacity that complex mandates stalled and advisors piled up overtime.",
      approach: [
        "An AI-powered first-contact assistant automatically recognizes standard inquiries and answers them directly.",
        "The individual processing status is checked automatically against the firm's system.",
        "Only genuinely complex or individual cases are forwarded to the advisors.",
      ],
      result:
        "Advisors are back to working on mandates instead of the inbox — with significantly less overtime during peak season.",
      metrics: [
        { value: "−40 %", label: "standard inquiries in the advisor inbox" },
        { value: "3 min.", label: "response time instead of 6 hours" },
        { value: "Noticeably", label: "less overtime during peak season" },
      ],
    },
    {
      id: "personalberatung-screening",
      phaseLabel: "Case 03",
      badge: BEISPIEL_BADGE,
      disclaimer: BEISPIEL_DISCLAIMER,
      title: "Recruitment consultancy — Candidate screening for 200 applicants per role automated",
      teaser:
        "How a recruitment consultancy cut time-to-shortlist from 9 days to 3.",
      scenario:
        "Example scenario: recruitment consultancy · ~200 applications per advertised role · manual comparison against the client profile.",
      situation:
        "Recruiters had to compare every application manually against the client's requirements profile before the first conversations could even take place — a process that often took a full working week.",
      approach: [
        "Incoming applications are automatically compared against the defined requirements profile.",
        "Relevant experience and qualifications are extracted.",
        "A structured, comparable summary is created for the recruiter for each candidate.",
      ],
      result:
        "Recruiters spend their time in conversation instead of in review — the shortlist is ready three times faster, and client satisfaction with shortlist quality rises noticeably.",
      metrics: [
        { value: "3 days", label: "time-to-shortlist instead of 9" },
        { value: "More time", label: "for conversations instead of review" },
        { value: "Noticeably", label: "higher satisfaction with shortlist quality" },
      ],
    },
  ],

  /* ── B1 · Auswahlverfahren & Awards ──────────────────────── */
  auswahlverfahren: [
    {
      id: "bmp-jury-pipeline",
      phaseLabel: "Case 01",
      badge: "Real project · Bayerischer Mittelstandspreis",
      disclaimer: REAL_DISCLAIMER,
      title: "BMP — Application evaluation for a Bavaria-wide award automated",
      teaser:
        "How one of Bavaria's best-known SME awards made its jury work 60% more efficient.",
      scenario:
        "Real project: Bayerischer Mittelstandspreis · applications across several channels · multiple jury categories.",
      situation:
        "Applications were prepared for the jury entirely by hand — scoring sheets went back and forth by email between individual jurors, and a central overview of the processing status was completely missing.",
      approach: [
        "Applications are captured and structured automatically.",
        "An AI-powered system builds an evaluation summary for each application.",
        "The jury works from a comparable score overview across all categories.",
      ],
      result:
        "The entire selection process is digitized: more efficient, audit-proof and traceable for every single scoring decision.",
      metrics: [
        { value: "60 %", label: "higher jury efficiency" },
        { value: "70 %", label: "less effort — audit-proof documentation" },
        { value: "100 %", label: "traceable audit trail" },
      ],
    },
    {
      id: "innovationspreis-bias",
      phaseLabel: "Case 02",
      badge: BEISPIEL_BADGE,
      disclaimer: BEISPIEL_DISCLAIMER,
      title: "Innovation award — Scoring bias uncovered through automated analysis",
      teaser:
        "How a committee made systematic scoring patterns visible and cut the spread between jurors by 35%.",
      scenario:
        "Example scenario: innovation award committee · recurring scoring patterns across several jury rounds.",
      situation:
        "Certain categories or submission types systematically scored better or worse without this ever being recorded or questioned — a manual analysis across several years would hardly have been practical.",
      approach: [
        "Automated bias analysis continuously evaluates all scores.",
        "Deviation patterns between individual jurors are made visible.",
        "A guidance report is provided automatically before each jury session.",
      ],
      result:
        "The committee discusses on a data basis for the first time — the shortlist emerges more objectively and transparently.",
      metrics: [
        { value: "−35 %", label: "scoring spread between jurors" },
        { value: "More objective", label: "and more transparent shortlisting" },
        { value: "For the first time", label: "data-based basis for committee discussion" },
      ],
    },
    {
      id: "gruenderwettbewerb-vorsortierung",
      phaseLabel: "Case 03",
      badge: BEISPIEL_BADGE,
      disclaimer: BEISPIEL_DISCLAIMER,
      title: "Startup competition — Pre-sorting of 600 applications automated",
      teaser:
        "How a small organizing team delivers the first shortlist after 3 days instead of 12.",
      scenario:
        "Example scenario: regional startup competition · ~600 applications per year · small organizing team.",
      situation:
        "Far more applications came in than the team could review manually before formally invalid or incomplete submissions were sorted out — valuable time was lost to pure formal checking instead of content assessment.",
      approach: [
        "Submitted concepts are automatically checked against the entry criteria.",
        "Missing mandatory information is flagged immediately.",
        "A list prioritized by suitability is created for the first jury review.",
      ],
      result:
        "The organizing team assesses content instead of formalities — the jury starts with a clean, prioritized field of applicants.",
      metrics: [
        { value: "−65 %", label: "review time for the organizing team" },
        { value: "0", label: "formally invalid applications in the jury round" },
        { value: "3 days", label: "to the first shortlist instead of 12" },
      ],
    },
  ],

  /* ── B3 · Import / Export & Compliance ───────────────────── */
  compliance: [
    {
      id: "maschinenbau-dokumente",
      phaseLabel: "Case 01",
      badge: BEISPIEL_BADGE,
      disclaimer: BEISPIEL_DISCLAIMER,
      title: "Machinery exporter — Document chaos across 23 countries cleared automatically",
      teaser:
        "How trade documents in five languages are automatically recognized, assigned and checked.",
      scenario:
        "Example scenario: exporter with shipments to 23 countries · trade documents in five languages · communication via email, phone and Teams.",
      situation:
        "Every shipment had to be pieced together by hand — the freight forwarder communicated by email, the customs agent by phone, internal approvals ran through Teams. Inconsistencies were often only noticed once the container was already at the destination port.",
      approach: [
        "Incoming documents are recognized automatically, regardless of language and format.",
        "Documents are assigned to the right shipment and checked for completeness.",
        "Missing or contradictory details are escalated immediately, before the goods leave the warehouse.",
      ],
      result:
        "The document situation is complete and transparent per shipment at all times — delays from missing paperwork are a thing of the past.",
      metrics: [
        { value: "<60 sec.", label: "document assignment instead of 45 minutes" },
        { value: "0", label: "shipments delayed by missing documents" },
        { value: "100 %", label: "automated status overview for all parties" },
      ],
    },
    {
      id: "aeskon-bafa-compliance",
      phaseLabel: "Case 02",
      badge: "Real project · AESKON GmbH (BAFA compliance)",
      disclaimer: REAL_DISCLAIMER,
      title: "Industrial consulting — Funding eligibility secured through automated process control",
      teaser:
        "How a consulting firm secures the BAFA-compliant order of every application step.",
      scenario:
        "Real project: AESKON GmbH · BAFA funding procedure · strict requirements on the order of application and contract.",
      situation:
        "Funding applications and consulting contracts had to follow exactly the order prescribed by BAFA — a single wrong step, such as a contract signed too early, would have jeopardized the entire funding eligibility and, in the worst case, led to legal consequences.",
      approach: [
        "A structured, documented workflow logs every step of the application in a traceable way.",
        "An automatic check ensures no action is taken before the required official approval.",
        "The next phase is only unlocked after approval.",
      ],
      result:
        "The funding application went out on time, complete and compliant — without a single procedural error in the entire application phase.",
      metrics: [
        { value: "0", label: "procedural errors in the entire application phase" },
        { value: "On time", label: "and submitted in compliance" },
        { value: "Complete", label: "documentation for any audits" },
      ],
    },
    {
      id: "grosshaendler-zollpraeferenzen",
      phaseLabel: "Case 03",
      badge: BEISPIEL_BADGE,
      disclaimer: BEISPIEL_DISCLAIMER,
      title: "Wholesaler — Customs preferences used systematically and automatically for the first time",
      teaser:
        "How a wholesaler saves around 14% in customs costs through automatically detected free-trade agreements.",
      scenario:
        "Example scenario: wholesaler with high import volume · preferential origins previously checked only on a sample basis.",
      situation:
        "On a significant share of imports, more customs duty was paid than necessary because preferential origins were not consistently documented and used — a systematic check was barely feasible manually given the number of shipments.",
      approach: [
        "For each shipment, it is automatically detected which free-trade agreements apply.",
        "The matching preference proofs are generated automatically.",
        "All proofs are filed in an audit-proof way.",
      ],
      result:
        "No preference case is overlooked anymore — customs costs drop systematically, and the documentation withstands any tax audit.",
      metrics: [
        { value: "~14 %", label: "customs-cost savings via free-trade agreements" },
        { value: "100 %", label: "audit-proof documentation" },
        { value: "0", label: "overlooked preference cases since rollout" },
      ],
    },
  ],

  /* ── B4 · KPI-Transparenz & Reporting ────────────────────── */
  "kpi-dashboard": [
    {
      id: "mehrstandort-dashboard",
      phaseLabel: "Case 01",
      badge: BEISPIEL_BADGE,
      disclaimer: BEISPIEL_DISCLAIMER,
      title: "Multi-location practice — Automated real-time dashboard for all locations",
      teaser:
        "How a practice network automatically spots bottlenecks a week in advance.",
      scenario:
        "Example scenario: network of several specialist practices · location data previously merged manually only once a week.",
      situation:
        "No central view of utilization, waiting times and no-show rates — bottlenecks at one location were often only spotted once patients already had to be turned away, even though another location had free capacity.",
      approach: [
        "An automated real-time dashboard continuously merges all location data.",
        "Utilization patterns are detected automatically.",
        "When bottlenecks loom, matching alternative appointments at nearby locations are suggested automatically.",
      ],
      result:
        "Real-time control instead of a weekly review: fewer no-shows, better utilization, early bottleneck warnings.",
      metrics: [
        { value: "−22 %", label: "no-show rate" },
        { value: "+15 %", label: "appointment utilization across locations" },
        { value: "1 week", label: "lead time in detecting bottlenecks" },
      ],
    },
    {
      id: "vertrieb-pipeline-reporting",
      phaseLabel: "Case 02",
      badge: BEISPIEL_BADGE,
      disclaimer: BEISPIEL_DISCLAIMER,
      title: "Sales team — Pipeline reporting automated without manual Excel upkeep",
      teaser:
        "How a sales team saves 5 hours of reporting per week and decides on up-to-date numbers.",
      scenario:
        "Example scenario: sales team · pipeline data previously kept manually in Excel · weekly management reporting.",
      situation:
        "By the time the report was finished, the numbers were already out of date — decisions were regularly based on data a week old.",
      approach: [
        "CRM data connected directly to automated real-time reporting.",
        "Pipeline status, forecast and conversion rates are updated continuously.",
        "The management dashboard is created automatically — with no manual Excel upkeep.",
      ],
      result:
        "Management decides on up-to-date instead of week-old numbers for the first time; the team wins back hours every week.",
      metrics: [
        { value: "−5 hrs.", label: "reporting effort per week" },
        { value: "Up to date", label: "numbers instead of week-old reports" },
        { value: "Noticeably", label: "higher forecast accuracy" },
      ],
    },
    {
      id: "logistik-lieferanten-kpi",
      phaseLabel: "Case 03",
      badge: BEISPIEL_BADGE,
      disclaimer: BEISPIEL_DISCLAIMER,
      title: "Logistics provider — Supplier KPIs automated instead of buried in the quarterly report",
      teaser:
        "How a logistics provider spots delivery problems three weeks earlier than in the quarterly review.",
      scenario:
        "Example scenario: logistics provider · supplier assessment previously in the quarterly review.",
      situation:
        "Quality problems with suppliers were regularly only noticed in the quarterly review — by then several deliveries with defects had already gone through, and short-term corrective action was barely possible.",
      approach: [
        "Automated continuous KPI scoring evaluates on-time delivery, quality data and complaints on an ongoing basis.",
        "Conspicuous patterns automatically trigger an early warning to the responsible buyer.",
        "No more waiting for the next reporting cycle.",
      ],
      result:
        "Purchasing steers continuously instead of quarterly — with significantly fewer escalations in day-to-day business.",
      metrics: [
        { value: "3 weeks", label: "earlier warning of delivery problems" },
        { value: "For the first time", label: "data-based negotiation basis" },
        { value: "Significantly", label: "fewer escalations in day-to-day business" },
      ],
    },
  ],

  /* ── B5 · Kundensupport mit KI ───────────────────────────── */
  "ki-kundensupport": [
    {
      id: "eos-therapiezentrum",
      phaseLabel: "Case 01",
      badge: "Real project · EOS Therapiezentrum",
      disclaimer: REAL_DISCLAIMER,
      title: "Therapy center — First inquiries answered automatically around the clock",
      teaser:
        "How the EOS Therapiezentrum cut response time from 18 hours to under 5 minutes.",
      scenario:
        "Real project: EOS Therapiezentrum · first inquiries previously only by phone during opening hours.",
      situation:
        "Many prospective patients called outside opening hours, reached no one and dropped off — without the center ever finding out.",
      approach: [
        "Automated WhatsApp onboarding takes first inquiries around the clock.",
        "Inquiries are automatically assigned to the right treatment area.",
        "Available capacity is checked and concrete appointment suggestions are made directly — entirely without manual intervention from the team.",
      ],
      result:
        "Reachability is guaranteed independently of opening hours for the first time — with significantly more first consultations closed.",
      metrics: [
        { value: "<5 min.", label: "response time instead of 18 hours" },
        { value: "24/7", label: "reachability independent of opening hours" },
        { value: "Significantly", label: "more first consultations closed" },
      ],
    },
    {
      id: "onlinehaendler-support",
      phaseLabel: "Case 02",
      badge: BEISPIEL_BADGE,
      disclaimer: BEISPIEL_DISCLAIMER,
      title: "Online retailer — 55% of all support inquiries resolved fully automatically",
      teaser:
        "How an online retailer cut response time from 6 hours to 2 minutes.",
      scenario:
        "Example scenario: online retailer · several hundred support inquiries daily about shipping status, returns and product questions.",
      situation:
        "The support team could barely keep up even with extra temporary staff — response times of several hours translated directly into worse reviews.",
      approach: [
        "An AI-powered support assistant automatically classifies incoming inquiries.",
        "Shipping status and order data are pulled directly from the system.",
        "Standard cases are resolved fully on their own — only genuinely individual or complex matters go to staff.",
      ],
      result:
        "More than half of all inquiries resolve without human involvement — the team focuses on complex individual cases instead of routine questions.",
      metrics: [
        { value: "55 %", label: "of all inquiries resolved fully automatically" },
        { value: "2 min.", label: "response time instead of 6 hours" },
        { value: "Focus", label: "on complex individual cases instead of routine" },
      ],
    },
    {
      id: "steuerkanzlei-fristen",
      phaseLabel: "Case 03",
      badge: BEISPIEL_BADGE,
      disclaimer: BEISPIEL_DISCLAIMER,
      title: "Tax advisory firm — Deadline questions answered automatically during peak season",
      teaser:
        "How a firm keeps 40% of standard inquiries out of the advisor inbox.",
      scenario:
        "Example scenario: tax firm · recurring questions about deadlines, documents and processing status during tax season.",
      situation:
        "Standard inquiries tied up so much of the advisors' capacity that complex mandates stalled and processing times rose overall.",
      approach: [
        "An automated assistant answers standard questions directly.",
        "The individual processing status is checked automatically against the firm's system.",
        "Only individual or technically complex cases go to the advisors.",
      ],
      result:
        "Advisors work on mandates instead of inboxes — with noticeably less overtime during peak season.",
      metrics: [
        { value: "−40 %", label: "standard inquiries in the advisor inbox" },
        { value: "3 min.", label: "response time instead of 6 hours" },
        { value: "Noticeably", label: "less overtime during peak season" },
      ],
    },
  ],
};

/**
 * B2 · Kundengewinnung & Funnel — noch OHNE eigene Anwendungsfeld-Seite.
 * Werden nur ins CMS geseedet (ohne pain-point-Relation) und erscheinen
 * erst auf der Website, wenn eine passende Seite existiert.
 */
export const unassignedMiniCases: MiniCase[] = [
  {
    id: "340-consultancy-funnel",
    phaseLabel: "Case 01",
    badge: "Real project · 340 Consultancy",
    disclaimer: REAL_DISCLAIMER,
    title: "340 Consultancy — Website funnel rebuilt with automated lead handover",
    teaser:
      "How a consulting agency went from an info-only site to a clear funnel from first contact to qualified inquiry.",
    scenario:
      "Real project: 340 Consultancy · website relaunch with structured lead guidance.",
    situation:
      "The website had no clear customer journey — visitors found relevant information but no clear path to the contact form, and inquiries that did come in had to be sorted manually by topic and urgency.",
    approach: [
      "Ran a structured workshop process to realign the site.",
      "Rebuilt the sitemap and page structure with clear lead guidance.",
      "Set up automated initial sorting of incoming inquiries — each inquiry is immediately assigned to the right contact person.",
    ],
    result:
      "From first contact to qualified inquiry, a clear, automated funnel now leads the way — with a significantly shorter response time to new inquiries.",
    metrics: [
      { value: "End-to-end", label: "automated funnel through to qualified inquiry" },
      { value: "59", label: "prioritized feedback points for the developer handover" },
      { value: "Significantly", label: "shorter response time to new inquiries" },
    ],
  },
  {
    id: "b2b-lead-qualifizierung",
    phaseLabel: "Case 02",
    badge: BEISPIEL_BADGE,
    disclaimer: BEISPIEL_DISCLAIMER,
    title: "B2B service provider — Lead qualification automated before sales",
    teaser:
      "How a B2B service provider raised its qualified-lead rate from 18% to 47%.",
    scenario:
      "Example scenario: B2B service provider · steady inquiries via the contact form · first conversations often with unsuitable leads.",
    situation:
      "The sales team spent most of its time on first conversations that only turned out to be unsuitable once underway — wrong budget, wrong timeframe, no real need.",
    approach: [
      "Automated pre-qualification built directly into the inquiry process.",
      "Inquiries are automatically assessed by budget, timeframe and concrete need before they land in the sales inbox.",
      "Qualified leads automatically receive appointment suggestions.",
    ],
    result:
      "Sales now speaks almost exclusively with suitable prospects — and needs a third less time per deal closed.",
    metrics: [
      { value: "47 %", label: "qualified-lead rate instead of 18%" },
      { value: "−33 %", label: "sales time per closed deal" },
      { value: "More time", label: "for genuinely promising conversations" },
    ],
  },
  {
    id: "handwerk-funnel",
    phaseLabel: "Case 03",
    badge: BEISPIEL_BADGE,
    disclaimer: BEISPIEL_DISCLAIMER,
    title: "Regional trades business — Inquiries doubled through an automated funnel",
    teaser:
      "How a trades business doubled its website inquiries within three months.",
    scenario:
      "Example scenario: regional trades business · steady website traffic, but hardly any inquiries.",
    situation:
      "The site explained the service offering in detail without guiding the visitor to take action — requesting a quote meant several clicks and a long form for prospects.",
    approach: [
      "Rebuilt the entire funnel: clearly structured service pages with consistent calls to action.",
      "An automated short form replaces the long inquiry form.",
      "Incoming inquiries are immediately sorted by trade and urgency and automatically forwarded to the right employee.",
    ],
    result:
      "Twice as many inquiries at the same traffic — and the office saves the manual sorting work every day.",
    metrics: [
      { value: "2×", label: "inquiries via the website in three months" },
      { value: "−28 %", label: "bounce rate on the homepage" },
      { value: "Daily", label: "manual sorting work saved in the office" },
    ],
  },
];
