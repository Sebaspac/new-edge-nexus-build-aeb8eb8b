import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const SectionDivider = () => (
  <div className="w-full border-t border-foreground/10 my-10 md:my-14" />
);

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-base md:text-lg font-semibold text-foreground/80 tracking-wide mb-4">
    {children}
  </h3>
);

const Impressum = () => {
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-6 pt-10 pb-4 max-w-4xl"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground/50 hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("legal.backToHome")}
        </Link>
      </motion.header>

      {/* Main Content */}
      <main className="container mx-auto px-6 pb-24 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-6xl mb-4 leading-[0.95]"
          >
            Impressum &<br />
            Datenschutz
          </motion.h1>

          <p className="text-foreground/40 text-xs uppercase tracking-widest mb-16 md:mb-20">
            Stand: Januar 2026
          </p>

          {/* ═══════════════ IMPRESSUM ═══════════════ */}
          <section>
            <h2 className="text-xl md:text-2xl lg:text-3xl mb-8">
              Impressum
            </h2>

            {/* Angaben gemäß § 5 TMG */}
            <div className="mb-8">
              <SectionHeading>Angaben gemäß § 5 TMG</SectionHeading>
              <div className="border border-foreground/10 p-5 md:p-6">
                <p className="font-medium text-foreground">New Edge Brand – Creative Tech Agentur</p>
                <p className="text-foreground/60 mt-1">Inhaber: Wenjamin Zabezhanskiy</p>
                <p className="text-foreground/60">Deutschland</p>
                <p className="text-foreground/60 mt-3">
                  E-Mail:{" "}
                  <a
                    href="mailto:info@newedgebrand.com"
                    className="text-foreground underline underline-offset-4 hover:text-primary transition-colors"
                  >
                    info@newedgebrand.com
                  </a>
                </p>
              </div>
            </div>

            <SectionDivider />

            {/* Geltungsbereich */}
            <div className="mb-8">
              <SectionHeading>Geltungsbereich</SectionHeading>
              <p className="text-foreground/70 leading-relaxed mb-3">
                Dieses Impressum gilt ebenfalls für folgende Online-Präsenzen:
              </p>
              <ul className="list-disc list-inside text-foreground/70 space-y-1">
                <li>
                  <a
                    href="https://www.linkedin.com/company/newedgebrand"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:text-primary transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            <SectionDivider />

            {/* Haftungsbeschränkung */}
            <div className="mb-8">
              <SectionHeading>Haftungsbeschränkung</SectionHeading>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>
                  Die Inhalte dieser Webseite wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit,
                  Vollständigkeit und Aktualität der Inhalte übernimmt der Anbieter jedoch keine Gewähr.
                </p>
                <p>
                  Als Diensteanbieter ist der Anbieter dieser Seiten gemäß § 7 Abs. 1 TMG für eigene Inhalte nach
                  den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG ist der Anbieter jedoch nicht
                  verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
                  Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p>
                  Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden diese Inhalte umgehend entfernt.
                </p>
              </div>
            </div>

            <SectionDivider />

            {/* Externe Links */}
            <div className="mb-8">
              <SectionHeading>Externe Links</SectionHeading>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>
                  Diese Webseite enthält Verknüpfungen zu externen Webseiten Dritter („externe Links"). Auf deren
                  Inhalte hat der Anbieter keinen Einfluss und übernimmt hierfür keine Gewähr. Für die Inhalte der
                  verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
                </p>
                <p>
                  Zum Zeitpunkt der Verlinkung waren keine Rechtsverstöße erkennbar. Bei Bekanntwerden von
                  Rechtsverletzungen werden solche Links umgehend entfernt.
                </p>
              </div>
            </div>

            <SectionDivider />

            {/* Urheberrecht */}
            <div>
              <SectionHeading>Urheberrecht / Leistungsschutzrecht</SectionHeading>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>
                  Die auf dieser Webseite veröffentlichten Inhalte und Werke unterliegen dem deutschen Urheberrecht.
                  Jede Art der Vervielfältigung, Bearbeitung, Verbreitung oder Verwertung außerhalb der Grenzen des
                  Urheberrechts bedarf der vorherigen schriftlichen Zustimmung des jeweiligen Rechteinhabers.
                </p>
                <p>
                  Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch
                  gestattet.
                </p>
                <p>
                  Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
                  Dritter beachtet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
                  wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir solche
                  Inhalte umgehend entfernt.
                </p>
              </div>
            </div>
          </section>

          {/* ═══════════════ DATENSCHUTZ ═══════════════ */}
          <div className="w-full border-t-2 border-foreground/20 my-16 md:my-24" />

          <section id="datenschutz">
            <h2 className="text-xl md:text-2xl lg:text-3xl mb-8">
              Datenschutzerklärung
            </h2>

            {/* 1. Verantwortlicher */}
            <div className="mb-8">
              <SectionHeading>1. Verantwortlicher Anbieter</SectionHeading>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Verantwortlich für die Verarbeitung personenbezogener Daten im Sinne der
                Datenschutz-Grundverordnung (DSGVO) ist:
              </p>
              <div className="border border-foreground/10 p-5 md:p-6">
                <p className="text-foreground/70">New Edge Brand</p>
                <p className="text-foreground/70">Inhaber: Wenjamin Zabezhanskiy</p>
                <p className="text-foreground/70">Mädelegabelstraße 31</p>
                <p className="text-foreground/70">81825 München</p>
                <p className="text-foreground/70">Deutschland</p>
                <p className="text-foreground/70 mt-3">
                  E-Mail:{" "}
                  <a
                    href="mailto:info@newedgebrand.com"
                    className="text-foreground underline underline-offset-4 hover:text-primary transition-colors"
                  >
                    info@newedgebrand.com
                  </a>
                </p>
              </div>
            </div>

            <SectionDivider />

            {/* 2. Erhebung */}
            <div className="mb-8">
              <SectionHeading>2. Erhebung und Verarbeitung personenbezogener Daten</SectionHeading>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>
                  Wir verarbeiten personenbezogene Daten nur, wenn dies zur Bereitstellung unserer Website, zur
                  Kommunikation oder zur Durchführung unserer Leistungen erforderlich ist.
                </p>
                <p>
                  Eine Weitergabe Ihrer Daten an Dritte erfolgt ausschließlich im Rahmen gesetzlicher Bestimmungen
                  oder aufgrund Ihrer ausdrücklichen Einwilligung.
                </p>
              </div>
            </div>

            <SectionDivider />

            {/* 3. Server-Logfiles */}
            <div className="mb-8">
              <SectionHeading>3. Server-Logfiles</SectionHeading>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Beim Besuch unserer Website werden automatisch folgende Daten durch unseren Hostinganbieter erfasst:
              </p>
              <ul className="list-disc list-inside text-foreground/70 space-y-1 mb-4">
                <li>IP-Adresse</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Browsertyp und -version</li>
                <li>Betriebssystem</li>
                <li>Referrer-URL</li>
              </ul>
              <p className="text-foreground/70 leading-relaxed mb-2">
                Diese Daten dienen ausschließlich der technischen Sicherheit, Optimierung der Website und Fehleranalyse.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Eine Zusammenführung mit anderen Datenquellen findet nicht statt.
              </p>
            </div>

            <SectionDivider />

            {/* 4. Kontaktaufnahme */}
            <div className="mb-8">
              <SectionHeading>4. Kontaktaufnahme</SectionHeading>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>
                  Wenn Sie uns per E-Mail oder über ein Kontaktformular kontaktieren, speichern wir Ihre Angaben zur
                  Bearbeitung Ihrer Anfrage sowie für etwaige Rückfragen.
                </p>
                <p>Diese Daten geben wir nicht ohne Ihre Einwilligung an Dritte weiter.</p>
              </div>
            </div>

            <SectionDivider />

            {/* 5. Meta Pixel */}
            <div className="mb-8">
              <SectionHeading>5. Verwendung des Meta (Facebook) Pixels</SectionHeading>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>
                  Wir nutzen auf unserer Website das Meta Pixel, um das Verhalten von Nutzer:innen nach dem Klick
                  auf eine Werbeanzeige auf Facebook oder Instagram nachvollziehen zu können.
                </p>
                <p>Dies dient der Analyse und Optimierung unserer Kampagnen.</p>
                <p>Die erhobenen Daten sind für uns anonym.</p>
                <p>
                  Meta kann diese Daten jedoch mit Ihrem Meta-Profil verknüpfen, sofern Sie eingeloggt sind.
                </p>
                <p>
                  Weitere Informationen hierzu finden Sie in den Datenschutzbestimmungen von Meta:{" "}
                  <a
                    href="https://www.facebook.com/about/privacy"
                    className="underline underline-offset-4 hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    facebook.com/about/privacy
                  </a>
                </p>
              </div>
              <div className="border border-foreground/10 p-5 md:p-6 mt-4">
                <p className="font-medium text-foreground text-sm mb-2">Widerspruchsmöglichkeit</p>
                <p className="text-foreground/70 leading-relaxed">
                  Sie können der Erfassung durch das Meta Pixel jederzeit widersprechen – z. B. über die
                  Cookie-Einstellungen auf unserer Website oder direkt bei Meta.
                </p>
              </div>
            </div>

            <SectionDivider />

            {/* 6. Google Tag Manager */}
            <div className="mb-8">
              <SectionHeading>6. Verwendung des Google Tag Managers</SectionHeading>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>Wir setzen auf unserer Website den Google Tag Manager ein.</p>
                <p>
                  Der Google Tag Manager ist ein Dienst der Google Ireland Limited, Gordon House, Barrow Street,
                  Dublin 4, Irland.
                </p>
                <p>Der Tag Manager ermöglicht uns, Website-Tags zentral zu verwalten.</p>
              </div>
              <div className="border border-foreground/10 p-5 md:p-6 mt-4">
                <p className="font-medium text-foreground text-sm mb-2">Das Tool selbst:</p>
                <ul className="list-disc list-inside text-foreground/70 space-y-1">
                  <li>Speichert keine personenbezogenen Daten</li>
                  <li>Setzt keine Cookies</li>
                  <li>Dient lediglich der Einbindung anderer Tracking-Tools (z. B. Google Analytics, Meta Pixel)</li>
                </ul>
              </div>
              <p className="text-foreground/70 leading-relaxed mt-4">
                Weitere Informationen finden Sie in der Datenschutzerklärung von Google:{" "}
                <a
                  href="https://policies.google.com/privacy"
                  className="underline underline-offset-4 hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  policies.google.com/privacy
                </a>
              </p>
            </div>

            <SectionDivider />

            {/* 7. Google Analytics */}
            <div className="mb-8">
              <SectionHeading>7. Einsatz von Google Analytics</SectionHeading>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>
                  Wir nutzen Google Analytics, einen Webanalysedienst der Google Ireland Limited, Gordon House,
                  Barrow Street, Dublin 4, Irland.
                </p>
              </div>

              <div className="mt-6 mb-6">
                <p className="font-medium text-foreground text-sm mb-3">Zweck der Verarbeitung:</p>
                <div className="space-y-2 text-foreground/70 leading-relaxed">
                  <p>
                    Google Analytics verwendet Cookies, um die Nutzung unserer Website auszuwerten und Berichte über
                    die Websiteaktivitäten zu erstellen.
                  </p>
                  <p>Dadurch können wir unsere Website und Marketingmaßnahmen optimieren.</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="font-medium text-foreground text-sm mb-3">Verarbeitete Daten:</p>
                <ul className="list-disc list-inside text-foreground/70 space-y-1">
                  <li>IP-Adresse (anonymisiert)</li>
                  <li>Browsertyp und -version</li>
                  <li>Verwendetes Endgerät und Betriebssystem</li>
                  <li>Referrer-URL</li>
                  <li>Zeitpunkt und Dauer des Besuchs</li>
                  <li>Interaktionen auf der Website</li>
                </ul>
              </div>

              <div className="border border-foreground/10 p-5 md:p-6 mb-4">
                <p className="font-medium text-foreground text-sm mb-2">IP-Anonymisierung</p>
                <p className="text-foreground/70 leading-relaxed">
                  Wir haben Google Analytics so konfiguriert, dass Ihre IP-Adresse innerhalb der EU oder des EWR
                  gekürzt wird, bevor sie an Google weitergeleitet wird.
                </p>
              </div>

              <p className="text-foreground/70 leading-relaxed">
                Weitere Informationen finden Sie hier:{" "}
                <a
                  href="https://support.google.com/analytics/answer/6004245"
                  className="underline underline-offset-4 hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  support.google.com/analytics
                </a>
              </p>
            </div>

            <SectionDivider />

            {/* 8. Cookies */}
            <div className="mb-8">
              <SectionHeading>8. Cookies</SectionHeading>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Unsere Website verwendet Cookies, um grundlegende Funktionen bereitzustellen und Ihre
                Nutzererfahrung zu verbessern.
              </p>

              <div className="mb-6">
                <p className="font-medium text-foreground text-sm mb-3">Arten von Cookies:</p>
                <ul className="list-disc list-inside text-foreground/70 space-y-2">
                  <li><span className="font-medium text-foreground">Essenzielle Cookies</span> — notwendig für den Betrieb der Website</li>
                  <li><span className="font-medium text-foreground">Statistik-Cookies</span> — zur Analyse durch Google Analytics</li>
                  <li><span className="font-medium text-foreground">Marketing-Cookies</span> — für Meta Pixel und Google Ads</li>
                </ul>
              </div>

              <div className="border border-foreground/10 p-5 md:p-6">
                <p className="font-medium text-foreground text-sm mb-2">Ihre Kontrolle</p>
                <p className="text-foreground/70 leading-relaxed">
                  Über unsere Cookie-Einstellungen können Sie individuell festlegen, welche Cookies Sie zulassen möchten.
                </p>
              </div>
            </div>

            <SectionDivider />

            {/* 9. Ihre Rechte */}
            <div className="mb-8">
              <SectionHeading>9. Ihre Rechte als betroffene Person</SectionHeading>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Gemäß DSGVO haben Sie jederzeit folgende Rechte:
              </p>
              <ul className="list-disc list-inside text-foreground/70 space-y-1 mb-4">
                <li>Auskunft über die zu Ihrer Person gespeicherten Daten</li>
                <li>Berichtigung unrichtiger Daten</li>
                <li>Löschung Ihrer Daten (Recht auf Vergessenwerden)</li>
                <li>Einschränkung der Verarbeitung</li>
                <li>Widerspruch gegen die Verarbeitung</li>
                <li>Datenübertragbarkeit</li>
              </ul>
              <p className="text-foreground/70 leading-relaxed">
                Bitte richten Sie Ihre Anfrage an:{" "}
                <a
                  href="mailto:info@newedgebrand.com"
                  className="text-foreground underline underline-offset-4 hover:text-primary transition-colors"
                >
                  info@newedgebrand.com
                </a>
              </p>
            </div>

            <SectionDivider />

            {/* 10. Datensicherheit */}
            <div className="mb-8">
              <SectionHeading>10. Datensicherheit</SectionHeading>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>
                  Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten gegen
                  Manipulation, Verlust oder unbefugten Zugriff zu schützen.
                </p>
                <p>Unsere Sicherheitsmaßnahmen werden regelmäßig überprüft und verbessert.</p>
              </div>
            </div>

            <SectionDivider />

            {/* 11. Änderungen */}
            <div className="mb-8">
              <SectionHeading>11. Änderungen dieser Datenschutzerklärung</SectionHeading>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen, sofern Änderungen an unserer Website
                  oder rechtliche Vorgaben dies erforderlich machen.
                </p>
                <p>Die jeweils aktuelle Version finden Sie jederzeit auf dieser Seite.</p>
              </div>
            </div>

            <SectionDivider />

            {/* 12. Cookie-Consent */}
            <div>
              <SectionHeading>12. Cookie-Consent & Tracking-Opt-in</SectionHeading>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Da wir Meta Pixel, Google Tag Manager und Google Analytics verwenden, setzen wir ein Cookie-Banner
                mit Opt-in-Funktion ein.
              </p>
              <div className="border border-foreground/10 p-5 md:p-6">
                <ul className="list-disc list-inside text-foreground/70 space-y-2">
                  <li>Tracking-Skripte werden erst aktiv, wenn Sie zugestimmt haben</li>
                  <li>Opt-in vor Tracking → DSGVO-konform</li>
                  <li>Link zur Datenschutzerklärung</li>
                  <li>Möglichkeit zum Widerruf</li>
                </ul>
              </div>
            </div>
          </section>
        </motion.div>
      </main>
    </div>
  );
};

export default Impressum;
