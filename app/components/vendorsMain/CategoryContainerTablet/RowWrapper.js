import styled from 'styled-components';

const RowWrapper = styled.div`
  display: -webkit-flex; /* Safari */
  display: flex;
  -webkit-flex-direction: row; /* Safari */
  flex-direction:         row;
  -webkit-justify-content: center; /* Safari */
  justify-content:         center;
  -webkit-align-content: space-around; /* Safari */
  align-content:         space-around;
  flex-shrink: 2;
`;

export default RowWrapper;
