/**
*
* VendorOrderItem
*
*/

import React from 'react';



function VendorOrderItem(props) {
  console.log('props product', props.product.product)
  const total_price = props.product.price * props.product.quantity
  return (
    <div style={{ display: 'block', margin: '0 auto' }}>
      <img
        src={props.product.product.photos[0]}
        alt={props.product.product.name}
        style={{ marginLeft: '10%', width: '10%', verticalAlign: 'top' }}
      />
      <div style={{ display: 'inline-flex', marginLeft: '5%', verticalAlign: 'top', textAlign: 'left' }}>
        <p style={{ fontWeight: 'bold' }}>{props.product.product.name}</p>
        <p style={{ width: '10%' }}>{props.product.custom_notes}</p>
      </div>
      <div style={{ display: 'inline-flex' }}>
        <p>Quantity: {props.product.quantity}</p>
        <p style={{ marginLeft: '25%'}}>Price: ${total_price}</p>
      </div>
    </div>
  );
}

export default VendorOrderItem;
