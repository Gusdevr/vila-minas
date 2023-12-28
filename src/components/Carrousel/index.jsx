import React from 'react'
import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import 'react-awesome-slider/dist/styles.css'
import { StyledSliderContainer, StyledAwesomeSlider } from './styles'

import BHJpg from '../../assets/img/imgcarrousel/destinoBeloHorizonte.jpg'
import CapitolioJpg from '../../assets/img/imgcarrousel/destinoCapitolio.jpg'
import GrutaJpg from '../../assets/img/imgcarrousel/destinoGrutaMaquine.jpg'

const AutoplaySlider = withAutoplay(AwesomeSlider)

const Carousel = () => {
  const sliderConfig = {
    bullets: true,
    organicArrows: true,
    play: true,
    interval: 3000,
    transitionDelay: 0,
  };

  return (
    <section className="section-galery">
    
      <StyledSliderContainer>
        <AutoplaySlider {...sliderConfig} className="custom-slider">
          <div data-src={BHJpg} />
          <div data-src={CapitolioJpg} />
          <div data-src={GrutaJpg} />
          {/* Adicione mais divs para outras imagens ... */}
        </AutoplaySlider>
      </StyledSliderContainer>
    </section>
  );
};

export default Carousel
