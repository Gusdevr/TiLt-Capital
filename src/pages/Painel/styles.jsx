import styled from 'styled-components'

export const ContainerLogin = styled.div`



.wallet-btn {
   position: absolute;
   margin-left: 40%;
   bottom: 70%;
   display: flex;
   gap: 15px;
   align-items: center;
  

    
  }

  .btn-dep  {
    width: 100px;
    height: 30px;
    text-align: center;
    cursor: pointer;
    background-color: #235784;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-weight: 700;

    :hover {
      background-color: #235784dd;
    }
    
    
  }

  .btn-cash {
    width: 100px;
    height: 30px;
    text-align: center;
    cursor: pointer;
    background-color: #e0dede;
    color: black;
    border: none;
    border-radius: 5px;
    
    :hover {
      background-color: #e0dddddc;
    }

  }

  .btn-cripto {
    width: 170px;
    height: 30px;
    text-align: center;
    cursor: pointer;
    background-color: #e0dede;
    color: black;
    border: none;
    border-radius: 5px;
    
    :hover {
      background-color: #e0dddddc;
    }

  }

  

  

    
`

export const SectionMain = styled.section`
.vertical-line {
  margin-left: 250px;
  border-left: 1px solid #e0dede;
  height: 700px; 
 
 
}

.view-wallet {
  position: absolute;
  left: 14.5%;
  bottom: 68%;
  

  h2 {
    padding-bottom: 20px;
  }

  .menu-eye {
    position: absolute;
    border: none;
    background-color:  #e0dede;
    width: 22px;
    height: 22px;
    cursor: pointer;
    padding: 5px;
    border-radius: 5px;
    top: 5px;
    left: 175px;
  
    

   
  }

  .menu-eye:hover{
    color:  #235784;

  }


 
}




`

export const MenuSide = styled.aside`
  nav ul {
    position: absolute;
    bottom: 67.7%;
    list-style: none;
    display: flex;
    flex-direction: column;
    /* gap: 10px; */
    /* padding: 20px; */
   
    
  }

  ul li button {
    width: 250px;
    height: 50px;
    border: none;
    cursor: pointer;
    background-color: #fff;
    font-size: 14px;
    font-weight: 700;
    text-align: justify;
    padding-left: 20px;
  

    :hover {
      background-color: #235784;
      color: #fff;
    }

    
  }
  
`

export const UserHeader = styled.header`

  position: absolute;
  left: 13%;
  background-color: #edebeb;
  width: 1670px;
  height: 91.2px;
  bottom: 78.9%;
  display: flex;
  align-items: center;
  padding-left: 20px;

  h5 {
    margin-left: 82px;
    cursor: pointer;
    font-weight: 200;
    

  }

  h3{
    margin-left: 5px;
    cursor: pointer;
  }
  
`

export const MenuSideRight = styled.aside`

.container-search {
  position: absolute;
  left: 82%;
  bottom: 65%;

  input {
    width: 300px;
    height: 35px;
  }

  h1 {
    margin-bottom: 20px;
  }
}

.slider-sider {
  h1 {
    position: absolute;
    left: 82.1%;
    bottom: 58%;
  }
}

`