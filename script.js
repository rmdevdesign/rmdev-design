document.addEventListener('DOMContentLoaded', function() {

  // --- Typewriter Hero ---
  const typewriterEl = document.getElementById('typewriter');
  if (typewriterEl) {
    const words = ['Réalité Virtuelle', 'Unity & C#', 'UI / UX Design'];
    let wi = 0, ci = 0, deleting = false;
    const speed = { type: 75, delete: 40, pause: 1800 };

    function tick() {
      const word = words[wi];
      typewriterEl.textContent = deleting ? word.slice(0, ci--) : word.slice(0, ci++);

      if (!deleting && ci > word.length) {
        setTimeout(() => { deleting = true; tick(); }, speed.pause);
        return;
      }
      if (deleting && ci < 0) {
        deleting = false;
        ci = 0;
        wi = (wi + 1) % words.length;
      }
      setTimeout(tick, deleting ? speed.delete : speed.type);
    }
    tick();
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

  // --- Gestion du formulaire de contact (EmailJS) ---
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(this);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
      };

      // Utilisation de EmailJS
      if (typeof emailjs !== 'undefined') {
        emailjs.send('service_v0dat3b', 'template_3wmx9ge', data)
          .then(function(response) {
            alert('Message envoyé avec succès!');
            contactForm.reset();
          }, function(error) {
            alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
            console.error('Erreur:', error);
          });
      } else {
        console.error('EmailJS non chargé.');
        alert('Erreur de configuration du formulaire.');
      }
    });
  }

  // --- Cartes Projets ---
  const projects = [
    { id: 'openImmersiveExp',  modal: 'cs-immersive-exp',      src: 'Images/ImmersiveExp.png',      alt: 'Sécurité VR',          name: 'Sécurité VR',          cat: 'Formation'            },
    { id: 'openDemonstrateur', modal: 'cs-demonstrateur',       src: 'Images/Demonstrateur.png',     alt: 'Démonstrateur Moteur', name: 'Démonstrateur Moteur', cat: 'Unity HDRP'           },
    { id: 'openSystemes',      modal: 'cs-systemes-embarques',  src: 'Images/Reno.webp',             alt: 'Systèmes Embarqués',   name: 'Systèmes Embarqués',   cat: 'Automobile'           },
    { id: 'openVRInCar',       modal: 'cs-vr-cockpit',         src: 'Images/VRinCar.png',           alt: 'VR in Cockpit',        name: 'VR in Cockpit',        cat: 'Expérience Immersive' },
    { id: 'openGoodSpeakVR',   modal: 'cs-goodspeakvr',        src: 'Vidéos/salle_reunion_vr.mp4',  alt: 'GoodSpeakVR',          name: 'GoodSpeakVR',          cat: 'Formation · IA & VR', video: true },
    { id: 'openPlan3D',        modal: 'cs-plan-to-3d',         src: 'Images/3DPlan.webp',           alt: 'Plan to 3D',           name: 'Plan to 3D',           cat: 'Visualisation 3D'     },
    { id: 'openMultijoueur',   modal: 'cs-multijoueur',        src: 'Images/XRSHARE.webp',          alt: 'XR Share',             name: 'XR Share',             cat: 'Multijoueur AR/VR'    },
    { id: 'openVisitesVR',     modal: 'cs-visites-virtuelles', src: 'Images/VisitesVirtuelles.webp',alt: 'Visites Virtuelles',   name: 'Visites Virtuelles',   cat: 'Immobilier'           },
    { id: 'openMaquette',      modal: 'cs-maquette-uiux',      src: 'Images/Calypshome.webp',       alt: 'App Domotique',        name: 'App Domotique',        cat: 'UI / UX Design'       },
    { id: 'openErgonomie',     modal: 'cs-ergonomie',          src: 'Images/Ergonomie.png',         alt: 'Ergonomie Cockpit',    name: 'Ergonomie Cockpit',    cat: 'R&D'                  },
    { id: 'openAR',            modal: 'cs-ar',                 src: 'Images/AR.webp',               alt: 'Réalité Augmentée',    name: 'Réalité Augmentée',    cat: 'Mobile'               },
    { id: 'openShowroomVR',    modal: 'cs-showroom-vr',        src: 'Images/ShowroomVR.png',        alt: 'ShowRoom VR',          name: 'ShowRoom VR',          cat: 'Réalité Virtuelle'    },
  ];

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
  const maps = [
    ...projects.map(({ id, modal }) => ({ btn: id, ov: modal })),
    { btn: 'openExpertise', ov: 'cs-expertise' },
  ];

  maps.forEach(({btn, ov}) => {
    const b = document.getElementById(btn);
    const o = document.getElementById(ov);
    
    if (!b || !o) return;

    const closeBtn = o.querySelector('.cs-close');
    
    const open = () => {
      o.style.display = 'block';
      // Force le scroll en haut à l'ouverture
      o.scrollTop = 0; 
      document.body.style.overflow = 'hidden';
      o.focus();
    };
    
    const shut = () => {
      o.style.display = 'none';
      document.body.style.overflow = '';
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
