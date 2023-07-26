import React from 'react'
import CriptoMarketData from '../../components/CriptoMarketData'
import CryptoChart from '../../components/CriptoChart'
import Header_Login from '../../components/Header_Login'
import { 
  ContainerLogin, 
  SectionMain, 
  MenuSide, 
  UserHeader,
  MenuSideRight
} from './styles'

import { FcLinux } from "react-icons/fc"
import { FaEyeSlash } from "react-icons/fa"
import Carrousel from '../../components/Carrousel'



const Painel = () => {
  return (
   <ContainerLogin>
    <Header_Login />

    <SectionMain>

    <div className="vertical-line"></div>
    

    <MenuSide>
      <nav>
        <ul>
        <a href="#"><li><button>Controle</button></li></a>
        <a href="#"><li><button>Segurança</button></li></a>
        <a href="#"><li><button>Identificação</button></li></a>
        <a href="#"><li><button>Configurações</button></li></a>
        </ul>
      </nav>

    </MenuSide>

    <UserHeader>

    <FcLinux size={'50px'} />
      <h3>User</h3>
      <h5>ID User</h5>
      <h5>User Level</h5>
      <h5>Type User</h5>



    </UserHeader>
    <div className='view-wallet'>
    <h2>Saldo Estimado </h2> 
    <FaEyeSlash className='menu-eye' />
    
    </div> 

    <div className='wallet-btn'>

    <button className='btn-dep'>Depositar</button>
    <button className='btn-cash'>Sacar</button>
    <button className='btn-cripto'>Comprar Criptomoedas</button>
 
    </div>

    <CriptoMarketData />

    <CryptoChart />


    <MenuSideRight>
      <div className='container-search'>
      <h1>Explorar</h1>
     
  <input type="text" class="input-field" placeholder="Moeda, Recursos" />
  <span class="input-icon">&#128269;</span>

  </div>

    <div className='slider-sider'>
  <h1>Para você</h1>
  <Carrousel />
  </div>




    </MenuSideRight>
    


    </SectionMain>

   </ContainerLogin>
  )
}

export default Painel