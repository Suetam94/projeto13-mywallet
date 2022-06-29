import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`  
  * {
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
  }
  
  body {
    background-color: #8C11BE;
    min-height: 100vh;
  }
`;
