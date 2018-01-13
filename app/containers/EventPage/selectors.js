import { createSelector } from 'reselect';

/**
 * Direct selector to the eventPage state domain
 */
const selectEventPage = (state) => state.get('EventPage');
const selectSearch = (state) => state.get('search');
const selectEvent = (state) => state.get('event');
const selectOrders = (state) => state.get('orders');
const selectUser = (state) => state.get('auth');


/**
 * Other specific selectors
 */


/**
 * Default selector used by EventPage
 */

export {
  selectEventPage,
  selectSearch,
  selectEvent,
  selectOrders,
  selectUser,
};
