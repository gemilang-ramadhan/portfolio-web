document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const menu = document.getElementById('mobile-menu');
  const menuToggle = document.getElementById('menu-toggle');

  document.querySelectorAll('.theme-toggle').forEach((button) => {
    button.addEventListener('click', () => {
      root.classList.toggle('dark');
      localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
    });
  });

  menuToggle?.addEventListener('click', () => {
    const isOpen = !menu.classList.toggle('hidden');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    menuToggle.querySelector('span').textContent = isOpen ? 'Close' : 'Menu';
  });

  document.querySelectorAll('#mobile-menu a').forEach((link) => link.addEventListener('click', () => {
    menu.classList.add('hidden');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    menuToggle.querySelector('span').textContent = 'Menu';
  }));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !menu.classList.contains('hidden')) {
      menu.classList.add('hidden');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
      menuToggle.querySelector('span').textContent = 'Menu';
      menuToggle.focus();
    }
  });

  matchMedia('(min-width: 901px)').addEventListener('change', (event) => {
    if (event.matches) {
      menu.classList.add('hidden');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.querySelector('span').textContent = 'Menu';
    }
  });

  document.getElementById('year').textContent = new Date().getFullYear();
});
