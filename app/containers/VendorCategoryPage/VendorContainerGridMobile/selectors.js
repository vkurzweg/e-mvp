import { createSelector } from 'reselect';

/**
 * Direct selector to the vendorContainer state domain
 */
const selectVendorContainerDomain = () => (state) => state.get('vendorContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by VendorContainer
 */

const selectVendorContainer = () => createSelector(
  selectVendorContainerDomain(),
  (substate) => substate.toJS()
);

export default selectVendorContainer;
export {
  selectVendorContainerDomain,
};
