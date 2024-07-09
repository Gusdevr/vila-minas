// components/CookieAlert.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const AlertContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #222;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
`;

const Button = styled.button`
  background-color: ${props => props.reject ? '#f44336' : '#4caf50'};
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-left: 10px;
`;

const CookieAlert = () => {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setShowAlert(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowAlert(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    setShowAlert(false);
  };

  if (!showAlert) return null;

  return (
    <AlertContainer>
      <span>Este site usa cookies para melhorar a experiência do usuário. Ao continuar a navegar, você concorda com o uso de cookies.</span>
      <div>
        <Button onClick={acceptCookies}>Aceitar</Button>
        <Button reject onClick={rejectCookies}>Rejeitar</Button>
      </div>
    </AlertContainer>
  );
};

export default CookieAlert;
