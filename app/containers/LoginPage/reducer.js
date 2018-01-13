import { fromJS } from 'immutable';
import {
  SET_EMAIL_LOGIN,
  SET_PASSWORD_LOGIN,
  CLEAR_EMAIL_LOGIN,
  CLEAR_PASSWORD_LOGIN,
} from './constants';
import { loadState } from 'utils/LocalStorage';

const initialState = fromJS({
  email: '',
  password: '',
});


function LoginPageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_EMAIL_LOGIN:
      return state.set('email', fromJS(action.email));
    case SET_PASSWORD_LOGIN:
      return state.set('password', fromJS(action.password));
    case CLEAR_EMAIL_LOGIN:
      return state.set('email', fromJS(action.email));
    case CLEAR_PASSWORD_LOGIN:
      return state.set('password', fromJS(action.password));
    default:
      return state;
  }
}

export default LoginPageReducer;
