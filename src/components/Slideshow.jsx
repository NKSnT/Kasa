import { React, useState, useEffect } from 'react';

import arrow_left from '../assets/arrow_left.png';
import arrow_right from '../assets/arrow_right.png';
import arrow_left_mobile from '../assets/arrow_left_mobile.png';
import arrow_right_mobile from '../assets/arrow_right_mobile.png';
import '../styles/Slideshow.css';

function Slideshow({ pictures }) {
  const [isMobile, setIsMobile] = useState(false);
  //choose the screen size
  useEffect(() => {
    function handleSize() {
      try {
        if (window.innerWidth < 720) {
          setIsMobile(true);
        }
      } catch (err) {
        console.log('===== error =====', err);
      }
    }
    handleSize();
  }, []);
  const [index, setIndex] = useState(0);
  const length = pictures.length;

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };
  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };
  if (pictures.length === 1) {
    return (
      <div className="slideshow-content">
        <img className="slideshow-img" src={pictures[index]} alt="test" />
      </div>
    );
  } else {
    return (
      <div className="slideshow-content">
        <img className="slideshow-img" src={pictures[index]} alt="test" />
        <div>
          <button className="slideshow-button-left" onClick={handlePrevious}>
            <img src={isMobile ? arrow_left_mobile : arrow_left} alt="arrow" className="" />
          </button>
          <button className="slideshow-button-right" onClick={handleNext}>
            <img src={isMobile ? arrow_right_mobile : arrow_right} alt="arrow" className="" />
          </button>
        </div>
      </div>
    );
  }
}
export default Slideshow;
