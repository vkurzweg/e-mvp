/*
 *
 * VendorOrdersPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  FETCH_ORDERS,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAILURE,
  SET_ORDERS,
  SET_ORDER_ID,
  FETCH_VENDOR_USER,
  FETCH_VENDOR_USER_SUCCESS,
  FETCH_VENDOR_USER_FAILURE,
  SET_VENDOR_USER,
  OPEN_MODAL,
  CLOSE_MODAL,
  OPEN_DECLINE_MODAL,
  CLOSE_DECLINE_MODAL,
  SHOW_ACCEPT_SNACKBAR,
  SHOW_DECLINE_SNACKBAR,
  CLEAR_ACCEPT_SNACKBAR,
  CLEAR_DECLINE_SNACKBAR,
} from './constants';

const initialState = fromJS({
  orders: [],
  isFetchingOrders: false,
  currentOrder: {},
  currentVendor: {},
  isFetchingVendorUser: false,
  modalIsOpen: false,
  declineModalIsOpen: false,
  isShowingAcceptSnackbar: false,
  isShowingDeclineShackbar: false,
});

function vendorOrdersPageReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ORDERS:
      return state.set('isFetchingOrders', fromJS(action.payload));
    case FETCH_ORDERS_SUCCESS:
      return state.set('isFetchingOrders', fromJS(action.payload));
    case FETCH_ORDERS_FAILURE:
      return state.set('isFetchingOrders', fromJS(action.payload));
    case SET_ORDERS:
      return state.set('orders', action.orders);
    case SET_ORDER_ID:
      return state.set('orderId', action.orderId);
    case FETCH_VENDOR_USER:
      return state.set('isFetchingVendorUser', fromJS(action.payload));
    case FETCH_VENDOR_USER_SUCCESS:
      return state.set('isFetchingVendorUser', fromJS(action.payload));
    case FETCH_VENDOR_USER_FAILURE:
      return state.set('isFetchingVendorUser', fromJS(action.payload));
    case SET_VENDOR_USER:
      return state.set('currentVendor', action.currentVendor);
    case OPEN_MODAL:
      return state.set('modalIsOpen', fromJS(action.payload));
    case CLOSE_MODAL:
      return state.set('modalIsOpen', fromJS(action.payload));
    case OPEN_DECLINE_MODAL:
      return state.set('declineModalIsOpen', fromJS(action.payload));
    case CLOSE_DECLINE_MODAL:
      return state.set('declineModalIsOpen', fromJS(action.payload));
    case SHOW_ACCEPT_SNACKBAR:
      return state.set('isShowingAcceptSnackbar', fromJS(action.payload));
    case SHOW_DECLINE_SNACKBAR:
      return state.set('isShowingDeclineSnackbar', fromJS(action.payload));
    case CLEAR_ACCEPT_SNACKBAR:
      return state.set('isShowingAcceptSnackbar', fromJS(action.payload));
    case CLEAR_DECLINE_SNACKBAR:
      return state.set('isShowingDeclineSnackbar', fromJS(action.payload));
    default:
      return state;
  }
}

export default vendorOrdersPageReducer;
