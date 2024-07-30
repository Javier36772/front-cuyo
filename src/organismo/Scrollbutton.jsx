import React, { useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import up from '../assets/up-arrow.png'
import '../sources/Scroll.css'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 1000, // Duración de la transición en milisegundos
      smooth: true, // Animación suave
    });
  };

  window.addEventListener('scroll', toggleVisibility);

  return (
    <div class='scroll-container'>
      {isVisible && (
      <button className="scroll-to-top-button"  class='scroll'  onClick={scrollToTop} >
        <img src={up} alt="" />
      </button>
       
      )}
    </div>
  );
};

export default ScrollToTopButton;
