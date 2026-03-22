// ── Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ── Scroll reveal animation
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

// ── Hamburger menu (mobile)
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger?.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  navLinks.style.flexDirection = 'column';
  navLinks.style.position = 'absolute';
  navLinks.style.top = '70px';
  navLinks.style.right = '6vw';
  navLinks.style.background = 'rgba(6,12,24,0.98)';
  navLinks.style.border = '1px solid rgba(91,141,255,0.15)';
  navLinks.style.borderRadius = '16px';
  navLinks.style.padding = '20px 32px';
  navLinks.style.gap = '20px';
});

// ── Close menu on nav link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 900) {
      navLinks.style.display = 'none';
    }
  });
});

// ── Contact form (simulation)
const form = document.getElementById('contactForm');
const success = document.getElementById('formSuccess');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = 'Envoi en cours...';
  btn.disabled = true;
  setTimeout(() => {
    form.reset();
    btn.style.display = 'none';
    success.classList.add('show');
  }, 1200);
});

// ── Smooth active nav highlight
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 100;
  sections.forEach(section => {
    const link = document.querySelector(`.nav-links a[href="#${section.id}"]`);
    if (!link) return;
    if (scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
      document.querySelectorAll('.nav-links a').forEach(a => a.style.color = '');
      link.style.color = '#5B8DFF';
    }
  });
});
