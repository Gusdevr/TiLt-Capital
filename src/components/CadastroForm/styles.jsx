import styled from "styled-components";


export const HeaderForm = styled.header`
  display: flex;
  width: 100vw;
  height: 7rem;
  padding: 0.625rem;
  border-bottom: 5px solid ${({ darkMode }) => (darkMode ? '#fff' : '#090909')};
  align-items: center;
    
`

export const FormComponent = styled.div`
    .form-submit {
  display: flex;
  align-items: center;
  margin-top: 50px;
  flex-direction: column;
    }

    h1 {
        display: flex;
        justify-content: center;
        margin-bottom: 40px;
  }

  h5 {
    display: flex;
    font-weight: 500;
    font-size: 14px;
    justify-content: center;
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
    justify-content: center;
  }

  .footer-component {
    display: flex;
    justify-content: center;
    margin-top: 400px;
  }

`

