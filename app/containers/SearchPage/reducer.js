/*
 *
 * SearchPage reducer
 *
 */
import { fromJS } from 'immutable';
import {
  SET_LOCATION,
} from './constants';

const initialState = fromJS({
  location: '/vendors/',
});

function searchPageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOCATION:
      return state.set('location', fromJS(action.location));
    default:
      return state;
  }
}

export default searchPageReducer;
