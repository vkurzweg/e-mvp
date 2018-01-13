/**
*
* SearchResults
*
*/

import React, { PropTypes } from 'react';
import Loading from 'react-loading';


function SearchResults(props) {
  let vendorsNum = <Loading type='bubbles' style={{ display: 'block', margin: '0 auto'}} />
  if (!props.isFetchingVendors && props.vendorsNum) vendorsNum = props.vendorsNum
  return (
    <div style={{ textAlign: 'center', fontSize: '18px' }}>
      <p>{vendorsNum} vendors in Los Angeles</p>
    </div>
  );
}

SearchResults.propTypes = {
  resultsNumber: PropTypes.number,
};

export default SearchResults;
