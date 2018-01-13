/**
*
* Product
*
*/

import React from 'react';
import Shrimp from 'data/shrimp.jpg';
import P from './P';
import Check from 'assets/images/checkbox_checked.png';


function Product() {
  return (
    <div style={{ marginLeft: '7%', marginBottom: '3%' }}>
      <img
        src={Shrimp}
        alt="placeholder"
        style={{ width: '75px', verticalAlign: 'top' }}
      />
      <div style={{ display: 'inline-block', marginLeft: '1em', verticalAlign: 'top', textAlign: 'left', marginTop: '-1em' }}>
        <div style={{ display: 'inline-flex' }}>
          <h5 style={{ fontWeight: 'bold' }}>Peppery Cocktail Shrimp</h5>
          <div style={{ display: 'inline-block', textAlign: 'center', marginLeft: '2em' }}>
            <img src={Check} alt="checkbox" />
            <p style={{ fontSize: '10px', color: '#2FBA90' }}>Confirmed!</p>
          </div>
        </div>
        <P style={{ textTransform: 'uppercase', marginTop: '-2em' }}>XYZ Catering</P>
        <div style={{ display: 'inline-flex' }}>
          <P>2 Large Trays</P>
          <div style={{ display: 'inline-block', marginLeft: '2em' }}>
            <p style={{ marginLeft: '7em' }}>$100</p>
          </div>
        </div>
          <button className="btn btn-warning" style={{ backgroundColor: '#FF7A7A', fontSize: '12px', border: 'none', display: 'block' }}>Modify/Cancel</button>
      </div>
    </div>
  );
}

export default Product;
