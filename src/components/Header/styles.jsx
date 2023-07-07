import styled from 'styled-components';

export const ContainerHeader = styled.header`
  display: flex;
  width: 100vw;
  height: 7rem;
  padding: 0.625rem;
  border-bottom: 5px solid ${({ darkMode }) => (darkMode ? '#fff' : '#090909')};
  align-items: center;
  background-color: ${({ darkMode }) => (darkMode ? '#090909' : '#fff')};
  color: ${({ darkMode }) => (darkMode ? '#fff' : '#090909')};

  nav ul {
    display: flex;
    margin-left: 100px;
    gap: 50px;
    list-style: none;
    font-size: 15px;
    margin-top: 20px;
  }

  nav ul a {
    text-decoration: none;
    font-weight: 700;
    font-size: 1rem;
    color: ${({ darkMode }) => (darkMode ? '#fff' : '#090909')};
  }

  .login {
    font-size: 18px;
  }

  .btn-nav {
    position: absolute;
    background-color: #235784;
    border: none;
    width: 100px;
    height: 40px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    left: 68%;
    top: 44px;
    color: #fff;
  }

  .modal-a {
    position: absolute;
    margin: 0 300px;
    top: 8%;
    background-color: ${({ darkMode }) => (darkMode ? '#090909' : '#f3f2f2f4')};
    border: none;
    padding: 20px;
    margin-top: 10px;
    width: 350px;
    height: 250px;
    z-index: 2;
    color: ${({ darkMode }) => (darkMode ? '#fff' : '#333')};
  }

  .modal-title {
    font-size: 24px;
    font-weight: bold;
  }

  .modal-content {
    font-size: 16px;
    color: ${({ darkMode }) => (darkMode ? '#ccc' : '#666')};
  }

`

export const NavModal = styled.div`
  position: absolute;
  margin-left: 60%;
  display: flex;
  gap: 25px;
  top: 50px;
  cursor: pointer;
  color: ${({ darkMode }) => (darkMode ? '#fff' : '#090909')};
`

export const ContainerClimate = styled.div`
  position: absolute;
  left: 88%;
  top: 2%;
  
`


export const SearchInput = styled.input`
  width: 200px;
  height: 30px;
  padding: 5px;
  margin-top: 18px;
  margin-left: 5px;
  border: none;
  border-radius: 5px;
  background-color: ${({ darkMode }) => (darkMode ? '#fff' : '#f3f2f2f4')};
  color: ${({ darkMode }) => (darkMode ? '#000' : '#333')};
  transition: width 0.3s ease-in-out;

  &:focus {
    width: 250px;
    outline: none;
  }
`
