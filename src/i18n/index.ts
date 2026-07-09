import type { Locale, Translation } from './types';
import es from './es.json';
import en from './en.json';

const translations: Record<Locale, Translation> = { es, en };

export function getTranslations(locale: Locale): Translation {
  return translations[locale];
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'es' ? 'en' : 'es';
}

export function getLocalePath(locale: Locale): string {
  return `/${locale}/`;
}
