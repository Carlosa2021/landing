import { Locale } from './i18n';

const dictionaries: Record<Locale, () => Promise<any>> = {
  es: () => import('../../locales/es.json').then((mod) => mod.default),
  en: () => import('../../locales/en.json').then((mod) => mod.default),
  de: () => import('../../locales/de.json').then((mod) => mod.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale](); // ✅ correcto
};
