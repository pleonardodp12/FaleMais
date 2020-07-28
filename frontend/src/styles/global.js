import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background: #e5e5e5;
  }

  footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: -1;
    
  }

  button {
    cursor: pointer;
  }
`;