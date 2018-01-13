/**
*
* Vendor
*
*/

import React, { PropTypes } from 'react';

function Vendor(props) { // eslint-disable-line react/prefer-stateless-function
  return (
    <div onClick={props.onVendorClick} className="col-xs-6" style={{ textAlign: 'center', borderBottom: '.5px solid #B5ACAA', cursor: 'pointer', marginBottom: '1em', width: '160px', height: '173px' }}>
      <img
        src={props.src}
        alt="placeholder"
        data={props.data}
        style={{ maxWidth: '142px', maxHeight: '95px' }}
      />
      <h3 style={{ fontSize: '15px', fontWeight: 'bold', textTransform: 'uppercase', marginTop: '.5em' }}>{props.name}</h3>
      <p style={{ color: '#B5ACAA', fontSize: '12px' }}>POPULAR: {props.products[0].productName} </p>
    </div>
  );
}

Vendor.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  name: PropTypes.string,
  onVendorClick: PropTypes.func,
  data: PropTypes.string,
  products: PropTypes.array,
  productName: PropTypes.string,
  budget: PropTypes.number,
};

export default Vendor;
