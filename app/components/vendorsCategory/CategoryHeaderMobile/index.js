/**
*
* CategoryHeader
*
*/

import React from 'react';


function CategoryHeader(props) {
  return (
    <div>
      <h2 style={{ fontSize: '20px', textAlign: 'center', textTransform: 'uppercase' }}>{props.category}</h2>
    </div>
  );
}

export default CategoryHeader;
