/**
*
* CatNavItem
*
*/

import React, { PropTypes } from 'react';
import Wrapper from './Wrapper';
import { Link } from 'react-router';


function CatNavItem(props) {
  return (
    <Wrapper onClick={props.handleClick}>
      <Link data-name={props.categoryName} data-url={props.dataUrl} style={{ fontSize: '12px', textTransform: 'uppercase', textDecoration: 'none', color: 'black', lineHeight: '2em' }}>
        {props.categoryName}
      </Link>
    </Wrapper>
  );
}

CatNavItem.propTypes = {
  categoryName: PropTypes.string,
  dataUrl: PropTypes.string,
};

export default CatNavItem;
