document.querySelectorAll('.case-download-form').forEach(form => {
  const status = form.querySelector('.case-download-status');
  const submitButton = form.querySelector('button[type="submit"]');
  const downloadLink = form.querySelector('.case-download-success');

  form.addEventListener('submit', async event => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const endpoint = form.dataset.formspreeEndpoint;
    const downloadUrl = form.dataset.downloadUrl;

    if (!endpoint || !downloadUrl) {
      status.textContent = 'Le téléchargement est momentanément indisponible.';
      return;
    }

    submitButton.disabled = true;
    status.textContent = 'Validation en cours...';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });

      if (!response.ok) {
        throw new Error('Formspree request failed');
      }

      downloadLink.href = downloadUrl;
      downloadLink.classList.add('is-visible');
      status.textContent = 'Merci. La présentation est prête à être téléchargée.';
      submitButton.hidden = true;
      form.querySelector('input[type="email"]').readOnly = true;
    } catch (error) {
      console.error(error);
      status.textContent = 'Impossible de valider la demande. Réessayez ou écrivez à contact@rmdev.design.';
    } finally {
      submitButton.disabled = false;
    }
  });
});
