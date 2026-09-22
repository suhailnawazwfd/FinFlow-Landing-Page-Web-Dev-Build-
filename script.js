// FinFlow — mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('mobileToggle');
  const navLinks = document.querySelector('.nav-links');
  const navActions = document.querySelector('.navbar__actions');

  if (!toggle) return;

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-links--open');
    navActions.classList.toggle('navbar__actions--open');
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('nav-links--open');
      navActions.classList.remove('navbar__actions--open');
    });
  });

  // Newsletter form — placeholder submit handling
  const form = document.querySelector('.newsletter-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value) {
        input.value = '';
        input.placeholder = 'Thanks for subscribing!';
      }
    });
  }
});
