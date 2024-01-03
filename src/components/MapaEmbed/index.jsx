// MapaEmbed.js
import React from 'react';

const MapaEmbed = () => {
  return (
    <iframe
      title="Localização no Google Maps"
      width="100%"
      height="450"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3754.1357981447622!2d-43.941605123816984!3d-19.79183883402297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa68586a03ffb0b%3A0xbbc3ba1273924830!2sR.%20do%20Divino%2C%20170%20-%20S%C3%A3o%20Benedito%2C%20Santa%20Luzia%20-%20MG%2C%2033125-260!5e0!3m2!1spt-BR!2sbr!4v1704247274047!5m2!1spt-BR!2sbr"
      frameBorder="0"
      style={{ border: '0' }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default MapaEmbed;
