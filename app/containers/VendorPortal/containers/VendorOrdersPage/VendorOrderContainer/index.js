/*
 *
 * VendorOrderContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import VendorOrderItem from '../../../components/VendorOrderItem';
import Check from 'assets/images/checkbox_checked.png';
import Uncheck from 'assets/images/checkbox_unchecked.png';
import moment from 'moment';
import OrderAcceptModal from '../../../components/OrderAcceptModal';
import OrderDeclineModal from '../../../components/OrderDeclineModal';
import X from 'assets/images/checkbox_x.png';
import Loading from 'react-loading';


export class VendorOrderContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.handleConfirmOrder = this.handleConfirmOrder.bind(this);
    this.showModal = this.showModal.bind(this);
    this.handleDeclineOrder = this.handleDeclineOrder.bind(this);
    this.showDeclineModal = this.showDeclineModal.bind(this);
  }

  handleConfirmOrder() {
    this.props.confirmOrder();
    this.props.closeModal();
  }

  handleDeclineOrder() {
    this.props.declineOrder();
    this.props.closeDeclineModal();
  }

  showModal(orderId) {
    this.props.setOrderId(orderId);
    this.props.openModal();
  }

  showDeclineModal(orderId) {
    this.props.setOrderId(orderId);
    this.props.openDeclineModal();
  }

  render() {
    let products = this.props.order.order_products;
    let src = Uncheck;
    (this.props.order.status === 'ACCEPTED') ? src = Check : src = Uncheck;
    if (this.props.order.status === 'DECLINED') src = X;
    let display = 'none';
    (this.props.order.status === 'ACCEPTED') ? display = 'block' : display = 'none';
    let displayDecline = 'none';
    (this.props.order.status === 'DECLINED') ? displayDecline = 'block' : displayDecline = 'none';
    let displayButton = 'block';
    if (this.props.order.status === 'ACCEPTED' || this.props.order.status === 'DECLINED') displayButton = 'none'
    let date = <Loading type='bubbles' />
    if (this.props.order.event) date = this.props.order.event.date;
    date = moment(date).format('MM/DD/YYYY');
    let customer = '';
    if (this.props.order.event) customer = this.props.order.event.created_by.username;
    let address = '';
    if (this.props.order.event) address = this.props.order.event.location.address;
    let city = '';
    if (this.props.order.event) city = this.props.order.event.location.city;
    let zip = '';
    if (this.props.order.event) zip = this.props.order.event.location.zip
    let occasion = '';
    if (this.props.order.event) occasion = this.props.order.event.occasion
    // calculate order total
    let prices = [];
    products.map((product, idx, products) => {
      prices.push(product.price)
    })
    let orderTotal = prices.reduce((a, b) => a + b, 0);

      return (
        <div style={{display: 'block', margin: '0 auto', marginTop: '5%'}}>
          <div style={{ display: 'block', margin: '0 auto'}}>
            <p style={{ textTransform: 'uppercase', textAlign: 'center' }} ><b>{customer}</b></p>
            <table style={{ width: '30%', margin: '0 auto', marginBottom: '2em' }}>
              <tbody>
                <tr>
                  <td><b>Event Date:</b></td>
                  <td>{date}</td>
                </tr>
                <tr>
                  <td><b>Location:</b></td>
                  <td>{address}, {city}, {zip}</td>
                </tr>
                <tr>
                  <td><b>Occasion:</b></td>
                  <td>{occasion}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{ display: 'inline-block', textAlign: 'center', float: 'right', marginRight: '20em' }}>
            <img src={src} alt="checkbox" />
            <p style={{ fontSize: '10px', color: '#2FBA90', display }} >Order Accepted!</p>
            <p style={{ fontSize: '10px', color: '#FF7A7A', display: displayDecline }} >Order Declined</p>
          </div>
          {products.map((product, idx, products) => {
            return (
              <div key={idx}>
                <VendorOrderItem
                  product={product}
                  key={idx}
                />
              </div>
            )
          })}
          <div style={{ marginBottom: '3em', float: 'right', marginRight: '-20%' }}>
            <p style={{ fontSize: '18px', display: 'block', textAlign: 'center'}}>Order Total: ${orderTotal}</p>
          </div>
          <button
            className="btn btn-success"
            style={{ display: displayButton, width: '10em', backgroundColor: '#2FBA90', textAlign: 'center', border: 'none', margin: '0 auto', marginBottom: '1em', marginTop: '1em', marginLeft: '44%', boxShadow: '10px 10px 40px -17px rgba(37,39,41,1)', outline: 'none' }}
            onClick={this.showModal.bind(this, this.props.order._id)}
          >
              Accept Order
          </button>
          <button className="btn btn-warning"
            style={{ display: displayButton, backgroundColor: '#FF7A7A', width: '10em', border: 'none', textAlign: 'center', margin: '0 auto', marginBottom: '1em', marginTop: '1em', marginLeft: '44%' }}
            onClick={this.showDeclineModal.bind(this, this.props.order._id)}
          >
            Decline Order
          </button>

          <OrderAcceptModal
            customerName={customer}
            handleConfirmOrder={this.handleConfirmOrder}
            closeModal={this.props.closeModal}
            isOpen={this.props.modalIsOpen}
          />
          <OrderDeclineModal
            customerName={customer}
            handleDeclineOrder={this.handleDeclineOrder}
            closeDeclineModal={this.props.closeDeclineModal}
            isOpen={this.props.declineModalIsOpen}
          />
        </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(VendorOrderContainer);
