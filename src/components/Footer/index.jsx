import React from 'react'

import { ContainerFooter } from './styles'

import VilaPngBranco from '../../assets/img/Villaminaslogob.png'
import ParceirosJpg from '../../assets/img/parceiross.jpg'
import MinasLogPng from '../../assets/img/minas-flag.png'


import 
{ FaSquareFacebook,
  FaSquareInstagram
} 
from "react-icons/fa6"

const Footer = () => {
  return (
    <ContainerFooter>

   
    <div className='about-footer'>
        <img src={VilaPngBranco} alt="" />


    </div>

    <div className='article-footer'>

<h5>Vila Minas Turismo e Receptivo</h5>
<p>Rua Maria das Graças, 159 - SL 50,<br /> 
Santa Luzia, Belo Horizonte MG
</p>
<span>contato@vilaminas.com.br</span>

<img className='minas-flag' src={MinasLogPng} alt="" />
</div>



<div className='partiner-footer'>
<img className='partner-img' src={ParceirosJpg} alt="" />

</div>

   
  

<div className='copy-footer'>
<p>&copy;2023 Vila Minas - Todos direitos reservados.</p>
</div>
    </ContainerFooter>
  )
}

export default Footer