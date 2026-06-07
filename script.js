/* ══════════════════════════════════════════════════════
   Portfolio — Louan Bobelin
   script.js
══════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Hamburger menu ────────────────────────────────────
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });

  window.closeMobile = () => {
    mobileMenu.classList.remove('open');
  };

  // ── Scroll reveal ──────────────────────────────────────
  const reveals = document.querySelectorAll('.reveal');
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => revealObs.observe(el));

  // ── Active nav highlighting ────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navAs    = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 220) {
        current = s.id;
      }
    });
    navAs.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }, { passive: true });

});