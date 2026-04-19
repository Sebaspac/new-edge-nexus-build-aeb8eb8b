
Ziel: Herausfinden, warum echte KI-Audit-Anmeldungen nicht in `ki_audit_leads` landen, obwohl Nutzer auf der Seite erfolgreich weitergelassen werden.

Was ich im Code bereits gefunden habe:
- `src/components/KiAuditGate.tsx` ruft die Edge Function per `fetch(...)` auf.
- Wenn die Anfrage fehlschlägt, wird trotzdem `setStatus("success")` gesetzt und der Nutzer bekommt Zugriff.
- Dadurch können Einsendungen still fehlschlagen, ohne dass man es merkt.
- Zusätzlich gibt es Projekt-Memory, dass Edge-Function-Requests die Header `Authorization` und `apikey` brauchen. Diese fehlen aktuell im Formular-Request.
- Im aktuellen Backend-Kontext ist auf `ki_audit_leads` keine aktive RLS-Policy sichtbar, obwohl im Repo eine alte Policy-Migration existiert. Das deutet auf Drift zwischen Code und Live-Backend hin.

Plan:
1. Live-Fluss gegen Published-Version prüfen
- Prüfen, ob die veröffentlichte Seite wirklich den aktuellen Formularcode nutzt oder noch eine ältere Version geladen wird.
- Dabei gezielt schauen, ob auf der Live-Seite ein Request an `ki-audit-signup` rausgeht und welchen Status er zurückgibt.

2. Formular-Request robust machen
- `KiAuditGate.tsx` so anpassen, dass der Request sauber über den vorhandenen Backend-Client oder mit vollständigen Headers gesendet wird.
- Kein “stilles Weiter” mehr bei `!response.ok`: Fehler klar behandeln und loggen.
- Falls Sofortzugriff weiterhin Pflicht ist, dann den Nutzer zwar weiterlassen, aber den Fehlschlag sichtbar erfassbar machen statt ihn zu verschlucken.

3. Edge Function härten
- `supabase/functions/ki-audit-signup/index.ts` mit saubererem Request-Parsing, klaren Fehlerantworten und konsistenten CORS-/Response-Headern absichern.
- Sicherstellen, dass die Funktion in Lovable Cloud tatsächlich erfolgreich in `ki_audit_leads` schreibt.

4. Backend-Zustand bereinigen
- Prüfen, ob Tabelle, Funktion und Policies im Live-Backend wirklich dem Repo entsprechen.
- Falls noch ein alter Client-Insert-Pfad aktiv ist oder wieder verwendet werden soll, passende `INSERT`-Policy für `anon/authenticated` sauber herstellen.
- Falls ausschließlich die Edge Function genutzt wird, unnötige offene Tabellen-Policies vermeiden.

5. End-to-End verifizieren
- Test auf der veröffentlichten Domain durchführen.
- Danach direkt in der Datenbank prüfen, ob ein neuer Datensatz mit aktuellem Timestamp auftaucht.
- Zusätzlich Edge-Function-Logs prüfen, damit klar ist, ob das Problem Frontend, Gateway oder Datenbank war.

Technische Details:
- Betroffene Dateien:
  - `src/components/KiAuditGate.tsx`
  - `supabase/functions/ki-audit-signup/index.ts`
  - ggf. neue/angepasste Migration für `ki_audit_leads`
- Wahrscheinlichster Hauptfehler:
  - Das Formular behandelt fehlgeschlagene Saves aktuell als Erfolg.
  - Sehr wahrscheinlich fehlt dem Live-Request die korrekte Auth/Header-Konfiguration oder die Published-Version ist nicht auf dem Stand des aktuellen Preview-Codes.
- Sekundäres Risiko:
  - Live-Backend und Repo sind nicht vollständig synchron (sichtbar bei den Policies).

Ergebnis nach Umsetzung:
- Jede echte Anmeldung erzeugt verlässlich einen Datensatz in `ki_audit_leads`.
- Fehlgeschlagene Saves sind nachvollziehbar statt unsichtbar.
- Published-Seite, Edge Function und Datenbank verhalten sich konsistent.
