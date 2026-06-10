document.addEventListener('DOMContentLoaded', function() {
  // --- Gestion du Menu Burger (Mobile) ---
  const burgerMenu = document.getElementById('burger-menu');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (burgerMenu && mobileNav) {
    const setMobileMenu = (isOpen) => {
      mobileNav.classList.toggle('active', isOpen);
      burgerMenu.classList.toggle('open', isOpen);
      burgerMenu.setAttribute('aria-expanded', String(isOpen));
      burgerMenu.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
      mobileNav.setAttribute('aria-hidden', String(!isOpen));

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

  // --- Cartes Projets ---
  const projects = window.rmdevProjects || [];

  const grid = document.getElementById('projects-grid');
  const delays = ['reveal', 'reveal reveal-delay-1', 'reveal reveal-delay-2'];
  const deferredVideos = [];

  projects.forEach(({ id, src, alt, name, cat, video, poster, proof, width, height, url }, i) => {
    const media = video
      ? `<video muted loop playsinline preload="none" poster="${poster || ''}" aria-label="${alt}"><source data-src="${src}" type="video/mp4"></video>`
      : `<img src="${src}" alt="${alt}" width="${width}" height="${height}" loading="lazy" decoding="async">`;
    const card = document.createElement(url ? 'a' : 'button');
    if (url) {
      card.href = url;
    } else {
      card.type = 'button';
      card.id = id;
    }
    card.className = `project-card-item ${delays[i % 3]}`;
    card.innerHTML = `
      <div class="project-thumb">
        ${media}
        <div class="project-overlay"><span class="view-project">${url ? 'Lire le cas client' : 'Voir le projet'}</span></div>
      </div>
      <div class="project-info">
        <h3 class="project-name">${name}</h3>
        <span class="project-cat">${cat}</span>
        ${proof ? `<span class="project-proof">${proof}</span>` : ''}
      </div>`;
    if (video) {
      const projectVideo = card.querySelector('video');
      projectVideo.playbackRate = 0.75;
      deferredVideos.push(projectVideo);
    }
    grid.appendChild(card);
  });

  if ('IntersectionObserver' in window) {
    const videoObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const video = entry.target;
        const source = video.querySelector('source[data-src]');
        if (source) {
          source.src = source.dataset.src;
          source.removeAttribute('data-src');
          video.load();
        }
        video.play().catch(() => {});
        videoObserver.unobserve(video);
      });
    }, { rootMargin: '250px 0px' });

    deferredVideos.forEach(video => videoObserver.observe(video));
  } else {
    deferredVideos.forEach(video => {
      const source = video.querySelector('source[data-src]');
      if (source) {
        source.src = source.dataset.src;
        source.removeAttribute('data-src');
        video.load();
      }
    });
  }

  const cta = document.createElement('a');
  cta.href = '#contact';
  cta.className = 'project-card-item cta-card reveal reveal-delay-2';
  cta.style.cssText = 'display:block;text-decoration:none;';
  cta.innerHTML = `
    <div class="project-thumb">
      <img src="Images/optimized/Creativity-card.webp" width="960" height="476" loading="lazy" decoding="async" alt="Votre Projet">
      <div class="project-overlay"><span class="view-project">Me contacter</span></div>
    </div>
    <div class="project-info">
      <h3 class="project-name">Votre Projet ?</h3>
      <span class="project-cat">Ajoutez-le à cette liste</span>
    </div>`;
  grid.appendChild(cta);

  // --- Scroll Reveal Animation ---
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries, observer) => {
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
  });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  // Ensure elements already in viewport are visible on first load (mobile Safari can skip IO callbacks)
  const revealVisibleInView = () => {
    revealElements.forEach(el => {
      if (el.classList.contains('reveal-visible')) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('reveal-visible');
        revealObserver.unobserve(el);
      }
    });
  };

  window.addEventListener('load', revealVisibleInView);

  // --- Parallax Effect Hero ---
  const heroBg = document.getElementById('hero-bg');
  if (heroBg) {
    window.addEventListener('scroll', function() {
      const scrollPosition = window.pageYOffset;
      // On déplace l'image de fond à 50% de la vitesse du scroll
      heroBg.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });
  }

});
