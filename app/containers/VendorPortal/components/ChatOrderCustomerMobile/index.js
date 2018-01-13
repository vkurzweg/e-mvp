/**
*
* ChatOrderVendor
*
*/

import React from 'react';
import Loading from 'react-loading';
import Avatar from 'material-ui/Avatar';


function ChatOrderCustomer(props) {
  let customerName = <Loading type='bubbles' style={{ display: 'block', margin: '0 auto'}} />
  let customerPhoto = <Loading type='bubbles' style={{ display: 'block', margin: '0 auto'}} />
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
    <div style={{ textAlign: 'center', marginTop: '5%' }}>
      <Avatar src={customerPhoto} size={40} />
      <h4 style={{ textTransform: 'uppercase' }}>{customerName}</h4>
      <p style={{ marginBottom: '5%' }}>{eventAddress} | {eventCity} | {eventZip} </p>
    </div>
  );
}

export default ChatOrderCustomer;
