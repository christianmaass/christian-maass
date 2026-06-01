/**
 * Erkennt die Browser-Sprache und leitet zur passenden URL weiter
 * Wird nur auf der Root-Seite (/) ausgeführt
 */
export function detectAndRedirect(): void {
  if (typeof window === 'undefined') {
    return;
  }

  // Nur auf Root-Seite ausführen
  if (window.location.pathname !== '/' && window.location.pathname !== '') {
    return;
  }

  // Prüfe Browser-Sprache
  const browserLang = navigator.language || (navigator as any).userLanguage;
  
  // Wenn Browser-Sprache nicht Deutsch ist, leite zu /en/ weiter
  if (!browserLang.startsWith('de')) {
    window.location.href = '/en/';
  }
  // Ansonsten bleibt der Nutzer auf / (Deutsch)
}

