import React, { useState, useEffect, useRef } from "react"
import { ContainerHeader_Log, NavModal_Log } from './styles'
import { 
  FaSearch, 
  FaBell, 
  FaQrcode, 
  FaLanguage, 
  FaMoon,
  FaUserCircle,
  FaChevronDown,
  FaChevronUp,
  FaWallet
} from 'react-icons/fa'
import WeatherComponent from "../Weather"
import CapitalPng from "../../assets/img/capitallog.png"
import { SearchInput, ContainerClimate } from '../Header/styles'
import { CgMenuGridR } from "react-icons/cg"
import { RiBankFill } from "react-icons/ri"
import { HiRocketLaunch } from "react-icons/hi2"

const Header_Login = ({ darkMode, toggleDarkMode }) => {
  const [openModal, setOpenModal] = useState(false)
  const [modalContent, setModalContent] = useState(null)
  const [showSearchInput, setShowSearchInput] = useState(false)
  const [showIcon, setShowIcon] = useState(true)
  const [isAnyDropdownOpen, setIsAnyDropdownOpen] = useState(false)
  const [isMenuGridROpen, setIsMenuGridROpen] = useState(false)
  const [dropdowns, setDropdowns] = useState([
    {
      id: 1,
      title: "Compre Cripto",
      label: "Compre Cripto",
      isOpen: false,
      buttons: [
        { id: 11, title: "Depósito", action: () => {} },
        { id: 12, title: "Cartão de Crédito", action: () => {} },
        { id: 13, title: "Saldo", action: () => {} },
      ],
    },
    {
      id: 2,
      title: "Mercados",
      label: "Mercados",
      isOpen: false,
      buttons: [
        { id: 21, title: "Resumo", action: () => {} },
        { id: 22, title: "Trading", action: () => {} }
      ],
    },
    {
      id: 3,
      title: "Trade",
      label: "Trade",
      isOpen: false,
      buttons: [
        { id: 31, title: "Spot", action: () => {} },
        { id: 32, title: "Conversão", action: () => {} },
        { id: 33, title: "Ordens", action: () => {} },
      ],
    },
    {
      id: 4,
      title: "Earn",
      label: "Earn",
      isOpen: false,
      buttons: [
        { id: 41, title: "Mineração", action: () => {} },
        { id: 42, title: "Staking", action: () => {} },
        { id: 43, title: "Liquidez", action: () => {} },
      ],
    },
    {
      id: 5,
      title: "Mais",
      label: "Mais",
      isOpen: false,
      buttons: [
        { id: 51, title: "Feed", action: () => {} },
        { id: 52, title: "Blog", action: () => {} },
        { id: 53, title: "NFT", action: () => {} },
        { id: 53, title: "Institucional", action: () => {} }
      ],
    },
  ]);

  const inputRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowSearchInput(false)
        setShowIcon(true)
        setIsAnyDropdownOpen(false)
        setIsMenuGridROpen(false)
        closeAllDropdowns()
      } else if (!event.target.classList.contains("dropdown-button")) {
        setIsAnyDropdownOpen(false);
        closeAllDropdowns();
      }
    }

    document.addEventListener('click', handleClickOutside, true)

    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

  const toggleSearchInput = () => {
    setShowSearchInput(!showSearchInput)
    setShowIcon(!showIcon)
    setIsAnyDropdownOpen(false)
    setIsMenuGridROpen(false)
    closeAllDropdowns()
  };

  const closeAllDropdowns = () => {
    setDropdowns(dropdowns.map(dropdown => ({ ...dropdown, isOpen: false })))
  };

  const toggleDropdown = (dropdownId) => {
    setDropdowns(prevState => 
      prevState.map(dropdown =>
        dropdown.id === dropdownId ? { ...dropdown, isOpen: !dropdown.isOpen } : dropdown
      )
    );
    setIsAnyDropdownOpen(true)
    setIsMenuGridROpen(false)
  };

  const toggleMenuGridR = () => {
    setIsMenuGridROpen(!isMenuGridROpen)
    setIsAnyDropdownOpen(false)
    closeAllDropdowns()
   
  };

  

  return (
    <ContainerHeader_Log darkMode={darkMode}>
      <a href="/"><img width={'270px'} src={CapitalPng} /></a>

    

      
      <CgMenuGridR className="menu-grid"
        size={'40px'}
        style={{ marginBottom: '10px', marginLeft: '18px', cursor: 'pointer' }}
        onClick={toggleMenuGridR}
      />
      {isMenuGridROpen && (
        <ul className="dropdown-painel">
         <a href="#"><li><button> <RiBankFill size={'18px'} className="icon-drop"/>Exchange</button></li></a>
         <a href="#"><li><button> <FaWallet size={'18px'} className="icon-drop"/>Carteira Defi</button></li></a>
         <a href="#"><li><button> <HiRocketLaunch size={'18px'} className="icon-drop"/>Launchpad</button></li></a>
        </ul>
      )}
    

      <nav className="nav-login">
        <ul>
          {dropdowns.map(dropdown => (
            <li key={dropdown.id}>
              <a href="#" onClick={() => toggleDropdown(dropdown.id)}>
                {dropdown.title}
                {dropdown.isOpen ? <FaChevronUp /> : <FaChevronDown />}
                {dropdown.isOpen && (
                  <ul className="dropdown-menu">
                    {dropdown.buttons.map((button) => (
                      <li key={button.id}>
                        <button onClick={button.action}>{button.title}</button>
                      </li>
                    ))}
                  </ul>
                )}
              </a>
            </li>
          ))}
          {showIcon && (
            <div onClick={toggleSearchInput} className="search-login">
              <FaSearch size={'20px'}  style={{cursor: 'pointer'}}/>
            </div>
          )}
        </ul>
      </nav>

      <NavModal_Log darkMode={darkMode}>
        <FaUserCircle size={'25px'}/>
        <FaBell size={'25px'} />
        <FaQrcode size={'25px'} />
        <FaLanguage size={'25px'} />
        <hr />
        <FaMoon size={'20px'} onClick={toggleDarkMode} darkMode={darkMode} />
      </NavModal_Log>

      <button className='btn-log'>Registrar</button>

      <ContainerClimate>
        <WeatherComponent />
      </ContainerClimate>

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
    </ContainerHeader_Log>

    
  )
}



export default Header_Login
