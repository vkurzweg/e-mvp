import { take, call, put, select } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import axios from 'axios';
import { setVendor, fetchVendorSuccess, fetchVendorFailure, createOrder, createOrderSuccess, createOrderFailure, setOrder } from './actions';
import { browserHistory } from 'react-router';
import { selectLocationState } from 'containers/App/selectors';
import { selectVendors, selectVendorPage, selectOrders, selectUser } from './selectors';
import { toJS } from 'immutable';
import moment from 'moment';
import { db, ref, fb } from 'utils/firebase-config';
import api from 'utils/axios-helpers';
// Individual exports for testing
export function* defaultSaga() {
  return;
}

export function* createFirebaseOrderChat() {
  try {
    console.log('Creating order chat')
    const userState = yield select(selectUser);
    const ordersState = yield select(selectOrders);
    const orderId = ordersState.get('currentOrder')._id
    const vendorId = ordersState.get('currentOrder').vendor
    const firebaseUser = fb.auth().currentUser
    const chat = {
      uid: firebaseUser.uid,
      vendorId,
      messages: {}
    }
    // creates firebase chat for order
    db.ref('chats').child(orderId).set(chat);
    db.ref('users').child(firebaseUser.uid).child('chats').push(orderId)

  } catch(e) {
    console.log('order chat failed')
    console.log(e)
  }
}

export function* watchOrderSuccess() {
  console.log('redux-saga is running action app/orders/CREATE_ORDER_SUCCESS listener...')
    yield takeEvery('app/orders/CREATE_ORDER_SUCCESS', createFirebaseOrderChat);
}

// All sagas to be loaded
export default [
  watchOrderSuccess,
];
