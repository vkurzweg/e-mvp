/**
*
* Product
*
*/

import React from 'react';
import Tartlettes from 'data/tartlettes.jpg';
import P from './P';
import Uncheck from 'assets/images/checkbox_unchecked.png';


function Product() {
  return (
    <div style={{ marginLeft: '15%', marginBottom: '3%' }}>
      <img
        src={Tartlettes}
        alt="placeholder"
        style={{ width: '200px', verticalAlign: 'top' }}
      />
      <div style={{ display: 'inline-block', marginLeft: '7em', verticalAlign: 'top', textAlign: 'left' }}>
        <h4 style={{ fontWeight: 'bold' }}>Mini Buffalo Chicken Pies</h4>
        <P style={{ textTransform: 'uppercase' }}>All the Catering</P>
        <P>1 Large Tray</P>
        <button className="btn btn-warning" style={{ backgroundColor: '#FF7A7A', fontSize: '12px', border: 'none' }}>Modify/Cancel</button>
      </div>
      <div style={{ display: 'inline-block', marginLeft: '6em' }}>
        <p>$50</p>
      </div>
      <div style={{ display: 'inline-block', textAlign: 'center', marginLeft: '5em' }}>
        <img src={Uncheck} alt="checkbox" />
      </div>
    </div>
  );
}

export default Product;
