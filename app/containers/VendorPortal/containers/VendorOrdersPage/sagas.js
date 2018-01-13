import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import axios from 'axios';
import { fetchOrders, fetchOrdersSuccess, fetchOrdersFailure, setOrders, setOrderId, confirmOrderSuccess, confirmOrderFailure, declineOrderSuccess, declineOrderFailure, fetchVendorUser, fetchVendorUserSuccess, fetchVendorUserFailure, setVendorUser, closeModal, closeDeclineModal, showAcceptSnackbar, clearAcceptSnackbar, showDeclineSnackbar, clearDeclineSnackbar } from './actions';
import { selectVendorOrdersPage, selectVendorAuth } from './selectors';
import { toJS } from 'immutable';
import api from 'utils/axios-helpers';
import { LOCATION_CHANGE } from 'react-router-redux';

export function* fetchVendorOrdersAsync() {
  try {
    console.log('Attempting to fetch vendor orders');
    const response = yield call(api, `/v1/order`);
    const receivedOrders = response.data;
    console.log('vendor orders response', receivedOrders);
    yield put(setOrders(receivedOrders));
    yield put(fetchOrdersSuccess());
  } catch(e) {
    console.log('Fetch vendor orders request failed');
    yield put(fetchOrdersFailure());
  }
}

export function* confirmOrderAsync() {
  try {
    console.log('Attempting to confirm order');
    const vendorOrdersPage = yield select(selectVendorOrdersPage);
    const orderId = vendorOrdersPage.get('orderId');
    console.log('saga order id', orderId)
    const orderQuery = {
      method: 'post',
    }
    const response = yield call(api, `/v1/order/${orderId}/accept`, orderQuery);
    yield put(confirmOrderSuccess());
    yield put(showAcceptSnackbar());
    yield put(closeModal());
    const refreshOrders = yield call(api, `/v1/order`);
    const refreshedOrders = refreshOrders.data;
    yield put(setOrders(refreshedOrders));
    console.log('confirm order response', response.data)
  } catch(e) {
    console.log('Confirm order request failed');
    yield put(confirmOrderFailure());
  }
}

export function* declineOrderAsync() {
  try {
    console.log('Attempting to decline order');
    const vendorOrdersPage = yield select(selectVendorOrdersPage);
    const orderId = vendorOrdersPage.get('orderId');
    const orderQuery = {
      method: 'post',
    }
    const response = yield call(api, `/v1/order/${orderId}/decline`, orderQuery);
    yield put(declineOrderSuccess());
    yield put(showDeclineSnackbar());
    yield put(closeDeclineModal());
    yield put(clearDeclineSnackbar());
    const refreshOrders = yield call(api, `/v1/order`);
    const refreshedOrders = refreshOrders.data;
    yield put(setOrders(refreshedOrders));
    console.log('decline order response', refreshedOrders)
  } catch(e) {
    console.log('Decline order request failed');
    yield put(declineOrderFailure());
  }
}

export function* fetchVendorAsync() {
  try {
    console.log('Attempting to fetch currentVendor info');
    const vendorAuth = yield select(selectVendorAuth);
    const currentVendor = vendorAuth.get('currentVendor').toJS();
    console.log('currentVendor', currentVendor)
    const vendorId = currentVendor.vendor;
    console.log('vendorId', vendorId);
    const response = yield call(api, `/v1/vendor/${vendorId}`);
    yield put(setVendorUser(response.data));
    yield put(fetchVendorUserSuccess());
    return;
  } catch(e) {
    console.log('Fetch currentVendor info request failed');
    console.log(e);
    yield put(fetchVendorUserFailure);
  }
}

// watcher sagas
export function* watchFetchVendorOrders() {
  console.log('redux-saga is running action app/VendorOrdersPage/FETCH_ORDERS listener...');
  yield takeEvery('app/VendorOrdersPage/FETCH_ORDERS', fetchVendorOrdersAsync);
}

export function* watchConfirmOrder() {
  console.log('redux-saga is running action app/VendorOrdersPage/CONFIRM_ORDER listener...');
  yield takeEvery('app/VendorOrdersPage/CONFIRM_ORDER', confirmOrderAsync);
}

export function* watchDeclineOrder() {
  console.log('redux-saga is running action app/VendorOrdersPage/DECLINE_ORDER listener...');
  yield takeEvery('app/VendorOrdersPage/DECLINE_ORDER', declineOrderAsync);
}

export function* watchFetchVendor() {
  console.log('redux-saga is running action app/VendorOrdersPage/FETCH_VENDOR_USER listener...');
  yield takeEvery('app/VendorOrdersPage/FETCH_VENDOR_USER', fetchVendorAsync);
}

export function* rootSaga() {
  const fetchVendorOrdersWatcher = yield fork(watchFetchVendorOrders);
  const confirmOrderWatcher = yield fork(watchConfirmOrder);
  const declineOrderWatcher = yield fork(watchDeclineOrder);
  const fetchVendorWatcher = yield fork(watchFetchVendor);
  yield take(LOCATION_CHANGE);
  yield cancel(fetchVendorsWatcher);
  yield cancel(confirmOrderWatcher);
  yield cancel(declineOrderWatcher);
  yield cancel(fetchVendorWatcher);
  console.log('canceled watchers')
}

// All sagas to be loaded
export default [
  rootSaga,
];
