/*
 *
 * MessagesPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_USER_CHATS,
  SET_CHAT_ID,
  SET_CHAT,
  SET_MESSAGE_INPUT,
  CLEAR_MESSAGE_INPUT,
  SET_ORDER,
  SHOW_CHATBOX,
  SHOW_CHATFEED,
  SET_CURRENT_EVENT,
  SET_USER_EVENTS,
} from './constants';

const initialState = fromJS({
  currentPath: '/messages',
  isChatBoxShowing: false,
  isChatFeedShowing: true,
  event: {},
  userEvents:[],
});

function messagesPageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_CHATS:
      return state.set('currentChats', action.chats);
    case SET_CHAT:
      return state.setIn(['chat', 'chat'], action.chat);
    case SET_CHAT_ID:
      return state.setIn(['chat', 'chatId'], action.chatId);
    case SET_MESSAGE_INPUT:
      return state.set('message', action.text);
    case CLEAR_MESSAGE_INPUT:
      return state.set('message', '');
    case SET_ORDER:
      return state.set('order', action.order);
    case SHOW_CHATBOX:
      return state.set('isChatBoxShowing', fromJS(action.payload))
                  .set('isChatFeedShowing', fromJS(false));
    case SHOW_CHATFEED:
      return state.set('isChatFeedShowing', fromJS(true))
                  .set('isChatBoxShowing', fromJS(false));
    case SET_CURRENT_EVENT:
      return state.set('event', fromJS(action.event))
    case SET_USER_EVENTS:
      return state.set('userEvents', fromJS(action.userEvents));
    default:
      return state;
  }
}

export default messagesPageReducer;
