/**
*
* ChatOrderVendor
*
*/

import React from 'react';
import Loading from 'react-loading';
import Avatar from 'material-ui/Avatar';


function ChatOrderVendor(props) {
  let customerName = '';
  let customerPhoto = '';
  let eventAddress = '';
  let eventCity = '';
  let eventZip = '';
  console.log(props)
  if (!!props.order) customerName = props.order.created_by.name
  if (!!props.order) eventAddress = props.order.event.location.address
  if (!!props.order) eventCity = props.order.event.location.city
  if (!!props.order) eventZip = props.order.event.location.zip
  if (!!props.order) customerPhoto = props.order.created_by.photo
  return (
    <div style={{ textAlign: 'center', marginBottom: '10%' }}>
      <Avatar src={customerPhoto} size={80} />
      <h4 style={{ textTransform: 'uppercase' }}>{customerName}</h4>
      <p>{eventAddress} | {eventCity} | {eventZip} </p>
    </div>
  );
}

export default ChatOrderVendor;
