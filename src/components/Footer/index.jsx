import React from 'react'

import { ContainerFooter } from './styles'

import VilaPngBranco from '../../assets/img/Villaminaslogob.png'
import ParceirosJpg from '../../assets/img/parceiross.jpg'
import MinasLogPng from '../../assets/img/minas-flag.png'
import { Link } from 'react-router-dom'

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

<h5>Villa Minas Turismo e Receptivo</h5>
<p>Rua do divino, 170 <br /> 
São Benedito - Santa Luzia MG
</p>
<span>contato@villaminas.com.br</span>

<img className='minas-flag' src={MinasLogPng} alt="" />
</div>



<div className='partiner-footer'>
<img className='partner-img' src={ParceirosJpg} alt="" />

</div>

   
  

<div className='copy-footer'>
<p>&copy;2023 Villa Minas - Todos direitos reservados.</p>
<Link to="/politicas" target="_blank"><span>Políticas de Privacidade</span></Link>
</div>

    </ContainerFooter>
  )
}

export default Footer