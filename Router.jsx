import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./src/pages/Home"
import QuemSomos from "./src/pages/QuemSomos"


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='quemsomos' element={<QuemSomos />} />
         
          
           

    
            </Routes>
        </BrowserRouter>
    )
}

export default Router