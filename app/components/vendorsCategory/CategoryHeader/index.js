/**
*
* CategoryHeader
*
*/

import React from 'react';


function CategoryHeader(props) {
  return (
    <div>
      <h2 style={{ fontSize: '20px', textAlign: 'center', textTransform: 'uppercase', marginBottom: '2em', marginTop: '2%' }}>{props.category}</h2>
    </div>
  );
}

export default CategoryHeader;
