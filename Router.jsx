import { BrowserRouter, Route, Routes } from "react-router-dom"
import React from 'react'
import Home from "./src/pages/Home"
import QuemSomos from "./src/pages/QuemSomos"
import Passeios from "./src/pages/Passeios"
import Promocao from "./src/pages/Promocao"
import Contato from "./src/pages/Contato"
import Galeria from "./src/pages/Galeria"
import Politicas from "./src/pages/Politicas"
import ReturnPolicy from "./src/components/ReturnPolicy"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/quemsomos' element={<QuemSomos />} />
                <Route path='/passeios' element={<Passeios />} />
                <Route path='/promocao' element={<Promocao />} />
                <Route path='/contato' element={<Contato />} />
                <Route path='/galeria' element={<Galeria />} />
                <Route path='/politicas' element={<Politicas />} />
                <Route path='/devolucoes' element={<ReturnPolicy />} />
            
            </Routes>
        </BrowserRouter>
    )
}

export default Router