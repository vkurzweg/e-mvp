/*
 *
 * ProductsContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import OrderContainer from '../OrderContainer';
import Button from './Button';

function OrdersContainer(props) {
  let orders = [];
  if (!props.isFetchingOrders && !!props.orders) orders = props.orders;
  // display button if all orders are responded:
  let ordersNum = orders.length;
  let responded = [];
  orders.map((order, idx, orders) => {
    if (order.status === 'ACCEPTED' || order.status === 'DECLINED') responded.push(order)
  });
  let respondedNum = responded.length;
  let display = 'none';
  if (ordersNum === respondedNum) display = 'block';
  // don't display button if there are no orders
  if (ordersNum === 0) display = 'none';
  // don't display button if event confirmed;
  if (props.event.status === 'CONFIRMED') display = 'none';
  // calculate grand total
  let prices = [];
  orders.map((order, idx, orders) => {
    // only add to total if not declined
    if (order.status === 'ACCEPTED' || order.status === 'REQUESTED') {
      let products = order.order_products;
      products.map((product, idx, products) => {
          prices.push(product.price * product.quantity)
      })
    }
  })
  let deliveryFees = []
  orders.map((order, idx, orders) => {
    deliveryFees.push(order.delivery_fee)
  })
  let pricesTotal = prices.reduce((a, b) => a + b, 0);
  let feesTotal = deliveryFees.reduce((a, b) => a + b, 0);
  const grandTotal = pricesTotal + feesTotal
  // only display total if there are orders
  let displayTotal = 'block';
  if (props.orders.length === 0) displayTotal = 'none';
  // indicate if event is confirmed
  return (
    <div style={{ paddingBottom: '5%', marginTop: '3%' }}>
      { props.orders.map( (order, idx, orders) => {
        return (
          <div key={idx-1}>
            <OrderContainer
              order={ order }
              onContactVendor={props.onContactVendor}
              toggleContact={props.toggleContact}
              isContactShowing={props.isContactShowing}
            />
          </div>
        )
      })}
        <h4 style={{ display: displayTotal, textAlign: 'right', marginRight: '22em', marginTop: '2%' }}>Grand Total: ${grandTotal}</h4>
        <Button
          className="btn btn-success"
          style={{ fontSize: '18px', width: '15em', border: 'none', display, margin: '0 auto', marginTop: '2em' }}
          onClick={props.showModal}
        >
        BOOK EVENT
        </Button>
    </div>
  );
}


export default OrdersContainer;
