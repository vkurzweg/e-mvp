import styled from 'styled-components';

export default styled.div`
  padding-top: 2%;
  display: inline-block;
  font-size: 12px;
  text-transform: uppercase;
  text-decoration: none;
  color: #FAFAFA;
  text-align: right;
  margin-left: 1em;
  font-family: 'Raleway', sans-serif;

  &:hover {
    color: #5975BB;
  }

  &:active, :visited {
    background-color: #252729;
  }
`;
