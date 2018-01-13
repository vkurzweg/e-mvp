import { take, call, put, select, cancel, fork } from 'redux-saga/effects';
import { delay } from "redux-saga"
import { LOCATION_CHANGE } from 'react-router-redux';
import { takeEvery, takeLatest } from 'redux-saga';
import axios from 'axios';
import { dispatch } from 'react-redux';
import { loginAttempt, loginSuccess, loginFailure, clearEmailLogin, clearPasswordLogin, setEvent, setPayment } from './actions';
import { selectLoginPage, selectUser } from './selectors';
import { browserHistory } from 'react-router';
import { goBack, push } from 'react-router-redux';
import { fb } from 'utils/firebase-config';
import api from 'utils/axios-helpers';
import { checkLoginState } from 'utils/firebase-helpers';
import { getParameterByName } from 'utils/url-helpers';
// Individual exports for testing
// Worker sagas
export function* loginUserAsync() {
    try {
      console.log('Attempting Login...');
      const loginPage = yield select(selectLoginPage);
      console.log('Yannyyyyyy...');
      const email = loginPage.get('email').toLowerCase();
      const password = loginPage.get('password');
      const userLogin = {
        username: email,
        password: password
      }
      console.log(userLogin);
      const user = yield call(api, `/auth/login`, { method: 'post', data: userLogin })
      console.log('user', user)
      const token = user.data.token
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
      const event = yield call(api, 'v1/event/current');
      if (event.status === 200) {
        yield put(setEvent(event.data))
      }
      console.log('event', event)
      // clears login form from redux
      yield put(clearEmailLogin());
      yield put(clearPasswordLogin());
      // places user response into redux store
      yield put(loginSuccess(user.data.user));
      const userState = yield select(selectUser);
      // check for payment method
      if (userState.get('currentUser') && userState.get('currentUser').get('customer_id')) {
        yield put(setPayment())
      }
      if (getParameterByName('next')) {
        yield put(push(getParameterByName('next')));
      } else {
        yield put(push('/vendors'));
      }
    } catch(e) {
      console.log('Login request failed')
      console.log('error:', e)
      yield put(loginFailure());
    }
}

export function* loginFBUserAsync(action) {
    try {
      console.log('Attempting FB Login...');
      const response = yield call(api, `/v1/account`)
      const user = response.data.user;
      const token = response.data.token;
      console.log('logging into Firebase with token:', token)
      if (response.status === 200) {
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
      }
      console.log('Successfully logged into Firebase!')
      console.log('user from server', user)
      // clears login form from redux
      yield put(clearEmailLogin());
      yield put(clearPasswordLogin());
      // places user response into redux store
      yield put(loginSuccess(user));
      const userState = yield select(selectUser);
      // check for payment method
      if (userState.get('currentUser') && userState.get('currentUser').get('customer_id')) {
        yield put(setPayment())
      }
      if (getParameterByName('next')) {
        yield put(push(getParameterByName('next')));
      } else {
        yield put(push('/vendors'));
      }
    } catch(e) {
      console.log('Login request failed')
      console.log('error:', e)
      yield put(loginFailure());
    }
}

// Watcher sagas

export function* watchLoginAttempt() {
  console.log('redux-saga is running action app/auth/LOGIN_ATTEMPT listener...');
  yield takeLatest('app/auth/LOGIN_ATTEMPT', loginUserAsync);
}

export function* watchFacebookLoginAttempt() {
  console.log('redux-saga is running action app/auth/FB_LOGIN_ATTEMPT listener...');
  yield takeLatest('app/auth/FB_LOGIN_ATTEMPT', loginFBUserAsync);
}

// cancel watchers on LOCATION_CHANGE

export function* rootSaga() {
  const loginAttemptWatcher = yield fork(watchLoginAttempt);
  const facebookLoginAttemptWatcher = yield fork(watchFacebookLoginAttempt);
  yield take(LOCATION_CHANGE);
  yield cancel(loginAttemptWatcher);
  yield cancel(facebookLoginAttemptWatcher);
  console.log('canceled login page watchers')
}

// All sagas to be loaded
export default [
  rootSaga,
];
