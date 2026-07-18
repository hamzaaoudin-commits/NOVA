/*
  NOVA — menu mobile
  ------------------
  Ouverture/fermeture accessible : aria-expanded synchronisé, fermeture à la
  touche Échap, focus piégé dans le panneau ouvert et rendu au bouton à la
  fermeture.
*/
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const mobile = document.querySelector('.nav-mobile');
  const closeBtn = document.querySelector('.nav-close');
  if (!toggle || !mobile) return;

  const FOCUSABLE = 'a[href], button:not([disabled])';
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-controls', 'nav-mobile-panel');
  mobile.id = 'nav-mobile-panel';
  mobile.setAttribute('role', 'dialog');
  mobile.setAttribute('aria-modal', 'true');
  mobile.setAttribute('aria-label', 'Navigation');

  const open = () => {
    mobile.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    const first = mobile.querySelector(FOCUSABLE);
    if (first) first.focus();
  };

  const shut = ({ restoreFocus = true } = {}) => {
    mobile.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    if (restoreFocus) toggle.focus();
  };

  toggle.addEventListener('click', open);
  if (closeBtn) closeBtn.addEventListener('click', () => shut());

  // Un clic sur un lien navigue : on ferme sans forcer le focus.
  mobile.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => shut({ restoreFocus: false }))
  );

  document.addEventListener('keydown', (e) => {
    if (!mobile.classList.contains('open')) return;

    if (e.key === 'Escape') { shut(); return; }

    if (e.key === 'Tab') {
      const items = Array.from(mobile.querySelectorAll(FOCUSABLE));
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus();
      }
    }
  });
});
