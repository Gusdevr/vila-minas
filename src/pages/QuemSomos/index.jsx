import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Whatsap from '../../components/Whatsap'

import MapaEmbed from '../../components/MapaEmbed'

import UsBnanerPng from '../../assets/img/bannerminas.jpg'

import 
{  
    ContentUs, 
   
} 
from './styles'

const QuemSomos = () => {
  return (
    <ContentUs>
    
        <Header />
        <Whatsap />


        <div className='galery-us'>
        <h1>Quem Somos</h1>
        <img src={ UsBnanerPng } alt="" />
        <p>
          Somos especializados em receptivo turístico em Minas Gerais, 
          oferecendo translados, roteiros e passeios exclusivos ou compartilhados. 
          As experiências exclusivas vão além dos destinos populares, enquanto os passeios 
          compartilhados têm saídas diárias conforme a demanda. Destacamos nossos passeios 
          exclusivos com itinerários e roteiros nas cidades históricas, revelando os tesouros 
          ocultos de cada região. Em Minas Gerais, não faltam lugares para desfrutar de um bom 
          café com pão de queijo!</p>
        </div>  
                    
       <MapaEmbed />

       <Footer />
    </ContentUs>
  )
}

export default QuemSomos