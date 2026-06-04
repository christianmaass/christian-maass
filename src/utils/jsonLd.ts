import { SITE_URL } from './config';

// IDs der zentralen Knoten — werden ueber das gesamte Site-Schema referenziert.
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export const PERSON_NAME = 'Christian Maaß';

// Konsistente sameAs-Liste fuer Author-Referenzen (E-E-A-T).
export const SAME_AS = [
  'https://www.linkedin.com/in/christianmaass/',
  'https://www.amazon.de/stores/author/B0045949JA',
  'https://www.instagram.com/christianmaass/',
  'https://x.com/ChristianMaass',
] as const;

// Leichte Referenzen ohne Eigenschaften — fuer Verweise im Graph.
export const personRef = () => ({ '@id': PERSON_ID });
export const websiteRef = () => ({ '@id': WEBSITE_ID });
export const organizationRef = () => ({ '@id': ORGANIZATION_ID });

// Vollstaendige Person fuer Author/Publisher-Felder in Articles.
export const authorPerson = () => ({
  '@id': PERSON_ID,
  '@type': 'Person',
  name: PERSON_NAME,
  url: `${SITE_URL}/christian-maass`,
  sameAs: SAME_AS,
});

export const publisherPerson = () => ({
  '@id': PERSON_ID,
  '@type': 'Person',
  name: PERSON_NAME,
  url: SITE_URL,
});

export const speakable = (cssSelector: string[]) => ({
  '@type': 'SpeakableSpecification' as const,
  cssSelector,
});

interface WebPageOpts {
  /** Pfad ohne Domain, z.B. "/lehre/" oder "/" — wird zu absoluter URL und @id-Suffix kombiniert. */
  path: string;
  name: string;
  description: string;
  /** Schema.org-Type. Default: "WebPage". Beispiele: "ContactPage", "AboutPage". */
  type?: string;
  /** CSS-Selektoren fuer Speakable-Bereiche (optional). */
  speakableSelectors?: string[];
  /** Wenn true, wird mainEntity auf die Person gesetzt (Default an, falls Person das Hauptthema ist). */
  mainEntityPerson?: boolean;
  /** Zusaetzliche Felder, die ans Schema gemerged werden. */
  extra?: Record<string, unknown>;
}

export function webPage(opts: WebPageOpts) {
  const url = `${SITE_URL}${opts.path}`;
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': opts.type ?? 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: opts.name,
    description: opts.description,
    inLanguage: 'de',
    isPartOf: websiteRef(),
    about: personRef(),
    breadcrumb: { '@id': `${url}#breadcrumb` },
  };
  if (opts.mainEntityPerson ?? true) {
    schema.mainEntity = personRef();
  }
  if (opts.speakableSelectors && opts.speakableSelectors.length > 0) {
    schema.speakable = speakable(opts.speakableSelectors);
  }
  if (opts.extra) {
    Object.assign(schema, opts.extra);
  }
  return schema;
}
