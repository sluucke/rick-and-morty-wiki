import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: "Epilogue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text.gray};

  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  input {
    outline: none;
    font-family: "Epilogue", sans-serif;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;
