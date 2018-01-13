import styled from 'styled-components';

const FlexContainer = styled.div`
  text-align: center;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column; /* Safari */
  flex-direction:         column;
  -webkit-justify-content: center; /* Safari */
  justify-content:         center;
  align-items: center;
  padding-top: 1.5em;
`;

export default FlexContainer;
