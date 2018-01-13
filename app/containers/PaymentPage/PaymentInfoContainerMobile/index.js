/*
 *
 * PaymentInfoContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Snackbar from 'material-ui/Snackbar';
import Button from './Button';
import Loading from 'react-loading';


const style = {
  base: {
    fontSize: '16px',
    lineHeight: '24px',
  },
};

const stripe = Stripe('pk_test_epr5vKaqfWXPA55pKOeupwOr');
const elements = stripe.elements();
const card = elements.create('card', { style });

export class PaymentInfoContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      isPaymentSubmitted: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.stripeTokenHandler = this.stripeTokenHandler.bind(this);
  }

  componentDidMount() {
    card.mount('#card-element')
  }

  stripeTokenHandler(token) {
     this.props.submitPayment(token);
     browserHistory.goForward();
  }

  handleChange(e) {
    const displayError = document.getElementById('card-errors');
    card.addEventListener('change', function(event) {
      if (e.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
    });
  }

  handleSubmit(e) {
    var self = this;
    e.preventDefault();
    stripe.createToken(card).then(function(result) {
      if (result.error) {
        // Inform the user if there was an error
        let errorElement = document.getElementById('card-errors');
        errorElement.textContent = result.error.message;
      } else {
        console.log('token', result.token)
        self.stripeTokenHandler(result.token);
        // Send the token to your server
      }
    }).catch(function(err){
      console.log(err)
    });
    this.props.setPayment();
  }


  render() {
    let displayForm;
    this.props.isPaymentSubmitted ? displayForm = 'none' : displayForm = 'block'
    let displayMessage;
    this.props.isPaymentSubmitted ? displayMessage = 'block' : displayMessage = 'none'
    let displayError;
    (!this.props.isSubmittingPayment && this.props.isPaymentFailed) ? displayError = 'block' : displayError = 'none';
    let displayLoading;
    this.props.isSubmittingPayment ? displayLoading = 'block' : displayLoading = 'none';
    return (
      <div style={{ display: 'block', margin: '0 auto', width: '80%', marginTop: '3em', paddingBottom: '25%' }}>
        <div style={{ display: displayForm }}>
          <p style={{ textAlign: 'center' }}>Please enter a payment method to continue. <br /> Your card will not be charged until after all orders are confirmed.</p>
          <form method="post" id="payment-form" onSubmit={this.handleSubmit}>
            <div className="form-row">
              <label htmlFor="card-element">
                Credit or debit card
              </label>
              <div id="card-element" onChange={this.handleChange} style={{ marginTop: '10%', marginBottom: '10%' }}></div>
              <div id="card-errors"></div>
            </div>
            <p style={{ display: displayError, color: 'red', textAlign: 'center' }}>Payment failed. Please try again.</p>
            <Button className="btn btn-success">
              Submit Payment
            </Button>
          </form>
        </div>
        <div style={{ display: displayLoading }}>
          <Loading type='spin' />
        </div>
        <div style={{ display: displayMessage }}>
          <p style={{ textAlign: 'center', marginTop: '10%' }}>You have a payment method on file.</p>
        </div>
        <Snackbar
           open={this.props.isShowingSnackbar}
           message="Payment added"
           autoHideDuration={4000}
         />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(null, mapDispatchToProps)(PaymentInfoContainer);
