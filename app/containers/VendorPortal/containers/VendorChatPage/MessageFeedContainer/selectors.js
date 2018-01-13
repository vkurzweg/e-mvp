import { createSelector } from 'reselect';

/**
 * Direct selector to the messageFeedContainer state domain
 */
const selectVendorChatPage = (state) => state.get('VendorsChatPage');

/**
 * Other specific selectors
 */

export {
  selectVendorChatPage,
};
