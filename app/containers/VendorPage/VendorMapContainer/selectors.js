import { createSelector } from 'reselect';

/**
 * Direct selector to the vendorMapContainer state domain
 */
const selectVendorMapContainerDomain = () => (state) => state.get('vendorMapContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by VendorMapContainer
 */

const selectVendorMapContainer = () => createSelector(
  selectVendorMapContainerDomain(),
  (substate) => substate.toJS()
);

export default selectVendorMapContainer;
export {
  selectVendorMapContainerDomain,
};
