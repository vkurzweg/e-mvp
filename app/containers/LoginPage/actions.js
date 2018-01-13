/*
 *
 * LoginPage actions
 *
 */

import {
  LOGIN_ATTEMPT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FB_LOGIN_ATTEMPT,
  FB_LOGIN_SUCCESS,
  FB_LOGIN_FAILURE,
  SET_EMAIL_LOGIN,
  SET_PASSWORD_LOGIN,
  CLEAR_EMAIL_LOGIN,
  CLEAR_PASSWORD_LOGIN,
  SET_EVENT,
  SET_PAYMENT,
  LOAD_EVENT,
} from './constants';

export function loginAttempt() {
  return {
    type: LOGIN_ATTEMPT,
    payload: true,
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
    isAuthenticated: true,
    payload: false,
  };
}

export function loginFailure() {
  return {
    type: LOGIN_FAILURE,
    payload: false,
    isAuthenticated: false,
    isLoginFailed: true,
  };
}

export function facebookLoginAttempt(response) {
  return {
    type: FB_LOGIN_ATTEMPT,
    payload: true,
    response,
  };
}

export function facebookLoginSuccess(user) {
  return {
    type: FB_LOGIN_SUCCESS,
    user,
    payload: false,
    isAuthenticated: true,
  };
}

export function facebookLoginFailure() {
  return {
    type: FB_LOGIN_FAILURE,
    payload: false,
    isAuthenticated: false,
    isLoginFailed: true,
  };
}

export function setEmailLogin(email) {
  return {
    type: SET_EMAIL_LOGIN,
    email,
  }
}

export function setPasswordLogin(password) {
  return {
    type: SET_PASSWORD_LOGIN,
    password,
  }
}

export function clearEmailLogin() {
  return {
    type: CLEAR_EMAIL_LOGIN,
    email: '',
  }
}

export function clearPasswordLogin() {
  return {
    type: CLEAR_PASSWORD_LOGIN,
    password: '',
  }
}

export function loadEvent() {
  return {
    type: LOAD_EVENT,
  };
}

export function setEvent(event) {
  return {
    type: SET_EVENT,
    event,
  };
}

export function setPayment() {
  return {
    type: SET_PAYMENT,
    payload: true,
  };
}

