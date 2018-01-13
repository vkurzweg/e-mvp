import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { takeEvery, takeLatest } from 'redux-saga';
import axios from 'axios';
import api from 'utils/axios-helpers';
import { selectPasswordResetFormDomain } from './selectors';
import { changePasswordRequestSuccess, changePasswordRequestFailure } from './actions';
import { LOCATION_CHANGE } from 'react-router-redux';


// Individual exports for testing
export function* changePasswordRequestAsync() {
  try {
    console.log('attempting to change password')
    const pathname = window.location.pathname
    const token = pathname.substring(pathname.lastIndexOf("/") + 1);
    console.log(token)
    const passwordResetState = yield select(selectPasswordResetFormDomain());
    const password = passwordResetState.get('password')
    const passwordConfirm = passwordResetState.get('passwordConfirm')
    if ( password !== passwordConfirm) throw new Error('Passwords dont match')
    const resetQuery = {
      method: 'post',
      data: {password, passwordConfirm},
    }
    const resetResponse = yield call(api, `auth/reset/vendor/${token}`, resetQuery);
    yield put(changePasswordRequestSuccess());
  } catch(e) {
    console.log('failed to send password reset email', e)
    yield put(changePasswordRequestFailure());
  }
}

// Watcher Sagas
export function* watchChangePasswordRequest() {
  console.log('redux-saga is running action app/PasswordResetForm/CHANGE_PASSWORD_REQUEST listener...');
  yield takeEvery('app/PasswordResetForm/CHANGE_PASSWORD_REQUEST', changePasswordRequestAsync);
}


// cancel watchers on LOCATION_CHANGE

export function* rootSaga() {
  const changePasswordRequest = yield fork(watchChangePasswordRequest);
  yield take(LOCATION_CHANGE);
  yield cancel(changePasswordRequest);
  console.log('canceled vendor password reset form watchers')
}

// All sagas to be loaded
export default [
  rootSaga,
];
