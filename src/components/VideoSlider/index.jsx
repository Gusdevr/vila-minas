import React from 'react'
import { ContainerVideo } from './styles'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css'; 





const VideoSlider = () => {
  return (
    <ContainerVideo>
         <AwesomeSlider>
      <div></div>
      <div>Seu Conteúdo do Slide 2</div>
      <div>Seu Conteúdo do Slide 3</div>
    </AwesomeSlider>

    </ContainerVideo>
  )
}

export default VideoSlider