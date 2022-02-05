import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: "Roboto", sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    body {
      background-color: ${theme.colors.colorBackground};
    }

    button {
      cursor: pointer;
      border: none;
    }
  `}
`;

export default GlobalStyle;
