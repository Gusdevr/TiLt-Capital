// Home.js

import React, { useState } from "react";
import Header from "../../components/Header";
import {
  ContainerHome,
  ContainerCriptoData,
  SectionMain,
  SectionSec,
} from "./styles";
import CryptoData from "../../components/Criptocoin";
import MainImagePng from "../../assets/img/mainimage.png";
import BannerPng from "../../assets/img/bannercripto.png";



const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
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
          <iframe src="https://player.vimeo.com/video/842516801?badge=0&amp;
          autopause=0&amp;player_id=0&amp;app_id=58479" 
          width="500" height="280" frameborder="0" allow="autoplay; fullscreen; 
          picture-in-picture" allowfullscreen title="2023-07-05 11-25-04">
           
          </iframe>
          <h3>Como começar na tilt capital</h3>
          <p>Siga os passos do vídeo e descubra com abrir sua conta<br />
              na TiLt de maneira fácil e rápida.
          </p>
          <button>Abra sua conta</button>

        </article>
      </SectionSec>
    </ContainerHome>
  );
};

export default Home;
