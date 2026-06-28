import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 50;

    if (touchStartX - touchEndX > swipeThreshold) {
      nextSlide();
    }

    if (touchStartX - touchEndX < -swipeThreshold) {
      prevSlide();
    }
  };

  if (!images || images.length === 0) return null;

  return (
    <div 
      className="carousel-container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {images.map((img, index) => {
        let position = 'hidden';
        
        if (index === currentIndex) {
          position = 'active';
        } else if (index === (currentIndex - 1 + images.length) % images.length) {
          position = 'prev';
        } else if (index === (currentIndex + 1) % images.length) {
          position = 'next';
        }

        return (
          <img 
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`carousel-item ${position}`}
            onClick={() => {
              if (position === 'prev') prevSlide();
              if (position === 'next') nextSlide();
            }}
          />
        );
      })}
    </div>
  );
};

export default ImageCarousel;