
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SEOHelmet } from "@/components/SEOHelmet";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const location = useLocation();
  const { i18n } = useTranslation();
  
  const pageTitle = i18n.language === 'en' ? '404 - Page Not Found' : '404 - Страница не найдена';
  const pageDescription = i18n.language === 'en' 
    ? 'The page you are looking for does not exist'
    : 'Страница, которую вы ищете, не существует';

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <SEOHelmet 
        title={pageTitle}
        description={pageDescription}
        canonicalUrl={`https://gamepals.app${location.pathname}`} 
      />
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">
          {i18n.language === 'en' ? 'Oops! Page not found' : 'Упс! Страница не найдена'}
        </p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          {i18n.language === 'en' ? 'Return to Home' : 'Вернуться на главную'}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
