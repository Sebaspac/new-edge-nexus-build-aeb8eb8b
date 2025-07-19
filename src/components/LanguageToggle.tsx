import { Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'de' ? 'en' : 'de');
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 bg-white/90 backdrop-blur-sm border-2 border-primary/20 hover:bg-white hover:border-primary/40 transition-all duration-200 shadow-lg font-semibold"
    >
      <Languages className="h-4 w-4 mr-2" />
      {language === 'de' ? 'EN' : 'DE'}
    </Button>
  );
};

export default LanguageToggle;