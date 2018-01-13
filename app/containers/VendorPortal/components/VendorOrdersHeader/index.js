/**
*
* VendorOrdersHeader
*
*/

import React from 'react';



function VendorOrdersHeader(props) {
  return (
    <div style={{ marginTop: '2em', marginBottom: '2em' }}>
      <h4 style={{ textAlign: 'center' }}>Welcome, {props.currentVendor.name}</h4>
      <p style={{ textAlign: 'center' }}>You have {props.orders.length} orders.</p>
      <p style={{ textAlign: 'center', fontStyle: 'italic', marginTop: '2%', fontSize: '12px' }}>Click on the tabs to see orders you've accepted or declined.</p>
      <hr />
    </div>
  );
}

export default VendorOrdersHeader;
