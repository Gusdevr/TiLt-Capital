import React, { useState } from 'react'
import { HeaderLogin, ContainerLogin } from './styles'
import CapitalLoginPng from '../../assets/img/capitallog.png'
import QRCodeGenerator from '../../components/QrGeneretor'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // Novo estado para a senha
  const navigate = useNavigate(); 


  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:3000/api/login', {
        email,
        password,
      });
  
      console.log(response.data.message); // Exibe a mensagem de sucesso do servidor
      navigate('/painel')
    } catch (error) {
      console.error(error.response.data.message); // Exibe a mensagem de erro do servidor
    }
  };
  
  return (
    <ContainerLogin>
      <HeaderLogin>
        <a href="/"><img width={'270px'} src={CapitalLoginPng} /></a>
      </HeaderLogin>

      <form onSubmit={handleFormSubmit}>  
        <h1>Entrar</h1>
        <h5>E-mail/Número de Telefone</h5>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        {/* Novo campo para inserir senha */}
        <h5>Senha</h5>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

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

export default Login;
