/*
 *
 * InfoContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
// import selectInfoContainer from './selectors';
import VendorInfoMobile from 'components/vendor/VendorInfoMobile';
import { browserHistory } from 'react-router';


export class InfoContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      isMapShowing: false,
    }
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.toggleMap = this.toggleMap.bind(this);
    this.handleMessageClick = this.handleMessageClick.bind(this);
    this.handleOrdersClick = this.handleOrdersClick.bind(this);
  }

  showModal() {
    console.log('openModal clicked')
    this.props.openModal();
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  toggleMap() {
    this.setState((prevState) => {
      return { isMapShowing: !prevState.isMapShowing};
    });
  }

  handleMessageClick() {
    browserHistory.push('/messages');
  }

  handleOrdersClick() {
    browserHistory.push('/orders');
  }


  render() {
    return (
      <div className="col-md-3" style={{ padding: '1em', marginTop: '-3em' }}>
        <VendorInfoMobile
          vendor={this.props.vendor}
          isFetchingVendor={this.props.isFetchingVendor}
          orderSlip={this.props.orderSlip}
          handleRedirect={this.props.handleRedirect}
          openModal={this.openModal}
          currentUser={this.props.currentUser}
          event={this.props.event}
          closeModal={this.props.closeModal}
          modalIsOpen={this.props.modalIsOpen}
          removeOrderSlipItem={this.props.removeOrderSlipItem}
          isAuthenticated={this.props.isAuthenticated}
          isPaymentSubmitted={this.props.isPaymentSubmitted}
          toggleMap={this.toggleMap}
          isMapShowing={this.state.isMapShowing}
          setProductQuantity={this.props.setProductQuantity}
          handleMessageClick={this.handleMessageClick}
          handleOrdersClick={this.handleOrdersClick}
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

export default connect(mapDispatchToProps)(InfoContainer);
