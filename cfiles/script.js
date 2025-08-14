// Mobile menu toggle
const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
btn?.addEventListener('click', () => menu.classList.toggle('open'));

// Smooth scroll + close menu on navigate
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      menu?.classList.remove('open');
    }
  });
});

// Year stamp (footer)
document.getElementById('year')?.append(new Date().getFullYear());

// Theme toggle with localStorage
const root = document.documentElement;
const toggle = document.getElementById('modeToggle');
const stored = localStorage.getItem('theme');
if (stored) root.setAttribute('data-theme', stored);
updateToggleLabel();

toggle?.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateToggleLabel();
});

function updateToggleLabel(){
  const isDark = root.getAttribute('data-theme') === 'dark';
  if (toggle) toggle.textContent = isDark ? '☀️' : '🌙';
}
