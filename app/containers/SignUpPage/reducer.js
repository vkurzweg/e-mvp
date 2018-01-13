/*
 *
 * SignUp reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_EMAIL_SIGNUP,
  SET_PASSWORD_SIGNUP,
  SET_PASSWORD_CONFIRM_SIGNUP,
  CLEAR_EMAIL_SIGNUP,
  CLEAR_PASSWORD_SIGNUP,
  CLEAR_PASSWORD_CONFIRM_SIGNUP,
  SIGNUP_ATTEMPT,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SUBMIT_PAYMENT,
  SUBMIT_PAYMENT_SUCCESS,
  SUBMIT_PAYMENT_FAILURE,
  OPEN_MODAL,
  CLOSE_MODAL,
  SET_HOSTNAME,
  SET_ADDRESS,
  SET_CITY,
  SET_EVENTSTATE,
  SHOW_SNACKBAR,
} from './constants';

const initialState = fromJS({
  email: '',
  password: '',
  passwordConfirm: '',
  isSigningUp: false,
  isSubmittingPayment: false,
  token: {},
  modalIsOpen: false,
  hostName: '',
  address: '',
  city: '',
  eventLocState: '',
  isShowingSnackbar: false,
  isLoginFailed: false,
  isPaymentFailed: false,
});

function signUpReducer(state = initialState, action) {
  switch (action.type) {
    case SET_EMAIL_SIGNUP:
      return state.set('email', fromJS(action.email));
    case SET_PASSWORD_SIGNUP:
      return state.set('password', fromJS(action.password));
    case SET_PASSWORD_CONFIRM_SIGNUP:
      return state.set('passwordConfirm', fromJS(action.password));
    case CLEAR_EMAIL_SIGNUP:
      return state.set('email', fromJS(action.email));
    case CLEAR_PASSWORD_SIGNUP:
      return state.set('password', fromJS(action.password));
    case CLEAR_PASSWORD_CONFIRM_SIGNUP:
      return state.set('passwordConfirm', fromJS(action.password));
    case SIGNUP_ATTEMPT:
      return state.set('isSigningUp', fromJS(action.payload));
    case SIGNUP_SUCCESS:
      return state.set('isSigningUp', fromJS(action.payload));
    case SIGNUP_FAILURE:
      return state.set('isSigningUp', fromJS(action.payload))
                  .set('isLoginFailed', fromJS(action.isLoginFailed));
    case SUBMIT_PAYMENT:
      state.set('isSubmittingPayment', fromJS(action.payload));
      return state.set('token', fromJS(action.token));
    case SUBMIT_PAYMENT_SUCCESS:
      return state.set('isSubmittingPayment', fromJS(action.payload));
    case SUBMIT_PAYMENT_FAILURE:
      return state.set('isSubmittingPayment', fromJS(action.payload))
                  .set('isPaymentFailed', fromJS(action.isPaymentFailed));
    case OPEN_MODAL:
      return state.set('modalIsOpen', fromJS(action.payload));
    case CLOSE_MODAL:
      return state.set('modalIsOpen', fromJS(action.payload));
    case SET_HOSTNAME:
      return state.set('hostName', fromJS(action.hostName));
    case SET_ADDRESS:
      return state.set('address', fromJS(action.address));
    case SET_CITY:
      return state.set('city', fromJS(action.city));
    case SET_EVENTSTATE:
      return state.set('eventLocState', fromJS(action.eventLocState));
    case SHOW_SNACKBAR:
      return state.set('isShowingSnackbar', fromJS(action.payload));
    default:
      return state;
  }
}

export default signUpReducer;
