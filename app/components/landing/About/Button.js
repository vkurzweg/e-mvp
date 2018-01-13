import styled from 'styled-components';

const Button = styled.button`
  width: 12em;
  display: block;
  margin: 0 auto;
  background-color: transparent;
  border: 3px solid black;
  color: black;
  font-weight: bold;
  font-size: 22px;
  height: 2.25em;
  cursor: pointer;
  margin-top: 2%;
  margin-bottom: 5%;

  &:hover, &:active, &:focus {
  background: black;
  color: #78B5E2;
  border: none;
 }
`;

export default Button;
