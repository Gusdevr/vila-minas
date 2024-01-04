import styled from "styled-components"

export const ContentTour =  styled.div`
    display: flex;
    justify-content: center;

   


    span {
        margin-bottom: 200px;
        margin-left: 450px;
        font-size: 40px;
        position: absolute;
        color: red;
        font-weight: 700;
    }


    h1 {
        position: absolute;
        margin-top: 200px;
        font-size: 40px;
    }

    p {
        position: absolute;
        margin-top: 50px;
        max-width: 500px;
        line-height: 150%;
        text-align: center;
        font-size: 18px;

        @media screen and (max-width: 768px) {
       display: none;
          
            
        }
    }

    h2 {
        margin-bottom: 150px;
    }

    .Gallery-tour {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        gap: 20px;
        justify-content: center;
        margin-top: 400px;

        @media screen and (max-width: 768px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
          
            
        }

        img {
            width: 400px;
            border-radius: 8px;
            cursor: pointer;

            @media screen and (max-width: 768px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 300px;
            
        }

        }

        a {
            position: absolute;
            display: flex;
            text-decoration: none;
            /* color: #fff; */
            
        }

     
        
    }

    .modal {
        display: flex;
        justify-content: center;
        position: absolute;
        margin-top: 550px;
        background-color: #000000c1;
        color: #fff;
        width: 500px;
        height: 250px;
        line-height: 150%;
        border-radius: 5px;
        cursor: pointer;

        @media screen and (max-width: 768px) {
            display: none;
            
        }
    }

    .modal-content {
        display: flex;
        justify-content: center;
        align-items: center;

      
    }

   

   
`