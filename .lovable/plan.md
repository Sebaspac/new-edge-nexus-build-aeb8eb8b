

# Homepage Reposicionamiento – Modularer Umbau

## Analyse der aktuellen Schwächen (Diego's Feedback)

Die aktuelle Homepage hat vier Kernprobleme:
1. **Keine konkrete Wertversprechen** – "KI-Agentur für Brand, Digital & AI" sagt nicht WAS ihr löst
2. **Kein klarer Entry Point** – nur generisches "Kontakt aufnehmen", kein niedrigschwelliges Angebot
3. **Fehlende Glaubwürdigkeit** – keine messbaren Ergebnisse, keine konkreten Zahlen/Cases prominent
4. **Zielgruppe unklar** – "für wen" wird nicht sofort deutlich

## Aktuelle Modul-Reihenfolge

```text
1. HeroSection
2. MethodologyGrid (6 Service-Kacheln)
3. LogoCloud
4. PositionedForImpactSection (Founders-Bild + "Positioned for Impact")
5. CaseStudiesGrid
6. AgencyEdgeSection ("Mehr als eine Agentur")
7. InteractiveCore
8. MagicText ("Hier entsteht Magie" → Careers)
9. TestimonialsSection
10. BlogGridHome
11. Contact Section
```

---

## Vorgeschlagene Änderungen

### MODUL 1 – HeroSection (ÄNDERN)

**Problem:** Headline ist generisch, Subheadline zu vage, kein messbares Ergebnis.

**Änderungen:**
- Headline: **"Wir automatisieren repetitive Prozesse für den Mittelstand – mit KI."**
- Subheadline: **"Verwaltungsaufwand reduzieren. Abläufe beschleunigen. Systeme aufbauen, die euch gehören. Ergebnis: 30–60 % weniger operativer Aufwand."**
- Primärer CTA: **"Kostenlose KI-Analyse sichern"** (→ Calendly/KI-Audit) statt generischem "Projekt starten"
- Sekundärer CTA bleibt "Über Uns"
- Trust-Badges bleiben (BAFA, 4–10 Wochen)

### MODUL 2 – NEU: "Für wen wir das machen" (EINFÜGEN nach Hero)

**Problem:** Zielgruppe wird nirgends klar kommuniziert.

**Neues Modul** – Kompakte Sektion mit 3 Zielgruppen-Karten:
- **Handwerk & Dienstleister** (5–50 MA) – "Sichtbarkeit und Prozessklarheit"
- **Gesundheitswesen & Kliniken** – "Patientenmanagement, Reporting, Admin automatisieren"
- **Hausverwaltungen & Immobilien** – "KI-Integration für operative Effizienz"

Jede Karte: Icon + Zielgruppe + 1 Satz konkreter Nutzen.

### MODUL 3 – NEU: "Problem → Lösung" Sektion (EINFÜGEN)

**Problem:** Kein klares Problem/Lösung-Framing.

**Neues Modul** – Zwei-Spalten-Layout:
- Links: **3 Pain Points** als kurze Zitate ("Zu viele manuelle Schritte", "Kein Überblick über KPIs", "Abhängig von externen Tools")
- Rechts: **Eure Lösung** in 3 Bullet Points mit messbaren Outcomes (30% Zeitersparnis, 4x ROI, 100% Datenhoheit)

### MODUL 4 – ProblemSolutionSection (BEHALTEN, leicht anpassen)

Die bestehende `ProblemSolutionSection` (Accordion + Feature Cards) passt gut hierher. Nur kleiner Text-Refresh: konkretere Ergebniszahlen.

### MODUL 5 – MethodologyGrid (BEHALTEN, Position verschieben)

Bleibt inhaltlich, rutscht aber nach unten – erst Problem/Zielgruppe, dann Lösung, dann "wie wir arbeiten".

### MODUL 6 – CaseStudiesGrid (NACH OBEN verschieben)

**Problem:** Cases sind zu weit unten, dabei sind sie der stärkste Glaubwürdigkeitsbeweis.

Case Studies direkt nach der Methodik zeigen → Social Proof früh im Scroll.

### MODUL 7 – TestimonialsSection (NACH OBEN verschieben)

Direkt nach Cases → verstärkt Glaubwürdigkeit.

### MODUL 8 – NEU: "Entry Point" CTA-Sektion (EINFÜGEN vor Footer-Contact)

**Problem:** Kein niedrigschwelliger Einstieg.

**Neues Modul** – Prominente Sektion mit:
- Headline: "In 30 Minuten wissen, wo KI euch am meisten bringt."
- 3 Schritte: Analyse → Roadmap → Umsetzung
- Großer CTA-Button → Calendly-Link (kostenlose KI-Analyse)
- Trust-Signal: "Kostenlos. Unverbindlich. BAFA-förderfähig."

### Module die entfernt/gekürzt werden:

- **MagicText/Careers-Sektion** → entfernen (lenkt ab, Careers gehört nicht auf die Homepage)
- **AgencyEdgeSection** → nach unten verschieben oder in About auslagern
- **InteractiveCore** → nach unten verschieben (nice-to-have, nicht conversion-relevant)

---

## Neue Modul-Reihenfolge

```text
1.  HeroSection (überarbeitet – konkrete Value Prop + KI-Analyse CTA)
2.  NEU: Zielgruppen-Sektion ("Für wen wir arbeiten")
3.  NEU: Problem → Lösung Sektion
4.  ProblemSolutionSection (Accordion, leicht angepasst)
5.  MethodologyGrid (wie wir arbeiten)
6.  LogoCloud
7.  CaseStudiesGrid (Social Proof früh)
8.  TestimonialsSection (Social Proof verstärken)
9.  PositionedForImpactSection (Founders)
10. InteractiveCore (optional, weiter unten)
11. BlogGridHome
12. NEU: Entry-Point CTA ("30 Min KI-Analyse")
13. Contact Section (generisch)
```

---

## Technische Umsetzung

- 3 neue Komponenten erstellen: `TargetAudienceSection.tsx`, `ProblemSolutionFraming.tsx`, `EntryPointCTA.tsx`
- `HeroSection.tsx` – Headline, Subheadline, primären CTA-Text ändern
- `Index.tsx` – Modul-Reihenfolge umbauen, MagicText-Sektion entfernen
- Bestehende Komponenten bleiben unverändert, werden nur neu positioniert

