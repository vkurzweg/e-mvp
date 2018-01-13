/**
*
* VendorHeaderMobile
*
*/

import React from 'react';



function VendorHeaderMobile(props) {
  let vendorName = 'Not Found';
  if (!props.isFetchingVendor && props.vendor) vendorName = props.vendor.name;
  return (
    <div>
      <h4 style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '1em', textTransform: 'uppercase' }}>{vendorName}</h4>
    </div>
  );
}

export default VendorHeaderMobile;
