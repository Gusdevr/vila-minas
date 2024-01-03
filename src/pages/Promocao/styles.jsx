import styled from "styled-components";

export const ContainerPromo = styled.div`
    display: flex;
    justify-content: center;

    .content-promo {
     
        width: 100vw;
        height: 250px;
        margin-top: 200px;
        display: flex;
        justify-content: center;
        color: #1c3a5d;
        flex-direction: column;
        align-items: center;
        text-align: center;
        line-height: 150%;
        gap: 20px;

        h2 {
            font-size: 40px;
        }

        h5 {
            font-size: 20px;
        }

        button {
            margin-top: 50px;
            width: 150px;
            height: 50px;
            border-radius: 8px;
            border: none;
            background-color: #1c3a5d;
            color: #fff;
            font-size: 18px;
            font-weight: 700;
            cursor: pointer;
        }

    }

    .footer-promo {
        position: absolute;
        margin-top: 800px;
    }
`