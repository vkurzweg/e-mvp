/**
*
* OrderItem
*
*/

import React from 'react';



function OrderItem(props) {
  console.log('props', props.product)
  const total_price = props.product.price * props.product.quantity
  return (
    <div style={{ display: 'block', margin: '0 auto' }}>
      <div style={{ display: 'inline-flex'}}>
      <img
        src={props.product.product.photos[0]}
        alt={props.product.product.name}
        style={{ marginLeft: '10%', width: '50px', height: '50px', verticalAlign: 'top' }}
      />
        <div style={{ display: 'inline-flex', marginLeft: '5%', verticalAlign: 'top', textAlign: 'left' }}>
          <p style={{ fontWeight: 'bold' }}>{props.product.product.name}</p>
          <p style={{ width: '10%', color: '#BDBEBD' }}>{props.product.custom_notes}</p>
        </div>
        <div style={{ display: 'inline-flex' }}>
          <p>Quantity: {props.product.quantity}</p>
          <p style={{ marginLeft: '20%'}}>Price: ${total_price}</p>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
