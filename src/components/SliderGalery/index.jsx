import React, { useRef, useEffect } from 'react';
import 'react-awesome-slider/dist/styles.css';
import { StyledAwesomeSlider } from './styles';
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
      if (sliderRef.current && sliderRef.current.element) {
        sliderRef.current.element.style.transition = 'transform 0.5s ease-in-out';
        sliderRef.current.next();
      }
    }, 5000);  
  
    return () => {
      clearInterval(interval);
    };
  }, []);
  
  return (
    <StyledAwesomeSlider
      animation="fallAnimation"
      customArrow={<CustomPrevArrow />} 
      organicArrows={false}
      bullets={false}
      ref={sliderRef}
    >
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
    </StyledAwesomeSlider>
  );
};

export default SliderGalery;
