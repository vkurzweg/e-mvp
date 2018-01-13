/*
 *
 * PaymentPage actions
 *
 */

import {
  SUBMIT_PAYMENT,
  SUBMIT_PAYMENT_SUCCESS,
  SUBMIT_PAYMENT_FAILURE,
  SET_PAYMENT,
  SHOW_SNACKBAR,
} from './constants';

export function submitPayment(token) {
  return {
    type: SUBMIT_PAYMENT,
    payload: true,
    token,
  };
}

export function submitPaymentSuccess() {
  return {
    type: SUBMIT_PAYMENT_SUCCESS,
    payload: false,
  };
}

export function submitPaymentFailure() {
  return {
    type: SUBMIT_PAYMENT_FAILURE,
    payload: false,
    isPaymentFailed: true,
  };
}

export function setPayment() {
  return {
    type: SET_PAYMENT,
    payload: true,
  };
}

export function showSnackbar() {
  return {
    type: SHOW_SNACKBAR,
    payload: true,
  };
}
