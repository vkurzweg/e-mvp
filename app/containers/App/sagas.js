import { take, call, put, select } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { takeEvery, delay, takeLatest } from 'redux-saga';
import axios from 'axios';
import api from 'utils/axios-helpers';
import moment from 'moment';
import { selectEvent, selectUser } from './selectors';
import clearAuthState from 'utils/LocalStorage';
import { setEvent, setUser, loginSuccess, setPayment, loadEvent, appLoaded, logout, logoutSuccess, logoutFailure } from './actions';
import { push } from 'react-router-redux';
import { fb } from 'utils/firebase-config';

export function* loadEventAsync() {
  try {
    console.log('Attempting to load event');
    const eventState = yield select(selectEvent)
    // Check for event in redux store
    if (!eventState.get('event')) {
      const response = yield call(api, 'v1/event/current');
      const currentEvent = response.data;
      let date = currentEvent.date;
      date = moment(date).format('MM/DD/YYYY');
      currentEvent.date = date;
      if (currentEvent) yield put(setEvent(currentEvent))
      yield call(delay, 500)
      yield put(appLoaded())
    }
    return;
  } catch(e) {
    console.log('Load event request failed', e);
    yield call(delay, 500)
    yield put(appLoaded())
    return;
  }
}

export function* loadUserAsync(action) {
  try {
    console.log('Attempting to load user');
    const response = yield call(api, 'v1/account');
    const currentUser = response.data.user;
    if (response.status === 200) {
      console.log('logging into firebase')
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
    }
    if (currentUser) yield put(loginSuccess(currentUser));
    if (currentUser) yield put(loadEvent());
    if (currentUser.customer_id) yield put(setPayment())
    return;
  } catch(e) {
    console.log('Load user request failed', e);
    yield call(delay, 500)
    yield put(appLoaded());
    return;
  }
}

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

// watcher sagas
export function* watchLogout() {
  console.log('redux-saga is running action app/auth/LOGOUT listener...');
  yield takeLatest('app/auth/LOGOUT', logoutAsync);
}

export function* watchLoadEvent() {
  console.log('redux-saga is running action app/LOAD_EVENT listener...');
  yield takeEvery('app/LOAD_EVENT', loadEventAsync);
}

export function* watchLoadUser() {
  console.log('redux-saga is running action app/LOAD_USER listener...');
  yield takeEvery('app/LOAD_USER', loadUserAsync);
}

// All sagas to be loaded
export default [
  watchLoadEvent,
  watchLoadUser,
  watchLogout,
];
