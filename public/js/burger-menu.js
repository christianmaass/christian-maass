document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('main-nav');
  const icon = document.getElementById('burger-icon');
  if (!burger || !nav || !icon) return;

  burger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(isOpen));
    icon.textContent = isOpen ? '✕' : '☰';
    document.body.classList.toggle('nav-open', isOpen);
  });

  nav.addEventListener('click', (event) => {
    const target = event.target;
    if (target instanceof HTMLAnchorElement) {
      nav.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      icon.textContent = '☰';
      document.body.classList.remove('nav-open');
    }
  });
});
