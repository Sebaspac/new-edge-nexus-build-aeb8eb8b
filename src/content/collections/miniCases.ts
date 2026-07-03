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
import type { MiniCase } from "../painPoints";

const REAL_DISCLAIMER =
  "Basiert auf einem realen NEWEDGE-Kundenprojekt; einzelne Automatisierungs-Details wurden zur Veranschaulichung ergänzt.";
const BEISPIEL_BADGE = "Beispielhafter Anwendungsfall";
const BEISPIEL_DISCLAIMER =
  "Dies ist ein illustratives Beispiel-Szenario zur Veranschaulichung — keine realen Kundendaten.";

export const miniCasesBySlug: Record<string, MiniCase[]> = {
  /* ── A1 · Entscheidungsinstanzen ─────────────────────────── */
  entscheidungsinstanzen: [
    {
      id: "bmp-award",
      phaseLabel: "Case 01",
      badge: "Reales Projekt · Bayerischer Mittelstandspreis",
      disclaimer: REAL_DISCLAIMER,
      title: "BMP Award — Von 400 Bewerbungen im Excel zur automatisierten Jury-Pipeline",
      teaser:
        "Wie eine der renommiertesten Mittelstandsauszeichnungen Bayerns hunderte Bewerbungen automatisiert erfasst, strukturiert und der Jury entscheidungsreif vorlegt.",
      scenario:
        "Reales Projekt: Bayerischer Mittelstandspreis · hunderte Bewerbungen pro Jahr · mehrere Jury-Kategorien.",
      situation:
        "Bewerbungen trafen über verschiedene Kanäle ein und wurden manuell in Excel-Listen für die Jury aufbereitet: Unterlagen einzeln sichten, Kategorien von Hand zuordnen, Bewertungsbögen per Mail zwischen Juroren hin- und herschicken — ein Prozess, der Wochen dauerte und kaum nachvollziehbar war.",
      approach: [
        "Eingehende Bewerbungen werden automatisch erfasst, strukturiert und der passenden Jury-Kategorie zugeordnet.",
        "Ein KI-gestütztes Scoring-System erstellt für jede Bewerbung ein strukturiertes Bewertungsprofil samt Steckbrief.",
        "Juroren arbeiten direkt mit einer Entscheidungsgrundlage statt mit Rohdaten.",
        "Jede Bewertungsentscheidung wird revisionssicher dokumentiert.",
      ],
      result:
        "Die Jury arbeitet schneller und nachvollziehbarer: 70 % weniger Aufwand bei revisionssicherer Dokumentation, 60 % höhere Jury-Effizienz und ein vollständiger Audit-Trail für jede einzelne Entscheidung.",
      metrics: [
        { value: "70 %", label: "weniger Aufwand — revisionssicher dokumentiert" },
        { value: "60 %", label: "höhere Jury-Effizienz" },
        { value: "100 %", label: "Audit-Trail für jede Entscheidung" },
      ],
    },
    {
      id: "hochschul-zulassung",
      phaseLabel: "Case 02",
      badge: BEISPIEL_BADGE,
      disclaimer: BEISPIEL_DISCLAIMER,
      title: "Hochschule — Zulassungsverfahren für 3.000 Bewerbungen automatisiert",
      teaser:
        "Wie eine private Hochschule die formale Vorprüfung pro Bewerbung von 25 auf unter 3 Minuten senkt.",
      scenario:
        "Beispiel-Szenario: Private Hochschule · ~3.000 Master-Bewerbungen pro Semester · formale Vorprüfung durch das Zulassungsteam.",
      situation:
        "Jede Bewerbung musste manuell auf Vollständigkeit geprüft und gegen formale Kriterien abgeglichen werden — Notenübersicht, Sprachzertifikate, Motivationsschreiben, Empfehlungsschreiben. Pro Bewerbung bedeutete das 20 bis 30 Minuten Prüfarbeit, bevor sie überhaupt in die fachliche Vorauswahl ging.",
      approach: [
        "Dokumente werden automatisch erfasst, auf Vollständigkeit geprüft und gegen die Zulassungskriterien abgeglichen.",
        "Unvollständige Bewerbungen erhalten sofort eine automatische Rückmeldung mit konkretem Hinweis.",
        "Vollständige Bewerbungen landen priorisiert nach Eignungsscore in der fachlichen Begutachtung.",
      ],
      result:
        "Die formale Prüfung läuft nahezu vollständig automatisch: Zulassungsbescheide gehen im Schnitt 18 Tage früher raus, Bearbeitungsfehler durch übersehene Unterlagen gehören der Vergangenheit an.",
      metrics: [
        { value: "<3 Min.", label: "formale Prüfzeit statt 25 Minuten" },
        { value: "18 Tage", label: "früher versendete Zulassungsbescheide" },
        { value: "0", label: "Fehler durch übersehene Unterlagen" },
      ],
    },
    {
      id: "foerderbank-antragspruefung",
      phaseLabel: "Case 03",
      badge: BEISPIEL_BADGE,
      disclaimer: BEISPIEL_DISCLAIMER,
      title: "Förderbank — Antragsprüfung für regionale Wirtschaftsförderung automatisiert",
      teaser:
        "Wie eine regionale Förderbank die Bearbeitungszeit pro Antrag von 3 Stunden auf 45 Minuten senkt.",
      scenario:
        "Beispiel-Szenario: Regionale Förderbank · komplexes Regelwerk aus Förderrichtlinien, Schwellenwerten und Branchenausschlüssen · steigendes Antragsvolumen.",
      situation:
        "Sachbearbeiter prüften Anträge manuell gegen das Regelwerk und verbrachten den Großteil ihrer Zeit mit formaler Prüfung statt mit der eigentlichen fachlichen Bewertung der Förderwürdigkeit — bei steigendem Antragsvolumen ein wachsender Engpass.",
      approach: [
        "Eingehende Anträge werden automatisch gegen das aktuelle Förderregelwerk abgeglichen.",
        "Fehlende Nachweise werden sofort markiert.",
        "Für das Bewilligungsgremium entsteht automatisch eine priorisierte Entscheidungsvorlage mit allen relevanten Kennzahlen.",
      ],
      result:
        "Die formale Prüfung ist kein Engpass mehr: Das Bewilligungsgremium tagt monatlich statt quartalsweise, die Fehlerquote beim Kriterien-Abgleich liegt nahezu bei null.",
      metrics: [
        { value: "45 Min.", label: "pro Antrag statt 3 Stunden" },
        { value: "Monatlich", label: "Gremiumssitzungen statt quartalsweise" },
        { value: "~0", label: "Fehler beim Förderkriterien-Abgleich" },
      ],
    },
  ],

  /* ── A2 · Health Care ────────────────────────────────────── */
  "health-care": [
    {
      id: "gyn-praxis-muenchen",
      phaseLabel: "Case 01",
      badge: "Reales Projekt · Gynäkologische Praxis München",
      disclaimer: REAL_DISCLAIMER,
      title: "Gynäkologische Praxis München — Digitaler Auftritt mit automatisiertem Buchungsweg",
      teaser:
        "Wie eine Frauenarztpraxis vom Telefon-Flaschenhals zum durchgehenden Online-Buchungsweg kommt.",
      scenario:
        "Reales Projekt: Frauenarztpraxis in München · Website-Relaunch mit automatisierter Doctolib-Anbindung.",
      situation:
        "Die Praxis arbeitete mit einer veralteten, schwer pflegbaren Website ohne klaren Terminweg — Patientinnen mussten anrufen, oft während der Sprechzeiten, was zu verpassten Anrufen und unnötigem administrativem Aufwand führte. Das Leistungsangebot war unübersichtlich in kleine, kaum auffindbare Abschnitte gegliedert.",
      approach: [
        "Kompletter Webauftritt auf eine wartbare WordPress-Struktur migriert.",
        "Leistungsangebot in sieben klare Kategorien mit eigenen Unterseiten gegliedert.",
        "Terminbuchung direkt und automatisiert an Doctolib angebunden.",
        "Automatischer Hinweis bei ausgebuchten Zeitfenstern, damit keine Patientin ins Leere läuft.",
      ],
      result:
        "Patientinnen buchen durchgehend online statt telefonisch: Die Praxis verzeichnet spürbar weniger administrative Anrufe, das Angebot ist klar strukturiert auffindbar.",
      metrics: [
        { value: "24/7", label: "Buchungsweg ohne Telefonumweg" },
        { value: "7", label: "strukturierte Leistungsseiten statt Kurztexte" },
        { value: "Spürbar", label: "weniger administrative Anrufe in der Praxis" },
      ],
    },
    {
      id: "therapiezentrum-onboarding",
      phaseLabel: "Case 02",
      badge: BEISPIEL_BADGE,
      disclaimer: BEISPIEL_DISCLAIMER,
      title: "Therapiezentrum — Erstanfragen automatisiert rund um die Uhr bearbeitet",
      teaser:
        "Wie ein Therapiezentrum die Antwortzeit von 18 Stunden auf unter 5 Minuten senkt — und 35 % mehr Erstgespräche abschließt.",
      scenario:
        "Beispiel-Szenario: Therapiezentrum mit mehreren Behandlungsbereichen · Erstanfragen bisher nur telefonisch zu Sprechzeiten.",
      situation:
        "Interessenten riefen häufig außerhalb der Sprechzeiten an oder gaben nach mehreren erfolglosen Versuchen auf. Die Verwaltung hatte zudem keinen strukturierten Überblick, welche Anfrage zu welchem Behandlungsbereich passte.",
      approach: [
        "Automatisiertes WhatsApp-Onboarding nimmt Erstanfragen rund um die Uhr auf.",
        "Anfragen werden automatisch dem passenden Behandlungsbereich zugeordnet.",
        "Freie Kapazitäten werden abgeglichen und konkrete Terminvorschläge direkt beantwortet — ohne manuellen Eingriff des Teams.",
      ],
      result:
        "Erstanfragen laufen rund um die Uhr strukturiert ein und werden in Minuten beantwortet — mit deutlich mehr abgeschlossenen Erstgesprächen.",
      metrics: [
        { value: "+35 %", label: "abgeschlossene Erstgespräche" },
        { value: "<5 Min.", label: "Antwortzeit statt 18 Stunden" },
        { value: "Automatisch", label: "Zuordnung zum Behandlungsbereich" },
      ],
    },
    {
      id: "praxisverbund-kapazitaeten",
      phaseLabel: "Case 03",
      badge: BEISPIEL_BADGE,
      disclaimer: BEISPIEL_DISCLAIMER,
      title: "Facharztpraxis-Verbund — Standortübergreifendes Kapazitäts-Management automatisiert",
      teaser:
        "Wie ein Praxisverbund Engpässe eine Woche im Voraus erkennt statt am Tag selbst.",
      scenario:
        "Beispiel-Szenario: Verbund mehrerer Facharztpraxen · dezentrale Terminlisten je Standort.",
      situation:
        "Es gab keinen zentralen Überblick über Auslastung, Wartezeiten und No-Show-Quoten — jeder Standort führte eigene Listen. Engpässe an einem Standort wurden nicht erkannt, obwohl ein anderer freie Kapazitäten hatte; Patientenverlagerung erfolgte rein zufällig über persönliche Empfehlung der Mitarbeitenden.",
      approach: [
        "Automatisiertes Echtzeit-Dashboard führt alle Standorte zusammen.",
        "Auslastungsmuster werden automatisch erkannt.",
        "Bei drohenden Engpässen werden automatisch alternative freie Termine an benachbarten Standorten vorgeschlagen.",
      ],
      result:
        "Der Verbund steuert Kapazitäten erstmals standortübergreifend: weniger No-Shows, bessere Auslastung, Engpässe eine Woche im Voraus sichtbar.",
      metrics: [
        { value: "−22 %", label: "No-Show-Quote" },
        { value: "+15 %", label: "Terminauslastung standortübergreifend" },
        { value: "1 Woche", label: "Vorlauf bei der Engpass-Erkennung" },
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
      title: "Großhandel DACH — Drei Vollzeitstellen für Bestelleingabe durch Automatisierung ersetzt",
      teaser:
        "Wie ein Großhändler 400 Bestellungen pro Tag in unter 30 Sekunden pro Order verarbeitet.",
      scenario:
        "Beispiel-Szenario: Großhändler im DACH-Raum · ~400 Bestellungen täglich über Mail, Kundenportal und EDI-Schnittstellen.",
      situation:
        "Drei Mitarbeitende waren ausschließlich damit beschäftigt, Bestelldaten manuell zu erfassen und ins ERP-System zu übertragen — bei Spitzenzeiten kam es regelmäßig zu Verzögerungen und Tippfehlern, die später aufwendig korrigiert werden mussten.",
      approach: [
        "Jede eingehende Order wird unabhängig vom Format automatisch erfasst.",
        "Artikelnummern und Mengen werden extrahiert, gegen den Lagerbestand geprüft und direkt ins ERP übergeben.",
        "Abweichungen oder unklare Angaben werden automatisch markiert und an den zuständigen Mitarbeiter eskaliert.",
      ],
      result:
        "Die Bestellverarbeitung läuft praktisch ohne manuelle Eingabe: schneller, fehlerfrei — und zwei der drei Mitarbeitenden konnten in den Kundenservice wechseln.",
      metrics: [
        { value: "<30 Sek.", label: "pro Bestellung statt 12 Minuten" },
        { value: "<0,5 %", label: "Fehlerquote statt 6 %" },
        { value: "2 von 3", label: "Mitarbeitenden in den Kundenservice gewechselt" },
      ],
    },
    {
      id: "maschinenbau-sendungstransparenz",
      phaseLabel: "Case 02",
      badge: BEISPIEL_BADGE,
      disclaimer: BEISPIEL_DISCLAIMER,
      title: "Maschinenbau-Exporteur — Sendungstransparenz über 23 Länder automatisiert",
      teaser:
        "Wie ein Exporteur Sendungsstatus, Zolldokumente und Compliance in einem Echtzeit-Dashboard bündelt.",
      scenario:
        "Beispiel-Szenario: Mittelständischer Maschinenbauer · Export in 23 Länder · Kommunikation mit Spediteuren und Zollagenten.",
      situation:
        "Statusabfragen liefen über Telefon und Mail, oft mit mehreren Beteiligten gleichzeitig — Verzögerungen wurden häufig erst bemerkt, wenn der Container bereits am Zielhafen feststeckte.",
      approach: [
        "Zentrales Echtzeit-Dashboard führt Dokumentenstatus, Sendungsverfolgung und Compliance-Prüfung automatisch zusammen.",
        "Sanktionslisten und Präferenzabkommen werden bei jedem Export automatisch gegen die aktuelle Sendung geprüft.",
        "Die Prüfung erfolgt, bevor die Ware das Lager verlässt.",
      ],
      result:
        "Seit Einführung wurde keine Sendung mehr durch fehlende Dokumente verzögert; Telefon-Statusabfragen sind nahezu entfallen, Zollkosten sinken durch automatisch erkannte Präferenzabkommen.",
      metrics: [
        { value: "0", label: "durch fehlende Dokumente verzögerte Sendungen" },
        { value: "~14 %", label: "Zollkosten durch Präferenzabkommen gespart" },
        { value: "~0", label: "Statusabfragen per Telefon" },
      ],
    },
    {
      id: "fachhaendler-fruehwarnsystem",
      phaseLabel: "Case 03",
      badge: BEISPIEL_BADGE,
      disclaimer: BEISPIEL_DISCLAIMER,
      title: "Fachhändler — Lieferanten-Frühwarnsystem statt Bauchgefühl",
      teaser:
        "Wie ein Fachhändler mit 80 Lieferanten Qualitätsprobleme drei Wochen früher erkennt.",
      scenario:
        "Beispiel-Szenario: Fachhändler mit ~80 aktiven Lieferanten · Lieferantenbewertung bislang informell über Erfahrungswerte.",
      situation:
        "Qualitätsprobleme oder schleichend steigende Reklamationsquoten fielen oft erst auf, wenn bereits mehrere fehlerhafte Lieferungen eingegangen waren. Eine strukturierte Datenbasis für Lieferantengespräche gab es nicht, Verhandlungen liefen auf Erfahrungswerten einzelner Einkäufer.",
      approach: [
        "Automatisiertes Lieferanten-Scoring führt Wareneingangsprüfung, Lieferpünktlichkeit und Reklamationen laufend zusammen.",
        "Auffällige Muster lösen automatisch eine Frühwarnung an den zuständigen Einkäufer aus.",
        "Für jedes Lieferantengespräch steht eine datenbasierte Verhandlungsgrundlage bereit.",
      ],
      result:
        "Der Einkauf erkennt Qualitätsabfall Wochen früher und verhandelt erstmals auf Datenbasis — die Reklamationsquote der wichtigsten Lieferanten sinkt messbar.",
      metrics: [
        { value: "3 Wochen", label: "frühere Warnung bei Qualitätsabfall" },
        { value: "−19 %", label: "Reklamationsquote bei Top-10-Lieferanten" },
        { value: "Erstmals", label: "datenbasierte Verhandlungsgrundlage" },
      ],
    },
  ],

  /* ── A4 · Professional Services ──────────────────────────── */
  "professional-services": [
    {
      id: "aeskon-prozesslandkarte",
      phaseLabel: "Case 01",
      badge: "Reales Projekt · AESKON GmbH",
      disclaimer: REAL_DISCLAIMER,
      title: "Industrieberatung — Prozesslandkarte und BAFA-Fahrplan automatisiert dokumentiert",
      teaser:
        "Wie ein Beratungs- und Technologiebetrieb seine Digitalisierung BAFA-förderfähig aufsetzt.",
      scenario:
        "Reales Projekt: AESKON GmbH · BAFA-geförderte Digitalisierung · Prozessdokumentation als Grundlage.",
      situation:
        "Der Betrieb wollte die eigene Digitalisierung BAFA-förderfähig vorantreiben, hatte aber keine strukturierte Prozessdokumentation als Grundlage — interne Abläufe existierten nur in den Köpfen einzelner Mitarbeiter. Ohne saubere Dokumentation wäre weder der Förderantrag noch eine spätere Umsetzung sauber planbar gewesen.",
      approach: [
        "Vollständige Prozessdiagramme mit klar markierten Automatisierungspotenzialen erstellt.",
        "Detailliertes Pflichtenheft als technische Grundlage erarbeitet.",
        "Architektur-Workshop begleitet, in dem die Automatisierungsschritte für Frontend, KI-Komponenten und Backend priorisiert wurden.",
      ],
      result:
        "Der BAFA-Förderantrag ging fristgerecht und vollständig raus — mit erstmals schriftlich dokumentierter Prozesslandkarte und einem klaren, priorisierten Umsetzungsplan für die nächsten Automatisierungsschritte.",
      metrics: [
        { value: "Fristgerecht", label: "BAFA-Antrag vollständig vorbereitet" },
        { value: "Erstmals", label: "komplette Prozesslandkarte dokumentiert" },
        { value: "Priorisiert", label: "Umsetzungsplan für die nächsten Schritte" },
      ],
    },
    {
      id: "steuerkanzlei-mandantenkommunikation",
      phaseLabel: "Case 02",
      badge: BEISPIEL_BADGE,
      disclaimer: BEISPIEL_DISCLAIMER,
      title: "Steuerberatungskanzlei — Mandantenkommunikation in der Hochsaison automatisiert",
      teaser:
        "Wie eine Kanzlei mit 600 Mandanten 40 % der Standardanfragen automatisch beantwortet.",
      scenario:
        "Beispiel-Szenario: Steuerkanzlei mit ~600 Mandanten · wiederkehrende Standardfragen in der Steuersaison.",
      situation:
        "Fragen nach Fristen, benötigten Dokumenten und Bearbeitungsstand banden so viel Kapazität, dass komplexe Mandate liegen blieben und Berater Überstunden anhäuften.",
      approach: [
        "KI-gestützter Erstkontakt-Assistent erkennt Standardanfragen automatisch und beantwortet sie direkt.",
        "Der individuelle Bearbeitungsstand wird automatisch im Kanzleisystem abgeglichen.",
        "Nur tatsächlich komplexe oder individuelle Fälle werden an die Berater weitergeleitet.",
      ],
      result:
        "Die Berater arbeiten wieder an Mandaten statt am Posteingang — mit deutlich weniger Überstunden in der Hochsaison.",
      metrics: [
        { value: "−40 %", label: "Standardanfragen im Berater-Posteingang" },
        { value: "3 Min.", label: "Antwortzeit statt 6 Stunden" },
        { value: "Spürbar", label: "weniger Überstunden in der Hochsaison" },
      ],
    },
    {
      id: "personalberatung-screening",
      phaseLabel: "Case 03",
      badge: BEISPIEL_BADGE,
      disclaimer: BEISPIEL_DISCLAIMER,
      title: "Personalberatung — Bewerber-Screening für 200 Kandidaten pro Stelle automatisiert",
      teaser:
        "Wie eine Personalberatung die Time-to-Shortlist von 9 auf 3 Tage verkürzt.",
      scenario:
        "Beispiel-Szenario: Personalberatung · ~200 Bewerbungen pro ausgeschriebener Stelle · manueller Abgleich gegen das Kundenprofil.",
      situation:
        "Recruiter mussten jede Bewerbung manuell gegen das Anforderungsprofil des Kunden abgleichen, bevor überhaupt die ersten Gespräche stattfinden konnten — ein Prozess, der oft eine ganze Arbeitswoche beanspruchte.",
      approach: [
        "Eingehende Bewerbungen werden automatisch gegen das definierte Anforderungsprofil abgeglichen.",
        "Relevante Erfahrungen und Qualifikationen werden extrahiert.",
        "Für jeden Kandidaten entsteht eine strukturierte, vergleichbare Zusammenfassung für den Recruiter.",
      ],
      result:
        "Recruiter verbringen ihre Zeit im Gespräch statt in der Sichtung — die Shortlist steht dreimal schneller, die Zufriedenheit der Kunden mit der Shortlist-Qualität steigt spürbar.",
      metrics: [
        { value: "3 Tage", label: "Time-to-Shortlist statt 9" },
        { value: "Mehr Zeit", label: "für Gespräche statt Sichtung" },
        { value: "Spürbar", label: "höhere Zufriedenheit mit der Shortlist-Qualität" },
      ],
    },
  ],

  /* ── B1 · Auswahlverfahren & Awards ──────────────────────── */
  auswahlverfahren: [
    {
      id: "bmp-jury-pipeline",
      phaseLabel: "Case 01",
      badge: "Reales Projekt · Bayerischer Mittelstandspreis",
      disclaimer: REAL_DISCLAIMER,
      title: "BMP — Bewerbungsauswertung für eine bayernweite Auszeichnung automatisiert",
      teaser:
        "Wie eine der bekanntesten Mittelstandsauszeichnungen Bayerns ihre Jury-Arbeit um 60 % effizienter macht.",
      scenario:
        "Reales Projekt: Bayerischer Mittelstandspreis · Bewerbungen über mehrere Kanäle · mehrere Jury-Kategorien.",
      situation:
        "Bewerbungen wurden vollständig manuell für die Jury aufbereitet — Bewertungsbögen liefen per Mail zwischen einzelnen Juroren hin und her, eine zentrale Übersicht über den Bearbeitungsstand fehlte komplett.",
      approach: [
        "Bewerbungen werden automatisch erfasst und strukturiert.",
        "Ein KI-gestütztes System erstellt für jede Bewerbung einen Bewertungssteckbrief.",
        "Die Jury arbeitet mit einer vergleichbaren Score-Übersicht über alle Kategorien hinweg.",
      ],
      result:
        "Der komplette Auswahlprozess ist digitalisiert: effizienter, revisionssicher und für jede einzelne Bewertungsentscheidung nachvollziehbar.",
      metrics: [
        { value: "60 %", label: "höhere Jury-Effizienz" },
        { value: "70 %", label: "weniger Aufwand — revisionssicher dokumentiert" },
        { value: "100 %", label: "nachvollziehbarer Audit-Trail" },
      ],
    },
    {
      id: "innovationspreis-bias",
      phaseLabel: "Case 02",
      badge: BEISPIEL_BADGE,
      disclaimer: BEISPIEL_DISCLAIMER,
      title: "Innovationspreis — Bewertungs-Bias durch automatisierte Analyse aufgedeckt",
      teaser:
        "Wie ein Komitee systematische Bewertungsmuster sichtbar macht und die Streuung zwischen Juroren um 35 % senkt.",
      scenario:
        "Beispiel-Szenario: Innovationspreis-Komitee · wiederkehrende Bewertungsmuster über mehrere Jury-Runden.",
      situation:
        "Bestimmte Kategorien oder Einreichungstypen schnitten systematisch besser oder schlechter ab, ohne dass dies bislang erfasst oder hinterfragt wurde — eine manuelle Auswertung über mehrere Jahrgänge hinweg wäre kaum praktikabel gewesen.",
      approach: [
        "Automatisierte Bias-Analyse wertet alle Bewertungen laufend aus.",
        "Abweichungsmuster zwischen einzelnen Juroren werden sichtbar gemacht.",
        "Vor jeder Jury-Sitzung wird automatisch ein Hinweis-Report bereitgestellt.",
      ],
      result:
        "Das Komitee diskutiert erstmals auf Datenbasis — die Shortlist entsteht objektiver und nachvollziehbarer.",
      metrics: [
        { value: "−35 %", label: "Bewertungsstreuung zwischen Juroren" },
        { value: "Objektiver", label: "und nachvollziehbarere Shortlist-Erstellung" },
        { value: "Erstmals", label: "datenbasierte Diskussionsgrundlage fürs Komitee" },
      ],
    },
    {
      id: "gruenderwettbewerb-vorsortierung",
      phaseLabel: "Case 03",
      badge: BEISPIEL_BADGE,
      disclaimer: BEISPIEL_DISCLAIMER,
      title: "Gründerwettbewerb — Vorsortierung von 600 Bewerbungen automatisiert",
      teaser:
        "Wie ein kleines Organisationsteam die erste Shortlist nach 3 statt 12 Tagen vorlegt.",
      scenario:
        "Beispiel-Szenario: Regionaler Gründerwettbewerb · ~600 Bewerbungen jährlich · kleines Organisationsteam.",
      situation:
        "Es kamen deutlich mehr Bewerbungen ein, als das Team manuell sichten konnte, bevor formal ungültige oder unvollständige Einreichungen aussortiert wurden — wertvolle Zeit ging für reine Formalprüfung statt inhaltlicher Bewertung verloren.",
      approach: [
        "Eingereichte Konzepte werden automatisch gegen die Teilnahmekriterien abgeglichen.",
        "Fehlende Pflichtangaben werden sofort markiert.",
        "Für die erste Jury-Sichtung entsteht eine nach Eignung priorisierte Liste.",
      ],
      result:
        "Das Organisationsteam bewertet Inhalte statt Formalien — die Jury startet mit einem sauberen, priorisierten Bewerberfeld.",
      metrics: [
        { value: "−65 %", label: "Sichtungszeit für das Organisationsteam" },
        { value: "0", label: "formal ungültige Bewerbungen in der Jury-Runde" },
        { value: "3 Tage", label: "bis zur ersten Shortlist statt 12" },
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
      title: "Maschinenbau-Exporteur — Dokumentenchaos in 23 Ländern automatisiert beseitigt",
      teaser:
        "Wie Handelsdokumente in fünf Sprachen automatisch erkannt, zugeordnet und geprüft werden.",
      scenario:
        "Beispiel-Szenario: Exporteur mit Sendungen in 23 Länder · Handelsdokumente in fünf Sprachen · Kommunikation über Mail, Telefon und Teams.",
      situation:
        "Jede Sendung musste händisch zusammengetragen werden — der Spediteur kommunizierte per Mail, der Zollagent per Telefon, interne Freigaben liefen über Teams. Unstimmigkeiten fielen oft erst auf, wenn der Container bereits am Zielhafen stand.",
      approach: [
        "Eingehende Unterlagen werden unabhängig von Sprache und Format automatisch erkannt.",
        "Dokumente werden der richtigen Sendung zugeordnet und auf Vollständigkeit geprüft.",
        "Fehlende oder widersprüchliche Angaben werden sofort eskaliert, bevor die Ware das Lager verlässt.",
      ],
      result:
        "Die Dokumentenlage ist pro Sendung jederzeit vollständig und transparent — Verzögerungen durch fehlende Unterlagen gehören der Vergangenheit an.",
      metrics: [
        { value: "<60 Sek.", label: "Dokumentenzuordnung statt 45 Minuten" },
        { value: "0", label: "verzögerte Sendungen durch fehlende Dokumente" },
        { value: "100 %", label: "automatisierte Statusübersicht für alle Beteiligten" },
      ],
    },
    {
      id: "aeskon-bafa-compliance",
      phaseLabel: "Case 02",
      badge: "Reales Projekt · AESKON GmbH (BAFA-Compliance)",
      disclaimer: REAL_DISCLAIMER,
      title: "Industrieberatung — Förderfähigkeit durch automatisierte Prozessführung gesichert",
      teaser:
        "Wie ein Beratungsunternehmen die BAFA-konforme Reihenfolge jedes Antragsschritts absichert.",
      scenario:
        "Reales Projekt: AESKON GmbH · BAFA-Förderverfahren · strenge Vorgaben zur Reihenfolge von Antrag und Vertrag.",
      situation:
        "Förderanträge und Beratungsverträge mussten exakt in der von BAFA vorgeschriebenen Reihenfolge erfolgen — ein einziger falscher Schritt, etwa ein zu früh unterschriebener Vertrag, hätte die komplette Förderfähigkeit gefährdet und im schlimmsten Fall rechtliche Konsequenzen nach sich gezogen.",
      approach: [
        "Strukturierter, dokumentierter Ablauf protokolliert jeden Schritt der Antragsstellung nachvollziehbar.",
        "Automatische Prüfung stellt sicher, dass keine Handlung vor der erforderlichen behördlichen Freigabe erfolgt.",
        "Erst nach Freigabe wird die nächste Phase freigeschaltet.",
      ],
      result:
        "Der Förderantrag ging fristgerecht, vollständig und compliancekonform raus — ohne einen einzigen Verfahrensfehler in der gesamten Antragsphase.",
      metrics: [
        { value: "0", label: "Verfahrensfehler in der gesamten Antragsphase" },
        { value: "Fristgerecht", label: "und compliancekonform eingereicht" },
        { value: "Lückenlos", label: "dokumentiert für eventuelle Prüfungen" },
      ],
    },
    {
      id: "grosshaendler-zollpraeferenzen",
      phaseLabel: "Case 03",
      badge: BEISPIEL_BADGE,
      disclaimer: BEISPIEL_DISCLAIMER,
      title: "Großhändler — Zollpräferenzen erstmals automatisiert systematisch genutzt",
      teaser:
        "Wie ein Großhändler rund 14 % Zollkosten durch automatisch erkannte Freihandelsabkommen spart.",
      scenario:
        "Beispiel-Szenario: Großhändler mit hohem Importvolumen · Präferenzursprünge bislang nur stichprobenhaft geprüft.",
      situation:
        "Bei einem erheblichen Teil der Importe wurde mehr Zoll gezahlt als nötig, weil Präferenzursprünge nicht konsequent dokumentiert und genutzt wurden — eine systematische Prüfung war bei der Menge an Sendungen manuell kaum leistbar.",
      approach: [
        "Bei jeder Sendung wird automatisch erkannt, welche Freihandelsabkommen anwendbar sind.",
        "Die passenden Präferenznachweise werden automatisch erstellt.",
        "Alle Nachweise werden revisionssicher abgelegt.",
      ],
      result:
        "Kein Präferenzfall wird mehr übersehen — die Zollkosten sinken systematisch, die Dokumentation hält jeder Betriebsprüfung stand.",
      metrics: [
        { value: "~14 %", label: "Zollkosteneinsparung durch Freihandelsabkommen" },
        { value: "100 %", label: "revisionssichere Dokumentation" },
        { value: "0", label: "übersehene Präferenzfälle seit Einführung" },
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
      title: "Mehrstandort-Praxis — Automatisiertes Echtzeit-Dashboard für alle Standorte",
      teaser:
        "Wie ein Praxisverbund Engpässe automatisch eine Woche im Voraus erkennt.",
      scenario:
        "Beispiel-Szenario: Verbund mehrerer Facharztpraxen · Standortdaten bisher nur einmal pro Woche manuell zusammengeführt.",
      situation:
        "Kein zentraler Blick auf Auslastung, Wartezeiten und No-Show-Quoten — Engpässe an einem Standort wurden oft erst erkannt, wenn bereits Patienten abgewiesen werden mussten, obwohl ein anderer Standort freie Kapazitäten hatte.",
      approach: [
        "Automatisiertes Echtzeit-Dashboard führt alle Standortdaten laufend zusammen.",
        "Auslastungsmuster werden automatisch erkannt.",
        "Bei drohenden Engpässen werden automatisch passende Alternativtermine an benachbarten Standorten vorgeschlagen.",
      ],
      result:
        "Steuerung in Echtzeit statt Wochenrückblick: weniger No-Shows, bessere Auslastung, frühzeitige Engpass-Warnung.",
      metrics: [
        { value: "−22 %", label: "No-Show-Quote" },
        { value: "+15 %", label: "Terminauslastung standortübergreifend" },
        { value: "1 Woche", label: "Vorlauf bei der Engpass-Erkennung" },
      ],
    },
    {
      id: "vertrieb-pipeline-reporting",
      phaseLabel: "Case 02",
      badge: BEISPIEL_BADGE,
      disclaimer: BEISPIEL_DISCLAIMER,
      title: "Vertriebsteam — Pipeline-Reporting ohne manuelle Excel-Pflege automatisiert",
      teaser:
        "Wie ein Vertriebsteam 5 Stunden Reporting pro Woche spart und auf tagesaktuellen Zahlen entscheidet.",
      scenario:
        "Beispiel-Szenario: Vertriebsteam · Pipeline-Daten bisher manuell in Excel · wöchentliches Management-Reporting.",
      situation:
        "Bis der Report fertig war, waren die Zahlen bereits veraltet — Entscheidungen basierten regelmäßig auf einer Woche alten Datenlage.",
      approach: [
        "CRM-Daten direkt an ein automatisiertes Echtzeit-Reporting angebunden.",
        "Pipeline-Status, Forecast und Conversion-Raten werden laufend aktualisiert.",
        "Das Management-Dashboard entsteht automatisch — ganz ohne manuelle Excel-Pflege.",
      ],
      result:
        "Das Management entscheidet erstmals auf tagesaktuellen statt wochenalten Zahlen; das Team gewinnt jede Woche Stunden zurück.",
      metrics: [
        { value: "−5 Std.", label: "Reporting-Aufwand pro Woche" },
        { value: "Tagesaktuell", label: "Zahlen statt wochenalte Reports" },
        { value: "Spürbar", label: "höhere Forecast-Genauigkeit" },
      ],
    },
    {
      id: "logistik-lieferanten-kpi",
      phaseLabel: "Case 03",
      badge: BEISPIEL_BADGE,
      disclaimer: BEISPIEL_DISCLAIMER,
      title: "Logistikdienstleister — Lieferanten-KPIs automatisiert statt im Quartalsbericht",
      teaser:
        "Wie ein Logistiker Lieferprobleme drei Wochen früher erkennt als im Quartalsreview.",
      scenario:
        "Beispiel-Szenario: Logistikdienstleister · Lieferantenbewertung bisher im Quartalsreview.",
      situation:
        "Qualitätsprobleme bei Lieferanten fielen regelmäßig erst im Quartalsreview auf — zu diesem Zeitpunkt waren bereits mehrere Lieferungen mit Mängeln durchgelaufen, eine kurzfristige Gegensteuerung war kaum noch möglich.",
      approach: [
        "Automatisiertes laufendes KPI-Scoring wertet Lieferpünktlichkeit, Qualitätsdaten und Reklamationen kontinuierlich aus.",
        "Auffällige Muster lösen automatisch eine Frühwarnung an den zuständigen Einkäufer aus.",
        "Kein Warten mehr auf den nächsten Reportingzyklus.",
      ],
      result:
        "Der Einkauf steuert laufend statt quartalsweise gegen — mit deutlich weniger Eskalationen im Tagesgeschäft.",
      metrics: [
        { value: "3 Wochen", label: "frühere Warnung bei Lieferproblemen" },
        { value: "Erstmals", label: "datenbasierte Verhandlungsgrundlage" },
        { value: "Deutlich", label: "weniger Eskalationen im Tagesgeschäft" },
      ],
    },
  ],

  /* ── B5 · Kundensupport mit KI ───────────────────────────── */
  "ki-kundensupport": [
    {
      id: "eos-therapiezentrum",
      phaseLabel: "Case 01",
      badge: "Reales Projekt · EOS Therapiezentrum",
      disclaimer: REAL_DISCLAIMER,
      title: "Therapiezentrum — Erstanfragen automatisiert rund um die Uhr beantwortet",
      teaser:
        "Wie das EOS Therapiezentrum die Antwortzeit von 18 Stunden auf unter 5 Minuten senkt.",
      scenario:
        "Reales Projekt: EOS Therapiezentrum · Erstanfragen bisher nur telefonisch zu Sprechzeiten.",
      situation:
        "Viele Interessenten riefen außerhalb der Sprechzeiten an, erreichten niemanden und sprangen ab — ohne dass das Zentrum davon überhaupt erfuhr.",
      approach: [
        "Automatisiertes WhatsApp-Onboarding nimmt Erstanfragen rund um die Uhr auf.",
        "Anfragen werden automatisch dem passenden Behandlungsbereich zugeordnet.",
        "Freie Kapazitäten werden abgeglichen und konkrete Terminvorschläge direkt unterbreitet — ganz ohne manuellen Eingriff des Teams.",
      ],
      result:
        "Die Erreichbarkeit ist erstmals unabhängig von Sprechzeiten sichergestellt — mit deutlich mehr abgeschlossenen Erstgesprächen.",
      metrics: [
        { value: "<5 Min.", label: "Antwortzeit statt 18 Stunden" },
        { value: "24/7", label: "Erreichbarkeit unabhängig von Sprechzeiten" },
        { value: "Deutlich", label: "mehr abgeschlossene Erstgespräche" },
      ],
    },
    {
      id: "onlinehaendler-support",
      phaseLabel: "Case 02",
      badge: BEISPIEL_BADGE,
      disclaimer: BEISPIEL_DISCLAIMER,
      title: "Online-Händler — 55 % aller Supportanfragen vollautomatisch gelöst",
      teaser:
        "Wie ein Online-Händler die Antwortzeit von 6 Stunden auf 2 Minuten senkt.",
      scenario:
        "Beispiel-Szenario: Online-Händler · mehrere hundert Support-Anfragen täglich zu Versandstatus, Retouren und Produktfragen.",
      situation:
        "Das Support-Team kam selbst mit zusätzlichen Aushilfen kaum hinterher — Antwortzeiten von mehreren Stunden schlugen sich direkt in schlechteren Bewertungen nieder.",
      approach: [
        "KI-gestützter Support-Assistent klassifiziert eingehende Anfragen automatisch.",
        "Versandstatus und Bestelldaten werden direkt aus dem System abgerufen.",
        "Standardfälle werden vollständig eigenständig gelöst — nur tatsächlich individuelle oder komplexe Anliegen gehen an Mitarbeitende.",
      ],
      result:
        "Mehr als die Hälfte aller Anfragen löst sich ohne menschliches Zutun — das Team konzentriert sich auf komplexe Einzelfälle statt Routinefragen.",
      metrics: [
        { value: "55 %", label: "aller Anfragen vollautomatisch gelöst" },
        { value: "2 Min.", label: "Antwortzeit statt 6 Stunden" },
        { value: "Fokus", label: "auf komplexe Einzelfälle statt Routine" },
      ],
    },
    {
      id: "steuerkanzlei-fristen",
      phaseLabel: "Case 03",
      badge: BEISPIEL_BADGE,
      disclaimer: BEISPIEL_DISCLAIMER,
      title: "Steuerberatungskanzlei — Fristen-Fragen automatisiert in der Hochsaison beantwortet",
      teaser:
        "Wie eine Kanzlei 40 % der Standardanfragen aus dem Berater-Posteingang fernhält.",
      scenario:
        "Beispiel-Szenario: Steuerkanzlei · wiederkehrende Fragen zu Fristen, Unterlagen und Bearbeitungsstand in der Steuersaison.",
      situation:
        "Standardanfragen banden so viel Kapazität der Berater, dass komplexe Mandate liegen blieben und die Bearbeitungszeiten insgesamt stiegen.",
      approach: [
        "Automatisierter Assistent beantwortet Standardfragen direkt.",
        "Der individuelle Bearbeitungsstand wird automatisch im Kanzleisystem abgeglichen.",
        "Ausschließlich individuelle oder fachlich komplexe Fälle gehen an die Berater.",
      ],
      result:
        "Die Berater bearbeiten Mandate statt Postfächer — mit spürbar weniger Überstunden in der Hochsaison.",
      metrics: [
        { value: "−40 %", label: "Standardanfragen im Berater-Posteingang" },
        { value: "3 Min.", label: "Antwortzeit statt 6 Stunden" },
        { value: "Spürbar", label: "weniger Überstunden in der Hochsaison" },
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
    badge: "Reales Projekt · 340 Consultancy",
    disclaimer: REAL_DISCLAIMER,
    title: "340 Consultancy — Website-Funnel mit automatisierter Lead-Übergabe neu aufgebaut",
    teaser:
      "Wie eine Beratungsagentur vom Info-Auftritt zum klaren Funnel von Erstkontakt bis qualifizierter Anfrage kommt.",
    scenario:
      "Reales Projekt: 340 Consultancy · Website-Relaunch mit strukturierter Lead-Führung.",
    situation:
      "Die Website hatte keine klare Customer Journey — Besucher fanden inhaltlich passende Informationen, aber keinen klaren Weg zum Kontaktformular, und Anfragen, die dennoch eingingen, mussten manuell nach Thema und Dringlichkeit sortiert werden.",
    approach: [
      "Strukturierter Workshop-Prozess zur Neuausrichtung durchgeführt.",
      "Sitemap und Seitenstruktur mit klarer Lead-Führung neu aufgebaut.",
      "Automatisierte Erstsortierung eingehender Anfragen eingerichtet — jede Anfrage wird sofort dem passenden Ansprechpartner zugeordnet.",
    ],
    result:
      "Vom Erstkontakt bis zur qualifizierten Anfrage führt jetzt ein klarer, automatisierter Funnel — mit deutlich kürzerer Reaktionszeit auf neue Anfragen.",
    metrics: [
      { value: "Durchgängig", label: "automatisierter Funnel bis zur qualifizierten Anfrage" },
      { value: "59", label: "priorisierte Feedback-Punkte für die Entwicklerübergabe" },
      { value: "Deutlich", label: "kürzere Reaktionszeit auf neue Anfragen" },
    ],
  },
  {
    id: "b2b-lead-qualifizierung",
    phaseLabel: "Case 02",
    badge: BEISPIEL_BADGE,
    disclaimer: BEISPIEL_DISCLAIMER,
    title: "B2B-Dienstleister — Lead-Qualifizierung automatisch vor dem Vertrieb",
    teaser:
      "Wie ein B2B-Dienstleister die qualifizierte Lead-Quote von 18 % auf 47 % steigert.",
    scenario:
      "Beispiel-Szenario: B2B-Dienstleister · kontinuierliche Anfragen über das Kontaktformular · Erstgespräche oft mit unpassenden Leads.",
    situation:
      "Das Vertriebsteam verbrachte einen Großteil seiner Zeit mit Erstgesprächen, die sich erst im Gespräch als unpassend herausstellten — falsches Budget, falscher Zeitrahmen, kein echter Bedarf.",
    approach: [
      "Automatisierte Vorqualifizierung direkt in den Anfrageprozess eingebaut.",
      "Anfragen werden automatisch nach Budgetrahmen, Zeitrahmen und konkretem Bedarf bewertet, bevor sie im Vertriebs-Postfach landen.",
      "Qualifizierte Leads erhalten automatisch Terminvorschläge.",
    ],
    result:
      "Der Vertrieb spricht fast nur noch mit passenden Interessenten — und braucht pro Abschluss ein Drittel weniger Zeit.",
    metrics: [
      { value: "47 %", label: "qualifizierte Lead-Quote statt 18 %" },
      { value: "−33 %", label: "Vertriebszeit pro abgeschlossenem Deal" },
      { value: "Mehr Zeit", label: "für tatsächlich aussichtsreiche Gespräche" },
    ],
  },
  {
    id: "handwerk-funnel",
    phaseLabel: "Case 03",
    badge: BEISPIEL_BADGE,
    disclaimer: BEISPIEL_DISCLAIMER,
    title: "Regionaler Handwerksbetrieb — Anfragen durch automatisierten Funnel verdoppelt",
    teaser:
      "Wie ein Handwerksbetrieb seine Website-Anfragen innerhalb von drei Monaten verdoppelt.",
    scenario:
      "Beispiel-Szenario: Regionaler Handwerksbetrieb · stabiler Website-Traffic, aber kaum Anfragen.",
    situation:
      "Die Seite erklärte das Leistungsangebot ausführlich, ohne den Besucher gezielt zum Handeln zu führen — ein Angebot anzufragen bedeutete für Interessenten mehrere Klicks und ein langes Formular.",
    approach: [
      "Kompletten Funnel neu aufgebaut: klar strukturierte Leistungsseiten mit durchgängigen Handlungsaufforderungen.",
      "Automatisiertes Kurzformular ersetzt das lange Anfrageformular.",
      "Eingehende Anfragen werden sofort nach Gewerk und Dringlichkeit sortiert und automatisch an den passenden Mitarbeiter weitergeleitet.",
    ],
    result:
      "Doppelt so viele Anfragen bei gleichem Traffic — und das Büro spart täglich die manuelle Sortierarbeit.",
    metrics: [
      { value: "2×", label: "Anfragen über die Website in drei Monaten" },
      { value: "−28 %", label: "Absprungrate auf der Startseite" },
      { value: "Täglich", label: "manuelle Sortierarbeit im Büro gespart" },
    ],
  },
];
