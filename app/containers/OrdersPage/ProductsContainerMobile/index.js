/*
 *
 * ProductsContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
// import selectProductsContainer from './selectors';
import ProductMobile from 'components/orders/ProductMobile';

export class ProductsContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <ProductMobile />
        <hr />
        <h4 style={{ textAlign: 'right', marginRight: '2em' }}>Grand Total: $150</h4>
        <div style={{ marginBottom: '4em' }}>
          <button className="btn btn-success" style={{ fontSize: '18px', backgroundColor: '#B5ACAA', width: '15em', border: 'none', display: 'block', margin: '0 auto', marginTop: '2em' }}>BOOK EVENT</button>
          <p style={{ fontSize: '10px', fontStyle: 'italic', textAlign: 'center', marginTop: '1em' }}>This button will become active when all orders are confirmed</p>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = selectProductsContainer();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapDispatchToProps)(ProductsContainer);
