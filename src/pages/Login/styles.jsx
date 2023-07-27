import styled from "styled-components"

export const HeaderLogin = styled.header`
  display: flex;
  width: 100vw;
  height: 7rem;
  padding: 0.625rem;
  border-bottom: 5px solid ${({ darkMode }) => (darkMode ? '#fff' : '#090909')};
  align-items: center;
 
`

export const ContainerLogin = styled.div`

form {
  display: flex;
  align-items: center;
  margin-top: 50px;
  flex-direction: column;

  h1 {
    margin-bottom: 40px;
  }

  h5 {
    font-weight: 500;
    font-size: 14px;
  }

  input {
    width: 350px;
    height: 40px;
    margin-top: 10px;
    margin-bottom: 18px;
    outline-color: #235784;
  }

  button {
    display: flex;
    width: 350px;
    height: 40px;
    align-items: center;
    justify-content: center;
    margin: 10px 0px;
    background-color: #d5d3d3;
    color: black;
    font-size: 15px;
    font-weight: 500;
    border: none;
    cursor: pointer;

  
  }


  span {
    display: flex;
  }

   a {
    font-size: 14px;
    text-decoration: none;
    color: #235784;
    font-weight: 600;
    margin-top: 10px;
    
   
  }

  .btn-google {
    background-color: #d5d3d3;
    color: black;
    font-size: 15px;
    font-weight: 500;

    :hover {
      background-color: #d5d3d3dd;
    }
  }

  .btn-apple {
    background-color: #d5d3d3;
    color: black;
    font-size: 15px;
    font-weight: 500;

    :hover {
      background-color: #d5d3d3dd;
    }
  }

  .btn-next {
    background-color: #235784;
    color: #fff;

    :hover {
      background-color: #235784e0;
    }

  }

  

}

  .footer {
  display: flex;
  justify-content: center;
  margin-top: 300px;


  
  

 
 
}


    
`



