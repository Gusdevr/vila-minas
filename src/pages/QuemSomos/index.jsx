import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

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


        <div className='galery-us'>
        <h1>Quem Somos</h1>
        <img src={ UsBnanerPng } alt="" />
        <p>Somos uma Agência especializada em Receptivo Turístico e 
            atuamos também no Transporte Executivo através de Aluguel 
            de Veículos de Passeio, Vans, Micro-Ônibus e Ônibus. 
            Tudo isto com Conforto, Segurança e a Pontualidade que 
            só a Vila Minas Turismo traz para você.</p>
        </div>  

       <MapaEmbed />

       <Footer />
    </ContentUs>
  )
}

export default QuemSomos