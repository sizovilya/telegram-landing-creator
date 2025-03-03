
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

export const SEOHelmet = ({
  title,
  description,
  canonicalUrl = 'https://gamepals.app',
  ogImage = '/og-image.png',
}: SEOProps) => {
  const { t, i18n } = useTranslation();
  
  // Define default titles and descriptions based on language
  let defaultTitle = 'Gamepals';
  let defaultDescription = 'Gamepals - A service for finding gaming partners in Telegram';
  
  if (i18n.language === 'en') {
    defaultTitle = 'Gamepals - Gaming Friends Always Nearby';
    defaultDescription = 'Gamepals - A service for finding gaming partners in Telegram. CS2, Dota 2, Fortnite, PUBG and other games.';
  } else if (i18n.language === 'ru') {
    defaultTitle = 'Gamepals - Найди напарника для любимой игры';
    defaultDescription = 'Gamepals - сервис поиска напарников для онлайн игр в Telegram. CS2, Dota 2, Fortnite, PUBG и другие игры.';
  } else if (i18n.language === 'sv') {
    defaultTitle = 'Gamepals - Spelkompisar alltid nära';
    defaultDescription = 'Gamepals - en tjänst för att hitta spelpartners i Telegram. CS2, Dota 2, Fortnite, PUBG och andra spel.';
  }

  return (
    <Helmet>
      <html lang={i18n.language} />
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};
