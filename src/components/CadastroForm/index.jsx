import React, { useState } from 'react';
import { FormComponent, HeaderForm } from './styles';
import CapitalLoginPng from '../../assets/img/capitallog.png'

const CadastroForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setIsEmailSubmitted(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar os dados do formulário para o servidor ou realizar outras ações.
    // Por exemplo, você pode chamar uma função de cadastro aqui.
  };

  return (
    <FormComponent>
         <HeaderForm>
        <a href="/"><img width={'270px'} src={CapitalLoginPng} /></a>
        </HeaderForm>
    <div className='form-submit'>
   
      {!isEmailSubmitted ? (
        <form onSubmit={handleEmailSubmit}>
         <h1>Entrar</h1>
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
