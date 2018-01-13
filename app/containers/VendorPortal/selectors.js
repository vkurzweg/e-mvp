import { createSelector } from 'reselect';
import { toJS } from 'immutable';

/**
 * Direct selector to the vendorPortal state domain
 */
const selectVendorPortalDomain = () => (state) => state.get('vendorPortal');

/**
 * Other specific selectors
 */


/**
 * Default selector used by VendorPortal
 */

const selectVendorPortal = () => createSelector(
  selectVendorPortalDomain(),
  (substate) => substate.toJS()
);

export default selectVendorPortal;
export {
  selectVendorPortalDomain,
};
