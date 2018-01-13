import { createSelector } from 'reselect';

/**
 * Direct selector to the messagesPage state domain
 */
const selectMessagesPage = (state) => state.get('messagesPage');
const selectAuth = (state) => state.get('auth');
const selectEvent = (state) => state.get('event');

export {
  selectAuth,
  selectMessagesPage,
  selectEvent,
};
