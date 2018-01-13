import { take, call, put, select, cancel, fork } from 'redux-saga/effects';
import { takeEvery, takeLatest } from 'redux-saga';
import axios from 'axios';
import { selectUser } from './selectors';
import { submitPaymentSuccess, submitPaymentFailure, setPayment, showSnackbar } from './actions';
import api from 'utils/axios-helpers';
import { toJS } from 'immutable';
import { goBack } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { LOCATION_CHANGE } from 'react-router-redux';
import { getParameterByName } from 'utils/url-helpers';

export function* submitPaymentAsync() {
  try {
    console.log('Attempting payment submit...');
    const userState = yield select(selectUser);
    const token = userState.get('token');
    console.log('sagatoken', token);
    const response = yield call(api, '/v1/account/payment', { method: 'post', data: {token} });
    yield put(submitPaymentSuccess());
    yield put(setPayment());
    yield put(showSnackbar());
    if (getParameterByName('next')) {
      browserHistory.push(getParameterByName('next'));
    } else {
      browserHistory.push('/vendors');
    }
    console.log('Submit payment success');
  } catch(e) {
    console.log('Payment request failed');
    console.log('error:', e);
    yield put(submitPaymentFailure());
  }
}

export function* watchSubmitPayment() {
  console.log('redux-saga is running action app/auth/SUBMIT_PAYMENT listener...');
  yield takeLatest('app/auth/SUBMIT_PAYMENT', submitPaymentAsync);
}


export function* rootSaga() {
  const paymentAttemptWatcher = yield fork(watchSubmitPayment);
  yield take(LOCATION_CHANGE);
  yield cancel(paymentAttemptWatcher);
  console.log('canceled signup page watchers')
}

// All sagas to be loaded
export default [
  rootSaga,
];
