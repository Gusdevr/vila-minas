import styled from "styled-components";

export const ContainerHeader = styled.div`
  position: fixed;
  background: linear-gradient(to top, #fff 75%, #ff914d 50%);
  backdrop-filter: blur(10px);
  width: 100vw;
  height: 9rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: background-color 1.3s ease;
  z-index: 1000;
  padding-top: 40px;

 

  @media screen and (max-width: 1089px) {
         a img {
          margin-left: 100px;
         }
        }

        @media screen and (max-width: 1289px) {
          img {
            margin-left: 100px;
          }
        }


    


  .menu-responsi {
    display: none;
    background-color: #ffffff;
    width: 110vw;
    cursor: pointer;
    position: absolute;
    margin-top: 65px;
    margin-right: 25px;

    @media screen and (max-width: 768px) {
            margin-top: 80px;
          
            
        }

       

    ul li {
      margin-left: 50px;
      font-weight: 700;
      
    }
    
    a {
      font-size: 32px;
      line-height: 150%;
      text-decoration: none;
      list-style: none;
      color: #1d3a5d;
   
      
    

    }
  }

  
  @media (max-width: 768px) { 
  .menu-responsi {
    display: block; 
  }
}




  @media screen and (max-width: 768px) {
    flex-direction: column;

    img {
      margin-top: 5px;
      display: flex;
      margin-right: 75px;
    }
  }

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
    color: #1d3a5d;
   justify-content: space-around;
   gap: 80px;
   list-style: none;
   align-items: center;
   margin-right: 300px;

   

   @media screen and (max-width: 768px) {
    display: none;
   }
   

  }

  ul li {
    font-weight: 500;
    font-size: 20px;

    :hover{
      color: #ff914d;
      font-size: 22px;
    }
  }

   a {
   text-decoration: none;
   color: #1d3a5d;
  }

.social-icons {
  display: flex;
  gap: 20px;

  @media screen and (max-width: 1700px) {
         margin-right: 30px;
      
        }

  @media screen and (max-width: 1089px) {
         margin-right: -900px;
         position: absolute;
      
        }

        @media screen and (max-width: 1289px) {
          position: absolute;
          margin-left: 1100px;
          
          
        }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    margin-bottom: 10px;
    margin-left: 300px;
  }
}

 
`