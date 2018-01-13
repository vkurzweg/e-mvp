/*
 *
 * PasswordResetContainer actions
 *
 */

import {
  SET_EMAIL,
  RESET_REQUEST,
  RESET_REQUEST_SUCCESS,
  RESET_REQUEST_FAILURE,
} from './constants';

export function setEmail(email) {
  return {
    type: SET_EMAIL,
    email,
  }
}

export function resetRequest() {
  return {
    type: RESET_REQUEST,
    payload: true,
  };
}

export function resetRequestSuccess() {
  return {
    type: RESET_REQUEST_SUCCESS,
    payload: false,
  };
}

export function resetRequestFailure() {
  return {
    type: RESET_REQUEST_FAILURE,
    payload: false,
  };
}

