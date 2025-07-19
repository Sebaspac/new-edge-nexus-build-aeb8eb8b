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
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-accent/50 transition-all duration-200"
    >
      <Languages className="h-4 w-4 mr-2" />
      {language === 'de' ? 'EN' : 'DE'}
    </Button>
  );
};

export default LanguageToggle;