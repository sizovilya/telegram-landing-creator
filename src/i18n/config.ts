
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './locales/en.json';
import ruTranslations from './locales/ru.json';
import svTranslations from './locales/sv.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslations
    },
    ru: {
      translation: ruTranslations
    },
    sv: {
      translation: svTranslations
    }
  },
  lng: 'ru', // Default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
