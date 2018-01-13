import styled from 'styled-components';

const Button = styled.div`
  display: inline-block;
  margin: 0 auto;
  margin-top: 1em;
  box-sizing: border-box;
  height: 40px;
  width: 10em;
  padding-top: .5em;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-weight: bold;
  font-size: calc(.27548vw + 12.71074px);
  background-color: #5A77B9;
  color: white;

  &:hover {
    background-color: #2FBA90;
    color: #73B1E1;
  }
`;

export default Button;
