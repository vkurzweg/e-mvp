import { createSelector } from 'reselect';
/**
 * Direct selector to the homePage state domain
 */
const selectLoginPage = (state) => state.get('loginPage');
const selectSearch = (state) => state.get('search');
const selectVendorUser = (state) => state.get('vendorAuth');

export {
  selectLoginPage,
  selectVendorUser,
}
