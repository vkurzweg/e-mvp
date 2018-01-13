/*
 *
 * OrderSlipContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import OrderSlipItem from 'components/vendor/OrderSlipItem';
import { browserHistory } from 'react-router';
import { toJS } from 'immutable';


function OrderSlipContainer(props) {
  let redirectPath= '';

  if ((props.isAuthenticated) && (!props.event)) {
    redirectPath = 'event';
  } else if ((props.isAuthenticated) && !(props.isPaymentSubmitted)) {
    redirectPath = 'payment';
  } else if (!props.isAuthenticated) {
    redirectPath = 'login';
  }
  console.log(redirectPath);
  const orderSlip = props.orderSlip;
  let vendorName = 'NOT FOUND'
  if (!props.isFetchingVendor && props.vendor) vendorName = props.vendor.name
  return (
    <div style={{display: props.display}}>
      <hr />
      <h5 style={{ fontSize: '14px', textTransform: 'uppercase', textAlign: 'center', fontWeight: 'bold', paddingTop: '1em', paddingBottom: '1em' }}>Your Order from {vendorName}</h5>
      {orderSlip.map((orderSlipItem, idx) => {
        return <OrderSlipItem
          key={idx}
          orderSlipItem={orderSlipItem}
          setProductQuantity={props.setProductQuantity}
          index={idx}
          removeOrderSlipItem={props.removeOrderSlipItem}/>
      })}
      <button
          className="btn btn-success"
          id={{ redirectPath }}
          style={{ display: 'block', width: '10em', backgroundColor: '#2FBA90', textAlign: 'center', border: 'none', margin: '0 auto', marginBottom: '2em', marginTop: '1em', fontSize: '20px', boxShadow: '10px 10px 40px -17px rgba(37,39,41,1)', outline: 'none' }}
          onClick={props.handleRedirect.bind(this, redirectPath)}
      >
        Request Order
      </button>
      <hr />
    </div>
  );
}

export default OrderSlipContainer;
