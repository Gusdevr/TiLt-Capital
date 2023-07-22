import styled from "styled-components";

export const ContainerHeader_Log = styled.div`

display: flex;
  width: 100vw;
  height: 7rem;
  padding: 0.625rem;
  border-bottom: 5px solid ${({ darkMode }) => (darkMode ? '#fff' : '#090909')};
  align-items: center;
 

.btn-log {
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
    font-weight: 500;
    font-size: 1rem;
    color: black;
    :hover {
        color: #235784;
        font-weight: 700;
        transition: 300ms;
    }

    .dropdown-menu {
        position: absolute;
        top: 80px;
        width: 400px;
        background-color: #fdfbfb;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding-bottom: 10px;
        padding-top: 10px;
        gap: 10px;
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
        
    }

    .dropdown-menu button {
        width: 380px;
        height: 60px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        background-color: #fdfbfb;

        :hover {
            background-color: #235784;
        }
    }

    .dropdown-menu li {
      
      
    }

}

.search-login {
  
    margin-left: 100px;
}

    
`

export const NavModal_Log = styled.div`
 position: absolute;
  margin-left: 73.5%;
  display: flex;
  gap: 25px;
  top: 50px;
  cursor: pointer;
    
`