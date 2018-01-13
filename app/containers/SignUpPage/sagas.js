import { take, call, put, select, cancel, fork, apply } from 'redux-saga/effects';
import { takeEvery, takeLatest } from 'redux-saga';
import axios from 'axios';
import { selectVendorPage, selectSignUpPage, selectSearch, selectUser, selectOrders } from './selectors'
import {
  signupSuccess,
  signupFailure,
  clearEmailSignup,
  clearPasswordSignup,
  clearPasswordConfirmSignup,
  submitPaymentSuccess,
  submitPaymentFailure,
  createEventSuccess,
  createEventFailure,
  setEvent,
  facebookLoginSuccess,
  facebookLoginFailure,
  setUser,
  setUserToken,
  setPayment,
  showSnackbar,
  openModal,
} from './actions';
import { LOCATION_CHANGE } from 'react-router-redux';
import api from 'utils/axios-helpers';
import { toJS } from 'immutable';
import { goBack, push } from 'react-router-redux';
import { browserHistory } from 'react-router';
import moment from 'moment';
import { fb } from 'utils/firebase-config';
import { getParameterByName } from 'utils/url-helpers';
import { store } from 'app';

// Individual exports for testing
export function* signupUserAsync() {
    try {
      console.log('Attempting Signup...');
      const signUpPage = yield select(selectSignUpPage);
      const email = signUpPage.get('email');
      const password = signUpPage.get('password');
      const passwordConfirm = signUpPage.get('passwordConfirm');
      if (password !== passwordConfirm) {
        throw(new Error('passwords dont match'))
      }
      const userSignup = {
        username: email,
        password: password,
        passwordConfirm: passwordConfirm,
      }
      console.log('signup object', userSignup);
      const response = yield call(api, `/auth/register`, { method: 'post', data: userSignup })
      if (response.status === 201) {
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
        yield put(clearEmailSignup());
        yield put(clearPasswordSignup());
        yield put(clearPasswordConfirmSignup());
        // // places user response into redux store
        yield put(setUser(response.data.user));
        yield put(signupSuccess());
      } else {
        throw(new Error('request status failed'));
      }
    } catch(e) {
      console.log('Signup request failed')
      console.log('error:', e)
      yield put(signupFailure());
    }
}

export function* submitPaymentAsync() {
  try {
    console.log('Attempting payment submit...');
    const signUpPage = yield select(selectSignUpPage);
    const token = signUpPage.get('token').toJS();
    console.log('sagatoken', token);
    const response = yield call(api, '/v1/account/payment', { method: 'post', data: {token} });
    yield put(showSnackbar());
    yield put(submitPaymentSuccess());
    yield put(setPayment());
    console.log('updating user')
    const updatedUser = yield call(api, '/v1/account');
    yield put(setUser(updatedUser.data.user));
    console.log('Submit payment success');
  } catch(e) {
    console.log('Payment request failed');
    console.log('error:', e);
    yield put(submitPaymentFailure());
  }
}

export function* createEventAsync() {
  try {
    console.log('Attempting to create event');
    const userState = yield select(selectUser);
    const currentUser = userState.get('currentUser');
    const userId = currentUser.get('._id');
    const ordersState = yield select(selectOrders);
    const orders = ordersState.get('orders');
    const signupPageState = yield select(selectSignUpPage);
    const searchState = yield select(selectSearch);
    const occasion = searchState.get('occasion');
    const startDate = searchState.get('startDate');
    const zipCode = searchState.get('zipCode');
    const address = signupPageState.get('address');
    const city = signupPageState.get('city');
    const eventLocState = signupPageState.get('eventLocState');
    const location = {
      address,
      city,
      state: eventLocState,
      zip: zipCode,
    }
    const event = {
      created_by: userId,
      created_on: moment(),
      occasion,
      date: startDate,
      location,
      orders,
      status: 'REQUESTED',
    }
    console.log('event', event);
    const response = yield call(api, 'v1/event', { method: 'post', data: event });
    console.log('create event response', response);
    yield put(setEvent(response.data));
    console.log('Create event success');
    yield put(createEventSuccess());
    if (getParameterByName('next')) {
      if(getParameterByName('next') !== '/profile' && getParameterByName('next') !== '/messages') yield put(openModal());
      yield put(push(getParameterByName('next')));
    } else {
      yield put(push('/vendors'));
    }
    return;
  } catch(e) {
    console.log('Create event request failed', e);
    yield put(createEventFailure());
  }
}

export function* loginFBUserAsync() {
    try {
      console.log('Attempting FB Login...');
      const response = yield call(api, `/v1/account`)
      const user = response.data.user;
      const token = response.data.token;
      console.log('logging into Firebase with token:', token)
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
      console.log('Successfully logged into Firebase!')
      console.log('user from server', user)
      // clears login form from redux
      // places user response into redux store
      yield put(setUser(user));
      yield put(facebookLoginSuccess(user));
      const userState = yield select(selectUser);
      // check for payment method
      if (userState.get('currentUser') && userState.get('currentUser').get('customer_id')) {
        yield put(setPayment())
      }
      console.log('Facebook login success');
    } catch(e) {
      console.log('Login request failed');
      console.log('error:', e);
      yield put(facebookLoginFailure());
    }
}

export function* watchSignupAttempt() {
  console.log('redux-saga is running action app/SignUpPage/SIGNUP_ATTEMPT listener...');
  yield takeLatest('app/SignUpPage/SIGNUP_ATTEMPT', signupUserAsync);
}

export function* watchSubmitPayment() {
  console.log('redux-saga is running action app/auth/SUBMIT_PAYMENT listener...');
  yield takeLatest('app/auth/SUBMIT_PAYMENT', submitPaymentAsync);
}

export function* watchCreateEvent() {
  console.log('redux-saga is running action app/event/CREATE_EVENT listener...');
  yield takeEvery('app/event/CREATE_EVENT', createEventAsync);
}

export function* watchFacebookLoginAttempt() {
  console.log('redux-saga is running action app/auth/FB_LOGIN_ATTEMPT listener...');
  yield takeLatest('app/SignUpPage/FB_LOGIN_ATTEMPT', loginFBUserAsync);
}

// cancel watchers on LOCATION_CHANGE

export function* rootSaga() {
  const signupAttemptWatcher = yield fork(watchSignupAttempt);
  const paymentAttemptWatcher = yield fork(watchSubmitPayment);
  const createEventWatcher = yield fork(watchCreateEvent);
  const facebookLoginAttemptWatcher = yield fork(watchFacebookLoginAttempt);
  yield take(LOCATION_CHANGE);
  yield cancel(signupAttemptWatcher);
  yield cancel(paymentAttemptWatcher);
  yield cancel(createEventWatcher);
  yield cancel(facebookLoginAttemptWatcher);
  console.log('canceled signup page watchers')
}

// All sagas to be loaded
export default [
  rootSaga,
];
