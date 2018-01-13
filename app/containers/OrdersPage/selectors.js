import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

/**
 * Direct selector to the ordersPage state domain
 */
const selectOrdersPage = (state) => state.get('OrdersPage');
const selectSearch = (state) => state.get('search');
const selectSearchPageState = (state) => state.get('SearchPage');
const selectOrders = (state) => state.get('orders');
const selectUser = (state) => state.get('auth');
const selectProducts = (state) => state.get('products');
const selectEventPage = (state) => state.get('EventPage');
const selectEvent = (state) => state.get('event');
const selectUserEvents = (state) => {
  const orderState = state.get('OrdersPage');
  console.log(orderState)
  if (orderState.size > 0) {
    return orderState.get('userEvents')
  } else {
    return fromJS([{occasion: ''}])
  }

}


/**
 * Other specific selectors
 */


/**
 * Default selector used by OrdersPage
 */


export {
  selectOrdersPage,
  selectSearch,
  selectSearchPageState,
  selectOrders,
  selectUser,
  selectProducts,
  selectEventPage,
  selectEvent,
  selectUserEvents,
};
