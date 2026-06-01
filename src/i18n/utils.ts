import { translations, type Locale, type Translations } from './translations';

export type { Locale, Translations } from './translations';

export const locales: Locale[] = ['de', 'en'];
export const defaultLocale: Locale = 'de';

/**
 * Extrahiert die Sprache aus dem URL-Pfad
 * @param pathname - Der URL-Pfad (z.B. "/en/christian-maass" oder "/christian-maass")
 * @returns Die erkannte Sprache oder defaultLocale
 */
export function getLocaleFromPath(pathname: string): Locale {
  // Entferne führenden und abschließenden Slash
  const cleanPath = pathname.replace(/^\/|\/$/g, '');
  
  // Prüfe ob Pfad mit Sprach-Präfix beginnt
  const firstSegment = cleanPath.split('/')[0];
  
  if (firstSegment === 'en') {
    return 'en';
  }
  
  return defaultLocale;
}

/**
 * Gibt die Übersetzungen für eine bestimmte Sprache zurück
 * @param locale - Die Sprache ('de' oder 'en')
 * @returns Die Übersetzungen für die Sprache
 */
export function getTranslations(locale: Locale = defaultLocale): Translations {
  return translations[locale];
}

/**
 * Generiert die alternative URL für eine andere Sprache
 * @param pathname - Der aktuelle URL-Pfad
 * @param targetLocale - Die Ziel-Sprache
 * @returns Die alternative URL
 */
export function getAlternateUrl(pathname: string, targetLocale: Locale): string {
  const currentLocale = getLocaleFromPath(pathname);
  
  // Entferne führenden und abschließenden Slash
  let cleanPath = pathname.replace(/^\/|\/$/g, '');
  
  // Entferne aktuelles Sprach-Präfix falls vorhanden
  if (cleanPath === 'en' || cleanPath.startsWith('en/')) {
    cleanPath = cleanPath.replace(/^en\/?/, '');
  }
  
  // Für rechtliche Seiten (immer DE): keine Sprach-Präfixe
  const legalPages = ['impressum', 'datenschutz', 'barrierefreiheit'];
  const isLegalPage = legalPages.some(page => cleanPath === page || cleanPath.endsWith(`/${page}`));
  
  if (isLegalPage) {
    return `/${cleanPath}`;
  }
  
  // Für Englisch: füge /en/ Präfix hinzu
  if (targetLocale === 'en') {
    return cleanPath ? `/en/${cleanPath}` : '/en/';
  }
  
  // Für Deutsch: kein Präfix
  return cleanPath ? `/${cleanPath}` : '/';
}

/**
 * Generiert den base-Pfad für Seiten-URLs basierend auf der Sprache
 * @param locale - Die aktuelle Sprache
 * @returns Der base-Pfad (leer für DE, '/en' für EN)
 */
export function getBasePath(locale: Locale): string {
  return locale === 'en' ? '/en' : '';
}

/**
 * Generiert den Pfad für Assets (immer vom Root, unabhängig von der Sprache)
 * @returns Immer leerer String, da Assets immer vom Root geladen werden
 */
export function getAssetPath(): string {
  return '';
}

