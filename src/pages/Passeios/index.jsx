import React from 'react'
import  { ContentTour } from './styles'

import Header from '../../components/Header'

import BHJpg from '../../assets/img/imgtour/destinoBeloHorizonte.jpg'
import CapJpg from '../../assets/img/imgtour/destinoCapitolio.jpg'
import GrutaJpg from '../../assets/img/imgtour/destinoGrutaMaquine.jpg'
import InhoJpg from '../../assets/img/imgtour/destinoInhotim.jpg'
import MariJpg from '../../assets/img/imgtour/destinoMariana.jpg'
import OuroJpg from '../../assets/img/imgtour/destinoOuroPreto.jpg'
import SabaJpg from '../../assets/img/imgtour/destinoSabara.jpg'
import SaoJpg from '../../assets/img/imgtour/destinoSaoJoaoDelRei.jpg'
import SantJpg from '../../assets/img/imgtour/destinoSatuarioCaraca.jpg'
import TiraJpg from '../../assets/img/imgtour/destinoTiradentes.png'

const Passeios = () => {
  return (
   <ContentTour>
    <Header />
    <h1>Passeios</h1>
    <p>Nossos Passeios incluem transporte da empresa, 
        Guia de Turismo e almoço típico da região.
        Aceitamos várias formas de pagamento incluindo 
        parcelamento no cartão de crédito</p>

        <div className='Gallery-tour'>
            <div className='article-tour'>
            <img src={ BHJpg } alt="" />
            <a href="">Belo Horizonte</a>
            </div>

            <div className='article-tour'>
            <img src={ CapJpg } alt="" />
            <a href="">Congonhas</a>
            </div>

            <div className='article-tour'>
            <img src={ GrutaJpg } alt="" />
            <a href="">Gruta Maquiné</a>
            </div>

            <div className='article-tour'>
            <img src={ InhoJpg } alt="" />
            <a href="">Inhotim</a>
            </div>

            <div className='article-tour'>
            <img src={ MariJpg } alt="" />
            <a href="">Mariana</a>
            </div>

            <div className='article-tour'>
            <img src={ OuroJpg } alt="" />
            <a href="">Ouro Preto</a>
            </div>

            <div className='article-tour'>
            <img src={ SabaJpg } alt="" />
            <a href="">Sabará</a>
            </div>

            <div className='article-tour'>
            <img src={ SaoJpg } alt="" />
            <a href="">São João Del Rei</a>
            </div>

            <div className='article-tour'>
            <img src={ TiraJpg } alt="" />
            <a href="">Tiradentes</a>
            </div>

            <div className='article-tour'>
            <img src={ SantJpg } alt="" />
            <a href="">Gruta Rei do Mato</a>
            </div>

          
        </div>
   </ContentTour>
  )
}

export default Passeios