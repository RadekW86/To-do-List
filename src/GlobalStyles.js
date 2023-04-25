import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
  }
  
  *, ::before, ::after {
    box-sizing: inherit;
  }
  
  body {
    overflow-x: auto;
    font-size: 16px;
    line-height: 1.5;
    color: ${({ theme }) => theme.color.textColor};
    background-color: #eee;
    font-family: "Montserrat", sans-serif;
  }
`;
