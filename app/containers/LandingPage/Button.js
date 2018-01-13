import styled from 'styled-components';

const Button = styled.button`
   background-color: #75B2DF;
   width: 14.75em;
   color: #FAFAFA;
   outline: none;
   border: none
   text-align: center;
   text-transform: uppercase;
   display: block;
   position: absolute;
   z-index: 1000;
   margin: 0 auto;
   padding: .5em;
   font-weight: bold;
   border-radius: 8px;
   letter-spacing: 1px;
   -webkit-box-shadow: 10px 10px 40px -17px rgba(37,39,41,1);
   -moz-box-shadow: 10px 10px 40px -17px rgba(37,39,41,1);
   box-shadow: 10px 10px 40px -17px rgba(37,39,41,1);

  &:hover, &:active, &:focus {
    background-color: #536DFE;
    color: #FAFAFA;
    border: none
    outline: 0;
 }
`;

export default Button;
