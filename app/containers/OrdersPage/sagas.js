import { take, call, put, select, cancel, fork } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { takeEvery, delay } from 'redux-saga';
import axios from 'axios';
import {
  fetchOrders,
  fetchOrdersSuccess,
  fetchOrdersFailure,
  setOrders,
  capturePayment,
  capturePaymentSuccess,
  capturePaymentFailure,
  deleteOrder,
  deleteOrderSuccess,
  deleteOrderFailure,
  setEvent,
  setOrdersEvent,
  closeModal,
  showSnackbar,
  setUserEvents,
  openSuccessModal,
  clearCurrentEvent,
} from './actions';
import {
  selectOrdersPage,
  selectSearch,
  selectSearchPageState,
  selectOrders,
  selectUser,
  selectProducts,
  selectEvent
} from './selectors';
import { toJS } from 'immutable';
import api from 'utils/axios-helpers';
import moment from 'moment';


export function* fetchOrdersAsync() {
  try {
    console.log('Attempting to fetch orders');
    const userEvents = yield call(api, `/v1/event`)
    yield put(setUserEvents(userEvents.data))
    const response = yield call(api, `/v1/event/current`);
    const currentEvent = response.data;
    console.log('current event', currentEvent)
    yield put(setEvent(currentEvent));
    yield put(setOrdersEvent(currentEvent));
    yield put(fetchOrdersSuccess());
    return;
  } catch(e) {
    console.log('Fetch orders request failed', e);
    yield put(fetchOrdersFailure());
  }
}

// export function* deleteOrderAsync() {
//   try {
//     console.log('Attempting to delete order');
//     const ordersPageState = yield select(selectOrdersPage);
//     const orderId = ordersPageState.get('orderId');
//     const response = yield call(api, `/v1/order/${orderId}`, { method: 'delete', data: orderId } )
//     console.log('order delete response', response);
//     yield put(deleteOrderSuccess())
//   } catch(e) {
//     console.log('Delete order request failed', e);
//     yield put(deleteOrderFailure());
//   }
// }

export function* capturePaymentAsync() {
  try {
    console.log('Attempting to capture payment');
    const eventState = yield select(selectEvent);
    const event = eventState.get('event');
    const eventId = event._id;
    const userState = yield select(selectUser);
    const currentUser = userState.get('currentUser').toJS();
    const customerId = currentUser.customer_id;
    const response = yield call(api, `v1/event/${eventId}/confirm`, { method: 'post', data: customerId })
    console.log('confirm event response:', response);
    yield put(capturePaymentSuccess());
    yield put(closeModal());
    yield put(clearCurrentEvent());
    yield put(openSuccessModal());
    yield put(showSnackbar());
  } catch(e) {
    console.log('Capture payment request failed', e);
    yield put(capturePaymentFailure());
  }
}

// watcher sagas
export function* watchFetchOrders() {
  console.log('redux-saga is running action app/orders/FETCH_ORDERS');
  yield takeEvery('app/orders/FETCH_ORDERS', fetchOrdersAsync);
}

// export function* watchDeleteOrder() {
//   console.log('redux-saga is running action app/orders/DELETE_ORDER listener...');
//   yield takeEvery('app/orders/DELETE_ORDER', deleteOrderAsync);
// }

export function* watchCapturePayment() {
  console.log('redux-saga is running action app/OrdersPage/CAPTURE_PAYMENT listener...');
  yield takeEvery('app/OrdersPage/CAPTURE_PAYMENT', capturePaymentAsync);
}

// cancel watchers on LOCATION_CHANGE

export function* rootSaga() {
  const fetchOrdersWatcher = yield fork(watchFetchOrders);
  const capturePaymentWatcher = yield fork(watchCapturePayment);
  yield take(LOCATION_CHANGE);
  yield cancel(fetchOrdersWatcher);
  yield cancel(capturePaymentWatcher);
  console.log('canceled orders page watchers')
}

// All sagas to be loaded
export default [
  rootSaga,
];
