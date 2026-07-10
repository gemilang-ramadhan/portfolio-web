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
  });

  document.querySelectorAll('#mobile-menu a').forEach((link) => link.addEventListener('click', () => {
    menu.classList.add('hidden');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));

  document.getElementById('year').textContent = new Date().getFullYear();
});
