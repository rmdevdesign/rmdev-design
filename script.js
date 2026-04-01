document.addEventListener('DOMContentLoaded', function() {
  const overlaysRoot = document.getElementById('project-overlays-root');
  if (overlaysRoot && window.rmdevOverlaysHtml) {
    overlaysRoot.innerHTML = window.rmdevOverlaysHtml;
  }

  // --- Gestion du Menu Burger (Mobile) ---
  const burgerMenu = document.getElementById('burger-menu');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (burgerMenu && mobileNav) {
    burgerMenu.addEventListener('click', function() {
      mobileNav.classList.toggle('active');
      // Animation simple du burger (optionnel, peut être amélioré en CSS)
      this.classList.toggle('open');
    });

    // Fermer le menu quand on clique sur un lien
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        burgerMenu.classList.remove('open');
      });
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

  projects.forEach(({ id, src, alt, name, cat, video }, i) => {
    const media = video
      ? `<video autoplay muted loop playsinline><source src="${src}" type="video/mp4"></video>`
      : `<img src="${src}" alt="${alt}" loading="lazy">`;
    const btn = document.createElement('button');
    btn.id = id;
    btn.className = `project-card-item ${delays[i % 3]}`;
    btn.innerHTML = `
      <div class="project-thumb">
        ${media}
        <div class="project-overlay"><span class="view-project">Voir le projet</span></div>
      </div>
      <div class="project-info">
        <h3 class="project-name">${name}</h3>
        <span class="project-cat">${cat}</span>
      </div>`;
    if (video) btn.querySelector('video').playbackRate = 0.75;
    grid.appendChild(btn);
  });

  const cta = document.createElement('a');
  cta.href = '#contact';
  cta.className = 'project-card-item cta-card reveal reveal-delay-2';
  cta.style.cssText = 'display:block;text-decoration:none;';
  cta.innerHTML = `
    <div class="project-thumb">
      <img src="Images/Creativity.webp" alt="Votre Projet">
      <div class="project-overlay"><span class="view-project">Me contacter</span></div>
    </div>
    <div class="project-info">
      <h3 class="project-name">Votre Projet ?</h3>
      <span class="project-cat">Ajoutez-le à cette liste</span>
    </div>`;
  grid.appendChild(cta);

  // --- Gestion des Overlays ---
  const maps = projects.map(({ id, modal }) => ({ btn: id, ov: modal }));

  maps.forEach(({btn, ov}) => {
    const b = document.getElementById(btn);
    const o = document.getElementById(ov);
    
    if (!b || !o) return;

    const closeBtn = o.querySelector('.cs-close');
    let closeTimeoutId = null;
    
    const open = () => {
      if (closeTimeoutId) {
        window.clearTimeout(closeTimeoutId);
        closeTimeoutId = null;
      }
      o.classList.remove('is-closing');
      o.style.display = 'block';
      // Force le scroll en haut à l'ouverture
      o.scrollTop = 0; 
      document.body.style.overflow = 'hidden';
      o.focus();
    };
    
    const shut = () => {
      if (o.style.display !== 'block' || o.classList.contains('is-closing')) return;

      o.classList.add('is-closing');
      document.body.style.overflow = '';

      closeTimeoutId = window.setTimeout(() => {
        o.style.display = 'none';
        o.classList.remove('is-closing');
        closeTimeoutId = null;
      }, 240);
    };

    b.addEventListener('click', open);
    
    if (closeBtn) {
      closeBtn.addEventListener('click', shut);
    }
    
    o.addEventListener('click', e => {
      if (e.target === o) shut();
    });
    
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && o.style.display === 'block') shut();
    });
  });

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
