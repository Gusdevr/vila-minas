import React from 'react'
import { WhatsContainer } from './styles'
import WhatsPng from '../../assets/icons/btnwhatss.png'

const Whatsap = () => {
  return (
    <WhatsContainer>
    <a
      href="https://api.whatsapp.com/send?phone=31994752630&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os"
      target="_blank"
      rel="noopener noreferrer"
      id="whatsapp-button"
    >
      <img
        src={ WhatsPng }
        alt="WhatsApp"
        width="280"
      />
    </a>
    </WhatsContainer>
  )
}

export default Whatsap