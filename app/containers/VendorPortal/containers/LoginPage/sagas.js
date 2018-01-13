import { take, call, put, select, cancel, fork } from 'redux-saga/effects';
import { takeEvery, takeLatest } from 'redux-saga';
import axios from 'axios';
import { dispatch } from 'react-redux';
import { loginAttempt, loginSuccess, loginFailure, clearEmailLogin, clearPasswordLogin, vendorLogoutSuccess, vendorLogoutFailure } from './actions';
import { selectLoginPage, selectVendorUser } from './selectors';
import { browserHistory } from 'react-router';
import { fb } from 'utils/firebase-config';
import api from 'utils/axios-helpers';
import { LOCATION_CHANGE } from 'react-router-redux';

// Individual exports for testing
// Worker sagas
export function* loginUserAsync() {
    try {
      console.log('Attempting Login...');
      const loginPage = yield select(selectLoginPage);
      const userLogin = {
        username: loginPage.get('email'),
        password: loginPage.get('password')
      }
      console.log(userLogin);
      // fake user/data from jsonplaceholder
      const response = yield call(api, '/auth/login', { method: 'post', data: userLogin })
      const user = response.data.user
      const token = response.data.token
      const firebaseAuth = yield call(function() {
        return new Promise(function(resolve, reject) {
          fb.auth().signInWithCustomToken(token)
          .then((authData) => {resolve(authData)})
          .catch((error) => {
            console.log(error);
            reject(error);
          });
        });
      });
      // clears login form from redux
      yield put(clearEmailLogin());
      yield put(clearPasswordLogin());
      // places user response into redux store
      yield put(loginSuccess(user));
      browserHistory.push('/v/landing')
    } catch(e) {
      console.log('Login request failed')
      console.log('error:', e)
      yield put(loginFailure());
    }
}

export function* loginFBUserAsync() {
    try {
      console.log('Attempting FB Login...');
      const response = yield call(api, `/v1/account`)
      const user = response.data.user
      const token = response.data.token
      const firebaseAuth = yield call(function() {
        return new Promise(function(resolve, reject) {
          fb.auth().signInWithCustomToken(token)
          .then((authData) => {resolve(authData)})
          .catch((error) => {
            console.log(error);
            reject(error);
          });
        });
      });
      // clears login form from redux
      yield put(clearEmailLogin());
      yield put(clearPasswordLogin());
      // places user response into redux store
      yield put(loginSuccess(user));
      browserHistory.push('/v/landing')
    } catch(e) {
      console.log('Login request failed')
      console.log('error:', e)
      yield put(loginFailure());
    }
}

export function* logoutVendorAsync() {
  try {
    console.log('Attempting logout');
    const firebaseLogout = yield call(function() {
      return new Promise(function(resolve, reject) {
        fb.auth().signOut().then(function() {
          console.log('firebase logout successful');
          resolve({msg: 'logout successful'})
        }, function(error) {
          alert('firebase logout failed')
        });
      });
    });
    const vendorState = yield select(selectVendorUser);
    const currentVendor = vendorState.get('currentVendor');
    const response = yield call(api, `auth/logout`, { method: 'post' });
    console.log('logout response', response)
    yield put(vendorLogoutSuccess());
    window.location.href = '/'
    return
  } catch(e) {
    console.log('Logout request failed')
    console.log('error', e);
    yield put(vendorLogoutFailure());
  }
}

// Watcher sagas

export function* watchLoginAttempt() {
  console.log('redux-saga is running action app/vendorAuth/LOGIN_ATTEMPT listener...');
  yield takeLatest('app/vendorAuth/LOGIN_ATTEMPT', loginUserAsync);
}

export function* watchFacebookLoginAttempt() {
  console.log('redux-saga is running action app/vendorAuth/FB_LOGIN_ATTEMPT listener...');
  yield takeLatest('app/vendorAuth/FB_LOGIN_ATTEMPT', loginFBUserAsync);
}

export function* watchLogout() {
  console.log('redux-saga is running action app/vendorAuth/VENDOR_LOGOUT listener...')
  yield takeLatest('app/vendorAuth/VENDOR_LOGOUT', logoutVendorAsync);
}

// cancel watchers on LOCATION_CHANGE

export function* rootSaga() {
  const loginAttemptWatcher = yield fork(watchLoginAttempt);
  const facebookLoginAttemptWatcher = yield fork(watchFacebookLoginAttempt);
  const logoutAttemptWatcher = yield fork(watchLogout);
  yield take(LOCATION_CHANGE);
  yield cancel(loginAttemptWatcher);
  yield cancel(facebookLoginAttemptWatcher);
  yield cancel(logoutAttemptWatcher);
  console.log('canceled vendor login watchers')
}

// All sagas to be loaded
export default [
  rootSaga,
];
