// SliderGalery.jsx
import React, { useRef, useEffect } from 'react';
import { StyledSlickSlider } from './styles';  // Importe StyledSlickSlider

import BHJpg from '../../assets/img/imgcarrousel/destinoBeloHorizonte.jpg'
import CapitolioJpg from '../../assets/img/imgcarrousel/destinoCapitolio.jpg'
import GrutaJpg from '../../assets/img/imgcarrousel/destinoGrutaMaquine.jpg'
import InhotimPng from '../../assets/img/imgcarrousel/destinoInhotim.jpg'

import MariJpg from '../../assets/img/imgcarrousel/destinoMariana.jpg'
import OuroPJpg from '../../assets/img/imgcarrousel/destinoOuroPreto.jpg'
import SabaPng from '../../assets/img/imgcarrousel/destinoSabara.jpg'

import SaoJDRJpg from '../../assets/img/imgcarrousel/destinoSaoJoaoDelRei.jpg'
import TiraDJpg from '../../assets/img/imgcarrousel/destinoTiradentes.png'
import ReiMatoPng from '../../assets/img/imgcarrousel/destinoSatuarioCaraca.jpg'


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
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 8000,
  };

  return (
    <StyledSlickSlider {...settings} ref={sliderRef}>
      <div className='imagezero'>
        <h3>Belo Horizonte</h3>
        <img src={BHJpg} alt="Image 0" />
      </div>
      <div>
        <h3>Congonhas</h3>
        <img src={CapitolioJpg} alt="Image 1" />
      </div>
      <div>
        <h3>Gruta Maquiné</h3>
        <img src={GrutaJpg} alt="Image 2" />
      </div>
      <div>
      <h3>Inhontim</h3>
        <img src={InhotimPng} alt="Image 3" />
      </div>

      <div className='imagezero'>
      <h3>Mariana</h3>
        <img src={MariJpg} alt="Image 0" />
      </div>

      <div className='imagezero'>
      <h3>Ouro Preto</h3>
        <img src={OuroPJpg} alt="Image 0" />
      </div>

      <div className='imagezero'>
      <h3>Sabará</h3>
        <img src={SabaPng} alt="Image 0" />
      </div>

      <div className='imagezero'>
      <h3>São João Del Rei</h3>
        <img src={SaoJDRJpg} alt="Image 0" />
      </div>

      <div className='imagezero'>
      <h3>Tiradentes</h3>
        <img src={TiraDJpg} alt="Image 0" />
      </div>

      <div className='imagezero'>
      <h3>Gruta Rei do Mato</h3>
        <img src={ReiMatoPng} alt="Image 0" />
      </div>

    </StyledSlickSlider>
  );
};

export default SliderGalery;
