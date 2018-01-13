/*
 *
 * EventPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_HOSTNAME,
  SET_ADDRESS,
  SET_CITY,
  SET_EVENTSTATE,
} from './constants';

const initialState = fromJS({
  hostName: '',
  address: '',
  city: '',
  eventLocState: '',
});

function eventPageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_HOSTNAME:
      return state.set('hostName', fromJS(action.hostName));
    case SET_ADDRESS:
      return state.set('address', fromJS(action.address));
    case SET_CITY:
      return state.set('city', fromJS(action.city));
    case SET_EVENTSTATE:
      return state.set('eventLocState', fromJS(action.eventLocState));
    default:
      return state;
  }
}

export default eventPageReducer;
