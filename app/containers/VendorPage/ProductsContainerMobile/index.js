/*
 *
 * ProductsContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
// import selectProductsContainer from './selectors';
import ProductContainerMobile from '../ProductContainerMobile';

export class ProductsContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    let products = [];
    if (!this.props.isFetchingVendor && this.props.vendor && this.props.vendor.products) products = this.props.vendor.products;
    return (
      <div style={{ marginLeft: '1em', width: '56%', marginRight: '2em', marginTop: '-2em', paddingBottom: '25%' }}>
        { products.map( (product, idx, products) => {
          console.log(product)
          return (
            <ProductContainerMobile
              key={idx}
              index={idx}
              product={ product }
              setProductQuantity={this.props.setProductQuantity}
              setProductType={this.props.setProductType}
              setOrderSlip={this.props.setOrderSlip}
            />
          )
        })}
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
