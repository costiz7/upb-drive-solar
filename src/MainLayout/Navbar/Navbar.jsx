import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LogoIcon from "../../IndividualComponents/LogoIcon/LogoIcon";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const handleLinkClick = (e, targetUrl) => {
        if(isMenuOpen) {
            e.preventDefault();
            toggleMenu();

            setTimeout(() => {
                navigate(targetUrl);
            }, 300);
        }
    }
    return (
        <>
            <div className={`menu-overlay ${isMenuOpen ? "active" : ""}`} 
                onClick={toggleMenu}>
            </div>

            <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
            <div className="nav-brand">
                <Link to="/">
                    <LogoIcon />
                </Link>
            </div>
            
            <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
                <li><Link to="/" onClick={(e) => handleLinkClick(e, '/')}>Home</Link></li>
                <li><Link to="/about" onClick={(e) => handleLinkClick(e, '/about')}>About Us</Link></li>
                <li><Link to="/team" onClick={(e) => handleLinkClick(e, '/team')}>Meet The Team</Link></li>
                <li><Link to="/partners" onClick={(e) => handleLinkClick(e, '/partners')}>Partners</Link></li>
                <li><Link to="/contact" onClick={(e) => handleLinkClick(e, '/contact')}>Contact</Link></li>
            </ul>

            <div className={`hamburger ${isMenuOpen ? "active" : ""}`} 
                onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            </nav>
        </>
    );
}

export default Navbar;