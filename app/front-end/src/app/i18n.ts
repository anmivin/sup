import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend, { HttpBackendOptions } from 'i18next-http-backend';

const fallbackLanguage = 'ru';
const baseurl = import.meta.env.VITE_TRANSLATIONS_URL;

const backendPath = `${baseurl}/{{ns}}/{{lng}}`;

const internal = i18n.createInstance();
internal
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init<HttpBackendOptions>({
    partialBundledLanguages: true,
    ns: ['translation'],
    defaultNS: 'translation',
    resources: {},
    fallbackLng: fallbackLanguage,
    backend: {
      loadPath: backendPath,
    },
  });
internal.loadNamespaces([]);

export default internal;
