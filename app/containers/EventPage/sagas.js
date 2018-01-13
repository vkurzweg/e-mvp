import { take, call, put, select, cancel, fork } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { takeEvery } from 'redux-saga';
import axios from 'axios';
import { createEvent, createEventSuccess, createEventFailure, setEvent } from './actions';
import { selectSearch, selectEvent, selectUser, selectOrders, selectEventPage } from './selectors';
import { toJS } from 'immutable';
import api from 'utils/axios-helpers';
import moment from 'moment';
import { goBack } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { getParameterByName } from 'utils/url-helpers';

export function* createEventAsync() {
  try {
    console.log('Attempting to create event');
    const userState = yield select(selectUser);
    const currentUser = userState.get('currentUser');
    console.log('currentUser:', currentUser)
    const userId = currentUser.get('._id');
    const accountResponse = yield call(api, `v1/account`);
    const ordersState = yield select(selectOrders);
    const orders = ordersState.get('orders');
    const eventPageState = yield select(selectEventPage);
    const searchState = yield select(selectSearch);
    const occasion = searchState.get('occasion');
    const startDate = searchState.get('startDate');
    const zipCode = searchState.get('zipCode');
    const address = eventPageState.get('address');
    const city = eventPageState.get('city');
    const eventLocState = eventPageState.get('eventLocState');
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
      status: 'REQUESTED',
    }
    console.log('event', event);
    const response = yield call(api, 'v1/event', { method: 'post', data: event });
    console.log('create event response', response);
    yield put(setEvent(response.data));
    yield put(createEventSuccess());
    if (getParameterByName('next')) {
      browserHistory.push(getParameterByName('next'));
    } else {
      browserHistory.push('/vendors');
    }
    return;
  } catch(e) {
    console.log('Create event request failed', e);
    yield put(createEventFailure());
  }
}


// watcher sagas
export function* watchCreateEvent() {
  console.log('redux-saga is running action app/event/CREATE_EVENT listener...');
  yield takeEvery('app/event/CREATE_EVENT', createEventAsync);
}

// cancel watchers on LOCATION_CHANGE

export function* rootSaga() {
  const createEventWatcher = yield fork(watchCreateEvent);
  yield take(LOCATION_CHANGE);
  yield cancel(createEventWatcher);
  console.log('canceled event page watchers')
}

// All sagas to be loaded
export default [
  rootSaga,
];
