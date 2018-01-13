/**
*
* ArrowRight
*
*/

import React from 'react';
import ArrowRight from 'assets/images/arrow_right.png';



function Arrow(props) {
  return (
    <img
      src={ArrowRight}
      alt="right arrow"
      onClick={props.onClick}
      style={{ position: 'absolute', marginLeft: '6%' }}
    />
  );
}

export default Arrow;
