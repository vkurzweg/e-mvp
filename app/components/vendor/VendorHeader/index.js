/**
*
* VendorHeader
*
*/

import React from 'react';
import Arrow from 'assets/images/back.png';


function VendorHeader(props) {
  return (
    <div style={{ cursor: 'pointer', marginTop: '-25px' }} className="container">
      <div onClick={props.onBackClick} className="row" style={{ marginLeft: '3em', display: 'inline' }}>
        <img src={Arrow} alt="back arrow" />
        <p style={{ display: 'inline', marginLeft: '.5em', fontWeight: 'bold', textTransform: 'uppercase', width: '75%' }}>More {props.category}</p>
      </div>
    </div>
  );
}

export default VendorHeader;
