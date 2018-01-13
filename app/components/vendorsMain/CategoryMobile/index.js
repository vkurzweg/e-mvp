/**
*
* Category
*
*/

import React, { PropTypes } from 'react';


function CategoryMobile(props) { // eslint-disable-line react/prefer-stateless-function
  let comingSoon = props.comingSoon;
  let display;
  comingSoon ? display = 'block' : display = 'none';
  return (
    <div className="col-xs-6" style={{ marginTop: '5%', width: '50%', cursor: 'pointer' }}>
      <img onClick={props.onCategoryClick} src={props.src} alt={props.alt} style={{ width: '100%' }} name={props.categoryName} data={props.dataUrl} />
      <div style={{ marginTop: '5%', fontSize: '14px', textTransform: 'uppercase' }}>
        <p>{props.categoryName}</p>
        <p style={{ display, fontSize: '12px', color: '#B5ACAA', fontStyle: 'italic' }}>Coming soon!</p>
      </div>
    </div>
  );
}

CategoryMobile.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  alt: PropTypes.string,
  categoryName: PropTypes.string,
  onCategoryClick: PropTypes.func,
  dataUrl: PropTypes.string,
};

export default CategoryMobile;
