
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Games } from "@/components/Games";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Navbar } from "@/components/Navbar";
import { SEOHelmet } from "@/components/SEOHelmet";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t, i18n } = useTranslation();
  
  // Define language-specific SEO content for the home page
  const pageTitle = i18n.language === 'en' 
    ? 'Gamepals - Gaming Friends Always Nearby' 
    : 'Gamepals - Найди напарника для любимой игры';
    
  const pageDescription = i18n.language === 'en'
    ? 'Find gaming partners for CS2, Dota 2, Fortnite, PUBG and other popular games right in Telegram!'
    : 'Найди напарников для CS2, Dota 2, Fortnite, PUBG и других популярных игр прямо в Telegram!';

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title={pageTitle}
        description={pageDescription}
        canonicalUrl="https://gamepals.app" 
      />
      <Navbar />
      <Hero />
      <Features />
      <Games />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Index;
