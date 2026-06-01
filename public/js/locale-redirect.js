(function() {
  if (typeof window === 'undefined') return;
  if (window.location.pathname !== '/' && window.location.pathname !== '') return;
  const browserLang = navigator.language || navigator.userLanguage;
  if (!browserLang.startsWith('de')) {
    window.location.href = '/en/';
  }
})();

