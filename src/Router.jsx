import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Painel from "./pages/Painel"

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/painel' element={<Painel />} />
             
            </Routes>
        </BrowserRouter>
    )
}

export default Router

