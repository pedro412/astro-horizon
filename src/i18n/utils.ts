import { defaultLocale, locales, type Locale } from './config';

export function resolveLocale(param?: string): Locale {
  return locales.includes(param as Locale) ? (param as Locale) : defaultLocale;
}

export function buildLocaleUrl(locale: Locale, url: URL): string {
  const hash = url.hash ?? '';
  const segments = url.pathname.split('/').filter(Boolean);
  if (segments[0] && locales.includes(segments[0] as Locale)) {
    segments.shift();
  }
  const localizedPath =
    locale === defaultLocale
      ? `/${segments.join('/')}`
      : `/${locale}${segments.length ? `/${segments.join('/')}` : ''}`;
  const normalizedPath = localizedPath.replace(/\/{2,}/g, '/').replace(/\/$/, '') || '/';
  return `${normalizedPath}${hash}`;
}

export function getAlternateLinks(currentLocale: Locale, url: URL) {
  return locales
    .filter((locale) => locale !== currentLocale)
    .map((locale) => ({
      lang: locale,
      href: buildLocaleUrl(locale, url),
    }));
}
