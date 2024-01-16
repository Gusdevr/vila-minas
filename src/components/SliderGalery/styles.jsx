// styles.jsx
import styled from "styled-components";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const StyledSlickSlider = styled(Slider)`
  width: 100vw;

  @media screen and (max-width: 768px) {
   
    margin-bottom: 320px;

}

  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px;

    @media screen and (max-width: 1089px) {
         height: 600px;
      
        }
  }


  

  img {
    max-width: 100%;
    height: auto;
    max-height: 100%;
    object-fit: cover;
    margin-bottom: -320px;

    @media screen and (max-width: 1700px) {
      margin-bottom: 120px;
      
        }

    @media screen and (max-width: 768px) {
      margin-top: -120px;
      margin-bottom: 220px;
 
  }

  @media screen and (max-width: 1289px) {

margin-bottom: -120px;

}

  }

  .slick-prev,
  .slick-next {
    font-size: 24px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    padding: 10px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    transition: background-color 0.3s ease;
    z-index: 1;
  }

  .slick-prev:hover,
  .slick-next:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  .slick-prev {
    left: 10px;
  }

  .slick-next {
    right: 10px;
  }
`;
