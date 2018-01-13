import { createSelector } from 'reselect';

/**
 * Direct selector to the signUp state domain
 */

const selectSignUpPage = (state) => state.get('SignUpPage');
const selectSearch = (state) => state.get('search');
const selectEvent = (state) => state.get('event');
const selectOrders = (state) => state.get('orders');
const selectUser = (state) => state.get('auth');
const selectVendorPage = (state) => state.get('VendorPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SignUp
 */

export {
  selectSignUpPage,
  selectSearch,
  selectEvent,
  selectOrders,
  selectUser,
  selectVendorPage,
};
