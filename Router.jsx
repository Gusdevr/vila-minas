import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./src/pages/Home"
import QuemSomos from "./src/pages/QuemSomos"
import Passeios from "./src/pages/Passeios"


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='quemsomos' element={<QuemSomos />} />
                <Route path='passeios' element={<Passeios />} />
         
          
           

    
            </Routes>
        </BrowserRouter>
    )
}

export default Router