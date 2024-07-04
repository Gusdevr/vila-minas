import React from 'react'
import Carrousel from '../../components/Carrousel'
import { Link } from 'react-router-dom'

import CookieAlert from '../../components/AlertCookie'

import 
{ 
  ContainerHome, 
  SectionUs,
  SectionProduct,
  SectionAbout,
  SectionServices,
  SectionSlider,
  SectionInsta
} 
from './styles'

import IMG1PNG from '../../assets/img/igreja-ouro-preto.jpg'
import IMG2PNG from '../../assets/img/IMG_0314.jpg'
import IMG3PNG from '../../assets/img/Mariana-MG.jpg'
import CardiviaJpg from '../../assets/img/bannerminas.jpg'

import HostPng from '../../assets/img/iconservices/hospedagem.png'
import PackPng from '../../assets/img/iconservices/pacotes.png'
import TourPng from '../../assets/img/iconservices/passeios.png'
import TransPng from '../../assets/img/iconservices/van.png'
import WhatsapButtonPng from '../../components/Whatsap'

import DestImg from '../../assets/img/iconservices/Destinos.jpg'
import ServiImg from '../../assets/img/iconservices/Serviccos.jpg'
import ValImg from '../../assets/img/iconservices/Valores.jpg'

import DestImg2 from '../../assets/img/iconservices/Destinos2.jpg'
import ServiImg2 from '../../assets/img/iconservices/Serviccos2.jpg'
import ValImg2 from '../../assets/img/iconservices/Valores2.jpg'


import InstaPng from '../../assets/icons/instagram.png'

import Header from '../../components/Header'
import SliderGalery from '../../components/SliderGalery'
import Footer from '../../components/Footer'


import BHJpg from '../../assets/img/imgtour/destinoBeloHorizonte.jpg';
import CapJpg from '../../assets/img/imgtour/destinoCapitolio.jpg';
import GrutaJpg from '../../assets/img/imgtour/destinoGrutaMaquine.jpg';
import InhoJpg from '../../assets/img/imgtour/destinoInhotim.jpg';
import MariJpg from '../../assets/img/imgtour/destinoMariana.jpg';
import OuroJpg from '../../assets/img/imgtour/destinoOuroPreto.jpg';
import SabaJpg from '../../assets/img/imgtour/destinoSabara.jpg';
import SaoJpg from '../../assets/img/imgtour/destinoSaoJoaoDelRei.jpg';
import TiraJpg from '../../assets/img/imgtour/destinoTiradentes.png';
import GrutaMatoPng from '../../assets/img/grutarei-mato.png'
import TransferJpg from '../../assets/img/Transfer.jpg'


const Home = () => {
  return (
    <ContainerHome>
    <Header/>
    <WhatsapButtonPng />

    <div>
        <SliderGalery />
    </div>
<SectionUs>
<h1>Nossos Roteiros</h1>
<p>Oferecemos passeios diários com transporte e guia de turismo saindo de Belo Horizonte para cidades <br />
  históricas próximas e também tour em cenários com beleza natural. <br />
  Os melhores e mais belo destinos de Minas como Ouro Preto e Mariana com comodidade, conforto e acompanhamento.<br />
  Aceitamos pagamentos em cartão de crédito e boleto. Dividimos em até 12x no cartão.</p> <br />
</SectionUs>

<SectionProduct>

<article className='art-cort'>
          <img className='img-cort'  src={OuroJpg} alt="" />
        <h3>Ouro Preto</h3> 
 

        </article>

        <article className='art-persi'>
          <img src={BHJpg } alt="" />
         <h3>Belo Horizonte</h3>
       </article>

       <article className='art-persi'>
          <img src={CapJpg} alt="" />
         <h3>Congonhas</h3>
       </article>


       <article className='art-persi'>
          <img src={InhoJpg} alt="" />
         <h3>Inhotim</h3>
       </article>

       <article className='art-persi'>
          <img src={MariJpg} alt="" />
         <h3>Mariana</h3>
       </article>

        
        <article className='art-service'>
          <img  src={SabaJpg} alt="" />
          <h3>Sabará</h3>
       </article>

       <article className='art-service'>
          <img  src={SaoJpg} alt="" />
          <h3>São João Del Rei</h3>
       </article>


       <article className='art-service'>
          <img  src={TiraJpg} alt="" />
          <h3>Tiradentes</h3>
       </article>

       <article className='art-service'>
          <img  src={GrutaMatoPng} alt="" />
          <h3>Gruta Maquiné/Rei do Mato</h3>
       </article>



        <div className='sec-pass'>
          <Link to="/passeios"><button className='btn-pass'>Confira nosso roteiro completo</button></Link>
          {/* <a href=""><button>Pacotes de Viagem</button></a> */}

        </div>

        <SectionAbout>
          {/* <h1>Nossa Empresa</h1> */}

          {/* <p>Bem-vindo à Villa Minas, sua agência de turismo receptivo dedicada a proporcionar 
            experiências inesquecíveis nas fascinantes cidades históricas de Minas Gerais. 
            Com um profundo amor pela cultura, história e beleza natural dessa região, a Vila Minas 
            tem o compromisso de tornar sua viagem uma jornada autêntica e enriquecedora.
            Na Villa Minas, nossa missão é conectar os viajantes com o rico patrimônio histórico 
            e cultural de Minas Gerais. Acreditamos que cada cidade tem uma história única a contar,
            proporcionando uma imersão profunda na riqueza cultural que permeia cada rua, igreja 
            e praça dessas cidades históricas. 
           </p> */}

           <div className='img-us'>
           <img className='precos' src={ValImg2} alt="" />
           <img className='precos' src={DestImg2} alt="" />    
           <img className='cardiva' src={ServiImg2} alt="" />
          
          
        
      
        
           </div>

        </SectionAbout>

</SectionProduct>





<SectionServices>

<h2>Nossos Serviços</h2>
 
 <div className='card-services'>
  <div className='card-tour'>
    <h3>Passeios</h3>
    <img width={'140px'} src={ TourPng } alt="" />
    <p>  Passeios diários com inclusão de transporte 
        e acompanhamento de guia turístico.</p>

  </div>

  <div className='card-trans'>
    <h3>Transportes</h3>
    <img style={{marginTop: '20px'}} src={ TransPng } alt="" />
    <p>
        Transporte fornecido pela empresa, 
        com motorista e guia de turismo inclusos.

        </p>
  </div>

  <div className='card-host'>
    <h3>Hospedagens</h3>
    <img style={{marginTop: '20px'}}  src={ HostPng } alt="" />
    <p>
      Colaboração com estabelecimentos de hospedagem 
      em Ouro Preto, Tiradentes, Mariana e Inhotim.

    </p>
    </div>

    <div className='card-pack'>
      <h3>Pacotes</h3>
      <img style={{marginTop: '20px'}}  width={'140px'}  src={ PackPng } alt="" />
      <p>
      
      Ofertas de pacotes para destinos como 
      São João Del Rei, Serra do cipó e Serra da Piedade.

        </p>

    </div>
    </div>
 


</SectionServices>



<SectionSlider>

</SectionSlider>

<SectionInsta>

  <article>
    <span>Confira nossa página no Instagram</span>
   <a href="https://www.instagram.com/villaminasturismo/"> <img style={{width: '345px'}} src={  InstaPng } alt="" /> </a>
   <a href="https://www.instagram.com/villaminasturismo/"> <button className='btn-insta'>Acessar</button> </a>
  </article>

</SectionInsta>

    <Footer />
    <CookieAlert/>
    </ContainerHome>
    
  )
}

export default Home