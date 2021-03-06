import { createGlobalStyle } from 'styled-components';

import segoe from '../assets/fonts/segoe-ui.otf';

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Segoe';
    src: url(${segoe});
  }

  body, html, #root {
    margin: 0;
    padding: 0;
    font-family: 'Segoe';
  }
`;
