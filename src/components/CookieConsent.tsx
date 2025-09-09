import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  });
  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);
  const acceptAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    setPreferences(newPreferences);
    saveConsent(newPreferences);
    setShowBanner(false);
    setShowSettings(false);
  };
  const acceptNecessary = () => {
    const newPreferences = {
      necessary: true,
      analytics: false,
      marketing: false
    };
    setPreferences(newPreferences);
    saveConsent(newPreferences);
    setShowBanner(false);
    setShowSettings(false);
  };
  const savePreferences = () => {
    saveConsent(preferences);
    setShowBanner(false);
    setShowSettings(false);
  };
  const saveConsent = (prefs: typeof preferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      timestamp: Date.now(),
      preferences: prefs
    }));
  };
  const handlePreferenceChange = (key: keyof typeof preferences, value: boolean) => {
    if (key === 'necessary') return; // Necessary cookies can't be disabled
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  };
  if (!showBanner) return null;
  return <AnimatePresence>
      {showBanner && <motion.div initial={{
      y: 100,
      opacity: 0
    }} animate={{
      y: 0,
      opacity: 1
    }} exit={{
      y: 100,
      opacity: 0
    }} transition={{
      duration: 0.5,
      ease: "easeOut"
    }} className="fixed bottom-0 left-0 right-0 z-50 p-4">
          <Card className="bg-black/95 border border-purple-500/30 backdrop-blur-lg max-w-4xl mx-auto">
            <CardContent className="p-6">
              {!showSettings ? <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <Cookie className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">
                        Wir verwenden Cookies
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Unsere Website verwendet Cookies, um grundlegende Funktionen bereitzustellen und Ihre Nutzererfahrung zu verbessern. 
                        Über unsere Cookie-Einstellungen können Sie individuell festlegen, welche Cookies Sie zulassen möchten.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                    <Button onClick={() => setShowSettings(true)} variant="outline" className="border-purple-500/50 text-purple-400 hover:border-purple-400 bg-gray-950 hover:bg-gray-800">
                      <Settings className="w-4 h-4 mr-2" />
                      Einstellungen
                    </Button>
                    <Button onClick={acceptNecessary} variant="outline" className="border-purple-500/50 text-purple-400 hover:border-purple-400 bg-gray-950 hover:bg-gray-800">
                      Nur Notwendige
                    </Button>
                    <Button onClick={acceptAll} className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700">
                      Alle akzeptieren
                    </Button>
                  </div>
                </div> : <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-white font-bold text-xl flex items-center">
                      <Settings className="w-6 h-6 mr-3 text-purple-400" />
                      Cookie-Einstellungen
                    </h3>
                    <Button onClick={() => setShowSettings(false)} variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                      <X className="w-5 h-5" />
                    </Button>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Essential Cookies */}
                    <div className="flex items-center justify-between p-4 rounded-lg bg-gray-900/50 border border-gray-700">
                      <div className="flex-1">
                        <Label className="text-white font-semibold">Essenzielle Cookies</Label>
                        <p className="text-gray-400 text-sm mt-1">
                          Notwendig für den Betrieb der Website
                        </p>
                      </div>
                      <Switch checked={preferences.necessary} disabled className="data-[state=checked]:bg-purple-600" />
                    </div>
                    
                    {/* Statistics Cookies */}
                    <div className="flex items-center justify-between p-4 rounded-lg bg-gray-900/30 border border-gray-700/50">
                      <div className="flex-1">
                        <Label className="text-white font-semibold">Statistik-Cookies</Label>
                        <p className="text-gray-400 text-sm mt-1">
                          Zur Analyse durch Google Analytics
                        </p>
                      </div>
                      <Switch checked={preferences.analytics} onCheckedChange={checked => handlePreferenceChange('analytics', checked)} className="data-[state=checked]:bg-purple-600" />
                    </div>
                    
                    {/* Marketing Cookies */}
                    <div className="flex items-center justify-between p-4 rounded-lg bg-gray-900/30 border border-gray-700/50">
                      <div className="flex-1">
                        <Label className="text-white font-semibold">Marketing-Cookies</Label>
                        <p className="text-gray-400 text-sm mt-1">
                          Für Meta Pixel und Google Ads
                        </p>
                      </div>
                      <Switch checked={preferences.marketing} onCheckedChange={checked => handlePreferenceChange('marketing', checked)} className="data-[state=checked]:bg-purple-600" />
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-gray-700">
                    <Button onClick={acceptNecessary} variant="outline" className="border-gray-500/50 text-gray-300 hover:bg-gray-500/10 flex-1">
                      Nur Notwendige
                    </Button>
                    <Button onClick={savePreferences} className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 flex-1">
                      Auswahl speichern
                    </Button>
                    <Button onClick={acceptAll} className="bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 flex-1">
                      Alle akzeptieren
                    </Button>
                  </div>
                </div>}
            </CardContent>
          </Card>
        </motion.div>}
    </AnimatePresence>;
};
export default CookieConsent;