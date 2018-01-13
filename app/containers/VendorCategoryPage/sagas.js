/*
Vendor Category Page Saga
*/

import { take, call, put, select, cancel, fork } from 'redux-saga/effects';
import { takeEvery, takeLatest, delay } from 'redux-saga';
import axios from 'axios';
import { fetchVendors, fetchVendorsFailure, fetchVendorsSuccess, setVendors } from './actions';
import { selectSearchDomain, selectVendorsDomain } from './selectors';
import vendors from 'data/vendors';
import api from 'utils/axios-helpers';
import { LOCATION_CHANGE } from 'react-router-redux';

// Individual exports for testing
// Worker Sagas

//TODO function to process response and parses/sorts

export function* fetchVendorsAsync() {
  try {
    console.log('Attempting to fetch vendors');
    // selects parts of redux store
    const vendorsState = yield select(selectVendorsDomain());
    const searchState = yield select(selectSearchDomain());
    let searchParams = {};
    if (searchState.get('category') !== '') searchParams.categories = searchState.get('category');
    if (searchState.get('startDate') !== '') searchParams.startDate = searchState.get('startDate');
    if (searchState.get('zipCode') !== '') searchParams.zips = searchState.get('zipCode');
    searchParams.budget_min = searchState.get('budget').get('min');
    searchParams.budget_max = searchState.get('budget').get('max');
    const response = yield call(api, '/v1/vendor', {params: searchParams});
    const receivedVendors = response.data;
    yield put(fetchVendorsSuccess(receivedVendors));
  } catch(e) {
    console.log('fetch vendors request failed');
    console.log(e);
    yield put(fetchVendorsFailure());
  }
}

// for input changes with delay
export function* fetchVendorsDelayAsync() {
  try {
    yield call(delay, 1000)
    console.log('Attempting to fetch vendors');
    // selects parts of redux store
    const vendorsState = yield select(selectVendorsDomain());
    const searchState = yield select(selectSearchDomain());
    let searchParams = {};
    if (searchState.get('category') !== '') searchParams.categories = searchState.get('category')
    if (searchState.get('zipCode') !== '') searchParams.zips = searchState.get('zipCode');
    searchParams.budget_min = searchState.get('budget').get('min');
    searchParams.budget_max = searchState.get('budget').get('max');
    const response = yield call(api, '/v1/vendor', {params: searchParams});
    const receivedVendors = response.data;
    yield put(fetchVendorsSuccess(receivedVendors));
  } catch(e) {
    console.log('fetch vendors request failed');
    console.log(e)
    yield put(fetchVendorsFailure());
  }
}

// Watcher Sagas

export function* watchFetchVendors() {
  console.log('redux-saga is running action app/vendors/FETCH_VENDORS listener...');
  yield takeLatest('app/vendors/FETCH_VENDORS', fetchVendorsAsync);
}

export function* watchSetZip() {
  console.log('redux-saga is running action app/search/SET_ZIP listener...');
  yield takeLatest('app/search/SET_ZIP', fetchVendorsDelayAsync);
}

export function* watchSetCategory() {
  console.log('redux-saga is running action app/search/SET_VENDOR_CATEGORY listener...');
  yield takeLatest('app/search/SET_VENDOR_CATEGORY', fetchVendorsDelayAsync);
}

export function* watchSetBudget() {
  console.log('redux-saga is running action app/search/SET_BUDGET listener...');
  yield takeLatest('app/search/SET_BUDGET_SLIDER', fetchVendorsDelayAsync);
}

// cancel watchers on LOCATION_CHANGE

export function* rootSaga() {
  const fetchVendorsWatcher = yield fork(watchFetchVendors);
  const setZipWatcher = yield fork(watchSetZip);
  const setCategoryWatcher = yield fork(watchSetCategory);
  const setBudgetWatcher = yield fork(watchSetBudget);
  yield take(LOCATION_CHANGE);
  yield cancel(fetchVendorsWatcher);
  yield cancel(setZipWatcher);
  yield cancel(setBudgetWatcher);
  console.log('canceled vendor category page watchers')
}

// All sagas to be loaded
export default [
  rootSaga,
];
