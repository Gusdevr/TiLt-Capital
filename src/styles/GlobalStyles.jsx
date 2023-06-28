import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    -webkit-font-smoothing: antialiased;
    background-color: #fae3e3;
  
}

body, input , header {
    font-family: 'Roboto', sans-serif;
}
`