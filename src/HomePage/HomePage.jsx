import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate();

  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight - window.scrollY,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div className="first-section">
        <img src="/images/IMG_2.JPG" alt="Home image" id="hero-image" />
        <div className="hero-content">
          <div className="hero-text-section">
            <p className="hero-title">Welcome to the official page of <span>UPB DRIVE Solar</span></p>
            <p className="hero-motto"><span>Solar Powered</span><span>Dream Driven</span></p>
          </div>
          <button className="glow-btn home-first-btn" onClick={handleScrollDown}>Follow our journey!</button>
        </div>
      </div>
      
      <div className="second-section">
        <div className="intro-content">
          <div className="intro-left-image">
            <img src="/images/IMG_1.jpg" alt="A group photo." id="img1-jpg" />
          </div>
          <div className="intro-right-content">
            <p className="text-content">
              <span>UPB Drive Solar</span> is a multidisciplinary student engineering team focused on designing and developing a high-performance solar-powered vehicle to compete in international competitions worldwide.
            </p>
            {/* Exemplu: Cum faci butonul să te ducă pe pagina About Us */}
            <button 
              className="glow-btn home-second-btn"
              onClick={() => navigate('/about')}
            >
              Check 'About Us'
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;