/*
 *
 * OrdersPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CAPTURE_PAYMENT,
  CAPTURE_PAYMENT_SUCCESS,
  CAPTURE_PAYMENT_FAILURE,
  OPEN_SUCCESS_MODAL,
  CLOSE_SUCCESS_MODAL,
  OPEN_MODAL,
  CLOSE_MODAL,
  SHOW_SNACKBAR,
  SET_USER_EVENTS,
  SET_EVENT,
  SET_ORDERS_EVENT,
} from './constants';

const initialState = fromJS({
  isCapturingPayment: false,
  modalIsOpen: false,
  successModalIsOpen: false,
  isShowingSnackbar: false,
  userEvents: [],
  isCaptureFailed: false,
});

function ordersPageReducer(state = initialState, action) {
  switch (action.type) {
    case CAPTURE_PAYMENT:
      return state.set('isCapturingPayment', fromJS(action.payload));
    case CAPTURE_PAYMENT_SUCCESS:
      return state.set('isCapturingPayment', fromJS(action.payload));
    case CAPTURE_PAYMENT_FAILURE:
      return state.set('isCapturingPayment', fromJS(action.payload))
                  .set('isCaptureFailed', fromJS(action.isCaptureFailed));
    case OPEN_MODAL:
      return state.set('modalIsOpen', fromJS(action.payload));
    case CLOSE_MODAL:
      return state.set('modalIsOpen', fromJS(action.payload));
    case OPEN_SUCCESS_MODAL:
      return state.set('successModalIsOpen', fromJS(action.payload));
    case CLOSE_SUCCESS_MODAL:
      return state.set('successModalIsOpen', fromJS(action.payload));
    case SHOW_SNACKBAR:
      return state.set('isShowingSnackbar', fromJS(action.payload));
    case SET_ORDERS_EVENT:
      return state.set('event', fromJS(action.event))
    case SET_USER_EVENTS:
      return state.set('userEvents', fromJS(action.userEvents));
    default:
      return state;
  }
}

export default ordersPageReducer;
