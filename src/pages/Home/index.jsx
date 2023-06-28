// Home.js

import React, { useState } from "react"
import Header from "../../components/Header"
import { 
  ContainerHome, 
  ContainerCriptoData, 
  SectionMain
} from "./styles"
import CryptoData from "../../components/Criptocoin"
import MainImagePng from "../../assets/img/mainimage.png"

const Home = () => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <ContainerHome darkMode={darkMode}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <SectionMain darkMode={darkMode}>
        <article className="art-main">
          <h1>A mais completa plataforma <br/>
          de criptomoedas do mundo</h1>
          <button className="btn-sub">Cadastre com E-mail ou Celular</button>
          <p>ou continue com <br />
            <button className="btn-goole">Google</button> 
            <button className="btn-apple">Apple</button>
          </p>
        </article>
        <aside className="aside-post">
          <img width={"550px"} src={MainImagePng}/>
        </aside>
        <ContainerCriptoData>
          <CryptoData />
        </ContainerCriptoData>
      </SectionMain>
    </ContainerHome>
  );
};

export default Home;
