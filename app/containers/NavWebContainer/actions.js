/*
 *
 * NavWebContainer actions
 *
 */

import {
  SET_VENDOR_CATEGORY,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from './constants';

export function setVendorCategory(category) {
  return {
    type: SET_VENDOR_CATEGORY,
    category,
  };
}

export function logout() {
  return {
    type: LOGOUT,
    payload: true,
  };
}

export function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
    payload: false,
  };
}

export function logoutFailure() {
  return {
    type: LOGOUT_FAILURE,
    payload: false,
  };
}
