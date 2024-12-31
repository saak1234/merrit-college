import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en/translation.json';
import chTranslations from './locales/ch/translation.json';
i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'en',
  resources: {
    en: {
      translations: enTranslations,
    },
    ch: {
      translations:chTranslations,
    },
  },
  ns: ['translations'],
  defaultNS: 'translations',
});

i18n.languages = ['en', 'ch'];

export default i18n;
