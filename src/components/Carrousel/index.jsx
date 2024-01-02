// SliderGalery.jsx
import React, { useRef, useEffect } from 'react';
import { StyledSlickSlider } from './styles';  // Importe StyledSlickSlider

import BHJpg from '../../assets/img/imgcarrousel/destinoBeloHorizonte.jpg'
import CapitolioJpg from '../../assets/img/imgcarrousel/destinoCapitolio.jpg'
import GrutaJpg from '../../assets/img/imgcarrousel/destinoGrutaMaquine.jpg'

const CustomPrevArrow = ({ onClick }) => (
  <button className="custom-arrow" onClick={onClick}>
    {'<'}
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button className="custom-arrow" onClick={onClick}>
    {'>'}
  </button>
);

const SliderGalery = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <StyledSlickSlider {...settings} ref={sliderRef}>
      <div className='imagezero'>
        <img src={BHJpg} alt="Image 0" />
      </div>
      <div>
        <img src={CapitolioJpg} alt="Image 1" />
      </div>
      <div>
        <img src={GrutaJpg} alt="Image 2" />
      </div>
      <div>
        <img src={CapitolioJpg} alt="Image 3" />
      </div>
    </StyledSlickSlider>
  );
};

export default SliderGalery;
