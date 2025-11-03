import { defaultLocale, locales, type Locale } from './config';

export function resolveLocale(param?: string): Locale {
  return locales.includes(param as Locale) ? (param as Locale) : defaultLocale;
}

export function buildLocaleUrl(locale: Locale, url: URL): string {
  const hash = url.hash ?? '';
  return `/${locale}${hash}`;
}

export function getAlternateLinks(currentLocale: Locale, url: URL) {
  return locales
    .filter((locale) => locale !== currentLocale)
    .map((locale) => ({
      lang: locale,
      href: buildLocaleUrl(locale, url),
    }));
}
