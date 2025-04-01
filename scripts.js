// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true
});

// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check for saved theme preference or use system preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
  document.body.classList.add('dark-mode');
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Toggle theme
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
  themeToggle.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Create floating particles
function createParticles() {
  const container = document.querySelector('.particles');
  const particleCount = Math.floor(window.innerWidth / 30);
  
  container.innerHTML = '';
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    const size = Math.random() * 150 + 50;
    const posX = Math.random() * 100;
    const delay = Math.random() * 20;
    const duration = 20 + Math.random() * 30;
    const hue = 0 + Math.random() * 15;
    const saturation = 70 + Math.random() * 20;
    const lightness = 50 + Math.random() * 10;
    const opacity = 0.1 + Math.random() * 0.1;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}vw`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.background = `hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity})`;
    
    container.appendChild(particle);
  }
}

// Back to top button
const backToTopButton = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
});

// Initialize everything when page loads
window.addEventListener('load', () => {
  createParticles();
  AOS.refresh(); // Refresh AOS after content loads
});

// Recreate particles when window resizes
window.addEventListener('resize', createParticles);