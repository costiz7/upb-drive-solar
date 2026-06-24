import "./Footer.css";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="footer">
            <p className="copyright">&#169; {currentYear} UPBDrive Solar. All rights reserved.</p>
            <p className="credit"></p>
        </div>
    );
}

export default Footer;