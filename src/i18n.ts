import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ptBRTranslation from './locales/pt-BR/translation.json';
import enTranslation from './locales/en/translation.json';
import ptBRBuffs from './locales/pt-BR/buffs.json';
import enBuffs from './locales/en/buffs.json';
import ptBRBuffNames from './locales/pt-BR/buffNames.json';
import enBuffNames from './locales/en/buffNames.json';

export const resources = {
  'pt-BR': {
    translation: ptBRTranslation,
    buffs: ptBRBuffs,
    buffNames: ptBRBuffNames
  },
  'en': {
    translation: enTranslation,
    buffs: enBuffs,
    buffNames: enBuffNames
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt-BR',
    interpolation: {
      escapeValue: false
    },
    detection: {
      // Detect by URL path (/en), then HTML lang, then localStorage, then browser
      order: ['path', 'htmlTag', 'localStorage', 'navigator'],
      lookupFromPathIndex: 0,
      caches: ['localStorage']
    },
    ns: ['translation', 'buffs', 'buffNames'],
    defaultNS: 'translation'
  });

export default i18n;
