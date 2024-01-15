// SliderGalery.jsx
import React, { useRef, useEffect } from 'react';
import { StyledSlickSlider } from './styles';  // Importe StyledSlickSlider
import SliderOneJpg from '../../assets/img/hist.jpg';
import SliderTwoJpg from '../../assets/img/Inhoo.jpg';
import SliderTreeJpg from '../../assets/img/City.jpg';
import SliderFourJpg from '../../assets/img/Marii.jpg';
import SliderFiveJpg from '../../assets/img/Grutt.jpg';
import SliderSixJpg from '../../assets/img/Ourr.jpg';
import SliderSevenJpg from '../../assets/img/Sabb.jpg';
import SliderEightJpg from '../../assets/img/Saojoo.jpg';
import SliderNineJpg from '../../assets/img/Tiradd.jpg';




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
      <div>
        <img src={SliderFiveJpg} alt="Image 3" />
      </div>
      <div>
        <img src={SliderSixJpg} alt="Image 3" />
      </div>
      <div>
        <img src={SliderSevenJpg} alt="Image 3" />
      </div>
      <div>
        <img src={SliderEightJpg} alt="Image 3" />
      </div>
      <div>
        <img src={SliderNineJpg} alt="Image 3" />
      </div>
    </StyledSlickSlider>
  );
};

export default SliderGalery;
