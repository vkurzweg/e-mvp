/*
 *
 * PasswordResetForm reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_PASSWORD,
  SET_PASSWORD_CONFIRM,
} from './constants';

const initialState = fromJS({});

function passwordResetFormReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PASSWORD:
      return state.set('password', fromJS(action.password));
    case SET_PASSWORD_CONFIRM:
      return state.set('passwordConfirm', fromJS(action.passwordConfirm));
    default:
      return state;
  }
}

export default passwordResetFormReducer;
