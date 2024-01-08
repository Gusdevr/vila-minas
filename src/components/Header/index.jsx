import React, { useState, useEffect } from 'react'
import { ContainerHeader } from './styles'
import VilaPng from '../../assets/img/vilalogo.png'
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa'
import { CgMenuGridR } from 'react-icons/cg'

import 
{ FaSquareFacebook,
  FaSquareInstagram
} 
from "react-icons/fa6"


const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuGridROpen, setIsMenuGridROpen] = useState(false)

  const toggleMenuGridR = () => {
    setIsMenuGridROpen(!isMenuGridROpen)
    setIsAnyDropdownOpen(false)
    closeAllDropdowns()
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    };

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ContainerHeader>
      <a href="/"> <img width={'260px'} src={ VilaPng } alt="" /> </a>
      <nav>
        <ul>
          <Link to="/"><li>Início</li></Link>
          <Link to="/quemsomos"><li>Quem Somos</li></Link>
          <a href="/passeios"><li>Passeios</li></a>
          {/* <li>Pacotes</li> */}
          <a href="/promocao"><li>Promoção</li></a>
          {/* <a href="galeria"><li>Galeria</li></a> */}
         <a href="/contato"><li>Contato</li></a>
        </ul>
      </nav>
      <div className='social-icons'>
        <a href=""><FaSquareInstagram size={'30px'} style={{
          display: 'flex', alignItems: 'center', color: 'black'
          }} /></a>
          
      <a href=""><FaSquareFacebook size={'30px'} style={{
        display: 'flex', alignItems: 'center', color: 'black'
        
        }} /></a>
      </div>

      <div className="menu-responsi">
        {isMenuGridROpen ? (
          <FaTimes
            className="menu-grid"
            size={'52px'}
            style={{
              bottom: '65%',
              right: '8%',
              cursor: 'pointer',
              position: 'absolute',
              color: '#7a0d25',
            }}
            onClick={toggleMenuGridR}
          />
        ) : (
          <CgMenuGridR
            className="menu-grid"
            size={'52px'}
            style={{
              bottom: '35%',
              right: '75%',
              cursor: 'pointer',
              position: 'absolute',
              color: '#7a0d25',
            }}
            onClick={toggleMenuGridR}
          />
        )}
        {isMenuGridROpen && (
          <ul className="dropdown-responsi">
            <a href="/">
            <a href="/"><li>Início</li></a>
          <a href="quemsomos"><li>Quem Somos</li></a>
          <a href="passeios"><li>Passeios</li></a>
          {/* <li>Pacotes</li> */}
          <a href="promocao"><li>Promoção</li></a>
          {/* <a href=""><li>Galeria</li></a> */}
          <a href="contato"><li>Contato</li></a>
            </a>
          
          </ul>
        )}
      </div>
    </ContainerHeader>
  )
}

export default Header
