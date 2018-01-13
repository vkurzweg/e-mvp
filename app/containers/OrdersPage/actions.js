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
  CAPTURE_PAYMENT,
  CAPTURE_PAYMENT_SUCCESS,
  CAPTURE_PAYMENT_FAILURE,
  SET_ORDER,
  DELETE_ORDER,
  DELETE_ORDER_SUCCESS,
  DELETE_ORDER_FAILURE,
  SET_EVENT,
  SET_ORDERS_EVENT,
  OPEN_SUCCESS_MODAL,
  CLOSE_SUCCESS_MODAL,
  OPEN_MODAL,
  CLOSE_MODAL,
  SHOW_SNACKBAR,
  SET_USER_EVENTS,
  CHANGE_EVENT,
  UNSET_PAYMENT,
  CLEAR_CURRENT_EVENT,
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

export function setOrder(currentOrder) {
  return {
    type: SET_ORDER,
    currentOrder,
  };
}

export function deleteOrder(orderId) {
  return {
    type: DELETE_ORDER,
    payload: true,
    orderId,
  };
}

export function deleteOrderSuccess() {
  return {
    type: DELETE_ORDER_SUCCESS,
    payload: false,
  };
}

export function deleteOrderFailure() {
  return {
    type: DELETE_ORDER_FAILURE,
    payload: false,
  };
}

export function capturePayment() {
  return {
    type: CAPTURE_PAYMENT,
    payload: true,
  };
}

export function capturePaymentSuccess() {
  return {
    type: CAPTURE_PAYMENT_SUCCESS,
    payload: false,
  };
}

export function capturePaymentFailure() {
  return {
    type: CAPTURE_PAYMENT_FAILURE,
    payload: false,
    isCaptureFailed: true,
  };
}

export function unsetPayment() {
  return {
    type: UNSET_PAYMENT,
    isPaymentSubmitted: false,
  };
}

export function setEvent(event) {
  return {
    type: SET_EVENT,
    event,
  };
}

export function setOrdersEvent(event) {
  return {
    type: SET_ORDERS_EVENT,
    event,
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

export function openSuccessModal() {
  return {
    type: OPEN_SUCCESS_MODAL,
    payload: true,
  };
}

export function closeSuccessModal() {
  return {
    type: CLOSE_SUCCESS_MODAL,
    payload: false,
  };
}

export function showSnackbar() {
  return {
    type: SHOW_SNACKBAR,
    payload: true,
  };
}

export function setUserEvents(userEvents) {
  return {
    type: SET_USER_EVENTS,
    userEvents,
  }
}

export function clearCurrentEvent() {
  return {
    type: CLEAR_CURRENT_EVENT,
  }
}


