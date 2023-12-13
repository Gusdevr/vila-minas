import React, { useState, useEffect } from 'react';
import { ContainerHeader } from './styles';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ContainerHeader>
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
    </ContainerHeader>
  );
};

export default Header;
