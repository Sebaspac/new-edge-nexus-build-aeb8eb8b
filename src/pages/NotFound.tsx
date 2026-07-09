import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import { useLanguage } from "@/contexts/LanguageContext";
import SEOHead from "@/components/SEOHead";
import { notFound as NOTFOUND_STATIC } from "@/content/pages/notFound";
import { notFound as notFoundEn } from "@/content/en/pages/notFound";
import { useLocalized } from "@/hooks/useLocalized";

const NotFound = () => {
  // Inhalte live aus dem CMS (Strapi); Fallback: statischer Content-Layer
  const notFound = useLocalized("not-found", NOTFOUND_STATIC, notFoundEn);
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <SEOHead title={notFound.seo.title} description={notFound.seo.description} noindex />
      <div className="text-center">
        <h1>{t('notFound.title')}</h1>
        <p className="text-gray-600 mb-4">{t('notFound.subtitle')}</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          {t('notFound.backToHome')}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
