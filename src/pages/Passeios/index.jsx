import React, { useState } from 'react';
import { ContentTour } from './styles';
import Header from '../../components/Header';

import BHJpg from '../../assets/img/imgtour/destinoBeloHorizonte.jpg';
import CapJpg from '../../assets/img/imgtour/destinoCapitolio.jpg';
import GrutaJpg from '../../assets/img/imgtour/destinoGrutaMaquine.jpg';
import InhoJpg from '../../assets/img/imgtour/destinoInhotim.jpg';
import MariJpg from '../../assets/img/imgtour/destinoMariana.jpg';
import OuroJpg from '../../assets/img/imgtour/destinoOuroPreto.jpg';
import SabaJpg from '../../assets/img/imgtour/destinoSabara.jpg';
import SaoJpg from '../../assets/img/imgtour/destinoSaoJoaoDelRei.jpg';
import SantJpg from '../../assets/img/imgtour/destinoSatuarioCaraca.jpg';
import TiraJpg from '../../assets/img/imgtour/destinoTiradentes.png';

const Passeios = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);

  const handleOpenModal = (tour) => {
    setSelectedTour(tour);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedTour(null);
    setShowModal(false);
  };

  const tours = [
    { img: BHJpg, name: 'Belo Horizonte', description: 
      'É a primeira cidade do Brasil a ser planejada e projetada.' + 
      'A capital mineira tem seus encantos no conjunto arquitetônico da Pampulha' + 
      ' (Obra de Oscar Niemayer), nos seus bares, restaurantes, casas noturnas.' + 
      'É um povo bastante hospitaleiro e gentil.Você irá se sentir em casa.' 
  
  
  },
    { img: CapJpg, name: 'Congonhas', description: 'Situada a 70 km de Belo Horizonte,' + 
    'com expressivo conjunto de riqueza barroca do artista Aleijadinho.' + 
    'No adro do Santuário do Bom Jesus de Matozinhos, Aleijadinho esculpiu em pedra sabão as famosas imagens de doze' + 
    'profetas em tamanho real que são visitadas anualmente por milhares de turistas do Brasil e de todo Mundo' },
    { img: GrutaJpg, name: 'Gruta Maquiné', description: 'Uma viagem subterrânea em meio às belezas naturais' + 
    'garantida para quem visita a Gruta do Maquiné, localizada na cidade de Cordisburgo, a 120 km de Belo Horizonte.' + 
    'Possui sete salões com belíssimas formas arquitetônicas, esculpidas pelo trabalho da água durante milênios.' },
    { img: InhoJpg, name: 'Inhotim', description: 'O Instituto Inhotim é o maior centro de arte contemporânea a céu' + 
    'aberto do mundo, cercado por um majestoso jardim botânico. Caminhar por sua enorme área, que ostenta uma das' + 
    'maiores coleções de espécies vivas entre todos os jardins botânicos do país, é uma experiência única.' },
    { img: MariJpg, name: 'Mariana', description: 'foi a primeira vila, e capital do estado de Minas Gerais.' + 
    'No século xvii, foi uma das maiores cidades produtoras de Ouro para o Império português. Tornou se a primeira' + 
    'capital mineira por participar de uma disputa onde a vila que arrecadasse maior quantidade de ouro seria elevada' + 
    'a cidade sendo a capital da então capitania de Minas Gerais.' },
    { img: OuroJpg, name: 'Ouro Preto', description: 'Situada 99 km de Belo Horizonte é famoso por sua arquitetura colonial,' + 
    'o município foi criado em 1711, por meio da fusão de diversos arraias, fundadora por bandeirantes. Ouro Preto localiza' + 
    'se em uma das principais áreas do ciclo do Ouro, e foi o primeiro sítio brasileiro considerado Patrimônio Mundial da Unesco.' },
    { img: SabaJpg, name: 'Sabará', description: '  Sabará foi o primeiro povoamento de Minas Gerais e é terra de gente' + 
    'tranquila e acolhedora. A cidade recebe pessoas que pretendem renovar sua fé em igrejas do século XVIII ou para aproveitar' + 
    'a tranquilidade e os famosos festivais gastronômicos. ' },
    { img: SaoJpg, name: 'São João Del Rei', description: 'A cidade encanta pelas suas belíssimas paisagens arquitetônicas' + 
    'e naturais, pelo charmoso centro histórico, os passeios turísticos que atraem milhares de visitantes e, principalmente,' + 
    ' pelo povo acolhedor.' },
    { img: TiraJpg, name: 'Tiradentes', description: 'O colorido dos casarões coloniais de Tiradentes, em Minas Gerais,' + 
    'inebria os visitantes que chegam à região. Aos pés da Serra de São José, a cidade preserva a história e arquitetura' + 
    'do século XVIII em suas construções, igrejas e cenários bucólicos' },
    { img: SantJpg, name: 'Gruta Rei do Mato', description: 'Está localizada na cidade de Sete Lagoas MG' + 
    'e juntamente com as Gruta da Lapinha e Gruta do Maquiné faz parte da Rota das Grutas Peter Lund.' + 
    'A Gruta Rei do Mato possui 998 metros de extensão, ' + 
    'ela é considerada uma das mais belas grutas do país e considerada uma das 50 maiores cavernas de Minas Gerais.' },
  ];

  return (
    <ContentTour>
      <Header />
      <h1>Passeios</h1>
      <p>Nossos Passeios incluem transporte da empresa,
        Guia de Turismo e almoço típico da região.
        Aceitamos várias formas de pagamento incluindo
        parcelamento no cartão de crédito</p>

      <div className='Gallery-tour'>
        {tours.map((tour, index) => (
          <div className='article-tour' key={index} onClick={() => handleOpenModal(tour)}>
            <img src={tour.img} alt={tour.name} />
            <h5>{tour.name}</h5>
          </div>
        ))}
      </div>

      {showModal && selectedTour && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>{selectedTour.name}</h2>
            <p>{selectedTour.description}</p>
            {/* Add other modal content as needed */}
          </div>
        </div>
      )}
    </ContentTour>
  );
};

export default Passeios;
