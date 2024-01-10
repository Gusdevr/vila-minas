import React, { useState, useEffect } from 'react'
import { ContainerHeader } from './styles'
import VilaPng from '../../assets/img/vilalogo.png'
import { Link } from 'react-router-dom'
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
          <Link to="/passeios"><li>Passeios</li></Link>
          {/* <li>Pacotes</li> */}
          <Link to="/promocao"><li>Promoção</li></Link>
          {/* <a href="galeria"><li>Galeria</li></a> */}
         <Link to="/contato"><li>Contato</li></Link>
        </ul>
      </nav>
      <div className='social-icons'>
        <Link to="https://www.instagram.com/villaminasturismo?igsh=MWJnbzBrdmp5azVjYQ%3D%3D&utm_source=qr">
          <FaSquareInstagram size={'30px'} style={{
          display: 'flex', alignItems: 'center', color: 'black'
          }} /></Link>
          
      <Link to=""><FaSquareFacebook size={'30px'} style={{
        display: 'flex', alignItems: 'center', color: 'black'
        
        }} /></Link>
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
              color: '#1d3a5d',
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
              color: '#1d3a5d',
            }}
            onClick={toggleMenuGridR}
          />
        )}
        {isMenuGridROpen && (
          <ul className="dropdown-responsi">
            <Link to="/">
            <Link to="/"><li>Início</li></Link>
          <Link to="/quemsomos"><li>Quem Somos</li></Link>
          <Link to="/passeios"><li>Passeios</li></Link>
          {/* <li>Pacotes</li> */}
          <Link to="/promocao"><li>Promoção</li></Link>
          {/* <a href=""><li>Galeria</li></a> */}
          <Link to="/contato"><li>Contato</li></Link>
            </Link>
          
          </ul>
        )}
      </div>
    </ContainerHeader>
  )
}

export default Header
