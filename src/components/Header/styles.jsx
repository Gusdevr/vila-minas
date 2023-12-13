import styled from "styled-components";

export const ContainerHeader = styled.div`
  position: fixed;
  background: linear-gradient(to top, #1c1e2c 75%, #b40421 50%);
  backdrop-filter: blur(10px);
  width: 100vw;
  height: 9rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: background-color 1.3s ease;
  z-index: 1000;
  padding-top: 40px;


  

  &.scrolled {
    background-color: #fff;
    transform: scale(1.02);


    img {
      transform: scale(1.09);
    }

    nav li {
      transform: scale(1.09);
    
    }
  }

  nav ul{
    display: flex;
    color: #fff;
   justify-content: space-around;
   gap: 80px;
   list-style: none;
   align-items: center;
   

  }

  ul li {
    font-weight: 500;
    font-size: 18px;
  }

 
`