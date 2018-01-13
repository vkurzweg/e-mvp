import {
  APP_LOADED,
  LOAD_EVENT,
  SET_EVENT,
  LOAD_USER,
  SET_USER,
  LOGIN_SUCCESS,
  SET_PAYMENT,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from './constants';

export function appLoaded() {
  return {
    type: APP_LOADED,
    payload: true,
  };
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

export function loadUser(callback) {
  return {
    type: LOAD_USER,
    callback,
  };
}

export function setUser(currentUser) {
  return {
    type: SET_USER,
    currentUser,
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

export function setPayment() {
  return {
    type: SET_PAYMENT,
    payload: true,
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
