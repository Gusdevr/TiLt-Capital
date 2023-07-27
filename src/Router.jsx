import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Painel from "./pages/Painel"
import Login from "./pages/Login"
import Register from "./pages/Register"


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/painel' element={<Painel />} />
                <Route path='/login' element={<Login />} />
                <Route path='/cadastro' element={<Register />} />
            

             
            </Routes>
        </BrowserRouter>
    )
}

export default Router

