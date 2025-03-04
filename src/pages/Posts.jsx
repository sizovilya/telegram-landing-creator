
import { Navbar } from "@/components/Navbar";
import { SEOHelmet } from "@/components/SEOHelmet";
import { useTranslation } from "react-i18next";

const Posts = () => {
  const { t, i18n } = useTranslation();
  const pageTitle = i18n.language === 'en' ? 'Posts - Gamepals' : 'Посты - Gamepals';
  const pageDescription = i18n.language === 'en' 
    ? 'Browse gaming partner posts and find your perfect teammates'
    : 'Просматривайте объявления о поиске напарников и найдите своих идеальных тиммейтов';

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title={pageTitle}
        description={pageDescription}
        canonicalUrl="https://gamepals.app/posts" 
      />
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold">{t('nav.posts')}</h1>
        <p className="text-slate-600 mt-4">Coming soon...</p>
      </div>
    </div>
  );
};

export default Posts;
