/**
*
* Category
*
*/

import React, { PropTypes } from 'react';

function CategoryWeb(props) { // eslint-disable-line react/prefer-stateless-function
  let comingSoon = props.comingSoon;
  let display;
  comingSoon ? display = 'block' : display = 'none';
  return (
    <div style={{ marginTop: '5%', cursor: 'pointer' }}>
      <img onClick={props.onCategoryClick} src={props.src} alt={props.alt} style={{ width: '100%' }} name={props.categoryName} data={props.dataUrl} />
      <div style={{ marginTop: '5%', fontSize: '18px', textTransform: 'uppercase' }}>
        <p>{props.categoryName}</p>
        <p style={{ display, fontSize: '14px', color: '#B5ACAA', fontStyle: 'italic' }}>Coming soon!</p>
      </div>
    </div>
  );
}

CategoryWeb.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  alt: PropTypes.string,
  categoryName: PropTypes.string,
  onCategoryClick: PropTypes.func.isRequired,
  dataUrl: PropTypes.string,
};

export default CategoryWeb;
