document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('slides-track');
  const slides = Array.from(document.querySelectorAll('.slide'));
  const navLinks = Array.from(document.querySelectorAll('.presentation-nav a'));
  const navButtons = Array.from(document.querySelectorAll('.nav-btn'));
  const themeToggle = document.getElementById('theme-toggle');
  const slideIndex = document.getElementById('slide-index');
  const slideTitle = document.getElementById('slide-title');

  if (!track || slides.length === 0) {
    return;
  }

  let currentIndex = 0;
  const themeStorageKey = 'rmdev-presentation-theme';

  const applyTheme = (theme) => {
    const nextTheme = theme === 'light' ? 'light' : 'dark';
    document.body.dataset.theme = nextTheme;

    if (themeToggle) {
      themeToggle.textContent = nextTheme === 'dark' ? 'Light' : 'Dark';
      themeToggle.setAttribute(
        'aria-label',
        nextTheme === 'dark'
          ? 'Passer en mode clair'
          : 'Passer en mode sombre'
      );
    }
  };

  const scrollToSlide = (index) => {
    const safeIndex = Math.max(0, Math.min(index, slides.length - 1));
    currentIndex = safeIndex;
    slides[safeIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    updateStatus();
  };

  const updateStatus = () => {
    const activeSlide = slides[currentIndex];
    const activeId = `#${activeSlide.id}`;

    if (slideIndex) {
      slideIndex.textContent = String(currentIndex + 1).padStart(2, '0');
    }

    if (slideTitle) {
      slideTitle.textContent = activeSlide.dataset.title || activeSlide.id;
    }

    navLinks.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('href') === activeId);
    });
  };

  const syncFromScroll = () => {
    const midpoint = track.scrollLeft + (window.innerWidth / 2);

    slides.forEach((slide, index) => {
      const start = slide.offsetLeft;
      const end = start + slide.offsetWidth;
      if (midpoint >= start && midpoint < end) {
        if (currentIndex !== index) {
          currentIndex = index;
          updateStatus();
        }
      }
    });
  };

  navButtons.forEach((button) => {
    button.addEventListener('click', () => {
      scrollToSlide(currentIndex + Number(button.dataset.direction || 0));
    });
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      const targetIndex = slides.findIndex((slide) => `#${slide.id}` === targetId);

      if (targetIndex === -1) {
        return;
      }

      event.preventDefault();
      scrollToSlide(targetIndex);
    });
  });

  track.addEventListener('scroll', () => {
    window.requestAnimationFrame(syncFromScroll);
  }, { passive: true });

  document.addEventListener('keydown', (event) => {
    if (window.innerWidth <= 1100) {
      return;
    }

    if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') {
      event.preventDefault();
      scrollToSlide(currentIndex + 1);
    }

    if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
      event.preventDefault();
      scrollToSlide(currentIndex - 1);
    }
  });

  if (themeToggle) {
    const storedTheme = window.localStorage.getItem(themeStorageKey);
    applyTheme(storedTheme || 'dark');

    themeToggle.addEventListener('click', () => {
      const nextTheme = document.body.dataset.theme === 'light' ? 'dark' : 'light';
      applyTheme(nextTheme);
      window.localStorage.setItem(themeStorageKey, nextTheme);
    });
  } else {
    applyTheme('dark');
  }

  updateStatus();
});
