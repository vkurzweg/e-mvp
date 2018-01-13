/*
 *
 * OrderContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import OrderItem from 'components/orders/OrderItem';
import Check from 'assets/images/checkbox_checked.png';
import Uncheck from 'assets/images/checkbox_unchecked.png';
import X from 'assets/images/checkbox_x.png';
import Paper from 'material-ui/Paper';



function OrderContainer(props) {
  let vendorName = 'Loading';
  if (!!props.order) vendorName = props.order.vendor.name
  // order confirmed/declined UI
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
    <div style={{ width: '70%', margin: '0 auto' }}>
      <Paper zDepth={2} style={{ padding: '2%', backgroundColor: '#FAFAFA', width: '100%' }}>
      <p style={{ textAlign: 'center', fontSize: '18px', marginBottom: '2em', marginTop: '1%' }} >Your order from <span style={{ textTransform: 'uppercase' }}>{vendorName}:</span></p>
      <div style={{ display: 'inline-block', textAlign: 'center', float: 'right', marginRight: '20%' }}>
        <img src={src} alt="checkbox" />
        <p style={{ fontSize: '10px', color: '#2FBA90', display }} >Order Confirmed!</p>
        <p style={{ fontSize: '10px', color: '#FF7A7A', display: displayDecline }} >Order Declined</p>
      </div>
      {products.map((product, idx, products) => {
        return (
          <div key={idx}>
            <OrderItem
              orderStatus={props.order.status}
              product={product}
              key={idx}
            />
          </div>
        )
      })}
      <div style={{ marginBottom: '5%', textAlign: 'center', marginLeft: '38%' }}>
        <p style={{ fontSize: '14px', display: 'block', textAlign: 'center'}}>Subtotal: ${subTotal}</p>
        <p style={{ fontSize: '14px', display: 'block', textAlign: 'center'}}>Delivery: ${props.order.delivery_fee}</p>
        <p style={{ fontSize: '18px', display: 'block', textAlign: 'center'}}>Order Total: ${orderTotal}</p>
        <p style={{ display: 'block', cursor: 'pointer', textDecoration: 'underline', color: '#BDBEBD', cursor: 'pointer' }} onClick={props.toggleContact}>Modify or Cancel Order</p>
        <div style={{ cursor: 'pointer', display: displayContact }}>
          <p style={{ textAlign: 'center' }}>Your order ID is {props.order._id}</p>
          <button onClick={props.onContactVendor} className="btn btn-default" style={{ backgroundColor: '#FAFAFA' }}>Please contact {vendorName}</button>
        </div>
      </div>
      </Paper>
    </div>
  );
}

export default OrderContainer;
