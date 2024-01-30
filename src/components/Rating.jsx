import { React, useState, useEffect } from 'react';

import star_full from '../assets/star_full.png';
import star_empty from '../assets/star_empty.png';
import star_full_mobile from '../assets/star_full_mobile.png';
import star_empty_mobile from '../assets/star_empty_mobile.png';

import '../styles/Rating.css';

function Rating({ rating }) {
  const star = Number(rating); //Number force the variable to be take as an number
  const [isMobile, setIsMobile] = useState(false);
  /* const [isFUllStar, setIsFullStar] = useState; */
  //choose the screen size to make change on wanted device
  console.log(isMobile);
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  return (
    <div>
      {[...Array(star)].map((value, index) => {
        return (
          <span className="" key={index}>
            <img src={!isMobile ? star_full : star_full_mobile} alt="full star" />
          </span>
        );
      })}
      {[...Array(5 - star)].map((value, index) => {
        return (
          <span className="" key={index}>
            <img src={!isMobile ? star_empty : star_empty_mobile} alt="empty star" />
          </span>
        );
      })}
    </div>
  );
}
export default Rating;
