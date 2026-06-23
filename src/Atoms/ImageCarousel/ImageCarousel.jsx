import { useState, useEffect } from "react";
import './ImageCarousel.css';

function ImageCarousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStartX, setTouchStartX] = useState(0);
    const [touchEndX, setTouchEndX] = useState(0);

    function nextSlide() {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    function prevSlide() {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {

    },)
}

export default ImageCarousel;