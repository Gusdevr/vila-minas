import React from 'react'

import { ContainerPromo } from './styles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Whatsap from '../../components/Whatsap'

const Promocao = () => {
  return (
    <ContainerPromo>
        <Header />
        <Whatsap />

        <div className='content-promo'>
        <h2>Promoções Especiais</h2>
        <h5>Conheça nossos decontos incríveis para 2024!</h5>

       <a target='blank' href="https://api.whatsapp.com/send?phone=31996031004&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os"><button>Fale conosco</button></a> 
       </div>

        <div className='footer-promo'>
        <Footer />
        </div>
    </ContainerPromo>
  )
}

export default Promocao