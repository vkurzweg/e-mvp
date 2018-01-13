import styled from 'styled-components';

export default styled.div`
  display: none;
  position: absolute;
  background-color: #FAFAFA;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;

  &:hover {
    display: block;
  }
`;
