import en from './en';
import es from './es';

export const LOCALES = ['en', 'es'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

export interface Translations {
  meta: {
    siteName: string;
    locale: Locale;
    htmlLang: string;
    ogLocale: string;
  };
  nav: {
    skipToContent: string;
    about: string;
    founder: string;
    products: string;
    contact: string;
    primaryLabel: string;
    openMenu: string;
    closeMenu: string;
    themeLabel: string;
    themeLight: string;
    themeDark: string;
    localeLabel: string;
    localeEn: string;
    localeEs: string;
  };
  hero: {
    eyebrow: string;
    wordmarkTop: string;
    wordmarkBottom: string;
    establishment: string;
    tagline: string;
    scrollCue: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    body: string;
    valuesLabel: string;
    values: readonly string[];
  };
  founder: {
    eyebrow: string;
    nameDisplay: string;
    nameLong: string;
    role: string;
    body: string;
    credsHeading: string;
    credAwsSa: string;
    credAwsDev: string;
    socialsHeading: string;
    githubLabel: string;
    linkedinLabel: string;
  };
  products: {
    eyebrow: string;
    heading: string;
    countLabel: string;
    framefocal: {
      tagline: string;
      description: string;
      featureList: readonly string[];
      statusLabel: string;
      cta: string;
    };
  };
  contact: {
    eyebrow: string;
    heading: string;
    body: string;
    devTitle: string;
    devEmail: string;
    devUseFor: string;
    devCta: string;
    supportTitle: string;
    supportEmail: string;
    supportUseFor: string;
    supportCta: string;
  };
  footer: {
    location: string;
    coordinates: string;
    rights: string;
    builtIn: string;
  };
}

const dictionaries: Record<Locale, Translations> = { en, es };

export function useTranslations(locale: Locale): Translations {
  return dictionaries[locale];
}

export function pathForLocale(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? '/' : `/${locale}/`;
}

export function alternateLocaleUrls(siteUrl: string): Record<Locale | 'x-default', string> {
  return {
    en: `${siteUrl}/`,
    es: `${siteUrl}/es/`,
    'x-default': `${siteUrl}/`,
  };
}
