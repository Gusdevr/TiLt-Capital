import React, { useState, useEffect, useRef } from "react";
import { ContainerHeader_Log, NavModal_Log } from './styles';
import { 
  FaSearch, 
  FaBell, 
  FaQrcode, 
  FaLanguage, 
  FaMoon,
  FaUserCircle,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';
import WeatherComponent from "../Weather";
import CapitalPng from "../../assets/img/capitallog.png";
import { SearchInput, ContainerClimate } from '../Header/styles'; 
import { CgMenuGridR } from "react-icons/cg";

const Header_Login = ({ darkMode, toggleDarkMode }) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [showIcon, setShowIcon] = useState(true);
  const [dropdowns, setDropdowns] = useState([
    { id: 1, label: "Compre Cripto", isOpen: false },
    { id: 2, label: "Mercados", isOpen: false },
    { id: 3, label: "Trade", isOpen: false },
    { id: 4, label: "Earn", isOpen: false },
    { id: 5, label: "Mais", isOpen: false },
    { id: 6, label: "Carteira", isOpen: false },
    { id: 7, label: "Ordens", isOpen: false },
  ]);

  const inputRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowSearchInput(false);
        setShowIcon(true);
        closeAllDropdowns();
      }
    }

    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  const toggleSearchInput = () => {
    setShowSearchInput(!showSearchInput);
    setShowIcon(!showIcon);
    closeAllDropdowns();
  };

  const closeAllDropdowns = () => {
    setDropdowns(dropdowns.map(dropdown => ({ ...dropdown, isOpen: false })));
  };

  const toggleDropdown = (dropdownId) => {
    setDropdowns(prevState => 
      prevState.map(dropdown =>
        dropdown.id === dropdownId ? { ...dropdown, isOpen: !dropdown.isOpen } : dropdown
      )
    );
  };

  return (
    <ContainerHeader_Log darkMode={darkMode}>
      <a href="/"><img width={'270px'} src={CapitalPng} /></a>
      <CgMenuGridR size={'40px'} style={{marginBottom: '10px'}}/>

      <nav className="nav-login">
        <ul>
          {dropdowns.map(dropdown => (
            <li key={dropdown.id}>
              <a href="#" onClick={() => toggleDropdown(dropdown.id)}>
                {dropdown.label}
                {dropdown.isOpen ? <FaChevronUp /> : <FaChevronDown />}
                {dropdown.isOpen && (
                  <ul className="dropdown-menu">
                    <li><button onClick={() => {}}>Action 1</button></li>
                    <li><button onClick={() => {}}>Action 2</button></li>
                    <li><button onClick={() => {}}>Action 3</button></li>
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
  );
}

export default Header_Login;
