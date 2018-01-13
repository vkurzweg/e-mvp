
import { fromJS } from 'immutable';
import {
} from './constants';

const initialState = fromJS({
});

function vendorsPageReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default vendorsPageReducer;
