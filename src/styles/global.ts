import { createGlobalStyle } from "styled-components";
import { SCREEN_SIZE } from "../data/data";

export default createGlobalStyle`
  :root {
    --background: #282a36;
    --current-line: #44475a;
    --green: #50fa7b;
    --white: #f8f8f2;
    --gray-blue: #6272a4;
    --cyan: #8be9fd;  
    --pink: #ff79c6;
    --purple: #bd93f9;
    --red: #ff5555;
    --yellow: #f1fa8c;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: ${SCREEN_SIZE.md}) {
      font-size: 93.75%;
    }
    @media (max-width: ${SCREEN_SIZE.xs}) {
      font-size: 87.5%;
    }
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }
`