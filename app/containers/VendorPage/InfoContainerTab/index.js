/*
 *
 * InfoContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
// import selectInfoContainer from './selectors';
import VendorInfo from 'components/vendor/VendorInfo';
import VendorMapContainer from '../VendorMapContainer';

export class InfoContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  showModal() {
    console.log('openModal clicked')
    this.props.openModal();
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div className="col-md-4" style={{ padding: '1em', marginTop: '-3em', width: '30%', marginLeft: '10%' }}>
        <VendorInfo
          vendor={this.props.vendor}
          isFetchingVendor={this.props.isFetchingVendor}
          orderSlip={this.props.orderSlip}
          openModal={this.showModal}
          handleCreateEvent={this.props.handleCreateEvent}
          event={this.props.event}
          closeModal={this.props.closeModal}
          modalIsOpen={this.props.modalIsOpen}
          removeOrderSlipItem={this.props.removeOrderSlipItem}
        />
        <VendorMapContainer vendor={this.props.vendor} />
      }
      }
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
