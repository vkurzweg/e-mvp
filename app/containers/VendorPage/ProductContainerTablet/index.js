/*
 *
 * ProductContainer
 *
 */

import React from 'react';
import ProductTablet from 'components/vendor/ProductTablet';

export class ProductContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      isFormActive: false,
    };
    this.toggleForm = this.toggleForm.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  toggleForm() {
    this.setState((prevState) => {
      return { isFormActive: !prevState.isFormActive };
    });
  }

  componentDidUpdate(prevProps, prevState) {
  }

  handleAddClick(e) {
    console.log('clicked Add');
    console.log('add event button', e.target)
    const productIndex = e.target.getAttribute('id');
    const product = JSON.parse(e.target.getAttribute('data'));
    const currentLocation = window.location.pathname;
    const vendorId = currentLocation.substr(currentLocation.lastIndexOf('/') + 1);
    this.props.setProductType(productIndex, product.price)
    this.props.setOrderSlip(productIndex, product, vendorId);
    this.toggleForm();
  }

  render() {
    return (
      <div style={{ marginBottom: '5%' }}>
        <ProductTablet
          toggleForm={this.toggleForm}
          isFormActive={this.state.isFormActive}
          product={this.props.product}
          index={this.props.index}
          onAddClick={this.handleAddClick}
          setProductQuantity={this.props.setProductQuantity}
          setProductType={this.props.setProductType}
        />
      </div>
    );
  }
}


export default ProductContainer;
