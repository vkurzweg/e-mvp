import { take, call, put, select, cancel, fork } from 'redux-saga/effects';
import { takeEvery, takeLatest } from 'redux-saga';
import axios from 'axios';
import { dispatch } from 'react-redux';
import { loginSuccess, loginFailure, clearEmailLogin, clearPasswordLogin } from './actions';
import { selectPortalLanding, selectVendorUser, selectLoginPage } from './selectors';
import { browserHistory } from 'react-router';
import { fb } from 'utils/firebase-config';
import api from 'utils/axios-helpers';
import { LOCATION_CHANGE } from 'react-router-redux';

// Individual exports for testing
// Worker sagas
export function* loginUserAsync() {
    try {
      console.log('Attempting Login Yanny...');
      const loginPage = yield select(selectLoginPage);
      console.log(' ********* Yanny after login page');
      const userLogin = {
        username: loginPage.get('email'),
        password: loginPage.get('password')
      }
      console.log('********** Yanny afterUserLogin');
      console.log(userLogin);
      console.log('********** Yanny Before API Call...');
      // fake user/data from jsonplaceholder
      const response = yield call(api, '/auth/login', { method: 'post', data: userLogin })
      console.log('********** Yanny after API Call');
      const user = response.data.user
      const token = response.data.token
      console.log('********** Yanny before firebaseAuth');

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
      console.log('********** Yanny After firebaseAuth');
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

// Watcher sagas

export function* watchLoginAttempt() {
  console.log('redux-saga is running action app/vendorAuth/LOGIN_ATTEMPT listener...');
  yield takeLatest('app/vendorAuth/LOGIN_ATTEMPT', loginUserAsync);
}

export function* watchFacebookLoginAttempt() {
  console.log('redux-saga is running action app/vendorAuth/FB_LOGIN_ATTEMPT listener...');
  yield takeLatest('app/vendorAuth/FB_LOGIN_ATTEMPT', loginFBUserAsync);
}

// cancel watchers on LOCATION_CHANGE

export function* rootSaga() {
  const loginAttemptWatcher = yield fork(watchLoginAttempt);
  const facebookLoginAttemptWatcher = yield fork(watchFacebookLoginAttempt);
  yield take(LOCATION_CHANGE);
  yield cancel(loginAttemptWatcher);
  yield cancel(facebookLoginAttemptWatcher);
  console.log('canceled vendor login watchers')
}

// All sagas to be loaded
export default [
  rootSaga,
];
