import { en } from './en';
import { es } from './es';
import type { TranslationKey } from './en';

export type Lang = 'en' | 'es';

const translations = { en, es } as const;

/**
 * Extracts the current language from a URL.
 * - /es/services → 'es'
 * - /services    → 'en' (default)
 */
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'es') return 'es';
  return 'en';
}

/**
 * Returns a translation function for the given language.
 * Usage: const t = useTranslations('en'); t('hero.title')
 *
 * Supports {year} interpolation for copyright strings.
 */
export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey, vars?: Record<string, string | number>): string {
    const dict = translations[lang] as Record<string, string>;
    const enDict = translations.en as Record<string, string>;

    // Fallback to English if key is missing in the target language
    let value = dict[key] ?? enDict[key] ?? key;

    // Variable interpolation: replace {year}, {name}, etc.
    if (vars) {
      for (const [varKey, varValue] of Object.entries(vars)) {
        value = value.replace(`{${varKey}}`, String(varValue));
      }
    }

    return value;
  };
}

/**
 * Returns the URL for the other language version of the current page.
 * Useful for the language switcher in the navbar.
 */
export function getAlternateLangUrl(url: URL, targetLang: Lang): string {
  const segments = url.pathname.split('/').filter(Boolean);

  // Remove the language prefix if present
  if (segments[0] === 'en' || segments[0] === 'es') {
    segments.shift();
  }

  const path = segments.join('/');

  if (targetLang === 'en') {
    return `/${path}`;
  }
  return `/es/${path || ''}`;
}
