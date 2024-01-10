import styled from "styled-components"

export const ContentUs = styled.div`


.galery-us {
   
    display: flex;
    justify-content: center;

    @media screen and (max-width: 768px) {
        text-align: center;
       

        img {
            
            width: 300px;
            
        }
    }
   
    h1 {
        position: absolute;
        display: flex;
        position: absolute;
        justify-content: space-between;
        color: red;
        margin-top: 200px;
        
       
    }

    p {
        display: flex;
        justify-content: center;
        max-width: 600px;
        position: absolute;
        margin-top: 250px;
        font-size: 18px;
        text-align: center;
        line-height: 150%;

        
    }

    img {
        max-width: 500px;
        margin-top: 520px;
        border-radius: 8px;
        margin-bottom: 50px;

        @media screen and (max-width: 768px) {
            padding-top: 20px;
            margin-bottom: 20px;
        }
    }
}
    
`

