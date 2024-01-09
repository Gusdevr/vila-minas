import React from 'react'
import Carrousel from '../../components/Carrousel'

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

import InstaPng from '../../assets/icons/instagram.png'

import Header from '../../components/Header'
import SliderGalery from '../../components/SliderGalery'
import Footer from '../../components/Footer'



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
  históricas próximas e também pacotes de duração maior com pernoites inclusas. <br />
  Aceitamos pagamentos em cartão de crédito e boleto. Dividimos em até 12x no cartão.</p> <br />
</SectionUs>

<SectionProduct>

<article className='art-cort'>
          <img className='img-cort'  src={IMG1PNG} alt="" />
        <h3>Ouro Preto</h3> 
 

        </article>

        <article className='art-persi'>
          <img src={IMG2PNG} alt="" />
         <h3>Inhotim</h3>
       

        </article>

        <article className='art-service'>
          <img  src={IMG3PNG} alt="" />
          <h3>Mariana</h3>
       

        </article>

        <div className='sec-pass'>
          <a href="/passeios"><button>Confira nosso roteiro completo</button></a>
          {/* <a href=""><button>Pacotes de Viagem</button></a> */}

        </div>

        <SectionAbout>
          <h1>Quem Somos</h1>

          <p>Bem-vindo à Villa Minas, sua agência de turismo receptivo dedicada a proporcionar 
            experiências inesquecíveis nas fascinantes cidades históricas de Minas Gerais. 
            Com um profundo amor pela cultura, história e beleza natural dessa região, a Vila Minas 
            tem o compromisso de tornar sua viagem uma jornada autêntica e enriquecedora.
            Na Villa Minas, nossa missão é conectar os viajantes com o rico patrimônio histórico 
            e cultural de Minas Gerais. Acreditamos que cada cidade tem uma história única a contar,
            proporcionando uma imersão profunda na riqueza cultural que permeia cada rua, igreja 
            e praça dessas cidades históricas. 
           </p>

           <div className='img-us'>
            <img src={CardiviaJpg} alt="" />
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
<h2>Nossos Destinos</h2>

<Carrousel />
</SectionSlider>

<SectionInsta>

  <article>
    <span>Confira nossa página no Instagram</span>
    <img style={{width: '345px'}} src={  InstaPng } alt="" />
    <button className='btn-insta'>Acessar</button>
  </article>

</SectionInsta>

    <Footer />
    </ContainerHome>
    
  )
}

export default Home