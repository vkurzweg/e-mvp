/**
*
* VendorInfo
*
*/

import React from 'react';
import Loading from 'react-loading';
import OrderSlipContainer from 'containers/VendorPage/OrderSlipContainer';
import VendorMapContainerMobile from 'containers/VendorPage/VendorMapContainerMobile';



function VendorInfo(props) {
  let vendorName = <Loading type='bubbles' />
  let vendorDesc = <Loading type='bubbles' />
  let vendorPhoto = '';
  if (!props.isFetchingVendor && !!props.vendor) vendorName = props.vendor.name
  if (!props.isFetchingVendor && !!props.vendor) vendorDesc = props.vendor.desc
  if (!props.isFetchingVendor && !!props.vendor && props.vendor.photos) vendorPhoto = props.vendor.photos[0];

  let orderSlipDisplay = 'none';
  if (props.orderSlip.size > 0) orderSlipDisplay = 'block';
  let display = 'block';
  (props.isMapShowing) ? display = 'block' : display = 'none';
  return (
    <div>
      <p style={{ textAlign: 'center', marginTop: '3%', marginBottom: '3%' }}>After requesting an order, you can <span onClick={props.handleMessageClick} style={{ textDecoration: 'none', color: '#5975BB', fontWeight: 'bold' }}>message</span> the vendor to customize and confirm. <br /> When all <span onClick={props.handleOrdersClick} style={{ textDecoration: 'none', color: '#5975BB', fontWeight: 'bold' }}>orders</span> are confirmed, pay with one click!</p>
      <h4 style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '1em', textTransform: 'uppercase' }}>{vendorName}</h4>
      <img
        src={vendorPhoto}
        alt="placeholder"
        style={{ display: 'block', width: '150px', margin: '0 auto' }}
      />
      <h5 style={{ textAlign: 'center', marginLeft: '1em', marginTop: '1em', fontSize: '12px' }}>{vendorDesc}</h5>
      <h5 onClick={props.toggleMap} style={{ textAlign: 'center', marginLeft: '1em', marginTop: '1em', fontSize: '12px', color: '#5975BB' }}>View Map</h5>
      <div style={{ display, margin: '0 auto' }}>
        <VendorMapContainerMobile
          vendor={props.vendor}
        />
      </div>
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

// <div style={{ display: 'inline-flex' }}>
//   <img
//     src={vendorPhoto}
//     alt="placeholder"
//     style={{ width: '50px', height: '50px' }}
//   />
//   <p style={{ textAlign: 'left', marginLeft: '1em', marginTop: '1em' }}>{vendorDesc}</p>
// </div>
// <hr />
// <div style={{ display: 'inline-flex' }}>
//   <div>
//     <h4 style={{ fontSize: '14px', textTransform: 'uppercase', textAlign: 'center', fontWeight: 'bold' }}></h4>
//     <P>SELECTED ITEM</P><MinusStyle src={Minus} alt="delete" />
//     <P>SELECTED ITEM</P><MinusStyle src={Minus} alt="delete" />
//     <button
//       className="btn btn-success"
//       style={{ display: 'block', width: '8em', backgroundColor: '#2FBA90', textAlign: 'center', border: 'none', margin: '0 auto', marginBottom: '1em', marginTop: '1em', fontSize: '20px', boxShadow: '10px 10px 40px -17px rgba(37,39,41,1)' }}>
//         Request Order
//     </button>
//   </div>
// </div>
