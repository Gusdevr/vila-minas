import styled from "styled-components";

export const ContentPrivaci = styled.div`


    display: flex;
    justify-content: center;
    line-height: 150%;

    @media screen and (max-width: 768px) {
        max-width: 400px;

      
    }
 


    p {
        display: flex;
        justify-content: center;
        margin-top: 100px;
        max-width: 800px;
        margin-left: 50px;
    }

    span {
        position: absolute;
        display: flex;
        justify-content: center;
        margin-top: 500px;
        margin-left: 50px;
        max-width: 800px;

        @media screen and (max-width: 768px) {
            margin-top: 1000px;
        }
     
    }

    h2 {
        display: flex;
        position: absolute;
        margin-top: 50px;
    }
   
   
`