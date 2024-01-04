import styled from "styled-components"

export const ContentForm = styled.div`



form {
    display: flex;
    justify-content: center;
    margin-top: 350px;
    margin-bottom: 200px;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 20px;
    }
   
    
}
   
.input-area {
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
     
       
    }
  

}

.input-area input {
    width: 500px;
    height: 40px;
    outline: none;
    
    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 350px;
       
    }
}

.input-area h3 {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    text-transform: uppercase;
    font-size: 25px;
}

.input-area textarea {
    margin-bottom: 40px;
    height: 200px;
    outline: none;
}

.input-area .btn-subm {
    width: 150px;
    height: 40px;
    border-radius: 5px;
    border: none;
    background-color: #1d3a5d;
    color: #fff;
    font-size: 18px;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        padding-left: 50px;
       
    }
   
}

`