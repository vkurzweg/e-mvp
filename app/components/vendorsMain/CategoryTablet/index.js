import React, { PropTypes } from 'react';


function Category(props) { // eslint-disable-line react/prefer-stateless-function
  return (
    <div className="col-md-4" style={{ marginTop: '5%', borderBottom: '1px solid #D8D8D8', cursor: 'pointer' }}>
      <img src={props.src} alt={props.alt} style={{ width: '50%' }} />
      <div style={{ marginTop: '5%', fontSize: '18px', textTransform: 'uppercase' }}>
        <p>{props.categoryName}</p>
      </div>
    </div>
  );
}

Category.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  alt: PropTypes.string,
  categoryName: PropTypes.string,
};

export default Category;
