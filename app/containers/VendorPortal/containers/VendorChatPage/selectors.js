import { createSelector } from 'reselect';
import { toJS } from 'immutable';

/**
 * Direct selector to the vendorChatPage state domain
 */
const selectVendorsChatPage = (state) => state.get('VendorsChatPage');
const selectVendorAuth = (state) => state.get('vendorAuth');

export {
  selectVendorAuth,
  selectVendorsChatPage,
};
