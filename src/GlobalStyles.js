import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
  }
  
  *, ::before, ::after {
    box-sizing: inherit;
  }
  
  body {
    max-width: 900px;
    min-height: 600px;
    margin: 0 auto;
    overflow-x: auto;
    font-size: 16px;
    line-height: 1.5;
    color: #222;
    background-color: #eee;
    font-family: "Montserrat", sans-serif;
  }
`;
