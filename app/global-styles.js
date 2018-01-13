import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Raleway', sans-serif;
    background-color: #FAFAFA;
  }

  body.fontLoaded {
    font-family: 'Raleway', sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Raleway', Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
