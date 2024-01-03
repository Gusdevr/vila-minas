import styled from "styled-components"

export const ContentTour =  styled.div`
    display: flex;
    justify-content: center;


    h1 {
        position: absolute;
        margin-top: 200px;
    }

    p {
        position: absolute;
        margin-top: 250px;
        max-width: 500px;
        line-height: 150%;
        text-align: center;
        font-size: 18px;
    }

    .Gallery-tour {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        gap: 20px;
        justify-content: center;
        margin-top: 400px;

        img {
            width: 400px;
            border-radius: 8px;
        }

        a {
            position: absolute;
            display: flex;
            text-decoration: none;
            /* color: #fff; */
            
        }

        button {
            position: absolute;
            margin-right: 100px;
        }
        
    }

   
`