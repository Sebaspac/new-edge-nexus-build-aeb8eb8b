/**
 * Pain Point Content Store
 * --------------------------------------------------------------
 * Zentrale Inhalte für alle Pain-Point-Seiten.
 * Struktur 1:1 wie aktuelle Auswahlverfahren-Seite.
 * Bilder/Icons: bestehende Platzhalter werden weiterverwendet,
 * pro Slug-Sektion ist eine `imageNote` hinterlegt — beschreibt
 * was später inhaltlich an dieser Stelle stehen soll.
 * --------------------------------------------------------------
 */

export interface CompareRow {
  /** Kriterium */ k: string;
  /** New Edge */ ne: string;
  /** Alternative */ alt: string;
}

export interface FeatureBlock {
  h2: string;
  sub: string;
  bullets: [string, string, string];
  cta: string;
  /** Beschreibung des geplanten Bildes — Placeholder bleibt erhalten */
  imageNote: string;
  imageAlt: string;
}

export interface FeatureCard {
  title: string;
  desc: string;
  /** Beschreibung des geplanten Icons */
  iconNote: string;
}

export interface PainPointContent {
  slug: string;
  seo: {
    title: string;
    description: string;
    canonical: string;
  };
  hero: {
    overlabel: string;
    h1Line1: string;
    h1Line2Highlighted: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    imageNote: string;
    imageAlt: string;
  };
  trustBar: {
    headline: string;
    sub: string;
    logos: string[];
  };
  definition: {
    title: string;
    body: string;
  };
  feature1: FeatureBlock;
  feature2: FeatureBlock;
  feature3: FeatureBlock;
  integrations: {
    h2: string;
    sub: string;
  };
  compare: {
    h2: string;
    altLabel: string; // "Manuell", "Klassische Agentur", etc.
    rows: CompareRow[];
  };
  featureCards: {
    h2: string;
    cards: [FeatureCard, FeatureCard, FeatureCard];
  };
  testimonialHero: {
    quote: string;
    author: string;
  };
  faq: { q: string; a: string }[];
  closingCta: {
    h2Line1: string;
    h2Line2Highlighted: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
}

/* ──────────────────────────────────────────────────────────────
   PAIN POINT A — Auswahlverfahren
────────────────────────────────────────────────────────────── */
const auswahlverfahren: PainPointContent = {
  slug: "auswahlverfahren",
  seo: {
    title: "Auswahlverfahren automatisieren mit KI | New Edge München",
    description:
      "KI-gestütztes Bewerbungsmanagement für Awards, Jurys und Auswahlprozesse. Automatische Dokumentenprüfung, Jury-Koordination & revisionssichere Entscheidungsdokumentation. Demo buchen.",
    canonical: "/loesungen/auswahlverfahren-automatisieren",
  },
  hero: {
    overlabel: "KI-AUTOMATISIERUNG FÜR AUSWAHLVERFAHREN",
    h1Line1: "Auswahlverfahren automatisieren —",
    h1Line2Highlighted: "KI-gestützte Bewertungssysteme für Jurys",
    sub:
      "Unstrukturierte Bewerbungen, überlastete Jurys, verlorenes Wissen. Manuelle Auswahlprozesse kosten Organisationen durchschnittlich 60.000–80.000€ pro Zyklus — und produzieren in 43% der Fälle nicht reproduzierbare Entscheidungen (HR-Tech-Studie, 2024). New Edge strukturiert euren gesamten Prozess: von der ersten Einreichung bis zur revisionssicheren Entscheidung.",
    ctaPrimary: "Demo buchen",
    ctaSecondary: "Case Study — BMP Award",
    imageNote:
      "Dashboard-Mockup: Links unstrukturierte PDF-Stapel, rechts strukturiertes Scoring-Dashboard mit Balken, Kategorien, Jury-Scores. Transition-Animation. Lila-Akzente.",
    imageAlt:
      "Vorher: unstrukturierte PDF-Bewerbungen — Nachher: strukturiertes KI-Scoring-Dashboard",
  },
  trustBar: {
    headline: "Vertraut von führenden Organisationen in Deutschland",
    sub: "Reale Ergebnisse aus Auswahlprozessen wie eurem",
    logos: ["BMP Award", "Stiftung", "Förderinstitut", "Verband", "IHK", "Accelerator", "Forschungsinstitut"],
  },
  definition: {
    title: "Was ist KI-gestützte Auswahlverfahren-Automatisierung?",
    body:
      "KI-gestützte Auswahlverfahren-Automatisierung ersetzt manuelle Bewerbungsverarbeitung durch strukturierte Datenerfassung, automatische Vollständigkeitsprüfung und ein operationalisiertes Jury-Bewertungssystem. Organisationen reduzieren den Prozessaufwand damit um bis zu 70% — bei revisionssicherer Entscheidungsdokumentation und nachweislich besserer Entscheidungsqualität.",
  },
  feature1: {
    h2: "Schluss mit dem Dokumenten-Chaos",
    sub:
      "Bewerbungen kommen als PDFs, Freitexte und E-Mails — jedes in einem anderen Format. Systematisch vergleichen lässt sich das nicht. New Edge strukturiert die Datenerfassung, prüft Vollständigkeit automatisch und führt Bewerber durch einen klaren, geführten Prozess — ohne manuelle Nacharbeit.",
    bullets: [
      "Automatische Dokumentenprüfung auf Vollständigkeit",
      "Guided Application — Schritt-für-Schritt geführt",
      "Persistente Datenbasis — kein Wissen geht verloren",
    ],
    cta: "Wie es funktioniert",
    imageNote: "Animiertes Mockup: PDFs → KI-Erfassung → strukturiertes Formular.",
    imageAlt: "KI-gestützte Erfassung: PDFs werden in strukturierte Bewerbungs-Datenblätter überführt",
  },
  feature2: {
    h2: "Jury-Koordination die sich selbst organisiert",
    sub:
      "Endlose E-Mail-Threads, vergessene Deadlines, inkonsistente Bewertungen. New Edge automatisiert Briefings, Reminder und die gesamte Jury-Kommunikation. Teams berichten von einer Reduktion des Koordinationsaufwands um durchschnittlich 80%. Jedes Mitglied bewertet im eigenen Interface — in seinem Tempo.",
    bullets: [
      "Automatische Briefings und Reminder ohne manuellen Aufwand",
      "Operationalisiertes Bewertungssystem — keine Subjektivität",
      "Automatische Konflikt-Erkennung bei abweichenden Urteilen",
    ],
    cta: "Jury-Interface ansehen",
    imageNote: "Jury-Interface Mockup mit Scoring und Konflikt-Badge.",
    imageAlt: "Jury-Interface mit Score-System und automatischer Konflikt-Erkennung",
  },
  feature3: {
    h2: "Erkenntnisse die niemand explizit angefragt hat",
    sub:
      "Das eigentliche Gold liegt in den Daten. Welche Jury-Mitglieder bewerten systematisch zu hart? Welche Merkmale korrelieren mit späterem Projekterfolg? New Edge generiert diese Analysen automatisch aus jedem abgeschlossenen Zyklus — der Award wird zur strategischen Forschungsplattform.",
    bullets: [
      "Jury-Bias-Erkennung — systematische Muster werden sichtbar",
      "Bewerber-Clustering — strukturelle Ähnlichkeiten sichtbar machen",
      "Markt-Insights — Trendanalysen über Zyklen hinweg",
    ],
    cta: "Analyse-Demo ansehen",
    imageNote: "Split-Screen: Einzelscore links → Heatmap rechts mit Bias-Markierungen.",
    imageAlt: "Einzelscore mit Kategorien-Bewertung und Bias-Heatmap",
  },
  integrations: {
    h2: "Verbindet sich mit den Tools die ihr bereits nutzt",
    sub: "Kein neues System das alles ersetzt. New Edge integriert sich in eure bestehende Infrastruktur.",
  },
  compare: {
    h2: "New Edge vs. manueller Auswahlprozess",
    altLabel: "Manuell",
    rows: [
      { k: "Bewerbungseingang", ne: "Strukturiert & automatisch", alt: "PDFs, Mails, verschiedene Formate" },
      { k: "Jury-Koordination", ne: "Vollautomatisiert", alt: "Endlose E-Mail-Threads" },
      { k: "Vergleichbarkeit", ne: "Einheitliches Kategoriensystem", alt: "Keine einheitliche Basis" },
      { k: "Entscheidungsdoku", ne: "Revisionssicher & automatisch", alt: "Existiert kaum" },
      { k: "Wissen nach Zyklus", ne: "Persistente Datenbasis", alt: "Geht jedes Jahr verloren" },
      { k: "Analysen", ne: "Automatisch generiert", alt: "Nicht vorhanden" },
      { k: "Kosten", ne: "Planbar & skalierbar", alt: "60–80k€ pro Zyklus" },
    ],
  },
  featureCards: {
    h2: "KI die qualifiziert, koordiniert und entscheidet.",
    cards: [
      {
        title: "KI Bewerbungsanalyse",
        desc: "Jede Einreichung wird automatisch analysiert, kategorisiert und für die Jury aufbereitet.",
        iconNote: "Animation: Dokumente → strukturierte Daten",
      },
      {
        title: "Automatisierte Jury-Koordination",
        desc: "Briefings, Reminder, Deadlines — läuft automatisch. Euer Team fokussiert sich auf Entscheidungen.",
        iconNote: "Animation: Automatische Briefings erscheinen",
      },
      {
        title: "Analysen & Insights",
        desc: "Aus jedem Zyklus entstehen automatisch Muster und Trends — die den nächsten Prozess verbessern.",
        iconNote: "Animation: Datenpunkte clustern sich",
      },
    ],
  },
  testimonialHero: {
    quote:
      "New Edge hat unseren gesamten Auswahlprozess transformiert. Was früher 60.000€ und drei Monate Aufwand war, läuft jetzt automatisch — und die Qualität unserer Entscheidungen ist nachweislich besser.",
    author: "BMP Award — Projektleitung",
  },
  faq: [
    {
      q: "Wie lange dauert die Implementierung eines KI-gestützten Auswahlverfahrens?",
      a: "In der Regel 2–4 Wochen bis zum ersten produktiven Bewerbungszyklus. Datenmigration und Team-Training sind inklusive.",
    },
    {
      q: "Können wir unser bestehendes Bewertungssystem in die Software übernehmen?",
      a: "Ja. New Edge baut auf euren bestehenden Kriterien auf und operationalisiert sie. Ihr behaltet die volle Kontrolle über die Bewertungslogik.",
    },
    {
      q: "Wie funktioniert Jury-Anonymität bei digitalen Auswahlverfahren?",
      a: "Jury-Bewertungen können vollständig anonymisiert werden. Einzelne Scores sind nur für definierte Rollen sichtbar — die Aggregation für alle.",
    },
    {
      q: "Wo werden Bewerberdaten nach dem Auswahlzyklus gespeichert?",
      a: "Alle Daten verbleiben in eurer Infrastruktur. New Edge kann lokal oder in eurer Cloud gehostet werden — volle Datensouveränität garantiert.",
    },
  ],
  closingCta: {
    h2Line1: "Hört auf, jedes Jahr dasselbe",
    h2Line2Highlighted: "Wissen neu zu erzeugen.",
    sub: "Euer nächster Zyklus kann der erste sein, der wirklich skaliert.",
    ctaPrimary: "Demo buchen",
    ctaSecondary: "Case Study herunterladen",
  },
};

/* ──────────────────────────────────────────────────────────────
   PAIN POINT B — Kundengewinnung
────────────────────────────────────────────────────────────── */
const kundengewinnung: PainPointContent = {
  slug: "kundengewinnung",
  seo: {
    title: "Kundengewinnung automatisieren — Funnel & Lead Nurturing | New Edge",
    description:
      "Automatisierte Funnels, Lead-Nurturing & Conversion für Gyms, Spas und lokale Dienstleister. 3x mehr Conversions, keine Agentur-Abhängigkeit. Ab 200€/Monat.",
    canonical: "/loesungen/kundengewinnung-automatisieren",
  },
  hero: {
    overlabel: "KI-AUTOMATISIERUNG FÜR KUNDENGEWINNUNG",
    h1Line1: "Mehr Kunden. Weniger Aufwand.",
    h1Line2Highlighted: "Ohne Agentur-Abhängigkeit.",
    sub:
      "Gyms, Spas und lokale Dienstleister verlieren täglich potenzielle Kunden — weil das System für die Nachverfolgung fehlt. 80% aller Leads konvertieren mit dem Unternehmen das innerhalb von 5 Minuten antwortet (HubSpot, 2024). New Edge baut eure komplette Kundengewinnungs-Infrastruktur in 30 Tagen.",
    ctaPrimary: "Funnel-Audit starten",
    ctaSecondary: "Beispiel-Funnel ansehen",
    imageNote:
      "Split: Social Post ohne Conversion → gleicher Post mit Funnel → Buchung. Lila Pfeil dazwischen.",
    imageAlt: "Vorher: Social Post ohne Conversion — Nachher: vollständiger Funnel zu Buchung",
  },
  trustBar: {
    headline: "Mehr als 50 lokale Unternehmen in München vertrauen New Edge",
    sub: "Reale Ergebnisse aus Funnels für lokale Dienstleister",
    logos: ["Premium Gym", "Day Spa", "Beauty Studio", "Physio", "Coach", "Studio", "Dienstleister"],
  },
  definition: {
    title: "Was ist automatisierte Kundengewinnung?",
    body:
      "Automatisierte Kundengewinnung verbindet Werbekanäle (Social Media, Google Ads) mit intelligenten Follow-up-Systemen, die Interessenten ohne manuelle Eingriffe zur Buchung führen. 80% aller Leads konvertieren mit dem Unternehmen, das innerhalb von 5 Minuten antwortet (HubSpot, 2024). New Edge automatisiert genau diese Antwortgeschwindigkeit — rund um die Uhr.",
  },
  feature1: {
    h2: "Dein Social Traffic konvertiert — endlich.",
    sub:
      "Instagram-Follower, TikTok-Views, Google-Klicks — aber kein Wachstum. Das Problem ist nicht der Content. Es fehlt die Infrastruktur danach. Lokale Unternehmen ohne automatisiertes Follow-up verlieren durchschnittlich 35% ihrer Leads beim ersten Kontakt. New Edge baut Landing Pages, Funnels und Follow-up-Sequenzen die aus Aufmerksamkeit Buchungen machen.",
    bullets: [
      "Konversionoptimierte Landing Pages — für jede Kampagne",
      "Automatisches Lead-Nurturing via Mail, WhatsApp, SMS",
      "Volle Transparenz — du siehst wo jeder Lead im Funnel steht",
    ],
    cta: "Wie es funktioniert",
    imageNote: "Funnel-Visualisierung: Awareness → Engagement → Conversion. Lila Gradient.",
    imageAlt: "Marketing-Funnel von Awareness bis Conversion mit Lead-Nurturing-Stufen",
  },
  feature2: {
    h2: "Kein Lead geht mehr verloren.",
    sub:
      "Ein potenzieller Kunde trägt sich ein — und hört nichts mehr. Das ist Umsatz der jeden Monat liegen bleibt. New Edge automatisiert jeden Touchpoint: sofortige Bestätigung, Follow-up nach 24h, Erinnerung nach einer Woche — in deiner Markensprache, rund um die Uhr.",
    bullets: [
      "Sofortige Reaktion auf jede Anfrage — 24/7",
      "Personalisierte Nachrichten in deiner Markenstimme",
      "Automatische Terminbuchung ohne Hin-und-Her",
    ],
    cta: "Sequenzen ansehen",
    imageNote: "Smartphone: Eintragung → WhatsApp-Nachricht (3 Sek) → Kalender → Buchung.",
    imageAlt: "Automatisierte Lead-Nurturing-Sequenz vom Eintrag bis zur Terminbuchung",
  },
  feature3: {
    h2: "Ownership statt Agentur-Abhängigkeit.",
    sub:
      "New Edge gibt dir die vollständige Infrastruktur in deine Hände — mit Echtzeit-Transparenz über jeden Lead, jede Conversion, jeden Euro. Du zahlst für Ergebnisse. Nicht für Stunden.",
    bullets: [
      "Echtzeit-Dashboard — du siehst alles was passiert",
      "Kein Lock-in — deine Daten, deine Infrastruktur",
      "Direkt messbarer ROI — klare Zahlen, kein Interpretationsspielraum",
    ],
    cta: "Dashboard ansehen",
    imageNote: "ROI-Dashboard: Leads, Conversion-Rate, Umsatz. Alles steigt. Lila Linechart.",
    imageAlt: "Echtzeit-ROI-Dashboard mit Leads, Conversion-Rate und Umsatz-Entwicklung",
  },
  integrations: {
    h2: "Verbindet sich mit dem was du schon nutzt",
    sub: "Kein neues System das alles ersetzt. New Edge integriert sich in deine bestehenden Marketing-Kanäle.",
  },
  compare: {
    h2: "New Edge vs. klassische Marketing-Agentur",
    altLabel: "Klassische Agentur",
    rows: [
      { k: "Transparenz", ne: "Echtzeit-Dashboard", alt: "Monatlicher PDF-Report" },
      { k: "Reaktionszeit auf Leads", ne: "Sofort, 24/7", alt: "Werktags" },
      { k: "Ownership", ne: "Vollständig bei dir", alt: "Agentur behält Kontrolle" },
      { k: "Kosten", ne: "Ab 200€/Monat", alt: "2.000–5.000€/Monat" },
      { k: "Skalierbarkeit", ne: "Wächst mit dir", alt: "Jedes Wachstum kostet mehr" },
      { k: "Anpassbarkeit", ne: "In Minuten geändert", alt: "Wochen + Extra-Budget" },
    ],
  },
  featureCards: {
    h2: "KI die akquiriert, nurturiert und konvertiert.",
    cards: [
      {
        title: "KI Lead-Erfassung",
        desc: "Jeder Interessent wird sofort erfasst und in die richtige Nurture-Sequenz eingesteuert.",
        iconNote: "Formular → sofortige Bestätigung",
      },
      {
        title: "Automatisiertes Follow-up",
        desc: "Das System kommuniziert in deiner Stimme — bis zur Buchung.",
        iconNote: "Nachrichten-Sequenz über mehrere Tage",
      },
      {
        title: "Messbare Ergebnisse",
        desc: "Du siehst täglich was funktioniert — und optimierst auf Basis echter Daten.",
        iconNote: "Conversion-Chart steigt",
      },
    ],
  },
  testimonialHero: {
    quote:
      "Wir hatten Instagram-Follower, aber keine Buchungen. Mit New Edge laufen 80% unserer Anfragen automatisch zur Terminbuchung — nachts, am Wochenende, immer.",
    author: "Premium Gym München — Inhaberin",
  },
  faq: [
    {
      q: "Brauche ich technisches Know-how um einen automatisierten Marketing-Funnel zu nutzen?",
      a: "Nein. Du bekommst ein fertiges System — wir bauen es, du nutzt es. Keine Programmierkenntnisse erforderlich.",
    },
    {
      q: "Wie schnell sehe ich erste Ergebnisse mit dem automatisierten Funnel?",
      a: "Die meisten Kunden sehen erste Conversions innerhalb der ersten zwei Wochen nach Go-Live.",
    },
    {
      q: "Kann ich meinen bestehenden Instagram-Account in den Funnel integrieren?",
      a: "Ja. New Edge verbindet sich mit deinen bestehenden Social-Media-Kanälen und schaltet Follow-up-Sequenzen automatisch.",
    },
    {
      q: "Was ist der Unterschied zwischen New Edge und einer klassischen Marketing-Agentur?",
      a: "New Edge übergibt dir die vollständige Infrastruktur — mit Echtzeit-Dashboard und Datenkontrolle. Kosten: ab 200€/Monat statt 2.000–5.000€ Agenturgebühr.",
    },
  ],
  closingCta: {
    h2Line1: "Dein nächster Kunde wartet schon —",
    h2Line2Highlighted: "er findet nur den Weg nicht zu dir.",
    sub: "Wir bauen den Weg. In 30 Tagen.",
    ctaPrimary: "Funnel-Audit starten",
    ctaSecondary: "Demo ansehen",
  },
};

/* ──────────────────────────────────────────────────────────────
   PAIN POINT C — Compliance / Import-Export
────────────────────────────────────────────────────────────── */
const compliance: PainPointContent = {
  slug: "compliance",
  seo: {
    title: "Compliance Automatisierung Import Export — Zolldokumente & Sanktionslisten | New Edge",
    description:
      "Zolldokumente, CE-Zertifikate und Sanktionslisten automatisch prüfen. KI verhindert Compliance-Fehler in Echtzeit — bevor der Container rollt. Compliance-Audit anfragen.",
    canonical: "/loesungen/compliance-automatisierung",
  },
  hero: {
    overlabel: "KI-AUTOMATISIERUNG FÜR HANDEL & LOGISTIK",
    h1Line1: "Kein Container mehr gestoppt.",
    h1Line2Highlighted: "Kein Compliance-Fehler mehr.",
    sub:
      "Ein fehlendes Dokument. Eine veraltete Zolltarifnummer. Eine übersehene Sanktionsliste. 68% aller Compliance-Fehler entstehen durch manuelle Dateneingabe — mit durchschnittlichen Folgekosten von 23.000€ pro Vorfall (Deloitte, 2024). New Edge automatisiert eure Dokumentenverarbeitung und Compliance-Prüfung vollständig — revisionssicher, in Echtzeit.",
    ctaPrimary: "Compliance-Audit anfragen",
    ctaSecondary: "Demo ansehen",
    imageNote: "Dokument-Flow: Verschiedene Dokumente → KI-Engine (lila pulsierend) → 'Freigegeben' Status.",
    imageAlt: "KI-Engine prüft Zolldokumente, CE-Zertifikate und Sanktionslisten in Echtzeit",
  },
  trustBar: {
    headline: "Vertraut von Importeuren und Exporteuren in der DACH-Region",
    sub: "Reale Ergebnisse aus Compliance-Prozessen wie eurem",
    logos: ["Importeur", "Exporteur", "Spedition", "Großhandel", "Industrie", "Handel", "Logistik"],
  },
  definition: {
    title: "Was ist KI-gestützte Compliance-Automatisierung im Außenhandel?",
    body:
      "KI-gestützte Compliance-Automatisierung prüft Zolldokumente, Sanktionslisten und CE-Zertifikate automatisch — in Echtzeit, bevor Waren versendet werden. 68% aller Compliance-Fehler im Außenhandel entstehen durch manuelle Dateneingabe (Deloitte, 2024). DACH-Unternehmen vermeiden damit Verstöße, die durchschnittlich 23.000€ pro Vorfall kosten.",
  },
  feature1: {
    h2: "KI liest und prüft jedes Dokument automatisch.",
    sub:
      "Zolldokumente, Ursprungszeugnisse, CE-Zertifikate, REACH-Konformität — New Edge erfasst alle eingehenden Dokumente, extrahiert die relevanten Daten und prüft auf Vollständigkeit und Korrektheit. Was manuell 2–4 Stunden dauert, geschieht automatisch in unter 60 Sekunden. Fehlt etwas, meldet das System es sofort — bevor der Container rollt.",
    bullets: [
      "KI-Dokumentenlesung — alle Formate, alle Sprachen",
      "Automatische Compliance-Validierung gegen aktuelle Regularien",
      "Sofort-Eskalation bei fehlenden oder fehlerhaften Dokumenten",
    ],
    cta: "Wie es funktioniert",
    imageNote: "Scan-Animation: Dokument → Extraktion → Validierung → Alert bei Fehler.",
    imageAlt: "KI-gestützte Dokumentenprüfung mit Compliance-Validierung in Echtzeit",
  },
  feature2: {
    h2: "Alle Stakeholder. Immer informiert.",
    sub:
      "Shanghai schreibt per WeChat. Der Spediteur per Mail. Die interne QS in Teams. Die Behörde über ein Portal. New Edge zentralisiert die gesamte Stakeholder-Kommunikation und verteilt automatisch die richtigen Informationen — zur richtigen Zeit, auf der richtigen Plattform. Mit vollständigem Audit-Trail.",
    bullets: [
      "Microsoft Teams Integration — nahtlos verbunden",
      "Multi-Channel — Mail, Teams, Portal, automatisch verteilt",
      "Vollständiger Audit-Trail — jede Kommunikation dokumentiert",
    ],
    cta: "Stakeholder-Hub ansehen",
    imageNote: "Multi-Channel-Hub: Mail, Teams, Portal, WeChat — alles zentralisiert.",
    imageAlt: "Zentrale Stakeholder-Kommunikation über alle Kanäle hinweg",
  },
  feature3: {
    h2: "Wissen das im System bleibt — nicht in Köpfen.",
    sub:
      "Wenn die eine Person mit Zoll-Expertise ausfällt, steht der Prozess. New Edge transferiert das Wissen eures Teams in ein System das jeden Schritt kennt, jede Ausnahme dokumentiert und bei Regulatorik-Änderungen automatisch aktualisiert wird. Unternehmen reduzieren damit die Prozessabhängigkeit von Einzelpersonen um über 90%.",
    bullets: [
      "Wissenstransfer aus Köpfen in das System",
      "Automatische Updates bei Regulatorik-Änderungen",
      "Vollständige Prozesshistorie für Behörden-Audits",
    ],
    cta: "Wissenssystem ansehen",
    imageNote: "Wissensgraph mit automatischen Regulatorik-Updates und Audit-Trail.",
    imageAlt: "Persistentes Wissenssystem für Compliance mit automatischen Updates",
  },
  integrations: {
    h2: "Verbindet sich mit den Tools die ihr bereits nutzt",
    sub: "SAP, Oracle, Microsoft Dynamics — New Edge integriert sich in eure bestehende ERP-Infrastruktur.",
  },
  compare: {
    h2: "New Edge vs. manueller Compliance-Prozess",
    altLabel: "Manuell",
    rows: [
      { k: "Dokumentenprüfung", ne: "Automatisch, in Sekunden", alt: "Manuell, Stunden bis Tage" },
      { k: "Compliance-Validierung", ne: "Echtzeit gegen aktuelle Regularien", alt: "Reaktiv — nach dem Fehler" },
      { k: "Fehlerquote", ne: "Nahezu null", alt: "Menschliche Fehler unvermeidbar" },
      { k: "Stakeholder-Komm.", ne: "Automatisch, multi-channel", alt: "Manuell koordiniert" },
      { k: "Audit-Trail", ne: "Vollständig, revisionssicher", alt: "Fragmentiert, lückenhaft" },
      { k: "Kosten eines Fehlers", ne: "Minimiert", alt: "Ø 23.000€ pro Vorfall" },
    ],
  },
  featureCards: {
    h2: "KI die liest, prüft und schützt.",
    cards: [
      {
        title: "KI-Dokumentenprüfung",
        desc: "Alle Formate, alle Sprachen — automatisch erfasst, validiert, eskaliert.",
        iconNote: "Animation: Dokumente werden gescannt und freigegeben",
      },
      {
        title: "Echtzeit-Compliance",
        desc: "Sanktionslisten, Zolltarife, CE — kontinuierlich aktualisiert, automatisch geprüft.",
        iconNote: "Animation: Schild mit pulsierendem Status",
      },
      {
        title: "Audit-Ready Wissen",
        desc: "Jeder Schritt dokumentiert. Jede Entscheidung nachvollziehbar. Behörden-fest.",
        iconNote: "Animation: Audit-Trail-Timeline",
      },
    ],
  },
  testimonialHero: {
    quote:
      "Vor New Edge hatten wir alle drei Monate einen Compliance-Vorfall. Seit der Implementierung: null. Die Investition hat sich nach dem ersten verhinderten Vorfall amortisiert.",
    author: "Großhandel DACH — Head of Logistics",
  },
  faq: [
    {
      q: "Welche Regularien prüft die Compliance-Software automatisch?",
      a: "EU-Zolltarife (TARIC), Sanktionslisten (EU, UN, OFAC), CE-Anforderungen, REACH, EU-Lieferkettengesetz — und weitere konfigurierbar nach Bedarf.",
    },
    {
      q: "Funktioniert die Dokumentenprüfung auch mit nicht-deutschen oder nicht-EU-Dokumenten?",
      a: "Ja. New Edge verarbeitet Dokumente in allen gängigen Sprachen und internationalen Formaten — inklusive asiatischer Lieferanten-Dokumentation.",
    },
    {
      q: "Wie werden Änderungen in Zolltarifen oder Sanktionslisten automatisch eingespielt?",
      a: "Das System wird kontinuierlich mit aktuellen Regularien aktualisiert. Änderungen werden automatisch in alle laufenden Prüfprozesse übernommen — ohne manuelle Pflege.",
    },
    {
      q: "Kann die Software in unser bestehendes SAP oder ERP-System integriert werden?",
      a: "Ja. Native SAP-Integration sowie API-Anbindung für Oracle, Microsoft Dynamics und alle weiteren gängigen ERP-Systeme.",
    },
  ],
  closingCta: {
    h2Line1: "Euer nächster Compliance-Fehler",
    h2Line2Highlighted: "kostet mehr als New Edge für ein ganzes Jahr.",
    sub: "Verhindert ihn — bevor er passiert.",
    ctaPrimary: "Compliance-Audit anfragen",
    ctaSecondary: "Demo buchen",
  },
};

/* ──────────────────────────────────────────────────────────────
   PAIN POINT D — KPI Dashboard
────────────────────────────────────────────────────────────── */
const kpiDashboard: PainPointContent = {
  slug: "kpi-dashboard",
  seo: {
    title: "KPI Dashboard Echtzeit — CSRD Reporting & KI-Output messen | New Edge",
    description:
      "Alle Unternehmensdaten in einem Dashboard: Umsatz, KI-Output, CO₂ und Team-Performance in Echtzeit. CSRD-konform, lokal gehostet, nativ in Microsoft Teams.",
    canonical: "/loesungen/kpi-dashboard-echtzeit",
  },
  hero: {
    overlabel: "KI-GESTÜTZTES UNTERNEHMENS-COCKPIT",
    h1Line1: "Ein Bild. Alle Daten.",
    h1Line2Highlighted: "Entscheidungen in Minuten.",
    sub:
      "Montagsmeeting. Jeder hat andere Zahlen. Niemand hat aktuelle. Führungskräfte verbringen durchschnittlich 2,5 Stunden pro Woche mit dem manuellen Zusammenstellen von Berichten (McKinsey, 2024). New Edge gibt eurem Team ein vollständiges Bild in Echtzeit — Umsatz, KI-Output, CO₂, Teams-Performance — lokal gehostet, vollständig gebrandet.",
    ctaPrimary: "Dashboard-Demo anfragen",
    ctaSecondary: "Beispiel-Dashboard ansehen",
    imageNote:
      "Vollständiges Dashboard-Mockup: Umsatz-Chart + KI-Output + CO₂-Gauge + Teams-Heatmap. Lila Akzente, Echtzeit-Puls.",
    imageAlt: "Echtzeit-Unternehmens-Cockpit mit Umsatz, KI-Output, CO₂ und Team-Performance",
  },
  trustBar: {
    headline: "Vertraut von Mittelständlern und Konzernen im DACH-Raum",
    sub: "Reale Ergebnisse aus Reporting-Prozessen wie eurem",
    logos: ["Mittelstand", "Industrie", "Konzern", "Handel", "Dienstleister", "Beratung", "Produktion"],
  },
  definition: {
    title: "Was ist ein KI-gestütztes Echtzeit-Unternehmens-Cockpit?",
    body:
      "Ein KI-gestütztes Unternehmens-Cockpit verbindet alle Datenquellen — SAP, HubSpot, Excel, Personio — in einem einzigen Echtzeit-Dashboard. Führungskräfte verbringen laut McKinsey (2024) durchschnittlich 2,5 Stunden pro Woche mit dem manuellen Zusammenstellen von Berichten. Echtzeit-Dashboards reduzieren diese Zeit auf nahezu null — und liefern KI-generierte Handlungsempfehlungen direkt dazu.",
  },
  feature1: {
    h2: "Alle Datenquellen. Ein zentrales Bild.",
    sub:
      "SAP, HubSpot, Google Analytics, Personio, Excel-Tabellen — alle reden eine andere Sprache. New Edge übersetzt alle Quellen in ein einheitliches Echtzeit-Dashboard. Kein manuelles Zusammenführen. Kein Warten auf Reports. Keine veralteten Zahlen im nächsten Meeting.",
    bullets: [
      "Anbindung aller Datenquellen ohne Systemwechsel",
      "Echtzeit-Daten — nicht von voriger Woche",
      "Vollständig gebrandet — euer Cockpit, nicht ein generisches BI-Tool",
    ],
    cta: "Integrationen ansehen",
    imageNote: "Datenquellen fließen in ein zentrales Dashboard zusammen.",
    imageAlt: "Unified Data Layer: SAP, HubSpot, Personio, Excel in einem Dashboard",
  },
  feature2: {
    h2: "KI-Output und CO₂ — endlich messbar.",
    sub:
      "Ihr investiert in KI-Tools — aber niemand weiß was sie wirtschaftlich bringen. New Edge macht KI-Output messbar: eingesparte Stunden, automatisierte Prozesse, Fehlerreduktion — in Euro. Dazu vollständiges CO₂-Tracking für CSRD-Compliance. Ab dem Geschäftsjahr 2025 sind Unternehmen ab 250 Mitarbeitern zur CSRD-Berichterstattung verpflichtet.",
    bullets: [
      "KI-Output-Tracking — wirtschaftlicher Impact in Euro",
      "Automatisiertes CO₂-Reporting — CSRD-konform ab 2025",
      "Team-Performance sichtbar — auf Abteilungsebene",
    ],
    cta: "CSRD-Modul ansehen",
    imageNote: "CO₂-Gauge + KI-Output-Chart in Euro pulsieren live.",
    imageAlt: "CSRD-konformes CO₂-Reporting und KI-Output-Tracking in Euro",
  },
  feature3: {
    h2: "Microsoft Teams — KPIs direkt im Chat.",
    sub:
      "Kein Dashboard öffnen müssen. Jeden Montag kommt das KPI-Briefing automatisch in euren Teams-Channel — mit KI-generierten Handlungsempfehlungen direkt dabei. Euer Team weiß wo es steht. Ohne Meeting.",
    bullets: [
      "Native Microsoft Teams Integration",
      "Automatisierte KPI-Briefings mit KI-Analyse",
      "Lokal gehostet — volle Datensouveränität",
    ],
    cta: "Teams-Briefing ansehen",
    imageNote: "Teams-Channel mit automatisiertem KPI-Briefing und KI-Empfehlungen.",
    imageAlt: "Microsoft Teams Integration mit wöchentlichem KPI-Briefing",
  },
  integrations: {
    h2: "Verbindet sich mit den Tools die ihr bereits nutzt",
    sub: "Kein Systemwechsel. New Edge integriert sich in eure bestehende Daten-Infrastruktur.",
  },
  compare: {
    h2: "New Edge vs. manuelles Reporting",
    altLabel: "Manuell/Excel",
    rows: [
      { k: "Aktualität", ne: "Echtzeit", alt: "2–4 Wochen alt" },
      { k: "Datenquellen", ne: "Alle integriert", alt: "Manuell zusammengeführt" },
      { k: "KI-Output messbar", ne: "Automatisch in Euro", alt: "Nicht vorhanden" },
      { k: "CO₂-Reporting", ne: "CSRD-konform, automatisch", alt: "Manuell, fehleranfällig" },
      { k: "Führungsentscheid.", ne: "Datenbasiert, in Minuten", alt: "Auf Basis veralteter Zahlen" },
      { k: "Teams-Integration", ne: "Nativ", alt: "Separate Tools nötig" },
    ],
  },
  featureCards: {
    h2: "Echtzeit-Intelligence für euer Führungsteam.",
    cards: [
      {
        title: "Unified Data Layer",
        desc: "Alle Quellen. Ein System. Echtzeit.",
        iconNote: "Animation: Daten-Streams fließen zusammen",
      },
      {
        title: "KI & ESG Monitoring",
        desc: "KI-Output und CO₂-Footprint — beides messbar, beides compliant.",
        iconNote: "Animation: CO₂-Gauge + KI-Output pulsieren",
      },
      {
        title: "Automatisierte KPI-Briefings",
        desc: "Euer Team weiß jeden Montag wo es steht. Ohne Meeting.",
        iconNote: "Animation: Teams-Message mit KPI-Briefing erscheint",
      },
    ],
  },
  testimonialHero: {
    quote:
      "Wir haben unser Montags-Reporting von 4 Stunden Vorbereitung auf null reduziert. Das Cockpit zeigt alles in Echtzeit — und die KI-Empfehlungen sind ehrlich gesagt besser als das was wir vorher diskutiert haben.",
    author: "Mittelstandskonzern — CFO",
  },
  faq: [
    {
      q: "Welche Datenquellen können an das Echtzeit-Dashboard angebunden werden?",
      a: "SAP, HubSpot, Salesforce, Google Analytics, Personio, Microsoft 365, Excel und eigene Datenbanken via API — ohne Systemwechsel.",
    },
    {
      q: "Wie erfüllt New Edge die CSRD-Berichtspflicht automatisch?",
      a: "New Edge erfasst alle relevanten CO₂-Daten aus euren Systemen und generiert CSRD-konforme Reports — bereit für die Berichtspflicht ab dem Geschäftsjahr 2025.",
    },
    {
      q: "Kann das KPI-Dashboard auf unseren eigenen Servern gehostet werden?",
      a: "Ja. Für Unternehmen mit höchsten Datenschutzanforderungen bieten wir vollständig lokales Hosting — keine Daten verlassen eure Infrastruktur.",
    },
    {
      q: "Müssen wir bestehende Systeme ersetzen um das Dashboard zu nutzen?",
      a: "Nein. New Edge verbindet sich über API-Integration mit eurer bestehenden Infrastruktur — kein Systemwechsel, kein Datenverlust.",
    },
  ],
  closingCta: {
    h2Line1: "Hört auf, Entscheidungen",
    h2Line2Highlighted: "im Dunkeln zu treffen.",
    sub: "Euer Cockpit ist in 4 Wochen live.",
    ctaPrimary: "Dashboard-Demo anfragen",
    ctaSecondary: "Beispiel ansehen",
  },
};

/* ──────────────────────────────────────────────────────────────
   PAIN POINT E — KI-Kundensupport
────────────────────────────────────────────────────────────── */
const kiKundensupport: PainPointContent = {
  slug: "ki-kundensupport",
  seo: {
    title: "KI Kundensupport — 80% automatisch gelöst, 24/7 | New Edge München",
    description:
      "KI-Agent löst 80% aller Support-Anfragen in unter 30 Sekunden. Intelligentes Routing für komplexe Fälle. Integration in Zendesk, Freshdesk, Intercom & mehr.",
    canonical: "/loesungen/ki-kundensupport",
  },
  hero: {
    overlabel: "KI-AUTOMATISIERUNG FÜR KUNDENSUPPORT",
    h1Line1: "80% der Anfragen gelöst.",
    h1Line2Highlighted: "Sofort. Automatisch.",
    sub:
      "Support skaliert nicht mit eurem Wachstum — Personal auch nicht. New Edge baut euren kompletten Support-Funnel: KI löst 80% aller Anfragen in unter 30 Sekunden, der Rest landet mit vollem Kontext beim richtigen Menschen. Die Kosten pro Ticket sinken von 12€ auf unter 1€ (Gartner, 2024). 24/7, in eurer Markenstimme.",
    ctaPrimary: "Support-Audit anfragen",
    ctaSecondary: "KI-Agenten testen",
    imageNote:
      "Chat-Interface: Anfrage → KI antwortet (2 Sek) → 'Gelöst' | komplexe Anfrage → Routing mit Kontext-Badge.",
    imageAlt: "KI-Support-Agent löst Anfragen in unter 30 Sekunden mit intelligentem Routing",
  },
  trustBar: {
    headline: "Vertraut von Support-Teams in DACH",
    sub: "Reale Ergebnisse aus Support-Funnels wie eurem",
    logos: ["E-Commerce", "SaaS", "Service", "Plattform", "Hersteller", "Marketplace", "Dienstleister"],
  },
  definition: {
    title: "Was ist ein KI-gestützter Kundensupport-Funnel?",
    body:
      "Ein KI-gestützter Kundensupport-Funnel löst einfache Anfragen automatisch (bis zu 80% aller Tickets) und leitet komplexe Fälle mit vollständigem Kontext an menschliche Agenten weiter. Die Kosten pro Support-Ticket sinken damit von durchschnittlich 12€ auf unter 1€ — bei gleichzeitig 23% höherer Kundenzufriedenheit (Gartner, 2024).",
  },
  feature1: {
    h2: "80% gelöst. Sofort. Ohne menschliche Intervention.",
    sub:
      "Bestellstatus, Rücksendungen, FAQ, Standard-Reklamationen — das sind 80% aller Anfragen. New Edge löst sie automatisch, in unter 30 Sekunden, in eurer Markenstimme. Euer Team bekommt nur noch die 20% die wirklich menschliche Expertise brauchen.",
    bullets: [
      "Antwortzeit unter 30 Sekunden — rund um die Uhr",
      "Trainiert auf eure Markensprache und Wissensbasis",
      "Lernt kontinuierlich aus jeder Interaktion",
    ],
    cta: "KI-Agenten ansehen",
    imageNote: "Chat-Mockup: Anfrage → KI-Antwort in 2 Sekunden → 'Gelöst'.",
    imageAlt: "KI-Support-Agent beantwortet Standard-Anfragen in Sekunden",
  },
  feature2: {
    h2: "Komplexe Fälle — mit vollem Kontext weitergeleitet.",
    sub:
      "Wenn der KI-Agent übergibt, liefert er dem Agenten den kompletten Gesprächsverlauf, die Kundenhistorie und eine Einschätzung der Dringlichkeit. Keine Wiederholungen für den Kunden. Kein Informationsverlust. Unzufriedene Kunden werden automatisch priorisiert.",
    bullets: [
      "Intelligentes Routing — zum richtigen Agenten",
      "Vollständiger Kontext — keine Wiederholungen",
      "Sentiment-Erkennung — unzufriedene Kunden werden priorisiert",
    ],
    cta: "Routing-Logik ansehen",
    imageNote: "Übergabe vom KI-Agent an menschlichen Agenten mit Kontext-Badge.",
    imageAlt: "Intelligentes Routing komplexer Fälle mit vollständigem Gesprächskontext",
  },
  feature3: {
    h2: "Support als Produktintelligenz.",
    sub:
      "Jede Support-Anfrage ist ein Signal. New Edge analysiert automatisch welche Probleme sich häufen — und was das über euer Produkt aussagt. Unternehmen die Support-Daten systematisch auswerten, reduzieren wiederkehrende Fehler um durchschnittlich 40% innerhalb eines Quartals.",
    bullets: [
      "Automatische Trend-Analyse — welche Probleme häufen sich",
      "Direkte Produkt-Insights aus Support-Daten",
      "Automatisiertes Kundenzufriedenheits-Tracking",
    ],
    cta: "Insights-Demo ansehen",
    imageNote: "Heatmap der häufigsten Probleme + CSAT-Trendline.",
    imageAlt: "Support-Daten als Produkt-Intelligence mit Trend-Analyse und CSAT-Tracking",
  },
  integrations: {
    h2: "Verbindet sich mit eurer Support-Software",
    sub: "Native Integrationen für Zendesk, Freshdesk, Intercom — sowie API-Anbindung für weitere Systeme.",
  },
  compare: {
    h2: "New Edge KI-Support vs. klassisches Support-Team",
    altLabel: "Klassisch",
    rows: [
      { k: "Verfügbarkeit", ne: "24/7", alt: "Bürozeiten" },
      { k: "Reaktionszeit", ne: "Unter 30 Sekunden", alt: "Stunden bis Tage" },
      { k: "Kapazität", ne: "Unbegrenzt", alt: "Begrenzt durch Team-Größe" },
      { k: "Konsistenz", ne: "Immer gleiche Qualität", alt: "Abhängig von Agent + Tagesform" },
      { k: "Kosten pro Ticket", ne: "Unter 1€", alt: "Ø 12€" },
      { k: "Produkt-Insights", ne: "Automatisch generiert", alt: "Manuell, selten ausgewertet" },
    ],
  },
  featureCards: {
    h2: "KI die löst, routed und lernt.",
    cards: [
      {
        title: "KI Support-Agent",
        desc: "Löst 80% aller Anfragen. Sofort. In eurer Sprache.",
        iconNote: "Animation: KI antwortet sofort",
      },
      {
        title: "Intelligentes Routing",
        desc: "Komplexe Fälle mit vollem Kontext an den richtigen Menschen.",
        iconNote: "Animation: Chat → Agent mit Kontext-Badge",
      },
      {
        title: "Support Intelligence",
        desc: "Euer Support wird zur Produktforschung.",
        iconNote: "Animation: Häufigste Probleme als Heatmap",
      },
    ],
  },
  testimonialHero: {
    quote:
      "Wir haben unsere Ticket-Kosten um 87% reduziert und die CSAT-Werte sind gleichzeitig gestiegen. Der KI-Agent klingt wie unser Team — nur eben rund um die Uhr verfügbar.",
    author: "DACH E-Commerce — Head of Customer Service",
  },
  faq: [
    {
      q: "In welchen Sprachen kann der KI-Support-Agent konfiguriert werden?",
      a: "Deutsch, Englisch und alle weiteren gängigen Sprachen — je nach eurer Kundenbasis konfigurierbar. Multilingual im selben Interface.",
    },
    {
      q: "Wie wird der KI-Agent auf unsere Produkte und Markenstimme trainiert?",
      a: "Wir trainieren auf eure Wissensbasis, FAQs, Tonalität und bisherige Support-Gespräche. Onboarding: 2–3 Wochen bis zum produktiven Einsatz.",
    },
    {
      q: "Was passiert wenn der KI-Kundensupport-Agent eine Anfrage nicht lösen kann?",
      a: "Automatische Übergabe mit vollständigem Gesprächskontext und Priorisierung an euer Team. Der Kunde muss sein Anliegen nicht wiederholen.",
    },
    {
      q: "In welche Support-Software kann der KI-Agent integriert werden?",
      a: "Native Integrationen für Zendesk, Freshdesk, HubSpot Service Hub, Intercom — sowie API-Anbindung für weitere Systeme.",
    },
  ],
  closingCta: {
    h2Line1: "Euer nächster Kunde",
    h2Line2Highlighted: "bekommt eine Antwort in 30 Sekunden.",
    sub: "Rund um die Uhr. In eurer Stimme.",
    ctaPrimary: "KI-Agenten testen",
    ctaSecondary: "Support-Audit anfragen",
  },
};

/* ──────────────────────────────────────────────────────────────
   Slug-Map (alle Aliase zeigen auf denselben Content)
────────────────────────────────────────────────────────────── */
export const painPoints: Record<string, PainPointContent> = {
  // Pain Point A
  auswahlverfahren: auswahlverfahren,
  "auswahlverfahren-automatisieren": auswahlverfahren,

  // Pain Point B
  kundengewinnung: kundengewinnung,
  "kundengewinnung-automatisieren": kundengewinnung,

  // Pain Point C
  compliance: compliance,
  "compliance-automatisierung": compliance,
  "import-export": compliance,

  // Pain Point D
  "kpi-dashboard": kpiDashboard,
  "kpi-dashboard-echtzeit": kpiDashboard,
  reporting: kpiDashboard,

  // Pain Point E
  "ki-kundensupport": kiKundensupport,
  kundensupport: kiKundensupport,
  support: kiKundensupport,
};

export const DEFAULT_PAIN_POINT: PainPointContent = auswahlverfahren;
