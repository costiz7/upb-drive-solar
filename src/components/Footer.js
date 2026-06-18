export function renderFooter() {
    let currentYear = new Date().getFullYear();
    const footerHTML = `
      <div class="footer">
        <p class="copyright">&#169; ${currentYear} UPBDrive Solar. All rights reserved. </p>
        <p class="credit">Designed and built by costiz7</p>
      </div>
    `

    const placeholder = document.getElementById('footer-placeholder');

    if(placeholder) {
        placeholder.innerHTML = footerHTML;
    }
}