import React, { useState } from 'react';
import { FormComponent, HeaderForm } from './styles';
import CapitalLoginPng from '../../assets/img/capitallog.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const CadastroForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  const [showAlert, setShowAlert] = useState(false)
  const navigate = useNavigate()

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setIsEmailSubmitted(true);
  };

  const handleFormSubmit =  async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/users', {
        email,
        password,
      });
  
      console.log(response.data.message); // Exibe a mensagem de sucesso do servidor
      setShowAlert(true)
      setTimeout(()=> {
        navigate('/')
      },alert('Cadastro efetuado com sucesso!'), 2000)
    } catch (error) {
      console.error(error.response.data.message); // Exibe a mensagem de erro do servidor
    }
  };


  
  return (
    <FormComponent>
         <HeaderForm>
        <a href="/"><img width={'270px'} src={CapitalLoginPng} /></a>
        </HeaderForm>
    <div className='form-submit'>
   
      {!isEmailSubmitted ? (
        <form onSubmit={handleEmailSubmit}>
         <h1>Bem vindo a TiLt!</h1>
            <h5>E-mail/Número de Telefone</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <button type="submit">Próximo</button>
          <span>ou</span>
          <button className='btn-google'>Continue com o Google</button>
          <button className='btn-apple'>Continue com a Apple</button>
        </form>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <h1>Insira sua Senha</h1>
          <input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Cadastrar</button>
        </form>
      )}
    </div>

    <div className='footer-component'>
        &copy; 2023 TiLt Capital.

        </div>

    </FormComponent>
  );
};

export default CadastroForm;
