const $$ = (selector) => Array.from(document.querySelectorAll(selector));

window.matchMedia('print').addEventListener('change', (e) => {
  if (e.matches) {
    $$('details:not([open])').forEach(details => {
      details.setAttribute('open', '');
      details.dataset.wasclosed = 'true';
    });
  } else {
    $$('details[data-wasclosed]').forEach(details => {
      details.removeAttribute('open');
      details.removeAttribute('data-wasclosed');
    });
  }
});
