import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { takeEvery, takeLatest } from 'redux-saga';
import axios from 'axios';
import { fetchFeaturedVendors, fetchFeaturedVendorsFailure, fetchFeaturedVendorsSuccess } from './actions';
import { selectSearch, selectVendorsPage } from './selectors';
import vendors from 'data/vendors';
import api from 'utils/axios-helpers';
import { LOCATION_CHANGE } from 'react-router-redux';
import { FETCH_FEATURED_VENDORS_SUCCESS } from './constants';

// Individual exports for testing
// Worker Sagas

//TODO function to process response and parses/sorts

export function* getVendorsAsync() {
  try {
    console.log('Attempting to get vendors');
    // selects parts of redux store
    const response = yield call(api, '/v1/vendor/featured');
    // const response = vendors;
    const receivedVendors = response.data;
    yield put(fetchFeaturedVendorsSuccess(receivedVendors));
  } catch(e) {
    console.log('get vendors request failed');
    console.log(e)
    yield put(fetchFeaturedVendorsFailure());
  }
}

// Watcher Sagas

export function* watchFetchFeaturedVendors() {
  console.log('redux-saga is running action app/LandingPage/FETCH_FEATURED_VENDORS listener...');
  yield takeEvery('app/LandingPage/FETCH_FEATURED_VENDORS', getVendorsAsync);
}

export function* rootSaga() {
  const fetchFeaturedVendorsWatcher = yield fork(watchFetchFeaturedVendors);
  yield take(FETCH_FEATURED_VENDORS_SUCCESS);
  yield cancel(fetchFeaturedVendorsWatcher);
  console.log('canceled featured vendors watcher')
}

// All sagas to be loaded
export default [
  rootSaga,
];
