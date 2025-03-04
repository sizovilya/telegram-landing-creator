
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
  let pageTitle = 'Gamepals';
  let pageDescription = 'Find gaming partners in Telegram';
  
  if (i18n.language === 'en') {
    pageTitle = 'Gamepals - Gaming Friends Always Nearby';
    pageDescription = 'Find gaming partners for CS2, Dota 2, Fortnite, PUBG and other popular games right in Telegram!';
  } else if (i18n.language === 'ru') {
    pageTitle = 'Gamepals - Найди напарника для любимой игры';
    pageDescription = 'Найди напарников для CS2, Dota 2, Fortnite, PUBG и других популярных игр прямо в Telegram!';
  } else if (i18n.language === 'sv') {
    pageTitle = 'Gamepals - Spelkompisar alltid nära';
    pageDescription = 'Hitta spelpartners för CS2, Dota 2, Fortnite, PUBG och andra populära spel direkt i Telegram!';
  }

  return (
    <div className="min-h-screen bg-white w-full">
      <SEOHelmet 
        title={pageTitle}
        description={pageDescription}
        canonicalUrl="https://gamepals.app" 
      />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Games />
        <Testimonials />
        <CTA />
      </main>
    </div>
  );
};

export default Index;
