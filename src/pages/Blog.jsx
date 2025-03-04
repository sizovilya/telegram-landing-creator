
import { Navbar } from "@/components/Navbar";
import { SEOHelmet } from "@/components/SEOHelmet";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { t, i18n } = useTranslation();
  const pageTitle = i18n.language === 'en' ? 'Blog - Gamepals' : 'Блог - Gamepals';
  const pageDescription = i18n.language === 'en' 
    ? 'Read the latest gaming news and tips on the Gamepals blog'
    : 'Читайте последние игровые новости и советы в блоге Gamepals';

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title={pageTitle}
        description={pageDescription}
        canonicalUrl="https://gamepals.app/blog" 
      />
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold">{t('nav.blog')}</h1>
        <p className="text-slate-600 mt-4">Coming soon...</p>
      </div>
    </div>
  );
};

export default Blog;
