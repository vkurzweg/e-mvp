/*
 *
 * PasswordResetForm actions
 *
 */

import {
  SET_PASSWORD,
  SET_PASSWORD_CONFIRM,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_REQUEST_SUCCESS,
  CHANGE_PASSWORD_REQUEST_FAILURE,
} from './constants';

export function setPassword(password) {
  return {
    type: SET_PASSWORD,
    password,
  }
}

export function setPasswordConfirm(passwordConfirm) {
  return {
    type: SET_PASSWORD_CONFIRM,
    passwordConfirm,
  }
}


export function changePasswordRequest() {
  return {
    type: CHANGE_PASSWORD_REQUEST,
    payload: true,
  };
}

export function changePasswordRequestSuccess() {
  return {
    type: CHANGE_PASSWORD_REQUEST_SUCCESS,
    payload: false,
  };
}

export function changePasswordRequestFailure() {
  return {
    type: CHANGE_PASSWORD_REQUEST_FAILURE,
    payload: false,
  };
}
