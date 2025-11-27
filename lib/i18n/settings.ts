export const fallbackLng = 'es';

export const languages = ['es', 'en', 'de'] as const;

export type Locale = (typeof languages)[number];

export const defaultNS = 'translation';

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    ns,
    defaultNS,
  };
}
