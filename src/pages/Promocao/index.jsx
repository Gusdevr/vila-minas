import React from 'react'

import { ContainerPromo } from './styles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'


const Promocao = () => {
  return (
    <ContainerPromo>
        <Header />

        <div className='content-promo'>
        <h2>Promoções Especiais</h2>
        <h5>Conheça nossos decontos incríveis para 2024!</h5>

       <a href=""><button>Fale conosco</button></a> 
       </div>

        <div className='footer-promo'>
        <Footer />
        </div>
    </ContainerPromo>
  )
}

export default Promocao