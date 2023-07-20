// Home.js

import React, { useState } from "react"
import Header from "../../components/Header"

import {
  ContainerHome,
  ContainerCriptoData,
  SectionMain,
  SectionSec,
  SectionThir,
  SectionFor,
  SectionSprt,
  ContainerFooter
} from "./styles"

import CryptoData from "../../components/Criptocoin"
import MainImagePng from "../../assets/img/mainimage.png"
import BannerPng from "../../assets/img/bannercripto.png"
import MainImageThirPng from "../../assets/img/mainimagethir.png"
import SafePng from "../../assets/img/cofre.png"
import EyesPng from "../../assets/img/olhos.png"
import KeyPng from "../../assets/img/chave.png"
import SecuryPng from "../../assets/img/protocol.png"

import AvatarPng from "../../assets/icons/avataricon.png"
import FaqPng from "../../assets/icons/faqicon.png"
import BlogPng from "../../assets/icons/blogicon.png"

import {  
  FaDiscord,
  FaTelegram,
  FaTiktok,
  FaFacebook,
  FaTwitter,
  FaInstagram

} from "react-icons/fa"

const Home = () => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  };

  return (
    <ContainerHome darkMode={darkMode}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <SectionMain darkMode={darkMode}>
        <article className="art-main">
          <h1>
            A revolução das criptos
            <br />
            começa aqui!
          </h1>
          <button className="btn-sub">Cadastre com E-mail ou Celular</button>
          <p>
            ou continue com <br />
            <button className="btn-goole">Google</button>
            <button className="btn-apple">Apple</button>
          </p>
        </article>
        <aside className="aside-post">
          <img width={"550px"} src={MainImagePng} />
          <div className="card">
            <p className="animated-text">compre bitcoin</p>
          </div>
          <div className="card-two">
            <p className="animated-text-two">TiLt Card</p>
          </div>
          <div className="card-three">
            <p className="animated-text-three">NFT</p>
          </div>
        </aside>
        <ContainerCriptoData>
          <CryptoData />
        </ContainerCriptoData>
      </SectionMain>

      <SectionSec darkMode={darkMode}>
        <a href="">
          <img className="banner-main" src={BannerPng} />
        </a>

        <article className="art-sec">
          <h1>como começar na tilt capital</h1>
          <iframe
            src="https://player.vimeo.com/video/842516801?badge=0&amp;
          autopause=0&amp;player_id=0&amp;app_id=58479"
            width="500"
            height="280"
            frameborder="0"
            allow="autoplay; fullscreen; 
          picture-in-picture"
            allowfullscreen
            title="2023-07-05 11-25-04"
          ></iframe>
          <h3>Como começar na TiLt Capital</h3>
          <p>
            Siga os passos do vídeo e descubra com abrir sua conta
            <br />
            na TiLt de maneira fácil e rápida.
          </p>
          <button>Abra sua conta</button>
        </article>
      </SectionSec>

      <SectionThir>
        <article className="art-thir">
          <h1>
            Construa sua própria carteira de
            <br />
            criptomoedas
          </h1>
          <span>Faça trade com estas estapas simples.</span>
          <h3>Verifique sua identidade</h3>
          <p>
            conclua o processo de identificação de identitidade para se proteger
          </p>
          <h3>Deposite Moeda fiduciária na sua conta</h3>
          <p>
            Adicione fundos à sua conta e comece a comprar criptomoedas.
            <br />
            Você pode comprar cripto com cartão de crédito, débito e <br />
            usando o TiLt P2P.
          </p>
          <h3>Comece a fazer trading</h3>
          <p>
            Tudo finalizado! Compre e venda criptomoedas, defina compras
            <br />
            recorrentes para seus investimentos e descobre o que a TiLt lhe
            oferecer.
          </p>
          <button>Comece Agora</button>
          <img width={"330px"} height={"630px"} src={MainImageThirPng} />
        </article>
      </SectionThir>
      
      <SectionFor>
        
        <h1>Confiança e segurança garantida na TiLt Capital</h1>
        <p>Aqui na TiLt, a segurança é tudo, prezamos pelas segurança<br />
            de nossos usuários com os mais modernos protocolos.
        </p>
        

        <img className="safe" width={"60px"} src={SafePng}/>
        <h3>Fundo de ativos seguros</h3>
        <span>Fundo de ativos seguros com smart safe,<br />
              que é um sistema de fundo emergencial.
        </span>

        <img className="eyes" width={"60px"} src={EyesPng}/>
        <h3>Controle de acesso</h3>
        <span>Para maior tranquilidade e comodidade,<br />
              com controle personalizado permitindo<br/>
              restrição a dispositivos específicos.
        </span>

        <img className="key" width={"60px"} src={KeyPng}/>
        <h3>Avançada criptografia de dados</h3>
        <span>Os dados de suas transações são protegidos<br />
              por criptografia de ponta a ponta, garantindo<br />
              acesso único.
        </span>

        <img className="secury-prot" src={SecuryPng}/>

   

      </SectionFor>

    
      <SectionSprt>
      <h1>Precisa de ajuda?</h1>

<article className="support-cstmr">

  <img width={"60px"} height={"60px"} src={AvatarPng}/>
  <h3>Suporte ao Cliente 24/7</h3>
  <p>Obtenha suporte via chat 24 horas por dia,<br/> 
     7 dias por semana, com nossos agentes de atendimento ao cliente.</p>
     <a href="/">Iniciar Chat</a>

</article>

 <article className="support-faq">

  <img width={"60px"} height={"60px"} src={FaqPng}/>
  <h3>Perguntas Frequentes (FAQ)</h3>
  <p>Consulte as perguntas frequentes (FAQ) para obter instruções<br/> 
     detalhadas sobre recursos específicos..</p>
     <a href="/">Ver mais</a>

</article>

<article className="support-faq">

<img width={"60px"} height={"60px"} src={BlogPng}/>
<h3>Blog</h3>
<p>Mantenha-se atualizado sobre as últimas<br/> 
notícias e comentários.</p>
<a href="/">Ver mais</a>

</article>

<div className="sec-final">
<h1>Explore o amanhã financeiro agora mesmo</h1>
<a href="/"> <button>Abra sua conta</button> </a>
</div>

      </SectionSprt>

      <ContainerFooter>
        <h3>Comunidade</h3>
        <div className="foot-icon">
        <FaDiscord size={"25px"} />
        <FaTelegram size={"25px"}/>
        <FaTiktok size={"25px"}/>
        <FaFacebook size={"25px"}/>
        <FaTwitter size={"25px"}/>
        <FaInstagram size={"25px"}/>
        </div>
        <hr />
        TiLt &copy; 2023
       

      </ContainerFooter>

    </ContainerHome>
  );
};

export default Home
