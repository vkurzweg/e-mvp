import { take, call, put, select, cancel, fork } from 'redux-saga/effects';
import { takeEvery, takeLatest } from 'redux-saga';
import axios from 'axios';
import api from 'utils/axios-helpers';
import firebase from 'firebase';
import { db } from 'utils/firebase-config';
import { selectVendorAuth, selectVendorsChatPage } from './selectors';
import { setVendorChats, setChat, clearMessageInput, setOrder, setChatId } from './actions';
import { LOCATION_CHANGE } from 'react-router-redux';

// Individual exports for testing
export function* fetchVendorMessagesAsync() {
  try {
    console.log('attempting to fetch vendor messages')
    const vendorAuth = yield select(selectVendorAuth);
    const vendorId = vendorAuth.get('currentVendor').get('vendor')
    console.log('vendorId', vendorId)
    let vendorChats = yield new Promise((resolve, reject) => {
      let chatIds;
      db.ref(`vendors/${vendorId}/chats`).once('value', snapshot => {
        let keys = Object.keys(snapshot.val());
        console.log('keys', keys);
        let chats;
        chats = keys.map( key => {
          return snapshot.val()[key];
        });
        console.log('keys', keys)
        resolve(chats.reverse());
      })
    })
    console.log('vendor chats', vendorChats)
    const lastChatId = vendorChats[0].chatId;
    yield put(setVendorChats(vendorChats));
    yield put(setChatId(lastChatId));
  } catch(e) {
    console.log('failed to get vendor messages', e)
  }
}

export function* fetchChatMessagesAsync() {
  try {
    console.log('attempting to fetch chat messages for chat id:')
    const vendorsChatPage = yield select(selectVendorsChatPage);
    const chatId = vendorsChatPage.get('chat').get('chatId')
    console.log('chatId in saga', chatId)
    const vendorChat = yield new Promise((resolve, reject) => {
      let chat;
      db.ref('chats').child(chatId).on('value', snapshot => {
        chat = snapshot.val();
        resolve(chat)
      });
    })
    const response = yield call(api, `v1/order/${chatId}`)
    const order = response.data
    console.log('vendorchat', vendorChat)
    yield put(setChat(vendorChat));
    yield put (setOrder(order));
  } catch(e) {
    console.log('failed to get chat messages', e)
  }
}

export function* sendMessageToFirebaseAsync() {
  try {
    console.log('attempting to save message')
    const vendorsChatPage = yield select(selectVendorsChatPage);
    const vendorAuth = yield select(selectVendorAuth);
    const vendorId = vendorAuth.get('currentVendor').get('vendor')
    const chatId = vendorsChatPage.get('chat').get('chatId')
    const textInput = vendorsChatPage.get('message');
    if (textInput !== '') {
      console.log(chatId, textInput)
      const message = {
        posted_by: vendorId,
        text: textInput,
      };
      const newMessage = yield new Promise((resolve, reject) => {
        db.ref(`chats/${chatId}/messages`).push(message, (err) => {
          db.ref(`chats/${chatId}/lastMessage`).set(message, (err) => {
            resolve(message);
          })
        })
      });
      yield put(clearMessageInput())
    }
  } catch(e) {
    console.log('failed to save message', e)
  }
}

// Watcher Sagas
export function* watchFetchMessages() {
  console.log('redux-saga is running action app/VendorChatPage/FETCH_MESSAGES listener...');
  yield takeEvery('app/VendorChatPage/FETCH_MESSAGES', fetchVendorMessagesAsync);
}

export function* watchSetChatId() {
  console.log('redux-saga is running action app/VendorChatPage/SET_CHAT_ID listener...');
  yield takeLatest('app/VendorChatPage/SET_CHAT_ID', fetchChatMessagesAsync);
}

export function* watchSendMessage() {
  console.log('redux-saga is watching action app/VendorChatPage/SEND_MESSAGE...');
  yield takeLatest('app/VendorChatPage/SEND_MESSAGE', sendMessageToFirebaseAsync)
}

// cancel watchers on LOCATION_CHANGE

export function* rootSaga() {
  const fetchMessagesWatcher = yield fork(watchFetchMessages);
  const setChatIdWatcher = yield fork(watchSetChatId);
  const sendMessageWatcher = yield fork(watchSendMessage);
  yield take(LOCATION_CHANGE);
  yield cancel(fetchMessagesWatcher);
  yield cancel(setChatIdWatcher);
  yield cancel(sendMessageWatcher);
  console.log('canceled vendor chat page watchers')
}

// All sagas to be loaded
export default [
  rootSaga,
];
