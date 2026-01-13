document.addEventListener('DOMContentLoaded', function() {
  
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

  // --- Gestion des Overlays (Projets) ---
  const maps = [
    {btn:'openVisitesVR', ov:'cs-visites-virtuelles'},
    {btn:'openPlan3D', ov:'cs-plan-to-3d'},
    {btn:'openDemonstrateur', ov:'cs-demonstrateur'},
    {btn:'openSystemes', ov:'cs-systemes-embarques'},
    {btn:'openShowroomVR', ov:'cs-showroom-vr'},
    {btn:'openVRInCar', ov:'cs-vr-cockpit'},
    {btn:'openImmersiveExp', ov:'cs-immersive-exp'},
    {btn:'openMaquette', ov:'cs-maquette-uiux'},
    {btn:'openMultijoueur', ov:'cs-multijoueur'},
    {btn:'openErgonomie', ov:'cs-ergonomie'},
    {btn:'openAR', ov:'cs-ar'},
    {btn:'openExpertise', ov:'cs-expertise'}
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
