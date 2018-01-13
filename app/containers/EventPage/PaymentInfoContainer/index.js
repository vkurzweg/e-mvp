/*
 *
 * PaymentInfoContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';

export class PaymentInfoContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <p style={{ fontStyle: 'bold' }}>Pre-Authorize Payment </p>
        <p style={{ fontSize: '12px' }}>(Your card will not be charged. Once all vendors confirm your orders, you may authorize payment.)</p>
        <hr style={{ marginTop: '2em', marginBottom: '2em' }} />

      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(PaymentInfoContainer);
