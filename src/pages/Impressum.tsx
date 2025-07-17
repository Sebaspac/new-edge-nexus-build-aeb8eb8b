import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, MapPin, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
const Impressum = () => {
  return <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <motion.header initial={{
      opacity: 0,
      y: -20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="container mx-auto px-6 py-8">
        <Link to="/">
          <Button variant="ghost" className="text-purple-400 hover:text-purple-300 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zur Startseite
          </Button>
        </Link>
      </motion.header>

      {/* Main Content */}
      <main className="container mx-auto px-6 pb-20">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="max-w-4xl mx-auto">
          {/* Title */}
          <motion.h1 initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 0.2,
          duration: 0.6
        }} className="text-4xl md:text-6xl font-black mb-16 text-center">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-yellow-400 bg-clip-text text-transparent">
              Impressum
            </span>
          </motion.h1>

          {/* Impressum Content */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4,
          duration: 0.6
        }}>
            <Card className="bg-gray-900/50 border border-purple-500/20 backdrop-blur-lg mb-12">
              <CardContent className="p-8">
                <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center text-white">
                  <MapPin className="w-6 h-6 mr-3 text-purple-400" />
                  Angaben gemäß § 5 TMG
                </h2>
                
                <div className="space-y-4 text-gray-300">
                  <div>
                    <p className="font-semibold text-white">New Edge</p>
                    <p>c/o Creative Space</p>
                    <p>Koppenstr. 82</p>
                    <p>10243 Berlin</p>
                    <p>Deutschland</p>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-700">
                    <p className="flex items-center mb-2">
                      <Mail className="w-4 h-4 mr-2 text-purple-400" />
                      E-Mail: <a href="mailto:info@newedgebrand.com" className="text-purple-400 hover:text-purple-300 ml-1">info@newedgebrand.com</a>
                    </p>
                    <p>Website: <a href="https://www.newedgebrand.com" className="text-purple-400 hover:text-purple-300">www.newedgebrand.com</a></p>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-700">
                    <p><strong>Vertretungsberechtigt:</strong> Verantwortliche Person auf Anfrage</p>
                    <p className="text-sm text-gray-400 mt-2">
                      <strong>Hinweis:</strong> Es handelt sich um ein Kleingewerbe gemäß § 19 UStG – Umsatzsteuer wird nicht ausgewiesen.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Datenschutzerklärung */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6,
          duration: 0.6
        }}>
            <Card className="bg-gray-900/50 border border-purple-500/20 backdrop-blur-lg">
              <CardContent className="p-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center text-white">
                    <Shield className="w-8 h-8 mr-3 text-purple-400" />
                    Datenschutzerklärung
                  </h2>
                
                <div className="space-y-8 text-gray-300">
                  {/* Section 1 */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">1. Verantwortlicher Anbieter</h3>
                    <p className="mb-4">
                      Verantwortlich für die Verarbeitung personenbezogener Daten im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
                    </p>
                    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-600">
                      <p>New Edge </p>
                      <p>c/o Creative Space</p>
                      <p>Koppenstr. 82</p>
                      <p>10243 Berlin</p>
                      <p>E-Mail: <a href="mailto:info@newedgebrand.com" className="text-purple-400 hover:text-purple-300">info@newedgebrand.com</a></p>
                    </div>
                  </div>

                  {/* Section 2 */}
                  <div className="border-t border-gray-700 pt-8">
                    <h3 className="text-xl font-semibold text-white mb-4">2. Erhebung und Verarbeitung personenbezogener Daten</h3>
                    <p>
                      Personenbezogene Daten werden von uns nur dann verarbeitet, wenn dies zur Bereitstellung unserer Website, zur Kommunikation oder zur Durchführung von Werbemaßnahmen erforderlich ist. Eine Weitergabe an Dritte erfolgt ausschließlich im Rahmen gesetzlicher Bestimmungen.
                    </p>
                  </div>

                  {/* Section 3 */}
                  <div className="border-t border-gray-700 pt-8">
                    <h3 className="text-xl font-semibold text-white mb-4">3. Server-Logfiles</h3>
                    <p className="mb-4">
                      Beim Besuch unserer Website werden automatisch folgende Daten durch den Hostinganbieter erfasst:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mb-4">
                      <li>IP-Adresse</li>
                      <li>Datum und Uhrzeit des Zugriffs</li>
                      <li>Browsertyp und -version</li>
                      <li>Betriebssystem</li>
                      <li>Referrer-URL</li>
                    </ul>
                    <p>
                      Diese Daten dienen ausschließlich der technischen Sicherheit und der Fehleranalyse. Eine Zusammenführung mit anderen Datenquellen findet nicht statt.
                    </p>
                  </div>

                  {/* Section 4 */}
                  <div className="border-t border-gray-700 pt-8">
                    <h3 className="text-xl font-semibold text-white mb-4">4. Kontaktaufnahme</h3>
                    <p>
                      Wenn Sie uns per E-Mail oder über ein Kontaktformular kontaktieren, speichern wir Ihre Angaben zur Bearbeitung Ihrer Anfrage sowie für etwaige Rückfragen. Diese Daten werden nicht ohne Ihre Einwilligung weitergegeben.
                    </p>
                  </div>

                  {/* Section 5 */}
                  <div className="border-t border-gray-700 pt-8">
                    <h3 className="text-xl font-semibold text-white mb-4">5. Verwendung des Meta (Facebook) Pixels</h3>
                    <p className="mb-4">
                      Wir nutzen auf unserer Website das Meta Pixel, um das Verhalten von Nutzer:innen nach dem Klick auf eine Werbeanzeige auf Facebook oder Instagram nachvollziehen zu können. Dies dient der Analyse und Optimierung unserer Kampagnen.
                    </p>
                    <p className="mb-4">
                      Die erhobenen Daten sind für uns anonym, werden jedoch von Meta verarbeitet und mit Ihrem Meta-Profil verknüpft, sofern Sie dort eingeloggt sind. Weitere Informationen hierzu finden Sie in den Datenschutzbestimmungen von Meta.
                    </p>
                    <p>
                      <strong>Widerspruchsmöglichkeit:</strong> Sie können der Erfassung durch das Meta Pixel jederzeit widersprechen – etwa über die Cookie-Einstellungen auf unserer Website oder direkt bei Meta.
                    </p>
                  </div>

                  {/* Section 6 */}
                  <div className="border-t border-gray-700 pt-8">
                    <h3 className="text-xl font-semibold text-white mb-4">6. Cookies</h3>
                    <p>
                      Unsere Website verwendet Cookies, um grundlegende Funktionen bereitzustellen und Ihre Nutzererfahrung zu verbessern. Sie haben die Möglichkeit, über unsere Cookie-Einstellungen festzulegen, welche Cookies Sie zulassen möchten.
                    </p>
                  </div>

                  {/* Section 7 */}
                  <div className="border-t border-gray-700 pt-8">
                    <h3 className="text-xl font-semibold text-white mb-4">7. Ihre Rechte</h3>
                    <p className="mb-4">
                      Als betroffene Person haben Sie gemäß DSGVO jederzeit folgende Rechte:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mb-4">
                      <li>Auskunft über die zu Ihrer Person gespeicherten Daten</li>
                      <li>Berichtigung unrichtiger Daten</li>
                      <li>Löschung Ihrer Daten (Recht auf Vergessenwerden)</li>
                      <li>Einschränkung der Verarbeitung</li>
                      <li>Widerspruch gegen die Verarbeitung</li>
                      <li>Datenübertragbarkeit</li>
                    </ul>
                    <p>
                      Bitte richten Sie Ihre Anfrage per E-Mail an: <a href="mailto:info@newedgebrand.com" className="text-purple-400 hover:text-purple-300">info@newedgebrand.com</a>
                    </p>
                  </div>

                  {/* Section 8 */}
                  <div className="border-t border-gray-700 pt-8">
                    <h3 className="text-xl font-semibold text-white mb-4">8. Änderungen dieser Datenschutzerklärung</h3>
                    <p>
                      Wir behalten uns vor, diese Datenschutzerklärung anzupassen, sofern Änderungen an unserer Website oder rechtliche Vorgaben dies erforderlich machen. Die jeweils aktuelle Version finden Sie stets auf dieser Seite.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </main>
    </div>;
};
export default Impressum;