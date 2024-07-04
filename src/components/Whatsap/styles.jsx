import styled from "styled-components"

export const WhatsContainer = styled.div`
  position: fixed;
  bottom: 40px; 
  right: 20px; 
  z-index: 9999;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  animation: shake 0.5s ease infinite;
  @keyframes shake {
  0%, 50% {
    transform: translateX(0);
  }
  10%, 10%, 20%, 10%, 50% {
    transform: translateX(-5px); /* Defina a quantidade de chacoalhar */
  }
  20%, 15%, 10%, 50% {
    transform: translateX(5px); /* Defina a quantidade de chacoalhar */
  }
}

@media screen and (max-width: 1700px) {
         margin-right: 50px;

         img {
          width: 180px;
         }
      
        }

@media screen and (max-width: 1089px) {
         margin-right: 40px;

         img {
          width: 200px;
         }
      
        }

@media screen and (max-width: 768px) {
  img {
    width: 200px;
  }
}
`