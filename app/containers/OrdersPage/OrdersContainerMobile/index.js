/*
 *
 * ProductsContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import OrderContainerMobile from '../OrderContainerMobile';
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
  return (
    <div style={{ paddingBottom: '25%' }}>
      { props.orders.map( (order, idx, orders) => {
        return (
          <div key={idx-1}>
            <OrderContainerMobile
              order={ order }
              onContactVendor={props.onContactVendor}
              toggleContact={props.toggleContact}
              isContactShowing={props.isContactShowing}
            />
          </div>
        )
      })}
      <div style={{ marginBottom: '20%' }}>
        <h4 style={{ display: displayTotal, textAlign: 'right', marginRight: '10%' }}>Grand Total: ${grandTotal}</h4>
        <Button
          className="btn btn-success"
          style={{ display, width: '75%', margin: '0 auto' }}
          onClick={props.showModal}
        >
        BOOK EVENT
        </Button>
      </div>
    </div>
  );
}


export default OrdersContainer;
