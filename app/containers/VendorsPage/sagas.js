import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import axios from 'axios';
import { fetchVendors, fetchVendorsFailure, fetchVendorsSuccess, setVendors } from './actions';
import { selectSearchDomain, selectVendorsPageDomain } from './selectors';
import vendors from 'data/vendors';
import api from 'utils/axios-helpers';
import { LOCATION_CHANGE } from 'react-router-redux';

// Individual exports for testing
// Worker Sagas

//TODO function to process response and parses/sorts

export function* getVendorsAsync() {
  try {
    console.log('Attempting to get vendors');
    // selects parts of redux store
    const vendorsPage = yield select(selectVendorsPageDomain());
    const searchState = yield select(selectSearchDomain());
    let searchParams = {};
    // if (vendorsPage.get('category') !== '') searchParams.categories = vendorsPage.get('category')
    // if (searchState.get('startDate') !== '') searchParams.startDate = searchState.get('startDate')
    if (searchState.get('zipCode') !== '') searchParams.zips = searchState.get('zipCode')
    const response = yield call(api, '/v1/vendor', searchParams);
    // const response = vendors;
    const receivedVendors = response.data;
    console.log('vendors response', response);
    yield put(fetchVendorsSuccess(receivedVendors));
  } catch(e) {
    console.log('get vendors request failed');
    console.log(e)
    yield put(fetchVendorsFailure());
  }
}

// Watcher Sagas

export function* watchFetchVendors() {
  console.log('redux-saga is running action app/vendors/FETCH_VENDORS listener...');
  yield takeEvery('app/vendors/FETCH_VENDORS', getVendorsAsync);
}

export function* rootSaga() {
  const fetchVendorsWatcher = yield fork(watchFetchVendors);
  yield take(LOCATION_CHANGE);
  yield cancel(fetchVendorsWatcher);
  console.log('canceled vendor watcher')
}

// All sagas to be loaded
export default [
  rootSaga,
];
