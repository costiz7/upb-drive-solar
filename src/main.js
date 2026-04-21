import { renderNavbar } from './components/NavBar.js';
import { renderFooter } from './components/Footer.js';

renderNavbar();
renderFooter();

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
});