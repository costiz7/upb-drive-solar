const heroBtn = document.querySelector('.hero-btn');

if (heroBtn) {
  heroBtn.addEventListener('click', () => {
    window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth'
    });
  });
}