import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { takeEvery, takeLatest } from 'redux-saga';
import axios from 'axios';
import api from 'utils/axios-helpers';
import { selectPasswordResetPage } from './selectors';
import { resetRequestSuccess, resetRequestFailure } from './actions';
import { LOCATION_CHANGE } from 'react-router-redux';


// Individual exports for testing
export function* resetPasswordRequestAsync() {
  try {
    console.log('attempting to send reset password email')
    const passwordResetState = yield select(selectPasswordResetPage);
    const email = passwordResetState.get('email')
    const resetQuery = {
      method: 'post',
      data: {email},
    }
    const resetResponse = yield call(api, `/auth/forgot/vendor`, resetQuery);
    console.log(resetResponse)
    yield put(resetRequestSuccess());
  } catch(e) {
    console.log('failed to send password reset email', e)
    yield put(resetRequestFailure());
  }
}

// Watcher Sagas
export function* watchResetPasswordRequest() {
  console.log('redux-saga is running action app/VendorPasswordResetPage/RESET_REQUEST listener...');
  yield takeEvery("app/VendorPasswordResetPage/RESET_REQUEST", resetPasswordRequestAsync);
}


// cancel watchers on LOCATION_CHANGE

export function* rootSaga() {
  const resetPasswordRequest = yield fork(watchResetPasswordRequest);
  yield take(LOCATION_CHANGE);
  yield cancel(resetPasswordRequest);
  console.log('canceled vendor password reset watchers')
}

// All sagas to be loaded
export default [
  rootSaga,
];
