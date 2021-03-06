/*
 *
 * MessagesPage actions
 *
 */


import {
  DEFAULT_ACTION,
  FETCH_MESSAGES,
  SET_USER_CHATS,
  SET_CHAT,
  SET_CHAT_ID,
  SET_MESSAGE_INPUT,
  CLEAR_MESSAGE_INPUT,
  SEND_MESSAGE,
  SET_ORDER,
  SHOW_CHATBOX,
  SHOW_CHATFEED,
  SET_CURRENT_EVENT,
  SET_USER_EVENTS,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function fetchMessages() {
  return {
    type: FETCH_MESSAGES,
  };
}

export function setUserChats(chats) {
  return {
    type: SET_USER_CHATS,
    chats,
  };
}

export function setChat(chat) {
  return {
    type: SET_CHAT,
    chat,
  };
}

export function setChatId(chatId) {
  return {
    type: SET_CHAT_ID,
    chatId,
  };
}

export function setMessageInput(text) {
  return {
    type: SET_MESSAGE_INPUT,
    text,
  };
}

export function clearMessageInput() {
  return {
    type: CLEAR_MESSAGE_INPUT,
  };
}

export function sendMessage() {
  return {
    type: SEND_MESSAGE,
  };
}

export function setOrder(order) {
  return {
    type: SET_ORDER,
    order,
  };
}

export function showChatBox() {
  return {
    type: SHOW_CHATBOX,
    payload: true,
  };
}

export function showChatFeed() {
  return {
    type: SHOW_CHATFEED,
    payload: true,
  };
}

export function setCurrentEvent(event) {
  return {
    type: SET_CURRENT_EVENT,
    event,
  }
}

export function setUserEvents(userEvents) {
  return {
    type: SET_USER_EVENTS,
    userEvents,
  }
}
