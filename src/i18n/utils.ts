import { translations, type Translations } from './translations';

export type { Translations } from './translations';

export function getTranslations(): Translations {
  return translations;
}
