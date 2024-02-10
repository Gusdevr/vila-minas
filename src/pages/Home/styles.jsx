import styled from "styled-components"

export const ContainerHome = styled.div`
 

   
`

export const SectionUs = styled.section`
  display: flex;
  justify-content: center;

    h1 {
        position: absolute;
        display: flex;
        justify-content: center;
        margin-top: -350px;
        font-size: 40px;
        color: #1d3a5d;
        font-weight: 700;
        margin-left: 35px;
    }

    p {
     
        display: flex;
        text-align: center;
        justify-content: center;
        margin-top: 220px;
        font-size: 20px;
        line-height: 140%;
        max-width: 380px;
    
       

    }

    @media screen and (max-width: 768px){
      width: 100%;
      flex-direction: column;
      margin-top: -450px;
      
    }

  
`

export const SectionProduct = styled.section`
        display: flex;
        width: 100vw;
        justify-content: center;
        flex-wrap: wrap;
        flex-direction: row;
        gap: 20px;
        justify-content: center;

        @media screen and (max-width: 1700px) {
         .btn-pass {
          margin-top: 450px;
         }
      
        }

        @media screen and (max-width: 1289px) {
            .btn-pass {
              margin-top: 400px;
            }

        }
        

       @media screen and (max-width: 768px){
      width: 100%;
      flex-direction: column;
      
    }
        
    article {
        display: flex;
        margin-top: 110px;
        padding: 10px 20px;
        justify-content: center;
        display: grid;

        @media screen and (max-width: 768px) {
          
        }

        img {
      width: 300px;
      height: 280px;
      border-radius: 8px;
      transition: transform 0.3s ease;
      margin-bottom: 5px;

      :hover {
        transform: scale(1.05);
      }
    }

    a {
      text-decoration: none;
    }

    h3 {
      margin-top: 8px;
      color: #fff;
      font-size: 20px;
      border: solid transparent black;
      height: 35px;
      background-color: #1d3a5d;
      padding-top: 6px;
      border-radius: 6px;
    
      text-align: center;
    
    }


    }

    

   
    .sec-pass {
      display: flex;
      position: absolute;
      margin-top: 1050px;
      gap: 10px;

      @media screen and (max-width: 1089px) {
        margin-top: 1500px;

    
      
        }

     


      button {
        width: 200px;
        height: 60px;
        border-radius: 5px;
        border: none;
        background-color: #1d3a5d;
        color: #fff;
        font-size: 18px;
        font-weight: 500;
        cursor: pointer;

        :hover {
          background-color: #ff914d;
          color: #1d3a5d;
          font-weight: 700;
        }
      }

      @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 100px;
        margin-top: 4400px;
        font-size: 20px;

      }
      
    }
`

export const SectionAbout = styled.section`
  display: flex;
  width: 100vw;
  background-color: #1d3a5d;
  margin-top: 1200px;
  padding-bottom: 80px;
  height: 600px;
  justify-content: center;
  position: absolute;
 

  .img-us {
    display: flex;
    justify-content: center;
    margin-left: 100px;
    
    
  }

  img {
    max-width: 450px;
    border-radius: 8px;
  }



  @media screen and (max-width: 1700px) {
        margin-top: 1650px;
      
        }

  @media screen and (max-width: 1289px) {
         margin-top: 1550px;
         
       

          .img-us {
            margin-left: 140px;
          }

         .img-us .cardiva{
          
         
         }

         img {
     
          display: flex;
          justify-content: center;
          padding: 30px;
          max-width: 320px;
          
          
         }
      
        }

      

 


  @media screen and (max-width: 1089px) {
         margin-top: 1650px;

       
        }

        @media screen and (max-width: 1700px) {
         .img-us .cardiva{
         
          display: none;
         }
      
        }


  @media screen and (max-width: 768px){
   
      flex-direction: column;
      margin-top: 5100px;
      justify-content: center;
      
      
      img {
        position: absolute;
        display: flex;
        justify-content: center;
        bottom: 5%;
      }

      .img-us {
        img {
          flex-direction: column;
          max-width: 350px;
          display: flex;
          justify-content: center;
          
        
        
         
        }

      

      
      }


      
    }

 

  h1 {
    background-color: #1d3a5d;
    color: #fff;
    display: flex;
    margin-top: 100px;
    margin-left: 475px;
    width: 100vw;
    font-size: 35px;

    @media screen and (max-width: 768px) {
      display: none;
    }
 

  }

  p {
    /* display: flex;
    margin-top: 200px;
    position: absolute;
    margin-right: 470px;
    max-width: 500px;
    color: #fff;
    line-height: 150%;
    font-size: 18px; */

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .img-us {
   img {
    display: flex;
    width: 550px;
    height: 500px;
    margin-right: 150px;
    margin-top: 60px;
    border-radius: 8px;
    
   }
  }
`

export const SectionServices =  styled.section`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1089px) {
         display: flex;
         justify-content: center;
      
        }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }


.card-services {

  @media screen and (max-width: 1089px) {
         gap: 50px;
      
        }
  gap: 100px;
  display: flex;
  justify-content: center;
  margin-top: 1000px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-left: 85px;
  }
  
}



h2 {
  margin-top: 900px;
  display: flex;
  position: absolute;
  justify-content: center;
  font-size: 40px;
  color: #1d3a5d;
  font-weight: 700;

  @media screen and (max-width: 768px) {
   margin-top: -750px;
   margin-left: 50px;
  }

}

.card-tour,
.card-trans,
.card-host,
.card-pack {
  width: 200px;
  height: 300px;
  /* border: 1px solid #ccc; */
  border: none;
  box-shadow: 2px 2px 2px 2px  rgba(0, 0, 0, 0.36);
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  text-align: center;


}

.card-tour h3,
.card-trans h3,
.card-host h3,
.card-pack h3 {
  color: #1d3a5d;
  font-size: 22px;

}

.card-tour img,
.card-trans img,
.card-host img,
.card-pack img {
  max-width: 100%;
  height: auto;
  
}

.card-tour p,
.card-trans p,
.card-host p,
.card-pack p {

  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 10px;
 
}



  
`

export const SectionSlider = styled.section`


@media screen and (max-width: 768px) {
  flex-direction: column;

 

}




`

export const SectionInsta = styled.section`
display: flex;
justify-content: space-around;
margin-top: 100px;
margin-bottom: 100px;

@media screen and (max-width: 768px) {
  flex-direction: column;
}

span {
  font-size: 25px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
   text-align: center;
   display: flex;
  }
}

img {
  display: flex;
  justify-content: center;
  /* position: absolute;
  left: 40.9%; */

  @media screen and (max-width: 768px) {
    flex-direction: column;
    display: flex;
    justify-content: center;
    margin-left: 20px;
  
  }
}

.btn-insta {
 margin-left: 110px;
 height: 50px;
 width: 150px;
 border-radius: 8px;
 border: none;
 background-color: #1d3a5d;
 color: #fff;
 font-size: 18px;
 cursor: pointer;

 @media screen and (max-width: 768px) {
  margin-left: 125px;
 }

}
  
`