import styled from 'styled-components';

const Button = styled.button`
  background: #1e5799;
  background: -moz-linear-gradient(top,  #1e5799 0%, #75b2df 63%, #75b2df 69%, #7db9e8 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top,  #1e5799 0%,#75b2df 63%,#75b2df 69%,#7db9e8 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom,  #1e5799 0%,#75b2df 63%,#75b2df 69%,#7db9e8 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799', endColorstr='#7db9e8',GradientType=0 ); /* IE6-9 */
  text-transform: uppercase;
  border: none;
  padding: 8%;
  width: 100%;
  margin-bottom: 7%;
  font-size: 12px;
  margin-top: 4%;
  text-align: center;

  &:hover, &:active, &:focus {
    background: #2FBA90;
 }
`;

export default Button;
