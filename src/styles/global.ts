import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 60%;
  }

  body {
    font-family: Roboto, sans-serif;
    font-size: 16px;
    background: #f0f0f5;
  }

  button {
    cursor: pointer;
  }
`;
