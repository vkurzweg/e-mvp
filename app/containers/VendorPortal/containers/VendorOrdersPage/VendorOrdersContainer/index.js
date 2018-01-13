/*
 *
 * VendorOrdersContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import VendorOrderContainer from '../VendorOrderContainer';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  tabs: {
    backgroundColor: '#75B2DF',
  },
  inkBar: {
    backgroundColor: '#FF7A7A',
  },
});

export class VendorOrdersContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (value) => {
     this.setState({
       slideIndex: value,
     });
   };

  render() {
    let orders = [];
    if (!this.props.isFetchingOrders && this.props.orders) orders = this.props.orders;
    let requestedOrders = [];
    orders.map((order, idx) => {
      if (order.status === 'REQUESTED') requestedOrders.push(order)
    });
    let acceptedOrders = [];
    orders.map((order, idx) => {
      if (order.status === 'ACCEPTED') acceptedOrders.push(order)
    });
    let declinedOrders = [];
    orders.map((order, idx) => {
      if (order.status === 'DECLINED') declinedOrders.push(order)
    });
    return (
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
          <Tabs
            onChange={this.handleChange}
            value={this.state.slideIndex}
            style={{ backgroundColor: '#75B2DF'}}
          >
            <Tab label="Awaiting Action" value={0} />
            <Tab label="Accepted" value={1} />
            <Tab label="Declined" value={2} />
          </Tabs>
        </MuiThemeProvider>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            { requestedOrders.map( (order, idx, orders) => {
              return (
                <div key={idx-1}>
                  <VendorOrderContainer
                    order={ order }
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
                  <hr key={idx+1} />
                </div>
              );
            })}
          </div>
          <div>
            { acceptedOrders.map( (order, idx, orders) => {
              return (
                <div key={idx-1}>
                  <VendorOrderContainer
                    order={ order }
                    setOrderId={this.props.setOrderId}
                    confirmOrder={this.props.confirmOrder}
                    openModal={this.props.openModal}
                    closeModal={this.props.closeModal}
                    modalIsOpen={this.props.modalIsOpen}
                    declineOrder={this.props.declineOrder}
                    openDeclineModal={this.props.openDeclineModal}
                    closeDeclineModal={this.props.closeDeclineModal}
                    declineModalIsOpen={this.props.declineModalIsOpen}
                  />
                  <hr key={idx+1} />
                </div>
              );
            })}
          </div>
          <div>
            { declinedOrders.map( (order, idx, orders) => {
                return (
                  <div key={idx-1}>
                    <VendorOrderContainer
                      order={ order }
                      setOrderId={this.props.setOrderId}
                      confirmOrder={this.props.confirmOrder}
                      openModal={this.props.openModal}
                      closeModal={this.props.closeModal}
                      modalIsOpen={this.props.modalIsOpen}
                      declineOrder={this.props.declineOrder}
                      openDeclineModal={this.props.openDeclineModal}
                      closeDeclineModal={this.props.closeDeclineModal}
                      declineModalIsOpen={this.props.declineModalIsOpen}
                    />
                    <hr key={idx+1} />
                  </div>
                );
              })}
          </div>
        </SwipeableViews>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(VendorOrdersContainer);
