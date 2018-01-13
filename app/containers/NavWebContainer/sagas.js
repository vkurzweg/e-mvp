import { take, call, put, select, cancel, fork } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { takeEvery, takeLatest } from 'redux-saga';
import axios from 'axios';
import { dispatch } from 'react-redux';
import { logoutSuccess, logoutFailure } from './actions';
import { selectUser } from './selectors';
import api from 'utils/axios-helpers';
import clearAuthState from 'utils/LocalStorage';
import { push } from 'react-router-redux';



// Individual exports for testing
export function* logoutAsync() {
  try {
    console.log('Attempting logout');
    const userState = yield select(selectUser);
    const currentUser = userState.get('currentUser');
    console.log('currentUser', currentUser)
    const response = yield call(api, `auth/logout`, { method: 'post' });
    console.log('logoutresponse', response)
    // yield call(clearAuthState);
    yield put(logoutSuccess());
    console.log('logout success');
    window.location.href = '/'
    return;
  } catch(e) {
    console.log('Logout request failed');
    console.log('error:', e);
    yield put(logoutFailure());
  }
}

export function* watchLogout() {
  console.log('redux-saga is running action app/auth/LOGOUT listener...');
  yield takeLatest('app/auth/LOGOUT', logoutAsync);
}

// cancel watchers on LOCATION_CHANGE

export function* rootSaga() {
  const logoutWatcher = yield fork(watchLogout);
  yield take(LOCATION_CHANGE);
  yield cancel(logoutWatcher);
  console.log('canceled login page watchers')
}

// All sagas to be loaded
export default [
  rootSaga,
];
