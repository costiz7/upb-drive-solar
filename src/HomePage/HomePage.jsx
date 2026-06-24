import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./HomePage.css";
import GlowButton from '../Atoms/GlowButton/GlowButton';

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
        <img src="/images/IMG_2.webp" alt="Home image" />
        <div className="hero-content">
          <div className="hero-text-section">
            <p className="hero-title">Welcome to the official page of <span>UPB DRIVE Solar</span></p>
            <p className="hero-motto"><span>Solar Powered</span><span>Dream Driven</span></p>
          </div>
          <GlowButton className='glow-btn' handleClick={handleScrollDown}>Follow our journey</GlowButton>
        </div>
      </div>
      
      <div className="second-section">
        <div className="intro-content">
          <div className="intro-left-image">
            <img src="/images/IMG_1.webp" alt="A group photo."/>
          </div>
          <div className="intro-right-content">
            <p className="text-content">
              <span>UPB Drive Solar</span> is a multidisciplinary student engineering team focused on designing and developing a high-performance solar-powered vehicle to compete in international competitions worldwide.
            </p>
            <GlowButton className='glow-btn home-second-btn' handleClick={() => navigate('/about')}>Go to 'About Us'</GlowButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;