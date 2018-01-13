/**
*
* ChatOrderVendor
*
*/

import React from 'react';
import Loading from 'react-loading';
import Avatar from 'material-ui/Avatar';


function ChatOrderVendor(props) {
  let vendorName = <Loading type='bubbles' style={{ display: 'block', margin: '0 auto'}} />
  let vendorPhoto = <Loading type='bubbles' style={{ display: 'block', margin: '0 auto'}} />
  let vendorAddress = '';
  let vendorAddress2 = '';
  let vendorCity = '';
  let vendorZip = '';
  console.log(props)
  if (!!props.order) vendorName = props.order.vendor.name
  if (!!props.order) vendorAddress = props.order.vendor.location.address
  if (!!props.order) vendorAddress2 = props.order.vendor.location.address2
  if (!!props.order) vendorCity = props.order.vendor.location.city
  if (!!props.order) vendorZip = props.order.vendor.location.zip
  if (!!props.order) vendorPhoto = props.order.vendor.photos[0]
  // props.order.vendor is the vendor object
  return (
    <div style={{ textAlign: 'center', marginTop: '5%' }}>
      <Avatar src={vendorPhoto} size={40} />
      <h4 style={{ textTransform: 'uppercase' }}>{vendorName}</h4>
      <p style={{ marginBottom: '5%' }}>{vendorAddress} | {vendorCity} | {vendorZip} </p>
    </div>
  );
}

export default ChatOrderVendor;
