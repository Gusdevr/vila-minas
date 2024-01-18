import React, { useEffect } from 'react'
import Router from "../Router"
import { GlobalStyles } from "./styles/GlobalStyles"
import { initGA, logPageView } from '../analytics'


const App = () => {
  useEffect(() => {
    initGA();
    logPageView();
  }, []);

  return (
    <>
     <Router />
     <GlobalStyles />
    </>
  )
}

export default App
