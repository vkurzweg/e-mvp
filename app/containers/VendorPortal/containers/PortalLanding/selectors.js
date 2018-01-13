import { createSelector } from 'reselect';

const selectLoginPage = (state) => state.get('loginPage');
const selectPortalLanding = (state) => state.get('VendorLanding');
const selectVendorUser = (state) => state.get('vendorAuth');

export {
  selectPortalLanding,
  selectVendorUser,
  selectLoginPage,
}
