import {
  VENDOR_LOGIN_ATTEMPT,
  VENDOR_LOGIN_SUCCESS,
  VENDOR_LOGIN_FAILURE,
  VENDOR_FB_LOGIN_ATTEMPT,
  VENDOR_FB_LOGIN_SUCCESS,
  VENDOR_FB_LOGIN_FAILURE,
  SET_EMAIL_LOGIN,
  SET_PASSWORD_LOGIN,
  CLEAR_EMAIL_LOGIN,
  CLEAR_PASSWORD_LOGIN,
} from './constants';

export function loginAttempt() {
  return {
    type: VENDOR_LOGIN_ATTEMPT,
    payload: true,
  };
}

export function loginSuccess(user) {
  return {
    type: VENDOR_LOGIN_SUCCESS,
    user,
    payload: false,
  };
}

export function loginFailure() {
  return {
    type: VENDOR_LOGIN_FAILURE,
    payload: false,
    isLoginFailed: true,
  };
}

export function facebookLoginAttempt() {
  return {
    type: VENDOR_FB_LOGIN_ATTEMPT,
    payload: true,
  };
}

export function facebookLoginSuccess(user) {
  return {
    type: VENDOR_FB_LOGIN_SUCCESS,
    user,
    payload: false,
  };
}

export function facebookLoginFailure() {
  return {
    type: VENDOR_FB_LOGIN_FAILURE,
    payload: false,
  };
}

export function setEmailLogin(email) {
  return {
    type: SET_EMAIL_LOGIN,
    email,
  };
}

export function setPasswordLogin(password) {
  return {
    type: SET_PASSWORD_LOGIN,
    password,
  };
}

export function clearEmailLogin() {
  return {
    type: CLEAR_EMAIL_LOGIN,
    email: '',
  };
}

export function clearPasswordLogin() {
  return {
    type: CLEAR_PASSWORD_LOGIN,
    password: '',
  };
}
