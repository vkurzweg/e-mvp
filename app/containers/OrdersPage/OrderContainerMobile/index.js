/*
 *
 * OrderContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import OrderItemMobile from 'components/orders/OrderItemMobile';
import Check from 'assets/images/checkbox_checked.png';
import Uncheck from 'assets/images/checkbox_unchecked.png';
import X from 'assets/images/checkbox_x.png';


function OrderContainer(props) {
  // display checkbox if order is confirmed
  let vendorName = 'Loading';
  if (!!props.order) vendorName = props.order.vendor.name
  let src = Uncheck;
  (props.order.status === 'ACCEPTED') ? src = Check : src = Uncheck
  if (props.order.status === 'DECLINED') src = X;
  let display = 'none';
  (props.order.status === 'ACCEPTED') ? display = 'block' : display = 'none';
  let displayDecline = 'none';
  (props.order.status === 'DECLINED') ? displayDecline = 'block' : displayDecline = 'none';
  let products = props.order.order_products;
  // calculate order total
  let prices = [];
  products.map((product, idx, products) => {
    prices.push(product.price * product.quantity)
  })
  let subTotal = prices.reduce((a, b) => a + b, 0);
  let orderTotal = subTotal + props.order.delivery_fee
  // toggle contact btn
  let displayContact;
  (props.isContactShowing) ? displayContact = 'block' : displayContact = 'none';
  return (
    <div style={{ marginTop: '2%' }}>
      <p style={{ textTransform: 'uppercase', textAlign: 'center', fontSize: '16px', marginBottom: '5%' }} >{vendorName}</p>
      <div style={{ display: 'inline-block', textAlign: 'center', float: 'right', marginRight: '10%', marginTop: '-12%' }}>
        <img src={src} alt="checkbox" />
        <p style={{ fontSize: '10px', color: '#2FBA90', display }} >Order Confirmed!</p>
        <p style={{ fontSize: '10px', color: '#FF7A7A', display: displayDecline }} >Order Declined</p>
      </div>
      {products.map((product, idx, products) => {
        return (
          <div key={idx}>
            <OrderItemMobile
              orderStatus={props.order.status}
              product={product}
              key={idx}
            />
          </div>
        )
      })}
      <div style={{ textAlign: 'right', marginRight: '15%' }}>
        <p style={{ fontSize: '12px' }}>Subtotal: ${subTotal}</p>
        <p style={{ fontSize: '12px' }}>Delivery: ${props.order.delivery_fee}</p>
        <p style={{ fontWeight: 'bold', fontSize: '16px' }}>Order Total: ${orderTotal}</p>
        <p style={{ display: 'block', cursor: 'pointer', textDecoration: 'underline', color: '#BDBEBD', cursor: 'pointer' }} onClick={props.toggleContact}>Modify or Cancel Order</p>
        <div style={{ cursor: 'pointer', display: displayContact }}>
          <button onClick={props.onContactVendor} className="btn btn-default" style={{ backgroundColor: '#FAFAFA' }}>Please contact {vendorName}</button>
        </div>
      </div>
      <hr style={{ marginTop: '2em', marginBottom: '2em', width: '100%' }} />
    </div>
  );
}

export default OrderContainer;
