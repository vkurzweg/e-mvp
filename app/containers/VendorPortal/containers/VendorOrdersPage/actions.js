/*
 *
 * VendorOrdersPage actions
 *
 */

 /*
  *
  * OrdersPage actions
  *
  */

 import {
   FETCH_ORDERS,
   FETCH_ORDERS_SUCCESS,
   FETCH_ORDERS_FAILURE,
   SET_ORDERS,
   SET_ORDER_ID,
   CONFIRM_ORDER,
   CONFIRM_ORDER_SUCCESS,
   CONFIRM_ORDER_FAILURE,
   DECLINE_ORDER,
   DECLINE_ORDER_SUCCESS,
   DECLINE_ORDER_FAILURE,
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

 export function fetchOrders() {
   return {
     type: FETCH_ORDERS,
     payload: true,
   };
 }

 export function fetchOrdersSuccess() {
   return {
     type: FETCH_ORDERS_SUCCESS,
     payload: false,
   };
 }

 export function fetchOrdersFailure() {
   return {
     type: FETCH_ORDERS_FAILURE,
     payload: false,
   };
 }

 export function setOrders(orders) {
   return {
     type: SET_ORDERS,
     orders,
   };
 }

  export function setOrderId(orderId) {
    return {
      type: SET_ORDER_ID,
      orderId,
    };
  }

  export function confirmOrder() {
    return {
      type: CONFIRM_ORDER,
      payload: true,
    };
  }

  export function confirmOrderSuccess() {
    return {
      type: CONFIRM_ORDER_SUCCESS,
      payload: false,
    };
  }

  export function confirmOrderFailure() {
    return {
      type: CONFIRM_ORDER_FAILURE,
      payload: false,
    };
  }

  export function declineOrder() {
    return {
      type: DECLINE_ORDER,
      payload: true,
    };
  }

  export function declineOrderSuccess() {
    return {
      type: DECLINE_ORDER_SUCCESS,
      payload: false,
    };
  }

  export function declineOrderFailure() {
    return {
      type: DECLINE_ORDER_FAILURE,
      payload: false,
    };
  }

  export function fetchVendorUser() {
    return {
      type: FETCH_VENDOR_USER,
      payload: true,
    };
  }

  export function fetchVendorUserSuccess() {
    return {
      type: FETCH_VENDOR_USER_SUCCESS,
      payload: false,
    };
  }

  export function fetchVendorUserFailure() {
    return {
      type: FETCH_VENDOR_USER_FAILURE,
      payload: false,
    };
  }

  export function setVendorUser(currentVendor) {
    return {
      type: SET_VENDOR_USER,
      currentVendor,
    };
  }

  export function openModal() {
    return {
      type: OPEN_MODAL,
      payload: true,
    };
  }

  export function closeModal() {
    return {
      type: CLOSE_MODAL,
      payload: false,
    };
  }

  export function openDeclineModal() {
    return {
      type: OPEN_DECLINE_MODAL,
      payload: true,
    };
  }

  export function closeDeclineModal() {
    return {
      type: CLOSE_DECLINE_MODAL,
      payload: false,
    };
  }

  export function showAcceptSnackbar() {
    return {
      type: SHOW_ACCEPT_SNACKBAR,
      payload: true,
    };
  }

  export function showDeclineSnackbar() {
    return {
      type: SHOW_DECLINE_SNACKBAR,
      payload: true,
    };
  }

  export function clearAcceptSnackbar() {
    return {
      type: CLEAR_ACCEPT_SNACKBAR,
      payload: false,
    };
  }

  export function clearDeclineSnackbar() {
    return {
      type: CLEAR_DECLINE_SNACKBAR,
      payload: false,
    };
  }
