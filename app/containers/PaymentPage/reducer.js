/*
 *
 * PaymentPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SHOW_SNACKBAR,
} from './constants';

const initialState = fromJS({
  isShowingSnackbar: false,
});

function paymentPageReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_SNACKBAR:
      return state.set('isShowingSnackbar', fromJS(action.payload));
    default:
      return state;
  }
}

export default paymentPageReducer;
