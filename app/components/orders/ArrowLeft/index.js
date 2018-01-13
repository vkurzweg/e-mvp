/**
*
* ArrowLeft
*
*/

import React from 'react';
import ArrowLeft from 'assets/images/arrow_left.png';


function Arrow(props) {
  return (
      <img
        src={ArrowLeft}
        alt="arrow left"
        onClick={props.onClick}
        style={{ position: 'absolute', marginTop: '10.5%', marginRight: '5%' }}
      />
  );
}

export default Arrow;
