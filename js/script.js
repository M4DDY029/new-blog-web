// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      const children = entry.target.children;
      Array.from(children).forEach((child, i) => {
        child.style.transitionDelay = (i * 0.05) + 's';
      });
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));

// Search
function doSearch() {
  const q = document.getElementById('searchInput').value.trim();
  if (q) {
    window.open('https://javedmaqsood.blogspot.com/search?q=' + encodeURIComponent(q), '_blank');
  }
}

document.getElementById('searchInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') doSearch();
});

// Hamburger placeholder
const navHamburger = document.querySelector('.nav-hamburger');
const navLinks = document.querySelector('.nav-links');

navHamburger.addEventListener('click', () => {
  if (navLinks.style.display === 'flex') {
    navLinks.style.display = 'none';
  } else {
    navLinks.style.display = 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'fixed';
    navLinks.style.top = '68px';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = 'rgba(27,31,94,0.98)';
    navLinks.style.padding = '20px';
    navLinks.style.gap = '8px';
    navLinks.style.zIndex = '98';
  }
});
