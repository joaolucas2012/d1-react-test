import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: "Gotham-Bold", "Gotham-Book", sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    body {
      background-color: ${theme.colors.colorBg};
    }

    button {
      cursor: pointer;
      border: none;
    }

    @font-face {
      font-family: "Gotham-Bold";
      src: url("./assets/fonts/Gotham-Bold.eot");
      src: url("./assets/fonts/Gotham-Bold.eot") format("embedded-opentype"),
        url("./assets/fonts/Gotham-Bold.svg") format("svg"),
        url("./assets/fonts/Gotham-Bold.ttf") format("truetype"),
        url("./assets/fonts/Gotham-Bold.woff") format("woff"),
        url("./assets/fonts/Gotham-Bold.woff2") format("woff2");
    }

    @font-face {
      font-family: "Gotham-Book";
      src: url("./assets/fonts/Gotham-Book.eot");
      src: url("./assets/fonts/Gotham-Book.eot") format("embedded-opentype"),
        url("./assets/fonts/Gotham-Book.svg") format("svg"),
        url("./assets/fonts/Gotham-Book.ttf") format("truetype"),
        url("./assets/fonts/Gotham-Book.woff") format("woff"),
        url("./assets/fonts/Gotham-Book.woff2") format("woff2");
    }
  `}
`;

export default GlobalStyle;
