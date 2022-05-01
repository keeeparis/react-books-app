import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import enTranslations from './locales/en/translations.json'
import ruTranslations from './locales/ru/translations.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translations: enTranslations,
      },
      ru: {
        translations: ruTranslations,
      },
    },
    ns: ['translations'],
    defaultNS: 'translations',
  })

i18n.languages = ['en', 'ru']

export default i18n
