import { Link } from 'react-router';
import styled from 'styled-components';

export default styled(Link)`
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;

  &:hover {
    color: #5975BB;
  }

  &:active {
    color: #5975BB;
  }
`;
