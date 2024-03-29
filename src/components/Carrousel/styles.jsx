// styles.jsx
import styled from "styled-components";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const StyledSlickSlider = styled(Slider)`
  width: 100vw;


  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    
  }

  img {
    max-width: 100%;
  
   
  
  }

  h3 {
    color: #fff;
  }

  .slick-prev,
  .slick-next {
    /* font-size: 24px;
    color: #fff;
    background-color: rgb(248, 5, 5);
    border-radius: 50%;
    padding: 10px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    transition: background-color 0.3s ease;
    z-index: 3000; */
  }

  .slick-prev:hover,
  .slick-next:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  .slick-prev {
    /* left: 10px; */
  }

  .slick-next {
    /* right: 10px; */
  }
`;
