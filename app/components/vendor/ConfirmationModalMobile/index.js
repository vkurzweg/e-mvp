/**
*
* ConfirmationModal
*
*/

import React from 'react';
import Modal from 'react-modal';
import TextField from 'material-ui/TextField';
import OrderSlipItem from 'components/vendor/OrderSlipItem';
import X from 'assets/images/exit.png';
import Checkbox from 'material-ui/Checkbox';
import { toJS } from 'immutable';

const customStyles = {
  content: {
    top: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    marginTop: '20px',
    width: '90%'
  },
};

function ConfirmationModal(props) {
  let items = props.orderSlip;
  let vendorName = 'NOT FOUND'
  if (!props.isFetchingVendor && props.vendor) vendorName = props.vendor.name
  let prices = []
  items.map((item, idx) => {
    if(item !== undefined) {
    prices.push(item.get('total'));
  }})
  let orderTotal = '';
  let flatDeliveryRate = 0;
  let deliveryRate = 0;
  if (prices.length > 0) orderTotal = prices.reduce((a, b) => a + b, 0)
  if (props.isDeliveryAdded && props.vendor && props.vendor.flat_delivery_rate) flatDeliveryRate = props.vendor.flat_delivery_rate;
  if (props.isDeliveryAdded && props.vendor && props.vendor.delivery_rate) deliveryRate = props.vendor.delivery_rate;
  let flatTotal = orderTotal + flatDeliveryRate;
  let rateTotal = orderTotal + (orderTotal * deliveryRate);
  let total = 0;
  let deliveryFee = 0
  if (rateTotal >= flatTotal) {
    total = rateTotal;
    if (props.isDeliveryAdded) deliveryFee = orderTotal * deliveryRate;
  } else {
    total = flatTotal;
    if (props.isDeliveryAdded) deliveryFee = flatDeliveryRate;
  }

  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        style={customStyles}
        contentLabel="Order Request Confirmation"
      >
        <img src={X} alt="exit icon" onClick={props.closeModal} style={{ float: 'right', cursor: 'pointer' }} />
        <h5 style={{ fontWeight: 'bold', textAlign: 'center' }}>{vendorName} Order Request</h5>
        {items.map((item, idx) => {
          return (
            <div key={idx}>
              <OrderSlipItem
                orderSlipItem={item}
                index={idx}
                removeOrderSlipItem={props.removeOrderSlipItem}
              />
              <TextField
                id={idx.toString()}
                onChange={props.handleNotes}
                hintText="Enter details here to customize your order"
                style={{ fontSize: '12px' }}
              />
            </div>
            )
          })}
          <Checkbox
            label="Add Delivery"
            checked={props.isDeliveryAdded}
            onCheck={props.handleDelivery}
            style={{ fontFamily: 'Raleway', marginLeft: '2%'}}
          />
          <p style={{ fontSize: '10px', textAlign: 'center' }}>Note: {vendorName} charges a delivery rate of {deliveryRate * 100}%</p>
          <p style={{ fontSize: '10px', textAlign: 'center' }}>{vendorName} charges a minimum delivery fee of ${flatDeliveryRate}. </p>
          <p style={{ fontSize: '10px', textAlign: 'right', marginRight: '10%' }}>Delivery Fee: {deliveryFee}<br /></p>
          <p style={{ textAlign: 'right', marginRight: '10%', fontWeight: 'bold' }}>Total: ${total}</p>

        <button
          onClick={props.createOrder}
          data={JSON.stringify(props.vendor)}
          style={{ backgroundColor: '#5975BB', width: '16em', height: '35px', display: 'block', borderRadius: '5px', margin: '0 auto', color: '#FAFAFA', outline: 'none' }}>Submit Order Request</button>
      </Modal>
    </div>
  );
}

export default ConfirmationModal;
