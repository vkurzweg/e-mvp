/**
*
* VendorInfo
*
*/

import React from 'react';
import OrderSlipContainer from 'containers/VendorPage/OrderSlipContainer';
import Loading from 'react-loading';
import { toJS } from 'immutable';

function VendorInfo(props) {
  let vendorName = <Loading type='bubbles' />
  let vendorDesc = <Loading type='bubbles' />
  let vendorPhoto = '';
  if (!props.isFetchingVendor && !!props.vendor) vendorName = props.vendor.name
  if (!props.isFetchingVendor && !!props.vendor) vendorDesc = props.vendor.desc
  if (!props.isFetchingVendor && !!props.vendor && props.vendor.photos) vendorPhoto = props.vendor.photos[0];
  let orderSlipDisplay = 'none';
  if (props.orderSlip.size > 0) orderSlipDisplay = 'block';
  return (
    <div>
      <OrderSlipContainer
        display={orderSlipDisplay}
        orderSlip={props.orderSlip}
        vendor={props.vendor}
        openModal={props.openModal}
        closeModal={props.closeModal}
        modalIsOpen={props.modalIsOpen}
        removeOrderSlipItem={props.removeOrderSlipItem}
        handleRedirect={props.handleRedirect}
        event={props.event}
        currentUser={props.currentUser}
        isAuthenticated={props.isAuthenticated}
        isPaymentSubmitted={props.isPaymentSubmitted}
        setProductQuantity={props.setProductQuantity}
      />
      <h4 style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '1em', textTransform: 'uppercase' }}>{vendorName}</h4>
      <img
        src={vendorPhoto}
        alt="placeholder"
        style={{ display: 'block', width: '200px', margin: '0 auto' }}
      />
      <h5 style={{ textAlign: 'center', display: 'block', margin: '0 auto', marginTop: '1em', fontSize: '12px' }}>{vendorDesc}</h5>
      <hr />
    </div>
  );
}

// VendorInfo.propTypes = {
//   src: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.object,
//   ]),
//   vendorName: PropTypes.string,
// };

export default VendorInfo;
