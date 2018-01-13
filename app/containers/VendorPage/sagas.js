import { take, call, put, select, cancel, fork } from 'redux-saga/effects';
import { takeEvery, takeLatest } from 'redux-saga';
import axios from 'axios';
import { setVendor, fetchVendorSuccess, fetchVendorFailure, createOrder, createOrderSuccess, createOrderFailure, setOrder, clearOrder, clearDelivery, openErrorModal, showSnackbar, clearSnackbar } from './actions';
import { goBack, push } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { selectLocationState } from 'containers/App/selectors';
import { selectVendorsDomain, selectVendorPageDomain, selectOrdersDomain, selectUserDomain, selectEventDomain } from './selectors';
import { toJS } from 'immutable';
import moment from 'moment';
import { db, ref, fb } from 'utils/firebase-config';
import api from 'utils/axios-helpers';
import { LOCATION_CHANGE } from 'react-router-redux';

// Individual exports for testing
export function* fetchVendorAsync() {
  try {
    console.log('Attempting to fetch vendor');
    const currentPath = window.location.pathname;
    const vendorId = currentPath.substr(currentPath.lastIndexOf('/') + 1)
    console.log('vendorId', vendorId)
    // selects parts of redux store
    // const vendorsPage = yield select(selectVendorPageDomain());
    // const searchState = yield select(selectSearch);
    // hard coded vendorId
    const response = yield call(api, `/v1/vendor/${vendorId}`);
    const receivedVendor = response.data;
    // fake vendor
    console.log('vendor response', receivedVendor);
    // place products into redux store
    yield put(setVendor(receivedVendor))
    yield put(fetchVendorSuccess());
    return;
  } catch(e) {
    console.log('fetch vendor request failed');
    console.log(e)
    yield put(fetchVendorFailure());
  }
}

export function* fetchProductsAsync() {
  try {
    console.log('Attempting to fetch products');
    // selects parts of redux store
    const vendorsPage = yield select(selectVendorPageDomain());
    const searchState = yield select(selectSearch);
    const searchQuery = {
      params: {
        occasion: searchState.get('occasion'),
        // vendorId: vendorid here
      }
    }
    const response = yield call(api, '/v1/product', searchQuery);
    // const response = vendors;
    const receivedProducts = response.data;
    console.log('vendors response', response);
    // place products into redux store
    // yield put(setProducts(receivedProducts))
    // yield put(fetchProductsSuccess());
  } catch(e) {
    console.log('fetch products request failed', e);
    // yield put(fetchProductsFailure());
  }
}

export function* createOrderAsync() {
  try {
    console.log('Attempting to create order');
    const currentPath = window.location.pathname;
    const vendorId = currentPath.substr(currentPath.lastIndexOf('/') + 1)
    const vendorsPage = yield select(selectVendorPageDomain());
    const ordersState = yield select(selectOrdersDomain());
    const eventState = yield select(selectEventDomain());
    const userState = yield select(selectUserDomain());
    const currentUser = userState.get('currentUser');
    const isDeliveryAdded = ordersState.get('isDeliveryAdded');
    const currentEventId = eventState.get('event')._id;
    const vendorsState = yield select(selectVendorsDomain());
    const currentVendorId = vendorsState.get('currentVendor')._id;
    const orderSlip = vendorsPage.get(vendorId).get('orderSlip').toJS();
    const productNotes = vendorsPage.get('productNotes');
    const productsIds = orderSlip.map((item, idx, orderSlip) => {
      return item.product._id;
    });
    const quantities = orderSlip.map((item, idx, orderSlip) => {
      return item.quantity;
    });
    const order_products = productsIds.map((productId) => {
      return { product: productId };
    })
    quantities.forEach((quantity, idx) => {
      order_products[idx].quantity = quantity
    })
    productNotes.forEach((note, idx) => {
      order_products[idx].custom_notes = note
    })
    console.log('order_products:', order_products)
    const order = {
      vendor: currentVendorId,
      order_products,
      event: currentEventId,
      isDeliveryAdded,
    }
    const response = yield call(api, `/v1/event/${currentEventId}/order`, { method: 'post', data: order });
    console.log('response', response);
    const orderId = response.data._id;
    yield put(setOrder(orderId));
    yield put(clearDelivery());
    yield put(showSnackbar());
    yield put(createOrderSuccess());
    return;
  } catch(e) {
      console.log('create order request failed', e);
      yield put(openErrorModal());
      yield put(createOrderFailure());
    }
}

