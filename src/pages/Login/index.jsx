import React from 'react'
import { HeaderLogin, ContainerLogin } from './styles'
import CapitalLoginPng from '../../assets/img/capitallog.png'
import QRCodeGenerator from '../../components/QrGeneretor'

const Login = () => {
  return (
    <ContainerLogin>
        <HeaderLogin>
        <a href="/"><img width={'270px'} src={CapitalLoginPng} /></a>
        </HeaderLogin>

        <form>
            <h1>Entrar</h1>
            <h5>E-mail/Número de Telefone</h5>
            <input type='email'></input>
            <button className='btn-next'>Próximo</button>
            <span>ou</span>
            <button className='btn-google'>Continue com o Google</button>
            <button className='btn-apple'>Continue com a Apple</button>
          
          
            <QRCodeGenerator />
            <a href='/'>Criar uma conta TiLt</a>
        
         
        </form>

        <div className='footer'>
        &copy; 2023 TiLt Capital.

        </div>

       
    </ContainerLogin>

    
  )
}

export default Login