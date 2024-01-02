// SliderGalery.jsx
import React, { useRef, useEffect } from 'react';
import { StyledSlickSlider } from './styles';  // Importe StyledSlickSlider
import SliderOneJpg from '../../assets/img/ouropreto3.jpeg';
import SliderTwoJpg from '../../assets/img/inhotim.jpg';
import SliderTreeJpg from '../../assets/img/ouropreton.jpg';
import SliderFourJpg from '../../assets/img/ouropretou.jpg';

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
        <img src={SliderOneJpg} alt="Image 0" />
      </div>
      <div>
        <img src={SliderTreeJpg} alt="Image 1" />
      </div>
      <div>
        <img src={SliderFourJpg} alt="Image 2" />
      </div>
      <div>
        <img src={SliderTwoJpg} alt="Image 3" />
      </div>
    </StyledSlickSlider>
  );
};

export default SliderGalery;
