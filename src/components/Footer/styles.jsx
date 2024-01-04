import styled from "styled-components"

export const ContainerFooter =  styled.footer`
    display: flex;
    width: 100vw;
    height: 500px;
    background-color: #1d3a5d;
    justify-content: space-around;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        height: 1100px;
        
    }

    .about-footer {
        color: #fff;
        display: flex;
        justify-content: center;

        .about-footer a {
            display: flex;
        }

       
        @media screen and (max-width: 768px) {
            flex-direction: column;
            margin-top: -120px;
        }

       
    }

   .article-footer {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    color: #fff;

    p {
        line-height: 150%;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        display: flex;
        text-align: center;
        line-height: 150%;
        position: absolute;
        margin-top: -220px;
        margin-left: 57px;

        img {
            display: flex;
            flex-direction: column;
            margin-left: 25px;
        }
       
    }

    h5 {
        font-size: 20px;
        margin-bottom: 10px;

    
       
    }

    .minas-flag {
            width: 200px;
            height: 200px;
        }
   }

   /* .social-footer {
    display: flex;
    justify-content: center;
    margin-top: 200px;
   } */



   .partner-img {
            margin-top: 100px;
            width: 300px;
            height: 300px;

            @media screen and (max-width: 768px) {
                margin-top: 50px;
                display: flex;
                flex-direction: column;
                margin-left: 50px;
            }
        }

        .copy-footer {
            display: flex;
            position: absolute;
            justify-content: center;
            text-align: center;
            margin-top: 450px;
            color: #fff;

            @media screen and (max-width: 768px) {
                display: flex;
                flex-direction: column;
                text-align: center;
                margin-top: 1000px;
                margin-left: 30px;
            }
            

        }

 
`