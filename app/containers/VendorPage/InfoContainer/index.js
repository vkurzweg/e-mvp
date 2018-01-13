/*
 *
 * InfoContainer
 *
 */

import React from 'react';
// import selectInfoContainer from './selectors';
import VendorInfo from 'components/vendor/VendorInfo';
import VendorMapContainer from '../VendorMapContainer';
import { browserHistory } from 'react-router';

function InfoContainer(props) {
  console.log('info container props', props)
  return (
    <div className="col-xs-3" style={{ marginTop: '-3em' }}>
      <VendorInfo
        vendor={props.vendor}
        isFetchingVendor={props.isFetchingVendor}
        orderSlip={props.orderSlip}
        openModal={props.openModal}
        handleRedirect={props.handleRedirect}
        event={props.event}
        closeModal={props.closeModal}
        modalIsOpen={props.modalIsOpen}
        removeOrderSlipItem={props.removeOrderSlipItem}
        currentUser={props.currentUser}
        isAuthenticated={props.isAuthenticated}
        isPaymentSubmitted={props.isPaymentSubmitted}
      />
      <VendorMapContainer vendor={props.vendor} />
    </div>
  );
}

export default InfoContainer;
