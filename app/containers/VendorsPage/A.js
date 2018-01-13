/**
 * A link to a certain page, an anchor tag
 */

import styled from 'styled-components';

const A = styled.a`
  display: block;
  color: #73B1E1;
  text-align: center;
  margin-top: 1.5em;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    font-weight: bold;
    text-decoration: none;
  }
`;

export default A;
