import { createSelector } from 'reselect';

/**
 * Direct selector to the vendorOrdersPage state domain
 */
const selectVendorOrdersPage = (state) => state.get('VendorOrdersPage');
const selectVendorAuth = (state) => state.get('vendorAuth');
/**
 * Other specific selectors
 */


/**
 * Default selector used by VendorOrdersPage
 */

export {
  selectVendorOrdersPage,
  selectVendorAuth,
};
