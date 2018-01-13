import styled from 'styled-components';

const FlexContainer = styled.div`
  text-align: center;
  // color: #D8D8D8;
  margin-top: 2.25em;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction:         row;
  -webkit-justify-content: space-around; /* Safari */
  justify-content:         space-around;
  flex: 0 1;
`;

export default FlexContainer;
