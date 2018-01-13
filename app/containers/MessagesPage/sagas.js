import { take, call, put, select, cancel, fork } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { takeEvery, takeLatest } from 'redux-saga';
import axios from 'axios';
import api from 'utils/axios-helpers';
import firebase from 'firebase';
import { db } from 'utils/firebase-config';
import { selectAuth, selectMessagesPage, selectEvent } from './selectors';
import { setUserChats, setChat, clearMessageInput, setChatId, setOrder, setUserEvents } from './actions';
import { store } from 'app';

// Individual exports for testing
export function* fetchUserChatsAsync() {
  try {
    console.log('attempting to fetch user messages')
    const userEvents = yield call(api, `/v1/event`)
    console.log('userEvents', userEvents.data)
    yield put(setUserEvents(userEvents.data))
    const auth = yield select(selectAuth);
    const messagesPage = yield select(selectMessagesPage);
    const event = yield select(selectEvent);
    const uid = auth.get('currentUser').get('_id')
    const eventId = messagesPage.get('event').get('_id');
    console.log('uid', uid)
    console.log('eid', eventId)
    let userChats = yield new Promise((resolve, reject) => {
      let chatIds;
      db.ref(`users/${uid}/${eventId}/chats`).once('value', snapshot => {
        console.log(snapshot.val())
        let keys = Object.keys(snapshot.val());
        console.log('keys', keys);
        let chats;
        chats = keys.map( key => {
          return snapshot.val()[key];
        });
        resolve(chats.reverse());
      })
    })
    console.log('user chats', userChats)
    const lastChatId = userChats[0].chatId;
    yield put(setUserChats(userChats));
    yield put(setChatId(lastChatId));
    let lastChat = yield new Promise((resolve, reject) => {
      db.ref(`chats/${lastChatId}/messages`).on('child_added', snapshot => {
        const message = snapshot.val()
        store.dispatch(setChatId(lastChatId))
        resolve(lastChatId)
      });
    });
  } catch(e) {
    console.log('failed to get vendor messages', e)
  }
}

export function* fetchChatMessagesAsync() {
  try {
    console.log('attempting to fetch chat messages for chat id:')
    const messagesPage = yield select(selectMessagesPage);
    const chatId = messagesPage.get('chat').get('chatId')
    console.log('chatId in saga', chatId)
    let userChat = yield new Promise((resolve, reject) => {
      let chat;
      db.ref('chats').child(chatId).on('value', snapshot => {
        console.log('chat snapshot', snapshot.val())
        chat = snapshot.val();
        resolve(chat);
      });
    })
    const response = yield call(api, `v1/order/${chatId}`)
    const order = response.data
    console.log('userchat', userChat)
    yield put(setChat(userChat));
    yield put (setOrder(order));
  } catch(e) {
    console.log('failed to get chat messages', e)
  }
}

export function* sendMessageToFirebaseAsync() {
  try {
    console.log('attempting to save message')
    const messagesPage = yield select(selectMessagesPage);
    const auth = yield select(selectAuth);
    const uid = auth.get('currentUser').get('_id')
    const chatId = messagesPage.get('chat').get('chatId')
    const textInput = messagesPage.get('message');
    if ( textInput !== '') {
      console.log(chatId, textInput)
      const message = {
        posted_by: uid,
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
  console.log('redux-saga is running action app/MessagesPage/SET_CURRENT_EVENT listener...');
  yield takeEvery('app/MessagesPage/SET_CURRENT_EVENT', fetchUserChatsAsync);
}

export function* watchSetChatId() {
  console.log('redux-saga is running action app/MessagesPage/SET_CHAT_ID listener...');
  yield takeLatest('app/MessagesPage/SET_CHAT_ID', fetchChatMessagesAsync);
}

export function* watchSendMessage() {
  console.log('redux-saga is watching action app/MessagesPage/SEND_MESSAGE...');
  yield takeLatest('app/MessagesPage/SEND_MESSAGE', sendMessageToFirebaseAsync)
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
  console.log('canceled Messages page watchers')
}

// All sagas to be loaded
export default [
  rootSaga,
];
