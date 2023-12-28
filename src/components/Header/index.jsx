import React, { useState, useEffect } from 'react'
import { ContainerHeader } from './styles'
import VilaPng from '../../assets/img/vilalogo.png'

import { FaChevronDown, FaTimes } from 'react-icons/fa'
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
          <li>Início</li>
          <li>Quem Somos</li>
          <li>Passeios</li>
          <li>Pacotes</li>
          <li>Promoção</li>
          <li>Galeria</li>
          <li>Contato</li>
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
            <li>Início</li>
          <li>Quem Somos</li>
          <li>Passeios</li>
          <li>Pacotes</li>
          <li>Promoção</li>
          <li>Galeria</li>
          <li>Contato</li>
            </a>
          
          </ul>
        )}
      </div>
    </ContainerHeader>
  )
}

export default Header
