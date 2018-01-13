/*
 *
 * ProductsContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
// import selectProductsContainer from './selectors';
import ProductContainer from '../ProductContainer';
import { browserHistory } from 'react-router';


export class ProductsContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.handleMessageClick = this.handleMessageClick.bind(this);
    this.handleOrdersClick = this.handleOrdersClick.bind(this);
  }

  handleMessageClick() {
    browserHistory.push('/messages');
  }

  handleOrdersClick() {
    browserHistory.push('/orders');
  }


  render() {
    let products = [];
    if (!this.props.isFetchingVendor && this.props.vendor && this.props.vendor.products) products = this.props.vendor.products;
    return (
      <div className="col-xs-7">
        <p style={{ textAlign: 'center', marginTop: '-10%', marginBottom: '3%' }}>After you request an order, you can <span onClick={this.handleMessageClick} style={{ textDecoration: 'none', color: '#5975BB', fontWeight: 'bold', cursor: 'pointer' }}>message</span> the vendor to customize & confirm. <br /> When all of your <span onClick={this.handleOrdersClick} style={{ textDecoration: 'none', color: '#5975BB', fontWeight: 'bold', cursor: 'pointer' }}>orders</span> are confirmed, you can pay for all of them at once!</p>
        { products.map( (product, idx, products) => {
          return (
            <ProductContainer
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
