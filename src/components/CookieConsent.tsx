import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { safeGetItem, safeLocalStorage, safeSetItem } from "@/utils/safeStorage";
import { cookieConsent as CC_STATIC } from "@/content/sections/cookieConsent";
import { cookieConsent as cookieConsentEn } from "@/content/en/sections/cookieConsent";
import { useLocalized } from "@/hooks/useLocalized";

const CookieConsent = () => {
  // Inhalte live aus dem CMS (Strapi); Fallback: statischer Content-Layer
  const cookieConsent = useLocalized("cookie-consent", CC_STATIC, cookieConsentEn);
  const storage = safeLocalStorage();
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  });
  useEffect(() => {
    const consent = safeGetItem(storage, 'cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, [storage]);
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
    safeSetItem(storage, 'cookie-consent', JSON.stringify({
      timestamp: Date.now(),
      preferences: prefs
    }));
    window.dispatchEvent(new CustomEvent('cookie-consent-changed', { detail: prefs }));
  };
  const handlePreferenceChange = (key: keyof typeof preferences, value: boolean) => {
    if (key === 'necessary') return; // Necessary cookies can't be disabled
    setPreferences((prev) => ({
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
          <Card className="bg-[#0D0D0D]/97 border border-[#FFF200]/30 rounded-none max-w-4xl mx-auto">
            <CardContent className="p-6">
              {!showSettings ? <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <Cookie className="w-6 h-6 text-[#FFF7B2] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">
                        {cookieConsent.banner.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {cookieConsent.banner.description}
                </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                    <Button onClick={() => setShowSettings(true)} variant="outline" className="border-[#FFF200]/50 text-[#FFF7B2] hover:border-[#FFF200] rounded-none bg-gray-950 hover:bg-gray-800">
                      <Settings className="w-4 h-4 mr-2" />
                      {cookieConsent.actions.settings}
                    </Button>
                    <Button onClick={acceptNecessary} variant="outline" className="border-[#FFF200]/50 text-[#FFF7B2] hover:border-[#FFF200] rounded-none bg-gray-950 hover:bg-gray-800">
                      {cookieConsent.actions.necessary}
                    </Button>
                    <Button onClick={acceptAll} className="bg-[#CCFF00] text-[#171717] hover:bg-[#171717] hover:text-white rounded-none">
                      {cookieConsent.actions.acceptAll}
                    </Button>
                  </div>
                </div> : <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-white font-bold text-xl flex items-center">
                      <Settings className="w-6 h-6 mr-3 text-[#FFF7B2]" />
                      {cookieConsent.settings.title}
                    </h3>
                    <Button onClick={() => setShowSettings(false)} variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                      <X className="w-5 h-5" />
                    </Button>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Essential Cookies */}
                    <div className="flex items-center justify-between p-4 rounded-lg bg-gray-900/50 border border-gray-700">
                      <div className="flex-1">
                        <Label className="text-white font-semibold">{cookieConsent.settings.categories[0].label}</Label>
                        <p className="text-gray-400 text-sm mt-1">
                          {cookieConsent.settings.categories[0].description}
                        </p>
                      </div>
                      <Switch checked={preferences.necessary} disabled className="data-[state=checked]:bg-[#CCFF00]" />
                    </div>
                    
                    {/* Statistics Cookies */}
                    <div className="flex items-center justify-between p-4 rounded-lg bg-gray-900/30 border border-gray-700/50">
                      <div className="flex-1">
                        <Label className="text-white font-semibold">{cookieConsent.settings.categories[1].label}</Label>
                        <p className="text-gray-400 text-sm mt-1">
                          {cookieConsent.settings.categories[1].description}
                        </p>
                      </div>
                      <Switch checked={preferences.analytics} onCheckedChange={(checked) => handlePreferenceChange('analytics', checked)} className="data-[state=checked]:bg-[#CCFF00]" />
                    </div>
                    
                    {/* Marketing Cookies */}
                    <div className="flex items-center justify-between p-4 rounded-lg bg-gray-900/30 border border-gray-700/50">
                      <div className="flex-1">
                        <Label className="text-white font-semibold">{cookieConsent.settings.categories[2].label}</Label>
                        <p className="text-gray-400 text-sm mt-1">
                          {cookieConsent.settings.categories[2].description}
                        </p>
                      </div>
                      <Switch checked={preferences.marketing} onCheckedChange={(checked) => handlePreferenceChange('marketing', checked)} className="data-[state=checked]:bg-[#CCFF00]" />
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-gray-700">
                    <Button onClick={acceptNecessary} variant="outline" className="border-gray-500/50 text-gray-300 hover:bg-gray-500/10 flex-1">
                      {cookieConsent.settings.actions.necessary}
                    </Button>
                    <Button onClick={savePreferences} className="bg-[#CCFF00] text-[#171717] hover:bg-[#171717] hover:text-white rounded-none flex-1">
                      {cookieConsent.settings.actions.save}
                    </Button>
                    <Button onClick={acceptAll} className="bg-[#CCFF00] text-[#171717] hover:bg-[#171717] hover:text-white rounded-none flex-1">
                      {cookieConsent.settings.actions.acceptAll}
                    </Button>
                  </div>
                </div>}
            </CardContent>
          </Card>
        </motion.div>}
    </AnimatePresence>;
};
export default CookieConsent;