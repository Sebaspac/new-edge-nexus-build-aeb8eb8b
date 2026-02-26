import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Mail, MapPin, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
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
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <motion.header
        initial={{
          opacity: 0,
          y: -20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        className="container mx-auto px-6 py-8">

        <Link to="/">
          <Button variant="ghost" className="text-purple-400 hover:text-purple-300 hover:bg-white/10 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t("legal.backToHome")}
          </Button>
        </Link>
      </motion.header>

      {/* Main Content */}
      <main className="container mx-auto px-6 pb-20">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8
          }}
          className="max-w-4xl mx-auto">

          {/* Title */}
          <motion.h1
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              delay: 0.2,
              duration: 0.6
            }}
            className="text-4xl md:text-6xl font-black mb-16 text-center">

            <span className="bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
              Impressum & Datenschutz
            </span>
          </motion.h1>

          {/* Impressum Content */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.4,
              duration: 0.6
            }}>

            <Card className="bg-gray-900/50 border border-purple-500/20 backdrop-blur-lg mb-8">
              <CardContent className="p-8">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 flex items-center text-white">
                  <MapPin className="w-8 h-8 mr-3 text-purple-400" />
                  Impressum – New Edge
                </h2>

                <div className="space-y-8 text-gray-300">
                  {/* Section: Angaben gemäß § 5 TMG */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Angaben gemäß § 5 TMG</h3>
                    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-600">
                      <p className="font-semibold text-white">New Edge Brand – Creative Tech Agentur</p>
                      <p>Inhaber: Wenjamin Zabezhanskiy </p>

                      <p>Deutschland</p>
                      <p className="mt-2">
                        📧 E-Mail:{" "}
                        <a href="mailto:info@newedgebrand.com" className="text-purple-400 hover:text-purple-300">
                          info@newedgebrand.com
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Section: Geltungsbereich */}
                  <div className="border-t border-gray-700 pt-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Geltungsbereich</h3>
                    <p className="mb-3">Dieses Impressum gilt ebenfalls für folgende Online-Präsenzen:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        <a
                          href="https://www.linkedin.com/company/newedgebrand"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-400 hover:text-purple-300">

                          LinkedIn
                        </a>
                      </li>
                    </ul>
                    <p className="text-sm text-gray-400 mt-3">
                      (weitere Social-Media-Profile können ergänzt werden, z. B. Instagram, Facebook, X, TikTok, etc.)
                    </p>
                  </div>

                  {/* Section: Haftungsbeschränkung */}
                  <div className="border-t border-gray-700 pt-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Haftungsbeschränkung</h3>
                    <p className="mb-4">
                      Die Inhalte dieser Webseite wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit,
                      Vollständigkeit und Aktualität der Inhalte übernimmt der Anbieter jedoch keine Gewähr.
                    </p>
                    <p className="mb-4">
                      Als Diensteanbieter ist der Anbieter dieser Seiten gemäß § 7 Abs. 1 TMG für eigene Inhalte nach
                      den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG ist der Anbieter jedoch nicht
                      verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
                      Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                    </p>
                    <p>
                      Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden diese Inhalte umgehend entfernt.
                    </p>
                  </div>

                  {/* Section: Externe Links */}
                  <div className="border-t border-gray-700 pt-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Externe Links</h3>
                    <p className="mb-4">
                      Diese Webseite enthält Verknüpfungen zu externen Webseiten Dritter („externe Links"). Auf deren
                      Inhalte hat der Anbieter keinen Einfluss und übernimmt hierfür keine Gewähr. Für die Inhalte der
                      verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
                    </p>
                    <p>
                      Zum Zeitpunkt der Verlinkung waren keine Rechtsverstöße erkennbar. Bei Bekanntwerden von
                      Rechtsverletzungen werden solche Links umgehend entfernt.
                    </p>
                  </div>

                  {/* Section: Urheberrecht */}
                  <div className="border-t border-gray-700 pt-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Urheberrecht / Leistungsschutzrecht</h3>
                    <p className="mb-4">
                      Die auf dieser Webseite veröffentlichten Inhalte und Werke unterliegen dem deutschen Urheberrecht.
                      Jede Art der Vervielfältigung, Bearbeitung, Verbreitung oder Verwertung außerhalb der Grenzen des
                      Urheberrechts bedarf der vorherigen schriftlichen Zustimmung des jeweiligen Rechteinhabers.
                    </p>
                    <p className="mb-4">
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
              </CardContent>
            </Card>
          </motion.div>

          {/* Datenschutzerklärung */}
          <motion.div
            id="datenschutz"
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.5,
              duration: 0.6
            }}>

            <Card className="bg-gray-900/50 border border-purple-500/20 backdrop-blur-lg">
              <CardContent className="p-8">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 flex items-center text-white">
                  <Shield className="w-8 h-8 mr-3 text-purple-400" />
                  Datenschutzerklärung
                  <span className="text-sm font-normal text-gray-400 ml-3">(Stand: Januar 2026)</span>
                </h2>

                <div className="space-y-8 text-gray-300">
                  {/* Section 1 */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">1. Verantwortlicher Anbieter</h3>
                    <p className="mb-4">
                      Verantwortlich für die Verarbeitung personenbezogener Daten im Sinne der
                      Datenschutz-Grundverordnung (DSGVO) ist:
                    </p>
                    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-600">
                      <p>New Edge Brand </p>
                      <p>Inhaber: Wenjamin Zabezhanskiy</p>
                      <p>Zehntfeldstraße 156a</p>
                      <p>81825 München</p>
                      <p>Deutschland</p>
                      <p>
                        📧 E-Mail:{" "}
                        <a href="mailto:info@newedgebrand.com" className="text-purple-400 hover:text-purple-300">
                          info@newedgebrand.com
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Section 2 */}
                  <div className="border-t border-gray-700 pt-8">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      2. Erhebung und Verarbeitung personenbezogener Daten
                    </h3>
                    <p className="mb-4">
                      Wir verarbeiten personenbezogene Daten nur, wenn dies zur Bereitstellung unserer Website, zur
                      Kommunikation oder zur Durchführung unserer Leistungen erforderlich ist.
                    </p>
                    <p>
                      Eine Weitergabe Ihrer Daten an Dritte erfolgt ausschließlich im Rahmen gesetzlicher Bestimmungen
                      oder aufgrund Ihrer ausdrücklichen Einwilligung.
                    </p>
                  </div>

                  {/* Section 3 */}
                  <div className="border-t border-gray-700 pt-8">
                    <h3 className="text-xl font-semibold text-white mb-4">3. Server-Logfiles</h3>
                    <p className="mb-4">
                      Beim Besuch unserer Website werden automatisch folgende Daten durch unseren Hostinganbieter
                      erfasst:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mb-4">
                      <li>IP-Adresse</li>
                      <li>Datum und Uhrzeit des Zugriffs</li>
                      <li>Browsertyp und -version</li>
                      <li>Betriebssystem</li>
                      <li>Referrer-URL</li>
                    </ul>
                    <p className="mb-4">
                      Diese Daten dienen ausschließlich der technischen Sicherheit, Optimierung der Website und
                      Fehleranalyse.
                    </p>
                    <p>Eine Zusammenführung mit anderen Datenquellen findet nicht statt.</p>
                  </div>

                  {/* Section 4 */}
                  <div className="border-t border-gray-700 pt-8">
                    <h3 className="text-xl font-semibold text-white mb-4">4. Kontaktaufnahme</h3>
                    <p className="mb-4">
                      Wenn Sie uns per E-Mail oder über ein Kontaktformular kontaktieren, speichern wir Ihre Angaben zur
                      Bearbeitung Ihrer Anfrage sowie für etwaige Rückfragen.
                    </p>
                    <p>Diese Daten geben wir nicht ohne Ihre Einwilligung an Dritte weiter.</p>
                  </div>

                  {/* Section 5 */}
                  <div className="border-t border-gray-700 pt-8">
                    <h3 className="text-xl font-semibold text-white mb-4">5. Verwendung des Meta (Facebook) Pixels</h3>
                    <p className="mb-4">
                      Wir nutzen auf unserer Website das Meta Pixel, um das Verhalten von Nutzer:innen nach dem Klick
                      auf eine Werbeanzeige auf Facebook oder Instagram nachvollziehen zu können.
                    </p>
                    <p className="mb-4">Dies dient der Analyse und Optimierung unserer Kampagnen.</p>
                    <p className="mb-4">Die erhobenen Daten sind für uns anonym.</p>
                    <p className="mb-4">
                      Meta kann diese Daten jedoch mit Ihrem Meta-Profil verknüpfen, sofern Sie eingeloggt sind.
                    </p>
                    <p className="mb-4">
                      Weitere Informationen hierzu finden Sie in den Datenschutzbestimmungen von Meta:{" "}
                      <a
                        href="https://www.facebook.com/about/privacy"
                        className="text-purple-400 hover:text-purple-300 underline"
                        target="_blank"
                        rel="noopener noreferrer">

                        https://www.facebook.com/about/privacy
                      </a>
                    </p>
                    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-600">
                      <p className="font-semibold text-white mb-2">Widerspruchsmöglichkeit:</p>
                      <p>
                        Sie können der Erfassung durch das Meta Pixel jederzeit widersprechen – z. B. über die
                        Cookie-Einstellungen auf unserer Website oder direkt bei Meta.
                      </p>
                    </div>
                  </div>

                  {/* Section 6 */}
                  <div className="border-t border-gray-700 pt-8">
                    <h3 className="text-xl font-semibold text-white mb-4">6. Verwendung des Google Tag Managers</h3>
                    <p className="mb-4">Wir setzen auf unserer Website den Google Tag Manager ein.</p>
                    <p className="mb-4">
                      Der Google Tag Manager ist ein Dienst der Google Ireland Limited, Gordon House, Barrow Street,
                      Dublin 4, Irland.
                    </p>
                    <p className="mb-4">Der Tag Manager ermöglicht uns, Website-Tags zentral zu verwalten.</p>
                    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-600 mb-4">
                      <p className="font-semibold text-white mb-2">Das Tool selbst:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Speichert keine personenbezogenen Daten</li>
                        <li>Setzt keine Cookies</li>
                        <li>
                          Dient lediglich der Einbindung anderer Tracking-Tools (z. B. Google Analytics, Meta Pixel).
                        </li>
                      </ul>
                    </div>
                    <p>
                      Weitere Informationen finden Sie in der Datenschutzerklärung von Google:{" "}
                      <a
                        href="https://policies.google.com/privacy"
                        className="text-purple-400 hover:text-purple-300 underline"
                        target="_blank"
                        rel="noopener noreferrer">

                        https://policies.google.com/privacy
                      </a>
                    </p>
                  </div>

                  {/* Section 7 */}
                  <div className="border-t border-gray-700 pt-8">
                    <h3 className="text-xl font-semibold text-white mb-4">7. Einsatz von Google Analytics</h3>
                    <p className="mb-4">
                      Wir nutzen Google Analytics, einen Webanalysedienst der Google Ireland Limited, Gordon House,
                      Barrow Street, Dublin 4, Irland.
                    </p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Zweck der Verarbeitung:</h4>
                      <p className="mb-2">
                        Google Analytics verwendet Cookies, um die Nutzung unserer Website auszuwerten und Berichte über
                        die Websiteaktivitäten zu erstellen.
                      </p>
                      <p>Dadurch können wir unsere Website und Marketingmaßnahmen optimieren.</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Verarbeitete Daten:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>IP-Adresse (anonymisiert)</li>
                        <li>Browsertyp und -version</li>
                        <li>Verwendetes Endgerät und Betriebssystem</li>
                        <li>Referrer-URL</li>
                        <li>Zeitpunkt und Dauer des Besuchs</li>
                        <li>Interaktionen auf der Website</li>
                      </ul>
                    </div>

                    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-600 mb-4">
                      <h4 className="text-lg font-semibold text-white mb-2">IP-Anonymisierung:</h4>
                      <p className="mb-2">
                        Wir haben Google Analytics so konfiguriert, dass Ihre IP-Adresse innerhalb der EU oder des EWR
                        gekürzt wird, bevor sie an Google weitergeleitet wird.
                      </p>
                    </div>

                    <p>
                      Weitere Informationen finden Sie hier:{" "}
                      <a
                        href="https://support.google.com/analytics/answer/6004245"
                        className="text-purple-400 hover:text-purple-300 underline"
                        target="_blank"
                        rel="noopener noreferrer">

                        https://support.google.com/analytics/answer/6004245
                      </a>
                    </p>
                  </div>

                  {/* Section 8 */}
                  <div className="border-t border-gray-700 pt-8">
                    <h3 className="text-xl font-semibold text-white mb-4">8. Cookies</h3>
                    <p className="mb-4">
                      Unsere Website verwendet Cookies, um grundlegende Funktionen bereitzustellen und Ihre
                      Nutzererfahrung zu verbessern.
                    </p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Arten von Cookies:</h4>
                      <ul className="list-disc list-inside space-y-2">
                        <li>
                          <strong>Essenzielle Cookies</strong> → notwendig für den Betrieb der Website
                        </li>
                        <li>
                          <strong>Statistik-Cookies</strong> → zur Analyse durch Google Analytics
                        </li>
                        <li>
                          <strong>Marketing-Cookies</strong> → für Meta Pixel und Google Ads
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-600">
                      <h4 className="text-lg font-semibold text-white mb-2">Ihre Kontrolle:</h4>
                      <p>
                        Über unsere Cookie-Einstellungen können Sie individuell festlegen, welche Cookies Sie zulassen
                        möchten.
                      </p>
                    </div>
                  </div>

                  {/* Section 9 */}
                  <div className="border-t border-gray-700 pt-8">
                    <h3 className="text-xl font-semibold text-white mb-4">9. Ihre Rechte als betroffene Person</h3>
                    <p className="mb-4">Gemäß DSGVO haben Sie jederzeit folgende Rechte:</p>
                    <ul className="list-disc list-inside space-y-2 mb-4">
                      <li>Auskunft über die zu Ihrer Person gespeicherten Daten</li>
                      <li>Berichtigung unrichtiger Daten</li>
                      <li>Löschung Ihrer Daten (Recht auf Vergessenwerden)</li>
                      <li>Einschränkung der Verarbeitung</li>
                      <li>Widerspruch gegen die Verarbeitung</li>
                      <li>Datenübertragbarkeit</li>
                    </ul>
                    <p>
                      Bitte richten Sie Ihre Anfrage an:{" "}
                      <a href="mailto:info@newedgebrand.com" className="text-purple-400 hover:text-purple-300">
                        info@newedgebrand.com
                      </a>
                    </p>
                  </div>

                  {/* Section 10 */}
                  <div className="border-t border-gray-700 pt-8">
                    <h3 className="text-xl font-semibold text-white mb-4">10. Datensicherheit</h3>
                    <p className="mb-4">
                      Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten gegen
                      Manipulation, Verlust oder unbefugten Zugriff zu schützen.
                    </p>
                    <p>Unsere Sicherheitsmaßnahmen werden regelmäßig überprüft und verbessert.</p>
                  </div>

                  {/* Section 11 */}
                  <div className="border-t border-gray-700 pt-8">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      11. Änderungen dieser Datenschutzerklärung
                    </h3>
                    <p className="mb-4">
                      Wir behalten uns vor, diese Datenschutzerklärung anzupassen, sofern Änderungen an unserer Website
                      oder rechtliche Vorgaben dies erforderlich machen.
                    </p>
                    <p>Die jeweils aktuelle Version finden Sie jederzeit auf dieser Seite.</p>
                  </div>

                  {/* Section 12 */}
                  <div className="border-t border-gray-700 pt-8">
                    <h3 className="text-xl font-semibold text-white mb-4">12. Cookie-Consent & Tracking-Opt-in</h3>
                    <p className="mb-4">
                      Da wir Meta Pixel, Google Tag Manager und Google Analytics verwenden, setzen wir ein Cookie-Banner
                      mit Opt-in-Funktion ein.
                    </p>
                    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-600">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Tracking-Skripte werden erst aktiv, wenn Sie zugestimmt haben.</li>
                        <li>Opt-in vor Tracking → DSGVO-konform</li>
                        <li>Link zur Datenschutzerklärung</li>
                        <li>Möglichkeit zum Widerruf</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </main>
    </div>);

};
export default Impressum;