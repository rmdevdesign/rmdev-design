// Effets signature communs à toutes les pages :
// barre de progression + accent évolutif, halo curseur, boutons magnétiques, spotlight.
(function () {
  const init = () => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Barre de progression de lecture
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    let progressPending = false;
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const t = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      progressBar.style.transform = `scaleX(${t})`;
      progressPending = false;
    };
    window.addEventListener('scroll', () => {
      if (!progressPending) {
        progressPending = true;
        requestAnimationFrame(updateProgress);
      }
    }, { passive: true });
    updateProgress();

    if (finePointer && !reducedMotion) {
      // Halo lumineux qui suit le curseur, avec un léger retard
      const glow = document.createElement('div');
      glow.className = 'cursor-glow';
      document.body.appendChild(glow);
      let targetX = -600, targetY = -600, glowX = -600, glowY = -600, glowRaf = null;
      const animateGlow = () => {
        glowX += (targetX - glowX) * 0.12;
        glowY += (targetY - glowY) * 0.12;
        glow.style.transform = `translate(${glowX}px, ${glowY}px)`;
        if (Math.abs(targetX - glowX) > 0.5 || Math.abs(targetY - glowY) > 0.5) {
          glowRaf = requestAnimationFrame(animateGlow);
        } else {
          glowRaf = null;
        }
      };
      window.addEventListener('mousemove', e => {
        targetX = e.clientX;
        targetY = e.clientY;
        if (!glowRaf) {
          glowRaf = requestAnimationFrame(animateGlow);
        }
      }, { passive: true });

      // Boutons magnétiques : les CTA s'aimantent légèrement au curseur
      const magneticSelector = '.btn-primary, .btn-secondary, .nav-cta, .btn-submit, .conversion-link, .button-primary, .button-secondary, .nav-contact';
      document.querySelectorAll(magneticSelector).forEach(btn => {
        btn.addEventListener('mousemove', e => {
          const rect = btn.getBoundingClientRect();
          const dx = e.clientX - (rect.left + rect.width / 2);
          const dy = e.clientY - (rect.top + rect.height / 2);
          btn.style.transform = `translate(${(dx * 0.18).toFixed(1)}px, ${(dy * 0.3).toFixed(1)}px)`;
        }, { passive: true });
        btn.addEventListener('mouseleave', () => {
          btn.style.transform = '';
        });
      });
    }

    // Spotlight : position de la souris exposée en variables CSS sur les cartes
    if (finePointer) {
      const spotlightSelector = '.use-case-card, .service-card, .faq-item, .contact-form-wrapper, .contact-info-card, .content-card, .related-link, .case-next, .expertise-cta';
      document.querySelectorAll(spotlightSelector).forEach(card => {
        card.addEventListener('mousemove', e => {
          const rect = card.getBoundingClientRect();
          card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
          card.style.setProperty('--my', `${e.clientY - rect.top}px`);
        }, { passive: true });
      });
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
