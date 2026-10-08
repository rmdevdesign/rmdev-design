document.addEventListener('DOMContentLoaded', function() {
  // --- Gestion du formulaire de contact (Formspree) ---
  const contactForm = document.getElementById('contactForm');
  const contactStatus = document.getElementById('contact-status');
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();

      const endpoint = contactForm.dataset.formspreeEndpoint;
      const submitButton = contactForm.querySelector('button[type="submit"]');

      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        if (contactStatus) {
          contactStatus.textContent = 'Merci de compléter les champs obligatoires.';
        }
        return;
      }

      if (!endpoint || endpoint.includes('REPLACE_WITH_YOUR_FORM_ID')) {
        if (contactStatus) {
          contactStatus.textContent = 'Le formulaire n’est pas encore configuré.';
        }
        console.error('Formspree endpoint missing.');
        return;
      }

      const formData = new FormData(contactForm);

      if (contactStatus) {
        contactStatus.textContent = 'Envoi en cours...';
      }

      if (submitButton) {
        submitButton.disabled = true;
      }

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Formspree request failed');
        }

        contactForm.reset();

        if (contactStatus) {
          contactStatus.textContent = 'Message envoyé. Je vous réponds rapidement.';
        }
      } catch (error) {
        console.error('Erreur:', error);
        if (contactStatus) {
          contactStatus.textContent = 'Erreur. Vous pouvez aussi écrire à contact@rmdev.design.';
        }
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
        }
      }
    });
  }

  // Lazy video enhancement on the static, crawlable project cards.
  const projectVideos = document.querySelectorAll('#projects-grid video');
  const reducedVideoMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reducedVideoMotion && 'IntersectionObserver' in window) {
    const videoObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const video = entry.target;
        const source = video.querySelector('source[data-src]');
        source.src = source.dataset.src;
        source.removeAttribute('data-src');
        video.playbackRate = 0.75;
        video.load();
        video.play().catch(() => {});
        videoObserver.unobserve(video);
      });
    }, { rootMargin: '250px 0px' });
    projectVideos.forEach(video => videoObserver.observe(video));
  }

  // --- Scroll Reveal Animation ---
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = 'IntersectionObserver' in window ? new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        observer.unobserve(entry.target); // On arrête d'observer une fois révélé
      }
    });
  }, {
    root: null,
    threshold: 0.15, // Déclenche quand 15% de l'élément est visible
    rootMargin: "0px 0px -50px 0px" // Déclenche un peu avant le bas de l'écran
  }) : null;

  revealElements.forEach(el => {
    if (revealObserver) {
      el.classList.add('reveal-pending');
      revealObserver.observe(el);
    }
  });

  // Ensure elements already in viewport are visible on first load (mobile Safari can skip IO callbacks)
  const revealVisibleInView = () => {
    revealElements.forEach(el => {
      if (el.classList.contains('reveal-visible')) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('reveal-visible');
        revealObserver?.unobserve(el);
      }
    });
  };

  window.addEventListener('load', revealVisibleInView);

  // --- Effets "spatiaux" propres à la home ---
  // (progression, halo curseur, magnétisme et spotlight : voir signature.js)
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --- Parallax Effect Hero (desktop : sur mobile l'image est animée en panoramique CSS) ---
  const heroBg = document.getElementById('hero-bg');
  if (heroBg && !reducedMotion) {
    window.addEventListener('scroll', function() {
      const scrollPosition = window.pageYOffset;
      // On déplace l'image de fond à 50% de la vitesse du scroll
      heroBg.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }, { passive: true });
  }

  if (finePointer && !reducedMotion) {
    // Profondeur du hero : le contenu s'incline, le "XR" géant contre-balance
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    const heroDisplay = document.querySelector('.hero-display-text');
    if (hero && heroContent) {
      let heroRaf = null;
      hero.addEventListener('mousemove', e => {
        if (heroRaf) return;
        heroRaf = requestAnimationFrame(() => {
          const rect = hero.getBoundingClientRect();
          const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
          const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
          heroContent.style.transform = `rotateX(${(-ny * 2.5).toFixed(2)}deg) rotateY(${(nx * 2.5).toFixed(2)}deg)`;
          if (heroDisplay) {
            heroDisplay.style.transform = `translate(calc(-50% + ${(-nx * 26).toFixed(1)}px), ${(-ny * 14).toFixed(1)}px)`;
          }
          heroRaf = null;
        });
      }, { passive: true });
      hero.addEventListener('mouseleave', () => {
        heroContent.style.transform = '';
        if (heroDisplay) {
          heroDisplay.style.transform = '';
        }
      });
    }

  }

  // Les chiffres clés restent stables dans le HTML et dans le DOM rendu.


});
