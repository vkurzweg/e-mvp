import { css } from 'styled-components';

const ButtonStyles = css`
  display: inline-block;
  margin: 0 auto;
  margin-top: 1.5em;
  box-sizing: border-box;
  height: 55px;
  width: 14.75em;
  padding-top: 1em;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-weight: bold;
  font-size: calc(.27548vw + 12.71074px);
  background-color: #303F9F;
  color: white;

  &:hover {
    background-color: #2FBA90;
    color: white;
  }
`;

export default ButtonStyles;