export function* createFirebaseOrderChat() {
  try {
    console.log('Creating order chat')
    const userState = yield select(selectUserDomain());
    const ordersState = yield select(selectOrdersDomain());
    const vendorsState = yield select(selectVendorsDomain());
    const eventState = yield select(selectEventDomain());
    const currentEventId = eventState.get('event')._id;
    const currentUserPhoto = userState.get('currentUser').get('photo')
    const orderId = ordersState.get('currentOrder');
    const vendorId = vendorsState.get('currentVendor')._id
    const vendorName = vendorsState.get('currentVendor').name
    const vendorPicture = vendorsState.get('currentVendor').photos[0]
    const firebaseId = userState.get('currentUser').get('firebaseId')
    const username = userState.get('currentUser').get('username')
    console.log('asd', userState.get('currentUser'))
    const userId = userState.get('currentUser').get('_id')
    const chat = {
      uid: userId,
      vendorId,
      messages: {}
    }
    const vendorChat = {
      chatId: orderId,
      vendorName,
      username,
      customerPicture: currentUserPhoto,
    }
    const userChat = {
      chatId: orderId,
      vendorName,
      vendorPicture,
    }
    console.log('vendorChat', vendorChat)
    console.log('chat', chat)
    // creates firebase chat for order
    // refactor into promise.all and handle reject
    const createChatOrder = yield new Promise((resolve, reject) => {
      db.ref(`chats`).child(orderId).set(chat, (err) => {
        (err) ? console.log(err) : resolve('chat order created');
      });
    })
    console.log(createChatOrder)
    const createUserChat = yield new Promise((resolve, reject) => {
      db.ref(`users/${userId}/${currentEventId}/chats/${orderId}`).set(userChat, err => {
        (err) ? console.log(err) : resolve('user chat created');
      });
    })
    console.log(createUserChat)
    const createVendorChat = yield new Promise((resolve, reject) => {
      db.ref(`vendors/${vendorId}/chats/${orderId}`).set(vendorChat, err => {
        (err) ? console.log(err) : resolve('vendor chat created');
      });
    })
    Promise.all([createChatOrder, createUserChat, createVendorChat])
      .then( () => {
        browserHistory.push('/orders');
      })
    return;
  } catch(e) {
    console.log('order chat failed')
    console.log(e)
  }
}

// watcher sagas
export function* watchFetchVendor() {
  console.log('redux-saga is running action app/vendors/FETCH_VENDOR listener...');
  yield takeEvery('app/vendors/FETCH_VENDOR', fetchVendorAsync);
}

export function* watchFetchProducts() {
  console.log('redux-saga is running action app/vendors/FETCH_PRODUCTS listener...');
  yield takeEvery('app/vendors/FETCH_PRODUCTS', fetchProductsAsync);
}

export function* watchCreateOrder() {
  console.log('redux-saga is running action app/orders/CREATE_ORDER listener...');
  yield takeEvery('app/orders/CREATE_ORDER', createOrderAsync);
}

export function* watchOrderSuccess() {
  console.log('redux-saga is running action app/orders/CREATE_ORDER_SUCCESS listener...')
  yield takeEvery('app/orders/CREATE_ORDER_SUCCESS', createFirebaseOrderChat);
}

// cancel watchers on LOCATION_CHANGE

export function* rootSaga() {
  const fetchVendorWatcher = yield fork(watchFetchVendor);
  const fetchProductsWatcher = yield fork(watchFetchProducts);
  const createOrderWatcher = yield fork(watchCreateOrder);
  const orderSuccessWatcher = yield fork(watchOrderSuccess);
  yield take(LOCATION_CHANGE);
  yield cancel(fetchVendorWatcher);
  yield cancel(fetchProductsWatcher);
  yield cancel(createOrderWatcher);
  yield cancel(orderSuccessWatcher);
  console.log('canceled vendor page watchers')
}

// All sagas to be loaded
export default [
  rootSaga,
];
