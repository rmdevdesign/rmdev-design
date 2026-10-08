document.addEventListener('DOMContentLoaded', function() {
  // --- Gestion du Menu Burger (Mobile) ---
  const burgerMenu = document.getElementById('burger-menu');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileLinks = document.querySelectorAll('#mobile-nav a');

  if (burgerMenu && mobileNav) {
    const setMobileMenu = (isOpen) => {
      mobileNav.classList.toggle('active', isOpen);
      burgerMenu.classList.toggle('open', isOpen);
      burgerMenu.setAttribute('aria-expanded', String(isOpen));
      burgerMenu.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
      mobileNav.setAttribute('aria-hidden', String(!isOpen));
      if (!isOpen) mobileNav.querySelectorAll('details[open]').forEach(menu => menu.open = false);

      if ('inert' in mobileNav) {
        mobileNav.inert = !isOpen;
      }
    };

    setMobileMenu(false);

    burgerMenu.addEventListener('click', function() {
      setMobileMenu(!mobileNav.classList.contains('active'));
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        setMobileMenu(false);
      });
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && mobileNav.classList.contains('active')) {
        setMobileMenu(false);
        burgerMenu.focus();
      }
    });
  }

  const expertiseMenus = document.querySelectorAll('.expertise-menu');
  document.addEventListener('click', event => {
    expertiseMenus.forEach(menu => { if (!menu.contains(event.target)) menu.open = false; });
  });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    expertiseMenus.forEach(menu => {
      if (!menu.open) return;
      menu.open = false;
      if (!menu.closest('#mobile-nav')) menu.querySelector('summary').focus();
    });
  });
});
