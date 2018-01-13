/*
 *
 * VendorOrdersPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import VendorOrdersContainer from './VendorOrdersContainer';
import VendorOrdersContainerMobile from './VendorOrdersContainerMobile';
import { fetchOrders, setOrders, setOrderId, confirmOrder, declineOrder, fetchVendorUser, openModal, closeModal, openDeclineModal, closeDeclineModal, clearAcceptSnackbar, clearDeclineSnackbar } from './actions';
import { selectVendorOrdersPage } from './selectors';
import VendorOrdersHeader from '../../components/VendorOrdersHeader';
import MediaQuery from 'react-responsive';
import MobileTopNavNoSearch from 'components/common/MobileTopNavNoSearch';
import { Tabs, Tab } from 'material-ui/Tabs';
import Snackbar from 'material-ui/Snackbar';


export class VendorOrdersPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.props.fetchOrders();
    this.props.fetchVendorUser();
  }

  render() {
    let display;
    (this.props.orders.length > 0) ? display = 'block' : display = 'none';
    let displayEmpty;
    (this.props.orders.length > 0) ? displayEmpty = 'none' : displayEmpty = 'block';
    return (
      <div>
        <Helmet
          title="VendorOrdersPage"
          meta={[
            { name: 'description', content: 'Description of VendorOrdersPage' },
          ]}
        />
        <MediaQuery minWidth={768}>
          <div style={{ display }}>
            <VendorOrdersHeader
              orders={this.props.orders}
              currentVendor={this.props.currentVendor}
            />
            <VendorOrdersContainer
              isFetchingOrders={this.props.isFetchingOrders}
              orders={this.props.orders}
              setOrderId={this.props.setOrderId}
              confirmOrder={this.props.confirmOrder}
              openModal={this.props.openModal}
              closeModal={this.props.closeModal}
              openDeclineModal={this.props.openDeclineModal}
              closeDeclineModal={this.props.closeDeclineModal}
              declineModalIsOpen={this.props.declineModalIsOpen}
              modalIsOpen={this.props.modalIsOpen}
              declineOrder={this.props.declineOrder}
              clearAcceptSnackbar={this.props.clearAcceptSnackbar}
              clearDeclineSnackbar={this.props.clearDeclineSnackbar}
            />
          </div>
          <div style={{ display: displayEmpty, marginTop: '10%' }}>
            <p style={{ textAlign: 'center' }}>Wecome, {this.props.currentVendor.name}!<br /> This is where you will be able to view and accept orders.</p>
          </div>
          <Snackbar
             open={this.props.isShowingAcceptSnackbar}
             message="Order accepted"
             autoHideDuration={4000}
           />
           <Snackbar
             open={this.props.isShowingDeclineSnackbar}
             message="Order declined"
             autoHideDuration={4000}
           />
        </MediaQuery>

        <MediaQuery maxWidth={767}>
          <div style={{ display }}>
            <MobileTopNavNoSearch />
            <VendorOrdersHeader
              orders={this.props.orders}
              currentVendor={this.props.currentVendor}
            />
            <VendorOrdersContainerMobile
              isFetchingOrders={this.props.isFetchingOrders}
              orders={this.props.orders}
              setOrderId={this.props.setOrderId}
              confirmOrder={this.props.confirmOrder}
              openModal={this.props.openModal}
              closeModal={this.props.closeModal}
              modalIsOpen={this.props.modalIsOpen}
              declineOrder={this.props.declineOrder}
              openDeclineModal={this.props.openDeclineModal}
              closeDeclineModal={this.props.closeDeclineModal}
              declineModalIsOpen={this.props.declineModalIsOpen}
              clearAcceptSnackbar={this.props.clearAcceptSnackbar}
              clearDeclineSnackbar={this.props.clearDeclineSnackbar}
            />
          </div>
          <div style={{ display: displayEmpty }}>
            <MobileTopNavNoSearch />
            <p style={{ textAlign: 'center', marginTop: '10%' }}>Wecome, {this.props.currentVendor.name}!<br /> This is where you will be able to view and accept orders.</p>
          </div>
          <Snackbar
             open={this.props.isShowingAcceptSnackbar}
             message="Order accepted"
             autoHideDuration={4000}
           />
           <Snackbar
             open={this.props.isShowingDeclineSnackbar}
             message="Order declined"
             autoHideDuration={4000}
           />
        </MediaQuery>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const vendorOrdersPageState = selectVendorOrdersPage(state);
  const isFetchingOrders = vendorOrdersPageState.get('isFetchingOrders');
  const orders = vendorOrdersPageState.get('orders');
  console.log('orders', orders)
  const currentVendor = vendorOrdersPageState.get('currentVendor');
  const modalIsOpen = vendorOrdersPageState.get('modalIsOpen');
  const declineModalIsOpen = vendorOrdersPageState.get('declineModalIsOpen');
  const isShowingAcceptSnackbar = vendorOrdersPageState.get('isShowingAcceptSnackbar');
  const isShowingDeclineSnackbar = vendorOrdersPageState.get('isShowingDeclineSnackbar');
  return {
    isFetchingOrders,
    orders,
    currentVendor,
    modalIsOpen,
    declineModalIsOpen,
    isShowingAcceptSnackbar,
    isShowingDeclineSnackbar,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchOrders: () => dispatch(fetchOrders()),
    setOrders: (orders) => dispatch(setOrders(orders)),
    setOrderId: (orderId) => dispatch(setOrderId(orderId)),
    confirmOrder: () => dispatch(confirmOrder()),
    declineOrder: () => dispatch(declineOrder()),
    fetchVendorUser: () => dispatch(fetchVendorUser()),
    setVendorUser: (currentVendor) => dispatch(setVendorUser(currentVendor)),
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal()),
    openDeclineModal: () => dispatch(openDeclineModal()),
    closeDeclineModal: () => dispatch(closeDeclineModal()),
    clearAcceptSnackbar: () => dispatch(clearAccceptSnackbar()),
    clearDeclineSnackbar: () => dispatch(clearDeclineSnackbar()),
  };
}

VendorOrdersPage.propTypes = {
  isFetchingOrders: React.PropTypes.bool,
  orders: React.PropTypes.array,
  fetchOrders: React.PropTypes.func,
  setOrders: React.PropTypes.func,
  setOrderId: React.PropTypes.func,
  confirmOrder: React.PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(VendorOrdersPage);
