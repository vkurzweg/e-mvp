/*
 *
 * SignUp actions
 *
 */

import {
  SIGNUP_ATTEMPT,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SET_EMAIL_SIGNUP,
  SET_PASSWORD_SIGNUP,
  SET_PASSWORD_CONFIRM_SIGNUP,
  CLEAR_EMAIL_SIGNUP,
  CLEAR_PASSWORD_SIGNUP,
  CLEAR_PASSWORD_CONFIRM_SIGNUP,
  SUBMIT_PAYMENT,
  SUBMIT_PAYMENT_SUCCESS,
  SUBMIT_PAYMENT_FAILURE,
  OPEN_MODAL,
  CLOSE_MODAL,
  SET_OCCASION,
  SET_DATE,
  SET_ZIP,
  CREATE_EVENT,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_FAILURE,
  SET_EVENT,
  SET_HOSTNAME,
  SET_ADDRESS,
  SET_CITY,
  SET_EVENTSTATE,
  FB_LOGIN_ATTEMPT,
  FB_LOGIN_SUCCESS,
  FB_LOGIN_FAILURE,
  SET_USER,
  SET_USER_TOKEN,
  SET_PAYMENT,
  SHOW_SNACKBAR,
} from './constants';

export function signupAttempt() {
  return {
    type: SIGNUP_ATTEMPT,
    payload: true,
  };
}

export function signupSuccess() {
  return {
    type: SIGNUP_SUCCESS,
    payload: false,
  };
}

export function signupFailure() {
  return {
    type: SIGNUP_FAILURE,
    payload: false,
    isLoginFailed: true,
  };
}

export function setEmailSignup(email) {
  return {
    type: SET_EMAIL_SIGNUP,
    email,
  };
}

export function setPasswordSignup(password) {
  return {
    type: SET_PASSWORD_SIGNUP,
    password,
  };
}
export function setPasswordConfirmSignup(password) {
  return {
    type: SET_PASSWORD_CONFIRM_SIGNUP,
    password,
  };
}

export function clearEmailSignup() {
  return {
    type: CLEAR_EMAIL_SIGNUP,
    email: '',
  };
}

export function clearPasswordSignup() {
  return {
    type: CLEAR_PASSWORD_SIGNUP,
    password: '',
  };
}

export function clearPasswordConfirmSignup() {
  return {
    type: CLEAR_PASSWORD_CONFIRM_SIGNUP,
    password: '',
  };
}

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

export function setOccasion(occasion) {
  return {
    type: SET_OCCASION,
    occasion,
  };
}

export function setDate(date) {
  return {
    type: SET_DATE,
    date,
  };
}

export function setZip(zip) {
  return {
    type: SET_ZIP,
    zip,
  };
}

export function setHostName(hostName) {
  return {
    type: SET_HOSTNAME,
    hostName,
  };
}

export function setAddress(address) {
  return {
    type: SET_ADDRESS,
    address,
  };
}

export function setCity(city) {
  return {
    type: SET_CITY,
    city,
  };
}

export function setEventState(eventLocState) {
  return {
    type: SET_EVENTSTATE,
    eventLocState,
  };
}

export function createEvent() {
  return {
    type: CREATE_EVENT,
    payload: true,
  };
}

export function createEventSuccess() {
  return {
    type: CREATE_EVENT_SUCCESS,
    payload: false,
  };
}

export function createEventFailure() {
  return {
    type: CREATE_EVENT_FAILURE,
    payload: false,
    isCreateFailed: true,
  };
}

export function setEvent(event) {
  return {
    type: SET_EVENT,
    event,
  };
}

export function facebookLoginAttempt() {
  return {
    type: FB_LOGIN_ATTEMPT,
    payload: true,
  };
}

export function facebookLoginSuccess(user) {
  return {
    type: FB_LOGIN_SUCCESS,
    user,
    payload: false,
  };
}

export function facebookLoginFailure() {
  return {
    type: FB_LOGIN_FAILURE,
    payload: false,
    isLoginFailed: true,
  };
}

export function setUser(user) {
  return {
    type: SET_USER,
    user,
  };
}

export function setUserToken(token) {
  return {
    type: SET_USER,
    token,
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

