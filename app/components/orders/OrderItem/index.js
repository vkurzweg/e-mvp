/**
*
* OrderItem
*
*/

import React from 'react';



function OrderItem(props) {
  const total_price = props.product.price * props.product.quantity
  return (
    <div style={{ display: 'block', margin: '0 auto', marginBottom: '1%' }}>
      <div style={{ display: 'inline-flex', width: '100%' }}>
        <img
          src={props.product.product.photos[0]}
          alt={props.product.product.name}
          style={{ marginLeft: '15%', width: '100px', height: '100px', verticalAlign: 'top' }}
        />
        <div style={{ display: 'inline-flex', marginLeft: '5%', verticalAlign: 'top', textAlign: 'left' }}>
          <p style={{ fontWeight: 'bold', width: '20%' }}>{props.product.product.name}</p>
          <p style={{ width: '10%', color: '#BDBEBD' }}>{props.product.custom_notes}</p>
        </div>
        <div style={{ display: 'inline-flex', marginLeft: '10%', textAlign: 'right' }}>
          <p>Quantity: {props.product.quantity}</p>
          <p style={{ marginLeft: '25%'}}>Price: ${total_price}</p>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
