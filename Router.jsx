import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./src/pages/Home"
import QuemSomos from "./src/pages/QuemSomos"
import Passeios from "./src/pages/Passeios"
import Promocao from "./src/pages/Promocao"
import Contato from "./src/pages/Contato"
import Galeria from "./src/pages/Galeria"

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='quemsomos' element={<QuemSomos />} />
                <Route path='passeios' element={<Passeios />} />
                <Route path='promocao' element={<Promocao />} />
                <Route path='contato' element={<Contato />} />
                <Route path='galeria' element={<Galeria />} />
            
            </Routes>
        </BrowserRouter>
    )
}

export default Router