/**
*
* ChatOrderProducts
*
*/

import React from 'react';
import ChatProduct from '../ChatProduct';

function ChatOrderProducts(props) {
  let products = [];
    if (!!props.order) products = props.order.order_products
    let delivery = '';
    if (!!props.order) delivery = props.order.delivery_fee
    let status = '';
    if (!!props.order) status = props.order.status
    let prices = []
    products.map((product, idx) => {
      prices.push(product.price * product.quantity)
    })
    const subTotal = prices.reduce((a, b) => a + b, 0);
    const orderTotal = delivery + subTotal
  return (
    <div>
      <p style={{ textAlign: 'center' }}>Order status: {status}</p>
      {products.map( (product, idx) => {
        return <ChatProduct key={idx - 1} product={product} />
      })}
      <p style={{ textAlign: 'right', marginRight: '10%' }}>Delivery: ${delivery}</p>
      <p style={{ textAlign: 'right', marginRight: '10%', fontWeight: 'bold', fontSize: '18px' }}>Total: ${orderTotal}</p>
    </div>
  );
}

export default ChatOrderProducts;
