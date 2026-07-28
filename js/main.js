/* Fihrist — tanıtım sitesi
   Tek iş: bölümler ekrana girerken kısa bir reveal. Başka hareket yok. */

(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const targets = document.querySelectorAll('[data-reveal]');

  if (reduce) {
    targets.forEach(t => t.classList.add('seen'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (!e.isIntersecting) return;
      setTimeout(() => e.target.classList.add('seen'), i * 80);
      io.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });

  targets.forEach(t => io.observe(t));
})();
