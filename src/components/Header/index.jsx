import React, { useState, useEffect, useRef } from "react"
import { ContainerHeader, NavModal, ContainerClimate } from './styles'
import { FaSearch, FaBell, FaQrcode, FaLanguage, FaMoon } from 'react-icons/fa'
import WeatherComponent from "../Weather"
import CapitalPng from "../../assets/img/capitallog.png"
import { SearchInput } from './styles' 


const Header = ({ darkMode, toggleDarkMode }) => {
  const [openModal, setOpenModal] = useState(false)
  const [modalContent, setModalContent] = useState(null)
  const [showSearchInput, setShowSearchInput] = useState(false)
  const [showIcon, setShowIcon] = useState(true)


  const inputRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowSearchInput(false)
        setShowIcon(true)
      }
    }

    document.addEventListener('click', handleClickOutside, true)

    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    };
  }, [])

  const handleMouseEnter = (content) => {
    setOpenModal(true)
    setModalContent(content)
  }

  const handleMouseLeave = () => {
    setOpenModal(false)
    setModalContent(null)
  }

  const toggleSearchInput = () => {
    setShowSearchInput(!showSearchInput);
    setShowIcon(!showIcon);
  }

  const toggleIcon = () => {
    setShowIcon(!showIcon);
  }

  const menuItems = [
    { id: 1, title: 'Compre Cripto', content: 'Compre cripto de maneira fácil e rápida' },
    { id: 2, title: 'Mercados', content: 'Sistema otimizado em tempo real de compra e venda' },
    { id: 3, title: 'Trade', content: 'Mercado de Cambio com diversas formas de pagamentos' },
    { id: 4, title: 'Finanças', content: 'Cartão TiLt Card exclusivo com menores taxas' },
    { id: 5, title: 'Institucional', content: 'Página Descritiva' },
  ]

  return (
    <ContainerHeader darkMode={darkMode}>
      <a href="/"><img width={'270px'} src={CapitalPng} /></a>
      <nav>
        <ul>
          {menuItems.map((item) => (
            <a
              key={item.id}
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
              href='#'
            >
              <li>{item.title}</li>
            </a>
          ))}
          {showIcon && (
            <div onClick={toggleSearchInput}>
              <FaSearch size={'20px'}  style={{cursor: 'pointer'}}/>
            </div>
          )}
          {showIcon && (
            <a href='#' className='login'>
              <li>Entrar</li>
            </a>
          )}
        </ul>

        <NavModal darkMode={darkMode}>
          <FaBell size={'25px'} />
          <FaQrcode size={'25px'} />
          <FaLanguage size={'25px'} />
          <hr />
          <FaMoon size={'20px'} onClick={toggleDarkMode} darkMode={darkMode} />
        </NavModal>

        <button className='btn-nav'>Registrar</button>

        <ContainerClimate>
          <WeatherComponent />
        </ContainerClimate>
      </nav>

      {openModal && (
        <div className="modal-a">
          {modalContent && <h1 className="modal-title">{modalContent.title}</h1>}
          {modalContent && <p className="modal-content">{modalContent.content}</p>}
        </div>
      )}

      {showSearchInput && (
        <div className="search-input" ref={inputRef}>
          <SearchInput
            type="text"
            placeholder="Digite suas palavras-chave..."
            darkMode={darkMode}
          />
        </div>
      )}
    </ContainerHeader>
  );
}

export default Header
