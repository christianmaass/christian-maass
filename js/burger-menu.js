document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('main-nav');
  const icon = document.getElementById('burger-icon');
  burger.addEventListener('click', () => {
    nav.classList.toggle('open');
    // Symbol wechseln
    if (nav.classList.contains('open')) {
      icon.textContent = '✕';
    } else {
      icon.textContent = '☰';
    }
  });
});

