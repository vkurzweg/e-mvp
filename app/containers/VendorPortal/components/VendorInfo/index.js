/**
*
* VendorInfo
*
*/

import React from 'react';
import Avatar from 'material-ui/Avatar';
import { toJS } from 'immutable';



function VendorInfo(props) {
  let name = '';
  let email = '';
  let photo = '';
  let user = null;
  if (!!props.currentVendor) user = props.currentVendor
  if (!!user && user.get('name')) name = user.get('name');
  if (!!user && user.get('email')) email = user.get('email');
  if (!!user && user.get('photo')) photo = user.get('photo');
  return (
    <div>
      <div style={{ display: 'block', margin: '0 auto', marginTop: '2em' }}>
        <Avatar
          src={photo}
          size={100}
          style={{ display: 'block', margin: '0 auto' }}
        />
      </div>
      <div style={{ textAlign: 'center', marginTop: '2em' }}>
        <h5>{name}</h5>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default VendorInfo;
