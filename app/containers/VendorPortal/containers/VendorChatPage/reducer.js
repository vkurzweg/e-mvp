/*
 *
 * VendorChatPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SET_VENDOR_CHATS,
  SET_CHAT_ID,
  SET_CHAT,
  SET_MESSAGE_INPUT,
  CLEAR_MESSAGE_INPUT,
  SET_ORDER,
  SHOW_CHATBOX,
  SHOW_CHATFEED,
} from './constants';

const initialState = fromJS({
  isChatBoxShowing: false,
  isChatFeedShowing: true,
});

function vendorChatPageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_VENDOR_CHATS:
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
      return state.set('isChatBoxShowing', fromJS(true))
                  .set('isChatFeedShowing', fromJS(false));
    case SHOW_CHATFEED:
      return state.set('isChatFeedShowing', fromJS(true))
                  .set('isChatBoxShowing', fromJS(false));
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default vendorChatPageReducer;
