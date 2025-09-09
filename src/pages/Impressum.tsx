import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, MapPin, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Footer } from "@/components/Footer";
const Impressum = () => {
  const {
    t
  } = useLanguage();
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
            {t('legal.backToHome')}
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
                    <p className="font-semibold text-white">New Edge GbR</p>
                    <p>c/o Creative Space</p>
                    <p>Koppenstr. 82</p>
                    <p>10243 Berlin</p>
                    <p>Deutschland</p>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-700">
                    <p className="flex items-center mb-2 text-sm sm:text-base">
                      <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-purple-400 flex-shrink-0" />
                      E-Mail: <a href="mailto:info@newedgebrand.com" className="text-purple-400 hover:text-purple-300 ml-1 break-all sm:break-normal">info@newedgebrand.com</a>
                    </p>
                    
                  </div>
                  
                  <div className="pt-4 border-t border-gray-700">
                    <p><strong>Rechtsform:</strong> Gesellschaft bürgerlichen Rechts (GbR)</p>
                    <p><strong>Vertretungsberechtigt:</strong> Verantwortliche Person auf Anfrage</p>
                    <p className="text-sm text-gray-400 mt-2">
                      <strong>Umsatzsteuer:</strong><br />
                      Hinweis gemäß § 19 UStG: Es handelt sich um ein Kleingewerbe. Umsatzsteuer wird nicht ausgewiesen.
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
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 flex items-center text-white">
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
                      <p>New Edge GbR</p>
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
      
      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="container-xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Section */}
            <div className="space-y-4">
              <div className="h-8 w-32 bg-white/10 rounded"></div>
              <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
                New Edge ist eine Creative-Tech Agentur für innovationsgetriebene Markenkommunikation.
              </p>
              {/* LinkedIn Icon */}
              <div className="flex items-center space-x-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
            </div>

            {/* Services Section */}
            <div className="space-y-4">
              <h4 className="text-white font-medium">Services</h4>
              <div className="space-y-2">
                <Link to="/studio" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  STUDIO
                </Link>
                <Link to="/media" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  MEDIA
                </Link>
                <Link to="/lab" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  LAB
                </Link>
              </div>
            </div>

            {/* Contact Section */}
            <div className="space-y-4">
              <h4 className="text-white font-medium">Kontakt</h4>
              <div className="space-y-2">
                <a href="mailto:info@newedgebrand.com" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  info@newedgebrand.com
                </a>
                <a href="tel:+4915750998236" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  +49 15750998236
                </a>
                <p className="text-gray-400 text-sm">
                  Deutschland
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2025 New Edge. Alle Rechte vorbehalten.
            </p>
            <Link to="/impressum" className="text-gray-400 hover:text-white transition-colors text-sm">
              Impressum
            </Link>
          </div>
        </div>
      </footer>
    </div>;
};
export default Impressum;