import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Stări pentru a detecta mișcarea degetului (swipe)
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  // Funcție pentru imaginea următoare
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Funcție pentru imaginea anterioară
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Efect pentru Auto-Play (la fiecare 3 secunde)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    // Curățăm intervalul dacă utilizatorul interacționează sau dacă componenta dispare
    return () => clearInterval(interval);
  }, [currentIndex]); // Punem currentIndex ca dependență pentru a reseta timer-ul când dai swipe manual

  // --- Funcții pentru Swipe pe Mobil ---
  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndX(e.targetTouches[0].clientX); // Prevenim un swipe fals la o simplă atingere
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 50; // Distanța minimă în pixeli pentru a fi considerat swipe

    if (touchStartX - touchEndX > swipeThreshold) {
      // Swipe stânga -> următoarea imagine
      nextSlide();
    }

    if (touchStartX - touchEndX < -swipeThreshold) {
      // Swipe dreapta -> imaginea anterioară
      prevSlide();
    }
  };

  // Dacă nu avem imagini sau avem mai puțin de 3, nu randăm caruselul complex
  if (!images || images.length === 0) return null;

  return (
    <div 
      className="carousel-container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {images.map((img, index) => {
        // Determinăm clasa CSS în funcție de indexul imaginii relativ la imaginea curentă
        let position = 'hidden';
        
        if (index === currentIndex) {
          position = 'active'; // Imaginea din centru
        } else if (index === (currentIndex - 1 + images.length) % images.length) {
          position = 'prev'; // Imaginea din stânga
        } else if (index === (currentIndex + 1) % images.length) {
          position = 'next'; // Imaginea din dreapta
        }

        return (
          <img 
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`carousel-item ${position}`}
            // Bonus: Dacă utilizatorul dă click pe imaginile laterale pe PC, caruselul se mută pe ele
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