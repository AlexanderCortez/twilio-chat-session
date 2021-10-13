import { createGlobalStyle } from 'styled-components';

export const StyleProvider = createGlobalStyle`
html, body {
  height: 100vh;
}
* {
    padding: 0;
    border: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
  }
  h2 {
    font-size: 17px;
  }
  p {
    font-size: 14px;
  }
`;
