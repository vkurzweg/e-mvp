/**
*
* Vendor
*
*/

import React, { PropTypes } from 'react';

function Vendor(props) { // eslint-disable-line react/prefer-stateless-function
  return (
    <div id={props.id} data={props.data} onClick={props.onVendorClick} className="col-md-6" style={{ textAlign: 'center', borderBottom: '.5px solid #B5ACAA', cursor: 'pointer', marginBottom: '1em', height: '205px', overflow: 'hidden' }}>
      <img
        src={props.src}
        alt="placeholder"
        data={props.data}
        style={{ maxWidth: '195px', maxHeight: '130px', overflow: 'hidden' }}
        id={props.id}
      />
      <h3 id={props.id} data={props.data} style={{ fontSize: '15px', fontWeight: 'bold', textTransform: 'uppercase', marginTop: '.5em' }}>{props.name}</h3>
      <p id={props.id} data={props.data} style={{ color: '#B5ACAA', fontSize: '12px' }}>POPULAR: Product Name </p>
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
