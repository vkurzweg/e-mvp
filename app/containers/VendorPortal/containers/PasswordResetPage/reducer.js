/*
 *
 * PasswordResetContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_EMAIL,
  RESET_REQUEST,
  RESET_REQUEST_SUCCESS,
  RESET_REQUEST_FAILURE,
} from './constants';

const initialState = fromJS({
  email: '',
  isRequestingReset: false,
});

function passwordResetPageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_EMAIL:
      return state.set('email', fromJS(action.email));
    case RESET_REQUEST:
      return state.set('isRequestingReset', fromJS(action.payload));
    case RESET_REQUEST_SUCCESS:
      return state.set('isRequestingReset', fromJS(action.payload));
    case RESET_REQUEST_FAILURE:
      return state.set('isRequestingReset', fromJS(action.payload));
    default:
      return state;
  }
}

export default passwordResetPageReducer;
