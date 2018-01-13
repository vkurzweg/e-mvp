/*
 *
 * ProfilePage actions
 *
 */

import {
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from './constants';

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
