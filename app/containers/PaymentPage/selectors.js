import { createSelector } from 'reselect';

/**
 * Direct selector to the paymentPage state domain
 */
const selectPaymentPage = (state) => state.get('PaymentPage');
const selectUser = (state) => state.get('auth');
const selectSignUpPage = (state) => state.get('SignUpPage');


/**
 * Other specific selectors
 */


/**
 * Default selector used by PaymentPage
 */


export {
  selectPaymentPage,
  selectUser,
  selectSignUpPage,
};
