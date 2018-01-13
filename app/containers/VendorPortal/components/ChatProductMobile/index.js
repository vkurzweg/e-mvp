/**
*
* ChatProduct
*
*/

import React from 'react';
import Loading from 'react-loading';



function ChatProduct(props) {
  let productName = <Loading type='bubbles' style={{ display: 'block', margin: '0 auto'}} />
  let productQuant = '';
  let productTotal = '';
  if (!!props.product) productName = props.product.product.name
  if (!!props.product) productQuant = props.product.quantity
  if (!!props.product) productTotal = props.product.price * props.product.quantity
  return (
    <div style={{ marginLeft: '10%' }}>
      <p>{productName}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{productQuant}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${productTotal}</p>
    </div>
  );
}

export default ChatProduct;
