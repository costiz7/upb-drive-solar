export function renderFooter() {
    let currentYear = new Date().getFullYear();
    const footerHTML = `
      <div class="footer-upper-section">
        <div class="footer-upper-column pages-section">Page Section</div>
        <div class="footer-upper-column contact-section">Contact Section</div>
        <div class="footer-upper-column social-media-section">Social Media Section</div>
      </div>
      <div class="footer-lower-section">
        <p class="copyright">&#169; ${currentYear} UPBDrive Solar. All rights reserved. </p>
        <p class="credit">Designed and built by costiz7</p>
      </div>
    `

    const placeholder = document.getElementById('footer-placeholder');

    if(placeholder) {
        placeholder.innerHTML = footerHTML;
    }
}