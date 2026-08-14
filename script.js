const year = document.querySelector('#current-year');
if (year) year.textContent = new Date().getFullYear();

const cvLink = document.querySelector('[data-cv-href]');
if (cvLink) {
  const cvHref = cvLink.dataset.cvHref;
  fetch(cvHref, { method: 'HEAD' })
    .then((response) => {
      if (!response.ok) throw new Error('CV unavailable');
      cvLink.href = cvHref;
      cvLink.target = '_blank';
      cvLink.rel = 'noopener noreferrer';
      cvLink.classList.remove('is-pending');
      cvLink.removeAttribute('aria-disabled');
    })
    .catch(() => {
      cvLink.title = 'An updated CV will be available soon.';
    });
}
